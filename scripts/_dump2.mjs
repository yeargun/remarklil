import {writeFileSync} from "node:fs"
import {build} from "esbuild"
import {minify} from "terser"
import {brotliCompressSync, constants as C, gzipSync} from "node:zlib"
const out=process.argv[2]
const br=b=>brotliCompressSync(b,{params:{[C.BROTLI_PARAM_QUALITY]:11}}).byteLength
const gz=b=>gzipSync(b,{level:9}).byteLength
const bundle=(e,o={})=>build({bundle:true,conditions:["browser","import"],entryPoints:[e],format:"esm",legalComments:"none",platform:"browser",write:false,...o})
const off=(await bundle("remark")).outputFiles[0].text
const tm=(await minify(off,{compress:true,mangle:true,module:true})).code
const tn=(await minify(off,{compress:true,mangle:false,module:true})).code
const eb=Buffer.from((await bundle("remark",{minify:true})).outputFiles[0].contents).toString()
const mine=(await bundle("./dist/remark.esm.js")).outputFiles[0].text
for (const [k,v] of [["official",off],["official-terser-mangle",tm],["official-terser-nomangle",tn],["official-esbuild",eb],["itslil(bundled)",mine]])
  console.log(`  ${k.padEnd(26)} raw ${String(Buffer.byteLength(v)).padStart(7)}  gzip ${String(gz(v)).padStart(6)}  brotli ${String(br(v)).padStart(6)}`)
writeFileSync(out+"/official.terser.js", tm)
