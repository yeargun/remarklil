import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'
import {buildPackage} from './compiler-package.mjs'
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
await buildPackage({root,
  profiles: [{name:'public', config:'lilscript.toml'}, {name:'closed', config:'lilscript.closed.toml'}],
  aliases: {"remark.raw.js": "remark.esm.js", "remark.closed.raw.js": "remark.closed.js"},
  assets: [{source:'types/remark.d.ts', destination:'remark.d.ts'}],
})
