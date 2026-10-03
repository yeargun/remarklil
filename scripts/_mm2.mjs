import {writeFileSync} from "node:fs"
import {build} from "esbuild"
import {minify} from "terser"
import {brotliCompressSync, constants as C} from "node:zlib"
const br=b=>brotliCompressSync(Buffer.from(b),{params:{[C.BROTLI_PARAM_QUALITY]:11}}).byteLength
const out=process.argv[2]
const lib=process.cwd()+"/node_modules/micromark/lib"
const contents=`export {micromark} from "micromark";
export {compile} from "${lib}/compile.js";
export {parse} from "${lib}/parse.js";
export {postprocess} from "${lib}/postprocess.js";
export {preprocess} from "${lib}/preprocess.js";`
const b=await build({bundle:true,conditions:["browser","import"],stdin:{contents,resolveDir:process.cwd(),sourcefile:"mm.public.js"},format:"esm",legalComments:"none",platform:"browser",write:false})
const src=b.outputFiles[0].text
const tm=(await minify(src,{compress:true,mangle:true,module:true})).code
const eb=Buffer.from((await build({bundle:true,conditions:["browser","import"],stdin:{contents,resolveDir:process.cwd(),sourcefile:"mm.public.js"},format:"esm",legalComments:"none",platform:"browser",write:false,minify:true})).outputFiles[0].contents).toString()
writeFileSync(out+"/mm-official5.terser.js", tm)
console.log(`official micromark (5 exports): bundle ${Buffer.byteLength(src)}  terser raw ${Buffer.byteLength(tm)} brotli ${br(tm)}  |  esbuild raw ${Buffer.byteLength(eb)} brotli ${br(eb)}`)
