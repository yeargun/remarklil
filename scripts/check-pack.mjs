import { execFileSync } from "node:child_process"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"

const json = execFileSync("npm", ["pack", "--dry-run", "--json"], { encoding: "utf8" })
const result = JSON.parse(json)[0]
const file = "remark"
const required = new Set([
  `dist/${file}.esm.js`,
  `dist/${file}.cjs`,
  `dist/${file}.umd.js`,
  `dist/${file}.closed.js`,
  `dist/${file}.d.ts`,
  "LICENSE",
  "NOTICE.md",
  "README.md",
])
const files = new Set(result.files.map(({ path }) => path))
for (const path of required) {
  if (!files.has(path)) throw new Error(`npm tarball is missing ${path}`)
}
for (const path of [`dist/${file}.test.js`, `dist/${file}.raw.js`, `dist/${file}.closed.raw.js`]) {
  if (files.has(path)) throw new Error(`npm tarball contains test-only artifact ${path}`)
}
const manifest = JSON.parse(readFileSync("package.json", "utf8"))
if (manifest.name !== "@itslil/remark") throw new Error("unexpected package name")
assert.deepEqual(Object.keys(await import("@itslil/remark")), ["remark"])
for (const format of ["esm.js", "cjs", "umd.js", "closed.js"]) {
  assert.doesNotMatch(readFileSync(`dist/${file}.${format}`, "utf8"), /(?:from|require\()\s*["']vfile["']/)
}
const dependencies = Object.keys(manifest.dependencies ?? {})
if (dependencies.length !== 0) {
  throw new Error(`package must not have runtime dependencies: ${dependencies.join(", ")}`)
}
console.log(`npm pack: ${result.entryCount} files, ${result.size} bytes packed, ${result.unpackedSize} bytes unpacked`)
