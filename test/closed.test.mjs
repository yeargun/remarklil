import assert from "node:assert/strict"
import { existsSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { describe, it } from "node:test"
import remark, { remark as named } from "../dist/remark.closed.js"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")

describe("remark closed", () => {
  it("ships a closed artifact with named exports", () => {
    assert.equal(existsSync(resolve(root, "dist/remark.closed.js")), true)
    assert.equal(typeof named, "function")
    assert.equal(typeof remark, "function")
    assert.equal(named, remark)
  })
})
