import {writeFileSync} from "node:fs"
import {build} from "esbuild"
const lib=process.cwd()+"/node_modules/micromark/lib"
const contents=`export {micromark} from "micromark";
export {compile} from "${lib}/compile.js";
export {parse} from "${lib}/parse.js";
export {postprocess} from "${lib}/postprocess.js";
export {preprocess} from "${lib}/preprocess.js";`
const b=await build({bundle:true,conditions:["browser","import"],stdin:{contents,resolveDir:process.cwd(),sourcefile:"mm.public.js"},format:"esm",legalComments:"none",platform:"browser",write:false})
writeFileSync(process.argv[2]+"/mm-official5.bundle.mjs", b.outputFiles[0].text)
console.log("ok")
