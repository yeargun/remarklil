# @itslil/remark

Official [`remark@15.0.1`](https://github.com/remarkjs/remark) algorithms rewritten in LilScript. Official test suite 494/494. Not affiliated with upstream.

**Site:** [yeargun.github.io/remarklil/](https://yeargun.github.io/remarklil/)

```sh
npm install @itslil/remark
```

Two compiles ship from the same `.lil` source:

| Lane | Config | Meaning |
| --- | --- | --- |
| **library** (npm) | `lilscript.toml` · `--target js-module` | reusable ESM. Export names and `extern class` keys stay. |
| **closed** | `lilscript.closed.toml` · `--target js-module` | closed LilScript world. `extern class` keys may mangle. ESM export names stay so the lane is testable. |

You publish the library lane. The closed artifact is `dist/remark.closed.js`.

ESM, CommonJS, UMD, and closed artifacts directly contain the pure LilScript
VFile runtime. VFile-compatible inputs retain their identity in every format;
no external JavaScript VFile is present in the behavior graph.

Remark parsing, stringifying, unified, trough, and VFile are linked as Lil
modules before code generation. `scripts/shared-sources.mjs` pins the six
runtime modules shared with `@itslil/unified` by SHA-256 and can synchronize a
checkout with `--sync`; normal tests only verify the vendored copies. The
canonical `npm run measure:graph` comparison uses the same browser ESM graph
bundle for both implementations and Terser 5.51.2 only for the official lane.

The LilScript compiler lives next door at `../lilscript`.
