import {writeFileSync} from "node:fs"
import {build} from "esbuild"
import {minify} from "terser"
const out = process.argv[2]
const b = await build({bundle:true, conditions:["browser","import"], entryPoints:["remark"], format:"esm", legalComments:"none", metafile:true, platform:"browser", write:false})
const src = Buffer.from(b.outputFiles[0].contents).toString("utf8")
writeFileSync(out + "/official.bundle.js", src)
const m = await minify(src, {module:true, compress:true, mangle:true})
writeFileSync(out + "/official.terser.js", m.code)
const totals = new Map()
for (const o of Object.values(b.metafile.outputs)) for (const [p,i] of Object.entries(o.inputs)) {
  const k = p.includes("node_modules/") ? p.slice(p.lastIndexOf("node_modules/")+13).split("/").slice(0, p.slice(p.lastIndexOf("node_modules/")+13).startsWith("@")?2:1).join("/") : p
  totals.set(k,(totals.get(k)??0)+i.bytesInOutput)
}
console.log("components (bytes in bundle):")
for (const [k,v] of [...totals].sort((a,b)=>b[1]-a[1]).slice(0,18)) console.log(`  ${String(v).padStart(7)}  ${k}`)
