import {readFileSync,writeFileSync} from "node:fs"
import {minify} from "terser"
import {brotliCompressSync, constants as C} from "node:zlib"
const br=b=>brotliCompressSync(Buffer.from(b),{params:{[C.BROTLI_PARAM_QUALITY]:11}}).byteLength
const src=readFileSync(process.argv[2],"utf8")
const m=await minify(src,{compress:true,mangle:true,module:true})
writeFileSync(process.argv[3], m.code)
console.log("terser raw", Buffer.byteLength(m.code), "brotli", br(m.code))
