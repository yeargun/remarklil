# @itslil/remark

remark reimplemented in LilScript. This is **not** the official [`remark`](https://github.com/remarkjs/remark) package.

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
