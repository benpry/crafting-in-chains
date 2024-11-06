(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function uh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Qc = { exports: {} },
  Ai = {},
  Xc = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ro = Symbol.for("react.element"),
  ah = Symbol.for("react.portal"),
  ch = Symbol.for("react.fragment"),
  dh = Symbol.for("react.strict_mode"),
  fh = Symbol.for("react.profiler"),
  ph = Symbol.for("react.provider"),
  hh = Symbol.for("react.context"),
  mh = Symbol.for("react.forward_ref"),
  gh = Symbol.for("react.suspense"),
  vh = Symbol.for("react.memo"),
  yh = Symbol.for("react.lazy"),
  da = Symbol.iterator;
function wh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (da && e[da]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Yc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qc = Object.assign,
  Jc = {};
function er(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Jc),
    (this.updater = n || Yc);
}
er.prototype.isReactComponent = {};
er.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
er.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gc() {}
Gc.prototype = er.prototype;
function Ks(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Jc),
    (this.updater = n || Yc);
}
var Qs = (Ks.prototype = new Gc());
Qs.constructor = Ks;
qc(Qs, er.prototype);
Qs.isPureReactComponent = !0;
var fa = Array.isArray,
  Zc = Object.prototype.hasOwnProperty,
  Xs = { current: null },
  ed = { key: !0, ref: !0, __self: !0, __source: !0 };
