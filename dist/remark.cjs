/*! @itslil/remark 15.0.2 | LilScript reimplementation of remark | MIT */

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// remark.esm.js
var remark_esm_exports = {};
__export(remark_esm_exports, {
  remark: () => Im
});
module.exports = __toCommonJS(remark_esm_exports);
var b = (a) => q.call(a);
var c = (a, b2) => q.call(a, b2);
var d = (a, b2) => !!o.call(a, b2);
var f = (a) => {
  if (a == null) return false;
  let b2 = typeof a;
  if (b2 != "object" && b2 != "function") return false;
  return !!Error.prototype.isPrototypeOf(a);
};
var g = (a) => {
  if (typeof a == "string") return true;
  return h(a);
};
var h = (a) => {
  if (!a) return false;
  if (typeof a != "object") return false;
  return "byteLength" in a && "byteOffset" in a;
};
var i = (a) => {
  throw new Error(a);
};
var j = (a) => {
  throw new TypeError(a);
};
var k = (a) => {
  if (a) throw a;
};
var l = (a, b2) => {
  if (!a) throw new Error(b2);
};
var r = (a) => {
  if (typeof a != "object" || a == null) return false;
  let b2 = Object.getPrototypeOf(a);
  if (!(b2 == null || b2 === Object.prototype || Object.getPrototypeOf(b2) == null)) return false;
  if (Symbol.toStringTag in a) return false;
  if (Symbol.iterator in a) return false;
  return true;
};
var s = (a) => {
  if (!a) return false;
  if (p.call(a) + "" != "[object Object]") return false;
  let c2 = !!o.call(a, "constructor"), d2 = a.constructor, e = false;
  if (d2) {
    if (d2.prototype) e = !!o.call(d2.prototype, "isPrototypeOf");
  }
  if (d2 && !c2 && !e) return false;
  let f2 = "", g2 = false;
  for (let b2 in a) {
    f2 = b2;
    g2 = true;
  }
  if (!g2) return true;
  return !!o.call(a, f2);
};
var t = (a, b2, c2) => {
  if (b2 == "__proto__") {
    Object.defineProperty(a, "__proto__", { enumerable: true, configurable: true, writable: true, value: c2 });
    return;
  }
  a[b2] = c2;
};
var u = (a, b2) => {
  if (b2 == "__proto__") {
    if (!d(a, b2)) return;
    return Object.getOwnPropertyDescriptor(a, b2).value;
  }
  return a[b2];
};
var v = (a, b2) => {
  if (a == null || typeof a != "object" && typeof a != "function") a = {};
  if (b2 == null) return a;
  for (let c2 in b2) {
    let d2 = u(a, c2), e = u(b2, c2);
    if (a !== e) {
      if (e && (s(e) || Array.isArray(e))) {
        let b3;
        b3 = Array.isArray(e) ? d2 && Array.isArray(d2) ? d2 : [] : d2 && s(d2) ? d2 : {};
        t(a, c2, v(b3, e));
      } else if (typeof e != "undefined") t(a, c2, e);
    }
  }
  return a;
};
var w = (a) => v({}, a);
function Nm(a) {
  return function() {
    return a(this, arguments);
  };
}
function Om(a) {
  return function(b2) {
    return a(this, b2);
  };
}
var D = (a) => ca.includes(a);
var E = (a) => a != null && typeof a == "object" && "href" in a && !!a.href && "protocol" in a && !!a.protocol && a.auth === void 0;
var G = (a, b2) => {
  let c2 = 0, d2 = -1, e = a.length, f2 = false;
  if (b2.length == 0 || b2.length > a.length) {
    while (e > 0) {
      --e;
      if (a.charAt(e) == "/") {
        if (f2) {
          c2 = e + 1 | 0;
          break;
        }
      } else if (d2 < 0) {
        f2 = true;
        d2 = e + 1 | 0;
      }
    }
    if (d2 < 0) return "";
    return a.slice(c2, d2);
  }
  if (b2 == a) return "";
  let g2 = -1, h2 = b2.length - 1;
  while (e > 0) {
    --e;
    if (a.charAt(e) == "/") {
      if (f2) {
        c2 = e + 1 | 0;
        break;
      }
    } else {
      if (g2 < 0) {
        f2 = true;
        g2 = e + 1 | 0;
      }
      if (h2 > -1) if (a.charAt(e) == b2.charAt(h2)) {
        h2 = h2 - 1 | 0;
        if (h2 < 0) d2 = e;
      } else {
        h2 = -1;
        d2 = g2;
      }
    }
  }
  if (c2 == d2) d2 = g2;
  else if (d2 < 0) d2 = a.length;
  return a.slice(c2, d2);
};
var L = (a) => {
  if (typeof a != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(a));
};
var M = (a, b2) => {
  L(a);
  L(b2);
  let c2 = a + "", d2 = b2 + "", e = "";
  if (c2.length > 0) e = c2;
  if (d2.length > 0) e = e.length > 0 ? e + "/" + d2 : d2;
  if (e.length == 0) return ".";
  {
    let a2 = e, b3 = a2.charAt(0) == "/", c3;
    {
      let d3 = a2, e2 = !b3, f2 = "", g2 = 0, h2 = -1, i2 = 0, j2 = 0;
      while (j2 <= d3.length) {
        let a3 = "/";
        if (j2 < d3.length) a3 = d3.charAt(j2);
        if (a3 == "/") {
          if (h2 == (j2 - 1 | 0) || i2 == 1) {
          } else if (h2 != (j2 - 1 | 0) && i2 == 2) {
            if (f2.length < 2 || g2 != 2 || f2.charAt(f2.length - 1) != "." || f2.charAt(f2.length - 2) != ".") {
              if (f2.length > 2) {
                let a4 = f2.lastIndexOf("/");
                if (a4 != f2.length - 1) {
                  if (a4 < 0) {
                    f2 = "";
                    g2 = 0;
                  } else {
                    f2 = f2.slice(0, a4);
                    g2 = f2.length - 1 - f2.lastIndexOf("/") | 0;
                  }
                  h2 = j2;
                  i2 = 0;
                  ++j2;
                  continue;
                }
              } else if (f2.length > 0) {
                f2 = "";
                g2 = 0;
                h2 = j2;
                i2 = 0;
                ++j2;
                continue;
              }
            }
            if (e2) {
              f2 = f2.length > 0 ? f2 + "/.." : "..";
              g2 = 2;
            }
          } else {
            let a4 = d3.slice(h2 + 1 | 0, j2);
            f2 = f2.length > 0 ? f2 + "/" + a4 : a4;
            g2 = (j2 - h2 | 0) - 1 | 0;
          }
          h2 = j2;
          i2 = 0;
        } else i2 = a3 == "." && i2 > -1 ? i2 + 1 | 0 : -1;
        ++j2;
      }
      c3 = f2;
    }
    if (c3.length == 0 && !b3) c3 = ".";
    if (c3.length > 0 && a2.charAt(a2.length - 1) == "/") c3 = c3 + "/";
    if (b3) return "/" + c3;
    return c3;
  }
};
var N = (a, b2) => {
  if (a && a.includes("/")) throw new Error("`" + b2 + "` cannot be a path: did not expect `/`");
};
var O = (a, b2) => {
  if (!a) throw new Error("`" + b2 + "` cannot be empty");
};
var P = (a) => {
  let b2 = a.history;
  if (b2.length == 0) return;
  return b2[b2.length - 1 | 0];
};
var Q = (a, b2) => {
  let c2 = b2;
  if (E(c2)) {
    if (c2.protocol + "" != "file:") {
      let a3 = new TypeError("The URL must be of scheme file");
      a3.code = "ERR_INVALID_URL_SCHEME";
      throw a3;
    }
    if ((c2.hostname + "").length > 0) {
      let a3 = new TypeError('File URL host must be "localhost" or empty on darwin');
      a3.code = "ERR_INVALID_FILE_URL_HOST";
      throw a3;
    }
    let a2 = c2.pathname + "", b3 = 0;
    while (b3 < a2.length) {
      if (a2.charAt(b3) == "%" && a2.charAt(b3 + 1 | 0) == "2" && (a2.charAt(b3 + 2 | 0) == "F" || a2.charAt(b3 + 2 | 0) == "f")) {
        let a3 = new TypeError("File URL path must not include encoded / characters");
        a3.code = "ERR_INVALID_FILE_URL_PATH";
        throw a3;
      }
      ++b3;
    }
    c2 = globalThis.decodeURIComponent(a2);
  }
  O(c2, "path");
  if (P(a) !== c2) Array.prototype.push.call(a.history, c2);
};
var S = (a) => {
  if (!a) return "1:1";
  let b2 = a.line, c2 = a.column, d2 = "1", e = "1";
  if (typeof b2 == "number" && b2) d2 = b2 + "";
  if (typeof c2 == "number" && c2) e = c2 + "";
  return d2 + ":" + e;
};
var U = (a, b2, c2) => {
  if (typeof b2 == "string") {
    c2 = b2;
    b2 = void 0;
  }
  let d2 = "", e = {}, f2 = false;
  if (b2) if ("line" in b2 && "column" in b2) e.place = b2;
  else if ("start" in b2 && "end" in b2) e.place = b2;
  else if ("type" in b2) {
    e.ancestors = [b2];
    e.place = b2.position;
  } else {
    let a2 = Object.keys(b2), c3 = 0;
    while (c3 < a2.length) {
      let d3 = a2[c3] + "";
      e[d3] = b2[d3];
      c3 = c3 + 1 | 0;
    }
  }
  if (typeof a == "string") d2 = a + "";
  else if (!e.cause && a) {
    f2 = true;
    d2 = a.message;
    e.cause = a;
  }
  if (!e.ruleId && !e.source && typeof c2 == "string") {
    let a2 = c2 + "", b3 = a2.indexOf(":");
    if (b3 < 0) e.ruleId = a2;
    else {
      e.source = a2.slice(0, b3);
      e.ruleId = a2.slice(b3 + 1 | 0);
    }
  }
  let g2 = e.ancestors;
  if (!e.place && g2 && g2.length > 0) e.place = g2[g2.length - 1 | 0].position;
  let h2 = e.place, i2 = ((a2) => {
    if (a2 && "start" in a2) return a2.start;
    return a2;
  })(h2), j2 = new Error();
  Object.setPrototypeOf(j2, da);
  j2.ancestors = void 0;
  if (g2) j2.ancestors = g2;
  j2.cause = void 0;
  if (e.cause) j2.cause = e.cause;
  j2.column = void 0;
  if (i2) j2.column = i2.column;
  j2.fatal = void 0;
  j2.file = "";
  j2.message = d2;
  j2.line = void 0;
  if (i2) j2.line = i2.line;
  j2.name = ((a2) => {
    if (!a2) return "1:1";
    if ("start" in a2 || "end" in a2) return S(a2.start) + "-" + S(a2.end);
    return S(a2);
  })(h2);
  j2.place = void 0;
  if (h2) j2.place = h2;
  j2.reason = d2;
  j2.ruleId = void 0;
  if (e.ruleId) j2.ruleId = e.ruleId;
  j2.source = void 0;
  if (e.source) j2.source = e.source;
  j2.actual = void 0;
  j2.expected = void 0;
  j2.note = void 0;
  j2.url = void 0;
  j2.stack = f2 && typeof e.cause.stack == "string" ? e.cause.stack : "";
  return j2;
};
var $ = (a, b2) => {
  Object.defineProperty(fa, a, b2);
};
var _ = (a) => {
  let b2 = Object.getOwnPropertyDescriptor(fa, a), c2 = b2.get, d2 = b2.set;
  Object.defineProperty(c2, "name", { configurable: true, value: "get " + a });
  Object.defineProperty(d2, "name", { configurable: true, value: "set " + a });
};
var ba = (a) => {
  if (((a2) => {
    if (!a2 || typeof a2 != "object") return false;
    return "message" in a2 && "messages" in a2;
  })(a)) return a;
  return new ga(a);
};
var la = (a, b2) => {
  if (typeof b2 != "function") j("Cannot `" + a + "` without `parser`");
};
var ma = (a, b2) => {
  if (typeof b2 != "function") j("Cannot `" + a + "` without `compiler`");
};
var na = (a, b2) => {
  if (b2) i("Cannot call `" + a + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
};
var oa = (a) => {
  if (!r(a) || typeof a.type != "string") j("Expected node, got `" + a + "`");
};
var pa = (a, b2, c2) => {
  if (!c2) i("`" + a + "` finished async. Use `" + b2 + "` instead");
};
var sa = (a, b2, d2) => {
  let e = -1, f2 = -1, g2 = a.length;
  while (true) {
    e = e + 1 | 0;
    if (e >= g2) break;
    if (a[e][0] === b2) {
      f2 = e;
      break;
    }
  }
  if (f2 == -1) {
    let c2 = [];
    c2.push(b2);
    let e2 = 0, f3 = d2.length;
    while (e2 < f3) {
      c2.push(d2[e2]);
      e2 = e2 + 1 | 0;
    }
    Array.prototype.push.call(a, c2);
    return;
  }
  if (d2.length > 0) {
    let e2 = d2[0], g3 = c(d2, 1), h2 = a[f2][1];
    if (r(h2) && r(e2)) e2 = v(h2, e2);
    let i2 = [];
    i2.push(b2);
    i2.push(e2);
    let j2 = 0, k2 = g3.length;
    while (j2 < k2) {
      i2.push(g3[j2]);
      ++j2;
    }
    Array.prototype.splice.call(a, f2 * 1, 1, i2);
  }
};
var ta = (a, b2, c2) => {
  if (c2 == null) return;
  if (!Array.isArray(c2)) j("Expected a list of plugins, not `" + c2 + "`");
  let d2 = -1, e = c2.length;
  while (true) {
    d2 = d2 + 1 | 0;
    if (d2 >= e) break;
    va(a, b2, c2[d2]);
  }
};
var ua = (a, b2, c2) => {
  if (!("plugins" in c2) && !("settings" in c2)) i("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
  ta(a, b2, c2.plugins);
  let d2 = c2.settings;
  if (d2) b2.settings = v(b2.settings, d2);
};
var va = (a, b2, d2) => {
  if (typeof d2 == "function") {
    sa(a, d2, []);
    return;
  }
  if (typeof d2 == "object") {
    if (Array.isArray(d2)) {
      sa(a, d2[0], c(d2, 1));
      return;
    }
    ua(a, b2, d2);
    return;
  }
  j("Expected usable value, not `" + d2 + "`");
};
function Pm(a) {
  return function(b2, c2, d2) {
    return a(this, b2, c2, d2);
  };
}
function Qm(a) {
  return function(b2, c2) {
    return a(this, b2, c2);
  };
}
var Fa = (a) => {
  let b2 = La(), c2 = a.attachers, d2 = -1, e = c2.length;
  while (true) {
    d2 = d2 + 1 | 0;
    if (d2 >= e) break;
    b2.use.apply(b2, c2[d2]);
  }
  b2.data(w(a.namespace));
  return b2;
};
var Ga = (a, b2, c2) => {
  Object.defineProperty(a, "name", { configurable: true, value: b2 });
  Object.defineProperty(a, "length", { configurable: true, value: c2 * 1 });
};
var Ha = (a, b2) => {
  Object.defineProperty(Xa, a, { configurable: true, writable: true, value: b2 });
};
function Rm(a) {
  return function() {
    return a(arguments);
  };
}
var hb = (a) => {
  if (typeof a == "string") return a;
  if (a === void 0) return "undefined";
  if (a == null) return "null";
  return String(a);
};
var kb = (a) => {
  if (a == null) return 0;
  return a.length;
};
var pb = (a, b2) => {
  if (typeof b2 == "string") return a[b2];
  if (b2 === null) return a.null;
  return a[b2 + ""];
};
var qb = (a, b2, c2) => {
  if (typeof b2 == "string") {
    a[b2] = c2;
    return;
  }
  if (b2 === null) {
    a.null = c2;
    return;
  }
  a[b2 + ""] = c2;
};
var rb = (a, b2) => {
  if (a == null) return false;
  return Object.prototype.hasOwnProperty.call(a, b2);
};
var wb = (a, b2, c2, d2) => a[b2](c2, d2);
var xb = (a, b2, c2) => a.apply(b2, c2);
var yb = (a, b2) => {
  a.push(b2);
};
var Bb = (a, b2) => a.slice(b2);
var Cb = (a, b2, c2) => a.slice(b2, c2);
var Gb = (a, b2) => {
  if (a == null) return false;
  return !!a.includes(b2);
};
var Hb = (a, b2) => Gb(a, b2);
var Ib = (a) => hb(String.fromCharCode(a));
var Ob = (a) => ({ _bufferIndex: a._bufferIndex, _index: a._index, line: a.line, column: a.column, offset: a.offset });
var Rb = (a) => hb(a[0]);
var Ub = (a) => hb(a.type);
var Wb = (a, b2) => {
  if (typeof a == "string") return a;
  let c2 = b2 ?? void 0;
  return hb(new TextDecoder(c2).decode(a));
};
var Xb = (a) => {
  throw new Error(a);
};
var Mc = (a, b2, c2, d2) => {
  let e = a.length, f2 = +b2, g2 = +c2;
  if (f2 < 0) f2 = 0 - f2 > e ? 0 : e + f2;
  else if (f2 > e) f2 = e;
  if (g2 < 0) g2 = 0;
  let h2 = kb(d2);
  if (h2 < Lc) {
    let b3 = Array.from(d2);
    b3.unshift(f2, g2);
    xb(a.splice, a, b3);
  } else {
    if (g2 > 0) wb(a, "splice", f2, g2);
    let b3 = 0, c3 = f2;
    while (b3 < h2) {
      let f3 = Cb(d2, b3, b3 + Lc | 0);
      f3.unshift(c3, 0);
      xb(a.splice, a, f3);
      b3 = b3 + Lc | 0;
      c3 = c3 + +Lc;
    }
  }
};
var Nc = (a, b2) => {
  if (kb(a) > 0) {
    Mc(a, a.length, 0, b2);
    return a;
  }
  return b2;
};
var Qc = (a) => {
  let b2 = {}, c2 = -1, d2 = kb(a);
  while (true) {
    c2 = c2 + 1 | 0;
    if (c2 >= d2) break;
    {
      let d3 = b2, e = a[c2];
      for (let a2 in e) {
        if (!rb(e, a2)) continue;
        let b3;
        if (rb(d3, a2)) b3 = d3[a2];
        let c3 = b3;
        if (c3 == null) {
          c3 = {};
          d3[a2] = c3;
        }
        let f2 = e[a2];
        if (f2) for (let a3 in f2) {
          if (!rb(f2, a3)) continue;
          if (!rb(c3, a3)) c3[a3] = [];
          let b4 = f2[a3], d4 = [];
          if (Array.isArray(b4)) d4 = b4;
          else if (b4) yb(d4, b4);
          {
            let b5 = c3[a3], e2 = d4, f3 = [], g2 = -1, h2 = kb(e2);
            while (true) {
              g2 = g2 + 1 | 0;
              if (g2 >= h2) break;
              let a4 = e2[g2];
              if (a4.add == "after") yb(b5, a4);
              else yb(f3, a4);
            }
            Mc(b5, 0, 0, f3);
          }
        }
      }
    }
  }
  return b2;
};
var Rc = (a, b2) => b2 !== null && +b2 > -1 && a.test(Ib(b2));
var Sc = (a) => Rc(cd, a);
var Tc = (a) => Rc(dd, a);
var Vc = (a) => a !== null && (+a < 32 || a === 127);
var Wc = (a) => Rc(fd, a);
var Zc = (a) => a !== null && +a < -2;
var $c = (a) => a !== null && (+a < 0 || a === 32);
var _c = (a) => a === -2 || a === -1 || a === 32;
var kd = (a, b2, c2) => {
  let d2 = [], e = -1, f2 = kb(a), g2 = b2;
  while (true) {
    e = e + 1 | 0;
    if (e >= f2) break;
    let b3 = a[e].resolveAll;
    if (typeof b3 == "function" && !Gb(d2, b3)) {
      g2 = b3(g2, c2);
      yb(d2, b3);
    }
  }
  return g2;
};
var md = (a) => {
  typeof a == "number";
  return a | 0;
};
var ke = (a, b2) => {
  let c2 = b2.start, d2 = b2.end, e = c2._index | 0, f2 = c2._bufferIndex | 0, g2 = d2._index | 0, h2 = d2._bufferIndex | 0, i2 = [];
  if (e == g2) i2 = [a[e].slice(f2, h2)];
  else {
    i2 = Cb(a, e, g2);
    if (f2 > -1) {
      let a2 = i2[0];
      if (typeof a2 == "string") i2[0] = a2.slice(f2);
      else i2.shift();
    }
    if (h2 > 0) yb(i2, a[g2].slice(0, h2));
  }
  return i2;
};
var ne = (a) => ({ _bufferIndex: a[0], _index: a[1], line: a[2], column: a[3], offset: a[4] });
function Sm(a) {
  return function() {
    return a(this);
  };
}
var pe = (a, b2, c2, d2) => {
  let e = 1 / 0;
  if (d2 != 0) e = d2 - 1;
  let f2 = 0, g2;
  g2 = function(h2) {
    if (_c(h2) && f2 < e) {
      ++f2;
      a.consume(h2);
      return g2;
    }
    a.exit(c2);
    return b2(h2);
  };
  return function(e2) {
    if (_c(e2)) {
      a.enter(c2);
      return g2(e2);
    }
    return b2(e2);
  };
};
var pg = (a, b2, c2, d2) => {
  let e = c2.length;
  while (e > d2) {
    --e;
    let d3 = c2[e];
    a.containerState = d3[1];
    d3[0].exit.call(a, b2);
  }
  while (c2.length > d2) c2.pop();
};
var qg = (a, b2) => {
  let c2 = b2.childFlow;
  if (c2) {
    let a2 = [];
    yb(a2, fc);
    c2.write(a2);
  }
  b2.childToken = void 0;
  b2.childFlow = void 0;
  a.containerState._closeFlow = void 0;
};
var rg = (a, b2, c2, d2) => {
  let e = b2.childFlow, f2 = a.sliceStream(c2);
  if (d2) yb(f2, fc);
  c2.previous = b2.childToken;
  if (b2.childToken) b2.childToken.next = c2;
  b2.childToken = c2;
  e.defineSkip(c2.start);
  e.write(f2);
  if (a.parser.lazy[c2.start.line]) {
    let c3 = kb(e.events), d3 = b2.lineStartOffset;
    while (true) {
      c3 = c3 - 1 | 0;
      if (c3 < 0) break;
      let a2 = e.events[c3][1];
      if (+a2.start.offset < d3 && (!a2.end || +a2.end.offset > d3)) return;
    }
    let f3 = kb(a.events), g2 = f3, h2 = false, i2;
    while (true) {
      g2 = g2 - 1 | 0;
      if (g2 < 0) break;
      let b3 = a.events[g2];
      if (b3[0] == "exit" && b3[1].type == jg) {
        if (h2) {
          i2 = b3[1].end;
          break;
        }
        h2 = true;
      }
    }
    pg(a, b2.effects, b2.stack, b2.continued | 0);
    let j2 = f3;
    while (j2 < kb(a.events)) {
      a.events[j2][1].end = Ob(i2);
      j2 = j2 + 1 | 0;
    }
    Mc(a.events, g2 + 1 | 0, 0, Bb(a.events, f3));
    a.events.length = j2;
  }
};
var Ag = (a, b2) => {
  let c2 = kb(b2);
  if (c2 < Lc) {
    let c3 = Array.from(b2);
    xb(a.push, a, c3);
  } else {
    let d2 = 0;
    while (d2 < c2) {
      let c3 = Cb(b2, d2, d2 + Lc | 0);
      xb(a.push, a, c3);
      d2 = d2 + Lc | 0;
    }
  }
};
var Eg = (a, b2) => {
  let c2 = a.left, d2 = a.right, e = c2.length, f2 = d2.length;
  if (b2 == e || b2 > e && f2 == 0 || b2 < 0 && e == 0) return;
  if (b2 < e) {
    let a2 = wb(c2, "splice", b2, cc.POSITIVE_INFINITY);
    a2.reverse();
    Ag(d2, a2);
  } else {
    let a2 = wb(d2, "splice", e + f2 - b2, cc.POSITIVE_INFINITY);
    a2.reverse();
    Ag(c2, a2);
  }
};
var Kg = (a, b2) => a.get(b2);
var Lg = (a, b2, c2) => a.slice(b2, c2);
var Mg = (a, b2, c2, d2) => {
  a.splice(b2, c2, d2);
};
var Og = (a, b2) => {
  let c2 = Kg(a, b2), d2 = c2[1], e = c2[2], f2 = b2 - 1 | 0, g2 = [], h2 = d2._tokenizer;
  if (!h2) {
    h2 = e.parser[hb(d2.contentType)](d2.start);
    if (d2._contentTypeTextTrailing) h2._contentTypeTextTrailing = true;
  }
  let i2 = h2.events, j2 = [], k2 = {}, l2, m = -1, n2 = d2, o2 = 0, p2 = 0, q2 = [];
  yb(q2, p2);
  while (n2) {
    while (true) {
      f2 = f2 + 1 | 0;
      if (Kg(a, f2)[1] == n2) break;
    }
    yb(g2, f2);
    if (!n2._tokenizer) {
      let a2 = e.sliceStream(n2);
      if (!n2.next) yb(a2, fc);
      if (l2) h2.defineSkip(n2.start);
      if (n2._isInFirstContentOfListItem) h2._gfmTasklistFirstContentOfListItem = true;
      h2.write(a2);
      if (n2._isInFirstContentOfListItem) h2._gfmTasklistFirstContentOfListItem = void 0;
    }
    l2 = n2;
    n2 = n2.next;
  }
  n2 = d2;
  let r2 = kb(i2);
  while (true) {
    m = m + 1 | 0;
    if (m >= r2) break;
    if (i2[m][0] == "exit" && i2[m - 1 | 0][0] == "enter" && i2[m][1].type == i2[m - 1 | 0][1].type && i2[m][1].start.line != i2[m][1].end.line) {
      p2 = m + 1 | 0;
      yb(q2, p2);
      n2._tokenizer = void 0;
      n2.previous = void 0;
      n2 = n2.next;
    }
  }
  h2.events = [];
  if (n2) {
    n2._tokenizer = void 0;
    n2.previous = void 0;
  } else q2.pop();
  m = kb(q2);
  while (true) {
    m = m - 1 | 0;
    if (m < 0) break;
    let b3;
    if ((m + 1 | 0) < kb(q2)) b3 = q2[m + 1 | 0];
    let c3 = Cb(i2, q2[m], b3), d3 = g2.pop() | 0, e2 = [];
    yb(e2, d3);
    yb(e2, (d3 + kb(c3) | 0) - 1 | 0);
    yb(j2, e2);
    Mg(a, d3, 2, c3);
  }
  j2.reverse();
  m = -1;
  let s2 = kb(j2);
  while (true) {
    m = m + 1 | 0;
    if (m >= s2) break;
    let a2 = j2[m], b3 = a2[0] | 0, c3 = a2[1] | 0;
    k2[(o2 + b3 | 0) + ""] = o2 + c3 | 0;
    o2 = ((o2 + c3 | 0) - b3 | 0) - 1 | 0;
  }
  return k2;
};
var Pg = (a) => {
  let b2 = {}, c2 = -1, d2 = new Ig(a), e = false;
  while (true) {
    c2 = c2 + 1 | 0;
    if (c2 >= d2.length) break;
    while (c2 + "" in Object(b2)) c2 = b2[c2 + ""] | 0;
    let a2 = Kg(d2, c2);
    if (c2 > 0 && a2[1].type == jg && Kg(d2, c2 - 1 | 0)[1].type == fg) {
      let b3 = a2[1]._tokenizer.events, c3 = 0;
      if (c3 < kb(b3) && b3[c3][1].type == ue) c3 = c3 + 2 | 0;
      if (c3 < kb(b3) && b3[c3][1].type == We) while (true) {
        c3 = c3 + 1 | 0;
        if (c3 >= kb(b3)) break;
        if (b3[c3][1].type == We) break;
        if (b3[c3][1].type == kg) {
          b3[c3][1]._isInFirstContentOfListItem = true;
          c3 = c3 + 1 | 0;
        }
      }
    }
    if (a2[0] == "enter") {
      if (a2[1].contentType) {
        Object.assign(b2, Og(d2, c2));
        c2 = b2[c2 + ""] | 0;
        e = true;
      }
    } else if (a2[1]._container) {
      let b3 = c2, e2 = 0;
      while (true) {
        b3 = b3 - 1 | 0;
        if (b3 < 0) break;
        let a3 = Kg(d2, b3), c3 = hb(a3[1].type);
        if (c3 == te || c3 == ue) {
          if (a3[0] == "enter") {
            if (e2 > 0) Kg(d2, e2)[1].type = ue;
            a3[1].type = te;
            e2 = b3;
          }
        } else if (c3 == ve || c3 == dg) {
        } else break;
      }
      if (e2 > 0) {
        a2[1].end = Ob(Kg(d2, e2)[1].start);
        let b4 = Lg(d2, e2, c2);
        {
          let c3 = b4, d3 = a2;
          c3.unshift(d3);
        }
        Mg(d2, e2, (c2 - e2 | 0) + 1 | 0, b4);
      }
    }
  }
  Mc(a, 0, 1 / 0, Lg(d2, 0));
  return !e;
};
var Yg = (a) => function(c2, d2) {
  let e = -1, f2, g2 = kb(c2);
  while (true) {
    e = e + 1 | 0;
    if (e > g2) break;
    if (f2 === void 0) {
      if (e < g2 && c2[e] && c2[e][1].type == re) {
        f2 = e;
        e = e + 1 | 0;
      }
    } else if (e >= g2 || !c2[e] || c2[e][1].type != re) {
      let a2 = f2 | 0;
      if (e != (a2 + 2 | 0)) {
        c2[a2][1].end = c2[e - 1 | 0][1].end;
        c2.splice(a2 + 2 | 0, (e - a2 | 0) - 2 | 0);
        e = a2 + 2 | 0;
        g2 = kb(c2);
      }
      f2 = void 0;
    }
  }
  if (typeof a == "function") return a(c2, d2);
  return c2;
};
var Zg = (a, b2) => ({ resolveAll: Yg(b2), tokenize: Om((b3, c2) => {
  let d2 = b3.parser.constructs[a], e, f2 = (c3) => {
    if (c3 === null) return true;
    let e2 = pb(d2, c3);
    if (!e2) return false;
    let f3 = -1, g3 = kb(e2);
    while (true) {
      f3 = f3 + 1 | 0;
      if (f3 >= g3) break;
      let c4 = e2[f3].previous;
      if (typeof c4 != "function" || c4.call(b3, b3.previous)) return true;
    }
    return false;
  }, g2 = function(b4) {
    if (f2(b4)) {
      c2.exit(re);
      return e(b4);
    }
    c2.consume(b4);
    return g2;
  }, h2 = function(b4) {
    if (b4 === null) {
      c2.consume(b4);
      return;
    }
    c2.enter(re);
    c2.consume(b4);
    return g2;
  }, i2 = function(b4) {
    if (f2(b4)) return e(b4);
    return h2(b4);
  };
  e = c2.attempt(d2, i2, h2);
  return i2;
}) });
var bh = (a) => {
  if (a === null || $c(a) || Rc(jd, a)) return mc;
  if (Rc(id, a)) return lc;
};
var ch = (a, b2) => {
  a.column = a.column + b2;
  a.offset = a.offset + b2;
  a._bufferIndex = a._bufferIndex + b2;
};
var rh = (a) => {
  if (rb(qh, a)) return qh[a];
  return false;
};
var Ih = (a, b2, c2, d2, e, f2, g2, h2, i2) => {
  let j2 = 1 / 0;
  if (i2 != 0) j2 = i2;
  let k2 = 0, l2, m, n2, o2 = function(c3) {
    if (c3 === Qd || c3 === 62 || c3 === 92) {
      a.consume(c3);
      return l2;
    }
    return l2(c3);
  };
  l2 = function(d3) {
    if (d3 === 62) {
      a.exit(lg);
      a.exit(h2);
      return m(d3);
    }
    if (d3 === null || d3 === 60 || Zc(d3)) return c2(d3);
    a.consume(d3);
    if (d3 === 92) return o2;
    return l2;
  };
  m = function(g3) {
    if (g3 === 62) {
      a.enter(f2);
      a.consume(g3);
      a.exit(f2);
      a.exit(e);
      a.exit(d2);
      return b2;
    }
    a.enter(h2);
    a.enter(lg, { contentType: tc });
    return l2(g3);
  };
  let p2 = function(c3) {
    if (c3 === 40 || c3 === 41 || c3 === 92) {
      a.consume(c3);
      return n2;
    }
    return n2(c3);
  };
  n2 = function(f3) {
    if (k2 == 0 && (f3 === null || f3 === 41 || $c(f3))) {
      a.exit(lg);
      a.exit(h2);
      a.exit(g2);
      a.exit(d2);
      return b2(f3);
    }
    if (k2 < j2 && f3 === 40) {
      a.consume(f3);
      k2 = k2 + 1 | 0;
      return n2;
    }
    if (f3 === 41) {
      a.consume(f3);
      k2 = k2 - 1 | 0;
      return n2;
    }
    if (f3 === null || f3 === 32 || f3 === 40 || Vc(f3)) return c2(f3);
    a.consume(f3);
    if (f3 === 92) return p2;
    return n2;
  };
  return function(i3) {
    if (i3 === 60) {
      a.enter(d2);
      a.enter(e);
      a.enter(f2);
      a.consume(i3);
      a.exit(f2);
      return m;
    }
    if (i3 === null || i3 === 32 || i3 === 41 || Vc(i3)) return c2(i3);
    a.enter(d2);
    a.enter(g2);
    a.enter(h2);
    a.enter(lg, { contentType: tc });
    return n2(i3);
  };
};
var Kh = (a, b2, c2, d2, e, f2) => {
  let g2 = 0, h2, i2, j2, k2 = function(c3) {
    if (c3 == g2 || c3 === Xd) {
      a.consume(c3);
      return h2;
    }
    return h2(c3);
  };
  h2 = function(c3) {
    if (c3 == g2 || c3 === null || Zc(c3)) {
      a.exit(lg);
      return i2(c3);
    }
    a.consume(c3);
    if (c3 === Xd) return k2;
    return h2;
  };
  i2 = function(d3) {
    if (d3 == g2) {
      a.exit(f2);
      return j2(g2);
    }
    if (d3 === null) return c2(d3);
    if (Zc(d3)) {
      a.enter(te);
      a.consume(d3);
      a.exit(te);
      return pe(a, i2, ve, 0);
    }
    let e2 = { contentType: tc };
    a.enter(lg, e2);
    return h2(d3);
  };
  j2 = function(h3) {
    if (h3 == g2) {
      a.enter(e);
      a.consume(h3);
      a.exit(e);
      a.exit(d2);
      return b2;
    }
    a.enter(f2);
    return i2(h3);
  };
  return function(f3) {
    if (f3 === Ad || f3 === Dd || f3 === Ed) {
      a.enter(d2);
      a.enter(e);
      a.consume(f3);
      a.exit(e);
      g2 = f3 === Ed ? Fd : f3 | 0;
      return j2;
    }
    return c2(f3);
  };
};
var Lh = (a, b2) => {
  let c2 = false, d2;
  d2 = function(f2) {
    if (Zc(f2)) {
      a.enter(te);
      a.consume(f2);
      a.exit(te);
      c2 = true;
      return d2;
    }
    if (_c(f2)) {
      let b3 = we;
      if (c2) b3 = ve;
      return pe(a, d2, b3, 0)(f2);
    }
    return b2(f2);
  };
  return d2;
};
var Mh = (a) => a.replace(Nh, ie).replace(Oh, "").toLowerCase().toUpperCase();
var Mi = (a, b2, c2) => {
  a[b2 + ""] = c2;
};
var Ni = (a, b2) => {
  let c2 = [];
  c2[0] = a;
  c2[1] = b2;
  return c2;
};
var $i = (a, b2) => function(d2) {
  {
    let g2 = 1, h2 = 1, i2 = 0;
    if (d2) {
      let a2 = d2.line;
      if (a2) g2 = +a2;
      let b3 = d2.column;
      if (b3) h2 = +b3;
      let c2 = d2.offset;
      if (c2) i2 = +c2;
    }
    let j2 = [-1, 0, g2, h2, i2], k2 = {}, l2 = [], m = [], n2 = [], o2 = {}, p2, q2, r2 = () => {
      let b3 = j2[2] + "";
      if (b3 in Object(k2) && j2[3] < 2) {
        j2[3];
        let a2 = +pb(k2, b3);
        j2[3], j2 = [j2[0], j2[1], j2[2], a2, j2[4]];
        j2[4];
        let c2 = j2[4] + +pb(k2, b3) - 1;
        j2[4], j2 = [j2[0], j2[1], j2[2], j2[3], c2];
      }
    }, s2 = (b3, c2) => {
      if (b3.resolveAll && !Gb(l2, b3)) yb(l2, b3);
      if (b3.resolve) {
        let a2 = o2.events, d3 = b3.resolve(Bb(a2, c2), o2);
        Mc(a2, c2, kb(a2) - (c2 | 0) | 0, d3);
      }
      if (b3.resolveTo) o2.events = b3.resolveTo(o2.events, o2);
    }, t2 = (b3, c2) => function(d3, e, f2) {
      let g3 = [], h3 = 0, i3, k3 = 0, l3, m2, s3 = function(c3) {
        b3(i3, l3, k3);
        return e;
      }, t3 = function(b4) {
        l3();
        h3 = h3 + 1 | 0;
        if (h3 < g3.length) return m2(g3[h3]);
        return f2;
      };
      m2 = function(b4) {
        return function(d4) {
          let e2;
          {
            let a2 = j2;
            e2 = [a2[0], a2[1], a2[2], a2[3], a2[4]];
          }
          let f3 = o2.previous, g4 = o2.currentConstruct;
          k3 = kb(o2.events);
          let h4 = Array.from(n2);
          l3 = function() {
            j2 = e2;
            o2.previous = f3;
            o2.currentConstruct = g4;
            o2.events.length = k3;
            n2 = h4;
            r2();
          };
          i3 = b4;
          if (!b4.partial) o2.currentConstruct = b4;
          if (b4.name) {
            if (o2.parser.constructs.disable.null.includes(b4.name)) return t3(d4);
          }
          let q4 = o2;
          if (c2) q4 = Object.assign(Object.create(o2), c2);
          return b4.tokenize.call(q4, p2, s3, t3)(d4);
        };
      };
      let q3 = function(b4) {
        g3 = b4;
        h3 = 0;
        if (g3.length == 0) return f2;
        return m2(g3[0]);
      };
      if (Array.isArray(d3)) return q3(d3);
      if ("tokenize" in Object(d3)) {
        let a2 = [d3];
        return q3(a2);
      }
      return function(b4) {
        let c3, e2;
        if (b4 !== null) {
          c3 = pb(d3, b4);
          e2 = d3.null;
        }
        let f3 = [];
        if (Array.isArray(c3)) f3 = c3;
        else if (c3) f3 = [c3];
        let g4 = [];
        if (Array.isArray(e2)) g4 = e2;
        else if (e2) g4 = [e2];
        let h4 = [...f3, ...g4];
        return q3(h4)(b4);
      };
    }, D2 = function(b3, c2, d3) {
      c2();
    };
    p2 = { attempt: t2(function(b3, c2, d3) {
      s2(b3, d3);
    }), check: t2(D2), consume: function(b3) {
      if (Zc(b3)) {
        j2[2];
        let c2 = j2[2] + 1;
        j2[2], j2 = [j2[0], j2[1], c2, j2[3], j2[4]];
        j2[3];
        j2[3], j2 = [j2[0], j2[1], j2[2], 1, j2[4]];
        let a2 = b3 === qd ? 2 : 1;
        j2[4];
        let d3 = j2[4] + a2;
        j2[4], j2 = [j2[0], j2[1], j2[2], j2[3], d3];
        r2();
      } else if (b3 !== sd) {
        j2[3];
        let a2 = j2[3] + 1;
        j2[3], j2 = [j2[0], j2[1], j2[2], a2, j2[4]];
        j2[4];
        let b4 = j2[4] + 1;
        j2[4], j2 = [j2[0], j2[1], j2[2], j2[3], b4];
      }
      if (j2[0] < 0) {
        j2[1];
        let a2 = j2[1] + 1;
        j2[1], j2 = [j2[0], a2, j2[2], j2[3], j2[4]];
      } else {
        j2[0];
        let c2 = j2[0] + 1;
        j2[0], j2 = [c2, j2[1], j2[2], j2[3], j2[4]];
        let b4 = m[j2[1] | 0].length;
        if (j2[0] == b4) {
          j2[0];
          j2[0], j2 = [-1, j2[1], j2[2], j2[3], j2[4]];
          j2[1];
          let b5 = j2[1] + 1;
          j2[1], j2 = [j2[0], b5, j2[2], j2[3], j2[4]];
        }
      }
      o2.previous = b3;
    }, enter: function(b3, c2) {
      let d3 = c2;
      if (!c2) d3 = {};
      d3.type = b3;
      d3.start = ne(j2);
      yb(o2.events, ["enter", d3, o2]);
      n2.push(d3);
      return d3;
    }, exit: function(b3) {
      let c2 = n2.pop();
      c2.end = ne(j2);
      yb(o2.events, ["exit", c2, o2]);
      return c2;
    }, interrupt: t2(D2, { interrupt: true }) };
    o2.code = fc;
    o2.containerState = {};
    o2.defineSkip = function(b3) {
      qb(k2, b3.line, b3.column);
      r2();
    };
    o2.events = [];
    o2.now = function() {
      return ne(j2);
    };
    o2.parser = a;
    o2.previous = fc;
    o2.sliceSerialize = function(b3, c2) {
      {
        let a2 = ke(m, b3), e = -1, f2 = [], g3 = false, h3 = kb(a2);
        while (true) {
          e = e + 1 | 0;
          if (e >= h3) break;
          let b4 = a2[e], d3 = "";
          if (typeof b4 == "string") d3 = hb(b4);
          else if (b4 === od) d3 = he;
          else if (b4 === pd) d3 = ge;
          else if (b4 === qd) d3 = he + ge;
          else if (b4 === rd) d3 = c2 ? ie : fe;
          else if (b4 === sd) {
            if (!c2 && g3) continue;
            d3 = ie;
          } else d3 = Ib(b4);
          g3 = b4 === rd;
          f2.push(d3);
        }
        return f2.join("");
      }
    };
    o2.sliceStream = function(b3) {
      return ke(m, b3);
    };
    o2.write = function(c2) {
      m = Nc(m, c2);
      while (j2[1] < kb(m)) {
        let a2 = m[j2[1] | 0];
        if (typeof a2 == "string") {
          let b3 = j2[1];
          if (j2[0] < 0) {
            j2[0];
            j2[0], j2 = [0, j2[1], j2[2], j2[3], j2[4]];
          }
          let c3 = a2;
          while (j2[1] == b3 && j2[0] < c3.length) q2 = q2(c3.charCodeAt(j2[0] | 0) | 0);
        } else q2 = q2(a2);
      }
      if (m[kb(m) - 1 | 0] !== null) return [];
      s2(b2, 0);
      o2.events = kd(l2, o2.events, o2);
      return o2.events;
    };
    q2 = b2.tokenize.call(o2, p2);
    if (b2.resolveAll) yb(l2, b2);
    return o2;
  }
};
var _i = (a) => {
  let b2 = a ?? {}, c2 = [];
  yb(c2, Zi);
  let d2 = b2.extensions;
  if (d2) {
    let a2 = 0, b3 = kb(d2);
    while (a2 < b3) {
      yb(c2, d2[a2]);
      a2 = a2 + 1 | 0;
    }
  }
  let f2 = { constructs: Qc(c2), defined: [], lazy: {} };
  f2.content = $i(f2, og);
  f2.document = $i(f2, wg);
  f2.flow = $i(f2, Wg);
  f2.string = $i(f2, _g);
  f2.text = $i(f2, ah);
  return f2;
};
var aj = (a) => {
  while (!Pg(a)) {
  }
  return a;
};
var bj = () => {
  let a = 1, b2 = "", c2 = true, d2 = false;
  return function(f2, g2, h2) {
    let i2 = [], j2 = b2 + Wb(f2, g2), k2 = 0;
    b2 = "";
    if (c2) {
      if (j2.length > 0 && (j2.charCodeAt(0) | 0) == ce) k2 = 1;
      c2 = false;
    }
    let l2 = j2.length;
    while (k2 < l2) {
      let c3 = k2, e = -1;
      while (c3 < l2) {
        let a2 = j2.charCodeAt(c3) | 0;
        if (a2 == td || a2 == ud || a2 == vd || a2 == xd) {
          e = a2;
          break;
        }
        ++c3;
      }
      if (e < 0) {
        b2 = j2.slice(k2);
        break;
      }
      let f3 = e;
      if (f3 == vd && k2 == c3 && d2) {
        yb(i2, qd);
        d2 = false;
      } else {
        if (d2) {
          yb(i2, od);
          d2 = false;
        }
        if (k2 < c3) {
          yb(i2, j2.slice(k2, c3));
          a = a + (c3 - k2 | 0);
        }
        if (f3 == td) {
          yb(i2, de);
          ++a;
        } else if (f3 == ud) {
          let b3 = +dc.ceil(a / +Jc) * +Jc;
          yb(i2, rd);
          while (a < b3) {
            yb(i2, sd);
            ++a;
          }
          ++a;
        } else {
          if (f3 == vd) yb(i2, pd);
          else d2 = true;
          a = 1;
        }
      }
      k2 = c3 + 1 | 0;
    }
    if (h2) {
      if (d2) yb(i2, od);
      if (b2.length > 0) yb(i2, b2);
      yb(i2, fc);
    }
    return i2;
  };
};
var cj = (a, b2) => {
  let d2 = Number.parseInt(a, b2) | 0, e = false;
  if (d2 < ud) e = true;
  else if (d2 == wd) e = true;
  else if (d2 > xd && d2 < yd) e = true;
  else if (d2 > be && d2 < 160) e = true;
  else if (d2 > 55295 && d2 < 57344) e = true;
  else if (d2 > 64975 && d2 < 65008) e = true;
  else if ((d2 & 65535) == 65535) e = true;
  else if ((d2 & 65535) == 65534) e = true;
  else if (d2 > 1114111) e = true;
  if (e) return je;
  {
    let a2 = d2;
    return hb(String.fromCodePoint(a2));
  }
};
var dj = function(a, b2) {
  let c2 = hb(b2[0]), d2 = b2[1], e = b2[2];
  if (d2) return d2;
  let f2 = hb(e);
  if ((f2.charCodeAt(0) | 0) == Bd) {
    let a2 = f2.charCodeAt(1) | 0, b3 = a2 == ae || a2 == Vd, c3 = "";
    if (b3) {
      c3 = f2.slice(2);
      return cj(c3, Ic);
    }
    c3 = f2.slice(1);
    return cj(c3, Hc);
  }
  return rh(f2) || c2;
};
var ej = (a) => {
  let b2 = Nm(dj);
  return hb(a.replace(fj, b2));
};
var gj = (a) => {
  if (a && typeof a == "number") return hb(a);
  return "1";
};
var hj = (a) => {
  if (a == null) return gj() + ":" + gj();
  return gj(a.line) + ":" + gj(a.column);
};
var ij = (a) => {
  if (a == null) return hj() + "-" + hj();
  return hj(a.start) + "-" + hj(a.end);
};
var jj = (a) => {
  if (!a || typeof a != "object") return "";
  if (rb(a, "position") || rb(a, "type")) return ij(a.position);
  if (rb(a, "start") || rb(a, "end")) return ij(a);
  if (rb(a, "line") || rb(a, "column")) return hj(a);
  return "";
};
var kj = (a, b2, c2) => {
  let d2 = "", e = 0, f2 = kb(a);
  while (e < f2) {
    d2 = d2 + hb(nj(a[e], b2, c2));
    e = e + 1 | 0;
  }
  return d2;
};
var mj = (a, b2) => {
  let c2 = b2 ?? {}, d2 = true, e = true, f2 = c2.includeImageAlt, g2 = c2.includeHtml;
  if (typeof f2 == "boolean") d2 = f2;
  if (typeof g2 == "boolean") e = g2;
  return hb(oj(a, d2, e));
};
var qj = (a) => ({ line: a.line, column: a.column, offset: a.offset });
var wj = (a, b2) => {
  let c2 = -1, d2 = kb(b2);
  while (true) {
    c2 = c2 + 1 | 0;
    if (c2 >= d2) break;
    let e = b2[c2];
    if (Array.isArray(e)) wj(a, e);
    else {
      {
        let c3 = e;
        for (let b3 in c3) {
          if (!rb(c3, b3)) continue;
          if (b3 == "canContainEols") {
            let d3 = c3[b3];
            if (d3) {
              let c4 = a[b3], e2 = 0, f2 = kb(d3);
              while (e2 < f2) {
                yb(c4, d3[e2]);
                e2 = e2 + 1 | 0;
              }
            }
          } else if (b3 == "transforms") {
            let d3 = c3[b3];
            if (d3) {
              let c4 = a[b3], e2 = 0, f2 = kb(d3);
              while (e2 < f2) {
                yb(c4, d3[e2]);
                e2 = e2 + 1 | 0;
              }
            }
          } else if (b3 == "enter" || b3 == "exit") {
            let d3 = c3[b3];
            if (d3) Object.assign(a[b3], d3);
          }
        }
      }
    }
  }
};
var Aj = (a, b2, c2) => Om((d2, e) => {
  a.call(d2, b2(e), e);
  if (c2) c2.call(d2, e);
});
var Bj = (a, b2) => Om((c2, d2) => {
  if (b2) b2.call(c2, d2);
  a.call(c2, d2);
});
var Cj = (a, b2) => a.sliceSerialize(b2);
var Dj = (a, b2) => hb(Cj(a, b2));
var Ej = (a) => {
  let b2 = a.stack;
  return b2[kb(b2) - 1 | 0];
};
var Fj = (a, b2) => {
  let c2 = a.stack;
  return c2[kb(c2) - b2 | 0];
};
var Hj = (a) => {
  let b2 = Ej(a);
  if (a.data.inReference) {
    let c2 = a.data.referenceType || "shortcut";
    b2.type = hb(b2.type) + "Reference";
    b2.referenceType = c2;
    delete b2.url;
    delete b2.title;
  } else {
    delete b2.identifier;
    delete b2.label;
  }
  a.data.referenceType = void 0;
};
var Ij = (a) => a == bg || a == cg;
var Jj = (a) => Ij(a) || a == Zf;
var Kj = (a) => {
  if (a == ve || a == hg || a == eg) return true;
  return a == fg || a == gg;
};
var Lj = (a) => {
  if (a == ve || a == $f || a == ag) return true;
  return a == _f || a == dg;
};
var fk = (a, b2) => a.data(b2);
var jk = (a, b2) => {
  let c2 = b2 ?? {}, d2;
  d2 = Nm((b3, c3) => {
    let e2;
    if (c3.length > 0) e2 = c3[0];
    let f2 = d2.invalid, g2 = d2.handlers;
    if (e2 && rb(e2, a)) {
      let b4 = hb(e2[a]);
      f2 = rb(g2, b4) ? g2[b4] : d2.unknown;
    }
    if (f2) return xb(f2, b3, c3);
  });
  let e = c2.handlers ?? {};
  d2.handlers = e;
  d2.invalid = c2.invalid;
  d2.unknown = c2.unknown;
  return d2;
};
var kk = (a, b2) => {
  if (!b2) return;
  let c2 = 0, d2 = kb(b2);
  while (c2 < d2) {
    yb(a, b2[c2]);
    c2 = c2 + 1 | 0;
  }
};
var mk = (a, b2) => {
  if (!b2) return a;
  let c2 = -1, d2 = b2.extensions;
  if (d2) {
    let b3 = kb(d2);
    while (true) {
      c2 = c2 + 1 | 0;
      if (c2 >= b3) break;
      mk(a, d2[c2]);
    }
  }
  for (let c3 in b2) if (rb(b2, c3)) if (c3 == "extensions") {
  } else if (c3 == "unsafe") kk(a.unsafe, b2[c3]);
  else if (c3 == "join") kk(a.join, b2[c3]);
  else if (c3 == "handlers") {
    {
      let d3 = a.handlers, e = b2[c3];
      if (e) Object.assign(d3, e);
    }
  } else a.options[c3] = b2[c3];
  return a;
};
var nk = function(a, b2, c2, d2) {
  if (d2) return ">" + hb(b2);
  return "> " + hb(b2);
};
var qk = (a, b2, c2) => {
  let d2 = b2;
  if (typeof d2 == "string") {
    d2 = [];
    Array.prototype.push.call(d2, b2);
  }
  if (d2 == null || kb(d2) == 0) return c2;
  let e = -1, f2 = kb(d2);
  while (true) {
    e = e + 1 | 0;
    if (e >= f2) break;
    if (Gb(a, d2[e])) return true;
  }
  return false;
};
var rk = (a, b2) => qk(a, b2.inConstruct, true) && !qk(a, b2.notInConstruct, false);
var vk = (a, b2) => {
  if (typeof b2 != "string") throw new TypeError("Expected substring");
  let c2 = hb(a), d2 = hb(b2), e = c2.indexOf(d2), f2 = e, g2 = 0, h2 = 0, i2 = d2.length;
  while (e != -1) {
    if (e == f2) {
      g2 = g2 + 1 | 0;
      if (g2 > h2) h2 = g2;
    } else g2 = 1;
    f2 = e + i2 | 0;
    e = c2.indexOf(d2, f2);
  }
  return h2;
};
var yk = (a) => {
  throw new ec(a);
};
var zk = (a, b2) => a.charCodeAt(b2);
var Ak = (a) => {
  let b2 = [], c2 = kb(a), d2 = 0;
  while (d2 < c2) {
    b2.push(a[d2]);
    d2 = d2 + 1 | 0;
  }
  return b2;
};
var Ck = (a, b2) => {
  if ((b2.options ?? {}).fences !== false) return false;
  let c2 = a.value;
  if (!c2) return false;
  if (a.lang) return false;
  let d2 = hb(c2);
  if (!Dk.test(d2)) return false;
  if (Ek.test(d2)) return false;
  return true;
};
var Gk = function(a, b2, c2, d2) {
  if (d2) return hb(b2);
  return "    " + hb(b2);
};
var Jk = (a) => {
  let b2 = (a.options ?? {}).quote, c2 = '"';
  if (b2) c2 = hb(b2);
  if (c2 != '"' && c2 != "'") yk("Cannot serialize title with `" + c2 + "` for `options.quote`, expected `\"`, or `'`");
  return c2;
};
var Ok = (a) => "&#x" + hb(a.toString(16)).toUpperCase() + ";";
var Pk = (a, b2, c2) => {
  let d2 = bh(a), e = bh(b2);
  if (d2 === void 0) {
    if (e === void 0) {
      if (c2 == "_") return { inside: true, outside: true };
      return { inside: false, outside: false };
    }
    if (e === 1) return { inside: true, outside: true };
    return { inside: false, outside: true };
  }
  if (d2 === 1) {
    if (e === void 0) return { inside: false, outside: false };
    if (e === 1) return { inside: true, outside: true };
    return { inside: false, outside: false };
  }
  if (e === void 0) return { inside: false, outside: false };
  if (e === 1) return { inside: true, outside: false };
  return { inside: false, outside: false };
};
var Tk = (a, b2) => {
  let c2 = b2(a);
  if (c2 === false) return true;
  if (c2 === "skip") return false;
  if (a != null && typeof a == "object" && "children" in a) {
    let c3 = a.children, d2 = 0, e = kb(c3);
    while (d2 < e) {
      if (Tk(c3[d2], b2)) return true;
      d2 = d2 + 1 | 0;
    }
  }
  return false;
};
var Vk = (a, b2) => {
  let c2 = false;
  Tk(a, function(b3) {
    if ("value" in b3 && Wk.test(hb(b3.value))) {
      c2 = true;
      return false;
    }
    if (hb(b3.type) == "break") {
      c2 = true;
      return false;
    }
  });
  let e = a.depth;
  if (!(!e || +e < 3)) return false;
  if (mj(a).length == 0) return false;
  if ((b2.options ?? {}).setext || c2) return true;
  return false;
};
var pl = (a, b2) => {
  if ((b2.options ?? {}).resourceLink) return false;
  let c2 = a.url;
  if (!c2) return false;
  if (a.title) return false;
  let d2 = a.children;
  if (!d2 || kb(d2) != 1) return false;
  if (hb(d2[0].type) != "text") return false;
  let e = mj(a), f2 = hb(c2);
  if (e != f2 && "mailto:" + e != f2) return false;
  if (!ql.test(f2)) return false;
  if (rl.test(f2)) return false;
  return true;
};
var zl = (a) => {
  let b2 = (a.options ?? {}).bullet, c2 = "*";
  if (b2) c2 = hb(b2);
  if (c2 != "*" && c2 != "+" && c2 != "-") yk("Cannot serialize items with `" + c2 + "` for `options.bullet`, expected `*`, `+`, or `-`");
  return c2;
};
var Al = (a) => {
  let b2 = zl(a), c2 = (a.options ?? {}).bulletOther;
  if (!c2) {
    if (b2 == "*") return "-";
    return "*";
  }
  let d2 = hb(c2);
  if (d2 != "*" && d2 != "+" && d2 != "-") yk("Cannot serialize items with `" + d2 + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
  if (d2 == b2) yk("Expected `bullet` (`" + b2 + "`) and `bulletOther` (`" + d2 + "`) to be different");
  return d2;
};
var Cl = (a) => {
  let b2 = (a.options ?? {}).rule, c2 = "*";
  if (b2) c2 = hb(b2);
  if (c2 != "*" && c2 != "-" && c2 != "_") yk("Cannot serialize rules with `" + c2 + "` for `options.rule`, expected `*`, `-`, or `_`");
  return c2;
};
var Dl = (a) => hb(a) == "0";
var Ml = (a) => {
  if (a == null || typeof a != "object") return false;
  let b2 = hb(a.type);
  if (b2 == "break") return true;
  if (b2 == "delete") return true;
  if (b2 == "emphasis") return true;
  if (b2 == "footnote") return true;
  if (b2 == "footnoteReference") return true;
  if (b2 == "image") return true;
  if (b2 == "imageReference") return true;
  if (b2 == "inlineCode") return true;
  if (b2 == "inlineMath") return true;
  if (b2 == "link") return true;
  if (b2 == "linkReference") return true;
  if (b2 == "mdxJsxTextElement") return true;
  if (b2 == "mdxTextExpression") return true;
  if (b2 == "strong") return true;
  if (b2 == "text") return true;
  if (b2 == "textDirective") return true;
  return false;
};
var Vl = (a) => {
  let b2 = (a.options ?? {}).ruleRepetition, c2 = 3;
  if (b2) c2 = b2 | 0;
  if (c2 < 3) yk("Cannot serialize rules with repetition `" + c2.toString() + "` for `options.ruleRepetition`, expected `3` or more");
  return c2;
};
var km = (a, b2, c2, d2) => {
  let e = kb(d2.join);
  while (true) {
    e = e - 1 | 0;
    if (e < 0) break;
    let f2 = [];
    yb(f2, a);
    yb(f2, b2);
    yb(f2, c2);
    yb(f2, d2);
    let g2 = xb(d2.join[e], void 0, f2);
    if (g2 === true || g2 === 1) break;
    if (typeof g2 == "number") return "\n".repeat(1 + (g2 | 0) | 0);
    if (g2 === false) return "\n\n<!---->\n\n";
  }
  return "\n\n";
};
var pm = (a, b2) => {
  let c2 = /\\(?=[!-\/:-@[-`{-~])/g, d2 = [], e = [], f2 = a + b2, g2 = 0, h2;
  while (true) {
    h2 = c2.exec(f2);
    if (h2 == null) break;
    yb(d2, h2.index);
  }
  let i2 = -1, j2 = kb(d2);
  while (true) {
    i2 = i2 + 1 | 0;
    if (i2 >= j2) break;
    let b3 = d2[i2] | 0;
    if (g2 != b3) yb(e, a.slice(g2, b3));
    yb(e, "\\");
    g2 = b3;
  }
  yb(e, a.slice(g2));
  return hb(e.join(""));
};
var vm = function(a, b2) {
  throw new ec("Cannot handle value `" + hb(b2[0]) + "`, expected node");
};
var wm = function(a, b2) {
  throw new ec("Cannot handle unknown node `" + hb(b2[0].type) + "`");
};
var xm = function(a, b2) {
  let c2 = b2[0], d2 = b2[1];
  if (hb(c2.type) == "definition" && hb(c2.type) == hb(d2.type)) return 0;
};
var ym = (a, b2) => {
  let c2 = b2 || {}, d2 = { handlers: Object.assign({}, Yl), indexStack: [], join: Ak($l), options: {}, stack: [], unsafe: Ak(em), associationId: function(b3) {
    {
      let c3 = b3.label, d3 = b3.identifier;
      if (c3 || !d3) {
        if (typeof c3 == "string") return c3;
        return "";
      }
      return ej(hb(d3));
    }
  }, containerPhrasing: Qm((a2, b3, c3) => {
    {
      let g3 = a2.indexStack, h2 = b3.children || [], i2 = [], j2 = -1, k2 = hb(c3.before), l2;
      yb(g3, -1);
      let m = a2.createTracker(c3), n2 = kb(h2);
      while (true) {
        j2 = j2 + 1 | 0;
        if (j2 >= n2) break;
        let d3 = h2[j2], e = "";
        g3[kb(g3) - 1 | 0] = j2;
        if ((j2 + 1 | 0) < n2) {
          let c4 = a2.handle.handlers[hb(h2[j2 + 1 | 0].type)];
          if (c4 && c4.peek) c4 = c4.peek;
          if (c4) {
            let d4 = Object.assign({}, m.current());
            d4.before = "";
            d4.after = "";
            let f4 = [];
            yb(f4, h2[j2 + 1 | 0]);
            yb(f4, b3);
            yb(f4, a2);
            yb(f4, d4);
            let g4 = hb(xb(c4, void 0, f4));
            if (g4.length > 0) e = g4.charAt(0);
          }
        } else e = hb(c3.after);
        if (kb(i2) > 0 && (k2 == "\r" || k2 == "\n") && hb(d3.type) == "html") {
          let b4 = hb(i2[kb(i2) - 1 | 0]);
          i2[kb(i2) - 1 | 0] = b4.replace(jm, " ");
          k2 = " ";
          m = a2.createTracker(c3);
          m.move(i2.join(""));
        }
        let f3 = Object.assign({}, m.current());
        f3.after = e;
        f3.before = k2;
        let o2 = [];
        yb(o2, d3);
        yb(o2, b3);
        yb(o2, a2);
        yb(o2, f3);
        let p2 = hb(xb(a2.handle, a2, o2));
        if (l2 && hb(l2) == p2.slice(0, 1)) p2 = Ok(hb(l2).charCodeAt(0) | 0) + p2.slice(1);
        let q2 = a2.attentionEncodeSurroundingInfo;
        a2.attentionEncodeSurroundingInfo = void 0;
        l2 = void 0;
        if (q2) {
          if (kb(i2) > 0 && q2.before) {
            let a3 = hb(i2[kb(i2) - 1 | 0]), b4 = "";
            if (a3.length > 0) b4 = a3.slice(a3.length - 1);
            if (k2 == b4) i2[kb(i2) - 1 | 0] = a3.slice(0, a3.length - 1) + Ok(k2.charCodeAt(0) | 0);
          }
          if (q2.after) l2 = e;
        }
        m.move(p2);
        yb(i2, p2);
        k2 = p2.length > 0 ? p2.slice(p2.length - 1) : "";
      }
      g3.pop();
      return hb(i2.join(""));
    }
  }), containerFlow: Qm((a2, b3, c3) => {
    {
      let g3 = a2.indexStack, h2 = b3.children || [], i2 = a2.createTracker(c3), j2 = [], k2 = -1, l2 = kb(h2);
      yb(g3, -1);
      while (true) {
        k2 = k2 + 1 | 0;
        if (k2 >= l2) break;
        let c4 = h2[k2];
        g3[kb(g3) - 1 | 0] = k2;
        let d3 = Object.assign({}, i2.current());
        d3.before = "\n";
        d3.after = "\n";
        let e = [];
        yb(e, c4);
        yb(e, b3);
        yb(e, a2);
        yb(e, d3);
        yb(j2, i2.move(xb(a2.handle, a2, e)));
        if (hb(c4.type) != "list") a2.bulletLastUsed = void 0;
        if (k2 < (l2 - 1 | 0)) yb(j2, i2.move(km(c4, h2[k2 + 1 | 0], b3, a2)));
      }
      g3.pop();
      return hb(j2.join(""));
    }
  }), createTracker: function(b3) {
    {
      let c3 = b3 || {}, d3 = c3.now || {}, e = 0;
      if (c3.lineShift) e = +c3.lineShift;
      let f3 = d3.line || 1, g3 = d3.column || 1, h2 = +f3, i2 = +g3;
      return { move: function(b4) {
        let c4 = "";
        if (b4) c4 = hb(b4);
        let d4 = c4.split(um), f4 = d4.length, g4 = d4[f4 - 1 | 0] ?? "";
        h2 = h2 + (f4 - 1 | 0) * 1;
        i2 = f4 == 1 ? i2 + g4.length * 1 : 1 + g4.length * 1 + e;
        return c4;
      }, current: function() {
        return { now: { line: h2, column: i2 }, lineShift: e };
      }, shift: function(b4) {
        e = e + +b4;
      } };
    }
  }, compilePattern: function(b3) {
    {
      if (!b3._compiled) {
        let a2 = "";
        if (b3.atBreak) a2 = "[\\r\\n][\\t ]*";
        let c3 = b3.before;
        if (c3) a2 = a2 + "(?:" + hb(c3) + ")";
        let d3 = "";
        if (a2.length > 0) d3 = "(" + a2 + ")";
        let e = hb(b3.character);
        if (hm.test(e)) d3 = d3 + "\\";
        d3 = d3 + e;
        let f3 = b3.after;
        if (f3) d3 = d3 + "(?:" + hb(f3) + ")";
        b3._compiled = new RegExp(d3, "g");
      }
      return b3._compiled;
    }
  } };
  d2.enter = function(b3) {
    yb(d2.stack, b3);
    return function() {
      d2.stack.pop.call(d2.stack);
    };
  };
  d2.indentLines = function(b3, c3) {
    {
      let e = hb(b3), f3 = [], g3 = 0, h2 = 0, i2;
      while (true) {
        i2 = om.exec(e);
        if (i2 == null) break;
        let a2 = e.slice(g3, i2.index | 0);
        yb(f3, c3(a2, h2, a2.length == 0));
        yb(f3, i2[0]);
        g3 = (i2.index | 0) + hb(i2[0]).length | 0;
        h2 = h2 + 1 | 0;
      }
      let j2 = e.slice(g3);
      yb(f3, c3(j2, h2, j2.length == 0));
      return hb(f3.join(""));
    }
  };
  d2.safe = Qm((a2, b3, c3) => {
    {
      let g3 = "", h2 = "";
      if (c3.before) g3 = hb(c3.before);
      let i2 = "";
      if (b3) i2 = hb(b3);
      if (c3.after) h2 = hb(c3.after);
      let j2 = g3 + i2 + h2, k2 = [], l2 = [], m = {}, n2 = -1, o2 = a2.unsafe, p2 = kb(o2);
      while (true) {
        n2 = n2 + 1 | 0;
        if (n2 >= p2) break;
        let b4 = o2[n2];
        if (!rk(a2.stack, b4)) continue;
        let c4 = a2.compilePattern(b4), d3;
        while (true) {
          d3 = c4.exec(j2);
          if (d3 == null) break;
          let a3 = rb(b4, "before") || !!b4.atBreak, e = rb(b4, "after"), f3 = d3.index | 0;
          if (a3) f3 = f3 + hb(d3[1]).length | 0;
          if (Gb(k2, f3)) {
            let b5 = m[f3 + ""];
            if (b5.before && !a3) b5.before = false;
            if (b5.after && !e) b5.after = false;
          } else {
            yb(k2, f3);
            m[f3 + ""] = { before: a3, after: e };
          }
        }
      }
      k2.sort(sm);
      let q2 = 0;
      if (g3.length > 0) q2 = g3.length;
      let r2 = j2.length;
      if (h2.length > 0) r2 = j2.length - h2.length;
      n2 = -1;
      let s2 = kb(k2);
      while (true) {
        n2 = n2 + 1 | 0;
        if (n2 >= s2) break;
        let a3 = k2[n2] | 0;
        if (a3 < q2 || a3 >= r2) continue;
        let b4 = false;
        if ((a3 + 1 | 0) < r2 && (n2 + 1 | 0) < s2 && k2[n2 + 1 | 0] === (a3 + 1 | 0)) {
          let c4 = m[a3 + ""], d4 = m[(a3 + 1 | 0) + ""];
          if (c4.after && !d4.before && !d4.after) b4 = true;
        }
        if (!b4 && n2 > 0 && k2[n2 - 1 | 0] === (a3 - 1 | 0)) {
          let c4 = m[a3 + ""], d4 = m[(a3 - 1 | 0) + ""];
          if (c4.before && !d4.before && !d4.after) b4 = true;
        }
        if (b4) continue;
        if (q2 != a3) yb(l2, pm(j2.slice(q2, a3), "\\"));
        q2 = a3;
        let d3 = j2.charAt(a3), e = c3.encode, f3 = false;
        if (e && Gb(e, d3)) f3 = true;
        if (rm.test(d3) && !f3) yb(l2, "\\");
        else {
          yb(l2, Ok(j2.charCodeAt(a3) | 0));
          q2 = q2 + 1 | 0;
        }
      }
      let t2 = "";
      if (c3.after) t2 = hb(c3.after);
      yb(l2, pm(j2.slice(q2, r2), t2));
      return hb(l2.join(""));
    }
  });
  mk(d2, c2);
  if (d2.options.tightDefinitions) yb(d2.join, Nm(xm));
  d2.handle = jk("type", { invalid: Nm(vm), unknown: Nm(wm), handlers: d2.handlers });
  let f2 = [];
  yb(f2, a);
  yb(f2);
  yb(f2, d2);
  yb(f2, { before: "\n", after: "\n", now: { line: 1, column: 1 }, lineShift: 0 });
  let g2 = hb(xb(d2.handle, d2, f2));
  if (g2.length > 0) {
    let a2 = g2.charCodeAt(g2.length - 1) | 0;
    if (a2 != 10 && a2 != 13) g2 = g2 + "\n";
  }
  return g2;
};
var Bm = (a, b2) => {
  let c2 = a.data;
  if (typeof c2 == "function") return c2.call(a, b2);
};
var n = JSON.parse("null");
var o = Object.prototype.hasOwnProperty;
var p = Object.prototype.toString;
var q = Array.prototype.slice;
var B = Nm(function(a, c2) {
  let d2 = b(c2), e = Array.prototype.pop.call(d2);
  if (typeof e != "function") j("Expected function as last argument, not " + e);
  let g2 = -1, h2 = a.fns, i2;
  i2 = Nm((a2, c3) => {
    g2 = g2 + 1 | 0;
    let j2, k3;
    if (g2 < h2.length) j2 = h2[g2];
    let l3 = [], m2 = c3.length;
    if (m2 > 0) {
      k3 = c3[0];
      let a3 = 1;
      while (a3 < m2) {
        l3.push(c3[a3]);
        a3 = a3 + 1 | 0;
      }
    }
    if (k3) {
      e(k3);
      return;
    }
    let o2 = d2, p2 = -1, q2 = o2.length;
    while (true) {
      p2 = p2 + 1 | 0;
      if (p2 >= q2) break;
      let a3;
      if (p2 < l3.length) a3 = l3[p2];
      if (a3 == null) {
        {
          let a4 = l3, b2 = p2, c4 = o2[p2];
          a4[b2 + ""] = c4;
        }
      }
    }
    d2 = l3;
    if (typeof j2 == "function") ((a3, c4) => {
      let d3 = false, e2 = Nm((a4, b2) => {
        if (d3) return;
        d3 = true;
        c4.apply(void 0, b2);
      }), g3 = function(b2) {
        let c5 = [];
        c5.push(n);
        c5.push(b2);
        e2.apply(void 0, c5);
      };
      return Nm((c5, h3) => {
        let i3 = b(h3), j3 = a3.length > i3.length, k4;
        if (j3) Array.prototype.push.call(i3, e2);
        try {
          k4 = a3.apply(c5, i3);
        } catch (a4) {
          if (j3 && d3) throw a4;
          let b2 = [];
          b2.push(a4);
          e2.apply(void 0, b2);
          return;
        }
        if (!j3) if (k4 && k4.then && typeof k4.then == "function") k4.then(g3, e2);
        else if (f(k4)) {
          let a4 = [];
          a4.push(k4);
          e2.apply(void 0, a4);
        } else g3(k4);
      });
    })(j2, i2).apply(void 0, l3);
    else {
      let a3 = [];
      a3.push(n);
      let b2 = 0, c4 = l3.length;
      while (b2 < c4) {
        a3.push(l3[b2]);
        ++b2;
      }
      e.apply(void 0, a3);
    }
  });
  let k2 = [];
  k2.push(n);
  let l2 = 0, m = d2.length;
  while (l2 < m) {
    k2.push(d2[l2]);
    ++l2;
  }
  i2.apply(void 0, k2);
});
var C = Om(function(a, b2) {
  if (typeof b2 != "function") j("Expected `middelware` to be a function, not " + b2);
  Array.prototype.push.call(a.fns, b2);
  return a;
});
var ca = "history path basename stem extname dirname".split(" ");
var da = {};
var ea = Pm((a, b2, c2, d2) => {
  if (a === void 0) throw new TypeError("Class constructor VFileMessage cannot be invoked without 'new'");
  return U(b2, c2, d2);
});
da = ea.prototype;
Object.setPrototypeOf(ea, Error);
Object.setPrototypeOf(da, Error.prototype);
Object.defineProperty(ea, "name", { configurable: true, value: "VFileMessage" });
da.file = "";
da.name = "";
da.reason = "";
da.message = "";
da.stack = "";
da.column = void 0;
da.line = void 0;
da.ancestors = void 0;
da.cause = void 0;
da.fatal = void 0;
da.place = void 0;
da.ruleId = void 0;
da.source = void 0;
Object.defineProperty(ea, "prototype", { writable: false });
var fa;
var ga = Om(function(a, b2) {
  if (a === void 0) throw new TypeError("Class constructor VFile cannot be invoked without 'new'");
  let c2 = b2;
  if (!b2) c2 = {};
  else if (E(b2)) c2 = { path: b2 };
  else if (typeof b2 == "string" || h(b2)) c2 = { value: b2 };
  let d2 = (() => {
    let a2 = globalThis.process;
    if (a2 && typeof a2.cwd == "function") return a2.cwd() + "";
    return "/";
  })();
  if ("cwd" in c2) d2 = "";
  a.cwd = d2;
  a.data = {};
  a.history = [];
  a.messages = [];
  let e = 0;
  while (e < ca.length) {
    let b3 = (ca[e] ?? "") + "";
    if (b3 in c2 && c2[b3] != null && c2[b3] !== void 0) {
      let d3 = c2[b3];
      if (b3 == "history") d3 = d3.slice();
      a[b3] = d3;
    }
    ++e;
  }
  for (let b3 in c2) if (!D(b3)) a[b3] = c2[b3];
  return a;
});
fa = ga.prototype;
Object.setPrototypeOf(fa, Object.prototype);
Object.defineProperty(ga, "name", { configurable: true, value: "VFile" });
var ha = Pm(function(a, b2, c2, d2) {
  let e = a.message(b2, c2, d2);
  e.fatal = true;
  throw e;
});
var ia = Pm(function(a, b2, c2, d2) {
  let e = a.message(b2, c2, d2);
  e.fatal = void 0;
  return e;
});
var ja = Pm(function(a, b2, c2, d2) {
  let e = U(b2, c2, d2), f2 = P(a);
  if (f2) {
    e.name = f2 + ":" + e.name;
    e.file = f2;
  }
  e.fatal = false;
  Array.prototype.push.call(a.messages, e);
  return e;
});
var ka = Om(function(a, b2) {
  let c2 = a.value, d2;
  if (c2 === void 0) return "";
  if (typeof c2 == "string") return c2;
  d2 = b2 ? new TextDecoder(b2) : new TextDecoder();
  return d2.decode(c2);
});
Object.defineProperty(ha, "name", { configurable: true, value: "fail" });
Object.defineProperty(ia, "name", { configurable: true, value: "info" });
Object.defineProperty(ja, "name", { configurable: true, value: "message" });
Object.defineProperty(ka, "name", { configurable: true, value: "toString" });
$("basename", { configurable: true, get: Sm((a) => {
  let b2 = P(a);
  if (typeof b2 == "string") return G(b2 + "", "");
}), set: Om((a, b2) => {
  O(b2, "basename");
  N(b2, "basename");
  let c2 = a.dirname, d2 = "";
  if (c2) d2 = c2;
  Q(a, M(d2, b2));
}) });
$("dirname", { configurable: true, get: Sm((a) => {
  let b2 = P(a);
  if (typeof b2 == "string") {
    {
      let a2 = b2 + "";
      if (a2.length == 0) return ".";
      let c2 = -1, d2 = a2.length, e = false;
      while (d2 > 1) {
        --d2;
        if (a2.charAt(d2) == "/") {
          if (e) {
            c2 = d2;
            break;
          }
        } else if (!e) e = true;
      }
      if (c2 < 0) {
        if (a2.charAt(0) == "/") return "/";
        return ".";
      }
      if (c2 == 1 && a2.charAt(0) == "/") return "//";
      return a2.slice(0, c2);
    }
  }
}), set: Om((a, b2) => {
  let c2 = a.basename;
  if (!c2) throw new Error("Setting `dirname` requires `path` to be set too");
  let d2 = "";
  if (b2) d2 = b2;
  Q(a, M(d2, c2));
}) });
$("extname", { configurable: true, get: Sm((a) => {
  let b2 = P(a);
  if (typeof b2 == "string") {
    {
      let a2 = b2 + "", c2 = a2.length, d2 = -1, e = 0, f2 = -1, g2 = 0, h2 = false;
      while (c2 > 0) {
        --c2;
        let b3 = a2.charAt(c2);
        if (b3 == "/") {
          if (h2) {
            e = c2 + 1 | 0;
            break;
          }
        } else {
          if (d2 < 0) {
            h2 = true;
            d2 = c2 + 1 | 0;
          }
          if (b3 == ".") {
            if (f2 < 0) f2 = c2;
            else if (g2 != 1) g2 = 1;
          } else if (f2 > -1) g2 = -1;
        }
      }
      if (f2 < 0 || d2 < 0 || g2 == 0 || g2 == 1 && f2 == (d2 - 1 | 0) && f2 == (e + 1 | 0)) return "";
      return a2.slice(f2, d2);
    }
  }
}), set: Om((a, b2) => {
  N(b2, "extname");
  let d2 = a.dirname;
  if (!d2) throw new Error("Setting `extname` requires `path` to be set too");
  if (b2) {
    if ((b2.codePointAt(0) | 0) != 46) throw new Error("`extname` must start with `.`");
    if (b2.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
  }
  let e = "";
  if (b2) e = b2 + "";
  Q(a, M(d2, a.stem + "" + e));
}) });
$("path", { configurable: true, get: Sm((a) => P(a)), set: Om((a, b2) => {
  Q(a, b2);
}) });
$("stem", { configurable: true, get: Sm((a) => {
  let b2 = P(a);
  if (typeof b2 == "string") return G(b2 + "", a.extname + "");
}), set: Om((a, b2) => {
  O(b2, "stem");
  N(b2, "stem");
  let c2 = b2 + "", d2 = a.dirname, e = "";
  if (d2) e = d2 + "";
  let f2 = a.extname, g2 = "";
  if (f2) g2 = f2 + "";
  Q(a, M(e, c2 + g2));
}) });
$("fail", { configurable: true, writable: true, value: ha });
$("info", { configurable: true, writable: true, value: ia });
$("message", { configurable: true, writable: true, value: ja });
$("toString", { configurable: true, writable: true, value: ka });
_("basename");
_("dirname");
_("extname");
_("path");
_("stem");
Object.defineProperty(ga, "prototype", { writable: false });
var La;
var Ma = Nm(function(a, b2) {
  na("use", a.frozen);
  let d2 = a.attachers, e = a.namespace, f2 = b2.length, g2;
  if (f2 > 0) g2 = b2[0];
  if (g2 == null) return a;
  if (typeof g2 == "function") {
    sa(d2, g2, c(b2, 1));
    return a;
  }
  if (typeof g2 == "object") {
    if (Array.isArray(g2)) ta(d2, e, g2);
    else ua(d2, e, g2);
    return a;
  }
  throw new TypeError("Expected usable value, not `" + g2 + "`");
});
var Na = Sm((a) => Fa(a));
var Oa = Om(function(a, b2) {
  a.freeze();
  let c2 = ba(b2), d2 = a.parser || a.Parser;
  la("parse", d2);
  return d2(String(c2), c2);
});
var Pa = Pm(function(a, b2, c2, d2) {
  oa(b2);
  a.freeze();
  if (!d2 && typeof c2 == "function") {
    d2 = c2;
    c2 = void 0;
  }
  let e = a.transformers, g2 = function(f2, g3) {
    let h2 = ba(c2);
    e.run(b2, h2, function(c3, e2, h3) {
      let i2 = e2 || b2;
      if (c3) {
        g3(c3);
        return;
      }
      if (f2) {
        f2(i2);
        return;
      }
      d2(void 0, i2, h3);
    });
  };
  if (d2) {
    g2(void 0, d2);
    return;
  }
  return new Promise(g2);
});
var Qa = Qm(function(a, b2, c2) {
  let d2 = false, e;
  a.run(b2, c2, function(b3, c3, f2) {
    k(b3);
    e = c3;
    d2 = true;
  });
  pa("runSync", "run", d2);
  l(e, "we either bailed on an error or have a tree");
  return e;
});
var Ra = Qm(function(a, b2, c2) {
  a.freeze();
  let d2 = ba(c2), e = a.compiler || a.Compiler;
  ma("stringify", e);
  oa(b2);
  return e(b2, d2);
});
var Sa = Qm(function(a, b2, c2) {
  a.freeze();
  la("process", ((a2) => a2.parser || a2.Parser)(a));
  ma("process", ((a2) => a2.compiler || a2.Compiler)(a));
  let d2 = function(e, f2) {
    let h2 = ba(b2), i2 = a.parse(h2);
    a.run(i2, h2, function(d3, h3, i3) {
      if (d3 || !h3 || !i3) {
        f2(d3);
        return;
      }
      let j2 = a.stringify(h3, i3);
      if (g(j2)) i3.value = j2;
      else i3.result = j2;
      if (e) {
        e(i3);
        return;
      }
      c2(void 0, i3);
    });
  };
  if (c2) {
    d2(void 0, c2);
    return;
  }
  return new Promise(d2);
});
var Ta = Om(function(a, b2) {
  a.freeze();
  la("processSync", a.parser || a.Parser);
  ma("processSync", a.compiler || a.Compiler);
  let c2 = false, d2;
  a.process(b2, function(b3, e) {
    c2 = true;
    k(b3);
    d2 = e;
  });
  pa("processSync", "process", c2);
  l(d2, "we either bailed on an error or have a tree");
  return d2;
});
var Ua = Nm(function(a, b2) {
  let c2 = a.namespace, e = b2.length, f2;
  if (e > 0) f2 = b2[0];
  if (typeof f2 == "string") {
    if (e == 2) {
      na("data", a.frozen);
      c2[f2] = b2[1];
      return a;
    }
    if (d(c2, f2)) {
      let a2 = c2[f2];
      if (a2) return a2;
    }
    return;
  }
  if (f2) {
    na("data", a.frozen);
    a.namespace = f2;
    return a;
  }
  return c2;
});
var Va = Sm(function(a) {
  if (a.frozen) return a;
  let b2 = a.attachers, d2 = a.transformers;
  while (true) {
    let e = +a.freezeIndex + 1;
    a.freezeIndex = e;
    if (e >= b2.length) break;
    let g2 = b2[e | 0], h2 = g2[0], i2 = c(g2, 1);
    if (i2.length > 0 && i2[0] === false) continue;
    if (i2.length > 0 && i2[0] === true) Array.prototype.splice.call(i2, 0, 1, void 0);
    let j2 = h2.apply(a, i2);
    if (typeof j2 == "function") d2.use(j2);
  }
  a.frozen = true;
  a.freezeIndex = Number.POSITIVE_INFINITY;
  return a;
});
var Wa = Sm((a) => {
  if (a === void 0) throw new TypeError("Class constructor Processor cannot be invoked without 'new'");
  {
    let a2;
    a2 = Rm((b2) => Fa(a2));
    Object.setPrototypeOf(a2, Xa);
    a2.Compiler = void 0;
    a2.Parser = void 0;
    a2.attachers = [];
    a2.compiler = void 0;
    a2.freezeIndex = -1;
    a2.frozen = void 0;
    a2.namespace = {};
    a2.parser = void 0;
    a2.transformers = { fns: [], run: B, use: C };
    return a2;
  }
});
Object.defineProperty(Wa, "name", { configurable: true, value: "Processor" });
var Xa = Wa.prototype;
Ga(Na, "copy", 0);
Ga(Ua, "data", 2);
Ga(Va, "freeze", 0);
Ga(Oa, "parse", 1);
Ga(Sa, "process", 2);
Ga(Ta, "processSync", 1);
Ga(Pa, "run", 3);
Ga(Qa, "runSync", 2);
Ga(Ra, "stringify", 2);
Ga(Ma, "use", 1);
Ha("copy", Na);
Ha("data", Ua);
Ha("freeze", Va);
Ha("parse", Oa);
Ha("process", Sa);
Ha("processSync", Ta);
Ha("run", Pa);
Ha("runSync", Qa);
Ha("stringify", Ra);
Ha("use", Ma);
Object.defineProperty(Wa, "prototype", { writable: false });
La = function() {
  return new Wa();
};
var Ya = new Wa();
Ya.freeze();
var bc = Object;
var cc = Number;
var dc = Math;
var ec = Error;
var fc = null;
var lc = 2;
var mc = 1;
var tc = "string";
var vc = 2;
var Hc = 10;
var Ic = 16;
var Jc = 4;
var Lc = 1e4;
var cd = /[A-Za-z]/;
var dd = /[\dA-Za-z]/;
var ed = /[#-'*+\--9=?A-Z^-~]/;
var fd = /\d/;
var gd = /[\dA-Fa-f]/;
var hd = /[!-\/:-@[-`{-~]/;
var id = new RegExp("\\p{P}|\\p{S}", "u");
var jd = /\s/;
var od = -5;
var pd = -4;
var qd = -3;
var rd = -2;
var sd = -1;
var td = 0;
var ud = 9;
var vd = 10;
var wd = 11;
var xd = 13;
var yd = 32;
var Ad = 34;
var Bd = 35;
var Dd = 39;
var Ed = 40;
var Fd = 41;
var Qd = 60;
var Rd = 61;
var Vd = 88;
var Xd = 92;
var ae = 120;
var be = 126;
var ce = 65279;
var de = 65533;
var fe = "	";
var ge = "\n";
var he = "\r";
var ie = " ";
var je = "\uFFFD";
var re = "data";
var te = "lineEnding";
var ue = "lineEndingBlank";
var ve = "linePrefix";
var we = "lineSuffix";
var Ie = "characterReferenceMarkerNumeric";
var We = "content";
var of = "hardBreakTrailing";
var Zf = "blockQuote";
var $f = "blockQuotePrefix";
var _f = "blockQuoteMarker";
var ag = "blockQuotePrefixWhitespace";
var bg = "listOrdered";
var cg = "listUnordered";
var dg = "listItemIndent";
var eg = "listItemMarker";
var fg = "listItemPrefix";
var gg = "listItemPrefixWhitespace";
var hg = "listItemValue";
var jg = "chunkFlow";
var kg = "chunkText";
var lg = "chunkString";
var og = { tokenize: Om((a, b2) => {
  let c2, d2, e, f2 = function(c3) {
    if (c3 === null) {
      b2.exit("chunkText");
      b2.exit("paragraph");
      b2.consume(c3);
      return;
    }
    if (Zc(c3)) {
      b2.consume(c3);
      b2.exit("chunkText");
      return d2;
    }
    b2.consume(c3);
    return f2;
  };
  d2 = function(d3) {
    let e2 = { contentType: "text", previous: c2 }, g2 = b2.enter("chunkText", e2);
    if (c2) c2.next = g2;
    c2 = g2;
    return f2(d3);
  };
  e = b2.attempt(a.parser.constructs.contentInitial, function(c3) {
    if (c3 === null) {
      b2.consume(c3);
      return;
    }
    b2.enter("lineEnding");
    b2.consume(c3);
    b2.exit("lineEnding");
    return pe(b2, e, "linePrefix", 0);
  }, function(c3) {
    b2.enter("paragraph");
    return d2(c3);
  });
  return e;
}) };
var ug = { tokenize: Pm((a, b2, c2, d2) => {
  let e = a.parser.constructs.disable.null, f2 = 0;
  if (!Hb(e, "codeIndented")) f2 = 4;
  return pe(b2, b2.attempt(a.parser.constructs.document, c2, d2), "linePrefix", f2);
}) };
var wg = { tokenize: Om((a, b2) => {
  let m = { stack: [], continued: 0, effects: b2, childFlow: null, childToken: null, lineStartOffset: 0, start: null, documentContinued: null }, d2 = function(e2) {
    if (e2 === null) {
      rg(a, m, b2.exit("chunkFlow"), true);
      pg(a, b2, m.stack, 0);
      b2.consume(e2);
      return;
    }
    if (Zc(e2)) {
      b2.consume(e2);
      rg(a, m, b2.exit("chunkFlow"), false);
      m.continued = 0;
      a.interrupt = void 0;
      return m.start;
    }
    b2.consume(e2);
    return d2;
  }, e = function(e2) {
    if (e2 === null) {
      if (m.childFlow) qg(a, m);
      pg(a, b2, m.stack, 0);
      b2.consume(e2);
      return;
    }
    if (!m.childFlow) m.childFlow = a.parser.flow(a.now());
    let f3 = { _tokenizer: m.childFlow, contentType: "flow", previous: m.childToken };
    b2.enter("chunkFlow", f3);
    return d2(e2);
  }, f2 = function(c2) {
    m.continued = (m.continued | 0) + 1 | 0;
    m.stack.push([a.currentConstruct, a.containerState]);
    return (0, m.documentContinued)(c2);
  }, g2 = function(d3) {
    a.containerState = {};
    return b2.attempt(ug, f2, e)(d3);
  }, h2 = function(c2) {
    qb(a.parser.lazy, a.now().line, (m.continued | 0) != m.stack.length);
    m.lineStartOffset = +a.now().offset;
    return e(c2);
  }, i2 = function(d3) {
    if (m.childFlow) qg(a, m);
    pg(a, b2, m.stack, m.continued | 0);
    return g2(d3);
  }, j2 = function(d3) {
    if ((m.continued | 0) == m.stack.length) {
      if (!m.childFlow) return g2(d3);
      let b3 = m.childFlow.currentConstruct;
      if (b3 && b3.concrete) return e(d3);
      a.interrupt = !!b3 && !m.childFlow._gfmTableDynamicInterruptHack;
    }
    a.containerState = {};
    return b2.check(ug, i2, h2)(d3);
  }, k2 = function(d3) {
    m.continued = (m.continued | 0) + 1 | 0;
    if (a.containerState._closeFlow) {
      a.containerState._closeFlow = void 0;
      if (m.childFlow) qg(a, m);
      let c2 = kb(a.events), e2 = c2, f3;
      while (true) {
        e2 = e2 - 1 | 0;
        if (e2 < 0) break;
        let b3 = a.events[e2];
        if (b3[0] == "exit" && b3[1].type == "chunkFlow") {
          f3 = b3[1].end;
          break;
        }
      }
      pg(a, b2, m.stack, m.continued | 0);
      let g3 = c2;
      while (g3 < kb(a.events)) {
        a.events[g3][1].end = Ob(f3);
        g3 = g3 + 1 | 0;
      }
      Mc(a.events, e2 + 1 | 0, 0, Bb(a.events, c2));
      a.events.length = g3;
      return j2(d3);
    }
    return (0, m.start)(d3);
  }, l2 = function(d3) {
    if ((m.continued | 0) < m.stack.length) {
      let c2 = m.stack[m.continued | 0];
      a.containerState = c2[1];
      return b2.attempt(c2[0].continuation, k2, j2)(d3);
    }
    return j2(d3);
  };
  m.start = l2;
  m.documentContinued = g2;
  return l2;
}) };
var zg = { tokenize: function(b2, c2, d2) {
  let e = function(b3) {
    if (b3 === null || Zc(b3)) return c2(b3);
    return d2(b3);
  };
  return function(c3) {
    if (_c(c3)) return pe(b2, e, "linePrefix", 0)(c3);
    return e(c3);
  };
}, partial: true };
var Ig = Om((a, b2) => {
  a.left = b2 ? Array.from(b2) : [];
  a.right = [];
  return a;
});
var Jg = Ig.prototype;
Jg.get = Om(function(a, b2) {
  let c2 = +b2, d2 = kb(a.left) + kb(a.right) | 0;
  if (c2 < 0 || c2 >= +d2) Xb("Cannot access index `" + hb(b2) + "` in a splice buffer of size `" + d2 + "`");
  let e = a.left, f2 = kb(e);
  if (c2 < +f2) return e[b2 | 0];
  let g2 = a.right;
  return g2[((kb(g2) - (b2 | 0) | 0) + f2 | 0) - 1 | 0];
});
Jg.slice = Qm(function(a, b2, c2) {
  let d2 = +cc.POSITIVE_INFINITY;
  if (c2 != null) d2 = +c2;
  let e = +b2, f2 = a.left, g2 = a.right, h2 = f2.length;
  if (d2 < h2) return Cb(f2, e, d2);
  if (e > h2) {
    let a2 = g2.length;
    return Cb(g2, a2 - d2 + h2, a2 - e + h2).reverse();
  }
  let i2 = Bb(f2, e), k2 = Bb(g2, g2.length - d2 + h2);
  k2.reverse();
  return i2.concat(k2);
});
Jg.splice = Pm(function(a, b2, c2, d2) {
  let e = 0;
  if (c2) e = +c2;
  Eg(a, +dc.trunc(+b2));
  let f2 = a.right, g2 = wb(f2, "splice", f2.length - e, cc.POSITIVE_INFINITY);
  if (d2) Ag(a.left, d2);
  return g2.reverse();
});
Jg.shift = Sm((a) => {
  Eg(a, 0);
  return a.right.pop();
});
Jg.pop = Sm((a) => {
  Eg(a, +cc.POSITIVE_INFINITY);
  return a.left.pop();
});
Jg.push = Om((a, b2) => {
  Eg(a, +cc.POSITIVE_INFINITY);
  yb(a.left, b2);
});
Jg.pushMany = Om((a, b2) => {
  Eg(a, +cc.POSITIVE_INFINITY);
  Ag(a.left, b2);
});
Jg.unshift = Om((a, b2) => {
  Eg(a, 0);
  yb(a.right, b2);
});
Jg.unshiftMany = Om((a, b2) => {
  Eg(a, 0);
  let c2 = Array.from(b2);
  c2.reverse();
  Ag(a.right, c2);
});
Jg.setCursor = Om((a, b2) => {
  Eg(a, +b2);
});
bc.defineProperty(Jg, "length", { enumerable: true, configurable: true, get: Sm((a) => kb(a.left) + kb(a.right) | 0) });
var Sg = { tokenize: Pm((a, b2, c2, d2) => {
  let e = function(f2) {
    if (f2 === null || Zc(f2)) return d2(f2);
    let g2 = a.events, h2 = g2[kb(g2) - 1 | 0];
    if (!Hb(a.parser.constructs.disable.null, "codeIndented") && h2 && h2[1].type == "linePrefix" && hb(h2[2].sliceSerialize.call(h2[2], h2[1], true)).length >= 4) return c2(f2);
    return b2.interrupt(a.parser.constructs.flow, d2, c2)(f2);
  };
  return function(c3) {
    b2.exit("chunkContent");
    b2.enter("lineEnding");
    b2.consume(c3);
    b2.exit("lineEnding");
    return pe(b2, e, "linePrefix", 0);
  };
}), partial: true };
var Ug = { tokenize: function(b2, c2, d2) {
  let e, f2, g2, h2 = function(c3) {
    if (c3 === null) return f2(c3);
    if (Zc(c3)) return b2.check(Sg, g2, f2)(c3);
    b2.consume(c3);
    return h2;
  };
  f2 = function(d3) {
    b2.exit("chunkContent");
    b2.exit("content");
    return c2(d3);
  };
  g2 = function(c3) {
    b2.consume(c3);
    b2.exit("chunkContent");
    let d3 = { contentType: "content", previous: e }, f3 = b2.enter("chunkContent", d3);
    e.next = f3;
    e = f3;
    return h2;
  };
  return function(c3) {
    b2.enter("content");
    e = b2.enter("chunkContent", { contentType: "content" });
    return h2(c3);
  };
}, resolve: function(b2, c2) {
  Pg(b2);
  return b2;
} };
var Wg = { tokenize: Om((a, b2) => {
  let c2 = a.parser.constructs, d2, e = function(e2) {
    if (e2 === null) {
      b2.consume(e2);
      return;
    }
    b2.enter("lineEnding");
    b2.consume(e2);
    b2.exit("lineEnding");
    a.currentConstruct = void 0;
    return d2;
  }, g2 = b2.attempt(c2.flow, e, b2.attempt(Ug, e, void 0)), h2 = pe(b2, g2, "linePrefix", 0), i2 = b2.attempt(c2.flowInitial, e, h2);
  d2 = b2.attempt(zg, function(e2) {
    if (e2 === null) {
      b2.consume(e2);
      return;
    }
    b2.enter("lineEndingBlank");
    b2.consume(e2);
    b2.exit("lineEndingBlank");
    a.currentConstruct = void 0;
    return d2;
  }, i2);
  return d2;
}) };
var $g = { resolveAll: Yg() };
var _g = Zg("string");
var ah = Zg("text", function(b2, c2) {
  {
    let e = 0, f2 = kb(b2);
    while (true) {
      e = e + 1 | 0;
      if (e > f2) break;
      let a = e == f2, d2 = false;
      if (!a && b2[e][1].type == te) d2 = true;
      if ((a || d2) && b2[e - 1 | 0][1].type == re) {
        let a2 = b2[e - 1 | 0][1], d3 = c2.sliceStream(a2), g2 = kb(d3), h2 = -1, i2 = 0, j2 = false;
        while (true) {
          g2 = g2 - 1 | 0;
          if (g2 < 0) break;
          let a3 = d3[g2];
          if (typeof a3 == "string") {
            let b3 = a3 + "";
            h2 = b3.length;
            while (h2 > 0 && (b3.charCodeAt(h2 - 1 | 0) | 0) == yd) {
              i2 = i2 + 1 | 0;
              h2 = h2 - 1 | 0;
            }
            if (h2 > 0) break;
            h2 = -1;
          } else if (a3 === rd) {
            j2 = true;
            i2 = i2 + 1 | 0;
          } else if (a3 === sd) {
          } else {
            g2 = g2 + 1 | 0;
            break;
          }
        }
        if (c2._contentTypeTextTrailing && e == f2) i2 = 0;
        if (i2 > 0) {
          let d4 = we;
          if (!(e == f2 || j2 || i2 < vc)) d4 = of;
          let l2 = { type: d4, start: { _bufferIndex: g2 != 0 ? h2 : (a2.start._bufferIndex | 0) + h2 | 0, _index: (a2.start._index | 0) + g2 | 0, line: a2.end.line, column: (a2.end.column | 0) - i2 | 0, offset: (a2.end.offset | 0) - i2 | 0 }, end: Ob(a2.end) };
          a2.end = Ob(l2.start);
          if (a2.start.offset == a2.end.offset) Object.assign(a2, l2);
          else {
            let a3 = [];
            a3[0] = "enter";
            a3[1] = l2;
            a3[2] = c2;
            let d5 = [];
            d5[0] = "exit";
            d5[1] = l2;
            d5[2] = c2;
            b2.splice(e, 0, a3, d5);
            e = e + 2 | 0;
            f2 = kb(b2);
          }
        }
        e = e + 1 | 0;
      }
    }
    return b2;
  }
});
var gh = { name: "attention", tokenize: Pm((a, b2, c2, d2) => {
  let e = a.parser.constructs.attentionMarkers.null, f2 = a.previous, g2 = bh(f2), h2 = 0, i2 = function(d3) {
    if (d3 == h2) {
      b2.consume(d3);
      return i2;
    }
    let j2 = b2.exit("attentionSequence"), k2 = bh(d3), l2 = !k2 || k2 == 2 && !!g2 || Gb(e, d3), m = !g2 || g2 == 2 && !!k2 || Gb(e, f2);
    if (h2 == 42) {
      j2._open = l2;
      j2._close = m;
    } else {
      j2._open = l2 && (!!g2 || !m);
      j2._close = m && (!!k2 || !l2);
    }
    return c2(d3);
  };
  return function(c3) {
    h2 = c3 | 0;
    b2.enter("attentionSequence");
    return i2(c3);
  };
}), resolveAll: function(b2, c2) {
  let d2 = -1, e = kb(b2);
  while (true) {
    d2 = d2 + 1 | 0;
    if (d2 >= e) break;
    let a = b2[d2][1];
    if (b2[d2][0] == "enter" && a.type == "attentionSequence" && a._close) {
      let f2 = d2;
      while (true) {
        f2 = f2 - 1 | 0;
        if (f2 < 0) break;
        let g2 = b2[f2][1];
        if (b2[f2][0] == "exit" && g2.type == "attentionSequence" && g2._open) {
          let h2 = c2.sliceSerialize(g2), i2 = c2.sliceSerialize(a);
          if ((h2.charCodeAt(0) | 0) == (i2.charCodeAt(0) | 0)) {
            let h3 = (g2.end.offset | 0) - (g2.start.offset | 0) | 0, i3 = (a.end.offset | 0) - (a.start.offset | 0) | 0, j2 = false;
            if ((g2._close || a._open) && (i3 % 3 | 0) != 0 && ((h3 + i3 | 0) % 3 | 0) == 0) j2 = true;
            if (!j2) {
              let j3 = 1;
              if (h3 > 1 && i3 > 1) j3 = 2;
              let k2 = Ob(g2.end), l2 = Ob(a.start);
              ch(k2, 0 - j3 | 0);
              ch(l2, j3);
              let m = "emphasisSequence", n2 = "emphasisText", o2 = "emphasis";
              if (j3 > 1) {
                m = "strongSequence";
                n2 = "strongText";
                o2 = "strong";
              }
              let p2 = { type: m, start: k2, end: Ob(g2.end) }, q2 = { type: m, start: Ob(a.start), end: l2 }, r2 = { type: n2, start: Ob(g2.end), end: Ob(a.start) }, s2 = { type: o2, start: Ob(p2.start), end: Ob(q2.end) };
              g2.end = Ob(p2.start);
              a.start = Ob(q2.end);
              let t2 = [];
              if (g2.end.offset - g2.start.offset != 0) t2 = Nc(t2, [["enter", g2, c2], ["exit", g2, c2]]);
              t2 = Nc(t2, [["enter", s2, c2], ["enter", p2, c2], ["exit", p2, c2], ["enter", r2, c2]]);
              t2 = Nc(t2, kd(c2.parser.constructs.insideSpan.null, Cb(b2, f2 + 1 | 0, d2), c2));
              t2 = Nc(t2, [["exit", r2, c2], ["enter", q2, c2], ["exit", q2, c2], ["exit", s2, c2]]);
              let w2 = 0;
              if (a.end.offset - a.start.offset != 0) {
                w2 = 2;
                t2 = Nc(t2, [["enter", a, c2], ["exit", a, c2]]);
              }
              Mc(b2, f2 - 1 | 0, (d2 - f2 | 0) + 3 | 0, t2);
              d2 = ((f2 + kb(t2) | 0) - w2 | 0) - 2 | 0;
              e = kb(b2);
              break;
            }
          }
        }
      }
    }
  }
  d2 = -1;
  e = kb(b2);
  while (true) {
    d2 = d2 + 1 | 0;
    if (d2 >= e) break;
    if (b2[d2][1].type == "attentionSequence") b2[d2][1].type = "data";
  }
  return b2;
} };
var ih = { name: "autolink", tokenize: function(b2, c2, d2) {
  let e = 0, f2, g2, h2 = function(c3) {
    if ((c3 === 45 || Tc(c3)) && e < 63) {
      e = e + 1 | 0;
      let a = f2;
      if (c3 === 45) a = h2;
      b2.consume(c3);
      return a;
    }
    return d2(c3);
  };
  f2 = function(d3) {
    if (d3 === 46) {
      b2.consume(d3);
      e = 0;
      return g2;
    }
    if (d3 === 62) {
      b2.exit("autolinkProtocol").type = "autolinkEmail";
      b2.enter("autolinkMarker");
      b2.consume(d3);
      b2.exit("autolinkMarker");
      b2.exit("autolink");
      return c2;
    }
    return h2(d3);
  };
  g2 = function(b3) {
    if (Tc(b3)) return f2(b3);
    return d2(b3);
  };
  let i2 = function(c3) {
    if (c3 === 64) {
      b2.consume(c3);
      return g2;
    }
    if (Rc(ed, c3)) {
      b2.consume(c3);
      return i2;
    }
    return d2(c3);
  }, j2 = function(e2) {
    if (e2 === 62) {
      b2.exit("autolinkProtocol");
      b2.enter("autolinkMarker");
      b2.consume(e2);
      b2.exit("autolinkMarker");
      b2.exit("autolink");
      return c2;
    }
    if (e2 === null || e2 === 32 || e2 === 60 || Vc(e2)) return d2(e2);
    b2.consume(e2);
    return j2;
  }, k2 = function(c3) {
    if (c3 === 58) {
      b2.consume(c3);
      e = 0;
      return j2;
    }
    if ((c3 === 43 || c3 === 45 || c3 === 46 || Tc(c3)) && e < 32) {
      e = e + 1 | 0;
      b2.consume(c3);
      return k2;
    }
    e = 0;
    return i2(c3);
  }, l2 = function(b3) {
    if (b3 === 43 || b3 === 45 || b3 === 46 || Tc(b3)) {
      e = 1;
      return k2(b3);
    }
    return i2(b3);
  }, m = function(c3) {
    if (Sc(c3)) {
      b2.consume(c3);
      return l2;
    }
    if (c3 === 64) return d2(c3);
    return i2(c3);
  };
  return function(c3) {
    b2.enter("autolink");
    b2.enter("autolinkMarker");
    b2.consume(c3);
    b2.exit("autolinkMarker");
    b2.enter("autolinkProtocol");
    return m;
  };
} };
var kh = { name: "blockQuote", tokenize: Pm((a, b2, c2, d2) => {
  let e = function(d3) {
    if (_c(d3)) {
      b2.enter("blockQuotePrefixWhitespace");
      b2.consume(d3);
      b2.exit("blockQuotePrefixWhitespace");
      b2.exit("blockQuotePrefix");
      return c2;
    }
    b2.exit("blockQuotePrefix");
    return c2(d3);
  };
  return function(f2) {
    if (f2 === 62) {
      let c3 = a.containerState;
      if (!c3.open) {
        b2.enter("blockQuote", { _container: true });
        c3.open = true;
      }
      b2.enter("blockQuotePrefix");
      b2.enter("blockQuoteMarker");
      b2.consume(f2);
      b2.exit("blockQuoteMarker");
      return e;
    }
    return d2(f2);
  };
}) };
kh.continuation = { tokenize: Pm((a, b2, c2, d2) => {
  let e = function(e2) {
    return b2.attempt(kh, c2, d2)(e2);
  };
  return function(g2) {
    if (_c(g2)) {
      let c3 = 4;
      if (Hb(a.parser.constructs.disable.null, "codeIndented")) c3 = 0;
      return pe(b2, e, "linePrefix", c3)(g2);
    }
    return b2.attempt(kh, c2, d2)(g2);
  };
}) };
kh.exit = function(b2) {
  b2.exit("blockQuote");
};
var ph = { name: "characterEscape", tokenize: function(b2, c2, d2) {
  let e = function(e2) {
    if (Rc(hd, e2)) {
      b2.enter("characterEscapeValue");
      b2.consume(e2);
      b2.exit("characterEscapeValue");
      b2.exit("characterEscape");
      return c2;
    }
    return d2(e2);
  };
  return function(c3) {
    b2.enter("characterEscape");
    b2.enter("escapeMarker");
    b2.consume(c3);
    b2.exit("escapeMarker");
    return e;
  };
} };
var qh = JSON.parse('{"AElig":"\xC6","AMP":"&","Aacute":"\xC1","Abreve":"\u0102","Acirc":"\xC2","Acy":"\u0410","Afr":"\u{1D504}","Agrave":"\xC0","Alpha":"\u0391","Amacr":"\u0100","And":"\u2A53","Aogon":"\u0104","Aopf":"\u{1D538}","ApplyFunction":"\u2061","Aring":"\xC5","Ascr":"\u{1D49C}","Assign":"\u2254","Atilde":"\xC3","Auml":"\xC4","Backslash":"\u2216","Barv":"\u2AE7","Barwed":"\u2306","Bcy":"\u0411","Because":"\u2235","Bernoullis":"\u212C","Beta":"\u0392","Bfr":"\u{1D505}","Bopf":"\u{1D539}","Breve":"\u02D8","Bscr":"\u212C","Bumpeq":"\u224E","CHcy":"\u0427","COPY":"\xA9","Cacute":"\u0106","Cap":"\u22D2","CapitalDifferentialD":"\u2145","Cayleys":"\u212D","Ccaron":"\u010C","Ccedil":"\xC7","Ccirc":"\u0108","Cconint":"\u2230","Cdot":"\u010A","Cedilla":"\xB8","CenterDot":"\xB7","Cfr":"\u212D","Chi":"\u03A7","CircleDot":"\u2299","CircleMinus":"\u2296","CirclePlus":"\u2295","CircleTimes":"\u2297","ClockwiseContourIntegral":"\u2232","CloseCurlyDoubleQuote":"\u201D","CloseCurlyQuote":"\u2019","Colon":"\u2237","Colone":"\u2A74","Congruent":"\u2261","Conint":"\u222F","ContourIntegral":"\u222E","Copf":"\u2102","Coproduct":"\u2210","CounterClockwiseContourIntegral":"\u2233","Cross":"\u2A2F","Cscr":"\u{1D49E}","Cup":"\u22D3","CupCap":"\u224D","DD":"\u2145","DDotrahd":"\u2911","DJcy":"\u0402","DScy":"\u0405","DZcy":"\u040F","Dagger":"\u2021","Darr":"\u21A1","Dashv":"\u2AE4","Dcaron":"\u010E","Dcy":"\u0414","Del":"\u2207","Delta":"\u0394","Dfr":"\u{1D507}","DiacriticalAcute":"\xB4","DiacriticalDot":"\u02D9","DiacriticalDoubleAcute":"\u02DD","DiacriticalGrave":"`","DiacriticalTilde":"\u02DC","Diamond":"\u22C4","DifferentialD":"\u2146","Dopf":"\u{1D53B}","Dot":"\xA8","DotDot":"\u20DC","DotEqual":"\u2250","DoubleContourIntegral":"\u222F","DoubleDot":"\xA8","DoubleDownArrow":"\u21D3","DoubleLeftArrow":"\u21D0","DoubleLeftRightArrow":"\u21D4","DoubleLeftTee":"\u2AE4","DoubleLongLeftArrow":"\u27F8","DoubleLongLeftRightArrow":"\u27FA","DoubleLongRightArrow":"\u27F9","DoubleRightArrow":"\u21D2","DoubleRightTee":"\u22A8","DoubleUpArrow":"\u21D1","DoubleUpDownArrow":"\u21D5","DoubleVerticalBar":"\u2225","DownArrow":"\u2193","DownArrowBar":"\u2913","DownArrowUpArrow":"\u21F5","DownBreve":"\u0311","DownLeftRightVector":"\u2950","DownLeftTeeVector":"\u295E","DownLeftVector":"\u21BD","DownLeftVectorBar":"\u2956","DownRightTeeVector":"\u295F","DownRightVector":"\u21C1","DownRightVectorBar":"\u2957","DownTee":"\u22A4","DownTeeArrow":"\u21A7","Downarrow":"\u21D3","Dscr":"\u{1D49F}","Dstrok":"\u0110","ENG":"\u014A","ETH":"\xD0","Eacute":"\xC9","Ecaron":"\u011A","Ecirc":"\xCA","Ecy":"\u042D","Edot":"\u0116","Efr":"\u{1D508}","Egrave":"\xC8","Element":"\u2208","Emacr":"\u0112","EmptySmallSquare":"\u25FB","EmptyVerySmallSquare":"\u25AB","Eogon":"\u0118","Eopf":"\u{1D53C}","Epsilon":"\u0395","Equal":"\u2A75","EqualTilde":"\u2242","Equilibrium":"\u21CC","Escr":"\u2130","Esim":"\u2A73","Eta":"\u0397","Euml":"\xCB","Exists":"\u2203","ExponentialE":"\u2147","Fcy":"\u0424","Ffr":"\u{1D509}","FilledSmallSquare":"\u25FC","FilledVerySmallSquare":"\u25AA","Fopf":"\u{1D53D}","ForAll":"\u2200","Fouriertrf":"\u2131","Fscr":"\u2131","GJcy":"\u0403","GT":">","Gamma":"\u0393","Gammad":"\u03DC","Gbreve":"\u011E","Gcedil":"\u0122","Gcirc":"\u011C","Gcy":"\u0413","Gdot":"\u0120","Gfr":"\u{1D50A}","Gg":"\u22D9","Gopf":"\u{1D53E}","GreaterEqual":"\u2265","GreaterEqualLess":"\u22DB","GreaterFullEqual":"\u2267","GreaterGreater":"\u2AA2","GreaterLess":"\u2277","GreaterSlantEqual":"\u2A7E","GreaterTilde":"\u2273","Gscr":"\u{1D4A2}","Gt":"\u226B","HARDcy":"\u042A","Hacek":"\u02C7","Hat":"^","Hcirc":"\u0124","Hfr":"\u210C","HilbertSpace":"\u210B","Hopf":"\u210D","HorizontalLine":"\u2500","Hscr":"\u210B","Hstrok":"\u0126","HumpDownHump":"\u224E","HumpEqual":"\u224F","IEcy":"\u0415","IJlig":"\u0132","IOcy":"\u0401","Iacute":"\xCD","Icirc":"\xCE","Icy":"\u0418","Idot":"\u0130","Ifr":"\u2111","Igrave":"\xCC","Im":"\u2111","Imacr":"\u012A","ImaginaryI":"\u2148","Implies":"\u21D2","Int":"\u222C","Integral":"\u222B","Intersection":"\u22C2","InvisibleComma":"\u2063","InvisibleTimes":"\u2062","Iogon":"\u012E","Iopf":"\u{1D540}","Iota":"\u0399","Iscr":"\u2110","Itilde":"\u0128","Iukcy":"\u0406","Iuml":"\xCF","Jcirc":"\u0134","Jcy":"\u0419","Jfr":"\u{1D50D}","Jopf":"\u{1D541}","Jscr":"\u{1D4A5}","Jsercy":"\u0408","Jukcy":"\u0404","KHcy":"\u0425","KJcy":"\u040C","Kappa":"\u039A","Kcedil":"\u0136","Kcy":"\u041A","Kfr":"\u{1D50E}","Kopf":"\u{1D542}","Kscr":"\u{1D4A6}","LJcy":"\u0409","LT":"<","Lacute":"\u0139","Lambda":"\u039B","Lang":"\u27EA","Laplacetrf":"\u2112","Larr":"\u219E","Lcaron":"\u013D","Lcedil":"\u013B","Lcy":"\u041B","LeftAngleBracket":"\u27E8","LeftArrow":"\u2190","LeftArrowBar":"\u21E4","LeftArrowRightArrow":"\u21C6","LeftCeiling":"\u2308","LeftDoubleBracket":"\u27E6","LeftDownTeeVector":"\u2961","LeftDownVector":"\u21C3","LeftDownVectorBar":"\u2959","LeftFloor":"\u230A","LeftRightArrow":"\u2194","LeftRightVector":"\u294E","LeftTee":"\u22A3","LeftTeeArrow":"\u21A4","LeftTeeVector":"\u295A","LeftTriangle":"\u22B2","LeftTriangleBar":"\u29CF","LeftTriangleEqual":"\u22B4","LeftUpDownVector":"\u2951","LeftUpTeeVector":"\u2960","LeftUpVector":"\u21BF","LeftUpVectorBar":"\u2958","LeftVector":"\u21BC","LeftVectorBar":"\u2952","Leftarrow":"\u21D0","Leftrightarrow":"\u21D4","LessEqualGreater":"\u22DA","LessFullEqual":"\u2266","LessGreater":"\u2276","LessLess":"\u2AA1","LessSlantEqual":"\u2A7D","LessTilde":"\u2272","Lfr":"\u{1D50F}","Ll":"\u22D8","Lleftarrow":"\u21DA","Lmidot":"\u013F","LongLeftArrow":"\u27F5","LongLeftRightArrow":"\u27F7","LongRightArrow":"\u27F6","Longleftarrow":"\u27F8","Longleftrightarrow":"\u27FA","Longrightarrow":"\u27F9","Lopf":"\u{1D543}","LowerLeftArrow":"\u2199","LowerRightArrow":"\u2198","Lscr":"\u2112","Lsh":"\u21B0","Lstrok":"\u0141","Lt":"\u226A","Map":"\u2905","Mcy":"\u041C","MediumSpace":"\u205F","Mellintrf":"\u2133","Mfr":"\u{1D510}","MinusPlus":"\u2213","Mopf":"\u{1D544}","Mscr":"\u2133","Mu":"\u039C","NJcy":"\u040A","Nacute":"\u0143","Ncaron":"\u0147","Ncedil":"\u0145","Ncy":"\u041D","NegativeMediumSpace":"\u200B","NegativeThickSpace":"\u200B","NegativeThinSpace":"\u200B","NegativeVeryThinSpace":"\u200B","NestedGreaterGreater":"\u226B","NestedLessLess":"\u226A","NewLine":"\\n","Nfr":"\u{1D511}","NoBreak":"\u2060","NonBreakingSpace":"\xA0","Nopf":"\u2115","Not":"\u2AEC","NotCongruent":"\u2262","NotCupCap":"\u226D","NotDoubleVerticalBar":"\u2226","NotElement":"\u2209","NotEqual":"\u2260","NotEqualTilde":"\u2242\u0338","NotExists":"\u2204","NotGreater":"\u226F","NotGreaterEqual":"\u2271","NotGreaterFullEqual":"\u2267\u0338","NotGreaterGreater":"\u226B\u0338","NotGreaterLess":"\u2279","NotGreaterSlantEqual":"\u2A7E\u0338","NotGreaterTilde":"\u2275","NotHumpDownHump":"\u224E\u0338","NotHumpEqual":"\u224F\u0338","NotLeftTriangle":"\u22EA","NotLeftTriangleBar":"\u29CF\u0338","NotLeftTriangleEqual":"\u22EC","NotLess":"\u226E","NotLessEqual":"\u2270","NotLessGreater":"\u2278","NotLessLess":"\u226A\u0338","NotLessSlantEqual":"\u2A7D\u0338","NotLessTilde":"\u2274","NotNestedGreaterGreater":"\u2AA2\u0338","NotNestedLessLess":"\u2AA1\u0338","NotPrecedes":"\u2280","NotPrecedesEqual":"\u2AAF\u0338","NotPrecedesSlantEqual":"\u22E0","NotReverseElement":"\u220C","NotRightTriangle":"\u22EB","NotRightTriangleBar":"\u29D0\u0338","NotRightTriangleEqual":"\u22ED","NotSquareSubset":"\u228F\u0338","NotSquareSubsetEqual":"\u22E2","NotSquareSuperset":"\u2290\u0338","NotSquareSupersetEqual":"\u22E3","NotSubset":"\u2282\u20D2","NotSubsetEqual":"\u2288","NotSucceeds":"\u2281","NotSucceedsEqual":"\u2AB0\u0338","NotSucceedsSlantEqual":"\u22E1","NotSucceedsTilde":"\u227F\u0338","NotSuperset":"\u2283\u20D2","NotSupersetEqual":"\u2289","NotTilde":"\u2241","NotTildeEqual":"\u2244","NotTildeFullEqual":"\u2247","NotTildeTilde":"\u2249","NotVerticalBar":"\u2224","Nscr":"\u{1D4A9}","Ntilde":"\xD1","Nu":"\u039D","OElig":"\u0152","Oacute":"\xD3","Ocirc":"\xD4","Ocy":"\u041E","Odblac":"\u0150","Ofr":"\u{1D512}","Ograve":"\xD2","Omacr":"\u014C","Omega":"\u03A9","Omicron":"\u039F","Oopf":"\u{1D546}","OpenCurlyDoubleQuote":"\u201C","OpenCurlyQuote":"\u2018","Or":"\u2A54","Oscr":"\u{1D4AA}","Oslash":"\xD8","Otilde":"\xD5","Otimes":"\u2A37","Ouml":"\xD6","OverBar":"\u203E","OverBrace":"\u23DE","OverBracket":"\u23B4","OverParenthesis":"\u23DC","PartialD":"\u2202","Pcy":"\u041F","Pfr":"\u{1D513}","Phi":"\u03A6","Pi":"\u03A0","PlusMinus":"\xB1","Poincareplane":"\u210C","Popf":"\u2119","Pr":"\u2ABB","Precedes":"\u227A","PrecedesEqual":"\u2AAF","PrecedesSlantEqual":"\u227C","PrecedesTilde":"\u227E","Prime":"\u2033","Product":"\u220F","Proportion":"\u2237","Proportional":"\u221D","Pscr":"\u{1D4AB}","Psi":"\u03A8","QUOT":"\\"","Qfr":"\u{1D514}","Qopf":"\u211A","Qscr":"\u{1D4AC}","RBarr":"\u2910","REG":"\xAE","Racute":"\u0154","Rang":"\u27EB","Rarr":"\u21A0","Rarrtl":"\u2916","Rcaron":"\u0158","Rcedil":"\u0156","Rcy":"\u0420","Re":"\u211C","ReverseElement":"\u220B","ReverseEquilibrium":"\u21CB","ReverseUpEquilibrium":"\u296F","Rfr":"\u211C","Rho":"\u03A1","RightAngleBracket":"\u27E9","RightArrow":"\u2192","RightArrowBar":"\u21E5","RightArrowLeftArrow":"\u21C4","RightCeiling":"\u2309","RightDoubleBracket":"\u27E7","RightDownTeeVector":"\u295D","RightDownVector":"\u21C2","RightDownVectorBar":"\u2955","RightFloor":"\u230B","RightTee":"\u22A2","RightTeeArrow":"\u21A6","RightTeeVector":"\u295B","RightTriangle":"\u22B3","RightTriangleBar":"\u29D0","RightTriangleEqual":"\u22B5","RightUpDownVector":"\u294F","RightUpTeeVector":"\u295C","RightUpVector":"\u21BE","RightUpVectorBar":"\u2954","RightVector":"\u21C0","RightVectorBar":"\u2953","Rightarrow":"\u21D2","Ropf":"\u211D","RoundImplies":"\u2970","Rrightarrow":"\u21DB","Rscr":"\u211B","Rsh":"\u21B1","RuleDelayed":"\u29F4","SHCHcy":"\u0429","SHcy":"\u0428","SOFTcy":"\u042C","Sacute":"\u015A","Sc":"\u2ABC","Scaron":"\u0160","Scedil":"\u015E","Scirc":"\u015C","Scy":"\u0421","Sfr":"\u{1D516}","ShortDownArrow":"\u2193","ShortLeftArrow":"\u2190","ShortRightArrow":"\u2192","ShortUpArrow":"\u2191","Sigma":"\u03A3","SmallCircle":"\u2218","Sopf":"\u{1D54A}","Sqrt":"\u221A","Square":"\u25A1","SquareIntersection":"\u2293","SquareSubset":"\u228F","SquareSubsetEqual":"\u2291","SquareSuperset":"\u2290","SquareSupersetEqual":"\u2292","SquareUnion":"\u2294","Sscr":"\u{1D4AE}","Star":"\u22C6","Sub":"\u22D0","Subset":"\u22D0","SubsetEqual":"\u2286","Succeeds":"\u227B","SucceedsEqual":"\u2AB0","SucceedsSlantEqual":"\u227D","SucceedsTilde":"\u227F","SuchThat":"\u220B","Sum":"\u2211","Sup":"\u22D1","Superset":"\u2283","SupersetEqual":"\u2287","Supset":"\u22D1","THORN":"\xDE","TRADE":"\u2122","TSHcy":"\u040B","TScy":"\u0426","Tab":"\\t","Tau":"\u03A4","Tcaron":"\u0164","Tcedil":"\u0162","Tcy":"\u0422","Tfr":"\u{1D517}","Therefore":"\u2234","Theta":"\u0398","ThickSpace":"\u205F\u200A","ThinSpace":"\u2009","Tilde":"\u223C","TildeEqual":"\u2243","TildeFullEqual":"\u2245","TildeTilde":"\u2248","Topf":"\u{1D54B}","TripleDot":"\u20DB","Tscr":"\u{1D4AF}","Tstrok":"\u0166","Uacute":"\xDA","Uarr":"\u219F","Uarrocir":"\u2949","Ubrcy":"\u040E","Ubreve":"\u016C","Ucirc":"\xDB","Ucy":"\u0423","Udblac":"\u0170","Ufr":"\u{1D518}","Ugrave":"\xD9","Umacr":"\u016A","UnderBar":"_","UnderBrace":"\u23DF","UnderBracket":"\u23B5","UnderParenthesis":"\u23DD","Union":"\u22C3","UnionPlus":"\u228E","Uogon":"\u0172","Uopf":"\u{1D54C}","UpArrow":"\u2191","UpArrowBar":"\u2912","UpArrowDownArrow":"\u21C5","UpDownArrow":"\u2195","UpEquilibrium":"\u296E","UpTee":"\u22A5","UpTeeArrow":"\u21A5","Uparrow":"\u21D1","Updownarrow":"\u21D5","UpperLeftArrow":"\u2196","UpperRightArrow":"\u2197","Upsi":"\u03D2","Upsilon":"\u03A5","Uring":"\u016E","Uscr":"\u{1D4B0}","Utilde":"\u0168","Uuml":"\xDC","VDash":"\u22AB","Vbar":"\u2AEB","Vcy":"\u0412","Vdash":"\u22A9","Vdashl":"\u2AE6","Vee":"\u22C1","Verbar":"\u2016","Vert":"\u2016","VerticalBar":"\u2223","VerticalLine":"|","VerticalSeparator":"\u2758","VerticalTilde":"\u2240","VeryThinSpace":"\u200A","Vfr":"\u{1D519}","Vopf":"\u{1D54D}","Vscr":"\u{1D4B1}","Vvdash":"\u22AA","Wcirc":"\u0174","Wedge":"\u22C0","Wfr":"\u{1D51A}","Wopf":"\u{1D54E}","Wscr":"\u{1D4B2}","Xfr":"\u{1D51B}","Xi":"\u039E","Xopf":"\u{1D54F}","Xscr":"\u{1D4B3}","YAcy":"\u042F","YIcy":"\u0407","YUcy":"\u042E","Yacute":"\xDD","Ycirc":"\u0176","Ycy":"\u042B","Yfr":"\u{1D51C}","Yopf":"\u{1D550}","Yscr":"\u{1D4B4}","Yuml":"\u0178","ZHcy":"\u0416","Zacute":"\u0179","Zcaron":"\u017D","Zcy":"\u0417","Zdot":"\u017B","ZeroWidthSpace":"\u200B","Zeta":"\u0396","Zfr":"\u2128","Zopf":"\u2124","Zscr":"\u{1D4B5}","aacute":"\xE1","abreve":"\u0103","ac":"\u223E","acE":"\u223E\u0333","acd":"\u223F","acirc":"\xE2","acute":"\xB4","acy":"\u0430","aelig":"\xE6","af":"\u2061","afr":"\u{1D51E}","agrave":"\xE0","alefsym":"\u2135","aleph":"\u2135","alpha":"\u03B1","amacr":"\u0101","amalg":"\u2A3F","amp":"&","and":"\u2227","andand":"\u2A55","andd":"\u2A5C","andslope":"\u2A58","andv":"\u2A5A","ang":"\u2220","ange":"\u29A4","angle":"\u2220","angmsd":"\u2221","angmsdaa":"\u29A8","angmsdab":"\u29A9","angmsdac":"\u29AA","angmsdad":"\u29AB","angmsdae":"\u29AC","angmsdaf":"\u29AD","angmsdag":"\u29AE","angmsdah":"\u29AF","angrt":"\u221F","angrtvb":"\u22BE","angrtvbd":"\u299D","angsph":"\u2222","angst":"\xC5","angzarr":"\u237C","aogon":"\u0105","aopf":"\u{1D552}","ap":"\u2248","apE":"\u2A70","apacir":"\u2A6F","ape":"\u224A","apid":"\u224B","apos":"\'","approx":"\u2248","approxeq":"\u224A","aring":"\xE5","ascr":"\u{1D4B6}","ast":"*","asymp":"\u2248","asympeq":"\u224D","atilde":"\xE3","auml":"\xE4","awconint":"\u2233","awint":"\u2A11","bNot":"\u2AED","backcong":"\u224C","backepsilon":"\u03F6","backprime":"\u2035","backsim":"\u223D","backsimeq":"\u22CD","barvee":"\u22BD","barwed":"\u2305","barwedge":"\u2305","bbrk":"\u23B5","bbrktbrk":"\u23B6","bcong":"\u224C","bcy":"\u0431","bdquo":"\u201E","becaus":"\u2235","because":"\u2235","bemptyv":"\u29B0","bepsi":"\u03F6","bernou":"\u212C","beta":"\u03B2","beth":"\u2136","between":"\u226C","bfr":"\u{1D51F}","bigcap":"\u22C2","bigcirc":"\u25EF","bigcup":"\u22C3","bigodot":"\u2A00","bigoplus":"\u2A01","bigotimes":"\u2A02","bigsqcup":"\u2A06","bigstar":"\u2605","bigtriangledown":"\u25BD","bigtriangleup":"\u25B3","biguplus":"\u2A04","bigvee":"\u22C1","bigwedge":"\u22C0","bkarow":"\u290D","blacklozenge":"\u29EB","blacksquare":"\u25AA","blacktriangle":"\u25B4","blacktriangledown":"\u25BE","blacktriangleleft":"\u25C2","blacktriangleright":"\u25B8","blank":"\u2423","blk12":"\u2592","blk14":"\u2591","blk34":"\u2593","block":"\u2588","bne":"=\u20E5","bnequiv":"\u2261\u20E5","bnot":"\u2310","bopf":"\u{1D553}","bot":"\u22A5","bottom":"\u22A5","bowtie":"\u22C8","boxDL":"\u2557","boxDR":"\u2554","boxDl":"\u2556","boxDr":"\u2553","boxH":"\u2550","boxHD":"\u2566","boxHU":"\u2569","boxHd":"\u2564","boxHu":"\u2567","boxUL":"\u255D","boxUR":"\u255A","boxUl":"\u255C","boxUr":"\u2559","boxV":"\u2551","boxVH":"\u256C","boxVL":"\u2563","boxVR":"\u2560","boxVh":"\u256B","boxVl":"\u2562","boxVr":"\u255F","boxbox":"\u29C9","boxdL":"\u2555","boxdR":"\u2552","boxdl":"\u2510","boxdr":"\u250C","boxh":"\u2500","boxhD":"\u2565","boxhU":"\u2568","boxhd":"\u252C","boxhu":"\u2534","boxminus":"\u229F","boxplus":"\u229E","boxtimes":"\u22A0","boxuL":"\u255B","boxuR":"\u2558","boxul":"\u2518","boxur":"\u2514","boxv":"\u2502","boxvH":"\u256A","boxvL":"\u2561","boxvR":"\u255E","boxvh":"\u253C","boxvl":"\u2524","boxvr":"\u251C","bprime":"\u2035","breve":"\u02D8","brvbar":"\xA6","bscr":"\u{1D4B7}","bsemi":"\u204F","bsim":"\u223D","bsime":"\u22CD","bsol":"\\\\","bsolb":"\u29C5","bsolhsub":"\u27C8","bull":"\u2022","bullet":"\u2022","bump":"\u224E","bumpE":"\u2AAE","bumpe":"\u224F","bumpeq":"\u224F","cacute":"\u0107","cap":"\u2229","capand":"\u2A44","capbrcup":"\u2A49","capcap":"\u2A4B","capcup":"\u2A47","capdot":"\u2A40","caps":"\u2229\uFE00","caret":"\u2041","caron":"\u02C7","ccaps":"\u2A4D","ccaron":"\u010D","ccedil":"\xE7","ccirc":"\u0109","ccups":"\u2A4C","ccupssm":"\u2A50","cdot":"\u010B","cedil":"\xB8","cemptyv":"\u29B2","cent":"\xA2","centerdot":"\xB7","cfr":"\u{1D520}","chcy":"\u0447","check":"\u2713","checkmark":"\u2713","chi":"\u03C7","cir":"\u25CB","cirE":"\u29C3","circ":"\u02C6","circeq":"\u2257","circlearrowleft":"\u21BA","circlearrowright":"\u21BB","circledR":"\xAE","circledS":"\u24C8","circledast":"\u229B","circledcirc":"\u229A","circleddash":"\u229D","cire":"\u2257","cirfnint":"\u2A10","cirmid":"\u2AEF","cirscir":"\u29C2","clubs":"\u2663","clubsuit":"\u2663","colon":":","colone":"\u2254","coloneq":"\u2254","comma":",","commat":"@","comp":"\u2201","compfn":"\u2218","complement":"\u2201","complexes":"\u2102","cong":"\u2245","congdot":"\u2A6D","conint":"\u222E","copf":"\u{1D554}","coprod":"\u2210","copy":"\xA9","copysr":"\u2117","crarr":"\u21B5","cross":"\u2717","cscr":"\u{1D4B8}","csub":"\u2ACF","csube":"\u2AD1","csup":"\u2AD0","csupe":"\u2AD2","ctdot":"\u22EF","cudarrl":"\u2938","cudarrr":"\u2935","cuepr":"\u22DE","cuesc":"\u22DF","cularr":"\u21B6","cularrp":"\u293D","cup":"\u222A","cupbrcap":"\u2A48","cupcap":"\u2A46","cupcup":"\u2A4A","cupdot":"\u228D","cupor":"\u2A45","cups":"\u222A\uFE00","curarr":"\u21B7","curarrm":"\u293C","curlyeqprec":"\u22DE","curlyeqsucc":"\u22DF","curlyvee":"\u22CE","curlywedge":"\u22CF","curren":"\xA4","curvearrowleft":"\u21B6","curvearrowright":"\u21B7","cuvee":"\u22CE","cuwed":"\u22CF","cwconint":"\u2232","cwint":"\u2231","cylcty":"\u232D","dArr":"\u21D3","dHar":"\u2965","dagger":"\u2020","daleth":"\u2138","darr":"\u2193","dash":"\u2010","dashv":"\u22A3","dbkarow":"\u290F","dblac":"\u02DD","dcaron":"\u010F","dcy":"\u0434","dd":"\u2146","ddagger":"\u2021","ddarr":"\u21CA","ddotseq":"\u2A77","deg":"\xB0","delta":"\u03B4","demptyv":"\u29B1","dfisht":"\u297F","dfr":"\u{1D521}","dharl":"\u21C3","dharr":"\u21C2","diam":"\u22C4","diamond":"\u22C4","diamondsuit":"\u2666","diams":"\u2666","die":"\xA8","digamma":"\u03DD","disin":"\u22F2","div":"\xF7","divide":"\xF7","divideontimes":"\u22C7","divonx":"\u22C7","djcy":"\u0452","dlcorn":"\u231E","dlcrop":"\u230D","dollar":"$","dopf":"\u{1D555}","dot":"\u02D9","doteq":"\u2250","doteqdot":"\u2251","dotminus":"\u2238","dotplus":"\u2214","dotsquare":"\u22A1","doublebarwedge":"\u2306","downarrow":"\u2193","downdownarrows":"\u21CA","downharpoonleft":"\u21C3","downharpoonright":"\u21C2","drbkarow":"\u2910","drcorn":"\u231F","drcrop":"\u230C","dscr":"\u{1D4B9}","dscy":"\u0455","dsol":"\u29F6","dstrok":"\u0111","dtdot":"\u22F1","dtri":"\u25BF","dtrif":"\u25BE","duarr":"\u21F5","duhar":"\u296F","dwangle":"\u29A6","dzcy":"\u045F","dzigrarr":"\u27FF","eDDot":"\u2A77","eDot":"\u2251","eacute":"\xE9","easter":"\u2A6E","ecaron":"\u011B","ecir":"\u2256","ecirc":"\xEA","ecolon":"\u2255","ecy":"\u044D","edot":"\u0117","ee":"\u2147","efDot":"\u2252","efr":"\u{1D522}","eg":"\u2A9A","egrave":"\xE8","egs":"\u2A96","egsdot":"\u2A98","el":"\u2A99","elinters":"\u23E7","ell":"\u2113","els":"\u2A95","elsdot":"\u2A97","emacr":"\u0113","empty":"\u2205","emptyset":"\u2205","emptyv":"\u2205","emsp13":"\u2004","emsp14":"\u2005","emsp":"\u2003","eng":"\u014B","ensp":"\u2002","eogon":"\u0119","eopf":"\u{1D556}","epar":"\u22D5","eparsl":"\u29E3","eplus":"\u2A71","epsi":"\u03B5","epsilon":"\u03B5","epsiv":"\u03F5","eqcirc":"\u2256","eqcolon":"\u2255","eqsim":"\u2242","eqslantgtr":"\u2A96","eqslantless":"\u2A95","equals":"=","equest":"\u225F","equiv":"\u2261","equivDD":"\u2A78","eqvparsl":"\u29E5","erDot":"\u2253","erarr":"\u2971","escr":"\u212F","esdot":"\u2250","esim":"\u2242","eta":"\u03B7","eth":"\xF0","euml":"\xEB","euro":"\u20AC","excl":"!","exist":"\u2203","expectation":"\u2130","exponentiale":"\u2147","fallingdotseq":"\u2252","fcy":"\u0444","female":"\u2640","ffilig":"\uFB03","fflig":"\uFB00","ffllig":"\uFB04","ffr":"\u{1D523}","filig":"\uFB01","fjlig":"fj","flat":"\u266D","fllig":"\uFB02","fltns":"\u25B1","fnof":"\u0192","fopf":"\u{1D557}","forall":"\u2200","fork":"\u22D4","forkv":"\u2AD9","fpartint":"\u2A0D","frac12":"\xBD","frac13":"\u2153","frac14":"\xBC","frac15":"\u2155","frac16":"\u2159","frac18":"\u215B","frac23":"\u2154","frac25":"\u2156","frac34":"\xBE","frac35":"\u2157","frac38":"\u215C","frac45":"\u2158","frac56":"\u215A","frac58":"\u215D","frac78":"\u215E","frasl":"\u2044","frown":"\u2322","fscr":"\u{1D4BB}","gE":"\u2267","gEl":"\u2A8C","gacute":"\u01F5","gamma":"\u03B3","gammad":"\u03DD","gap":"\u2A86","gbreve":"\u011F","gcirc":"\u011D","gcy":"\u0433","gdot":"\u0121","ge":"\u2265","gel":"\u22DB","geq":"\u2265","geqq":"\u2267","geqslant":"\u2A7E","ges":"\u2A7E","gescc":"\u2AA9","gesdot":"\u2A80","gesdoto":"\u2A82","gesdotol":"\u2A84","gesl":"\u22DB\uFE00","gesles":"\u2A94","gfr":"\u{1D524}","gg":"\u226B","ggg":"\u22D9","gimel":"\u2137","gjcy":"\u0453","gl":"\u2277","glE":"\u2A92","gla":"\u2AA5","glj":"\u2AA4","gnE":"\u2269","gnap":"\u2A8A","gnapprox":"\u2A8A","gne":"\u2A88","gneq":"\u2A88","gneqq":"\u2269","gnsim":"\u22E7","gopf":"\u{1D558}","grave":"`","gscr":"\u210A","gsim":"\u2273","gsime":"\u2A8E","gsiml":"\u2A90","gt":">","gtcc":"\u2AA7","gtcir":"\u2A7A","gtdot":"\u22D7","gtlPar":"\u2995","gtquest":"\u2A7C","gtrapprox":"\u2A86","gtrarr":"\u2978","gtrdot":"\u22D7","gtreqless":"\u22DB","gtreqqless":"\u2A8C","gtrless":"\u2277","gtrsim":"\u2273","gvertneqq":"\u2269\uFE00","gvnE":"\u2269\uFE00","hArr":"\u21D4","hairsp":"\u200A","half":"\xBD","hamilt":"\u210B","hardcy":"\u044A","harr":"\u2194","harrcir":"\u2948","harrw":"\u21AD","hbar":"\u210F","hcirc":"\u0125","hearts":"\u2665","heartsuit":"\u2665","hellip":"\u2026","hercon":"\u22B9","hfr":"\u{1D525}","hksearow":"\u2925","hkswarow":"\u2926","hoarr":"\u21FF","homtht":"\u223B","hookleftarrow":"\u21A9","hookrightarrow":"\u21AA","hopf":"\u{1D559}","horbar":"\u2015","hscr":"\u{1D4BD}","hslash":"\u210F","hstrok":"\u0127","hybull":"\u2043","hyphen":"\u2010","iacute":"\xED","ic":"\u2063","icirc":"\xEE","icy":"\u0438","iecy":"\u0435","iexcl":"\xA1","iff":"\u21D4","ifr":"\u{1D526}","igrave":"\xEC","ii":"\u2148","iiiint":"\u2A0C","iiint":"\u222D","iinfin":"\u29DC","iiota":"\u2129","ijlig":"\u0133","imacr":"\u012B","image":"\u2111","imagline":"\u2110","imagpart":"\u2111","imath":"\u0131","imof":"\u22B7","imped":"\u01B5","in":"\u2208","incare":"\u2105","infin":"\u221E","infintie":"\u29DD","inodot":"\u0131","int":"\u222B","intcal":"\u22BA","integers":"\u2124","intercal":"\u22BA","intlarhk":"\u2A17","intprod":"\u2A3C","iocy":"\u0451","iogon":"\u012F","iopf":"\u{1D55A}","iota":"\u03B9","iprod":"\u2A3C","iquest":"\xBF","iscr":"\u{1D4BE}","isin":"\u2208","isinE":"\u22F9","isindot":"\u22F5","isins":"\u22F4","isinsv":"\u22F3","isinv":"\u2208","it":"\u2062","itilde":"\u0129","iukcy":"\u0456","iuml":"\xEF","jcirc":"\u0135","jcy":"\u0439","jfr":"\u{1D527}","jmath":"\u0237","jopf":"\u{1D55B}","jscr":"\u{1D4BF}","jsercy":"\u0458","jukcy":"\u0454","kappa":"\u03BA","kappav":"\u03F0","kcedil":"\u0137","kcy":"\u043A","kfr":"\u{1D528}","kgreen":"\u0138","khcy":"\u0445","kjcy":"\u045C","kopf":"\u{1D55C}","kscr":"\u{1D4C0}","lAarr":"\u21DA","lArr":"\u21D0","lAtail":"\u291B","lBarr":"\u290E","lE":"\u2266","lEg":"\u2A8B","lHar":"\u2962","lacute":"\u013A","laemptyv":"\u29B4","lagran":"\u2112","lambda":"\u03BB","lang":"\u27E8","langd":"\u2991","langle":"\u27E8","lap":"\u2A85","laquo":"\xAB","larr":"\u2190","larrb":"\u21E4","larrbfs":"\u291F","larrfs":"\u291D","larrhk":"\u21A9","larrlp":"\u21AB","larrpl":"\u2939","larrsim":"\u2973","larrtl":"\u21A2","lat":"\u2AAB","latail":"\u2919","late":"\u2AAD","lates":"\u2AAD\uFE00","lbarr":"\u290C","lbbrk":"\u2772","lbrace":"{","lbrack":"[","lbrke":"\u298B","lbrksld":"\u298F","lbrkslu":"\u298D","lcaron":"\u013E","lcedil":"\u013C","lceil":"\u2308","lcub":"{","lcy":"\u043B","ldca":"\u2936","ldquo":"\u201C","ldquor":"\u201E","ldrdhar":"\u2967","ldrushar":"\u294B","ldsh":"\u21B2","le":"\u2264","leftarrow":"\u2190","leftarrowtail":"\u21A2","leftharpoondown":"\u21BD","leftharpoonup":"\u21BC","leftleftarrows":"\u21C7","leftrightarrow":"\u2194","leftrightarrows":"\u21C6","leftrightharpoons":"\u21CB","leftrightsquigarrow":"\u21AD","leftthreetimes":"\u22CB","leg":"\u22DA","leq":"\u2264","leqq":"\u2266","leqslant":"\u2A7D","les":"\u2A7D","lescc":"\u2AA8","lesdot":"\u2A7F","lesdoto":"\u2A81","lesdotor":"\u2A83","lesg":"\u22DA\uFE00","lesges":"\u2A93","lessapprox":"\u2A85","lessdot":"\u22D6","lesseqgtr":"\u22DA","lesseqqgtr":"\u2A8B","lessgtr":"\u2276","lesssim":"\u2272","lfisht":"\u297C","lfloor":"\u230A","lfr":"\u{1D529}","lg":"\u2276","lgE":"\u2A91","lhard":"\u21BD","lharu":"\u21BC","lharul":"\u296A","lhblk":"\u2584","ljcy":"\u0459","ll":"\u226A","llarr":"\u21C7","llcorner":"\u231E","llhard":"\u296B","lltri":"\u25FA","lmidot":"\u0140","lmoust":"\u23B0","lmoustache":"\u23B0","lnE":"\u2268","lnap":"\u2A89","lnapprox":"\u2A89","lne":"\u2A87","lneq":"\u2A87","lneqq":"\u2268","lnsim":"\u22E6","loang":"\u27EC","loarr":"\u21FD","lobrk":"\u27E6","longleftarrow":"\u27F5","longleftrightarrow":"\u27F7","longmapsto":"\u27FC","longrightarrow":"\u27F6","looparrowleft":"\u21AB","looparrowright":"\u21AC","lopar":"\u2985","lopf":"\u{1D55D}","loplus":"\u2A2D","lotimes":"\u2A34","lowast":"\u2217","lowbar":"_","loz":"\u25CA","lozenge":"\u25CA","lozf":"\u29EB","lpar":"(","lparlt":"\u2993","lrarr":"\u21C6","lrcorner":"\u231F","lrhar":"\u21CB","lrhard":"\u296D","lrm":"\u200E","lrtri":"\u22BF","lsaquo":"\u2039","lscr":"\u{1D4C1}","lsh":"\u21B0","lsim":"\u2272","lsime":"\u2A8D","lsimg":"\u2A8F","lsqb":"[","lsquo":"\u2018","lsquor":"\u201A","lstrok":"\u0142","lt":"<","ltcc":"\u2AA6","ltcir":"\u2A79","ltdot":"\u22D6","lthree":"\u22CB","ltimes":"\u22C9","ltlarr":"\u2976","ltquest":"\u2A7B","ltrPar":"\u2996","ltri":"\u25C3","ltrie":"\u22B4","ltrif":"\u25C2","lurdshar":"\u294A","luruhar":"\u2966","lvertneqq":"\u2268\uFE00","lvnE":"\u2268\uFE00","mDDot":"\u223A","macr":"\xAF","male":"\u2642","malt":"\u2720","maltese":"\u2720","map":"\u21A6","mapsto":"\u21A6","mapstodown":"\u21A7","mapstoleft":"\u21A4","mapstoup":"\u21A5","marker":"\u25AE","mcomma":"\u2A29","mcy":"\u043C","mdash":"\u2014","measuredangle":"\u2221","mfr":"\u{1D52A}","mho":"\u2127","micro":"\xB5","mid":"\u2223","midast":"*","midcir":"\u2AF0","middot":"\xB7","minus":"\u2212","minusb":"\u229F","minusd":"\u2238","minusdu":"\u2A2A","mlcp":"\u2ADB","mldr":"\u2026","mnplus":"\u2213","models":"\u22A7","mopf":"\u{1D55E}","mp":"\u2213","mscr":"\u{1D4C2}","mstpos":"\u223E","mu":"\u03BC","multimap":"\u22B8","mumap":"\u22B8","nGg":"\u22D9\u0338","nGt":"\u226B\u20D2","nGtv":"\u226B\u0338","nLeftarrow":"\u21CD","nLeftrightarrow":"\u21CE","nLl":"\u22D8\u0338","nLt":"\u226A\u20D2","nLtv":"\u226A\u0338","nRightarrow":"\u21CF","nVDash":"\u22AF","nVdash":"\u22AE","nabla":"\u2207","nacute":"\u0144","nang":"\u2220\u20D2","nap":"\u2249","napE":"\u2A70\u0338","napid":"\u224B\u0338","napos":"\u0149","napprox":"\u2249","natur":"\u266E","natural":"\u266E","naturals":"\u2115","nbsp":"\xA0","nbump":"\u224E\u0338","nbumpe":"\u224F\u0338","ncap":"\u2A43","ncaron":"\u0148","ncedil":"\u0146","ncong":"\u2247","ncongdot":"\u2A6D\u0338","ncup":"\u2A42","ncy":"\u043D","ndash":"\u2013","ne":"\u2260","neArr":"\u21D7","nearhk":"\u2924","nearr":"\u2197","nearrow":"\u2197","nedot":"\u2250\u0338","nequiv":"\u2262","nesear":"\u2928","nesim":"\u2242\u0338","nexist":"\u2204","nexists":"\u2204","nfr":"\u{1D52B}","ngE":"\u2267\u0338","nge":"\u2271","ngeq":"\u2271","ngeqq":"\u2267\u0338","ngeqslant":"\u2A7E\u0338","nges":"\u2A7E\u0338","ngsim":"\u2275","ngt":"\u226F","ngtr":"\u226F","nhArr":"\u21CE","nharr":"\u21AE","nhpar":"\u2AF2","ni":"\u220B","nis":"\u22FC","nisd":"\u22FA","niv":"\u220B","njcy":"\u045A","nlArr":"\u21CD","nlE":"\u2266\u0338","nlarr":"\u219A","nldr":"\u2025","nle":"\u2270","nleftarrow":"\u219A","nleftrightarrow":"\u21AE","nleq":"\u2270","nleqq":"\u2266\u0338","nleqslant":"\u2A7D\u0338","nles":"\u2A7D\u0338","nless":"\u226E","nlsim":"\u2274","nlt":"\u226E","nltri":"\u22EA","nltrie":"\u22EC","nmid":"\u2224","nopf":"\u{1D55F}","not":"\xAC","notin":"\u2209","notinE":"\u22F9\u0338","notindot":"\u22F5\u0338","notinva":"\u2209","notinvb":"\u22F7","notinvc":"\u22F6","notni":"\u220C","notniva":"\u220C","notnivb":"\u22FE","notnivc":"\u22FD","npar":"\u2226","nparallel":"\u2226","nparsl":"\u2AFD\u20E5","npart":"\u2202\u0338","npolint":"\u2A14","npr":"\u2280","nprcue":"\u22E0","npre":"\u2AAF\u0338","nprec":"\u2280","npreceq":"\u2AAF\u0338","nrArr":"\u21CF","nrarr":"\u219B","nrarrc":"\u2933\u0338","nrarrw":"\u219D\u0338","nrightarrow":"\u219B","nrtri":"\u22EB","nrtrie":"\u22ED","nsc":"\u2281","nsccue":"\u22E1","nsce":"\u2AB0\u0338","nscr":"\u{1D4C3}","nshortmid":"\u2224","nshortparallel":"\u2226","nsim":"\u2241","nsime":"\u2244","nsimeq":"\u2244","nsmid":"\u2224","nspar":"\u2226","nsqsube":"\u22E2","nsqsupe":"\u22E3","nsub":"\u2284","nsubE":"\u2AC5\u0338","nsube":"\u2288","nsubset":"\u2282\u20D2","nsubseteq":"\u2288","nsubseteqq":"\u2AC5\u0338","nsucc":"\u2281","nsucceq":"\u2AB0\u0338","nsup":"\u2285","nsupE":"\u2AC6\u0338","nsupe":"\u2289","nsupset":"\u2283\u20D2","nsupseteq":"\u2289","nsupseteqq":"\u2AC6\u0338","ntgl":"\u2279","ntilde":"\xF1","ntlg":"\u2278","ntriangleleft":"\u22EA","ntrianglelefteq":"\u22EC","ntriangleright":"\u22EB","ntrianglerighteq":"\u22ED","nu":"\u03BD","num":"#","numero":"\u2116","numsp":"\u2007","nvDash":"\u22AD","nvHarr":"\u2904","nvap":"\u224D\u20D2","nvdash":"\u22AC","nvge":"\u2265\u20D2","nvgt":">\u20D2","nvinfin":"\u29DE","nvlArr":"\u2902","nvle":"\u2264\u20D2","nvlt":"<\u20D2","nvltrie":"\u22B4\u20D2","nvrArr":"\u2903","nvrtrie":"\u22B5\u20D2","nvsim":"\u223C\u20D2","nwArr":"\u21D6","nwarhk":"\u2923","nwarr":"\u2196","nwarrow":"\u2196","nwnear":"\u2927","oS":"\u24C8","oacute":"\xF3","oast":"\u229B","ocir":"\u229A","ocirc":"\xF4","ocy":"\u043E","odash":"\u229D","odblac":"\u0151","odiv":"\u2A38","odot":"\u2299","odsold":"\u29BC","oelig":"\u0153","ofcir":"\u29BF","ofr":"\u{1D52C}","ogon":"\u02DB","ograve":"\xF2","ogt":"\u29C1","ohbar":"\u29B5","ohm":"\u03A9","oint":"\u222E","olarr":"\u21BA","olcir":"\u29BE","olcross":"\u29BB","oline":"\u203E","olt":"\u29C0","omacr":"\u014D","omega":"\u03C9","omicron":"\u03BF","omid":"\u29B6","ominus":"\u2296","oopf":"\u{1D560}","opar":"\u29B7","operp":"\u29B9","oplus":"\u2295","or":"\u2228","orarr":"\u21BB","ord":"\u2A5D","order":"\u2134","orderof":"\u2134","ordf":"\xAA","ordm":"\xBA","origof":"\u22B6","oror":"\u2A56","orslope":"\u2A57","orv":"\u2A5B","oscr":"\u2134","oslash":"\xF8","osol":"\u2298","otilde":"\xF5","otimes":"\u2297","otimesas":"\u2A36","ouml":"\xF6","ovbar":"\u233D","par":"\u2225","para":"\xB6","parallel":"\u2225","parsim":"\u2AF3","parsl":"\u2AFD","part":"\u2202","pcy":"\u043F","percnt":"%","period":".","permil":"\u2030","perp":"\u22A5","pertenk":"\u2031","pfr":"\u{1D52D}","phi":"\u03C6","phiv":"\u03D5","phmmat":"\u2133","phone":"\u260E","pi":"\u03C0","pitchfork":"\u22D4","piv":"\u03D6","planck":"\u210F","planckh":"\u210E","plankv":"\u210F","plus":"+","plusacir":"\u2A23","plusb":"\u229E","pluscir":"\u2A22","plusdo":"\u2214","plusdu":"\u2A25","pluse":"\u2A72","plusmn":"\xB1","plussim":"\u2A26","plustwo":"\u2A27","pm":"\xB1","pointint":"\u2A15","popf":"\u{1D561}","pound":"\xA3","pr":"\u227A","prE":"\u2AB3","prap":"\u2AB7","prcue":"\u227C","pre":"\u2AAF","prec":"\u227A","precapprox":"\u2AB7","preccurlyeq":"\u227C","preceq":"\u2AAF","precnapprox":"\u2AB9","precneqq":"\u2AB5","precnsim":"\u22E8","precsim":"\u227E","prime":"\u2032","primes":"\u2119","prnE":"\u2AB5","prnap":"\u2AB9","prnsim":"\u22E8","prod":"\u220F","profalar":"\u232E","profline":"\u2312","profsurf":"\u2313","prop":"\u221D","propto":"\u221D","prsim":"\u227E","prurel":"\u22B0","pscr":"\u{1D4C5}","psi":"\u03C8","puncsp":"\u2008","qfr":"\u{1D52E}","qint":"\u2A0C","qopf":"\u{1D562}","qprime":"\u2057","qscr":"\u{1D4C6}","quaternions":"\u210D","quatint":"\u2A16","quest":"?","questeq":"\u225F","quot":"\\"","rAarr":"\u21DB","rArr":"\u21D2","rAtail":"\u291C","rBarr":"\u290F","rHar":"\u2964","race":"\u223D\u0331","racute":"\u0155","radic":"\u221A","raemptyv":"\u29B3","rang":"\u27E9","rangd":"\u2992","range":"\u29A5","rangle":"\u27E9","raquo":"\xBB","rarr":"\u2192","rarrap":"\u2975","rarrb":"\u21E5","rarrbfs":"\u2920","rarrc":"\u2933","rarrfs":"\u291E","rarrhk":"\u21AA","rarrlp":"\u21AC","rarrpl":"\u2945","rarrsim":"\u2974","rarrtl":"\u21A3","rarrw":"\u219D","ratail":"\u291A","ratio":"\u2236","rationals":"\u211A","rbarr":"\u290D","rbbrk":"\u2773","rbrace":"}","rbrack":"]","rbrke":"\u298C","rbrksld":"\u298E","rbrkslu":"\u2990","rcaron":"\u0159","rcedil":"\u0157","rceil":"\u2309","rcub":"}","rcy":"\u0440","rdca":"\u2937","rdldhar":"\u2969","rdquo":"\u201D","rdquor":"\u201D","rdsh":"\u21B3","real":"\u211C","realine":"\u211B","realpart":"\u211C","reals":"\u211D","rect":"\u25AD","reg":"\xAE","rfisht":"\u297D","rfloor":"\u230B","rfr":"\u{1D52F}","rhard":"\u21C1","rharu":"\u21C0","rharul":"\u296C","rho":"\u03C1","rhov":"\u03F1","rightarrow":"\u2192","rightarrowtail":"\u21A3","rightharpoondown":"\u21C1","rightharpoonup":"\u21C0","rightleftarrows":"\u21C4","rightleftharpoons":"\u21CC","rightrightarrows":"\u21C9","rightsquigarrow":"\u219D","rightthreetimes":"\u22CC","ring":"\u02DA","risingdotseq":"\u2253","rlarr":"\u21C4","rlhar":"\u21CC","rlm":"\u200F","rmoust":"\u23B1","rmoustache":"\u23B1","rnmid":"\u2AEE","roang":"\u27ED","roarr":"\u21FE","robrk":"\u27E7","ropar":"\u2986","ropf":"\u{1D563}","roplus":"\u2A2E","rotimes":"\u2A35","rpar":")","rpargt":"\u2994","rppolint":"\u2A12","rrarr":"\u21C9","rsaquo":"\u203A","rscr":"\u{1D4C7}","rsh":"\u21B1","rsqb":"]","rsquo":"\u2019","rsquor":"\u2019","rthree":"\u22CC","rtimes":"\u22CA","rtri":"\u25B9","rtrie":"\u22B5","rtrif":"\u25B8","rtriltri":"\u29CE","ruluhar":"\u2968","rx":"\u211E","sacute":"\u015B","sbquo":"\u201A","sc":"\u227B","scE":"\u2AB4","scap":"\u2AB8","scaron":"\u0161","sccue":"\u227D","sce":"\u2AB0","scedil":"\u015F","scirc":"\u015D","scnE":"\u2AB6","scnap":"\u2ABA","scnsim":"\u22E9","scpolint":"\u2A13","scsim":"\u227F","scy":"\u0441","sdot":"\u22C5","sdotb":"\u22A1","sdote":"\u2A66","seArr":"\u21D8","searhk":"\u2925","searr":"\u2198","searrow":"\u2198","sect":"\xA7","semi":";","seswar":"\u2929","setminus":"\u2216","setmn":"\u2216","sext":"\u2736","sfr":"\u{1D530}","sfrown":"\u2322","sharp":"\u266F","shchcy":"\u0449","shcy":"\u0448","shortmid":"\u2223","shortparallel":"\u2225","shy":"\xAD","sigma":"\u03C3","sigmaf":"\u03C2","sigmav":"\u03C2","sim":"\u223C","simdot":"\u2A6A","sime":"\u2243","simeq":"\u2243","simg":"\u2A9E","simgE":"\u2AA0","siml":"\u2A9D","simlE":"\u2A9F","simne":"\u2246","simplus":"\u2A24","simrarr":"\u2972","slarr":"\u2190","smallsetminus":"\u2216","smashp":"\u2A33","smeparsl":"\u29E4","smid":"\u2223","smile":"\u2323","smt":"\u2AAA","smte":"\u2AAC","smtes":"\u2AAC\uFE00","softcy":"\u044C","sol":"/","solb":"\u29C4","solbar":"\u233F","sopf":"\u{1D564}","spades":"\u2660","spadesuit":"\u2660","spar":"\u2225","sqcap":"\u2293","sqcaps":"\u2293\uFE00","sqcup":"\u2294","sqcups":"\u2294\uFE00","sqsub":"\u228F","sqsube":"\u2291","sqsubset":"\u228F","sqsubseteq":"\u2291","sqsup":"\u2290","sqsupe":"\u2292","sqsupset":"\u2290","sqsupseteq":"\u2292","squ":"\u25A1","square":"\u25A1","squarf":"\u25AA","squf":"\u25AA","srarr":"\u2192","sscr":"\u{1D4C8}","ssetmn":"\u2216","ssmile":"\u2323","sstarf":"\u22C6","star":"\u2606","starf":"\u2605","straightepsilon":"\u03F5","straightphi":"\u03D5","strns":"\xAF","sub":"\u2282","subE":"\u2AC5","subdot":"\u2ABD","sube":"\u2286","subedot":"\u2AC3","submult":"\u2AC1","subnE":"\u2ACB","subne":"\u228A","subplus":"\u2ABF","subrarr":"\u2979","subset":"\u2282","subseteq":"\u2286","subseteqq":"\u2AC5","subsetneq":"\u228A","subsetneqq":"\u2ACB","subsim":"\u2AC7","subsub":"\u2AD5","subsup":"\u2AD3","succ":"\u227B","succapprox":"\u2AB8","succcurlyeq":"\u227D","succeq":"\u2AB0","succnapprox":"\u2ABA","succneqq":"\u2AB6","succnsim":"\u22E9","succsim":"\u227F","sum":"\u2211","sung":"\u266A","sup1":"\xB9","sup2":"\xB2","sup3":"\xB3","sup":"\u2283","supE":"\u2AC6","supdot":"\u2ABE","supdsub":"\u2AD8","supe":"\u2287","supedot":"\u2AC4","suphsol":"\u27C9","suphsub":"\u2AD7","suplarr":"\u297B","supmult":"\u2AC2","supnE":"\u2ACC","supne":"\u228B","supplus":"\u2AC0","supset":"\u2283","supseteq":"\u2287","supseteqq":"\u2AC6","supsetneq":"\u228B","supsetneqq":"\u2ACC","supsim":"\u2AC8","supsub":"\u2AD4","supsup":"\u2AD6","swArr":"\u21D9","swarhk":"\u2926","swarr":"\u2199","swarrow":"\u2199","swnwar":"\u292A","szlig":"\xDF","target":"\u2316","tau":"\u03C4","tbrk":"\u23B4","tcaron":"\u0165","tcedil":"\u0163","tcy":"\u0442","tdot":"\u20DB","telrec":"\u2315","tfr":"\u{1D531}","there4":"\u2234","therefore":"\u2234","theta":"\u03B8","thetasym":"\u03D1","thetav":"\u03D1","thickapprox":"\u2248","thicksim":"\u223C","thinsp":"\u2009","thkap":"\u2248","thksim":"\u223C","thorn":"\xFE","tilde":"\u02DC","times":"\xD7","timesb":"\u22A0","timesbar":"\u2A31","timesd":"\u2A30","tint":"\u222D","toea":"\u2928","top":"\u22A4","topbot":"\u2336","topcir":"\u2AF1","topf":"\u{1D565}","topfork":"\u2ADA","tosa":"\u2929","tprime":"\u2034","trade":"\u2122","triangle":"\u25B5","triangledown":"\u25BF","triangleleft":"\u25C3","trianglelefteq":"\u22B4","triangleq":"\u225C","triangleright":"\u25B9","trianglerighteq":"\u22B5","tridot":"\u25EC","trie":"\u225C","triminus":"\u2A3A","triplus":"\u2A39","trisb":"\u29CD","tritime":"\u2A3B","trpezium":"\u23E2","tscr":"\u{1D4C9}","tscy":"\u0446","tshcy":"\u045B","tstrok":"\u0167","twixt":"\u226C","twoheadleftarrow":"\u219E","twoheadrightarrow":"\u21A0","uArr":"\u21D1","uHar":"\u2963","uacute":"\xFA","uarr":"\u2191","ubrcy":"\u045E","ubreve":"\u016D","ucirc":"\xFB","ucy":"\u0443","udarr":"\u21C5","udblac":"\u0171","udhar":"\u296E","ufisht":"\u297E","ufr":"\u{1D532}","ugrave":"\xF9","uharl":"\u21BF","uharr":"\u21BE","uhblk":"\u2580","ulcorn":"\u231C","ulcorner":"\u231C","ulcrop":"\u230F","ultri":"\u25F8","umacr":"\u016B","uml":"\xA8","uogon":"\u0173","uopf":"\u{1D566}","uparrow":"\u2191","updownarrow":"\u2195","upharpoonleft":"\u21BF","upharpoonright":"\u21BE","uplus":"\u228E","upsi":"\u03C5","upsih":"\u03D2","upsilon":"\u03C5","upuparrows":"\u21C8","urcorn":"\u231D","urcorner":"\u231D","urcrop":"\u230E","uring":"\u016F","urtri":"\u25F9","uscr":"\u{1D4CA}","utdot":"\u22F0","utilde":"\u0169","utri":"\u25B5","utrif":"\u25B4","uuarr":"\u21C8","uuml":"\xFC","uwangle":"\u29A7","vArr":"\u21D5","vBar":"\u2AE8","vBarv":"\u2AE9","vDash":"\u22A8","vangrt":"\u299C","varepsilon":"\u03F5","varkappa":"\u03F0","varnothing":"\u2205","varphi":"\u03D5","varpi":"\u03D6","varpropto":"\u221D","varr":"\u2195","varrho":"\u03F1","varsigma":"\u03C2","varsubsetneq":"\u228A\uFE00","varsubsetneqq":"\u2ACB\uFE00","varsupsetneq":"\u228B\uFE00","varsupsetneqq":"\u2ACC\uFE00","vartheta":"\u03D1","vartriangleleft":"\u22B2","vartriangleright":"\u22B3","vcy":"\u0432","vdash":"\u22A2","vee":"\u2228","veebar":"\u22BB","veeeq":"\u225A","vellip":"\u22EE","verbar":"|","vert":"|","vfr":"\u{1D533}","vltri":"\u22B2","vnsub":"\u2282\u20D2","vnsup":"\u2283\u20D2","vopf":"\u{1D567}","vprop":"\u221D","vrtri":"\u22B3","vscr":"\u{1D4CB}","vsubnE":"\u2ACB\uFE00","vsubne":"\u228A\uFE00","vsupnE":"\u2ACC\uFE00","vsupne":"\u228B\uFE00","vzigzag":"\u299A","wcirc":"\u0175","wedbar":"\u2A5F","wedge":"\u2227","wedgeq":"\u2259","weierp":"\u2118","wfr":"\u{1D534}","wopf":"\u{1D568}","wp":"\u2118","wr":"\u2240","wreath":"\u2240","wscr":"\u{1D4CC}","xcap":"\u22C2","xcirc":"\u25EF","xcup":"\u22C3","xdtri":"\u25BD","xfr":"\u{1D535}","xhArr":"\u27FA","xharr":"\u27F7","xi":"\u03BE","xlArr":"\u27F8","xlarr":"\u27F5","xmap":"\u27FC","xnis":"\u22FB","xodot":"\u2A00","xopf":"\u{1D569}","xoplus":"\u2A01","xotime":"\u2A02","xrArr":"\u27F9","xrarr":"\u27F6","xscr":"\u{1D4CD}","xsqcup":"\u2A06","xuplus":"\u2A04","xutri":"\u25B3","xvee":"\u22C1","xwedge":"\u22C0","yacute":"\xFD","yacy":"\u044F","ycirc":"\u0177","ycy":"\u044B","yen":"\xA5","yfr":"\u{1D536}","yicy":"\u0457","yopf":"\u{1D56A}","yscr":"\u{1D4CE}","yucy":"\u044E","yuml":"\xFF","zacute":"\u017A","zcaron":"\u017E","zcy":"\u0437","zdot":"\u017C","zeetrf":"\u2128","zeta":"\u03B6","zfr":"\u{1D537}","zhcy":"\u0436","zigrarr":"\u21DD","zopf":"\u{1D56B}","zscr":"\u{1D4CF}","zwj":"\u200D","zwnj":"\u200C"}');
var uh = { name: "characterReference", tokenize: Pm((a, b2, c2, d2) => {
  let j2 = 0, k2 = 0, l2 = 0, f2 = function(g3) {
    if (g3 === 59 && (j2 | 0) > 0) {
      let e = b2.exit("characterReferenceValue");
      if ((l2 | 0) == 0) {
        if (!rh(hb(a.sliceSerialize(e)))) return d2(g3);
      }
      b2.enter("characterReferenceMarker");
      b2.consume(g3);
      b2.exit("characterReferenceMarker");
      b2.exit("characterReference");
      return c2;
    }
    if (((a2, b3) => {
      if (a2 == 0) return Tc(b3);
      if (a2 == 1) return Rc(gd, b3);
      return Wc(b3);
    })(l2 | 0, g3) && (j2 | 0) < (k2 | 0)) {
      j2 = (j2 | 0) + 1 | 0;
      b2.consume(g3);
      return f2;
    }
    return d2(g3);
  }, g2 = function(c3) {
    if (c3 === 88 || c3 === 120) {
      b2.enter("characterReferenceMarkerHexadecimal");
      b2.consume(c3);
      b2.exit("characterReferenceMarkerHexadecimal");
      b2.enter("characterReferenceValue");
      k2 = 6;
      l2 = 1;
      return f2;
    }
    b2.enter("characterReferenceValue");
    k2 = 7;
    l2 = 2;
    return f2(c3);
  }, h2 = function(c3) {
    if (c3 === 35) {
      b2.enter("characterReferenceMarkerNumeric");
      b2.consume(c3);
      b2.exit("characterReferenceMarkerNumeric");
      return g2;
    }
    b2.enter("characterReferenceValue");
    k2 = 31;
    l2 = 0;
    return f2(c3);
  };
  return function(c3) {
    b2.enter("characterReference");
    b2.enter("characterReferenceMarker");
    b2.consume(c3);
    b2.exit("characterReferenceMarker");
    return h2;
  };
}) };
var wh = { tokenize: Pm((a, b2, c2, d2) => {
  let e = function(e2) {
    if (a.parser.lazy[a.now().line]) return d2(e2);
    return c2(e2);
  };
  return function(c3) {
    if (c3 === null) return d2(c3);
    b2.enter("lineEnding");
    b2.consume(c3);
    b2.exit("lineEnding");
    return e;
  };
}), partial: true };
var yh = { name: "codeFenced", tokenize: Pm((a, b2, c2, d2) => {
  let e = 0, f2 = 0, g2 = 0, h2, i2, j2, k2, m = { tokenize: function(c3, d3, e2) {
    let h3 = 0, i3 = function(b3) {
      if (b3 === null || Zc(b3)) {
        c3.exit("codeFencedFence");
        return d3(b3);
      }
      return e2(b3);
    }, j3 = function(b3) {
      if (b3 == g2) {
        h3 = h3 + 1 | 0;
        c3.consume(b3);
        return j3;
      }
      if (h3 >= f2) {
        c3.exit("codeFencedFenceSequence");
        if (_c(b3)) return pe(c3, i3, "whitespace", 0)(b3);
        return i3(b3);
      }
      return e2(b3);
    }, k3 = function(b3) {
      if (b3 == g2) {
        c3.enter("codeFencedFenceSequence");
        return j3(b3);
      }
      return e2(b3);
    }, l2 = function(d4) {
      c3.enter("codeFencedFence");
      if (_c(d4)) {
        let b3 = 4;
        if (Hb(a.parser.constructs.disable.null, "codeIndented")) b3 = 0;
        return pe(c3, k3, "linePrefix", b3)(d4);
      }
      return k3(d4);
    };
    return function(b3) {
      c3.enter("lineEnding");
      c3.consume(b3);
      c3.exit("lineEnding");
      return l2;
    };
  }, partial: true }, n2 = function(d3) {
    b2.exit("codeFenced");
    return c2(d3);
  }, o2 = function(c3) {
    if (c3 === null || Zc(c3)) {
      b2.exit("codeFlowValue");
      return j2(c3);
    }
    b2.consume(c3);
    return o2;
  };
  j2 = function(c3) {
    if (c3 === null || Zc(c3)) return b2.check(wh, k2, n2)(c3);
    b2.enter("codeFlowValue");
    return o2(c3);
  };
  let p2 = function(c3) {
    if (e > 0 && _c(c3)) return pe(b2, j2, "linePrefix", e + 1)(c3);
    return j2(c3);
  }, q2 = function(c3) {
    b2.enter("lineEnding");
    b2.consume(c3);
    b2.exit("lineEnding");
    return p2;
  };
  k2 = function(c3) {
    return b2.attempt(m, n2, q2)(c3);
  };
  let r2 = function(c3) {
    if (c3 === null || Zc(c3)) {
      b2.exit("chunkString");
      b2.exit("codeFencedFenceInfo");
      return h2(c3);
    }
    if (_c(c3)) {
      b2.exit("chunkString");
      b2.exit("codeFencedFenceInfo");
      return pe(b2, i2, "whitespace", 0)(c3);
    }
    if (c3 === 96 && c3 == g2) return d2(c3);
    b2.consume(c3);
    return r2;
  }, s2 = function(c3) {
    if (c3 === null || Zc(c3)) {
      b2.exit("chunkString");
      b2.exit("codeFencedFenceMeta");
      return h2(c3);
    }
    if (c3 === 96 && c3 == g2) return d2(c3);
    b2.consume(c3);
    return s2;
  };
  i2 = function(c3) {
    if (c3 === null || Zc(c3)) return h2(c3);
    b2.enter("codeFencedFenceMeta");
    b2.enter("chunkString", { contentType: "string" });
    return s2(c3);
  };
  h2 = function(e2) {
    if (e2 === null || Zc(e2)) {
      b2.exit("codeFencedFence");
      if (a.interrupt) return c2(e2);
      return b2.check(wh, k2, n2)(e2);
    }
    b2.enter("codeFencedFenceInfo");
    b2.enter("chunkString", { contentType: "string" });
    return r2(e2);
  };
  let t2 = function(c3) {
    if (c3 == g2) {
      f2 = f2 + 1 | 0;
      b2.consume(c3);
      return t2;
    }
    if (f2 < 3) return d2(c3);
    b2.exit("codeFencedFenceSequence");
    if (_c(c3)) return pe(b2, h2, "whitespace", 0)(c3);
    return h2(c3);
  };
  return function(d3) {
    let f3 = a.events, h3 = f3[kb(f3) - 1 | 0], i3 = 0;
    if (h3 && h3[1].type == "linePrefix") i3 = +hb(h3[2].sliceSerialize.call(h3[2], h3[1], true)).length;
    e = i3;
    g2 = d3 | 0;
    b2.enter("codeFenced");
    b2.enter("codeFencedFence");
    b2.enter("codeFencedFenceSequence");
    return t2(d3);
  };
}), concrete: true };
var Ah = { tokenize: Pm((a, b2, c2, d2) => {
  let e, f2 = function(f3) {
    let g2 = a.events, h2 = g2[kb(g2) - 1 | 0];
    if (h2 && h2[1].type == "linePrefix" && hb(h2[2].sliceSerialize.call(h2[2], h2[1], true)).length >= 4) return c2(f3);
    if (Zc(f3)) return e(f3);
    return d2(f3);
  };
  e = function(g2) {
    if (a.parser.lazy[a.now().line]) return d2(g2);
    if (Zc(g2)) {
      b2.enter("lineEnding");
      b2.consume(g2);
      b2.exit("lineEnding");
      return e;
    }
    return pe(b2, f2, "linePrefix", 4 + 1 | 0)(g2);
  };
  return e;
}), partial: true };
var Ch = { name: "codeIndented", tokenize: Pm((a, b2, c2, d2) => {
  let e, f2 = function(c3) {
    if (c3 === null || Zc(c3)) {
      b2.exit("codeFlowValue");
      return e(c3);
    }
    b2.consume(c3);
    return f2;
  }, g2 = function(d3) {
    b2.exit("codeIndented");
    return c2(d3);
  };
  e = function(c3) {
    if (c3 === null) return g2(c3);
    if (Zc(c3)) return b2.attempt(Ah, e, g2)(c3);
    b2.enter("codeFlowValue");
    return f2(c3);
  };
  let h2 = function(c3) {
    let f3 = a.events, g3 = f3[kb(f3) - 1 | 0];
    if (g3 && g3[1].type == "linePrefix" && hb(g3[2].sliceSerialize.call(g3[2], g3[1], true)).length >= 4) return e(c3);
    return d2(c3);
  };
  return function(c3) {
    b2.enter("codeIndented");
    return pe(b2, h2, "linePrefix", 4 + 1 | 0)(c3);
  };
}) };
var Gh = { name: "codeText", tokenize: function(b2, c2, d2) {
  let e = 0, f2 = 0, g2, h2, i2 = function(c3) {
    if (c3 === null || c3 === 32 || c3 === 96 || Zc(c3)) {
      b2.exit("codeTextData");
      return h2(c3);
    }
    b2.consume(c3);
    return i2;
  }, j2 = function(d3) {
    if (d3 === 96) {
      b2.consume(d3);
      f2 = f2 + 1 | 0;
      return j2;
    }
    if (f2 == e) {
      b2.exit("codeTextSequence");
      b2.exit("codeText");
      return c2(d3);
    }
    g2.type = "codeTextData";
    return i2(d3);
  };
  h2 = function(c3) {
    if (c3 === null) return d2(c3);
    if (c3 === 32) {
      b2.enter("space");
      b2.consume(c3);
      b2.exit("space");
      return h2;
    }
    if (c3 === 96) {
      g2 = b2.enter("codeTextSequence");
      f2 = 0;
      return j2(c3);
    }
    if (Zc(c3)) {
      b2.enter("lineEnding");
      b2.consume(c3);
      b2.exit("lineEnding");
      return h2;
    }
    b2.enter("codeTextData");
    return i2(c3);
  };
  let k2 = function(c3) {
    if (c3 === 96) {
      b2.consume(c3);
      e = e + 1 | 0;
      return k2;
    }
    b2.exit("codeTextSequence");
    return h2(c3);
  };
  return function(c3) {
    b2.enter("codeText");
    b2.enter("codeTextSequence");
    return k2(c3);
  };
}, previous: Om((a, b2) => {
  if (b2 !== 96) return true;
  let c2 = a.events;
  return c2[kb(c2) - 1 | 0][1].type == "characterEscape";
}), resolve: function(b2, c2) {
  let d2 = kb(b2) - 4 | 0, e = 3, f2 = 0, g2 = -1;
  if ((b2[e][1].type == "lineEnding" || b2[e][1].type == "space") && (b2[d2][1].type == "lineEnding" || b2[d2][1].type == "space")) {
    f2 = e;
    while ((f2 + 1 | 0) < d2) {
      f2 = f2 + 1 | 0;
      if (b2[f2][1].type == "codeTextData") {
        b2[e][1].type = "codeTextPadding";
        b2[d2][1].type = "codeTextPadding";
        e = e + 2 | 0;
        d2 = d2 - 2 | 0;
        break;
      }
    }
  }
  f2 = e - 1 | 0;
  d2 = d2 + 1 | 0;
  while (f2 < d2) {
    f2 = f2 + 1 | 0;
    if (g2 < 0) {
      if (f2 != d2 && b2[f2][1].type != "lineEnding") g2 = f2;
    } else if (f2 == d2 || b2[f2][1].type == "lineEnding") {
      b2[g2][1].type = "codeTextData";
      if (f2 != (g2 + 2 | 0)) {
        b2[g2][1].end = b2[f2 - 1 | 0][1].end;
        b2.splice(g2 + 2 | 0, (f2 - g2 | 0) - 2 | 0);
        d2 = d2 - ((f2 - g2 | 0) - 2 | 0) | 0;
        f2 = g2 + 2 | 0;
      }
      g2 = -1;
    }
  }
  return b2;
} };
var Jh = Nm((a, b2) => {
  let c2 = b2[0], d2 = b2[1], e = b2[2], f2 = b2[3] + "", g2 = b2[4] + "", h2 = b2[5] + "", i2 = 0, j2 = false, k2, l2, m = function(b3) {
    if (b3 === 91 || b3 === 92 || b3 === 93) {
      c2.consume(b3);
      i2 = i2 + 1 | 0;
      return k2;
    }
    return k2(b3);
  };
  k2 = function(b3) {
    if (b3 === null || b3 === 91 || b3 === 93 || Zc(b3)) {
      c2.exit("chunkString");
      return l2(b3);
    }
    let d3 = i2;
    i2 = i2 + 1 | 0;
    if (d3 > 999) {
      c2.exit("chunkString");
      return l2(b3);
    }
    c2.consume(b3);
    if (!j2) j2 = !_c(b3);
    if (b3 === 92) return m;
    return k2;
  };
  l2 = function(m2) {
    let n2 = m2 === 94 && i2 == 0 && rb(a.parser.constructs, "_hiddenFootnoteSupport");
    if (i2 > 999 || m2 === null || m2 === 91 || m2 === 93 && !j2 || n2) return e(m2);
    if (m2 === 93) {
      c2.exit(h2);
      c2.enter(g2);
      c2.consume(m2);
      c2.exit(g2);
      c2.exit(f2);
      return d2;
    }
    if (Zc(m2)) {
      c2.enter("lineEnding");
      c2.consume(m2);
      c2.exit("lineEnding");
      return l2;
    }
    c2.enter("chunkString", { contentType: "string" });
    return k2(m2);
  };
  return function(b3) {
    c2.enter(f2);
    c2.enter(g2);
    c2.consume(b3);
    c2.exit(g2);
    c2.enter(h2);
    return l2;
  };
});
var Nh = /[\t\n\r ]+/g;
var Oh = /^ | $/g;
var Qh = { tokenize: function(b2, c2, d2) {
  let e = function(b3) {
    if (b3 === null || Zc(b3)) return c2(b3);
    return d2(b3);
  }, f2 = function(c3) {
    if (_c(c3)) return pe(b2, e, "whitespace", 0)(c3);
    return e(c3);
  }, g2 = function(c3) {
    return Kh(b2, f2, d2, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(c3);
  };
  return function(c3) {
    if ($c(c3)) return Lh(b2, g2)(c3);
    return d2(c3);
  };
}, partial: true };
var Sh = { name: "definition", tokenize: Pm((a, b2, c2, d2) => {
  let e = "", f2 = function(g3) {
    if (g3 === null || Zc(g3)) {
      b2.exit("definition");
      yb(a.parser.defined, e);
      return c2(g3);
    }
    return d2(g3);
  }, g2 = function(c3) {
    if (_c(c3)) return pe(b2, f2, "whitespace", 0)(c3);
    return f2(c3);
  }, h2 = function(c3) {
    return b2.attempt(Qh, g2, g2)(c3);
  }, i2 = function(c3) {
    return Ih(b2, h2, d2, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString", 0)(c3);
  }, j2 = function(c3) {
    if ($c(c3)) return Lh(b2, i2)(c3);
    return Ih(b2, h2, d2, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString", 0)(c3);
  }, k2 = function(f3) {
    let g3 = a.events;
    e = Mh(hb(hb(a.sliceSerialize(g3[kb(g3) - 1 | 0][1])).slice(1, -1)));
    if (f3 === 58) {
      b2.enter("definitionMarker");
      b2.consume(f3);
      b2.exit("definitionMarker");
      return j2;
    }
    return d2(f3);
  };
  return function(e2) {
    b2.enter("definition");
    {
      let g3 = [];
      yb(g3, b2);
      yb(g3, k2);
      yb(g3, d2);
      yb(g3, "definitionLabel");
      yb(g3, "definitionLabelMarker");
      yb(g3, "definitionLabelString");
      return xb(Jh, a, g3)(e2);
    }
  };
}) };
var Uh = { name: "hardBreakEscape", tokenize: function(b2, c2, d2) {
  let e = function(e2) {
    if (Zc(e2)) {
      b2.exit("hardBreakEscape");
      return c2(e2);
    }
    return d2(e2);
  };
  return function(c3) {
    b2.enter("hardBreakEscape");
    b2.consume(c3);
    return e;
  };
} };
var Xh = { name: "headingAtx", tokenize: function(b2, c2, d2) {
  let e = 0, f2, g2 = function(c3) {
    if (c3 === null || c3 === 35 || $c(c3)) {
      b2.exit("atxHeadingText");
      return f2(c3);
    }
    b2.consume(c3);
    return g2;
  }, h2 = function(c3) {
    if (c3 === 35) {
      b2.consume(c3);
      return h2;
    }
    b2.exit("atxHeadingSequence");
    return f2(c3);
  };
  f2 = function(d3) {
    if (d3 === 35) {
      b2.enter("atxHeadingSequence");
      return h2(d3);
    }
    if (d3 === null || Zc(d3)) {
      b2.exit("atxHeading");
      return c2(d3);
    }
    if (_c(d3)) return pe(b2, f2, "whitespace", 0)(d3);
    b2.enter("atxHeadingText");
    return g2(d3);
  };
  let i2 = function(c3) {
    if (c3 === 35 && e < 6) {
      e = e + 1 | 0;
      b2.consume(c3);
      return i2;
    }
    if (c3 === null || $c(c3)) {
      b2.exit("atxHeadingSequence");
      return f2(c3);
    }
    return d2(c3);
  };
  return function(c3) {
    b2.enter("atxHeading");
    {
      b2.enter("atxHeadingSequence");
      return i2(c3);
    }
  };
}, resolve: function(b2, c2) {
  let d2 = kb(b2) - 2 | 0, e = 3;
  if (b2[e][1].type == "whitespace") e = e + 2 | 0;
  if ((d2 - 2 | 0) > e && b2[d2][1].type == "whitespace") d2 = d2 - 2 | 0;
  if (b2[d2][1].type == "atxHeadingSequence" && (e == (d2 - 1 | 0) || (d2 - 4 | 0) > e && b2[d2 - 2 | 0][1].type == "whitespace")) d2 = (e + 1 | 0) == d2 ? d2 - 2 | 0 : d2 - 4 | 0;
  if (d2 > e) {
    let a = { type: "atxHeadingText", start: b2[e][1].start, end: b2[d2][1].end }, f2 = { type: "chunkText", start: b2[e][1].start, end: b2[d2][1].end, contentType: "text" };
    Mc(b2, e, (d2 - e | 0) + 1 | 0, [["enter", a, c2], ["enter", f2, c2], ["exit", f2, c2], ["exit", a, c2]]);
  }
  return b2;
} };
var Yh = "address article aside base basefont blockquote body caption center col colgroup dd details dialog dir div dl dt fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hr html iframe legend li link main menu menuitem nav noframes ol optgroup option p param search section summary table tbody td tfoot th thead title tr track ul".split(" ");
var Zh = "pre script style textarea".split(" ");
var ai = { tokenize: Pm((a, b2, c2, d2) => {
  let e = function(e2) {
    if (a.parser.lazy[a.now().line]) return d2(e2);
    return c2(e2);
  };
  return function(c3) {
    if (Zc(c3)) {
      b2.enter("lineEnding");
      b2.consume(c3);
      b2.exit("lineEnding");
      return e;
    }
    return d2(c3);
  };
}), partial: true };
var ci = { tokenize: function(b2, c2, d2) {
  return function(e) {
    b2.enter("lineEnding");
    b2.consume(e);
    b2.exit("lineEnding");
    return b2.attempt(zg, c2, d2);
  };
}, partial: true };
var ei = { name: "htmlFlow", tokenize: Pm((a, b2, c2, d2) => {
  let e = 0, f2 = false, g2 = "", h2 = 0, i2 = 0, k2, l2, m, n2, o2, p2, q2, r2, s2 = (c3) => {
    b2.consume(c3);
  }, j2 = function(d3) {
    b2.exit("htmlFlow");
    return c2(d3);
  }, t2 = function(c3) {
    if (c3 === null || Zc(c3)) {
      b2.exit("htmlFlowData");
      return j2(c3);
    }
    s2(c3);
    return t2;
  }, u2 = function(c3) {
    if (c3 === 45 && e == 2) {
      s2(c3);
      return m;
    }
    if (c3 === 60 && e == 1) {
      s2(c3);
      return n2;
    }
    if (c3 === 62 && e == 4) {
      s2(c3);
      return t2;
    }
    if (c3 === 63 && e == 3) {
      s2(c3);
      return p2;
    }
    if (c3 === 93 && e == 5) {
      s2(c3);
      return o2;
    }
    if (Zc(c3) && (e == 6 || e == 7)) {
      b2.exit("htmlFlowData");
      return b2.check(ci, j2, k2)(c3);
    }
    if (c3 === null || Zc(c3)) {
      b2.exit("htmlFlowData");
      return k2(c3);
    }
    s2(c3);
    return u2;
  }, v2 = function(c3) {
    b2.enter("lineEnding");
    s2(c3);
    b2.exit("lineEnding");
    return l2;
  };
  k2 = function(c3) {
    return b2.check(ai, v2, j2)(c3);
  };
  l2 = function(c3) {
    if (c3 === null || Zc(c3)) return k2(c3);
    b2.enter("htmlFlowData");
    return u2(c3);
  };
  m = function(b3) {
    if (b3 === 45) {
      s2(b3);
      return p2;
    }
    return u2(b3);
  };
  let w2 = function(b3) {
    if (b3 === 62) {
      if (Gb(Zh, g2.toLowerCase())) {
        s2(b3);
        return t2;
      }
      return u2(b3);
    }
    if (Sc(b3) && g2.length < 8) {
      s2(b3);
      g2 = g2 + Ib(b3);
      return w2;
    }
    return u2(b3);
  };
  n2 = function(b3) {
    if (b3 === 47) {
      s2(b3);
      g2 = "";
      return w2;
    }
    return u2(b3);
  };
  o2 = function(b3) {
    if (b3 === 93) {
      s2(b3);
      return p2;
    }
    return u2(b3);
  };
  p2 = function(b3) {
    if (b3 === 62) {
      s2(b3);
      return t2;
    }
    if (b3 === 45 && e == 2) {
      s2(b3);
      return p2;
    }
    return u2(b3);
  };
  let x = function(b3) {
    if (b3 === null || Zc(b3)) return u2(b3);
    if (_c(b3)) {
      s2(b3);
      return x;
    }
    return d2(b3);
  }, y = function(b3) {
    if (b3 === 62) {
      s2(b3);
      return x;
    }
    return d2(b3);
  }, z = function(b3) {
    if (b3 === 47 || b3 === 62 || _c(b3)) return q2(b3);
    return d2(b3);
  }, A = function(b3) {
    if (b3 == i2) {
      s2(b3);
      i2 = 0;
      return z;
    }
    if (b3 === null || Zc(b3)) return d2(b3);
    s2(b3);
    return A;
  }, B2 = function(b3) {
    if (b3 === null || b3 === 34 || b3 === 39 || b3 === 47 || b3 === 60 || b3 === 61 || b3 === 62 || b3 === 96 || $c(b3)) return r2(b3);
    s2(b3);
    return B2;
  }, C2 = function(b3) {
    if (b3 === null || b3 === 60 || b3 === 61 || b3 === 62 || b3 === 96) return d2(b3);
    if (b3 === 34 || b3 === 39) {
      s2(b3);
      i2 = b3 | 0;
      return A;
    }
    if (_c(b3)) {
      s2(b3);
      return C2;
    }
    return B2(b3);
  };
  r2 = function(b3) {
    if (b3 === 61) {
      s2(b3);
      return C2;
    }
    if (_c(b3)) {
      s2(b3);
      return r2;
    }
    return q2(b3);
  };
  let D2 = function(b3) {
    if (b3 === 45 || b3 === 46 || b3 === 58 || b3 === 95 || Tc(b3)) {
      s2(b3);
      return D2;
    }
    return r2(b3);
  };
  q2 = function(b3) {
    if (b3 === 47) {
      s2(b3);
      return y;
    }
    if (b3 === 58 || b3 === 95 || Sc(b3)) {
      s2(b3);
      return D2;
    }
    if (_c(b3)) {
      s2(b3);
      return q2;
    }
    return y(b3);
  };
  let E2 = function(b3) {
    if (_c(b3)) {
      s2(b3);
      return E2;
    }
    return y(b3);
  }, F = function(e2) {
    if (e2 === 62) {
      s2(e2);
      if (a.interrupt) return c2;
      return u2;
    }
    return d2(e2);
  }, G2 = function(h3) {
    if (h3 === null || h3 === 47 || h3 === 62 || $c(h3)) {
      let b3 = h3 === 47, i3 = g2.toLowerCase();
      if (!b3 && !f2 && Gb(Zh, i3)) {
        e = 1;
        if (a.interrupt) return c2(h3);
        return u2(h3);
      }
      if (Gb(Yh, i3)) {
        e = 6;
        if (b3) {
          s2(h3);
          return F;
        }
        if (a.interrupt) return c2(h3);
        return u2(h3);
      }
      e = 7;
      if (a.interrupt && !a.parser.lazy[a.now().line]) return d2(h3);
      if (f2) return E2(h3);
      return q2(h3);
    }
    if (h3 === 45 || Tc(h3)) {
      s2(h3);
      g2 = g2 + Ib(h3);
      return G2;
    }
    return d2(h3);
  }, H = function(b3) {
    if (Sc(b3)) {
      s2(b3);
      g2 = Ib(b3);
      return G2;
    }
    return d2(b3);
  }, I = function(e2) {
    let f3 = h2;
    h2 = h2 + 1 | 0;
    if (e2 !== null && md(e2) == ("CDATA[".charCodeAt(f3) | 0)) {
      s2(e2);
      if ((f3 + 1 | 0) == "CDATA[".length) {
        if (a.interrupt) return c2;
        return u2;
      }
      return I;
    }
    return d2(e2);
  }, J = function(e2) {
    if (e2 === 45) {
      s2(e2);
      if (a.interrupt) return c2;
      return p2;
    }
    return d2(e2);
  }, K = function(f3) {
    if (f3 === 45) {
      s2(f3);
      e = 2;
      return J;
    }
    if (f3 === 91) {
      s2(f3);
      e = 5;
      h2 = 0;
      return I;
    }
    if (Sc(f3)) {
      s2(f3);
      e = 4;
      if (a.interrupt) return c2;
      return p2;
    }
    return d2(f3);
  }, L2 = function(h3) {
    if (h3 === 33) {
      s2(h3);
      return K;
    }
    if (h3 === 47) {
      s2(h3);
      f2 = true;
      return H;
    }
    if (h3 === 63) {
      s2(h3);
      e = 3;
      if (a.interrupt) return c2;
      return p2;
    }
    if (Sc(h3)) {
      s2(h3);
      g2 = Ib(h3);
      return G2;
    }
    return d2(h3);
  };
  return function(c3) {
    b2.enter("htmlFlow");
    b2.enter("htmlFlowData");
    s2(c3);
    return L2;
  };
}), concrete: true, resolveTo: function(b2, c2) {
  let d2 = kb(b2);
  while (true) {
    d2 = d2 - 1 | 0;
    if (d2 < 0) break;
    if (b2[d2][0] == "enter" && b2[d2][1].type == "htmlFlow") break;
  }
  if (d2 > 1 && b2[d2 - 2 | 0][1].type == "linePrefix") {
    b2[d2][1].start = b2[d2 - 2 | 0][1].start;
    b2[d2 + 1 | 0][1].start = b2[d2 - 2 | 0][1].start;
    b2.splice(d2 - 2 | 0, 2);
  }
  return b2;
} };
var gi = { name: "htmlText", tokenize: Pm((a, b2, c2, d2) => {
  let e = 0, f2 = 0, g2, h2, i2, j2, k2, l2, m = (c3) => {
    b2.consume(c3);
  }, n2 = function(c3) {
    b2.enter("htmlTextData");
    return g2(c3);
  }, o2 = function(d3) {
    if (_c(d3)) {
      let c3 = 4;
      if (Hb(a.parser.constructs.disable.null, "codeIndented")) c3 = 0;
      return pe(b2, n2, "linePrefix", c3)(d3);
    }
    return n2(d3);
  }, p2 = (c3) => {
    b2.exit("htmlTextData");
    b2.enter("lineEnding");
    m(c3);
    b2.exit("lineEnding");
    return o2;
  }, q2 = function(e2) {
    if (e2 === 62) {
      m(e2);
      b2.exit("htmlTextData");
      b2.exit("htmlText");
      return c2;
    }
    return d2(e2);
  }, r2 = function(b3) {
    if (b3 === 47 || b3 === 62 || $c(b3)) return h2(b3);
    return d2(b3);
  }, s2 = function(b3) {
    if (b3 === null || b3 === 34 || b3 === 39 || b3 === 60 || b3 === 61 || b3 === 96) return d2(b3);
    if (b3 === 47 || b3 === 62 || $c(b3)) return h2(b3);
    m(b3);
    return s2;
  }, t2 = function(b3) {
    if (b3 == e) {
      m(b3);
      e = 0;
      return r2;
    }
    if (b3 === null) return d2(b3);
    if (Zc(b3)) {
      g2 = t2;
      return p2(b3);
    }
    m(b3);
    return t2;
  }, u2 = function(b3) {
    if (b3 === null || b3 === 60 || b3 === 61 || b3 === 62 || b3 === 96) return d2(b3);
    if (b3 === 34 || b3 === 39) {
      m(b3);
      e = b3 | 0;
      return t2;
    }
    if (Zc(b3)) {
      g2 = u2;
      return p2(b3);
    }
    if (_c(b3)) {
      m(b3);
      return u2;
    }
    m(b3);
    return s2;
  }, v2 = function(b3) {
    if (b3 === 61) {
      m(b3);
      return u2;
    }
    if (Zc(b3)) {
      g2 = v2;
      return p2(b3);
    }
    if (_c(b3)) {
      m(b3);
      return v2;
    }
    return h2(b3);
  }, w2 = function(b3) {
    if (b3 === 45 || b3 === 46 || b3 === 58 || b3 === 95 || Tc(b3)) {
      m(b3);
      return w2;
    }
    return v2(b3);
  };
  h2 = function(b3) {
    if (b3 === 47) {
      m(b3);
      return q2;
    }
    if (b3 === 58 || b3 === 95 || Sc(b3)) {
      m(b3);
      return w2;
    }
    if (Zc(b3)) {
      g2 = h2;
      return p2(b3);
    }
    if (_c(b3)) {
      m(b3);
      return h2;
    }
    return q2(b3);
  };
  let x = function(b3) {
    if (b3 === 45 || Tc(b3)) {
      m(b3);
      return x;
    }
    if (b3 === 47 || b3 === 62 || $c(b3)) return h2(b3);
    return d2(b3);
  }, y = function(b3) {
    if (Zc(b3)) {
      g2 = y;
      return p2(b3);
    }
    if (_c(b3)) {
      m(b3);
      return y;
    }
    return q2(b3);
  }, z = function(b3) {
    if (b3 === 45 || Tc(b3)) {
      m(b3);
      return z;
    }
    return y(b3);
  }, A = function(b3) {
    if (Sc(b3)) {
      m(b3);
      return z;
    }
    return d2(b3);
  }, B2 = function(b3) {
    if (b3 === null) return d2(b3);
    if (b3 === 63) {
      m(b3);
      return i2;
    }
    if (Zc(b3)) {
      g2 = B2;
      return p2(b3);
    }
    m(b3);
    return B2;
  };
  i2 = function(b3) {
    if (b3 === 62) return q2(b3);
    return B2(b3);
  };
  let C2 = function(b3) {
    if (b3 === null || b3 === 62) return q2(b3);
    if (Zc(b3)) {
      g2 = C2;
      return p2(b3);
    }
    m(b3);
    return C2;
  }, D2 = function(b3) {
    if (b3 === null) return d2(b3);
    if (b3 === 93) {
      m(b3);
      return j2;
    }
    if (Zc(b3)) {
      g2 = D2;
      return p2(b3);
    }
    m(b3);
    return D2;
  }, E2 = function(b3) {
    if (b3 === 62) return q2(b3);
    if (b3 === 93) {
      m(b3);
      return E2;
    }
    return D2(b3);
  };
  j2 = function(b3) {
    if (b3 === 93) {
      m(b3);
      return E2;
    }
    return D2(b3);
  };
  let F = function(b3) {
    let c3 = f2;
    f2 = f2 + 1 | 0;
    if (b3 !== null && md(b3) == ("CDATA[".charCodeAt(c3) | 0)) {
      m(b3);
      if ((c3 + 1 | 0) == "CDATA[".length) return D2;
      return F;
    }
    return d2(b3);
  }, G2 = function(b3) {
    if (b3 === null) return d2(b3);
    if (b3 === 45) {
      m(b3);
      return k2;
    }
    if (Zc(b3)) {
      g2 = G2;
      return p2(b3);
    }
    m(b3);
    return G2;
  };
  k2 = function(b3) {
    if (b3 === 45) {
      m(b3);
      return l2;
    }
    return G2(b3);
  };
  l2 = function(b3) {
    if (b3 === 62) return q2(b3);
    if (b3 === 45) return k2(b3);
    return G2(b3);
  };
  let H = function(b3) {
    if (b3 === 45) {
      m(b3);
      return l2;
    }
    return d2(b3);
  }, I = function(b3) {
    if (b3 === 45) {
      m(b3);
      return H;
    }
    if (b3 === 91) {
      m(b3);
      f2 = 0;
      return F;
    }
    if (Sc(b3)) {
      m(b3);
      return C2;
    }
    return d2(b3);
  }, J = function(b3) {
    if (b3 === 33) {
      m(b3);
      return I;
    }
    if (b3 === 47) {
      m(b3);
      return A;
    }
    if (b3 === 63) {
      m(b3);
      return B2;
    }
    if (Sc(b3)) {
      m(b3);
      return x;
    }
    return d2(b3);
  };
  return function(c3) {
    b2.enter("htmlText");
    b2.enter("htmlTextData");
    m(c3);
    return J;
  };
}) };
var li = Pm((a, b2, c2, d2) => {
  let e = function(e2) {
    let f3 = a.events, h2 = Mh(hb(hb(a.sliceSerialize(f3[kb(f3) - 1 | 0][1])).slice(1, -1)));
    if (Gb(a.parser.defined, h2)) return c2(e2);
    return d2(e2);
  }, f2 = function(b3) {
    return d2(b3);
  };
  return function(d3) {
    let g2 = [];
    yb(g2, b2);
    yb(g2, e);
    yb(g2, f2);
    yb(g2, "reference");
    yb(g2, "referenceMarker");
    yb(g2, "referenceString");
    return xb(Jh, a, g2)(d3);
  };
});
var ni = { tokenize: function(b2, c2, d2) {
  let e = function(e2) {
    if (e2 === 41) {
      b2.enter("resourceMarker");
      b2.consume(e2);
      b2.exit("resourceMarker");
      b2.exit("resource");
      return c2;
    }
    return d2(e2);
  }, f2 = function(c3) {
    if ($c(c3)) return Lh(b2, e)(c3);
    return e(c3);
  }, g2 = function(c3) {
    if (c3 === 34 || c3 === 39 || c3 === 40) return Kh(b2, f2, d2, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c3);
    return e(c3);
  }, h2 = function(b3) {
    return d2(b3);
  }, i2 = function(c3) {
    if ($c(c3)) return Lh(b2, g2)(c3);
    return e(c3);
  }, j2 = function(c3) {
    if (c3 === 41) return e(c3);
    return Ih(b2, i2, h2, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c3);
  }, k2 = function(c3) {
    if ($c(c3)) return Lh(b2, j2)(c3);
    return j2(c3);
  };
  return function(c3) {
    b2.enter("resource");
    b2.enter("resourceMarker");
    b2.consume(c3);
    b2.exit("resourceMarker");
    return k2;
  };
} };
var oi = { tokenize: li };
var pi = { tokenize: function(b2, c2, d2) {
  let e = function(e2) {
    if (e2 === 93) {
      b2.enter("referenceMarker");
      b2.consume(e2);
      b2.exit("referenceMarker");
      b2.exit("reference");
      return c2;
    }
    return d2(e2);
  };
  return function(c3) {
    b2.enter("reference");
    b2.enter("referenceMarker");
    b2.consume(c3);
    b2.exit("referenceMarker");
    return e;
  };
} };
var ri = { name: "labelEnd", tokenize: Pm((a, b2, c2, d2) => {
  let e = kb(a.events), f2;
  while (true) {
    e = e - 1 | 0;
    if (e < 0) break;
    let b3 = a.events[e][1], c3 = hb(b3.type);
    if ((c3 == "labelImage" || c3 == "labelLink") && !b3._balanced) {
      f2 = b3;
      break;
    }
  }
  let g2 = false, h2 = function(b3) {
    return c2(b3);
  }, i2 = function(b3) {
    if (f2) f2._balanced = true;
    return d2(b3);
  }, j2 = function(c3) {
    return b2.attempt(pi, h2, i2)(c3);
  }, k2 = function(d3) {
    if (d3 === 40) {
      let a2 = i2;
      if (g2) a2 = h2;
      return b2.attempt(ni, h2, a2)(d3);
    }
    if (d3 === 91) {
      let a2 = i2;
      if (g2) a2 = j2;
      return b2.attempt(oi, h2, a2)(d3);
    }
    if (g2) return c2(d3);
    return i2(d3);
  };
  return function(e2) {
    if (!f2) return d2(e2);
    if (f2._inactive) return i2(e2);
    let h3 = { start: f2.end, end: a.now() }, j3 = Mh(hb(a.sliceSerialize(h3)));
    g2 = Gb(a.parser.defined, j3);
    b2.enter("labelEnd");
    b2.enter("labelMarker");
    b2.consume(e2);
    b2.exit("labelMarker");
    b2.exit("labelEnd");
    return k2;
  };
}), resolveAll: function(b2, c2) {
  let d2 = -1, e = [], f2 = kb(b2);
  while (true) {
    d2 = d2 + 1 | 0;
    if (d2 >= f2) break;
    let a = b2[d2][1];
    e.push(b2[d2]);
    let c3 = hb(a.type);
    if (c3 == "labelImage" || c3 == "labelLink" || c3 == "labelEnd") {
      let b3 = 2;
      if (c3 == "labelImage") b3 = 4;
      a.type = "data";
      d2 = d2 + b3 | 0;
    }
  }
  if (kb(b2) != kb(e)) Mc(b2, 0, kb(b2), e);
  return b2;
}, resolveTo: function(b2, c2) {
  let d2 = kb(b2), e = 0, f2, g2;
  while (true) {
    d2 = d2 - 1 | 0;
    if (d2 < 0) break;
    let a = b2[d2][1], c3 = hb(a.type);
    if (f2) {
      if (c3 == "link" || c3 == "labelLink" && a._inactive) break;
      if (b2[d2][0] == "enter" && c3 == "labelLink") a._inactive = true;
    } else if (g2) {
      if (b2[d2][0] == "enter" && (c3 == "labelImage" || c3 == "labelLink") && !a._balanced) {
        f2 = d2;
        if (c3 != "labelLink") {
          e = 2;
          break;
        }
      }
    } else if (c3 == "labelEnd") g2 = d2;
  }
  let h2 = f2 | 0, i2 = g2 | 0, j2 = "image";
  if (b2[h2][1].type == "labelLink") j2 = "link";
  let k2 = { type: j2, start: Ob(b2[h2][1].start), end: Ob(b2[kb(b2) - 1 | 0][1].end) }, l2 = { type: "label", start: Ob(b2[h2][1].start), end: Ob(b2[i2][1].end) }, m = { type: "labelText", start: Ob(b2[(h2 + e | 0) + 2 | 0][1].end), end: Ob(b2[i2 - 2 | 0][1].start) }, n2 = [];
  n2.push(["enter", k2, c2]);
  n2.push(["enter", l2, c2]);
  n2 = Nc(n2, Cb(b2, h2 + 1 | 0, (h2 + e | 0) + 3 | 0));
  let o2 = [];
  o2.push(["enter", m, c2]);
  n2 = Nc(n2, o2);
  n2 = Nc(n2, kd(c2.parser.constructs.insideSpan.null, Cb(b2, (h2 + e | 0) + 4 | 0, i2 - 3 | 0), c2));
  let p2 = [];
  p2.push(["exit", m, c2]);
  p2.push(b2[i2 - 2 | 0]);
  p2.push(b2[i2 - 1 | 0]);
  p2.push(["exit", l2, c2]);
  n2 = Nc(n2, p2);
  n2 = Nc(n2, Cb(b2, i2 + 1 | 0, kb(b2)));
  let q2 = [];
  q2.push(["exit", k2, c2]);
  n2 = Nc(n2, q2);
  Mc(b2, h2, kb(b2), n2);
  return b2;
} };
var ti = { name: "labelStartImage", tokenize: Pm((a, b2, c2, d2) => {
  let e = function(e2) {
    if (e2 === 94 && rb(a.parser.constructs, "_hiddenFootnoteSupport")) return d2(e2);
    return c2(e2);
  }, f2 = function(c3) {
    if (c3 === 91) {
      b2.enter("labelMarker");
      b2.consume(c3);
      b2.exit("labelMarker");
      b2.exit("labelImage");
      return e;
    }
    return d2(c3);
  };
  return function(c3) {
    b2.enter("labelImage");
    b2.enter("labelImageMarker");
    b2.consume(c3);
    b2.exit("labelImageMarker");
    return f2;
  };
}), resolveAll: ri.resolveAll };
var vi = { name: "labelStartLink", tokenize: Pm((a, b2, c2, d2) => {
  let e = function(e2) {
    if (e2 === 94 && rb(a.parser.constructs, "_hiddenFootnoteSupport")) return d2(e2);
    return c2(e2);
  };
  return function(c3) {
    b2.enter("labelLink");
    b2.enter("labelMarker");
    b2.consume(c3);
    b2.exit("labelMarker");
    b2.exit("labelLink");
    return e;
  };
}), resolveAll: ri.resolveAll };
var xi = { name: "lineEnding", tokenize: function(b2, c2, d2) {
  return function(d3) {
    b2.enter("lineEnding");
    b2.consume(d3);
    b2.exit("lineEnding");
    return pe(b2, c2, "linePrefix", 0);
  };
} };
var zi = { name: "thematicBreak", tokenize: function(b2, c2, d2) {
  let e = 0, f2 = 0, g2, h2 = function(c3) {
    if (c3 == f2) {
      b2.consume(c3);
      e = e + 1 | 0;
      return h2;
    }
    b2.exit("thematicBreakSequence");
    if (_c(c3)) return pe(b2, g2, "whitespace", 0)(c3);
    return g2(c3);
  };
  g2 = function(g3) {
    if (g3 == f2) {
      b2.enter("thematicBreakSequence");
      return h2(g3);
    }
    if (e >= 3 && (g3 === null || Zc(g3))) {
      b2.exit("thematicBreak");
      return c2(g3);
    }
    return d2(g3);
  };
  return function(c3) {
    b2.enter("thematicBreak");
    {
      f2 = c3 | 0;
      return g2(c3);
    }
  };
} };
var Bi = { tokenize: Pm((a, b2, c2, d2) => {
  let f2 = 4 + 1 | 0;
  if (Hb(a.parser.constructs.disable.null, "codeIndented")) f2 = 0;
  return pe(b2, function(e) {
    let f3 = a.events, g2 = f3[kb(f3) - 1 | 0];
    if (!_c(e) && g2 && g2[1].type == "listItemPrefixWhitespace") return c2(e);
    return d2(e);
  }, "listItemPrefixWhitespace", f2);
}), partial: true };
var Di = { tokenize: Pm((a, b2, c2, d2) => pe(b2, function(e) {
  let f2 = a.events, g2 = f2[kb(f2) - 1 | 0];
  if (g2 && g2[1].type == "listItemIndent" && hb(g2[2].sliceSerialize.call(g2[2], g2[1], true)).length == (a.containerState.size | 0)) return c2(e);
  return d2(e);
}, "listItemIndent", +a.containerState.size + 1)), partial: true };
var Ei = { name: "list" };
var Fi = Pm((a, b2, c2, d2) => {
  let e = a.events, f2 = e[kb(e) - 1 | 0], g2 = 0;
  if (f2 && f2[1].type == "linePrefix") g2 = +hb(f2[2].sliceSerialize.call(f2[2], f2[1], true)).length;
  let h2 = 0, i2 = function(e2) {
    let f3 = b2.exit("listItemPrefix");
    a.containerState.size = g2 + +hb(a.sliceSerialize(f3, true)).length;
    return c2(e2);
  }, j2 = function(c3) {
    if (_c(c3)) {
      b2.enter("listItemPrefixWhitespace");
      b2.consume(c3);
      b2.exit("listItemPrefixWhitespace");
      return i2;
    }
    return d2(c3);
  }, k2 = function(c3) {
    a.containerState.initialBlankLine = true;
    ++g2;
    return i2(c3);
  }, l2 = function(e2) {
    b2.enter("listItemMarker");
    b2.consume(e2);
    b2.exit("listItemMarker");
    if (!a.containerState.marker) a.containerState.marker = e2;
    let f3 = k2;
    if (a.interrupt) f3 = d2;
    return b2.check(zg, f3, b2.attempt(Bi, i2, j2));
  }, m = function(e2) {
    if (Wc(e2) && (h2 + 1 | 0) < 10) {
      h2 = h2 + 1 | 0;
      b2.consume(e2);
      return m;
    }
    let f3 = !a.interrupt || h2 < 2, g3 = a.containerState.marker, i3 = false;
    i3 = g3 ? e2 == g3 : e2 === 41 || e2 === 46;
    if (f3 && i3) {
      b2.exit("listItemValue");
      return l2(e2);
    }
    return d2(e2);
  };
  return function(e2) {
    let f3 = a.containerState, g3 = "listOrdered";
    if (f3.type) g3 = hb(f3.type);
    else if (e2 === 42 || e2 === 43 || e2 === 45) g3 = "listUnordered";
    let h3 = false;
    h3 = g3 == "listUnordered" ? !f3.marker || e2 == f3.marker : Wc(e2);
    if (h3) {
      if (!f3.type) {
        f3.type = g3;
        b2.enter(g3, { _container: true });
      }
      if (g3 == "listUnordered") {
        b2.enter("listItemPrefix");
        if (e2 === 42 || e2 === 45) return b2.check(zi, d2, l2)(e2);
        return l2(e2);
      }
      if (!a.interrupt || e2 === 49) {
        b2.enter("listItemPrefix");
        b2.enter("listItemValue");
        return m(e2);
      }
    }
    return d2(e2);
  };
});
var Gi = Pm((a, b2, c2, d2) => {
  a.containerState._closeFlow = void 0;
  let e = function(f2) {
    a.containerState._closeFlow = true;
    a.interrupt = void 0;
    let g2 = 4;
    if (Hb(a.parser.constructs.disable.null, "codeIndented")) g2 = 0;
    return pe(b2, b2.attempt(Ei, c2, d2), "linePrefix", g2)(f2);
  };
  return b2.check(zg, function(e2) {
    if (!a.containerState.furtherBlankLines) a.containerState.furtherBlankLines = a.containerState.initialBlankLine;
    return pe(b2, c2, "listItemIndent", +a.containerState.size + 1)(e2);
  }, function(f2) {
    if (a.containerState.furtherBlankLines || !_c(f2)) {
      a.containerState.furtherBlankLines = void 0;
      a.containerState.initialBlankLine = void 0;
      return e(f2);
    }
    a.containerState.furtherBlankLines = void 0;
    a.containerState.initialBlankLine = void 0;
    return b2.attempt(Di, c2, e)(f2);
  });
});
var Hi = Om((a, b2) => {
  b2.exit(a.containerState.type);
});
Ei.tokenize = Fi;
Ei.continuation = { tokenize: Gi };
Ei.exit = Hi;
var Li = { name: "setextUnderline", tokenize: Pm((a, b2, c2, d2) => {
  let e = 0, f2 = function(e2) {
    if (e2 === null || Zc(e2)) {
      b2.exit("setextHeadingLine");
      return c2(e2);
    }
    return d2(e2);
  }, g2 = function(c3) {
    if (c3 == e) {
      b2.consume(c3);
      return g2;
    }
    b2.exit("setextHeadingLineSequence");
    if (_c(c3)) return pe(b2, f2, "lineSuffix", 0)(c3);
    return f2(c3);
  };
  return function(f3) {
    let h2 = kb(a.events), i2 = false;
    while (true) {
      h2 = h2 - 1 | 0;
      if (h2 < 0) break;
      let b3 = a.events[h2][1].type + "";
      if (b3 != "lineEnding" && b3 != "linePrefix" && b3 != "content") {
        i2 = b3 == "paragraph";
        break;
      }
    }
    if (!a.parser.lazy[a.now().line] && (a.interrupt || i2)) {
      b2.enter("setextHeadingLine");
      e = f3 | 0;
      {
        b2.enter("setextHeadingLineSequence");
        return g2(f3);
      }
    }
    return d2(f3);
  };
}), resolveTo: function(b2, c2) {
  let d2 = kb(b2), e = -1, f2 = -1, g2 = -1;
  while (true) {
    d2 = d2 - 1 | 0;
    if (d2 < 0) break;
    if (b2[d2][0] == "enter") {
      if (b2[d2][1].type == "content") {
        e = d2;
        break;
      }
      if (b2[d2][1].type == "paragraph") f2 = d2;
    } else {
      if (b2[d2][1].type == "content") b2.splice(d2, 1);
      if (g2 < 0 && b2[d2][1].type == "definition") g2 = d2;
    }
  }
  let h2 = { type: "setextHeading", start: Ob(b2[e][1].start), end: Ob(b2[kb(b2) - 1 | 0][1].end) };
  b2[f2][1].type = "setextHeadingText";
  if (g2 > 0) {
    b2.splice(f2, 0, ["enter", h2, c2]);
    let d3 = ["exit", b2[e][1], c2];
    b2.splice(g2 + 1 | 0, 0, d3);
    b2[e][1].end = Ob(b2[g2][1].end);
  } else b2[e][1] = h2;
  yb(b2, ["exit", h2, c2]);
  return b2;
} };
var Oi = {};
Mi(Oi, 42, Ei);
Mi(Oi, 43, Ei);
Mi(Oi, 45, Ei);
var Pi = 48;
while (Pi <= 57) {
  Mi(Oi, Pi, Ei);
  Pi = Pi + 1 | 0;
}
Mi(Oi, 62, kh);
var Qi = {};
Mi(Qi, 91, Sh);
var Ri = {};
Mi(Ri, rd, Ch);
Mi(Ri, sd, Ch);
Mi(Ri, 32, Ch);
var Si = {};
Mi(Si, 35, Xh);
Mi(Si, 42, zi);
Mi(Si, 45, Ni(Li, zi));
Mi(Si, 60, ei);
Mi(Si, 61, Li);
Mi(Si, 95, zi);
Mi(Si, 96, yh);
Mi(Si, 126, yh);
var Ti = {};
Mi(Ti, 38, uh);
Mi(Ti, 92, ph);
var Ui = {};
Mi(Ui, od, xi);
Mi(Ui, pd, xi);
Mi(Ui, qd, xi);
Mi(Ui, 33, ti);
Mi(Ui, 38, uh);
Mi(Ui, 42, gh);
Mi(Ui, 60, Ni(ih, gi));
Mi(Ui, 91, vi);
Mi(Ui, 92, Ni(Uh, ph));
Mi(Ui, 93, ri);
Mi(Ui, 95, gh);
Mi(Ui, 96, Gh);
var Vi = { null: Ni(gh, $g) };
var Wi = {};
var Xi = [];
Xi[0] = 42;
Xi[1] = 95;
Wi.null = Xi;
var Zi = {};
Zi.document = Oi;
Zi.contentInitial = Qi;
Zi.flowInitial = Ri;
Zi.flow = Si;
Zi.string = Ti;
Zi.text = Ui;
Zi.insideSpan = Vi;
Zi.attentionMarkers = Wi;
Zi.disable = { null: [] };
var fj = /\\([!-\/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
var nj;
var oj;
{
  nj = function(b2, c2, d2) {
    if (b2 && typeof b2 == "object") {
      if (rb(b2, "value")) {
        if (hb(b2.type) == "html" && !d2) return "";
        return b2.value;
      }
      if (c2 && rb(b2, "alt") && b2.alt) return b2.alt;
      if (rb(b2, "children")) return kj(b2.children, c2, d2);
    }
    if (b2 != null && Array.isArray(b2)) return kj(b2, c2, d2);
    return "";
  };
  oj = nj;
}
var Pj = /^(\r?\n|\r)|(\r?\n|\r)$/g;
var Qj = /(\r?\n|\r)$/g;
var Rj = function(b2, c2) {
  if (b2) throw new ec("Cannot close `" + Ub(b2) + "` (" + jj({ start: b2.start, end: b2.end }) + "): a different token (`" + Ub(c2) + "`, " + jj({ start: c2.start, end: c2.end }) + ") is open");
  throw new ec("Cannot close document, a token (`" + Ub(c2) + "`, " + jj({ start: c2.start, end: c2.end }) + ") is still open");
};
var Sj = function(b2) {
  return { type: "blockquote", children: [], position: void 0 };
};
var Tj = function(b2) {
  return { type: "code", lang: null, meta: null, value: "", position: void 0 };
};
var Uj = function(b2) {
  return { type: "inlineCode", value: "", position: void 0 };
};
var Vj = function(b2) {
  return { type: "definition", identifier: "", label: null, title: null, url: "", position: void 0 };
};
var Wj = function(b2) {
  return { type: "emphasis", children: [], position: void 0 };
};
var Xj = function(b2) {
  return { type: "heading", children: [], position: void 0, depth: 0 };
};
var Yj = function(b2) {
  return { type: "break", position: void 0 };
};
var Zj = function(b2) {
  return { type: "html", value: "", position: void 0 };
};
var $j = function(b2) {
  return { type: "image", title: null, url: "", alt: null, position: void 0 };
};
var _j = function(b2) {
  return { type: "link", children: [], position: void 0, title: null, url: "" };
};
var ak = function(b2) {
  return { type: "list", children: [], position: void 0, ordered: Ub(b2) == "listOrdered", start: null, spread: b2._spread };
};
var bk = function(b2) {
  return { type: "listItem", children: [], position: void 0, spread: b2._spread, checked: null };
};
var ck = function(b2) {
  return { type: "paragraph", children: [], position: void 0 };
};
var dk = function(b2) {
  return { type: "strong", children: [], position: void 0 };
};
var ek = function(b2) {
  return { type: "thematicBreak", position: void 0 };
};
var ik = Om(function(a, b2) {
  a.parser = function(d2) {
    let e = Object.assign({}, fk(a, "settings"));
    Object.assign(e, b2);
    e.extensions = fk(a, "micromarkExtensions") || [];
    e.mdastExtensions = fk(a, "fromMarkdownExtensions") || [];
    {
      let f2 = e, g2, h2;
      if (f2 && typeof f2 == "object") {
        g2 = f2;
        f2 = void 0;
      }
      {
        let a2 = g2, b3 = [];
        yb(b3, "emphasis");
        yb(b3, "fragment");
        yb(b3, "heading");
        yb(b3, "paragraph");
        yb(b3, "strong");
        let d3 = {}, e2 = {}, f3 = { transforms: [], canContainEols: b3, enter: d3, exit: e2 }, k3 = Sm((a3) => {
          yb(a3.stack, { type: "fragment", children: [] });
        }), l2 = Sm((a3) => mj(a3.stack.pop())), i2 = Pm((a3, b4, c2, d4) => {
          yb(Ej(a3).children, b4);
          yb(a3.stack, b4);
          let g3 = [];
          yb(g3, c2);
          if (d4) yb(g3, d4);
          else yb(g3);
          yb(a3.tokenStack, g3);
          b4.position = { start: qj(c2.start), end: void 0 };
        }), j3 = Qm((a3, b4, c2) => {
          let d4 = a3.stack.pop(), e3 = a3.tokenStack.pop();
          if (e3 == null) {
            {
              throw new ec("Cannot close `" + Ub(b4) + "` (" + jj({ start: b4.start, end: b4.end }) + "): it\u2019s not open");
            }
          } else if (Ub(e3[0]) != Ub(b4)) if (c2) c2.call(a3, b4, e3[0]);
          else (e3[1] || Rj).call(a3, b4, e3[0]);
          d4.position.end = qj(b4.end);
        }), o2 = Om((a3, b4) => {
          a3.data.expectingFirstListItemValue = true;
        }), p2 = Om((a3, b4) => {
          if (a3.data.expectingFirstListItemValue) {
            Fj(a3, 2).start = Number.parseInt(Dj(a3, b4), Hc);
            a3.data.expectingFirstListItemValue = void 0;
          }
        }), q2 = Om((a3, b4) => {
          let c2 = l2.call(a3);
          Ej(a3).lang = c2;
        }), r2 = Om((a3, b4) => {
          let c2 = l2.call(a3);
          Ej(a3).meta = c2;
        }), s2 = Om((a3, b4) => {
          if (a3.data.flowCodeInside) return;
          k3.call(a3);
          a3.data.flowCodeInside = true;
        }), t2 = Om((a3, b4) => {
          let c2 = hb(l2.call(a3));
          Ej(a3).value = c2.replace(Pj, "");
          a3.data.flowCodeInside = void 0;
        }), u2 = Om((a3, b4) => {
          let c2 = hb(l2.call(a3));
          Ej(a3).value = c2.replace(Qj, "");
        }), v2 = Om((a3, b4) => {
          let c2 = l2.call(a3), d4 = Ej(a3);
          d4.label = c2;
          d4.identifier = Mh(Dj(a3, b4)).toLowerCase();
        }), w2 = Om((a3, b4) => {
          let c2 = l2.call(a3);
          Ej(a3).title = c2;
        }), x = Om((a3, b4) => {
          let c2 = l2.call(a3);
          Ej(a3).url = c2;
        }), y = Om((a3, b4) => {
          let c2 = Ej(a3);
          if (!c2.depth) c2.depth = Dj(a3, b4).length;
        }), z = Om((a3, b4) => {
          a3.data.setextHeadingSlurpLineEnding = true;
        }), A = Om((a3, b4) => {
          let c2 = Dj(a3, b4), d4 = 2;
          if (c2.length > 0) {
            if ((c2.codePointAt(0) | 0) == Rd) d4 = 1;
          }
          Ej(a3).depth = d4;
        }), B2 = Om((a3, b4) => {
          a3.data.setextHeadingSlurpLineEnding = void 0;
        }), m = Om((a3, b4) => {
          let d4 = Ej(a3).children, e3;
          if (kb(d4) > 0) e3 = d4[kb(d4) - 1 | 0];
          if (e3 == null || hb(e3.type) != "text") {
            e3 = { type: "text", value: "", position: void 0 };
            e3.position = { start: qj(b4.start), end: void 0 };
            yb(d4, e3);
          }
          yb(a3.stack, e3);
        }), n2 = Om((a3, b4) => {
          let c2 = a3.stack.pop();
          c2.value = hb(c2.value) + Dj(a3, b4);
          c2.position.end = qj(b4.end);
        }), C2 = Om((a3, b4) => {
          let c2 = Ej(a3);
          if (a3.data.atHardBreak) {
            let d4 = c2.children;
            d4[kb(d4) - 1 | 0].position.end = qj(b4.end);
            a3.data.atHardBreak = void 0;
            return;
          }
          if (!a3.data.setextHeadingSlurpLineEnding && Hb(f3.canContainEols, hb(c2.type))) {
            m.call(a3, b4);
            n2.call(a3, b4);
          }
        }), D2 = Om((a3, b4) => {
          a3.data.atHardBreak = true;
        }), E2 = Om((a3, b4) => {
          let c2 = l2.call(a3);
          Ej(a3).value = c2;
        }), F = Om((a3, b4) => {
          let c2 = l2.call(a3);
          Ej(a3).value = c2;
        }), G2 = Om((a3, b4) => {
          let c2 = l2.call(a3);
          Ej(a3).value = c2;
        }), H = Om((a3, b4) => {
          Hj(a3);
        }), I = Om((a3, b4) => {
          Hj(a3);
        }), J = Om((a3, b4) => {
          let c2 = Dj(a3, b4), d4 = Fj(a3, 2);
          d4.label = ej(c2);
          d4.identifier = Mh(c2).toLowerCase();
        }), K = Om((a3, b4) => {
          let c2 = Ej(a3), d4 = l2.call(a3), e3 = Ej(a3);
          a3.data.inReference = true;
          if (hb(e3.type) == "link") e3.children = c2.children;
          else e3.alt = d4;
        }), L2 = Om((a3, b4) => {
          let c2 = l2.call(a3);
          Ej(a3).url = c2;
        }), M2 = Om((a3, b4) => {
          let c2 = l2.call(a3);
          Ej(a3).title = c2;
        }), N2 = Om((a3, b4) => {
          a3.data.inReference = void 0;
        }), O2 = Om((a3, b4) => {
          a3.data.referenceType = "collapsed";
        }), P2 = Om((a3, b4) => {
          let c2 = l2.call(a3), d4 = Ej(a3);
          d4.label = c2;
          d4.identifier = Mh(Dj(a3, b4)).toLowerCase();
          a3.data.referenceType = "full";
        }), Q2 = Om((a3, b4) => {
          a3.data.characterReferenceType = b4.type;
        }), R = Om((a3, b4) => {
          let c2 = Dj(a3, b4), d4 = a3.data.characterReferenceType, e3 = "";
          if (d4) {
            let b5 = Ic;
            if (hb(d4) == Ie) b5 = Hc;
            e3 = cj(c2, b5);
            a3.data.characterReferenceType = void 0;
          } else {
            let a4 = rh(c2);
            if (a4 === false) Xb("expected reference to decode");
            e3 = hb(a4);
          }
          let f4 = Ej(a3);
          f4.value = hb(f4.value) + e3;
        }), S2 = Om((a3, b4) => {
          a3.stack.pop().position.end = qj(b4.end);
        }), T = Om((a3, b4) => {
          n2.call(a3, b4);
          Ej(a3).url = Cj(a3, b4);
        }), U2 = Om((a3, b4) => {
          n2.call(a3, b4);
          Ej(a3).url = "mailto:" + Dj(a3, b4);
        });
        d3.autolink = Aj(i2, _j);
        d3.autolinkProtocol = m;
        d3.autolinkEmail = m;
        d3.atxHeading = Aj(i2, Xj);
        d3.blockQuote = Aj(i2, Sj);
        d3.characterEscape = m;
        d3.characterReference = m;
        d3.codeFenced = Aj(i2, Tj);
        d3.codeFencedFenceInfo = k3;
        d3.codeFencedFenceMeta = k3;
        d3.codeIndented = Aj(i2, Tj, k3);
        d3.codeText = Aj(i2, Uj, k3);
        d3.codeTextData = m;
        d3.data = m;
        d3.codeFlowValue = m;
        d3.definition = Aj(i2, Vj);
        d3.definitionDestinationString = k3;
        d3.definitionLabelString = k3;
        d3.definitionTitleString = k3;
        d3.emphasis = Aj(i2, Wj);
        d3.hardBreakEscape = Aj(i2, Yj);
        d3.hardBreakTrailing = Aj(i2, Yj);
        d3.htmlFlow = Aj(i2, Zj, k3);
        d3.htmlFlowData = m;
        d3.htmlText = Aj(i2, Zj, k3);
        d3.htmlTextData = m;
        d3.image = Aj(i2, $j);
        d3.label = k3;
        d3.link = Aj(i2, _j);
        d3.listItem = Aj(i2, bk);
        d3.listItemValue = p2;
        d3.listOrdered = Aj(i2, ak, o2);
        d3.listUnordered = Aj(i2, ak);
        d3.paragraph = Aj(i2, ck);
        d3.reference = O2;
        d3.referenceString = k3;
        d3.resourceDestinationString = k3;
        d3.resourceTitleString = k3;
        d3.setextHeading = Aj(i2, Xj);
        d3.strong = Aj(i2, dk);
        d3.thematicBreak = Aj(i2, ek);
        e2.atxHeading = Bj(j3);
        e2.atxHeadingSequence = y;
        e2.autolink = Bj(j3);
        e2.autolinkEmail = U2;
        e2.autolinkProtocol = T;
        e2.blockQuote = Bj(j3);
        e2.characterEscapeValue = n2;
        e2.characterReferenceMarkerHexadecimal = Q2;
        e2.characterReferenceMarkerNumeric = Q2;
        e2.characterReferenceValue = R;
        e2.characterReference = S2;
        e2.codeFenced = Bj(j3, t2);
        e2.codeFencedFence = s2;
        e2.codeFencedFenceInfo = q2;
        e2.codeFencedFenceMeta = r2;
        e2.codeFlowValue = n2;
        e2.codeIndented = Bj(j3, u2);
        e2.codeText = Bj(j3, G2);
        e2.codeTextData = n2;
        e2.data = n2;
        e2.definition = Bj(j3);
        e2.definitionDestinationString = x;
        e2.definitionLabelString = v2;
        e2.definitionTitleString = w2;
        e2.emphasis = Bj(j3);
        e2.hardBreakEscape = Bj(j3, D2);
        e2.hardBreakTrailing = Bj(j3, D2);
        e2.htmlFlow = Bj(j3, E2);
        e2.htmlFlowData = n2;
        e2.htmlText = Bj(j3, F);
        e2.htmlTextData = n2;
        e2.image = Bj(j3, I);
        e2.label = K;
        e2.labelText = J;
        e2.lineEnding = C2;
        e2.link = Bj(j3, H);
        e2.listItem = Bj(j3);
        e2.listOrdered = Bj(j3);
        e2.listUnordered = Bj(j3);
        e2.paragraph = Bj(j3);
        e2.referenceString = P2;
        e2.resourceDestinationString = L2;
        e2.resourceTitleString = M2;
        e2.resource = N2;
        e2.setextHeading = Bj(j3, B2);
        e2.setextHeadingLineSequence = A;
        e2.setextHeadingText = z;
        e2.strong = Bj(j3);
        e2.thematicBreak = Bj(j3);
        let W = (a2 ?? {}).mdastExtensions ?? [];
        wj(f3, W);
        let X = {};
        h2 = function(b4) {
          let c2 = { type: "root", children: [], position: void 0 }, d4 = [];
          yb(d4, c2);
          let e3 = [], g3 = { stack: d4, tokenStack: e3, config: f3, enter: i2, exit: j3, buffer: k3, resume: l2, data: X }, h3 = [], m2 = -1;
          while (true) {
            m2 = m2 + 1 | 0;
            if (m2 >= kb(b4)) break;
            if (Ij(Ub(b4[m2][1]))) if (Rb(b4[m2]) == "enter") h3.push(m2);
            else {
              {
                let c3 = h3.pop() | 0, d5 = m2, e4 = c3 - 1 | 0, f4 = -1, g4 = false, i3, j4 = 0, k4 = 0, l3 = false;
                while (true) {
                  e4 = e4 + 1 | 0;
                  if (e4 > d5) break;
                  let a3 = b4[e4], c4 = Ub(a3[1]), h4 = Rb(a3);
                  if (Jj(c4)) {
                    f4 = h4 == "enter" ? f4 + 1 | 0 : f4 - 1 | 0;
                    l3 = false;
                  } else if (c4 == ue) {
                    if (h4 == "enter") {
                      if (i3 && !l3 && f4 == 0 && k4 == 0) k4 = e4;
                      l3 = false;
                    }
                  } else if (!Kj(c4)) l3 = false;
                  let m3 = f4 == 0 && h4 == "enter" && c4 == fg, n4 = f4 == -1 && h4 == "exit" && Ij(c4);
                  if (m3 || n4) {
                    if (i3) {
                      let c5 = e4;
                      j4 = 0;
                      while (true) {
                        c5 = c5 - 1 | 0;
                        if (c5 < 0) break;
                        let a4 = b4[c5], d6 = Ub(a4[1]);
                        if (d6 == te || d6 == ue) {
                          if (Rb(a4) == "exit") continue;
                          if (j4 != 0) {
                            b4[j4][1].type = ue;
                            g4 = true;
                          }
                          a4[1].type = te;
                          j4 = c5;
                        } else if (Lj(d6)) {
                        } else break;
                      }
                      if (k4 != 0) {
                        let a4 = true;
                        if (j4 != 0) {
                          if (k4 >= j4) a4 = false;
                        }
                        if (a4) i3._spread = true;
                      }
                      let f5 = a3[1].end, h5 = e4;
                      if (j4 != 0) {
                        f5 = b4[j4][1].start;
                        h5 = j4;
                      }
                      i3.end = Object.assign({}, f5);
                      Mc(b4, h5, 0, [["exit", i3, a3[2]]]);
                      e4 = e4 + 1 | 0;
                      d5 = d5 + 1 | 0;
                    }
                    if (c4 == fg) {
                      let c5 = { type: "listItem", _spread: false, start: Object.assign({}, a3[1].start), end: void 0 };
                      i3 = c5;
                      Mc(b4, e4, 0, [["enter", c5, a3[2]]]);
                      e4 = e4 + 1 | 0;
                      d5 = d5 + 1 | 0;
                      k4 = 0;
                      l3 = true;
                    }
                  }
                }
                b4[c3][1]._spread = g4;
                m2 = d5;
              }
            }
          }
          m2 = -1;
          while (true) {
            m2 = m2 + 1 | 0;
            if (m2 >= kb(b4)) break;
            let a3 = b4[m2], c3 = f3[Rb(a3)], d5 = Ub(a3[1]);
            if (rb(c3, d5)) {
              let b5 = Object.assign({ sliceSerialize: a3[2].sliceSerialize }, g3);
              c3[d5].call(b5, a3[1]);
            }
          }
          if (kb(e3) > 0) {
            let a3 = e3[kb(e3) - 1 | 0];
            (a3[1] || Rj).call(g3, void 0, a3[0]);
          }
          let n3 = { line: 1, column: 1, offset: 0 }, o3 = { line: 1, column: 1, offset: 0 };
          if (kb(b4) > 0) {
            n3 = b4[0][1].start;
            o3 = b4[kb(b4) - 2 | 0][1].end;
          }
          c2.position = { start: qj(n3), end: qj(o3) };
          m2 = -1;
          let p3 = f3.transforms;
          while (true) {
            m2 = m2 + 1 | 0;
            if (m2 >= kb(p3)) break;
            let a3 = (0, p3[m2])(c2);
            if (a3) c2 = a3;
          }
          return c2;
        };
      }
      let j2 = _i(g2).document(), k2 = bj()(d2, f2, true);
      return h2(aj(j2.write(k2)));
    }
  };
});
var pk = Nm(function(a, b2) {
  let c2 = b2[0], d2 = b2[2], e = b2[3], f2 = d2.enter("blockquote"), g2 = d2.createTracker(e);
  g2.move("> ");
  g2.shift(2);
  let h2 = hb(d2.indentLines(d2.containerFlow(c2, g2.current()), Pm(nk)));
  f2();
  return h2;
});
var tk = /[ \t]/;
var uk = Nm(function(a, b2) {
  let c2 = b2[2], d2 = b2[3], e = -1, f2 = c2.unsafe, g2 = kb(f2);
  while (true) {
    e = e + 1 | 0;
    if (e >= g2) break;
    if (hb(f2[e].character) == "\n" && rk(c2.stack, f2[e])) {
      if (tk.test(hb(d2.before))) return "";
      return " ";
    }
  }
  return "\\\n";
});
var Dk = /[^ \r\n]/;
var Ek = /^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/;
var Ik = Nm(function(a, b2) {
  let c2 = b2[0], d2 = b2[2], e = b2[3], f2;
  {
    let b3 = (d2.options ?? {}).fence, c3 = "`";
    if (b3) c3 = hb(b3);
    if (c3 != "`" && c3 != "~") yk("Cannot serialize code with `" + c3 + "` for `options.fence`, expected `` ` `` or `~`");
    f2 = c3;
  }
  let g2 = "";
  if (c2.value) g2 = hb(c2.value);
  let h2 = "Tilde";
  if (f2 == "`") h2 = "GraveAccent";
  if (Ck(c2, d2)) {
    let a2 = d2.enter("codeIndented"), b3 = hb(d2.indentLines(g2, Pm(Gk)));
    a2();
    return b3;
  }
  let i2 = d2.createTracker(e), l2 = f2.repeat(Math.max((vk(g2, f2) + 1 | 0) * 1, 3) | 0), m = d2.enter("codeFenced"), n2 = hb(i2.move(l2));
  if (c2.lang) {
    let a2 = d2.enter("codeFencedLang" + h2), b3 = Object.assign({}, i2.current());
    b3.before = n2;
    b3.after = " ";
    let e2 = [];
    e2.push("`");
    b3.encode = e2;
    n2 = n2 + hb(i2.move(d2.safe(c2.lang, b3)));
    a2();
  }
  if (c2.lang && c2.meta) {
    let a2 = d2.enter("codeFencedMeta" + h2);
    n2 = n2 + hb(i2.move(" "));
    let b3 = Object.assign({}, i2.current());
    b3.before = n2;
    b3.after = "\n";
    let e2 = [];
    e2.push("`");
    b3.encode = e2;
    n2 = n2 + hb(i2.move(d2.safe(c2.meta, b3)));
    a2();
  }
  n2 = n2 + hb(i2.move("\n"));
  if (g2.length > 0) n2 = n2 + hb(i2.move(g2 + "\n"));
  n2 = n2 + hb(i2.move(l2));
  m();
  return n2;
});
var Lk = /[\x00- \x7F]/;
var Mk = Nm(function(a, b2) {
  let c2 = b2[0], d2 = b2[2], e = b2[3], f2 = Jk(d2), g2 = "Apostrophe";
  if (f2 == '"') g2 = "Quote";
  let h2 = d2.enter("definition"), i2 = d2.enter("label"), j2 = d2.createTracker(e), k2 = hb(j2.move("[")), l2 = Object.assign({}, j2.current());
  l2.before = k2;
  l2.after = "]";
  k2 = k2 + hb(j2.move(d2.safe(d2.associationId(c2), l2)));
  k2 = k2 + hb(j2.move("]: "));
  i2();
  let m = c2.url, n2 = !m;
  if (!n2 && typeof m == "string" && Lk.test(m)) n2 = true;
  if (n2) {
    i2 = d2.enter("destinationLiteral");
    k2 = k2 + hb(j2.move("<"));
    let a2 = Object.assign({}, j2.current());
    a2.before = k2;
    a2.after = ">";
    k2 = k2 + hb(j2.move(d2.safe(m, a2)));
    k2 = k2 + hb(j2.move(">"));
  } else {
    i2 = d2.enter("destinationRaw");
    let a2 = Object.assign({}, j2.current());
    a2.before = k2;
    a2.after = c2.title ? " " : "\n";
    k2 = k2 + hb(j2.move(d2.safe(m, a2)));
  }
  i2();
  if (c2.title) {
    i2 = d2.enter("title" + g2);
    k2 = k2 + hb(j2.move(" " + f2));
    let a2 = Object.assign({}, j2.current());
    a2.before = k2;
    a2.after = f2;
    k2 = k2 + hb(j2.move(d2.safe(c2.title, a2)));
    k2 = k2 + hb(j2.move(f2));
    i2();
  }
  h2();
  return k2;
});
var Sk = Nm(function(a, b2) {
  let c2 = b2[0], d2 = b2[2], e = b2[3], f2;
  {
    let b3 = (d2.options ?? {}).emphasis, c3 = "*";
    if (b3) c3 = hb(b3);
    if (c3 != "*" && c3 != "_") yk("Cannot serialize emphasis with `" + c3 + "` for `options.emphasis`, expected `*`, or `_`");
    f2 = c3;
  }
  let g2 = d2.enter("emphasis"), h2 = d2.createTracker(e), i2 = hb(h2.move(f2)), j2 = Object.assign({}, h2.current());
  j2.after = f2;
  j2.before = i2;
  let k2 = hb(h2.move(d2.containerPhrasing(c2, j2))), l2 = zk(k2, 0), m = hb(e.before), n2 = Pk(zk(m, m.length - 1), l2, f2);
  if (n2.inside) k2 = Ok(l2) + k2.slice(1);
  let o2 = zk(k2, k2.length - 1), q2 = Pk(zk(hb(e.after), 0), o2, f2);
  if (q2.inside) k2 = k2.slice(0, k2.length - 1) + Ok(o2);
  let r2 = hb(h2.move(f2));
  g2();
  d2.attentionEncodeSurroundingInfo = { after: q2.outside, before: n2.outside };
  return i2 + k2 + r2;
});
Sk.peek = Pm(function(a, b2, c2, d2) {
  return d2.options.emphasis || "*";
});
var Wk = /\r?\n|\r/;
var Yk = /^[\t ]/;
var Zk = Nm(function(a, b2) {
  let c2 = b2[0], d2 = b2[2], e = b2[3], f2 = 1, g2 = c2.depth;
  if (g2) f2 = +g2;
  let h2 = Math.max(Math.min(6, f2), 1) | 0, i2 = d2.createTracker(e);
  if (Vk(c2, d2)) {
    let a2 = d2.enter("headingSetext"), b3 = d2.enter("phrasing"), e2 = Object.assign({}, i2.current());
    e2.before = "\n";
    e2.after = "\n";
    let f3 = hb(d2.containerPhrasing(c2, e2));
    b3();
    a2();
    let g3 = "-";
    if (h2 == 1) g3 = "=";
    let j3 = f3.lastIndexOf("\r"), k3 = f3.lastIndexOf("\n"), l3 = (Math.max(j3 * 1, k3 * 1) | 0) + 1 | 0;
    return f3 + "\n" + g3.repeat(f3.length - l3 | 0);
  }
  let j2 = "#".repeat(h2), k2 = d2.enter("headingAtx"), l2 = d2.enter("phrasing");
  i2.move(j2 + " ");
  let m = Object.assign({}, i2.current());
  m.before = "# ";
  m.after = "\n";
  let n2 = hb(d2.containerPhrasing(c2, m));
  if (Yk.test(n2)) n2 = Ok(n2.charCodeAt(0) | 0) + n2.slice(1);
  n2 = n2.length > 0 ? j2 + " " + n2 : j2;
  if (d2.options.closeAtx) n2 = n2 + " " + j2;
  l2();
  k2();
  return n2;
});
var al = Nm(function(a, b2) {
  let c2 = b2[0];
  if (c2.value) return hb(c2.value);
  return "";
});
al.peek = Sm(function(a) {
  return "<";
});
var dl = /[\x00- \x7F]/;
var el = Nm(function(a, b2) {
  let c2 = b2[0], d2 = b2[2], e = b2[3], f2 = Jk(d2), g2 = "Apostrophe";
  if (f2 == '"') g2 = "Quote";
  let h2 = d2.enter("image"), i2 = d2.enter("label"), j2 = d2.createTracker(e), k2 = hb(j2.move("![")), l2 = Object.assign({}, j2.current());
  l2.before = k2;
  l2.after = "]";
  k2 = k2 + hb(j2.move(d2.safe(c2.alt, l2)));
  k2 = k2 + hb(j2.move("]("));
  i2();
  let m = c2.url, n2 = !m && !!c2.title;
  if (!n2 && typeof m == "string" && dl.test(m)) n2 = true;
  if (n2) {
    i2 = d2.enter("destinationLiteral");
    k2 = k2 + hb(j2.move("<"));
    let a2 = Object.assign({}, j2.current());
    a2.before = k2;
    a2.after = ">";
    k2 = k2 + hb(j2.move(d2.safe(m, a2)));
    k2 = k2 + hb(j2.move(">"));
  } else {
    i2 = d2.enter("destinationRaw");
    let a2 = Object.assign({}, j2.current());
    a2.before = k2;
    a2.after = c2.title ? " " : ")";
    k2 = k2 + hb(j2.move(d2.safe(m, a2)));
  }
  i2();
  if (c2.title) {
    i2 = d2.enter("title" + g2);
    k2 = k2 + hb(j2.move(" " + f2));
    let a2 = Object.assign({}, j2.current());
    a2.before = k2;
    a2.after = f2;
    k2 = k2 + hb(j2.move(d2.safe(c2.title, a2)));
    k2 = k2 + hb(j2.move(f2));
    i2();
  }
  k2 = k2 + hb(j2.move(")"));
  h2();
  return k2;
});
el.peek = Sm(function(a) {
  return "!";
});
var hl = Nm(function(a, b2) {
  let c2 = b2[0], d2 = b2[2], e = b2[3], f2 = hb(c2.referenceType), g2 = d2.enter("imageReference"), h2 = d2.enter("label"), i2 = d2.createTracker(e), j2 = hb(i2.move("![")), k2 = Object.assign({}, i2.current());
  k2.before = j2;
  k2.after = "]";
  let l2 = hb(d2.safe(c2.alt, k2));
  j2 = j2 + hb(i2.move(l2 + "]["));
  h2();
  let m = d2.stack;
  d2.stack = [];
  h2 = d2.enter("reference");
  let n2 = Object.assign({}, i2.current());
  n2.before = j2;
  n2.after = "]";
  let o2 = hb(d2.safe(d2.associationId(c2), n2));
  h2();
  d2.stack = m;
  g2();
  j2 = f2 == "full" || l2.length == 0 || l2 != o2 ? j2 + hb(i2.move(o2 + "]")) : f2 == "shortcut" ? j2.slice(0, j2.length - 1) : j2 + hb(i2.move("]"));
  return j2;
});
hl.peek = Sm(function(a) {
  return "!";
});
var kl = /[^ \r\n]/;
var ll = /^[ \r\n]/;
var ml = /[ \r\n]$/;
var nl = /^`|`$/;
var ol = Nm(function(a, b2) {
  let c2 = b2[0], d2 = b2[2], e = "";
  if (c2.value) e = hb(c2.value);
  let f2 = "`";
  while (true) {
    if (!new RegExp("(^|[^`])" + f2 + "([^`]|$)", "").test(e)) break;
    f2 = f2 + "`";
  }
  if (kl.test(e)) {
    if (ll.test(e) && ml.test(e) || nl.test(e)) e = " " + e + " ";
  }
  let g2 = -1, h2 = d2.unsafe, i2 = kb(h2);
  while (true) {
    g2 = g2 + 1 | 0;
    if (g2 >= i2) break;
    let a2 = h2[g2];
    if (!a2.atBreak) continue;
    let b3 = d2.compilePattern(a2), c3;
    while (true) {
      c3 = b3.exec(e);
      if (c3 == null) break;
      let a3 = c3.index | 0;
      if (a3 > 0 && (e.charCodeAt(a3) | 0) == 10 && (e.charCodeAt(a3 - 1 | 0) | 0) == 13) a3 = a3 - 1 | 0;
      let d3 = c3.index | 0;
      e = e.slice(0, a3) + " " + e.slice(d3 + 1 | 0);
    }
  }
  return f2 + e + f2;
});
ol.peek = Sm(function(a) {
  return "`";
});
var ql = /^[a-z][a-z+.-]+:/i;
var rl = /[\x00- <>\x7F]/;
var ul = /[\x00- \x7F]/;
var vl = Nm(function(a, b2) {
  let c2 = b2[0], d2 = b2[2], e = b2[3], f2 = Jk(d2), g2 = "Apostrophe";
  if (f2 == '"') g2 = "Quote";
  let h2 = d2.createTracker(e), i2;
  if (pl(c2, d2)) {
    let a2 = d2.stack;
    d2.stack = [];
    i2 = d2.enter("autolink");
    let b3 = hb(h2.move("<")), e2 = Object.assign({}, h2.current());
    e2.before = b3;
    e2.after = ">";
    b3 = b3 + hb(h2.move(d2.containerPhrasing(c2, e2)));
    b3 = b3 + hb(h2.move(">"));
    i2();
    d2.stack = a2;
    return b3;
  }
  i2 = d2.enter("link");
  let j2 = d2.enter("label"), k2 = hb(h2.move("[")), l2 = Object.assign({}, h2.current());
  l2.before = k2;
  l2.after = "](";
  k2 = k2 + hb(h2.move(d2.containerPhrasing(c2, l2)));
  k2 = k2 + hb(h2.move("]("));
  j2();
  let m = c2.url, n2 = !m && !!c2.title;
  if (!n2 && typeof m == "string" && ul.test(m)) n2 = true;
  if (n2) {
    j2 = d2.enter("destinationLiteral");
    k2 = k2 + hb(h2.move("<"));
    let a2 = Object.assign({}, h2.current());
    a2.before = k2;
    a2.after = ">";
    k2 = k2 + hb(h2.move(d2.safe(m, a2)));
    k2 = k2 + hb(h2.move(">"));
  } else {
    j2 = d2.enter("destinationRaw");
    let a2 = Object.assign({}, h2.current());
    a2.before = k2;
    a2.after = c2.title ? " " : ")";
    k2 = k2 + hb(h2.move(d2.safe(m, a2)));
  }
  j2();
  if (c2.title) {
    j2 = d2.enter("title" + g2);
    k2 = k2 + hb(h2.move(" " + f2));
    let a2 = Object.assign({}, h2.current());
    a2.before = k2;
    a2.after = f2;
    k2 = k2 + hb(h2.move(d2.safe(c2.title, a2)));
    k2 = k2 + hb(h2.move(f2));
    j2();
  }
  k2 = k2 + hb(h2.move(")"));
  i2();
  return k2;
});
vl.peek = Pm(function(a, b2, c2, d2) {
  if (pl(b2, d2)) return "<";
  return "[";
});
var yl = Nm(function(a, b2) {
  let c2 = b2[0], d2 = b2[2], e = b2[3], f2 = hb(c2.referenceType), g2 = d2.enter("linkReference"), h2 = d2.enter("label"), i2 = d2.createTracker(e), j2 = hb(i2.move("[")), k2 = Object.assign({}, i2.current());
  k2.before = j2;
  k2.after = "]";
  let l2 = hb(d2.containerPhrasing(c2, k2));
  j2 = j2 + hb(i2.move(l2 + "]["));
  h2();
  let m = d2.stack;
  d2.stack = [];
  h2 = d2.enter("reference");
  let n2 = Object.assign({}, i2.current());
  n2.before = j2;
  n2.after = "]";
  let o2 = hb(d2.safe(d2.associationId(c2), n2));
  h2();
  d2.stack = m;
  g2();
  j2 = f2 == "full" || l2.length == 0 || l2 != o2 ? j2 + hb(i2.move(o2 + "]")) : f2 == "shortcut" ? j2.slice(0, j2.length - 1) : j2 + hb(i2.move("]"));
  return j2;
});
yl.peek = Sm(function(a) {
  return "[";
});
var Gl = Nm(function(a, b2) {
  let c2 = b2[0], d2 = b2[1], e = b2[2], f2 = b2[3], g2 = e.enter("list"), h2 = e.bulletCurrent, i2 = zl(e);
  if (c2.ordered) {
    {
      let b3 = (e.options ?? {}).bulletOrdered, c3 = ".";
      if (b3) c3 = hb(b3);
      if (c3 != "." && c3 != ")") yk("Cannot serialize items with `" + c3 + "` for `options.bulletOrdered`, expected `.` or `)`");
      i2 = c3;
    }
  }
  let j2 = "";
  j2 = c2.ordered ? i2 == "." ? ")" : "." : Al(e);
  let k2 = false;
  if (d2 && e.bulletLastUsed) k2 = i2 == hb(e.bulletLastUsed);
  if (!c2.ordered) {
    let a2, b3 = c2.children;
    if (b3 && kb(b3) > 0) a2 = b3[0];
    if ((i2 == "*" || i2 == "-") && a2) {
      let b4 = a2.children;
      if ((!b4 || kb(b4) == 0 || !b4[0]) && ((a3, b5) => {
        let c3 = kb(a3), d3 = kb(b5);
        if (c3 < 4) return false;
        if (d3 < 3) return false;
        let e2 = c3 - 1 | 0, f3 = c3 - 2 | 0, g3 = c3 - 3 | 0, h3 = c3 - 4 | 0;
        if (hb(a3[e2]) != "list") return false;
        if (hb(a3[f3]) != "listItem") return false;
        if (hb(a3[g3]) != "list") return false;
        if (hb(a3[h3]) != "listItem") return false;
        let i3 = d3 - 1 | 0, j3 = d3 - 2 | 0, k3 = d3 - 3 | 0;
        if (!Dl(b5[i3])) return false;
        if (!Dl(b5[j3])) return false;
        if (!Dl(b5[k3])) return false;
        return true;
      })(e.stack, e.indexStack)) k2 = true;
    }
    if (Cl(e) == i2 && a2) {
      let a3 = -1, b4 = kb(c2.children);
      while (true) {
        a3 = a3 + 1 | 0;
        if (a3 >= b4) break;
        let d3 = c2.children[a3];
        if (d3 && hb(d3.type) == "listItem") {
          let a4 = d3.children;
          if (a4 && kb(a4) > 0 && a4[0] && hb(a4[0].type) == "thematicBreak") {
            k2 = true;
            break;
          }
        }
      }
    }
  }
  if (k2) i2 = j2;
  e.bulletCurrent = i2;
  let l2 = hb(e.containerFlow(c2, f2));
  e.bulletLastUsed = i2;
  e.bulletCurrent = h2;
  g2();
  return l2;
});
var Jl = Nm(function(a, b2) {
  let c2 = b2[0], d2 = b2[1], e = b2[2], f2 = b2[3], g2;
  {
    let b3 = (e.options ?? {}).listItemIndent, c3 = "one";
    if (b3) c3 = hb(b3);
    if (c3 != "tab" && c3 != "one" && c3 != "mixed") yk("Cannot serialize items with `" + c3 + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
    g2 = c3;
  }
  let h2 = zl(e), i2 = e.bulletCurrent;
  if (i2) h2 = hb(i2);
  if (d2 && hb(d2.type) == "list" && d2.ordered) {
    let a2 = 1, b3 = d2.start;
    if (typeof b3 == "number" && +b3 > -1) a2 = b3 | 0;
    let f3 = 0;
    if (e.options.incrementListMarker !== false) f3 = d2.children.indexOf.call(d2.children, c2) | 0;
    h2 = (a2 + f3 | 0).toString() + h2;
  }
  let j2 = h2.length + 1, k2 = g2 == "tab";
  if (!k2 && g2 == "mixed") {
    if (d2 && hb(d2.type) == "list" && d2.spread || c2.spread) k2 = true;
  }
  if (k2) j2 = (Math.ceil(j2 * 1 / 4) | 0) * 4 | 0;
  let l2 = e.createTracker(f2);
  l2.move(h2 + " ".repeat(j2 - h2.length | 0));
  l2.shift(j2);
  let m = e.enter("listItem"), o2 = hb(e.indentLines(e.containerFlow(c2, l2.current()), function(b3, c3, d3) {
    let e2 = hb(b3);
    if (+c3 != 0) {
      if (d3) return e2;
      return " ".repeat(j2) + e2;
    }
    if (d3) return h2 + e2;
    return h2 + " ".repeat(j2 - h2.length | 0) + e2;
  }));
  m();
  return o2;
});
var Ll = Nm(function(a, b2) {
  let c2 = b2[0], d2 = b2[2], e = b2[3], f2 = d2.enter("paragraph"), g2 = d2.enter("phrasing"), h2 = hb(d2.containerPhrasing(c2, e));
  g2();
  f2();
  return h2;
});
var Ol = Nm(function(a, b2) {
  let c2 = b2[0], d2 = b2[2], e = b2[3], f2 = c2.children, g2 = false, h2 = 0, i2 = kb(f2);
  while (h2 < i2) {
    if (Ml(f2[h2])) {
      g2 = true;
      break;
    }
    h2 = h2 + 1 | 0;
  }
  if (g2) return d2.containerPhrasing(c2, e);
  return d2.containerFlow(c2, e);
});
var Sl = Nm(function(a, b2) {
  let c2 = b2[0], d2 = b2[2], e = b2[3], f2;
  {
    let b3 = (d2.options ?? {}).strong, c3 = "*";
    if (b3) c3 = hb(b3);
    if (c3 != "*" && c3 != "_") yk("Cannot serialize strong with `" + c3 + "` for `options.strong`, expected `*`, or `_`");
    f2 = c3;
  }
  let g2 = d2.enter("strong"), h2 = d2.createTracker(e), i2 = hb(h2.move(f2 + f2)), j2 = Object.assign({}, h2.current());
  j2.after = f2;
  j2.before = i2;
  let k2 = hb(h2.move(d2.containerPhrasing(c2, j2))), l2 = zk(k2, 0), m = hb(e.before), n2 = Pk(zk(m, m.length - 1), l2, f2);
  if (n2.inside) k2 = Ok(l2) + k2.slice(1);
  let o2 = zk(k2, k2.length - 1), q2 = Pk(zk(hb(e.after), 0), o2, f2);
  if (q2.inside) k2 = k2.slice(0, k2.length - 1) + Ok(o2);
  let r2 = hb(h2.move(f2 + f2));
  g2();
  d2.attentionEncodeSurroundingInfo = { after: q2.outside, before: n2.outside };
  return i2 + k2 + r2;
});
Sl.peek = Pm(function(a, b2, c2, d2) {
  return d2.options.strong || "*";
});
var Ul = Nm(function(a, b2) {
  let c2 = b2[0], d2 = b2[2], e = b2[3];
  return d2.safe(c2.value, e);
});
var Xl = Nm(function(a, b2) {
  let c2 = b2[2], d2 = Cl(c2), e = d2;
  if (c2.options.ruleSpaces) e = d2 + " ";
  let f2 = e.repeat(Vl(c2));
  if (c2.options.ruleSpaces) return f2.slice(0, f2.length - 1);
  return f2;
});
var Yl = {};
Yl.blockquote = pk;
Yl.break = uk;
Yl.code = Ik;
Yl.definition = Mk;
Yl.emphasis = Sk;
Yl.hardBreak = uk;
Yl.heading = Zk;
Yl.html = al;
Yl.image = el;
Yl.imageReference = hl;
Yl.inlineCode = ol;
Yl.link = vl;
Yl.linkReference = yl;
Yl.list = Gl;
Yl.listItem = Jl;
Yl.paragraph = Ll;
Yl.root = Ol;
Yl.strong = Sl;
Yl.text = Ul;
Yl.thematicBreak = Xl;
var $l = [];
$l.push(Nm(function(a, b2) {
  let c2 = b2[0], d2 = b2[1], e = b2[2], f2 = b2[3], g2 = hb(d2.type), h2 = hb(c2.type);
  if (g2 == "code" && Ck(d2, f2)) {
    if (h2 == "list" || h2 == g2 && Ck(c2, f2)) return false;
  }
  if ("spread" in e && typeof e.spread == "boolean") {
    if (h2 == "paragraph") {
      if (h2 == g2 || g2 == "definition" || g2 == "heading" && Vk(d2, f2)) return;
    }
    if (e.spread) return 1;
    return 0;
  }
}));
var _l = [];
yb(_l, "autolink");
yb(_l, "destinationLiteral");
yb(_l, "destinationRaw");
yb(_l, "reference");
yb(_l, "titleQuote");
yb(_l, "titleApostrophe");
var am = [];
yb(am, "codeFencedLangGraveAccent");
yb(am, "codeFencedLangTilde");
var bm = [];
yb(bm, "codeFencedLangGraveAccent");
yb(bm, "codeFencedLangTilde");
yb(bm, "codeFencedMetaGraveAccent");
yb(bm, "codeFencedMetaTilde");
yb(bm, "destinationLiteral");
yb(bm, "headingAtx");
var cm = [];
yb(cm, "label");
yb(cm, "reference");
var dm = [];
yb(dm, "codeFencedLangGraveAccent");
yb(dm, "codeFencedMetaGraveAccent");
var em = [];
yb(em, { character: "	", after: "[\\r\\n]", inConstruct: "phrasing" });
yb(em, { character: "	", before: "[\\r\\n]", inConstruct: "phrasing" });
yb(em, { character: "	", inConstruct: am });
yb(em, { character: "\r", inConstruct: bm });
yb(em, { character: "\n", inConstruct: bm });
yb(em, { character: " ", after: "[\\r\\n]", inConstruct: "phrasing" });
yb(em, { character: " ", before: "[\\r\\n]", inConstruct: "phrasing" });
yb(em, { character: " ", inConstruct: am });
yb(em, { character: "!", after: "\\[", inConstruct: "phrasing", notInConstruct: _l });
yb(em, { character: '"', inConstruct: "titleQuote" });
yb(em, { atBreak: true, character: "#" });
yb(em, { character: "#", inConstruct: "headingAtx", after: "(?:[\r\n]|$)" });
yb(em, { character: "&", after: "[#A-Za-z]", inConstruct: "phrasing" });
yb(em, { character: "'", inConstruct: "titleApostrophe" });
yb(em, { character: "(", inConstruct: "destinationRaw" });
yb(em, { before: "\\]", character: "(", inConstruct: "phrasing", notInConstruct: _l });
yb(em, { atBreak: true, before: "\\d+", character: ")" });
yb(em, { character: ")", inConstruct: "destinationRaw" });
yb(em, { atBreak: true, character: "*", after: "(?:[ 	\r\n*])" });
yb(em, { character: "*", inConstruct: "phrasing", notInConstruct: _l });
yb(em, { atBreak: true, character: "+", after: "(?:[ 	\r\n])" });
yb(em, { atBreak: true, character: "-", after: "(?:[ 	\r\n-])" });
yb(em, { atBreak: true, before: "\\d+", character: ".", after: "(?:[ 	\r\n]|$)" });
yb(em, { atBreak: true, character: "<", after: "[!/?A-Za-z]" });
yb(em, { character: "<", after: "[!/?A-Za-z]", inConstruct: "phrasing", notInConstruct: _l });
yb(em, { character: "<", inConstruct: "destinationLiteral" });
yb(em, { atBreak: true, character: "=" });
yb(em, { atBreak: true, character: ">" });
yb(em, { character: ">", inConstruct: "destinationLiteral" });
yb(em, { atBreak: true, character: "[" });
yb(em, { character: "[", inConstruct: "phrasing", notInConstruct: _l });
yb(em, { character: "[", inConstruct: cm });
yb(em, { character: "\\", after: "[\\r\\n]", inConstruct: "phrasing" });
yb(em, { character: "]", inConstruct: cm });
yb(em, { atBreak: true, character: "_" });
yb(em, { character: "_", inConstruct: "phrasing", notInConstruct: _l });
yb(em, { atBreak: true, character: "`" });
yb(em, { character: "`", inConstruct: dm });
yb(em, { character: "`", inConstruct: "phrasing", notInConstruct: _l });
yb(em, { atBreak: true, character: "~" });
var hm = /[|\\{}()[\]^$+*?.-]/;
var jm = /(\r?\n|\r)$/;
var om = /\r?\n|\r/g;
var rm = /[!-\/:-@[-`{-~]/;
var sm = function(b2, c2) {
  return +b2 - +c2;
};
var um = /\r?\n|\r/g;
var Em = Om(function(a, b2) {
  a.compiler = function(d2, e) {
    let f2 = Object.assign({}, Bm(a, "settings"));
    Object.assign(f2, b2);
    f2.extensions = Bm(a, "toMarkdownExtensions") || [];
    return ym(d2, f2);
  };
});
var Fm = Ya();
Fm = Fm.use(ik);
Fm = Fm.use(Em);
Fm = Fm.freeze();
var Im = Fm;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  remark
});
