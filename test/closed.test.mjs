import assert from "node:assert/strict"
import { existsSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { describe, it } from "node:test"
import { remark } from "../dist/remark.closed.js"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")

describe("remark closed", () => {
  it("ships a closed artifact with the upstream export", async () => {
    assert.equal(existsSync(resolve(root, "dist/remark.closed.js")), true)
    assert.equal(typeof remark, "function")
    assert.deepEqual(Object.keys(await import("../dist/remark.closed.js")), ["remark"])
  })

  it("keeps the embedded processor operational", () => {
    assert.equal(String(remark().processSync("*foo*")), "*foo*\n")
  })
})
