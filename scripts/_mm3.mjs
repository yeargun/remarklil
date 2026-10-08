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
for (const [label,conds,platform] of [["browser",["browser","import"],"browser"],["node/default",["import"],"neutral"]]) {
  const b=await build({bundle:true,conditions:conds,stdin:{contents,resolveDir:process.cwd(),sourcefile:"mm.public.js"},format:"esm",legalComments:"none",platform,write:false})
  const src=b.outputFiles[0].text
  const tm=(await minify(src,{compress:true,mangle:true,module:true})).code
  writeFileSync(out+`/mm-official5-${label.replace("/","-")}.terser.js`, tm)
  console.log(`${label.padEnd(13)} bundle ${String(Buffer.byteLength(src)).padStart(7)} terser raw ${String(Buffer.byteLength(tm)).padStart(6)} brotli ${String(br(tm)).padStart(6)}  entity-table:${src.includes("AElig")?"YES":"no (uses DOM)"}`)
}
