import {writeFileSync} from "node:fs"
import {build} from "esbuild"
import {minify} from "terser"
import {brotliCompressSync, constants as C} from "node:zlib"
const br=b=>brotliCompressSync(Buffer.from(b),{params:{[C.BROTLI_PARAM_QUALITY]:11}}).byteLength
const out=process.argv[2]
const b=await build({bundle:true,conditions:["browser","import"],entryPoints:["micromark"],format:"esm",legalComments:"none",platform:"browser",write:false})
const src=b.outputFiles[0].text
const tm=(await minify(src,{compress:true,mangle:true,module:true})).code
writeFileSync(out+"/mm-official.terser.js", tm)
console.log(`official micromark: bundle ${Buffer.byteLength(src)}  terser raw ${Buffer.byteLength(tm)}  brotli ${br(tm)}`)
