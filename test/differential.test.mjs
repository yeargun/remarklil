import assert from "node:assert/strict"
import test from "node:test"

import {remark as official} from "remark"
import {remark as actual} from "../dist/remark.esm.js"
import {VFile} from "vfile"

const cases = [
  "",
  "# heading\n\nParagraph with *emphasis*, **strong**, and `code`.\n",
  "> quote\n>\n> - one\n> - two\n",
  "[label]: https://example.com \"title\"\n\n[label]\n",
  "```js meta\nconsole.log(1)\n```\n",
  "<div hidden>html</div>\n",
  "a  \nb\n",
]

test("parse and stringify match remark@15.0.1", () => {
  for (const markdown of cases) {
    const expectedTree = official().parse(markdown)
    const actualTree = actual().parse(markdown)
    assert.deepEqual(actualTree, expectedTree, markdown)
    for (const settings of [{}, {closeAtx: true}, {bullet: "+"}, {fences: false}, {setext: true}]) {
      assert.equal(actual().data("settings", settings).stringify(actualTree), official().data("settings", settings).stringify(expectedTree), `${markdown} ${JSON.stringify(settings)}`)
    }
  }
})

test("external plugins observe the same file, order, and output", () => {
  function plugin(label, trace) {
    return function () {
      return function (tree, file) {
        trace.push([label, file.path, tree.type])
        file.message(label, {line: 1, column: 1}, "test:plugin")
      }
    }
  }

  const officialTrace = []
  const actualTrace = []
  const officialFile = new VFile({path: "/tmp/readme.md", value: "*a*"})
  const actualFile = new VFile({path: "/tmp/readme.md", value: "*a*"})
  official().use(plugin("one", officialTrace)).use(plugin("two", officialTrace)).processSync(officialFile)
  actual().use(plugin("one", actualTrace)).use(plugin("two", actualTrace)).processSync(actualFile)

  assert.deepEqual(actualTrace, officialTrace)
  assert.equal(actualFile.value, officialFile.value)
  assert.deepEqual(actualFile.messages.map(({fatal, name, reason, ruleId, source}) => ({fatal, name, reason, ruleId, source})), officialFile.messages.map(({fatal, name, reason, ruleId, source}) => ({fatal, name, reason, ruleId, source})))
})
