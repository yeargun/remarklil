import {writeFileSync} from "node:fs"
import {build} from "esbuild"
import {minify} from "terser"
import {brotliCompressSync, constants as C} from "node:zlib"
const br=b=>brotliCompressSync(Buffer.from(b),{params:{[C.BROTLI_PARAM_QUALITY]:11}}).byteLength
for (const [label,conds,platform] of [["browser",["browser","import"],"browser"],["node/default",["import"],"neutral"]]) {
  const b=await build({bundle:true,conditions:conds,entryPoints:["remark"],format:"esm",legalComments:"none",platform,write:false})
  const src=b.outputFiles[0].text
  const tm=(await minify(src,{compress:true,mangle:true,module:true})).code
  if(label==="node/default") writeFileSync(process.argv[2]+"/remark-official-node.terser.js", tm)
  console.log(`remark ${label.padEnd(13)} bundle ${String(Buffer.byteLength(src)).padStart(7)} terser raw ${String(Buffer.byteLength(tm)).padStart(6)} brotli ${String(br(tm)).padStart(6)}  entity-table:${src.includes("AElig")?"YES":"no"}`)
}
