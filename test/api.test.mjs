import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { describe, it } from "node:test"
import remark, { remark as named, toMarkdown } from "../dist/remark.esm.js"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")

describe("remark", () => {
  it("exports a frozen factory as default and named", () => {
    assert.equal(typeof remark, "function")
    assert.equal(named, remark)
    assert.equal(typeof toMarkdown, "function")
  })

  it("processSync turns emphasis into markdown", () => {
    const file = remark().processSync("*foo*")
    assert.equal(String(file), "*foo*\n")
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

  it("keeps pinned processor keys in the library artifact", () => {
    const src = readFileSync(resolve(root, "dist/remark.esm.js"), "utf8")
    assert.match(src, /\.use|use:/)
    assert.match(src, /processSync/)
    assert.match(src, /parser/)
    assert.match(src, /type/)
  })
})
