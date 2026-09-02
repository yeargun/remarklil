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
  remark: () => Se
});
module.exports = __toCommonJS(remark_esm_exports);
var ce = "Cannot serialize items with `";
var de = "";
var ee = " ";
var fe = "\n";
var ge = "/";
var he = "`";
var ie = "Expected usable value, not `";
var je = "*";
var ke = ".";
var le = ")";
var me = "-";
var ne = "]";
function nd(b) {
  return b == null ? false : "object" != typeof b && "function" != typeof b ? false : !!Error.prototype.isPrototypeOf(b);
}
function od(b) {
  return "string" == typeof b ? true : Lb(b);
}
function Lb(b) {
  return !b ? false : "object" != typeof b ? false : "byteLength" in b && "byteOffset" in b;
}
function Ma(b) {
  throw new Error(b);
}
function ga(b) {
  throw new TypeError(b);
}
function Mb(b) {
  if (b) throw b;
}
function Nb(b) {
  if (!b) throw new Error("we either bailed on an error or have a tree");
}
function Na(b) {
  if ("object" != typeof b || b == null) return false;
  var a = Object.getPrototypeOf(b), e = a == null || a === Object.prototype;
  e = e || Object.getPrototypeOf(a) == null;
  return !e ? false : Symbol.toStringTag in b ? false : Symbol.iterator in b ? false : true;
}
var za = /* @__PURE__ */ (function() {
  function a(b2) {
    if (!b2) return false;
    if ("[object Object]" != pc.call(b2) + "") return false;
    var e = !!na.call(b2, "constructor"), a2 = b2.constructor, d = a2 && a2.prototype && na.call(a2.prototype, "isPrototypeOf");
    if (a2 && !e && !d) return false;
    d = de, e = false;
    for (a2 in b2) d = a2, e = true;
    return !e ? true : !!na.call(b2, d);
  }
  function b(b2, a2, e) {
    if ("__proto__" == a2) {
      Object.defineProperty(b2, "__proto__", { enumerable: true, configurable: true, writable: true, value: e });
      return;
    }
    b2[a2] = e;
  }
  function c(b2, a2) {
    return "__proto__" == a2 ? !na.call(b2, a2) ? void 0 : Object.getOwnPropertyDescriptor(b2, a2).value : b2[a2];
  }
  return function(e, d) {
    (e == null || "object" != typeof e && "function" != typeof e) && (e = {});
    if (d == null) return e;
    for (var l2 in d) {
      var j2 = c(e, l2), u2 = c(d, l2);
      e === u2 || (u2 && (a(u2) || Array.isArray(u2)) ? (Array.isArray(u2) ? j2 && Array.isArray(j2) || (j2 = []) : j2 && a(j2) || (j2 = {}), b(e, l2, za(j2, u2))) : "undefined" != typeof u2 && b(e, l2, u2));
    }
    return e;
  };
})();
function pd(b, a) {
  var d = false;
  let e = function() {
    if (!d) d = true, a.apply(void 0, arguments);
  }, u2 = function(b2) {
    let a2 = [];
    Array.prototype.push.call(a2, Ga), Array.prototype.push.call(a2, b2), e.apply(void 0, a2);
  };
  return function() {
    var c = ia.call(arguments), j2 = b.length > c.length;
    j2 && Array.prototype.push.call(c, e);
    var a2;
    try {
      a2 = b.apply(this, c);
    } catch (b2) {
      if (j2 && d) throw b2;
      var g2 = [];
      Array.prototype.push.call(g2, b2), e.apply(void 0, g2);
      return;
    }
    if (!j2) {
      var l2;
      a2 && a2.then && "function" == typeof a2.then ? a2.then(u2, e) : nd(a2) ? (l2 = [], Array.prototype.push.call(l2, a2), e.apply(void 0, l2)) : u2(a2);
    }
  };
}
function Ob(b) {
  return b != null && "object" == typeof b && "href" in b && b.href && "protocol" in b && b.protocol && b.auth === void 0;
}
function qd() {
  var b = globalThis.process;
  return b && "function" == typeof b.cwd ? b.cwd() + "" : ge;
}
function Pb(b, a) {
  var d, u2, j2, c, e = b.length;
  if (0 == a.length || a.length > b.length) {
    for (a = -1, d = false; ; ) {
      if (e <= 0) {
        e = 0;
        break;
      }
      e--;
      if (b.charAt(e) == ge) {
        if (d) {
          e++;
          break;
        }
      } else a < 0 && (a = e + 1, d = true);
    }
    return a < 0 ? de : b.slice(e, a);
  }
  if (a == b) return de;
  for (d = -1, j2 = false, c = -1, u2 = a.length - 1; ; ) {
    if (e <= 0) {
      a = 0;
      break;
    }
    e--;
    if (b.charAt(e) == ge) {
      if (j2) {
        a = e + 1;
        break;
      }
    } else c < 0 && (j2 = true, c = e + 1), u2 > -1 && (b.charAt(e) == a.charAt(u2) ? (u2 = u2 - 1 | 0, u2 < 0 && (d = e)) : (d = c, u2 = -1));
  }
  a == d ? d = c : d < 0 && (d = b.length);
  return b.slice(a, d);
}
function rd(b) {
  if (0 == b.length) return ke;
  for (var a = b.length, e = false; ; ) {
    if (a <= 1) {
      a = -1;
      break;
    }
    a--;
    if (b.charAt(a) == ge) {
      if (e) break;
    } else e = e || true;
  }
  return a < 0 ? b.charAt(0) == ge ? ge : ke : 1 == a && b.charAt(0) == ge ? "//" : b.slice(0, a);
}
function sd(b) {
  for (var j2, e = b.length, d = -1, a = -1, u2 = 0, c = false; ; ) {
    if (e <= 0) {
      c = 0;
      break;
    }
    e--;
    j2 = b.charAt(e);
    if (j2 == ge) {
      if (c) {
        c = e + 1;
        break;
      }
    } else d < 0 && (d = e + 1, c = true), j2 == ke ? a < 0 ? a = e : 1 != u2 && (u2 = 1) : a > -1 && (u2 = -1);
  }
  return a < 0 || d < 0 || 0 == u2 || 1 == u2 && a == (d - 1 | 0) && a == (c + 1 | 0) ? de : b.slice(a, d);
}
var Aa = /* @__PURE__ */ (function() {
  function a(b2, a2) {
    for (var l2, e = de, c2 = 0, u2 = -1, j2 = 0, d = 0; d <= b2.length; ) {
      l2 = d < b2.length ? b2.charAt(d) : ge;
      if (l2 == ge) {
        if (!(u2 == d - 1 || 1 == j2)) if (u2 != d - 1 && 2 == j2) {
          if (e.length < 2 || 2 != c2 || e.charAt(e.length - 1) != ke || e.charAt(e.length - 2) != ke) {
            if (e.length > 2) {
              u2 = e.lastIndexOf(ge);
              if (u2 != e.length - 1) {
                u2 < 0 ? (e = de, c2 = 0) : (e = e.slice(0, u2), c2 = e.length - 1 - e.lastIndexOf(ge) | 0), u2 = d, j2 = 0, d++;
                continue;
              }
            } else if (e.length > 0) {
              e = de, c2 = 0, u2 = d, j2 = 0, d++;
              continue;
            }
          }
          a2 && (e = e.length > 0 ? e + "/.." : "..", c2 = 2);
        } else {
          c2 = b2.slice(u2 + 1 | 0, d), e = e.length > 0 ? e + ge + c2 : c2, c2 = (d - u2 | 0) - 1 | 0;
        }
        u2 = d;
        j2 = 0;
      } else {
        j2 = l2 == ke && j2 > -1 ? j2 + 1 | 0 : -1;
      }
      d++;
    }
    return e;
  }
  function b(b2) {
    var d = b2.charAt(0) == ge, e = a(b2, !d);
    0 == e.length && !d && (e = ke), e.length > 0 && b2.charAt(b2.length - 1) == ge && (e = e + ge);
    return d ? ge + e : e;
  }
  function c(b2) {
    if ("string" != typeof b2) throw new TypeError("Path must be a string. Received " + JSON.stringify(b2));
  }
  return function(a2, e) {
    c(a2), c(e);
    var d = a2 + "";
    a2 = e + "", d.length > 0 || (d = de), a2.length > 0 ? d.length > 0 && (a2 = d + ge + a2) : a2 = d;
    return 0 == a2.length ? ke : b(a2);
  };
})();
function Oa(b, a) {
  if (b && b.includes(ge)) throw new Error(he + a + "` cannot be a path: did not expect `/`");
}
function Pa(b, a) {
  if (!b) throw new Error(he + a + "` cannot be empty");
}
function ha(b) {
  var a = b.history;
  return 0 == a.length ? void 0 : a[a.length - 1];
}
function qa(b, a) {
  if (Ob(a)) {
    if ("file:" != a.protocol + "") {
      b = new TypeError("The URL must be of scheme file"), b.code = "ERR_INVALID_URL_SCHEME";
      throw b;
    }
    if ((a.hostname + "").length > 0) {
      b = new TypeError('File URL host must be "localhost" or empty on darwin'), b.code = "ERR_INVALID_FILE_URL_HOST";
      throw b;
    }
    var e = a.pathname + "";
    for (a = 0; a < e.length; a++) if ("%" == e.charAt(a) && "2" == e.charAt(a + 1) && ("F" == e.charAt(a + 2) || "f" == e.charAt(a + 2))) {
      b = new TypeError("File URL path must not include encoded / characters"), b.code = "ERR_INVALID_FILE_URL_PATH";
      throw b;
    }
    a = globalThis.decodeURIComponent(e);
  }
  Pa(a, "path");
  ha(b) === a || Array.prototype.push.call(b.history, a);
}
var Qb = /* @__PURE__ */ (function() {
  function a(b2) {
    return b2 && "start" in b2 ? b2.start : b2;
  }
  function b(b2) {
    if (!b2) return "1:1";
    var a2 = b2.line, e = b2.column;
    b2 = "number" == typeof a2 && a2 ? a2 + "" : "1", a2 = "number" == typeof e && e ? e + "" : "1";
    return b2 + ":" + a2;
  }
  function c(a2) {
    return !a2 ? "1:1" : "start" in a2 || "end" in a2 ? b(a2.start) + me + b(a2.end) : b(a2);
  }
  return function(b2, e, d) {
    "string" == typeof e && (d = e, e = void 0);
    var u2 = {};
    if (e) if ("line" in e && "column" in e) u2.place = e;
    else if ("start" in e && "end" in e) u2.place = e;
    else if ("type" in e) u2.ancestors = [e], u2.place = e.position;
    else for (var l2, g2 = Object.keys(e), j2 = 0; j2 < g2.length; j2++) l2 = g2[j2] + "", u2[l2] = e[l2];
    "string" == typeof b2 ? (e = b2 + "", l2 = false) : !u2.cause && b2 ? (e = b2.message, u2.cause = b2, l2 = true) : (e = de, l2 = false);
    !u2.ruleId && !u2.source && "string" == typeof d && (b2 = d + "", d = b2.indexOf(":"), d < 0 ? u2.ruleId = b2 : (u2.source = b2.slice(0, d), u2.ruleId = b2.slice(d + 1 | 0))), j2 = u2.ancestors, !u2.place && j2 && j2.length > 0 && (b2 = j2[j2.length - 1], u2.place = b2.position), d = u2.place, g2 = a(d), b2 = new Error(), b2.ancestors = void 0, j2 && (b2.ancestors = j2), b2.cause = void 0, !u2.cause || (b2.cause = u2.cause), b2.column = void 0, g2 && (b2.column = g2.column), b2.fatal = void 0, b2.file = de, b2.message = e, b2.line = void 0, g2 && (b2.line = g2.line), b2.name = c(d), b2.place = void 0, d && (b2.place = d), b2.reason = e, b2.ruleId = void 0, !u2.ruleId || (b2.ruleId = u2.ruleId), b2.source = void 0, !u2.source || (b2.source = u2.source), b2.actual = void 0, b2.expected = void 0, b2.note = void 0, b2.url = void 0, b2.stack = l2 && "string" == typeof u2.cause.stack ? u2.cause.stack : de;
    return b2;
  };
})();
function ba(b, a) {
  Object.defineProperty(va, b, a);
}
function ra(b) {
  let a = Object.getOwnPropertyDescriptor(va, b), e = a.get, d = a.set;
  Object.defineProperty(e, "name", { configurable: true, value: "get " + b }), Object.defineProperty(d, "name", { configurable: true, value: "set " + b });
}
function td(b) {
  return !b || "object" != typeof b ? false : "message" in b && "messages" in b;
}
function Ba(b) {
  return td(b) ? b : new oa(b);
}
function Qa(b, a) {
  "function" == typeof a || ga("Cannot `" + b + "` without `parser`");
}
function Ra(b, a) {
  "function" == typeof a || ga("Cannot `" + b + "` without `compiler`");
}
function Sa(b, a) {
  !a || Ma("Cannot call `" + b + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function Rb(b) {
  (!Na(b) || "string" != typeof b.type) && ga("Expected node, got `" + b + he);
}
function Sb(b, a, e) {
  e || Ma(he + b + "` finished async. Use `" + a + "` instead");
}
function Ta(b) {
  var a = b.parser;
  a = a || b.Parser;
  return a;
}
function Ua(b) {
  var a = b.compiler;
  a = a || b.Compiler;
  return a;
}
function Va(b, a, e) {
  for (var c, j2, u2 = b.length, d = -1; ; ) {
    if (false) {
      d = -1;
      break;
    }
    d++;
    if (d >= u2) {
      d = -1;
      break;
    }
    if (b[d][0] === a) break;
  }
  if (d == -1) {
    for (d = [], Array.prototype.push.call(d, a), u2 = e.length, a = 0; a < u2; a++) Array.prototype.push.call(d, e[a]);
    Array.prototype.push.call(b, d);
    return;
  }
  if (e.length > 0) {
    for (u2 = e[0], j2 = ia.call(e, 1), c = b[d][1], Na(c) && Na(u2) && (u2 = za(c, u2)), e = [], Array.prototype.push.call(e, a), Array.prototype.push.call(e, u2), u2 = j2.length, a = 0; a < u2; a++) Array.prototype.push.call(e, j2[a]);
    Array.prototype.splice.call(b, d, 1, e);
  }
}
function Tb(b, a, e) {
  if (e != null) {
    Array.isArray(e) || ga("Expected a list of plugins, not `" + e + he);
    for (var u2 = e.length, d = -1; ++d < u2; ) ud(b, a, e[d]);
  }
}
function Ub(b, a, e) {
  !("plugins" in e) && !("settings" in e) && Ma("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"), Tb(b, a, e.plugins);
  if (b = e.settings) {
    var d = za(a.settings, b);
    a.settings = d;
  }
}
function ud(b, a, e) {
  if ("function" == typeof e) {
    Va(b, e, []);
    return;
  }
  if ("object" == typeof e) {
    if (Array.isArray(e)) {
      a = e[0], Va(b, a, ia.call(e, 1));
      return;
    }
    Ub(b, a, e);
    return;
  }
  ga(ie + e + he);
}
function Vb(b) {
  for (var a = fb(), d = b.attachers, u2 = d.length, e = -1; ++e < u2; ) a.use.apply(a, d[e]);
  e = a.data, a.data(za({}, b.namespace));
  return a;
}
var vd = /* @__PURE__ */ (function() {
  function a(b2, a2, e) {
    Object.defineProperty(b2, "name", { configurable: true, value: a2 }), Object.defineProperty(b2, "length", { configurable: true, value: e });
  }
  function b(b2, a2) {
    Object.defineProperty(qb, b2, { configurable: true, writable: true, value: a2 });
  }
  return function() {
    a(hb, "copy", 0), a(ob, "data", 2), a(pb, "freeze", 0), a(ib, "parse", 1), a(mb, "process", 2), a(nb, "processSync", 1), a(jb, "run", 3), a(kb, "runSync", 2), a(lb, "stringify", 2), a(gb, "use", 1), b("copy", hb), b("data", ob), b("freeze", pb), b("parse", ib), b("process", mb), b("processSync", nb), b("run", jb), b("runSync", kb), b("stringify", lb), b("use", gb), Object.defineProperty(ja, "prototype", { writable: false });
  };
})();
function wd() {
  var b = (0, function() {
    return Vb(b);
  });
  Object.setPrototypeOf(b, qb), b.Compiler = void 0, b.Parser = void 0, b.attachers = [], b.compiler = void 0, b.freezeIndex = -1, b.frozen = void 0, b.namespace = {}, b.parser = void 0;
  var a = { fns: [], run: qc, use: rc };
  b.transformers = a;
  return b;
}
function A(b) {
  return b === null;
}
function O(b) {
  return b == null;
}
function y(b) {
  return "string" == typeof b ? b : b === void 0 ? "undefined" : b == null ? "null" : String(b) + "";
}
function z(b) {
  return O(b) ? 0 : b.length;
}
function Ca(b, a) {
  return "string" == typeof a ? b[a] : A(a) ? b.null : b[a + ""];
}
function Wb(b, a, e) {
  if ("string" == typeof a) {
    b[a] = e;
    return;
  }
  if (A(a)) {
    b.null = e;
    return;
  }
  b[a + ""] = e;
}
function I(b, a) {
  return O(b) ? false : !!Object.prototype.hasOwnProperty.call(b, a);
}
function D(b, a) {
  return Object.assign(b, a);
}
function P(b, a) {
  return O(b) ? false : !!b.includes(a);
}
function la(b) {
  return y(String.fromCharCode(b));
}
function J(b) {
  return { _bufferIndex: b._bufferIndex, _index: b._index, line: b.line, column: b.column, offset: b.offset };
}
function X(b) {
  return y(b.type);
}
function xd(b, a) {
  if ("string" == typeof b) return b;
  O(a) && (a = void 0), a = new TextDecoder(a);
  return y(a.decode(b));
}
function Xb(b) {
  throw new Error(b);
}
function R(b) {
  return { tokenize: b };
}
function U(b, a) {
  return { name: b, tokenize: a };
}
function V(b, a, e, d) {
  var u2 = b.length;
  a = +a, e = +e, a < 0 ? u2 = 0 - a > u2 ? 0 : u2 + a : a > u2 || (u2 = a), e < 0 && (e = 0);
  var c = z(d);
  if (c < 1e4) a = Array.from(d), a.unshift(u2, e), e = b.splice, e.apply(b, a);
  else {
    e > 0 && b.splice(u2, e), a = 0;
    while (a < c) e = a + 1e4 | 0, a = d.slice(a, e), a.unshift(u2, 0), b.splice.apply(b, a), u2 += 1e4, a = e;
  }
}
function W(b, a) {
  return z(b) > 0 ? (V(b, b.length, 0, a), b) : a;
}
function G(b, a) {
  return null !== a && +a > -1 && b.test(la(a));
}
function Wa(b) {
  return null !== b && (+b < 32 || 127 === b);
}
function B(b) {
  return null !== b && +b < -2;
}
function S(b) {
  return null !== b && (+b < 0 || 32 === b);
}
function E(b) {
  return b === -2 || b === -1 || 32 === b;
}
function Xa(b, a, e) {
  for (var u2, d, c = [], l2 = z(b), j2 = -1; ++j2 < l2; ) u2 = b[j2], d = u2.resolveAll, "function" == typeof d && !P(c, d) && (a = d(a, e), c.push(d));
  return a;
}
function Yb(b) {
  return "number" == typeof b ? b | 0 : b | 0;
}
function Zb(b, a) {
  var j2 = a.start, l2 = a.end, e = j2._index | 0, d = j2._bufferIndex | 0, u2 = l2._index | 0, c = l2._bufferIndex | 0;
  e == u2 ? a = [b[e].slice(d, c)] : (a = b.slice(e, u2), d > -1 && (e = a[0], "string" == typeof e ? a[0] = e.slice(d) : a.shift()), c > 0 && (e = b[u2].slice(0, c), a.push(e)));
  return a;
}
function yd(b, a) {
  for (var e, d, u2 = [], l2 = z(b), c = -1, j2 = false; ++c < l2; ) {
    e = b[c];
    if ("string" == typeof e) d = y(e);
    else if (e === -5) d = "\r";
    else if (e === -4) d = fe;
    else if (e === -3) d = "\r\n";
    else if (e === -2) d = a ? ee : "	";
    else if (e === -1) {
      if (!a && j2) continue;
      d = ee;
    } else {
      d = la(e);
    }
    j2 = e === -2;
    u2.push(d);
  }
  return u2.join(de);
}
function Ya(b) {
  return { _bufferIndex: b[0], _index: b[1], line: b[2], column: b[3], offset: b[4] };
}
function zd(b, a, e) {
  if (e) {
    var u2 = e.line;
    u2 = u2 ? +u2 : 1;
    var c = e.column;
    c = c ? +c : 1;
    var j2 = e.offset;
    e = j2 ? +j2 : 0;
  } else {
    u2 = 1, c = 1, e = 0;
  }
  var d = [-1, 0, u2, c, e], i2 = {};
  u2 = [];
  var l2 = [], r2 = [];
  e = {};
  var f2, g2;
  c = function() {
    var b2 = d[2] + "";
    if (b2 in Object(i2) && d[3] < 2) {
      d[3] = +Ca(i2, b2);
      var a2 = d[4];
      d[4] = a2 + +Ca(i2, b2) - 1;
    }
  };
  var h2 = function(b2, a2) {
    b2.resolveAll && !P(u2, b2) && u2.push(b2);
    if (b2.resolve) {
      var d2 = e.events, j3 = b2.resolve, c2 = b2.resolve(d2.slice(a2), e);
      j3 = z(d2), V(d2, a2, j3 - a2 | 0, c2);
    }
    b2.resolveTo && (c2 = b2.resolveTo(e.events, e), e.events = c2);
  };
  j2 = function(b2, a2) {
    return function(u3, j3, l3) {
      var w2, y3, p2, i3, g3 = [], h3 = 0, m2 = 0, q2 = function(a3) {
        b2(w2, y3, m2);
        return j3;
      }, t2 = function(b3) {
        y3(), h3++;
        return h3 < g3.length ? p2(g3[h3]) : l3;
      };
      p2 = function(b3) {
        return function(u4) {
          var j4 = d, g4 = [j4[0], j4[1], j4[2], j4[3], j4[4]], i4 = e.previous, h4 = e.currentConstruct;
          m2 = z(e.events);
          var l4 = r2;
          l4 = Array.from(l4), y3 = function() {
            d = g4, e.previous = i4, e.currentConstruct = h4, e.events.length = m2, r2 = l4, c();
          }, w2 = b3, b3.partial || (e.currentConstruct = b3);
          if (b3.name && (j4 = e.parser.constructs.disable.null, j4.includes(b3.name))) return t2(u4);
          var p3 = a2 ? D(Object.create(e), a2) : e;
          return b3.tokenize.call(p3, f2, q2, t2)(u4);
        };
      }, i3 = function(b3) {
        g3 = b3, h3 = 0;
        return 0 == g3.length ? l3 : p2(g3[0]);
      };
      return Array.isArray(u3) ? i3(u3) : "tokenize" in Object(u3) ? i3([u3]) : function(b3) {
        var a3, e2 = void 0;
        A(b3) || (a3 = Ca(u3, b3), e2 = u3.null);
        var d2 = [];
        Array.isArray(a3) ? d2 = a3 : !a3 || (d2 = [a3]), a3 = [], Array.isArray(e2) ? a3 = e2 : !e2 || (a3 = [e2]);
        return i3([...d2, ...a3])(b3);
      };
    };
  };
  var y2 = function(b2, a2, e2) {
    a2();
  }, s2 = j2(function(b2, a2, e2) {
    h2(b2, e2);
  }, void 0), E2 = j2(y2, void 0);
  f2 = { attempt: s2, check: E2, consume: function(b2) {
    if (B(b2)) {
      var a2 = d[2];
      d[2] = a2 + 1, d[3] = 1, d[4] = d[4] + (b2 === -3 ? 2 : 1), c();
    } else {
      b2 === -1 || (d[3] = d[3] + 1, d[4] = d[4] + 1);
    }
    if (d[0] < 0) d[1] = d[1] + 1;
    else {
      d[0] = d[0] + 1, a2 = l2[d[1]].length, d[0] == a2 && (d[0] = -1, d[1] = d[1] + 1);
    }
    e.previous = b2;
  }, enter: function(b2, a2) {
    a2 = a2 || {}, a2.type = b2, a2.start = Ya(d), e.events.push(["enter", a2, e]), r2.push(a2);
    return a2;
  }, exit: function(b2) {
    let a2 = r2.pop();
    a2.end = Ya(d);
    let u3 = e.events, c2 = ["exit", a2, e];
    u3.push(c2);
    return a2;
  }, interrupt: j2(y2, { interrupt: true }) }, j2 = null, e.code = j2, e.containerState = {}, e.defineSkip = function(b2) {
    Wb(i2, b2.line, b2.column), c();
  }, e.events = [], e.now = function() {
    return Ya(d);
  }, e.parser = b, e.previous = j2, e.sliceSerialize = function(b2, a2) {
    return yd(Zb(l2, b2), a2);
  }, e.sliceStream = function(b2) {
    return Zb(l2, b2);
  }, e.write = function(b2) {
    for (l2 = W(l2, b2); ; ) {
      var c2 = d[1];
      if (c2 >= z(l2)) break;
      c2 = l2[d[1]];
      if ("string" == typeof c2) {
        var i3 = d[1];
        d[0] < 0 && (d[0] = 0);
        for (; ; ) {
          b2 = d[1] == i3 && d[0] < c2.length;
          if (!b2) break;
          g2 = g2(c2.charCodeAt(d[0]));
        }
      } else g2 = g2(c2);
    }
    var j3 = l2;
    if (!A(j3[z(l2) - 1])) return [];
    h2(a, 0), j3 = Xa(u2, e.events, e), e.events = j3;
    return e.events;
  }, g2 = a.tokenize.call(e, f2), !a.resolveAll || u2.push(a);
  return e;
}
function H(b, a, e, d) {
  var c = 1 / 0;
  0 != d && (c = d - 1);
  var u2 = 0, j2 = function(d2) {
    if (E(d2) && u2 < c) return u2 = u2 + 1, b.consume(d2), j2;
    b.exit(e);
    return a(d2);
  };
  return function(d2) {
    return E(d2) ? (b.enter(e), j2(d2)) : a(d2);
  };
}
function sa(b, a, e, d) {
  for (var u2 = e.length; u2 > d; ) {
    u2--;
    var c = e[u2];
    b.containerState = c.state, c.construct.exit.call(b, a);
  }
  for (; e.length > d; ) e.pop();
}
function Za(b, a) {
  var e = a[3];
  if (e) {
    var d = [null];
    e.write(d);
  }
  a[4] = void 0;
  a[3] = void 0, b.containerState._closeFlow = void 0;
}
function _b(b, a, e, d) {
  var j2 = a[3], u2 = b.sliceStream(e);
  d && u2.push(null), e.previous = a[4], !a[4] || (a[4].next = e), a[4] = e, j2.defineSkip(e.start), j2.write(u2), d = b.parser.lazy;
  if (d[e.start.line]) {
    e = z(j2.events);
    for (var c = a[5]; --e >= 0; ) {
      d = j2.events[e][1];
      if (+d.start.offset < c && (!d.end || +d.end.offset > c)) return;
    }
    for (j2 = z(b.events), d = void 0, e = j2, c = false; --e >= 0; ) {
      u2 = b.events[e];
      if ("exit" == u2[0]) var g2 = u2[1], l2 = "chunkFlow" == g2.type;
      else {
        l2 = false;
      }
      if (l2) {
        if (c) {
          c = u2[1], d = c.end;
          break;
        }
        c = true;
      }
    }
    sa(b, a[2], a[0], a[1]);
    for (a = j2; a < z(b.events); a++) u2 = b.events[a], c = u2[1], c.end = J(d);
    u2 = b.events, d = e + 1 | 0, e = b.events, V(u2, d, 0, e.slice(j2)), b.events.length = a;
  }
}
function ta(b, a) {
  var d = z(a);
  if (d < 1e4) {
    var e = Array.from(a);
    a = b.push, a.apply(b, e);
  } else {
    e = 0;
    while (e < d) {
      var u2 = e + 1e4 | 0, c = a.slice(e, u2);
      e = b.push, e.apply(b, c), e = u2;
    }
  }
}
function ca(b, a) {
  var d = b.left, u2 = b.right, e = d.length, c = u2.length;
  if (!(a == e || a > e && 0 == c || a < 0 && 0 == e)) a < e ? (b = fa.POSITIVE_INFINITY, b = d.splice(a, b), b.reverse(), ta(u2, b)) : (b = e + c - a, a = fa.POSITIVE_INFINITY, b = u2.splice(b, a), b.reverse(), ta(d, b));
}
function Ad(b, a) {
  var c = b.get(a), d = c[1], j2 = c[2], u2 = a - 1 | 0, h2 = [];
  a = d._tokenizer, a || (c = j2.parser, a = c[y(d.contentType)](d.start), !d._contentTypeTextTrailing || (a._contentTypeTextTrailing = true));
  var l2 = a.events, r2 = [], p2 = {};
  c = [], c.push(0);
  for (var g2, f2, m2, i2 = void 0, e = d; e; ) {
    for (; true; ) {
      u2++;
      if (b.get(u2)[1] == e) break;
    }
    h2.push(u2);
    e._tokenizer || (g2 = j2.sliceStream(e), e.next || g2.push(null), !i2 || a.defineSkip(e.start), !e._isInFirstContentOfListItem || (a._gfmTasklistFirstContentOfListItem = true), a.write(g2), !e._isInFirstContentOfListItem || (a._gfmTasklistFirstContentOfListItem = void 0)), g2 = e.next, i2 = e, e = g2;
  }
  for (g2 = z(l2), j2 = -1; true; ) {
    e = j2 + 1 | 0;
    if (e >= g2) break;
    "exit" == l2[e][0] && "enter" == l2[e - 1][0] ? (i2 = l2[e], f2 = i2[1], u2 = f2.type, u2 = u2 == l2[e - 1][1].type) : u2 = false;
    u2 ? (i2 = l2[e], f2 = i2[1], u2 = f2.start.line, m2 = l2[e][1], u2 = u2 != m2.end.line) : u2 = false, u2 && (c.push(j2 + 2 | 0), d._tokenizer = void 0, d.previous = void 0, d = d.next), j2 = e;
  }
  a.events = [];
  d ? (d._tokenizer = void 0, d.previous = void 0) : c.pop(), a = z(c);
  for (; --a >= 0; ) d = void 0, (a + 1 | 0) < z(c) && (d = c[a + 1]), e = c[a], u2 = l2.slice(e, d), e = +h2.pop() | 0, d = [e], j2 = (e + z(u2) | 0) - 1 | 0, d.push(j2), r2.push(d), b.splice(e, 2, u2);
  r2.reverse();
  for (u2 = z(r2), b = -1, a = 0; ++b < u2; ) d = r2[b], e = +d[0] | 0, c = +d[1] | 0, c = a + c | 0, p2[(a + e | 0) + ""] = c, a = (c - e | 0) - 1 | 0;
  return p2;
}
function $b(b) {
  for (var d, a, i2, e, h2, p2, g2, m2, j2, l2, r2, f2 = {}, c = new rb(b), u2 = -1, w2 = false; ++u2 < c.length; ) {
    for (; u2 + "" in Object(f2); ) u2 = +f2[u2 + ""] | 0;
    var t2 = c.get;
    l2 = c.get(u2);
    if (u2 > 0 && "chunkFlow" == l2[1].type && "listItemPrefix" == c.get(u2 - 1 | 0)[1].type) {
      d = l2[1], a = d._tokenizer.events, 0 < z(a) ? (d = a[0][1], e = "lineEndingBlank" == d.type) : e = false, d = e ? 2 : 0, d < z(a) ? (i2 = a[d][1], e = "content" == i2.type) : e = false;
      if (e) while (true) {
        e = d + 1 | 0;
        if (e >= z(a)) break;
        h2 = a[e][1];
        if ("content" == h2.type) break;
        p2 = a[e][1], "chunkText" == p2.type && (g2 = a[e][1], g2._isInFirstContentOfListItem = true, e = d + 2 | 0), d = e;
      }
    }
    if ("enter" == l2[0]) a = l2[1], !a.contentType || (D(f2, Ad(c, u2)), u2 = +f2[u2 + ""] | 0, w2 = true);
    else {
      a = l2[1];
      if (a._container) {
        for (g2 = u2, a = 0; --g2 >= 0; ) {
          r2 = c.get(g2), m2 = r2[1], j2 = y(m2.type);
          if ("lineEnding" == j2 || "lineEndingBlank" == j2) "enter" == r2[0] && (a > 0 && (j2 = c.get(a)[1], j2.type = "lineEndingBlank"), j2 = r2[1], j2.type = "lineEnding", a = g2);
          else if (!("linePrefix" == j2 || "listItemIndent" == j2)) break;
        }
        a > 0 && (e = l2[1], i2 = c.get(a)[1], e.end = J(i2.start), d = c.slice(a, u2), d.unshift(l2), e = (u2 - a | 0) + 1 | 0, c.splice(a, e, d));
      }
    }
  }
  V(b, 0, 1 / 0, c.slice(0, void 0));
  return !w2;
}
function Bd(b, a) {
  for (var c, d, u2, e, i2, g2, j2, r2, l2 = z(b), f2 = 0; true; ) {
    c = f2 + 1 | 0;
    if (c > l2) break;
    d = c == l2, !d ? (u2 = b[c][1], e = "lineEnding" == u2.type) : e = false, e = e;
    if ((d || e) && "data" == b[c - 1][1].type) {
      for (u2 = b[c - 1][1], r2 = a.sliceStream(u2), i2 = z(r2), e = -1, d = 0, j2 = false; --i2 >= 0; ) {
        g2 = r2[i2];
        if ("string" == typeof g2) {
          g2 += "", e = g2.length;
          for (; e > 0 && 32 == g2.charCodeAt(e - 1); d++) e--;
          if (e > 0) break;
          e = -1;
        } else if (g2 === -2) d++, j2 = true;
        else if (g2 !== -1) {
          i2++;
          break;
        }
      }
      a._contentTypeTextTrailing && c == l2 && (d = 0);
      if (d > 0) {
        j2 = c == l2 || j2 || d < 2, g2 = !j2 ? "hardBreakTrailing" : "lineSuffix", j2 = {}, j2._bufferIndex = 0 != i2 ? e : (+u2.start._bufferIndex | 0) + e | 0, j2._index = (+u2.start._index | 0) + i2 | 0, j2.line = u2.end.line, j2.column = (+u2.end.column | 0) - d | 0, j2.offset = (+u2.end.offset | 0) - d | 0, d = { type: g2, start: j2, end: J(u2.end) }, u2.end = J(d.start), e = u2.start.offset;
        if (e == u2.end.offset) D(u2, d);
        else {
          e = [], e[0] = "enter", e[1] = d, e[2] = a, l2 = [], l2[0] = "exit", l2[1] = d, l2[2] = a, b.splice(c, 0, e, l2);
          var h2 = f2 + 3 | 0;
          l2 = z(b), c = h2;
        }
      }
      c++;
    }
    f2 = c;
  }
  return b;
}
function Da(b) {
  return A(b) || S(b) || G(wc, b) ? 1 : G(vc, b) ? 2 : void 0;
}
function _a(b) {
  return I(tb, b) ? tb[b] : false;
}
function Cd(b, a) {
  return 0 == b ? G(_, a) : 1 == b ? G(tc, a) : G(Ia, a);
}
function ac(b, a, e, d, u2, c, j2, l2, g2) {
  var y2 = 1 / 0;
  0 != g2 && (y2 = g2);
  var r2, h2, i2, f2 = 0;
  g2 = function(a2) {
    return 60 === a2 || 62 === a2 || 92 === a2 ? (b.consume(a2), r2) : r2(a2);
  }, r2 = function(a2) {
    if (62 === a2) return b.exit("chunkString"), b.exit(l2), h2(a2);
    if (A(a2) || 60 === a2 || B(a2)) return e(a2);
    b.consume(a2);
    return 92 === a2 ? g2 : r2;
  }, h2 = function(e2) {
    if (62 === e2) return b.enter(c), b.consume(e2), b.exit(c), b.exit(u2), b.exit(d), a;
    b.enter(l2);
    var g3 = b.enter, j3 = { contentType: "string" };
    b.enter("chunkString", j3);
    return r2(e2);
  };
  var p2 = function(a2) {
    return 40 === a2 || 41 === a2 || 92 === a2 ? (b.consume(a2), i2) : i2(a2);
  };
  i2 = function(u3) {
    if (0 == f2 && (A(u3) || 41 === u3 || S(u3))) return b.exit("chunkString"), b.exit(l2), b.exit(j2), b.exit(d), a(u3);
    if (f2 < y2 && 40 === u3) return b.consume(u3), f2++, i2;
    if (41 === u3) return b.consume(u3), f2--, i2;
    if (A(u3) || 32 === u3 || 40 === u3 || Wa(u3)) return e(u3);
    b.consume(u3);
    return 92 === u3 ? p2 : i2;
  };
  return function(a2) {
    if (60 === a2) return b.enter(d), b.enter(u2), b.enter(c), b.consume(a2), b.exit(c), h2;
    if (A(a2) || 32 === a2 || 41 === a2 || Wa(a2)) return e(a2);
    b.enter(d), b.enter(j2), b.enter(l2);
    var r3 = b.enter, g3 = { contentType: "string" };
    b.enter("chunkString", g3);
    return i2(a2);
  };
}
function bc(b, a, e, d, u2, c) {
  var l2, g2, i2, j2 = 0;
  let r2 = function(a2) {
    return a2 == j2 || 92 === a2 ? (b.consume(a2), l2) : l2(a2);
  };
  l2 = function(a2) {
    if (a2 == j2 || A(a2) || B(a2)) return b.exit("chunkString"), g2(a2);
    b.consume(a2);
    return 92 === a2 ? r2 : l2;
  }, g2 = function(a2) {
    if (a2 == j2) return b.exit(c), i2(j2);
    if (A(a2)) return e(a2);
    if (B(a2)) return b.enter("lineEnding"), b.consume(a2), b.exit("lineEnding"), H(b, g2, "linePrefix", 0);
    var d2 = { contentType: "string" };
    b.enter("chunkString", d2);
    return l2(a2);
  }, i2 = function(e2) {
    if (e2 == j2) return b.enter(u2), b.consume(e2), b.exit(u2), b.exit(d), a;
    b.enter(c);
    return g2(e2);
  };
  return function(a2) {
    return 34 === a2 || 39 === a2 || 40 === a2 ? (b.enter(d), b.enter(u2), b.consume(a2), b.exit(u2), j2 = 40 === a2 ? 41 : a2 | 0, i2) : e(a2);
  };
}
function ua(b, a) {
  var d = false, e = function(u2) {
    return B(u2) ? (b.enter("lineEnding"), b.consume(u2), b.exit("lineEnding"), d = true, e) : E(u2) ? H(b, e, d ? "linePrefix" : "lineSuffix", 0)(u2) : a(u2);
  };
  return e;
}
function ma(b) {
  return b.replace(Dc, ee).replace(Ec, de).toLowerCase().toUpperCase();
}
function F(b, a, e) {
  b[a + ""] = e;
}
var Dd;
var ab;
(function() {
  function a(b2) {
    return O(b2) ? {} : b2;
  }
  function b(b2, a2) {
    for (var e in a2) if (!!I(a2, e)) {
      var d = void 0;
      I(b2, e) && (d = b2[e]), O(d) && (d = {}, b2[e] = d);
      var c = a2[e];
      if (c) {
        for (e in c) if (!!I(c, e)) {
          I(d, e) || (d[e] = []);
          var u2 = c[e], r2 = [];
          if (Array.isArray(u2)) var l2, g2, j2, i2 = u2;
          else {
            !u2 || r2.push(u2), i2 = r2;
          }
          for (l2 = d[e], g2 = [], u2 = z(i2), e = -1; ++e < u2; ) j2 = i2[e], "after" == j2.add ? l2.push(j2) : g2.push(j2);
          V(l2, 0, 0, g2);
        }
      }
    }
  }
  Dd = function(e) {
    var d = a(e);
    e = [];
    var u2 = $;
    e.push(u2);
    if (u2 = d.extensions) {
      var c = z(u2);
      for (d = 0; d < c; d++) {
        var j2 = u2[d];
        e.push(j2);
      }
    }
    for (u2 = {}, c = z(e), d = -1; ++d < c; ) b(u2, e[d]);
    e = { constructs: u2, defined: [], lazy: {} }, d = xc, e.content = function(b2) {
      return zd(e, d, b2);
    }, u2 = yc, e.document = function(b2) {
      return zd(e, u2, b2);
    }, c = Ac, e.flow = function(b2) {
      return zd(e, c, b2);
    }, j2 = Bc, e.string = function(b2) {
      return zd(e, j2, b2);
    }, e.text = function(b2) {
      return zd(e, Cc, b2);
    };
    return e;
  };
  ab = function(b2, e) {
    var u2 = a(e);
    e = u2.includeImageAlt;
    var d = u2.includeHtml;
    "boolean" == typeof e || (e = true);
    "boolean" == typeof d || (d = true);
    return y(Jc(b2, e, d));
  };
})();
function Ed() {
  var b = 1, e = de, d = true, a = false;
  return function(u2, c, j2) {
    var g2 = [], i2 = e;
    i2 += xd(u2, c), e = de, d ? (u2 = i2.length > 0 && 65279 == i2.charCodeAt(0) ? 1 : 0, d = false) : u2 = 0;
    var f2 = i2.length;
    while (u2 < f2) {
      for (c = u2; ; c++) {
        if (c >= f2) {
          var r2, h2, l2 = -1;
          break;
        }
        l2 = i2.charCodeAt(c);
        if (0 == l2 || 9 == l2 || 10 == l2 || 13 == l2) break;
      }
      if (l2 < 0) {
        e = i2.slice(u2);
        break;
      }
      if (10 == l2 && u2 == c && a) g2.push(-3), a = false;
      else {
        a && (g2.push(-5), a = false), u2 < c && (r2 = i2.slice(u2, c), g2.push(r2), b = b + (c - u2 | 0));
        if (0 == l2) g2.push(65533), b++;
        else if (9 == l2) {
          for (l2 = wa.ceil, u2 = wa, r2 = b, l2 = +l2.call(u2, r2 / 4) * 4, g2.push(-2); b < l2; b++) g2.push(-1);
          b++;
        } else 10 == l2 ? (g2.push(-4), b = 1) : (a = true, b = 1);
      }
      u2 = c + 1 | 0;
    }
    j2 && (a && g2.push(-5), e.length > 0 && (h2 = e, g2.push(h2)), g2.push(null));
    return g2;
  };
}
function $a(b, a) {
  b = +Number.parseInt(b, a) | 0;
  return b < 9 || 11 == b || b > 13 && b < 32 || b > 126 && b < 160 || b > 55295 && b < 57344 || b > 64975 && b < 65008 || 65535 == (b & 65535) || 65534 == (b & 65535) || b > 1114111 ? "\uFFFD" : y(String.fromCodePoint(b));
}
var cc;
var Ea;
(function() {
  function a(b2) {
    return !!b2 && "number" == typeof b2 ? y(b2) : "1";
  }
  function b(b2) {
    if (O(b2)) return b2 = a(void 0) + ":", b2 + a(void 0);
    var e = a(b2.line) + ":";
    return e + a(b2.column);
  }
  cc = function(a2) {
    if (O(a2)) return a2 = b(void 0) + me, a2 + b(void 0);
    var e = b(a2.start) + me;
    return e + b(a2.end);
  };
  Ea = function(a2) {
    return !a2 || "object" != typeof a2 ? de : I(a2, "position") || I(a2, "type") ? cc(a2.position) : I(a2, "start") || I(a2, "end") ? cc(a2) : I(a2, "line") || I(a2, "column") ? b(a2) : de;
  };
})();
function dc(b, a, e) {
  for (var c = z(b), u2 = de, d = 0; d < c; d++) u2 += y(La(b[d], a, e));
  return u2;
}
function da(b) {
  let a = b.line, e = b.column;
  return { line: a, column: e, offset: b.offset };
}
function Fd(b) {
  let a = "Cannot close `" + X(b) + "` (", e = b.start;
  throw new ka(a + Ea({ start: e, end: b.end }) + "): it\u2019s not open");
}
function Gd(b, a) {
  for (var e in a) if (!!I(a, e)) if ("canContainEols" == e) {
    var d = a[e];
    if (d) {
      var u2 = b[e], c = z(d);
      for (e = 0; e < c; e++) {
        var j2 = d[e];
        u2.push(j2);
      }
    }
  } else if ("transforms" == e) {
    if (d = a[e]) for (u2 = b[e], c = z(d), e = 0; e < c; e++) j2 = d[e], u2.push(j2);
  } else ("enter" == e || "exit" == e) && (d = a[e], !d || D(b[e], d));
}
function ec(b, a) {
  for (var e, u2 = z(a), d = -1; ++d < u2; ) e = a[d], Array.isArray(e) ? ec(b, e) : Gd(b, e);
}
function M(b, a, e) {
  return function(d) {
    b.call(this, a(d), d), !e || e.call(this, d);
  };
}
function N(b, a) {
  return function(e) {
    !a || a.call(this, e), b.call(this, e);
  };
}
function K(b) {
  let a = b.stack;
  return a[z(a) - 1];
}
function fc(b) {
  var a = K(b);
  if (b.data.inReference) {
    var e = b.data.referenceType;
    e = e || "shortcut";
    var d = y(a.type) + "Reference";
    a.type = d, a.referenceType = e, delete a.url, delete a.title;
  } else {
    delete a.identifier, delete a.label;
  }
  b.data.referenceType = void 0;
}
function bb(b) {
  return "listOrdered" == b || "listUnordered" == b;
}
function Hd(b) {
  return bb(b) || "blockQuote" == b;
}
function Id(b) {
  return "linePrefix" == b || "listItemValue" == b || "listItemMarker" == b ? true : "listItemPrefix" == b || "listItemPrefixWhitespace" == b;
}
function Jd(b) {
  return "linePrefix" == b || "blockQuotePrefix" == b || "blockQuotePrefixWhitespace" == b ? true : "blockQuoteMarker" == b || "listItemIndent" == b;
}
function Kd(b, a, e) {
  for (var u2, j2, l2, g2, d, p2, i2, t2, w2 = a - 1 | 0, r2 = -1, m2 = false, c = void 0, f2 = 0, h2 = false; true; ) {
    u2 = w2 + 1 | 0;
    if (u2 > e) break;
    j2 = b[u2], l2 = X(j2[1]), d = y(j2[0]), Hd(l2) ? (r2 = "enter" == d ? r2 + 1 | 0 : r2 - 1 | 0, h2 = false) : "lineEndingBlank" == l2 ? "enter" == d && (c && !h2 && 0 == r2 && 0 == f2 && (f2 = u2), h2 = false) : Id(l2) || (h2 = false);
    if (0 == r2 && "enter" == d && "listItemPrefix" == l2 || r2 == -1 && "exit" == d && bb(l2)) {
      if (c) {
        for (d = 0, g2 = u2; --g2 >= 0; ) {
          p2 = b[g2], i2 = X(p2[1]);
          if ("lineEnding" == i2 || "lineEndingBlank" == i2) {
            if ("exit" == y(p2[0])) continue;
            d && (m2 = b[d][1], m2.type = "lineEndingBlank", m2 = true), i2 = p2[1], i2.type = "lineEnding", d = g2;
          } else if (!Jd(i2)) break;
        }
        0 != f2 && (0 != d ? f2 < d : true) && (c._spread = true);
        g2 = j2[1].end, 0 != d && (u2 = b[d][1], g2 = u2.start, u2 = d), c.end = D({}, g2), V(b, u2, 0, [["exit", c, j2[2]]]), e++, u2 = w2 + 2 | 0;
      }
      "listItemPrefix" == l2 && (c = { type: "listItem", _spread: false, start: D({}, j2[1].start), end: void 0 }, V(b, u2, 0, [["enter", c, j2[2]]]), e++, u2++, f2 = 0, h2 = true);
    }
    w2 = u2;
  }
  c = b[a][1];
  c._spread = m2;
  return e;
}
function Ld(b) {
  var l2, g2, h2 = ["emphasis", "fragment", "heading", "paragraph", "strong"], e = {}, a = {}, i2 = { transforms: [], canContainEols: h2, enter: e, exit: a }, c = (0, function() {
    let b2 = this.stack;
    b2.push({ type: "fragment", children: [] });
  }), j2 = (0, function() {
    let b2 = this.stack;
    return ab(b2.pop(), void 0);
  }), d = (0, function(b2, a2, e2) {
    var d2 = K(this).children;
    d2.push(b2), d2 = this.stack, d2.push(b2);
    var u3 = [a2];
    e2 ? u3.push(e2) : u3.push(void 0), e2 = this.tokenStack, e2.push(u3), b2.position = { start: da(a2.start), end: void 0 };
  }), u2 = (0, function(b2, a2) {
    var d2 = this.stack, u3 = d2.pop(), c2 = this.tokenStack, e2 = c2.pop();
    O(e2) ? Fd(b2) : X(e2[0]) != X(b2) && (a2 ? a2.call(this, b2, e2[0]) : (a2 = e2[1], a2 = a2 || Db, a2.call(this, b2, e2[0]))), u3.position.end = da(b2.end);
  });
  var p2 = (0, function(b2) {
    this.data.expectingFirstListItemValue = true;
  }), k2 = (0, function(b2) {
    let a2 = y(j2.call(this));
    b2 = K(this), b2.value = a2.replace(Kc, de), this.data.flowCodeInside = void 0;
  }), o2 = (0, function(b2) {
    let a2 = y(j2.call(this)), e2 = K(this);
    e2.value = a2.replace(Lc, de);
  }), B2 = (0, function(b2) {
    this.data.setextHeadingSlurpLineEnding = void 0;
  });
  l2 = (0, function(b2) {
    var e2 = K(this).children, a2 = void 0;
    z(e2) > 0 && (a2 = e2[z(e2) - 1]), (O(a2) || "text" != y(a2.type)) && (a2 = { type: "text", value: de, position: void 0 }, a2.position = { start: da(b2.start), end: void 0 }, e2.push(a2)), b2 = this.stack, b2.push(a2);
  }), g2 = (0, function(b2) {
    let d2 = this.stack, a2 = d2.pop(), e2 = y(a2.value);
    a2.value = e2 + y(this.sliceSerialize(b2)), e2 = a2.position, e2.end = da(b2.end);
  });
  var r2 = (0, function(b2) {
    this.data.atHardBreak = true;
  }), H2 = (0, function(b2) {
    let a2 = j2.call(this);
    K(this).value = a2;
  }), G2 = (0, function(b2) {
    let a2 = j2.call(this);
    K(this).value = a2;
  }), J2 = (0, function(b2) {
    let a2 = j2.call(this);
    K(this).value = a2;
  }), C2 = (0, function(b2) {
    fc(this);
  }), S2 = (0, function(b2) {
    fc(this);
  }), f2 = (0, function(b2) {
    let a2 = this.data;
    a2.characterReferenceType = b2.type;
  });
  e.autolink = M(d, Ib, void 0), e.autolinkProtocol = l2, e.autolinkEmail = l2, e.atxHeading = M(d, Fb, void 0), e.blockQuote = M(d, Mc, void 0), e.characterEscape = l2, e.characterReference = l2, e.codeFenced = M(d, Eb, void 0), e.codeFencedFenceInfo = c, e.codeFencedFenceMeta = c, e.codeIndented = M(d, Eb, c), e.codeText = M(d, Nc, c), e.codeTextData = l2, e.data = l2, e.codeFlowValue = l2, e.definition = M(d, Oc, void 0), e.definitionDestinationString = c, e.definitionLabelString = c, e.definitionTitleString = c, e.emphasis = M(d, Pc, void 0), e.hardBreakEscape = M(d, Gb, void 0), e.hardBreakTrailing = M(d, Gb, void 0), e.htmlFlow = M(d, Hb, c), e.htmlFlowData = l2, e.htmlText = M(d, Hb, c), e.htmlTextData = l2, e.image = M(d, Qc, void 0), e.label = c, e.link = M(d, Ib, void 0), e.listItem = M(d, Rc, void 0), e.listItemValue = function(b2) {
    if (this.data.expectingFirstListItemValue) {
      var a2 = this.stack, e2 = a2[z(a2) - 2];
      b2 = y(this.sliceSerialize(b2)), e2.start = +Number.parseInt(b2, 10), this.data.expectingFirstListItemValue = void 0;
    }
  }, e.listOrdered = M(d, Jb, p2), e.listUnordered = M(d, Jb, void 0), e.paragraph = M(d, Sc, void 0), e.reference = function(b2) {
    this.data.referenceType = "collapsed";
  }, e.referenceString = c, e.resourceDestinationString = c, e.resourceTitleString = c, e.setextHeading = M(d, Fb, void 0), e.strong = M(d, Tc, void 0), e.thematicBreak = M(d, Uc, void 0), a.atxHeading = N(u2, void 0), a.atxHeadingSequence = function(b2) {
    var a2 = K(this);
    a2.depth || (a2.depth = y(this.sliceSerialize(b2)).length);
  }, a.autolink = N(u2, void 0), a.autolinkEmail = function(b2) {
    g2.call(this, b2);
    let a2 = K(this);
    a2.url = "mailto:" + y(this.sliceSerialize(b2));
  }, a.autolinkProtocol = function(b2) {
    g2.call(this, b2);
    let a2 = K(this);
    a2.url = this.sliceSerialize(b2);
  }, a.blockQuote = N(u2, void 0), a.characterEscapeValue = g2, a.characterReferenceMarkerHexadecimal = f2, a.characterReferenceMarkerNumeric = f2, a.characterReferenceValue = function(b2) {
    b2 = y(this.sliceSerialize(b2));
    var a2 = this.data.characterReferenceType;
    a2 ? (a2 = "characterReferenceMarkerNumeric" == y(a2) ? 10 : 16, b2 = $a(b2, a2), this.data.characterReferenceType = void 0) : (b2 = _a(b2), false === b2 && Xb("expected reference to decode"), b2 = y(b2));
    var e2 = K(this), d2 = y(e2.value) + b2;
    e2.value = d2;
  }, a.characterReference = function(b2) {
    let a2 = this.stack, e2 = a2.pop().position;
    e2.end = da(b2.end);
  }, a.codeFenced = N(u2, k2), a.codeFencedFence = function(b2) {
    if (!this.data.flowCodeInside) c.call(this), this.data.flowCodeInside = true;
  }, a.codeFencedFenceInfo = function(b2) {
    let a2 = j2.call(this);
    K(this).lang = a2;
  }, a.codeFencedFenceMeta = function(b2) {
    let a2 = j2.call(this);
    K(this).meta = a2;
  }, a.codeFlowValue = g2, a.codeIndented = N(u2, o2), a.codeText = N(u2, J2), a.codeTextData = g2, a.data = g2, a.definition = N(u2, void 0), a.definitionDestinationString = function(b2) {
    let a2 = j2.call(this);
    K(this).url = a2;
  }, a.definitionLabelString = function(b2) {
    let e2 = j2.call(this), a2 = K(this);
    a2.label = e2, a2.identifier = ma(y(this.sliceSerialize(b2))).toLowerCase();
  }, a.definitionTitleString = function(b2) {
    let a2 = j2.call(this);
    K(this).title = a2;
  }, a.emphasis = N(u2, void 0), a.hardBreakEscape = N(u2, r2), a.hardBreakTrailing = N(u2, r2), a.htmlFlow = N(u2, H2), a.htmlFlowData = g2, a.htmlText = N(u2, G2), a.htmlTextData = g2, a.image = N(u2, S2), a.label = function(b2) {
    b2 = K(this);
    var e2 = j2.call(this), a2 = K(this);
    this.data.inReference = true, "link" == y(a2.type) ? a2.children = b2.children : a2.alt = e2;
  }, a.labelText = function(b2) {
    b2 = y(this.sliceSerialize(b2));
    let a2 = this.stack, e2 = a2[z(a2) - 2];
    e2.label = y(b2.replace(Cb, function(b3, a3, e3) {
      var c2 = y(b3), d2 = a3;
      if (d2) return d2;
      d2 = y(e3);
      if (35 == d2.charCodeAt(0)) {
        var u3 = d2.charCodeAt(1);
        return 120 == u3 || 88 == u3 ? $a(d2.slice(2), 16) : $a(d2.slice(1), 10);
      }
      d2 = _a(d2);
      return d2 || c2;
    })), e2.identifier = ma(b2).toLowerCase();
  }, a.lineEnding = function(b2) {
    var e2 = K(this);
    if (this.data.atHardBreak) {
      var d2 = e2.children, u3 = d2[z(d2) - 1], c2 = u3.position;
      c2.end = da(b2.end), this.data.atHardBreak = void 0;
      return;
    }
    if (!this.data.setextHeadingSlurpLineEnding) {
      var a2 = i2.canContainEols;
      a2 = P(a2, y(e2.type));
    } else {
      a2 = false;
    }
    a2 && (l2.call(this, b2), g2.call(this, b2));
  }, a.link = N(u2, C2), a.listItem = N(u2, void 0), a.listOrdered = N(u2, void 0), a.listUnordered = N(u2, void 0), a.paragraph = N(u2, void 0), a.referenceString = function(b2) {
    let e2 = j2.call(this), a2 = K(this);
    a2.label = e2, a2.identifier = ma(y(this.sliceSerialize(b2))).toLowerCase(), this.data.referenceType = "full";
  }, a.resourceDestinationString = function(b2) {
    let a2 = j2.call(this);
    K(this).url = a2;
  }, a.resourceTitleString = function(b2) {
    let a2 = j2.call(this);
    K(this).title = a2;
  }, a.resource = function(b2) {
    this.data.inReference = void 0;
  }, a.setextHeading = N(u2, B2), a.setextHeadingLineSequence = function(b2) {
    b2 = y(this.sliceSerialize(b2)), b2 = b2.length > 0 ? 61 == (+b2.codePointAt(0) | 0) ? 1 : 2 : 2, K(this).depth = b2;
  }, a.setextHeadingText = function(b2) {
    this.data.setextHeadingSlurpLineEnding = true;
  }, a.strong = N(u2, void 0), a.thematicBreak = N(u2, void 0), O(b) && (b = {}), a = b.mdastExtensions, O(a) && (a = []), ec(i2, a), b = {};
  return function(a2) {
    var g3 = { type: "root", children: [], position: void 0 }, t2 = [g3];
    for (var r3, h3, m2, f3, p3 = [], w2 = { stack: t2, tokenStack: p3, config: i2, enter: d, exit: u2, buffer: c, resume: j2, data: b }, l3 = [], e2 = -1; ++e2 < z(a2); ) bb(X(a2[e2][1])) && ("enter" == y(a2[e2][0]) ? l3.push(e2) : e2 = Kd(a2, l3.pop(), e2));
    for (e2 = -1; ++e2 < z(a2); ) l3 = a2[e2], f3 = i2[y(l3[0])], r3 = X(l3[1]), I(f3, r3) && (h3 = D({ sliceSerialize: l3[2].sliceSerialize }, w2), f3[r3].call(h3, l3[1]));
    z(p3) > 0 && (l3 = p3[z(p3) - 1], e2 = l3[1], e2 = e2 || Db, e2.call(w2, void 0, l3[0]));
    for (e2 = { line: 1, column: 1, offset: 0 }, l3 = { line: 1, column: 1, offset: 0 }, z(a2) > 0 && (r3 = a2[0], f3 = r3[1], e2 = f3.start, h3 = a2[z(a2) - 2][1], l3 = h3.end), e2 = da(e2), g3.position = { start: e2, end: da(l3) }, l3 = i2.transforms, m2 = -1; ++m2 < z(l3); ) e2 = l3[m2](g3), e2 && (g3 = e2);
    return g3;
  };
}
function gc(b) {
  return !!b ? b : [];
}
function hc(b, a, e) {
  if ("string" == typeof a) {
    var d = [];
    Array.prototype.push.call(d, a), a = d;
  }
  if (O(a) || 0 == z(a)) return e;
  for (d = z(a), e = -1; ++e < d; ) if (P(b, a[e])) return true;
  return false;
}
function ic(b, a) {
  b = hc(b, a.inConstruct, true) && !hc(b, a.notInConstruct, false);
  return b;
}
function Md(b, a) {
  if ("string" != typeof a) throw new TypeError("Expected substring");
  var c = y(b), d = y(a);
  b = c.indexOf(d);
  for (var j2 = d.length, u2 = b, e = 0, a = 0; b != -1; ) b == u2 ? (e = e + 1 | 0, e > a && (a = e)) : e = 1, u2 = b + j2 | 0, b = c.indexOf(d, u2);
  return a;
}
function T(b) {
  var a = b.options;
  return O(a) ? {} : a;
}
function Y(b) {
  throw new ka(b);
}
function cb(b, a) {
  if (false !== T(a).fences) return false;
  a = b.value;
  if (!a) return false;
  if (b.lang) return false;
  b = y(a);
  return !Wc.test(b) ? false : Xc.test(b) ? false : true;
}
function Nd(b) {
  var a = T(b).fence;
  b = a ? y(a) : he, b != he && "~" != b && Y("Cannot serialize code with `" + b + "` for `options.fence`, expected `` ` `` or `~`");
  return b;
}
function db(b) {
  var a = T(b).quote;
  b = a ? y(a) : '"', '"' != b && "'" != b && Y("Cannot serialize title with `" + b + "` for `options.quote`, expected `\"`, or `'`");
  return b;
}
function Od(b) {
  var a = T(b).emphasis;
  b = a ? y(a) : je, b != je && "_" != b && Y("Cannot serialize emphasis with `" + b + "` for `options.emphasis`, expected `*`, or `_`");
  return b;
}
function ea(b) {
  return "&#x" + y(b.toString(16)).toUpperCase() + ";";
}
function Fa(b, a, e) {
  var d = Da(b);
  b = Da(a);
  return d === void 0 ? b === void 0 ? "_" == e ? { inside: true, outside: true } : { inside: false, outside: false } : 1 === b ? { inside: true, outside: true } : { inside: false, outside: true } : 1 === d ? b === void 0 ? { inside: false, outside: false } : 1 === b ? { inside: true, outside: true } : { inside: false, outside: false } : b === void 0 ? { inside: false, outside: false } : 1 === b ? { inside: true, outside: false } : { inside: false, outside: false };
}
function jc(b, a) {
  var e = a(b);
  if (false === e) return true;
  if ("skip" === e) return false;
  if (!O(b) && "object" == typeof b && "children" in b) {
    e = b.children;
    var d = z(e);
    for (b = 0; b < d; b++) if (jc(e[b], a)) return true;
  }
  return false;
}
function kc(b, a) {
  var d = false;
  jc(b, function(b2) {
    if ("value" in b2) {
      var a2 = Zc;
      a2 = a2.test(y(b2.value));
    } else {
      a2 = false;
    }
    if (a2) return d = true, false;
    if ("break" == y(b2.type)) return d = true, false;
  });
  var e = b.depth;
  e = !e || +e < 3;
  return !e ? false : 0 == ab(b, void 0).length ? false : T(a).setext || d ? true : false;
}
function lc(b, a) {
  if (T(a).resourceLink) return false;
  var e = b.url;
  if (!e) return false;
  if (b.title) return false;
  a = b.children;
  var d;
  if (!a || 1 != z(a)) return false;
  d = a[0];
  if ("text" != y(d.type)) return false;
  a = ab(b, void 0), b = y(e);
  return a != b && "mailto:" + a != b ? false : !ed.test(b) ? false : fd.test(b) ? false : true;
}
function eb(b) {
  var a = T(b).bullet;
  b = a ? y(a) : je, b != je && "+" != b && b != me && Y(ce + b + "` for `options.bullet`, expected `*`, `+`, or `-`");
  return b;
}
function Pd(b) {
  var a = eb(b), e = T(b).bulletOther;
  if (!e) return a == je ? me : je;
  b = y(e), b != je && "+" != b && b != me && Y(ce + b + "` for `options.bulletOther`, expected `*`, `+`, or `-`"), b == a && Y("Expected `bullet` (`" + a + "`) and `bulletOther` (`" + b + "`) to be different");
  return b;
}
function Qd(b) {
  var a = T(b).bulletOrdered;
  b = a ? y(a) : ke, b != ke && b != le && Y(ce + b + "` for `options.bulletOrdered`, expected `.` or `)`");
  return b;
}
function mc(b) {
  var a = T(b).rule;
  b = a ? y(a) : je, b != je && b != me && "_" != b && Y("Cannot serialize rules with `" + b + "` for `options.rule`, expected `*`, `-`, or `_`");
  return b;
}
function Rd(b, a) {
  var e = z(b), d = z(a);
  if (e < 4) return false;
  if (d < 3) return false;
  var u2 = e - 2, c = e - 3, j2 = e - 4;
  if ("list" != y(b[e - 1])) return false;
  if ("listItem" != y(b[u2])) return false;
  if ("list" != y(b[c])) return false;
  if ("listItem" != y(b[j2])) return false;
  b = d - 2, e = d - 3;
  return "0" != y(a[d - 1]) ? false : "0" != y(a[b]) ? false : "0" != y(a[e]) ? false : true;
}
function Sd(b) {
  var a = T(b).listItemIndent;
  b = a ? y(a) : "one", "tab" != b && "one" != b && "mixed" != b && Y(ce + b + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
  return b;
}
function Td(b) {
  if (O(b) || "object" != typeof b) return false;
  var a = y(b.type);
  return "break" == a ? true : "delete" == a ? true : "emphasis" == a ? true : "footnote" == a ? true : "footnoteReference" == a ? true : "image" == a ? true : "imageReference" == a ? true : "inlineCode" == a ? true : "inlineMath" == a ? true : "link" == a ? true : "linkReference" == a ? true : "mdxJsxTextElement" == a ? true : "mdxTextExpression" == a ? true : "strong" == a ? true : "text" == a ? true : "textDirective" == a ? true : false;
}
function Ud(b) {
  var a = T(b).strong;
  b = a ? y(a) : je, b != je && "_" != b && Y("Cannot serialize strong with `" + b + "` for `options.strong`, expected `*`, or `_`");
  return b;
}
function Vd(b) {
  var a = T(b).ruleRepetition;
  b = a ? a | 0 : 3, b < 3 && Y("Cannot serialize rules with repetition `" + b.toString(10) + "` for `options.ruleRepetition`, expected `3` or more");
  return b;
}
var nc = /* @__PURE__ */ (function() {
  function a(b2) {
    O(b2) && (b2 = {});
    var a2;
    a2 = (0, function() {
      var b3 = void 0;
      arguments.length > 0 && (b3 = arguments[0]);
      var e3 = a2.invalid, d2 = a2.handlers;
      if (b3 && I(b3, "type")) {
        var u2 = y(b3.type);
        e3 = I(d2, u2) ? d2[u2] : a2.unknown;
      }
      if (e3) return e3.apply(this, arguments);
    });
    var e2 = b2.handlers;
    O(e2) && (e2 = {}), a2.handlers = e2, a2.invalid = b2.invalid, a2.unknown = b2.unknown;
    return a2;
  }
  function b(b2, a2) {
    if (a2) for (var d2, u2 = z(a2), e2 = 0; e2 < u2; e2++) d2 = a2[e2], b2.push(d2);
  }
  function c(b2, a2) {
    !a2 || D(b2, a2);
  }
  function d(a2, e2) {
    if (e2) {
      var j3 = e2.extensions;
      if (j3) for (var l3 = z(j3), u2 = -1; ++u2 < l3; ) d(a2, j3[u2]);
      for (u2 in e2) I(e2, u2) && ("extensions" == u2 || ("unsafe" == u2 ? b(a2.unsafe, e2[u2]) : "join" == u2 ? b(a2.join, e2[u2]) : "handlers" == u2 ? c(a2.handlers, e2[u2]) : a2.options[u2] = e2[u2]));
    }
  }
  function e(b2) {
    for (var e2 = [], d2 = z(b2), a2 = 0; a2 < d2; a2++) Array.prototype.push.call(e2, b2[a2]);
    return e2;
  }
  function f2(b2) {
    var a2 = b2.label, e2 = b2.identifier;
    if (a2 || !e2) return "string" == typeof a2 ? a2 : de;
    b2 = y(e2), a2 = function(b3, a3, e3) {
      var c2 = y(b3), d2 = a3;
      if (d2) return d2;
      d2 = y(e3);
      if (35 == d2.charCodeAt(0)) {
        var u2 = d2.charCodeAt(1);
        return 120 == u2 || 88 == u2 ? $a(d2.slice(2), 16) : $a(d2.slice(1), 10);
      }
      d2 = _a(d2);
      return d2 || c2;
    };
    return y(b2.replace(Cb, a2));
  }
  function g2(b2) {
    if (!b2._compiled) {
      var e2, a2 = b2.atBreak ? "[\\r\\n][\\t ]*" : de;
      e2 = b2.before, e2 && (a2 = a2 + "(?:" + y(e2) + le), a2 = a2.length > 0 ? "(" + a2 + le : de, e2 = y(b2.character), hd.test(e2) && (a2 = a2 + "\\"), a2 += e2, e2 = b2.after, e2 && (a2 = a2 + "(?:" + y(e2) + le), b2._compiled = new RegExp(a2, "g");
    }
    return b2._compiled;
  }
  function h2(b2, a2, e2) {
    var m3 = a2.indexStack, f3 = b2.children;
    f3 = f3 || [];
    var j3 = [], g3 = y(e2.before);
    m3.push(-1);
    for (var h3, r2, d2, l3, u2, i3 = a2.createTracker(e2), t2 = void 0, w2 = z(f3), c2 = -1, p2 = t2; true; ) {
      h3 = c2 + 1 | 0;
      if (h3 >= w2) break;
      r2 = f3[h3], m3[z(m3) - 1] = h3, (c2 + 2 | 0) < w2 ? (d2 = a2.handle.handlers, l3 = f3[c2 + 2], u2 = d2[y(l3.type)], u2 && u2.peek && (u2 = d2 = u2.peek), u2 ? (l3 = D({}, i3.current()), l3.before = de, l3.after = de, d2 = [], c2 = f3[c2 + 2], d2.push(c2), d2.push(b2), d2.push(a2), d2.push(l3), c2 = y(u2.apply(void 0, d2)), c2 = c2.length > 0 ? c2.charAt(0) : de) : c2 = de) : c2 = y(e2.after), z(j3) > 0 && ("\r" == g3 || g3 == fe) && "html" == y(r2.type) && (i3 = y(j3[z(j3) - 1]), g3 = z(j3) - 1, j3[g3] = i3.replace(id, ee), i3 = a2.createTracker(e2), g3 = i3.move, i3.move(j3.join(de)), g3 = ee);
      var o2 = i3.current, q2 = i3.current();
      u2 = D({}, q2), u2.after = c2, u2.before = g3, d2 = [];
      var n3 = d2.push;
      d2.push(r2);
      var s2 = d2.push;
      d2.push(b2);
      var E2 = d2.push;
      d2.push(a2);
      var v2 = d2.push;
      d2.push(u2), l3 = a2.handle;
      var A2 = l3.apply, k3 = l3.apply(a2, d2);
      u2 = y(k3), p2 && y(p2) == u2.slice(0, 1) && (u2 = ea(y(p2).charCodeAt(0)) + u2.slice(1)), l3 = a2.attentionEncodeSurroundingInfo, a2.attentionEncodeSurroundingInfo = void 0, p2 = void 0, l3 && (z(j3) > 0 && l3.before && (d2 = y(j3[z(j3) - 1]), r2 = d2.length > 0 ? d2.slice(d2.length - 1) : de, g3 == r2 && (r2 = z(j3) - 1, d2 = d2.slice(0, d2.length - 1), j3[r2] = d2 + ea(g3.charCodeAt(0)))), !l3.after || (p2 = c2)), i3.move(u2), j3.push(u2), g3 = u2.length > 0 ? u2.slice(u2.length - 1) : de, c2 = h3;
    }
    m3.pop();
    return y(j3.join(de));
  }
  function i2(b2, a2, e2, d2) {
    for (var c2 = z(d2.join); --c2 >= 0; ) {
      var j3 = [b2, a2, e2, d2], l3 = d2.join[c2], u2 = l3.apply(void 0, j3);
      if (true === u2 || 1 === u2) break;
      if ("number" == typeof u2) return fe.repeat(1 + u2 | 0);
      if (false === u2) return "\n\n<!---->\n\n";
    }
    return "\n\n";
  }
  function j2(b2, a2, e2) {
    var l3 = a2.indexStack, c2 = b2.children;
    c2 = c2 || [];
    var j3 = a2.createTracker(e2), r2 = [], p2 = z(c2);
    l3.push(-1);
    for (var d2, g3, u2, f3, h3 = -1; true; ) {
      d2 = h3 + 1 | 0;
      if (d2 >= p2) break;
      g3 = c2[d2], l3[z(l3) - 1] = d2, u2 = D({}, j3.current()), u2.before = fe, u2.after = fe, e2 = [g3, b2, a2, u2], f3 = j3.move, u2 = a2.handle, f3 = j3.move(u2.apply(a2, e2)), r2.push(f3), "list" != y(g3.type) && (a2.bulletLastUsed = void 0), d2 < (p2 - 1 | 0) && (e2 = j3.move, e2 = j3.move(i2(g3, c2[h3 + 2], b2, a2)), r2.push(e2)), h3 = d2;
    }
    l3.pop();
    return y(r2.join(de));
  }
  function k2(b2, a2) {
    var u2 = y(b2);
    b2 = [];
    for (var d2, e2 = 0, c2 = 0; true; c2++) {
      d2 = jd.exec(u2);
      if (d2 == null) break;
      e2 = u2.slice(e2, d2.index | 0), e2 = a2(e2, c2, 0 == e2.length), b2.push(e2), e2 = d2[0], b2.push(e2), e2 = d2.index | 0, e2 = e2 + y(d2[0]).length;
    }
    d2 = u2.slice(e2);
    a2 = a2(d2, c2, 0 == d2.length), b2.push(a2);
    return y(b2.join(de));
  }
  function l2(b2, a2) {
    for (var d2 = new RegExp("\\\\(?=[!-/:-@[-`{-~])", "g"), c2 = [], u2 = [], e2 = b2 + a2; true; ) {
      a2 = d2.exec(e2);
      if (a2 == null) break;
      var j3 = a2.index;
      c2.push(j3);
    }
    for (j3 = z(c2), e2 = 0, a2 = -1; ++a2 < j3; ) d2 = +c2[a2] | 0, e2 != d2 && (e2 = b2.slice(e2, d2), u2.push(e2)), u2.push("\\"), e2 = d2;
    b2 = b2.slice(d2), u2.push(b2);
    return y(u2.join(de));
  }
  function m2(b2, a2, e2) {
    var g3 = e2.before ? y(e2.before) : de;
    a2 = a2 ? y(a2) : de;
    var h3 = e2.after ? y(e2.after) : de, i3 = g3 + a2 + h3, r2 = [];
    a2 = [];
    for (var d2, t2, m3, j3, w2, u2, f3, p2 = {}, q2 = b2.unsafe, k3 = z(q2), c2 = -1; ++c2 < k3; ) {
      d2 = q2[c2];
      if (!!ic(b2.stack, d2)) for (t2 = b2.compilePattern(d2); true; ) {
        m3 = t2.exec(i3);
        if (m3 == null) break;
        j3 = I(d2, "before") || d2.atBreak, w2 = I(d2, "after"), u2 = m3.index | 0, j3 && (u2 = u2 + y(m3[1]).length), P(r2, u2) ? (f3 = p2[u2 + ""], f3.before && !j3 && (f3.before = false), f3.after && !w2 && (f3.after = false)) : (r2.push(u2), p2[u2 + ""] = { before: j3, after: w2 });
      }
    }
    r2.sort(ld);
    for (b2 = g3.length > 0 ? g3.length : 0, g3 = i3.length, h3.length > 0 && (g3 = i3.length - h3.length), h3 = z(r2), d2 = -1, c2 = b2; true; ) {
      u2 = d2 + 1 | 0;
      if (u2 >= h3) break;
      b2 = +r2[u2] | 0;
      if (b2 < c2 || b2 >= g3) d2 = u2;
      else {
        (b2 + 1 | 0) < g3 && (d2 + 2 | 0) < h3 && r2[d2 + 2] === (b2 + 1 | 0) ? (j3 = p2[b2 + ""], d2 = p2[(b2 + 1 | 0) + ""], d2 = j3.after && !d2.before && !d2.after) : d2 = false, !d2 && u2 > 0 && r2[u2 - 1] === (b2 - 1 | 0) && (f3 = p2[b2 + ""], j3 = p2[(b2 - 1 | 0) + ""], f3.before && !j3.before && !j3.after && (d2 = true));
        if (d2) d2 = u2;
        else c2 != b2 && (c2 = l2(i3.slice(c2, b2), "\\"), a2.push(c2)), c2 = i3.charAt(b2), d2 = e2.encode, d2 = d2 && P(d2, c2), kd.test(c2) && !d2 ? a2.push("\\") : (c2 = ea(i3.charCodeAt(b2)), a2.push(c2), b2++), d2 = u2, c2 = b2;
      }
    }
    b2 = e2.after ? y(e2.after) : de;
    b2 = l2(i3.slice(c2, g3), b2), a2.push(b2);
    return y(a2.join(de));
  }
  function n2(b2) {
    b2 = b2 || {};
    var e2 = b2.now;
    e2 = e2 || {};
    var a2 = 0;
    !b2.lineShift || (a2 = +b2.lineShift), b2 = e2.line, b2 = b2 || 1;
    var d2 = e2.column;
    d2 = d2 || 1;
    var c2 = +b2, u2 = +d2;
    return { move: function(b3) {
      var e3 = b3 ? y(b3) : de;
      b3 = e3.split(md);
      var d3 = b3.length, j3 = d3 - 1, l3 = b3[j3] || "";
      c2 += j3, u2 = 1 == d3 ? u2 + l3.length : 1 + l3.length + a2;
      return e3;
    }, current: function() {
      return { now: { line: c2, column: u2 }, lineShift: a2 };
    }, shift: function(b3) {
      let e3 = a2;
      a2 = e3 + +b3;
    } };
  }
  return function(b2, u2) {
    u2 = u2 || {};
    var i3 = [], r2 = D({}, L), p2 = e(Kb), w2 = {}, t2 = [], c2 = { handlers: r2, indexStack: i3, join: p2, options: w2, stack: t2, unsafe: e(C), associationId: function(b3) {
      return f2(b3);
    }, containerPhrasing: function(b3, a2) {
      return h2(b3, this, a2);
    }, containerFlow: function(b3, a2) {
      return j2(b3, this, a2);
    }, createTracker: function(b3) {
      return n2(b3);
    }, compilePattern: function(b3) {
      return g2(b3);
    } };
    c2.enter = function(b3) {
      c2.stack.push(b3);
      return function() {
        c2.stack.pop.call(c2.stack);
      };
    }, c2.indentLines = function(b3, a2) {
      return k2(b3, a2);
    }, c2.safe = function(b3, a2) {
      return m2(this, b3, a2);
    }, d(c2, u2);
    if (c2.options.tightDefinitions) {
      u2 = c2.join;
      var l3 = function(b3, a2) {
        if ("definition" == y(b3.type)) {
          var e2 = y(b3.type);
          e2 = e2 == y(a2.type);
        } else {
          e2 = false;
        }
        if (e2) return 0;
      };
      u2.push(l3);
    }
    u2 = function(b3) {
      throw new ka("Cannot handle value `" + y(b3) + "`, expected node");
    };
    l3 = function(b3) {
      throw new ka("Cannot handle unknown node `" + y(b3.type) + he);
    }, c2.handle = a({ invalid: u2, unknown: l3, handlers: c2.handlers }), u2 = [b2, void 0, c2, { before: fe, after: fe, now: { line: 1, column: 1 }, lineShift: 0 }], l3 = c2.handle, b2 = y(l3.apply(c2, u2)), b2.length > 0 && (u2 = b2.charCodeAt(b2.length - 1), 10 != u2 && 13 != u2 && (b2 = b2 + fe));
    return b2;
  };
})();
function oc(b, a) {
  if ("function" == typeof b.data) return b.data(a);
}
function Wd(b) {
  return !!b ? b : [];
}
var Ga = JSON.parse("null");
var na = Object.prototype.hasOwnProperty;
var pc = Object.prototype.toString;
var ia = Array.prototype.slice;
var qc = (0, function() {
  var b = ia.call(arguments), a = Array.prototype.pop.call(b);
  "function" == typeof a || ga("Expected function as last argument, not " + a);
  var e, d = -1, j2 = this.fns;
  e = function(u3) {
    d++;
    var r2 = void 0;
    d < j2.length && (r2 = j2[d]);
    var c2, g2 = [], f2 = arguments.length;
    if (f2 > 0) {
      c2 = u3;
      for (var i2 = 1; i2 < f2; i2++) Array.prototype.push.call(g2, arguments[i2]);
    }
    if (c2) {
      a(c2);
      return;
    }
    var l3;
    for (i2 = b.length, l3 = -1; ++l3 < i2; ) c2 = void 0, l3 < g2.length && (c2 = g2[l3]), c2 == null && (c2 = b[l3], g2[l3 + ""] = c2);
    b = g2;
    if ("function" == typeof r2) pd(r2, e).apply(void 0, g2);
    else {
      var h2;
      for (l3 = [], Array.prototype.push.call(l3, Ga), h2 = g2.length, c2 = 0; c2 < h2; c2++) Array.prototype.push.call(l3, g2[c2]);
      a.apply(void 0, l3);
    }
  };
  var u2 = [];
  Array.prototype.push.call(u2, Ga);
  for (var l2 = b.length, c = 0; c < l2; c++) Array.prototype.push.call(u2, b[c]);
  e.apply(void 0, u2);
});
var rc = (0, function(b) {
  return "function" == typeof b || ga("Expected `middelware` to be a function, not " + b), Array.prototype.push.call(this.fns, b), this;
});
var Ha = "history path basename stem extname dirname".split(ee);
var Q = {};
var i = (0, function(b, a, e) {
  if (this === void 0) throw new TypeError("Class constructor VFileMessage cannot be invoked without 'new'");
  return Qb(b, a, e);
});
Q = i.prototype, Object.setPrototypeOf(i, Error), Object.setPrototypeOf(Q, Error.prototype);
var f = true;
Object.defineProperty(i, "name", { configurable: f, value: "VFileMessage" }), Q.file = de, Q.name = de, Q.reason = de, Q.message = de, Q.stack = de, Q.column = void 0, Q.line = void 0, Q.ancestors = void 0, Q.cause = void 0, Q.fatal = void 0, Q.place = void 0, Q.ruleId = void 0, Q.source = void 0, Object.defineProperty(i, "prototype", { writable: false });
var va;
var oa = class VFile extends Object {
  constructor(b) {
    super();
    if (this === void 0) throw new TypeError("Class constructor VFile cannot be invoked without 'new'");
    !b ? b = {} : Ob(b) ? b = { path: b } : ("string" == typeof b || Lb(b)) && (b = { value: b });
    var a = qd();
    "cwd" in b && (a = de);
    this.cwd = a, this.data = {}, this.history = [], this.messages = [];
    for (var e, d = 0; d < Ha.length; d++) a = Ha[d] || "", a in b && b[a] != null && b[a] !== void 0 && (e = b[a], "history" == a && (e = e.slice()), this[a] = e);
    for (a in b) Ha.includes(a) || (this[a] = b[a]);
  }
};
va = oa.prototype, Object.defineProperty(oa, "name", { configurable: f, value: "VFile" });
var g = (0, function(b, a, e) {
  b = this.message(b, a, e), b.fatal = true;
  throw b;
});
var h = (0, function(b, a, e) {
  b = this.message(b, a, e), b.fatal = void 0;
  return b;
});
var j = (0, function(b, a, e) {
  b = Qb(b, a, e);
  if (a = ha(this)) {
    var d = a + ":" + b.name;
    b.name = d, b.file = a;
  }
  b.fatal = false;
  Array.prototype.push.call(this.messages, b);
  return b;
});
var k = (0, function(b) {
  var a = this.value;
  if (a === void 0) return de;
  if ("string" == typeof a) return a;
  var e = b ? new TextDecoder(b) : new TextDecoder();
  return e.decode(a);
});
Object.defineProperty(g, "name", { configurable: f, value: "fail" }), Object.defineProperty(h, "name", { configurable: f, value: "info" }), Object.defineProperty(j, "name", { configurable: f, value: "message" }), Object.defineProperty(k, "name", { configurable: f, value: "toString" }), ba("basename", { configurable: f, get: function() {
  var b = ha(this);
  if ("string" == typeof b) return Pb(b + "", de);
}, set: function(b) {
  Pa(b, "basename"), Oa(b, "basename");
  var a = this.dirname;
  a = a || de, qa(this, Aa(a, b));
} }), ba("dirname", { configurable: f, get: function() {
  var b = ha(this);
  if ("string" == typeof b) return rd(b + "");
}, set: function(b) {
  var a = this.basename;
  if (!a) throw new Error("Setting `dirname` requires `path` to be set too");
  b = b || de, qa(this, Aa(b, a));
} }), ba("extname", { configurable: f, get: function() {
  var b = ha(this);
  if ("string" == typeof b) return sd(b + "");
}, set: function(b) {
  Oa(b, "extname");
  var a = this.dirname;
  if (!a) throw new Error("Setting `extname` requires `path` to be set too");
  if (b) {
    if (46 != (+b.codePointAt(0) | 0)) throw new Error("`extname` must start with `.`");
    if (b.includes(ke, 1)) throw new Error("`extname` cannot contain multiple dots");
  }
  b = b ? b + "" : de;
  qa(this, Aa(a, this.stem + "" + b));
} }), ba("path", { configurable: f, get: function() {
  return ha(this);
}, set: function(b) {
  qa(this, b);
} }), ba("stem", { configurable: f, get: function() {
  var b = ha(this);
  if ("string" == typeof b) return b = b + "", Pb(b, this.extname + "");
}, set: function(b) {
  Pa(b, "stem"), Oa(b, "stem");
  var e = b + "";
  b = this.dirname, b = b ? b + "" : de;
  var a = this.extname;
  a = a ? a + "" : de, qa(this, Aa(b, e + a));
} }), ba("fail", { configurable: f, writable: f, value: g }), ba("info", { configurable: f, writable: f, value: h }), ba("message", { configurable: f, writable: f, value: j }), ba("toString", { configurable: f, writable: f, value: k }), ra("basename"), ra("dirname"), ra("extname"), ra("path"), ra("stem"), Object.defineProperty(oa, "prototype", { writable: false });
var fb;
var gb = (0, function() {
  Sa("use", this.frozen);
  var a = this.attachers, e = this.namespace, b = void 0;
  arguments.length > 0 && (b = arguments[0]);
  if (b == null) return this;
  if ("function" == typeof b) return Va(a, b, ia.call(arguments, 1)), this;
  if ("object" == typeof b) return Array.isArray(b) ? Tb(a, e, b) : Ub(a, e, b), this;
  throw new TypeError(ie + b + he);
});
var hb = (0, function() {
  return Vb(this);
});
var ib = (0, function(b) {
  this.freeze(), b = Ba(b);
  let a = Ta(this);
  Qa("parse", a);
  return a(String(b), b);
});
var jb = (0, function(b, a, e) {
  Rb(b);
  var c = this.freeze;
  this.freeze(), !e && "function" == typeof a && (e = a, a = void 0);
  var u2 = this.transformers, d = function(d2, c2) {
    let j2 = Ba(a);
    u2.run(b, j2, function(a2, u3, j3) {
      var l2 = !u3 ? b : u3;
      if (a2) {
        c2(a2);
        return;
      }
      if (d2) {
        d2(l2);
        return;
      }
      e(void 0, l2, j3);
    });
  };
  if (e) {
    d(void 0, e);
    return;
  }
  return new Promise(d);
});
var kb = (0, function(b, a) {
  var e, d = false;
  this.run(b, a, function(b2, a2, u2) {
    Mb(b2), e = a2, d = true;
  }), Sb("runSync", "run", d), Nb(e);
  return e;
});
var lb = (0, function(b, a) {
  this.freeze();
  let e = Ba(a);
  a = Ua(this), Ra("stringify", a), Rb(b);
  return a(b, e);
});
var mb = (0, function(b, a) {
  var e = this;
  e.freeze(), Qa("process", Ta(e)), Ra("process", Ua(e));
  var d = function(d2, u2) {
    let c = Ba(b), j2 = e.parse(c);
    e.run(j2, c, function(b2, c2, j3) {
      if (b2 || !c2 || !j3) {
        u2(b2);
        return;
      }
      var l2 = e.stringify(c2, j3);
      od(l2) ? j3.value = l2 : j3.result = l2;
      if (d2) {
        d2(j3);
        return;
      }
      a(void 0, j3);
    });
  };
  if (a) {
    d(void 0, a);
    return;
  }
  return new Promise(d);
});
var nb = (0, function(b) {
  this.freeze(), Qa("processSync", Ta(this)), Ra("processSync", Ua(this));
  var a, e = false;
  this.process(b, function(b2, d) {
    e = true, Mb(b2), a = d;
  }), Sb("processSync", "process", e), Nb(a);
  return a;
});
var ob = (0, function(b, a) {
  var d = this.namespace, u2 = arguments.length, e = void 0;
  u2 > 0 && (e = b);
  if ("string" == typeof e) {
    if (2 == u2) return Sa("data", this.frozen), d[e] = a, this;
    var c;
    return na.call(d, e) && (c = d[e]) ? c : void 0;
  }
  return e ? (Sa("data", this.frozen), this.namespace = e, this) : d;
});
var pb = (0, function() {
  if (this.frozen) return this;
  var a = this.attachers, d = this.transformers;
  while (true) {
    var b = +this.freezeIndex + 1;
    this.freezeIndex = b;
    if (b >= a.length) break;
    var e = a[b], u2 = e[0];
    b = ia.call(e, 1);
    if (!(b.length > 0 && b[0] === false)) b.length > 0 && true === b[0] && Array.prototype.splice.call(b, 0, 1, void 0), b = u2.apply(this, b), "function" == typeof b && d.use(b);
  }
  this.frozen = true;
  this.freezeIndex = Number.POSITIVE_INFINITY;
  return this;
});
var ja = (0, function() {
  if (this === void 0) throw new TypeError("Class constructor Processor cannot be invoked without 'new'");
  return wd();
});
Object.defineProperty(ja, "name", { configurable: f, value: "Processor" });
var qb = ja.prototype;
vd(), fb = function() {
  return new ja();
};
var n = new ja();
n.freeze();
var m = Object;
var fa = Number;
var wa = Math;
var ka = Error;
var Z = /[A-Za-z]/;
var _ = /[\dA-Za-z]/;
var sc = /[#-'*+\--9=?A-Z^-~]/;
var Ia = /\d/;
var tc = /[\dA-Fa-f]/;
var uc = new RegExp("[!-/:-@[-`{-~]", de);
var vc = new RegExp("\\p{P}|\\p{S}", "u");
var wc = /\s/;
var xc = R((0, function(b) {
  var a, e, d, u2 = function(a2) {
    if (A(a2)) {
      b.exit("chunkText"), b.exit("paragraph"), b.consume(a2);
      return;
    }
    if (B(a2)) return b.consume(a2), b.exit("chunkText"), e;
    b.consume(a2);
    return u2;
  };
  e = function(e2) {
    var d2 = { contentType: "text", previous: a };
    d2 = b.enter("chunkText", d2), a && (a.next = d2), a = d2;
    return u2(e2);
  };
  let l2 = b.attempt;
  d = b.attempt(this.parser.constructs.contentInitial, function(a2) {
    if (A(a2)) {
      b.consume(a2);
      return;
    }
    b.enter("lineEnding");
    b.consume(a2), b.exit("lineEnding");
    return H(b, d, "linePrefix", 0);
  }, function(a2) {
    b.enter("paragraph");
    return e(a2);
  });
  return d;
}));
g = function(b, a, e) {
  var d = this.parser.constructs.disable.null;
  d = !P(d, "codeIndented") ? 4 : 0;
  var u2 = b.attempt;
  return H(b, b.attempt(this.parser.constructs.document, a, e), "linePrefix", d);
};
var Ja = { tokenize: g };
var yc = R((0, function(b) {
  var e = this;
  let a = [[], 0, null, null, null, 0, null, null];
  a[2] = b;
  var j2 = function(d2) {
    if (A(d2)) {
      _b(e, a, b.exit("chunkFlow"), true), sa(e, b, a[0], 0), b.consume(d2);
      return;
    }
    if (B(d2)) return b.consume(d2), _b(e, a, b.exit("chunkFlow"), false), a[1] = 0, e.interrupt = void 0, a[6];
    b.consume(d2);
    return j2;
  };
  let d = function(d2) {
    if (A(d2)) {
      !a[3] || Za(e, a), sa(e, b, a[0], 0), b.consume(d2);
      return;
    }
    if (!a[3]) {
      var u3 = e.parser, l3 = u3.flow;
      a[3] = u3.flow(e.now());
    }
    var c2 = { _tokenizer: a[3], contentType: "flow", previous: a[4] };
    b.enter("chunkFlow", c2);
    return j2(d2);
  }, g2 = function(b2) {
    let d2 = a[1] + 1 | 0;
    a[1] = d2;
    let u3 = a[0], c2 = e.currentConstruct;
    u3.push({ construct: c2, state: e.containerState });
    return a[7](b2);
  }, u2 = function(a2) {
    e.containerState = {};
    return b.attempt(Ja, g2, d)(a2);
  }, i2 = function(b2) {
    let u3 = e.parser.lazy, c2 = e.now().line, j3 = a[1];
    Wb(u3, c2, j3 != z(a[0])), a[5] = +e.now().offset;
    return d(b2);
  }, r2 = function(d2) {
    !a[3] || Za(e, a), sa(e, b, a[0], a[1]);
    return u2(d2);
  }, c = function(c2) {
    if (a[1] == a[0].length) {
      if (!a[3]) return u2(c2);
      var j3 = a[3].currentConstruct;
      if (j3 && j3.concrete) return d(c2);
      e.interrupt = j3 && !a[3]._gfmTableDynamicInterruptHack;
    }
    e.containerState = {};
    return b.check(Ja, r2, i2)(c2);
  }, f2 = function(d2) {
    var y2 = a[1] + 1 | 0;
    a[1] = y2;
    if (e.containerState._closeFlow) {
      e.containerState._closeFlow = void 0, !a[3] || Za(e, a);
      for (var l3, u3, h2, r3, g3, j3, f3 = z(e.events), i3 = f3; --i3 >= 0; ) {
        u3 = e.events[i3], "exit" == u3[0] ? (h2 = u3[1], r3 = "chunkFlow" == h2.type) : r3 = false;
        if (r3) {
          l3 = u3[1].end;
          break;
        }
      }
      sa(e, b, a[0], a[1]);
      for (j3 = f3; j3 < z(e.events); j3++) g3 = e.events[j3], u3 = g3[1], u3.end = J(l3);
      l3 = e.events, i3++, g3 = e.events, V(l3, i3, 0, g3.slice(f3)), e.events.length = j3;
      return c(d2);
    }
    return a[6](d2);
  }, l2 = function(d2) {
    if (a[1] < a[0].length) {
      var u3 = a[0][a[1]];
      e.containerState = u3.state;
      return b.attempt(u3.construct.continuation, f2, c)(d2);
    }
    return c(d2);
  };
  a[6] = l2, a[7] = u2;
  return l2;
}));
var pa = R(function(b, a, e) {
  let d = function(b2) {
    return A(b2) || B(b2) ? a(b2) : e(b2);
  };
  return function(a2) {
    return E(a2) ? H(b, d, "linePrefix", 0)(a2) : d(a2);
  };
});
pa.partial = f;
var rb = class {
  constructor(b) {
    b ? this.left = Array.from(b) : this.left = [], this.right = [];
  }
  get(b) {
    var e = +b, d = z(this.left), a = d + z(this.right) | 0;
    (e < 0 || e >= +a) && Xb("Cannot access index `" + y(b) + "` in a splice buffer of size `" + a + he), a = this.left, d = z(a);
    if (e < +d) return a[+b];
    e = this.right, a = z(e);
    return e[((a - b | 0) + d | 0) - 1];
  }
  slice(b, a) {
    var d = +fa.POSITIVE_INFINITY;
    O(a) || (d = +a);
    var u2 = +b, c = this.left;
    b = this.right, a = c.length;
    if (d < a) return c.slice(u2, d);
    if (u2 > a) {
      var e = b.length;
      d = e - d + a, e = e - u2 + a, e = b.slice(d, e);
      return e.reverse();
    }
    u2 = c.slice(u2);
    e = b.length - d + a, e = b.slice(e), e.reverse();
    return u2.concat(e);
  }
  splice(b, a, e) {
    a = a ? +a : 0, ca(this, +wa.trunc.call(wa, +b)), b = this.right, a = b.length - a;
    var d = fa.POSITIVE_INFINITY;
    a = b.splice(a, d), !e || ta(this.left, e);
    return a.reverse();
  }
  shift() {
    ca(this, 0);
    let b = this.right;
    return b.pop();
  }
  pop() {
    ca(this, +fa.POSITIVE_INFINITY);
    let b = this.left;
    return b.pop();
  }
  push(b) {
    ca(this, +fa.POSITIVE_INFINITY);
    let a = this.left;
    a.push(b);
  }
  pushMany(b) {
    ca(this, +fa.POSITIVE_INFINITY), ta(this.left, b);
  }
  unshift(b) {
    ca(this, 0);
    let a = this.right;
    a.push(b);
  }
  unshiftMany(b) {
    ca(this, 0), b = Array.from(b), b.reverse(), ta(this.right, b);
  }
  setCursor(b) {
    ca(this, +b);
  }
};
g = rb.prototype;
m.defineProperty(g, "length", { enumerable: f, configurable: f, get: function() {
  let b = z(this.left);
  return b + z(this.right) | 0;
} }), g = function(b, a) {
  $b(b);
  return b;
};
var sb = R((0, function(b, a, e) {
  var d = this;
  let u2 = function(u3) {
    if (A(u3) || B(u3)) return e(u3);
    var j2 = d.events, g2 = z(j2), c = j2[g2 - 1];
    if (!P(d.parser.constructs.disable.null, "codeIndented") && c && "linePrefix" == c[1].type) {
      j2 = c[2];
      var l2 = y(j2.sliceSerialize.call(c[2], c[1], true)).length >= 4;
    } else {
      l2 = false;
    }
    if (l2) return a(u3);
    l2 = b.interrupt;
    return b.interrupt(d.parser.constructs.flow, e, a)(u3);
  };
  return function(a2) {
    b.exit("chunkContent"), b.enter("lineEnding"), b.consume(a2), b.exit("lineEnding");
    return H(b, u2, "linePrefix", 0);
  };
}));
sb.partial = f;
var zc = { tokenize: function(b, a, e) {
  var d, u2, j2, c = function(a2) {
    if (A(a2)) return u2(a2);
    if (B(a2)) return b.check(sb, j2, u2)(a2);
    b.consume(a2);
    return c;
  };
  u2 = function(e2) {
    b.exit("chunkContent"), b.exit("content");
    return a(e2);
  }, j2 = function(a2) {
    b.consume(a2), b.exit("chunkContent");
    let e2 = { contentType: "content", previous: d };
    e2 = b.enter("chunkContent", e2), d.next = e2, d = e2;
    return c;
  };
  return function(a2) {
    b.enter("content");
    let e2 = { contentType: "content" };
    d = b.enter("chunkContent", e2);
    return c(a2);
  };
}, resolve: g };
var Ac = R((0, function(b) {
  var d = this;
  let u2 = d.parser.constructs;
  var e;
  let a = function(a2) {
    if (A(a2)) {
      b.consume(a2);
      return;
    }
    b.enter("lineEnding");
    b.consume(a2), b.exit("lineEnding"), d.currentConstruct = void 0;
    return e;
  }, c = b.attempt, l2 = u2.flow;
  c = H(b, b.attempt(l2, a, b.attempt(zc, a, void 0)), "linePrefix", 0), a = b.attempt(u2.flowInitial, a, c), e = b.attempt(pa, function(a2) {
    if (A(a2)) {
      b.consume(a2);
      return;
    }
    b.enter("lineEndingBlank");
    b.consume(a2), b.exit("lineEndingBlank"), d.currentConstruct = void 0;
    return e;
  }, a);
  return e;
}));
var Ye = void 0;
var o = { resolveAll: function(b, a) {
  var e, j2, l2 = void 0, c = z(b), d = -1, u2 = l2;
  while (true) {
    e = d + 1 | 0;
    if (e > c) break;
    u2 === void 0 ? (e < c && b[e] && "data" == b[e][1].type && (d = d + 2 | 0, u2 = e, e = d), d = e) : ((e >= c || !b[e] || "data" != b[e][1].type) && (u2 = u2 | 0, e != (u2 + 2 | 0) && (j2 = b[u2], c = j2[1], c.end = b[e - 1][1].end, d = u2 + 2 | 0, b.splice(d, (e - u2 | 0) - 2 | 0), c = z(b), e = d), u2 = void 0), d = e);
  }
  return "function" == typeof Ye ? Ye(b, a) : b;
} };
var Ze = void 0;
g = { resolveAll: function(b, a) {
  var e, j2, l2 = void 0, c = z(b), d = -1, u2 = l2;
  while (true) {
    e = d + 1 | 0;
    if (e > c) break;
    u2 === void 0 ? (e < c && b[e] && "data" == b[e][1].type && (d = d + 2 | 0, u2 = e, e = d), d = e) : ((e >= c || !b[e] || "data" != b[e][1].type) && (u2 = u2 | 0, e != (u2 + 2 | 0) && (j2 = b[u2], c = j2[1], c.end = b[e - 1][1].end, d = u2 + 2 | 0, b.splice(d, (e - u2 | 0) - 2 | 0), c = z(b), e = d), u2 = void 0), d = e);
  }
  return "function" == typeof Ze ? Ze(b, a) : b;
}, tokenize: function(b) {
  var a = this;
  let d = a.parser.constructs.string;
  var e;
  let u2 = function(b2) {
    if (A(b2)) return true;
    var e2 = Ca(d, b2);
    if (!e2) return false;
    for (var u3, j3 = z(e2), c2 = -1; ++c2 < j3; ) {
      u3 = e2[c2], b2 = u3.previous;
      if ("function" != typeof b2 || b2.call(a, a.previous)) return true;
    }
    return false;
  };
  var c = function(a2) {
    if (u2(a2)) return b.exit("data"), e(a2);
    b.consume(a2);
    return c;
  };
  let j2 = function(a2) {
    if (A(a2)) {
      b.consume(a2);
      return;
    }
    b.enter("data");
    b.consume(a2);
    return c;
  }, l2 = function(b2) {
    return u2(b2) ? e(b2) : j2(b2);
  };
  e = b.attempt(d, l2, j2);
  return l2;
} };
var Bc = g;
var Ve = function(b, a) {
  return Bd(b, a);
};
g = { resolveAll: function(b, a) {
  var e, j2, l2 = void 0, c = z(b), d = -1, u2 = l2;
  while (true) {
    e = d + 1 | 0;
    if (e > c) break;
    u2 === void 0 ? (e < c && b[e] && "data" == b[e][1].type && (d = d + 2 | 0, u2 = e, e = d), d = e) : ((e >= c || !b[e] || "data" != b[e][1].type) && (u2 = u2 | 0, e != (u2 + 2 | 0) && (j2 = b[u2], c = j2[1], c.end = b[e - 1][1].end, d = u2 + 2 | 0, b.splice(d, (e - u2 | 0) - 2 | 0), c = z(b), e = d), u2 = void 0), d = e);
  }
  return "function" == typeof Ve ? Ve(b, a) : b;
}, tokenize: function(b) {
  var a = this;
  let d = a.parser.constructs.text;
  var e;
  let u2 = function(b2) {
    if (A(b2)) return true;
    var e2 = Ca(d, b2);
    if (!e2) return false;
    for (var u3, j3 = z(e2), c2 = -1; ++c2 < j3; ) {
      u3 = e2[c2], b2 = u3.previous;
      if ("function" != typeof b2 || b2.call(a, a.previous)) return true;
    }
    return false;
  };
  var c = function(a2) {
    if (u2(a2)) return b.exit("data"), e(a2);
    b.consume(a2);
    return c;
  };
  let j2 = function(a2) {
    if (A(a2)) {
      b.consume(a2);
      return;
    }
    b.enter("data");
    b.consume(a2);
    return c;
  }, l2 = function(b2) {
    return u2(b2) ? e(b2) : j2(b2);
  };
  e = b.attempt(d, l2, j2);
  return l2;
} };
var Cc = g;
j = { name: "attention", tokenize: function(b, a, e) {
  let c = this.parser.constructs.attentionMarkers.null;
  e = this.previous;
  let d = Da(e);
  var u2 = 0, j2 = function(l2) {
    if (l2 == u2) return b.consume(l2), j2;
    var g2, i2, r2 = b.exit("attentionSequence"), f2 = Da(l2);
    g2 = !f2 || 2 == f2 && d || P(c, l2), i2 = !d || 2 == d && f2 || P(c, e), 42 == u2 ? (r2._open = g2, r2._close = i2) : (r2._open = g2 && (!!d || !i2), r2._close = i2 && (!!f2 || !g2));
    return a(l2);
  };
  return function(a2) {
    u2 = a2 | 0, b.enter("attentionSequence");
    return j2(a2);
  };
}, resolveAll: function(b, a) {
  var y2, j2, d, i2, g2, p2, l2, r2, f2, h2, m2, e = z(b), u2 = -1;
  while (true) {
    j2 = u2 + 1 | 0;
    if (j2 >= e) break;
    var t2 = b[j2], q2 = t2[1];
    d = q2;
    if ("enter" == b[j2][0] && "attentionSequence" == d.type && d._close) for (i2 = j2; --i2 >= 0; ) {
      var k2 = b[i2], c = k2[1];
      if ("exit" == b[i2][0] && "attentionSequence" == c.type && c._open) {
        u2 = a.sliceSerialize(c);
        if (u2.charCodeAt(0) == a.sliceSerialize(d).charCodeAt(0)) {
          var w2;
          w2 = c.start.offset | 0, g2 = (c.end.offset | 0) - w2 | 0, y2 = d.start.offset | 0, u2 = (d.end.offset | 0) - y2 | 0, l2 = (c._close || d._open) && 0 != u2 % 3 && 0 == (g2 + u2 | 0) % 3;
          if (!l2) {
            e = g2 > 1 && u2 > 1 ? 2 : 1, l2 = J(c.end), r2 = J(d.start), u2 = 0 - e;
            var o2 = l2.column + u2;
            l2.column = o2;
            var n2 = l2.offset + u2;
            l2.offset = n2;
            var s2 = l2._bufferIndex + u2;
            l2._bufferIndex = s2;
            var E2 = r2.column + e;
            r2.column = E2;
            var v2 = r2.offset + e;
            r2.offset = v2;
            var A2 = r2._bufferIndex + e;
            r2._bufferIndex = A2, e > 1 ? (e = "strongSequence", u2 = "strongText", g2 = "strong") : (e = "emphasisSequence", u2 = "emphasisText", g2 = "emphasis"), f2 = { type: e, start: l2, end: J(c.end) }, h2 = { type: e, start: J(d.start), end: r2 }, e = J(c.end), u2 = { type: u2, start: e, end: J(d.start) }, e = J(f2.start), g2 = { type: g2, start: e, end: J(h2.end) }, c.end = J(f2.start), d.start = J(h2.end), e = [], 0 != c.end.offset - c.start.offset && (e = W(e, [["enter", c, a], ["exit", c, a]])), e = W(e, [["enter", g2, a], ["enter", f2, a], ["exit", f2, a], ["enter", u2, a]]), p2 = a.parser.constructs.insideSpan.null, m2 = i2 + 1 | 0, e = W(W(e, Xa(p2, b.slice(m2, j2), a)), [["exit", u2, a], ["enter", h2, a], ["exit", h2, a], ["exit", g2, a]]), 0 != d.end.offset - d.start.offset ? (e = W(e, [["enter", d, a], ["exit", d, a]]), d = 2) : d = 0, V(b, i2 - 1 | 0, (j2 - i2 | 0) + 3 | 0, e), u2 = ((i2 + z(e) | 0) - d | 0) - 2 | 0, e = z(b), j2 = u2;
            break;
          }
        }
      }
    }
    u2 = j2;
  }
  for (a = z(b), j2 = -1; ++j2 < a; ) "attentionSequence" == b[j2][1].type && (d = b[j2][1], d.type = "data");
  return b;
} };
var w = U("autolink", function(b, a, e) {
  var c, j2, d = 0, l2 = function(a2) {
    if ((45 === a2 || G(_, a2)) && d < 63) {
      d++;
      var u3 = c;
      45 === a2 && (u3 = l2), b.consume(a2);
      return u3;
    }
    return e(a2);
  };
  c = function(e2) {
    return 46 === e2 ? (b.consume(e2), d = 0, j2) : 62 === e2 ? (b.exit("autolinkProtocol").type = "autolinkEmail", b.enter("autolinkMarker"), b.consume(e2), b.exit("autolinkMarker"), b.exit("autolink"), a) : l2(e2);
  }, j2 = function(b2) {
    return G(_, b2) ? c(b2) : e(b2);
  };
  var u2 = function(a2) {
    return 64 === a2 ? (b.consume(a2), j2) : G(sc, a2) ? (b.consume(a2), u2) : e(a2);
  }, g2 = function(d2) {
    if (62 === d2) return b.exit("autolinkProtocol"), b.enter("autolinkMarker"), b.consume(d2), b.exit("autolinkMarker"), b.exit("autolink"), a;
    if (A(d2) || 32 === d2 || 60 === d2 || Wa(d2)) return e(d2);
    b.consume(d2);
    return g2;
  }, i2 = function(a2) {
    if (58 === a2) return b.consume(a2), d = 0, g2;
    if ((43 === a2 || 45 === a2 || 46 === a2 || G(_, a2)) && d < 32) return d = d + 1 | 0, b.consume(a2), i2;
    d = 0;
    return u2(a2);
  };
  let r2 = function(b2) {
    return 43 === b2 || 45 === b2 || 46 === b2 || G(_, b2) ? (d = 1, i2(b2)) : u2(b2);
  }, f2 = function(a2) {
    return G(Z, a2) ? (b.consume(a2), r2) : 64 === a2 ? e(a2) : u2(a2);
  };
  return function(a2) {
    b.enter("autolink"), b.enter("autolinkMarker"), b.consume(a2), b.exit("autolinkMarker"), b.enter("autolinkProtocol");
    return f2;
  };
});
var xa = U("blockQuote", (0, function(b, a, e) {
  var d = this;
  let u2 = function(e2) {
    if (E(e2)) return b.enter("blockQuotePrefixWhitespace"), b.consume(e2), b.exit("blockQuotePrefixWhitespace"), b.exit("blockQuotePrefix"), a;
    b.exit("blockQuotePrefix");
    return a(e2);
  };
  return function(a2) {
    if (62 === a2) {
      var c = d.containerState;
      !c.open && (b.enter("blockQuote", { _container: true }), c.open = true), b.enter("blockQuotePrefix"), b.enter("blockQuoteMarker"), b.consume(a2), b.exit("blockQuoteMarker");
      return u2;
    }
    return e(a2);
  };
}));
h = function(b) {
  b.exit("blockQuote");
}, g = { tokenize: function(b, a, e) {
  var u2 = this;
  let d = function(d2) {
    return b.attempt(xa, a, e)(d2);
  };
  return function(a2) {
    if (E(a2)) {
      var e2 = P(u2.parser.constructs.disable.null, "codeIndented") ? 0 : 4;
      return H(b, d, "linePrefix", e2)(a2);
    }
    return d(a2);
  };
} }, xa.continuation = g, xa.exit = h;
var p = U("characterEscape", function(b, a, e) {
  let d = function(d2) {
    return G(uc, d2) ? (b.enter("characterEscapeValue"), b.consume(d2), b.exit("characterEscapeValue"), b.exit("characterEscape"), a) : e(d2);
  };
  return function(a2) {
    b.enter("characterEscape"), b.enter("escapeMarker"), b.consume(a2), b.exit("escapeMarker");
    return d;
  };
});
var tb = { AElig: "\xC6", AMP: "&", Aacute: "\xC1", Abreve: "\u0102", Acirc: "\xC2", Acy: "\u0410", Afr: "\u{1D504}", Agrave: "\xC0", Alpha: "\u0391", Amacr: "\u0100", And: "\u2A53", Aogon: "\u0104", Aopf: "\u{1D538}", ApplyFunction: "\u2061", Aring: "\xC5", Ascr: "\u{1D49C}", Assign: "\u2254", Atilde: "\xC3", Auml: "\xC4", Backslash: "\u2216", Barv: "\u2AE7", Barwed: "\u2306", Bcy: "\u0411", Because: "\u2235", Bernoullis: "\u212C", Beta: "\u0392", Bfr: "\u{1D505}", Bopf: "\u{1D539}", Breve: "\u02D8", Bscr: "\u212C", Bumpeq: "\u224E", CHcy: "\u0427", COPY: "\xA9", Cacute: "\u0106", Cap: "\u22D2", CapitalDifferentialD: "\u2145", Cayleys: "\u212D", Ccaron: "\u010C", Ccedil: "\xC7", Ccirc: "\u0108", Cconint: "\u2230", Cdot: "\u010A", Cedilla: "\xB8", CenterDot: "\xB7", Cfr: "\u212D", Chi: "\u03A7", CircleDot: "\u2299", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", Colon: "\u2237", Colone: "\u2A74", Congruent: "\u2261", Conint: "\u222F", ContourIntegral: "\u222E", Copf: "\u2102", Coproduct: "\u2210", CounterClockwiseContourIntegral: "\u2233", Cross: "\u2A2F", Cscr: "\u{1D49E}", Cup: "\u22D3", CupCap: "\u224D", DD: "\u2145", DDotrahd: "\u2911", DJcy: "\u0402", DScy: "\u0405", DZcy: "\u040F", Dagger: "\u2021", Darr: "\u21A1", Dashv: "\u2AE4", Dcaron: "\u010E", Dcy: "\u0414", Del: "\u2207", Delta: "\u0394", Dfr: "\u{1D507}", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", Diamond: "\u22C4", DifferentialD: "\u2146", Dopf: "\u{1D53B}", Dot: "\xA8", DotDot: "\u20DC", DotEqual: "\u2250", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", DownTeeArrow: "\u21A7", Downarrow: "\u21D3", Dscr: "\u{1D49F}", Dstrok: "\u0110", ENG: "\u014A", ETH: "\xD0", Eacute: "\xC9", Ecaron: "\u011A", Ecirc: "\xCA", Ecy: "\u042D", Edot: "\u0116", Efr: "\u{1D508}", Egrave: "\xC8", Element: "\u2208", Emacr: "\u0112", EmptySmallSquare: "\u25FB", EmptyVerySmallSquare: "\u25AB", Eogon: "\u0118", Eopf: "\u{1D53C}", Epsilon: "\u0395", Equal: "\u2A75", EqualTilde: "\u2242", Equilibrium: "\u21CC", Escr: "\u2130", Esim: "\u2A73", Eta: "\u0397", Euml: "\xCB", Exists: "\u2203", ExponentialE: "\u2147", Fcy: "\u0424", Ffr: "\u{1D509}", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", Fopf: "\u{1D53D}", ForAll: "\u2200", Fouriertrf: "\u2131", Fscr: "\u2131", GJcy: "\u0403", GT: ">", Gamma: "\u0393", Gammad: "\u03DC", Gbreve: "\u011E", Gcedil: "\u0122", Gcirc: "\u011C", Gcy: "\u0413", Gdot: "\u0120", Gfr: "\u{1D50A}", Gg: "\u22D9", Gopf: "\u{1D53E}", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", Gt: "\u226B", HARDcy: "\u042A", Hacek: "\u02C7", Hat: "^", Hcirc: "\u0124", Hfr: "\u210C", HilbertSpace: "\u210B", Hopf: "\u210D", HorizontalLine: "\u2500", Hscr: "\u210B", Hstrok: "\u0126", HumpDownHump: "\u224E", HumpEqual: "\u224F", IEcy: "\u0415", IJlig: "\u0132", IOcy: "\u0401", Iacute: "\xCD", Icirc: "\xCE", Icy: "\u0418", Idot: "\u0130", Ifr: "\u2111", Igrave: "\xCC", Im: "\u2111", Imacr: "\u012A", ImaginaryI: "\u2148", Implies: "\u21D2", Int: "\u222C", Integral: "\u222B", Intersection: "\u22C2", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", Iogon: "\u012E", Iopf: "\u{1D540}", Iota: "\u0399", Iscr: "\u2110", Itilde: "\u0128", Iukcy: "\u0406", Iuml: "\xCF", Jcirc: "\u0134", Jcy: "\u0419", Jfr: "\u{1D50D}", Jopf: "\u{1D541}", Jscr: "\u{1D4A5}", Jsercy: "\u0408", Jukcy: "\u0404", KHcy: "\u0425", KJcy: "\u040C", Kappa: "\u039A", Kcedil: "\u0136", Kcy: "\u041A", Kfr: "\u{1D50E}", Kopf: "\u{1D542}", Kscr: "\u{1D4A6}", LJcy: "\u0409", LT: "<", Lacute: "\u0139", Lambda: "\u039B", Lang: "\u27EA", Laplacetrf: "\u2112", Larr: "\u219E", Lcaron: "\u013D", Lcedil: "\u013B", Lcy: "\u041B", LeftAngleBracket: "\u27E8", LeftArrow: "\u2190", LeftArrowBar: "\u21E4", LeftArrowRightArrow: "\u21C6", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", LeftRightArrow: "\u2194", LeftRightVector: "\u294E", LeftTee: "\u22A3", LeftTeeArrow: "\u21A4", LeftTeeVector: "\u295A", LeftTriangle: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", LeftVectorBar: "\u2952", Leftarrow: "\u21D0", Leftrightarrow: "\u21D4", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", LessLess: "\u2AA1", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", Lfr: "\u{1D50F}", Ll: "\u22D8", Lleftarrow: "\u21DA", Lmidot: "\u013F", LongLeftArrow: "\u27F5", LongLeftRightArrow: "\u27F7", LongRightArrow: "\u27F6", Longleftarrow: "\u27F8", Longleftrightarrow: "\u27FA", Longrightarrow: "\u27F9", Lopf: "\u{1D543}", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", Lscr: "\u2112", Lsh: "\u21B0", Lstrok: "\u0141", Lt: "\u226A", Map: "\u2905", Mcy: "\u041C", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", MinusPlus: "\u2213", Mopf: "\u{1D544}", Mscr: "\u2133", Mu: "\u039C", NJcy: "\u040A", Nacute: "\u0143", Ncaron: "\u0147", Ncedil: "\u0145", Ncy: "\u041D", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", Nfr: "\u{1D511}", NoBreak: "\u2060", NonBreakingSpace: "\xA0", Nopf: "\u2115", Not: "\u2AEC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangle: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", Nscr: "\u{1D4A9}", Ntilde: "\xD1", Nu: "\u039D", OElig: "\u0152", Oacute: "\xD3", Ocirc: "\xD4", Ocy: "\u041E", Odblac: "\u0150", Ofr: "\u{1D512}", Ograve: "\xD2", Omacr: "\u014C", Omega: "\u03A9", Omicron: "\u039F", Oopf: "\u{1D546}", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", Or: "\u2A54", Oscr: "\u{1D4AA}", Oslash: "\xD8", Otilde: "\xD5", Otimes: "\u2A37", Ouml: "\xD6", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", PartialD: "\u2202", Pcy: "\u041F", Pfr: "\u{1D513}", Phi: "\u03A6", Pi: "\u03A0", PlusMinus: "\xB1", Poincareplane: "\u210C", Popf: "\u2119", Pr: "\u2ABB", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", Prime: "\u2033", Product: "\u220F", Proportion: "\u2237", Proportional: "\u221D", Pscr: "\u{1D4AB}", Psi: "\u03A8", QUOT: '"', Qfr: "\u{1D514}", Qopf: "\u211A", Qscr: "\u{1D4AC}", RBarr: "\u2910", REG: "\xAE", Racute: "\u0154", Rang: "\u27EB", Rarr: "\u21A0", Rarrtl: "\u2916", Rcaron: "\u0158", Rcedil: "\u0156", Rcy: "\u0420", Re: "\u211C", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", Rfr: "\u211C", Rho: "\u03A1", RightAngleBracket: "\u27E9", RightArrow: "\u2192", RightArrowBar: "\u21E5", RightArrowLeftArrow: "\u21C4", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", RightTee: "\u22A2", RightTeeArrow: "\u21A6", RightTeeVector: "\u295B", RightTriangle: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", RightVectorBar: "\u2953", Rightarrow: "\u21D2", Ropf: "\u211D", RoundImplies: "\u2970", Rrightarrow: "\u21DB", Rscr: "\u211B", Rsh: "\u21B1", RuleDelayed: "\u29F4", SHCHcy: "\u0429", SHcy: "\u0428", SOFTcy: "\u042C", Sacute: "\u015A", Sc: "\u2ABC", Scaron: "\u0160", Scedil: "\u015E", Scirc: "\u015C", Scy: "\u0421", Sfr: "\u{1D516}", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", Sigma: "\u03A3", SmallCircle: "\u2218", Sopf: "\u{1D54A}", Sqrt: "\u221A", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", Sscr: "\u{1D4AE}", Star: "\u22C6", Sub: "\u22D0", Subset: "\u22D0", SubsetEqual: "\u2286", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", SuchThat: "\u220B", Sum: "\u2211", Sup: "\u22D1", Superset: "\u2283", SupersetEqual: "\u2287", Supset: "\u22D1", THORN: "\xDE", TRADE: "\u2122", TSHcy: "\u040B", TScy: "\u0426", Tab: "	", Tau: "\u03A4", Tcaron: "\u0164", Tcedil: "\u0162", Tcy: "\u0422", Tfr: "\u{1D517}", Therefore: "\u2234", Theta: "\u0398", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", Topf: "\u{1D54B}", TripleDot: "\u20DB", Tscr: "\u{1D4AF}", Tstrok: "\u0166", Uacute: "\xDA", Uarr: "\u219F", Uarrocir: "\u2949", Ubrcy: "\u040E", Ubreve: "\u016C", Ucirc: "\xDB", Ucy: "\u0423", Udblac: "\u0170", Ufr: "\u{1D518}", Ugrave: "\xD9", Umacr: "\u016A", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", Uopf: "\u{1D54C}", UpArrow: "\u2191", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", UpDownArrow: "\u2195", UpEquilibrium: "\u296E", UpTee: "\u22A5", UpTeeArrow: "\u21A5", Uparrow: "\u21D1", Updownarrow: "\u21D5", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", Upsi: "\u03D2", Upsilon: "\u03A5", Uring: "\u016E", Uscr: "\u{1D4B0}", Utilde: "\u0168", Uuml: "\xDC", VDash: "\u22AB", Vbar: "\u2AEB", Vcy: "\u0412", Vdash: "\u22A9", Vdashl: "\u2AE6", Vee: "\u22C1", Verbar: "\u2016", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", Vopf: "\u{1D54D}", Vscr: "\u{1D4B1}", Vvdash: "\u22AA", Wcirc: "\u0174", Wedge: "\u22C0", Wfr: "\u{1D51A}", Wopf: "\u{1D54E}", Wscr: "\u{1D4B2}", Xfr: "\u{1D51B}", Xi: "\u039E", Xopf: "\u{1D54F}", Xscr: "\u{1D4B3}", YAcy: "\u042F", YIcy: "\u0407", YUcy: "\u042E", Yacute: "\xDD", Ycirc: "\u0176", Ycy: "\u042B", Yfr: "\u{1D51C}", Yopf: "\u{1D550}", Yscr: "\u{1D4B4}", Yuml: "\u0178", ZHcy: "\u0416", Zacute: "\u0179", Zcaron: "\u017D", Zcy: "\u0417", Zdot: "\u017B", ZeroWidthSpace: "\u200B", Zeta: "\u0396", Zfr: "\u2128", Zopf: "\u2124", Zscr: "\u{1D4B5}", aacute: "\xE1", abreve: "\u0103", ac: "\u223E", acE: "\u223E\u0333", acd: "\u223F", acirc: "\xE2", acute: "\xB4", acy: "\u0430", aelig: "\xE6", af: "\u2061", afr: "\u{1D51E}", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", alpha: "\u03B1", amacr: "\u0101", amalg: "\u2A3F", amp: "&", and: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsd: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", aogon: "\u0105", aopf: "\u{1D552}", ap: "\u2248", apE: "\u2A70", apacir: "\u2A6F", ape: "\u224A", apid: "\u224B", apos: "'", approx: "\u2248", approxeq: "\u224A", aring: "\xE5", ascr: "\u{1D4B6}", ast: "*", asymp: "\u2248", asympeq: "\u224D", atilde: "\xE3", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", bNot: "\u2AED", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", barvee: "\u22BD", barwed: "\u2305", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", beta: "\u03B2", beth: "\u2136", between: "\u226C", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bnot: "\u2310", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxDL: "\u2557", boxDR: "\u2554", boxDl: "\u2556", boxDr: "\u2553", boxH: "\u2550", boxHD: "\u2566", boxHU: "\u2569", boxHd: "\u2564", boxHu: "\u2567", boxUL: "\u255D", boxUR: "\u255A", boxUl: "\u255C", boxUr: "\u2559", boxV: "\u2551", boxVH: "\u256C", boxVL: "\u2563", boxVR: "\u2560", boxVh: "\u256B", boxVl: "\u2562", boxVr: "\u255F", boxbox: "\u29C9", boxdL: "\u2555", boxdR: "\u2552", boxdl: "\u2510", boxdr: "\u250C", boxh: "\u2500", boxhD: "\u2565", boxhU: "\u2568", boxhd: "\u252C", boxhu: "\u2534", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxuL: "\u255B", boxuR: "\u2558", boxul: "\u2518", boxur: "\u2514", boxv: "\u2502", boxvH: "\u256A", boxvL: "\u2561", boxvR: "\u255E", boxvh: "\u253C", boxvl: "\u2524", boxvr: "\u251C", bprime: "\u2035", breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", bumpeq: "\u224F", cacute: "\u0107", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", ccaps: "\u2A4D", ccaron: "\u010D", ccedil: "\xE7", ccirc: "\u0109", ccups: "\u2A4C", ccupssm: "\u2A50", cdot: "\u010B", cedil: "\xB8", cemptyv: "\u29B2", cent: "\xA2", centerdot: "\xB7", cfr: "\u{1D520}", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", chi: "\u03C7", cir: "\u25CB", cirE: "\u29C3", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledR: "\xAE", circledS: "\u24C8", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", clubs: "\u2663", clubsuit: "\u2663", colon: ":", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", conint: "\u222E", copf: "\u{1D554}", coprod: "\u2210", copy: "\xA9", copysr: "\u2117", crarr: "\u21B5", cross: "\u2717", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cup: "\u222A", cupbrcap: "\u2A48", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dArr: "\u21D3", dHar: "\u2965", dagger: "\u2020", daleth: "\u2138", darr: "\u2193", dash: "\u2010", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", dcaron: "\u010F", dcy: "\u0434", dd: "\u2146", ddagger: "\u2021", ddarr: "\u21CA", ddotseq: "\u2A77", deg: "\xB0", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", dfr: "\u{1D521}", dharl: "\u21C3", dharr: "\u21C2", diam: "\u22C4", diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", dopf: "\u{1D555}", dot: "\u02D9", doteq: "\u2250", doteqdot: "\u2251", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", downarrow: "\u2193", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", dscr: "\u{1D4B9}", dscy: "\u0455", dsol: "\u29F6", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", dzcy: "\u045F", dzigrarr: "\u27FF", eDDot: "\u2A77", eDot: "\u2251", eacute: "\xE9", easter: "\u2A6E", ecaron: "\u011B", ecir: "\u2256", ecirc: "\xEA", ecolon: "\u2255", ecy: "\u044D", edot: "\u0117", ee: "\u2147", efDot: "\u2252", efr: "\u{1D522}", eg: "\u2A9A", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", emptyv: "\u2205", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", eng: "\u014B", ensp: "\u2002", eogon: "\u0119", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", equals: "=", equest: "\u225F", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erDot: "\u2253", erarr: "\u2971", escr: "\u212F", esdot: "\u2250", esim: "\u2242", eta: "\u03B7", eth: "\xF0", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", expectation: "\u2130", exponentiale: "\u2147", fallingdotseq: "\u2252", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", ffr: "\u{1D523}", filig: "\uFB01", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", fopf: "\u{1D557}", forall: "\u2200", fork: "\u22D4", forkv: "\u2AD9", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", gE: "\u2267", gEl: "\u2A8C", gacute: "\u01F5", gamma: "\u03B3", gammad: "\u03DD", gap: "\u2A86", gbreve: "\u011F", gcirc: "\u011D", gcy: "\u0433", gdot: "\u0121", ge: "\u2265", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", ges: "\u2A7E", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", gfr: "\u{1D524}", gg: "\u226B", ggg: "\u22D9", gimel: "\u2137", gjcy: "\u0453", gl: "\u2277", glE: "\u2A92", gla: "\u2AA5", glj: "\u2AA4", gnE: "\u2269", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", gopf: "\u{1D558}", grave: "`", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gt: ">", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", hArr: "\u21D4", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", hardcy: "\u044A", harr: "\u2194", harrcir: "\u2948", harrw: "\u21AD", hbar: "\u210F", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", horbar: "\u2015", hscr: "\u{1D4BD}", hslash: "\u210F", hstrok: "\u0127", hybull: "\u2043", hyphen: "\u2010", iacute: "\xED", ic: "\u2063", icirc: "\xEE", icy: "\u0438", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", ijlig: "\u0133", imacr: "\u012B", image: "\u2111", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", imof: "\u22B7", imped: "\u01B5", in: "\u2208", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", int: "\u222B", intcal: "\u22BA", integers: "\u2124", intercal: "\u22BA", intlarhk: "\u2A17", intprod: "\u2A3C", iocy: "\u0451", iogon: "\u012F", iopf: "\u{1D55A}", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", isin: "\u2208", isinE: "\u22F9", isindot: "\u22F5", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", itilde: "\u0129", iukcy: "\u0456", iuml: "\xEF", jcirc: "\u0135", jcy: "\u0439", jfr: "\u{1D527}", jmath: "\u0237", jopf: "\u{1D55B}", jscr: "\u{1D4BF}", jsercy: "\u0458", jukcy: "\u0454", kappa: "\u03BA", kappav: "\u03F0", kcedil: "\u0137", kcy: "\u043A", kfr: "\u{1D528}", kgreen: "\u0138", khcy: "\u0445", kjcy: "\u045C", kopf: "\u{1D55C}", kscr: "\u{1D4C0}", lAarr: "\u21DA", lArr: "\u21D0", lAtail: "\u291B", lBarr: "\u290E", lE: "\u2266", lEg: "\u2A8B", lHar: "\u2962", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", lambda: "\u03BB", lang: "\u27E8", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", laquo: "\xAB", larr: "\u2190", larrb: "\u21E4", larrbfs: "\u291F", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", lat: "\u2AAB", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", lcaron: "\u013E", lcedil: "\u013C", lceil: "\u2308", lcub: "{", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", leftarrow: "\u2190", leftarrowtail: "\u21A2", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", leftthreetimes: "\u22CB", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", les: "\u2A7D", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", lessgtr: "\u2276", lesssim: "\u2272", lfisht: "\u297C", lfloor: "\u230A", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", ljcy: "\u0459", ll: "\u226A", llarr: "\u21C7", llcorner: "\u231E", llhard: "\u296B", lltri: "\u25FA", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnE: "\u2268", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", longleftrightarrow: "\u27F7", longmapsto: "\u27FC", longrightarrow: "\u27F6", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", lstrok: "\u0142", lt: "<", ltcc: "\u2AA6", ltcir: "\u2A79", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltrPar: "\u2996", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", mDDot: "\u223A", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", mcy: "\u043C", mdash: "\u2014", measuredangle: "\u2221", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", mid: "\u2223", midast: "*", midcir: "\u2AF0", middot: "\xB7", minus: "\u2212", minusb: "\u229F", minusd: "\u2238", minusdu: "\u2A2A", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", mstpos: "\u223E", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nGg: "\u22D9\u0338", nGt: "\u226B\u20D2", nGtv: "\u226B\u0338", nLeftarrow: "\u21CD", nLeftrightarrow: "\u21CE", nLl: "\u22D8\u0338", nLt: "\u226A\u20D2", nLtv: "\u226A\u0338", nRightarrow: "\u21CF", nVDash: "\u22AF", nVdash: "\u22AE", nabla: "\u2207", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natur: "\u266E", natural: "\u266E", naturals: "\u2115", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", ncaron: "\u0148", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", ncy: "\u043D", ndash: "\u2013", ne: "\u2260", neArr: "\u21D7", nearhk: "\u2924", nearr: "\u2197", nearrow: "\u2197", nedot: "\u2250\u0338", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", nexist: "\u2204", nexists: "\u2204", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", ngsim: "\u2275", ngt: "\u226F", ngtr: "\u226F", nhArr: "\u21CE", nharr: "\u21AE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", njcy: "\u045A", nlArr: "\u21CD", nlE: "\u2266\u0338", nlarr: "\u219A", nldr: "\u2025", nle: "\u2270", nleftarrow: "\u219A", nleftrightarrow: "\u21AE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nlsim: "\u2274", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nmid: "\u2224", nopf: "\u{1D55F}", not: "\xAC", notin: "\u2209", notinE: "\u22F9\u0338", notindot: "\u22F5\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", npar: "\u2226", nparallel: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", npre: "\u2AAF\u0338", nprec: "\u2280", npreceq: "\u2AAF\u0338", nrArr: "\u21CF", nrarr: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvDash: "\u22AD", nvHarr: "\u2904", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwArr: "\u21D6", nwarhk: "\u2923", nwarr: "\u2196", nwarrow: "\u2196", nwnear: "\u2927", oS: "\u24C8", oacute: "\xF3", oast: "\u229B", ocir: "\u229A", ocirc: "\xF4", ocy: "\u043E", odash: "\u229D", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", oelig: "\u0153", ofcir: "\u29BF", ofr: "\u{1D52C}", ogon: "\u02DB", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", omacr: "\u014D", omega: "\u03C9", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", oopf: "\u{1D560}", opar: "\u29B7", operp: "\u29B9", oplus: "\u2295", or: "\u2228", orarr: "\u21BB", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oscr: "\u2134", oslash: "\xF8", osol: "\u2298", otilde: "\xF5", otimes: "\u2297", otimesas: "\u2A36", ouml: "\xF6", ovbar: "\u233D", par: "\u2225", para: "\xB6", parallel: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", pfr: "\u{1D52D}", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plus: "+", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", pointint: "\u2A15", popf: "\u{1D561}", pound: "\xA3", pr: "\u227A", prE: "\u2AB3", prap: "\u2AB7", prcue: "\u227C", pre: "\u2AAF", prec: "\u227A", precapprox: "\u2AB7", preccurlyeq: "\u227C", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", precsim: "\u227E", prime: "\u2032", primes: "\u2119", prnE: "\u2AB5", prnap: "\u2AB9", prnsim: "\u22E8", prod: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", pscr: "\u{1D4C5}", psi: "\u03C8", puncsp: "\u2008", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", qprime: "\u2057", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', rAarr: "\u21DB", rArr: "\u21D2", rAtail: "\u291C", rBarr: "\u290F", rHar: "\u2964", race: "\u223D\u0331", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", rarr: "\u2192", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", rcaron: "\u0159", rcedil: "\u0157", rceil: "\u2309", rcub: "}", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", rect: "\u25AD", reg: "\xAE", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", rho: "\u03C1", rhov: "\u03F1", rightarrow: "\u2192", rightarrowtail: "\u21A3", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", rightthreetimes: "\u22CC", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", rsaquo: "\u203A", rscr: "\u{1D4C7}", rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", ruluhar: "\u2968", rx: "\u211E", sacute: "\u015B", sbquo: "\u201A", sc: "\u227B", scE: "\u2AB4", scap: "\u2AB8", scaron: "\u0161", sccue: "\u227D", sce: "\u2AB0", scedil: "\u015F", scirc: "\u015D", scnE: "\u2AB6", scnap: "\u2ABA", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", scy: "\u0441", sdot: "\u22C5", sdotb: "\u22A1", sdote: "\u2A66", seArr: "\u21D8", searhk: "\u2925", searr: "\u2198", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", shchcy: "\u0449", shcy: "\u0448", shortmid: "\u2223", shortparallel: "\u2225", shy: "\xAD", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", squ: "\u25A1", square: "\u25A1", squarf: "\u25AA", squf: "\u25AA", srarr: "\u2192", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", subE: "\u2AC5", subdot: "\u2ABD", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", subseteq: "\u2286", subseteqq: "\u2AC5", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succ: "\u227B", succapprox: "\u2AB8", succcurlyeq: "\u227D", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", supE: "\u2AC6", supdot: "\u2ABE", supdsub: "\u2AD8", supe: "\u2287", supedot: "\u2AC4", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swArr: "\u21D9", swarhk: "\u2926", swarr: "\u2199", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", target: "\u2316", tau: "\u03C4", tbrk: "\u23B4", tcaron: "\u0165", tcedil: "\u0163", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", thorn: "\xFE", tilde: "\u02DC", times: "\xD7", timesb: "\u22A0", timesbar: "\u2A31", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", top: "\u22A4", topbot: "\u2336", topcir: "\u2AF1", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", tscr: "\u{1D4C9}", tscy: "\u0446", tshcy: "\u045B", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", uArr: "\u21D1", uHar: "\u2963", uacute: "\xFA", uarr: "\u2191", ubrcy: "\u045E", ubreve: "\u016D", ucirc: "\xFB", ucy: "\u0443", udarr: "\u21C5", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", ufr: "\u{1D532}", ugrave: "\xF9", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", umacr: "\u016B", uml: "\xA8", uogon: "\u0173", uopf: "\u{1D566}", uparrow: "\u2191", updownarrow: "\u2195", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", upsi: "\u03C5", upsih: "\u03D2", upsilon: "\u03C5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", uring: "\u016F", urtri: "\u25F9", uscr: "\u{1D4CA}", utdot: "\u22F0", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", uuml: "\xFC", uwangle: "\u29A7", vArr: "\u21D5", vBar: "\u2AE8", vBarv: "\u2AE9", vDash: "\u22A8", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vcy: "\u0432", vdash: "\u22A2", vee: "\u2228", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", vert: "|", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", vzigzag: "\u299A", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", wedgeq: "\u2259", weierp: "\u2118", wfr: "\u{1D534}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", xfr: "\u{1D535}", xhArr: "\u27FA", xharr: "\u27F7", xi: "\u03BE", xlArr: "\u27F8", xlarr: "\u27F5", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrArr: "\u27F9", xrarr: "\u27F6", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", yacute: "\xFD", yacy: "\u044F", ycirc: "\u0177", ycy: "\u044B", yen: "\xA5", yfr: "\u{1D536}", yicy: "\u0457", yopf: "\u{1D56A}", yscr: "\u{1D4CE}", yucy: "\u044E", yuml: "\xFF", zacute: "\u017A", zcaron: "\u017E", zcy: "\u0437", zdot: "\u017C", zeetrf: "\u2128", zeta: "\u03B6", zfr: "\u{1D537}", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
var q = U("characterReference", (0, function(b, a, e) {
  var c = this;
  let d = [0, 0, 0];
  var u2 = function(j3) {
    if (59 === j3 && d[0] > 0) {
      var l3 = b.exit("characterReferenceValue");
      if (0 == d[2] && !_a(y(c.sliceSerialize(l3)))) return e(j3);
      b.enter("characterReferenceMarker"), b.consume(j3), b.exit("characterReferenceMarker"), b.exit("characterReference");
      return a;
    }
    if (Cd(d[2], j3) && d[0] < d[1]) {
      var g2 = d[0] + 1 | 0;
      d[0] = g2, b.consume(j3);
      return u2;
    }
    return e(j3);
  };
  let j2 = function(a2) {
    if (88 === a2 || 120 === a2) return b.enter("characterReferenceMarkerHexadecimal"), b.consume(a2), b.exit("characterReferenceMarkerHexadecimal"), b.enter("characterReferenceValue"), d[1] = 6, d[2] = 1, u2;
    b.enter("characterReferenceValue"), d[1] = 7, d[2] = 2;
    return u2(a2);
  }, l2 = function(a2) {
    if (35 === a2) return b.enter("characterReferenceMarkerNumeric"), b.consume(a2), b.exit("characterReferenceMarkerNumeric"), j2;
    b.enter("characterReferenceValue"), d[1] = 31, d[2] = 0;
    return u2(a2);
  };
  return function(a2) {
    b.enter("characterReference"), b.enter("characterReferenceMarker"), b.consume(a2), b.exit("characterReferenceMarker");
    return l2;
  };
}));
var Ka = R((0, function(b, a, e) {
  var d = this;
  let u2 = function(b2) {
    return d.parser.lazy[d.now().line] ? e(b2) : a(b2);
  };
  return function(a2) {
    if (A(a2)) return e(a2);
    b.enter("lineEnding"), b.consume(a2), b.exit("lineEnding");
    return u2;
  };
}));
Ka.partial = f;
var r = { name: "codeFenced", tokenize: function(b, a, e) {
  var d, f2, c, l2, g2 = this, i2 = 0, j2 = 0, u2 = 0;
  let h2 = R(function(b2, a2, e2) {
    var d2 = 0;
    let c2 = function(d3) {
      return A(d3) || B(d3) ? (b2.exit("codeFencedFence"), a2(d3)) : e2(d3);
    };
    var l3 = function(a3) {
      return a3 == u2 ? (d2 = d2 + 1 | 0, b2.consume(a3), l3) : d2 >= j2 ? (b2.exit("codeFencedFenceSequence"), E(a3) ? H(b2, c2, "whitespace", 0)(a3) : c2(a3)) : e2(a3);
    };
    let i3 = function(a3) {
      return a3 == u2 ? (b2.enter("codeFencedFenceSequence"), l3(a3)) : e2(a3);
    }, r3 = function(a3) {
      b2.enter("codeFencedFence");
      if (E(a3)) {
        var e3 = P(g2.parser.constructs.disable.null, "codeIndented") ? 0 : 4;
        return H(b2, i3, "linePrefix", e3)(a3);
      }
      return i3(a3);
    };
    return function(a3) {
      b2.enter("lineEnding"), b2.consume(a3), b2.exit("lineEnding");
      return r3;
    };
  });
  h2.partial = true;
  let r2 = function(e2) {
    b.exit("codeFenced");
    return a(e2);
  };
  var p2 = function(a2) {
    if (A(a2) || B(a2)) return b.exit("codeFlowValue"), c(a2);
    b.consume(a2);
    return p2;
  };
  c = function(a2) {
    if (A(a2) || B(a2)) return b.check(Ka, l2, r2)(a2);
    b.enter("codeFlowValue");
    return p2(a2);
  };
  let q2 = function(a2) {
    return i2 > 0 && E(a2) ? H(b, c, "linePrefix", i2 + 1)(a2) : c(a2);
  }, k2 = function(a2) {
    b.enter("lineEnding"), b.consume(a2), b.exit("lineEnding");
    return q2;
  };
  l2 = function(a2) {
    return b.attempt(h2, r2, k2)(a2);
  };
  var m2 = function(a2) {
    if (A(a2) || B(a2)) return b.exit("chunkString"), b.exit("codeFencedFenceInfo"), d(a2);
    if (E(a2)) return b.exit("chunkString"), b.exit("codeFencedFenceInfo"), H(b, f2, "whitespace", 0)(a2);
    if (96 === a2 && a2 == u2) return e(a2);
    b.consume(a2);
    return m2;
  }, w2 = function(a2) {
    if (A(a2) || B(a2)) return b.exit("chunkString"), b.exit("codeFencedFenceMeta"), d(a2);
    if (96 === a2 && a2 == u2) return e(a2);
    b.consume(a2);
    return w2;
  };
  f2 = function(a2) {
    if (A(a2) || B(a2)) return d(a2);
    b.enter("codeFencedFenceMeta");
    var e2 = { contentType: "string" };
    b.enter("chunkString", e2);
    return w2(a2);
  }, d = function(e2) {
    if (A(e2) || B(e2)) return b.exit("codeFencedFence"), g2.interrupt ? a(e2) : b.check(Ka, l2, r2)(e2);
    b.enter("codeFencedFenceInfo");
    var d2 = { contentType: "string" };
    b.enter("chunkString", d2);
    return m2(e2);
  };
  var t2 = function(a2) {
    if (a2 == u2) return j2 = j2 + 1 | 0, b.consume(a2), t2;
    if (j2 < 3) return e(a2);
    b.exit("codeFencedFenceSequence");
    return E(a2) ? H(b, d, "whitespace", 0)(a2) : d(a2);
  };
  return function(a2) {
    var e2 = g2.events, d2 = e2[z(e2) - 1];
    if (d2) {
      e2 = d2[1];
      var c2 = "linePrefix" == e2.type;
    } else {
      c2 = false;
    }
    c2 ? (e2 = d2[2], c2 = y(e2.sliceSerialize.call(d2[2], d2[1], true)).length) : c2 = 0;
    i2 = c2, u2 = a2 | 0, b.enter("codeFenced"), b.enter("codeFencedFence"), b.enter("codeFencedFenceSequence");
    return t2(a2);
  };
}, concrete: f };
var ub = R((0, function(b, a, e) {
  var d, u2 = this;
  let c = function(b2) {
    var c2 = u2.events, j2 = c2[z(c2) - 1];
    if (j2) {
      c2 = j2[1];
      var l2 = "linePrefix" == c2.type;
    } else {
      l2 = false;
    }
    l2 ? (c2 = j2[2], l2 = y(c2.sliceSerialize.call(j2[2], j2[1], true)).length >= 4) : l2 = false;
    return l2 ? a(b2) : B(b2) ? d(b2) : e(b2);
  };
  d = function(a2) {
    return u2.parser.lazy[u2.now().line] ? e(a2) : B(a2) ? (b.enter("lineEnding"), b.consume(a2), b.exit("lineEnding"), d) : H(b, c, "linePrefix", 5)(a2);
  };
  return d;
}));
ub.partial = f, g = U("codeIndented", (0, function(b, a, e) {
  var d, j2 = this, u2 = function(a2) {
    if (A(a2) || B(a2)) return b.exit("codeFlowValue"), d(a2);
    b.consume(a2);
    return u2;
  };
  let c = function(e2) {
    b.exit("codeIndented");
    return a(e2);
  };
  d = function(a2) {
    if (A(a2)) return c(a2);
    if (B(a2)) return b.attempt(ub, d, c)(a2);
    b.enter("codeFlowValue");
    return u2(a2);
  };
  let l2 = function(b2) {
    var a2 = j2.events, u3 = a2[z(a2) - 1];
    if (u3) {
      a2 = u3[1];
      var c2 = "linePrefix" == a2.type;
    } else {
      c2 = false;
    }
    c2 ? (a2 = u3[2], c2 = y(a2.sliceSerialize.call(u3[2], u3[1], true)).length >= 4) : c2 = false;
    return c2 ? d(b2) : e(b2);
  };
  return function(a2) {
    b.enter("codeIndented");
    return H(b, l2, "linePrefix", 5)(a2);
  };
}));
var x = { name: "codeText", tokenize: function(b, a, e) {
  var j2, d, l2 = 0, u2 = 0, c = function(a2) {
    if (A(a2) || 32 === a2 || 96 === a2 || B(a2)) return b.exit("codeTextData"), d(a2);
    b.consume(a2);
    return c;
  }, g2 = function(e2) {
    if (96 === e2) return b.consume(e2), u2++, g2;
    if (u2 == l2) return b.exit("codeTextSequence"), b.exit("codeText"), a(e2);
    j2.type = "codeTextData";
    return c(e2);
  };
  d = function(a2) {
    if (A(a2)) return e(a2);
    if (32 === a2) return b.enter("space"), b.consume(a2), b.exit("space"), d;
    if (96 === a2) return j2 = b.enter("codeTextSequence"), u2 = 0, g2(a2);
    if (B(a2)) return b.enter("lineEnding"), b.consume(a2), b.exit("lineEnding"), d;
    b.enter("codeTextData");
    return c(a2);
  };
  var i2 = function(a2) {
    if (96 === a2) return b.consume(a2), l2++, i2;
    b.exit("codeTextSequence");
    return d(a2);
  };
  return function(a2) {
    b.enter("codeText"), b.enter("codeTextSequence");
    return i2(a2);
  };
}, previous: function(b) {
  if (96 !== b) return true;
  b = this.events;
  var a = b[z(b) - 1][1];
  return "characterEscape" == a.type;
}, resolve: function(b, a) {
  var d = z(b) - 4 | 0, e = b[3][1];
  "lineEnding" == e.type ? e = true : (a = b[3][1], e = "space" == a.type);
  e ? (e = b[d][1], "lineEnding" == e.type ? e = true : (a = b[d][1], e = "space" == a.type)) : e = false;
  if (e) for (e = 3; ; ) {
    if ((e + 1 | 0) >= d) {
      e = 3;
      break;
    }
    e++;
    a = b[e][1];
    if ("codeTextData" == a.type) {
      e = b[3], a = e[1], a.type = "codeTextPadding", b[d][1].type = "codeTextPadding", d = a = d - 2 | 0, e = 5;
      break;
    }
  }
  else {
    e = 3;
  }
  a = d + 1 | 0;
  e--, d = -1;
  for (; e < a; ) {
    e++;
    if (d < 0) e != a && "lineEnding" != b[e][1].type && (d = e);
    else if (e == a || "lineEnding" == b[e][1].type) {
      var u2 = b[d][1];
      u2.type = "codeTextData", e != (d + 2 | 0) && (u2 = b[d][1], u2.end = b[e - 1][1].end, u2 = d + 2 | 0, d = (e - d | 0) - 2 | 0, b.splice(u2, d), a = a - d | 0, e = u2), d = -1;
    }
  }
  return b;
} };
var vb = (0, function(b, a, e, d, u2, c) {
  var y2 = this;
  let f2 = d + "", i2 = u2 + "", h2 = c + "";
  var j2, l2, g2 = 0, r2 = false;
  let p2 = function(a2) {
    return 91 === a2 || 92 === a2 || 93 === a2 ? (b.consume(a2), g2++, j2) : j2(a2);
  };
  j2 = function(a2) {
    if (A(a2) || 91 === a2 || 93 === a2 || B(a2)) return b.exit("chunkString"), l2(a2);
    var e2 = g2;
    g2++;
    if (e2 > 999) return b.exit("chunkString"), l2(a2);
    b.consume(a2), r2 = r2 || !E(a2);
    return 92 === a2 ? p2 : j2;
  }, l2 = function(d2) {
    if (g2 > 999 || A(d2) || 91 === d2 || 93 === d2 && !r2 || 94 === d2 && 0 == g2 && I(y2.parser.constructs, "_hiddenFootnoteSupport")) return e(d2);
    if (93 === d2) return b.exit(h2), b.enter(i2), b.consume(d2), b.exit(i2), b.exit(f2), a;
    if (B(d2)) return b.enter("lineEnding"), b.consume(d2), b.exit("lineEnding"), l2;
    var u3 = { contentType: "string" };
    b.enter("chunkString", u3);
    return j2(d2);
  };
  return function(a2) {
    b.enter(f2), b.enter(i2), b.consume(a2), b.exit(i2), b.enter(h2);
    return l2;
  };
});
var Dc = /[\t\n\r ]+/g;
var Ec = /^ | $/g;
var wb = R(function(b, a, e) {
  let d = function(b2) {
    return A(b2) || B(b2) ? a(b2) : e(b2);
  }, u2 = function(a2) {
    return E(a2) ? H(b, d, "whitespace", 0)(a2) : d(a2);
  }, c = function(a2) {
    return bc(b, u2, e, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a2);
  };
  return function(a2) {
    return S(a2) ? ua(b, c)(a2) : e(a2);
  };
});
wb.partial = f;
var oe = U("definition", (0, function(b, a, e) {
  var d = this, u2 = de;
  let c = function(c2) {
    return A(c2) || B(c2) ? (b.exit("definition"), d.parser.defined.push(u2), a(c2)) : e(c2);
  }, j2 = function(a2) {
    return E(a2) ? H(b, c, "whitespace", 0)(a2) : c(a2);
  }, g2 = function(a2) {
    return b.attempt(wb, j2, j2)(a2);
  }, l2 = function(a2) {
    return ac(b, g2, e, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString", 0)(a2);
  }, i2 = function(a2) {
    return S(a2) ? ua(b, l2)(a2) : l2(a2);
  }, r2 = function(a2) {
    var c2 = d.events, j3 = d.sliceSerialize;
    j3 = y(d.sliceSerialize(c2[z(c2) - 1][1])), u2 = ma(y(j3.slice(1, -1)));
    return 58 === a2 ? (b.enter("definitionMarker"), b.consume(a2), b.exit("definitionMarker"), i2) : e(a2);
  }, f2 = function(a2) {
    let u3 = [b, r2, e, "definitionLabel", "definitionLabelMarker", "definitionLabelString"];
    return vb.apply(d, u3)(a2);
  };
  return function(a2) {
    b.enter("definition");
    return f2(a2);
  };
}));
var pe = U("hardBreakEscape", function(b, a, e) {
  let d = function(d2) {
    return B(d2) ? (b.exit("hardBreakEscape"), a(d2)) : e(d2);
  };
  return function(a2) {
    b.enter("hardBreakEscape"), b.consume(a2);
    return d;
  };
});
var qe = { name: "headingAtx", tokenize: function(b, a, e) {
  var d, u2 = 0, c = function(a2) {
    if (A(a2) || 35 === a2 || S(a2)) return b.exit("atxHeadingText"), d(a2);
    b.consume(a2);
    return c;
  }, j2 = function(a2) {
    if (35 === a2) return b.consume(a2), j2;
    b.exit("atxHeadingSequence");
    return d(a2);
  };
  d = function(e2) {
    if (35 === e2) return b.enter("atxHeadingSequence"), j2(e2);
    if (A(e2) || B(e2)) return b.exit("atxHeading"), a(e2);
    if (E(e2)) return H(b, d, "whitespace", 0)(e2);
    b.enter("atxHeadingText");
    return c(e2);
  };
  var l2 = function(a2) {
    return 35 === a2 && u2 < 6 ? (u2 = u2 + 1 | 0, b.consume(a2), l2) : A(a2) || S(a2) ? (b.exit("atxHeadingSequence"), d(a2)) : e(a2);
  };
  let g2 = function(a2) {
    b.enter("atxHeadingSequence");
    return l2(a2);
  };
  return function(a2) {
    b.enter("atxHeading");
    return g2(a2);
  };
}, resolve: function(b, a) {
  var e = z(b) - 2 | 0, d = b[3][1];
  d = "whitespace" == d.type ? 5 : 3, (e - 2 | 0) > d && "whitespace" == b[e][1].type && (e = e - 2 | 0);
  var u2 = b[e][1];
  "atxHeadingSequence" == u2.type && (d == (e - 1 | 0) || (e - 4 | 0) > d && "whitespace" == b[e - 2][1].type) && (e = d + 1 == e ? e - 2 | 0 : e - 4 | 0);
  if (e > d) {
    var c = { type: "atxHeadingText" }, j2 = b[d];
    c.start = j2[1].start, c.end = b[e][1].end, u2 = { type: "chunkText", start: b[d][1].start, end: b[e][1].end, contentType: "text" }, V(b, d, (e - d | 0) + 1 | 0, [["enter", c, a], ["enter", u2, a], ["exit", u2, a], ["exit", c, a]]);
  }
  return b;
} };
var Fc = "address article aside base basefont blockquote body caption center col colgroup dd details dialog dir div dl dt fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hr html iframe legend li link main menu menuitem nav noframes ol optgroup option p param search section summary table tbody td tfoot th thead title tr track ul".split(ee);
var xb = "pre script style textarea".split(ee);
h = function(b, a) {
  for (var e = z(b); --e >= 0; ) {
    if ("enter" == b[e][0]) {
      var u2 = b[e][1];
      a = "htmlFlow" == u2.type;
    } else {
      a = false;
    }
    if (a) break;
  }
  if (e > 1 && "linePrefix" == b[e - 2][1].type) {
    var d = b[e][1];
    a = e - 2 | 0, d.start = b[a][1].start, d = b[e + 1][1], d.start = b[a][1].start, b.splice(a, 2);
  }
  return b;
};
var yb = R((0, function(b, a, e) {
  var d = this;
  let u2 = function(b2) {
    return d.parser.lazy[d.now().line] ? e(b2) : a(b2);
  };
  return function(a2) {
    return B(a2) ? (b.enter("lineEnding"), b.consume(a2), b.exit("lineEnding"), u2) : e(a2);
  };
}));
yb.partial = f;
var zb = R(function(b, a, e) {
  return function(d) {
    b.enter("lineEnding"), b.consume(d), b.exit("lineEnding");
    return b.attempt(pa, a, e);
  };
});
zb.partial = f;
var re = { name: "htmlFlow", tokenize: function(b, a, e) {
  var r2, f2, k2, o2, n2, s2, g2, i2, h2, j2 = this, u2 = 0, m2 = false, l2 = de, y2 = 0, w2 = 0;
  let d = function(a2) {
    b.consume(a2);
  };
  r2 = function(e2) {
    b.exit("htmlFlow");
    return a(e2);
  };
  var p2 = function(a2) {
    if (A(a2) || B(a2)) return b.exit("htmlFlowData"), r2(a2);
    d(a2);
    return p2;
  }, c = function(a2) {
    if (45 === a2 && 2 == u2) return d(a2), o2;
    if (60 === a2 && 1 == u2) return d(a2), n2;
    if (62 === a2 && 4 == u2) return d(a2), p2;
    if (63 === a2 && 3 == u2) return d(a2), g2;
    if (93 === a2 && 5 == u2) return d(a2), s2;
    if (B(a2) && (6 == u2 || 7 == u2)) return b.exit("htmlFlowData"), b.check(zb, r2, f2)(a2);
    if (A(a2) || B(a2)) return b.exit("htmlFlowData"), f2(a2);
    d(a2);
    return c;
  };
  let J2 = function(a2) {
    b.enter("lineEnding"), d(a2), b.exit("lineEnding");
    return k2;
  };
  f2 = function(a2) {
    return b.check(yb, J2, r2)(a2);
  }, k2 = function(a2) {
    if (A(a2) || B(a2)) return f2(a2);
    b.enter("htmlFlowData");
    return c(a2);
  }, o2 = function(b2) {
    return 45 === b2 ? (d(b2), g2) : c(b2);
  };
  var z2 = function(b2) {
    if (62 === b2) return P(xb, l2.toLowerCase()) ? (d(b2), p2) : c(b2);
    if (G(Z, b2) && l2.length < 8) {
      d(b2);
      var a2 = l2;
      l2 = a2 + la(b2);
      return z2;
    }
    return c(b2);
  };
  n2 = function(b2) {
    return 47 === b2 ? (d(b2), l2 = de, z2) : c(b2);
  }, s2 = function(b2) {
    return 93 === b2 ? (d(b2), g2) : c(b2);
  }, g2 = function(b2) {
    return 62 === b2 ? (d(b2), p2) : 45 === b2 && 2 == u2 ? (d(b2), g2) : c(b2);
  };
  var v2 = function(b2) {
    return A(b2) || B(b2) ? c(b2) : E(b2) ? (d(b2), v2) : e(b2);
  };
  let t2 = function(b2) {
    return 62 === b2 ? (d(b2), v2) : e(b2);
  }, N2 = function(b2) {
    return 47 === b2 || 62 === b2 || E(b2) ? i2(b2) : e(b2);
  };
  var x2 = function(b2) {
    if (b2 == w2) return d(b2), w2 = 0, N2;
    if (A(b2) || B(b2)) return e(b2);
    d(b2);
    return x2;
  }, F2 = function(b2) {
    if (A(b2) || 34 === b2 || 39 === b2 || 47 === b2 || 60 === b2 || 61 === b2 || 62 === b2 || 96 === b2 || S(b2)) return h2(b2);
    d(b2);
    return F2;
  }, D2 = function(b2) {
    return A(b2) || 60 === b2 || 61 === b2 || 62 === b2 || 96 === b2 ? e(b2) : 34 === b2 || 39 === b2 ? (d(b2), w2 = b2 | 0, x2) : E(b2) ? (d(b2), D2) : F2(b2);
  };
  h2 = function(b2) {
    return 61 === b2 ? (d(b2), D2) : E(b2) ? (d(b2), h2) : i2(b2);
  };
  var H2 = function(b2) {
    return 45 === b2 || 46 === b2 || 58 === b2 || 95 === b2 || G(_, b2) ? (d(b2), H2) : h2(b2);
  };
  i2 = function(b2) {
    return 47 === b2 ? (d(b2), t2) : 58 === b2 || 95 === b2 || G(Z, b2) ? (d(b2), H2) : E(b2) ? (d(b2), i2) : t2(b2);
  };
  var M2 = function(b2) {
    return E(b2) ? (d(b2), M2) : t2(b2);
  };
  let C2 = function(b2) {
    return 62 === b2 ? (d(b2), j2.interrupt ? a : c) : e(b2);
  };
  var q2 = function(b2) {
    if (A(b2) || 47 === b2 || 62 === b2 || S(b2)) {
      var g3, r3 = 47 === b2, f3 = l2.toLowerCase();
      if (!r3 && !m2 && P(xb, f3)) return u2 = 1, j2.interrupt ? a(b2) : c(b2);
      if (P(Fc, f3)) return u2 = 6, r3 ? (d(b2), C2) : j2.interrupt ? a(b2) : c(b2);
      u2 = 7;
      if (j2.interrupt) {
        g3 = j2.parser.lazy;
        var h3 = !g3[j2.now().line];
      } else {
        h3 = false;
      }
      return h3 ? e(b2) : m2 ? M2(b2) : i2(b2);
    }
    if (45 === b2 || G(_, b2)) {
      d(b2);
      var y3 = l2;
      l2 = y3 + la(b2);
      return q2;
    }
    return e(b2);
  };
  let I2 = function(b2) {
    return G(Z, b2) ? (d(b2), l2 = la(b2), q2) : e(b2);
  };
  var O2 = function(b2) {
    var u3 = y2, l3 = y2;
    y2 = l3 + 1 | 0;
    return !A(b2) && Yb(b2) == "CDATA[".charCodeAt(u3) ? (d(b2), 6 == (u3 + 1 | 0) ? j2.interrupt ? a : c : O2) : e(b2);
  };
  let R2 = function(b2) {
    return 45 === b2 ? (d(b2), j2.interrupt ? a : g2) : e(b2);
  }, V2 = function(b2) {
    return 45 === b2 ? (d(b2), u2 = 2, R2) : 91 === b2 ? (d(b2), u2 = 5, y2 = 0, O2) : G(Z, b2) ? (d(b2), u2 = 4, j2.interrupt ? a : g2) : e(b2);
  }, T2 = function(b2) {
    return 33 === b2 ? (d(b2), V2) : 47 === b2 ? (d(b2), m2 = true, I2) : 63 === b2 ? (d(b2), u2 = 3, j2.interrupt ? a : g2) : G(Z, b2) ? (d(b2), l2 = la(b2), q2) : e(b2);
  };
  return function(a2) {
    b.enter("htmlFlow"), b.enter("htmlFlowData"), d(a2);
    return T2;
  };
}, concrete: f, resolveTo: h };
var se = U("htmlText", (0, function(b, a, e) {
  var u2, j2, o2, n2, h2, y2, O2 = this, p2 = 0, i2 = 0;
  let d = function(a2) {
    b.consume(a2);
  }, s2 = function(a2) {
    b.enter("htmlTextData");
    return u2(a2);
  }, J2 = function(a2) {
    if (E(a2)) {
      var e2 = P(O2.parser.constructs.disable.null, "codeIndented") ? 0 : 4;
      return H(b, s2, "linePrefix", e2)(a2);
    }
    return s2(a2);
  }, c = function(a2) {
    b.exit("htmlTextData"), b.enter("lineEnding"), d(a2), b.exit("lineEnding");
    return J2;
  }, l2 = function(u3) {
    return 62 === u3 ? (d(u3), b.exit("htmlTextData"), b.exit("htmlText"), a) : e(u3);
  }, N2 = function(b2) {
    return 47 === b2 || 62 === b2 || S(b2) ? j2(b2) : e(b2);
  };
  var z2 = function(b2) {
    if (A(b2) || 34 === b2 || 39 === b2 || 60 === b2 || 61 === b2 || 96 === b2) return e(b2);
    if (47 === b2 || 62 === b2 || S(b2)) return j2(b2);
    d(b2);
    return z2;
  }, m2 = function(b2) {
    if (b2 == p2) return d(b2), p2 = 0, N2;
    if (A(b2)) return e(b2);
    if (B(b2)) return u2 = m2, c(b2);
    d(b2);
    return m2;
  }, w2 = function(b2) {
    if (A(b2) || 60 === b2 || 61 === b2 || 62 === b2 || 96 === b2) return e(b2);
    if (34 === b2 || 39 === b2) return d(b2), p2 = b2 | 0, m2;
    if (B(b2)) return u2 = w2, c(b2);
    if (E(b2)) return d(b2), w2;
    d(b2);
    return z2;
  }, t2 = function(b2) {
    return 61 === b2 ? (d(b2), w2) : B(b2) ? (u2 = t2, c(b2)) : E(b2) ? (d(b2), t2) : j2(b2);
  }, v2 = function(b2) {
    return 45 === b2 || 46 === b2 || 58 === b2 || 95 === b2 || G(_, b2) ? (d(b2), v2) : t2(b2);
  };
  j2 = function(b2) {
    return 47 === b2 ? (d(b2), l2) : 58 === b2 || 95 === b2 || G(Z, b2) ? (d(b2), v2) : B(b2) ? (u2 = j2, c(b2)) : E(b2) ? (d(b2), j2) : l2(b2);
  };
  var x2 = function(b2) {
    return 45 === b2 || G(_, b2) ? (d(b2), x2) : 47 === b2 || 62 === b2 || S(b2) ? j2(b2) : e(b2);
  }, q2 = function(b2) {
    return B(b2) ? (u2 = q2, c(b2)) : E(b2) ? (d(b2), q2) : l2(b2);
  }, F2 = function(b2) {
    return 45 === b2 || G(_, b2) ? (d(b2), F2) : q2(b2);
  };
  let C2 = function(b2) {
    return G(Z, b2) ? (d(b2), F2) : e(b2);
  };
  var r2 = function(b2) {
    if (A(b2)) return e(b2);
    if (63 === b2) return d(b2), o2;
    if (B(b2)) return u2 = r2, c(b2);
    d(b2);
    return r2;
  };
  o2 = function(b2) {
    return 62 === b2 ? l2(b2) : r2(b2);
  };
  var k2 = function(b2) {
    if (A(b2) || 62 === b2) return l2(b2);
    if (B(b2)) return u2 = k2, c(b2);
    d(b2);
    return k2;
  }, g2 = function(b2) {
    if (A(b2)) return e(b2);
    if (93 === b2) return d(b2), n2;
    if (B(b2)) return u2 = g2, c(b2);
    d(b2);
    return g2;
  }, D2 = function(b2) {
    return 62 === b2 ? l2(b2) : 93 === b2 ? (d(b2), D2) : g2(b2);
  };
  n2 = function(b2) {
    return 93 === b2 ? (d(b2), D2) : g2(b2);
  };
  var M2 = function(b2) {
    var a2 = i2, u3 = i2;
    i2 = u3 + 1 | 0;
    return !A(b2) && Yb(b2) == "CDATA[".charCodeAt(a2) ? (d(b2), 6 == (a2 + 1 | 0) ? g2 : M2) : e(b2);
  }, f2 = function(b2) {
    if (A(b2)) return e(b2);
    if (45 === b2) return d(b2), h2;
    if (B(b2)) return u2 = f2, c(b2);
    d(b2);
    return f2;
  };
  h2 = function(b2) {
    return 45 === b2 ? (d(b2), y2) : f2(b2);
  }, y2 = function(b2) {
    return 62 === b2 ? l2(b2) : 45 === b2 ? h2(b2) : f2(b2);
  };
  let I2 = function(b2) {
    return 45 === b2 ? (d(b2), y2) : e(b2);
  }, R2 = function(b2) {
    return 45 === b2 ? (d(b2), I2) : 91 === b2 ? (d(b2), i2 = 0, M2) : G(Z, b2) ? (d(b2), k2) : e(b2);
  }, V2 = function(b2) {
    return 33 === b2 ? (d(b2), R2) : 47 === b2 ? (d(b2), C2) : 63 === b2 ? (d(b2), r2) : G(Z, b2) ? (d(b2), x2) : e(b2);
  };
  return function(a2) {
    b.enter("htmlText"), b.enter("htmlTextData"), d(a2);
    return V2;
  };
}));
h = function(b, a) {
  a = [];
  for (var u2, e, c = z(b), d = -1; ++d < c; ) u2 = b[d][1], a.push(b[d]), e = y(u2.type), ("labelImage" == e || "labelLink" == e || "labelEnd" == e) && (e = "labelImage" == e ? 4 : 2, u2.type = "data", d = d + e | 0);
  z(b) != z(a) && V(b, 0, z(b), a);
  return b;
}, k = function(b, a) {
  for (var u2, d, j2, p2, r2, h2, g2, f2, i2, m2, w2, e = z(b), c = void 0, l2 = void 0; ; ) {
    if (false) {
      g2 = 0, e = c;
      break;
    }
    e--;
    if (e < 0) {
      g2 = 0, e = c;
      break;
    }
    u2 = b[e][1];
    d = y(u2.type);
    if (c) {
      if ("link" == d || "labelLink" == d && u2._inactive) {
        g2 = 0, e = c;
        break;
      }
      "enter" == b[e][0] && "labelLink" == d && (u2._inactive = true);
    } else if (l2) {
      if ("enter" == b[e][0] && ("labelImage" == d || "labelLink" == d) && !u2._balanced) {
        if ("labelLink" != d) {
          g2 = 2;
          break;
        }
        c = e;
      }
    } else "labelEnd" == d && (l2 = e);
  }
  c = e | 0;
  l2 = l2 | 0, e = b[c][1], e = "labelLink" == e.type ? "link" : "image", d = { type: e }, p2 = b[c], d.start = J(p2[1].start), d.end = J(b[z(b) - 1][1].end);
  var t2 = J(b[c][1].start);
  u2 = { type: "label", start: t2, end: J(b[l2][1].end) }, j2 = { type: "labelText" }, r2 = c + g2 | 0, j2.start = J(b[r2 + 2][1].end), h2 = l2 - 2, j2.end = J(b[h2][1].start), g2 = [["enter", d, a], ["enter", u2, a]], e = c + 1 | 0, f2 = r2 + 3 | 0, e = W(g2, b.slice(e, f2)), f2 = [["enter", j2, a]], e = W(e, f2), i2 = a.parser.constructs.insideSpan.null, m2 = r2 + 4 | 0, w2 = l2 - 3 | 0, i2 = W(e, Xa(i2, b.slice(m2, w2), a)), e = [["exit", j2, a], b[h2], b[l2 - 1], ["exit", u2, a]], u2 = W(i2, e), j2 = l2 + 1 | 0, i2 = z(b), j2 = W(u2, b.slice(j2, i2)), u2 = [["exit", d, a]], d = W(j2, u2), V(b, c, z(b), d);
  return b;
};
var l = (0, function(b, a, e) {
  var d = this;
  let u2 = function(b2) {
    var u3 = d.events, c2 = d.sliceSerialize;
    c2 = y(d.sliceSerialize(u3[z(u3) - 1][1]));
    var j2 = ma(y(c2.slice(1, -1)));
    return P(d.parser.defined, j2) ? a(b2) : e(b2);
  }, c = function(b2) {
    return e(b2);
  };
  return function(a2) {
    let e2 = [b, u2, c, "reference", "referenceMarker", "referenceString"];
    return vb.apply(d, e2)(a2);
  };
});
var s = function(b, a, e) {
  let d = function(d2) {
    return 93 === d2 ? (b.enter("referenceMarker"), b.consume(d2), b.exit("referenceMarker"), b.exit("reference"), a) : e(d2);
  };
  return function(a2) {
    b.enter("reference"), b.enter("referenceMarker"), b.consume(a2), b.exit("referenceMarker");
    return d;
  };
};
var Gc = R(function(b, a, e) {
  let d = function(d2) {
    return 41 === d2 ? (b.enter("resourceMarker"), b.consume(d2), b.exit("resourceMarker"), b.exit("resource"), a) : e(d2);
  }, c = function(a2) {
    return S(a2) ? ua(b, d)(a2) : d(a2);
  }, j2 = function(a2) {
    return 34 === a2 || 39 === a2 || 40 === a2 ? bc(b, c, e, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(a2) : d(a2);
  }, l2 = function(b2) {
    return e(b2);
  }, g2 = function(a2) {
    return S(a2) ? ua(b, j2)(a2) : d(a2);
  }, u2 = function(a2) {
    return 41 === a2 ? d(a2) : ac(b, g2, l2, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(a2);
  }, i2 = function(a2) {
    return S(a2) ? ua(b, u2)(a2) : u2(a2);
  };
  return function(a2) {
    b.enter("resource"), b.enter("resourceMarker"), b.consume(a2), b.exit("resourceMarker");
    return i2;
  };
});
var Hc = R(l);
var Ic = R(s);
k = { name: "labelEnd", tokenize: function(b, a, e) {
  for (var c, j2 = this, u2 = z(j2.events); --u2 >= 0; ) {
    var d = j2.events[u2][1], l2 = y(d.type);
    if (("labelImage" == l2 || "labelLink" == l2) && !d._balanced) {
      c = d;
      break;
    }
  }
  var g2 = false;
  d = function(b2) {
    return a(b2);
  }, u2 = function(b2) {
    c && (c._balanced = true);
    return e(b2);
  }, l2 = function(a2) {
    return b.attempt(Ic, d, u2)(a2);
  };
  var i2 = function(a2) {
    if (40 === a2) {
      var e2 = g2 ? d : u2;
      return b.attempt(Gc, d, e2)(a2);
    }
    return 91 === a2 ? (e2 = g2 ? l2 : u2, b.attempt(Hc, d, e2)(a2)) : g2 ? d(a2) : u2(a2);
  };
  return function(a2) {
    if (!c) return e(a2);
    if (c._inactive) return u2(a2);
    var d2 = { start: c.end, end: j2.now() };
    d2 = ma(y(j2.sliceSerialize(d2))), g2 = P(j2.parser.defined, d2), b.enter("labelEnd"), b.enter("labelMarker"), b.consume(a2), b.exit("labelMarker"), b.exit("labelEnd");
    return i2;
  };
}, resolveAll: h, resolveTo: k }, s = U("labelStartImage", (0, function(b, a, e) {
  var d = this;
  let u2 = function(b2) {
    return 94 === b2 && I(d.parser.constructs, "_hiddenFootnoteSupport") ? e(b2) : a(b2);
  }, c = function(a2) {
    return 91 === a2 ? (b.enter("labelMarker"), b.consume(a2), b.exit("labelMarker"), b.exit("labelImage"), u2) : e(a2);
  };
  return function(a2) {
    b.enter("labelImage"), b.enter("labelImageMarker"), b.consume(a2), b.exit("labelImageMarker");
    return c;
  };
})), s.resolveAll = k.resolveAll;
var t = U("labelStartLink", (0, function(b, a, e) {
  var d = this;
  let u2 = function(b2) {
    return 94 === b2 && I(d.parser.constructs, "_hiddenFootnoteSupport") ? e(b2) : a(b2);
  };
  return function(a2) {
    b.enter("labelLink"), b.enter("labelMarker"), b.consume(a2), b.exit("labelMarker"), b.exit("labelLink");
    return u2;
  };
}));
t.resolveAll = k.resolveAll, l = U("lineEnding", function(b, a, e) {
  return function(e2) {
    b.enter("lineEnding"), b.consume(e2), b.exit("lineEnding");
    return H(b, a, "linePrefix", 0);
  };
});
var ya = U("thematicBreak", function(b, a, e) {
  var d, c = 0, u2 = 0, j2 = function(a2) {
    if (a2 == u2) return b.consume(a2), c++, j2;
    b.exit("thematicBreakSequence");
    return E(a2) ? H(b, d, "whitespace", 0)(a2) : d(a2);
  };
  d = function(d2) {
    return d2 == u2 ? (b.enter("thematicBreakSequence"), j2(d2)) : c >= 3 && (A(d2) || B(d2)) ? (b.exit("thematicBreak"), a(d2)) : e(d2);
  };
  let l2 = function(b2) {
    u2 = b2 | 0;
    return d(b2);
  };
  return function(a2) {
    b.enter("thematicBreak");
    return l2(a2);
  };
});
var Ab = R((0, function(b, a, e) {
  var d = this, c = P(d.parser.constructs.disable.null, "codeIndented") ? 0 : 5;
  return H(b, function(b2) {
    var u2 = d.events, j2 = z(u2), c2 = u2[j2 - 1];
    return !E(b2) && c2 && "listItemPrefixWhitespace" == c2[1].type ? a(b2) : e(b2);
  }, "listItemPrefixWhitespace", c);
}));
Ab.partial = f;
var Bb = R((0, function(b, a, e) {
  var d = this;
  return H(b, function(b2) {
    var u2 = d.events, c = u2[z(u2) - 1];
    if (c) {
      var j2 = c[1];
      u2 = "listItemIndent" == j2.type;
    } else {
      u2 = false;
    }
    u2 ? (j2 = c[2], u2 = y(j2.sliceSerialize.call(c[2], c[1], true)).length, u2 = u2 == d.containerState.size) : u2 = false;
    return u2 ? a(b2) : e(b2);
  }, "listItemIndent", +d.containerState.size + 1);
}));
Bb.partial = f;
var aa = { name: "list" };
h = function(b, a, e) {
  var d = this;
  d.containerState._closeFlow = void 0;
  let u2 = function(u3) {
    d.containerState._closeFlow = true, d.interrupt = void 0;
    var c = P(d.parser.constructs.disable.null, "codeIndented") ? 0 : 4;
    return H(b, b.attempt(aa, a, e), "linePrefix", c)(u3);
  };
  return b.check(pa, function(e2) {
    !d.containerState.furtherBlankLines && (d.containerState.furtherBlankLines = d.containerState.initialBlankLine);
    return H(b, a, "listItemIndent", +d.containerState.size + 1)(e2);
  }, function(e2) {
    if (d.containerState.furtherBlankLines || !E(e2)) return d.containerState.furtherBlankLines = void 0, d.containerState.initialBlankLine = void 0, u2(e2);
    d.containerState.furtherBlankLines = void 0, d.containerState.initialBlankLine = void 0;
    return b.attempt(Bb, a, u2)(e2);
  });
};
var u = function(b) {
  let a = b.exit;
  b.exit(this.containerState.type);
};
aa.tokenize = function(b, a, e) {
  var d = this, u2 = d.events, c = u2[z(u2) - 1], l2 = 0;
  if (c) {
    var g2 = c[1];
    u2 = "linePrefix" == g2.type;
  } else {
    u2 = false;
  }
  u2 && (u2 = c[2], l2 = y(u2.sliceSerialize.call(c[2], c[1], true)).length);
  var j2 = 0;
  c = function(e2) {
    let u3 = b.exit("listItemPrefix"), c2 = d.containerState;
    c2.size = l2 + y(d.sliceSerialize(u3, true)).length;
    return a(e2);
  }, g2 = function(a2) {
    return E(a2) ? (b.enter("listItemPrefixWhitespace"), b.consume(a2), b.exit("listItemPrefixWhitespace"), c) : e(a2);
  };
  var r2 = function(b2) {
    d.containerState.initialBlankLine = true, l2++;
    return c(b2);
  };
  u2 = function(a2) {
    b.enter("listItemMarker"), b.consume(a2), b.exit("listItemMarker"), d.containerState.marker || (d.containerState.marker = a2);
    var u3, j3 = d.interrupt ? e : r2;
    u3 = b.check;
    return b.check(pa, j3, b.attempt(Ab, c, g2));
  };
  var i2 = function(a2) {
    if (G(Ia, a2) && (j2 + 1 | 0) < 10) return j2 = j2 + 1 | 0, b.consume(a2), i2;
    var l3 = !d.interrupt || j2 < 2, c2 = d.containerState.marker, g3 = c2 ? a2 == c2 : 41 === a2 || 46 === a2;
    return l3 && g3 ? (b.exit("listItemValue"), u2(a2)) : e(a2);
  };
  return function(a2) {
    var c2 = d.containerState, j3 = c2.type ? y(c2.type) : 42 === a2 || 43 === a2 || 45 === a2 ? "listUnordered" : "listOrdered";
    if ("listUnordered" == j3 ? !c2.marker || a2 == c2.marker : G(Ia, a2)) {
      c2.type || (c2.type = j3, c2 = { _container: true }, b.enter(j3, c2));
      if ("listUnordered" == j3) {
        var l3 = b.enter;
        b.enter("listItemPrefix");
        return 42 === a2 || 45 === a2 ? b.check(ya, e, u2)(a2) : u2(a2);
      }
      if (!d.interrupt || 49 === a2) return b.enter("listItemPrefix"), b.enter("listItemValue"), i2(a2);
    }
    return e(a2);
  };
}, f = { tokenize: h }, aa.continuation = f, aa.exit = u, u = { name: "setextUnderline", tokenize: function(b, a, e) {
  var d = this, u2 = 0;
  let c = function(d2) {
    return A(d2) || B(d2) ? (b.exit("setextHeadingLine"), a(d2)) : e(d2);
  };
  var j2 = function(a2) {
    if (a2 == u2) return b.consume(a2), j2;
    b.exit("setextHeadingLineSequence");
    return E(a2) ? H(b, c, "lineSuffix", 0)(a2) : c(a2);
  };
  let l2 = function(a2) {
    b.enter("setextHeadingLineSequence");
    return j2(a2);
  };
  return function(a2) {
    for (var c2 = z(d.events); ; ) {
      if (false) {
        c2 = false;
        break;
      }
      c2--;
      if (c2 < 0) {
        c2 = false;
        break;
      }
      var g2 = d.events[c2][1], j3 = g2.type + "";
      if ("lineEnding" != j3 && "linePrefix" != j3 && "content" != j3) {
        c2 = "paragraph" == j3;
        break;
      }
    }
    j3 = d.parser.lazy;
    return !j3[d.now().line] && (!!d.interrupt || c2) ? (b.enter("setextHeadingLine"), u2 = a2 | 0, l2(a2)) : e(a2);
  };
}, resolveTo: function(b, a) {
  for (var d, u2, e = z(b), c = -1, j2 = -1; ; ) {
    if (false) {
      e = -1;
      break;
    }
    e--;
    if (e < 0) {
      e = -1;
      break;
    }
    if ("enter" == b[e][0]) {
      d = b[e][1];
      if ("content" == d.type) break;
      d = b[e][1], "paragraph" == d.type && (c = e);
    } else d = b[e][1], "content" == d.type && b.splice(e, 1), j2 < 0 && "definition" == b[e][1].type && (j2 = e);
  }
  d = { type: "setextHeading" };
  u2 = b[e], d.start = J(u2[1].start), d.end = J(b[z(b) - 1][1].end), b[c][1].type = "setextHeadingText", j2 > 0 ? (b.splice(c, 0, ["enter", d, a]), c = b[e], u2 = c[1], u2 = ["exit", u2, a], b.splice(j2 + 1 | 0, 0, u2), u2 = b[e][1], u2.end = J(b[j2][1].end)) : b[e][1] = d, b.push(["exit", d, a]);
  return b;
} }, h = {}, F(h, 42, aa), F(h, 43, aa), F(h, 45, aa);
for (f = 48; f <= 57; f++) F(h, f, aa);
F(h, 62, xa);
var v = {};
F(v, 91, oe), i = {}, F(i, -2, g), F(i, -1, g), F(i, 32, g), g = {}, F(g, 35, qe), F(g, 42, ya), m = ya, f = [], f[0] = u, f[1] = m, F(g, 45, f), F(g, 60, re), F(g, 61, u), F(g, 95, ya), F(g, 96, r), F(g, 126, r), m = {}, F(m, 38, q), F(m, 92, p), f = {}, F(f, -5, l), F(f, -4, l), F(f, -3, l), F(f, 33, s), F(f, 38, q), F(f, 42, j), l = [], l[0] = w, l[1] = se, F(f, 60, l), F(f, 91, t), l = [], l[0] = pe, l[1] = p, F(f, 92, l), F(f, 93, k), F(f, 95, j), F(f, 96, x), k = [], k[0] = j, k[1] = o, l = { null: k }, j = [], j[0] = 42, j[1] = 95, k = { null: j }, j = { null: [] };
var $ = { document: h, contentInitial: v, flowInitial: i, flow: g, string: m, text: f, insideSpan: l, attentionMarkers: k, disable: j };
var Cb = new RegExp("\\\\([!-/:-@[-`{-~])|&(#(?:\\d{1,7}|x[\\da-f]{1,6})|[\\da-z]{1,31});", "gi");
var La = function(b, a, e) {
  if (b && "object" == typeof b) {
    if (I(b, "value")) return "html" == y(b.type) && !e ? de : b.value;
    if (a && I(b, "alt") && b.alt) return b.alt;
    if (I(b, "children")) return dc(b.children, a, e);
  }
  return !O(b) && Array.isArray(b) ? dc(b, a, e) : de;
};
var Jc = La;
var Kc = /^(\r?\n|\r)|(\r?\n|\r)$/g;
var Lc = /(\r?\n|\r)$/g;
var Db = function(b, a) {
  if (b) {
    var e = "Cannot close `" + X(b) + "` (", d = b.start;
    e = e + Ea({ start: d, end: b.end }) + "): a different token (`" + X(a) + "`, ", d = a.start;
    throw new ka(e + Ea({ start: d, end: a.end }) + ") is open");
  }
  b = "Cannot close document, a token (`" + X(a) + "`, ";
  e = a.start;
  throw new ka(b + Ea({ start: e, end: a.end }) + ") is still open");
};
var Mc = function(b) {
  return { type: "blockquote", children: [], position: void 0 };
};
var Eb = function(b) {
  let a = null;
  a = { type: "code", lang: a, meta: a, value: de, position: void 0 };
  return a;
};
var Nc = function(b) {
  return { type: "inlineCode", value: de, position: void 0 };
};
var Oc = function(b) {
  let a = null;
  a = { type: "definition", identifier: de, label: a, title: a, url: de, position: void 0 };
  return a;
};
var Pc = function(b) {
  return { type: "emphasis", children: [], position: void 0 };
};
var Fb = function(b) {
  return { type: "heading", children: [], position: void 0, depth: 0 };
};
var Gb = function(b) {
  return { type: "break", position: void 0 };
};
var Hb = function(b) {
  return { type: "html", value: de, position: void 0 };
};
var Qc = function(b) {
  let a = null;
  a = { type: "image", title: a, url: de, alt: a, position: void 0 };
  return a;
};
var Ib = function(b) {
  return { type: "link", children: [], position: void 0, title: null, url: de };
};
var Jb = function(b) {
  let a = [], e = void 0;
  return { type: "list", children: a, position: e, ordered: "listOrdered" == X(b), start: null, spread: b._spread };
};
var Rc = function(b) {
  return { type: "listItem", children: [], position: void 0, spread: b._spread, checked: null };
};
var Sc = function(b) {
  return { type: "paragraph", children: [], position: void 0 };
};
var Tc = function(b) {
  return { type: "strong", children: [], position: void 0 };
};
var Uc = function(b) {
  return { type: "thematicBreak", position: void 0 };
};
var Qe = (0, function(b) {
  var a = this;
  a.parser = function(e) {
    var d = D({}, a.data("settings"));
    D(d, b), d.extensions = gc(a.data("micromarkExtensions")), d.mdastExtensions = gc(a.data("fromMarkdownExtensions"));
    var u2;
    d && "object" == typeof d && (u2 = d, d = void 0);
    var j2 = Ld(u2), c = Dd(u2);
    u2 = c.document(), d = Ed()(e, d, true), d = u2.write(d), e = void 0;
    while (!$b(d)) {
    }
    c = j2(d);
    return c;
  };
});
q = function(b, a, e, d) {
  let c = b, u2 = d, j2 = e.enter("blockquote");
  u2 = e.createTracker(u2), u2.move("> "), u2.shift(2);
  let l2 = e.indentLines, g2 = e.containerFlow;
  c = y(e.indentLines(e.containerFlow(c, u2.current()), function(b2, a2, e2) {
    return !!e2 ? ">" + y(b2) : "> " + y(b2);
  })), j2();
  return c;
};
var Vc = /[ \t]/;
f = function(b, a, e, d) {
  for (var j2, u2 = e.unsafe, l2 = z(u2), c = -1; ++c < l2; ) {
    j2 = u2[c];
    if (y(j2.character) == fe && ic(e.stack, u2[c])) return Vc.test(y(d.before)) ? de : ee;
  }
  return "\\\n";
};
var Wc = /[^ \r\n]/;
var Xc = /^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/;
r = function(b, a, e, d) {
  var j2, h2, p2, m2, i2, g2 = b, u2 = e, l2 = d, c = Nd(u2), r2 = g2.value ? y(g2.value) : de, f2 = c == he ? "GraveAccent" : "Tilde";
  if (cb(g2, u2)) return j2 = u2.enter("codeIndented"), g2 = y(u2.indentLines(r2, function(b2, a2, e2) {
    return !!e2 ? y(b2) : "    " + y(b2);
  })), j2(), g2;
  j2 = u2.createTracker(l2), l2 = Md(r2, c) + 1 | 0, h2 = c.repeat(+Math.max(l2, 3) | 0), p2 = u2.enter("codeFenced"), c = y(j2.move(h2)), !g2.lang || (m2 = u2.enter("codeFencedLang" + f2), l2 = D({}, j2.current()), l2.before = c, l2.after = ee, i2 = [], Array.prototype.push.call(i2, he), l2.encode = i2, i2 = j2.move, c = c + y(j2.move(u2.safe(g2.lang, l2))), m2()), g2.lang && g2.meta && (f2 = u2.enter("codeFencedMeta" + f2), l2 = c + y(j2.move(ee)), c = D({}, j2.current()), c.before = l2, c.after = fe, i2 = [], Array.prototype.push.call(i2, he), c.encode = i2, i2 = j2.move, c = l2 + y(j2.move(u2.safe(g2.meta, c))), f2()), u2 = c + y(j2.move(fe)), r2.length > 0 && (u2 = u2 + y(j2.move(r2 + fe))), u2 += y(j2.move(h2)), p2();
  return u2;
};
var Yc = /[\x00- \x7F]/;
s = function(b, a, e, d) {
  var f2, i2, l2, j2, h2, p2, g2, u2, c = d, r2 = db(e), m2 = '"' == r2 ? "Quote" : "Apostrophe";
  f2 = e.enter("definition"), i2 = e.enter("label"), c = e.createTracker(c), l2 = y(c.move("[")), j2 = D({}, c.current()), j2.before = l2, j2.after = ne, h2 = c.move, p2 = e.safe, j2 = l2 + y(c.move(e.safe(e.associationId(b), j2))), j2 += y(c.move("]: ")), i2(), g2 = b.url, u2 = !!g2, l2 = !u2, u2 && "string" == typeof g2 && Yc.test(g2) && (l2 = true), l2 ? (l2 = e.enter("destinationLiteral"), j2 = j2 + y(c.move("<")), u2 = D({}, c.current()), u2.before = j2, u2.after = ">", i2 = c.move, u2 = j2 + y(c.move(e.safe(g2, u2))), u2 = u2 + y(c.move(">"))) : (l2 = e.enter("destinationRaw"), u2 = D({}, c.current()), u2.before = j2, u2.after = b.title ? ee : fe, i2 = c.move, u2 = j2 + y(c.move(e.safe(g2, u2)))), l2(), b.title && (j2 = e.enter("title" + m2), g2 = u2 + y(c.move(ee + r2)), u2 = D({}, c.current()), u2.before = g2, u2.after = r2, l2 = c.move, u2 = g2 + y(c.move(e.safe(b.title, u2))), u2 += y(c.move(r2)), j2()), f2();
  return u2;
}, g = function(b, a, e, d) {
  var c = b, j2 = Od(e), h2 = e.enter("emphasis"), l2 = e.createTracker(d), f2 = y(l2.move(j2)), u2 = D({}, l2.current());
  u2.after = j2, u2.before = f2;
  var g2 = l2.move;
  u2 = y(l2.move(e.containerPhrasing(c, u2)));
  var i2 = u2.charCodeAt(0);
  c = y(d.before), g2 = c.length - 1, g2 = Fa(c.charCodeAt(g2), i2, j2), !g2.inside || (u2 = ea(i2) + u2.slice(1));
  var r2 = u2.length - 1;
  i2 = u2.charCodeAt(r2), r2 = y(d.after), c = Fa(r2.charCodeAt(0), i2, j2), !c.inside || (u2 = u2.slice(0, u2.length - 1) + ea(i2)), r2 = y(l2.move(j2)), h2(), j2 = c.outside, e.attentionEncodeSurroundingInfo = { after: j2, before: g2.outside };
  return f2 + u2 + r2;
}, g.peek = function(b, a, e) {
  return e.options.emphasis || je;
}, h = true;
var Zc = /\r?\n|\r/;
var _c = /^[\t ]/;
t = function(b, a, e, d) {
  var g2 = b, c = e, i2 = d, j2 = g2.depth, u2 = j2 ? +j2 : 1;
  u2 = +Math.min(6, u2);
  var l2 = +Math.max(u2, 1) | 0;
  j2 = c.createTracker(i2);
  if (kc(g2, c)) {
    i2 = c.enter("headingSetext");
    var r2 = c.enter("phrasing");
    u2 = D({}, j2.current()), u2.before = fe, u2.after = fe, u2 = y(c.containerPhrasing(g2, u2)), r2(), i2(), g2 = 1 == l2 ? "=" : me, c = u2.lastIndexOf("\r"), j2 = u2.lastIndexOf(fe);
    return u2 + fe + g2.repeat(u2.length - ((+Math.max(c, j2) | 0) + 1 | 0) | 0);
  }
  l2 = "#".repeat(l2);
  i2 = c.enter("headingAtx"), r2 = c.enter("phrasing"), j2.move(l2 + ee), u2 = D({}, j2.current()), u2.before = "# ", u2.after = fe, u2 = y(c.containerPhrasing(g2, u2)), _c.test(u2) && (u2 = ea(u2.charCodeAt(0)) + u2.slice(1)), u2 = u2.length > 0 ? l2 + ee + u2 : l2, !c.options.closeAtx || (u2 = u2 + ee + l2), r2(), i2();
  return u2;
}, i = function(b) {
  return b.value ? y(b.value) : de;
}, i.peek = function() {
  return "<";
};
var $c = /[\x00- \x7F]/;
j = function(b, a, e, d) {
  var h2, r2, i2, u2, g2, j2, l2 = e, c = d, f2 = db(l2), p2 = '"' == f2 ? "Quote" : "Apostrophe";
  h2 = l2.enter("image"), r2 = l2.enter("label"), c = l2.createTracker(c), i2 = y(c.move("![")), u2 = D({}, c.current()), u2.before = i2, u2.after = ne, g2 = c.move, u2 = i2 + y(c.move(l2.safe(b.alt, u2))), g2 = u2 + y(c.move("](")), r2(), j2 = b.url, u2 = !j2 && b.title, !u2 && "string" == typeof j2 && $c.test(j2) && (u2 = true), u2 ? (i2 = l2.enter("destinationLiteral"), g2 = g2 + y(c.move("<")), u2 = D({}, c.current()), u2.before = g2, u2.after = ">", r2 = c.move, j2 = g2 + y(c.move(l2.safe(j2, u2))), j2 = j2 + y(c.move(">"))) : (i2 = l2.enter("destinationRaw"), u2 = D({}, c.current()), u2.before = g2, u2.after = b.title ? ee : le, r2 = c.move, j2 = g2 + y(c.move(l2.safe(j2, u2)))), i2(), b.title && (i2 = l2.enter("title" + p2), u2 = j2 + y(c.move(ee + f2)), j2 = D({}, c.current()), j2.before = u2, j2.after = f2, g2 = c.move, j2 = u2 + y(c.move(l2.safe(b.title, j2))), j2 += y(c.move(f2)), i2()), l2 = j2 + y(c.move(le)), h2();
  return l2;
}, j.peek = function() {
  return "!";
}, k = function(b, a, e, d) {
  var l2 = b, j2 = d, r2 = y(l2.referenceType), f2 = e.enter("imageReference"), g2 = e.enter("label");
  j2 = e.createTracker(j2);
  var u2 = y(j2.move("![")), c = D({}, j2.current());
  c.before = u2, c.after = ne;
  var i2 = y(e.safe(l2.alt, c));
  c = u2 + y(j2.move(i2 + "][")), g2(), g2 = e.stack, e.stack = [];
  var h2 = e.enter("reference");
  u2 = D({}, j2.current()), u2.before = c, u2.after = ne;
  var p2 = e.safe;
  u2 = y(e.safe(e.associationId(l2), u2)), h2(), e.stack = g2, f2(), l2 = "full" == r2 || 0 == i2.length || i2 != u2 ? c + y(j2.move(u2 + ne)) : "shortcut" == r2 ? c.slice(0, c.length - 1) : c + y(j2.move(ne));
  return l2;
}, k.peek = function() {
  return "!";
};
var ad = /[^ \r\n]/;
var bd = /^[ \r\n]/;
var cd = /[ \r\n]$/;
var dd = /^`|`$/;
l = function(b, a, e) {
  var u2, i2, r2, c, l2, j2 = b, d = j2.value ? y(j2.value) : de, g2 = he;
  while (true) {
    u2 = new RegExp("(^|[^`])" + g2 + "([^`]|$)", de);
    if (!u2.test(d)) break;
    g2 += he;
  }
  ad.test(d) && (bd.test(d) && cd.test(d) || dd.test(d)) && (d = ee + d + ee);
  for (i2 = e.unsafe, r2 = z(i2), j2 = -1; ++j2 < r2; ) {
    c = i2[j2];
    if (!!c.atBreak) {
      c = e.compilePattern(c);
      while (true) {
        l2 = c.exec(d);
        if (l2 == null) break;
        u2 = l2.index | 0, u2 > 0 && 10 == d.charCodeAt(u2) && 13 == d.charCodeAt(u2 - 1) && (u2 = u2 - 1 | 0), d = d.slice(0, u2) + ee + d.slice((l2.index | 0) + 1 | 0);
      }
    }
  }
  return g2 + d + g2;
}, l.peek = function() {
  return he;
};
var ed = /^[a-z][a-z+.-]+:/i;
var fd = /[\x00- <>\x7F]/;
var gd = /[\x00- \x7F]/;
m = function(b, a, e, d) {
  var j2, l2, u2, g2, f2, r2, c = d, i2 = db(e), h2 = '"' == i2 ? "Quote" : "Apostrophe";
  c = e.createTracker(c);
  if (lc(b, e)) return j2 = e.stack, e.stack = [], l2 = e.enter("autolink"), i2 = y(c.move("<")), u2 = D({}, c.current()), u2.before = i2, u2.after = ">", u2 = i2 + y(c.move(e.containerPhrasing(b, u2))), u2 = u2 + y(c.move(">")), l2(), e.stack = j2, u2;
  f2 = e.enter("link"), r2 = e.enter("label"), l2 = y(c.move("[")), j2 = D({}, c.current()), j2.before = l2, j2.after = "](", g2 = c.move, j2 = l2 + y(c.move(e.containerPhrasing(b, j2))), g2 = j2 + y(c.move("](")), r2(), u2 = b.url, j2 = !u2 && b.title, !j2 && "string" == typeof u2 && gd.test(u2) && (j2 = true), j2 ? (l2 = e.enter("destinationLiteral"), g2 = g2 + y(c.move("<")), j2 = D({}, c.current()), j2.before = g2, j2.after = ">", r2 = c.move, u2 = g2 + y(c.move(e.safe(u2, j2))), u2 = u2 + y(c.move(">"))) : (l2 = e.enter("destinationRaw"), j2 = D({}, c.current()), j2.before = g2, j2.after = b.title ? ee : le, r2 = c.move, u2 = g2 + y(c.move(e.safe(u2, j2)))), l2(), b.title && (l2 = e.enter("title" + h2), j2 = u2 + y(c.move(ee + i2)), u2 = D({}, c.current()), u2.before = j2, u2.after = i2, g2 = c.move, u2 = j2 + y(c.move(e.safe(b.title, u2))), u2 += y(c.move(i2)), l2()), u2 += y(c.move(le)), f2();
  return u2;
}, m.peek = function(b, a, e) {
  return lc(b, e) ? "<" : "[";
}, o = function(b, a, e, d) {
  var l2 = b, j2 = d, r2 = y(l2.referenceType), f2 = e.enter("linkReference"), g2 = e.enter("label");
  j2 = e.createTracker(j2);
  var u2 = y(j2.move("[")), c = D({}, j2.current());
  c.before = u2, c.after = ne;
  var i2 = y(e.containerPhrasing(l2, c));
  c = u2 + y(j2.move(i2 + "][")), g2(), g2 = e.stack, e.stack = [];
  var h2 = e.enter("reference");
  u2 = D({}, j2.current()), u2.before = c, u2.after = ne;
  var p2 = e.safe;
  u2 = y(e.safe(e.associationId(l2), u2)), h2(), e.stack = g2, f2(), l2 = "full" == r2 || 0 == i2.length || i2 != u2 ? c + y(j2.move(u2 + ne)) : "shortcut" == r2 ? c.slice(0, c.length - 1) : c + y(j2.move(ne));
  return l2;
}, o.peek = function() {
  return "[";
}, u = function(b, a, e, d) {
  var u2 = a, r2 = e.enter("list"), f2 = e.bulletCurrent, j2 = eb(e);
  !b.ordered || (j2 = Qd(e));
  var g2, l2, c, i2, h2 = b.ordered ? j2 == ke ? le : ke : Pd(e);
  g2 = u2 && e.bulletLastUsed && j2 == y(e.bulletLastUsed);
  if (!b.ordered) {
    c = void 0, u2 = b.children, u2 && z(u2) > 0 && (c = u2[0]), (j2 == je || j2 == me) && c && (l2 = c.children, !l2 || 0 == z(l2) || !l2[0] ? (u2 = e.stack, u2 = Rd(u2, e.indexStack)) : u2 = false, u2 && (g2 = true));
    if (mc(e) == j2 && c) for (i2 = z(b.children), u2 = -1; ++u2 < i2; ) {
      l2 = b.children[u2];
      if (l2 && "listItem" == y(l2.type)) {
        c = l2.children;
        if (c && z(c) > 0 && c[0] && "thematicBreak" == y(c[0].type)) {
          g2 = true;
          break;
        }
      }
    }
  }
  g2 && (j2 = h2);
  e.bulletCurrent = j2, g2 = y(e.containerFlow(b, d)), e.bulletLastUsed = j2, e.bulletCurrent = f2, r2();
  return g2;
}, v = function(b, a, e, d) {
  var j2 = a, r2 = d, i2 = Sd(e), l2 = eb(e), u2 = e.bulletCurrent;
  u2 && (l2 = y(u2));
  var c;
  j2 && "list" == y(j2.type) && j2.ordered && (c = j2.start, c = "number" == typeof c && +c > -1 ? c | 0 : 1, u2 = false !== e.options.incrementListMarker ? +j2.children.indexOf.call(j2.children, b) | 0 : 0, l2 = (c + u2 | 0).toString(10) + l2);
  var g2 = l2.length + 1 | 0;
  u2 = "tab" == i2, !u2 && "mixed" == i2 && (j2 && "list" == y(j2.type) && j2.spread || b.spread) && (u2 = true), u2 && (c = g2 / 4, g2 = (+Math.ceil(c) | 0) * 4 | 0), c = e.createTracker(r2), c.move(l2 + ee.repeat(g2 - l2.length)), c.shift(g2), j2 = e.enter("listItem"), u2 = function(b2, a2, e2) {
    var d2 = y(b2);
    return 0 != +a2 ? e2 ? d2 : ee.repeat(g2) + d2 : e2 ? l2 + d2 : l2 + ee.repeat(g2 - l2.length) + d2;
  }, i2 = e.indentLines, r2 = e.containerFlow, u2 = y(e.indentLines(e.containerFlow(b, c.current()), u2)), j2();
  return u2;
}, w = function(b, a, e, d) {
  let u2 = b, c = e.enter("paragraph"), j2 = e.enter("phrasing");
  u2 = y(e.containerPhrasing(u2, d)), j2(), c();
  return u2;
}, x = function(b, a, e, d) {
  for (var c = b.children, j2 = z(c), u2 = 0; ; u2++) {
    if (u2 >= j2) {
      u2 = false;
      break;
    }
    if (Td(c[u2])) {
      u2 = true;
      break;
    }
  }
  return u2 ? e.containerPhrasing(b, d) : e.containerFlow(b, d);
}, p = function(b, a, e, d) {
  var j2 = b, c = Ud(e), h2 = e.enter("strong"), l2 = e.createTracker(d), f2 = y(l2.move(c + c)), u2 = D({}, l2.current());
  u2.after = c, u2.before = f2;
  var g2 = l2.move;
  u2 = y(l2.move(e.containerPhrasing(j2, u2)));
  var i2 = u2.charCodeAt(0);
  j2 = y(d.before), g2 = j2.length - 1, g2 = Fa(j2.charCodeAt(g2), i2, c), !g2.inside || (u2 = ea(i2) + u2.slice(1));
  var r2 = u2.length - 1;
  i2 = u2.charCodeAt(r2), r2 = y(d.after), j2 = Fa(r2.charCodeAt(0), i2, c), !j2.inside || (u2 = u2.slice(0, u2.length - 1) + ea(i2)), r2 = y(l2.move(c + c)), h2(), c = j2.outside, e.attentionEncodeSurroundingInfo = { after: c, before: g2.outside };
  return f2 + u2 + r2;
}, p.peek = function(b, a, e) {
  return e.options.strong || je;
}, oe = function(b, a, e, d) {
  return e.safe(b.value, d);
}, pe = function(b, a, e) {
  var d = mc(e);
  !e.options.ruleSpaces || (d = d + ee);
  var u2 = d.repeat(Vd(e));
  return e.options.ruleSpaces ? u2.slice(0, u2.length - 1) : u2;
};
var L = { blockquote: q };
L.break = f, L.code = r, L.definition = s, L.emphasis = g, L.hardBreak = f, L.heading = t, L.html = i, L.image = j, L.imageReference = k, L.inlineCode = l, L.link = m, L.linkReference = o, L.list = u, L.listItem = v, L.paragraph = w, L.root = x, L.strong = p, L.text = oe, L.thematicBreak = pe;
var Kb = [];
Array.prototype.push.call(Kb, function(b, a, e, d) {
  var u2 = y(a.type), c = y(b.type);
  if ("code" == u2 && cb(a, d) && ("list" == c || c == u2 && cb(b, d))) return false;
  if ("spread" in e && "boolean" == typeof e.spread) return "paragraph" == c && (c == u2 || "definition" == u2 || "heading" == u2 && kc(a, d)) ? void 0 : e.spread ? 1 : 0;
}), f = ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"], i = ["codeFencedLangGraveAccent", "codeFencedLangTilde"], g = ["codeFencedLangGraveAccent", "codeFencedLangTilde", "codeFencedMetaGraveAccent", "codeFencedMetaTilde", "destinationLiteral", "headingAtx"], j = ["label", "reference"], k = [], k.push("codeFencedLangGraveAccent"), k.push("codeFencedMetaGraveAccent");
var C = [];
l = "[\\r\\n]", C.push({ character: "	", after: l, inConstruct: "phrasing" }), C.push({ character: "	", before: l, inConstruct: "phrasing" }), C.push({ character: "	", inConstruct: i }), C.push({ character: "\r", inConstruct: g }), C.push({ character: fe, inConstruct: g }), C.push({ character: ee, after: l, inConstruct: "phrasing" }), C.push({ character: ee, before: l, inConstruct: "phrasing" }), C.push({ character: ee, inConstruct: i }), C.push({ character: "!", after: "\\[", inConstruct: "phrasing", notInConstruct: f }), C.push({ character: '"', inConstruct: "titleQuote" }), C.push({ atBreak: h, character: "#" }), C.push({ character: "#", inConstruct: "headingAtx", after: "(?:[\r\n]|$)" }), C.push({ character: "&", after: "[#A-Za-z]", inConstruct: "phrasing" }), C.push({ character: "'", inConstruct: "titleApostrophe" }), C.push({ character: "(", inConstruct: "destinationRaw" }), C.push({ before: "\\]", character: "(", inConstruct: "phrasing", notInConstruct: f }), C.push({ atBreak: h, before: "\\d+", character: le }), C.push({ character: le, inConstruct: "destinationRaw" }), C.push({ atBreak: h, character: je, after: "(?:[ 	\r\n*])" }), C.push({ character: je, inConstruct: "phrasing", notInConstruct: f }), C.push({ atBreak: h, character: "+", after: "(?:[ 	\r\n])" }), C.push({ atBreak: h, character: me, after: "(?:[ 	\r\n-])" }), C.push({ atBreak: h, before: "\\d+", character: ke, after: "(?:[ 	\r\n]|$)" }), C.push({ atBreak: h, character: "<", after: "[!/?A-Za-z]" }), C.push({ character: "<", after: "[!/?A-Za-z]", inConstruct: "phrasing", notInConstruct: f }), C.push({ character: "<", inConstruct: "destinationLiteral" }), C.push({ atBreak: h, character: "=" }), C.push({ atBreak: h, character: ">" }), C.push({ character: ">", inConstruct: "destinationLiteral" }), C.push({ atBreak: h, character: "[" }), C.push({ character: "[", inConstruct: "phrasing", notInConstruct: f }), C.push({ character: "[", inConstruct: j }), C.push({ character: "\\", after: l, inConstruct: "phrasing" }), C.push({ character: ne, inConstruct: j }), C.push({ atBreak: h, character: "_" }), C.push({ character: "_", inConstruct: "phrasing", notInConstruct: f }), C.push({ atBreak: h, character: he }), C.push({ character: he, inConstruct: k }), C.push({ character: he, inConstruct: "phrasing", notInConstruct: f }), C.push({ atBreak: h, character: "~" });
var hd = new RegExp("[|\\\\{}()[\\]^$+*?.-]", de);
var id = /(\r?\n|\r)$/;
var jd = /\r?\n|\r/g;
var kd = new RegExp("[!-/:-@[-`{-~]", de);
var ld = function(b, a) {
  return +b - +a;
};
var md = /\r?\n|\r/g;
h = (0, function(b) {
  var a = this;
  a.compiler = function(e, d) {
    let c = {}, u2 = D(c, oc(a, "settings"));
    D(u2, b), u2.extensions = Wd(oc(a, "toMarkdownExtensions"));
    return nc(e, u2);
  };
}), n = n(), Qe = n.use(Qe);
var Re = Qe.use(h);
var Se = Re.freeze();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  remark
});
