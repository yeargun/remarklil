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

The LilScript compiler lives next door at `../lilscript`.
