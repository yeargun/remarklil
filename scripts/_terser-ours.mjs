import {readFileSync,writeFileSync} from "node:fs"
import {minify} from "terser"
import {brotliCompressSync, constants as C} from "node:zlib"
const br=b=>brotliCompressSync(Buffer.from(b),{params:{[C.BROTLI_PARAM_QUALITY]:11}}).byteLength
const src=readFileSync(process.argv[2],"utf8")
console.log(`ours              raw ${String(Buffer.byteLength(src)).padStart(7)}  brotli ${String(br(src)).padStart(6)}`)
for (const [k,opt] of [["+terser(compress+mangle)",{compress:true,mangle:true,module:true}],["+terser(compress only)",{compress:true,mangle:false,module:true}],["+terser(mangle only)",{compress:false,mangle:true,module:true}]]) {
  const m=await minify(src,opt)
  if(m.error){console.log(k,"ERROR",m.error.message);continue}
  console.log(`${k.padEnd(18)} raw ${String(Buffer.byteLength(m.code)).padStart(7)}  brotli ${String(br(m.code)).padStart(6)}`)
  if(k.includes("compress+mangle")) writeFileSync(process.argv[3], m.code)
}
