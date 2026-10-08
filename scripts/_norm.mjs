import {readFileSync,writeFileSync} from "node:fs"
import {transform} from "esbuild"
import {brotliCompressSync, constants as C} from "node:zlib"
const br=b=>brotliCompressSync(Buffer.from(b),{params:{[C.BROTLI_PARAM_QUALITY]:11}}).byteLength
for (const [name,path] of [["official(bundle)",process.argv[2]],["ours(dist)",process.argv[3]]]) {
  const src=readFileSync(path,"utf8")
  const min=await transform(src,{minify:true,format:"esm",target:"es2020"})
  const pretty=await transform(src,{minify:false,format:"esm",target:"es2020"})
  console.log(`${name.padEnd(18)} src ${String(Buffer.byteLength(src)).padStart(7)} | esbuild-min raw ${String(Buffer.byteLength(min.code)).padStart(7)} brotli ${String(br(min.code)).padStart(6)} | pretty lines ${String(pretty.code.split("\n").length).padStart(6)}`)
  writeFileSync(process.argv[4]+"/"+name.replace(/[()]/g,"")+".min.js", min.code)
}
