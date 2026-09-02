import {createHash} from "node:crypto"
import {readFileSync, writeFileSync} from "node:fs"
import {dirname, resolve} from "node:path"
import {fileURLToPath} from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const mappings = [
  ["entry.lil", "369a0579775b9d0fa56b2de97885e526c139e010b18ba4d9d210a0159ece7176"],
  ["extend.lil", "5612b854f838998e9a0a78f43ae6bbcbe9e047558611e4f9787075debd4afc64"],
  ["host.lil", "ccbc7701c94e92ef1cbf4b453be931a75d7d860717ba73ead107cc599c48a7df"],
  ["plain.lil", "903533b020487768987eff2dfb90a0593b9c9008b998da6833baae7faa309c58"],
  ["trough.lil", "05cc761c387ce006c4c7f1787c201e8298103c1428fc29cb11b50276fe66f091"],
  ["vfile.lil", "37bcc3df5fb96c496f685cae6057edec453932fad428f3e7382412bc6ab8cf34"],
]
const sync = process.argv.includes("--sync")

for (const [name, expected] of mappings) {
  const source = resolve(root, "..", "unifiedlil", "src", name)
  const target = resolve(root, "src", "unified", name)
  const input = sync ? readFileSync(source) : readFileSync(target)
  const actual = createHash("sha256").update(input).digest("hex")
  if (actual !== expected) {
    throw new Error(`${sync ? source : target}: expected sha256 ${expected}, got ${actual}`)
  }
  if (sync) writeFileSync(target, input)
}

console.log(`${sync ? "synced" : "checked"} ${mappings.length} pinned shared Lil sources`)
