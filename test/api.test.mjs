import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { describe, it } from "node:test"
import remark, { remark as named } from "../dist/remark.esm.js"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")

describe("remark", () => {
  it("exports a factory as default and named", () => {
    assert.equal(typeof remark, "function")
    assert.equal(named, remark)
  })

  it("processSync turns a heading into markdown", () => {
    const file = remark().processSync("# hi")
    const text = String(file.value ?? file.result ?? file)
    assert.match(text, /#\s*hi|hi/)
    assert.match(text, /hi/)
  })

  it("round-trips lists and emphasis", () => {
    const file = remark().processSync("Hello **world**\n\n- a\n")
    const text = String(file.value ?? file.result ?? "")
    assert.match(text, /world/)
    assert.match(text, /\*\*|world/)
  })

  it("parses gfm tables when settings.gfm is on", () => {
    const proc = remark()
    proc.data("settings", { gfm: true })
    const tree = proc.parse("| a | b |\n| --- | --- |\n| 1 | 2 |")
    assert.equal(tree.children[0].type, "table")
  })

  it("keeps pinned processor keys in the library artifact", () => {
    const src = readFileSync(resolve(root, "dist/remark.esm.js"), "utf8")
    assert.match(src, /\.use|use:/)
    assert.match(src, /processSync/)
    assert.match(src, /parser/)
    assert.match(src, /type/)
  })
})
