import {createHash} from "node:crypto"
import {readFileSync, writeFileSync} from "node:fs"
import {dirname, resolve} from "node:path"
import {fileURLToPath} from "node:url"

// remark is remark-parse + unified + remark-stringify. The parse and unified halves are the maintained
// remark-parselil and unifiedlil sources, copied byte for byte and pinned here; `--sync` refreshes them.
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const mappings = [
  ["remark-parselil", "parse", "browser.lil", "29215bc9ba5f6a47a3ab1a01761920857d4b7f0c0dd6cc28af705cdcdd7a74c7"],
  ["remark-parselil", "parse", "entry.lil", "b9fd3fe9132173c317426f247b2b1b64a29bbb90a0748e8af7002f700b75e5e2"],
  ["remark-parselil", "parse", "from-markdown.lil", "78894f1bafbd7b1717b28b6f4ffa140cca0fcec02c92e7b6951a5c33ca551bae"],
  ["remark-parselil", "parse", "micromark/character-entities.lil", "c8b6618cbfd0fdf86d5c36b8a4ed1e4ee141a25088251142a20fe599fca210b3"],
  ["remark-parselil", "parse", "micromark/constructs.lil", "74cb525c1651cc300f78f4770c648d3593c4e2dc3f4a45351e459b29be14d84a"],
  ["remark-parselil", "parse", "micromark/core/attention.lil", "35d47c10695c713c471cc468088ac8cf975ce0d48e7dff237d951112a09f5632"],
  ["remark-parselil", "parse", "micromark/core/autolink.lil", "97e7eb8b4b33f23df8600b7d811b5cfbbb8df23bfc01dfa25fb528a085d55703"],
  ["remark-parselil", "parse", "micromark/core/blank-line.lil", "115d2dcacdf715b02efce52caac3960d5b855939a68dc0a20817491e8b1194b0"],
  ["remark-parselil", "parse", "micromark/core/block-quote.lil", "eae45318d2972f4be0fd616cb243d59dd366cb61209b13796d651cfc8297ab49"],
  ["remark-parselil", "parse", "micromark/core/character-escape.lil", "20193c0809adfe18e77d04a7a782ad437d912f3de997a402930af8e46031c6ab"],
  ["remark-parselil", "parse", "micromark/core/character-reference.lil", "b355201b60833cf854ca7328b4cd1a9d405ae491b4d1b5a70178313c8c16c71a"],
  ["remark-parselil", "parse", "micromark/core/code-fenced.lil", "3f4bb3f8b531e3729291c8dcdeab6d6a8e6fc2449eafac161d818f2ddbb27a1e"],
  ["remark-parselil", "parse", "micromark/core/code-indented.lil", "fb8705076d7529695e7da77e235cd90de1af56c92b7ec746de3af9499a2f8be8"],
  ["remark-parselil", "parse", "micromark/core/code-text.lil", "d35e0cdd7e33ae98579152b3114a826ff43fe69b3802b9e9db7c58fae8ee4388"],
  ["remark-parselil", "parse", "micromark/core/content.lil", "05cc704bd51c0eaf8b9740bd243bbd92842e77a0c6d0372834c76d42ca6a7620"],
  ["remark-parselil", "parse", "micromark/core/definition.lil", "38becb049d8509a9239480090acf683d90d24ad4ef4e8b35f14e92c326788011"],
  ["remark-parselil", "parse", "micromark/core/hard-break-escape.lil", "92b8a9e28270f61184e6572a8e0640c33f7fbd163c24dde1255d7211e7ca0b2a"],
  ["remark-parselil", "parse", "micromark/core/heading-atx.lil", "9d2fd673aab15d904d2b876aa66e7c92ac30c14f8b838ea34b58d4af0f9d269c"],
  ["remark-parselil", "parse", "micromark/core/html-flow.lil", "ba2daf14d7cd5c29ab123ce10374c26fb784770eebf8348ce73bb5a58c3a67ef"],
  ["remark-parselil", "parse", "micromark/core/html-text.lil", "1e386a681a07b86327fc72dd7735683e86367f0a183a817976a302c0b3da26fa"],
  ["remark-parselil", "parse", "micromark/core/label-end.lil", "4192d0a356f2953a56f695f038c3920ab20305956b310d7061b4cd8bc5274f1d"],
  ["remark-parselil", "parse", "micromark/core/label-start-image.lil", "e4a9ba23857880369a5b7912a5316c41173094574b6b5b6721447a399a7e7673"],
  ["remark-parselil", "parse", "micromark/core/label-start-link.lil", "e350229f5af2055c3a065af25bacaa22765e13f1fb9c137df624cfac1b89d002"],
  ["remark-parselil", "parse", "micromark/core/line-ending.lil", "a448ed6a6485a776f3e67941bebef001cdbe486f23bdfd4664842178973d39be"],
  ["remark-parselil", "parse", "micromark/core/list.lil", "3a8e976a8a6ccdc8330f26561caa457040ecf0c2d86773551abc505180ef4119"],
  ["remark-parselil", "parse", "micromark/core/setext-underline.lil", "4e4ca3c5448dd4955789148a6f77ee089c20d55702db91657a92f0641bc6752b"],
  ["remark-parselil", "parse", "micromark/core/thematic-break.lil", "5776bda5a2850218bd3c4c9fdc796d46c8979b2deac17c7e19376c6816a54313"],
  ["remark-parselil", "parse", "micromark/create-tokenizer.lil", "d587bd8a701c469fb05407a1b988231862430bc2d1cbaa0198218a705d41e690"],
  ["remark-parselil", "parse", "micromark/decode-named.lil", "e4150b19e19a214e7ccfb5d6762bdce62fde30b8cc907642d911f9ea87b9e6e8"],
  ["remark-parselil", "parse", "micromark/factory-destination.lil", "5be6c3c02bacd604c1501b85b6785602ed8b447a85679f85e6ee7351964bb161"],
  ["remark-parselil", "parse", "micromark/factory-label.lil", "6376115906bbfbce66d13f0a50ff3b921922135b18b6e66d290eb0b54221f21d"],
  ["remark-parselil", "parse", "micromark/factory-space.lil", "a5932f5e1b06d6517cdc43a5b0a12cfc9a6b875e94d9c937213f5192fb3b50ba"],
  ["remark-parselil", "parse", "micromark/factory-title.lil", "f22c5e3e9919b86b7f2e0cc8b38f6cc1182e88917c9f3fcb61cbdba56404a07c"],
  ["remark-parselil", "parse", "micromark/factory-whitespace.lil", "e63b322526936f7e746978a4a3e6d56b315dcd01bde6732cf9d94bfb93845d36"],
  ["remark-parselil", "parse", "micromark/host.lil", "6badb1a179beafd2e5fc92d05c784290b3407412ab9a58769a85dbfe33e2f357"],
  ["remark-parselil", "parse", "micromark/initialize/content.lil", "3f4959b21c63be2570bbc74960af330e4b6a9646fbb348cef55300baabff2d45"],
  ["remark-parselil", "parse", "micromark/initialize/document.lil", "d74de0315b97b124e43f302f64eb4cfd2cc1466dafd00639d20b818a84958856"],
  ["remark-parselil", "parse", "micromark/initialize/flow.lil", "4ed3a38963b8557e3d1cf818ad7ba0f9bcd3f90c2268f91962891ec3fb14f1e7"],
  ["remark-parselil", "parse", "micromark/initialize/text.lil", "85651ec8148ff18619ca4e46f5e5e4ea5c810c537b6e69d807fc824e4a1f1905"],
  ["remark-parselil", "parse", "micromark/parse.lil", "b036c2932912ef350c629c126601292bda49caab2a0152d77988dcb979481d83"],
  ["remark-parselil", "parse", "micromark/postprocess.lil", "0ea578b00bed09960e8f9c2d06f962b9e626fec4a528beaba4be30f2c5c50b31"],
  ["remark-parselil", "parse", "micromark/preprocess.lil", "ce28b92f70b3bd54428324b0f6695ca162aa5df1d2e0f431fde1f8ef4638e9b8"],
  ["remark-parselil", "parse", "micromark/splice-buffer.lil", "9fcce40f739a2119a7bb0b44ad7ec6c69344173854feedef3e528d168102f512"],
  ["remark-parselil", "parse", "micromark/symbol/codes.lil", "762a3e62e1500ba78d71f8218fcb2e7e357ea3795d21bb5e81b8d4287f513c19"],
  ["remark-parselil", "parse", "micromark/symbol/constants.lil", "c89476d798ffe1eb1f9843219c41cd1d19849707ceb9fc18d5583b5ae2470188"],
  ["remark-parselil", "parse", "micromark/symbol/types.lil", "6ae172165319ad71396ca532ec544326d82d9625f8ee46090d02a587e40c1aa8"],
  ["remark-parselil", "parse", "micromark/symbol/values.lil", "1aabedd9c760c573fd1ea24d07ae9d35d207bbe61a0ecc62985f0953fc73c3e9"],
  ["remark-parselil", "parse", "micromark/util-character.lil", "634af98913dfb47ab2fcdf6fd17e2b4733bc26608f78609e110ce0d33bdf4a15"],
  ["remark-parselil", "parse", "micromark/util-chunked.lil", "da747a8e78fa84b0a467616f68d83384737e53ad1b016e83f9fb803d2edf8e54"],
  ["remark-parselil", "parse", "micromark/util-classify-character.lil", "80373b35201103ddfd5b5a942d97e1ab492fee40858c395d9e9113d2255d4477"],
  ["remark-parselil", "parse", "micromark/util-combine-extensions.lil", "45dda94d1f191795642dac1e553985170a046717ad685685a9c61453a1768cfd"],
  ["remark-parselil", "parse", "micromark/util-decode-numeric.lil", "03d27ae0446af7f4aa870de13c4c41b65bf53f7a12731c8ee96694f34f95f4fc"],
  ["remark-parselil", "parse", "micromark/util-decode-string.lil", "df8465926f8b05577467dfc4fb4ed42f28b71574e541002cfc2395275c5fc907"],
  ["remark-parselil", "parse", "micromark/util-html-tag-name.lil", "db2a6d54b5cbdbc8273a776f7b609fb2ed9b90f87242c1d26801ef11771b0380"],
  ["remark-parselil", "parse", "micromark/util-normalize-identifier.lil", "9c605bcd8454ea59378864ba8abfb67315008fbdea73f96e9fb09e76594fe20e"],
  ["remark-parselil", "parse", "micromark/util-resolve-all.lil", "d7df6ed1af3b6b922a3f3150f0fc8f94cf4f38852f32819513c56a5a0c546a74"],
  ["remark-parselil", "parse", "micromark/util-subtokenize.lil", "2b22576838b22844e1b6d793a4ee542deb73a396ae594b53ce1d9550ff0fe69a"],
  ["remark-parselil", "parse", "stringify-position.lil", "4a625ab59ab7059b489f26d9089f6f69530cb5a56044eaf1ad71f4de8d1b0663"],
  ["remark-parselil", "parse", "to-string.lil", "d1d84463da85bc5a419f8755e502fcfa8a26c60e2dddd6c737e7b2c9d9884a93"],
  ["unifiedlil", "unified", "browser.lil", "e7aec62e6d00b9a4d48be7c60ab2e89aff27f0980a996064fa3a7c9d710f2b6a"],
  ["unifiedlil", "unified", "entry.lil", "baa802c68e7c54ef57c3023187f6a52ef16c186a234314010f4b18f71b263782"],
  ["unifiedlil", "unified", "extend.lil", "4055d2d1d1a84eb61b897c2f6d706c2c17d283df4d520a0620d18b753f340b12"],
  ["unifiedlil", "unified", "host.lil", "745c7baa0a9b13001eae15b75a8be9ea063a88a51945e56728522d44a331ee89"],
  ["unifiedlil", "unified", "index.lil", "04a636b7c62fda30c4a61ff9bedf1ff640583b332107843c0a79ec186aa4aab7"],
  ["unifiedlil", "unified", "plain.lil", "8a52a7e342eebf815c188da089eba5acaad37b604d13111a471f7437ed1d4249"],
  ["unifiedlil", "unified", "trough.lil", "9759f1e87e4d67fcd65b85963c2cbb6b5b206ac0212d4045bfb2c04125067eff"],
  ["unifiedlil", "unified", "vfile.lil", "044d55ffc6d6d3506521dfb940667253cd6393add8f77ed689aac98e42271195"],
]
const sync = process.argv.includes("--sync")

for (const [repository, directory, name, expected] of mappings) {
  const source = resolve(root, "..", repository, "src", name)
  const target = resolve(root, "src", directory, name)
  const input = sync ? readFileSync(source) : readFileSync(target)
  const actual = createHash("sha256").update(input).digest("hex")
  if (actual !== expected) {
    throw new Error(`${sync ? source : target}: expected sha256 ${expected}, got ${actual}`)
  }
  if (sync) writeFileSync(target, input)
}

console.log(`${sync ? "synced" : "checked"} ${mappings.length} pinned shared Lil sources`)
