var th = (e) => {
  throw TypeError(e);
};
var Ll = (e, t, n) => t.has(e) || th("Cannot " + n);
var M = (e, t, n) => (
    Ll(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  J = (e, t, n) =>
    t.has(e)
      ? th("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  G = (e, t, n, r) => (
    Ll(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  Le = (e, t, n) => (Ll(e, t, "access private method"), n);
var ys = (e, t, n, r) => ({
  set _(i) {
    G(e, t, i, n);
  },
  get _() {
    return M(e, t, r);
  },
});
function a1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function vg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var wg = { exports: {} },
  Xa = {},
  xg = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ns = Symbol.for("react.element"),
  l1 = Symbol.for("react.portal"),
  u1 = Symbol.for("react.fragment"),
  c1 = Symbol.for("react.strict_mode"),
  d1 = Symbol.for("react.profiler"),
  f1 = Symbol.for("react.provider"),
  h1 = Symbol.for("react.context"),
  p1 = Symbol.for("react.forward_ref"),
  m1 = Symbol.for("react.suspense"),
  g1 = Symbol.for("react.memo"),
  y1 = Symbol.for("react.lazy"),
  nh = Symbol.iterator;
function v1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (nh && e[nh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Sg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Eg = Object.assign,
  Cg = {};
function Bi(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Cg),
    (this.updater = n || Sg));
}
Bi.prototype.isReactComponent = {};
Bi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Bi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Tg() {}
Tg.prototype = Bi.prototype;
function ld(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Cg),
    (this.updater = n || Sg));
}
var ud = (ld.prototype = new Tg());
ud.constructor = ld;
Eg(ud, Bi.prototype);
ud.isPureReactComponent = !0;
var rh = Array.isArray,
  Pg = Object.prototype.hasOwnProperty,
  cd = { current: null },
  bg = { key: !0, ref: !0, __self: !0, __source: !0 };
function kg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Pg.call(t, r) && !bg.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: ns,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: cd.current,
  };
}
function w1(e, t) {
  return {
    $$typeof: ns,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function dd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ns;
}
function x1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ih = /\/+/g;
function Ol(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? x1("" + e.key)
    : t.toString(36);
}
function Ws(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ns:
          case l1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Ol(s, 0) : r),
      rh(i)
        ? ((n = ""),
          e != null && (n = e.replace(ih, "$&/") + "/"),
          Ws(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (dd(i) &&
            (i = w1(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ih, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), rh(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + Ol(o, a);
      s += Ws(o, t, n, l, i);
    }
  else if (((l = v1(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      ((o = o.value), (l = r + Ol(o, a++)), (s += Ws(o, t, n, l, i)));
  else if (o === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return s;
}
function vs(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ws(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function S1(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var He = { current: null },
  Hs = { transition: null },
  E1 = {
    ReactCurrentDispatcher: He,
    ReactCurrentBatchConfig: Hs,
    ReactCurrentOwner: cd,
  };
function Rg() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: vs,
  forEach: function (e, t, n) {
    vs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!dd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
X.Component = Bi;
X.Fragment = u1;
X.Profiler = d1;
X.PureComponent = ld;
X.StrictMode = c1;
X.Suspense = m1;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = E1;
X.act = Rg;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Eg({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = cd.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Pg.call(t, l) &&
        !bg.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ns, type: e.type, key: i, ref: o, props: r, _owner: s };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: h1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: f1, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = kg;
X.createFactory = function (e) {
  var t = kg.bind(null, e);
  return ((t.type = e), t);
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: p1, render: e };
};
X.isValidElement = dd;
X.lazy = function (e) {
  return { $$typeof: y1, _payload: { _status: -1, _result: e }, _init: S1 };
};
X.memo = function (e, t) {
  return { $$typeof: g1, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = Hs.transition;
  Hs.transition = {};
  try {
    e();
  } finally {
    Hs.transition = t;
  }
};
X.unstable_act = Rg;
X.useCallback = function (e, t) {
  return He.current.useCallback(e, t);
};
X.useContext = function (e) {
  return He.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return He.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return He.current.useEffect(e, t);
};
X.useId = function () {
  return He.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return He.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return He.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return He.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return He.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return He.current.useRef(e);
};
X.useState = function (e) {
  return He.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return He.current.useTransition();
};
X.version = "18.3.1";
xg.exports = X;
var x = xg.exports;
const L = vg(x),
  Ag = a1({ __proto__: null, default: L }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var C1 = x,
  T1 = Symbol.for("react.element"),
  P1 = Symbol.for("react.fragment"),
  b1 = Object.prototype.hasOwnProperty,
  k1 = C1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  R1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  (n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) b1.call(t, r) && !R1.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: T1,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: k1.current,
  };
}
Xa.Fragment = P1;
Xa.jsx = Mg;
Xa.jsxs = Mg;
wg.exports = Xa;
var C = wg.exports,
  Ng = { exports: {} },
  lt = {},
  Dg = { exports: {} },
  Lg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(b, A) {
    var I = b.length;
    b.push(A);
    e: for (; 0 < I; ) {
      var $ = (I - 1) >>> 1,
        B = b[$];
      if (0 < i(B, A)) ((b[$] = A), (b[I] = B), (I = $));
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var A = b[0],
      I = b.pop();
    if (I !== A) {
      b[0] = I;
      e: for (var $ = 0, B = b.length, Y = B >>> 1; $ < Y; ) {
        var q = 2 * ($ + 1) - 1,
          ve = b[q],
          De = q + 1,
          ee = b[De];
        if (0 > i(ve, I))
          De < B && 0 > i(ee, ve)
            ? ((b[$] = ee), (b[De] = I), ($ = De))
            : ((b[$] = ve), (b[q] = I), ($ = q));
        else if (De < B && 0 > i(ee, I)) ((b[$] = ee), (b[De] = I), ($ = De));
        else break e;
      }
    }
    return A;
  }
  function i(b, A) {
    var I = b.sortIndex - A.sortIndex;
    return I !== 0 ? I : b.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    v = !1,
    g = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(b) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= b)
        (r(u), (A.sortIndex = A.expirationTime), t(l, A));
      else break;
      A = n(u);
    }
  }
  function S(b) {
    if (((g = !1), y(b), !v))
      if (n(l) !== null) ((v = !0), z(E));
      else {
        var A = n(u);
        A !== null && H(S, A.startTime - b);
      }
  }
  function E(b, A) {
    ((v = !1), g && ((g = !1), m(k), (k = -1)), (h = !0));
    var I = f;
    try {
      for (
        y(A), d = n(l);
        d !== null && (!(d.expirationTime > A) || (b && !V()));
      ) {
        var $ = d.callback;
        if (typeof $ == "function") {
          ((d.callback = null), (f = d.priorityLevel));
          var B = $(d.expirationTime <= A);
          ((A = e.unstable_now()),
            typeof B == "function" ? (d.callback = B) : d === n(l) && r(l),
            y(A));
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Y = !0;
      else {
        var q = n(u);
        (q !== null && H(S, q.startTime - A), (Y = !1));
      }
      return Y;
    } finally {
      ((d = null), (f = I), (h = !1));
    }
  }
  var T = !1,
    P = null,
    k = -1,
    D = 5,
    R = -1;
  function V() {
    return !(e.unstable_now() - R < D);
  }
  function j() {
    if (P !== null) {
      var b = e.unstable_now();
      R = b;
      var A = !0;
      try {
        A = P(!0, b);
      } finally {
        A ? U() : ((T = !1), (P = null));
      }
    } else T = !1;
  }
  var U;
  if (typeof p == "function")
    U = function () {
      p(j);
    };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(),
      W = O.port2;
    ((O.port1.onmessage = j),
      (U = function () {
        W.postMessage(null);
      }));
  } else
    U = function () {
      w(j, 0);
    };
  function z(b) {
    ((P = b), T || ((T = !0), U()));
  }
  function H(b, A) {
    k = w(function () {
      b(e.unstable_now());
    }, A);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), z(E));
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (D = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (b) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = f;
      }
      var I = f;
      f = A;
      try {
        return b();
      } finally {
        f = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, A) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var I = f;
      f = b;
      try {
        return A();
      } finally {
        f = I;
      }
    }),
    (e.unstable_scheduleCallback = function (b, A, I) {
      var $ = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? $ + I : $))
          : (I = $),
        b)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = I + B),
        (b = {
          id: c++,
          callback: A,
          priorityLevel: b,
          startTime: I,
          expirationTime: B,
          sortIndex: -1,
        }),
        I > $
          ? ((b.sortIndex = I),
            t(u, b),
            n(l) === null &&
              b === n(u) &&
              (g ? (m(k), (k = -1)) : (g = !0), H(S, I - $)))
          : ((b.sortIndex = B), t(l, b), v || h || ((v = !0), z(E))),
        b
      );
    }),
    (e.unstable_shouldYield = V),
    (e.unstable_wrapCallback = function (b) {
      var A = f;
      return function () {
        var I = f;
        f = A;
        try {
          return b.apply(this, arguments);
        } finally {
          f = I;
        }
      };
    }));
})(Lg);
Dg.exports = Lg;
var A1 = Dg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var M1 = x,
  at = A1;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Og = new Set(),
  Ao = {};
function Fr(e, t) {
  (Ai(e, t), Ai(e + "Capture", t));
}
function Ai(e, t) {
  for (Ao[e] = t, e = 0; e < t.length; e++) Og.add(t[e]);
}
var fn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Au = Object.prototype.hasOwnProperty,
  N1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  oh = {},
  sh = {};
function D1(e) {
  return Au.call(sh, e)
    ? !0
    : Au.call(oh, e)
      ? !1
      : N1.test(e)
        ? (sh[e] = !0)
        : ((oh[e] = !0), !1);
}
function L1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function O1(e, t, n, r) {
  if (t === null || typeof t > "u" || L1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ke(e, t, n, r, i, o, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s));
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var fd = /[\-:]([a-z])/g;
function hd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fd, hd);
    Ne[t] = new Ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fd, hd);
    Ne[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(fd, hd);
  Ne[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new Ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function pd(e, t, n, r) {
  var i = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (O1(t, n, i, r) && (n = null),
    r || i === null
      ? D1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var vn = M1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ws = Symbol.for("react.element"),
  Yr = Symbol.for("react.portal"),
  Xr = Symbol.for("react.fragment"),
  md = Symbol.for("react.strict_mode"),
  Mu = Symbol.for("react.profiler"),
  jg = Symbol.for("react.provider"),
  Ig = Symbol.for("react.context"),
  gd = Symbol.for("react.forward_ref"),
  Nu = Symbol.for("react.suspense"),
  Du = Symbol.for("react.suspense_list"),
  yd = Symbol.for("react.memo"),
  Nn = Symbol.for("react.lazy"),
  Vg = Symbol.for("react.offscreen"),
  ah = Symbol.iterator;
function Zi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ah && e[ah]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pe = Object.assign,
  jl;
function uo(e) {
  if (jl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      jl = (t && t[1]) || "";
    }
  return (
    `
` +
    jl +
    e
  );
}
var Il = !1;
function Vl(e, t) {
  if (!e || Il) return "";
  Il = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];
      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    ((Il = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? uo(e) : "";
}
function j1(e) {
  switch (e.tag) {
    case 5:
      return uo(e.type);
    case 16:
      return uo("Lazy");
    case 13:
      return uo("Suspense");
    case 19:
      return uo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Vl(e.type, !1)), e);
    case 11:
      return ((e = Vl(e.type.render, !1)), e);
    case 1:
      return ((e = Vl(e.type, !0)), e);
    default:
      return "";
  }
}
function Lu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xr:
      return "Fragment";
    case Yr:
      return "Portal";
    case Mu:
      return "Profiler";
    case md:
      return "StrictMode";
    case Nu:
      return "Suspense";
    case Du:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ig:
        return (e.displayName || "Context") + ".Consumer";
      case jg:
        return (e._context.displayName || "Context") + ".Provider";
      case gd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case yd:
        return (
          (t = e.displayName || null),
          t !== null ? t : Lu(e.type) || "Memo"
        );
      case Nn:
        ((t = e._payload), (e = e._init));
        try {
          return Lu(e(t));
        } catch {}
    }
  return null;
}
function I1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Lu(t);
    case 8:
      return t === md ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Zn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Fg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function V1(e) {
  var t = Fg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          ((r = "" + s), o.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function xs(e) {
  e._valueTracker || (e._valueTracker = V1(e));
}
function _g(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Fg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function da(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ou(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function lh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Zn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function zg(e, t) {
  ((t = t.checked), t != null && pd(e, "checked", t, !1));
}
function ju(e, t) {
  zg(e, t);
  var n = Zn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Iu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Iu(e, t.type, Zn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function uh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Iu(e, t, n) {
  (t !== "number" || da(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var co = Array.isArray;
function fi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Zn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Vu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ch(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (co(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Zn(n) };
}
function Bg(e, t) {
  var n = Zn(t.value),
    r = Zn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function dh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function $g(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? $g(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ss,
  Ug = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ss = Ss || document.createElement("div"),
          Ss.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ss.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Mo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  F1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(mo).forEach(function (e) {
  F1.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (mo[t] = mo[e]));
  });
});
function Wg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (mo.hasOwnProperty(e) && mo[e])
      ? ("" + t).trim()
      : t + "px";
}
function Hg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Wg(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var _1 = pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function _u(e, t) {
  if (t) {
    if (_1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function zu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Bu = null;
function vd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var $u = null,
  hi = null,
  pi = null;
function fh(e) {
  if ((e = os(e))) {
    if (typeof $u != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = tl(t)), $u(e.stateNode, e.type, t));
  }
}
function Kg(e) {
  hi ? (pi ? pi.push(e) : (pi = [e])) : (hi = e);
}
function Gg() {
  if (hi) {
    var e = hi,
      t = pi;
    if (((pi = hi = null), fh(e), t)) for (e = 0; e < t.length; e++) fh(t[e]);
  }
}
function Qg(e, t) {
  return e(t);
}
function Yg() {}
var Fl = !1;
function Xg(e, t, n) {
  if (Fl) return e(t, n);
  Fl = !0;
  try {
    return Qg(e, t, n);
  } finally {
    ((Fl = !1), (hi !== null || pi !== null) && (Yg(), Gg()));
  }
}
function No(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = tl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Uu = !1;
if (fn)
  try {
    var Ji = {};
    (Object.defineProperty(Ji, "passive", {
      get: function () {
        Uu = !0;
      },
    }),
      window.addEventListener("test", Ji, Ji),
      window.removeEventListener("test", Ji, Ji));
  } catch {
    Uu = !1;
  }
function z1(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var go = !1,
  fa = null,
  ha = !1,
  Wu = null,
  B1 = {
    onError: function (e) {
      ((go = !0), (fa = e));
    },
  };
function $1(e, t, n, r, i, o, s, a, l) {
  ((go = !1), (fa = null), z1.apply(B1, arguments));
}
function U1(e, t, n, r, i, o, s, a, l) {
  if (($1.apply(this, arguments), go)) {
    if (go) {
      var u = fa;
      ((go = !1), (fa = null));
    } else throw Error(N(198));
    ha || ((ha = !0), (Wu = u));
  }
}
function _r(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function qg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function hh(e) {
  if (_r(e) !== e) throw Error(N(188));
}
function W1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = _r(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return (hh(i), e);
        if (o === r) return (hh(i), t);
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) ((n = i), (r = o));
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          ((s = !0), (n = i), (r = o));
          break;
        }
        if (a === r) {
          ((s = !0), (r = i), (n = o));
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            ((s = !0), (n = o), (r = i));
            break;
          }
          if (a === r) {
            ((s = !0), (r = o), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Zg(e) {
  return ((e = W1(e)), e !== null ? Jg(e) : null);
}
function Jg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Jg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ey = at.unstable_scheduleCallback,
  ph = at.unstable_cancelCallback,
  H1 = at.unstable_shouldYield,
  K1 = at.unstable_requestPaint,
  ye = at.unstable_now,
  G1 = at.unstable_getCurrentPriorityLevel,
  wd = at.unstable_ImmediatePriority,
  ty = at.unstable_UserBlockingPriority,
  pa = at.unstable_NormalPriority,
  Q1 = at.unstable_LowPriority,
  ny = at.unstable_IdlePriority,
  qa = null,
  Xt = null;
function Y1(e) {
  if (Xt && typeof Xt.onCommitFiberRoot == "function")
    try {
      Xt.onCommitFiberRoot(qa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ot = Math.clz32 ? Math.clz32 : Z1,
  X1 = Math.log,
  q1 = Math.LN2;
function Z1(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((X1(e) / q1) | 0)) | 0);
}
var Es = 64,
  Cs = 4194304;
function fo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ma(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = fo(a)) : ((o &= s), o !== 0 && (r = fo(o)));
  } else ((s = n & ~i), s !== 0 ? (r = fo(s)) : o !== 0 && (r = fo(o)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Ot(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function J1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function eS(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;
  ) {
    var s = 31 - Ot(o),
      a = 1 << s,
      l = i[s];
    (l === -1
      ? (!(a & n) || a & r) && (i[s] = J1(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a));
  }
}
function Hu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ry() {
  var e = Es;
  return ((Es <<= 1), !(Es & 4194240) && (Es = 64), e);
}
function _l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function rs(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ot(t)),
    (e[t] = n));
}
function tS(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ot(n),
      o = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o));
  }
}
function xd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ot(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var te = 0;
function iy(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var oy,
  Sd,
  sy,
  ay,
  ly,
  Ku = !1,
  Ts = [],
  Wn = null,
  Hn = null,
  Kn = null,
  Do = new Map(),
  Lo = new Map(),
  Ln = [],
  nS =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function mh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wn = null;
      break;
    case "dragenter":
    case "dragleave":
      Hn = null;
      break;
    case "mouseover":
    case "mouseout":
      Kn = null;
      break;
    case "pointerover":
    case "pointerout":
      Do.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Lo.delete(t.pointerId);
  }
}
function eo(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = os(t)), t !== null && Sd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function rS(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((Wn = eo(Wn, e, t, n, r, i)), !0);
    case "dragenter":
      return ((Hn = eo(Hn, e, t, n, r, i)), !0);
    case "mouseover":
      return ((Kn = eo(Kn, e, t, n, r, i)), !0);
    case "pointerover":
      var o = i.pointerId;
      return (Do.set(o, eo(Do.get(o) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (o = i.pointerId),
        Lo.set(o, eo(Lo.get(o) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function uy(e) {
  var t = yr(e.target);
  if (t !== null) {
    var n = _r(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = qg(n)), t !== null)) {
          ((e.blockedOn = t),
            ly(e.priority, function () {
              sy(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ks(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Gu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Bu = r), n.target.dispatchEvent(r), (Bu = null));
    } else return ((t = os(n)), t !== null && Sd(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function gh(e, t, n) {
  Ks(e) && n.delete(t);
}
function iS() {
  ((Ku = !1),
    Wn !== null && Ks(Wn) && (Wn = null),
    Hn !== null && Ks(Hn) && (Hn = null),
    Kn !== null && Ks(Kn) && (Kn = null),
    Do.forEach(gh),
    Lo.forEach(gh));
}
function to(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ku ||
      ((Ku = !0),
      at.unstable_scheduleCallback(at.unstable_NormalPriority, iS)));
}
function Oo(e) {
  function t(i) {
    return to(i, e);
  }
  if (0 < Ts.length) {
    to(Ts[0], e);
    for (var n = 1; n < Ts.length; n++) {
      var r = Ts[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wn !== null && to(Wn, e),
      Hn !== null && to(Hn, e),
      Kn !== null && to(Kn, e),
      Do.forEach(t),
      Lo.forEach(t),
      n = 0;
    n < Ln.length;
    n++
  )
    ((r = Ln[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Ln.length && ((n = Ln[0]), n.blockedOn === null); )
    (uy(n), n.blockedOn === null && Ln.shift());
}
var mi = vn.ReactCurrentBatchConfig,
  ga = !0;
function oS(e, t, n, r) {
  var i = te,
    o = mi.transition;
  mi.transition = null;
  try {
    ((te = 1), Ed(e, t, n, r));
  } finally {
    ((te = i), (mi.transition = o));
  }
}
function sS(e, t, n, r) {
  var i = te,
    o = mi.transition;
  mi.transition = null;
  try {
    ((te = 4), Ed(e, t, n, r));
  } finally {
    ((te = i), (mi.transition = o));
  }
}
function Ed(e, t, n, r) {
  if (ga) {
    var i = Gu(e, t, n, r);
    if (i === null) (Yl(e, t, r, ya, n), mh(e, r));
    else if (rS(i, e, t, n, r)) r.stopPropagation();
    else if ((mh(e, r), t & 4 && -1 < nS.indexOf(e))) {
      for (; i !== null; ) {
        var o = os(i);
        if (
          (o !== null && oy(o),
          (o = Gu(e, t, n, r)),
          o === null && Yl(e, t, r, ya, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Yl(e, t, r, null, n);
  }
}
var ya = null;
function Gu(e, t, n, r) {
  if (((ya = null), (e = vd(r)), (e = yr(e)), e !== null))
    if (((t = _r(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = qg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ya = e), null);
}
function cy(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (G1()) {
        case wd:
          return 1;
        case ty:
          return 4;
        case pa:
        case Q1:
          return 16;
        case ny:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zn = null,
  Cd = null,
  Gs = null;
function dy() {
  if (Gs) return Gs;
  var e,
    t = Cd,
    n = t.length,
    r,
    i = "value" in zn ? zn.value : zn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Gs = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Qs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ps() {
  return !0;
}
function yh() {
  return !1;
}
function ut(e) {
  function t(n, r, i, o, s) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ps
        : yh),
      (this.isPropagationStopped = yh),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ps));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ps));
      },
      persist: function () {},
      isPersistent: Ps,
    }),
    t
  );
}
var $i = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Td = ut($i),
  is = pe({}, $i, { view: 0, detail: 0 }),
  aS = ut(is),
  zl,
  Bl,
  no,
  Za = pe({}, is, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Pd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== no &&
            (no && e.type === "mousemove"
              ? ((zl = e.screenX - no.screenX), (Bl = e.screenY - no.screenY))
              : (Bl = zl = 0),
            (no = e)),
          zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Bl;
    },
  }),
  vh = ut(Za),
  lS = pe({}, Za, { dataTransfer: 0 }),
  uS = ut(lS),
  cS = pe({}, is, { relatedTarget: 0 }),
  $l = ut(cS),
  dS = pe({}, $i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fS = ut(dS),
  hS = pe({}, $i, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pS = ut(hS),
  mS = pe({}, $i, { data: 0 }),
  wh = ut(mS),
  gS = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  yS = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  vS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function wS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vS[e]) ? !!t[e] : !1;
}
function Pd() {
  return wS;
}
var xS = pe({}, is, {
    key: function (e) {
      if (e.key) {
        var t = gS[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Qs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? yS[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pd,
    charCode: function (e) {
      return e.type === "keypress" ? Qs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Qs(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  SS = ut(xS),
  ES = pe({}, Za, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  xh = ut(ES),
  CS = pe({}, is, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pd,
  }),
  TS = ut(CS),
  PS = pe({}, $i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bS = ut(PS),
  kS = pe({}, Za, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  RS = ut(kS),
  AS = [9, 13, 27, 32],
  bd = fn && "CompositionEvent" in window,
  yo = null;
fn && "documentMode" in document && (yo = document.documentMode);
var MS = fn && "TextEvent" in window && !yo,
  fy = fn && (!bd || (yo && 8 < yo && 11 >= yo)),
  Sh = " ",
  Eh = !1;
function hy(e, t) {
  switch (e) {
    case "keyup":
      return AS.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function py(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var qr = !1;
function NS(e, t) {
  switch (e) {
    case "compositionend":
      return py(t);
    case "keypress":
      return t.which !== 32 ? null : ((Eh = !0), Sh);
    case "textInput":
      return ((e = t.data), e === Sh && Eh ? null : e);
    default:
      return null;
  }
}
function DS(e, t) {
  if (qr)
    return e === "compositionend" || (!bd && hy(e, t))
      ? ((e = dy()), (Gs = Cd = zn = null), (qr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return fy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var LS = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ch(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!LS[e.type] : t === "textarea";
}
function my(e, t, n, r) {
  (Kg(r),
    (t = va(t, "onChange")),
    0 < t.length &&
      ((n = new Td("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var vo = null,
  jo = null;
function OS(e) {
  by(e, 0);
}
function Ja(e) {
  var t = ei(e);
  if (_g(t)) return e;
}
function jS(e, t) {
  if (e === "change") return t;
}
var gy = !1;
if (fn) {
  var Ul;
  if (fn) {
    var Wl = "oninput" in document;
    if (!Wl) {
      var Th = document.createElement("div");
      (Th.setAttribute("oninput", "return;"),
        (Wl = typeof Th.oninput == "function"));
    }
    Ul = Wl;
  } else Ul = !1;
  gy = Ul && (!document.documentMode || 9 < document.documentMode);
}
function Ph() {
  vo && (vo.detachEvent("onpropertychange", yy), (jo = vo = null));
}
function yy(e) {
  if (e.propertyName === "value" && Ja(jo)) {
    var t = [];
    (my(t, jo, e, vd(e)), Xg(OS, t));
  }
}
function IS(e, t, n) {
  e === "focusin"
    ? (Ph(), (vo = t), (jo = n), vo.attachEvent("onpropertychange", yy))
    : e === "focusout" && Ph();
}
function VS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ja(jo);
}
function FS(e, t) {
  if (e === "click") return Ja(t);
}
function _S(e, t) {
  if (e === "input" || e === "change") return Ja(t);
}
function zS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Vt = typeof Object.is == "function" ? Object.is : zS;
function Io(e, t) {
  if (Vt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Au.call(t, i) || !Vt(e[i], t[i])) return !1;
  }
  return !0;
}
function bh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function kh(e, t) {
  var n = bh(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = bh(n);
  }
}
function vy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? vy(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function wy() {
  for (var e = window, t = da(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = da(e.document);
  }
  return t;
}
function kd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function BS(e) {
  var t = wy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    vy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && kd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        ((r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = kh(n, o)));
        var s = kh(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var $S = fn && "documentMode" in document && 11 >= document.documentMode,
  Zr = null,
  Qu = null,
  wo = null,
  Yu = !1;
function Rh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Yu ||
    Zr == null ||
    Zr !== da(r) ||
    ((r = Zr),
    "selectionStart" in r && kd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (wo && Io(wo, r)) ||
      ((wo = r),
      (r = va(Qu, "onSelect")),
      0 < r.length &&
        ((t = new Td("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Zr))));
}
function bs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Jr = {
    animationend: bs("Animation", "AnimationEnd"),
    animationiteration: bs("Animation", "AnimationIteration"),
    animationstart: bs("Animation", "AnimationStart"),
    transitionend: bs("Transition", "TransitionEnd"),
  },
  Hl = {},
  xy = {};
fn &&
  ((xy = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Jr.animationend.animation,
    delete Jr.animationiteration.animation,
    delete Jr.animationstart.animation),
  "TransitionEvent" in window || delete Jr.transitionend.transition);
function el(e) {
  if (Hl[e]) return Hl[e];
  if (!Jr[e]) return e;
  var t = Jr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in xy) return (Hl[e] = t[n]);
  return e;
}
var Sy = el("animationend"),
  Ey = el("animationiteration"),
  Cy = el("animationstart"),
  Ty = el("transitionend"),
  Py = new Map(),
  Ah =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function sr(e, t) {
  (Py.set(e, t), Fr(t, [e]));
}
for (var Kl = 0; Kl < Ah.length; Kl++) {
  var Gl = Ah[Kl],
    US = Gl.toLowerCase(),
    WS = Gl[0].toUpperCase() + Gl.slice(1);
  sr(US, "on" + WS);
}
sr(Sy, "onAnimationEnd");
sr(Ey, "onAnimationIteration");
sr(Cy, "onAnimationStart");
sr("dblclick", "onDoubleClick");
sr("focusin", "onFocus");
sr("focusout", "onBlur");
sr(Ty, "onTransitionEnd");
Ai("onMouseEnter", ["mouseout", "mouseover"]);
Ai("onMouseLeave", ["mouseout", "mouseover"]);
Ai("onPointerEnter", ["pointerout", "pointerover"]);
Ai("onPointerLeave", ["pointerout", "pointerover"]);
Fr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Fr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Fr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Fr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Fr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ho =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  HS = new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));
function Mh(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), U1(r, t, void 0, e), (e.currentTarget = null));
}
function by(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          (Mh(i, a, u), (o = l));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          (Mh(i, a, u), (o = l));
        }
    }
  }
  if (ha) throw ((e = Wu), (ha = !1), (Wu = null), e);
}
function se(e, t) {
  var n = t[ec];
  n === void 0 && (n = t[ec] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ky(t, e, 2, !1), n.add(r));
}
function Ql(e, t, n) {
  var r = 0;
  (t && (r |= 4), ky(n, e, r, t));
}
var ks = "_reactListening" + Math.random().toString(36).slice(2);
function Vo(e) {
  if (!e[ks]) {
    ((e[ks] = !0),
      Og.forEach(function (n) {
        n !== "selectionchange" && (HS.has(n) || Ql(n, !1, e), Ql(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ks] || ((t[ks] = !0), Ql("selectionchange", !1, t));
  }
}
function ky(e, t, n, r) {
  switch (cy(t)) {
    case 1:
      var i = oS;
      break;
    case 4:
      i = sS;
      break;
    default:
      i = Ed;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !Uu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function Yl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = yr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Xg(function () {
    var u = o,
      c = vd(n),
      d = [];
    e: {
      var f = Py.get(e);
      if (f !== void 0) {
        var h = Td,
          v = e;
        switch (e) {
          case "keypress":
            if (Qs(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = SS;
            break;
          case "focusin":
            ((v = "focus"), (h = $l));
            break;
          case "focusout":
            ((v = "blur"), (h = $l));
            break;
          case "beforeblur":
          case "afterblur":
            h = $l;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = vh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = uS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = TS;
            break;
          case Sy:
          case Ey:
          case Cy:
            h = fS;
            break;
          case Ty:
            h = bS;
            break;
          case "scroll":
            h = aS;
            break;
          case "wheel":
            h = RS;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = pS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = xh;
        }
        var g = (t & 4) !== 0,
          w = !g && e === "scroll",
          m = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var p = u, y; p !== null; ) {
          y = p;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              m !== null && ((S = No(p, m)), S != null && g.push(Fo(p, S, y)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < g.length &&
          ((f = new h(f, v, null, n, c)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Bu &&
            (v = n.relatedTarget || n.fromElement) &&
            (yr(v) || v[hn]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          h
            ? ((v = n.relatedTarget || n.toElement),
              (h = u),
              (v = v ? yr(v) : null),
              v !== null &&
                ((w = _r(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((h = null), (v = u)),
          h !== v)
        ) {
          if (
            ((g = vh),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = xh),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (w = h == null ? f : ei(h)),
            (y = v == null ? f : ei(v)),
            (f = new g(S, p + "leave", h, n, c)),
            (f.target = w),
            (f.relatedTarget = y),
            (S = null),
            yr(c) === u &&
              ((g = new g(m, p + "enter", v, n, c)),
              (g.target = y),
              (g.relatedTarget = w),
              (S = g)),
            (w = S),
            h && v)
          )
            t: {
              for (g = h, m = v, p = 0, y = g; y; y = Gr(y)) p++;
              for (y = 0, S = m; S; S = Gr(S)) y++;
              for (; 0 < p - y; ) ((g = Gr(g)), p--);
              for (; 0 < y - p; ) ((m = Gr(m)), y--);
              for (; p--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t;
                ((g = Gr(g)), (m = Gr(m)));
              }
              g = null;
            }
          else g = null;
          (h !== null && Nh(d, f, h, g, !1),
            v !== null && w !== null && Nh(d, w, v, g, !0));
        }
      }
      e: {
        if (
          ((f = u ? ei(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var E = jS;
        else if (Ch(f))
          if (gy) E = _S;
          else {
            E = VS;
            var T = IS;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (E = FS);
        if (E && (E = E(e, u))) {
          my(d, E, n, c);
          break e;
        }
        (T && T(e, f, u),
          e === "focusout" &&
            (T = f._wrapperState) &&
            T.controlled &&
            f.type === "number" &&
            Iu(f, "number", f.value));
      }
      switch (((T = u ? ei(u) : window), e)) {
        case "focusin":
          (Ch(T) || T.contentEditable === "true") &&
            ((Zr = T), (Qu = u), (wo = null));
          break;
        case "focusout":
          wo = Qu = Zr = null;
          break;
        case "mousedown":
          Yu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Yu = !1), Rh(d, n, c));
          break;
        case "selectionchange":
          if ($S) break;
        case "keydown":
        case "keyup":
          Rh(d, n, c);
      }
      var P;
      if (bd)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        qr
          ? hy(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      (k &&
        (fy &&
          n.locale !== "ko" &&
          (qr || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && qr && (P = dy())
            : ((zn = c),
              (Cd = "value" in zn ? zn.value : zn.textContent),
              (qr = !0))),
        (T = va(u, k)),
        0 < T.length &&
          ((k = new wh(k, e, null, n, c)),
          d.push({ event: k, listeners: T }),
          P ? (k.data = P) : ((P = py(n)), P !== null && (k.data = P)))),
        (P = MS ? NS(e, n) : DS(e, n)) &&
          ((u = va(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new wh("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = P))));
    }
    by(d, t);
  });
}
function Fo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function va(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    (i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = No(e, n)),
      o != null && r.unshift(Fo(e, o, i)),
      (o = No(e, t)),
      o != null && r.push(Fo(e, o, i))),
      (e = e.return));
  }
  return r;
}
function Gr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Nh(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = No(n, o)), l != null && s.unshift(Fo(n, l, a)))
        : i || ((l = No(n, o)), l != null && s.push(Fo(n, l, a)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var KS = /\r\n?/g,
  GS = /\u0000|\uFFFD/g;
function Dh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      KS,
      `
`,
    )
    .replace(GS, "");
}
function Rs(e, t, n) {
  if (((t = Dh(t)), Dh(e) !== t && n)) throw Error(N(425));
}
function wa() {}
var Xu = null,
  qu = null;
function Zu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ju = typeof setTimeout == "function" ? setTimeout : void 0,
  QS = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Lh = typeof Promise == "function" ? Promise : void 0,
  YS =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Lh < "u"
        ? function (e) {
            return Lh.resolve(null).then(e).catch(XS);
          }
        : Ju;
function XS(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), Oo(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Oo(t);
}
function Gn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Oh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ui = Math.random().toString(36).slice(2),
  Qt = "__reactFiber$" + Ui,
  _o = "__reactProps$" + Ui,
  hn = "__reactContainer$" + Ui,
  ec = "__reactEvents$" + Ui,
  qS = "__reactListeners$" + Ui,
  ZS = "__reactHandles$" + Ui;
function yr(e) {
  var t = e[Qt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[hn] || n[Qt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Oh(e); e !== null; ) {
          if ((n = e[Qt])) return n;
          e = Oh(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function os(e) {
  return (
    (e = e[Qt] || e[hn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ei(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function tl(e) {
  return e[_o] || null;
}
var tc = [],
  ti = -1;
function ar(e) {
  return { current: e };
}
function ae(e) {
  0 > ti || ((e.current = tc[ti]), (tc[ti] = null), ti--);
}
function re(e, t) {
  (ti++, (tc[ti] = e.current), (e.current = t));
}
var Jn = {},
  Fe = ar(Jn),
  Xe = ar(!1),
  Dr = Jn;
function Mi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function qe(e) {
  return ((e = e.childContextTypes), e != null);
}
function xa() {
  (ae(Xe), ae(Fe));
}
function jh(e, t, n) {
  if (Fe.current !== Jn) throw Error(N(168));
  (re(Fe, t), re(Xe, n));
}
function Ry(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(N(108, I1(e) || "Unknown", i));
  return pe({}, n, r);
}
function Sa(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jn),
    (Dr = Fe.current),
    re(Fe, e),
    re(Xe, Xe.current),
    !0
  );
}
function Ih(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  (n
    ? ((e = Ry(e, t, Dr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(Xe),
      ae(Fe),
      re(Fe, e))
    : ae(Xe),
    re(Xe, n));
}
var an = null,
  nl = !1,
  ql = !1;
function Ay(e) {
  an === null ? (an = [e]) : an.push(e);
}
function JS(e) {
  ((nl = !0), Ay(e));
}
function lr() {
  if (!ql && an !== null) {
    ql = !0;
    var e = 0,
      t = te;
    try {
      var n = an;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((an = null), (nl = !1));
    } catch (i) {
      throw (an !== null && (an = an.slice(e + 1)), ey(wd, lr), i);
    } finally {
      ((te = t), (ql = !1));
    }
  }
  return null;
}
var ni = [],
  ri = 0,
  Ea = null,
  Ca = 0,
  ft = [],
  ht = 0,
  Lr = null,
  un = 1,
  cn = "";
function pr(e, t) {
  ((ni[ri++] = Ca), (ni[ri++] = Ea), (Ea = e), (Ca = t));
}
function My(e, t, n) {
  ((ft[ht++] = un), (ft[ht++] = cn), (ft[ht++] = Lr), (Lr = e));
  var r = un;
  e = cn;
  var i = 32 - Ot(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var o = 32 - Ot(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    ((o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (un = (1 << (32 - Ot(t) + i)) | (n << i) | r),
      (cn = o + e));
  } else ((un = (1 << o) | (n << i) | r), (cn = e));
}
function Rd(e) {
  e.return !== null && (pr(e, 1), My(e, 1, 0));
}
function Ad(e) {
  for (; e === Ea; )
    ((Ea = ni[--ri]), (ni[ri] = null), (Ca = ni[--ri]), (ni[ri] = null));
  for (; e === Lr; )
    ((Lr = ft[--ht]),
      (ft[ht] = null),
      (cn = ft[--ht]),
      (ft[ht] = null),
      (un = ft[--ht]),
      (ft[ht] = null));
}
var ot = null,
  it = null,
  ue = !1,
  Lt = null;
function Ny(e, t) {
  var n = mt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Vh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ot = e), (it = Gn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ot = e), (it = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Lr !== null ? { id: un, overflow: cn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = mt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ot = e),
            (it = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function nc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function rc(e) {
  if (ue) {
    var t = it;
    if (t) {
      var n = t;
      if (!Vh(e, t)) {
        if (nc(e)) throw Error(N(418));
        t = Gn(n.nextSibling);
        var r = ot;
        t && Vh(e, t)
          ? Ny(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (ot = e));
      }
    } else {
      if (nc(e)) throw Error(N(418));
      ((e.flags = (e.flags & -4097) | 2), (ue = !1), (ot = e));
    }
  }
}
function Fh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ot = e;
}
function As(e) {
  if (e !== ot) return !1;
  if (!ue) return (Fh(e), (ue = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Zu(e.type, e.memoizedProps))),
    t && (t = it))
  ) {
    if (nc(e)) throw (Dy(), Error(N(418)));
    for (; t; ) (Ny(e, t), (t = Gn(t.nextSibling)));
  }
  if ((Fh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              it = Gn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      it = null;
    }
  } else it = ot ? Gn(e.stateNode.nextSibling) : null;
  return !0;
}
function Dy() {
  for (var e = it; e; ) e = Gn(e.nextSibling);
}
function Ni() {
  ((it = ot = null), (ue = !1));
}
function Md(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
var eE = vn.ReactCurrentBatchConfig;
function ro(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Ms(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function _h(e) {
  var t = e._init;
  return t(e._payload);
}
function Ly(e) {
  function t(m, p) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [p]), (m.flags |= 16)) : y.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) (t(m, p), (p = p.sibling));
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      (p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling));
    return m;
  }
  function i(m, p) {
    return ((m = qn(m, p)), (m.index = 0), (m.sibling = null), m);
  }
  function o(m, p, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < p ? ((m.flags |= 2), p) : y)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function s(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function a(m, p, y, S) {
    return p === null || p.tag !== 6
      ? ((p = iu(y, m.mode, S)), (p.return = m), p)
      : ((p = i(p, y)), (p.return = m), p);
  }
  function l(m, p, y, S) {
    var E = y.type;
    return E === Xr
      ? c(m, p, y.props.children, S, y.key)
      : p !== null &&
          (p.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === Nn &&
              _h(E) === p.type))
        ? ((S = i(p, y.props)), (S.ref = ro(m, p, y)), (S.return = m), S)
        : ((S = ta(y.type, y.key, y.props, null, m.mode, S)),
          (S.ref = ro(m, p, y)),
          (S.return = m),
          S);
  }
  function u(m, p, y, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== y.containerInfo ||
      p.stateNode.implementation !== y.implementation
      ? ((p = ou(y, m.mode, S)), (p.return = m), p)
      : ((p = i(p, y.children || [])), (p.return = m), p);
  }
  function c(m, p, y, S, E) {
    return p === null || p.tag !== 7
      ? ((p = Ar(y, m.mode, S, E)), (p.return = m), p)
      : ((p = i(p, y)), (p.return = m), p);
  }
  function d(m, p, y) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return ((p = iu("" + p, m.mode, y)), (p.return = m), p);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ws:
          return (
            (y = ta(p.type, p.key, p.props, null, m.mode, y)),
            (y.ref = ro(m, null, p)),
            (y.return = m),
            y
          );
        case Yr:
          return ((p = ou(p, m.mode, y)), (p.return = m), p);
        case Nn:
          var S = p._init;
          return d(m, S(p._payload), y);
      }
      if (co(p) || Zi(p))
        return ((p = Ar(p, m.mode, y, null)), (p.return = m), p);
      Ms(m, p);
    }
    return null;
  }
  function f(m, p, y, S) {
    var E = p !== null ? p.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return E !== null ? null : a(m, p, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ws:
          return y.key === E ? l(m, p, y, S) : null;
        case Yr:
          return y.key === E ? u(m, p, y, S) : null;
        case Nn:
          return ((E = y._init), f(m, p, E(y._payload), S));
      }
      if (co(y) || Zi(y)) return E !== null ? null : c(m, p, y, S, null);
      Ms(m, y);
    }
    return null;
  }
  function h(m, p, y, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return ((m = m.get(y) || null), a(p, m, "" + S, E));
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ws:
          return (
            (m = m.get(S.key === null ? y : S.key) || null),
            l(p, m, S, E)
          );
        case Yr:
          return (
            (m = m.get(S.key === null ? y : S.key) || null),
            u(p, m, S, E)
          );
        case Nn:
          var T = S._init;
          return h(m, p, y, T(S._payload), E);
      }
      if (co(S) || Zi(S)) return ((m = m.get(y) || null), c(p, m, S, E, null));
      Ms(p, S);
    }
    return null;
  }
  function v(m, p, y, S) {
    for (
      var E = null, T = null, P = p, k = (p = 0), D = null;
      P !== null && k < y.length;
      k++
    ) {
      P.index > k ? ((D = P), (P = null)) : (D = P.sibling);
      var R = f(m, P, y[k], S);
      if (R === null) {
        P === null && (P = D);
        break;
      }
      (e && P && R.alternate === null && t(m, P),
        (p = o(R, p, k)),
        T === null ? (E = R) : (T.sibling = R),
        (T = R),
        (P = D));
    }
    if (k === y.length) return (n(m, P), ue && pr(m, k), E);
    if (P === null) {
      for (; k < y.length; k++)
        ((P = d(m, y[k], S)),
          P !== null &&
            ((p = o(P, p, k)),
            T === null ? (E = P) : (T.sibling = P),
            (T = P)));
      return (ue && pr(m, k), E);
    }
    for (P = r(m, P); k < y.length; k++)
      ((D = h(P, m, k, y[k], S)),
        D !== null &&
          (e && D.alternate !== null && P.delete(D.key === null ? k : D.key),
          (p = o(D, p, k)),
          T === null ? (E = D) : (T.sibling = D),
          (T = D)));
    return (
      e &&
        P.forEach(function (V) {
          return t(m, V);
        }),
      ue && pr(m, k),
      E
    );
  }
  function g(m, p, y, S) {
    var E = Zi(y);
    if (typeof E != "function") throw Error(N(150));
    if (((y = E.call(y)), y == null)) throw Error(N(151));
    for (
      var T = (E = null), P = p, k = (p = 0), D = null, R = y.next();
      P !== null && !R.done;
      k++, R = y.next()
    ) {
      P.index > k ? ((D = P), (P = null)) : (D = P.sibling);
      var V = f(m, P, R.value, S);
      if (V === null) {
        P === null && (P = D);
        break;
      }
      (e && P && V.alternate === null && t(m, P),
        (p = o(V, p, k)),
        T === null ? (E = V) : (T.sibling = V),
        (T = V),
        (P = D));
    }
    if (R.done) return (n(m, P), ue && pr(m, k), E);
    if (P === null) {
      for (; !R.done; k++, R = y.next())
        ((R = d(m, R.value, S)),
          R !== null &&
            ((p = o(R, p, k)),
            T === null ? (E = R) : (T.sibling = R),
            (T = R)));
      return (ue && pr(m, k), E);
    }
    for (P = r(m, P); !R.done; k++, R = y.next())
      ((R = h(P, m, k, R.value, S)),
        R !== null &&
          (e && R.alternate !== null && P.delete(R.key === null ? k : R.key),
          (p = o(R, p, k)),
          T === null ? (E = R) : (T.sibling = R),
          (T = R)));
    return (
      e &&
        P.forEach(function (j) {
          return t(m, j);
        }),
      ue && pr(m, k),
      E
    );
  }
  function w(m, p, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Xr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case ws:
          e: {
            for (var E = y.key, T = p; T !== null; ) {
              if (T.key === E) {
                if (((E = y.type), E === Xr)) {
                  if (T.tag === 7) {
                    (n(m, T.sibling),
                      (p = i(T, y.props.children)),
                      (p.return = m),
                      (m = p));
                    break e;
                  }
                } else if (
                  T.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Nn &&
                    _h(E) === T.type)
                ) {
                  (n(m, T.sibling),
                    (p = i(T, y.props)),
                    (p.ref = ro(m, T, y)),
                    (p.return = m),
                    (m = p));
                  break e;
                }
                n(m, T);
                break;
              } else t(m, T);
              T = T.sibling;
            }
            y.type === Xr
              ? ((p = Ar(y.props.children, m.mode, S, y.key)),
                (p.return = m),
                (m = p))
              : ((S = ta(y.type, y.key, y.props, null, m.mode, S)),
                (S.ref = ro(m, p, y)),
                (S.return = m),
                (m = S));
          }
          return s(m);
        case Yr:
          e: {
            for (T = y.key; p !== null; ) {
              if (p.key === T)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === y.containerInfo &&
                  p.stateNode.implementation === y.implementation
                ) {
                  (n(m, p.sibling),
                    (p = i(p, y.children || [])),
                    (p.return = m),
                    (m = p));
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            ((p = ou(y, m.mode, S)), (p.return = m), (m = p));
          }
          return s(m);
        case Nn:
          return ((T = y._init), w(m, p, T(y._payload), S));
      }
      if (co(y)) return v(m, p, y, S);
      if (Zi(y)) return g(m, p, y, S);
      Ms(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, y)), (p.return = m), (m = p))
          : (n(m, p), (p = iu(y, m.mode, S)), (p.return = m), (m = p)),
        s(m))
      : n(m, p);
  }
  return w;
}
var Di = Ly(!0),
  Oy = Ly(!1),
  Ta = ar(null),
  Pa = null,
  ii = null,
  Nd = null;
function Dd() {
  Nd = ii = Pa = null;
}
function Ld(e) {
  var t = Ta.current;
  (ae(Ta), (e._currentValue = t));
}
function ic(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function gi(e, t) {
  ((Pa = e),
    (Nd = ii = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ye = !0), (e.firstContext = null)));
}
function wt(e) {
  var t = e._currentValue;
  if (Nd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ii === null)) {
      if (Pa === null) throw Error(N(308));
      ((ii = e), (Pa.dependencies = { lanes: 0, firstContext: e }));
    } else ii = ii.next = e;
  return t;
}
var vr = null;
function Od(e) {
  vr === null ? (vr = [e]) : vr.push(e);
}
function jy(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Od(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    pn(e, r)
  );
}
function pn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Dn = !1;
function jd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Iy(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function dn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Qn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      pn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Od(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    pn(e, n)
  );
}
function Ys(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), xd(e, n));
  }
}
function zh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (o === null ? (i = o = s) : (o = o.next = s), (n = n.next));
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function ba(e, t, n, r) {
  var i = e.updateQueue;
  Dn = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), s === null ? (o = u) : (s.next = u), (s = l));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = i.baseState;
    ((s = 0), (c = u = l = null), (a = o));
    do {
      var f = a.lane,
        h = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            g = a;
          switch (((f = t), (h = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                d = v.call(h, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (f = typeof v == "function" ? v.call(h, d, f) : v),
                f == null)
              )
                break e;
              d = pe({}, d, f);
              break e;
            case 2:
              Dn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        ((h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (s |= f));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((s |= i.lane), (i = i.next));
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    ((jr |= s), (e.lanes = s), (e.memoizedState = d));
  }
}
function Bh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(N(191, i));
        i.call(r);
      }
    }
}
var ss = {},
  qt = ar(ss),
  zo = ar(ss),
  Bo = ar(ss);
function wr(e) {
  if (e === ss) throw Error(N(174));
  return e;
}
function Id(e, t) {
  switch ((re(Bo, t), re(zo, e), re(qt, ss), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fu(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Fu(t, e)));
  }
  (ae(qt), re(qt, t));
}
function Li() {
  (ae(qt), ae(zo), ae(Bo));
}
function Vy(e) {
  wr(Bo.current);
  var t = wr(qt.current),
    n = Fu(t, e.type);
  t !== n && (re(zo, e), re(qt, n));
}
function Vd(e) {
  zo.current === e && (ae(qt), ae(zo));
}
var de = ar(0);
function ka(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Zl = [];
function Fd() {
  for (var e = 0; e < Zl.length; e++)
    Zl[e]._workInProgressVersionPrimary = null;
  Zl.length = 0;
}
var Xs = vn.ReactCurrentDispatcher,
  Jl = vn.ReactCurrentBatchConfig,
  Or = 0,
  he = null,
  Ee = null,
  Pe = null,
  Ra = !1,
  xo = !1,
  $o = 0,
  tE = 0;
function Oe() {
  throw Error(N(321));
}
function _d(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Vt(e[n], t[n])) return !1;
  return !0;
}
function zd(e, t, n, r, i, o) {
  if (
    ((Or = o),
    (he = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Xs.current = e === null || e.memoizedState === null ? oE : sE),
    (e = n(r, i)),
    xo)
  ) {
    o = 0;
    do {
      if (((xo = !1), ($o = 0), 25 <= o)) throw Error(N(301));
      ((o += 1),
        (Pe = Ee = null),
        (t.updateQueue = null),
        (Xs.current = aE),
        (e = n(r, i)));
    } while (xo);
  }
  if (
    ((Xs.current = Aa),
    (t = Ee !== null && Ee.next !== null),
    (Or = 0),
    (Pe = Ee = he = null),
    (Ra = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Bd() {
  var e = $o !== 0;
  return (($o = 0), e);
}
function Ut() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Pe === null ? (he.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe);
}
function xt() {
  if (Ee === null) {
    var e = he.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = Pe === null ? he.memoizedState : Pe.next;
  if (t !== null) ((Pe = t), (Ee = e));
  else {
    if (e === null) throw Error(N(310));
    ((Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      Pe === null ? (he.memoizedState = Pe = e) : (Pe = Pe.next = e));
  }
  return Pe;
}
function Uo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function eu(e) {
  var t = xt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = Ee,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      ((i.next = o.next), (o.next = s));
    }
    ((r.baseQueue = i = o), (n.pending = null));
  }
  if (i !== null) {
    ((o = i.next), (r = r.baseState));
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((Or & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (he.lanes |= c),
          (jr |= c));
      }
      u = u.next;
    } while (u !== null && u !== o);
    (l === null ? (s = r) : (l.next = a),
      Vt(r, t.memoizedState) || (Ye = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((o = i.lane), (he.lanes |= o), (jr |= o), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function tu(e) {
  var t = xt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do ((o = e(o, s.action)), (s = s.next));
    while (s !== i);
    (Vt(o, t.memoizedState) || (Ye = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function Fy() {}
function _y(e, t) {
  var n = he,
    r = xt(),
    i = t(),
    o = !Vt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ye = !0)),
    (r = r.queue),
    $d($y.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Pe !== null && Pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Wo(9, By.bind(null, n, r, i, t), void 0, null),
      be === null)
    )
      throw Error(N(349));
    Or & 30 || zy(n, t, i);
  }
  return i;
}
function zy(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function By(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Uy(t) && Wy(e));
}
function $y(e, t, n) {
  return n(function () {
    Uy(t) && Wy(e);
  });
}
function Uy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Vt(e, n);
  } catch {
    return !0;
  }
}
function Wy(e) {
  var t = pn(e, 1);
  t !== null && jt(t, e, 1, -1);
}
function $h(e) {
  var t = Ut();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Uo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = iE.bind(null, he, e)),
    [t.memoizedState, e]
  );
}
function Wo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Hy() {
  return xt().memoizedState;
}
function qs(e, t, n, r) {
  var i = Ut();
  ((he.flags |= e),
    (i.memoizedState = Wo(1 | t, n, void 0, r === void 0 ? null : r)));
}
function rl(e, t, n, r) {
  var i = xt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ee !== null) {
    var s = Ee.memoizedState;
    if (((o = s.destroy), r !== null && _d(r, s.deps))) {
      i.memoizedState = Wo(t, n, o, r);
      return;
    }
  }
  ((he.flags |= e), (i.memoizedState = Wo(1 | t, n, o, r)));
}
function Uh(e, t) {
  return qs(8390656, 8, e, t);
}
function $d(e, t) {
  return rl(2048, 8, e, t);
}
function Ky(e, t) {
  return rl(4, 2, e, t);
}
function Gy(e, t) {
  return rl(4, 4, e, t);
}
function Qy(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Yy(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    rl(4, 4, Qy.bind(null, t, e), n)
  );
}
function Ud() {}
function Xy(e, t) {
  var n = xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _d(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function qy(e, t) {
  var n = xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _d(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Zy(e, t, n) {
  return Or & 21
    ? (Vt(n, t) || ((n = ry()), (he.lanes |= n), (jr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ye = !0)), (e.memoizedState = n));
}
function nE(e, t) {
  var n = te;
  ((te = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Jl.transition;
  Jl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((te = n), (Jl.transition = r));
  }
}
function Jy() {
  return xt().memoizedState;
}
function rE(e, t, n) {
  var r = Xn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ev(e))
  )
    tv(t, n);
  else if (((n = jy(e, t, n, r)), n !== null)) {
    var i = We();
    (jt(n, e, r, i), nv(n, t, r));
  }
}
function iE(e, t, n) {
  var r = Xn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ev(e)) tv(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Vt(a, s))) {
          var l = t.interleaved;
          (l === null
            ? ((i.next = i), Od(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = jy(e, t, i, r)),
      n !== null && ((i = We()), jt(n, e, r, i), nv(n, t, r)));
  }
}
function ev(e) {
  var t = e.alternate;
  return e === he || (t !== null && t === he);
}
function tv(e, t) {
  xo = Ra = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function nv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), xd(e, n));
  }
}
var Aa = {
    readContext: wt,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1,
  },
  oE = {
    readContext: wt,
    useCallback: function (e, t) {
      return ((Ut().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: wt,
    useEffect: Uh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        qs(4194308, 4, Qy.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return qs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return qs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ut();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ut();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = rE.bind(null, he, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ut();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: $h,
    useDebugValue: Ud,
    useDeferredValue: function (e) {
      return (Ut().memoizedState = e);
    },
    useTransition: function () {
      var e = $h(!1),
        t = e[0];
      return ((e = nE.bind(null, e[1])), (Ut().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = he,
        i = Ut();
      if (ue) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), be === null)) throw Error(N(349));
        Or & 30 || zy(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Uh($y.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Wo(9, By.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ut(),
        t = be.identifierPrefix;
      if (ue) {
        var n = cn,
          r = un;
        ((n = (r & ~(1 << (32 - Ot(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = $o++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = tE++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  sE = {
    readContext: wt,
    useCallback: Xy,
    useContext: wt,
    useEffect: $d,
    useImperativeHandle: Yy,
    useInsertionEffect: Ky,
    useLayoutEffect: Gy,
    useMemo: qy,
    useReducer: eu,
    useRef: Hy,
    useState: function () {
      return eu(Uo);
    },
    useDebugValue: Ud,
    useDeferredValue: function (e) {
      var t = xt();
      return Zy(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = eu(Uo)[0],
        t = xt().memoizedState;
      return [e, t];
    },
    useMutableSource: Fy,
    useSyncExternalStore: _y,
    useId: Jy,
    unstable_isNewReconciler: !1,
  },
  aE = {
    readContext: wt,
    useCallback: Xy,
    useContext: wt,
    useEffect: $d,
    useImperativeHandle: Yy,
    useInsertionEffect: Ky,
    useLayoutEffect: Gy,
    useMemo: qy,
    useReducer: tu,
    useRef: Hy,
    useState: function () {
      return tu(Uo);
    },
    useDebugValue: Ud,
    useDeferredValue: function (e) {
      var t = xt();
      return Ee === null ? (t.memoizedState = e) : Zy(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = tu(Uo)[0],
        t = xt().memoizedState;
      return [e, t];
    },
    useMutableSource: Fy,
    useSyncExternalStore: _y,
    useId: Jy,
    unstable_isNewReconciler: !1,
  };
function Rt(e, t) {
  if (e && e.defaultProps) {
    ((t = pe({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function oc(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var il = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? _r(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      i = Xn(e),
      o = dn(r, i);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = Qn(e, o, i)),
      t !== null && (jt(t, e, i, r), Ys(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      i = Xn(e),
      o = dn(r, i);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Qn(e, o, i)),
      t !== null && (jt(t, e, i, r), Ys(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = We(),
      r = Xn(e),
      i = dn(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = Qn(e, i, r)),
      t !== null && (jt(t, e, r, n), Ys(t, e, r)));
  },
};
function Wh(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Io(n, r) || !Io(i, o)
        : !0
  );
}
function rv(e, t, n) {
  var r = !1,
    i = Jn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = wt(o))
      : ((i = qe(t) ? Dr : Fe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Mi(e, i) : Jn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = il),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Hh(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && il.enqueueReplaceState(t, t.state, null));
}
function sc(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), jd(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (i.context = wt(o))
    : ((o = qe(t) ? Dr : Fe.current), (i.context = Mi(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (oc(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && il.enqueueReplaceState(i, i.state, null),
      ba(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function Oi(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += j1(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function nu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ac(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var lE = typeof WeakMap == "function" ? WeakMap : Map;
function iv(e, t, n) {
  ((n = dn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Na || ((Na = !0), (yc = r)), ac(e, t));
    }),
    n
  );
}
function ov(e, t, n) {
  ((n = dn(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ac(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        (ac(e, t),
          typeof r != "function" &&
            (Yn === null ? (Yn = new Set([this])) : Yn.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Kh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new lE();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = EE.bind(null, e, t, n)), t.then(e, e));
}
function Gh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Qh(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = dn(-1, 1)), (t.tag = 2), Qn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var uE = vn.ReactCurrentOwner,
  Ye = !1;
function ze(e, t, n, r) {
  t.child = e === null ? Oy(t, null, n, r) : Di(t, e.child, n, r);
}
function Yh(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    gi(t, i),
    (r = zd(e, t, n, r, o, i)),
    (n = Bd()),
    e !== null && !Ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        mn(e, t, i))
      : (ue && n && Rd(t), (t.flags |= 1), ze(e, t, r, i), t.child)
  );
}
function Xh(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !qd(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), sv(e, t, o, r, i))
      : ((e = ta(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Io), n(s, r) && e.ref === t.ref)
    )
      return mn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = qn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function sv(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Io(o, r) && e.ref === t.ref)
      if (((Ye = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ye = !0);
      else return ((t.lanes = e.lanes), mn(e, t, i));
  }
  return lc(e, t, n, r, i);
}
function av(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(si, nt),
        (nt |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          re(si, nt),
          (nt |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        re(si, nt),
        (nt |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      re(si, nt),
      (nt |= r));
  return (ze(e, t, i, n), t.child);
}
function lv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function lc(e, t, n, r, i) {
  var o = qe(n) ? Dr : Fe.current;
  return (
    (o = Mi(t, o)),
    gi(t, i),
    (n = zd(e, t, n, r, o, i)),
    (r = Bd()),
    e !== null && !Ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        mn(e, t, i))
      : (ue && r && Rd(t), (t.flags |= 1), ze(e, t, n, i), t.child)
  );
}
function qh(e, t, n, r, i) {
  if (qe(n)) {
    var o = !0;
    Sa(t);
  } else o = !1;
  if ((gi(t, i), t.stateNode === null))
    (Zs(e, t), rv(t, n, r), sc(t, n, r, i), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = wt(u))
      : ((u = qe(n) ? Dr : Fe.current), (u = Mi(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    (d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Hh(t, s, r, u)),
      (Dn = !1));
    var f = t.memoizedState;
    ((s.state = f),
      ba(t, r, s, i),
      (l = t.memoizedState),
      a !== r || f !== l || Xe.current || Dn
        ? (typeof c == "function" && (oc(t, n, c, r), (l = t.memoizedState)),
          (a = Dn || Wh(t, n, a, r, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      Iy(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Rt(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = wt(l))
        : ((l = qe(n) ? Dr : Fe.current), (l = Mi(t, l))));
    var h = n.getDerivedStateFromProps;
    ((c =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && Hh(t, s, r, l)),
      (Dn = !1),
      (f = t.memoizedState),
      (s.state = f),
      ba(t, r, s, i));
    var v = t.memoizedState;
    a !== d || f !== v || Xe.current || Dn
      ? (typeof h == "function" && (oc(t, n, h, r), (v = t.memoizedState)),
        (u = Dn || Wh(t, n, u, r, f, v, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return uc(e, t, n, r, o, i);
}
function uc(e, t, n, r, i, o) {
  lv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (i && Ih(t, n, !1), mn(e, t, o));
  ((r = t.stateNode), (uE.current = t));
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Di(t, e.child, null, o)), (t.child = Di(t, null, a, o)))
      : ze(e, t, a, o),
    (t.memoizedState = r.state),
    i && Ih(t, n, !0),
    t.child
  );
}
function uv(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? jh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && jh(e, t.context, !1),
    Id(e, t.containerInfo));
}
function Zh(e, t, n, r, i) {
  return (Ni(), Md(i), (t.flags |= 256), ze(e, t, n, r), t.child);
}
var cc = { dehydrated: null, treeContext: null, retryLane: 0 };
function dc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function cv(e, t, n) {
  var r = t.pendingProps,
    i = de.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    re(de, i & 1),
    e === null)
  )
    return (
      rc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = al(s, r, 0, null)),
              (e = Ar(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = dc(n)),
              (t.memoizedState = cc),
              e)
            : Wd(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return cE(e, t, s, r, a, i, n);
  if (o) {
    ((o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = qn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = qn(a, o)) : ((o = Ar(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? dc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = cc),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = qn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Wd(e, t) {
  return (
    (t = al({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ns(e, t, n, r) {
  return (
    r !== null && Md(r),
    Di(t, e.child, null, n),
    (e = Wd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function cE(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = nu(Error(N(422)))), Ns(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = al({ mode: "visible", children: r.children }, i, 0, null)),
          (o = Ar(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Di(t, e.child, null, s),
          (t.child.memoizedState = dc(s)),
          (t.memoizedState = cc),
          o);
  if (!(t.mode & 1)) return Ns(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (o = Error(N(419))),
      (r = nu(o, r, void 0)),
      Ns(e, t, s, r)
    );
  }
  if (((a = (s & e.childLanes) !== 0), Ye || a)) {
    if (((r = be), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), pn(e, i), jt(r, e, i, -1)));
    }
    return (Xd(), (r = nu(Error(N(421)))), Ns(e, t, s, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = CE.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (it = Gn(i.nextSibling)),
      (ot = t),
      (ue = !0),
      (Lt = null),
      e !== null &&
        ((ft[ht++] = un),
        (ft[ht++] = cn),
        (ft[ht++] = Lr),
        (un = e.id),
        (cn = e.overflow),
        (Lr = t)),
      (t = Wd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Jh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), ic(e.return, t, n));
}
function ru(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function dv(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ze(e, t, r.children, n), (r = de.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Jh(e, n, t);
        else if (e.tag === 19) Jh(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((re(de, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && ka(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ru(t, !1, i, n, o));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ka(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        ru(t, !0, n, null, o);
        break;
      case "together":
        ru(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Zs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function mn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = qn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = qn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function dE(e, t, n) {
  switch (t.tag) {
    case 3:
      (uv(t), Ni());
      break;
    case 5:
      Vy(t);
      break;
    case 1:
      qe(t.type) && Sa(t);
      break;
    case 4:
      Id(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (re(Ta, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(de, de.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? cv(e, t, n)
            : (re(de, de.current & 1),
              (e = mn(e, t, n)),
              e !== null ? e.sibling : null);
      re(de, de.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return dv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        re(de, de.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), av(e, t, n));
  }
  return mn(e, t, n);
}
var fv, fc, hv, pv;
fv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
fc = function () {};
hv = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), wr(qt.current));
    var o = null;
    switch (n) {
      case "input":
        ((i = Ou(e, i)), (r = Ou(e, r)), (o = []));
        break;
      case "select":
        ((i = pe({}, i, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (o = []));
        break;
      case "textarea":
        ((i = Vu(e, i)), (r = Vu(e, r)), (o = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = wa);
    }
    _u(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ao.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else (n || (o || (o = []), o.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (o = o || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Ao.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && se("scroll", e),
                    o || a === l || (o = []))
                  : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
pv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function io(e, t) {
  if (!ue)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function fE(e, t, n) {
  var r = t.pendingProps;
  switch ((Ad(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (je(t), null);
    case 1:
      return (qe(t.type) && xa(), je(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Li(),
        ae(Xe),
        ae(Fe),
        Fd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (As(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Lt !== null && (xc(Lt), (Lt = null)))),
        fc(e, t),
        je(t),
        null
      );
    case 5:
      Vd(t);
      var i = wr(Bo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (hv(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return (je(t), null);
        }
        if (((e = wr(qt.current)), As(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[Qt] = t), (r[_o] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (se("cancel", r), se("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ho.length; i++) se(ho[i], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (se("error", r), se("load", r));
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              (lh(r, o), se("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!o.multiple }),
                se("invalid", r));
              break;
            case "textarea":
              (ch(r, o), se("invalid", r));
          }
          (_u(n, o), (i = null));
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Rs(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Rs(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Ao.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              (xs(r), uh(r, o, !0));
              break;
            case "textarea":
              (xs(r), dh(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = wa);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = $g(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Qt] = t),
            (e[_o] = r),
            fv(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = zu(n, r)), n)) {
              case "dialog":
                (se("cancel", e), se("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (se("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < ho.length; i++) se(ho[i], e);
                i = r;
                break;
              case "source":
                (se("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (se("error", e), se("load", e), (i = r));
                break;
              case "details":
                (se("toggle", e), (i = r));
                break;
              case "input":
                (lh(e, r), (i = Ou(e, r)), se("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = pe({}, r, { value: void 0 })),
                  se("invalid", e));
                break;
              case "textarea":
                (ch(e, r), (i = Vu(e, r)), se("invalid", e));
                break;
              default:
                i = r;
            }
            (_u(n, i), (a = i));
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Hg(e, l)
                  : o === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Ug(e, l))
                    : o === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Mo(e, l)
                        : typeof l == "number" && Mo(e, "" + l)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Ao.hasOwnProperty(o)
                          ? l != null && o === "onScroll" && se("scroll", e)
                          : l != null && pd(e, o, l, s));
              }
            switch (n) {
              case "input":
                (xs(e), uh(e, r, !1));
                break;
              case "textarea":
                (xs(e), dh(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? fi(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      fi(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = wa);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (je(t), null);
    case 6:
      if (e && t.stateNode != null) pv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = wr(Bo.current)), wr(qt.current), As(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Qt] = t),
            (o = r.nodeValue !== n) && ((e = ot), e !== null))
          )
            switch (e.tag) {
              case 3:
                Rs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Rs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Qt] = t),
            (t.stateNode = r));
      }
      return (je(t), null);
    case 13:
      if (
        (ae(de),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ue && it !== null && t.mode & 1 && !(t.flags & 128))
          (Dy(), Ni(), (t.flags |= 98560), (o = !1));
        else if (((o = As(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[Qt] = t;
          } else
            (Ni(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (je(t), (o = !1));
        } else (Lt !== null && (xc(Lt), (Lt = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || de.current & 1 ? Te === 0 && (Te = 3) : Xd())),
          t.updateQueue !== null && (t.flags |= 4),
          je(t),
          null);
    case 4:
      return (
        Li(),
        fc(e, t),
        e === null && Vo(t.stateNode.containerInfo),
        je(t),
        null
      );
    case 10:
      return (Ld(t.type._context), je(t), null);
    case 17:
      return (qe(t.type) && xa(), je(t), null);
    case 19:
      if ((ae(de), (o = t.memoizedState), o === null)) return (je(t), null);
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) io(o, !1);
        else {
          if (Te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ka(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    io(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (re(de, (de.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ye() > ji &&
            ((t.flags |= 128), (r = !0), io(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ka(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              io(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !ue)
            )
              return (je(t), null);
          } else
            2 * ye() - o.renderingStartTime > ji &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), io(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ye()),
          (t.sibling = null),
          (n = de.current),
          re(de, r ? (n & 1) | 2 : n & 1),
          t)
        : (je(t), null);
    case 22:
    case 23:
      return (
        Yd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? nt & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : je(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function hE(e, t) {
  switch ((Ad(t), t.tag)) {
    case 1:
      return (
        qe(t.type) && xa(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Li(),
        ae(Xe),
        ae(Fe),
        Fd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Vd(t), null);
    case 13:
      if (
        (ae(de), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        Ni();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (ae(de), null);
    case 4:
      return (Li(), null);
    case 10:
      return (Ld(t.type._context), null);
    case 22:
    case 23:
      return (Yd(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ds = !1,
  Ve = !1,
  pE = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function oi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ge(e, t, r);
      }
    else n.current = null;
}
function hc(e, t, n) {
  try {
    n();
  } catch (r) {
    ge(e, t, r);
  }
}
var ep = !1;
function mE(e, t) {
  if (((Xu = ga), (e = wy()), kd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, o.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = s + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (h = d.firstChild) !== null;
            )
              ((f = d), (d = h));
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (a = s),
                f === o && ++c === r && (l = s),
                (h = d.nextSibling) !== null)
              )
                break;
              ((d = f), (f = d.parentNode));
            }
            d = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (qu = { focusedElem: e, selectionRange: n }, ga = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (F = e));
    else
      for (; F !== null; ) {
        t = F;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    w = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Rt(t.type, g),
                      w,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (S) {
          ge(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (F = e));
          break;
        }
        F = t.return;
      }
  return ((v = ep), (ep = !1), v);
}
function So(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        ((i.destroy = void 0), o !== void 0 && hc(t, n, o));
      }
      i = i.next;
    } while (i !== r);
  }
}
function ol(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function pc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function mv(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), mv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Qt], delete t[_o], delete t[ec], delete t[qS], delete t[ZS])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function gv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function tp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || gv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function mc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = wa)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (mc(e, t, n), e = e.sibling; e !== null; )
      (mc(e, t, n), (e = e.sibling));
}
function gc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (gc(e, t, n), e = e.sibling; e !== null; )
      (gc(e, t, n), (e = e.sibling));
}
var ke = null,
  Dt = !1;
function Pn(e, t, n) {
  for (n = n.child; n !== null; ) (yv(e, t, n), (n = n.sibling));
}
function yv(e, t, n) {
  if (Xt && typeof Xt.onCommitFiberUnmount == "function")
    try {
      Xt.onCommitFiberUnmount(qa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ve || oi(n, t);
    case 6:
      var r = ke,
        i = Dt;
      ((ke = null),
        Pn(e, t, n),
        (ke = r),
        (Dt = i),
        ke !== null &&
          (Dt
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode)));
      break;
    case 18:
      ke !== null &&
        (Dt
          ? ((e = ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? Xl(e.parentNode, n)
              : e.nodeType === 1 && Xl(e, n),
            Oo(e))
          : Xl(ke, n.stateNode));
      break;
    case 4:
      ((r = ke),
        (i = Dt),
        (ke = n.stateNode.containerInfo),
        (Dt = !0),
        Pn(e, t, n),
        (ke = r),
        (Dt = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          ((o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && hc(n, t, s),
            (i = i.next));
        } while (i !== r);
      }
      Pn(e, t, n);
      break;
    case 1:
      if (
        !Ve &&
        (oi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          ge(n, t, a);
        }
      Pn(e, t, n);
      break;
    case 21:
      Pn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ve = (r = Ve) || n.memoizedState !== null), Pn(e, t, n), (Ve = r))
        : Pn(e, t, n);
      break;
    default:
      Pn(e, t, n);
  }
}
function np(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new pE()),
      t.forEach(function (r) {
        var i = TE.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function Tt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((ke = a.stateNode), (Dt = !1));
              break e;
            case 3:
              ((ke = a.stateNode.containerInfo), (Dt = !0));
              break e;
            case 4:
              ((ke = a.stateNode.containerInfo), (Dt = !0));
              break e;
          }
          a = a.return;
        }
        if (ke === null) throw Error(N(160));
        (yv(o, s, i), (ke = null), (Dt = !1));
        var l = i.alternate;
        (l !== null && (l.return = null), (i.return = null));
      } catch (u) {
        ge(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (vv(t, e), (t = t.sibling));
}
function vv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Tt(t, e), $t(e), r & 4)) {
        try {
          (So(3, e, e.return), ol(3, e));
        } catch (g) {
          ge(e, e.return, g);
        }
        try {
          So(5, e, e.return);
        } catch (g) {
          ge(e, e.return, g);
        }
      }
      break;
    case 1:
      (Tt(t, e), $t(e), r & 512 && n !== null && oi(n, n.return));
      break;
    case 5:
      if (
        (Tt(t, e),
        $t(e),
        r & 512 && n !== null && oi(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Mo(i, "");
        } catch (g) {
          ge(e, e.return, g);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && o.type === "radio" && o.name != null && zg(i, o),
              zu(a, s));
            var u = zu(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? Hg(i, d)
                : c === "dangerouslySetInnerHTML"
                  ? Ug(i, d)
                  : c === "children"
                    ? Mo(i, d)
                    : pd(i, c, d, u);
            }
            switch (a) {
              case "input":
                ju(i, o);
                break;
              case "textarea":
                Bg(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var h = o.value;
                h != null
                  ? fi(i, !!o.multiple, h, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? fi(i, !!o.multiple, o.defaultValue, !0)
                      : fi(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[_o] = o;
          } catch (g) {
            ge(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Tt(t, e), $t(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        ((i = e.stateNode), (o = e.memoizedProps));
        try {
          i.nodeValue = o;
        } catch (g) {
          ge(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Tt(t, e), $t(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Oo(t.containerInfo);
        } catch (g) {
          ge(e, e.return, g);
        }
      break;
    case 4:
      (Tt(t, e), $t(e));
      break;
    case 13:
      (Tt(t, e),
        $t(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Gd = ye())),
        r & 4 && np(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ve = (u = Ve) || c), Tt(t, e), (Ve = u)) : Tt(t, e),
        $t(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (F = e, c = e.child; c !== null; ) {
            for (d = F = c; F !== null; ) {
              switch (((f = F), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  So(4, f, f.return);
                  break;
                case 1:
                  oi(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    ((r = f), (n = f.return));
                    try {
                      ((t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount());
                    } catch (g) {
                      ge(r, n, g);
                    }
                  }
                  break;
                case 5:
                  oi(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    ip(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (F = h)) : ip(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                ((i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Wg("display", s))));
              } catch (g) {
                ge(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                ge(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            ((d.child.return = d), (d = d.child));
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            (c === d && (c = null), (d = d.return));
          }
          (c === d && (c = null),
            (d.sibling.return = d.return),
            (d = d.sibling));
        }
      }
      break;
    case 19:
      (Tt(t, e), $t(e), r & 4 && np(e));
      break;
    case 21:
      break;
    default:
      (Tt(t, e), $t(e));
  }
}
function $t(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (gv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Mo(i, ""), (r.flags &= -33));
          var o = tp(e);
          gc(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = tp(e);
          mc(e, a, s);
          break;
        default:
          throw Error(N(161));
      }
    } catch (l) {
      ge(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function gE(e, t, n) {
  ((F = e), wv(e));
}
function wv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var i = F,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Ds;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Ve;
        a = Ds;
        var u = Ve;
        if (((Ds = s), (Ve = l) && !u))
          for (F = i; F !== null; )
            ((s = F),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? op(i)
                : l !== null
                  ? ((l.return = s), (F = l))
                  : op(i));
        for (; o !== null; ) ((F = o), wv(o), (o = o.sibling));
        ((F = i), (Ds = a), (Ve = u));
      }
      rp(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (F = o)) : rp(e);
  }
}
function rp(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ve || ol(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ve)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Rt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Bh(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Bh(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Oo(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        Ve || (t.flags & 512 && pc(t));
      } catch (f) {
        ge(t, t.return, f);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (F = n));
      break;
    }
    F = t.return;
  }
}
function ip(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (F = n));
      break;
    }
    F = t.return;
  }
}
function op(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ol(4, t);
          } catch (l) {
            ge(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ge(t, i, l);
            }
          }
          var o = t.return;
          try {
            pc(t);
          } catch (l) {
            ge(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            pc(t);
          } catch (l) {
            ge(t, s, l);
          }
      }
    } catch (l) {
      ge(t, t.return, l);
    }
    if (t === e) {
      F = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (F = a));
      break;
    }
    F = t.return;
  }
}
var yE = Math.ceil,
  Ma = vn.ReactCurrentDispatcher,
  Hd = vn.ReactCurrentOwner,
  yt = vn.ReactCurrentBatchConfig,
  Z = 0,
  be = null,
  xe = null,
  Me = 0,
  nt = 0,
  si = ar(0),
  Te = 0,
  Ho = null,
  jr = 0,
  sl = 0,
  Kd = 0,
  Eo = null,
  Qe = null,
  Gd = 0,
  ji = 1 / 0,
  sn = null,
  Na = !1,
  yc = null,
  Yn = null,
  Ls = !1,
  Bn = null,
  Da = 0,
  Co = 0,
  vc = null,
  Js = -1,
  ea = 0;
function We() {
  return Z & 6 ? ye() : Js !== -1 ? Js : (Js = ye());
}
function Xn(e) {
  return e.mode & 1
    ? Z & 2 && Me !== 0
      ? Me & -Me
      : eE.transition !== null
        ? (ea === 0 && (ea = ry()), ea)
        : ((e = te),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : cy(e.type))),
          e)
    : 1;
}
function jt(e, t, n, r) {
  if (50 < Co) throw ((Co = 0), (vc = null), Error(N(185)));
  (rs(e, n, r),
    (!(Z & 2) || e !== be) &&
      (e === be && (!(Z & 2) && (sl |= n), Te === 4 && On(e, Me)),
      Ze(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((ji = ye() + 500), nl && lr())));
}
function Ze(e, t) {
  var n = e.callbackNode;
  eS(e, t);
  var r = ma(e, e === be ? Me : 0);
  if (r === 0)
    (n !== null && ph(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ph(n), t === 1))
      (e.tag === 0 ? JS(sp.bind(null, e)) : Ay(sp.bind(null, e)),
        YS(function () {
          !(Z & 6) && lr();
        }),
        (n = null));
    else {
      switch (iy(r)) {
        case 1:
          n = wd;
          break;
        case 4:
          n = ty;
          break;
        case 16:
          n = pa;
          break;
        case 536870912:
          n = ny;
          break;
        default:
          n = pa;
      }
      n = kv(n, xv.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function xv(e, t) {
  if (((Js = -1), (ea = 0), Z & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (yi() && e.callbackNode !== n) return null;
  var r = ma(e, e === be ? Me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = La(e, r);
  else {
    t = r;
    var i = Z;
    Z |= 2;
    var o = Ev();
    (be !== e || Me !== t) && ((sn = null), (ji = ye() + 500), Rr(e, t));
    do
      try {
        xE();
        break;
      } catch (a) {
        Sv(e, a);
      }
    while (!0);
    (Dd(),
      (Ma.current = o),
      (Z = i),
      xe !== null ? (t = 0) : ((be = null), (Me = 0), (t = Te)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Hu(e)), i !== 0 && ((r = i), (t = wc(e, i)))), t === 1)
    )
      throw ((n = Ho), Rr(e, 0), On(e, r), Ze(e, ye()), n);
    if (t === 6) On(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !vE(i) &&
          ((t = La(e, r)),
          t === 2 && ((o = Hu(e)), o !== 0 && ((r = o), (t = wc(e, o)))),
          t === 1))
      )
        throw ((n = Ho), Rr(e, 0), On(e, r), Ze(e, ye()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          mr(e, Qe, sn);
          break;
        case 3:
          if (
            (On(e, r), (r & 130023424) === r && ((t = Gd + 500 - ye()), 10 < t))
          ) {
            if (ma(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (We(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = Ju(mr.bind(null, e, Qe, sn), t);
            break;
          }
          mr(e, Qe, sn);
          break;
        case 4:
          if ((On(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ot(r);
            ((o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o));
          }
          if (
            ((r = i),
            (r = ye() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * yE(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ju(mr.bind(null, e, Qe, sn), r);
            break;
          }
          mr(e, Qe, sn);
          break;
        case 5:
          mr(e, Qe, sn);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return (Ze(e, ye()), e.callbackNode === n ? xv.bind(null, e) : null);
}
function wc(e, t) {
  var n = Eo;
  return (
    e.current.memoizedState.isDehydrated && (Rr(e, t).flags |= 256),
    (e = La(e, t)),
    e !== 2 && ((t = Qe), (Qe = n), t !== null && xc(t)),
    e
  );
}
function xc(e) {
  Qe === null ? (Qe = e) : Qe.push.apply(Qe, e);
}
function vE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Vt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function On(e, t) {
  for (
    t &= ~Kd,
      t &= ~sl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Ot(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function sp(e) {
  if (Z & 6) throw Error(N(327));
  yi();
  var t = ma(e, 0);
  if (!(t & 1)) return (Ze(e, ye()), null);
  var n = La(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hu(e);
    r !== 0 && ((t = r), (n = wc(e, r)));
  }
  if (n === 1) throw ((n = Ho), Rr(e, 0), On(e, t), Ze(e, ye()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    mr(e, Qe, sn),
    Ze(e, ye()),
    null
  );
}
function Qd(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    ((Z = n), Z === 0 && ((ji = ye() + 500), nl && lr()));
  }
}
function Ir(e) {
  Bn !== null && Bn.tag === 0 && !(Z & 6) && yi();
  var t = Z;
  Z |= 1;
  var n = yt.transition,
    r = te;
  try {
    if (((yt.transition = null), (te = 1), e)) return e();
  } finally {
    ((te = r), (yt.transition = n), (Z = t), !(Z & 6) && lr());
  }
}
function Yd() {
  ((nt = si.current), ae(si));
}
function Rr(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), QS(n)), xe !== null))
    for (n = xe.return; n !== null; ) {
      var r = n;
      switch ((Ad(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && xa());
          break;
        case 3:
          (Li(), ae(Xe), ae(Fe), Fd());
          break;
        case 5:
          Vd(r);
          break;
        case 4:
          Li();
          break;
        case 13:
          ae(de);
          break;
        case 19:
          ae(de);
          break;
        case 10:
          Ld(r.type._context);
          break;
        case 22:
        case 23:
          Yd();
      }
      n = n.return;
    }
  if (
    ((be = e),
    (xe = e = qn(e.current, null)),
    (Me = nt = t),
    (Te = 0),
    (Ho = null),
    (Kd = sl = jr = 0),
    (Qe = Eo = null),
    vr !== null)
  ) {
    for (t = 0; t < vr.length; t++)
      if (((n = vr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          ((o.next = i), (r.next = s));
        }
        n.pending = r;
      }
    vr = null;
  }
  return e;
}
function Sv(e, t) {
  do {
    var n = xe;
    try {
      if ((Dd(), (Xs.current = Aa), Ra)) {
        for (var r = he.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        Ra = !1;
      }
      if (
        ((Or = 0),
        (Pe = Ee = he = null),
        (xo = !1),
        ($o = 0),
        (Hd.current = null),
        n === null || n.return === null)
      ) {
        ((Te = 1), (Ho = t), (xe = null));
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Me),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = Gh(s);
          if (h !== null) {
            ((h.flags &= -257),
              Qh(h, s, a, o, t),
              h.mode & 1 && Kh(o, u, t),
              (t = h),
              (l = u));
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              (g.add(l), (t.updateQueue = g));
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Kh(o, u, t), Xd());
              break e;
            }
            l = Error(N(426));
          }
        } else if (ue && a.mode & 1) {
          var w = Gh(s);
          if (w !== null) {
            (!(w.flags & 65536) && (w.flags |= 256),
              Qh(w, s, a, o, t),
              Md(Oi(l, a)));
            break e;
          }
        }
        ((o = l = Oi(l, a)),
          Te !== 4 && (Te = 2),
          Eo === null ? (Eo = [o]) : Eo.push(o),
          (o = s));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var m = iv(o, l, t);
              zh(o, m);
              break e;
            case 1:
              a = l;
              var p = o.type,
                y = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Yn === null || !Yn.has(y))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var S = ov(o, a, t);
                zh(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Tv(n);
    } catch (E) {
      ((t = E), xe === n && n !== null && (xe = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Ev() {
  var e = Ma.current;
  return ((Ma.current = Aa), e === null ? Aa : e);
}
function Xd() {
  ((Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    be === null || (!(jr & 268435455) && !(sl & 268435455)) || On(be, Me));
}
function La(e, t) {
  var n = Z;
  Z |= 2;
  var r = Ev();
  (be !== e || Me !== t) && ((sn = null), Rr(e, t));
  do
    try {
      wE();
      break;
    } catch (i) {
      Sv(e, i);
    }
  while (!0);
  if ((Dd(), (Z = n), (Ma.current = r), xe !== null)) throw Error(N(261));
  return ((be = null), (Me = 0), Te);
}
function wE() {
  for (; xe !== null; ) Cv(xe);
}
function xE() {
  for (; xe !== null && !H1(); ) Cv(xe);
}
function Cv(e) {
  var t = bv(e.alternate, e, nt);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Tv(e) : (xe = t),
    (Hd.current = null));
}
function Tv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = hE(n, t)), n !== null)) {
        ((n.flags &= 32767), (xe = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Te = 6), (xe = null));
        return;
      }
    } else if (((n = fE(n, t, nt)), n !== null)) {
      xe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      xe = t;
      return;
    }
    xe = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function mr(e, t, n) {
  var r = te,
    i = yt.transition;
  try {
    ((yt.transition = null), (te = 1), SE(e, t, n, r));
  } finally {
    ((yt.transition = i), (te = r));
  }
  return null;
}
function SE(e, t, n, r) {
  do yi();
  while (Bn !== null);
  if (Z & 6) throw Error(N(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (tS(e, o),
    e === be && ((xe = be = null), (Me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ls ||
      ((Ls = !0),
      kv(pa, function () {
        return (yi(), null);
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ((o = yt.transition), (yt.transition = null));
    var s = te;
    te = 1;
    var a = Z;
    ((Z |= 4),
      (Hd.current = null),
      mE(e, n),
      vv(n, e),
      BS(qu),
      (ga = !!Xu),
      (qu = Xu = null),
      (e.current = n),
      gE(n),
      K1(),
      (Z = a),
      (te = s),
      (yt.transition = o));
  } else e.current = n;
  if (
    (Ls && ((Ls = !1), (Bn = e), (Da = i)),
    (o = e.pendingLanes),
    o === 0 && (Yn = null),
    Y1(n.stateNode),
    Ze(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (Na) throw ((Na = !1), (e = yc), (yc = null), e);
  return (
    Da & 1 && e.tag !== 0 && yi(),
    (o = e.pendingLanes),
    o & 1 ? (e === vc ? Co++ : ((Co = 0), (vc = e))) : (Co = 0),
    lr(),
    null
  );
}
function yi() {
  if (Bn !== null) {
    var e = iy(Da),
      t = yt.transition,
      n = te;
    try {
      if (((yt.transition = null), (te = 16 > e ? 16 : e), Bn === null))
        var r = !1;
      else {
        if (((e = Bn), (Bn = null), (Da = 0), Z & 6)) throw Error(N(331));
        var i = Z;
        for (Z |= 4, F = e.current; F !== null; ) {
          var o = F,
            s = o.child;
          if (F.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (F = u; F !== null; ) {
                  var c = F;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      So(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) ((d.return = c), (F = d));
                  else
                    for (; F !== null; ) {
                      c = F;
                      var f = c.sibling,
                        h = c.return;
                      if ((mv(c), c === u)) {
                        F = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = h), (F = f));
                        break;
                      }
                      F = h;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var w = g.sibling;
                    ((g.sibling = null), (g = w));
                  } while (g !== null);
                }
              }
              F = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) ((s.return = o), (F = s));
          else
            e: for (; F !== null; ) {
              if (((o = F), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    So(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                ((m.return = o.return), (F = m));
                break e;
              }
              F = o.return;
            }
        }
        var p = e.current;
        for (F = p; F !== null; ) {
          s = F;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) ((y.return = s), (F = y));
          else
            e: for (s = p; F !== null; ) {
              if (((a = F), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ol(9, a);
                  }
                } catch (E) {
                  ge(a, a.return, E);
                }
              if (a === s) {
                F = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                ((S.return = a.return), (F = S));
                break e;
              }
              F = a.return;
            }
        }
        if (
          ((Z = i), lr(), Xt && typeof Xt.onPostCommitFiberRoot == "function")
        )
          try {
            Xt.onPostCommitFiberRoot(qa, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((te = n), (yt.transition = t));
    }
  }
  return !1;
}
function ap(e, t, n) {
  ((t = Oi(n, t)),
    (t = iv(e, t, 1)),
    (e = Qn(e, t, 1)),
    (t = We()),
    e !== null && (rs(e, 1, t), Ze(e, t)));
}
function ge(e, t, n) {
  if (e.tag === 3) ap(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ap(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Yn === null || !Yn.has(r)))
        ) {
          ((e = Oi(n, e)),
            (e = ov(t, e, 1)),
            (t = Qn(t, e, 1)),
            (e = We()),
            t !== null && (rs(t, 1, e), Ze(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function EE(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = We()),
    (e.pingedLanes |= e.suspendedLanes & n),
    be === e &&
      (Me & n) === n &&
      (Te === 4 || (Te === 3 && (Me & 130023424) === Me && 500 > ye() - Gd)
        ? Rr(e, 0)
        : (Kd |= n)),
    Ze(e, t));
}
function Pv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Cs), (Cs <<= 1), !(Cs & 130023424) && (Cs = 4194304))
      : (t = 1));
  var n = We();
  ((e = pn(e, t)), e !== null && (rs(e, t, n), Ze(e, n)));
}
function CE(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Pv(e, n));
}
function TE(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  (r !== null && r.delete(t), Pv(e, n));
}
var bv;
bv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Xe.current) Ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ye = !1), dE(e, t, n));
      Ye = !!(e.flags & 131072);
    }
  else ((Ye = !1), ue && t.flags & 1048576 && My(t, Ca, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Zs(e, t), (e = t.pendingProps));
      var i = Mi(t, Fe.current);
      (gi(t, n), (i = zd(null, t, r, e, i, n)));
      var o = Bd();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            qe(r) ? ((o = !0), Sa(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            jd(t),
            (i.updater = il),
            (t.stateNode = i),
            (i._reactInternals = t),
            sc(t, r, e, n),
            (t = uc(null, t, r, !0, o, n)))
          : ((t.tag = 0), ue && o && Rd(t), ze(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Zs(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = bE(r)),
          (e = Rt(r, e)),
          i)
        ) {
          case 0:
            t = lc(null, t, r, e, n);
            break e;
          case 1:
            t = qh(null, t, r, e, n);
            break e;
          case 11:
            t = Yh(null, t, r, e, n);
            break e;
          case 14:
            t = Xh(null, t, r, Rt(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Rt(r, i)),
        lc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Rt(r, i)),
        qh(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((uv(t), e === null)) throw Error(N(387));
        ((r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Iy(e, t),
          ba(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ((i = Oi(Error(N(423)), t)), (t = Zh(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = Oi(Error(N(424)), t)), (t = Zh(e, t, r, n, i)));
            break e;
          } else
            for (
              it = Gn(t.stateNode.containerInfo.firstChild),
                ot = t,
                ue = !0,
                Lt = null,
                n = Oy(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Ni(), r === i)) {
            t = mn(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Vy(t),
        e === null && rc(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Zu(r, i) ? (s = null) : o !== null && Zu(r, o) && (t.flags |= 32),
        lv(e, t),
        ze(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && rc(t), null);
    case 13:
      return cv(e, t, n);
    case 4:
      return (
        Id(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Di(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Rt(r, i)),
        Yh(e, t, r, i, n)
      );
    case 7:
      return (ze(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ze(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ze(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          re(Ta, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Vt(o.value, s)) {
            if (o.children === i.children && !Xe.current) {
              t = mn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      ((l = dn(-1, n & -n)), (l.tag = 2));
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      ic(o.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(N(341));
                ((s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  ic(s, n, t),
                  (s = o.sibling));
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    ((o.return = s.return), (s = o));
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        (ze(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        gi(t, n),
        (i = wt(i)),
        (r = r(i)),
        (t.flags |= 1),
        ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Rt(r, t.pendingProps)),
        (i = Rt(r.type, i)),
        Xh(e, t, r, i, n)
      );
    case 15:
      return sv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Rt(r, i)),
        Zs(e, t),
        (t.tag = 1),
        qe(r) ? ((e = !0), Sa(t)) : (e = !1),
        gi(t, n),
        rv(t, r, i),
        sc(t, r, i, n),
        uc(null, t, r, !0, e, n)
      );
    case 19:
      return dv(e, t, n);
    case 22:
      return av(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function kv(e, t) {
  return ey(e, t);
}
function PE(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function mt(e, t, n, r) {
  return new PE(e, t, n, r);
}
function qd(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function bE(e) {
  if (typeof e == "function") return qd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === gd)) return 11;
    if (e === yd) return 14;
  }
  return 2;
}
function qn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = mt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ta(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) qd(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Xr:
        return Ar(n.children, i, o, t);
      case md:
        ((s = 8), (i |= 8));
        break;
      case Mu:
        return (
          (e = mt(12, n, t, i | 2)),
          (e.elementType = Mu),
          (e.lanes = o),
          e
        );
      case Nu:
        return ((e = mt(13, n, t, i)), (e.elementType = Nu), (e.lanes = o), e);
      case Du:
        return ((e = mt(19, n, t, i)), (e.elementType = Du), (e.lanes = o), e);
      case Vg:
        return al(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case jg:
              s = 10;
              break e;
            case Ig:
              s = 9;
              break e;
            case gd:
              s = 11;
              break e;
            case yd:
              s = 14;
              break e;
            case Nn:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = mt(s, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = o),
    t
  );
}
function Ar(e, t, n, r) {
  return ((e = mt(7, e, r, t)), (e.lanes = n), e);
}
function al(e, t, n, r) {
  return (
    (e = mt(22, e, r, t)),
    (e.elementType = Vg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function iu(e, t, n) {
  return ((e = mt(6, e, null, t)), (e.lanes = n), e);
}
function ou(e, t, n) {
  return (
    (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function kE(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _l(0)),
    (this.expirationTimes = _l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function Zd(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new kE(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = mt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    jd(o),
    e
  );
}
function RE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Yr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Rv(e) {
  if (!e) return Jn;
  e = e._reactInternals;
  e: {
    if (_r(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (qe(n)) return Ry(e, n, t);
  }
  return t;
}
function Av(e, t, n, r, i, o, s, a, l) {
  return (
    (e = Zd(n, r, !0, e, i, o, s, a, l)),
    (e.context = Rv(null)),
    (n = e.current),
    (r = We()),
    (i = Xn(n)),
    (o = dn(r, i)),
    (o.callback = t ?? null),
    Qn(n, o, i),
    (e.current.lanes = i),
    rs(e, i, r),
    Ze(e, r),
    e
  );
}
function ll(e, t, n, r) {
  var i = t.current,
    o = We(),
    s = Xn(i);
  return (
    (n = Rv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = dn(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Qn(i, t, s)),
    e !== null && (jt(e, i, s, o), Ys(e, i, s)),
    s
  );
}
function Oa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function lp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Jd(e, t) {
  (lp(e, t), (e = e.alternate) && lp(e, t));
}
function AE() {
  return null;
}
var Mv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ef(e) {
  this._internalRoot = e;
}
ul.prototype.render = ef.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  ll(e, t, null, null);
};
ul.prototype.unmount = ef.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Ir(function () {
      ll(null, e, null, null);
    }),
      (t[hn] = null));
  }
};
function ul(e) {
  this._internalRoot = e;
}
ul.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ay();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ln.length && t !== 0 && t < Ln[n].priority; n++);
    (Ln.splice(n, 0, e), n === 0 && uy(e));
  }
};
function tf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function cl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function up() {}
function ME(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Oa(s);
        o.call(u);
      };
    }
    var s = Av(t, r, e, 0, null, !1, !1, "", up);
    return (
      (e._reactRootContainer = s),
      (e[hn] = s.current),
      Vo(e.nodeType === 8 ? e.parentNode : e),
      Ir(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Oa(l);
      a.call(u);
    };
  }
  var l = Zd(e, 0, !1, null, null, !1, !1, "", up);
  return (
    (e._reactRootContainer = l),
    (e[hn] = l.current),
    Vo(e.nodeType === 8 ? e.parentNode : e),
    Ir(function () {
      ll(t, l, n, r);
    }),
    l
  );
}
function dl(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Oa(s);
        a.call(l);
      };
    }
    ll(t, s, e, i);
  } else s = ME(n, t, e, i, r);
  return Oa(s);
}
oy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = fo(t.pendingLanes);
        n !== 0 &&
          (xd(t, n | 1), Ze(t, ye()), !(Z & 6) && ((ji = ye() + 500), lr()));
      }
      break;
    case 13:
      (Ir(function () {
        var r = pn(e, 1);
        if (r !== null) {
          var i = We();
          jt(r, e, 1, i);
        }
      }),
        Jd(e, 1));
  }
};
Sd = function (e) {
  if (e.tag === 13) {
    var t = pn(e, 134217728);
    if (t !== null) {
      var n = We();
      jt(t, e, 134217728, n);
    }
    Jd(e, 134217728);
  }
};
sy = function (e) {
  if (e.tag === 13) {
    var t = Xn(e),
      n = pn(e, t);
    if (n !== null) {
      var r = We();
      jt(n, e, t, r);
    }
    Jd(e, t);
  }
};
ay = function () {
  return te;
};
ly = function (e, t) {
  var n = te;
  try {
    return ((te = e), t());
  } finally {
    te = n;
  }
};
$u = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ju(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = tl(r);
            if (!i) throw Error(N(90));
            (_g(r), ju(r, i));
          }
        }
      }
      break;
    case "textarea":
      Bg(e, n);
      break;
    case "select":
      ((t = n.value), t != null && fi(e, !!n.multiple, t, !1));
  }
};
Qg = Qd;
Yg = Ir;
var NE = { usingClientEntryPoint: !1, Events: [os, ei, tl, Kg, Gg, Qd] },
  oo = {
    findFiberByHostInstance: yr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  DE = {
    bundleType: oo.bundleType,
    version: oo.version,
    rendererPackageName: oo.rendererPackageName,
    rendererConfig: oo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: vn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Zg(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: oo.findFiberByHostInstance || AE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Os = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Os.isDisabled && Os.supportsFiber)
    try {
      ((qa = Os.inject(DE)), (Xt = Os));
    } catch {}
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = NE;
lt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!tf(t)) throw Error(N(200));
  return RE(e, t, null, n);
};
lt.createRoot = function (e, t) {
  if (!tf(e)) throw Error(N(299));
  var n = !1,
    r = "",
    i = Mv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Zd(e, 1, !1, null, null, n, !1, r, i)),
    (e[hn] = t.current),
    Vo(e.nodeType === 8 ? e.parentNode : e),
    new ef(t)
  );
};
lt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return ((e = Zg(t)), (e = e === null ? null : e.stateNode), e);
};
lt.flushSync = function (e) {
  return Ir(e);
};
lt.hydrate = function (e, t, n) {
  if (!cl(t)) throw Error(N(200));
  return dl(null, e, t, !0, n);
};
lt.hydrateRoot = function (e, t, n) {
  if (!tf(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Mv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Av(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[hn] = t.current),
    Vo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new ul(t);
};
lt.render = function (e, t, n) {
  if (!cl(t)) throw Error(N(200));
  return dl(null, e, t, !1, n);
};
lt.unmountComponentAtNode = function (e) {
  if (!cl(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Ir(function () {
        dl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[hn] = null));
        });
      }),
      !0)
    : !1;
};
lt.unstable_batchedUpdates = Qd;
lt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!cl(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return dl(e, t, n, !1, r);
};
lt.version = "18.3.1-next-f1338f8080-20240426";
function Nv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nv);
    } catch (e) {
      console.error(e);
    }
}
(Nv(), (Ng.exports = lt));
var as = Ng.exports;
const Dv = vg(as);
var Lv,
  cp = as;
((Lv = cp.createRoot), cp.hydrateRoot);
var fl = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  hl = typeof window > "u" || "Deno" in globalThis;
function At() {}
function LE(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function OE(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function jE(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Sc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function IE(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function dp(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: i,
    predicate: o,
    queryKey: s,
    stale: a,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== nf(s, t.options)) return !1;
    } else if (!Go(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (i && i !== t.state.fetchStatus) ||
    (o && !o(t))
  );
}
function fp(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Ko(t.options.mutationKey) !== Ko(o)) return !1;
    } else if (!Go(t.options.mutationKey, o)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function nf(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Ko)(e);
}
function Ko(e) {
  return JSON.stringify(e, (t, n) =>
    Ec(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, i) => ((r[i] = n[i]), r), {})
      : n,
  );
}
function Go(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((n) => Go(e[n], t[n]))
        : !1;
}
function Ov(e, t) {
  if (e === t) return e;
  const n = hp(e) && hp(t);
  if (n || (Ec(e) && Ec(t))) {
    const r = n ? e : Object.keys(e),
      i = r.length,
      o = n ? t : Object.keys(t),
      s = o.length,
      a = n ? [] : {},
      l = new Set(r);
    let u = 0;
    for (let c = 0; c < s; c++) {
      const d = n ? c : o[c];
      ((!n && l.has(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((a[d] = void 0), u++)
        : ((a[d] = Ov(e[d], t[d])), a[d] === e[d] && e[d] !== void 0 && u++);
    }
    return i === s && u === i ? e : a;
  }
  return t;
}
function hp(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ec(e) {
  if (!pp(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !pp(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function pp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function VE(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function FE(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? Ov(e, t)
      : t;
}
function _E(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function zE(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var rf = Symbol();
function jv(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === rf
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var Er,
  jn,
  Si,
  cg,
  BE =
    ((cg = class extends fl {
      constructor() {
        super();
        J(this, Er);
        J(this, jn);
        J(this, Si);
        G(this, Si, (t) => {
          if (!hl && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        M(this, jn) || this.setEventListener(M(this, Si));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = M(this, jn)) == null || t.call(this), G(this, jn, void 0));
      }
      setEventListener(t) {
        var n;
        (G(this, Si, t),
          (n = M(this, jn)) == null || n.call(this),
          G(
            this,
            jn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        M(this, Er) !== t && (G(this, Er, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof M(this, Er) == "boolean"
          ? M(this, Er)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Er = new WeakMap()),
    (jn = new WeakMap()),
    (Si = new WeakMap()),
    cg),
  Iv = new BE(),
  Ei,
  In,
  Ci,
  dg,
  $E =
    ((dg = class extends fl {
      constructor() {
        super();
        J(this, Ei, !0);
        J(this, In);
        J(this, Ci);
        G(this, Ci, (t) => {
          if (!hl && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        M(this, In) || this.setEventListener(M(this, Ci));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = M(this, In)) == null || t.call(this), G(this, In, void 0));
      }
      setEventListener(t) {
        var n;
        (G(this, Ci, t),
          (n = M(this, In)) == null || n.call(this),
          G(this, In, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        M(this, Ei) !== t &&
          (G(this, Ei, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return M(this, Ei);
      }
    }),
    (Ei = new WeakMap()),
    (In = new WeakMap()),
    (Ci = new WeakMap()),
    dg),
  ja = new $E();
function UE() {
  let e, t;
  const n = new Promise((i, o) => {
    ((e = i), (t = o));
  });
  ((n.status = "pending"), n.catch(() => {}));
  function r(i) {
    (Object.assign(n, i), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (i) => {
      (r({ status: "fulfilled", value: i }), e(i));
    }),
    (n.reject = (i) => {
      (r({ status: "rejected", reason: i }), t(i));
    }),
    n
  );
}
function WE(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Vv(e) {
  return (e ?? "online") === "online" ? ja.isOnline() : !0;
}
var Fv = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function su(e) {
  return e instanceof Fv;
}
function _v(e) {
  let t = !1,
    n = 0,
    r = !1,
    i;
  const o = UE(),
    s = (g) => {
      var w;
      r || (f(new Fv(g)), (w = e.abort) == null || w.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () =>
      Iv.isFocused() &&
      (e.networkMode === "always" || ja.isOnline()) &&
      e.canRun(),
    c = () => Vv(e.networkMode) && e.canRun(),
    d = (g) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onSuccess) == null || w.call(e, g),
        i == null || i(),
        o.resolve(g));
    },
    f = (g) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onError) == null || w.call(e, g),
        i == null || i(),
        o.reject(g));
    },
    h = () =>
      new Promise((g) => {
        var w;
        ((i = (m) => {
          (r || u()) && g(m);
        }),
          (w = e.onPause) == null || w.call(e));
      }).then(() => {
        var g;
        ((i = void 0), r || (g = e.onContinue) == null || g.call(e));
      }),
    v = () => {
      if (r) return;
      let g;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        g = w ?? e.fn();
      } catch (m) {
        g = Promise.reject(m);
      }
      Promise.resolve(g)
        .then(d)
        .catch((m) => {
          var T;
          if (r) return;
          const p = e.retry ?? (hl ? 0 : 3),
            y = e.retryDelay ?? WE,
            S = typeof y == "function" ? y(n, m) : y,
            E =
              p === !0 ||
              (typeof p == "number" && n < p) ||
              (typeof p == "function" && p(n, m));
          if (t || !E) {
            f(m);
            return;
          }
          (n++,
            (T = e.onFail) == null || T.call(e, n, m),
            VE(S)
              .then(() => (u() ? void 0 : h()))
              .then(() => {
                t ? f(m) : v();
              }));
        });
    };
  return {
    promise: o,
    cancel: s,
    continue: () => (i == null || i(), o),
    cancelRetry: a,
    continueRetry: l,
    canStart: c,
    start: () => (c() ? v() : h().then(v), o),
  };
}
var HE = (e) => setTimeout(e, 0);
function KE() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    i = HE;
  const o = (a) => {
      t
        ? e.push(a)
        : i(() => {
            n(a);
          });
    },
    s = () => {
      const a = e;
      ((e = []),
        a.length &&
          i(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          }));
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        (t--, t || s());
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        o(() => {
          a(...l);
        });
      },
    schedule: o,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      i = a;
    },
  };
}
var Be = KE(),
  Cr,
  fg,
  zv =
    ((fg = class {
      constructor() {
        J(this, Cr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          OE(this.gcTime) &&
            G(
              this,
              Cr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (hl ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        M(this, Cr) && (clearTimeout(M(this, Cr)), G(this, Cr, void 0));
      }
    }),
    (Cr = new WeakMap()),
    fg),
  Ti,
  Tr,
  dt,
  Pr,
  Ie,
  es,
  br,
  Mt,
  on,
  hg,
  GE =
    ((hg = class extends zv {
      constructor(t) {
        super();
        J(this, Mt);
        J(this, Ti);
        J(this, Tr);
        J(this, dt);
        J(this, Pr);
        J(this, Ie);
        J(this, es);
        J(this, br);
        (G(this, br, !1),
          G(this, es, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          G(this, Pr, t.client),
          G(this, dt, M(this, Pr).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          G(this, Ti, YE(this.options)),
          (this.state = t.state ?? M(this, Ti)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = M(this, Ie)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        ((this.options = { ...M(this, es), ...t }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          M(this, dt).remove(this);
      }
      setData(t, n) {
        const r = FE(this.state.data, t, this.options);
        return (
          Le(this, Mt, on).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Le(this, Mt, on).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, i;
        const n = (r = M(this, Ie)) == null ? void 0 : r.promise;
        return (
          (i = M(this, Ie)) == null || i.cancel(t),
          n ? n.then(At).catch(At) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(M(this, Ti)));
      }
      isActive() {
        return this.observers.some((t) => IE(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === rf ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Sc(t.options.staleTime, this) === "static",
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
            ? !1
            : this.state.isInvalidated
              ? !0
              : !jE(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = M(this, Ie)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = M(this, Ie)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          M(this, dt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (M(this, Ie) &&
              (M(this, br)
                ? M(this, Ie).cancel({ revert: !0 })
                : M(this, Ie).cancelRetry()),
            this.scheduleGc()),
          M(this, dt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Le(this, Mt, on).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (M(this, Ie))
            return (M(this, Ie).continueRetry(), M(this, Ie).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((h) => h.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          i = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (G(this, br, !0), r.signal),
            });
          },
          o = () => {
            const f = jv(this.options, n),
              v = (() => {
                const g = {
                  client: M(this, Pr),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (i(g), g);
              })();
            return (
              G(this, br, !1),
              this.options.persister ? this.options.persister(f, v, this) : f(v)
            );
          },
          a = (() => {
            const f = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: M(this, Pr),
              state: this.state,
              fetchFn: o,
            };
            return (i(f), f);
          })();
        ((u = this.options.behavior) == null || u.onFetch(a, this),
          G(this, Tr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
            Le(this, Mt, on).call(this, {
              type: "fetch",
              meta: (d = a.fetchOptions) == null ? void 0 : d.meta,
            }));
        const l = (f) => {
          var h, v, g, w;
          ((su(f) && f.silent) ||
            Le(this, Mt, on).call(this, { type: "error", error: f }),
            su(f) ||
              ((v = (h = M(this, dt).config).onError) == null ||
                v.call(h, f, this),
              (w = (g = M(this, dt).config).onSettled) == null ||
                w.call(g, this.state.data, f, this)),
            this.scheduleGc());
        };
        return (
          G(
            this,
            Ie,
            _v({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var h, v, g, w;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (m) {
                  l(m);
                  return;
                }
                ((v = (h = M(this, dt).config).onSuccess) == null ||
                  v.call(h, f, this),
                  (w = (g = M(this, dt).config).onSettled) == null ||
                    w.call(g, f, this.state.error, this),
                  this.scheduleGc());
              },
              onError: l,
              onFail: (f, h) => {
                Le(this, Mt, on).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: h,
                });
              },
              onPause: () => {
                Le(this, Mt, on).call(this, { type: "pause" });
              },
              onContinue: () => {
                Le(this, Mt, on).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            }),
          ),
          M(this, Ie).start()
        );
      }
    }),
    (Ti = new WeakMap()),
    (Tr = new WeakMap()),
    (dt = new WeakMap()),
    (Pr = new WeakMap()),
    (Ie = new WeakMap()),
    (es = new WeakMap()),
    (br = new WeakMap()),
    (Mt = new WeakSet()),
    (on = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...QE(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              G(this, Tr, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const i = t.error;
            return su(i) && i.revert && M(this, Tr)
              ? { ...M(this, Tr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: i,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      ((this.state = n(this.state)),
        Be.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            M(this, dt).notify({ query: this, type: "updated", action: t }));
        }));
    }),
    hg);
function QE(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Vv(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function YE(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Ht,
  pg,
  XE =
    ((pg = class extends fl {
      constructor(t = {}) {
        super();
        J(this, Ht);
        ((this.config = t), G(this, Ht, new Map()));
      }
      build(t, n, r) {
        const i = n.queryKey,
          o = n.queryHash ?? nf(i, n);
        let s = this.get(o);
        return (
          s ||
            ((s = new GE({
              client: t,
              queryKey: i,
              queryHash: o,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(i),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        M(this, Ht).has(t.queryHash) ||
          (M(this, Ht).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = M(this, Ht).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && M(this, Ht).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Be.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return M(this, Ht).get(t);
      }
      getAll() {
        return [...M(this, Ht).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => dp(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => dp(t, r)) : n;
      }
      notify(t) {
        Be.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Be.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Be.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Ht = new WeakMap()),
    pg),
  Kt,
  _e,
  kr,
  Gt,
  Rn,
  mg,
  qE =
    ((mg = class extends zv {
      constructor(t) {
        super();
        J(this, Gt);
        J(this, Kt);
        J(this, _e);
        J(this, kr);
        ((this.mutationId = t.mutationId),
          G(this, _e, t.mutationCache),
          G(this, Kt, []),
          (this.state = t.state || ZE()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        M(this, Kt).includes(t) ||
          (M(this, Kt).push(t),
          this.clearGcTimeout(),
          M(this, _e).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (G(
          this,
          Kt,
          M(this, Kt).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          M(this, _e).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        M(this, Kt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : M(this, _e).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = M(this, kr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, s, a, l, u, c, d, f, h, v, g, w, m, p, y, S, E, T, P, k;
        const n = () => {
          Le(this, Gt, Rn).call(this, { type: "continue" });
        };
        G(
          this,
          kr,
          _v({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (D, R) => {
              Le(this, Gt, Rn).call(this, {
                type: "failed",
                failureCount: D,
                error: R,
              });
            },
            onPause: () => {
              Le(this, Gt, Rn).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => M(this, _e).canRun(this),
          }),
        );
        const r = this.state.status === "pending",
          i = !M(this, kr).canStart();
        try {
          if (r) n();
          else {
            (Le(this, Gt, Rn).call(this, {
              type: "pending",
              variables: t,
              isPaused: i,
            }),
              await ((s = (o = M(this, _e).config).onMutate) == null
                ? void 0
                : s.call(o, t, this)));
            const R = await ((l = (a = this.options).onMutate) == null
              ? void 0
              : l.call(a, t));
            R !== this.state.context &&
              Le(this, Gt, Rn).call(this, {
                type: "pending",
                context: R,
                variables: t,
                isPaused: i,
              });
          }
          const D = await M(this, kr).start();
          return (
            await ((c = (u = M(this, _e).config).onSuccess) == null
              ? void 0
              : c.call(u, D, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null
              ? void 0
              : f.call(d, D, t, this.state.context)),
            await ((v = (h = M(this, _e).config).onSettled) == null
              ? void 0
              : v.call(
                  h,
                  D,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((w = (g = this.options).onSettled) == null
              ? void 0
              : w.call(g, D, null, t, this.state.context)),
            Le(this, Gt, Rn).call(this, { type: "success", data: D }),
            D
          );
        } catch (D) {
          try {
            throw (
              await ((p = (m = M(this, _e).config).onError) == null
                ? void 0
                : p.call(m, D, t, this.state.context, this)),
              await ((S = (y = this.options).onError) == null
                ? void 0
                : S.call(y, D, t, this.state.context)),
              await ((T = (E = M(this, _e).config).onSettled) == null
                ? void 0
                : T.call(
                    E,
                    void 0,
                    D,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((k = (P = this.options).onSettled) == null
                ? void 0
                : k.call(P, void 0, D, t, this.state.context)),
              D
            );
          } finally {
            Le(this, Gt, Rn).call(this, { type: "error", error: D });
          }
        } finally {
          M(this, _e).runNext(this);
        }
      }
    }),
    (Kt = new WeakMap()),
    (_e = new WeakMap()),
    (kr = new WeakMap()),
    (Gt = new WeakSet()),
    (Rn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = n(this.state)),
        Be.batch(() => {
          (M(this, Kt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            M(this, _e).notify({ mutation: this, type: "updated", action: t }));
        }));
    }),
    mg);
function ZE() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var ln,
  Nt,
  ts,
  gg,
  JE =
    ((gg = class extends fl {
      constructor(t = {}) {
        super();
        J(this, ln);
        J(this, Nt);
        J(this, ts);
        ((this.config = t),
          G(this, ln, new Set()),
          G(this, Nt, new Map()),
          G(this, ts, 0));
      }
      build(t, n, r) {
        const i = new qE({
          mutationCache: this,
          mutationId: ++ys(this, ts)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(i), i);
      }
      add(t) {
        M(this, ln).add(t);
        const n = js(t);
        if (typeof n == "string") {
          const r = M(this, Nt).get(n);
          r ? r.push(t) : M(this, Nt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (M(this, ln).delete(t)) {
          const n = js(t);
          if (typeof n == "string") {
            const r = M(this, Nt).get(n);
            if (r)
              if (r.length > 1) {
                const i = r.indexOf(t);
                i !== -1 && r.splice(i, 1);
              } else r[0] === t && M(this, Nt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = js(t);
        if (typeof n == "string") {
          const r = M(this, Nt).get(n),
            i =
              r == null ? void 0 : r.find((o) => o.state.status === "pending");
          return !i || i === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = js(t);
        if (typeof n == "string") {
          const i =
            (r = M(this, Nt).get(n)) == null
              ? void 0
              : r.find((o) => o !== t && o.state.isPaused);
          return (i == null ? void 0 : i.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Be.batch(() => {
          (M(this, ln).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            M(this, ln).clear(),
            M(this, Nt).clear());
        });
      }
      getAll() {
        return Array.from(M(this, ln));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => fp(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => fp(t, n));
      }
      notify(t) {
        Be.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Be.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(At))),
        );
      }
    }),
    (ln = new WeakMap()),
    (Nt = new WeakMap()),
    (ts = new WeakMap()),
    gg);
function js(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function mp(e) {
  return {
    onFetch: (t, n) => {
      var c, d, f, h, v;
      const r = t.options,
        i =
          (f =
            (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : d.fetchMore) == null
            ? void 0
            : f.direction,
        o = ((h = t.state.data) == null ? void 0 : h.pages) || [],
        s = ((v = t.state.data) == null ? void 0 : v.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let g = !1;
        const w = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (g = !0)
                  : t.signal.addEventListener("abort", () => {
                      g = !0;
                    }),
                t.signal
              ),
            });
          },
          m = jv(t.options, t.fetchOptions),
          p = async (y, S, E) => {
            if (g) return Promise.reject();
            if (S == null && y.pages.length) return Promise.resolve(y);
            const P = (() => {
                const V = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: S,
                  direction: E ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return (w(V), V);
              })(),
              k = await m(P),
              { maxPages: D } = t.options,
              R = E ? zE : _E;
            return {
              pages: R(y.pages, k, D),
              pageParams: R(y.pageParams, S, D),
            };
          };
        if (i && o.length) {
          const y = i === "backward",
            S = y ? eC : gp,
            E = { pages: o, pageParams: s },
            T = S(r, E);
          a = await p(E, T, y);
        } else {
          const y = e ?? o.length;
          do {
            const S = l === 0 ? (s[0] ?? r.initialPageParam) : gp(r, a);
            if (l > 0 && S == null) break;
            ((a = await p(a, S)), l++);
          } while (l < y);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var g, w;
            return (w = (g = t.options).persister) == null
              ? void 0
              : w.call(
                  g,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function gp(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function eC(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var me,
  Vn,
  Fn,
  Pi,
  bi,
  _n,
  ki,
  Ri,
  yg,
  tC =
    ((yg = class {
      constructor(e = {}) {
        J(this, me);
        J(this, Vn);
        J(this, Fn);
        J(this, Pi);
        J(this, bi);
        J(this, _n);
        J(this, ki);
        J(this, Ri);
        (G(this, me, e.queryCache || new XE()),
          G(this, Vn, e.mutationCache || new JE()),
          G(this, Fn, e.defaultOptions || {}),
          G(this, Pi, new Map()),
          G(this, bi, new Map()),
          G(this, _n, 0));
      }
      mount() {
        (ys(this, _n)._++,
          M(this, _n) === 1 &&
            (G(
              this,
              ki,
              Iv.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), M(this, me).onFocus());
              }),
            ),
            G(
              this,
              Ri,
              ja.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), M(this, me).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (ys(this, _n)._--,
          M(this, _n) === 0 &&
            ((e = M(this, ki)) == null || e.call(this),
            G(this, ki, void 0),
            (t = M(this, Ri)) == null || t.call(this),
            G(this, Ri, void 0)));
      }
      isFetching(e) {
        return M(this, me).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return M(this, Vn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = M(this, me).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = M(this, me).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Sc(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return M(this, me)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          i = M(this, me).get(r.queryHash),
          o = i == null ? void 0 : i.state.data,
          s = LE(t, o);
        if (s !== void 0)
          return M(this, me)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Be.batch(() =>
          M(this, me)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = M(this, me).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = M(this, me);
        Be.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = M(this, me);
        return Be.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = Be.batch(() =>
            M(this, me)
              .findAll(e)
              .map((i) => i.cancel(n)),
          );
        return Promise.all(r).then(At).catch(At);
      }
      invalidateQueries(e, t = {}) {
        return Be.batch(
          () => (
            M(this, me)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t,
                )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = Be.batch(() =>
            M(this, me)
              .findAll(e)
              .filter((i) => !i.isDisabled() && !i.isStatic())
              .map((i) => {
                let o = i.fetch(void 0, n);
                return (
                  n.throwOnError || (o = o.catch(At)),
                  i.state.fetchStatus === "paused" ? Promise.resolve() : o
                );
              }),
          );
        return Promise.all(r).then(At);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = M(this, me).build(this, t);
        return n.isStaleByTime(Sc(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(At).catch(At);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = mp(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(At).catch(At);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = mp(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return ja.isOnline()
          ? M(this, Vn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return M(this, me);
      }
      getMutationCache() {
        return M(this, Vn);
      }
      getDefaultOptions() {
        return M(this, Fn);
      }
      setDefaultOptions(e) {
        G(this, Fn, e);
      }
      setQueryDefaults(e, t) {
        M(this, Pi).set(Ko(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...M(this, Pi).values()],
          n = {};
        return (
          t.forEach((r) => {
            Go(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        M(this, bi).set(Ko(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...M(this, bi).values()],
          n = {};
        return (
          t.forEach((r) => {
            Go(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...M(this, Fn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = nf(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === rf && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...M(this, Fn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (M(this, me).clear(), M(this, Vn).clear());
      }
    }),
    (me = new WeakMap()),
    (Vn = new WeakMap()),
    (Fn = new WeakMap()),
    (Pi = new WeakMap()),
    (bi = new WeakMap()),
    (_n = new WeakMap()),
    (ki = new WeakMap()),
    (Ri = new WeakMap()),
    yg),
  nC = x.createContext(void 0),
  rC = ({ client: e, children: t }) => (
    x.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    C.jsx(nC.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ia() {
  return (
    (Ia = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ia.apply(this, arguments)
  );
}
var $n;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})($n || ($n = {}));
const yp = "popstate";
function iC(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return Cc(
      "",
      { pathname: o, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : $v(i);
  }
  return sC(t, n, null, e);
}
function et(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Bv(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function oC() {
  return Math.random().toString(36).substr(2, 8);
}
function vp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Cc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ia(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? pl(t) : t,
      { state: n, key: (t && t.key) || r || oC() },
    )
  );
}
function $v(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function pl(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function sC(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = $n.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(Ia({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = $n.Pop;
    let w = c(),
      m = w == null ? null : w - u;
    ((u = w), l && l({ action: a, location: g.location, delta: m }));
  }
  function f(w, m) {
    a = $n.Push;
    let p = Cc(g.location, w, m);
    u = c() + 1;
    let y = vp(p, u),
      S = g.createHref(p);
    try {
      s.pushState(y, "", S);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      i.location.assign(S);
    }
    o && l && l({ action: a, location: g.location, delta: 1 });
  }
  function h(w, m) {
    a = $n.Replace;
    let p = Cc(g.location, w, m);
    u = c();
    let y = vp(p, u),
      S = g.createHref(p);
    (s.replaceState(y, "", S),
      o && l && l({ action: a, location: g.location, delta: 0 }));
  }
  function v(w) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof w == "string" ? w : $v(w);
    return (
      (p = p.replace(/ $/, "%20")),
      et(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p,
      ),
      new URL(p, m)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(yp, d),
        (l = w),
        () => {
          (i.removeEventListener(yp, d), (l = null));
        }
      );
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: v,
    encodeLocation(w) {
      let m = v(w);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: h,
    go(w) {
      return s.go(w);
    },
  };
  return g;
}
var wp;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(wp || (wp = {}));
function aC(e, t, n) {
  return (n === void 0 && (n = "/"), lC(e, t, n, !1));
}
function lC(e, t, n, r) {
  let i = typeof t == "string" ? pl(t) : t,
    o = Hv(i.pathname || "/", n);
  if (o == null) return null;
  let s = Uv(e);
  uC(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = xC(o);
    a = vC(s[l], u, r);
  }
  return a;
}
function Uv(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (et(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = vi([r, l.relativePath]),
      c = n.concat(l);
    (o.children &&
      o.children.length > 0 &&
      (et(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      Uv(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: gC(u, o.index), routesMeta: c }));
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else for (let l of Wv(o.path)) i(o, s, l);
    }),
    t
  );
}
function Wv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = Wv(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function uC(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : yC(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const cC = /^:[\w-]+$/,
  dC = 3,
  fC = 2,
  hC = 1,
  pC = 10,
  mC = -2,
  xp = (e) => e === "*";
function gC(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(xp) && (r += mC),
    t && (r += fC),
    n
      .filter((i) => !xp(i))
      .reduce((i, o) => i + (cC.test(o) ? dC : o === "" ? hC : pC), r)
  );
}
function yC(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function vC(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      d = Sp(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c,
      ),
      f = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Sp(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c,
        )),
      !d)
    )
      return null;
    (Object.assign(i, d.params),
      s.push({
        params: i,
        pathname: vi([o, d.pathname]),
        pathnameBase: SC(vi([o, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (o = vi([o, d.pathnameBase])));
  }
  return s;
}
function Sp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = wC(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: h } = c;
      if (f === "*") {
        let g = a[d] || "";
        s = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[d];
      return (
        h && !v ? (u[f] = void 0) : (u[f] = (v || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function wC(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Bv(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function xC(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Bv(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Hv(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const vi = (e) => e.join("/").replace(/\/\/+/g, "/"),
  SC = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function EC(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Kv = ["post", "put", "patch", "delete"];
new Set(Kv);
const CC = ["get", ...Kv];
new Set(CC);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Va() {
  return (
    (Va = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Va.apply(this, arguments)
  );
}
const TC = x.createContext(null),
  PC = x.createContext(null),
  Gv = x.createContext(null),
  ml = x.createContext(null),
  gl = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Qv = x.createContext(null);
function of() {
  return x.useContext(ml) != null;
}
function Yv() {
  return (of() || et(!1), x.useContext(ml).location);
}
function bC(e, t) {
  return kC(e, t);
}
function kC(e, t, n, r) {
  of() || et(!1);
  let { navigator: i } = x.useContext(Gv),
    { matches: o } = x.useContext(gl),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = Yv(),
    c;
  if (t) {
    var d;
    let w = typeof t == "string" ? pl(t) : t;
    (l === "/" || ((d = w.pathname) != null && d.startsWith(l)) || et(!1),
      (c = w));
  } else c = u;
  let f = c.pathname || "/",
    h = f;
  if (l !== "/") {
    let w = l.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let v = aC(e, { pathname: h }),
    g = DC(
      v &&
        v.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: vi([
              l,
              i.encodeLocation
                ? i.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? l
                : vi([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
      r,
    );
  return t && g
    ? x.createElement(
        ml.Provider,
        {
          value: {
            location: Va(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: $n.Pop,
          },
        },
        g,
      )
    : g;
}
function RC() {
  let e = IC(),
    t = EC(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: i }, n) : null,
    null,
  );
}
const AC = x.createElement(RC, null);
class MC extends x.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          gl.Provider,
          { value: this.props.routeContext },
          x.createElement(Qv.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function NC(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = x.useContext(TC);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(gl.Provider, { value: t }, r)
  );
}
function DC(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = s.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0,
    );
    (c >= 0 || et(!1), (s = s.slice(0, Math.min(s.length, c + 1))));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: h } = n,
          v =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!h || h[d.route.id] === void 0);
        if (d.route.lazy || v) {
          ((l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]));
          break;
        }
      }
    }
  return s.reduceRight((c, d, f) => {
    let h,
      v = !1,
      g = null,
      w = null;
    n &&
      ((h = a && d.route.id ? a[d.route.id] : void 0),
      (g = d.route.errorElement || AC),
      l &&
        (u < 0 && f === 0
          ? ((v = !0), (w = null))
          : u === f &&
            ((v = !0), (w = d.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, f + 1)),
      p = () => {
        let y;
        return (
          h
            ? (y = g)
            : v
              ? (y = w)
              : d.route.Component
                ? (y = x.createElement(d.route.Component, null))
                : d.route.element
                  ? (y = d.route.element)
                  : (y = c),
          x.createElement(NC, {
            match: d,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? x.createElement(MC, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: h,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Tc = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Tc || {});
function LC(e) {
  let t = x.useContext(PC);
  return (t || et(!1), t);
}
function OC(e) {
  let t = x.useContext(gl);
  return (t || et(!1), t);
}
function jC(e) {
  let t = OC(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || et(!1), n.route.id);
}
function IC() {
  var e;
  let t = x.useContext(Qv),
    n = LC(Tc.UseRouteError),
    r = jC(Tc.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function VC(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function Pc(e) {
  et(!1);
}
function FC(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = $n.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  of() && et(!1);
  let l = t.replace(/^\/*/, "/"),
    u = x.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: s,
        future: Va({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, o, s],
    );
  typeof r == "string" && (r = pl(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: h = null,
      key: v = "default",
    } = r,
    g = x.useMemo(() => {
      let w = Hv(c, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: d, hash: f, state: h, key: v },
            navigationType: i,
          };
    }, [l, c, d, f, h, v, i]);
  return g == null
    ? null
    : x.createElement(
        Gv.Provider,
        { value: u },
        x.createElement(ml.Provider, { children: n, value: g }),
      );
}
function _C(e) {
  let { children: t, location: n } = e;
  return bC(bc(t), n);
}
new Promise(() => {});
function bc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, i) => {
      if (!x.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === x.Fragment) {
        n.push.apply(n, bc(r.props.children, o));
        return;
      }
      (r.type !== Pc && et(!1), !r.props.index || !r.props.children || et(!1));
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (s.children = bc(r.props.children, o)), n.push(s));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const zC = "6";
try {
  window.__reactRouterVersion = zC;
} catch {}
const BC = "startTransition",
  Ep = Ag[BC];
function $C(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = x.useRef();
  o.current == null && (o.current = iC({ window: i, v5Compat: !0 }));
  let s = o.current,
    [a, l] = x.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = x.useCallback(
      (d) => {
        u && Ep ? Ep(() => l(d)) : l(d);
      },
      [l, u],
    );
  return (
    x.useLayoutEffect(() => s.listen(c), [s, c]),
    x.useEffect(() => VC(r), [r]),
    x.createElement(FC, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
var Cp;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(Cp || (Cp = {}));
var Tp;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Tp || (Tp = {}));
var Pp = ["light", "dark"],
  UC = "(prefers-color-scheme: dark)",
  WC = x.createContext(void 0),
  HC = { setTheme: (e) => {}, themes: [] },
  KC = () => {
    var e;
    return (e = x.useContext(WC)) != null ? e : HC;
  };
x.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: i,
    defaultTheme: o,
    value: s,
    attrs: a,
    nonce: l,
  }) => {
    let u = o === "system",
      c =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((v) => `'${v}'`).join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      d = i
        ? Pp.includes(o) && o
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      f = (v, g = !1, w = !0) => {
        let m = s ? s[v] : v,
          p = g ? v + "|| ''" : `'${m}'`,
          y = "";
        return (
          i &&
            w &&
            !g &&
            Pp.includes(v) &&
            (y += `d.style.colorScheme = '${v}';`),
          n === "class"
            ? g || m
              ? (y += `c.add(${p})`)
              : (y += "null")
            : m && (y += `d[s](n,${p})`),
          y
        );
      },
      h = e
        ? `!function(){${c}${f(e)}}()`
        : r
          ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${UC}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${f(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(o, !1, !1) + "}"}${d}}catch(e){}}()`
          : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${f(s ? "x[e]" : "e", !0)}}else{${f(o, !1, !1)};}${d}}catch(t){}}();`;
    return x.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: h },
    });
  },
);
var GC = (e) => {
    switch (e) {
      case "success":
        return XC;
      case "info":
        return ZC;
      case "warning":
        return qC;
      case "error":
        return JC;
      default:
        return null;
    }
  },
  QC = Array(12).fill(0),
  YC = ({ visible: e, className: t }) =>
    L.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      L.createElement(
        "div",
        { className: "sonner-spinner" },
        QC.map((n, r) =>
          L.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          }),
        ),
      ),
    ),
  XC = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  qC = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  ZC = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  JC = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  eT = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    L.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    L.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  tT = () => {
    let [e, t] = L.useState(document.hidden);
    return (
      L.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  kc = 1,
  nT = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            i =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : kc++,
            o = this.toasts.find((a) => a.id === i),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(i) && this.dismissedToasts.delete(i),
            o
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === i
                    ? (this.publish({ ...a, ...e, id: i, title: n }),
                      { ...a, ...e, id: i, dismissible: s, title: n })
                    : a,
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: i }),
            i
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            i = n !== void 0,
            o,
            s = r
              .then(async (l) => {
                if (((o = ["resolve", l]), L.isValidElement(l)))
                  ((i = !1),
                    this.create({ id: n, type: "default", message: l }));
                else if (iT(l) && !l.ok) {
                  i = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                } else if (t.success !== void 0) {
                  i = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(l)
                        : t.success,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: c,
                  });
                }
              })
              .catch(async (l) => {
                if (((o = ["reject", l]), t.error !== void 0)) {
                  i = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(l) : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                }
              })
              .finally(() => {
                var l;
                (i && (this.dismiss(n), (n = void 0)),
                  (l = t.finally) == null || l.call(t));
              }),
            a = () =>
              new Promise((l, u) =>
                s.then(() => (o[0] === "reject" ? u(o[1]) : l(o[1]))).catch(u),
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: a }
            : Object.assign(n, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || kc++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  Ge = new nT(),
  rT = (e, t) => {
    let n = (t == null ? void 0 : t.id) || kc++;
    return (Ge.addToast({ title: e, ...t, id: n }), n);
  },
  iT = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  oT = rT,
  sT = () => Ge.toasts,
  aT = () => Ge.getActiveToasts();
Object.assign(
  oT,
  {
    success: Ge.success,
    info: Ge.info,
    warning: Ge.warning,
    error: Ge.error,
    custom: Ge.custom,
    message: Ge.message,
    promise: Ge.promise,
    dismiss: Ge.dismiss,
    loading: Ge.loading,
  },
  { getHistory: sT, getToasts: aT },
);
function lT(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  ((r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e)));
}
lT(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Is(e) {
  return e.label !== void 0;
}
var uT = 3,
  cT = "32px",
  dT = "16px",
  bp = 4e3,
  fT = 356,
  hT = 14,
  pT = 20,
  mT = 200;
function Pt(...e) {
  return e.filter(Boolean).join(" ");
}
function gT(e) {
  let [t, n] = e.split("-"),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var yT = (e) => {
  var t, n, r, i, o, s, a, l, u, c, d;
  let {
      invert: f,
      toast: h,
      unstyled: v,
      interacting: g,
      setHeights: w,
      visibleToasts: m,
      heights: p,
      index: y,
      toasts: S,
      expanded: E,
      removeToast: T,
      defaultRichColors: P,
      closeButton: k,
      style: D,
      cancelButtonStyle: R,
      actionButtonStyle: V,
      className: j = "",
      descriptionClassName: U = "",
      duration: O,
      position: W,
      gap: z,
      loadingIcon: H,
      expandByDefault: b,
      classNames: A,
      icons: I,
      closeButtonAriaLabel: $ = "Close toast",
      pauseWhenPageIsHidden: B,
    } = e,
    [Y, q] = L.useState(null),
    [ve, De] = L.useState(null),
    [ee, Br] = L.useState(!1),
    [wn, cr] = L.useState(!1),
    [xn, $r] = L.useState(!1),
    [Sn, ps] = L.useState(!1),
    [Al, ms] = L.useState(!1),
    [Ml, Xi] = L.useState(0),
    [Ur, Yf] = L.useState(0),
    qi = L.useRef(h.duration || O || bp),
    Xf = L.useRef(null),
    dr = L.useRef(null),
    Zx = y === 0,
    Jx = y + 1 <= m,
    ct = h.type,
    Wr = h.dismissible !== !1,
    e1 = h.className || "",
    t1 = h.descriptionClassName || "",
    gs = L.useMemo(
      () => p.findIndex((K) => K.toastId === h.id) || 0,
      [p, h.id],
    ),
    n1 = L.useMemo(() => {
      var K;
      return (K = h.closeButton) != null ? K : k;
    }, [h.closeButton, k]),
    qf = L.useMemo(() => h.duration || O || bp, [h.duration, O]),
    Nl = L.useRef(0),
    Hr = L.useRef(0),
    Zf = L.useRef(0),
    Kr = L.useRef(null),
    [r1, i1] = W.split("-"),
    Jf = L.useMemo(
      () => p.reduce((K, ne, le) => (le >= gs ? K : K + ne.height), 0),
      [p, gs],
    ),
    eh = tT(),
    o1 = h.invert || f,
    Dl = ct === "loading";
  ((Hr.current = L.useMemo(() => gs * z + Jf, [gs, Jf])),
    L.useEffect(() => {
      qi.current = qf;
    }, [qf]),
    L.useEffect(() => {
      Br(!0);
    }, []),
    L.useEffect(() => {
      let K = dr.current;
      if (K) {
        let ne = K.getBoundingClientRect().height;
        return (
          Yf(ne),
          w((le) => [
            { toastId: h.id, height: ne, position: h.position },
            ...le,
          ]),
          () => w((le) => le.filter((St) => St.toastId !== h.id))
        );
      }
    }, [w, h.id]),
    L.useLayoutEffect(() => {
      if (!ee) return;
      let K = dr.current,
        ne = K.style.height;
      K.style.height = "auto";
      let le = K.getBoundingClientRect().height;
      ((K.style.height = ne),
        Yf(le),
        w((St) =>
          St.find((Et) => Et.toastId === h.id)
            ? St.map((Et) => (Et.toastId === h.id ? { ...Et, height: le } : Et))
            : [{ toastId: h.id, height: le, position: h.position }, ...St],
        ));
    }, [ee, h.title, h.description, w, h.id]));
  let En = L.useCallback(() => {
    (cr(!0),
      Xi(Hr.current),
      w((K) => K.filter((ne) => ne.toastId !== h.id)),
      setTimeout(() => {
        T(h);
      }, mT));
  }, [h, T, w, Hr]);
  (L.useEffect(() => {
    if (
      (h.promise && ct === "loading") ||
      h.duration === 1 / 0 ||
      h.type === "loading"
    )
      return;
    let K;
    return (
      E || g || (B && eh)
        ? (() => {
            if (Zf.current < Nl.current) {
              let ne = new Date().getTime() - Nl.current;
              qi.current = qi.current - ne;
            }
            Zf.current = new Date().getTime();
          })()
        : qi.current !== 1 / 0 &&
          ((Nl.current = new Date().getTime()),
          (K = setTimeout(() => {
            var ne;
            ((ne = h.onAutoClose) == null || ne.call(h, h), En());
          }, qi.current))),
      () => clearTimeout(K)
    );
  }, [E, g, h, ct, B, eh, En]),
    L.useEffect(() => {
      h.delete && En();
    }, [En, h.delete]));
  function s1() {
    var K, ne, le;
    return I != null && I.loading
      ? L.createElement(
          "div",
          {
            className: Pt(
              A == null ? void 0 : A.loader,
              (K = h == null ? void 0 : h.classNames) == null
                ? void 0
                : K.loader,
              "sonner-loader",
            ),
            "data-visible": ct === "loading",
          },
          I.loading,
        )
      : H
        ? L.createElement(
            "div",
            {
              className: Pt(
                A == null ? void 0 : A.loader,
                (ne = h == null ? void 0 : h.classNames) == null
                  ? void 0
                  : ne.loader,
                "sonner-loader",
              ),
              "data-visible": ct === "loading",
            },
            H,
          )
        : L.createElement(YC, {
            className: Pt(
              A == null ? void 0 : A.loader,
              (le = h == null ? void 0 : h.classNames) == null
                ? void 0
                : le.loader,
            ),
            visible: ct === "loading",
          });
  }
  return L.createElement(
    "li",
    {
      tabIndex: 0,
      ref: dr,
      className: Pt(
        j,
        e1,
        A == null ? void 0 : A.toast,
        (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast,
        A == null ? void 0 : A.default,
        A == null ? void 0 : A[ct],
        (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[ct],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = h.richColors) != null ? r : P,
      "data-styled": !(h.jsx || h.unstyled || v),
      "data-mounted": ee,
      "data-promise": !!h.promise,
      "data-swiped": Al,
      "data-removed": wn,
      "data-visible": Jx,
      "data-y-position": r1,
      "data-x-position": i1,
      "data-index": y,
      "data-front": Zx,
      "data-swiping": xn,
      "data-dismissible": Wr,
      "data-type": ct,
      "data-invert": o1,
      "data-swipe-out": Sn,
      "data-swipe-direction": ve,
      "data-expanded": !!(E || (b && ee)),
      style: {
        "--index": y,
        "--toasts-before": y,
        "--z-index": S.length - y,
        "--offset": `${wn ? Ml : Hr.current}px`,
        "--initial-height": b ? "auto" : `${Ur}px`,
        ...D,
        ...h.style,
      },
      onDragEnd: () => {
        ($r(!1), q(null), (Kr.current = null));
      },
      onPointerDown: (K) => {
        Dl ||
          !Wr ||
          ((Xf.current = new Date()),
          Xi(Hr.current),
          K.target.setPointerCapture(K.pointerId),
          K.target.tagName !== "BUTTON" &&
            ($r(!0), (Kr.current = { x: K.clientX, y: K.clientY })));
      },
      onPointerUp: () => {
        var K, ne, le, St;
        if (Sn || !Wr) return;
        Kr.current = null;
        let Et = Number(
            ((K = dr.current) == null
              ? void 0
              : K.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          Cn = Number(
            ((ne = dr.current) == null
              ? void 0
              : ne.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          fr =
            new Date().getTime() -
            ((le = Xf.current) == null ? void 0 : le.getTime()),
          Ct = Y === "x" ? Et : Cn,
          Tn = Math.abs(Ct) / fr;
        if (Math.abs(Ct) >= pT || Tn > 0.11) {
          (Xi(Hr.current),
            (St = h.onDismiss) == null || St.call(h, h),
            De(
              Y === "x" ? (Et > 0 ? "right" : "left") : Cn > 0 ? "down" : "up",
            ),
            En(),
            ps(!0),
            ms(!1));
          return;
        }
        ($r(!1), q(null));
      },
      onPointerMove: (K) => {
        var ne, le, St, Et;
        if (
          !Kr.current ||
          !Wr ||
          ((ne = window.getSelection()) == null
            ? void 0
            : ne.toString().length) > 0
        )
          return;
        let Cn = K.clientY - Kr.current.y,
          fr = K.clientX - Kr.current.x,
          Ct = (le = e.swipeDirections) != null ? le : gT(W);
        !Y &&
          (Math.abs(fr) > 1 || Math.abs(Cn) > 1) &&
          q(Math.abs(fr) > Math.abs(Cn) ? "x" : "y");
        let Tn = { x: 0, y: 0 };
        (Y === "y"
          ? (Ct.includes("top") || Ct.includes("bottom")) &&
            ((Ct.includes("top") && Cn < 0) ||
              (Ct.includes("bottom") && Cn > 0)) &&
            (Tn.y = Cn)
          : Y === "x" &&
            (Ct.includes("left") || Ct.includes("right")) &&
            ((Ct.includes("left") && fr < 0) ||
              (Ct.includes("right") && fr > 0)) &&
            (Tn.x = fr),
          (Math.abs(Tn.x) > 0 || Math.abs(Tn.y) > 0) && ms(!0),
          (St = dr.current) == null ||
            St.style.setProperty("--swipe-amount-x", `${Tn.x}px`),
          (Et = dr.current) == null ||
            Et.style.setProperty("--swipe-amount-y", `${Tn.y}px`));
      },
    },
    n1 && !h.jsx
      ? L.createElement(
          "button",
          {
            "aria-label": $,
            "data-disabled": Dl,
            "data-close-button": !0,
            onClick:
              Dl || !Wr
                ? () => {}
                : () => {
                    var K;
                    (En(), (K = h.onDismiss) == null || K.call(h, h));
                  },
            className: Pt(
              A == null ? void 0 : A.closeButton,
              (i = h == null ? void 0 : h.classNames) == null
                ? void 0
                : i.closeButton,
            ),
          },
          (o = I == null ? void 0 : I.close) != null ? o : eT,
        )
      : null,
    h.jsx || x.isValidElement(h.title)
      ? h.jsx
        ? h.jsx
        : typeof h.title == "function"
          ? h.title()
          : h.title
      : L.createElement(
          L.Fragment,
          null,
          ct || h.icon || h.promise
            ? L.createElement(
                "div",
                {
                  "data-icon": "",
                  className: Pt(
                    A == null ? void 0 : A.icon,
                    (s = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : s.icon,
                  ),
                },
                h.promise || (h.type === "loading" && !h.icon)
                  ? h.icon || s1()
                  : null,
                h.type !== "loading"
                  ? h.icon || (I == null ? void 0 : I[ct]) || GC(ct)
                  : null,
              )
            : null,
          L.createElement(
            "div",
            {
              "data-content": "",
              className: Pt(
                A == null ? void 0 : A.content,
                (a = h == null ? void 0 : h.classNames) == null
                  ? void 0
                  : a.content,
              ),
            },
            L.createElement(
              "div",
              {
                "data-title": "",
                className: Pt(
                  A == null ? void 0 : A.title,
                  (l = h == null ? void 0 : h.classNames) == null
                    ? void 0
                    : l.title,
                ),
              },
              typeof h.title == "function" ? h.title() : h.title,
            ),
            h.description
              ? L.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: Pt(
                      U,
                      t1,
                      A == null ? void 0 : A.description,
                      (u = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : u.description,
                    ),
                  },
                  typeof h.description == "function"
                    ? h.description()
                    : h.description,
                )
              : null,
          ),
          x.isValidElement(h.cancel)
            ? h.cancel
            : h.cancel && Is(h.cancel)
              ? L.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: h.cancelButtonStyle || R,
                    onClick: (K) => {
                      var ne, le;
                      Is(h.cancel) &&
                        Wr &&
                        ((le = (ne = h.cancel).onClick) == null ||
                          le.call(ne, K),
                        En());
                    },
                    className: Pt(
                      A == null ? void 0 : A.cancelButton,
                      (c = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : c.cancelButton,
                    ),
                  },
                  h.cancel.label,
                )
              : null,
          x.isValidElement(h.action)
            ? h.action
            : h.action && Is(h.action)
              ? L.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: h.actionButtonStyle || V,
                    onClick: (K) => {
                      var ne, le;
                      Is(h.action) &&
                        ((le = (ne = h.action).onClick) == null ||
                          le.call(ne, K),
                        !K.defaultPrevented && En());
                    },
                    className: Pt(
                      A == null ? void 0 : A.actionButton,
                      (d = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : d.actionButton,
                    ),
                  },
                  h.action.label,
                )
              : null,
        ),
  );
};
function kp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function vT(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, i) => {
      let o = i === 1,
        s = o ? "--mobile-offset" : "--offset",
        a = o ? dT : cT;
      function l(u) {
        ["top", "right", "bottom", "left"].forEach((c) => {
          n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? l(r)
        : typeof r == "object"
          ? ["top", "right", "bottom", "left"].forEach((u) => {
              r[u] === void 0
                ? (n[`${s}-${u}`] = a)
                : (n[`${s}-${u}`] =
                    typeof r[u] == "number" ? `${r[u]}px` : r[u]);
            })
          : l(a);
    }),
    n
  );
}
var wT = x.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: i = ["altKey", "KeyT"],
      expand: o,
      closeButton: s,
      className: a,
      offset: l,
      mobileOffset: u,
      theme: c = "light",
      richColors: d,
      duration: f,
      style: h,
      visibleToasts: v = uT,
      toastOptions: g,
      dir: w = kp(),
      gap: m = hT,
      loadingIcon: p,
      icons: y,
      containerAriaLabel: S = "Notifications",
      pauseWhenPageIsHidden: E,
    } = e,
    [T, P] = L.useState([]),
    k = L.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(T.filter((B) => B.position).map((B) => B.position)),
          ),
        ),
      [T, r],
    ),
    [D, R] = L.useState([]),
    [V, j] = L.useState(!1),
    [U, O] = L.useState(!1),
    [W, z] = L.useState(
      c !== "system"
        ? c
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    H = L.useRef(null),
    b = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    A = L.useRef(null),
    I = L.useRef(!1),
    $ = L.useCallback((B) => {
      P((Y) => {
        var q;
        return (
          ((q = Y.find((ve) => ve.id === B.id)) != null && q.delete) ||
            Ge.dismiss(B.id),
          Y.filter(({ id: ve }) => ve !== B.id)
        );
      });
    }, []);
  return (
    L.useEffect(
      () =>
        Ge.subscribe((B) => {
          if (B.dismiss) {
            P((Y) => Y.map((q) => (q.id === B.id ? { ...q, delete: !0 } : q)));
            return;
          }
          setTimeout(() => {
            Dv.flushSync(() => {
              P((Y) => {
                let q = Y.findIndex((ve) => ve.id === B.id);
                return q !== -1
                  ? [...Y.slice(0, q), { ...Y[q], ...B }, ...Y.slice(q + 1)]
                  : [B, ...Y];
              });
            });
          });
        }),
      [],
    ),
    L.useEffect(() => {
      if (c !== "system") {
        z(c);
        return;
      }
      if (
        (c === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? z("dark")
            : z("light")),
        typeof window > "u")
      )
        return;
      let B = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        B.addEventListener("change", ({ matches: Y }) => {
          z(Y ? "dark" : "light");
        });
      } catch {
        B.addListener(({ matches: q }) => {
          try {
            z(q ? "dark" : "light");
          } catch (ve) {
            console.error(ve);
          }
        });
      }
    }, [c]),
    L.useEffect(() => {
      T.length <= 1 && j(!1);
    }, [T]),
    L.useEffect(() => {
      let B = (Y) => {
        var q, ve;
        (i.every((De) => Y[De] || Y.code === De) &&
          (j(!0), (q = H.current) == null || q.focus()),
          Y.code === "Escape" &&
            (document.activeElement === H.current ||
              ((ve = H.current) != null &&
                ve.contains(document.activeElement))) &&
            j(!1));
      };
      return (
        document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
      );
    }, [i]),
    L.useEffect(() => {
      if (H.current)
        return () => {
          A.current &&
            (A.current.focus({ preventScroll: !0 }),
            (A.current = null),
            (I.current = !1));
        };
    }, [H.current]),
    L.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${S} ${b}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      k.map((B, Y) => {
        var q;
        let [ve, De] = B.split("-");
        return T.length
          ? L.createElement(
              "ol",
              {
                key: B,
                dir: w === "auto" ? kp() : w,
                tabIndex: -1,
                ref: H,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": W,
                "data-y-position": ve,
                "data-lifted": V && T.length > 1 && !o,
                "data-x-position": De,
                style: {
                  "--front-toast-height": `${((q = D[0]) == null ? void 0 : q.height) || 0}px`,
                  "--width": `${fT}px`,
                  "--gap": `${m}px`,
                  ...h,
                  ...vT(l, u),
                },
                onBlur: (ee) => {
                  I.current &&
                    !ee.currentTarget.contains(ee.relatedTarget) &&
                    ((I.current = !1),
                    A.current &&
                      (A.current.focus({ preventScroll: !0 }),
                      (A.current = null)));
                },
                onFocus: (ee) => {
                  (ee.target instanceof HTMLElement &&
                    ee.target.dataset.dismissible === "false") ||
                    I.current ||
                    ((I.current = !0), (A.current = ee.relatedTarget));
                },
                onMouseEnter: () => j(!0),
                onMouseMove: () => j(!0),
                onMouseLeave: () => {
                  U || j(!1);
                },
                onDragEnd: () => j(!1),
                onPointerDown: (ee) => {
                  (ee.target instanceof HTMLElement &&
                    ee.target.dataset.dismissible === "false") ||
                    O(!0);
                },
                onPointerUp: () => O(!1),
              },
              T.filter(
                (ee) => (!ee.position && Y === 0) || ee.position === B,
              ).map((ee, Br) => {
                var wn, cr;
                return L.createElement(yT, {
                  key: ee.id,
                  icons: y,
                  index: Br,
                  toast: ee,
                  defaultRichColors: d,
                  duration:
                    (wn = g == null ? void 0 : g.duration) != null ? wn : f,
                  className: g == null ? void 0 : g.className,
                  descriptionClassName:
                    g == null ? void 0 : g.descriptionClassName,
                  invert: n,
                  visibleToasts: v,
                  closeButton:
                    (cr = g == null ? void 0 : g.closeButton) != null ? cr : s,
                  interacting: U,
                  position: B,
                  style: g == null ? void 0 : g.style,
                  unstyled: g == null ? void 0 : g.unstyled,
                  classNames: g == null ? void 0 : g.classNames,
                  cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                  actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                  removeToast: $,
                  toasts: T.filter((xn) => xn.position == ee.position),
                  heights: D.filter((xn) => xn.position == ee.position),
                  setHeights: R,
                  expandByDefault: o,
                  gap: m,
                  loadingIcon: p,
                  expanded: V,
                  pauseWhenPageIsHidden: E,
                  swipeDirections: e.swipeDirections,
                });
              }),
            )
          : null;
      }),
    )
  );
});
const xT = ({ ...e }) => {
    const { theme: t = "system" } = KC();
    return C.jsx(wT, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  ST = 1,
  ET = 1e6;
let au = 0;
function CT() {
  return ((au = (au + 1) % Number.MAX_SAFE_INTEGER), au.toString());
}
const lu = new Map(),
  Rp = (e) => {
    if (lu.has(e)) return;
    const t = setTimeout(() => {
      (lu.delete(e), To({ type: "REMOVE_TOAST", toastId: e }));
    }, ET);
    lu.set(e, t);
  },
  TT = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, ST) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Rp(n)
            : e.toasts.forEach((r) => {
                Rp(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  na = [];
let ra = { toasts: [] };
function To(e) {
  ((ra = TT(ra, e)),
    na.forEach((t) => {
      t(ra);
    }));
}
function PT({ ...e }) {
  const t = CT(),
    n = (i) => To({ type: "UPDATE_TOAST", toast: { ...i, id: t } }),
    r = () => To({ type: "DISMISS_TOAST", toastId: t });
  return (
    To({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (i) => {
          i || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function bT() {
  const [e, t] = x.useState(ra);
  return (
    x.useEffect(
      () => (
        na.push(t),
        () => {
          const n = na.indexOf(t);
          n > -1 && na.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: PT,
      dismiss: (n) => To({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function Ce(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (i) {
    if ((e == null || e(i), n === !1 || !i.defaultPrevented))
      return t == null ? void 0 : t(i);
  };
}
function Ap(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Xv(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const o = Ap(i, t);
      return (!n && typeof o == "function" && (n = !0), o);
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const o = r[i];
          typeof o == "function" ? o() : Ap(e[i], null);
        }
      };
  };
}
function Ft(...e) {
  return x.useCallback(Xv(...e), e);
}
function yl(e, t = []) {
  let n = [];
  function r(o, s) {
    const a = x.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (d) => {
      var m;
      const { scope: f, children: h, ...v } = d,
        g = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a,
        w = x.useMemo(() => v, Object.values(v));
      return C.jsx(g.Provider, { value: w, children: h });
    };
    u.displayName = o + "Provider";
    function c(d, f) {
      var g;
      const h = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a,
        v = x.useContext(h);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${o}\``);
    }
    return [u, c];
  }
  const i = () => {
    const o = n.map((s) => x.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || o;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((i.scopeName = e), [r, kT(i, ...t)]);
}
function kT(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
    return function (o) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(o)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function Rc(e) {
  const t = RT(e),
    n = x.forwardRef((r, i) => {
      const { children: o, ...s } = r,
        a = x.Children.toArray(o),
        l = a.find(MT);
      if (l) {
        const u = l.props.children,
          c = a.map((d) =>
            d === l
              ? x.Children.count(u) > 1
                ? x.Children.only(null)
                : x.isValidElement(u)
                  ? u.props.children
                  : null
              : d,
          );
        return C.jsx(t, {
          ...s,
          ref: i,
          children: x.isValidElement(u) ? x.cloneElement(u, void 0, c) : null,
        });
      }
      return C.jsx(t, { ...s, ref: i, children: o });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function RT(e) {
  const t = x.forwardRef((n, r) => {
    const { children: i, ...o } = n;
    if (x.isValidElement(i)) {
      const s = DT(i),
        a = NT(o, i.props);
      return (
        i.type !== x.Fragment && (a.ref = r ? Xv(r, s) : s),
        x.cloneElement(i, a)
      );
    }
    return x.Children.count(i) > 1 ? x.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var qv = Symbol("radix.slottable");
function AT(e) {
  const t = ({ children: n }) => C.jsx(C.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = qv), t);
}
function MT(e) {
  return (
    x.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === qv
  );
}
function NT(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? i && o
        ? (n[r] = (...a) => {
            const l = o(...a);
            return (i(...a), l);
          })
        : i && (n[r] = i)
      : r === "style"
        ? (n[r] = { ...i, ...o })
        : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function DT(e) {
  var r, i;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function LT(e) {
  const t = e + "CollectionProvider",
    [n, r] = yl(t),
    [i, o] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (g) => {
      const { scope: w, children: m } = g,
        p = L.useRef(null),
        y = L.useRef(new Map()).current;
      return C.jsx(i, { scope: w, itemMap: y, collectionRef: p, children: m });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = Rc(a),
    u = L.forwardRef((g, w) => {
      const { scope: m, children: p } = g,
        y = o(a, m),
        S = Ft(w, y.collectionRef);
      return C.jsx(l, { ref: S, children: p });
    });
  u.displayName = a;
  const c = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    f = Rc(c),
    h = L.forwardRef((g, w) => {
      const { scope: m, children: p, ...y } = g,
        S = L.useRef(null),
        E = Ft(w, S),
        T = o(c, m);
      return (
        L.useEffect(
          () => (
            T.itemMap.set(S, { ref: S, ...y }),
            () => void T.itemMap.delete(S)
          ),
        ),
        C.jsx(f, { [d]: "", ref: E, children: p })
      );
    });
  h.displayName = c;
  function v(g) {
    const w = o(e + "CollectionConsumer", g);
    return L.useCallback(() => {
      const p = w.collectionRef.current;
      if (!p) return [];
      const y = Array.from(p.querySelectorAll(`[${d}]`));
      return Array.from(w.itemMap.values()).sort(
        (T, P) => y.indexOf(T.ref.current) - y.indexOf(P.ref.current),
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: h }, v, r];
}
var OT = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  tt = OT.reduce((e, t) => {
    const n = Rc(`Primitive.${t}`),
      r = x.forwardRef((i, o) => {
        const { asChild: s, ...a } = i,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          C.jsx(l, { ...a, ref: o })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function Zv(e, t) {
  e && as.flushSync(() => e.dispatchEvent(t));
}
function er(e) {
  const t = x.useRef(e);
  return (
    x.useEffect(() => {
      t.current = e;
    }),
    x.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function jT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = er(e);
  x.useEffect(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var IT = "DismissableLayer",
  Ac = "dismissableLayer.update",
  VT = "dismissableLayer.pointerDownOutside",
  FT = "dismissableLayer.focusOutside",
  Mp,
  Jv = x.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  sf = x.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: i,
        onFocusOutside: o,
        onInteractOutside: s,
        onDismiss: a,
        ...l
      } = e,
      u = x.useContext(Jv),
      [c, d] = x.useState(null),
      f =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, h] = x.useState({}),
      v = Ft(t, (P) => d(P)),
      g = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = g.indexOf(w),
      p = c ? g.indexOf(c) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = p >= m,
      E = zT((P) => {
        const k = P.target,
          D = [...u.branches].some((R) => R.contains(k));
        !S ||
          D ||
          (i == null || i(P),
          s == null || s(P),
          P.defaultPrevented || a == null || a());
      }, f),
      T = BT((P) => {
        const k = P.target;
        [...u.branches].some((R) => R.contains(k)) ||
          (o == null || o(P),
          s == null || s(P),
          P.defaultPrevented || a == null || a());
      }, f);
    return (
      jT((P) => {
        p === u.layers.size - 1 &&
          (r == null || r(P),
          !P.defaultPrevented && a && (P.preventDefault(), a()));
      }, f),
      x.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Mp = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Np(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = Mp);
            }
          );
      }, [c, f, n, u]),
      x.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            Np());
        },
        [c, u],
      ),
      x.useEffect(() => {
        const P = () => h({});
        return (
          document.addEventListener(Ac, P),
          () => document.removeEventListener(Ac, P)
        );
      }, []),
      C.jsx(tt.div, {
        ...l,
        ref: v,
        style: {
          pointerEvents: y ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Ce(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: Ce(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: Ce(
          e.onPointerDownCapture,
          E.onPointerDownCapture,
        ),
      })
    );
  });
sf.displayName = IT;
var _T = "DismissableLayerBranch",
  e0 = x.forwardRef((e, t) => {
    const n = x.useContext(Jv),
      r = x.useRef(null),
      i = Ft(t, r);
    return (
      x.useEffect(() => {
        const o = r.current;
        if (o)
          return (
            n.branches.add(o),
            () => {
              n.branches.delete(o);
            }
          );
      }, [n.branches]),
      C.jsx(tt.div, { ...e, ref: i })
    );
  });
e0.displayName = _T;
function zT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = er(e),
    r = x.useRef(!1),
    i = x.useRef(() => {});
  return (
    x.useEffect(() => {
      const o = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              t0(VT, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", i.current),
                (i.current = l),
                t.addEventListener("click", i.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", i.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", o);
        }, 0);
      return () => {
        (window.clearTimeout(s),
          t.removeEventListener("pointerdown", o),
          t.removeEventListener("click", i.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function BT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = er(e),
    r = x.useRef(!1);
  return (
    x.useEffect(() => {
      const i = (o) => {
        o.target &&
          !r.current &&
          t0(FT, n, { originalEvent: o }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", i),
        () => t.removeEventListener("focusin", i)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Np() {
  const e = new CustomEvent(Ac);
  document.dispatchEvent(e);
}
function t0(e, t, n, { discrete: r }) {
  const i = n.originalEvent.target,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }),
    r ? Zv(i, o) : i.dispatchEvent(o));
}
var $T = sf,
  UT = e0,
  tr = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
  WT = "Portal",
  n0 = x.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [i, o] = x.useState(!1);
    tr(() => o(!0), []);
    const s =
      n ||
      (i &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return s ? Dv.createPortal(C.jsx(tt.div, { ...r, ref: t }), s) : null;
  });
n0.displayName = WT;
function HT(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var af = (e) => {
  const { present: t, children: n } = e,
    r = KT(t),
    i =
      typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n),
    o = Ft(r.ref, GT(i));
  return typeof n == "function" || r.isPresent
    ? x.cloneElement(i, { ref: o })
    : null;
};
af.displayName = "Presence";
function KT(e) {
  const [t, n] = x.useState(),
    r = x.useRef(null),
    i = x.useRef(e),
    o = x.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = HT(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    x.useEffect(() => {
      const u = Vs(r.current);
      o.current = a === "mounted" ? u : "none";
    }, [a]),
    tr(() => {
      const u = r.current,
        c = i.current;
      if (c !== e) {
        const f = o.current,
          h = Vs(u);
        (e
          ? l("MOUNT")
          : h === "none" || (u == null ? void 0 : u.display) === "none"
            ? l("UNMOUNT")
            : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (i.current = e));
      }
    }, [e, l]),
    tr(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          d = (h) => {
            const g = Vs(r.current).includes(h.animationName);
            if (h.target === t && g && (l("ANIMATION_END"), !i.current)) {
              const w = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                })));
            }
          },
          f = (h) => {
            h.target === t && (o.current = Vs(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            (c.clearTimeout(u),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d));
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: x.useCallback((u) => {
        ((r.current = u ? getComputedStyle(u) : null), n(u));
      }, []),
    }
  );
}
function Vs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function GT(e) {
  var r, i;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var QT = Ag[" useInsertionEffect ".trim().toString()] || tr;
function YT({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [i, o, s] = XT({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    l = a ? e : i;
  {
    const c = x.useRef(e !== void 0);
    x.useEffect(() => {
      const d = c.current;
      (d !== a &&
        console.warn(
          `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (c.current = a));
    }, [a, r]);
  }
  const u = x.useCallback(
    (c) => {
      var d;
      if (a) {
        const f = qT(c) ? c(e) : c;
        f !== e && ((d = s.current) == null || d.call(s, f));
      } else o(c);
    },
    [a, e, o, s],
  );
  return [l, u];
}
function XT({ defaultProp: e, onChange: t }) {
  const [n, r] = x.useState(e),
    i = x.useRef(n),
    o = x.useRef(t);
  return (
    QT(() => {
      o.current = t;
    }, [t]),
    x.useEffect(() => {
      var s;
      i.current !== n &&
        ((s = o.current) == null || s.call(o, n), (i.current = n));
    }, [n, i]),
    [n, r, o]
  );
}
function qT(e) {
  return typeof e == "function";
}
var ZT = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  JT = "VisuallyHidden",
  vl = x.forwardRef((e, t) =>
    C.jsx(tt.span, { ...e, ref: t, style: { ...ZT, ...e.style } }),
  );
vl.displayName = JT;
var eP = vl,
  lf = "ToastProvider",
  [uf, tP, nP] = LT("Toast"),
  [r0, mD] = yl("Toast", [nP]),
  [rP, wl] = r0(lf),
  i0 = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: i = "right",
        swipeThreshold: o = 50,
        children: s,
      } = e,
      [a, l] = x.useState(null),
      [u, c] = x.useState(0),
      d = x.useRef(!1),
      f = x.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${lf}\`. Expected non-empty \`string\`.`,
        ),
      C.jsx(uf.Provider, {
        scope: t,
        children: C.jsx(rP, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: i,
          swipeThreshold: o,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: x.useCallback(() => c((h) => h + 1), []),
          onToastRemove: x.useCallback(() => c((h) => h - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: f,
          children: s,
        }),
      })
    );
  };
i0.displayName = lf;
var o0 = "ToastViewport",
  iP = ["F8"],
  Mc = "toast.viewportPause",
  Nc = "toast.viewportResume",
  s0 = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = iP,
        label: i = "Notifications ({hotkey})",
        ...o
      } = e,
      s = wl(o0, n),
      a = tP(n),
      l = x.useRef(null),
      u = x.useRef(null),
      c = x.useRef(null),
      d = x.useRef(null),
      f = Ft(t, d, s.onViewportChange),
      h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      v = s.toastCount > 0;
    (x.useEffect(() => {
      const w = (m) => {
        var y;
        r.length !== 0 &&
          r.every((S) => m[S] || m.code === S) &&
          ((y = d.current) == null || y.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      x.useEffect(() => {
        const w = l.current,
          m = d.current;
        if (v && w && m) {
          const p = () => {
              if (!s.isClosePausedRef.current) {
                const T = new CustomEvent(Mc);
                (m.dispatchEvent(T), (s.isClosePausedRef.current = !0));
              }
            },
            y = () => {
              if (s.isClosePausedRef.current) {
                const T = new CustomEvent(Nc);
                (m.dispatchEvent(T), (s.isClosePausedRef.current = !1));
              }
            },
            S = (T) => {
              !w.contains(T.relatedTarget) && y();
            },
            E = () => {
              w.contains(document.activeElement) || y();
            };
          return (
            w.addEventListener("focusin", p),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", p),
            w.addEventListener("pointerleave", E),
            window.addEventListener("blur", p),
            window.addEventListener("focus", y),
            () => {
              (w.removeEventListener("focusin", p),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", p),
                w.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", y));
            }
          );
        }
      }, [v, s.isClosePausedRef]));
    const g = x.useCallback(
      ({ tabbingDirection: w }) => {
        const p = a().map((y) => {
          const S = y.ref.current,
            E = [S, ...yP(S)];
          return w === "forwards" ? E : E.reverse();
        });
        return (w === "forwards" ? p.reverse() : p).flat();
      },
      [a],
    );
    return (
      x.useEffect(() => {
        const w = d.current;
        if (w) {
          const m = (p) => {
            var E, T, P;
            const y = p.altKey || p.ctrlKey || p.metaKey;
            if (p.key === "Tab" && !y) {
              const k = document.activeElement,
                D = p.shiftKey;
              if (p.target === w && D) {
                (E = u.current) == null || E.focus();
                return;
              }
              const j = g({ tabbingDirection: D ? "backwards" : "forwards" }),
                U = j.findIndex((O) => O === k);
              uu(j.slice(U + 1))
                ? p.preventDefault()
                : D
                  ? (T = u.current) == null || T.focus()
                  : (P = c.current) == null || P.focus();
            }
          };
          return (
            w.addEventListener("keydown", m),
            () => w.removeEventListener("keydown", m)
          );
        }
      }, [a, g]),
      C.jsxs(UT, {
        ref: l,
        role: "region",
        "aria-label": i.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v &&
            C.jsx(Dc, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = g({ tabbingDirection: "forwards" });
                uu(w);
              },
            }),
          C.jsx(uf.Slot, {
            scope: n,
            children: C.jsx(tt.ol, { tabIndex: -1, ...o, ref: f }),
          }),
          v &&
            C.jsx(Dc, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const w = g({ tabbingDirection: "backwards" });
                uu(w);
              },
            }),
        ],
      })
    );
  });
s0.displayName = o0;
var a0 = "ToastFocusProxy",
  Dc = x.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e,
      o = wl(a0, n);
    return C.jsx(vl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...i,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const a = s.relatedTarget;
        !((u = o.viewport) != null && u.contains(a)) && r();
      },
    });
  });
Dc.displayName = a0;
var ls = "Toast",
  oP = "toast.swipeStart",
  sP = "toast.swipeMove",
  aP = "toast.swipeCancel",
  lP = "toast.swipeEnd",
  l0 = x.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: i, onOpenChange: o, ...s } = e,
      [a, l] = YT({ prop: r, defaultProp: i ?? !0, onChange: o, caller: ls });
    return C.jsx(af, {
      present: n || a,
      children: C.jsx(dP, {
        open: a,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: er(e.onPause),
        onResume: er(e.onResume),
        onSwipeStart: Ce(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Ce(e.onSwipeMove, (u) => {
          const { x: c, y: d } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${d}px`,
            ));
        }),
        onSwipeCancel: Ce(e.onSwipeCancel, (u) => {
          (u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: Ce(e.onSwipeEnd, (u) => {
          const { x: c, y: d } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${d}px`,
            ),
            l(!1));
        }),
      }),
    });
  });
l0.displayName = ls;
var [uP, cP] = r0(ls, { onClose() {} }),
  dP = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: i,
        open: o,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: d,
        onSwipeCancel: f,
        onSwipeEnd: h,
        ...v
      } = e,
      g = wl(ls, n),
      [w, m] = x.useState(null),
      p = Ft(t, (O) => m(O)),
      y = x.useRef(null),
      S = x.useRef(null),
      E = i || g.duration,
      T = x.useRef(0),
      P = x.useRef(E),
      k = x.useRef(0),
      { onToastAdd: D, onToastRemove: R } = g,
      V = er(() => {
        var W;
        ((w == null ? void 0 : w.contains(document.activeElement)) &&
          ((W = g.viewport) == null || W.focus()),
          s());
      }),
      j = x.useCallback(
        (O) => {
          !O ||
            O === 1 / 0 ||
            (window.clearTimeout(k.current),
            (T.current = new Date().getTime()),
            (k.current = window.setTimeout(V, O)));
        },
        [V],
      );
    (x.useEffect(() => {
      const O = g.viewport;
      if (O) {
        const W = () => {
            (j(P.current), u == null || u());
          },
          z = () => {
            const H = new Date().getTime() - T.current;
            ((P.current = P.current - H),
              window.clearTimeout(k.current),
              l == null || l());
          };
        return (
          O.addEventListener(Mc, z),
          O.addEventListener(Nc, W),
          () => {
            (O.removeEventListener(Mc, z), O.removeEventListener(Nc, W));
          }
        );
      }
    }, [g.viewport, E, l, u, j]),
      x.useEffect(() => {
        o && !g.isClosePausedRef.current && j(E);
      }, [o, E, g.isClosePausedRef, j]),
      x.useEffect(() => (D(), () => R()), [D, R]));
    const U = x.useMemo(() => (w ? m0(w) : null), [w]);
    return g.viewport
      ? C.jsxs(C.Fragment, {
          children: [
            U &&
              C.jsx(fP, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: U,
              }),
            C.jsx(uP, {
              scope: n,
              onClose: V,
              children: as.createPortal(
                C.jsx(uf.ItemSlot, {
                  scope: n,
                  children: C.jsx($T, {
                    asChild: !0,
                    onEscapeKeyDown: Ce(a, () => {
                      (g.isFocusedToastEscapeKeyDownRef.current || V(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: C.jsx(tt.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": o ? "open" : "closed",
                      "data-swipe-direction": g.swipeDirection,
                      ...v,
                      ref: p,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: Ce(e.onKeyDown, (O) => {
                        O.key === "Escape" &&
                          (a == null || a(O.nativeEvent),
                          O.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            V()));
                      }),
                      onPointerDown: Ce(e.onPointerDown, (O) => {
                        O.button === 0 &&
                          (y.current = { x: O.clientX, y: O.clientY });
                      }),
                      onPointerMove: Ce(e.onPointerMove, (O) => {
                        if (!y.current) return;
                        const W = O.clientX - y.current.x,
                          z = O.clientY - y.current.y,
                          H = !!S.current,
                          b = ["left", "right"].includes(g.swipeDirection),
                          A = ["left", "up"].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          I = b ? A(0, W) : 0,
                          $ = b ? 0 : A(0, z),
                          B = O.pointerType === "touch" ? 10 : 2,
                          Y = { x: I, y: $ },
                          q = { originalEvent: O, delta: Y };
                        H
                          ? ((S.current = Y), Fs(sP, d, q, { discrete: !1 }))
                          : Dp(Y, g.swipeDirection, B)
                            ? ((S.current = Y),
                              Fs(oP, c, q, { discrete: !1 }),
                              O.target.setPointerCapture(O.pointerId))
                            : (Math.abs(W) > B || Math.abs(z) > B) &&
                              (y.current = null);
                      }),
                      onPointerUp: Ce(e.onPointerUp, (O) => {
                        const W = S.current,
                          z = O.target;
                        if (
                          (z.hasPointerCapture(O.pointerId) &&
                            z.releasePointerCapture(O.pointerId),
                          (S.current = null),
                          (y.current = null),
                          W)
                        ) {
                          const H = O.currentTarget,
                            b = { originalEvent: O, delta: W };
                          (Dp(W, g.swipeDirection, g.swipeThreshold)
                            ? Fs(lP, h, b, { discrete: !0 })
                            : Fs(aP, f, b, { discrete: !0 }),
                            H.addEventListener(
                              "click",
                              (A) => A.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  fP = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      i = wl(ls, t),
      [o, s] = x.useState(!1),
      [a, l] = x.useState(!1);
    return (
      mP(() => s(!0)),
      x.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : C.jsx(n0, {
            asChild: !0,
            children: C.jsx(vl, {
              ...r,
              children:
                o && C.jsxs(C.Fragment, { children: [i.label, " ", n] }),
            }),
          })
    );
  },
  hP = "ToastTitle",
  u0 = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return C.jsx(tt.div, { ...r, ref: t });
  });
u0.displayName = hP;
var pP = "ToastDescription",
  c0 = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return C.jsx(tt.div, { ...r, ref: t });
  });
c0.displayName = pP;
var d0 = "ToastAction",
  f0 = x.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? C.jsx(p0, {
          altText: n,
          asChild: !0,
          children: C.jsx(cf, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${d0}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
f0.displayName = d0;
var h0 = "ToastClose",
  cf = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      i = cP(h0, n);
    return C.jsx(p0, {
      asChild: !0,
      children: C.jsx(tt.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: Ce(e.onClick, i.onClose),
      }),
    });
  });
cf.displayName = h0;
var p0 = x.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...i } = e;
  return C.jsx(tt.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...i,
    ref: t,
  });
});
function m0(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        gP(r))
      ) {
        const i = r.ariaHidden || r.hidden || r.style.display === "none",
          o = r.dataset.radixToastAnnounceExclude === "";
        if (!i)
          if (o) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...m0(r));
      }
    }),
    t
  );
}
function Fs(e, t, n, { discrete: r }) {
  const i = n.originalEvent.currentTarget,
    o = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }),
    r ? Zv(i, o) : i.dispatchEvent(o));
}
var Dp = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    i = Math.abs(e.y),
    o = r > i;
  return t === "left" || t === "right" ? o && r > n : !o && i > n;
};
function mP(e = () => {}) {
  const t = er(e);
  tr(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
      }
    );
  }, [t]);
}
function gP(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function yP(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const i = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || i
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function uu(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var vP = i0,
  g0 = s0,
  y0 = l0,
  v0 = u0,
  w0 = c0,
  x0 = f0,
  S0 = cf;
function E0(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = E0(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function C0() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = E0(e)) && (r && (r += " "), (r += t));
  return r;
}
const Lp = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Op = C0,
  wP = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Op(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: i, defaultVariants: o } = t,
      s = Object.keys(i).map((u) => {
        const c = n == null ? void 0 : n[u],
          d = o == null ? void 0 : o[u];
        if (c === null) return null;
        const f = Lp(c) || Lp(d);
        return i[u][f];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [d, f] = c;
          return (f === void 0 || (u[d] = f), u);
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: d, className: f, ...h } = c;
              return Object.entries(h).every((v) => {
                let [g, w] = v;
                return Array.isArray(w)
                  ? w.includes({ ...o, ...a }[g])
                  : { ...o, ...a }[g] === w;
              })
                ? [...u, d, f]
                : u;
            }, []);
    return Op(
      e,
      s,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xP = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  T0 = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var SP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const EP = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = "",
      children: o,
      iconNode: s,
      ...a
    },
    l,
  ) =>
    x.createElement(
      "svg",
      {
        ref: l,
        ...SP,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: T0("lucide", i),
        ...a,
      },
      [
        ...s.map(([u, c]) => x.createElement(u, c)),
        ...(Array.isArray(o) ? o : [o]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bt = (e, t) => {
  const n = x.forwardRef(({ className: r, ...i }, o) =>
    x.createElement(EP, {
      ref: o,
      iconNode: t,
      className: T0(`lucide-${xP(e)}`, r),
      ...i,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const CP = Bt("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const TP = Bt("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const PP = Bt("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bP = Bt("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kP = Bt("Headphones", [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const RP = Bt("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const AP = Bt("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const MP = Bt("Palette", [
  [
    "circle",
    { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" },
  ],
  [
    "circle",
    { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" },
  ],
  [
    "circle",
    { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" },
  ],
  [
    "circle",
    { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" },
  ],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const NP = Bt("Rocket", [
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz",
    },
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk",
    },
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DP = Bt("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P0 = Bt("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  df = "-",
  LP = (e) => {
    const t = jP(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const a = s.split(df);
        return (a[0] === "" && a.length !== 1 && a.shift(), b0(a, t) || OP(s));
      },
      getConflictingClassGroupIds: (s, a) => {
        const l = n[s] || [];
        return a && r[s] ? [...l, ...r[s]] : l;
      },
    };
  },
  b0 = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      i = r ? b0(e.slice(1), r) : void 0;
    if (i) return i;
    if (t.validators.length === 0) return;
    const o = e.join(df);
    return (s = t.validators.find(({ validator: a }) => a(o))) == null
      ? void 0
      : s.classGroupId;
  },
  jp = /^\[(.+)\]$/,
  OP = (e) => {
    if (jp.test(e)) {
      const t = jp.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  jP = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      VP(Object.entries(e.classGroups), n).forEach(([o, s]) => {
        Lc(s, r, o, t);
      }),
      r
    );
  },
  Lc = (e, t, n, r) => {
    e.forEach((i) => {
      if (typeof i == "string") {
        const o = i === "" ? t : Ip(t, i);
        o.classGroupId = n;
        return;
      }
      if (typeof i == "function") {
        if (IP(i)) {
          Lc(i(r), t, n, r);
          return;
        }
        t.validators.push({ validator: i, classGroupId: n });
        return;
      }
      Object.entries(i).forEach(([o, s]) => {
        Lc(s, Ip(t, o), n, r);
      });
    });
  },
  Ip = (e, t) => {
    let n = e;
    return (
      t.split(df).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  IP = (e) => e.isThemeGetter,
  VP = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const i = r.map((o) =>
            typeof o == "string"
              ? t + o
              : typeof o == "object"
                ? Object.fromEntries(
                    Object.entries(o).map(([s, a]) => [t + s, a]),
                  )
                : o,
          );
          return [n, i];
        })
      : e,
  FP = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const i = (o, s) => {
      (n.set(o, s), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(o) {
        let s = n.get(o);
        if (s !== void 0) return s;
        if ((s = r.get(o)) !== void 0) return (i(o, s), s);
      },
      set(o, s) {
        n.has(o) ? n.set(o, s) : i(o, s);
      },
    };
  },
  k0 = "!",
  _P = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      i = t[0],
      o = t.length,
      s = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          d;
        for (let w = 0; w < a.length; w++) {
          let m = a[w];
          if (u === 0) {
            if (m === i && (r || a.slice(w, w + o) === t)) {
              (l.push(a.slice(c, w)), (c = w + o));
              continue;
            }
            if (m === "/") {
              d = w;
              continue;
            }
          }
          m === "[" ? u++ : m === "]" && u--;
        }
        const f = l.length === 0 ? a : a.substring(c),
          h = f.startsWith(k0),
          v = h ? f.substring(1) : f,
          g = d && d > c ? d - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: h,
          baseClassName: v,
          maybePostfixModifierPosition: g,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: s }) : s;
  },
  zP = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  BP = (e) => ({ cache: FP(e.cacheSize), parseClassName: _P(e), ...LP(e) }),
  $P = /\s+/,
  UP = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
      } = t,
      o = [],
      s = e.trim().split($P);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const u = s[l],
        {
          modifiers: c,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: h,
        } = n(u);
      let v = !!h,
        g = r(v ? f.substring(0, h) : f);
      if (!g) {
        if (!v) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((g = r(f)), !g)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        v = !1;
      }
      const w = zP(c).join(":"),
        m = d ? w + k0 : w,
        p = m + g;
      if (o.includes(p)) continue;
      o.push(p);
      const y = i(g, v);
      for (let S = 0; S < y.length; ++S) {
        const E = y[S];
        o.push(m + E);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function WP() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = R0(t)) && (r && (r += " "), (r += n));
  return r;
}
const R0 = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = R0(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function HP(e, ...t) {
  let n,
    r,
    i,
    o = s;
  function s(l) {
    const u = t.reduce((c, d) => d(c), e());
    return ((n = BP(u)), (r = n.cache.get), (i = n.cache.set), (o = a), a(l));
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = UP(l, n);
    return (i(l, c), c);
  }
  return function () {
    return o(WP.apply(null, arguments));
  };
}
const oe = (e) => {
    const t = (n) => n[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  A0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  KP = /^\d+\/\d+$/,
  GP = new Set(["px", "full", "screen"]),
  QP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  YP =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  XP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  qP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ZP =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  rn = (e) => wi(e) || GP.has(e) || KP.test(e),
  bn = (e) => Wi(e, "length", sb),
  wi = (e) => !!e && !Number.isNaN(Number(e)),
  cu = (e) => Wi(e, "number", wi),
  so = (e) => !!e && Number.isInteger(Number(e)),
  JP = (e) => e.endsWith("%") && wi(e.slice(0, -1)),
  Q = (e) => A0.test(e),
  kn = (e) => QP.test(e),
  eb = new Set(["length", "size", "percentage"]),
  tb = (e) => Wi(e, eb, M0),
  nb = (e) => Wi(e, "position", M0),
  rb = new Set(["image", "url"]),
  ib = (e) => Wi(e, rb, lb),
  ob = (e) => Wi(e, "", ab),
  ao = () => !0,
  Wi = (e, t, n) => {
    const r = A0.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  sb = (e) => YP.test(e) && !XP.test(e),
  M0 = () => !1,
  ab = (e) => qP.test(e),
  lb = (e) => ZP.test(e),
  ub = () => {
    const e = oe("colors"),
      t = oe("spacing"),
      n = oe("blur"),
      r = oe("brightness"),
      i = oe("borderColor"),
      o = oe("borderRadius"),
      s = oe("borderSpacing"),
      a = oe("borderWidth"),
      l = oe("contrast"),
      u = oe("grayscale"),
      c = oe("hueRotate"),
      d = oe("invert"),
      f = oe("gap"),
      h = oe("gradientColorStops"),
      v = oe("gradientColorStopPositions"),
      g = oe("inset"),
      w = oe("margin"),
      m = oe("opacity"),
      p = oe("padding"),
      y = oe("saturate"),
      S = oe("scale"),
      E = oe("sepia"),
      T = oe("skew"),
      P = oe("space"),
      k = oe("translate"),
      D = () => ["auto", "contain", "none"],
      R = () => ["auto", "hidden", "clip", "visible", "scroll"],
      V = () => ["auto", Q, t],
      j = () => [Q, t],
      U = () => ["", rn, bn],
      O = () => ["auto", wi, Q],
      W = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      z = () => ["solid", "dashed", "dotted", "double", "none"],
      H = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      b = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      A = () => ["", "0", Q],
      I = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      $ = () => [wi, Q];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [ao],
        spacing: [rn, bn],
        blur: ["none", "", kn, Q],
        brightness: $(),
        borderColor: [e],
        borderRadius: ["none", "", "full", kn, Q],
        borderSpacing: j(),
        borderWidth: U(),
        contrast: $(),
        grayscale: A(),
        hueRotate: $(),
        invert: A(),
        gap: j(),
        gradientColorStops: [e],
        gradientColorStopPositions: [JP, bn],
        inset: V(),
        margin: V(),
        opacity: $(),
        padding: j(),
        saturate: $(),
        scale: $(),
        sepia: A(),
        skew: $(),
        space: j(),
        translate: j(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", Q] }],
        container: ["container"],
        columns: [{ columns: [kn] }],
        "break-after": [{ "break-after": I() }],
        "break-before": [{ "break-before": I() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...W(), Q] }],
        overflow: [{ overflow: R() }],
        "overflow-x": [{ "overflow-x": R() }],
        "overflow-y": [{ "overflow-y": R() }],
        overscroll: [{ overscroll: D() }],
        "overscroll-x": [{ "overscroll-x": D() }],
        "overscroll-y": [{ "overscroll-y": D() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [g] }],
        "inset-x": [{ "inset-x": [g] }],
        "inset-y": [{ "inset-y": [g] }],
        start: [{ start: [g] }],
        end: [{ end: [g] }],
        top: [{ top: [g] }],
        right: [{ right: [g] }],
        bottom: [{ bottom: [g] }],
        left: [{ left: [g] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", so, Q] }],
        basis: [{ basis: V() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", Q] }],
        grow: [{ grow: A() }],
        shrink: [{ shrink: A() }],
        order: [{ order: ["first", "last", "none", so, Q] }],
        "grid-cols": [{ "grid-cols": [ao] }],
        "col-start-end": [{ col: ["auto", { span: ["full", so, Q] }, Q] }],
        "col-start": [{ "col-start": O() }],
        "col-end": [{ "col-end": O() }],
        "grid-rows": [{ "grid-rows": [ao] }],
        "row-start-end": [{ row: ["auto", { span: [so, Q] }, Q] }],
        "row-start": [{ "row-start": O() }],
        "row-end": [{ "row-end": O() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Q] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Q] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...b()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...b(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...b(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [p] }],
        px: [{ px: [p] }],
        py: [{ py: [p] }],
        ps: [{ ps: [p] }],
        pe: [{ pe: [p] }],
        pt: [{ pt: [p] }],
        pr: [{ pr: [p] }],
        pb: [{ pb: [p] }],
        pl: [{ pl: [p] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [P] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [P] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t] }],
        "min-w": [{ "min-w": [Q, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              Q,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [kn] },
              kn,
            ],
          },
        ],
        h: [{ h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [Q, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", kn, bn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              cu,
            ],
          },
        ],
        "font-family": [{ font: [ao] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              Q,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", wi, cu] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              rn,
              Q,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", Q] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", Q] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...z(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", rn, bn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", rn, Q] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: j() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              Q,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", Q] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...W(), nb] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", tb] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              ib,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [v] }],
        "gradient-via-pos": [{ via: [v] }],
        "gradient-to-pos": [{ to: [v] }],
        "gradient-from": [{ from: [h] }],
        "gradient-via": [{ via: [h] }],
        "gradient-to": [{ to: [h] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...z(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: z() }],
        "border-color": [{ border: [i] }],
        "border-color-x": [{ "border-x": [i] }],
        "border-color-y": [{ "border-y": [i] }],
        "border-color-s": [{ "border-s": [i] }],
        "border-color-e": [{ "border-e": [i] }],
        "border-color-t": [{ "border-t": [i] }],
        "border-color-r": [{ "border-r": [i] }],
        "border-color-b": [{ "border-b": [i] }],
        "border-color-l": [{ "border-l": [i] }],
        "divide-color": [{ divide: [i] }],
        "outline-style": [{ outline: ["", ...z()] }],
        "outline-offset": [{ "outline-offset": [rn, Q] }],
        "outline-w": [{ outline: [rn, bn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: U() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [rn, bn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", kn, ob] }],
        "shadow-color": [{ shadow: [ao] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [{ "mix-blend": [...H(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": H() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", kn, Q] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [E] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [E] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              Q,
            ],
          },
        ],
        duration: [{ duration: $() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", Q] }],
        delay: [{ delay: $() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Q] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [so, Q] }],
        "translate-x": [{ "translate-x": [k] }],
        "translate-y": [{ "translate-y": [k] }],
        "skew-x": [{ "skew-x": [T] }],
        "skew-y": [{ "skew-y": [T] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              Q,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              Q,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": j() }],
        "scroll-mx": [{ "scroll-mx": j() }],
        "scroll-my": [{ "scroll-my": j() }],
        "scroll-ms": [{ "scroll-ms": j() }],
        "scroll-me": [{ "scroll-me": j() }],
        "scroll-mt": [{ "scroll-mt": j() }],
        "scroll-mr": [{ "scroll-mr": j() }],
        "scroll-mb": [{ "scroll-mb": j() }],
        "scroll-ml": [{ "scroll-ml": j() }],
        "scroll-p": [{ "scroll-p": j() }],
        "scroll-px": [{ "scroll-px": j() }],
        "scroll-py": [{ "scroll-py": j() }],
        "scroll-ps": [{ "scroll-ps": j() }],
        "scroll-pe": [{ "scroll-pe": j() }],
        "scroll-pt": [{ "scroll-pt": j() }],
        "scroll-pr": [{ "scroll-pr": j() }],
        "scroll-pb": [{ "scroll-pb": j() }],
        "scroll-pl": [{ "scroll-pl": j() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", Q] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [rn, bn, cu] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  cb = HP(ub);
function zr(...e) {
  return cb(C0(e));
}
const db = vP,
  N0 = x.forwardRef(({ className: e, ...t }, n) =>
    C.jsx(g0, {
      ref: n,
      className: zr(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
N0.displayName = g0.displayName;
const fb = wP(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  D0 = x.forwardRef(({ className: e, variant: t, ...n }, r) =>
    C.jsx(y0, { ref: r, className: zr(fb({ variant: t }), e), ...n }),
  );
D0.displayName = y0.displayName;
const hb = x.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(x0, {
    ref: n,
    className: zr(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e,
    ),
    ...t,
  }),
);
hb.displayName = x0.displayName;
const L0 = x.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(S0, {
    ref: n,
    className: zr(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: C.jsx(P0, { className: "h-4 w-4" }),
  }),
);
L0.displayName = S0.displayName;
const O0 = x.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(v0, { ref: n, className: zr("text-sm font-semibold", e), ...t }),
);
O0.displayName = v0.displayName;
const j0 = x.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(w0, { ref: n, className: zr("text-sm opacity-90", e), ...t }),
);
j0.displayName = w0.displayName;
function pb() {
  const { toasts: e } = bT();
  return C.jsxs(db, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: i, ...o }) {
        return C.jsxs(
          D0,
          {
            ...o,
            children: [
              C.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && C.jsx(O0, { children: n }),
                  r && C.jsx(j0, { children: r }),
                ],
              }),
              i,
              C.jsx(L0, {}),
            ],
          },
          t,
        );
      }),
      C.jsx(N0, {}),
    ],
  });
}
const mb = ["top", "right", "bottom", "left"],
  nr = Math.min,
  rt = Math.max,
  Fa = Math.round,
  _s = Math.floor,
  Zt = (e) => ({ x: e, y: e }),
  gb = { left: "right", right: "left", bottom: "top", top: "bottom" },
  yb = { start: "end", end: "start" };
function Oc(e, t, n) {
  return rt(e, nr(t, n));
}
function gn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function yn(e) {
  return e.split("-")[0];
}
function Hi(e) {
  return e.split("-")[1];
}
function ff(e) {
  return e === "x" ? "y" : "x";
}
function hf(e) {
  return e === "y" ? "height" : "width";
}
const vb = new Set(["top", "bottom"]);
function Yt(e) {
  return vb.has(yn(e)) ? "y" : "x";
}
function pf(e) {
  return ff(Yt(e));
}
function wb(e, t, n) {
  n === void 0 && (n = !1);
  const r = Hi(e),
    i = pf(e),
    o = hf(i);
  let s =
    i === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[o] > t.floating[o] && (s = _a(s)), [s, _a(s)]);
}
function xb(e) {
  const t = _a(e);
  return [jc(e), t, jc(t)];
}
function jc(e) {
  return e.replace(/start|end/g, (t) => yb[t]);
}
const Vp = ["left", "right"],
  Fp = ["right", "left"],
  Sb = ["top", "bottom"],
  Eb = ["bottom", "top"];
function Cb(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Fp : Vp) : t ? Vp : Fp;
    case "left":
    case "right":
      return t ? Sb : Eb;
    default:
      return [];
  }
}
function Tb(e, t, n, r) {
  const i = Hi(e);
  let o = Cb(yn(e), n === "start", r);
  return (
    i && ((o = o.map((s) => s + "-" + i)), t && (o = o.concat(o.map(jc)))),
    o
  );
}
function _a(e) {
  return e.replace(/left|right|bottom|top/g, (t) => gb[t]);
}
function Pb(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function I0(e) {
  return typeof e != "number"
    ? Pb(e)
    : { top: e, right: e, bottom: e, left: e };
}
function za(e) {
  const { x: t, y: n, width: r, height: i } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n,
  };
}
function _p(e, t, n) {
  let { reference: r, floating: i } = e;
  const o = Yt(t),
    s = pf(t),
    a = hf(s),
    l = yn(t),
    u = o === "y",
    c = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    f = r[a] / 2 - i[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = { x: c, y: r.y - i.height };
      break;
    case "bottom":
      h = { x: c, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: d };
      break;
    case "left":
      h = { x: r.x - i.width, y: d };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (Hi(t)) {
    case "start":
      h[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const bb = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: i = "absolute",
      middleware: o = [],
      platform: s,
    } = n,
    a = o.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: i }),
    { x: c, y: d } = _p(u, r, l),
    f = r,
    h = {},
    v = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: w, fn: m } = a[g],
      {
        x: p,
        y,
        data: S,
        reset: E,
      } = await m({
        x: c,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: i,
        middlewareData: h,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    ((c = p ?? c),
      (d = y ?? d),
      (h = { ...h, [w]: { ...h[w], ...S } }),
      E &&
        v <= 50 &&
        (v++,
        typeof E == "object" &&
          (E.placement && (f = E.placement),
          E.rects &&
            (u =
              E.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i,
                  })
                : E.rects),
          ({ x: c, y: d } = _p(u, f, l))),
        (g = -1)));
  }
  return { x: c, y: d, placement: f, strategy: i, middlewareData: h };
};
async function Qo(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: i, platform: o, rects: s, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: h = 0,
    } = gn(t, e),
    v = I0(h),
    w = a[f ? (d === "floating" ? "reference" : "floating") : d],
    m = za(
      await o.getClippingRect({
        element:
          (n = await (o.isElement == null ? void 0 : o.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (o.getDocumentElement == null
                ? void 0
                : o.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      }),
    ),
    p =
      d === "floating"
        ? { x: r, y: i, width: s.floating.width, height: s.floating.height }
        : s.reference,
    y = await (o.getOffsetParent == null
      ? void 0
      : o.getOffsetParent(a.floating)),
    S = (await (o.isElement == null ? void 0 : o.isElement(y)))
      ? (await (o.getScale == null ? void 0 : o.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = za(
      o.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: p,
            offsetParent: y,
            strategy: l,
          })
        : p,
    );
  return {
    top: (m.top - E.top + v.top) / S.y,
    bottom: (E.bottom - m.bottom + v.bottom) / S.y,
    left: (m.left - E.left + v.left) / S.x,
    right: (E.right - m.right + v.right) / S.x,
  };
}
const kb = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: i,
          rects: o,
          platform: s,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: c = 0 } = gn(e, t) || {};
      if (u == null) return {};
      const d = I0(c),
        f = { x: n, y: r },
        h = pf(i),
        v = hf(h),
        g = await s.getDimensions(u),
        w = h === "y",
        m = w ? "top" : "left",
        p = w ? "bottom" : "right",
        y = w ? "clientHeight" : "clientWidth",
        S = o.reference[v] + o.reference[h] - f[h] - o.floating[v],
        E = f[h] - o.reference[h],
        T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let P = T ? T[y] : 0;
      (!P || !(await (s.isElement == null ? void 0 : s.isElement(T)))) &&
        (P = a.floating[y] || o.floating[v]);
      const k = S / 2 - E / 2,
        D = P / 2 - g[v] / 2 - 1,
        R = nr(d[m], D),
        V = nr(d[p], D),
        j = R,
        U = P - g[v] - V,
        O = P / 2 - g[v] / 2 + k,
        W = Oc(j, O, U),
        z =
          !l.arrow &&
          Hi(i) != null &&
          O !== W &&
          o.reference[v] / 2 - (O < j ? R : V) - g[v] / 2 < 0,
        H = z ? (O < j ? O - j : O - U) : 0;
      return {
        [h]: f[h] + H,
        data: {
          [h]: W,
          centerOffset: O - W - H,
          ...(z && { alignmentOffset: H }),
        },
        reset: z,
      };
    },
  }),
  Rb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: i,
              middlewareData: o,
              rects: s,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: v = "none",
              flipAlignment: g = !0,
              ...w
            } = gn(e, t);
          if ((n = o.arrow) != null && n.alignmentOffset) return {};
          const m = yn(i),
            p = Yt(a),
            y = yn(a) === a,
            S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            E = f || (y || !g ? [_a(a)] : xb(a)),
            T = v !== "none";
          !f && T && E.push(...Tb(a, g, v, S));
          const P = [a, ...E],
            k = await Qo(t, w),
            D = [];
          let R = ((r = o.flip) == null ? void 0 : r.overflows) || [];
          if ((c && D.push(k[m]), d)) {
            const O = wb(i, s, S);
            D.push(k[O[0]], k[O[1]]);
          }
          if (
            ((R = [...R, { placement: i, overflows: D }]),
            !D.every((O) => O <= 0))
          ) {
            var V, j;
            const O = (((V = o.flip) == null ? void 0 : V.index) || 0) + 1,
              W = P[O];
            if (
              W &&
              (!(d === "alignment" ? p !== Yt(W) : !1) ||
                R.every((b) => b.overflows[0] > 0 && Yt(b.placement) === p))
            )
              return {
                data: { index: O, overflows: R },
                reset: { placement: W },
              };
            let z =
              (j = R.filter((H) => H.overflows[0] <= 0).sort(
                (H, b) => H.overflows[1] - b.overflows[1],
              )[0]) == null
                ? void 0
                : j.placement;
            if (!z)
              switch (h) {
                case "bestFit": {
                  var U;
                  const H =
                    (U = R.filter((b) => {
                      if (T) {
                        const A = Yt(b.placement);
                        return A === p || A === "y";
                      }
                      return !0;
                    })
                      .map((b) => [
                        b.placement,
                        b.overflows
                          .filter((A) => A > 0)
                          .reduce((A, I) => A + I, 0),
                      ])
                      .sort((b, A) => b[1] - A[1])[0]) == null
                      ? void 0
                      : U[0];
                  H && (z = H);
                  break;
                }
                case "initialPlacement":
                  z = a;
                  break;
              }
            if (i !== z) return { reset: { placement: z } };
          }
          return {};
        },
      }
    );
  };
function zp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Bp(e) {
  return mb.some((t) => e[t] >= 0);
}
const Ab = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...i } = gn(e, t);
          switch (r) {
            case "referenceHidden": {
              const o = await Qo(t, { ...i, elementContext: "reference" }),
                s = zp(o, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: Bp(s) },
              };
            }
            case "escaped": {
              const o = await Qo(t, { ...i, altBoundary: !0 }),
                s = zp(o, n.floating);
              return { data: { escapedOffsets: s, escaped: Bp(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  V0 = new Set(["left", "top"]);
async function Mb(e, t) {
  const { placement: n, platform: r, elements: i } = e,
    o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    s = yn(n),
    a = Hi(n),
    l = Yt(n) === "y",
    u = V0.has(s) ? -1 : 1,
    c = o && l ? -1 : 1,
    d = gn(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: v,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof v == "number" && (h = a === "end" ? v * -1 : v),
    l ? { x: h * c, y: f * u } : { x: f * u, y: h * c }
  );
}
const Nb = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: i, y: o, placement: s, middlewareData: a } = t,
            l = await Mb(t, e);
          return s === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: i + l.x, y: o + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  Db = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: i } = t,
            {
              mainAxis: o = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (w) => {
                  let { x: m, y: p } = w;
                  return { x: m, y: p };
                },
              },
              ...l
            } = gn(e, t),
            u = { x: n, y: r },
            c = await Qo(t, l),
            d = Yt(yn(i)),
            f = ff(d);
          let h = u[f],
            v = u[d];
          if (o) {
            const w = f === "y" ? "top" : "left",
              m = f === "y" ? "bottom" : "right",
              p = h + c[w],
              y = h - c[m];
            h = Oc(p, h, y);
          }
          if (s) {
            const w = d === "y" ? "top" : "left",
              m = d === "y" ? "bottom" : "right",
              p = v + c[w],
              y = v - c[m];
            v = Oc(p, v, y);
          }
          const g = a.fn({ ...t, [f]: h, [d]: v });
          return {
            ...g,
            data: { x: g.x - n, y: g.y - r, enabled: { [f]: o, [d]: s } },
          };
        },
      }
    );
  },
  Lb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: i, rects: o, middlewareData: s } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = gn(e, t),
            c = { x: n, y: r },
            d = Yt(i),
            f = ff(d);
          let h = c[f],
            v = c[d];
          const g = gn(a, t),
            w =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (l) {
            const y = f === "y" ? "height" : "width",
              S = o.reference[f] - o.floating[y] + w.mainAxis,
              E = o.reference[f] + o.reference[y] - w.mainAxis;
            h < S ? (h = S) : h > E && (h = E);
          }
          if (u) {
            var m, p;
            const y = f === "y" ? "width" : "height",
              S = V0.has(yn(i)),
              E =
                o.reference[d] -
                o.floating[y] +
                ((S && ((m = s.offset) == null ? void 0 : m[d])) || 0) +
                (S ? 0 : w.crossAxis),
              T =
                o.reference[d] +
                o.reference[y] +
                (S ? 0 : ((p = s.offset) == null ? void 0 : p[d]) || 0) -
                (S ? w.crossAxis : 0);
            v < E ? (v = E) : v > T && (v = T);
          }
          return { [f]: h, [d]: v };
        },
      }
    );
  },
  Ob = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: i, rects: o, platform: s, elements: a } = t,
            { apply: l = () => {}, ...u } = gn(e, t),
            c = await Qo(t, u),
            d = yn(i),
            f = Hi(i),
            h = Yt(i) === "y",
            { width: v, height: g } = o.floating;
          let w, m;
          d === "top" || d === "bottom"
            ? ((w = d),
              (m =
                f ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = d), (w = f === "end" ? "top" : "bottom"));
          const p = g - c.top - c.bottom,
            y = v - c.left - c.right,
            S = nr(g - c[w], p),
            E = nr(v - c[m], y),
            T = !t.middlewareData.shift;
          let P = S,
            k = E;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (k = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (P = p),
            T && !f)
          ) {
            const R = rt(c.left, 0),
              V = rt(c.right, 0),
              j = rt(c.top, 0),
              U = rt(c.bottom, 0);
            h
              ? (k = v - 2 * (R !== 0 || V !== 0 ? R + V : rt(c.left, c.right)))
              : (P =
                  g - 2 * (j !== 0 || U !== 0 ? j + U : rt(c.top, c.bottom)));
          }
          await l({ ...t, availableWidth: k, availableHeight: P });
          const D = await s.getDimensions(a.floating);
          return v !== D.width || g !== D.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function xl() {
  return typeof window < "u";
}
function Ki(e) {
  return F0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function st(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function nn(e) {
  var t;
  return (t = (F0(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function F0(e) {
  return xl() ? e instanceof Node || e instanceof st(e).Node : !1;
}
function _t(e) {
  return xl() ? e instanceof Element || e instanceof st(e).Element : !1;
}
function en(e) {
  return xl() ? e instanceof HTMLElement || e instanceof st(e).HTMLElement : !1;
}
function $p(e) {
  return !xl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof st(e).ShadowRoot;
}
const jb = new Set(["inline", "contents"]);
function us(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = zt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !jb.has(i);
}
const Ib = new Set(["table", "td", "th"]);
function Vb(e) {
  return Ib.has(Ki(e));
}
const Fb = [":popover-open", ":modal"];
function Sl(e) {
  return Fb.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const _b = ["transform", "translate", "scale", "rotate", "perspective"],
  zb = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  Bb = ["paint", "layout", "strict", "content"];
function mf(e) {
  const t = gf(),
    n = _t(e) ? zt(e) : e;
  return (
    _b.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    zb.some((r) => (n.willChange || "").includes(r)) ||
    Bb.some((r) => (n.contain || "").includes(r))
  );
}
function $b(e) {
  let t = rr(e);
  for (; en(t) && !Ii(t); ) {
    if (mf(t)) return t;
    if (Sl(t)) return null;
    t = rr(t);
  }
  return null;
}
function gf() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const Ub = new Set(["html", "body", "#document"]);
function Ii(e) {
  return Ub.has(Ki(e));
}
function zt(e) {
  return st(e).getComputedStyle(e);
}
function El(e) {
  return _t(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function rr(e) {
  if (Ki(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || ($p(e) && e.host) || nn(e);
  return $p(t) ? t.host : t;
}
function _0(e) {
  const t = rr(e);
  return Ii(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : en(t) && us(t)
      ? t
      : _0(t);
}
function Yo(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const i = _0(e),
    o = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = st(i);
  if (o) {
    const a = Ic(s);
    return t.concat(
      s,
      s.visualViewport || [],
      us(i) ? i : [],
      a && n ? Yo(a) : [],
    );
  }
  return t.concat(i, Yo(i, [], n));
}
function Ic(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function z0(e) {
  const t = zt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const i = en(e),
    o = i ? e.offsetWidth : n,
    s = i ? e.offsetHeight : r,
    a = Fa(n) !== o || Fa(r) !== s;
  return (a && ((n = o), (r = s)), { width: n, height: r, $: a });
}
function yf(e) {
  return _t(e) ? e : e.contextElement;
}
function xi(e) {
  const t = yf(e);
  if (!en(t)) return Zt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: i, $: o } = z0(t);
  let s = (o ? Fa(n.width) : n.width) / r,
    a = (o ? Fa(n.height) : n.height) / i;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const Wb = Zt(0);
function B0(e) {
  const t = st(e);
  return !gf() || !t.visualViewport
    ? Wb
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Hb(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== st(e)) ? !1 : t);
}
function Vr(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const i = e.getBoundingClientRect(),
    o = yf(e);
  let s = Zt(1);
  t && (r ? _t(r) && (s = xi(r)) : (s = xi(e)));
  const a = Hb(o, n, r) ? B0(o) : Zt(0);
  let l = (i.left + a.x) / s.x,
    u = (i.top + a.y) / s.y,
    c = i.width / s.x,
    d = i.height / s.y;
  if (o) {
    const f = st(o),
      h = r && _t(r) ? st(r) : r;
    let v = f,
      g = Ic(v);
    for (; g && r && h !== v; ) {
      const w = xi(g),
        m = g.getBoundingClientRect(),
        p = zt(g),
        y = m.left + (g.clientLeft + parseFloat(p.paddingLeft)) * w.x,
        S = m.top + (g.clientTop + parseFloat(p.paddingTop)) * w.y;
      ((l *= w.x),
        (u *= w.y),
        (c *= w.x),
        (d *= w.y),
        (l += y),
        (u += S),
        (v = st(g)),
        (g = Ic(v)));
    }
  }
  return za({ width: c, height: d, x: l, y: u });
}
function vf(e, t) {
  const n = El(e).scrollLeft;
  return t ? t.left + n : Vr(nn(e)).left + n;
}
function $0(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    i = r.left + t.scrollLeft - (n ? 0 : vf(e, r)),
    o = r.top + t.scrollTop;
  return { x: i, y: o };
}
function Kb(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e;
  const o = i === "fixed",
    s = nn(r),
    a = t ? Sl(t.floating) : !1;
  if (r === s || (a && o)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = Zt(1);
  const c = Zt(0),
    d = en(r);
  if (
    (d || (!d && !o)) &&
    ((Ki(r) !== "body" || us(s)) && (l = El(r)), en(r))
  ) {
    const h = Vr(r);
    ((u = xi(r)), (c.x = h.x + r.clientLeft), (c.y = h.y + r.clientTop));
  }
  const f = s && !d && !o ? $0(s, l, !0) : Zt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y,
  };
}
function Gb(e) {
  return Array.from(e.getClientRects());
}
function Qb(e) {
  const t = nn(e),
    n = El(e),
    r = e.ownerDocument.body,
    i = rt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    o = rt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + vf(e);
  const a = -n.scrollTop;
  return (
    zt(r).direction === "rtl" && (s += rt(t.clientWidth, r.clientWidth) - i),
    { width: i, height: o, x: s, y: a }
  );
}
function Yb(e, t) {
  const n = st(e),
    r = nn(e),
    i = n.visualViewport;
  let o = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (i) {
    ((o = i.width), (s = i.height));
    const u = gf();
    (!u || (u && t === "fixed")) && ((a = i.offsetLeft), (l = i.offsetTop));
  }
  return { width: o, height: s, x: a, y: l };
}
const Xb = new Set(["absolute", "fixed"]);
function qb(e, t) {
  const n = Vr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    o = en(e) ? xi(e) : Zt(1),
    s = e.clientWidth * o.x,
    a = e.clientHeight * o.y,
    l = i * o.x,
    u = r * o.y;
  return { width: s, height: a, x: l, y: u };
}
function Up(e, t, n) {
  let r;
  if (t === "viewport") r = Yb(e, n);
  else if (t === "document") r = Qb(nn(e));
  else if (_t(t)) r = qb(t, n);
  else {
    const i = B0(e);
    r = { x: t.x - i.x, y: t.y - i.y, width: t.width, height: t.height };
  }
  return za(r);
}
function U0(e, t) {
  const n = rr(e);
  return n === t || !_t(n) || Ii(n)
    ? !1
    : zt(n).position === "fixed" || U0(n, t);
}
function Zb(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Yo(e, [], !1).filter((a) => _t(a) && Ki(a) !== "body"),
    i = null;
  const o = zt(e).position === "fixed";
  let s = o ? rr(e) : e;
  for (; _t(s) && !Ii(s); ) {
    const a = zt(s),
      l = mf(s);
    (!l && a.position === "fixed" && (i = null),
      (
        o
          ? !l && !i
          : (!l && a.position === "static" && !!i && Xb.has(i.position)) ||
            (us(s) && !l && U0(e, s))
      )
        ? (r = r.filter((c) => c !== s))
        : (i = a),
      (s = rr(s)));
  }
  return (t.set(e, r), r);
}
function Jb(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? Sl(t)
          ? []
          : Zb(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = s[0],
    l = s.reduce(
      (u, c) => {
        const d = Up(t, c, i);
        return (
          (u.top = rt(d.top, u.top)),
          (u.right = nr(d.right, u.right)),
          (u.bottom = nr(d.bottom, u.bottom)),
          (u.left = rt(d.left, u.left)),
          u
        );
      },
      Up(t, a, i),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function ek(e) {
  const { width: t, height: n } = z0(e);
  return { width: t, height: n };
}
function tk(e, t, n) {
  const r = en(t),
    i = nn(t),
    o = n === "fixed",
    s = Vr(e, !0, o, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Zt(0);
  function u() {
    l.x = vf(i);
  }
  if (r || (!r && !o))
    if (((Ki(t) !== "body" || us(i)) && (a = El(t)), r)) {
      const h = Vr(t, !0, o, t);
      ((l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop));
    } else i && u();
  o && !r && i && u();
  const c = i && !r && !o ? $0(i, a) : Zt(0),
    d = s.left + a.scrollLeft - l.x - c.x,
    f = s.top + a.scrollTop - l.y - c.y;
  return { x: d, y: f, width: s.width, height: s.height };
}
function du(e) {
  return zt(e).position === "static";
}
function Wp(e, t) {
  if (!en(e) || zt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (nn(e) === n && (n = n.ownerDocument.body), n);
}
function W0(e, t) {
  const n = st(e);
  if (Sl(e)) return n;
  if (!en(e)) {
    let i = rr(e);
    for (; i && !Ii(i); ) {
      if (_t(i) && !du(i)) return i;
      i = rr(i);
    }
    return n;
  }
  let r = Wp(e, t);
  for (; r && Vb(r) && du(r); ) r = Wp(r, t);
  return r && Ii(r) && du(r) && !mf(r) ? n : r || $b(e) || n;
}
const nk = async function (e) {
  const t = this.getOffsetParent || W0,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: tk(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function rk(e) {
  return zt(e).direction === "rtl";
}
const ik = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Kb,
  getDocumentElement: nn,
  getClippingRect: Jb,
  getOffsetParent: W0,
  getElementRects: nk,
  getClientRects: Gb,
  getDimensions: ek,
  getScale: xi,
  isElement: _t,
  isRTL: rk,
};
function H0(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function ok(e, t) {
  let n = null,
    r;
  const i = nn(e);
  function o() {
    var a;
    (clearTimeout(r), (a = n) == null || a.disconnect(), (n = null));
  }
  function s(a, l) {
    (a === void 0 && (a = !1), l === void 0 && (l = 1), o());
    const u = e.getBoundingClientRect(),
      { left: c, top: d, width: f, height: h } = u;
    if ((a || t(), !f || !h)) return;
    const v = _s(d),
      g = _s(i.clientWidth - (c + f)),
      w = _s(i.clientHeight - (d + h)),
      m = _s(c),
      y = {
        rootMargin: -v + "px " + -g + "px " + -w + "px " + -m + "px",
        threshold: rt(0, nr(1, l)) || 1,
      };
    let S = !0;
    function E(T) {
      const P = T[0].intersectionRatio;
      if (P !== l) {
        if (!S) return s();
        P
          ? s(!1, P)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      (P === 1 && !H0(u, e.getBoundingClientRect()) && s(), (S = !1));
    }
    try {
      n = new IntersectionObserver(E, { ...y, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(E, y);
    }
    n.observe(e);
  }
  return (s(!0), o);
}
function sk(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: o = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    u = yf(e),
    c = i || o ? [...(u ? Yo(u) : []), ...Yo(t)] : [];
  c.forEach((m) => {
    (i && m.addEventListener("scroll", n, { passive: !0 }),
      o && m.addEventListener("resize", n));
  });
  const d = u && a ? ok(u, n) : null;
  let f = -1,
    h = null;
  s &&
    ((h = new ResizeObserver((m) => {
      let [p] = m;
      (p &&
        p.target === u &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var y;
          (y = h) == null || y.observe(t);
        }))),
        n());
    })),
    u && !l && h.observe(u),
    h.observe(t));
  let v,
    g = l ? Vr(e) : null;
  l && w();
  function w() {
    const m = Vr(e);
    (g && !H0(g, m) && n(), (g = m), (v = requestAnimationFrame(w)));
  }
  return (
    n(),
    () => {
      var m;
      (c.forEach((p) => {
        (i && p.removeEventListener("scroll", n),
          o && p.removeEventListener("resize", n));
      }),
        d == null || d(),
        (m = h) == null || m.disconnect(),
        (h = null),
        l && cancelAnimationFrame(v));
    }
  );
}
const ak = Nb,
  lk = Db,
  uk = Rb,
  ck = Ob,
  dk = Ab,
  Hp = kb,
  fk = Lb,
  hk = (e, t, n) => {
    const r = new Map(),
      i = { platform: ik, ...n },
      o = { ...i.platform, _c: r };
    return bb(e, t, { ...i, platform: o });
  };
var pk = typeof document < "u",
  mk = function () {},
  ia = pk ? x.useLayoutEffect : mk;
function Ba(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ba(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const o = i[r];
      if (!(o === "_owner" && e.$$typeof) && !Ba(e[o], t[o])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function K0(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Kp(e, t) {
  const n = K0(e);
  return Math.round(t * n) / n;
}
function fu(e) {
  const t = x.useRef(e);
  return (
    ia(() => {
      t.current = e;
    }),
    t
  );
}
function gk(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: i,
      elements: { reference: o, floating: s } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [c, d] = x.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, h] = x.useState(r);
  Ba(f, r) || h(r);
  const [v, g] = x.useState(null),
    [w, m] = x.useState(null),
    p = x.useCallback((b) => {
      b !== T.current && ((T.current = b), g(b));
    }, []),
    y = x.useCallback((b) => {
      b !== P.current && ((P.current = b), m(b));
    }, []),
    S = o || v,
    E = s || w,
    T = x.useRef(null),
    P = x.useRef(null),
    k = x.useRef(c),
    D = l != null,
    R = fu(l),
    V = fu(i),
    j = fu(u),
    U = x.useCallback(() => {
      if (!T.current || !P.current) return;
      const b = { placement: t, strategy: n, middleware: f };
      (V.current && (b.platform = V.current),
        hk(T.current, P.current, b).then((A) => {
          const I = { ...A, isPositioned: j.current !== !1 };
          O.current &&
            !Ba(k.current, I) &&
            ((k.current = I),
            as.flushSync(() => {
              d(I);
            }));
        }));
    }, [f, t, n, V, j]);
  ia(() => {
    u === !1 &&
      k.current.isPositioned &&
      ((k.current.isPositioned = !1), d((b) => ({ ...b, isPositioned: !1 })));
  }, [u]);
  const O = x.useRef(!1);
  (ia(
    () => (
      (O.current = !0),
      () => {
        O.current = !1;
      }
    ),
    [],
  ),
    ia(() => {
      if ((S && (T.current = S), E && (P.current = E), S && E)) {
        if (R.current) return R.current(S, E, U);
        U();
      }
    }, [S, E, U, R, D]));
  const W = x.useMemo(
      () => ({ reference: T, floating: P, setReference: p, setFloating: y }),
      [p, y],
    ),
    z = x.useMemo(() => ({ reference: S, floating: E }), [S, E]),
    H = x.useMemo(() => {
      const b = { position: n, left: 0, top: 0 };
      if (!z.floating) return b;
      const A = Kp(z.floating, c.x),
        I = Kp(z.floating, c.y);
      return a
        ? {
            ...b,
            transform: "translate(" + A + "px, " + I + "px)",
            ...(K0(z.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: A, top: I };
    }, [n, a, z.floating, c.x, c.y]);
  return x.useMemo(
    () => ({ ...c, update: U, refs: W, elements: z, floatingStyles: H }),
    [c, U, W, z, H],
  );
}
const yk = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: i } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Hp({ element: r.current, padding: i }).fn(n)
            : {}
          : r
            ? Hp({ element: r, padding: i }).fn(n)
            : {};
      },
    };
  },
  vk = (e, t) => ({ ...ak(e), options: [e, t] }),
  wk = (e, t) => ({ ...lk(e), options: [e, t] }),
  xk = (e, t) => ({ ...fk(e), options: [e, t] }),
  Sk = (e, t) => ({ ...uk(e), options: [e, t] }),
  Ek = (e, t) => ({ ...ck(e), options: [e, t] }),
  Ck = (e, t) => ({ ...dk(e), options: [e, t] }),
  Tk = (e, t) => ({ ...yk(e), options: [e, t] });
var Pk = "Arrow",
  G0 = x.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: i = 5, ...o } = e;
    return C.jsx(tt.svg, {
      ...o,
      ref: t,
      width: r,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : C.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
G0.displayName = Pk;
var bk = G0;
function kk(e) {
  const [t, n] = x.useState(void 0);
  return (
    tr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((i) => {
          if (!Array.isArray(i) || !i.length) return;
          const o = i[0];
          let s, a;
          if ("borderBoxSize" in o) {
            const l = o.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            ((s = u.inlineSize), (a = u.blockSize));
          } else ((s = e.offsetWidth), (a = e.offsetHeight));
          n({ width: s, height: a });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var Q0 = "Popper",
  [Y0, X0] = yl(Q0),
  [gD, q0] = Y0(Q0),
  Z0 = "PopperAnchor",
  J0 = x.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...i } = e,
      o = q0(Z0, n),
      s = x.useRef(null),
      a = Ft(t, s);
    return (
      x.useEffect(() => {
        o.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : C.jsx(tt.div, { ...i, ref: a })
    );
  });
J0.displayName = Z0;
var wf = "PopperContent",
  [Rk, Ak] = Y0(wf),
  ew = x.forwardRef((e, t) => {
    var ee, Br, wn, cr, xn, $r;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: i = 0,
        align: o = "center",
        alignOffset: s = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: d = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: h = "optimized",
        onPlaced: v,
        ...g
      } = e,
      w = q0(wf, n),
      [m, p] = x.useState(null),
      y = Ft(t, (Sn) => p(Sn)),
      [S, E] = x.useState(null),
      T = kk(S),
      P = (T == null ? void 0 : T.width) ?? 0,
      k = (T == null ? void 0 : T.height) ?? 0,
      D = r + (o !== "center" ? "-" + o : ""),
      R =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      V = Array.isArray(u) ? u : [u],
      j = V.length > 0,
      U = { padding: R, boundary: V.filter(Nk), altBoundary: j },
      {
        refs: O,
        floatingStyles: W,
        placement: z,
        isPositioned: H,
        middlewareData: b,
      } = gk({
        strategy: "fixed",
        placement: D,
        whileElementsMounted: (...Sn) =>
          sk(...Sn, { animationFrame: h === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          vk({ mainAxis: i + k, alignmentAxis: s }),
          l &&
            wk({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? xk() : void 0,
              ...U,
            }),
          l && Sk({ ...U }),
          Ek({
            ...U,
            apply: ({
              elements: Sn,
              rects: ps,
              availableWidth: Al,
              availableHeight: ms,
            }) => {
              const { width: Ml, height: Xi } = ps.reference,
                Ur = Sn.floating.style;
              (Ur.setProperty("--radix-popper-available-width", `${Al}px`),
                Ur.setProperty("--radix-popper-available-height", `${ms}px`),
                Ur.setProperty("--radix-popper-anchor-width", `${Ml}px`),
                Ur.setProperty("--radix-popper-anchor-height", `${Xi}px`));
            },
          }),
          S && Tk({ element: S, padding: a }),
          Dk({ arrowWidth: P, arrowHeight: k }),
          f && Ck({ strategy: "referenceHidden", ...U }),
        ],
      }),
      [A, I] = rw(z),
      $ = er(v);
    tr(() => {
      H && ($ == null || $());
    }, [H, $]);
    const B = (ee = b.arrow) == null ? void 0 : ee.x,
      Y = (Br = b.arrow) == null ? void 0 : Br.y,
      q = ((wn = b.arrow) == null ? void 0 : wn.centerOffset) !== 0,
      [ve, De] = x.useState();
    return (
      tr(() => {
        m && De(window.getComputedStyle(m).zIndex);
      }, [m]),
      C.jsx("div", {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: H ? W.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ve,
          "--radix-popper-transform-origin": [
            (cr = b.transformOrigin) == null ? void 0 : cr.x,
            (xn = b.transformOrigin) == null ? void 0 : xn.y,
          ].join(" "),
          ...((($r = b.hide) == null ? void 0 : $r.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: C.jsx(Rk, {
          scope: n,
          placedSide: A,
          onArrowChange: E,
          arrowX: B,
          arrowY: Y,
          shouldHideArrow: q,
          children: C.jsx(tt.div, {
            "data-side": A,
            "data-align": I,
            ...g,
            ref: y,
            style: { ...g.style, animation: H ? void 0 : "none" },
          }),
        }),
      })
    );
  });
ew.displayName = wf;
var tw = "PopperArrow",
  Mk = { top: "bottom", right: "left", bottom: "top", left: "right" },
  nw = x.forwardRef(function (t, n) {
    const { __scopePopper: r, ...i } = t,
      o = Ak(tw, r),
      s = Mk[o.placedSide];
    return C.jsx("span", {
      ref: o.onArrowChange,
      style: {
        position: "absolute",
        left: o.arrowX,
        top: o.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[o.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[o.placedSide],
        visibility: o.shouldHideArrow ? "hidden" : void 0,
      },
      children: C.jsx(bk, {
        ...i,
        ref: n,
        style: { ...i.style, display: "block" },
      }),
    });
  });
nw.displayName = tw;
function Nk(e) {
  return e !== null;
}
var Dk = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, m, p;
    const { placement: n, rects: r, middlewareData: i } = t,
      s = ((w = i.arrow) == null ? void 0 : w.centerOffset) !== 0,
      a = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [u, c] = rw(n),
      d = { start: "0%", center: "50%", end: "100%" }[c],
      f = (((m = i.arrow) == null ? void 0 : m.x) ?? 0) + a / 2,
      h = (((p = i.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
    let v = "",
      g = "";
    return (
      u === "bottom"
        ? ((v = s ? d : `${f}px`), (g = `${-l}px`))
        : u === "top"
          ? ((v = s ? d : `${f}px`), (g = `${r.floating.height + l}px`))
          : u === "right"
            ? ((v = `${-l}px`), (g = s ? d : `${h}px`))
            : u === "left" &&
              ((v = `${r.floating.width + l}px`), (g = s ? d : `${h}px`)),
      { data: { x: v, y: g } }
    );
  },
});
function rw(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Lk = J0,
  Ok = ew,
  jk = nw,
  [Cl, yD] = yl("Tooltip", [X0]),
  xf = X0(),
  iw = "TooltipProvider",
  Ik = 700,
  Gp = "tooltip.open",
  [Vk, ow] = Cl(iw),
  sw = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Ik,
        skipDelayDuration: r = 300,
        disableHoverableContent: i = !1,
        children: o,
      } = e,
      s = x.useRef(!0),
      a = x.useRef(!1),
      l = x.useRef(0);
    return (
      x.useEffect(() => {
        const u = l.current;
        return () => window.clearTimeout(u);
      }, []),
      C.jsx(Vk, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: x.useCallback(() => {
          (window.clearTimeout(l.current), (s.current = !1));
        }, []),
        onClose: x.useCallback(() => {
          (window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (s.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: x.useCallback((u) => {
          a.current = u;
        }, []),
        disableHoverableContent: i,
        children: o,
      })
    );
  };
sw.displayName = iw;
var aw = "Tooltip",
  [vD, Tl] = Cl(aw),
  Vc = "TooltipTrigger",
  Fk = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      i = Tl(Vc, n),
      o = ow(Vc, n),
      s = xf(n),
      a = x.useRef(null),
      l = Ft(t, a, i.onTriggerChange),
      u = x.useRef(!1),
      c = x.useRef(!1),
      d = x.useCallback(() => (u.current = !1), []);
    return (
      x.useEffect(
        () => () => document.removeEventListener("pointerup", d),
        [d],
      ),
      C.jsx(Lk, {
        asChild: !0,
        ...s,
        children: C.jsx(tt.button, {
          "aria-describedby": i.open ? i.contentId : void 0,
          "data-state": i.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: Ce(e.onPointerMove, (f) => {
            f.pointerType !== "touch" &&
              !c.current &&
              !o.isPointerInTransitRef.current &&
              (i.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: Ce(e.onPointerLeave, () => {
            (i.onTriggerLeave(), (c.current = !1));
          }),
          onPointerDown: Ce(e.onPointerDown, () => {
            (i.open && i.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", d, { once: !0 }));
          }),
          onFocus: Ce(e.onFocus, () => {
            u.current || i.onOpen();
          }),
          onBlur: Ce(e.onBlur, i.onClose),
          onClick: Ce(e.onClick, i.onClose),
        }),
      })
    );
  });
Fk.displayName = Vc;
var _k = "TooltipPortal",
  [wD, zk] = Cl(_k, { forceMount: void 0 }),
  Vi = "TooltipContent",
  lw = x.forwardRef((e, t) => {
    const n = zk(Vi, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: i = "top", ...o } = e,
      s = Tl(Vi, e.__scopeTooltip);
    return C.jsx(af, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? C.jsx(uw, { side: i, ...o, ref: t })
        : C.jsx(Bk, { side: i, ...o, ref: t }),
    });
  }),
  Bk = x.forwardRef((e, t) => {
    const n = Tl(Vi, e.__scopeTooltip),
      r = ow(Vi, e.__scopeTooltip),
      i = x.useRef(null),
      o = Ft(t, i),
      [s, a] = x.useState(null),
      { trigger: l, onClose: u } = n,
      c = i.current,
      { onPointerInTransitChange: d } = r,
      f = x.useCallback(() => {
        (a(null), d(!1));
      }, [d]),
      h = x.useCallback(
        (v, g) => {
          const w = v.currentTarget,
            m = { x: v.clientX, y: v.clientY },
            p = Kk(m, w.getBoundingClientRect()),
            y = Gk(m, p),
            S = Qk(g.getBoundingClientRect()),
            E = Xk([...y, ...S]);
          (a(E), d(!0));
        },
        [d],
      );
    return (
      x.useEffect(() => () => f(), [f]),
      x.useEffect(() => {
        if (l && c) {
          const v = (w) => h(w, c),
            g = (w) => h(w, l);
          return (
            l.addEventListener("pointerleave", v),
            c.addEventListener("pointerleave", g),
            () => {
              (l.removeEventListener("pointerleave", v),
                c.removeEventListener("pointerleave", g));
            }
          );
        }
      }, [l, c, h, f]),
      x.useEffect(() => {
        if (s) {
          const v = (g) => {
            const w = g.target,
              m = { x: g.clientX, y: g.clientY },
              p =
                (l == null ? void 0 : l.contains(w)) ||
                (c == null ? void 0 : c.contains(w)),
              y = !Yk(m, s);
            p ? f() : y && (f(), u());
          };
          return (
            document.addEventListener("pointermove", v),
            () => document.removeEventListener("pointermove", v)
          );
        }
      }, [l, c, s, u, f]),
      C.jsx(uw, { ...e, ref: o })
    );
  }),
  [$k, Uk] = Cl(aw, { isInside: !1 }),
  Wk = AT("TooltipContent"),
  uw = x.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": i,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        ...a
      } = e,
      l = Tl(Vi, n),
      u = xf(n),
      { onClose: c } = l;
    return (
      x.useEffect(
        () => (
          document.addEventListener(Gp, c),
          () => document.removeEventListener(Gp, c)
        ),
        [c],
      ),
      x.useEffect(() => {
        if (l.trigger) {
          const d = (f) => {
            const h = f.target;
            h != null && h.contains(l.trigger) && c();
          };
          return (
            window.addEventListener("scroll", d, { capture: !0 }),
            () => window.removeEventListener("scroll", d, { capture: !0 })
          );
        }
      }, [l.trigger, c]),
      C.jsx(sf, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: c,
        children: C.jsxs(Ok, {
          "data-state": l.stateAttribute,
          ...u,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            C.jsx(Wk, { children: r }),
            C.jsx($k, {
              scope: n,
              isInside: !0,
              children: C.jsx(eP, {
                id: l.contentId,
                role: "tooltip",
                children: i || r,
              }),
            }),
          ],
        }),
      })
    );
  });
lw.displayName = Vi;
var cw = "TooltipArrow",
  Hk = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      i = xf(n);
    return Uk(cw, n).isInside ? null : C.jsx(jk, { ...i, ...r, ref: t });
  });
Hk.displayName = cw;
function Kk(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    i = Math.abs(t.right - e.x),
    o = Math.abs(t.left - e.x);
  switch (Math.min(n, r, i, o)) {
    case o:
      return "left";
    case i:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Gk(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Qk(e) {
  const { top: t, right: n, bottom: r, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: i, y: r },
  ];
}
function Yk(e, t) {
  const { x: n, y: r } = e;
  let i = !1;
  for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
    const a = t[o],
      l = t[s],
      u = a.x,
      c = a.y,
      d = l.x,
      f = l.y;
    c > r != f > r && n < ((d - u) * (r - c)) / (f - c) + u && (i = !i);
  }
  return i;
}
function Xk(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    qk(t)
  );
}
function qk(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    for (; t.length >= 2; ) {
      const o = t[t.length - 1],
        s = t[t.length - 2];
      if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x)) t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    for (; n.length >= 2; ) {
      const o = n[n.length - 1],
        s = n[n.length - 2];
      if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x)) n.pop();
      else break;
    }
    n.push(i);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var Zk = sw,
  dw = lw;
const Jk = Zk,
  e2 = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    C.jsx(dw, {
      ref: r,
      sideOffset: t,
      className: zr(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...n,
    }),
  );
e2.displayName = dw.displayName;
const fw = x.createContext({});
function t2(e) {
  const t = x.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const n2 = typeof window < "u",
  r2 = n2 ? x.useLayoutEffect : x.useEffect,
  Sf = x.createContext(null);
function Ef(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function $a(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const tn = (e, t, n) => (n > t ? t : n < e ? e : n);
let Pl = () => {},
  Fi = () => {};
const ir = {},
  hw = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function pw(e) {
  return typeof e == "object" && e !== null;
}
const mw = (e) => /^0[^.\s]+$/u.test(e);
function gw(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const vt = (e) => e,
  i2 = (e, t) => (n) => t(e(n)),
  cs = (...e) => e.reduce(i2),
  Xo = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class Cf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (Ef(this.subscriptions, t), () => $a(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Je = (e) => e * 1e3,
  gt = (e) => e / 1e3;
function yw(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const vw = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  o2 = 1e-7,
  s2 = 12;
function a2(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do ((s = t + (n - t) / 2), (o = vw(s, r, i) - e), o > 0 ? (n = s) : (t = s));
  while (Math.abs(o) > o2 && ++a < s2);
  return s;
}
function ds(e, t, n, r) {
  if (e === t && n === r) return vt;
  const i = (o) => a2(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : vw(i(o), t, r));
}
const ww = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  xw = (e) => (t) => 1 - e(1 - t),
  Sw = ds(0.33, 1.53, 0.69, 0.99),
  Tf = xw(Sw),
  Ew = ww(Tf),
  Cw = (e) =>
    e >= 1
      ? 1
      : (e *= 2) < 1
        ? 0.5 * Tf(e)
        : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Pf = (e) => 1 - Math.sin(Math.acos(e)),
  Tw = xw(Pf),
  Pw = ww(Pf),
  l2 = ds(0.42, 0, 1, 1),
  u2 = ds(0, 0, 0.58, 1),
  bw = ds(0.42, 0, 0.58, 1),
  c2 = (e) => Array.isArray(e) && typeof e[0] != "number",
  kw = (e) => Array.isArray(e) && typeof e[0] == "number",
  Qp = {
    linear: vt,
    easeIn: l2,
    easeInOut: bw,
    easeOut: u2,
    circIn: Pf,
    circInOut: Pw,
    circOut: Tw,
    backIn: Tf,
    backInOut: Ew,
    backOut: Sw,
    anticipate: Cw,
  },
  d2 = (e) => typeof e == "string",
  Yp = (e) => {
    if (kw(e)) {
      Fi(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values.",
        "cubic-bezier-length",
      );
      const [t, n, r, i] = e;
      return ds(t, n, r, i);
    } else if (d2(e))
      return (
        Fi(
          Qp[e] !== void 0,
          `Invalid easing type '${e}'`,
          "invalid-easing-type",
        ),
        Qp[e]
      );
    return e;
  },
  zs = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Xp = { value: null, addProjectionMetrics: null };
function f2(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    o = !1;
  const s = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function u(d) {
    (s.has(d) && (c.schedule(d), e()), l++, d(a));
  }
  const c = {
    schedule: (d, f = !1, h = !1) => {
      const g = h && i ? n : r;
      return (f && s.add(d), g.add(d), d);
    },
    cancel: (d) => {
      (r.delete(d), s.delete(d));
    },
    process: (d) => {
      if (((a = d), i)) {
        o = !0;
        return;
      }
      i = !0;
      const f = n;
      ((n = r),
        (r = f),
        n.forEach(u),
        t && Xp.value && Xp.value.frameloop[t].push(l),
        (l = 0),
        n.clear(),
        (i = !1),
        o && ((o = !1), c.process(d)));
    },
  };
  return c;
}
const h2 = 40;
function Rw(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = zs.reduce((y, S) => ((y[S] = f2(o, t ? S : void 0)), y), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: d,
      preRender: f,
      render: h,
      postRender: v,
    } = s,
    g = () => {
      const y = ir.useManualTiming,
        S = y ? i.timestamp : performance.now();
      ((n = !1),
        y ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(S - i.timestamp, h2), 1)),
        (i.timestamp = S),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        v.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g)));
    },
    w = () => {
      ((n = !0), (r = !0), i.isProcessing || e(g));
    };
  return {
    schedule: zs.reduce((y, S) => {
      const E = s[S];
      return (
        (y[S] = (T, P = !1, k = !1) => (n || w(), E.schedule(T, P, k))),
        y
      );
    }, {}),
    cancel: (y) => {
      for (let S = 0; S < zs.length; S++) s[zs[S]].cancel(y);
    },
    state: i,
    steps: s,
  };
}
const {
  schedule: ie,
  cancel: or,
  state: Re,
  steps: hu,
} = Rw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : vt, !0);
let oa;
function p2() {
  oa = void 0;
}
const $e = {
    now: () => (
      oa === void 0 &&
        $e.set(
          Re.isProcessing || ir.useManualTiming
            ? Re.timestamp
            : performance.now(),
        ),
      oa
    ),
    set: (e) => {
      ((oa = e), queueMicrotask(p2));
    },
  },
  Aw = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Mw = Aw("--"),
  m2 = Aw("var(--"),
  bf = (e) => (m2(e) ? g2.test(e.split("/*")[0].trim()) : !1),
  g2 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function qp(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const Gi = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  qo = { ...Gi, transform: (e) => tn(0, 1, e) },
  Bs = { ...Gi, default: 1 },
  Po = (e) => Math.round(e * 1e5) / 1e5,
  kf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function y2(e) {
  return e == null;
}
const v2 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Rf = (e, t) => (n) =>
    !!(
      (typeof n == "string" && v2.test(n) && n.startsWith(e)) ||
      (t && !y2(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Nw = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, a] = r.match(kf);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  w2 = (e) => tn(0, 255, e),
  pu = { ...Gi, transform: (e) => Math.round(w2(e)) },
  xr = {
    test: Rf("rgb", "red"),
    parse: Nw("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      pu.transform(e) +
      ", " +
      pu.transform(t) +
      ", " +
      pu.transform(n) +
      ", " +
      Po(qo.transform(r)) +
      ")",
  };
function x2(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Fc = { test: Rf("#"), parse: x2, transform: xr.transform },
  fs = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  An = fs("deg"),
  Jt = fs("%"),
  _ = fs("px"),
  S2 = fs("vh"),
  E2 = fs("vw"),
  Zp = {
    ...Jt,
    parse: (e) => Jt.parse(e) / 100,
    transform: (e) => Jt.transform(e * 100),
  },
  ai = {
    test: Rf("hsl", "hue"),
    parse: Nw("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Jt.transform(Po(t)) +
      ", " +
      Jt.transform(Po(n)) +
      ", " +
      Po(qo.transform(r)) +
      ")",
  },
  we = {
    test: (e) => xr.test(e) || Fc.test(e) || ai.test(e),
    parse: (e) =>
      xr.test(e) ? xr.parse(e) : ai.test(e) ? ai.parse(e) : Fc.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? xr.transform(e)
          : ai.transform(e),
    getAnimatableNone: (e) => {
      const t = we.parse(e);
      return ((t.alpha = 0), we.transform(t));
    },
  },
  C2 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function T2(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(kf)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(C2)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const Dw = "number",
  Lw = "color",
  P2 = "var",
  b2 = "var(",
  Jp = "${}",
  k2 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function _i(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      k2,
      (l) => (
        we.test(l)
          ? (r.color.push(o), i.push(Lw), n.push(we.parse(l)))
          : l.startsWith(b2)
            ? (r.var.push(o), i.push(P2), n.push(l))
            : (r.number.push(o), i.push(Dw), n.push(parseFloat(l))),
        ++o,
        Jp
      ),
    )
    .split(Jp);
  return { values: n, split: a, indexes: r, types: i };
}
function R2(e) {
  return _i(e).values;
}
function Ow({ split: e, types: t }) {
  const n = e.length;
  return (r) => {
    let i = "";
    for (let o = 0; o < n; o++)
      if (((i += e[o]), r[o] !== void 0)) {
        const s = t[o];
        s === Dw
          ? (i += Po(r[o]))
          : s === Lw
            ? (i += we.transform(r[o]))
            : (i += r[o]);
      }
    return i;
  };
}
function A2(e) {
  return Ow(_i(e));
}
const M2 = (e) =>
    typeof e == "number" ? 0 : we.test(e) ? we.getAnimatableNone(e) : e,
  N2 = (e, t) =>
    typeof e == "number"
      ? t != null && t.trim().endsWith("/")
        ? e
        : 0
      : M2(e);
function D2(e) {
  const t = _i(e);
  return Ow(t)(t.values.map((r, i) => N2(r, t.split[i])));
}
const It = {
  test: T2,
  parse: R2,
  createTransformer: A2,
  getAnimatableNone: D2,
};
function mu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function L2({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((i = mu(l, a, e + 1 / 3)), (o = mu(l, a, e)), (s = mu(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Ua(e, t) {
  return (n) => (n > 0 ? t : e);
}
const fe = (e, t, n) => e + (t - e) * n,
  gu = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  O2 = [Fc, xr, ai],
  j2 = (e) => O2.find((t) => t.test(e));
function em(e) {
  const t = j2(e);
  if (
    (Pl(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`,
      "color-not-animatable",
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return (t === ai && (n = L2(n)), n);
}
const tm = (e, t) => {
    const n = em(e),
      r = em(t);
    if (!n || !r) return Ua(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = gu(n.red, r.red, o)),
      (i.green = gu(n.green, r.green, o)),
      (i.blue = gu(n.blue, r.blue, o)),
      (i.alpha = fe(n.alpha, r.alpha, o)),
      xr.transform(i)
    );
  },
  _c = new Set(["none", "hidden"]);
function I2(e, t) {
  return _c.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function V2(e, t) {
  return (n) => fe(e, t, n);
}
function Af(e) {
  return typeof e == "number"
    ? V2
    : typeof e == "string"
      ? bf(e)
        ? Ua
        : we.test(e)
          ? tm
          : z2
      : Array.isArray(e)
        ? jw
        : typeof e == "object"
          ? we.test(e)
            ? tm
            : F2
          : Ua;
}
function jw(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => Af(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function F2(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Af(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function _2(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      s = e.indexes[o][r[o]],
      a = e.values[s] ?? 0;
    ((n[i] = a), r[o]++);
  }
  return n;
}
const z2 = (e, t) => {
  const n = It.createTransformer(t),
    r = _i(e),
    i = _i(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (_c.has(e) && !i.values.length) || (_c.has(t) && !r.values.length)
      ? I2(e, t)
      : cs(jw(_2(r, i), i.values), n)
    : (Pl(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
        "complex-values-different",
      ),
      Ua(e, t));
};
function Iw(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? fe(e, t, n)
    : Af(e)(e, t);
}
const B2 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => ie.update(t, n),
      stop: () => or(t),
      now: () => (Re.isProcessing ? Re.timestamp : $e.now()),
    };
  },
  Vw = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++)
      r += Math.round(e(o / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Wa = 2e4;
function Mf(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Wa; ) ((t += n), (r = e.next(t)));
  return t >= Wa ? 1 / 0 : t;
}
function $2(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(Mf(r), Wa);
  return {
    type: "keyframes",
    ease: (o) => r.next(i * o).value / t,
    duration: gt(i),
  };
}
const ce = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function zc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const U2 = 12;
function W2(e, t, n) {
  let r = n;
  for (let i = 1; i < U2; i++) r = r - e(r) / t(r);
  return r;
}
const yu = 0.001;
function H2({
  duration: e = ce.duration,
  bounce: t = ce.bounce,
  velocity: n = ce.velocity,
  mass: r = ce.mass,
}) {
  let i, o;
  Pl(
    e <= Je(ce.maxDuration),
    "Spring duration must be 10 seconds or less",
    "spring-duration-limit",
  );
  let s = 1 - t;
  ((s = tn(ce.minDamping, ce.maxDamping, s)),
    (e = tn(ce.minDuration, ce.maxDuration, gt(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            d = c * e,
            f = c - n,
            h = zc(u, s),
            v = Math.exp(-d);
          return yu - (f / h) * v;
        }),
        (o = (u) => {
          const d = u * s * e,
            f = d * n + n,
            h = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            g = zc(Math.pow(u, 2), s);
          return ((-i(u) + yu > 0 ? -1 : 1) * ((f - h) * v)) / g;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -yu + c * d;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        })));
  const a = 5 / e,
    l = W2(i, o, a);
  if (((e = Je(e)), isNaN(l)))
    return { stiffness: ce.stiffness, damping: ce.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const K2 = ["duration", "bounce"],
  G2 = ["stiffness", "damping", "mass"];
function nm(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Q2(e) {
  let t = {
    velocity: ce.velocity,
    stiffness: ce.stiffness,
    damping: ce.damping,
    mass: ce.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!nm(e, G2) && nm(e, K2))
    if (((t.velocity = 0), e.visualDuration)) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        o = 2 * tn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: ce.mass, stiffness: i, damping: o };
    } else {
      const n = H2({ ...e, velocity: 0 });
      ((t = { ...t, ...n, mass: ce.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Ha(e = ce.visualDuration, t = ce.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: h,
    } = Q2({ ...n, velocity: -gt(n.velocity || 0) }),
    v = f || 0,
    g = u / (2 * Math.sqrt(l * c)),
    w = s - o,
    m = gt(Math.sqrt(l / c)),
    p = Math.abs(w) < 5;
  (r || (r = p ? ce.restSpeed.granular : ce.restSpeed.default),
    i || (i = p ? ce.restDelta.granular : ce.restDelta.default));
  let y, S, E, T, P, k;
  if (g < 1)
    ((E = zc(m, g)),
      (T = (v + g * m * w) / E),
      (y = (R) => {
        const V = Math.exp(-g * m * R);
        return s - V * (T * Math.sin(E * R) + w * Math.cos(E * R));
      }),
      (P = g * m * T + w * E),
      (k = g * m * w - T * E),
      (S = (R) =>
        Math.exp(-g * m * R) * (P * Math.sin(E * R) + k * Math.cos(E * R))));
  else if (g === 1) {
    y = (V) => s - Math.exp(-m * V) * (w + (v + m * w) * V);
    const R = v + m * w;
    S = (V) => Math.exp(-m * V) * (m * R * V - v);
  } else {
    const R = m * Math.sqrt(g * g - 1);
    y = (O) => {
      const W = Math.exp(-g * m * O),
        z = Math.min(R * O, 300);
      return (
        s - (W * ((v + g * m * w) * Math.sinh(z) + R * w * Math.cosh(z))) / R
      );
    };
    const V = (v + g * m * w) / R,
      j = g * m * V - w * R,
      U = g * m * w - V * R;
    S = (O) => {
      const W = Math.exp(-g * m * O),
        z = Math.min(R * O, 300);
      return W * (j * Math.sinh(z) + U * Math.cosh(z));
    };
  }
  const D = {
    calculatedDuration: (h && d) || null,
    velocity: (R) => Je(S(R)),
    next: (R) => {
      if (!h && g < 1) {
        const j = Math.exp(-g * m * R),
          U = Math.sin(E * R),
          O = Math.cos(E * R),
          W = s - j * (T * U + w * O),
          z = Je(j * (P * U + k * O));
        return (
          (a.done = Math.abs(z) <= r && Math.abs(s - W) <= i),
          (a.value = a.done ? s : W),
          a
        );
      }
      const V = y(R);
      if (h) a.done = R >= d;
      else {
        const j = Je(S(R));
        a.done = Math.abs(j) <= r && Math.abs(s - V) <= i;
      }
      return ((a.value = a.done ? s : V), a);
    },
    toString: () => {
      const R = Math.min(Mf(D), Wa),
        V = Vw((j) => D.next(R * j).value, R, 30);
      return R + "ms " + V;
    },
    toTransition: () => {},
  };
  return D;
}
Ha.applyToOptions = (e) => {
  const t = $2(e, 100, Ha);
  return (
    (e.ease = t.ease),
    (e.duration = Je(t.duration)),
    (e.type = "keyframes"),
    e
  );
};
const Y2 = 5;
function Fw(e, t, n) {
  const r = Math.max(t - Y2, 0);
  return yw(n - e(r), t - r);
}
function Bc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = (k) => (a !== void 0 && k < a) || (l !== void 0 && k > l),
    v = (k) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - k) < Math.abs(l - k)
          ? a
          : l;
  let g = n * t;
  const w = d + g,
    m = s === void 0 ? w : s(w);
  m !== w && (g = m - d);
  const p = (k) => -g * Math.exp(-k / r),
    y = (k) => m + p(k),
    S = (k) => {
      const D = p(k),
        R = y(k);
      ((f.done = Math.abs(D) <= u), (f.value = f.done ? m : R));
    };
  let E, T;
  const P = (k) => {
    h(f.value) &&
      ((E = k),
      (T = Ha({
        keyframes: [f.value, v(f.value)],
        velocity: Fw(y, k, f.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (k) => {
        let D = !1;
        return (
          !T && E === void 0 && ((D = !0), S(k), P(k)),
          E !== void 0 && k >= E ? T.next(k - E) : (!D && S(k), f)
        );
      },
    }
  );
}
function X2(e, t, n) {
  const r = [],
    i = n || ir.mix || Iw,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || vt : t;
      a = cs(l, a);
    }
    r.push(a);
  }
  return r;
}
function q2(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if (
    (Fi(
      o === t.length,
      "Both input and output ranges must be the same length",
      "range-length",
    ),
    o === 1)
  )
    return () => t[0];
  if (o === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = X2(t, r, i),
    l = a.length,
    u = (c) => {
      if (s && c < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = Xo(e[d], e[d + 1], c);
      return a[d](f);
    };
  return n ? (c) => u(tn(e[0], e[o - 1], c)) : u;
}
function Z2(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Xo(0, t, r);
    e.push(fe(n, 1, i));
  }
}
function J2(e) {
  const t = [0];
  return (Z2(t, e.length - 1), t);
}
function eR(e, t) {
  return e.map((n) => n * t);
}
function tR(e, t) {
  return e.map(() => t || bw).splice(0, e.length - 1);
}
function bo({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = c2(r) ? r.map(Yp) : Yp(r),
    o = { done: !1, value: t[0] },
    s = eR(n && n.length === t.length ? n : J2(t), e),
    a = q2(s, t, { ease: Array.isArray(i) ? i : tR(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const nR = (e) => e !== null;
function Nf(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const o = e.filter(nR),
    a = i < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : o.length - 1;
  return !a || r === void 0 ? o[a] : r;
}
const rR = { decay: Bc, inertia: Bc, tween: bo, keyframes: bo, spring: Ha };
function _w(e) {
  typeof e.type == "string" && (e.type = rR[e.type]);
}
class Df {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const iR = (e) => e / 100;
class Lf extends Df {
  constructor(t) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== $e.now() && this.tick($e.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r)));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: t } = this;
    _w(t);
    const {
      type: n = bo,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: o,
      velocity: s = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || bo;
    l !== bo &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = cs(iR, Iw(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...t, keyframes: a });
    (o === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -s,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = Mf(u)));
    const { calculatedDuration: c } = u;
    ((this.calculatedDuration = c),
      (this.resolvedDuration = c + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = u));
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: o,
      mirroredGenerator: s,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: d,
      repeatType: f,
      repeatDelay: h,
      type: v,
      onUpdate: g,
      finalKeyframe: w,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t));
    const m = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      p = this.playbackSpeed >= 0 ? m < 0 : m > i;
    ((this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = i));
    let y = this.currentTime,
      S = r;
    if (d) {
      const k = Math.min(this.currentTime, i) / a;
      let D = Math.floor(k),
        R = k % 1;
      (!R && k >= 1 && (R = 1),
        R === 1 && D--,
        (D = Math.min(D, d + 1)),
        !!(D % 2) &&
          (f === "reverse"
            ? ((R = 1 - R), h && (R -= h / a))
            : f === "mirror" && (S = s)),
        (y = tn(0, 1, R) * a));
    }
    const E = p ? { done: !1, value: c[0] } : S.next(y);
    o && !p && (E.value = o(E.value));
    let { done: T } = E;
    !p &&
      l !== null &&
      (T =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const P =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && T));
    return (
      P && v !== Bc && (E.value = Nf(c, this.options, w, this.speed)),
      g && g(E.value),
      P && this.finish(),
      E
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return gt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + gt(t);
  }
  get time() {
    return gt(this.currentTime);
  }
  set time(t) {
    ((t = Je(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = t),
          this.tick(t)));
  }
  getGeneratorVelocity() {
    const t = this.currentTime;
    if (t <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(t);
    const n = this.generator.next(t).value;
    return Fw((r) => this.generator.next(r).value, t, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (n && this.driver && this.updateTime($e.now()),
      (this.playbackSpeed = t),
      n && this.driver && (this.time = gt(this.currentTime)));
  }
  play() {
    var i, o;
    if (this.isStopped) return;
    const { driver: t = B2, startTime: n } = this.options;
    (this.driver || (this.driver = t((s) => this.tick(s))),
      (o = (i = this.options).onPlay) == null || o.call(i));
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime($e.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var t, n;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t));
  }
  cancel() {
    var t, n;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function oR(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const Sr = (e) => (e * 180) / Math.PI,
  $c = (e) => {
    const t = Sr(Math.atan2(e[1], e[0]));
    return Uc(t);
  },
  sR = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: $c,
    rotateZ: $c,
    skewX: (e) => Sr(Math.atan(e[1])),
    skewY: (e) => Sr(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Uc = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  rm = $c,
  im = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  om = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  aR = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: im,
    scaleY: om,
    scale: (e) => (im(e) + om(e)) / 2,
    rotateX: (e) => Uc(Sr(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Uc(Sr(Math.atan2(-e[2], e[0]))),
    rotateZ: rm,
    rotate: rm,
    skewX: (e) => Sr(Math.atan(e[4])),
    skewY: (e) => Sr(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function Wc(e) {
  return e.includes("scale") ? 1 : 0;
}
function Hc(e, t) {
  if (!e || e === "none") return Wc(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) ((r = aR), (i = n));
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = sR), (i = a));
  }
  if (!i) return Wc(t);
  const o = r[t],
    s = i[1].split(",").map(uR);
  return typeof o == "function" ? o(s) : s[o];
}
const lR = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Hc(n, t);
};
function uR(e) {
  return parseFloat(e.trim());
}
const Qi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Yi = new Set(Qi),
  sm = (e) => e === Gi || e === _,
  cR = new Set(["x", "y", "z"]),
  dR = Qi.filter((e) => !cR.has(e));
function fR(e) {
  const t = [];
  return (
    dR.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Un = {
  width: (
    { x: e },
    { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r },
  ) => {
    const i = e.max - e.min;
    return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
  },
  height: (
    { y: e },
    { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r },
  ) => {
    const i = e.max - e.min;
    return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Hc(t, "x"),
  y: (e, { transform: t }) => Hc(t, "y"),
};
Un.translateX = Un.x;
Un.translateY = Un.y;
const Mr = new Set();
let Kc = !1,
  Gc = !1,
  Qc = !1;
function zw() {
  if (Gc) {
    const e = Array.from(Mr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const i = fR(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) == null || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((Gc = !1), (Kc = !1), Mr.forEach((e) => e.complete(Qc)), Mr.clear());
}
function Bw() {
  Mr.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Gc = !0));
  });
}
function hR() {
  ((Qc = !0), Bw(), zw(), (Qc = !1));
}
class Of {
  constructor(t, n, r, i, o, s = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Mr.add(this),
          Kc || ((Kc = !0), ie.read(Bw), ie.resolveKeyframes(zw)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    if (t[0] === null) {
      const o = i == null ? void 0 : i.get(),
        s = t[t.length - 1];
      if (o !== void 0) t[0] = o;
      else if (r && n) {
        const a = r.readValue(n, s);
        a != null && (t[0] = a);
      }
      (t[0] === void 0 && (t[0] = s), i && o === void 0 && i.set(t[0]));
    }
    oR(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      Mr.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Mr.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const pR = (e) => e.startsWith("--");
function $w(e, t, n) {
  pR(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const mR = {};
function Uw(e, t) {
  const n = gw(e);
  return () => mR[t] ?? n();
}
const gR = Uw(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  Ww = Uw(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  po = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  am = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: po([0, 0.65, 0.55, 1]),
    circOut: po([0.55, 0, 1, 0.45]),
    backIn: po([0.31, 0.01, 0.66, -0.59]),
    backOut: po([0.33, 1.53, 0.69, 0.99]),
  };
function Hw(e, t) {
  if (e)
    return typeof e == "function"
      ? Ww()
        ? Vw(e, t)
        : "ease-out"
      : kw(e)
        ? po(e)
        : Array.isArray(e)
          ? e.map((n) => Hw(n, t) || am.easeOut)
          : am[e];
}
function yR(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  u = void 0,
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const d = Hw(a, i);
  Array.isArray(d) && (c.easing = d);
  const f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: o + 1,
    direction: s === "reverse" ? "alternate" : "normal",
  };
  return (u && (f.pseudoElement = u), e.animate(c, f));
}
function Kw(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function vR({ type: e, ...t }) {
  return Kw(e) && Ww()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Gw extends Df {
  constructor(t) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !t)
    )
      return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: o,
      allowFlatten: s = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    ((this.isPseudoElement = !!o),
      (this.allowFlatten = s),
      (this.options = t),
      Fi(
        typeof t.type != "string",
        `Mini animate() doesn't support "type" as a string.`,
        "mini-spring",
      ));
    const u = vR(t);
    ((this.animation = yR(n, r, i, u, o)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !o)) {
          const c = Nf(i, this.options, a, this.speed);
          (this.updateMotionValue && this.updateMotionValue(c),
            $w(n, r, c),
            this.animation.cancel());
        }
        (l == null || l(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var n, r, i;
    const t = (n = this.options) == null ? void 0 : n.element;
    !this.isPseudoElement &&
      t != null &&
      t.isConnected &&
      ((i = (r = this.animation).commitStyles) == null || i.call(r));
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return gt(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + gt(t);
  }
  get time() {
    return gt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    const n = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = Je(t)),
      n && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, rangeStart: n, rangeEnd: r, observe: i }) {
    var o;
    return (
      this.allowFlatten &&
        ((o = this.animation.effect) == null ||
          o.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && gR()
        ? ((this.animation.timeline = t),
          n && (this.animation.rangeStart = n),
          r && (this.animation.rangeEnd = r),
          vt)
        : i(this)
    );
  }
}
const Qw = { anticipate: Cw, backInOut: Ew, circInOut: Pw };
function wR(e) {
  return e in Qw;
}
function xR(e) {
  typeof e.ease == "string" && wR(e.ease) && (e.ease = Qw[e.ease]);
}
const vu = 10;
class SR extends Gw {
  constructor(t) {
    (xR(t),
      _w(t),
      super(t),
      t.startTime !== void 0 &&
        t.autoplay !== !1 &&
        (this.startTime = t.startTime),
      (this.options = t));
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: o,
      ...s
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Lf({ ...s, autoplay: !1 }),
      l = Math.max(vu, $e.now() - this.startTime),
      u = tn(0, vu, l - vu),
      c = a.sample(l).value,
      { name: d } = this.options;
    (o && d && $w(o, d, c),
      n.setWithVelocity(a.sample(Math.max(0, l - u)).value, c, u),
      a.stop());
  }
}
const lm = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (It.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function ER(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function CR(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = lm(i, t),
    a = lm(o, t);
  return (
    Pl(
      s === a,
      `You are trying to animate ${t} from "${i}" to "${o}". "${s ? o : i}" is not an animatable value.`,
      "value-not-animatable",
    ),
    !s || !a ? !1 : ER(e) || ((n === "spring" || Kw(n)) && r)
  );
}
function Yc(e) {
  ((e.duration = 0), (e.type = "keyframes"));
}
const TR = new Set(["opacity", "clipPath", "filter", "transform"]),
  PR = gw(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function bR(e) {
  var c;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: o,
    type: s,
  } = e;
  if (
    !(
      ((c = t == null ? void 0 : t.owner) == null
        ? void 0
        : c.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return (
    PR() &&
    n &&
    TR.has(n) &&
    (n !== "transform" || !u) &&
    !l &&
    !r &&
    i !== "mirror" &&
    o !== 0 &&
    s !== "inertia"
  );
}
const kR = 40;
class RR extends Df {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...d
  }) {
    var v;
    (super(),
      (this.stop = () => {
        var g, w;
        (this._animation &&
          (this._animation.stop(),
          (g = this.stopTimeline) == null || g.call(this)),
          (w = this.keyframeResolver) == null || w.cancel());
      }),
      (this.createdAt = $e.now()));
    const f = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        name: l,
        motionValue: u,
        element: c,
        ...d,
      },
      h = (c == null ? void 0 : c.KeyframeResolver) || Of;
    ((this.keyframeResolver = new h(
      a,
      (g, w, m) => this.onKeyframesResolved(g, w, f, !m),
      l,
      u,
      c,
    )),
      (v = this.keyframeResolver) == null || v.scheduleResolve());
  }
  onKeyframesResolved(t, n, r, i) {
    var m, p;
    this.keyframeResolver = void 0;
    const {
      name: o,
      type: s,
      velocity: a,
      delay: l,
      isHandoff: u,
      onUpdate: c,
    } = r;
    this.resolvedAt = $e.now();
    let d = !0;
    CR(t, o, s, a) ||
      ((d = !1),
      (ir.instantAnimations || !l) && (c == null || c(Nf(t, r, n))),
      (t[0] = t[t.length - 1]),
      Yc(r),
      (r.repeat = 0));
    const h = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > kR
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      v = d && !u && bR(h),
      g =
        (p = (m = h.motionValue) == null ? void 0 : m.owner) == null
          ? void 0
          : p.current,
      w = v ? new SR({ ...h, element: g }) : new Lf(h);
    (w.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(vt),
      this.pendingTimeline &&
        ((this.stopTimeline = w.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = w));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), hR()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    (this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel());
  }
}
function Yw(e, t, n, r = 0, i = 1) {
  const o = Array.from(e)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(t),
    s = e.size,
    a = (s - 1) * r;
  return typeof n == "function" ? n(o, s) : i === 1 ? o * r : a - o * r;
}
const AR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function MR(e) {
  const t = AR.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
const NR = 4;
function Xw(e, t, n = 1) {
  Fi(
    n <= NR,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
    "max-css-var-depth",
  );
  const [r, i] = MR(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return hw(s) ? parseFloat(s) : s;
  }
  return bf(i) ? Xw(i, t, n + 1) : i;
}
const DR = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  LR = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  OR = { type: "keyframes", duration: 0.8 },
  jR = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  IR = (e, { keyframes: t }) =>
    t.length > 2
      ? OR
      : Yi.has(e)
        ? e.startsWith("scale")
          ? LR(t[1])
          : DR
        : jR,
  VR = (e) => e !== null;
function FR(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(VR),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
function qw(e, t) {
  if (e != null && e.inherit && t) {
    const { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function jf(e, t) {
  const n =
    (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
  return n !== e ? qw(n, e) : n;
}
function _R({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const If =
  (e, t, n, r = {}, i, o) =>
  (s) => {
    const a = jf(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - Je(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        (t.set(f), a.onUpdate && a.onUpdate(f));
      },
      onComplete: () => {
        (s(), a.onComplete && a.onComplete());
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i,
    };
    (_R(a) || Object.assign(c, IR(e, c)),
      c.duration && (c.duration = Je(c.duration)),
      c.repeatDelay && (c.repeatDelay = Je(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from));
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        (Yc(c), c.delay === 0 && (d = !0)),
      (ir.instantAnimations ||
        ir.skipAnimations ||
        (i != null && i.shouldSkipAnimations)) &&
        ((d = !0), Yc(c), (c.delay = 0)),
      (c.allowFlatten = !a.type && !a.ease),
      d && !o && t.get() !== void 0)
    ) {
      const f = FR(c.keyframes, a);
      if (f !== void 0) {
        ie.update(() => {
          (c.onUpdate(f), c.onComplete());
        });
        return;
      }
    }
    return a.isSync ? new Lf(c) : new RR(c);
  };
function um(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function Vf(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = um(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = um(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function Nr(e, t, n) {
  const r = e.getProps();
  return Vf(r, t, n !== void 0 ? n : r.custom, e);
}
const Zw = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Qi,
  ]),
  cm = 30,
  zR = (e) => !isNaN(parseFloat(e));
class BR {
  constructor(t, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var o;
        const i = $e.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((o = this.events.change) == null || o.notify(this.current),
            this.dependents))
        )
          for (const s of this.dependents) s.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = $e.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = zR(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Cf());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            ie.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = $e.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > cm
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, cm);
    return yw(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    ((t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function zi(e, t) {
  return new BR(e, t);
}
const Xc = (e) => Array.isArray(e);
function $R(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, zi(n));
}
function UR(e) {
  return Xc(e) ? e[e.length - 1] || 0 : e;
}
function WR(e, t) {
  const n = Nr(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = UR(o[s]);
    $R(e, s, a);
  }
}
const Ae = (e) => !!(e && e.getVelocity);
function HR(e) {
  return !!(Ae(e) && e.add);
}
function qc(e, t) {
  const n = e.getValue("willChange");
  if (HR(n)) return n.add(t);
  if (!n && ir.WillChange) {
    const r = new ir.WillChange("auto");
    (e.addValue("willChange", r), r.add(t));
  }
}
function Ff(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const KR = "framerAppearId",
  Jw = "data-" + Ff(KR);
function ex(e) {
  return e.props[Jw];
}
function GR({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function tx(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: o, transitionEnd: s, ...a } = t;
  const l = e.getDefaultTransition();
  o = o ? qw(o, l) : l;
  const u = o == null ? void 0 : o.reduceMotion;
  r && (o = r);
  const c = [],
    d = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const h = e.getValue(f, e.latestValues[f] ?? null),
      v = a[f];
    if (v === void 0 || (d && GR(d, f))) continue;
    const g = { delay: n, ...jf(o || {}, f) },
      w = h.get();
    if (
      w !== void 0 &&
      !h.isAnimating &&
      !Array.isArray(v) &&
      v === w &&
      !g.velocity
    )
      continue;
    let m = !1;
    if (window.MotionHandoffAnimation) {
      const S = ex(e);
      if (S) {
        const E = window.MotionHandoffAnimation(S, f, ie);
        E !== null && ((g.startTime = E), (m = !0));
      }
    }
    qc(e, f);
    const p = u ?? e.shouldReduceMotion;
    h.start(If(f, h, v, p && Zw.has(f) ? { type: !1 } : g, e, m));
    const y = h.animation;
    y && c.push(y);
  }
  if (s) {
    const f = () =>
      ie.update(() => {
        s && WR(e, s);
      });
    c.length ? Promise.all(c).then(f) : f();
  }
  return c;
}
function Zc(e, t, n = {}) {
  var l;
  const r = Nr(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0,
  );
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(tx(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return QR(e, t, u, c, d, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, s] : [s, o];
    return u().then(() => c());
  } else return Promise.all([o(), s(n.delay)]);
}
function QR(e, t, n = 0, r = 0, i = 0, o = 1, s) {
  const a = [];
  for (const l of e.variantChildren)
    (l.notify("AnimationStart", t),
      a.push(
        Zc(l, t, {
          ...s,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            Yw(e.variantChildren, l, r, i, o),
        }).then(() => l.notify("AnimationComplete", t)),
      ));
  return Promise.all(a);
}
function YR(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Zc(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Zc(e, t, n);
  else {
    const i = typeof t == "function" ? Nr(e, t, n.custom) : t;
    r = Promise.all(tx(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const XR = { test: (e) => e === "auto", parse: (e) => e },
  nx = (e) => (t) => t.test(e),
  rx = [Gi, _, Jt, An, E2, S2, XR],
  dm = (e) => rx.find(nx(e));
function qR(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || mw(e)
      : !0;
}
const ZR = new Set(["brightness", "contrast", "saturate", "opacity"]);
function JR(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(kf) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = ZR.has(t) ? 1 : 0;
  return (r !== n && (o *= 100), t + "(" + o + i + ")");
}
const eA = /\b([a-z-]*)\(.*?\)/gu,
  Jc = {
    ...It,
    getAnimatableNone: (e) => {
      const t = e.match(eA);
      return t ? t.map(JR).join(" ") : e;
    },
  },
  ed = {
    ...It,
    getAnimatableNone: (e) => {
      const t = It.parse(e);
      return It.createTransformer(e)(
        t.map((r) =>
          typeof r == "number"
            ? 0
            : typeof r == "object"
              ? { ...r, alpha: 1 }
              : r,
        ),
      );
    },
  },
  fm = { ...Gi, transform: Math.round },
  tA = {
    rotate: An,
    rotateX: An,
    rotateY: An,
    rotateZ: An,
    scale: Bs,
    scaleX: Bs,
    scaleY: Bs,
    scaleZ: Bs,
    skew: An,
    skewX: An,
    skewY: An,
    distance: _,
    translateX: _,
    translateY: _,
    translateZ: _,
    x: _,
    y: _,
    z: _,
    perspective: _,
    transformPerspective: _,
    opacity: qo,
    originX: Zp,
    originY: Zp,
    originZ: _,
  },
  _f = {
    borderWidth: _,
    borderTopWidth: _,
    borderRightWidth: _,
    borderBottomWidth: _,
    borderLeftWidth: _,
    borderRadius: _,
    borderTopLeftRadius: _,
    borderTopRightRadius: _,
    borderBottomRightRadius: _,
    borderBottomLeftRadius: _,
    width: _,
    maxWidth: _,
    height: _,
    maxHeight: _,
    top: _,
    right: _,
    bottom: _,
    left: _,
    inset: _,
    insetBlock: _,
    insetBlockStart: _,
    insetBlockEnd: _,
    insetInline: _,
    insetInlineStart: _,
    insetInlineEnd: _,
    padding: _,
    paddingTop: _,
    paddingRight: _,
    paddingBottom: _,
    paddingLeft: _,
    paddingBlock: _,
    paddingBlockStart: _,
    paddingBlockEnd: _,
    paddingInline: _,
    paddingInlineStart: _,
    paddingInlineEnd: _,
    margin: _,
    marginTop: _,
    marginRight: _,
    marginBottom: _,
    marginLeft: _,
    marginBlock: _,
    marginBlockStart: _,
    marginBlockEnd: _,
    marginInline: _,
    marginInlineStart: _,
    marginInlineEnd: _,
    fontSize: _,
    backgroundPositionX: _,
    backgroundPositionY: _,
    ...tA,
    zIndex: fm,
    fillOpacity: qo,
    strokeOpacity: qo,
    numOctaves: fm,
  },
  nA = {
    ..._f,
    color: we,
    backgroundColor: we,
    outlineColor: we,
    fill: we,
    stroke: we,
    borderColor: we,
    borderTopColor: we,
    borderRightColor: we,
    borderBottomColor: we,
    borderLeftColor: we,
    filter: Jc,
    WebkitFilter: Jc,
    mask: ed,
    WebkitMask: ed,
  },
  ix = (e) => nA[e],
  rA = new Set([Jc, ed]);
function ox(e, t) {
  let n = ix(e);
  return (
    rA.has(n) || (n = It),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const iA = new Set(["auto", "none", "0"]);
function oA(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    (typeof o == "string" && !iA.has(o) && _i(o).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (const o of t) e[o] = ox(n, i);
}
class sA extends Of {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let d = t[c];
      if (typeof d == "string" && ((d = d.trim()), bf(d))) {
        const f = Xw(d, n.current);
        (f !== void 0 && (t[c] = f),
          c === t.length - 1 && (this.finalKeyframe = d));
      }
    }
    if ((this.resolveNoneKeyframes(), !Zw.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = dm(i),
      a = dm(o),
      l = qp(i),
      u = qp(o);
    if (l !== u && Un[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (s !== a)
      if (sm(s) && sm(a))
        for (let c = 0; c < t.length; c++) {
          const d = t[c];
          typeof d == "string" && (t[c] = parseFloat(d));
        }
      else Un[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || qR(t[i])) && r.push(i);
    r.length && oA(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Un[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = r.length - 1,
      s = r[o];
    ((r[o] = Un[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, u]) => {
          t.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
const aA = new Set(["opacity", "clipPath", "filter", "transform"]);
function sx(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const i = document.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((r) => r != null);
}
const ax = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function lA(e) {
  return pw(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: zf, cancel: xD } = Rw(queueMicrotask, !1),
  kt = { x: !1, y: !1 };
function lx() {
  return kt.x || kt.y;
}
function uA(e) {
  return e === "x" || e === "y"
    ? kt[e]
      ? null
      : ((kt[e] = !0),
        () => {
          kt[e] = !1;
        })
    : kt.x || kt.y
      ? null
      : ((kt.x = kt.y = !0),
        () => {
          kt.x = kt.y = !1;
        });
}
function ux(e, t) {
  const n = sx(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function cA(e) {
  return !(e.pointerType === "touch" || lx());
}
function dA(e, t, n = {}) {
  const [r, i, o] = ux(e, n);
  return (
    r.forEach((s) => {
      let a = !1,
        l = !1,
        u;
      const c = () => {
          s.removeEventListener("pointerleave", v);
        },
        d = (w) => {
          (u && (u(w), (u = void 0)), c());
        },
        f = (w) => {
          ((a = !1),
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            l && ((l = !1), d(w)));
        },
        h = () => {
          ((a = !0),
            window.addEventListener("pointerup", f, i),
            window.addEventListener("pointercancel", f, i));
        },
        v = (w) => {
          if (w.pointerType !== "touch") {
            if (a) {
              l = !0;
              return;
            }
            d(w);
          }
        },
        g = (w) => {
          if (!cA(w)) return;
          l = !1;
          const m = t(s, w);
          typeof m == "function" &&
            ((u = m), s.addEventListener("pointerleave", v, i));
        };
      (s.addEventListener("pointerenter", g, i),
        s.addEventListener("pointerdown", h, i));
    }),
    o
  );
}
const cx = (e, t) => (t ? (e === t ? !0 : cx(e, t.parentElement)) : !1),
  Bf = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  fA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function hA(e) {
  return fA.has(e.tagName) || e.isContentEditable === !0;
}
const pA = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function mA(e) {
  return pA.has(e.tagName) || e.isContentEditable === !0;
}
const sa = new WeakSet();
function hm(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function wu(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const gA = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = hm(() => {
    if (sa.has(n)) return;
    wu(n, "down");
    const i = hm(() => {
        wu(n, "up");
      }),
      o = () => wu(n, "cancel");
    (n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function pm(e) {
  return Bf(e) && !lx();
}
const mm = new WeakSet();
function yA(e, t, n = {}) {
  const [r, i, o] = ux(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!pm(a) || mm.has(a)) return;
      (sa.add(l), n.stopPropagation && mm.add(a));
      const u = t(l, a),
        c = (h, v) => {
          (window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            sa.has(l) && sa.delete(l),
            pm(h) && typeof u == "function" && u(h, { success: v }));
        },
        d = (h) => {
          c(
            h,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              cx(l, h.target),
          );
        },
        f = (h) => {
          c(h, !1);
        };
      (window.addEventListener("pointerup", d, i),
        window.addEventListener("pointercancel", f, i));
    };
  return (
    r.forEach((a) => {
      ((n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i),
        lA(a) &&
          (a.addEventListener("focus", (u) => gA(u, i)),
          !hA(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)));
    }),
    o
  );
}
function $f(e) {
  return pw(e) && "ownerSVGElement" in e;
}
const aa = new WeakMap();
let Mn;
const dx = (e, t, n) => (r, i) =>
    i && i[0]
      ? i[0][e + "Size"]
      : $f(r) && "getBBox" in r
        ? r.getBBox()[t]
        : r[n],
  vA = dx("inline", "width", "offsetWidth"),
  wA = dx("block", "height", "offsetHeight");
function xA({ target: e, borderBoxSize: t }) {
  var n;
  (n = aa.get(e)) == null ||
    n.forEach((r) => {
      r(e, {
        get width() {
          return vA(e, t);
        },
        get height() {
          return wA(e, t);
        },
      });
    });
}
function SA(e) {
  e.forEach(xA);
}
function EA() {
  typeof ResizeObserver > "u" || (Mn = new ResizeObserver(SA));
}
function CA(e, t) {
  Mn || EA();
  const n = sx(e);
  return (
    n.forEach((r) => {
      let i = aa.get(r);
      (i || ((i = new Set()), aa.set(r, i)),
        i.add(t),
        Mn == null || Mn.observe(r));
    }),
    () => {
      n.forEach((r) => {
        const i = aa.get(r);
        (i == null || i.delete(t),
          (i != null && i.size) || Mn == null || Mn.unobserve(r));
      });
    }
  );
}
const la = new Set();
let li;
function TA() {
  ((li = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    la.forEach((t) => t(e));
  }),
    window.addEventListener("resize", li));
}
function PA(e) {
  return (
    la.add(e),
    li || TA(),
    () => {
      (la.delete(e),
        !la.size &&
          typeof li == "function" &&
          (window.removeEventListener("resize", li), (li = void 0)));
    }
  );
}
function gm(e, t) {
  return typeof e == "function" ? PA(e) : CA(e, t);
}
function bA(e) {
  return $f(e) && e.tagName === "svg";
}
const kA = [...rx, we, It],
  RA = (e) => kA.find(nx(e)),
  ym = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ui = () => ({ x: ym(), y: ym() }),
  vm = () => ({ min: 0, max: 0 }),
  Se = () => ({ x: vm(), y: vm() }),
  AA = new WeakMap();
function bl(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Zo(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Uf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Wf = ["initial", ...Uf];
function kl(e) {
  return bl(e.animate) || Wf.some((t) => Zo(e[t]));
}
function fx(e) {
  return !!(kl(e) || e.variants);
}
function MA(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (Ae(i)) e.addValue(r, i);
    else if (Ae(o)) e.addValue(r, zi(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, zi(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const td = { current: null },
  hx = { current: !1 },
  NA = typeof window < "u";
function DA() {
  if (((hx.current = !0), !!NA))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (td.current = e.matches);
      (e.addEventListener("change", t), t());
    } else td.current = !1;
}
const wm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Ka = {};
function px(e) {
  Ka = e;
}
function LA() {
  return Ka;
}
class OA {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      skipAnimations: o,
      blockInitialAnimation: s,
      visualState: a,
    },
    l = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = Of),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = $e.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), ie.render(this.render, !1, !0));
      }));
    const { latestValues: u, renderState: c } = a;
    ((this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.skipAnimationsConfig = o),
      (this.options = l),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = kl(n)),
      (this.isVariantNode = fx(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const h in f) {
      const v = f[h];
      u[h] !== void 0 && Ae(v) && v.set(u[h]);
    }
  }
  mount(t) {
    var n, r;
    if (this.hasBeenMounted)
      for (const i in this.initialValues)
        ((n = this.values.get(i)) == null || n.jump(this.initialValues[i]),
          (this.latestValues[i] = this.initialValues[i]));
    ((this.current = t),
      AA.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((i, o) => this.bindToMotionValue(o, i)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (hx.current || DA(), (this.shouldReduceMotion = td.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var t;
    (this.projection && this.projection.unmount(),
      or(this.notifyUpdate),
      or(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this));
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    (this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t));
  }
  removeChild(t) {
    (this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t));
  }
  bindToMotionValue(t, n) {
    if (
      (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
      n.accelerate && aA.has(t) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: s,
          keyframes: a,
          times: l,
          ease: u,
          duration: c,
        } = n.accelerate,
        d = new Gw({
          element: this.current,
          name: t,
          keyframes: a,
          times: l,
          ease: u,
          duration: Je(c),
        }),
        f = s(d);
      this.valueSubscriptions.set(t, () => {
        (f(), d.cancel());
      });
      return;
    }
    const r = Yi.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (s) => {
      ((this.latestValues[t] = s),
        this.props.onUpdate && ie.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let o;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (i(), o && o(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ka) {
      const n = Ka[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Se();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < wm.length; r++) {
      const i = wm[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    ((this.prevMotionValues = MA(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = zi(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options));
    return (
      r != null &&
        (typeof r == "string" && (hw(r) || mw(r))
          ? (r = parseFloat(r))
          : !RA(r) && It.test(n) && (r = ox(t, n)),
        this.setBaseTarget(t, Ae(r) ? r.get() : r)),
      Ae(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var o;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const s = Vf(
        this.props,
        n,
        (o = this.presenceContext) == null ? void 0 : o.custom,
      );
      s && (r = s[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Ae(i)
      ? i
      : this.initialValues[t] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new Cf()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    zf.render(this.render);
  }
}
class mx extends OA {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = sA));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const r = t.style;
    return r ? r[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ae(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class ur {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
function gx({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function jA({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function IA(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function xu(e) {
  return e === void 0 || e === 1;
}
function nd({ scale: e, scaleX: t, scaleY: n }) {
  return !xu(e) || !xu(t) || !xu(n);
}
function gr(e) {
  return (
    nd(e) ||
    yx(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function yx(e) {
  return xm(e.x) || xm(e.y);
}
function xm(e) {
  return e && e !== "0%";
}
function Ga(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Sm(e, t, n, r, i) {
  return (i !== void 0 && (e = Ga(e, i, r)), Ga(e, n, r) + t);
}
function rd(e, t = 0, n = 1, r, i) {
  ((e.min = Sm(e.min, t, n, r, i)), (e.max = Sm(e.max, t, n, r, i)));
}
function vx(e, { x: t, y: n }) {
  (rd(e.x, t.translate, t.scale, t.originPoint),
    rd(e.y, n.translate, n.scale, n.originPoint));
}
const Em = 0.999999999999,
  Cm = 1.0000000000001;
function VA(e, t, n, r = !1) {
  var a;
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    ((o = n[l]), (s = o.projectionDelta));
    const { visualElement: u } = o.options;
    (u && u.props.style && u.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        di(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), vx(e, s)),
      r &&
        gr(o.latestValues) &&
        di(e, o.latestValues, (a = o.layout) == null ? void 0 : a.layoutBox));
  }
  (t.x < Cm && t.x > Em && (t.x = 1), t.y < Cm && t.y > Em && (t.y = 1));
}
function ci(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function Tm(e, t, n, r, i = 0.5) {
  const o = fe(e.min, e.max, i);
  rd(e, t, n, o, r);
}
function Pm(e, t) {
  return typeof e == "string" ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function di(e, t, n) {
  const r = n ?? e;
  (Tm(e.x, Pm(t.x, r.x), t.scaleX, t.scale, t.originX),
    Tm(e.y, Pm(t.y, r.y), t.scaleY, t.scale, t.originY));
}
function wx(e, t) {
  return gx(IA(e.getBoundingClientRect(), t));
}
function FA(e, t, n) {
  const r = wx(e, n),
    { scroll: i } = t;
  return (i && (ci(r.x, i.offset.x), ci(r.y, i.offset.y)), r);
}
const _A = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  zA = Qi.length;
function BA(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < zA; o++) {
    const s = Qi[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (typeof a == "number") l = a === (s.startsWith("scale") ? 1 : 0);
    else {
      const u = parseFloat(a);
      l = s.startsWith("scale") ? u === 1 : u === 0;
    }
    if (!l || n) {
      const u = ax(a, _f[s]);
      if (!l) {
        i = !1;
        const c = _A[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r);
}
function Hf(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (Yi.has(l)) {
      s = !0;
      continue;
    } else if (Mw(l)) {
      i[l] = u;
      continue;
    } else {
      const c = ax(u, _f[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = BA(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function xx(e, { style: t, vars: n }, r, i) {
  const o = e.style;
  let s;
  for (s in t) o[s] = t[s];
  i == null || i.applyProjectionStyles(o, r);
  for (s in n) o.setProperty(s, n[s]);
}
function bm(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const lo = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (_.test(e)) e = parseFloat(e);
        else return e;
      const n = bm(e, t.target.x),
        r = bm(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  $A = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = It.parse(e);
      if (i.length > 5) return r;
      const o = It.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((i[0 + s] /= a), (i[1 + s] /= l));
      const u = fe(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  },
  id = {
    borderRadius: {
      ...lo,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: lo,
    borderTopRightRadius: lo,
    borderBottomLeftRadius: lo,
    borderBottomRightRadius: lo,
    boxShadow: $A,
  };
function Sx(e, { layout: t, layoutId: n }) {
  return (
    Yi.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!id[e] || e === "opacity"))
  );
}
function Kf(e, t, n) {
  var s;
  const r = e.style,
    i = t == null ? void 0 : t.style,
    o = {};
  if (!r) return o;
  for (const a in r)
    (Ae(r[a]) ||
      (i && Ae(i[a])) ||
      Sx(a, e) ||
      ((s = n == null ? void 0 : n.getValue(a)) == null
        ? void 0
        : s.liveStyle) !== void 0) &&
      (o[a] = r[a]);
  return o;
}
function UA(e) {
  return window.getComputedStyle(e);
}
class WA extends mx {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = xx));
  }
  readValueFromInstance(t, n) {
    var r;
    if (Yi.has(n))
      return (r = this.projection) != null && r.isProjecting ? Wc(n) : lR(t, n);
    {
      const i = UA(t),
        o = (Mw(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return wx(t, n);
  }
  build(t, n, r) {
    Hf(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Kf(t, n, r);
  }
}
const HA = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  KA = { offset: "strokeDashoffset", array: "strokeDasharray" };
function GA(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? HA : KA;
  ((e[o.offset] = `${-r}`), (e[o.array] = `${t} ${n}`));
}
const QA = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Ex(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: o = 1,
    pathOffset: s = 0,
    ...a
  },
  l,
  u,
  c,
) {
  if ((Hf(e, a, u), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: d, style: f } = e;
  (d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? "50% 50%"),
      delete d.transformOrigin),
    f.transform &&
      ((f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"),
      delete d.transformBox));
  for (const h of QA) d[h] !== void 0 && ((f[h] = d[h]), delete d[h]);
  (t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && GA(d, i, o, s, !1));
}
const Cx = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  Tx = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function YA(e, t, n, r) {
  xx(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Cx.has(i) ? i : Ff(i), t.attrs[i]);
}
function Px(e, t, n) {
  const r = Kf(e, t, n);
  for (const i in e)
    if (Ae(e[i]) || Ae(t[i])) {
      const o =
        Qi.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
class XA extends mx {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Se));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Yi.has(n)) {
      const r = ix(n);
      return (r && r.default) || 0;
    }
    return ((n = Cx.has(n) ? n : Ff(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Px(t, n, r);
  }
  build(t, n, r) {
    Ex(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    YA(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = Tx(t.tagName)), super.mount(t));
  }
}
const qA = Wf.length;
function bx(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? bx(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < qA; n++) {
    const r = Wf[n],
      i = e.props[r];
    (Zo(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function kx(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const ZA = [...Uf].reverse(),
  JA = Uf.length;
function eM(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => YR(e, n, r)));
}
function tM(e) {
  let t = eM(e),
    n = km(),
    r = !0,
    i = !1;
  const o = (u) => (c, d) => {
    var h;
    const f = Nr(
      e,
      d,
      u === "exit"
        ? (h = e.presenceContext) == null
          ? void 0
          : h.custom
        : void 0,
    );
    if (f) {
      const { transition: v, transitionEnd: g, ...w } = f;
      c = { ...c, ...w, ...g };
    }
    return c;
  };
  function s(u) {
    t = u(e);
  }
  function a(u) {
    const { props: c } = e,
      d = bx(e.parent) || {},
      f = [],
      h = new Set();
    let v = {},
      g = 1 / 0;
    for (let m = 0; m < JA; m++) {
      const p = ZA[m],
        y = n[p],
        S = c[p] !== void 0 ? c[p] : d[p],
        E = Zo(S),
        T = p === u ? y.isActive : null;
      T === !1 && (g = m);
      let P = S === d[p] && S !== c[p] && E;
      if (
        (P && (r || i) && e.manuallyAnimateOnMount && (P = !1),
        (y.protectedKeys = { ...v }),
        (!y.isActive && T === null) ||
          (!S && !y.prevProp) ||
          bl(S) ||
          typeof S == "boolean")
      )
        continue;
      if (p === "exit" && y.isActive && T !== !0) {
        y.prevResolvedValues && (v = { ...v, ...y.prevResolvedValues });
        continue;
      }
      const k = nM(y.prevProp, S);
      let D = k || (p === u && y.isActive && !P && E) || (m > g && E),
        R = !1;
      const V = Array.isArray(S) ? S : [S];
      let j = V.reduce(o(p), {});
      T === !1 && (j = {});
      const { prevResolvedValues: U = {} } = y,
        O = { ...U, ...j },
        W = (b) => {
          ((D = !0),
            h.has(b) && ((R = !0), h.delete(b)),
            (y.needsAnimating[b] = !0));
          const A = e.getValue(b);
          A && (A.liveStyle = !1);
        };
      for (const b in O) {
        const A = j[b],
          I = U[b];
        if (v.hasOwnProperty(b)) continue;
        let $ = !1;
        (Xc(A) && Xc(I) ? ($ = !kx(A, I)) : ($ = A !== I),
          $
            ? A != null
              ? W(b)
              : h.add(b)
            : A !== void 0 && h.has(b)
              ? W(b)
              : (y.protectedKeys[b] = !0));
      }
      ((y.prevProp = S),
        (y.prevResolvedValues = j),
        y.isActive && (v = { ...v, ...j }),
        (r || i) && e.blockInitialAnimation && (D = !1));
      const z = P && k;
      D &&
        (!z || R) &&
        f.push(
          ...V.map((b) => {
            const A = { type: p };
            if (
              typeof b == "string" &&
              (r || i) &&
              !z &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: I } = e,
                $ = Nr(I, b);
              if (I.enteringChildren && $) {
                const { delayChildren: B } = $.transition || {};
                A.delay = Yw(I.enteringChildren, e, B);
              }
            }
            return { animation: b, options: A };
          }),
        );
    }
    if (h.size) {
      const m = {};
      if (typeof c.initial != "boolean") {
        const p = Nr(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        p && p.transition && (m.transition = p.transition);
      }
      (h.forEach((p) => {
        const y = e.getBaseTarget(p),
          S = e.getValue(p);
        (S && (S.liveStyle = !0), (m[p] = y ?? null));
      }),
        f.push({ animation: m }));
    }
    let w = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (w = !1),
      (r = !1),
      (i = !1),
      w ? t(f) : Promise.resolve()
    );
  }
  function l(u, c) {
    var f;
    if (n[u].isActive === c) return Promise.resolve();
    ((f = e.variantChildren) == null ||
      f.forEach((h) => {
        var v;
        return (v = h.animationState) == null ? void 0 : v.setActive(u, c);
      }),
      (n[u].isActive = c));
    const d = a(u);
    for (const h in n) n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: a,
    setActive: l,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      ((n = km()), (i = !0));
    },
  };
}
function nM(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !kx(t, e) : !1;
}
function hr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function km() {
  return {
    animate: hr(!0),
    whileInView: hr(),
    whileHover: hr(),
    whileTap: hr(),
    whileDrag: hr(),
    whileFocus: hr(),
    exit: hr(),
  };
}
function od(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function bt(e, t) {
  (od(e.x, t.x), od(e.y, t.y));
}
function Rm(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
const Rx = 1e-4,
  rM = 1 - Rx,
  iM = 1 + Rx,
  Ax = 0.01,
  oM = 0 - Ax,
  sM = 0 + Ax;
function Ue(e) {
  return e.max - e.min;
}
function aM(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Am(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = fe(t.min, t.max, e.origin)),
    (e.scale = Ue(n) / Ue(t)),
    (e.translate = fe(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= rM && e.scale <= iM) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= oM && e.translate <= sM) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function ko(e, t, n, r) {
  (Am(e.x, t.x, n.x, r ? r.originX : void 0),
    Am(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Mm(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + Ue(t)));
}
function lM(e, t, n) {
  (Mm(e.x, t.x, n.x), Mm(e.y, t.y, n.y));
}
function Nm(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + Ue(t)));
}
function Qa(e, t, n) {
  (Nm(e.x, t.x, n.x), Nm(e.y, t.y, n.y));
}
function Dm(e, t, n, r, i) {
  return (
    (e -= t),
    (e = Ga(e, 1 / n, r)),
    i !== void 0 && (e = Ga(e, 1 / i, r)),
    e
  );
}
function uM(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (Jt.test(t) &&
      ((t = parseFloat(t)), (t = fe(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = fe(o.min, o.max, r);
  (e === o && (a -= t),
    (e.min = Dm(e.min, t, n, a, i)),
    (e.max = Dm(e.max, t, n, a, i)));
}
function Lm(e, t, [n, r, i], o, s) {
  uM(e, t[n], t[r], t[i], t.scale, o, s);
}
const cM = ["x", "scaleX", "originX"],
  dM = ["y", "scaleY", "originY"];
function Om(e, t, n, r) {
  (Lm(e.x, t, cM, n ? n.x : void 0, r ? r.x : void 0),
    Lm(e.y, t, dM, n ? n.y : void 0, r ? r.y : void 0));
}
function jm(e) {
  return e.translate === 0 && e.scale === 1;
}
function Mx(e) {
  return jm(e.x) && jm(e.y);
}
function Im(e, t) {
  return e.min === t.min && e.max === t.max;
}
function fM(e, t) {
  return Im(e.x, t.x) && Im(e.y, t.y);
}
function Vm(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Nx(e, t) {
  return Vm(e.x, t.x) && Vm(e.y, t.y);
}
function Fm(e) {
  return Ue(e.x) / Ue(e.y);
}
function _m(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function Wt(e) {
  return [e("x"), e("y")];
}
function hM(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: h,
      skewY: v,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      h && (r += `skewX(${h}deg) `),
      v && (r += `skewY(${v}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const Dx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  pM = Dx.length,
  zm = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Bm = (e) => typeof e == "number" || _.test(e);
function mM(e, t, n, r, i, o) {
  i
    ? ((e.opacity = fe(0, n.opacity ?? 1, gM(r))),
      (e.opacityExit = fe(t.opacity ?? 1, 0, yM(r))))
    : o && (e.opacity = fe(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let s = 0; s < pM; s++) {
    const a = `border${Dx[s]}Radius`;
    let l = $m(t, a),
      u = $m(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Bm(l) === Bm(u)
        ? ((e[a] = Math.max(fe(zm(l), zm(u), r), 0)),
          (Jt.test(u) || Jt.test(l)) && (e[a] += "%"))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = fe(t.rotate || 0, n.rotate || 0, r));
}
function $m(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const gM = Lx(0, 0.5, Tw),
  yM = Lx(0.5, 0.95, vt);
function Lx(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Xo(e, t, r)));
}
function vM(e, t, n) {
  const r = Ae(e) ? e : zi(e);
  return (r.start(If("", r, t, n)), r.animation);
}
function Jo(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
const wM = (e, t) => e.depth - t.depth;
class xM {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (Ef(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    ($a(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(wM),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function SM(e, t) {
  const n = $e.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (or(r), e(o - t));
    };
  return (ie.setup(r, !0), () => or(r));
}
function ua(e) {
  return Ae(e) ? e.get() : e;
}
class EM {
  constructor() {
    this.members = [];
  }
  add(t) {
    Ef(this.members, t);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const r = this.members[n];
      if (r === t || r === this.lead || r === this.prevLead) continue;
      const i = r.instance;
      (!i || i.isConnected === !1) &&
        !r.snapshot &&
        ($a(this.members, r), r.unmount());
    }
    t.scheduleRender();
  }
  remove(t) {
    if (
      ($a(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    var n;
    for (let r = this.members.indexOf(t) - 1; r >= 0; r--) {
      const i = this.members[r];
      if (
        i.isPresent !== !1 &&
        ((n = i.instance) == null ? void 0 : n.isConnected) !== !1
      )
        return (this.promote(i), !0);
    }
    return !1;
  }
  promote(t, n) {
    var i;
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.updateSnapshot(), t.scheduleRender());
      const { layoutDependency: o } = r.options,
        { layoutDependency: s } = t.options;
      ((o === void 0 || o !== s) &&
        ((t.resumeFrom = r),
        n && (r.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        (i = t.root) != null && i.isUpdating && (t.isLayoutDirty = !0)),
        t.options.crossfade === !1 && r.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      var n, r, i, o, s;
      ((r = (n = t.options).onExitComplete) == null || r.call(n),
        (s =
          (i = t.resumingFrom) == null
            ? void 0
            : (o = i.options).onExitComplete) == null || s.call(o));
    });
  }
  scheduleRender() {
    this.members.forEach((t) => t.instance && t.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var t;
    (t = this.lead) != null && t.snapshot && (this.lead.snapshot = void 0);
  }
}
const ca = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Su = ["", "X", "Y", "Z"],
  CM = 1e3;
let TM = 0;
function Eu(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Ox(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = ex(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ie, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Ox(r);
}
function jx({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      ((this.id = TM++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(kM),
            this.nodes.forEach(NM),
            this.nodes.forEach(DM),
            this.nodes.forEach(RM));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new xM());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Cf()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s) {
      if (this.instance) return;
      ((this.isSVG = $f(s) && !bA(s)), (this.instance = s));
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          d = 0;
        const f = () => (this.root.updateBlockedByResize = !1);
        (ie.read(() => {
          d = window.innerWidth;
        }),
          e(s, () => {
            const h = window.innerWidth;
            h !== d &&
              ((d = h),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = SM(f, 250)),
              ca.hasAnimatedSinceResize &&
                ((ca.hasAnimatedSinceResize = !1), this.nodes.forEach(Hm)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: d,
              hasRelativeLayoutChanged: f,
              layout: h,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const v =
                  this.options.transition || u.getDefaultTransition() || VM,
                { onLayoutAnimationStart: g, onLayoutAnimationComplete: w } =
                  u.getProps(),
                m = !this.targetLayout || !Nx(this.targetLayout, h),
                p = !d && f;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                p ||
                (d && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const y = { ...jf(v, "layout"), onPlay: g, onComplete: w };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((y.delay = 0), (y.type = !1)),
                  this.startAnimation(y),
                  this.setAnimationOrigin(c, p));
              } else
                (d || Hm(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = h;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const s = this.getStack();
      (s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        or(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(LM),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Ox(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        ((d.shouldResetTransform = !0),
          (typeof d.latestValues.x == "string" ||
            typeof d.latestValues.y == "string") &&
            (d.isLayoutDirty = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Um));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Wm);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(MM),
            this.nodes.forEach(PM),
            this.nodes.forEach(bM))
          : this.nodes.forEach(Wm),
        this.clearAllSnapshots());
      const a = $e.now();
      ((Re.delta = tn(0, 1e3 / 60, a - Re.timestamp)),
        (Re.timestamp = a),
        (Re.isProcessing = !0),
        hu.update.process(Re),
        hu.preRender.process(Re),
        hu.render.process(Re),
        (Re.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), zf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(AM), this.sharedNodes.forEach(OM));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ie.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ie.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Ue(this.snapshot.measuredBox.x) &&
          !Ue(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = Se()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0,
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Mx(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        this.instance &&
        (a || gr(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        FM(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: s } = this.options;
      if (!s) return Se();
      const a = s.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(_M)
        )
      ) {
        const { scroll: c } = this.root;
        c && (ci(a.x, c.offset.x), ci(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = Se();
      if ((bt(a, s), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && bt(a, s), ci(a.x, d.offset.x), ci(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1) {
      var u, c;
      const l = Se();
      bt(l, s);
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        (!a &&
          f.options.layoutScroll &&
          f.scroll &&
          f !== f.root &&
          di(l, { x: -f.scroll.offset.x, y: -f.scroll.offset.y }),
          gr(f.latestValues) &&
            di(
              l,
              f.latestValues,
              (u = f.layout) == null ? void 0 : u.layoutBox,
            ));
      }
      return (
        gr(this.latestValues) &&
          di(
            l,
            this.latestValues,
            (c = this.layout) == null ? void 0 : c.layoutBox,
          ),
        l
      );
    }
    removeTransform(s) {
      var l;
      const a = Se();
      bt(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!gr(c.latestValues)) continue;
        let d;
        (c.instance &&
          (nd(c.latestValues) && c.updateSnapshot(),
          (d = Se()),
          bt(d, c.measurePageBox())),
          Om(
            a,
            c.latestValues,
            (l = c.snapshot) == null ? void 0 : l.layoutBox,
            d,
          ));
      }
      return (gr(this.latestValues) && Om(a, this.latestValues), a);
    }
    setTargetDelta(s) {
      ((this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Re.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var h;
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((h = this.parent) != null && h.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!this.layout || !(c || d)) return;
      this.resolvedRelativeTargetAt = Re.timestamp;
      const f = this.getClosestProjectingParent();
      (f &&
        this.linkedParentVersion !== f.layoutVersion &&
        !f.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (f && f.layout
            ? this.createRelativeTarget(
                f,
                this.layout.layoutBox,
                f.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Se()), (this.targetWithTransforms = Se())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              lM(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : bt(this.target, this.layout.layoutBox),
                vx(this.target, this.targetDelta))
              : bt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            f &&
            !!f.resumingFrom == !!this.resumingFrom &&
            !f.options.layoutScroll &&
            f.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(f, this.target, f.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          nd(this.parent.latestValues) ||
          yx(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(s, a, l) {
      ((this.relativeParent = s),
        (this.linkedParentVersion = s.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Se()),
        (this.relativeTargetOrigin = Se()),
        Qa(this.relativeTargetOrigin, a, l),
        bt(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var v;
      const s = this.getLead(),
        a = !!this.resumingFrom || this !== s;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((v = this.parent) != null && v.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === Re.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      bt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        f = this.treeScale.y;
      (VA(this.layoutCorrected, this.treeScale, this.path, a),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((s.target = s.layout.layoutBox), (s.targetWithTransforms = Se())));
      const { target: h } = s;
      if (!h) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Rm(this.prevProjectionDelta.x, this.projectionDelta.x),
          Rm(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ko(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== f ||
          !_m(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !_m(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", h)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = ui()),
        (this.projectionDelta = ui()),
        (this.projectionDeltaWithTransform = ui()));
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = ui();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const f = Se(),
        h = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        g = h !== v,
        w = this.getStack(),
        m = !w || w.members.length <= 1,
        p = !!(g && !m && this.options.crossfade === !0 && !this.path.some(IM));
      this.animationProgress = 0;
      let y;
      ((this.mixTargetDelta = (S) => {
        const E = S / 1e3;
        (Km(d.x, s.x, E),
          Km(d.y, s.y, E),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Qa(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            jM(this.relativeTarget, this.relativeTargetOrigin, f, E),
            y && fM(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = Se()),
            bt(y, this.relativeTarget)),
          g &&
            ((this.animationValues = c), mM(c, u, this.latestValues, E, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = E));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(s) {
      var a, l, u;
      (this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || u.stop(),
        this.pendingAnimation &&
          (or(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ie.update(() => {
          ((ca.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = zi(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = vM(this.motionValue, [0, 1e3], {
              ...s,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                (this.mixTargetDelta(c), s.onUpdate && s.onUpdate(c));
              },
              onStop: () => {},
              onComplete: () => {
                (s.onComplete && s.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      (s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(CM),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Ix(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Se();
          const d = Ue(this.layout.layoutBox.x);
          ((l.x.min = s.target.x.min), (l.x.max = l.x.min + d));
          const f = Ue(this.layout.layoutBox.y);
          ((l.y.min = s.target.y.min), (l.y.max = l.y.min + f));
        }
        (bt(a, l),
          di(a, c),
          ko(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
      }
    }
    registerSharedNode(s, a) {
      (this.sharedNodes.has(s) || this.sharedNodes.set(s, new EM()),
        this.sharedNodes.get(s).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Eu("z", s, u, this.animationValues);
      for (let c = 0; c < Su.length; c++)
        (Eu(`rotate${Su[c]}`, s, u, this.animationValues),
          Eu(`skew${Su[c]}`, s, u, this.animationValues));
      s.render();
      for (const c in u)
        (s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]));
      s.scheduleRender();
    }
    applyProjectionStyles(s, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        s.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (s.visibility = ""),
          (s.opacity = ""),
          (s.pointerEvents = ua(a == null ? void 0 : a.pointerEvents) || ""),
          (s.transform = l ? l(this.latestValues, "") : "none"));
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        (this.options.layoutId &&
          ((s.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (s.pointerEvents = ua(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !gr(this.latestValues) &&
            ((s.transform = l ? l({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      s.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = hM(this.projectionDeltaWithTransform, this.treeScale, c);
      (l && (d = l(c, d)), (s.transform = d));
      const { x: f, y: h } = this.projectionDelta;
      ((s.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`),
        u.animationValues
          ? (s.opacity =
              u === this
                ? (c.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : c.opacityExit)
          : (s.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ""
                : c.opacityExit !== void 0
                  ? c.opacityExit
                  : 0));
      for (const v in id) {
        if (c[v] === void 0) continue;
        const { correct: g, applyTo: w, isCSSVariable: m } = id[v],
          p = d === "none" ? c[v] : g(c[v], u);
        if (w) {
          const y = w.length;
          for (let S = 0; S < y; S++) s[w[S]] = p;
        } else
          m ? (this.options.visualElement.renderState.vars[v] = p) : (s[v] = p);
      }
      this.options.layoutId &&
        (s.pointerEvents =
          u === this ? ua(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(Um),
        this.root.sharedNodes.clear());
    }
  };
}
function PM(e) {
  e.updateLayout();
}
function bM(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = t.source !== e.layout.source;
    if (o === "size")
      Wt((d) => {
        const f = s ? t.measuredBox[d] : t.layoutBox[d],
          h = Ue(f);
        ((f.min = r[d].min), (f.max = f.min + h));
      });
    else if (o === "x" || o === "y") {
      const d = o === "x" ? "y" : "x";
      od(s ? t.measuredBox[d] : t.layoutBox[d], r[d]);
    } else
      Ix(o, t.layoutBox, r) &&
        Wt((d) => {
          const f = s ? t.measuredBox[d] : t.layoutBox[d],
            h = Ue(r[d]);
          ((f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + h)));
        });
    const a = ui();
    ko(a, r, t.layoutBox);
    const l = ui();
    s ? ko(l, e.applyTransform(i, !0), t.measuredBox) : ko(l, r, t.layoutBox);
    const u = !Mx(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const v = Se();
          Qa(v, t.layoutBox, f.layoutBox);
          const g = Se();
          (Qa(g, r, h.layoutBox),
            Nx(v, g) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = d)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function kM(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function RM(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function AM(e) {
  e.clearSnapshot();
}
function Um(e) {
  e.clearMeasurements();
}
function Wm(e) {
  e.isLayoutDirty = !1;
}
function MM(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function Hm(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function NM(e) {
  e.resolveTargetDelta();
}
function DM(e) {
  e.calcProjection();
}
function LM(e) {
  e.resetSkewAndRotation();
}
function OM(e) {
  e.removeLeadSnapshot();
}
function Km(e, t, n) {
  ((e.translate = fe(t.translate, 0, n)),
    (e.scale = fe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Gm(e, t, n, r) {
  ((e.min = fe(t.min, n.min, r)), (e.max = fe(t.max, n.max, r)));
}
function jM(e, t, n, r) {
  (Gm(e.x, t.x, n.x, r), Gm(e.y, t.y, n.y, r));
}
function IM(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const VM = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Qm = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Ym = Qm("applewebkit/") && !Qm("chrome/") ? Math.round : vt;
function Xm(e) {
  ((e.min = Ym(e.min)), (e.max = Ym(e.max)));
}
function FM(e) {
  (Xm(e.x), Xm(e.y));
}
function Ix(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !aM(Fm(t), Fm(n), 0.2))
  );
}
function _M(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const zM = jx({
    attachResizeListener: (e, t) => Jo(e, "resize", t),
    measureScroll: () => {
      var e, t;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((e = document.body) == null ? void 0 : e.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((t = document.body) == null ? void 0 : t.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  Cu = { current: void 0 },
  Vx = jx({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Cu.current) {
        const e = new zM({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Cu.current = e));
      }
      return Cu.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Fx = x.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function BM(e = !0) {
  const t = x.useContext(Sf);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    o = x.useId();
  x.useEffect(() => {
    if (e) return i(o);
  }, [e]);
  const s = x.useCallback(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const _x = x.createContext({ strict: !1 }),
  qm = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let Zm = !1;
function $M() {
  if (Zm) return;
  const e = {};
  for (const t in qm) e[t] = { isEnabled: (n) => qm[t].some((r) => !!n[r]) };
  (px(e), (Zm = !0));
}
function zx() {
  return ($M(), LA());
}
function UM(e) {
  const t = zx();
  for (const n in e) t[n] = { ...t[n], ...e[n] };
  px(t);
}
const WM = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function Ya(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    WM.has(e)
  );
}
let Bx = (e) => !Ya(e);
function HM(e) {
  typeof e == "function" && (Bx = (t) => (t.startsWith("on") ? !Ya(t) : e(t)));
}
try {
  HM(require("@emotion/is-prop-valid").default);
} catch {}
function KM(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      Ae(e[i]) ||
      ((Bx(i) ||
        (n === !0 && Ya(i)) ||
        (!t && !Ya(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
const Rl = x.createContext({});
function GM(e, t) {
  if (kl(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Zo(n) ? n : void 0,
      animate: Zo(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function QM(e) {
  const { initial: t, animate: n } = GM(e, x.useContext(Rl));
  return x.useMemo(() => ({ initial: t, animate: n }), [Jm(t), Jm(n)]);
}
function Jm(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Gf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function $x(e, t, n) {
  for (const r in t) !Ae(t[r]) && !Sx(r, n) && (e[r] = t[r]);
}
function YM({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = Gf();
    return (Hf(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function XM(e, t) {
  const n = e.style || {},
    r = {};
  return ($x(r, n, e), Object.assign(r, YM(e, t)), r);
}
function qM(e, t) {
  const n = {},
    r = XM(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const Ux = () => ({ ...Gf(), attrs: {} });
function ZM(e, t, n, r) {
  const i = x.useMemo(() => {
    const o = Ux();
    return (
      Ex(o, t, Tx(r), e.transformTemplate, e.style),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    ($x(o, e.style, e), (i.style = { ...o, ...i.style }));
  }
  return i;
}
const JM = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Qf(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(JM.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function eN(e, t, n, { latestValues: r }, i, o = !1, s) {
  const l = ((s ?? Qf(e)) ? ZM : qM)(t, r, i, e),
    u = KM(t, typeof e == "string", o),
    c = e !== x.Fragment ? { ...u, ...l, ref: n } : {},
    { children: d } = t,
    f = x.useMemo(() => (Ae(d) ? d.get() : d), [d]);
  return x.createElement(e, { ...c, children: f });
}
function tN({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: nN(n, r, i, e), renderState: t() };
}
function nN(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const f in o) i[f] = ua(o[f]);
  let { initial: s, animate: a } = e;
  const l = kl(e),
    u = fx(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  if (d && typeof d != "boolean" && !bl(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let h = 0; h < f.length; h++) {
      const v = Vf(e, f[h]);
      if (v) {
        const { transitionEnd: g, transition: w, ...m } = v;
        for (const p in m) {
          let y = m[p];
          if (Array.isArray(y)) {
            const S = c ? y.length - 1 : 0;
            y = y[S];
          }
          y !== null && (i[p] = y);
        }
        for (const p in g) i[p] = g[p];
      }
    }
  }
  return i;
}
const Wx = (e) => (t, n) => {
    const r = x.useContext(Rl),
      i = x.useContext(Sf),
      o = () => tN(e, t, r, i);
    return n ? o() : t2(o);
  },
  rN = Wx({ scrapeMotionValuesFromProps: Kf, createRenderState: Gf }),
  iN = Wx({ scrapeMotionValuesFromProps: Px, createRenderState: Ux }),
  oN = Symbol.for("motionComponentSymbol");
function sN(e, t, n) {
  const r = x.useRef(n);
  x.useInsertionEffect(() => {
    r.current = n;
  });
  const i = x.useRef(null);
  return x.useCallback(
    (o) => {
      var a;
      o && ((a = e.onMount) == null || a.call(e, o));
      const s = r.current;
      if (typeof s == "function")
        if (o) {
          const l = s(o);
          typeof l == "function" && (i.current = l);
        } else i.current ? (i.current(), (i.current = null)) : s(o);
      else s && (s.current = o);
      t && (o ? t.mount(o) : t.unmount());
    },
    [t],
  );
}
const Hx = x.createContext({});
function Qr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function aN(e, t, n, r, i, o) {
  var y, S;
  const { visualElement: s } = x.useContext(Rl),
    a = x.useContext(_x),
    l = x.useContext(Sf),
    u = x.useContext(Fx),
    c = u.reducedMotion,
    d = u.skipAnimations,
    f = x.useRef(null),
    h = x.useRef(!1);
  ((r = r || a.renderer),
    !f.current &&
      r &&
      ((f.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: d,
        isSVG: o,
      })),
      h.current && f.current && (f.current.manuallyAnimateOnMount = !0)));
  const v = f.current,
    g = x.useContext(Hx);
  v &&
    !v.projection &&
    i &&
    (v.type === "html" || v.type === "svg") &&
    lN(f.current, n, i, g);
  const w = x.useRef(!1);
  x.useInsertionEffect(() => {
    v && w.current && v.update(n, l);
  });
  const m = n[Jw],
    p = x.useRef(
      !!m &&
        typeof window < "u" &&
        !((y = window.MotionHandoffIsComplete) != null && y.call(window, m)) &&
        ((S = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : S.call(window, m)),
    );
  return (
    r2(() => {
      ((h.current = !0),
        v &&
          ((w.current = !0),
          (window.MotionIsMounted = !0),
          v.updateFeatures(),
          v.scheduleRenderMicrotask(),
          p.current && v.animationState && v.animationState.animateChanges()));
    }),
    x.useEffect(() => {
      v &&
        (!p.current && v.animationState && v.animationState.animateChanges(),
        p.current &&
          (queueMicrotask(() => {
            var E;
            (E = window.MotionHandoffMarkAsComplete) == null ||
              E.call(window, m);
          }),
          (p.current = !1)),
        (v.enteringChildren = void 0));
    }),
    v
  );
}
function lN(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutCrossfade: c,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Kx(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && Qr(a)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      crossfade: c,
      layoutScroll: l,
      layoutRoot: u,
    }));
}
function Kx(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Kx(e.parent);
}
function Tu(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && UM(r);
  const o = n ? n === "svg" : Qf(e),
    s = o ? iN : rN;
  function a(u, c) {
    let d;
    const f = { ...x.useContext(Fx), ...u, layoutId: uN(u) },
      { isStatic: h } = f,
      v = QM(u),
      g = s(u, h);
    if (!h && typeof window < "u") {
      cN();
      const w = dN(f);
      ((d = w.MeasureLayout),
        (v.visualElement = aN(e, g, f, i, w.ProjectionNode, o)));
    }
    return C.jsxs(Rl.Provider, {
      value: v,
      children: [
        d && v.visualElement
          ? C.jsx(d, { visualElement: v.visualElement, ...f })
          : null,
        eN(e, u, sN(g, v.visualElement, c), g, h, t, o),
      ],
    });
  }
  a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const l = x.forwardRef(a);
  return ((l[oN] = e), l);
}
function uN({ layoutId: e }) {
  const t = x.useContext(fw).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function cN(e, t) {
  x.useContext(_x).strict;
}
function dN(e) {
  const t = zx(),
    { drag: n, layout: r } = t;
  if (!n && !r) return {};
  const i = { ...n, ...r };
  return {
    MeasureLayout:
      (n != null && n.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? i.MeasureLayout
        : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
function fN(e, t) {
  if (typeof Proxy > "u") return Tu;
  const n = new Map(),
    r = (o, s) => Tu(o, s, e, t),
    i = (o, s) => r(o, s);
  return new Proxy(i, {
    get: (o, s) =>
      s === "create"
        ? r
        : (n.has(s) || n.set(s, Tu(s, void 0, e, t)), n.get(s)),
  });
}
const hN = (e, t) =>
  (t.isSVG ?? Qf(e))
    ? new XA(t)
    : new WA(t, { allowProjection: e !== x.Fragment });
class pN extends ur {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = tM(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    bl(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this));
  }
}
let mN = 0;
class gN extends ur {
  constructor() {
    (super(...arguments), (this.id = mN++), (this.isExitComplete = !1));
  }
  update() {
    var o;
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    if (t && r === !1) {
      if (this.isExitComplete) {
        const { initial: s, custom: a } = this.node.getProps();
        if (typeof s == "string") {
          const l = Nr(this.node, s, a);
          if (l) {
            const { transition: u, transitionEnd: c, ...d } = l;
            for (const f in d)
              (o = this.node.getValue(f)) == null || o.jump(d[f]);
          }
        }
        (this.node.animationState.reset(),
          this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const i = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      i.then(() => {
        ((this.isExitComplete = !0), n(this.id));
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), t && (this.unmount = t(this.id)));
  }
  unmount() {}
}
const yN = { animation: { Feature: pN }, exit: { Feature: gN } };
function hs(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const vN = (e) => (t) => Bf(t) && e(t, hs(t));
function Ro(e, t, n, r) {
  return Jo(e, t, vN(n), r);
}
const Gx = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  eg = (e, t) => Math.abs(e - t);
function wN(e, t) {
  const n = eg(e.x, t.x),
    r = eg(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const tg = new Set(["auto", "scroll"]);
class Qx {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: i = window,
      dragSnapToOrigin: o = !1,
      distanceThreshold: s = 3,
      element: a,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (h) => {
        this.handleScroll(h.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = $s(
            this.lastRawMoveEventInfo,
            this.transformPagePoint,
          ));
        const h = Pu(this.lastMoveEventInfo, this.history),
          v = this.startEvent !== null,
          g = wN(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!v && !g) return;
        const { point: w } = h,
          { timestamp: m } = Re;
        this.history.push({ ...w, timestamp: m });
        const { onStart: p, onMove: y } = this.handlers;
        (v ||
          (p && p(this.lastMoveEvent, h),
          (this.startEvent = this.lastMoveEvent)),
          y && y(this.lastMoveEvent, h));
      }),
      (this.handlePointerMove = (h, v) => {
        ((this.lastMoveEvent = h),
          (this.lastRawMoveEventInfo = v),
          (this.lastMoveEventInfo = $s(v, this.transformPagePoint)),
          ie.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (h, v) => {
        this.end();
        const { onEnd: g, onSessionEnd: w, resumeAnimation: m } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && m && m(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const p = Pu(
          h.type === "pointercancel"
            ? this.lastMoveEventInfo
            : $s(v, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && g && g(h, p), w && w(h, p));
      }),
      !Bf(t))
    )
      return;
    ((this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = s),
      (this.contextWindow = i || window));
    const l = hs(t),
      u = $s(l, this.transformPagePoint),
      { point: c } = u,
      { timestamp: d } = Re;
    this.history = [{ ...c, timestamp: d }];
    const { onSessionStart: f } = n;
    (f && f(t, Pu(u, this.history)),
      (this.removeListeners = cs(
        Ro(this.contextWindow, "pointermove", this.handlePointerMove),
        Ro(this.contextWindow, "pointerup", this.handlePointerUp),
        Ro(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      a && this.startScrollTracking(a));
  }
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n; ) {
      const r = getComputedStyle(n);
      ((tg.has(r.overflowX) || tg.has(r.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(t) {
    const n = this.scrollPositions.get(t);
    if (!n) return;
    const r = t === window,
      i = r
        ? { x: window.scrollX, y: window.scrollY }
        : { x: t.scrollLeft, y: t.scrollTop },
      o = { x: i.x - n.x, y: i.y - n.y };
    (o.x === 0 && o.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += o.x),
          (this.lastMoveEventInfo.point.y += o.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= o.x), (this.history[0].y -= o.y)),
      this.scrollPositions.set(t, i),
      ie.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      or(this.updatePoint));
  }
}
function $s(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ng(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Pu({ point: e }, t) {
  return {
    point: e,
    delta: ng(e, Yx(t)),
    offset: ng(e, xN(t)),
    velocity: SN(t, 0.1),
  };
}
function xN(e) {
  return e[0];
}
function Yx(e) {
  return e[e.length - 1];
}
function SN(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Yx(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Je(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    i.timestamp - r.timestamp > Je(t) * 2 &&
    (r = e[1]);
  const o = gt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return (s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s);
}
function EN(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? fe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? fe(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function rg(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function CN(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: rg(e.x, n, i), y: rg(e.y, t, r) };
}
function ig(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function TN(e, t) {
  return { x: ig(e.x, t.x), y: ig(e.y, t.y) };
}
function PN(e, t) {
  let n = 0.5;
  const r = Ue(e),
    i = Ue(t);
  return (
    i > r
      ? (n = Xo(t.min, t.max - r, e.min))
      : r > i && (n = Xo(e.min, e.max - i, t.min)),
    tn(0, 1, n)
  );
}
function bN(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const sd = 0.35;
function kN(e = sd) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = sd),
    { x: og(e, "left", "right"), y: og(e, "top", "bottom") }
  );
}
function og(e, t, n) {
  return { min: sg(e, t), max: sg(e, n) };
}
function sg(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const RN = new WeakMap();
class AN {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Se()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const o = (d) => {
        (n && this.snapToCursor(hs(d).point), this.stopAnimation());
      },
      s = (d, f) => {
        const { drag: h, dragPropagation: v, onDragStart: g } = this.getProps();
        if (
          h &&
          !v &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = uA(h)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Wt((m) => {
            let p = this.getAxisMotionValue(m).get() || 0;
            if (Jt.test(p)) {
              const { projection: y } = this.visualElement;
              if (y && y.layout) {
                const S = y.layout.layoutBox[m];
                S && (p = Ue(S) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[m] = p;
          }),
          g && ie.update(() => g(d, f), !1, !0),
          qc(this.visualElement, "transform"));
        const { animationState: w } = this.visualElement;
        w && w.setActive("whileDrag", !0);
      },
      a = (d, f) => {
        ((this.latestPointerEvent = d), (this.latestPanInfo = f));
        const {
          dragPropagation: h,
          dragDirectionLock: v,
          onDirectionLock: g,
          onDrag: w,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: m } = f;
        if (v && this.currentDirection === null) {
          ((this.currentDirection = NN(m)),
            this.currentDirection !== null && g && g(this.currentDirection));
          return;
        }
        (this.updateAxis("x", f.point, m),
          this.updateAxis("y", f.point, m),
          this.visualElement.render(),
          w && ie.update(() => w(d, f), !1, !0));
      },
      l = (d, f) => {
        ((this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          this.stop(d, f),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      u = () => {
        const { dragSnapToOrigin: d } = this.getProps();
        (d || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Qx(
      t,
      {
        onSessionStart: o,
        onStart: s,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: Gx(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      o = this.isDragging;
    if ((this.cancel(), !o || !i || !r)) return;
    const { velocity: s } = i;
    this.startAnimation(s);
    const { onDragEnd: a } = this.getProps();
    a && ie.postRender(() => a(r, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Us(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (s = EN(s, this.constraints[t], this.elastic[t])),
      o.set(s));
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (o = this.visualElement.projection) == null
            ? void 0
            : o.layout,
      i = this.constraints;
    (t && Qr(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
        ? (this.constraints = CN(r.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = kN(n)),
      i !== this.constraints &&
        !Qr(t) &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Wt((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = bN(r.layoutBox[s], this.constraints[s]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Qr(t)) return !1;
    const r = t.current;
    Fi(
      r !== null,
      "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
      "drag-constraints-ref",
    );
    const { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = FA(r, i.root, this.visualElement.getTransformPagePoint());
    let s = TN(i.layout.layoutBox, o);
    if (n) {
      const a = n(jA(s));
      ((this.hasMutatedConstraints = !!a), a && (s = gx(a)));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Wt((c) => {
        if (!Us(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        (s === !0 || s === c) && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      qc(this.visualElement, t),
      r.start(If(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Wt((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Wt((n) => {
      const { drag: r } = this.getProps();
      if (!Us(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n],
          l = o.get() || 0;
        o.set(t[n] - fe(s, a, 0.5) + l);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Qr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Wt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = PN({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      Wt((s) => {
        if (!Us(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(fe(l, u, i[s]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    RN.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Ro(t, "pointerdown", (u) => {
        const { drag: c, dragListener: d = !0 } = this.getProps(),
          f = u.target,
          h = f !== t && mA(f);
        c && d && !h && this.start(u);
      });
    let r;
    const i = () => {
        const { dragConstraints: u } = this.getProps();
        Qr(u) &&
          u.current &&
          ((this.constraints = this.resolveRefConstraints()),
          r ||
            (r = MN(t, u.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: o } = this.visualElement,
      s = o.addEventListener("measure", i);
    (o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      ie.read(i));
    const a = Jo(window, "resize", () => this.scalePositionWithinConstraints()),
      l = o.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (Wt((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += u[d].translate),
                f.set(f.get() + u[d].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (a(), n(), s(), l && l(), r && r());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = sd,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function ag(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function MN(e, t, n) {
  const r = gm(e, ag(n)),
    i = gm(t, ag(n));
  return () => {
    (r(), i());
  };
}
function Us(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function NN(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class DN extends ur {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = vt),
      (this.removeListeners = vt),
      (this.controls = new AN(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || vt));
  }
  update() {
    const { dragControls: t } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    t !== n &&
      (this.removeGroupControls(),
      t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const bu = (e) => (t, n) => {
  e && ie.update(() => e(t, n), !1, !0);
};
class LN extends ur {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = vt));
  }
  onPointerDown(t) {
    this.session = new Qx(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Gx(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: bu(t),
      onStart: bu(n),
      onMove: bu(r),
      onEnd: (o, s) => {
        (delete this.session, i && ie.postRender(() => i(o, s)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ro(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let ku = !1;
class ON extends x.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    (o &&
      (n.group && n.group.add(o),
      r && r.register && i && r.register(o),
      ku && o.root.didUpdate(),
      o.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      o.setOptions({
        ...o.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (ca.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      { projection: s } = r;
    return (
      s &&
        ((s.isPresent = o),
        t.layoutDependency !== n &&
          s.setOptions({ ...s.options, layoutDependency: n }),
        (ku = !0),
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== o
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              ie.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      zf.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    ((ku = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i)));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Xx(e) {
  const [t, n] = BM(),
    r = x.useContext(fw);
  return C.jsx(ON, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: x.useContext(Hx),
    isPresent: t,
    safeToRemove: n,
  });
}
const jN = {
  pan: { Feature: LN },
  drag: { Feature: DN, ProjectionNode: Vx, MeasureLayout: Xx },
};
function lg(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    o = r[i];
  o && ie.postRender(() => o(t, hs(t)));
}
class IN extends ur {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = dA(
        t,
        (n, r) => (lg(this.node, r, "Start"), (i) => lg(this.node, i, "End")),
      ));
  }
  unmount() {}
}
class VN extends ur {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = cs(
      Jo(this.node.current, "focus", () => this.onFocus()),
      Jo(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function ug(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    o = r[i];
  o && ie.postRender(() => o(t, hs(t)));
}
class FN extends ur {
  mount() {
    const { current: t } = this.node;
    if (!t) return;
    const { globalTapTarget: n, propagate: r } = this.node.props;
    this.unmount = yA(
      t,
      (i, o) => (
        ug(this.node, o, "Start"),
        (s, { success: a }) => ug(this.node, s, a ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: n,
        stopPropagation: (r == null ? void 0 : r.tap) === !1,
      },
    );
  }
  unmount() {}
}
const ad = new WeakMap(),
  Ru = new WeakMap(),
  _N = (e) => {
    const t = ad.get(e.target);
    t && t(e);
  },
  zN = (e) => {
    e.forEach(_N);
  };
function BN({ root: e, ...t }) {
  const n = e || document;
  Ru.has(n) || Ru.set(n, {});
  const r = Ru.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(zN, { root: e, ...t })),
    r[i]
  );
}
function $N(e, t, n) {
  const r = BN(t);
  return (
    ad.set(e, n),
    r.observe(e),
    () => {
      (ad.delete(e), r.unobserve(e));
    }
  );
}
const UN = { some: 0, all: 1 };
class WN extends ur {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : UN[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u));
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return $N(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(HN(t, n)) && this.startObserver();
  }
  unmount() {}
}
function HN({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const KN = {
    inView: { Feature: WN },
    tap: { Feature: FN },
    focus: { Feature: VN },
    hover: { Feature: IN },
  },
  GN = { layout: { ProjectionNode: Vx, MeasureLayout: Xx } },
  QN = { ...yN, ...KN, ...jN, ...GN },
  pt = fN(QN, hN),
  qx = "/assets/logo-full-UuzH2qty.png",
  YN = () => {
    const [e, t] = x.useState(!1),
      [n, r] = x.useState(!1);
    x.useEffect(() => {
      const o = () => t(window.scrollY > 50);
      return (
        window.addEventListener("scroll", o),
        () => window.removeEventListener("scroll", o)
      );
    }, []);
    const i = [
      { href: "#projects", label: "Projects" },
      { href: "#services", label: "Services" },
      { href: "#contact", label: "Contact" },
    ];
    return C.jsxs(pt.nav, {
      initial: { y: -100 },
      animate: { y: 0 },
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"}`,
      children: [
        C.jsxs("div", {
          className:
            "container mx-auto px-6 flex items-center justify-between h-18 py-3",
          children: [
            C.jsx("a", {
              href: "#",
              children: C.jsx("img", {
                src: qx,
                alt: "Prime Techno Works",
                className: "h-10 md:h-12",
              }),
            }),
            C.jsxs("div", {
              className: "hidden md:flex items-center gap-8",
              children: [
                i.map((o) =>
                  C.jsx(
                    "a",
                    {
                      href: o.href,
                      className:
                        "text-muted-foreground hover:text-primary transition-colors text-sm font-medium",
                      children: o.label,
                    },
                    o.href,
                  ),
                ),
                C.jsx("a", {
                  href: "#contact",
                  className:
                    "px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-opacity",
                  children: "Contact Us",
                }),
              ],
            }),
            C.jsx("button", {
              onClick: () => r(!n),
              className: "md:hidden text-foreground",
              children: n
                ? C.jsx(P0, { className: "w-6 h-6" })
                : C.jsx(AP, { className: "w-6 h-6" }),
            }),
          ],
        }),
        n &&
          C.jsxs("div", {
            className:
              "md:hidden bg-card border-t border-border px-6 py-4 space-y-3",
            children: [
              i.map((o) =>
                C.jsx(
                  "a",
                  {
                    href: o.href,
                    onClick: () => r(!1),
                    className:
                      "block text-muted-foreground hover:text-primary transition-colors",
                    children: o.label,
                  },
                  o.href,
                ),
              ),
              C.jsx("a", {
                href: "#contact",
                onClick: () => r(!1),
                className:
                  "block px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full text-center",
                children: "Contact Us",
              }),
            ],
          }),
      ],
    });
  },
  XN = () =>
    C.jsxs("section", {
      className:
        "relative min-h-screen flex items-center justify-center overflow-hidden",
      children: [
        C.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-br from-accent/40 via-background to-secondary/50",
        }),
        C.jsx("div", {
          className:
            "absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl",
        }),
        C.jsx("div", {
          className:
            "absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl",
        }),
        C.jsxs("div", {
          className: "relative z-10 container mx-auto px-6 text-center pt-20",
          children: [
            C.jsx(pt.p, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              className:
                "text-primary font-mono text-sm tracking-[0.3em] uppercase mb-6",
              children: "We Build What You Imagine",
            }),
            C.jsxs(pt.h1, {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2 },
              className:
                "text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-foreground",
              children: [
                "We Code",
                " ",
                C.jsxs("span", {
                  className: "relative inline-block",
                  children: [
                    C.jsx("span", {
                      className: "gradient-text",
                      children: "Ideas",
                    }),
                    C.jsx("span", {
                      className:
                        "absolute -bottom-2 left-0 right-0 h-3 bg-primary/20 rounded-full -z-10",
                    }),
                  ],
                }),
                C.jsx("br", {}),
                "That Empower",
                " ",
                C.jsxs("span", {
                  className: "relative inline-block",
                  children: [
                    C.jsx("span", {
                      className: "gradient-text",
                      children: "Brands",
                    }),
                    C.jsx("span", {
                      className:
                        "absolute -bottom-2 left-0 right-0 h-3 bg-primary/20 rounded-full -z-10",
                    }),
                  ],
                }),
              ],
            }),
            C.jsx(pt.p, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.4 },
              className:
                "text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10",
              children:
                "At Prime Techno Works, we turn ideas into high-performing websites and mobile apps. Our team creates seamless digital experiences that help businesses grow.",
            }),
            C.jsxs(pt.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.6 },
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [
                C.jsx("a", {
                  href: "#projects",
                  className:
                    "inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity",
                  children: "View Our Work",
                }),
                C.jsx("a", {
                  href: "#contact",
                  className:
                    "inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:border-primary/50 transition-colors",
                  children: "Get In Touch",
                }),
              ],
            }),
            C.jsx(pt.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.8, delay: 1 },
              className: "mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto",
              children: [
                { number: "50+", label: "Projects" },
                { number: "6+", label: "Countries" },
                { number: "100%", label: "Satisfaction" },
              ].map((e) =>
                C.jsxs(
                  "div",
                  {
                    children: [
                      C.jsx("div", {
                        className:
                          "text-3xl md:text-4xl font-extrabold text-primary",
                        children: e.number,
                      }),
                      C.jsx("div", {
                        className: "text-muted-foreground text-sm mt-1",
                        children: e.label,
                      }),
                    ],
                  },
                  e.label,
                ),
              ),
            }),
          ],
        }),
        C.jsx(pt.div, {
          animate: { y: [0, 10, 0] },
          transition: { duration: 2, repeat: 1 / 0 },
          className: "absolute bottom-8 left-1/2 -translate-x-1/2",
          children: C.jsx("div", {
            className:
              "w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2",
            children: C.jsx("div", {
              className: "w-1 h-2 bg-primary rounded-full",
            }),
          }),
        }),
      ],
    }),
  qN = ({
    title: e,
    description: t,
    category: n,
    url: r,
    screenshotUrl: i,
    index: o,
  }) =>
    C.jsxs(pt.a, {
      href: r,
      target: "_blank",
      rel: "noopener noreferrer",
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0, margin: "-50px" },
      transition: { duration: 0.6, delay: o * 0.1 },
      className:
        "group block bg-card rounded-2xl overflow-hidden border border-border card-hover cursor-pointer",
      children: [
        C.jsxs("div", {
          className: "relative overflow-hidden aspect-video",
          children: [
            C.jsx("img", {
              src: i,
              alt: `${e} website screenshot`,
              className:
                "w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105",
            }),
            C.jsx("div", {
              className:
                "absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
              children: C.jsxs("span", {
                className:
                  "flex items-center gap-2 text-primary-foreground font-semibold",
                children: ["Visit Site ", C.jsx(PP, { className: "w-4 h-4" })],
              }),
            }),
          ],
        }),
        C.jsxs("div", {
          className: "p-6",
          children: [
            C.jsx("span", {
              className:
                "text-primary font-mono text-xs tracking-widest uppercase",
              children: n,
            }),
            C.jsx("h3", {
              className: "text-xl font-bold text-foreground mt-2",
              children: e,
            }),
            C.jsx("p", {
              className: "text-muted-foreground text-sm mt-2 line-clamp-2",
              children: t,
            }),
          ],
        }),
      ],
    }),
  ZN = "/assets/autoid-Bzq9m9hQ.png",
  JN = "/assets/zaero-dX73OzHo.png",
  eD = "/assets/osmotics-BAkUAkPn.png",
  tD = "/assets/silverbird-CM29cFG6.png",
  nD = "/assets/takasho-BCO5GM21.png",
  rD = "/assets/betakuwait-B08vhp9F.png",
  iD = [
    {
      title: "AutoID",
      description:
        "Premium automotive carbon fibre parts e-commerce store with international shipping and multi-currency support.",
      category: "E-Commerce / Automotive",
      url: "https://autoid.co/",
      screenshotUrl: ZN,
    },
    {
      title: "Zaero Design UK",
      description:
        "High-end automotive aftermarket parts and accessories store featuring BMW, Hyundai, and Volkswagen products.",
      category: "E-Commerce / Automotive",
      url: "https://www.zaero-design.co.uk/",
      screenshotUrl: JN,
    },
    {
      title: "Osmotics Cosmeceuticals",
      description:
        "Award-winning skincare brand's e-commerce platform with subscription support and rewards program.",
      category: "E-Commerce / Beauty",
      url: "https://osmotics.com/",
      screenshotUrl: eD,
    },
    {
      title: "Silver Bird Jewells",
      description:
        "Luxury men's jewelry e-commerce featuring rings, pendants, cufflinks, and masterpiece collections.",
      category: "E-Commerce / Jewelry",
      url: "https://silverbirdjewells.com/",
      screenshotUrl: tD,
    },
    {
      title: "Takasho India",
      description:
        "Japanese garden living brand's product showcase and online store for home and professional use.",
      category: "E-Commerce / Garden & Living",
      url: "https://takasho.in/",
      screenshotUrl: nD,
    },
    {
      title: "Beta Kuwait (Rullart)",
      description:
        "Elegant gift and accessories store serving Kuwait with artisanal craftsmanship and bilingual support.",
      category: "E-Commerce / Gifts & Accessories",
      url: "https://betakuwait.techiebrothers.in/en",
      screenshotUrl: rD,
    },
  ],
  oD = () =>
    C.jsx("section", {
      id: "projects",
      className: "py-24 md:py-32",
      children: C.jsxs("div", {
        className: "container mx-auto px-6",
        children: [
          C.jsxs(pt.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            className: "text-center mb-16",
            children: [
              C.jsx("p", {
                className:
                  "text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4",
                children: "Portfolio",
              }),
              C.jsxs("h2", {
                className: "text-4xl md:text-5xl font-bold text-foreground",
                children: [
                  "Our ",
                  C.jsx("span", {
                    className: "gradient-text",
                    children: "Recent Work",
                  }),
                ],
              }),
              C.jsx("p", {
                className: "text-muted-foreground mt-4 max-w-xl mx-auto",
                children:
                  "From automotive parts to luxury jewelry â€” we deliver tailored digital solutions across industries.",
              }),
            ],
          }),
          C.jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: iD.map((e, t) => C.jsx(qN, { ...e, index: t }, e.title)),
          }),
        ],
      }),
    }),
  sD = [
    {
      icon: DP,
      title: "E-Commerce Solutions",
      description: "Shopify, WooCommerce & custom stores built for conversion.",
    },
    {
      icon: MP,
      title: "Branding & UI/UX",
      description:
        "Stunning interfaces that delight users and drive engagement.",
    },
    {
      icon: TP,
      title: "Web & Tech Development",
      description: "Bespoke web applications tailored to your business needs.",
    },
    {
      icon: bP,
      title: "App Development",
      description: "Cross-platform mobile apps that reach users everywhere.",
    },
    {
      icon: NP,
      title: "SEO",
      description:
        "Data-driven strategies to boost visibility and organic traffic.",
    },
    {
      icon: kP,
      title: "Ongoing Support",
      description: "Dedicated maintenance and support to keep you running.",
    },
  ],
  aD = () =>
    C.jsx("section", {
      id: "services",
      className: "py-24 md:py-32 section-gradient",
      children: C.jsxs("div", {
        className: "container mx-auto px-6",
        children: [
          C.jsxs(pt.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            className: "text-center mb-16",
            children: [
              C.jsx("p", {
                className:
                  "text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4",
                children: "What We Do",
              }),
              C.jsxs("h2", {
                className:
                  "text-4xl md:text-5xl font-extrabold text-foreground",
                children: [
                  "Our ",
                  C.jsx("span", {
                    className: "gradient-text",
                    children: "Services",
                  }),
                ],
              }),
            ],
          }),
          C.jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: sD.map((e, t) =>
              C.jsxs(
                pt.div,
                {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.5, delay: t * 0.1 },
                  className:
                    "bg-card border border-border rounded-2xl p-8 card-hover",
                  children: [
                    C.jsx("div", {
                      className:
                        "w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4",
                      children: C.jsx(e.icon, {
                        className: "w-6 h-6 text-primary",
                      }),
                    }),
                    C.jsx("h3", {
                      className: "text-lg font-bold text-foreground mb-2",
                      children: e.title,
                    }),
                    C.jsx("p", {
                      className: "text-muted-foreground text-sm",
                      children: e.description,
                    }),
                  ],
                },
                e.title,
              ),
            ),
          }),
        ],
      }),
    }),
  lD = () =>
    C.jsx("section", {
      id: "contact",
      className: "py-24 md:py-32",
      children: C.jsx("div", {
        className: "container mx-auto px-6",
        children: C.jsxs(pt.div, {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          className: "max-w-3xl mx-auto text-center",
          children: [
            C.jsx("div", {
              className:
                "w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6",
              children: C.jsx(RP, { className: "w-8 h-8 text-primary" }),
            }),
            C.jsxs("h2", {
              className:
                "text-4xl md:text-5xl font-extrabold text-foreground mb-4",
              children: [
                "Let's Build Something ",
                C.jsx("span", {
                  className: "gradient-text",
                  children: "Amazing",
                }),
              ],
            }),
            C.jsx("p", {
              className: "text-muted-foreground text-lg mb-10",
              children:
                "Ready to transform your digital presence? Get in touch and let's discuss your next project.",
            }),
            C.jsxs("a", {
              href: "https://primetechnoworks.com/contact-us.html",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-lg",
              children: [
                "Start a Project ",
                C.jsx(CP, { className: "w-5 h-5" }),
              ],
            }),
          ],
        }),
      }),
    }),
  uD = () =>
    C.jsx("footer", {
      className: "border-t border-border py-8 bg-card",
      children: C.jsxs("div", {
        className:
          "container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4",
        children: [
          C.jsx("img", {
            src: qx,
            alt: "Prime Techno Works",
            className: "h-8",
          }),
          C.jsxs("p", {
            className: "text-muted-foreground text-sm",
            children: [
              "Â© ",
              new Date().getFullYear(),
              " Prime Techno Works. All rights reserved.",
            ],
          }),
        ],
      }),
    }),
  cD = () =>
    C.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        C.jsx(YN, {}),
        C.jsx(XN, {}),
        C.jsx(oD, {}),
        C.jsx(aD, {}),
        C.jsx(lD, {}),
        C.jsx(uD, {}),
      ],
    }),
  dD = () => {
    const e = Yv();
    return (
      x.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname,
        );
      }, [e.pathname]),
      C.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: C.jsxs("div", {
          className: "text-center",
          children: [
            C.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            C.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            C.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  fD = new tC(),
  hD = () =>
    C.jsx(rC, {
      client: fD,
      children: C.jsxs(Jk, {
        children: [
          C.jsx(pb, {}),
          C.jsx(xT, {}),
          C.jsx($C, {
            children: C.jsxs(_C, {
              children: [
                C.jsx(Pc, { path: "/", element: C.jsx(cD, {}) }),
                C.jsx(Pc, { path: "*", element: C.jsx(dD, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
Lv(document.getElementById("root")).render(C.jsx(hD, {}));
