import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { describe, it } from "node:test"
import { fromMarkdown } from "mdast-util-from-markdown"
import { gfmFromMarkdown } from "mdast-util-gfm"
import { gfm } from "micromark-extension-gfm"
import { remark } from "../dist/remark.esm.js"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")

function loadSpecCases() {
  const cases = []
  for (const file of ["commonmark.0.31.2.json", "gfm.0.29.json"]) {
    for (const test of JSON.parse(readFileSync(resolve(root, "test/specs", file), "utf8"))) {
      if (test.shouldFail) continue
      cases.push({
        file,
        example: test.example,
        markdown: test.markdown,
      })
    }
  }
  return cases
}

describe("official CommonMark + GFM corpus", () => {
  it("matches mdast-util-from-markdown for all 660 cases", () => {
    const cases = loadSpecCases()
    for (const test of cases) {
      const gfmCase = test.file.startsWith("gfm.")
      const extensions = gfmCase ? [gfm()] : []
      const mdastExtensions = gfmCase ? [gfmFromMarkdown()] : []
      const processor = remark()
        .data("micromarkExtensions", extensions)
        .data("fromMarkdownExtensions", mdastExtensions)
      const expected = fromMarkdown(test.markdown, { extensions, mdastExtensions })

      try {
        assert.deepEqual(processor.parse(test.markdown), expected)
      } catch (error) {
        error.message = `${test.file}#${test.example}: ${error.message}`
        throw error
      }
    }
    assert.equal(cases.length, 660)
  })
})
