import assert from "node:assert/strict"
import { createRequire } from "node:module"
import { readFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { describe, it } from "node:test"
import { VFile } from "vfile"
import { remark } from "../dist/remark.esm.js"
import * as upstreamRemark from "remark"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const commonjs = createRequire(import.meta.url)("@itslil/remark")

describe("remark", () => {
  it("exports only the upstream frozen factory", async () => {
    assert.equal(typeof remark, "function")
    assert.deepEqual(Object.keys(await import("../dist/remark.esm.js")), Object.keys(upstreamRemark))
    assert.doesNotMatch(readFileSync(resolve(root, "dist/remark.cjs"), "utf8"), /require\(["']vfile["']\)/)
  })

  it("processSync turns emphasis into markdown", () => {
    const file = remark().processSync("*foo*")
    assert.equal(file.constructor.name, "VFile")
    assert.equal(typeof file.message, "function")
    assert.equal(String(file), "*foo*\n")
    assert.equal(String(commonjs.remark().processSync("*foo*")), "*foo*\n")
  })

  it("preserves caller-provided VFile identity in CommonJS", () => {
    const file = new VFile("*foo*")
    const result = commonjs.remark().processSync(file)

    assert.equal(result, file)
    assert.equal(result instanceof VFile, true)
  })

  it("preserves caller-provided VFile identity in ESM", () => {
    const file = new VFile("*foo*")
    assert.equal(remark().processSync(file), file)
  })

  it("processSync honors settings.closeAtx", () => {
    const file = remark().data("settings", { closeAtx: true }).processSync("# foo")
    assert.equal(String(file), "# foo #\n")
  })

  it("round-trips lists and emphasis", () => {
    const file = remark().processSync("Hello **world**\n\n- a\n")
    const text = String(file)
    assert.match(text, /world/)
    assert.match(text, /\*\*/)
  })

  it("decodes byte input as UTF-8", () => {
    const bytes = new Uint8Array([0x23, 0x20, 0xc3, 0xa9])
    assert.deepEqual(remark().parse(bytes), remark().parse("# \u00e9"))
    assert.deepEqual(remark().parse({ value: bytes }), remark().parse("# \u00e9"))
  })

  it("passes upstream-compatible file metadata to parsers", () => {
    let received
    const input = { value: "a", cwd: "/tmp", path: "/tmp/input.md" }

    remark()
      .use(function () {
        this.parser = function (document, file) {
          received = { document, cwd: file.cwd, path: file.path, history: file.history }
          return { type: "root", children: [] }
        }
      })
      .parse(input)

    assert.deepEqual(received, {
      document: "a",
      cwd: "/tmp",
      path: "/tmp/input.md",
      history: ["/tmp/input.md"],
    })
  })

  it("does not fall back from truthy invalid parser/compiler fields", () => {
    assert.throws(
      () =>
        remark()
          .use(function () {
            this.parser = {}
            this.Parser = () => ({ type: "root", children: [] })
          })
          .parse(""),
      /Cannot `parse` without `parser`/,
    )

    assert.throws(
      () =>
        remark()
          .use(function () {
            this.compiler = {}
            this.Compiler = () => ""
          })
          .stringify({ type: "root", children: [] }),
      /Cannot `stringify` without `compiler`/,
    )
  })

  it("exposes unified's inherited copy API", () => {
    const processor = remark().data("example", { nested: true })
    const copy = processor.copy()

    assert.equal(Object.hasOwn(processor, "use"), false)
    assert.equal(typeof copy.copy, "function")
    assert.deepEqual(copy.data("example"), { nested: true })
    assert.notEqual(copy.data("example"), processor.data("example"))
  })

  it("keeps pinned processor keys in the library artifact", () => {
    const src = readFileSync(resolve(root, "dist/remark.esm.js"), "utf8")
    assert.match(src, /\.use|use:/)
    assert.match(src, /processSync/)
    assert.match(src, /parser/)
    assert.match(src, /type/)
  })
})