function td(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Zc.call(t, r) && !ed.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: ro,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Xs.current,
  };
}
function Sh(e, t) {
  return {
    $$typeof: ro,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ys(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ro;
}
function Eh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var pa = /\/+/g;
function ul(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Eh("" + e.key)
    : t.toString(36);
}
function Uo(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ro:
          case ah:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + ul(l, 0) : r),
      fa(o)
        ? ((n = ""),
          e != null && (n = e.replace(pa, "$&/") + "/"),
          Uo(o, t, n, "", function (a) {
            return a;
          }))
        : o != null &&
          (Ys(o) &&
            (o = Sh(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(pa, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), fa(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + ul(i, s);
      l += Uo(i, t, n, u, o);
    }
  else if (((u = wh(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + ul(i, s++)), (l += Uo(i, t, n, u, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return l;
}
function Eo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Uo(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function xh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
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
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ee = { current: null },
  Bo = { transition: null },
  kh = {
    ReactCurrentDispatcher: Ee,
    ReactCurrentBatchConfig: Bo,
    ReactCurrentOwner: Xs,
  };
function nd() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: Eo,
  forEach: function (e, t, n) {
    Eo(
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
      Eo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Eo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ys(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
F.Component = er;
F.Fragment = ch;
F.Profiler = fh;
F.PureComponent = Ks;
F.StrictMode = dh;
F.Suspense = gh;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kh;
F.act = nd;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = qc({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Xs.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Zc.call(t, u) &&
        !ed.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: ro, type: e.type, key: o, ref: i, props: r, _owner: l };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: hh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ph, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = td;
F.createFactory = function (e) {
  var t = td.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: mh, render: e };
};
F.isValidElement = Ys;
F.lazy = function (e) {
  return { $$typeof: yh, _payload: { _status: -1, _result: e }, _init: xh };
};
F.memo = function (e, t) {
  return { $$typeof: vh, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Bo.transition;
  Bo.transition = {};
  try {
    e();
  } finally {
    Bo.transition = t;
  }
};
F.unstable_act = nd;
F.useCallback = function (e, t) {
  return Ee.current.useCallback(e, t);
};
F.useContext = function (e) {
  return Ee.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return Ee.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return Ee.current.useEffect(e, t);
};
F.useId = function () {
  return Ee.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return Ee.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return Ee.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return Ee.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return Ee.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return Ee.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return Ee.current.useRef(e);
};
F.useState = function (e) {
  return Ee.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return Ee.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return Ee.current.useTransition();
};
F.version = "18.3.1";
Xc.exports = F;
var E = Xc.exports;
const G = uh(E);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ch = E,
  Rh = Symbol.for("react.element"),
  Nh = Symbol.for("react.fragment"),
  Th = Object.prototype.hasOwnProperty,
  _h = Ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Dh = { key: !0, ref: !0, __self: !0, __source: !0 };
function rd(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Th.call(t, r) && !Dh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Rh,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: _h.current,
  };
}
Ai.Fragment = Nh;
Ai.jsx = rd;
Ai.jsxs = rd;
Qc.exports = Ai;
var j = Qc.exports,
  od = { exports: {} },
  Be = {},
  id = { exports: {} },
  ld = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, L) {
    var A = D.length;
    D.push(L);
    e: for (; 0 < A; ) {
      var b = (A - 1) >>> 1,
        B = D[b];
      if (0 < o(B, L)) (D[b] = L), (D[A] = B), (A = b);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var L = D[0],
      A = D.pop();
    if (A !== L) {
      D[0] = A;
      e: for (var b = 0, B = D.length, Je = B >>> 1; b < Je; ) {
        var He = 2 * (b + 1) - 1,
          xn = D[He],
          ne = He + 1,
          Gt = D[ne];
        if (0 > o(xn, A))
          ne < B && 0 > o(Gt, xn)
            ? ((D[b] = Gt), (D[ne] = A), (b = ne))
            : ((D[b] = xn), (D[He] = A), (b = He));
        else if (ne < B && 0 > o(Gt, A)) (D[b] = Gt), (D[ne] = A), (b = ne);
        else break e;
      }
    }
    return L;
  }
  function o(D, L) {
    var A = D.sortIndex - L.sortIndex;
    return A !== 0 ? A : D.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var u = [],
    a = [],
    c = 1,
    f = null,
    m = 3,
    y = !1,
    v = !1,
    g = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(D) {
    for (var L = n(a); L !== null; ) {
      if (L.callback === null) r(a);
      else if (L.startTime <= D)
        r(a), (L.sortIndex = L.expirationTime), t(u, L);
      else break;
      L = n(a);
    }
  }
  function x(D) {
    if (((g = !1), h(D), !v))
      if (n(u) !== null) (v = !0), En(w);
      else {
        var L = n(a);
        L !== null && Le(x, L.startTime - D);
      }
  }
  function w(D, L) {
    (v = !1), g && ((g = !1), p(N), (N = -1)), (y = !0);
    var A = m;
    try {
      for (
        h(L), f = n(u);
        f !== null && (!(f.expirationTime > L) || (D && !M()));

      ) {
        var b = f.callback;
        if (typeof b == "function") {
          (f.callback = null), (m = f.priorityLevel);
          var B = b(f.expirationTime <= L);
          (L = e.unstable_now()),
            typeof B == "function" ? (f.callback = B) : f === n(u) && r(u),
            h(L);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var Je = !0;
      else {
        var He = n(a);
        He !== null && Le(x, He.startTime - L), (Je = !1);
      }
      return Je;
    } finally {
      (f = null), (m = A), (y = !1);
    }
  }
  var R = !1,
    k = null,
    N = -1,
    _ = 5,
    P = -1;
  function M() {
    return !(e.unstable_now() - P < _);
  }
  function le() {
    if (k !== null) {
      var D = e.unstable_now();
      P = D;
      var L = !0;
      try {
        L = k(!0, D);
      } finally {
        L ? ee() : ((R = !1), (k = null));
      }
    } else R = !1;
  }
  var ee;
  if (typeof d == "function")
    ee = function () {
      d(le);
    };
  else if (typeof MessageChannel < "u") {
    var Pe = new MessageChannel(),
      mo = Pe.port2;
    (Pe.port1.onmessage = le),
      (ee = function () {
        mo.postMessage(null);
      });
  } else
    ee = function () {
      C(le, 0);
    };
  function En(D) {
    (k = D), R || ((R = !0), ee());
  }
  function Le(D, L) {
    N = C(function () {
      D(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), En(w));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (_ = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (D) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = m;
      }
      var A = m;
      m = L;
      try {
        return D();
      } finally {
        m = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, L) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var A = m;
      m = D;
      try {
        return L();
      } finally {
        m = A;
      }
    }),
    (e.unstable_scheduleCallback = function (D, L, A) {
      var b = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? b + A : b))
          : (A = b),
        D)
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
        (B = A + B),
        (D = {
          id: c++,
          callback: L,
          priorityLevel: D,
          startTime: A,
          expirationTime: B,
          sortIndex: -1,
        }),
        A > b
          ? ((D.sortIndex = A),
            t(a, D),
            n(u) === null &&
              D === n(a) &&
              (g ? (p(N), (N = -1)) : (g = !0), Le(x, A - b)))
          : ((D.sortIndex = B), t(u, D), v || y || ((v = !0), En(w))),
        D
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (D) {
      var L = m;
      return function () {
        var A = m;
        m = L;
        try {
          return D.apply(this, arguments);
        } finally {
          m = A;
        }
      };
    });
})(ld);
id.exports = ld;
var Oh = id.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ph = E,
  Ue = Oh;
function T(e) {
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
var sd = new Set(),
  jr = {};
function wn(e, t) {
  Qn(e, t), Qn(e + "Capture", t);
}
function Qn(e, t) {
  for (jr[e] = t, e = 0; e < t.length; e++) sd.add(t[e]);
}
var xt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Wl = Object.prototype.hasOwnProperty,
  Lh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ha = {},
  ma = {};
function Ah(e) {
  return Wl.call(ma, e)
    ? !0
    : Wl.call(ha, e)
    ? !1
    : Lh.test(e)
    ? (ma[e] = !0)
    : ((ha[e] = !0), !1);
}
function zh(e, t, n, r) {
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
function Mh(e, t, n, r) {
  if (t === null || typeof t > "u" || zh(e, t, n, r)) return !0;
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
function xe(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    he[e] = new xe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  he[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  he[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  he[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    he[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  he[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  he[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  he[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  he[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qs = /[\-:]([a-z])/g;
function Js(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(qs, Js);
    he[t] = new xe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(qs, Js);
    he[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(qs, Js);
  he[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  he[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new xe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  he[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gs(e, t, n, r) {
  var o = he.hasOwnProperty(t) ? he[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Mh(t, n, o, r) && (n = null),
    r || o === null
      ? Ah(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nt = Ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xo = Symbol.for("react.element"),
  _n = Symbol.for("react.portal"),
  Dn = Symbol.for("react.fragment"),
  Zs = Symbol.for("react.strict_mode"),
  bl = Symbol.for("react.profiler"),
  ud = Symbol.for("react.provider"),
  ad = Symbol.for("react.context"),
  eu = Symbol.for("react.forward_ref"),
  Kl = Symbol.for("react.suspense"),
  Ql = Symbol.for("react.suspense_list"),
  tu = Symbol.for("react.memo"),
  Lt = Symbol.for("react.lazy"),
  cd = Symbol.for("react.offscreen"),
  ga = Symbol.iterator;
function fr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ga && e[ga]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  al;
function Er(e) {
  if (al === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      al = (t && t[1]) || "";
    }
  return (
    `
` +
    al +
    e
  );
}
var cl = !1;
function dl(e, t) {
  if (!e || cl) return "";
  cl = !0;
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
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var o = a.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var u =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (cl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Er(e) : "";
}
function Fh(e) {
  switch (e.tag) {
    case 5:
      return Er(e.type);
    case 16:
      return Er("Lazy");
    case 13:
      return Er("Suspense");
    case 19:
      return Er("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = dl(e.type, !1)), e;
    case 11:
      return (e = dl(e.type.render, !1)), e;
    case 1:
      return (e = dl(e.type, !0)), e;
    default:
      return "";
  }
}
function Xl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dn:
      return "Fragment";
    case _n:
      return "Portal";
    case bl:
      return "Profiler";
    case Zs:
      return "StrictMode";
    case Kl:
      return "Suspense";
    case Ql:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ad:
        return (e.displayName || "Context") + ".Consumer";
      case ud:
        return (e._context.displayName || "Context") + ".Provider";
      case eu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case tu:
        return (
          (t = e.displayName || null), t !== null ? t : Xl(e.type) || "Memo"
        );
      case Lt:
        (t = e._payload), (e = e._init);
        try {
          return Xl(e(t));
        } catch {}
    }
  return null;
}
function jh(e) {
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
      return Xl(t);
    case 8:
      return t === Zs ? "StrictMode" : "Mode";
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
function Qt(e) {
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
function dd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ih(e) {
  var t = dd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ko(e) {
  e._valueTracker || (e._valueTracker = Ih(e));
}
function fd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = dd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ei(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Yl(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function va(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Qt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function pd(e, t) {
  (t = t.checked), t != null && Gs(e, "checked", t, !1);
}
function ql(e, t) {
  pd(e, t);
  var n = Qt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Jl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Jl(e, t.type, Qt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ya(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Jl(e, t, n) {
  (t !== "number" || ei(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xr = Array.isArray;
function Bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Qt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Gl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function wa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (xr(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Qt(n) };
}
function hd(e, t) {
  var n = Qt(t.value),
    r = Qt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Sa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function md(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Zl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? md(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Co,
  gd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Co = Co || document.createElement("div"),
          Co.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Co.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ir(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rr = {
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
  Uh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rr).forEach(function (e) {
  Uh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rr[t] = Rr[e]);
  });
});
function vd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Rr.hasOwnProperty(e) && Rr[e])
    ? ("" + t).trim()
    : t + "px";
}
function yd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = vd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Bh = Y(
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
function es(e, t) {
  if (t) {
    if (Bh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function ts(e, t) {
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
var ns = null;
function nu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var rs = null,
  $n = null,
  Hn = null;
function Ea(e) {
  if ((e = lo(e))) {
    if (typeof rs != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = Ii(t)), rs(e.stateNode, e.type, t));
  }
}
function wd(e) {
  $n ? (Hn ? Hn.push(e) : (Hn = [e])) : ($n = e);
}
function Sd() {
  if ($n) {
    var e = $n,
      t = Hn;
    if (((Hn = $n = null), Ea(e), t)) for (e = 0; e < t.length; e++) Ea(t[e]);
  }
}
function Ed(e, t) {
  return e(t);
}
function xd() {}
var fl = !1;
function kd(e, t, n) {
  if (fl) return e(t, n);
  fl = !0;
  try {
    return Ed(e, t, n);
  } finally {
    (fl = !1), ($n !== null || Hn !== null) && (xd(), Sd());
  }
}
function Ur(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ii(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var os = !1;
if (xt)
  try {
    var pr = {};
    Object.defineProperty(pr, "passive", {
      get: function () {
        os = !0;
      },
    }),
      window.addEventListener("test", pr, pr),
      window.removeEventListener("test", pr, pr);
  } catch {
    os = !1;
  }
function $h(e, t, n, r, o, i, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var Nr = !1,
  ti = null,
  ni = !1,
  is = null,
  Hh = {
    onError: function (e) {
      (Nr = !0), (ti = e);
    },
  };
function Vh(e, t, n, r, o, i, l, s, u) {
  (Nr = !1), (ti = null), $h.apply(Hh, arguments);
}
function Wh(e, t, n, r, o, i, l, s, u) {
  if ((Vh.apply(this, arguments), Nr)) {
    if (Nr) {
      var a = ti;
      (Nr = !1), (ti = null);
    } else throw Error(T(198));
    ni || ((ni = !0), (is = a));
  }
}
function Sn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Cd(e) {
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
function xa(e) {
  if (Sn(e) !== e) throw Error(T(188));
}
function bh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Sn(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return xa(o), e;
        if (i === r) return xa(o), t;
        i = i.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function Rd(e) {
  return (e = bh(e)), e !== null ? Nd(e) : null;
}
function Nd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Nd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Td = Ue.unstable_scheduleCallback,
  ka = Ue.unstable_cancelCallback,
  Kh = Ue.unstable_shouldYield,
  Qh = Ue.unstable_requestPaint,
  Z = Ue.unstable_now,
  Xh = Ue.unstable_getCurrentPriorityLevel,
  ru = Ue.unstable_ImmediatePriority,
  _d = Ue.unstable_UserBlockingPriority,
  ri = Ue.unstable_NormalPriority,
  Yh = Ue.unstable_LowPriority,
  Dd = Ue.unstable_IdlePriority,
  zi = null,
  ht = null;
function qh(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function")
    try {
      ht.onCommitFiberRoot(zi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var it = Math.clz32 ? Math.clz32 : Zh,
  Jh = Math.log,
  Gh = Math.LN2;
function Zh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Jh(e) / Gh) | 0)) | 0;
}
var Ro = 64,
  No = 4194304;
function kr(e) {
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
function oi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = kr(s)) : ((i &= l), i !== 0 && (r = kr(i)));
  } else (l = n & ~o), l !== 0 ? (r = kr(l)) : i !== 0 && (r = kr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - it(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function em(e, t) {
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
function tm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - it(i),
      s = 1 << l,
      u = o[l];
    u === -1
      ? (!(s & n) || s & r) && (o[l] = em(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function ls(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Od() {
  var e = Ro;
  return (Ro <<= 1), !(Ro & 4194240) && (Ro = 64), e;
}
function pl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function oo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - it(t)),
    (e[t] = n);
}
function nm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - it(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function ou(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - it(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var U = 0;
function Pd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ld,
  iu,
  Ad,
  zd,
  Md,
  ss = !1,
  To = [],
  Ut = null,
  Bt = null,
  $t = null,
  Br = new Map(),
  $r = new Map(),
  Mt = [],
  rm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Ca(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ut = null;
      break;
    case "dragenter":
    case "dragleave":
      Bt = null;
      break;
    case "mouseover":
    case "mouseout":
      $t = null;
      break;
    case "pointerover":
    case "pointerout":
      Br.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $r.delete(t.pointerId);
  }
}
function hr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = lo(t)), t !== null && iu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function om(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Ut = hr(Ut, e, t, n, r, o)), !0;
    case "dragenter":
      return (Bt = hr(Bt, e, t, n, r, o)), !0;
    case "mouseover":
      return ($t = hr($t, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Br.set(i, hr(Br.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), $r.set(i, hr($r.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Fd(e) {
  var t = on(e.target);
  if (t !== null) {
    var n = Sn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Cd(n)), t !== null)) {
          (e.blockedOn = t),
            Md(e.priority, function () {
              Ad(n);
            });
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
function $o(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = us(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ns = r), n.target.dispatchEvent(r), (ns = null);
    } else return (t = lo(n)), t !== null && iu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ra(e, t, n) {
  $o(e) && n.delete(t);
}
function im() {
  (ss = !1),
    Ut !== null && $o(Ut) && (Ut = null),
    Bt !== null && $o(Bt) && (Bt = null),
    $t !== null && $o($t) && ($t = null),
    Br.forEach(Ra),
    $r.forEach(Ra);
}
function mr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ss ||
      ((ss = !0),
      Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, im)));
}
function Hr(e) {
  function t(o) {
    return mr(o, e);
  }
  if (0 < To.length) {
    mr(To[0], e);
    for (var n = 1; n < To.length; n++) {
      var r = To[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ut !== null && mr(Ut, e),
      Bt !== null && mr(Bt, e),
      $t !== null && mr($t, e),
      Br.forEach(t),
      $r.forEach(t),
      n = 0;
    n < Mt.length;
    n++
  )
    (r = Mt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Mt.length && ((n = Mt[0]), n.blockedOn === null); )
    Fd(n), n.blockedOn === null && Mt.shift();
}
var Vn = Nt.ReactCurrentBatchConfig,
  ii = !0;
function lm(e, t, n, r) {
  var o = U,
    i = Vn.transition;
  Vn.transition = null;
  try {
    (U = 1), lu(e, t, n, r);
  } finally {
    (U = o), (Vn.transition = i);
  }
}
function sm(e, t, n, r) {
  var o = U,
    i = Vn.transition;
  Vn.transition = null;
  try {
    (U = 4), lu(e, t, n, r);
  } finally {
    (U = o), (Vn.transition = i);
  }
}
function lu(e, t, n, r) {
  if (ii) {
    var o = us(e, t, n, r);
    if (o === null) kl(e, t, r, li, n), Ca(e, r);
    else if (om(o, e, t, n, r)) r.stopPropagation();
    else if ((Ca(e, r), t & 4 && -1 < rm.indexOf(e))) {
      for (; o !== null; ) {
        var i = lo(o);
        if (
          (i !== null && Ld(i),
          (i = us(e, t, n, r)),
          i === null && kl(e, t, r, li, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else kl(e, t, r, null, n);
  }
}
var li = null;
function us(e, t, n, r) {
  if (((li = null), (e = nu(r)), (e = on(e)), e !== null))
    if (((t = Sn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Cd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (li = e), null;
}
function jd(e) {
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
      switch (Xh()) {
        case ru:
          return 1;
        case _d:
          return 4;
        case ri:
        case Yh:
          return 16;
        case Dd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jt = null,
  su = null,
  Ho = null;
function Id() {
  if (Ho) return Ho;
  var e,
    t = su,
    n = t.length,
    r,
    o = "value" in jt ? jt.value : jt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Ho = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Vo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function _o() {
  return !0;
}
function Na() {
  return !1;
}
function $e(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? _o
        : Na),
      (this.isPropagationStopped = Na),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = _o));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = _o));
      },
      persist: function () {},
      isPersistent: _o,
    }),
    t
  );
}
var tr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  uu = $e(tr),
  io = Y({}, tr, { view: 0, detail: 0 }),
  um = $e(io),
  hl,
  ml,
  gr,
  Mi = Y({}, io, {
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
    getModifierState: au,
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
        : (e !== gr &&
            (gr && e.type === "mousemove"
              ? ((hl = e.screenX - gr.screenX), (ml = e.screenY - gr.screenY))
              : (ml = hl = 0),
            (gr = e)),
          hl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ml;
    },
  }),
  Ta = $e(Mi),
  am = Y({}, Mi, { dataTransfer: 0 }),
  cm = $e(am),
  dm = Y({}, io, { relatedTarget: 0 }),
  gl = $e(dm),
  fm = Y({}, tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pm = $e(fm),
  hm = Y({}, tr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  mm = $e(hm),
  gm = Y({}, tr, { data: 0 }),
  _a = $e(gm),
  vm = {
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
  ym = {
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
  wm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Sm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wm[e]) ? !!t[e] : !1;
}
function au() {
  return Sm;
}
var Em = Y({}, io, {
    key: function (e) {
      if (e.key) {
        var t = vm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Vo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ym[e.keyCode] || "Unidentified"
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
    getModifierState: au,
    charCode: function (e) {
      return e.type === "keypress" ? Vo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Vo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  xm = $e(Em),
  km = Y({}, Mi, {
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
  Da = $e(km),
  Cm = Y({}, io, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: au,
  }),
  Rm = $e(Cm),
  Nm = Y({}, tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tm = $e(Nm),
  _m = Y({}, Mi, {
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
  Dm = $e(_m),
  Om = [9, 13, 27, 32],
  cu = xt && "CompositionEvent" in window,
  Tr = null;
xt && "documentMode" in document && (Tr = document.documentMode);
var Pm = xt && "TextEvent" in window && !Tr,
  Ud = xt && (!cu || (Tr && 8 < Tr && 11 >= Tr)),
  Oa = " ",
  Pa = !1;
function Bd(e, t) {
  switch (e) {
    case "keyup":
      return Om.indexOf(t.keyCode) !== -1;
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
function $d(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var On = !1;
function Lm(e, t) {
  switch (e) {
    case "compositionend":
      return $d(t);
    case "keypress":
      return t.which !== 32 ? null : ((Pa = !0), Oa);
    case "textInput":
      return (e = t.data), e === Oa && Pa ? null : e;
    default:
      return null;
  }
}
function Am(e, t) {
  if (On)
    return e === "compositionend" || (!cu && Bd(e, t))
      ? ((e = Id()), (Ho = su = jt = null), (On = !1), e)
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
      return Ud && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var zm = {
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
function La(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!zm[e.type] : t === "textarea";
}
function Hd(e, t, n, r) {
  wd(r),
    (t = si(t, "onChange")),
    0 < t.length &&
      ((n = new uu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _r = null,
  Vr = null;
function Mm(e) {
  Zd(e, 0);
}
function Fi(e) {
  var t = An(e);
  if (fd(t)) return e;
}
function Fm(e, t) {
  if (e === "change") return t;
}
var Vd = !1;
if (xt) {
  var vl;
  if (xt) {
    var yl = "oninput" in document;
    if (!yl) {
      var Aa = document.createElement("div");
      Aa.setAttribute("oninput", "return;"),
        (yl = typeof Aa.oninput == "function");
    }
    vl = yl;
  } else vl = !1;
  Vd = vl && (!document.documentMode || 9 < document.documentMode);
}
function za() {
  _r && (_r.detachEvent("onpropertychange", Wd), (Vr = _r = null));
}
function Wd(e) {
  if (e.propertyName === "value" && Fi(Vr)) {
    var t = [];
    Hd(t, Vr, e, nu(e)), kd(Mm, t);
  }
}
function jm(e, t, n) {
  e === "focusin"
    ? (za(), (_r = t), (Vr = n), _r.attachEvent("onpropertychange", Wd))
    : e === "focusout" && za();
}
function Im(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Fi(Vr);
}
function Um(e, t) {
  if (e === "click") return Fi(t);
}
function Bm(e, t) {
  if (e === "input" || e === "change") return Fi(t);
}
function $m(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var st = typeof Object.is == "function" ? Object.is : $m;
function Wr(e, t) {
  if (st(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Wl.call(t, o) || !st(e[o], t[o])) return !1;
  }
  return !0;
}
function Ma(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Fa(e, t) {
  var n = Ma(e);
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
    n = Ma(n);
  }
}
function bd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? bd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Kd() {
  for (var e = window, t = ei(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ei(e.document);
  }
  return t;
}
function du(e) {
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
function Hm(e) {
  var t = Kd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    bd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && du(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Fa(n, i));
        var l = Fa(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Vm = xt && "documentMode" in document && 11 >= document.documentMode,
  Pn = null,
  as = null,
  Dr = null,
  cs = !1;
function ja(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  cs ||
    Pn == null ||
    Pn !== ei(r) ||
    ((r = Pn),
    "selectionStart" in r && du(r)
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
    (Dr && Wr(Dr, r)) ||
      ((Dr = r),
      (r = si(as, "onSelect")),
      0 < r.length &&
        ((t = new uu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Pn))));
}
function Do(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ln = {
    animationend: Do("Animation", "AnimationEnd"),
    animationiteration: Do("Animation", "AnimationIteration"),
    animationstart: Do("Animation", "AnimationStart"),
    transitionend: Do("Transition", "TransitionEnd"),
  },
  wl = {},
  Qd = {};
xt &&
  ((Qd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ln.animationend.animation,
    delete Ln.animationiteration.animation,
    delete Ln.animationstart.animation),
  "TransitionEvent" in window || delete Ln.transitionend.transition);
function ji(e) {
  if (wl[e]) return wl[e];
  if (!Ln[e]) return e;
  var t = Ln[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Qd) return (wl[e] = t[n]);
  return e;
}
var Xd = ji("animationend"),
  Yd = ji("animationiteration"),
  qd = ji("animationstart"),
  Jd = ji("transitionend"),
  Gd = new Map(),
  Ia =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Yt(e, t) {
  Gd.set(e, t), wn(t, [e]);
}
for (var Sl = 0; Sl < Ia.length; Sl++) {
  var El = Ia[Sl],
    Wm = El.toLowerCase(),
    bm = El[0].toUpperCase() + El.slice(1);
  Yt(Wm, "on" + bm);
}
Yt(Xd, "onAnimationEnd");
Yt(Yd, "onAnimationIteration");
Yt(qd, "onAnimationStart");
Yt("dblclick", "onDoubleClick");
Yt("focusin", "onFocus");
Yt("focusout", "onBlur");
Yt(Jd, "onTransitionEnd");
Qn("onMouseEnter", ["mouseout", "mouseover"]);
Qn("onMouseLeave", ["mouseout", "mouseover"]);
Qn("onPointerEnter", ["pointerout", "pointerover"]);
Qn("onPointerLeave", ["pointerout", "pointerover"]);
wn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
wn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
wn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
wn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Cr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Km = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));
function Ua(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Wh(r, t, void 0, e), (e.currentTarget = null);
}
function Zd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== i && o.isPropagationStopped())) break e;
          Ua(o, s, a), (i = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== i && o.isPropagationStopped())
          )
            break e;
          Ua(o, s, a), (i = u);
        }
    }
  }
  if (ni) throw ((e = is), (ni = !1), (is = null), e);
}
function V(e, t) {
  var n = t[ms];
  n === void 0 && (n = t[ms] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ef(t, e, 2, !1), n.add(r));
}
function xl(e, t, n) {
  var r = 0;
  t && (r |= 4), ef(n, e, r, t);
}
var Oo = "_reactListening" + Math.random().toString(36).slice(2);
function br(e) {
  if (!e[Oo]) {
    (e[Oo] = !0),
      sd.forEach(function (n) {
        n !== "selectionchange" && (Km.has(n) || xl(n, !1, e), xl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Oo] || ((t[Oo] = !0), xl("selectionchange", !1, t));
  }
}
function ef(e, t, n, r) {
  switch (jd(t)) {
    case 1:
      var o = lm;
      break;
    case 4:
      o = sm;
      break;
    default:
      o = lu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !os ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function kl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = on(s)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  kd(function () {
    var a = i,
      c = nu(n),
      f = [];
    e: {
      var m = Gd.get(e);
      if (m !== void 0) {
        var y = uu,
          v = e;
        switch (e) {
          case "keypress":
            if (Vo(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = xm;
            break;
          case "focusin":
            (v = "focus"), (y = gl);
            break;
          case "focusout":
            (v = "blur"), (y = gl);
            break;
          case "beforeblur":
          case "afterblur":
            y = gl;
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
            y = Ta;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = cm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Rm;
            break;
          case Xd:
          case Yd:
          case qd:
            y = pm;
            break;
          case Jd:
            y = Tm;
            break;
          case "scroll":
            y = um;
            break;
          case "wheel":
            y = Dm;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = mm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Da;
        }
        var g = (t & 4) !== 0,
          C = !g && e === "scroll",
          p = g ? (m !== null ? m + "Capture" : null) : m;
        g = [];
        for (var d = a, h; d !== null; ) {
          h = d;
          var x = h.stateNode;
          if (
            (h.tag === 5 &&
              x !== null &&
              ((h = x),
              p !== null && ((x = Ur(d, p)), x != null && g.push(Kr(d, x, h)))),
            C)
          )
            break;
          d = d.return;
        }
        0 < g.length &&
          ((m = new y(m, v, null, n, c)), f.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          m &&
            n !== ns &&
            (v = n.relatedTarget || n.fromElement) &&
            (on(v) || v[kt]))
        )
          break e;
        if (
          (y || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = a),
              (v = v ? on(v) : null),
              v !== null &&
                ((C = Sn(v)), v !== C || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = a)),
          y !== v)
        ) {
          if (
            ((g = Ta),
            (x = "onMouseLeave"),
            (p = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Da),
              (x = "onPointerLeave"),
              (p = "onPointerEnter"),
              (d = "pointer")),
            (C = y == null ? m : An(y)),
            (h = v == null ? m : An(v)),
            (m = new g(x, d + "leave", y, n, c)),
            (m.target = C),
            (m.relatedTarget = h),
            (x = null),
            on(c) === a &&
              ((g = new g(p, d + "enter", v, n, c)),
              (g.target = h),
              (g.relatedTarget = C),
              (x = g)),
            (C = x),
            y && v)
          )
            t: {
              for (g = y, p = v, d = 0, h = g; h; h = Tn(h)) d++;
              for (h = 0, x = p; x; x = Tn(x)) h++;
              for (; 0 < d - h; ) (g = Tn(g)), d--;
              for (; 0 < h - d; ) (p = Tn(p)), h--;
              for (; d--; ) {
                if (g === p || (p !== null && g === p.alternate)) break t;
                (g = Tn(g)), (p = Tn(p));
              }
              g = null;
            }
          else g = null;
          y !== null && Ba(f, m, y, g, !1),
            v !== null && C !== null && Ba(f, C, v, g, !0);
        }
      }
      e: {
        if (
          ((m = a ? An(a) : window),
          (y = m.nodeName && m.nodeName.toLowerCase()),
          y === "select" || (y === "input" && m.type === "file"))
        )
          var w = Fm;
        else if (La(m))
          if (Vd) w = Bm;
          else {
            w = Im;
            var R = jm;
          }
        else
          (y = m.nodeName) &&
            y.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (w = Um);
        if (w && (w = w(e, a))) {
          Hd(f, w, n, c);
          break e;
        }
        R && R(e, m, a),
          e === "focusout" &&
            (R = m._wrapperState) &&
            R.controlled &&
            m.type === "number" &&
            Jl(m, "number", m.value);
      }
      switch (((R = a ? An(a) : window), e)) {
        case "focusin":
          (La(R) || R.contentEditable === "true") &&
            ((Pn = R), (as = a), (Dr = null));
          break;
        case "focusout":
          Dr = as = Pn = null;
          break;
        case "mousedown":
          cs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (cs = !1), ja(f, n, c);
          break;
        case "selectionchange":
          if (Vm) break;
        case "keydown":
        case "keyup":
          ja(f, n, c);
      }
      var k;
      if (cu)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        On
          ? Bd(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Ud &&
          n.locale !== "ko" &&
          (On || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && On && (k = Id())
            : ((jt = c),
              (su = "value" in jt ? jt.value : jt.textContent),
              (On = !0))),
        (R = si(a, N)),
        0 < R.length &&
          ((N = new _a(N, e, null, n, c)),
          f.push({ event: N, listeners: R }),
          k ? (N.data = k) : ((k = $d(n)), k !== null && (N.data = k)))),
        (k = Pm ? Lm(e, n) : Am(e, n)) &&
          ((a = si(a, "onBeforeInput")),
          0 < a.length &&
            ((c = new _a("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: a }),
            (c.data = k)));
    }
    Zd(f, t);
  });
}
function Kr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function si(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ur(e, n)),
      i != null && r.unshift(Kr(e, i, o)),
      (i = Ur(e, t)),
      i != null && r.push(Kr(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Tn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ba(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      o
        ? ((u = Ur(n, i)), u != null && l.unshift(Kr(n, u, s)))
        : o || ((u = Ur(n, i)), u != null && l.push(Kr(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Qm = /\r\n?/g,
  Xm = /\u0000|\uFFFD/g;
function $a(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Qm,
      `
`,
    )
    .replace(Xm, "");
}
function Po(e, t, n) {
  if (((t = $a(t)), $a(e) !== t && n)) throw Error(T(425));
}
function ui() {}
var ds = null,
  fs = null;
function ps(e, t) {
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
var hs = typeof setTimeout == "function" ? setTimeout : void 0,
  Ym = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ha = typeof Promise == "function" ? Promise : void 0,
  qm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ha < "u"
      ? function (e) {
          return Ha.resolve(null).then(e).catch(Jm);
        }
      : hs;
function Jm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Cl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Hr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Hr(t);
}
function Ht(e) {
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
function Va(e) {
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
var nr = Math.random().toString(36).slice(2),
  pt = "__reactFiber$" + nr,
  Qr = "__reactProps$" + nr,
  kt = "__reactContainer$" + nr,
  ms = "__reactEvents$" + nr,
  Gm = "__reactListeners$" + nr,
  Zm = "__reactHandles$" + nr;
function on(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[kt] || n[pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Va(e); e !== null; ) {
          if ((n = e[pt])) return n;
          e = Va(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function lo(e) {
  return (
    (e = e[pt] || e[kt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Ii(e) {
  return e[Qr] || null;
}
var gs = [],
  zn = -1;
function qt(e) {
  return { current: e };
}
function W(e) {
  0 > zn || ((e.current = gs[zn]), (gs[zn] = null), zn--);
}
function H(e, t) {
  zn++, (gs[zn] = e.current), (e.current = t);
}
var Xt = {},
  ye = qt(Xt),
  Ne = qt(!1),
  fn = Xt;
function Xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Xt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Te(e) {
  return (e = e.childContextTypes), e != null;
}
function ai() {
  W(Ne), W(ye);
}
function Wa(e, t, n) {
  if (ye.current !== Xt) throw Error(T(168));
  H(ye, t), H(Ne, n);
}
function tf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(T(108, jh(e) || "Unknown", o));
  return Y({}, n, r);
}
function ci(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xt),
    (fn = ye.current),
    H(ye, e),
    H(Ne, Ne.current),
    !0
  );
}
function ba(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = tf(e, t, fn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(Ne),
      W(ye),
      H(ye, e))
    : W(Ne),
    H(Ne, n);
}
var yt = null,
  Ui = !1,
  Rl = !1;
function nf(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
function eg(e) {
  (Ui = !0), nf(e);
}
function Jt() {
  if (!Rl && yt !== null) {
    Rl = !0;
    var e = 0,
      t = U;
    try {
      var n = yt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (yt = null), (Ui = !1);
    } catch (o) {
      throw (yt !== null && (yt = yt.slice(e + 1)), Td(ru, Jt), o);
    } finally {
      (U = t), (Rl = !1);
    }
  }
  return null;
}
var Mn = [],
  Fn = 0,
  di = null,
  fi = 0,
  be = [],
  Ke = 0,
  pn = null,
  wt = 1,
  St = "";
function tn(e, t) {
  (Mn[Fn++] = fi), (Mn[Fn++] = di), (di = e), (fi = t);
}
function rf(e, t, n) {
  (be[Ke++] = wt), (be[Ke++] = St), (be[Ke++] = pn), (pn = e);
  var r = wt;
  e = St;
  var o = 32 - it(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - it(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (wt = (1 << (32 - it(t) + o)) | (n << o) | r),
      (St = i + e);
  } else (wt = (1 << i) | (n << o) | r), (St = e);
}
function fu(e) {
  e.return !== null && (tn(e, 1), rf(e, 1, 0));
}
function pu(e) {
  for (; e === di; )
    (di = Mn[--Fn]), (Mn[Fn] = null), (fi = Mn[--Fn]), (Mn[Fn] = null);
  for (; e === pn; )
    (pn = be[--Ke]),
      (be[Ke] = null),
      (St = be[--Ke]),
      (be[Ke] = null),
      (wt = be[--Ke]),
      (be[Ke] = null);
}
var je = null,
  Fe = null,
  K = !1,
  ot = null;
function of(e, t) {
  var n = Qe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ka(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (je = e), (Fe = Ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (je = e), (Fe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = pn !== null ? { id: wt, overflow: St } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Qe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (je = e),
            (Fe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function vs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ys(e) {
  if (K) {
    var t = Fe;
    if (t) {
      var n = t;
      if (!Ka(e, t)) {
        if (vs(e)) throw Error(T(418));
        t = Ht(n.nextSibling);
        var r = je;
        t && Ka(e, t)
          ? of(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (K = !1), (je = e));
      }
    } else {
      if (vs(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (K = !1), (je = e);
    }
  }
}
function Qa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function Lo(e) {
  if (e !== je) return !1;
  if (!K) return Qa(e), (K = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ps(e.type, e.memoizedProps))),
    t && (t = Fe))
  ) {
    if (vs(e)) throw (lf(), Error(T(418)));
    for (; t; ) of(e, t), (t = Ht(t.nextSibling));
  }
  if ((Qa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fe = Ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else Fe = je ? Ht(e.stateNode.nextSibling) : null;
  return !0;
}
function lf() {
  for (var e = Fe; e; ) e = Ht(e.nextSibling);
}
function Yn() {
  (Fe = je = null), (K = !1);
}
function hu(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
var tg = Nt.ReactCurrentBatchConfig;
function vr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Ao(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Xa(e) {
  var t = e._init;
  return t(e._payload);
}
function sf(e) {
  function t(p, d) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [d]), (p.flags |= 16)) : h.push(d);
    }
  }
  function n(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), (d = d.sibling);
    return null;
  }
  function r(p, d) {
    for (p = new Map(); d !== null; )
      d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling);
    return p;
  }
  function o(p, d) {
    return (p = Kt(p, d)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, d, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((p.flags |= 2), d) : h)
            : ((p.flags |= 2), d))
        : ((p.flags |= 1048576), d)
    );
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, d, h, x) {
    return d === null || d.tag !== 6
      ? ((d = Ll(h, p.mode, x)), (d.return = p), d)
      : ((d = o(d, h)), (d.return = p), d);
  }
  function u(p, d, h, x) {
    var w = h.type;
    return w === Dn
      ? c(p, d, h.props.children, x, h.key)
      : d !== null &&
        (d.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === Lt &&
            Xa(w) === d.type))
      ? ((x = o(d, h.props)), (x.ref = vr(p, d, h)), (x.return = p), x)
      : ((x = qo(h.type, h.key, h.props, null, p.mode, x)),
        (x.ref = vr(p, d, h)),
        (x.return = p),
        x);
  }
  function a(p, d, h, x) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = Al(h, p.mode, x)), (d.return = p), d)
      : ((d = o(d, h.children || [])), (d.return = p), d);
  }
  function c(p, d, h, x, w) {
    return d === null || d.tag !== 7
      ? ((d = cn(h, p.mode, x, w)), (d.return = p), d)
      : ((d = o(d, h)), (d.return = p), d);
  }
  function f(p, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = Ll("" + d, p.mode, h)), (d.return = p), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case xo:
          return (
            (h = qo(d.type, d.key, d.props, null, p.mode, h)),
            (h.ref = vr(p, null, d)),
            (h.return = p),
            h
          );
        case _n:
          return (d = Al(d, p.mode, h)), (d.return = p), d;
        case Lt:
          var x = d._init;
          return f(p, x(d._payload), h);
      }
      if (xr(d) || fr(d))
        return (d = cn(d, p.mode, h, null)), (d.return = p), d;
      Ao(p, d);
    }
    return null;
  }
  function m(p, d, h, x) {
    var w = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return w !== null ? null : s(p, d, "" + h, x);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case xo:
          return h.key === w ? u(p, d, h, x) : null;
        case _n:
          return h.key === w ? a(p, d, h, x) : null;
        case Lt:
          return (w = h._init), m(p, d, w(h._payload), x);
      }
      if (xr(h) || fr(h)) return w !== null ? null : c(p, d, h, x, null);
      Ao(p, h);
    }
    return null;
  }
  function y(p, d, h, x, w) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (p = p.get(h) || null), s(d, p, "" + x, w);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case xo:
          return (p = p.get(x.key === null ? h : x.key) || null), u(d, p, x, w);
        case _n:
          return (p = p.get(x.key === null ? h : x.key) || null), a(d, p, x, w);
        case Lt:
          var R = x._init;
          return y(p, d, h, R(x._payload), w);
      }
      if (xr(x) || fr(x)) return (p = p.get(h) || null), c(d, p, x, w, null);
      Ao(d, x);
    }
    return null;
  }
  function v(p, d, h, x) {
    for (
      var w = null, R = null, k = d, N = (d = 0), _ = null;
      k !== null && N < h.length;
      N++
    ) {
      k.index > N ? ((_ = k), (k = null)) : (_ = k.sibling);
      var P = m(p, k, h[N], x);
      if (P === null) {
        k === null && (k = _);
        break;
      }
      e && k && P.alternate === null && t(p, k),
        (d = i(P, d, N)),
        R === null ? (w = P) : (R.sibling = P),
        (R = P),
        (k = _);
    }
    if (N === h.length) return n(p, k), K && tn(p, N), w;
    if (k === null) {
      for (; N < h.length; N++)
        (k = f(p, h[N], x)),
          k !== null &&
            ((d = i(k, d, N)), R === null ? (w = k) : (R.sibling = k), (R = k));
      return K && tn(p, N), w;
    }
    for (k = r(p, k); N < h.length; N++)
      (_ = y(k, p, N, h[N], x)),
        _ !== null &&
          (e && _.alternate !== null && k.delete(_.key === null ? N : _.key),
          (d = i(_, d, N)),
          R === null ? (w = _) : (R.sibling = _),
          (R = _));
    return (
      e &&
        k.forEach(function (M) {
          return t(p, M);
        }),
      K && tn(p, N),
      w
    );
  }
  function g(p, d, h, x) {
    var w = fr(h);
    if (typeof w != "function") throw Error(T(150));
    if (((h = w.call(h)), h == null)) throw Error(T(151));
    for (
      var R = (w = null), k = d, N = (d = 0), _ = null, P = h.next();
      k !== null && !P.done;
      N++, P = h.next()
    ) {
      k.index > N ? ((_ = k), (k = null)) : (_ = k.sibling);
      var M = m(p, k, P.value, x);
      if (M === null) {
        k === null && (k = _);
        break;
      }
      e && k && M.alternate === null && t(p, k),
        (d = i(M, d, N)),
        R === null ? (w = M) : (R.sibling = M),
        (R = M),
        (k = _);
    }
    if (P.done) return n(p, k), K && tn(p, N), w;
    if (k === null) {
      for (; !P.done; N++, P = h.next())
        (P = f(p, P.value, x)),
          P !== null &&
            ((d = i(P, d, N)), R === null ? (w = P) : (R.sibling = P), (R = P));
      return K && tn(p, N), w;
    }
    for (k = r(p, k); !P.done; N++, P = h.next())
      (P = y(k, p, N, P.value, x)),
        P !== null &&
          (e && P.alternate !== null && k.delete(P.key === null ? N : P.key),
          (d = i(P, d, N)),
          R === null ? (w = P) : (R.sibling = P),
          (R = P));
    return (
      e &&
        k.forEach(function (le) {
          return t(p, le);
        }),
      K && tn(p, N),
      w
    );
  }
  function C(p, d, h, x) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Dn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case xo:
          e: {
            for (var w = h.key, R = d; R !== null; ) {
              if (R.key === w) {
                if (((w = h.type), w === Dn)) {
                  if (R.tag === 7) {
                    n(p, R.sibling),
                      (d = o(R, h.props.children)),
                      (d.return = p),
                      (p = d);
                    break e;
                  }
                } else if (
                  R.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === Lt &&
                    Xa(w) === R.type)
                ) {
                  n(p, R.sibling),
                    (d = o(R, h.props)),
                    (d.ref = vr(p, R, h)),
                    (d.return = p),
                    (p = d);
                  break e;
                }
                n(p, R);
                break;
              } else t(p, R);
              R = R.sibling;
            }
            h.type === Dn
              ? ((d = cn(h.props.children, p.mode, x, h.key)),
                (d.return = p),
                (p = d))
              : ((x = qo(h.type, h.key, h.props, null, p.mode, x)),
                (x.ref = vr(p, d, h)),
                (x.return = p),
                (p = x));
          }
          return l(p);
        case _n:
          e: {
            for (R = h.key; d !== null; ) {
              if (d.key === R)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(p, d.sibling),
                    (d = o(d, h.children || [])),
                    (d.return = p),
                    (p = d);
                  break e;
                } else {
                  n(p, d);
                  break;
                }
              else t(p, d);
              d = d.sibling;
            }
            (d = Al(h, p.mode, x)), (d.return = p), (p = d);
          }
          return l(p);
        case Lt:
          return (R = h._init), C(p, d, R(h._payload), x);
      }
      if (xr(h)) return v(p, d, h, x);
      if (fr(h)) return g(p, d, h, x);
      Ao(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = o(d, h)), (d.return = p), (p = d))
          : (n(p, d), (d = Ll(h, p.mode, x)), (d.return = p), (p = d)),
        l(p))
      : n(p, d);
  }
  return C;
}
var qn = sf(!0),
  uf = sf(!1),
  pi = qt(null),
  hi = null,
  jn = null,
  mu = null;
function gu() {
  mu = jn = hi = null;
}
function vu(e) {
  var t = pi.current;
  W(pi), (e._currentValue = t);
}
function ws(e, t, n) {
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
function Wn(e, t) {
  (hi = e),
    (mu = jn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Re = !0), (e.firstContext = null));
}
function Ye(e) {
  var t = e._currentValue;
  if (mu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), jn === null)) {
      if (hi === null) throw Error(T(308));
      (jn = e), (hi.dependencies = { lanes: 0, firstContext: e });
    } else jn = jn.next = e;
  return t;
}
var ln = null;
function yu(e) {
  ln === null ? (ln = [e]) : ln.push(e);
}
function af(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), yu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Ct(e, r)
  );
}
function Ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function wu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function cf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Et(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Ct(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), yu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Ct(e, n)
  );
}
function Wo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ou(e, n);
  }
}
function Ya(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function mi(e, t, n, r) {
  var o = e.updateQueue;
  At = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), l === null ? (i = a) : (l.next = a), (l = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== l &&
        (s === null ? (c.firstBaseUpdate = a) : (s.next = a),
        (c.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var f = o.baseState;
    (l = 0), (c = a = u = null), (s = i);
    do {
      var m = s.lane,
        y = s.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var v = e,
            g = s;
          switch (((m = t), (y = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                f = v.call(y, f, m);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (m = typeof v == "function" ? v.call(y, f, m) : v),
                m == null)
              )
                break e;
              f = Y({}, f, m);
              break e;
            case 2:
              At = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [s]) : m.push(s));
      } else
        (y = {
          eventTime: y,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((a = c = y), (u = f)) : (c = c.next = y),
          (l |= m);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (u = f),
      (o.baseState = u),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (mn |= l), (e.lanes = l), (e.memoizedState = f);
  }
}
function qa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(T(191, o));
        o.call(r);
      }
    }
}
var so = {},
  mt = qt(so),
  Xr = qt(so),
  Yr = qt(so);
function sn(e) {
  if (e === so) throw Error(T(174));
  return e;
}
function Su(e, t) {
  switch ((H(Yr, t), H(Xr, e), H(mt, so), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Zl(t, e));
  }
  W(mt), H(mt, t);
}
function Jn() {
  W(mt), W(Xr), W(Yr);
}
function df(e) {
  sn(Yr.current);
  var t = sn(mt.current),
    n = Zl(t, e.type);
  t !== n && (H(Xr, e), H(mt, n));
}
function Eu(e) {
  Xr.current === e && (W(mt), W(Xr));
}
var Q = qt(0);
function gi(e) {
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
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Nl = [];
function xu() {
  for (var e = 0; e < Nl.length; e++)
    Nl[e]._workInProgressVersionPrimary = null;
  Nl.length = 0;
}
var bo = Nt.ReactCurrentDispatcher,
  Tl = Nt.ReactCurrentBatchConfig,
  hn = 0,
  X = null,
  re = null,
  se = null,
  vi = !1,
  Or = !1,
  qr = 0,
  ng = 0;
function me() {
  throw Error(T(321));
}
function ku(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!st(e[n], t[n])) return !1;
  return !0;
}
function Cu(e, t, n, r, o, i) {
  if (
    ((hn = i),
    (X = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (bo.current = e === null || e.memoizedState === null ? lg : sg),
    (e = n(r, o)),
    Or)
  ) {
    i = 0;
    do {
      if (((Or = !1), (qr = 0), 25 <= i)) throw Error(T(301));
      (i += 1),
        (se = re = null),
        (t.updateQueue = null),
        (bo.current = ug),
        (e = n(r, o));
    } while (Or);
  }
  if (
    ((bo.current = yi),
    (t = re !== null && re.next !== null),
    (hn = 0),
    (se = re = X = null),
    (vi = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function Ru() {
  var e = qr !== 0;
  return (qr = 0), e;
}
function ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return se === null ? (X.memoizedState = se = e) : (se = se.next = e), se;
}
function qe() {
  if (re === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = se === null ? X.memoizedState : se.next;
  if (t !== null) (se = t), (re = e);
  else {
    if (e === null) throw Error(T(310));
    (re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      se === null ? (X.memoizedState = se = e) : (se = se.next = e);
  }
  return se;
}
function Jr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _l(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = re,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      u = null,
      a = i;
    do {
      var c = a.lane;
      if ((hn & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var f = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = f), (l = r)) : (u = u.next = f),
          (X.lanes |= c),
          (mn |= c);
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? (l = r) : (u.next = s),
      st(r, t.memoizedState) || (Re = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (X.lanes |= i), (mn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Dl(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    st(i, t.memoizedState) || (Re = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ff() {}
function pf(e, t) {
  var n = X,
    r = qe(),
    o = t(),
    i = !st(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Re = !0)),
    (r = r.queue),
    Nu(gf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (se !== null && se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gr(9, mf.bind(null, n, r, o, t), void 0, null),
      ae === null)
    )
      throw Error(T(349));
    hn & 30 || hf(n, t, o);
  }
  return o;
}
function hf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function mf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), vf(t) && yf(e);
}
function gf(e, t, n) {
  return n(function () {
    vf(t) && yf(e);
  });
}
function vf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !st(e, n);
  } catch {
    return !0;
  }
}
function yf(e) {
  var t = Ct(e, 1);
  t !== null && lt(t, e, 1, -1);
}
function Ja(e) {
  var t = ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ig.bind(null, X, e)),
    [t.memoizedState, e]
  );
}
function Gr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wf() {
  return qe().memoizedState;
}
function Ko(e, t, n, r) {
  var o = ft();
  (X.flags |= e),
    (o.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Bi(e, t, n, r) {
  var o = qe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (re !== null) {
    var l = re.memoizedState;
    if (((i = l.destroy), r !== null && ku(r, l.deps))) {
      o.memoizedState = Gr(t, n, i, r);
      return;
    }
  }
  (X.flags |= e), (o.memoizedState = Gr(1 | t, n, i, r));
}
function Ga(e, t) {
  return Ko(8390656, 8, e, t);
}
function Nu(e, t) {
  return Bi(2048, 8, e, t);
}
function Sf(e, t) {
  return Bi(4, 2, e, t);
}
function Ef(e, t) {
  return Bi(4, 4, e, t);
}
function xf(e, t) {
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
function kf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Bi(4, 4, xf.bind(null, t, e), n)
  );
}
function Tu() {}
function Cf(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ku(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Rf(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ku(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Nf(e, t, n) {
  return hn & 21
    ? (st(n, t) || ((n = Od()), (X.lanes |= n), (mn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Re = !0)), (e.memoizedState = n));
}
function rg(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Tl.transition;
  Tl.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (Tl.transition = r);
  }
}
function Tf() {
  return qe().memoizedState;
}
function og(e, t, n) {
  var r = bt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _f(e))
  )
    Df(t, n);
  else if (((n = af(e, t, n, r)), n !== null)) {
    var o = Se();
    lt(n, e, r, o), Of(n, t, r);
  }
}
function ig(e, t, n) {
  var r = bt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_f(e)) Df(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), st(s, l))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), yu(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = af(e, t, o, r)),
      n !== null && ((o = Se()), lt(n, e, r, o), Of(n, t, r));
  }
}
function _f(e) {
  var t = e.alternate;
  return e === X || (t !== null && t === X);
}
function Df(e, t) {
  Or = vi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Of(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ou(e, n);
  }
}
var yi = {
    readContext: Ye,
    useCallback: me,
    useContext: me,
    useEffect: me,
    useImperativeHandle: me,
    useInsertionEffect: me,
    useLayoutEffect: me,
    useMemo: me,
    useReducer: me,
    useRef: me,
    useState: me,
    useDebugValue: me,
    useDeferredValue: me,
    useTransition: me,
    useMutableSource: me,
    useSyncExternalStore: me,
    useId: me,
    unstable_isNewReconciler: !1,
  },
  lg = {
    readContext: Ye,
    useCallback: function (e, t) {
      return (ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ye,
    useEffect: Ga,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ko(4194308, 4, xf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ko(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ko(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ft();
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
        (e = e.dispatch = og.bind(null, X, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ja,
    useDebugValue: Tu,
    useDeferredValue: function (e) {
      return (ft().memoizedState = e);
    },
    useTransition: function () {
      var e = Ja(!1),
        t = e[0];
      return (e = rg.bind(null, e[1])), (ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        o = ft();
      if (K) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(T(349));
        hn & 30 || hf(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Ga(gf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Gr(9, mf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ft(),
        t = ae.identifierPrefix;
      if (K) {
        var n = St,
          r = wt;
        (n = (r & ~(1 << (32 - it(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = qr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ng++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  sg = {
    readContext: Ye,
    useCallback: Cf,
    useContext: Ye,
    useEffect: Nu,
    useImperativeHandle: kf,
    useInsertionEffect: Sf,
    useLayoutEffect: Ef,
    useMemo: Rf,
    useReducer: _l,
    useRef: wf,
    useState: function () {
      return _l(Jr);
    },
    useDebugValue: Tu,
    useDeferredValue: function (e) {
      var t = qe();
      return Nf(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = _l(Jr)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: ff,
    useSyncExternalStore: pf,
    useId: Tf,
    unstable_isNewReconciler: !1,
  },
  ug = {
    readContext: Ye,
    useCallback: Cf,
    useContext: Ye,
    useEffect: Nu,
    useImperativeHandle: kf,
    useInsertionEffect: Sf,
    useLayoutEffect: Ef,
    useMemo: Rf,
    useReducer: Dl,
    useRef: wf,
    useState: function () {
      return Dl(Jr);
    },
    useDebugValue: Tu,
    useDeferredValue: function (e) {
      var t = qe();
      return re === null ? (t.memoizedState = e) : Nf(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = Dl(Jr)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: ff,
    useSyncExternalStore: pf,
    useId: Tf,
    unstable_isNewReconciler: !1,
  };
function nt(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ss(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $i = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Sn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      o = bt(e),
      i = Et(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Vt(e, i, o)),
      t !== null && (lt(t, e, o, r), Wo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      o = bt(e),
      i = Et(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Vt(e, i, o)),
      t !== null && (lt(t, e, o, r), Wo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Se(),
      r = bt(e),
      o = Et(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Vt(e, o, r)),
      t !== null && (lt(t, e, r, n), Wo(t, e, r));
  },
};
function Za(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Wr(n, r) || !Wr(o, i)
      : !0
  );
}
function Pf(e, t, n) {
  var r = !1,
    o = Xt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ye(i))
      : ((o = Te(t) ? fn : ye.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Xn(e, o) : Xt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $i),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ec(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $i.enqueueReplaceState(t, t.state, null);
}
function Es(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), wu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Ye(i))
    : ((i = Te(t) ? fn : ye.current), (o.context = Xn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ss(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && $i.enqueueReplaceState(o, o.state, null),
      mi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Fh(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ol(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ag = typeof WeakMap == "function" ? WeakMap : Map;
function Lf(e, t, n) {
  (n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Si || ((Si = !0), (Ls = r)), xs(e, t);
    }),
    n
  );
}
function Af(e, t, n) {
  (n = Et(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        xs(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        xs(e, t),
          typeof r != "function" &&
            (Wt === null ? (Wt = new Set([this])) : Wt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function tc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ag();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = kg.bind(null, e, t, n)), t.then(e, e));
}
function nc(e) {
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
function rc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Et(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var cg = Nt.ReactCurrentOwner,
  Re = !1;
function we(e, t, n, r) {
  t.child = e === null ? uf(t, null, n, r) : qn(t, e.child, n, r);
}
function oc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Wn(t, o),
    (r = Cu(e, t, n, r, i, o)),
    (n = Ru()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Rt(e, t, o))
      : (K && n && fu(t), (t.flags |= 1), we(e, t, r, o), t.child)
  );
}
function ic(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Mu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), zf(e, t, i, r, o))
      : ((e = qo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Wr), n(l, r) && e.ref === t.ref)
    )
      return Rt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Kt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function zf(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Wr(i, r) && e.ref === t.ref)
      if (((Re = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Re = !0);
      else return (t.lanes = e.lanes), Rt(e, t, o);
  }
  return ks(e, t, n, r, o);
}
function Mf(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        H(Un, Me),
        (Me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          H(Un, Me),
          (Me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        H(Un, Me),
        (Me |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      H(Un, Me),
      (Me |= r);
  return we(e, t, o, n), t.child;
}
function Ff(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ks(e, t, n, r, o) {
  var i = Te(n) ? fn : ye.current;
  return (
    (i = Xn(t, i)),
    Wn(t, o),
    (n = Cu(e, t, n, r, i, o)),
    (r = Ru()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Rt(e, t, o))
      : (K && r && fu(t), (t.flags |= 1), we(e, t, n, o), t.child)
  );
}
function lc(e, t, n, r, o) {
  if (Te(n)) {
    var i = !0;
    ci(t);
  } else i = !1;
  if ((Wn(t, o), t.stateNode === null))
    Qo(e, t), Pf(t, n, r), Es(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Ye(a))
      : ((a = Te(n) ? fn : ye.current), (a = Xn(t, a)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && ec(t, l, r, a)),
      (At = !1);
    var m = t.memoizedState;
    (l.state = m),
      mi(t, r, l, o),
      (u = t.memoizedState),
      s !== r || m !== u || Ne.current || At
        ? (typeof c == "function" && (Ss(t, n, c, r), (u = t.memoizedState)),
          (s = At || Za(t, n, s, r, m, u, a))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = a),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      cf(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : nt(t.type, s)),
      (l.props = a),
      (f = t.pendingProps),
      (m = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ye(u))
        : ((u = Te(n) ? fn : ye.current), (u = Xn(t, u)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== f || m !== u) && ec(t, l, r, u)),
      (At = !1),
      (m = t.memoizedState),
      (l.state = m),
      mi(t, r, l, o);
    var v = t.memoizedState;
    s !== f || m !== v || Ne.current || At
      ? (typeof y == "function" && (Ss(t, n, y, r), (v = t.memoizedState)),
        (a = At || Za(t, n, a, r, m, v, u) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, v, u),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, v, u)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (l.props = r),
        (l.state = v),
        (l.context = u),
        (r = a))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Cs(e, t, n, r, i, o);
}
function Cs(e, t, n, r, o, i) {
  Ff(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && ba(t, n, !1), Rt(e, t, i);
  (r = t.stateNode), (cg.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = qn(t, e.child, null, i)), (t.child = qn(t, null, s, i)))
      : we(e, t, s, i),
    (t.memoizedState = r.state),
    o && ba(t, n, !0),
    t.child
  );
}
function jf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Wa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Wa(e, t.context, !1),
    Su(e, t.containerInfo);
}
function sc(e, t, n, r, o) {
  return Yn(), hu(o), (t.flags |= 256), we(e, t, n, r), t.child;
}
var Rs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ns(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function If(e, t, n) {
  var r = t.pendingProps,
    o = Q.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    H(Q, o & 1),
    e === null)
  )
    return (
      ys(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Wi(l, r, 0, null)),
              (e = cn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ns(n)),
              (t.memoizedState = Rs),
              e)
            : _u(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return dg(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Kt(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Kt(s, i)) : ((i = cn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Ns(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Rs),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Kt(i, { mode: "visible", children: r.children })),
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
function _u(e, t) {
  return (
    (t = Wi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function zo(e, t, n, r) {
  return (
    r !== null && hu(r),
    qn(t, e.child, null, n),
    (e = _u(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function dg(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ol(Error(T(422)))), zo(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Wi({ mode: "visible", children: r.children }, o, 0, null)),
        (i = cn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && qn(t, e.child, null, l),
        (t.child.memoizedState = Ns(l)),
        (t.memoizedState = Rs),
        i);
  if (!(t.mode & 1)) return zo(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(T(419))), (r = Ol(i, r, void 0)), zo(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Re || s)) {
    if (((r = ae), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Ct(e, o), lt(r, e, o, -1));
    }
    return zu(), (r = Ol(Error(T(421)))), zo(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Cg.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Fe = Ht(o.nextSibling)),
      (je = t),
      (K = !0),
      (ot = null),
      e !== null &&
        ((be[Ke++] = wt),
        (be[Ke++] = St),
        (be[Ke++] = pn),
        (wt = e.id),
        (St = e.overflow),
        (pn = t)),
      (t = _u(t, r.children)),
      (t.flags |= 4096),
      t);
}
function uc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ws(e.return, t, n);
}
function Pl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Uf(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((we(e, t, r.children, n), (r = Q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && uc(e, n, t);
        else if (e.tag === 19) uc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((H(Q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && gi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Pl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && gi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Pl(t, !0, n, null, i);
        break;
      case "together":
        Pl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Rt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (mn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Kt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function fg(e, t, n) {
  switch (t.tag) {
    case 3:
      jf(t), Yn();
      break;
    case 5:
      df(t);
      break;
    case 1:
      Te(t.type) && ci(t);
      break;
    case 4:
      Su(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      H(pi, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (H(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? If(e, t, n)
          : (H(Q, Q.current & 1),
            (e = Rt(e, t, n)),
            e !== null ? e.sibling : null);
      H(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Uf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        H(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Mf(e, t, n);
  }
  return Rt(e, t, n);
}
var Bf, Ts, $f, Hf;
Bf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ts = function () {};
$f = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), sn(mt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Yl(e, o)), (r = Yl(e, r)), (i = []);
        break;
      case "select":
        (o = Y({}, o, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Gl(e, o)), (r = Gl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ui);
    }
    es(n, r);
    var l;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var s = o[a];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (jr.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in u)
              u.hasOwnProperty(l) &&
                s[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (i || (i = []), i.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (i = i || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (jr.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && V("scroll", e),
                  i || s === u || (i = []))
                : (i = i || []).push(a, u));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Hf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!K)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function pg(e, t, n) {
  var r = t.pendingProps;
  switch ((pu(t), t.tag)) {
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
      return ge(t), null;
    case 1:
      return Te(t.type) && ai(), ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Jn(),
        W(Ne),
        W(ye),
        xu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Lo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ot !== null && (Ms(ot), (ot = null)))),
        Ts(e, t),
        ge(t),
        null
      );
    case 5:
      Eu(t);
      var o = sn(Yr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        $f(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return ge(t), null;
        }
        if (((e = sn(mt.current)), Lo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[pt] = t), (r[Qr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              V("cancel", r), V("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Cr.length; o++) V(Cr[o], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              V("error", r), V("load", r);
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              va(r, i), V("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                V("invalid", r);
              break;
            case "textarea":
              wa(r, i), V("invalid", r);
          }
          es(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Po(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Po(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : jr.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  V("scroll", r);
            }
          switch (n) {
            case "input":
              ko(r), ya(r, i, !0);
              break;
            case "textarea":
              ko(r), Sa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ui);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = md(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[pt] = t),
            (e[Qr] = r),
            Bf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = ts(n, r)), n)) {
              case "dialog":
                V("cancel", e), V("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Cr.length; o++) V(Cr[o], e);
                o = r;
                break;
              case "source":
                V("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                V("error", e), V("load", e), (o = r);
                break;
              case "details":
                V("toggle", e), (o = r);
                break;
              case "input":
                va(e, r), (o = Yl(e, r)), V("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Y({}, r, { value: void 0 })),
                  V("invalid", e);
                break;
              case "textarea":
                wa(e, r), (o = Gl(e, r)), V("invalid", e);
                break;
              default:
                o = r;
            }
            es(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === "style"
                  ? yd(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && gd(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Ir(e, u)
                    : typeof u == "number" && Ir(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (jr.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && V("scroll", e)
                      : u != null && Gs(e, i, u, l));
              }
            switch (n) {
              case "input":
                ko(e), ya(e, r, !1);
                break;
              case "textarea":
                ko(e), Sa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Qt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Bn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Bn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ui);
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
      return ge(t), null;
    case 6:
      if (e && t.stateNode != null) Hf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = sn(Yr.current)), sn(mt.current), Lo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pt] = t),
            (i = r.nodeValue !== n) && ((e = je), e !== null))
          )
            switch (e.tag) {
              case 3:
                Po(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Po(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pt] = t),
            (t.stateNode = r);
      }
      return ge(t), null;
    case 13:
      if (
        (W(Q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (K && Fe !== null && t.mode & 1 && !(t.flags & 128))
          lf(), Yn(), (t.flags |= 98560), (i = !1);
        else if (((i = Lo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(T(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(T(317));
            i[pt] = t;
          } else
            Yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ge(t), (i = !1);
        } else ot !== null && (Ms(ot), (ot = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? ie === 0 && (ie = 3) : zu())),
          t.updateQueue !== null && (t.flags |= 4),
          ge(t),
          null);
    case 4:
      return (
        Jn(), Ts(e, t), e === null && br(t.stateNode.containerInfo), ge(t), null
      );
    case 10:
      return vu(t.type._context), ge(t), null;
    case 17:
      return Te(t.type) && ai(), ge(t), null;
    case 19:
      if ((W(Q), (i = t.memoizedState), i === null)) return ge(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) yr(i, !1);
        else {
          if (ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = gi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    yr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return H(Q, (Q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Z() > Zn &&
            ((t.flags |= 128), (r = !0), yr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !K)
            )
              return ge(t), null;
          } else
            2 * Z() - i.renderingStartTime > Zn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Z()),
          (t.sibling = null),
          (n = Q.current),
          H(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (ge(t), null);
    case 22:
    case 23:
      return (
        Au(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Me & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function hg(e, t) {
  switch ((pu(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && ai(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Jn(),
        W(Ne),
        W(ye),
        xu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Eu(t), null;
    case 13:
      if ((W(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340));
        Yn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(Q), null;
    case 4:
      return Jn(), null;
    case 10:
      return vu(t.type._context), null;
    case 22:
    case 23:
      return Au(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mo = !1,
  ve = !1,
  mg = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function In(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        q(e, t, r);
      }
    else n.current = null;
}
function _s(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var ac = !1;
function gg(e, t) {
  if (((ds = ii), (e = Kd()), du(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            u = -1,
            a = 0,
            c = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (o !== 0 && f.nodeType !== 3) || (s = l + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (u = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (m = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (m === n && ++a === o && (s = l),
                m === i && ++c === r && (u = l),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = m), (m = f.parentNode);
            }
            f = y;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (fs = { focusedElem: e, selectionRange: n }, ii = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
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
                    C = v.memoizedState,
                    p = t.stateNode,
                    d = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : nt(t.type, g),
                      C,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (x) {
          q(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (v = ac), (ac = !1), v;
}
function Pr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && _s(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Hi(e, t) {
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
function Ds(e) {
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
function Vf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Vf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[pt], delete t[Qr], delete t[ms], delete t[Gm], delete t[Zm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Wf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Wf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Os(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ui));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Os(e, t, n), e = e.sibling; e !== null; ) Os(e, t, n), (e = e.sibling);
}
function Ps(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ps(e, t, n), e = e.sibling; e !== null; ) Ps(e, t, n), (e = e.sibling);
}
var fe = null,
  rt = !1;
function Ot(e, t, n) {
  for (n = n.child; n !== null; ) bf(e, t, n), (n = n.sibling);
}
function bf(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function")
    try {
      ht.onCommitFiberUnmount(zi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ve || In(n, t);
    case 6:
      var r = fe,
        o = rt;
      (fe = null),
        Ot(e, t, n),
        (fe = r),
        (rt = o),
        fe !== null &&
          (rt
            ? ((e = fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : fe.removeChild(n.stateNode));
      break;
    case 18:
      fe !== null &&
        (rt
          ? ((e = fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Cl(e.parentNode, n)
              : e.nodeType === 1 && Cl(e, n),
            Hr(e))
          : Cl(fe, n.stateNode));
      break;
    case 4:
      (r = fe),
        (o = rt),
        (fe = n.stateNode.containerInfo),
        (rt = !0),
        Ot(e, t, n),
        (fe = r),
        (rt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && _s(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (
        !ve &&
        (In(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          q(n, t, s);
        }
      Ot(e, t, n);
      break;
    case 21:
      Ot(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ve = (r = ve) || n.memoizedState !== null), Ot(e, t, n), (ve = r))
        : Ot(e, t, n);
      break;
    default:
      Ot(e, t, n);
  }
}
function dc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mg()),
      t.forEach(function (r) {
        var o = Rg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function tt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (fe = s.stateNode), (rt = !1);
              break e;
            case 3:
              (fe = s.stateNode.containerInfo), (rt = !0);
              break e;
            case 4:
              (fe = s.stateNode.containerInfo), (rt = !0);
              break e;
          }
          s = s.return;
        }
        if (fe === null) throw Error(T(160));
        bf(i, l, o), (fe = null), (rt = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (a) {
        q(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Kf(t, e), (t = t.sibling);
}
function Kf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((tt(t, e), dt(e), r & 4)) {
        try {
          Pr(3, e, e.return), Hi(3, e);
        } catch (g) {
          q(e, e.return, g);
        }
        try {
          Pr(5, e, e.return);
        } catch (g) {
          q(e, e.return, g);
        }
      }
      break;
    case 1:
      tt(t, e), dt(e), r & 512 && n !== null && In(n, n.return);
      break;
    case 5:
      if (
        (tt(t, e),
        dt(e),
        r & 512 && n !== null && In(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ir(o, "");
        } catch (g) {
          q(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && pd(o, i),
              ts(s, l);
            var a = ts(s, i);
            for (l = 0; l < u.length; l += 2) {
              var c = u[l],
                f = u[l + 1];
              c === "style"
                ? yd(o, f)
                : c === "dangerouslySetInnerHTML"
                ? gd(o, f)
                : c === "children"
                ? Ir(o, f)
                : Gs(o, c, f, a);
            }
            switch (s) {
              case "input":
                ql(o, i);
                break;
              case "textarea":
                hd(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? Bn(o, !!i.multiple, y, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Bn(o, !!i.multiple, i.defaultValue, !0)
                      : Bn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Qr] = i;
          } catch (g) {
            q(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((tt(t, e), dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          q(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (tt(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Hr(t.containerInfo);
        } catch (g) {
          q(e, e.return, g);
        }
      break;
    case 4:
      tt(t, e), dt(e);
      break;
    case 13:
      tt(t, e),
        dt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Pu = Z())),
        r & 4 && dc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ve = (a = ve) || c), tt(t, e), (ve = a)) : tt(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (O = e, c = e.child; c !== null; ) {
            for (f = O = c; O !== null; ) {
              switch (((m = O), (y = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pr(4, m, m.return);
                  break;
                case 1:
                  In(m, m.return);
                  var v = m.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (g) {
                      q(r, n, g);
                    }
                  }
                  break;
                case 5:
                  In(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    pc(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = m), (O = y)) : pc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  a
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = f.stateNode),
                      (u = f.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = vd("display", l)));
              } catch (g) {
                q(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = a ? "" : f.memoizedProps;
              } catch (g) {
                q(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      tt(t, e), dt(e), r & 4 && dc(e);
      break;
    case 21:
      break;
    default:
      tt(t, e), dt(e);
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ir(o, ""), (r.flags &= -33));
          var i = cc(e);
          Ps(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = cc(e);
          Os(e, s, l);
          break;
        default:
          throw Error(T(161));
      }
    } catch (u) {
      q(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function vg(e, t, n) {
  (O = e), Qf(e);
}
function Qf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var o = O,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Mo;
      if (!l) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || ve;
        s = Mo;
        var a = ve;
        if (((Mo = l), (ve = u) && !a))
          for (O = o; O !== null; )
            (l = O),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? hc(o)
                : u !== null
                ? ((u.return = l), (O = u))
                : hc(o);
        for (; i !== null; ) (O = i), Qf(i), (i = i.sibling);
        (O = o), (Mo = s), (ve = a);
      }
      fc(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (O = i)) : fc(e);
  }
}
function fc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ve || Hi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : nt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && qa(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                qa(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var a = t.alternate;
                if (a !== null) {
                  var c = a.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Hr(f);
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
              throw Error(T(163));
          }
        ve || (t.flags & 512 && Ds(t));
      } catch (m) {
        q(t, t.return, m);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function pc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function hc(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Hi(4, t);
          } catch (u) {
            q(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              q(t, o, u);
            }
          }
          var i = t.return;
          try {
            Ds(t);
          } catch (u) {
            q(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ds(t);
          } catch (u) {
            q(t, l, u);
          }
      }
    } catch (u) {
      q(t, t.return, u);
    }
    if (t === e) {
      O = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (O = s);
      break;
    }
    O = t.return;
  }
}
var yg = Math.ceil,
  wi = Nt.ReactCurrentDispatcher,
  Du = Nt.ReactCurrentOwner,
  Xe = Nt.ReactCurrentBatchConfig,
  I = 0,
  ae = null,
  te = null,
  pe = 0,
  Me = 0,
  Un = qt(0),
  ie = 0,
  Zr = null,
  mn = 0,
  Vi = 0,
  Ou = 0,
  Lr = null,
  Ce = null,
  Pu = 0,
  Zn = 1 / 0,
  vt = null,
  Si = !1,
  Ls = null,
  Wt = null,
  Fo = !1,
  It = null,
  Ei = 0,
  Ar = 0,
  As = null,
  Xo = -1,
  Yo = 0;
function Se() {
  return I & 6 ? Z() : Xo !== -1 ? Xo : (Xo = Z());
}
function bt(e) {
  return e.mode & 1
    ? I & 2 && pe !== 0
      ? pe & -pe
      : tg.transition !== null
      ? (Yo === 0 && (Yo = Od()), Yo)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jd(e.type))),
        e)
    : 1;
}
function lt(e, t, n, r) {
  if (50 < Ar) throw ((Ar = 0), (As = null), Error(T(185)));
  oo(e, n, r),
    (!(I & 2) || e !== ae) &&
      (e === ae && (!(I & 2) && (Vi |= n), ie === 4 && Ft(e, pe)),
      _e(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((Zn = Z() + 500), Ui && Jt()));
}
function _e(e, t) {
  var n = e.callbackNode;
  tm(e, t);
  var r = oi(e, e === ae ? pe : 0);
  if (r === 0)
    n !== null && ka(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ka(n), t === 1))
      e.tag === 0 ? eg(mc.bind(null, e)) : nf(mc.bind(null, e)),
        qm(function () {
          !(I & 6) && Jt();
        }),
        (n = null);
    else {
      switch (Pd(r)) {
        case 1:
          n = ru;
          break;
        case 4:
          n = _d;
          break;
        case 16:
          n = ri;
          break;
        case 536870912:
          n = Dd;
          break;
        default:
          n = ri;
      }
      n = tp(n, Xf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Xf(e, t) {
  if (((Xo = -1), (Yo = 0), I & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (bn() && e.callbackNode !== n) return null;
  var r = oi(e, e === ae ? pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xi(e, r);
  else {
    t = r;
    var o = I;
    I |= 2;
    var i = qf();
    (ae !== e || pe !== t) && ((vt = null), (Zn = Z() + 500), an(e, t));
    do
      try {
        Eg();
        break;
      } catch (s) {
        Yf(e, s);
      }
    while (!0);
    gu(),
      (wi.current = i),
      (I = o),
      te !== null ? (t = 0) : ((ae = null), (pe = 0), (t = ie));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ls(e)), o !== 0 && ((r = o), (t = zs(e, o)))), t === 1)
    )
      throw ((n = Zr), an(e, 0), Ft(e, r), _e(e, Z()), n);
    if (t === 6) Ft(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !wg(o) &&
          ((t = xi(e, r)),
          t === 2 && ((i = ls(e)), i !== 0 && ((r = i), (t = zs(e, i)))),
          t === 1))
      )
        throw ((n = Zr), an(e, 0), Ft(e, r), _e(e, Z()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          nn(e, Ce, vt);
          break;
        case 3:
          if (
            (Ft(e, r), (r & 130023424) === r && ((t = Pu + 500 - Z()), 10 < t))
          ) {
            if (oi(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Se(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = hs(nn.bind(null, e, Ce, vt), t);
            break;
          }
          nn(e, Ce, vt);
          break;
        case 4:
          if ((Ft(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - it(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Z() - r),
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
                : 1960 * yg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = hs(nn.bind(null, e, Ce, vt), r);
            break;
          }
          nn(e, Ce, vt);
          break;
        case 5:
          nn(e, Ce, vt);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return _e(e, Z()), e.callbackNode === n ? Xf.bind(null, e) : null;
}
function zs(e, t) {
  var n = Lr;
  return (
    e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256),
    (e = xi(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && Ms(t)),
    e
  );
}
function Ms(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function wg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!st(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ft(e, t) {
  for (
    t &= ~Ou,
      t &= ~Vi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - it(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function mc(e) {
  if (I & 6) throw Error(T(327));
  bn();
  var t = oi(e, 0);
  if (!(t & 1)) return _e(e, Z()), null;
  var n = xi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ls(e);
    r !== 0 && ((t = r), (n = zs(e, r)));
  }
  if (n === 1) throw ((n = Zr), an(e, 0), Ft(e, t), _e(e, Z()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nn(e, Ce, vt),
    _e(e, Z()),
    null
  );
}
function Lu(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((Zn = Z() + 500), Ui && Jt());
  }
}
function gn(e) {
  It !== null && It.tag === 0 && !(I & 6) && bn();
  var t = I;
  I |= 1;
  var n = Xe.transition,
    r = U;
  try {
    if (((Xe.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (Xe.transition = n), (I = t), !(I & 6) && Jt();
  }
}
function Au() {
  (Me = Un.current), W(Un);
}
function an(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ym(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((pu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ai();
          break;
        case 3:
          Jn(), W(Ne), W(ye), xu();
          break;
        case 5:
          Eu(r);
          break;
        case 4:
          Jn();
          break;
        case 13:
          W(Q);
          break;
        case 19:
          W(Q);
          break;
        case 10:
          vu(r.type._context);
          break;
        case 22:
        case 23:
          Au();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (te = e = Kt(e.current, null)),
    (pe = Me = t),
    (ie = 0),
    (Zr = null),
    (Ou = Vi = mn = 0),
    (Ce = Lr = null),
    ln !== null)
  ) {
    for (t = 0; t < ln.length; t++)
      if (((n = ln[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    ln = null;
  }
  return e;
}
function Yf(e, t) {
  do {
    var n = te;
    try {
      if ((gu(), (bo.current = yi), vi)) {
        for (var r = X.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        vi = !1;
      }
      if (
        ((hn = 0),
        (se = re = X = null),
        (Or = !1),
        (qr = 0),
        (Du.current = null),
        n === null || n.return === null)
      ) {
        (ie = 1), (Zr = t), (te = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          u = t;
        if (
          ((t = pe),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            c = s,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = nc(l);
          if (y !== null) {
            (y.flags &= -257),
              rc(y, l, s, i, t),
              y.mode & 1 && tc(i, a, t),
              (t = y),
              (u = a);
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(u), (t.updateQueue = g);
            } else v.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              tc(i, a, t), zu();
              break e;
            }
            u = Error(T(426));
          }
        } else if (K && s.mode & 1) {
          var C = nc(l);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              rc(C, l, s, i, t),
              hu(Gn(u, s));
            break e;
          }
        }
        (i = u = Gn(u, s)),
          ie !== 4 && (ie = 2),
          Lr === null ? (Lr = [i]) : Lr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = Lf(i, u, t);
              Ya(i, p);
              break e;
            case 1:
              s = u;
              var d = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Wt === null || !Wt.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var x = Af(i, s, t);
                Ya(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Gf(n);
    } catch (w) {
      (t = w), te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qf() {
  var e = wi.current;
  return (wi.current = yi), e === null ? yi : e;
}
function zu() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    ae === null || (!(mn & 268435455) && !(Vi & 268435455)) || Ft(ae, pe);
}
function xi(e, t) {
  var n = I;
  I |= 2;
  var r = qf();
  (ae !== e || pe !== t) && ((vt = null), an(e, t));
  do
    try {
      Sg();
      break;
    } catch (o) {
      Yf(e, o);
    }
  while (!0);
  if ((gu(), (I = n), (wi.current = r), te !== null)) throw Error(T(261));
  return (ae = null), (pe = 0), ie;
}
function Sg() {
  for (; te !== null; ) Jf(te);
}
function Eg() {
  for (; te !== null && !Kh(); ) Jf(te);
}
function Jf(e) {
  var t = ep(e.alternate, e, Me);
  (e.memoizedProps = e.pendingProps),
    t === null ? Gf(e) : (te = t),
    (Du.current = null);
}
function Gf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = hg(n, t)), n !== null)) {
        (n.flags &= 32767), (te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ie = 6), (te = null);
        return;
      }
    } else if (((n = pg(n, t, Me)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function nn(e, t, n) {
  var r = U,
    o = Xe.transition;
  try {
    (Xe.transition = null), (U = 1), xg(e, t, n, r);
  } finally {
    (Xe.transition = o), (U = r);
  }
  return null;
}
function xg(e, t, n, r) {
  do bn();
  while (It !== null);
  if (I & 6) throw Error(T(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (nm(e, i),
    e === ae && ((te = ae = null), (pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Fo ||
      ((Fo = !0),
      tp(ri, function () {
        return bn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Xe.transition), (Xe.transition = null);
    var l = U;
    U = 1;
    var s = I;
    (I |= 4),
      (Du.current = null),
      gg(e, n),
      Kf(n, e),
      Hm(fs),
      (ii = !!ds),
      (fs = ds = null),
      (e.current = n),
      vg(n),
      Qh(),
      (I = s),
      (U = l),
      (Xe.transition = i);
  } else e.current = n;
  if (
    (Fo && ((Fo = !1), (It = e), (Ei = o)),
    (i = e.pendingLanes),
    i === 0 && (Wt = null),
    qh(n.stateNode),
    _e(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Si) throw ((Si = !1), (e = Ls), (Ls = null), e);
  return (
    Ei & 1 && e.tag !== 0 && bn(),
    (i = e.pendingLanes),
    i & 1 ? (e === As ? Ar++ : ((Ar = 0), (As = e))) : (Ar = 0),
    Jt(),
    null
  );
}
function bn() {
  if (It !== null) {
    var e = Pd(Ei),
      t = Xe.transition,
      n = U;
    try {
      if (((Xe.transition = null), (U = 16 > e ? 16 : e), It === null))
        var r = !1;
      else {
        if (((e = It), (It = null), (Ei = 0), I & 6)) throw Error(T(331));
        var o = I;
        for (I |= 4, O = e.current; O !== null; ) {
          var i = O,
            l = i.child;
          if (O.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (O = a; O !== null; ) {
                  var c = O;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pr(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (O = f);
                  else
                    for (; O !== null; ) {
                      c = O;
                      var m = c.sibling,
                        y = c.return;
                      if ((Vf(c), c === a)) {
                        O = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = y), (O = m);
                        break;
                      }
                      O = y;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var C = g.sibling;
                    (g.sibling = null), (g = C);
                  } while (g !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (O = l);
          else
            e: for (; O !== null; ) {
              if (((i = O), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pr(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (O = p);
                break e;
              }
              O = i.return;
            }
        }
        var d = e.current;
        for (O = d; O !== null; ) {
          l = O;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) (h.return = l), (O = h);
          else
            e: for (l = d; O !== null; ) {
              if (((s = O), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hi(9, s);
                  }
                } catch (w) {
                  q(s, s.return, w);
                }
              if (s === l) {
                O = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (O = x);
                break e;
              }
              O = s.return;
            }
        }
        if (
          ((I = o), Jt(), ht && typeof ht.onPostCommitFiberRoot == "function")
        )
          try {
            ht.onPostCommitFiberRoot(zi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (Xe.transition = t);
    }
  }
  return !1;
}
function gc(e, t, n) {
  (t = Gn(n, t)),
    (t = Lf(e, t, 1)),
    (e = Vt(e, t, 1)),
    (t = Se()),
    e !== null && (oo(e, 1, t), _e(e, t));
}
function q(e, t, n) {
  if (e.tag === 3) gc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        gc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Wt === null || !Wt.has(r)))
        ) {
          (e = Gn(n, e)),
            (e = Af(t, e, 1)),
            (t = Vt(t, e, 1)),
            (e = Se()),
            t !== null && (oo(t, 1, e), _e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function kg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (pe & n) === n &&
      (ie === 4 || (ie === 3 && (pe & 130023424) === pe && 500 > Z() - Pu)
        ? an(e, 0)
        : (Ou |= n)),
    _e(e, t);
}
function Zf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = No), (No <<= 1), !(No & 130023424) && (No = 4194304))
      : (t = 1));
  var n = Se();
  (e = Ct(e, t)), e !== null && (oo(e, t, n), _e(e, n));
}
function Cg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Zf(e, n);
}
function Rg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), Zf(e, n);
}
var ep;
ep = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ne.current) Re = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Re = !1), fg(e, t, n);
      Re = !!(e.flags & 131072);
    }
  else (Re = !1), K && t.flags & 1048576 && rf(t, fi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Qo(e, t), (e = t.pendingProps);
      var o = Xn(t, ye.current);
      Wn(t, n), (o = Cu(null, t, r, e, o, n));
      var i = Ru();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((i = !0), ci(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            wu(t),
            (o.updater = $i),
            (t.stateNode = o),
            (o._reactInternals = t),
            Es(t, r, e, n),
            (t = Cs(null, t, r, !0, i, n)))
          : ((t.tag = 0), K && i && fu(t), we(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Qo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Tg(r)),
          (e = nt(r, e)),
          o)
        ) {
          case 0:
            t = ks(null, t, r, e, n);
            break e;
          case 1:
            t = lc(null, t, r, e, n);
            break e;
          case 11:
            t = oc(null, t, r, e, n);
            break e;
          case 14:
            t = ic(null, t, r, nt(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nt(r, o)),
        ks(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nt(r, o)),
        lc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((jf(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          cf(e, t),
          mi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Gn(Error(T(423)), t)), (t = sc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Gn(Error(T(424)), t)), (t = sc(e, t, r, n, o));
            break e;
          } else
            for (
              Fe = Ht(t.stateNode.containerInfo.firstChild),
                je = t,
                K = !0,
                ot = null,
                n = uf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Yn(), r === o)) {
            t = Rt(e, t, n);
            break e;
          }
          we(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        df(t),
        e === null && ys(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        ps(r, o) ? (l = null) : i !== null && ps(r, i) && (t.flags |= 32),
        Ff(e, t),
        we(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && ys(t), null;
    case 13:
      return If(e, t, n);
    case 4:
      return (
        Su(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = qn(t, null, r, n)) : we(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nt(r, o)),
        oc(e, t, r, o, n)
      );
    case 7:
      return we(e, t, t.pendingProps, n), t.child;
    case 8:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          H(pi, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (st(i.value, l)) {
            if (i.children === o.children && !Ne.current) {
              t = Rt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Et(-1, n & -n)), (u.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var c = a.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (a.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      ws(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(T(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  ws(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        we(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Wn(t, n),
        (o = Ye(o)),
        (r = r(o)),
        (t.flags |= 1),
        we(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = nt(r, t.pendingProps)),
        (o = nt(r.type, o)),
        ic(e, t, r, o, n)
      );
    case 15:
      return zf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nt(r, o)),
        Qo(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), ci(t)) : (e = !1),
        Wn(t, n),
        Pf(t, r, o),
        Es(t, r, o, n),
        Cs(null, t, r, !0, e, n)
      );
    case 19:
      return Uf(e, t, n);
    case 22:
      return Mf(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function tp(e, t) {
  return Td(e, t);
}
function Ng(e, t, n, r) {
  (this.tag = e),
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
    (this.alternate = null);
}
function Qe(e, t, n, r) {
  return new Ng(e, t, n, r);
}
function Mu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Tg(e) {
  if (typeof e == "function") return Mu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === eu)) return 11;
    if (e === tu) return 14;
  }
  return 2;
}
function Kt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Qe(e.tag, t, e.key, e.mode)),
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
function qo(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Mu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Dn:
        return cn(n.children, o, i, t);
      case Zs:
        (l = 8), (o |= 8);
        break;
      case bl:
        return (
          (e = Qe(12, n, t, o | 2)), (e.elementType = bl), (e.lanes = i), e
        );
      case Kl:
        return (e = Qe(13, n, t, o)), (e.elementType = Kl), (e.lanes = i), e;
      case Ql:
        return (e = Qe(19, n, t, o)), (e.elementType = Ql), (e.lanes = i), e;
      case cd:
        return Wi(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ud:
              l = 10;
              break e;
            case ad:
              l = 9;
              break e;
            case eu:
              l = 11;
              break e;
            case tu:
              l = 14;
              break e;
            case Lt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Qe(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function cn(e, t, n, r) {
  return (e = Qe(7, e, r, t)), (e.lanes = n), e;
}
function Wi(e, t, n, r) {
  return (
    (e = Qe(22, e, r, t)),
    (e.elementType = cd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ll(e, t, n) {
  return (e = Qe(6, e, null, t)), (e.lanes = n), e;
}
function Al(e, t, n) {
  return (
    (t = Qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function _g(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = pl(0)),
    (this.expirationTimes = pl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = pl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Fu(e, t, n, r, o, i, l, s, u) {
  return (
    (e = new _g(e, t, n, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Qe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    wu(i),
    e
  );
}
function Dg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: _n,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function np(e) {
  if (!e) return Xt;
  e = e._reactInternals;
  e: {
    if (Sn(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return tf(e, n, t);
  }
  return t;
}
function rp(e, t, n, r, o, i, l, s, u) {
  return (
    (e = Fu(n, r, !0, e, o, i, l, s, u)),
    (e.context = np(null)),
    (n = e.current),
    (r = Se()),
    (o = bt(n)),
    (i = Et(r, o)),
    (i.callback = t ?? null),
    Vt(n, i, o),
    (e.current.lanes = o),
    oo(e, o, r),
    _e(e, r),
    e
  );
}
function bi(e, t, n, r) {
  var o = t.current,
    i = Se(),
    l = bt(o);
  return (
    (n = np(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Et(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Vt(o, t, l)),
    e !== null && (lt(e, o, l, i), Wo(e, o, l)),
    l
  );
}
function ki(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function vc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ju(e, t) {
  vc(e, t), (e = e.alternate) && vc(e, t);
}
function Og() {
  return null;
}
var op =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Iu(e) {
  this._internalRoot = e;
}
Ki.prototype.render = Iu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  bi(e, t, null, null);
};
Ki.prototype.unmount = Iu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gn(function () {
      bi(null, e, null, null);
    }),
      (t[kt] = null);
  }
};
function Ki(e) {
  this._internalRoot = e;
}
Ki.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = zd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++);
    Mt.splice(n, 0, e), n === 0 && Fd(e);
  }
};
function Uu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Qi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function yc() {}
function Pg(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = ki(l);
        i.call(a);
      };
    }
    var l = rp(t, r, e, 0, null, !1, !1, "", yc);
    return (
      (e._reactRootContainer = l),
      (e[kt] = l.current),
      br(e.nodeType === 8 ? e.parentNode : e),
      gn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = ki(u);
      s.call(a);
    };
  }
  var u = Fu(e, 0, !1, null, null, !1, !1, "", yc);
  return (
    (e._reactRootContainer = u),
    (e[kt] = u.current),
    br(e.nodeType === 8 ? e.parentNode : e),
    gn(function () {
      bi(t, u, n, r);
    }),
    u
  );
}
function Xi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var u = ki(l);
        s.call(u);
      };
    }
    bi(t, l, e, o);
  } else l = Pg(n, t, e, o, r);
  return ki(l);
}
Ld = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = kr(t.pendingLanes);
        n !== 0 &&
          (ou(t, n | 1), _e(t, Z()), !(I & 6) && ((Zn = Z() + 500), Jt()));
      }
      break;
    case 13:
      gn(function () {
        var r = Ct(e, 1);
        if (r !== null) {
          var o = Se();
          lt(r, e, 1, o);
        }
      }),
        ju(e, 1);
  }
};
iu = function (e) {
  if (e.tag === 13) {
    var t = Ct(e, 134217728);
    if (t !== null) {
      var n = Se();
      lt(t, e, 134217728, n);
    }
    ju(e, 134217728);
  }
};
Ad = function (e) {
  if (e.tag === 13) {
    var t = bt(e),
      n = Ct(e, t);
    if (n !== null) {
      var r = Se();
      lt(n, e, t, r);
    }
    ju(e, t);
  }
};
zd = function () {
  return U;
};
Md = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
rs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ql(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Ii(r);
            if (!o) throw Error(T(90));
            fd(r), ql(r, o);
          }
        }
      }
      break;
    case "textarea":
      hd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Bn(e, !!n.multiple, t, !1);
  }
};
Ed = Lu;
xd = gn;
var Lg = { usingClientEntryPoint: !1, Events: [lo, An, Ii, wd, Sd, Lu] },
  wr = {
    findFiberByHostInstance: on,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ag = {
    bundleType: wr.bundleType,
    version: wr.version,
    rendererPackageName: wr.rendererPackageName,
    rendererConfig: wr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Rd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wr.findFiberByHostInstance || Og,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jo.isDisabled && jo.supportsFiber)
    try {
      (zi = jo.inject(Ag)), (ht = jo);
    } catch {}
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lg;
Be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Uu(t)) throw Error(T(200));
  return Dg(e, t, null, n);
};
Be.createRoot = function (e, t) {
  if (!Uu(e)) throw Error(T(299));
  var n = !1,
    r = "",
    o = op;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Fu(e, 1, !1, null, null, n, !1, r, o)),
    (e[kt] = t.current),
    br(e.nodeType === 8 ? e.parentNode : e),
    new Iu(t)
  );
};
Be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = Rd(t)), (e = e === null ? null : e.stateNode), e;
};
Be.flushSync = function (e) {
  return gn(e);
};
Be.hydrate = function (e, t, n) {
  if (!Qi(t)) throw Error(T(200));
  return Xi(null, e, t, !0, n);
};
Be.hydrateRoot = function (e, t, n) {
  if (!Uu(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = op;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = rp(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[kt] = t.current),
    br(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ki(t);
};
Be.render = function (e, t, n) {
  if (!Qi(t)) throw Error(T(200));
  return Xi(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function (e) {
  if (!Qi(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (gn(function () {
        Xi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[kt] = null);
        });
      }),
      !0)
    : !1;
};
Be.unstable_batchedUpdates = Lu;
Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Qi(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return Xi(e, t, n, !1, r);
};
Be.version = "18.3.1-next-f1338f8080-20240426";
function ip() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ip);
    } catch (e) {
      console.error(e);
    }
}
ip(), (od.exports = Be);
var rn = od.exports,
  lp,
  wc = rn;
(lp = wc.createRoot), wc.hydrateRoot;
const Yi =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function rr(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || t === "[object global]";
}
function Bu(e) {
  return "nodeType" in e;
}
function ke(e) {
  var t, n;
  return e
    ? rr(e)
      ? e
      : Bu(e) &&
        (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null
      ? t
      : window
    : window;
}
function $u(e) {
  const { Document: t } = ke(e);
  return e instanceof t;
}
function uo(e) {
  return rr(e) ? !1 : e instanceof ke(e).HTMLElement;
}
function sp(e) {
  return e instanceof ke(e).SVGElement;
}
function or(e) {
  return e
    ? rr(e)
      ? e.document
      : Bu(e)
      ? $u(e)
        ? e
        : uo(e) || sp(e)
        ? e.ownerDocument
        : document
      : document
    : document;
}
const gt = Yi ? E.useLayoutEffect : E.useEffect;
function qi(e) {
  const t = E.useRef(e);
  return (
    gt(() => {
      t.current = e;
    }),
    E.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return t.current == null ? void 0 : t.current(...r);
    }, [])
  );
}
function zg() {
  const e = E.useRef(null),
    t = E.useCallback((r, o) => {
      e.current = setInterval(r, o);
    }, []),
    n = E.useCallback(() => {
      e.current !== null && (clearInterval(e.current), (e.current = null));
    }, []);
  return [t, n];
}
function eo(e, t) {
  t === void 0 && (t = [e]);
  const n = E.useRef(e);
  return (
    gt(() => {
      n.current !== e && (n.current = e);
    }, t),
    n
  );
}
function ao(e, t) {
  const n = E.useRef();
  return E.useMemo(() => {
    const r = e(n.current);
    return (n.current = r), r;
  }, [...t]);
}
function Ci(e) {
  const t = qi(e),
    n = E.useRef(null),
    r = E.useCallback((o) => {
      o !== n.current && (t == null || t(o, n.current)), (n.current = o);
    }, []);
  return [n, r];
}
function Ri(e) {
  const t = E.useRef();
  return (
    E.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
let zl = {};
function Ji(e, t) {
  return E.useMemo(() => {
    if (t) return t;
    const n = zl[e] == null ? 0 : zl[e] + 1;
    return (zl[e] = n), e + "-" + n;
  }, [e, t]);
}
function up(e) {
  return function (t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      r[o - 1] = arguments[o];
    return r.reduce(
      (i, l) => {
        const s = Object.entries(l);
        for (const [u, a] of s) {
          const c = i[u];
          c != null && (i[u] = c + e * a);
        }
        return i;
      },
      { ...t },
    );
  };
}
const Kn = up(1),
  Ni = up(-1);
function Mg(e) {
  return "clientX" in e && "clientY" in e;
}
function Hu(e) {
  if (!e) return !1;
  const { KeyboardEvent: t } = ke(e.target);
  return t && e instanceof t;
}
function Fg(e) {
  if (!e) return !1;
  const { TouchEvent: t } = ke(e.target);
  return t && e instanceof t;
}
function Ti(e) {
  if (Fg(e)) {
    if (e.touches && e.touches.length) {
      const { clientX: t, clientY: n } = e.touches[0];
      return { x: t, y: n };
    } else if (e.changedTouches && e.changedTouches.length) {
      const { clientX: t, clientY: n } = e.changedTouches[0];
      return { x: t, y: n };
    }
  }
  return Mg(e) ? { x: e.clientX, y: e.clientY } : null;
}
const vn = Object.freeze({
    Translate: {
      toString(e) {
        if (!e) return;
        const { x: t, y: n } = e;
        return (
          "translate3d(" +
          (t ? Math.round(t) : 0) +
          "px, " +
          (n ? Math.round(n) : 0) +
          "px, 0)"
        );
      },
    },
    Scale: {
      toString(e) {
        if (!e) return;
        const { scaleX: t, scaleY: n } = e;
        return "scaleX(" + t + ") scaleY(" + n + ")";
      },
    },
    Transform: {
      toString(e) {
        if (e)
          return [vn.Translate.toString(e), vn.Scale.toString(e)].join(" ");
      },
    },
    Transition: {
      toString(e) {
        let { property: t, duration: n, easing: r } = e;
        return t + " " + n + "ms " + r;
      },
    },
  }),
  Sc =
    "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function jg(e) {
  return e.matches(Sc) ? e : e.querySelector(Sc);
}
const Ig = { display: "none" };
function Ug(e) {
  let { id: t, value: n } = e;
  return G.createElement("div", { id: t, style: Ig }, n);
}
function Bg(e) {
  let { id: t, announcement: n, ariaLiveType: r = "assertive" } = e;
  const o = {
    position: "fixed",
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap",
  };
  return G.createElement(
    "div",
    { id: t, style: o, role: "status", "aria-live": r, "aria-atomic": !0 },
    n,
  );
}
function $g() {
  const [e, t] = E.useState("");
  return {
    announce: E.useCallback((r) => {
      r != null && t(r);
    }, []),
    announcement: e,
  };
}
const ap = E.createContext(null);
function Hg(e) {
  const t = E.useContext(ap);
  E.useEffect(() => {
    if (!t)
      throw new Error(
        "useDndMonitor must be used within a children of <DndContext>",
      );
    return t(e);
  }, [e, t]);
}
function Vg() {
  const [e] = E.useState(() => new Set()),
    t = E.useCallback((r) => (e.add(r), () => e.delete(r)), [e]);
  return [
    E.useCallback(
      (r) => {
        let { type: o, event: i } = r;
        e.forEach((l) => {
          var s;
          return (s = l[o]) == null ? void 0 : s.call(l, i);
        });
      },
      [e],
    ),
    t,
  ];
}
const Wg = {
    draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `,
  },
  bg = {
    onDragStart(e) {
      let { active: t } = e;
      return "Picked up draggable item " + t.id + ".";
    },
    onDragOver(e) {
      let { active: t, over: n } = e;
      return n
        ? "Draggable item " +
            t.id +
            " was moved over droppable area " +
            n.id +
            "."
        : "Draggable item " + t.id + " is no longer over a droppable area.";
    },
    onDragEnd(e) {
      let { active: t, over: n } = e;
      return n
        ? "Draggable item " + t.id + " was dropped over droppable area " + n.id
        : "Draggable item " + t.id + " was dropped.";
    },
    onDragCancel(e) {
      let { active: t } = e;
      return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
    },
  };
function Kg(e) {
  let {
    announcements: t = bg,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = Wg,
  } = e;
  const { announce: i, announcement: l } = $g(),
    s = Ji("DndLiveRegion"),
    [u, a] = E.useState(!1);
  if (
    (E.useEffect(() => {
      a(!0);
    }, []),
    Hg(
      E.useMemo(
        () => ({
          onDragStart(f) {
            let { active: m } = f;
            i(t.onDragStart({ active: m }));
          },
          onDragMove(f) {
            let { active: m, over: y } = f;
            t.onDragMove && i(t.onDragMove({ active: m, over: y }));
          },
          onDragOver(f) {
            let { active: m, over: y } = f;
            i(t.onDragOver({ active: m, over: y }));
          },
          onDragEnd(f) {
            let { active: m, over: y } = f;
            i(t.onDragEnd({ active: m, over: y }));
          },
          onDragCancel(f) {
            let { active: m, over: y } = f;
            i(t.onDragCancel({ active: m, over: y }));
          },
        }),
        [i, t],
      ),
    ),
    !u)
  )
    return null;
  const c = G.createElement(
    G.Fragment,
    null,
    G.createElement(Ug, { id: r, value: o.draggable }),
    G.createElement(Bg, { id: s, announcement: l }),
  );
  return n ? rn.createPortal(c, n) : c;
}
var oe;
(function (e) {
  (e.DragStart = "dragStart"),
    (e.DragMove = "dragMove"),
    (e.DragEnd = "dragEnd"),
    (e.DragCancel = "dragCancel"),
    (e.DragOver = "dragOver"),
    (e.RegisterDroppable = "registerDroppable"),
    (e.SetDroppableDisabled = "setDroppableDisabled"),
    (e.UnregisterDroppable = "unregisterDroppable");
})(oe || (oe = {}));
function _i() {}
const ut = Object.freeze({ x: 0, y: 0 });
function Qg(e, t) {
  const n = Ti(e);
  if (!n) return "0 0";
  const r = {
    x: ((n.x - t.left) / t.width) * 100,
    y: ((n.y - t.top) / t.height) * 100,
  };
  return r.x + "% " + r.y + "%";
}
function Xg(e, t) {
  let {
      data: { value: n },
    } = e,
    {
      data: { value: r },
    } = t;
  return r - n;
}
function Yg(e, t) {
  if (!e || e.length === 0) return null;
  const [n] = e;
  return n[t];
}
function qg(e, t) {
  const n = Math.max(t.top, e.top),
    r = Math.max(t.left, e.left),
    o = Math.min(t.left + t.width, e.left + e.width),
    i = Math.min(t.top + t.height, e.top + e.height),
    l = o - r,
    s = i - n;
  if (r < o && n < i) {
    const u = t.width * t.height,
      a = e.width * e.height,
      c = l * s,
      f = c / (u + a - c);
    return Number(f.toFixed(4));
  }
  return 0;
}
const Jg = (e) => {
  let { collisionRect: t, droppableRects: n, droppableContainers: r } = e;
  const o = [];
  for (const i of r) {
    const { id: l } = i,
      s = n.get(l);
    if (s) {
      const u = qg(s, t);
      u > 0 && o.push({ id: l, data: { droppableContainer: i, value: u } });
    }
  }
  return o.sort(Xg);
};
function Gg(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1,
  };
}
function cp(e, t) {
  return e && t ? { x: e.left - t.left, y: e.top - t.top } : ut;
}
function Zg(e) {
  return function (n) {
    for (
      var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1;
      i < r;
      i++
    )
      o[i - 1] = arguments[i];
    return o.reduce(
      (l, s) => ({
        ...l,
        top: l.top + e * s.y,
        bottom: l.bottom + e * s.y,
        left: l.left + e * s.x,
        right: l.right + e * s.x,
      }),
      { ...n },
    );
  };
}
const ev = Zg(1);
function dp(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return { x: +t[12], y: +t[13], scaleX: +t[0], scaleY: +t[5] };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return { x: +t[4], y: +t[5], scaleX: +t[0], scaleY: +t[3] };
  }
  return null;
}
function tv(e, t, n) {
  const r = dp(t);
  if (!r) return e;
  const { scaleX: o, scaleY: i, x: l, y: s } = r,
    u = e.left - l - (1 - o) * parseFloat(n),
    a = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)),
    c = o ? e.width / o : e.width,
    f = i ? e.height / i : e.height;
  return { width: c, height: f, top: a, right: u + c, bottom: a + f, left: u };
}
const nv = { ignoreTransform: !1 };
function co(e, t) {
  t === void 0 && (t = nv);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const { transform: a, transformOrigin: c } = ke(e).getComputedStyle(e);
    a && (n = tv(n, a, c));
  }
  const { top: r, left: o, width: i, height: l, bottom: s, right: u } = n;
  return { top: r, left: o, width: i, height: l, bottom: s, right: u };
}
function Ec(e) {
  return co(e, { ignoreTransform: !0 });
}
function rv(e) {
  const t = e.innerWidth,
    n = e.innerHeight;
  return { top: 0, left: 0, right: t, bottom: n, width: t, height: n };
}
function ov(e, t) {
  return (
    t === void 0 && (t = ke(e).getComputedStyle(e)), t.position === "fixed"
  );
}
function iv(e, t) {
  t === void 0 && (t = ke(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const i = t[o];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function Vu(e, t) {
  const n = [];
  function r(o) {
    if ((t != null && n.length >= t) || !o) return n;
    if ($u(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return n.push(o.scrollingElement), n;
    if (!uo(o) || sp(o) || n.includes(o)) return n;
    const i = ke(e).getComputedStyle(o);
    return o !== e && iv(o, i) && n.push(o), ov(o, i) ? n : r(o.parentNode);
  }
  return e ? r(e) : n;
}
function fp(e) {
  const [t] = Vu(e, 1);
  return t ?? null;
}
function Ml(e) {
  return !Yi || !e
    ? null
    : rr(e)
    ? e
    : Bu(e)
    ? $u(e) || e === or(e).scrollingElement
      ? window
      : uo(e)
      ? e
      : null
    : null;
}
function pp(e) {
  return rr(e) ? e.scrollX : e.scrollLeft;
}
function hp(e) {
  return rr(e) ? e.scrollY : e.scrollTop;
}
function Fs(e) {
  return { x: pp(e), y: hp(e) };
}
var ue;
(function (e) {
  (e[(e.Forward = 1)] = "Forward"), (e[(e.Backward = -1)] = "Backward");
})(ue || (ue = {}));
function mp(e) {
  return !Yi || !e ? !1 : e === document.scrollingElement;
}
function gp(e) {
  const t = { x: 0, y: 0 },
    n = mp(e)
      ? { height: window.innerHeight, width: window.innerWidth }
      : { height: e.clientHeight, width: e.clientWidth },
    r = { x: e.scrollWidth - n.width, y: e.scrollHeight - n.height },
    o = e.scrollTop <= t.y,
    i = e.scrollLeft <= t.x,
    l = e.scrollTop >= r.y,
    s = e.scrollLeft >= r.x;
  return {
    isTop: o,
    isLeft: i,
    isBottom: l,
    isRight: s,
    maxScroll: r,
    minScroll: t,
  };
}
const lv = { x: 0.2, y: 0.2 };
function sv(e, t, n, r, o) {
  let { top: i, left: l, right: s, bottom: u } = n;
  r === void 0 && (r = 10), o === void 0 && (o = lv);
  const { isTop: a, isBottom: c, isLeft: f, isRight: m } = gp(e),
    y = { x: 0, y: 0 },
    v = { x: 0, y: 0 },
    g = { height: t.height * o.y, width: t.width * o.x };
  return (
    !a && i <= t.top + g.height
      ? ((y.y = ue.Backward),
        (v.y = r * Math.abs((t.top + g.height - i) / g.height)))
      : !c &&
        u >= t.bottom - g.height &&
        ((y.y = ue.Forward),
        (v.y = r * Math.abs((t.bottom - g.height - u) / g.height))),
    !m && s >= t.right - g.width
      ? ((y.x = ue.Forward),
        (v.x = r * Math.abs((t.right - g.width - s) / g.width)))
      : !f &&
        l <= t.left + g.width &&
        ((y.x = ue.Backward),
        (v.x = r * Math.abs((t.left + g.width - l) / g.width))),
    { direction: y, speed: v }
  );
}
function uv(e) {
  if (e === document.scrollingElement) {
    const { innerWidth: i, innerHeight: l } = window;
    return { top: 0, left: 0, right: i, bottom: l, width: i, height: l };
  }
  const { top: t, left: n, right: r, bottom: o } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: o,
    width: e.clientWidth,
    height: e.clientHeight,
  };
}
function vp(e) {
  return e.reduce((t, n) => Kn(t, Fs(n)), ut);
}
function av(e) {
  return e.reduce((t, n) => t + pp(n), 0);
}
function cv(e) {
  return e.reduce((t, n) => t + hp(n), 0);
}
function yp(e, t) {
  if ((t === void 0 && (t = co), !e)) return;
  const { top: n, left: r, bottom: o, right: i } = t(e);
  fp(e) &&
    (o <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) &&
    e.scrollIntoView({ block: "center", inline: "center" });
}
const dv = [
  ["x", ["left", "right"], av],
  ["y", ["top", "bottom"], cv],
];
class Wu {
  constructor(t, n) {
    (this.rect = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.right = void 0),
      (this.left = void 0);
    const r = Vu(n),
      o = vp(r);
    (this.rect = { ...t }), (this.width = t.width), (this.height = t.height);
    for (const [i, l, s] of dv)
      for (const u of l)
        Object.defineProperty(this, u, {
          get: () => {
            const a = s(r),
              c = o[i] - a;
            return this.rect[u] + c;
          },
          enumerable: !0,
        });
    Object.defineProperty(this, "rect", { enumerable: !1 });
  }
}
class zr {
  constructor(t) {
    (this.target = void 0),
      (this.listeners = []),
      (this.removeAll = () => {
        this.listeners.forEach((n) => {
          var r;
          return (r = this.target) == null
            ? void 0
            : r.removeEventListener(...n);
        });
      }),
      (this.target = t);
  }
  add(t, n, r) {
    var o;
    (o = this.target) == null || o.addEventListener(t, n, r),
      this.listeners.push([t, n, r]);
  }
}
function fv(e) {
  const { EventTarget: t } = ke(e);
  return e instanceof t ? e : or(e);
}
function Fl(e, t) {
  const n = Math.abs(e.x),
    r = Math.abs(e.y);
  return typeof t == "number"
    ? Math.sqrt(n ** 2 + r ** 2) > t
    : "x" in t && "y" in t
    ? n > t.x && r > t.y
    : "x" in t
    ? n > t.x
    : "y" in t
    ? r > t.y
    : !1;
}
var We;
(function (e) {
  (e.Click = "click"),
    (e.DragStart = "dragstart"),
    (e.Keydown = "keydown"),
    (e.ContextMenu = "contextmenu"),
    (e.Resize = "resize"),
    (e.SelectionChange = "selectionchange"),
    (e.VisibilityChange = "visibilitychange");
})(We || (We = {}));
function xc(e) {
  e.preventDefault();
}
function pv(e) {
  e.stopPropagation();
}
var $;
(function (e) {
  (e.Space = "Space"),
    (e.Down = "ArrowDown"),
    (e.Right = "ArrowRight"),
    (e.Left = "ArrowLeft"),
    (e.Up = "ArrowUp"),
    (e.Esc = "Escape"),
    (e.Enter = "Enter");
})($ || ($ = {}));
const wp = {
    start: [$.Space, $.Enter],
    cancel: [$.Esc],
    end: [$.Space, $.Enter],
  },
  hv = (e, t) => {
    let { currentCoordinates: n } = t;
    switch (e.code) {
      case $.Right:
        return { ...n, x: n.x + 25 };
      case $.Left:
        return { ...n, x: n.x - 25 };
      case $.Down:
        return { ...n, y: n.y + 25 };
      case $.Up:
        return { ...n, y: n.y - 25 };
    }
  };
class Sp {
  constructor(t) {
    (this.props = void 0),
      (this.autoScrollEnabled = !1),
      (this.referenceCoordinates = void 0),
      (this.listeners = void 0),
      (this.windowListeners = void 0),
      (this.props = t);
    const {
      event: { target: n },
    } = t;
    (this.props = t),
      (this.listeners = new zr(or(n))),
      (this.windowListeners = new zr(ke(n))),
      (this.handleKeyDown = this.handleKeyDown.bind(this)),
      (this.handleCancel = this.handleCancel.bind(this)),
      this.attach();
  }
  attach() {
    this.handleStart(),
      this.windowListeners.add(We.Resize, this.handleCancel),
      this.windowListeners.add(We.VisibilityChange, this.handleCancel),
      setTimeout(() => this.listeners.add(We.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const { activeNode: t, onStart: n } = this.props,
      r = t.node.current;
    r && yp(r), n(ut);
  }
  handleKeyDown(t) {
    if (Hu(t)) {
      const { active: n, context: r, options: o } = this.props,
        {
          keyboardCodes: i = wp,
          coordinateGetter: l = hv,
          scrollBehavior: s = "smooth",
        } = o,
        { code: u } = t;
      if (i.end.includes(u)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(u)) {
        this.handleCancel(t);
        return;
      }
      const { collisionRect: a } = r.current,
        c = a ? { x: a.left, y: a.top } : ut;
      this.referenceCoordinates || (this.referenceCoordinates = c);
      const f = l(t, { active: n, context: r.current, currentCoordinates: c });
      if (f) {
        const m = Ni(f, c),
          y = { x: 0, y: 0 },
          { scrollableAncestors: v } = r.current;
        for (const g of v) {
          const C = t.code,
            {
              isTop: p,
              isRight: d,
              isLeft: h,
              isBottom: x,
              maxScroll: w,
              minScroll: R,
            } = gp(g),
            k = uv(g),
            N = {
              x: Math.min(
                C === $.Right ? k.right - k.width / 2 : k.right,
                Math.max(C === $.Right ? k.left : k.left + k.width / 2, f.x),
              ),
              y: Math.min(
                C === $.Down ? k.bottom - k.height / 2 : k.bottom,
                Math.max(C === $.Down ? k.top : k.top + k.height / 2, f.y),
              ),
            },
            _ = (C === $.Right && !d) || (C === $.Left && !h),
            P = (C === $.Down && !x) || (C === $.Up && !p);
          if (_ && N.x !== f.x) {
            const M = g.scrollLeft + m.x,
              le = (C === $.Right && M <= w.x) || (C === $.Left && M >= R.x);
            if (le && !m.y) {
              g.scrollTo({ left: M, behavior: s });
              return;
            }
            le
              ? (y.x = g.scrollLeft - M)
              : (y.x = C === $.Right ? g.scrollLeft - w.x : g.scrollLeft - R.x),
              y.x && g.scrollBy({ left: -y.x, behavior: s });
            break;
          } else if (P && N.y !== f.y) {
            const M = g.scrollTop + m.y,
              le = (C === $.Down && M <= w.y) || (C === $.Up && M >= R.y);
            if (le && !m.x) {
              g.scrollTo({ top: M, behavior: s });
              return;
            }
            le
              ? (y.y = g.scrollTop - M)
              : (y.y = C === $.Down ? g.scrollTop - w.y : g.scrollTop - R.y),
              y.y && g.scrollBy({ top: -y.y, behavior: s });
            break;
          }
        }
        this.handleMove(t, Kn(Ni(f, this.referenceCoordinates), y));
      }
    }
  }
  handleMove(t, n) {
    const { onMove: r } = this.props;
    t.preventDefault(), r(n);
  }
  handleEnd(t) {
    const { onEnd: n } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  handleCancel(t) {
    const { onCancel: n } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
Sp.activators = [
  {
    eventName: "onKeyDown",
    handler: (e, t, n) => {
      let { keyboardCodes: r = wp, onActivation: o } = t,
        { active: i } = n;
      const { code: l } = e.nativeEvent;
      if (r.start.includes(l)) {
        const s = i.activatorNode.current;
        return s && e.target !== s
          ? !1
          : (e.preventDefault(), o == null || o({ event: e.nativeEvent }), !0);
      }
      return !1;
    },
  },
];
function kc(e) {
  return !!(e && "distance" in e);
}
function Cc(e) {
  return !!(e && "delay" in e);
}
class bu {
  constructor(t, n, r) {
    var o;
    r === void 0 && (r = fv(t.event.target)),
      (this.props = void 0),
      (this.events = void 0),
      (this.autoScrollEnabled = !0),
      (this.document = void 0),
      (this.activated = !1),
      (this.initialCoordinates = void 0),
      (this.timeoutId = null),
      (this.listeners = void 0),
      (this.documentListeners = void 0),
      (this.windowListeners = void 0),
      (this.props = t),
      (this.events = n);
    const { event: i } = t,
      { target: l } = i;
    (this.props = t),
      (this.events = n),
      (this.document = or(l)),
      (this.documentListeners = new zr(this.document)),
      (this.listeners = new zr(r)),
      (this.windowListeners = new zr(ke(l))),
      (this.initialCoordinates = (o = Ti(i)) != null ? o : ut),
      (this.handleStart = this.handleStart.bind(this)),
      (this.handleMove = this.handleMove.bind(this)),
      (this.handleEnd = this.handleEnd.bind(this)),
      (this.handleCancel = this.handleCancel.bind(this)),
      (this.handleKeydown = this.handleKeydown.bind(this)),
      (this.removeTextSelection = this.removeTextSelection.bind(this)),
      this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: { activationConstraint: n, bypassActivationConstraint: r },
      },
    } = this;
    if (
      (this.listeners.add(t.move.name, this.handleMove, { passive: !1 }),
      this.listeners.add(t.end.name, this.handleEnd),
      this.windowListeners.add(We.Resize, this.handleCancel),
      this.windowListeners.add(We.DragStart, xc),
      this.windowListeners.add(We.VisibilityChange, this.handleCancel),
      this.windowListeners.add(We.ContextMenu, xc),
      this.documentListeners.add(We.Keydown, this.handleKeydown),
      n)
    ) {
      if (
        r != null &&
        r({
          event: this.props.event,
          activeNode: this.props.activeNode,
          options: this.props.options,
        })
      )
        return this.handleStart();
      if (Cc(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay);
        return;
      }
      if (kc(n)) return;
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(),
      this.windowListeners.removeAll(),
      setTimeout(this.documentListeners.removeAll, 50),
      this.timeoutId !== null &&
        (clearTimeout(this.timeoutId), (this.timeoutId = null));
  }
  handleStart() {
    const { initialCoordinates: t } = this,
      { onStart: n } = this.props;
    t &&
      ((this.activated = !0),
      this.documentListeners.add(We.Click, pv, { capture: !0 }),
      this.removeTextSelection(),
      this.documentListeners.add(We.SelectionChange, this.removeTextSelection),
      n(t));
  }
  handleMove(t) {
    var n;
    const { activated: r, initialCoordinates: o, props: i } = this,
      {
        onMove: l,
        options: { activationConstraint: s },
      } = i;
    if (!o) return;
    const u = (n = Ti(t)) != null ? n : ut,
      a = Ni(o, u);
    if (!r && s) {
      if (kc(s)) {
        if (s.tolerance != null && Fl(a, s.tolerance))
          return this.handleCancel();
        if (Fl(a, s.distance)) return this.handleStart();
      }
      return Cc(s) && Fl(a, s.tolerance) ? this.handleCancel() : void 0;
    }
    t.cancelable && t.preventDefault(), l(u);
  }
  handleEnd() {
    const { onEnd: t } = this.props;
    this.detach(), t();
  }
  handleCancel() {
    const { onCancel: t } = this.props;
    this.detach(), t();
  }
  handleKeydown(t) {
    t.code === $.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const mv = { move: { name: "pointermove" }, end: { name: "pointerup" } };
class Ep extends bu {
  constructor(t) {
    const { event: n } = t,
      r = or(n.target);
    super(t, mv, r);
  }
}
Ep.activators = [
  {
    eventName: "onPointerDown",
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      return !n.isPrimary || n.button !== 0
        ? !1
        : (r == null || r({ event: n }), !0);
    },
  },
];
const gv = { move: { name: "mousemove" }, end: { name: "mouseup" } };
var js;
(function (e) {
  e[(e.RightClick = 2)] = "RightClick";
})(js || (js = {}));
class vv extends bu {
  constructor(t) {
    super(t, gv, or(t.event.target));
  }
}
vv.activators = [
  {
    eventName: "onMouseDown",
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      return n.button === js.RightClick
        ? !1
        : (r == null || r({ event: n }), !0);
    },
  },
];
const jl = { move: { name: "touchmove" }, end: { name: "touchend" } };
class yv extends bu {
  constructor(t) {
    super(t, jl);
  }
  static setup() {
    return (
      window.addEventListener(jl.move.name, t, { capture: !1, passive: !1 }),
      function () {
        window.removeEventListener(jl.move.name, t);
      }
    );
    function t() {}
  }
}
yv.activators = [
  {
    eventName: "onTouchStart",
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      const { touches: o } = n;
      return o.length > 1 ? !1 : (r == null || r({ event: n }), !0);
    },
  },
];
var Mr;
(function (e) {
  (e[(e.Pointer = 0)] = "Pointer"),
    (e[(e.DraggableRect = 1)] = "DraggableRect");
})(Mr || (Mr = {}));
var Di;
(function (e) {
  (e[(e.TreeOrder = 0)] = "TreeOrder"),
    (e[(e.ReversedTreeOrder = 1)] = "ReversedTreeOrder");
})(Di || (Di = {}));
function wv(e) {
  let {
    acceleration: t,
    activator: n = Mr.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: i,
    interval: l = 5,
    order: s = Di.TreeOrder,
    pointerCoordinates: u,
    scrollableAncestors: a,
    scrollableAncestorRects: c,
    delta: f,
    threshold: m,
  } = e;
  const y = Ev({ delta: f, disabled: !i }),
    [v, g] = zg(),
    C = E.useRef({ x: 0, y: 0 }),
    p = E.useRef({ x: 0, y: 0 }),
    d = E.useMemo(() => {
      switch (n) {
        case Mr.Pointer:
          return u ? { top: u.y, bottom: u.y, left: u.x, right: u.x } : null;
        case Mr.DraggableRect:
          return o;
      }
    }, [n, o, u]),
    h = E.useRef(null),
    x = E.useCallback(() => {
      const R = h.current;
      if (!R) return;
      const k = C.current.x * p.current.x,
        N = C.current.y * p.current.y;
      R.scrollBy(k, N);
    }, []),
    w = E.useMemo(() => (s === Di.TreeOrder ? [...a].reverse() : a), [s, a]);
  E.useEffect(() => {
    if (!i || !a.length || !d) {
      g();
      return;
    }
    for (const R of w) {
      if ((r == null ? void 0 : r(R)) === !1) continue;
      const k = a.indexOf(R),
        N = c[k];
      if (!N) continue;
      const { direction: _, speed: P } = sv(R, N, d, t, m);
      for (const M of ["x", "y"]) y[M][_[M]] || ((P[M] = 0), (_[M] = 0));
      if (P.x > 0 || P.y > 0) {
        g(), (h.current = R), v(x, l), (C.current = P), (p.current = _);
        return;
      }
    }
    (C.current = { x: 0, y: 0 }), (p.current = { x: 0, y: 0 }), g();
  }, [
    t,
    x,
    r,
    g,
    i,
    l,
    JSON.stringify(d),
    JSON.stringify(y),
    v,
    a,
    w,
    c,
    JSON.stringify(m),
  ]);
}
const Sv = {
  x: { [ue.Backward]: !1, [ue.Forward]: !1 },
  y: { [ue.Backward]: !1, [ue.Forward]: !1 },
};
function Ev(e) {
  let { delta: t, disabled: n } = e;
  const r = Ri(t);
  return ao(
    (o) => {
      if (n || !r || !o) return Sv;
      const i = { x: Math.sign(t.x - r.x), y: Math.sign(t.y - r.y) };
      return {
        x: {
          [ue.Backward]: o.x[ue.Backward] || i.x === -1,
          [ue.Forward]: o.x[ue.Forward] || i.x === 1,
        },
        y: {
          [ue.Backward]: o.y[ue.Backward] || i.y === -1,
          [ue.Forward]: o.y[ue.Forward] || i.y === 1,
        },
      };
    },
    [n, t, r],
  );
}
function xv(e, t) {
  const n = t !== null ? e.get(t) : void 0,
    r = n ? n.node.current : null;
  return ao(
    (o) => {
      var i;
      return t === null ? null : (i = r ?? o) != null ? i : null;
    },
    [r, t],
  );
}
function kv(e, t) {
  return E.useMemo(
    () =>
      e.reduce((n, r) => {
        const { sensor: o } = r,
          i = o.activators.map((l) => ({
            eventName: l.eventName,
            handler: t(l.handler, r),
          }));
        return [...n, ...i];
      }, []),
    [e, t],
  );
}
var to;
(function (e) {
  (e[(e.Always = 0)] = "Always"),
    (e[(e.BeforeDragging = 1)] = "BeforeDragging"),
    (e[(e.WhileDragging = 2)] = "WhileDragging");
})(to || (to = {}));
var Is;
(function (e) {
  e.Optimized = "optimized";
})(Is || (Is = {}));
const Rc = new Map();
function Cv(e, t) {
  let { dragging: n, dependencies: r, config: o } = t;
  const [i, l] = E.useState(null),
    { frequency: s, measure: u, strategy: a } = o,
    c = E.useRef(e),
    f = C(),
    m = eo(f),
    y = E.useCallback(
      function (p) {
        p === void 0 && (p = []),
          !m.current &&
            l((d) =>
              d === null ? p : d.concat(p.filter((h) => !d.includes(h))),
            );
      },
      [m],
    ),
    v = E.useRef(null),
    g = ao(
      (p) => {
        if (f && !n) return Rc;
        if (!p || p === Rc || c.current !== e || i != null) {
          const d = new Map();
          for (let h of e) {
            if (!h) continue;
            if (i && i.length > 0 && !i.includes(h.id) && h.rect.current) {
              d.set(h.id, h.rect.current);
              continue;
            }
            const x = h.node.current,
              w = x ? new Wu(u(x), x) : null;
            (h.rect.current = w), w && d.set(h.id, w);
          }
          return d;
        }
        return p;
      },
      [e, i, n, f, u],
    );
  return (
    E.useEffect(() => {
      c.current = e;
    }, [e]),
    E.useEffect(() => {
      f || y();
    }, [n, f]),
    E.useEffect(() => {
      i && i.length > 0 && l(null);
    }, [JSON.stringify(i)]),
    E.useEffect(() => {
      f ||
        typeof s != "number" ||
        v.current !== null ||
        (v.current = setTimeout(() => {
          y(), (v.current = null);
        }, s));
    }, [s, f, y, ...r]),
    {
      droppableRects: g,
      measureDroppableContainers: y,
      measuringScheduled: i != null,
    }
  );
  function C() {
    switch (a) {
      case to.Always:
        return !1;
      case to.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Ku(e, t) {
  return ao(
    (n) => (e ? n || (typeof t == "function" ? t(e) : e) : null),
    [t, e],
  );
}
function Rv(e, t) {
  return Ku(e, t);
}
function Nv(e) {
  let { callback: t, disabled: n } = e;
  const r = qi(t),
    o = E.useMemo(() => {
      if (n || typeof window > "u" || typeof window.MutationObserver > "u")
        return;
      const { MutationObserver: i } = window;
      return new i(r);
    }, [r, n]);
  return E.useEffect(() => () => (o == null ? void 0 : o.disconnect()), [o]), o;
}
function Gi(e) {
  let { callback: t, disabled: n } = e;
  const r = qi(t),
    o = E.useMemo(() => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const { ResizeObserver: i } = window;
      return new i(r);
    }, [n]);
  return E.useEffect(() => () => (o == null ? void 0 : o.disconnect()), [o]), o;
}
function Tv(e) {
  return new Wu(co(e), e);
}
function Nc(e, t, n) {
  t === void 0 && (t = Tv);
  const [r, o] = E.useReducer(s, null),
    i = Nv({
      callback(u) {
        if (e)
          for (const a of u) {
            const { type: c, target: f } = a;
            if (
              c === "childList" &&
              f instanceof HTMLElement &&
              f.contains(e)
            ) {
              o();
              break;
            }
          }
      },
    }),
    l = Gi({ callback: o });
  return (
    gt(() => {
      o(),
        e
          ? (l == null || l.observe(e),
            i == null ||
              i.observe(document.body, { childList: !0, subtree: !0 }))
          : (l == null || l.disconnect(), i == null || i.disconnect());
    }, [e]),
    r
  );
  function s(u) {
    if (!e) return null;
    if (e.isConnected === !1) {
      var a;
      return (a = u ?? n) != null ? a : null;
    }
    const c = t(e);
    return JSON.stringify(u) === JSON.stringify(c) ? u : c;
  }
}
function _v(e) {
  const t = Ku(e);
  return cp(e, t);
}
const Tc = [];
function Dv(e) {
  const t = E.useRef(e),
    n = ao(
      (r) =>
        e
          ? r &&
            r !== Tc &&
            e &&
            t.current &&
            e.parentNode === t.current.parentNode
            ? r
            : Vu(e)
          : Tc,
      [e],
    );
  return (
    E.useEffect(() => {
      t.current = e;
    }, [e]),
    n
  );
}
function Ov(e) {
  const [t, n] = E.useState(null),
    r = E.useRef(e),
    o = E.useCallback((i) => {
      const l = Ml(i.target);
      l && n((s) => (s ? (s.set(l, Fs(l)), new Map(s)) : null));
    }, []);
  return (
    E.useEffect(() => {
      const i = r.current;
      if (e !== i) {
        l(i);
        const s = e
          .map((u) => {
            const a = Ml(u);
            return a
              ? (a.addEventListener("scroll", o, { passive: !0 }), [a, Fs(a)])
              : null;
          })
          .filter((u) => u != null);
        n(s.length ? new Map(s) : null), (r.current = e);
      }
      return () => {
        l(e), l(i);
      };
      function l(s) {
        s.forEach((u) => {
          const a = Ml(u);
          a == null || a.removeEventListener("scroll", o);
        });
      }
    }, [o, e]),
    E.useMemo(
      () =>
        e.length
          ? t
            ? Array.from(t.values()).reduce((i, l) => Kn(i, l), ut)
            : vp(e)
          : ut,
      [e, t],
    )
  );
}
function _c(e, t) {
  t === void 0 && (t = []);
  const n = E.useRef(null);
  return (
    E.useEffect(() => {
      n.current = null;
    }, t),
    E.useEffect(() => {
      const r = e !== ut;
      r && !n.current && (n.current = e), !r && n.current && (n.current = null);
    }, [e]),
    n.current ? Ni(e, n.current) : ut
  );
}
function Pv(e) {
  E.useEffect(
    () => {
      if (!Yi) return;
      const t = e.map((n) => {
        let { sensor: r } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t) n == null || n();
      };
    },
    e.map((t) => {
      let { sensor: n } = t;
      return n;
    }),
  );
}
function Lv(e, t) {
  return E.useMemo(
    () =>
      e.reduce((n, r) => {
        let { eventName: o, handler: i } = r;
        return (
          (n[o] = (l) => {
            i(l, t);
          }),
          n
        );
      }, {}),
    [e, t],
  );
}
function xp(e) {
  return E.useMemo(() => (e ? rv(e) : null), [e]);
}
const Il = [];
function Av(e, t) {
  t === void 0 && (t = co);
  const [n] = e,
    r = xp(n ? ke(n) : null),
    [o, i] = E.useReducer(s, Il),
    l = Gi({ callback: i });
  return (
    e.length > 0 && o === Il && i(),
    gt(() => {
      e.length
        ? e.forEach((u) => (l == null ? void 0 : l.observe(u)))
        : (l == null || l.disconnect(), i());
    }, [e]),
    o
  );
  function s() {
    return e.length ? e.map((u) => (mp(u) ? r : new Wu(t(u), u))) : Il;
  }
}
function kp(e) {
  if (!e) return null;
  if (e.children.length > 1) return e;
  const t = e.children[0];
  return uo(t) ? t : e;
}
function zv(e) {
  let { measure: t } = e;
  const [n, r] = E.useState(null),
    o = E.useCallback(
      (a) => {
        for (const { target: c } of a)
          if (uo(c)) {
            r((f) => {
              const m = t(c);
              return f ? { ...f, width: m.width, height: m.height } : m;
            });
            break;
          }
      },
      [t],
    ),
    i = Gi({ callback: o }),
    l = E.useCallback(
      (a) => {
        const c = kp(a);
        i == null || i.disconnect(),
          c && (i == null || i.observe(c)),
          r(c ? t(c) : null);
      },
      [t, i],
    ),
    [s, u] = Ci(l);
  return E.useMemo(() => ({ nodeRef: s, rect: n, setRef: u }), [n, s, u]);
}
const Mv = [
    { sensor: Ep, options: {} },
    { sensor: Sp, options: {} },
  ],
  Fv = { current: {} },
  Jo = {
    draggable: { measure: Ec },
    droppable: {
      measure: Ec,
      strategy: to.WhileDragging,
      frequency: Is.Optimized,
    },
    dragOverlay: { measure: co },
  };
class Fr extends Map {
  get(t) {
    var n;
    return t != null && (n = super.get(t)) != null ? n : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let { disabled: n } = t;
      return !n;
    });
  }
  getNodeFor(t) {
    var n, r;
    return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null
      ? n
      : void 0;
  }
}
const jv = {
    activatorEvent: null,
    active: null,
    activeNode: null,
    activeNodeRect: null,
    collisions: null,
    containerNodeRect: null,
    draggableNodes: new Map(),
    droppableRects: new Map(),
    droppableContainers: new Fr(),
    over: null,
    dragOverlay: { nodeRef: { current: null }, rect: null, setRef: _i },
    scrollableAncestors: [],
    scrollableAncestorRects: [],
    measuringConfiguration: Jo,
    measureDroppableContainers: _i,
    windowRect: null,
    measuringScheduled: !1,
  },
  Cp = {
    activatorEvent: null,
    activators: [],
    active: null,
    activeNodeRect: null,
    ariaDescribedById: { draggable: "" },
    dispatch: _i,
    draggableNodes: new Map(),
    over: null,
    measureDroppableContainers: _i,
  },
  fo = E.createContext(Cp),
  Rp = E.createContext(jv);
function Iv() {
  return {
    draggable: {
      active: null,
      initialCoordinates: { x: 0, y: 0 },
      nodes: new Map(),
      translate: { x: 0, y: 0 },
    },
    droppable: { containers: new Fr() },
  };
}
function Uv(e, t) {
  switch (t.type) {
    case oe.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active,
        },
      };
    case oe.DragMove:
      return e.draggable.active
        ? {
            ...e,
            draggable: {
              ...e.draggable,
              translate: {
                x: t.coordinates.x - e.draggable.initialCoordinates.x,
                y: t.coordinates.y - e.draggable.initialCoordinates.y,
              },
            },
          }
        : e;
    case oe.DragEnd:
    case oe.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: { x: 0, y: 0 },
          translate: { x: 0, y: 0 },
        },
      };
    case oe.RegisterDroppable: {
      const { element: n } = t,
        { id: r } = n,
        o = new Fr(e.droppable.containers);
      return (
        o.set(r, n), { ...e, droppable: { ...e.droppable, containers: o } }
      );
    }
    case oe.SetDroppableDisabled: {
      const { id: n, key: r, disabled: o } = t,
        i = e.droppable.containers.get(n);
      if (!i || r !== i.key) return e;
      const l = new Fr(e.droppable.containers);
      return (
        l.set(n, { ...i, disabled: o }),
        { ...e, droppable: { ...e.droppable, containers: l } }
      );
    }
    case oe.UnregisterDroppable: {
      const { id: n, key: r } = t,
        o = e.droppable.containers.get(n);
      if (!o || r !== o.key) return e;
      const i = new Fr(e.droppable.containers);
      return (
        i.delete(n), { ...e, droppable: { ...e.droppable, containers: i } }
      );
    }
    default:
      return e;
  }
}
function Bv(e) {
  let { disabled: t } = e;
  const { active: n, activatorEvent: r, draggableNodes: o } = E.useContext(fo),
    i = Ri(r),
    l = Ri(n == null ? void 0 : n.id);
  return (
    E.useEffect(() => {
      if (!t && !r && i && l != null) {
        if (!Hu(i) || document.activeElement === i.target) return;
        const s = o.get(l);
        if (!s) return;
        const { activatorNode: u, node: a } = s;
        if (!u.current && !a.current) return;
        requestAnimationFrame(() => {
          for (const c of [u.current, a.current]) {
            if (!c) continue;
            const f = jg(c);
            if (f) {
              f.focus();
              break;
            }
          }
        });
      }
    }, [r, t, o, l, i]),
    null
  );
}
function Np(e, t) {
  let { transform: n, ...r } = t;
  return e != null && e.length
    ? e.reduce((o, i) => i({ transform: o, ...r }), n)
    : n;
}
function $v(e) {
  return E.useMemo(
    () => ({
      draggable: { ...Jo.draggable, ...(e == null ? void 0 : e.draggable) },
      droppable: { ...Jo.droppable, ...(e == null ? void 0 : e.droppable) },
      dragOverlay: {
        ...Jo.dragOverlay,
        ...(e == null ? void 0 : e.dragOverlay),
      },
    }),
    [
      e == null ? void 0 : e.draggable,
      e == null ? void 0 : e.droppable,
      e == null ? void 0 : e.dragOverlay,
    ],
  );
}
function Hv(e) {
  let { activeNode: t, measure: n, initialRect: r, config: o = !0 } = e;
  const i = E.useRef(!1),
    { x: l, y: s } = typeof o == "boolean" ? { x: o, y: o } : o;
  gt(() => {
    if ((!l && !s) || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r) return;
    const a = t == null ? void 0 : t.node.current;
    if (!a || a.isConnected === !1) return;
    const c = n(a),
      f = cp(c, r);
    if (
      (l || (f.x = 0),
      s || (f.y = 0),
      (i.current = !0),
      Math.abs(f.x) > 0 || Math.abs(f.y) > 0)
    ) {
      const m = fp(a);
      m && m.scrollBy({ top: f.y, left: f.x });
    }
  }, [t, l, s, r, n]);
}
const Zi = E.createContext({ ...ut, scaleX: 1, scaleY: 1 });
var zt;
(function (e) {
  (e[(e.Uninitialized = 0)] = "Uninitialized"),
    (e[(e.Initializing = 1)] = "Initializing"),
    (e[(e.Initialized = 2)] = "Initialized");
})(zt || (zt = {}));
const Vv = E.memo(function (t) {
    var n, r, o, i;
    let {
      id: l,
      accessibility: s,
      autoScroll: u = !0,
      children: a,
      sensors: c = Mv,
      collisionDetection: f = Jg,
      measuring: m,
      modifiers: y,
      ...v
    } = t;
    const g = E.useReducer(Uv, void 0, Iv),
      [C, p] = g,
      [d, h] = Vg(),
      [x, w] = E.useState(zt.Uninitialized),
      R = x === zt.Initialized,
      {
        draggable: { active: k, nodes: N, translate: _ },
        droppable: { containers: P },
      } = C,
      M = k ? N.get(k) : null,
      le = E.useRef({ initial: null, translated: null }),
      ee = E.useMemo(() => {
        var ce;
        return k != null
          ? {
              id: k,
              data: (ce = M == null ? void 0 : M.data) != null ? ce : Fv,
              rect: le,
            }
          : null;
      }, [k, M]),
      Pe = E.useRef(null),
      [mo, En] = E.useState(null),
      [Le, D] = E.useState(null),
      L = eo(v, Object.values(v)),
      A = Ji("DndDescribedBy", l),
      b = E.useMemo(() => P.getEnabled(), [P]),
      B = $v(m),
      {
        droppableRects: Je,
        measureDroppableContainers: He,
        measuringScheduled: xn,
      } = Cv(b, { dragging: R, dependencies: [_.x, _.y], config: B.droppable }),
      ne = xv(N, k),
      Gt = E.useMemo(() => (Le ? Ti(Le) : null), [Le]),
      Zu = sh(),
      ea = Rv(ne, B.draggable.measure);
    Hv({
      activeNode: k ? N.get(k) : null,
      config: Zu.layoutShiftCompensation,
      initialRect: ea,
      measure: B.draggable.measure,
    });
    const Ge = Nc(ne, B.draggable.measure, ea),
      il = Nc(ne ? ne.parentElement : null),
      Zt = E.useRef({
        activatorEvent: null,
        active: null,
        activeNode: ne,
        collisionRect: null,
        collisions: null,
        droppableRects: Je,
        draggableNodes: N,
        draggingNode: null,
        draggingNodeRect: null,
        droppableContainers: P,
        over: null,
        scrollableAncestors: [],
        scrollAdjustedTranslate: null,
      }),
      ta = P.getNodeFor((n = Zt.current.over) == null ? void 0 : n.id),
      en = zv({ measure: B.dragOverlay.measure }),
      go = (r = en.nodeRef.current) != null ? r : ne,
      kn = R ? ((o = en.rect) != null ? o : Ge) : null,
      na = !!(en.nodeRef.current && en.rect),
      ra = _v(na ? null : Ge),
      ll = xp(go ? ke(go) : null),
      Tt = Dv(R ? ta ?? ne : null),
      vo = Av(Tt),
      yo = Np(y, {
        transform: { x: _.x - ra.x, y: _.y - ra.y, scaleX: 1, scaleY: 1 },
        activatorEvent: Le,
        active: ee,
        activeNodeRect: Ge,
        containerNodeRect: il,
        draggingNodeRect: kn,
        over: Zt.current.over,
        overlayNodeRect: en.rect,
        scrollableAncestors: Tt,
        scrollableAncestorRects: vo,
        windowRect: ll,
      }),
      oa = Gt ? Kn(Gt, _) : null,
      ia = Ov(Tt),
      eh = _c(ia),
      th = _c(ia, [Ge]),
      Cn = Kn(yo, eh),
      Rn = kn ? ev(kn, yo) : null,
      sr =
        ee && Rn
          ? f({
              active: ee,
              collisionRect: Rn,
              droppableRects: Je,
              droppableContainers: b,
              pointerCoordinates: oa,
            })
          : null,
      la = Yg(sr, "id"),
      [_t, sa] = E.useState(null),
      nh = na ? yo : Kn(yo, th),
      rh = Gg(nh, (i = _t == null ? void 0 : _t.rect) != null ? i : null, Ge),
      ua = E.useCallback(
        (ce, Ae) => {
          let { sensor: ze, options: Dt } = Ae;
          if (Pe.current == null) return;
          const Ve = N.get(Pe.current);
          if (!Ve) return;
          const Ze = ce.nativeEvent,
            ct = new ze({
              active: Pe.current,
              activeNode: Ve,
              event: Ze,
              options: Dt,
              context: Zt,
              onStart(et) {
                const ur = Pe.current;
                if (ur == null) return;
                const ar = N.get(ur);
                if (!ar) return;
                const { onDragStart: wo } = L.current,
                  So = { active: { id: ur, data: ar.data, rect: le } };
                rn.unstable_batchedUpdates(() => {
                  wo == null || wo(So),
                    w(zt.Initializing),
                    p({
                      type: oe.DragStart,
                      initialCoordinates: et,
                      active: ur,
                    }),
                    d({ type: "onDragStart", event: So });
                });
              },
              onMove(et) {
                p({ type: oe.DragMove, coordinates: et });
              },
              onEnd: Nn(oe.DragEnd),
              onCancel: Nn(oe.DragCancel),
            });
          rn.unstable_batchedUpdates(() => {
            En(ct), D(ce.nativeEvent);
          });
          function Nn(et) {
            return async function () {
              const {
                active: ar,
                collisions: wo,
                over: So,
                scrollAdjustedTranslate: ca,
              } = Zt.current;
              let cr = null;
              if (ar && ca) {
                const { cancelDrop: dr } = L.current;
                (cr = {
                  activatorEvent: Ze,
                  active: ar,
                  collisions: wo,
                  delta: ca,
                  over: So,
                }),
                  et === oe.DragEnd &&
                    typeof dr == "function" &&
                    (await Promise.resolve(dr(cr))) &&
                    (et = oe.DragCancel);
              }
              (Pe.current = null),
                rn.unstable_batchedUpdates(() => {
                  p({ type: et }),
                    w(zt.Uninitialized),
                    sa(null),
                    En(null),
                    D(null);
                  const dr = et === oe.DragEnd ? "onDragEnd" : "onDragCancel";
                  if (cr) {
                    const sl = L.current[dr];
                    sl == null || sl(cr), d({ type: dr, event: cr });
                  }
                });
            };
          }
        },
        [N],
      ),
      oh = E.useCallback(
        (ce, Ae) => (ze, Dt) => {
          const Ve = ze.nativeEvent,
            Ze = N.get(Dt);
          if (Pe.current !== null || !Ze || Ve.dndKit || Ve.defaultPrevented)
            return;
          const ct = { active: Ze };
          ce(ze, Ae.options, ct) === !0 &&
            ((Ve.dndKit = { capturedBy: Ae.sensor }),
            (Pe.current = Dt),
            ua(ze, Ae));
        },
        [N, ua],
      ),
      aa = kv(c, oh);
    Pv(c),
      gt(() => {
        Ge && x === zt.Initializing && w(zt.Initialized);
      }, [Ge, x]),
      E.useEffect(() => {
        const { onDragMove: ce } = L.current,
          {
            active: Ae,
            activatorEvent: ze,
            collisions: Dt,
            over: Ve,
          } = Zt.current;
        if (!Ae || !ze) return;
        const Ze = {
          active: Ae,
          activatorEvent: ze,
          collisions: Dt,
          delta: { x: Cn.x, y: Cn.y },
          over: Ve,
        };
        rn.unstable_batchedUpdates(() => {
          ce == null || ce(Ze), d({ type: "onDragMove", event: Ze });
        });
      }, [Cn.x, Cn.y]),
      E.useEffect(() => {
        const {
          active: ce,
          activatorEvent: Ae,
          collisions: ze,
          droppableContainers: Dt,
          scrollAdjustedTranslate: Ve,
        } = Zt.current;
        if (!ce || Pe.current == null || !Ae || !Ve) return;
        const { onDragOver: Ze } = L.current,
          ct = Dt.get(la),
          Nn =
            ct && ct.rect.current
              ? {
                  id: ct.id,
                  rect: ct.rect.current,
                  data: ct.data,
                  disabled: ct.disabled,
                }
              : null,
          et = {
            active: ce,
            activatorEvent: Ae,
            collisions: ze,
            delta: { x: Ve.x, y: Ve.y },
            over: Nn,
          };
        rn.unstable_batchedUpdates(() => {
          sa(Nn), Ze == null || Ze(et), d({ type: "onDragOver", event: et });
        });
      }, [la]),
      gt(() => {
        (Zt.current = {
          activatorEvent: Le,
          active: ee,
          activeNode: ne,
          collisionRect: Rn,
          collisions: sr,
          droppableRects: Je,
          draggableNodes: N,
          draggingNode: go,
          draggingNodeRect: kn,
          droppableContainers: P,
          over: _t,
          scrollableAncestors: Tt,
          scrollAdjustedTranslate: Cn,
        }),
          (le.current = { initial: kn, translated: Rn });
      }, [ee, ne, sr, Rn, N, go, kn, Je, P, _t, Tt, Cn]),
      wv({
        ...Zu,
        delta: _,
        draggingRect: Rn,
        pointerCoordinates: oa,
        scrollableAncestors: Tt,
        scrollableAncestorRects: vo,
      });
    const ih = E.useMemo(
        () => ({
          active: ee,
          activeNode: ne,
          activeNodeRect: Ge,
          activatorEvent: Le,
          collisions: sr,
          containerNodeRect: il,
          dragOverlay: en,
          draggableNodes: N,
          droppableContainers: P,
          droppableRects: Je,
          over: _t,
          measureDroppableContainers: He,
          scrollableAncestors: Tt,
          scrollableAncestorRects: vo,
          measuringConfiguration: B,
          measuringScheduled: xn,
          windowRect: ll,
        }),
        [ee, ne, Ge, Le, sr, il, en, N, P, Je, _t, He, Tt, vo, B, xn, ll],
      ),
      lh = E.useMemo(
        () => ({
          activatorEvent: Le,
          activators: aa,
          active: ee,
          activeNodeRect: Ge,
          ariaDescribedById: { draggable: A },
          dispatch: p,
          draggableNodes: N,
          over: _t,
          measureDroppableContainers: He,
        }),
        [Le, aa, ee, Ge, p, A, N, _t, He],
      );
    return G.createElement(
      ap.Provider,
      { value: h },
      G.createElement(
        fo.Provider,
        { value: lh },
        G.createElement(
          Rp.Provider,
          { value: ih },
          G.createElement(Zi.Provider, { value: rh }, a),
        ),
        G.createElement(Bv, {
          disabled: (s == null ? void 0 : s.restoreFocus) === !1,
        }),
      ),
      G.createElement(Kg, { ...s, hiddenTextDescribedById: A }),
    );
    function sh() {
      const ce = (mo == null ? void 0 : mo.autoScrollEnabled) === !1,
        Ae = typeof u == "object" ? u.enabled === !1 : u === !1,
        ze = R && !ce && !Ae;
      return typeof u == "object" ? { ...u, enabled: ze } : { enabled: ze };
    }
  }),
  Wv = E.createContext(null),
  Dc = "button",
  bv = "Droppable";
function Tp(e) {
  let { id: t, data: n, disabled: r = !1, attributes: o } = e;
  const i = Ji(bv),
    {
      activators: l,
      activatorEvent: s,
      active: u,
      activeNodeRect: a,
      ariaDescribedById: c,
      draggableNodes: f,
      over: m,
    } = E.useContext(fo),
    {
      role: y = Dc,
      roleDescription: v = "draggable",
      tabIndex: g = 0,
    } = o ?? {},
    C = (u == null ? void 0 : u.id) === t,
    p = E.useContext(C ? Zi : Wv),
    [d, h] = Ci(),
    [x, w] = Ci(),
    R = Lv(l, t),
    k = eo(n);
  gt(
    () => (
      f.set(t, { id: t, key: i, node: d, activatorNode: x, data: k }),
      () => {
        const _ = f.get(t);
        _ && _.key === i && f.delete(t);
      }
    ),
    [f, t],
  );
  const N = E.useMemo(
    () => ({
      role: y,
      tabIndex: g,
      "aria-disabled": r,
      "aria-pressed": C && y === Dc ? !0 : void 0,
      "aria-roledescription": v,
      "aria-describedby": c.draggable,
    }),
    [r, y, g, C, v, c.draggable],
  );
  return {
    active: u,
    activatorEvent: s,
    activeNodeRect: a,
    attributes: N,
    isDragging: C,
    listeners: r ? void 0 : R,
    node: d,
    over: m,
    setNodeRef: h,
    setActivatorNodeRef: w,
    transform: p,
  };
}
function Kv() {
  return E.useContext(Rp);
}
const Qv = "Droppable",
  Xv = { timeout: 25 };
function Qu(e) {
  let { data: t, disabled: n = !1, id: r, resizeObserverConfig: o } = e;
  const i = Ji(Qv),
    {
      active: l,
      dispatch: s,
      over: u,
      measureDroppableContainers: a,
    } = E.useContext(fo),
    c = E.useRef({ disabled: n }),
    f = E.useRef(!1),
    m = E.useRef(null),
    y = E.useRef(null),
    { disabled: v, updateMeasurementsFor: g, timeout: C } = { ...Xv, ...o },
    p = eo(g ?? r),
    d = E.useCallback(() => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      y.current != null && clearTimeout(y.current),
        (y.current = setTimeout(() => {
          a(Array.isArray(p.current) ? p.current : [p.current]),
            (y.current = null);
        }, C));
    }, [C]),
    h = Gi({ callback: d, disabled: v || !l }),
    x = E.useCallback(
      (N, _) => {
        h && (_ && (h.unobserve(_), (f.current = !1)), N && h.observe(N));
      },
      [h],
    ),
    [w, R] = Ci(x),
    k = eo(t);
  return (
    E.useEffect(() => {
      !h ||
        !w.current ||
        (h.disconnect(), (f.current = !1), h.observe(w.current));
    }, [w, h]),
    gt(
      () => (
        s({
          type: oe.RegisterDroppable,
          element: { id: r, key: i, disabled: n, node: w, rect: m, data: k },
        }),
        () => s({ type: oe.UnregisterDroppable, key: i, id: r })
      ),
      [r],
    ),
    E.useEffect(() => {
      n !== c.current.disabled &&
        (s({ type: oe.SetDroppableDisabled, id: r, key: i, disabled: n }),
        (c.current.disabled = n));
    }, [r, i, n, s]),
    {
      active: l,
      rect: m,
      isOver: (u == null ? void 0 : u.id) === r,
      node: w,
      over: u,
      setNodeRef: R,
    }
  );
}
function Yv(e) {
  let { animation: t, children: n } = e;
  const [r, o] = E.useState(null),
    [i, l] = E.useState(null),
    s = Ri(n);
  return (
    !n && !r && s && o(s),
    gt(() => {
      if (!i) return;
      const u = r == null ? void 0 : r.key,
        a = r == null ? void 0 : r.props.id;
      if (u == null || a == null) {
        o(null);
        return;
      }
      Promise.resolve(t(a, i)).then(() => {
        o(null);
      });
    }, [t, r, i]),
    G.createElement(
      G.Fragment,
      null,
      n,
      r ? E.cloneElement(r, { ref: l }) : null,
    )
  );
}
const qv = { x: 0, y: 0, scaleX: 1, scaleY: 1 };
function Jv(e) {
  let { children: t } = e;
  return G.createElement(
    fo.Provider,
    { value: Cp },
    G.createElement(Zi.Provider, { value: qv }, t),
  );
}
const Gv = { position: "fixed", touchAction: "none" },
  Zv = (e) => (Hu(e) ? "transform 250ms ease" : void 0),
  ey = E.forwardRef((e, t) => {
    let {
      as: n,
      activatorEvent: r,
      adjustScale: o,
      children: i,
      className: l,
      rect: s,
      style: u,
      transform: a,
      transition: c = Zv,
    } = e;
    if (!s) return null;
    const f = o ? a : { ...a, scaleX: 1, scaleY: 1 },
      m = {
        ...Gv,
        width: s.width,
        height: s.height,
        top: s.top,
        left: s.left,
        transform: vn.Transform.toString(f),
        transformOrigin: o && r ? Qg(r, s) : void 0,
        transition: typeof c == "function" ? c(r) : c,
        ...u,
      };
    return G.createElement(n, { className: l, style: m, ref: t }, i);
  }),
  ty = (e) => (t) => {
    let { active: n, dragOverlay: r } = t;
    const o = {},
      { styles: i, className: l } = e;
    if (i != null && i.active)
      for (const [s, u] of Object.entries(i.active))
        u !== void 0 &&
          ((o[s] = n.node.style.getPropertyValue(s)),
          n.node.style.setProperty(s, u));
    if (i != null && i.dragOverlay)
      for (const [s, u] of Object.entries(i.dragOverlay))
        u !== void 0 && r.node.style.setProperty(s, u);
    return (
      l != null && l.active && n.node.classList.add(l.active),
      l != null && l.dragOverlay && r.node.classList.add(l.dragOverlay),
      function () {
        for (const [u, a] of Object.entries(o)) n.node.style.setProperty(u, a);
        l != null && l.active && n.node.classList.remove(l.active);
      }
    );
  },
  ny = (e) => {
    let {
      transform: { initial: t, final: n },
    } = e;
    return [
      { transform: vn.Transform.toString(t) },
      { transform: vn.Transform.toString(n) },
    ];
  },
  ry = {
    duration: 250,
    easing: "ease",
    keyframes: ny,
    sideEffects: ty({ styles: { active: { opacity: "0" } } }),
  };
function oy(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: o,
  } = e;
  return qi((i, l) => {
    if (t === null) return;
    const s = n.get(i);
    if (!s) return;
    const u = s.node.current;
    if (!u) return;
    const a = kp(l);
    if (!a) return;
    const { transform: c } = ke(l).getComputedStyle(l),
      f = dp(c);
    if (!f) return;
    const m = typeof t == "function" ? t : iy(t);
    return (
      yp(u, o.draggable.measure),
      m({
        active: { id: i, data: s.data, node: u, rect: o.draggable.measure(u) },
        draggableNodes: n,
        dragOverlay: { node: l, rect: o.dragOverlay.measure(a) },
        droppableContainers: r,
        measuringConfiguration: o,
        transform: f,
      })
    );
  });
}
function iy(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: o,
  } = { ...ry, ...e };
  return (i) => {
    let { active: l, dragOverlay: s, transform: u, ...a } = i;
    if (!t) return;
    const c = { x: s.rect.left - l.rect.left, y: s.rect.top - l.rect.top },
      f = {
        scaleX: u.scaleX !== 1 ? (l.rect.width * u.scaleX) / s.rect.width : 1,
        scaleY: u.scaleY !== 1 ? (l.rect.height * u.scaleY) / s.rect.height : 1,
      },
      m = { x: u.x - c.x, y: u.y - c.y, ...f },
      y = o({
        ...a,
        active: l,
        dragOverlay: s,
        transform: { initial: u, final: m },
      }),
      [v] = y,
      g = y[y.length - 1];
    if (JSON.stringify(v) === JSON.stringify(g)) return;
    const C = r == null ? void 0 : r({ active: l, dragOverlay: s, ...a }),
      p = s.node.animate(y, { duration: t, easing: n, fill: "forwards" });
    return new Promise((d) => {
      p.onfinish = () => {
        C == null || C(), d();
      };
    });
  };
}
let Oc = 0;
function ly(e) {
  return E.useMemo(() => {
    if (e != null) return Oc++, Oc;
  }, [e]);
}
const sy = G.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: o,
    transition: i,
    modifiers: l,
    wrapperElement: s = "div",
    className: u,
    zIndex: a = 999,
  } = e;
  const {
      activatorEvent: c,
      active: f,
      activeNodeRect: m,
      containerNodeRect: y,
      draggableNodes: v,
      droppableContainers: g,
      dragOverlay: C,
      over: p,
      measuringConfiguration: d,
      scrollableAncestors: h,
      scrollableAncestorRects: x,
      windowRect: w,
    } = Kv(),
    R = E.useContext(Zi),
    k = ly(f == null ? void 0 : f.id),
    N = Np(l, {
      activatorEvent: c,
      active: f,
      activeNodeRect: m,
      containerNodeRect: y,
      draggingNodeRect: C.rect,
      over: p,
      overlayNodeRect: C.rect,
      scrollableAncestors: h,
      scrollableAncestorRects: x,
      transform: R,
      windowRect: w,
    }),
    _ = Ku(m),
    P = oy({
      config: r,
      draggableNodes: v,
      droppableContainers: g,
      measuringConfiguration: d,
    }),
    M = _ ? C.setRef : void 0;
  return G.createElement(
    Jv,
    null,
    G.createElement(
      Yv,
      { animation: P },
      f && k
        ? G.createElement(
            ey,
            {
              key: k,
              id: f.id,
              ref: M,
              as: s,
              activatorEvent: c,
              adjustScale: t,
              className: u,
              transition: i,
              rect: _,
              style: { zIndex: a, ...o },
              transform: N,
            },
            n,
          )
        : null,
    ),
  );
});
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  _p = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ay = {
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
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cy = E.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: l,
      ...s
    },
    u,
  ) =>
    E.createElement(
      "svg",
      {
        ref: u,
        ...ay,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: _p("lucide", o),
        ...s,
      },
      [
        ...l.map(([a, c]) => E.createElement(a, c)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dp = (e, t) => {
  const n = E.forwardRef(({ className: r, ...o }, i) =>
    E.createElement(cy, {
      ref: i,
      iconNode: t,
      className: _p(`lucide-${uy(e)}`, r),
      ...o,
    }),
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dy = Dp("Loader", [
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
  ["path", { d: "M18 12h4", key: "wj9ykh" }],
  ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
  ["path", { d: "M12 18v4", key: "jadmvz" }],
  ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
  ["path", { d: "M2 12h4", key: "j09sii" }],
  ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fy = Dp("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
]);
function py(e) {
  return "id" in e && "x" in e && "y" in e;
}
const hy = {
    0: "bg-slate-200",
    1: "bg-white",
    2: "bg-green-300",
    3: "bg-sky-400",
    4: "bg-violet-400",
    5: "bg-amber-300",
  },
  my = {
    0: "to-slate-200",
    1: "to-white",
    2: "to-green-300",
    3: "to-sky-400",
    4: "to-violet-400",
    5: "to-amber-300",
  },
  Oi = ({ element: e }) => {
    const t = hy[e.value],
      n = my[e.value],
      o = `${`flex gap-2 p-2 border ${t} border-slate-400 rounded-md text-xl h-fit w-fit hover:bg-gradient-to-t from-cyan-100 ${n}`} hover:bg-cyan-100`,
      i = py(e) ? e.id : void 0;
    return j.jsxs("div", {
      className: o,
      id: i,
      children: [
        j.jsx("img", {
          className: "w-6 h-6",
          src: `/static/item-images/${e.image}.svg`,
        }),
        j.jsx("div", { className: "pointer-events-none", children: e.text }),
      ],
    });
  },
  gy = ({ element: e, isLoading: t }) => {
    const {
        attributes: n,
        listeners: r,
        setNodeRef: o,
        transform: i,
      } = Tp({
        id: e.text,
        data: { element: e, type: "element" },
        disabled: t,
      }),
      l = { transform: vn.Translate.toString(i) };
    return j.jsx("div", {
      ref: o,
      style: l,
      className: "w-fit h-fit",
      onMouseDown: (s) => {
        s.preventDefault();
      },
      ...r,
      ...n,
      children: j.jsx(Oi, { element: e }),
    });
  },
  vy = ({ element: e, isLoading: t }) => {
    const {
        attributes: n,
        listeners: r,
        setNodeRef: o,
        transform: i,
      } = Tp({
        id: e.id,
        data: { element: e, type: "placed-element" },
        disabled: t,
      }),
      { setNodeRef: l } = Qu({
        id: e.id,
        data: { element: e, type: "placed-element" },
        disabled: t,
      }),
      s = E.useMemo(
        () => ({ transform: vn.Translate.toString(i), top: e.y, left: e.x }),
        [e.x, e.y, i],
      );
    return j.jsx("div", {
      ref: o,
      className: "absolute w-fit h-fit",
      style: s,
      ...r,
      ...n,
      children: j.jsxs("div", {
        ref: l,
        children: [
          e.isLoading &&
            j.jsxs("div", {
              className: "flex gap-2 px-2 border rounded-xl h-fit w-fit",
              children: [
                j.jsx("div", {
                  children: j.jsx(dy, {
                    className: "animate-spin inline-block",
                  }),
                }),
                j.jsx("div", { children: "combining" }),
              ],
            }),
          !e.isLoading && j.jsx(Oi, { element: e }),
        ],
      }),
    });
  },
  yy = ({ elements: e, isLoading: t }) => {
    const { setNodeRef: n } = Qu({
      id: "sidebar-area",
      data: { type: "sidebar" },
      disabled: t,
    });
    return j.jsx("div", {
      className: "col-span-4 border-l relative",
      ref: n,
      children: j.jsxs("div", {
        className: "absolute inset-0 flex flex-col",
        children: [
          j.jsx("h2", {
            className: "text-lg text-center font-semibold",
            children: "Inventory",
          }),
          j.jsx("div", {
            className: "overflow-y-auto flex-1",
            children: j.jsx("div", {
              className: "flex flex-wrap gap-2 p-2",
              children: e.map((r) =>
                j.jsx(gy, { element: r, isLoading: t }, r.text),
              ),
            }),
          }),
        ],
      }),
    });
  },
  wy = ({ placedElements: e, setPlacedElements: t, isLoading: n }) => {
    const { setNodeRef: r } = Qu({
        id: "playground-area",
        data: { type: "playground" },
        disabled: n,
      }),
      o = () => {
        t([]);
      };
    return j.jsxs("div", {
      className: "col-span-8 h-full w-full relative",
      ref: r,
      children: [
        e.map((i, l) => j.jsx(vy, { element: i, isLoading: n }, l)),
        j.jsx("div", {
          className:
            "absolute bottom-0 right-0 p-4 cursor-pointer hover:text-red-400",
          onClick: o,
          children: j.jsx(fy, {}),
        }),
      ],
    });
  };
var de = [];
for (var Ul = 0; Ul < 256; ++Ul) de.push((Ul + 256).toString(16).slice(1));
function Sy(e, t = 0) {
  return (
    de[e[t + 0]] +
    de[e[t + 1]] +
    de[e[t + 2]] +
    de[e[t + 3]] +
    "-" +
    de[e[t + 4]] +
    de[e[t + 5]] +
    "-" +
    de[e[t + 6]] +
    de[e[t + 7]] +
    "-" +
    de[e[t + 8]] +
    de[e[t + 9]] +
    "-" +
    de[e[t + 10]] +
    de[e[t + 11]] +
    de[e[t + 12]] +
    de[e[t + 13]] +
    de[e[t + 14]] +
    de[e[t + 15]]
  ).toLowerCase();
}
var Io,
  Ey = new Uint8Array(16);
function xy() {
  if (
    !Io &&
    ((Io =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !Io)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
    );
  return Io(Ey);
}
var ky =
  typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Pc = { randomUUID: ky };
function Lc(e, t, n) {
  if (Pc.randomUUID && !t && !e) return Pc.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || xy)();
  return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), Sy(r);
}
function Op(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Cy } = Object.prototype,
  { getPrototypeOf: Xu } = Object,
  el = ((e) => (t) => {
    const n = Cy.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  at = (e) => ((e = e.toLowerCase()), (t) => el(t) === e),
  tl = (e) => (t) => typeof t === e,
  { isArray: ir } = Array,
  no = tl("undefined");
function Ry(e) {
  return (
    e !== null &&
    !no(e) &&
    e.constructor !== null &&
    !no(e.constructor) &&
    Ie(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Pp = at("ArrayBuffer");
function Ny(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Pp(e.buffer)),
    t
  );
}
const Ty = tl("string"),
  Ie = tl("function"),
  Lp = tl("number"),
  nl = (e) => e !== null && typeof e == "object",
  _y = (e) => e === !0 || e === !1,
  Go = (e) => {
    if (el(e) !== "object") return !1;
    const t = Xu(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Dy = at("Date"),
  Oy = at("File"),
  Py = at("Blob"),
  Ly = at("FileList"),
  Ay = (e) => nl(e) && Ie(e.pipe),
  zy = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ie(e.append) &&
          ((t = el(e)) === "formdata" ||
            (t === "object" &&
              Ie(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  My = at("URLSearchParams"),
  [Fy, jy, Iy, Uy] = ["ReadableStream", "Request", "Response", "Headers"].map(
    at,
  ),
  By = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function po(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), ir(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = i.length;
    let s;
    for (r = 0; r < l; r++) (s = i[r]), t.call(null, e[s], s, e);
  }
}
function Ap(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const un =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  zp = (e) => !no(e) && e !== un;
function Us() {
  const { caseless: e } = (zp(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && Ap(t, o)) || o;
      Go(t[i]) && Go(r)
        ? (t[i] = Us(t[i], r))
        : Go(r)
        ? (t[i] = Us({}, r))
        : ir(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && po(arguments[r], n);
  return t;
}
const $y = (e, t, n, { allOwnKeys: r } = {}) => (
    po(
      t,
      (o, i) => {
        n && Ie(o) ? (e[i] = Op(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  Hy = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Vy = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Wy = (e, t, n, r) => {
    let o, i, l;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (l = o[i]), (!r || r(l, e, t)) && !s[l] && ((t[l] = e[l]), (s[l] = !0));
      e = n !== !1 && Xu(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  by = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Ky = (e) => {
    if (!e) return null;
    if (ir(e)) return e;
    let t = e.length;
    if (!Lp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Qy = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Xu(Uint8Array)),
  Xy = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  Yy = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  qy = at("HTMLFormElement"),
  Jy = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Ac = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Gy = at("RegExp"),
  Mp = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    po(n, (o, i) => {
      let l;
      (l = t(o, i, e)) !== !1 && (r[i] = l || o);
    }),
      Object.defineProperties(e, r);
  },
  Zy = (e) => {
    Mp(e, (t, n) => {
      if (Ie(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ie(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  e0 = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return ir(e) ? r(e) : r(String(e).split(t)), n;
  },
  t0 = () => {},
  n0 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Bl = "abcdefghijklmnopqrstuvwxyz",
  zc = "0123456789",
  Fp = { DIGIT: zc, ALPHA: Bl, ALPHA_DIGIT: Bl + Bl.toUpperCase() + zc },
  r0 = (e = 16, t = Fp.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function o0(e) {
  return !!(
    e &&
    Ie(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const i0 = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (nl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = ir(r) ? [] : {};
            return (
              po(r, (l, s) => {
                const u = n(l, o + 1);
                !no(u) && (i[s] = u);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  l0 = at("AsyncFunction"),
  s0 = (e) => e && (nl(e) || Ie(e)) && Ie(e.then) && Ie(e.catch),
  jp = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          un.addEventListener(
            "message",
            ({ source: o, data: i }) => {
              o === un && i === n && r.length && r.shift()();
            },
            !1,
          ),
          (o) => {
            r.push(o), un.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Ie(un.postMessage),
  ),
  u0 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(un)
      : (typeof process < "u" && process.nextTick) || jp,
  S = {
    isArray: ir,
    isArrayBuffer: Pp,
    isBuffer: Ry,
    isFormData: zy,
    isArrayBufferView: Ny,
    isString: Ty,
    isNumber: Lp,
    isBoolean: _y,
    isObject: nl,
    isPlainObject: Go,
    isReadableStream: Fy,
    isRequest: jy,
    isResponse: Iy,
    isHeaders: Uy,
    isUndefined: no,
    isDate: Dy,
    isFile: Oy,
    isBlob: Py,
    isRegExp: Gy,
    isFunction: Ie,
    isStream: Ay,
    isURLSearchParams: My,
    isTypedArray: Qy,
    isFileList: Ly,
    forEach: po,
    merge: Us,
    extend: $y,
    trim: By,
    stripBOM: Hy,
    inherits: Vy,
    toFlatObject: Wy,
    kindOf: el,
    kindOfTest: at,
    endsWith: by,
    toArray: Ky,
    forEachEntry: Xy,
    matchAll: Yy,
    isHTMLForm: qy,
    hasOwnProperty: Ac,
    hasOwnProp: Ac,
    reduceDescriptors: Mp,
    freezeMethods: Zy,
    toObjectSet: e0,
    toCamelCase: Jy,
    noop: t0,
    toFiniteNumber: n0,
    findKey: Ap,
    global: un,
    isContextDefined: zp,
    ALPHABET: Fp,
    generateString: r0,
    isSpecCompliantForm: o0,
    toJSONObject: i0,
    isAsyncFn: l0,
    isThenable: s0,
    setImmediate: jp,
    asap: u0,
  };
function z(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
S.inherits(z, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: S.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Ip = z.prototype,
  Up = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Up[e] = { value: e };
});
Object.defineProperties(z, Up);
Object.defineProperty(Ip, "isAxiosError", { value: !0 });
z.from = (e, t, n, r, o, i) => {
  const l = Object.create(Ip);
  return (
    S.toFlatObject(
      e,
      l,
      function (u) {
        return u !== Error.prototype;
      },
      (s) => s !== "isAxiosError",
    ),
    z.call(l, e.message, t, n, r, o),
    (l.cause = e),
    (l.name = e.name),
    i && Object.assign(l, i),
    l
  );
};
const a0 = null;
function Bs(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function Bp(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Mc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Bp(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function c0(e) {
  return S.isArray(e) && !e.some(Bs);
}
const d0 = S.toFlatObject(S, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function rl(e, t, n) {
  if (!S.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = S.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, C) {
        return !S.isUndefined(C[g]);
      },
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    l = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && S.isSpecCompliantForm(t);
  if (!S.isFunction(o)) throw new TypeError("visitor must be a function");
  function a(v) {
    if (v === null) return "";
    if (S.isDate(v)) return v.toISOString();
    if (!u && S.isBlob(v))
      throw new z("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(v) || S.isTypedArray(v)
      ? u && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function c(v, g, C) {
    let p = v;
    if (v && !C && typeof v == "object") {
      if (S.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (S.isArray(v) && c0(v)) ||
        ((S.isFileList(v) || S.endsWith(g, "[]")) && (p = S.toArray(v)))
      )
        return (
          (g = Bp(g)),
          p.forEach(function (h, x) {
            !(S.isUndefined(h) || h === null) &&
              t.append(
                l === !0 ? Mc([g], x, i) : l === null ? g : g + "[]",
                a(h),
              );
          }),
          !1
        );
    }
    return Bs(v) ? !0 : (t.append(Mc(C, g, i), a(v)), !1);
  }
  const f = [],
    m = Object.assign(d0, {
      defaultVisitor: c,
      convertValue: a,
      isVisitable: Bs,
    });
  function y(v, g) {
    if (!S.isUndefined(v)) {
      if (f.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(v),
        S.forEach(v, function (p, d) {
          (!(S.isUndefined(p) || p === null) &&
            o.call(t, p, S.isString(d) ? d.trim() : d, g, m)) === !0 &&
            y(p, g ? g.concat(d) : [d]);
        }),
        f.pop();
    }
  }
  if (!S.isObject(e)) throw new TypeError("data must be an object");
  return y(e), t;
}
function Fc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Yu(e, t) {
  (this._pairs = []), e && rl(e, this, t);
}
const $p = Yu.prototype;
$p.append = function (t, n) {
  this._pairs.push([t, n]);
};
$p.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Fc);
      }
    : Fc;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function f0(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Hp(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || f0,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = S.isURLSearchParams(t) ? t.toString() : new Yu(t, n).toString(r)),
    i)
  ) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class jc {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    S.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Vp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  p0 = typeof URLSearchParams < "u" ? URLSearchParams : Yu,
  h0 = typeof FormData < "u" ? FormData : null,
  m0 = typeof Blob < "u" ? Blob : null,
  g0 = {
    isBrowser: !0,
    classes: { URLSearchParams: p0, FormData: h0, Blob: m0 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  qu = typeof window < "u" && typeof document < "u",
  $s = (typeof navigator == "object" && navigator) || void 0,
  v0 =
    qu &&
    (!$s || ["ReactNative", "NativeScript", "NS"].indexOf($s.product) < 0),
  y0 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  w0 = (qu && window.location.href) || "http://localhost",
  S0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: qu,
        hasStandardBrowserEnv: v0,
        hasStandardBrowserWebWorkerEnv: y0,
        navigator: $s,
        origin: w0,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  De = { ...S0, ...g0 };
function E0(e, t) {
  return rl(
    e,
    new De.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return De.isNode && S.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function x0(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function k0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function Wp(e) {
  function t(n, r, o, i) {
    let l = n[i++];
    if (l === "__proto__") return !0;
    const s = Number.isFinite(+l),
      u = i >= n.length;
    return (
      (l = !l && S.isArray(o) ? o.length : l),
      u
        ? (S.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !s)
        : ((!o[l] || !S.isObject(o[l])) && (o[l] = []),
          t(n, r, o[l], i) && S.isArray(o[l]) && (o[l] = k0(o[l])),
          !s)
    );
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return (
      S.forEachEntry(e, (r, o) => {
        t(x0(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function C0(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ho = {
  transitional: Vp,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = S.isObject(t);
      if ((i && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t)))
        return o ? JSON.stringify(Wp(t)) : t;
      if (
        S.isArrayBuffer(t) ||
        S.isBuffer(t) ||
        S.isStream(t) ||
        S.isFile(t) ||
        S.isBlob(t) ||
        S.isReadableStream(t)
      )
        return t;
      if (S.isArrayBufferView(t)) return t.buffer;
      if (S.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let s;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return E0(t, this.formSerializer).toString();
        if ((s = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return rl(
            s ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer,
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), C0(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ho.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (S.isResponse(t) || S.isReadableStream(t)) return t;
      if (t && S.isString(t) && ((r && !this.responseType) || o)) {
        const l = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (l)
            throw s.name === "SyntaxError"
              ? z.from(s, z.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: De.classes.FormData, Blob: De.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
S.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ho.headers[e] = {};
});
const R0 = S.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  N0 = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (l) {
            (o = l.indexOf(":")),
              (n = l.substring(0, o).trim().toLowerCase()),
              (r = l.substring(o + 1).trim()),
              !(!n || (t[n] && R0[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Ic = Symbol("internals");
function Sr(e) {
  return e && String(e).trim().toLowerCase();
}
function Zo(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(Zo) : String(e);
}
function T0(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const _0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function $l(e, t, n, r, o) {
  if (S.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!S.isString(t))) {
    if (S.isString(r)) return t.indexOf(r) !== -1;
    if (S.isRegExp(r)) return r.test(t);
  }
}
function D0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function O0(e, t) {
  const n = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, l) {
        return this[r].call(this, t, o, i, l);
      },
      configurable: !0,
    });
  });
}
class Oe {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(s, u, a) {
      const c = Sr(u);
      if (!c) throw new Error("header name must be a non-empty string");
      const f = S.findKey(o, c);
      (!f || o[f] === void 0 || a === !0 || (a === void 0 && o[f] !== !1)) &&
        (o[f || u] = Zo(s));
    }
    const l = (s, u) => S.forEach(s, (a, c) => i(a, c, u));
    if (S.isPlainObject(t) || t instanceof this.constructor) l(t, n);
    else if (S.isString(t) && (t = t.trim()) && !_0(t)) l(N0(t), n);
    else if (S.isHeaders(t)) for (const [s, u] of t.entries()) i(u, s, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Sr(t)), t)) {
      const r = S.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return T0(o);
        if (S.isFunction(n)) return n.call(this, o, r);
        if (S.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Sr(t)), t)) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || $l(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(l) {
      if (((l = Sr(l)), l)) {
        const s = S.findKey(r, l);
        s && (!n || $l(r, r[s], s, n)) && (delete r[s], (o = !0));
      }
    }
    return S.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || $l(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      S.forEach(this, (o, i) => {
        const l = S.findKey(r, i);
        if (l) {
          (n[l] = Zo(o)), delete n[i];
          return;
        }
        const s = t ? D0(i) : String(i).trim();
        s !== i && delete n[i], (n[s] = Zo(o)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      S.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && S.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Ic] = this[Ic] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(l) {
      const s = Sr(l);
      r[s] || (O0(o, l), (r[s] = !0));
    }
    return S.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Oe.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
S.reduceDescriptors(Oe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
S.freezeMethods(Oe);
function Hl(e, t) {
  const n = this || ho,
    r = t || n,
    o = Oe.from(r.headers);
  let i = r.data;
  return (
    S.forEach(e, function (s) {
      i = s.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function bp(e) {
  return !!(e && e.__CANCEL__);
}
function lr(e, t, n) {
  z.call(this, e ?? "canceled", z.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
S.inherits(lr, z, { __CANCEL__: !0 });
function Kp(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new z(
          "Request failed with status code " + n.status,
          [z.ERR_BAD_REQUEST, z.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
function P0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function L0(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        c = r[i];
      l || (l = a), (n[o] = u), (r[o] = a);
      let f = i,
        m = 0;
      for (; f !== o; ) (m += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), a - l < t)) return;
      const y = c && a - c;
      return y ? Math.round((m * 1e3) / y) : void 0;
    }
  );
}
function A0(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    i;
  const l = (a, c = Date.now()) => {
    (n = c), (o = null), i && (clearTimeout(i), (i = null)), e.apply(null, a);
  };
  return [
    (...a) => {
      const c = Date.now(),
        f = c - n;
      f >= r
        ? l(a, c)
        : ((o = a),
          i ||
            (i = setTimeout(() => {
              (i = null), l(o);
            }, r - f)));
    },
    () => o && l(o),
  ];
}
const Pi = (e, t, n = 3) => {
    let r = 0;
    const o = L0(50, 250);
    return A0((i) => {
      const l = i.loaded,
        s = i.lengthComputable ? i.total : void 0,
        u = l - r,
        a = o(u),
        c = l <= s;
      r = l;
      const f = {
        loaded: l,
        total: s,
        progress: s ? l / s : void 0,
        bytes: u,
        rate: a || void 0,
        estimated: a && s && c ? (s - l) / a : void 0,
        event: i,
        lengthComputable: s != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  Uc = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Bc =
    (e) =>
    (...t) =>
      S.asap(() => e(...t)),
  z0 = De.hasStandardBrowserEnv
    ? (function () {
        const t =
            De.navigator && /(msie|trident)/i.test(De.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function o(i) {
          let l = i;
          return (
            t && (n.setAttribute("href", l), (l = n.href)),
            n.setAttribute("href", l),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = o(window.location.href)),
          function (l) {
            const s = S.isString(l) ? o(l) : l;
            return s.protocol === r.protocol && s.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  M0 = De.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, i) {
          const l = [e + "=" + encodeURIComponent(t)];
          S.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
            S.isString(r) && l.push("path=" + r),
            S.isString(o) && l.push("domain=" + o),
            i === !0 && l.push("secure"),
            (document.cookie = l.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function F0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function j0(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Qp(e, t) {
  return e && !F0(t) ? j0(e, t) : t;
}
const $c = (e) => (e instanceof Oe ? { ...e } : e);
function yn(e, t) {
  t = t || {};
  const n = {};
  function r(a, c, f) {
    return S.isPlainObject(a) && S.isPlainObject(c)
      ? S.merge.call({ caseless: f }, a, c)
      : S.isPlainObject(c)
      ? S.merge({}, c)
      : S.isArray(c)
      ? c.slice()
      : c;
  }
  function o(a, c, f) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(a)) return r(void 0, a, f);
    } else return r(a, c, f);
  }
  function i(a, c) {
    if (!S.isUndefined(c)) return r(void 0, c);
  }
  function l(a, c) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, c);
  }
  function s(a, c, f) {
    if (f in t) return r(a, c);
    if (f in e) return r(void 0, a);
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: s,
    headers: (a, c) => o($c(a), $c(c), !0),
  };
  return (
    S.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = u[c] || o,
        m = f(e[c], t[c], c);
      (S.isUndefined(m) && f !== s) || (n[c] = m);
    }),
    n
  );
}
const Xp = (e) => {
    const t = yn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: i,
      headers: l,
      auth: s,
    } = t;
    (t.headers = l = Oe.from(l)),
      (t.url = Hp(Qp(t.baseURL, t.url), e.params, e.paramsSerializer)),
      s &&
        l.set(
          "Authorization",
          "Basic " +
            btoa(
              (s.username || "") +
                ":" +
                (s.password ? unescape(encodeURIComponent(s.password)) : ""),
            ),
        );
    let u;
    if (S.isFormData(n)) {
      if (De.hasStandardBrowserEnv || De.hasStandardBrowserWebWorkerEnv)
        l.setContentType(void 0);
      else if ((u = l.getContentType()) !== !1) {
        const [a, ...c] = u
          ? u
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        l.setContentType([a || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      De.hasStandardBrowserEnv &&
      (r && S.isFunction(r) && (r = r(t)), r || (r !== !1 && z0(t.url)))
    ) {
      const a = o && i && M0.read(i);
      a && l.set(o, a);
    }
    return t;
  },
  I0 = typeof XMLHttpRequest < "u",
  U0 =
    I0 &&
    function (e) {
      return new Promise(function (n, r) {
        const o = Xp(e);
        let i = o.data;
        const l = Oe.from(o.headers).normalize();
        let { responseType: s, onUploadProgress: u, onDownloadProgress: a } = o,
          c,
          f,
          m,
          y,
          v;
        function g() {
          y && y(),
            v && v(),
            o.cancelToken && o.cancelToken.unsubscribe(c),
            o.signal && o.signal.removeEventListener("abort", c);
        }
        let C = new XMLHttpRequest();
        C.open(o.method.toUpperCase(), o.url, !0), (C.timeout = o.timeout);
        function p() {
          if (!C) return;
          const h = Oe.from(
              "getAllResponseHeaders" in C && C.getAllResponseHeaders(),
            ),
            w = {
              data:
                !s || s === "text" || s === "json"
                  ? C.responseText
                  : C.response,
              status: C.status,
              statusText: C.statusText,
              headers: h,
              config: e,
              request: C,
            };
          Kp(
            function (k) {
              n(k), g();
            },
            function (k) {
              r(k), g();
            },
            w,
          ),
            (C = null);
        }
        "onloadend" in C
          ? (C.onloadend = p)
          : (C.onreadystatechange = function () {
              !C ||
                C.readyState !== 4 ||
                (C.status === 0 &&
                  !(C.responseURL && C.responseURL.indexOf("file:") === 0)) ||
                setTimeout(p);
            }),
          (C.onabort = function () {
            C &&
              (r(new z("Request aborted", z.ECONNABORTED, e, C)), (C = null));
          }),
          (C.onerror = function () {
            r(new z("Network Error", z.ERR_NETWORK, e, C)), (C = null);
          }),
          (C.ontimeout = function () {
            let x = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const w = o.transitional || Vp;
            o.timeoutErrorMessage && (x = o.timeoutErrorMessage),
              r(
                new z(
                  x,
                  w.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED,
                  e,
                  C,
                ),
              ),
              (C = null);
          }),
          i === void 0 && l.setContentType(null),
          "setRequestHeader" in C &&
            S.forEach(l.toJSON(), function (x, w) {
              C.setRequestHeader(w, x);
            }),
          S.isUndefined(o.withCredentials) ||
            (C.withCredentials = !!o.withCredentials),
          s && s !== "json" && (C.responseType = o.responseType),
          a && (([m, v] = Pi(a, !0)), C.addEventListener("progress", m)),
          u &&
            C.upload &&
            (([f, y] = Pi(u)),
            C.upload.addEventListener("progress", f),
            C.upload.addEventListener("loadend", y)),
          (o.cancelToken || o.signal) &&
            ((c = (h) => {
              C &&
                (r(!h || h.type ? new lr(null, e, C) : h),
                C.abort(),
                (C = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(c),
            o.signal &&
              (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
        const d = P0(o.url);
        if (d && De.protocols.indexOf(d) === -1) {
          r(new z("Unsupported protocol " + d + ":", z.ERR_BAD_REQUEST, e));
          return;
        }
        C.send(i || null);
      });
    },
  B0 = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        o;
      const i = function (a) {
        if (!o) {
          (o = !0), s();
          const c = a instanceof Error ? a : this.reason;
          r.abort(
            c instanceof z ? c : new lr(c instanceof Error ? c.message : c),
          );
        }
      };
      let l =
        t &&
        setTimeout(() => {
          (l = null), i(new z(`timeout ${t} of ms exceeded`, z.ETIMEDOUT));
        }, t);
      const s = () => {
        e &&
          (l && clearTimeout(l),
          (l = null),
          e.forEach((a) => {
            a.unsubscribe
              ? a.unsubscribe(i)
              : a.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((a) => a.addEventListener("abort", i));
      const { signal: u } = r;
      return (u.unsubscribe = () => S.asap(s)), u;
    }
  },
  $0 = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  H0 = async function* (e, t) {
    for await (const n of V0(e)) yield* $0(n, t);
  },
  V0 = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Hc = (e, t, n, r) => {
    const o = H0(e, t);
    let i = 0,
      l,
      s = (u) => {
        l || ((l = !0), r && r(u));
      };
    return new ReadableStream(
      {
        async pull(u) {
          try {
            const { done: a, value: c } = await o.next();
            if (a) {
              s(), u.close();
              return;
            }
            let f = c.byteLength;
            if (n) {
              let m = (i += f);
              n(m);
            }
            u.enqueue(new Uint8Array(c));
          } catch (a) {
            throw (s(a), a);
          }
        },
        cancel(u) {
          return s(u), o.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  ol =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Yp = ol && typeof ReadableStream == "function",
  W0 =
    ol &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  qp = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  b0 =
    Yp &&
    qp(() => {
      let e = !1;
      const t = new Request(De.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Vc = 64 * 1024,
  Hs = Yp && qp(() => S.isReadableStream(new Response("").body)),
  Li = { stream: Hs && ((e) => e.body) };
ol &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Li[t] &&
        (Li[t] = S.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new z(
                `Response type '${t}' is not supported`,
                z.ERR_NOT_SUPPORT,
                r,
              );
            });
    });
  })(new Response());
const K0 = async (e) => {
    if (e == null) return 0;
    if (S.isBlob(e)) return e.size;
    if (S.isSpecCompliantForm(e))
      return (
        await new Request(De.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (S.isArrayBufferView(e) || S.isArrayBuffer(e)) return e.byteLength;
    if ((S.isURLSearchParams(e) && (e = e + ""), S.isString(e)))
      return (await W0(e)).byteLength;
  },
  Q0 = async (e, t) => {
    const n = S.toFiniteNumber(e.getContentLength());
    return n ?? K0(t);
  },
  X0 =
    ol &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: i,
        timeout: l,
        onDownloadProgress: s,
        onUploadProgress: u,
        responseType: a,
        headers: c,
        withCredentials: f = "same-origin",
        fetchOptions: m,
      } = Xp(e);
      a = a ? (a + "").toLowerCase() : "text";
      let y = B0([o, i && i.toAbortSignal()], l),
        v;
      const g =
        y &&
        y.unsubscribe &&
        (() => {
          y.unsubscribe();
        });
      let C;
      try {
        if (
          u &&
          b0 &&
          n !== "get" &&
          n !== "head" &&
          (C = await Q0(c, r)) !== 0
        ) {
          let w = new Request(t, { method: "POST", body: r, duplex: "half" }),
            R;
          if (
            (S.isFormData(r) &&
              (R = w.headers.get("content-type")) &&
              c.setContentType(R),
            w.body)
          ) {
            const [k, N] = Uc(C, Pi(Bc(u)));
            r = Hc(w.body, Vc, k, N);
          }
        }
        S.isString(f) || (f = f ? "include" : "omit");
        const p = "credentials" in Request.prototype;
        v = new Request(t, {
          ...m,
          signal: y,
          method: n.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: p ? f : void 0,
        });
        let d = await fetch(v);
        const h = Hs && (a === "stream" || a === "response");
        if (Hs && (s || (h && g))) {
          const w = {};
          ["status", "statusText", "headers"].forEach((_) => {
            w[_] = d[_];
          });
          const R = S.toFiniteNumber(d.headers.get("content-length")),
            [k, N] = (s && Uc(R, Pi(Bc(s), !0))) || [];
          d = new Response(
            Hc(d.body, Vc, k, () => {
              N && N(), g && g();
            }),
            w,
          );
        }
        a = a || "text";
        let x = await Li[S.findKey(Li, a) || "text"](d, e);
        return (
          !h && g && g(),
          await new Promise((w, R) => {
            Kp(w, R, {
              data: x,
              headers: Oe.from(d.headers),
              status: d.status,
              statusText: d.statusText,
              config: e,
              request: v,
            });
          })
        );
      } catch (p) {
        throw (
          (g && g(),
          p && p.name === "TypeError" && /fetch/i.test(p.message)
            ? Object.assign(new z("Network Error", z.ERR_NETWORK, e, v), {
                cause: p.cause || p,
              })
            : z.from(p, p && p.code, e, v))
        );
      }
    }),
  Vs = { http: a0, xhr: U0, fetch: X0 };
S.forEach(Vs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Wc = (e) => `- ${e}`,
  Y0 = (e) => S.isFunction(e) || e === null || e === !1,
  Jp = {
    getAdapter: (e) => {
      e = S.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let l;
        if (
          ((r = n),
          !Y0(n) && ((r = Vs[(l = String(n)).toLowerCase()]), r === void 0))
        )
          throw new z(`Unknown adapter '${l}'`);
        if (r) break;
        o[l || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([s, u]) =>
            `adapter ${s} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let l = t
          ? i.length > 1
            ? `since :
` +
              i.map(Wc).join(`
`)
            : " " + Wc(i[0])
          : "as no adapter specified";
        throw new z(
          "There is no suitable adapter to dispatch the request " + l,
          "ERR_NOT_SUPPORT",
        );
      }
      return r;
    },
    adapters: Vs,
  };
function Vl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new lr(null, e);
}
function bc(e) {
  return (
    Vl(e),
    (e.headers = Oe.from(e.headers)),
    (e.data = Hl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Jp.getAdapter(e.adapter || ho.adapter)(e).then(
      function (r) {
        return (
          Vl(e),
          (r.data = Hl.call(e, e.transformResponse, r)),
          (r.headers = Oe.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          bp(r) ||
            (Vl(e),
            r &&
              r.response &&
              ((r.response.data = Hl.call(e, e.transformResponse, r.response)),
              (r.response.headers = Oe.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const Gp = "1.7.7",
  Ju = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ju[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const Kc = {};
Ju.transitional = function (t, n, r) {
  function o(i, l) {
    return (
      "[Axios v" +
      Gp +
      "] Transitional option '" +
      i +
      "'" +
      l +
      (r ? ". " + r : "")
    );
  }
  return (i, l, s) => {
    if (t === !1)
      throw new z(
        o(l, " has been removed" + (n ? " in " + n : "")),
        z.ERR_DEPRECATED,
      );
    return (
      n &&
        !Kc[l] &&
        ((Kc[l] = !0),
        console.warn(
          o(
            l,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(i, l, s) : !0
    );
  };
};
function q0(e, t, n) {
  if (typeof e != "object")
    throw new z("options must be an object", z.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      l = t[i];
    if (l) {
      const s = e[i],
        u = s === void 0 || l(s, i, e);
      if (u !== !0)
        throw new z("option " + i + " must be " + u, z.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new z("Unknown option " + i, z.ERR_BAD_OPTION);
  }
}
const Ws = { assertOptions: q0, validators: Ju },
  Pt = Ws.validators;
class dn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new jc(), response: new jc() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = yn(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Ws.assertOptions(
        r,
        {
          silentJSONParsing: Pt.transitional(Pt.boolean),
          forcedJSONParsing: Pt.transitional(Pt.boolean),
          clarifyTimeoutError: Pt.transitional(Pt.boolean),
        },
        !1,
      ),
      o != null &&
        (S.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Ws.assertOptions(
              o,
              { encode: Pt.function, serialize: Pt.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let l = i && S.merge(i.common, i[n.method]);
    i &&
      S.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (v) => {
          delete i[v];
        },
      ),
      (n.headers = Oe.concat(l, i));
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((u = u && g.synchronous), s.unshift(g.fulfilled, g.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (g) {
      a.push(g.fulfilled, g.rejected);
    });
    let c,
      f = 0,
      m;
    if (!u) {
      const v = [bc.bind(this), void 0];
      for (
        v.unshift.apply(v, s),
          v.push.apply(v, a),
          m = v.length,
          c = Promise.resolve(n);
        f < m;

      )
        c = c.then(v[f++], v[f++]);
      return c;
    }
    m = s.length;
    let y = n;
    for (f = 0; f < m; ) {
      const v = s[f++],
        g = s[f++];
      try {
        y = v(y);
      } catch (C) {
        g.call(this, C);
        break;
      }
    }
    try {
      c = bc.call(this, y);
    } catch (v) {
      return Promise.reject(v);
    }
    for (f = 0, m = a.length; f < m; ) c = c.then(a[f++], a[f++]);
    return c;
  }
  getUri(t) {
    t = yn(this.defaults, t);
    const n = Qp(t.baseURL, t.url);
    return Hp(n, t.params, t.paramsSerializer);
  }
}
S.forEach(["delete", "get", "head", "options"], function (t) {
  dn.prototype[t] = function (n, r) {
    return this.request(
      yn(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
S.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, l, s) {
      return this.request(
        yn(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: l,
        }),
      );
    };
  }
  (dn.prototype[t] = n()), (dn.prototype[t + "Form"] = n(!0));
});
class Gu {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const l = new Promise((s) => {
          r.subscribe(s), (i = s);
        }).then(o);
        return (
          (l.cancel = function () {
            r.unsubscribe(i);
          }),
          l
        );
      }),
      t(function (i, l, s) {
        r.reason || ((r.reason = new lr(i, l, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Gu(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function J0(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function G0(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const bs = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(bs).forEach(([e, t]) => {
  bs[t] = e;
});
function Zp(e) {
  const t = new dn(e),
    n = Op(dn.prototype.request, t);
  return (
    S.extend(n, dn.prototype, t, { allOwnKeys: !0 }),
    S.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Zp(yn(e, o));
    }),
    n
  );
}
const J = Zp(ho);
J.Axios = dn;
J.CanceledError = lr;
J.CancelToken = Gu;
J.isCancel = bp;
J.VERSION = Gp;
J.toFormData = rl;
J.AxiosError = z;
J.Cancel = J.CanceledError;
J.all = function (t) {
  return Promise.all(t);
};
J.spread = J0;
J.isAxiosError = G0;
J.mergeConfig = yn;
J.AxiosHeaders = Oe;
J.formToJSON = (e) => Wp(S.isHTMLForm(e) ? new FormData(e) : e);
J.getAdapter = Jp.getAdapter;
J.HttpStatusCode = bs;
J.default = J;
function Z0() {
  const [e, t] = E.useState([]),
    [n, r] = E.useState([]),
    [o, i] = E.useState(null),
    [l, s] = E.useState(null),
    [u, a] = E.useState([]),
    [c, f] = E.useState(null),
    [m, y] = E.useState(0),
    [v, g] = E.useState("Craft some items together and see what happens!");
  E.useEffect(() => {
    dallinger
      .get("/api/start", { urlParams: window.location.search })
      .then((w) => {
        t(w.elements);
      }),
      dallinger
        .get("/api/n-steps", { urlParams: window.location.search })
        .then((w) => {
          f(w.n_steps);
        });
  }, []),
    E.useEffect(() => {
      n.forEach((w) => {
        const R = document.getElementById(w.id);
        R &&
          (u.includes(w.id)
            ? (console.log("trying id", w.id), R && R.classList.add("shake"))
            : R.classList.contains("shake") && R.classList.remove("shake"));
      });
    }, [u, n]),
    E.useEffect(() => {
      c === 0 &&
        (g("You have used all your actions! Press 'Next' to continue."),
        alert("You have used all your actions! Press 'Next' to continue."));
    }, [c]);
  const C = (w) => {
      const { active: R } = w;
      R.data.current.type === "element"
        ? i(w.active.data.current.element)
        : R.data.current.type === "placed-element" &&
          s(w.active.data.current.element);
    },
    p = (w, R) => {
      a([w.id, R.id]),
        setTimeout(() => {
          a(u.filter((k) => k !== w.id && k !== R.id));
        }, 500);
    },
    d = (w, R) => {
      console.log("e1", w),
        console.log("e2", R),
        c !== 0 &&
          dallinger
            .post("/api/combine", {
              urlParams: window.location.search,
              item1: w.text,
              item2: R.text,
            })
            .then((k) => {
              if ((f(c !== null ? c - 1 : null), k.element === null)) {
                p(w, R);
                return;
              }
              "id" in R
                ? r((N) =>
                    N.filter((_) => _.id !== R.id).map((_) =>
                      _.id === w.id ? { ..._, isLoading: !0 } : _,
                    ),
                  )
                : r((N) =>
                    N.map((_) => (_.id === w.id ? { ..._, isLoading: !0 } : _)),
                  ),
                r((N) =>
                  N.map((_) =>
                    _.id === w.id
                      ? {
                          ...k.element,
                          id: Lc(),
                          x: _.x,
                          y: _.y,
                          isLoading: !1,
                        }
                      : _,
                  ),
                ),
                e.every((N) => N.text !== k.element.text) &&
                  (g(
                    `You discovered ${k.element.text} with value ${k.element.value}`,
                  ),
                  y((N) => N + k.element.value),
                  t((N) => [...N, k.element]));
            })
            .catch((k) => {
              window.alert(
                "Something when wrong! Failed to combine elements" +
                  k.toString(),
              ),
                r((N) =>
                  N.map((_) => (_.id === w.id ? { ..._, isLoading: !1 } : _)),
                );
            });
    },
    h = (w) => {
      const { active: R, over: k } = w;
      let N = { id: "", x: 0, y: 0, text: "", image: "", value: 0 };
      if (
        R.data.current.type === "placed-element" &&
        (!k || k.data.current.type === "sidebar")
      ) {
        const _ = R.data.current.element,
          P = n.filter((M) => M.id !== _.id);
        r(P);
      } else if (R.data.current.type === "placed-element") {
        const _ = R.data.current.element;
        N = { ..._, x: _.x + w.delta.x, y: _.y + w.delta.y };
        const P = [...n.filter((M) => M.id !== N.id), N];
        r(P);
      } else if (
        R.data.current.type === "element" &&
        k &&
        k.data.current.type !== "sidebar"
      ) {
        const _ = R.data.current.element,
          P = w.activatorEvent.target;
        let M;
        P.classList.contains("flex")
          ? (M = w.activatorEvent.target.getBoundingClientRect())
          : (M = P.parentElement.getBoundingClientRect());
        const le = document.querySelector("#root");
        let ee;
        le ? (ee = le.getBoundingClientRect()) : (ee = { top: 0, left: 0 }),
          (N = { ..._, id: Lc(), x: M.left - ee.left, y: M.top - ee.top }),
          r((Pe) => [...Pe, N]);
      }
      N.id !== "" &&
        k &&
        k.data.current.type === "placed-element" &&
        k.data.current.element.id !== N.id &&
        (console.log("combining elements"), d(k.data.current.element, N)),
        i(null),
        s(null);
    },
    x = E.useMemo(() => n.some((w) => w.isLoading), [n]);
  return j.jsxs(Vv, {
    onDragStart: C,
    onDragEnd: h,
    children: [
      j.jsxs("main", {
        className: "flex h-[70vh] flex-col border-2 border-black",
        children: [
          j.jsxs("div", {
            className: "grid grid-cols-12 h-full",
            children: [
              j.jsx(wy, {
                setPlacedElements: r,
                placedElements: n,
                isLoading: x,
              }),
              j.jsx(yy, { elements: e, isLoading: x }),
            ],
          }),
          j.jsxs("div", {
            className: "absolute text-xl p-2 -z-10",
            children: [
              j.jsxs("div", { children: [c, " actions left"] }),
              j.jsx("div", { children: v }),
              j.jsxs("div", { children: ["total: ", m] }),
            ],
          }),
        ],
      }),
      j.jsxs(sy, {
        dropAnimation: null,
        children: [
          o && j.jsx(Oi, { element: o }),
          l && j.jsx(Oi, { element: l }),
        ],
      }),
    ],
  });
}
lp(document.getElementById("root")).render(
  j.jsx(E.StrictMode, { children: j.jsx(Z0, {}) }),
);
