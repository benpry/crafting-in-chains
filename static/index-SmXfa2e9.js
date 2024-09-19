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
function sh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var bc = { exports: {} },
  Ai = {},
  Xc = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ro = Symbol.for("react.element"),
  uh = Symbol.for("react.portal"),
  ah = Symbol.for("react.fragment"),
  ch = Symbol.for("react.strict_mode"),
  dh = Symbol.for("react.profiler"),
  fh = Symbol.for("react.provider"),
  ph = Symbol.for("react.context"),
  hh = Symbol.for("react.forward_ref"),
  mh = Symbol.for("react.suspense"),
  gh = Symbol.for("react.memo"),
  vh = Symbol.for("react.lazy"),
  da = Symbol.iterator;
function yh(e) {
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
function Qs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Jc),
    (this.updater = n || Yc);
}
var bs = (Qs.prototype = new Gc());
bs.constructor = Qs;
qc(bs, er.prototype);
bs.isPureReactComponent = !0;
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
function wh(e, t) {
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
function Sh(e) {
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
    ? Sh("" + e.key)
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
          case uh:
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
            (o = wh(
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
  else if (((u = yh(e)), typeof u == "function"))
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
function Eh(e) {
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
  xh = {
    ReactCurrentDispatcher: Ee,
    ReactCurrentBatchConfig: Bo,
    ReactCurrentOwner: Xs,
  };
function nd() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = {
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
M.Component = er;
M.Fragment = ah;
M.Profiler = dh;
M.PureComponent = Qs;
M.StrictMode = ch;
M.Suspense = mh;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xh;
M.act = nd;
M.cloneElement = function (e, t, n) {
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
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: ph,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: fh, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = td;
M.createFactory = function (e) {
  var t = td.bind(null, e);
  return (t.type = e), t;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: hh, render: e };
};
M.isValidElement = Ys;
M.lazy = function (e) {
  return { $$typeof: vh, _payload: { _status: -1, _result: e }, _init: Eh };
};
M.memo = function (e, t) {
  return { $$typeof: gh, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = Bo.transition;
  Bo.transition = {};
  try {
    e();
  } finally {
    Bo.transition = t;
  }
};
M.unstable_act = nd;
M.useCallback = function (e, t) {
  return Ee.current.useCallback(e, t);
};
M.useContext = function (e) {
  return Ee.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return Ee.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return Ee.current.useEffect(e, t);
};
M.useId = function () {
  return Ee.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return Ee.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return Ee.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return Ee.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return Ee.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return Ee.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return Ee.current.useRef(e);
};
M.useState = function (e) {
  return Ee.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return Ee.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return Ee.current.useTransition();
};
M.version = "18.3.1";
Xc.exports = M;
var x = Xc.exports;
const G = sh(x);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kh = x,
  Ch = Symbol.for("react.element"),
  Rh = Symbol.for("react.fragment"),
  Nh = Object.prototype.hasOwnProperty,
  Th = kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _h = { key: !0, ref: !0, __self: !0, __source: !0 };
function rd(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Nh.call(t, r) && !_h.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Ch,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Th.current,
  };
}
Ai.Fragment = Rh;
Ai.jsx = rd;
Ai.jsxs = rd;
bc.exports = Ai;
var j = bc.exports,
  od = { exports: {} },
  Ue = {},
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
  function t(_, L) {
    var A = _.length;
    _.push(L);
    e: for (; 0 < A; ) {
      var K = (A - 1) >>> 1,
        B = _[K];
      if (0 < o(B, L)) (_[K] = L), (_[A] = B), (A = K);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var L = _[0],
      A = _.pop();
    if (A !== L) {
      _[0] = A;
      e: for (var K = 0, B = _.length, Je = B >>> 1; K < Je; ) {
        var $e = 2 * (K + 1) - 1,
          xn = _[$e],
          te = $e + 1,
          Gt = _[te];
        if (0 > o(xn, A))
          te < B && 0 > o(Gt, xn)
            ? ((_[K] = Gt), (_[te] = A), (K = te))
            : ((_[K] = xn), (_[$e] = A), (K = $e));
        else if (te < B && 0 > o(Gt, A)) (_[K] = Gt), (_[te] = A), (K = te);
        else break e;
      }
    }
    return L;
  }
  function o(_, L) {
    var A = _.sortIndex - L.sortIndex;
    return A !== 0 ? A : _.id - L.id;
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
    d = 1,
    f = null,
    m = 3,
    y = !1,
    v = !1,
    g = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(_) {
    for (var L = n(a); L !== null; ) {
      if (L.callback === null) r(a);
      else if (L.startTime <= _)
        r(a), (L.sortIndex = L.expirationTime), t(u, L);
      else break;
      L = n(a);
    }
  }
  function w(_) {
    if (((g = !1), p(_), !v))
      if (n(u) !== null) (v = !0), En(S);
      else {
        var L = n(a);
        L !== null && Pe(w, L.startTime - _);
      }
  }
  function S(_, L) {
    (v = !1), g && ((g = !1), h(T), (T = -1)), (y = !0);
    var A = m;
    try {
      for (
        p(L), f = n(u);
        f !== null && (!(f.expirationTime > L) || (_ && !F()));

      ) {
        var K = f.callback;
        if (typeof K == "function") {
          (f.callback = null), (m = f.priorityLevel);
          var B = K(f.expirationTime <= L);
          (L = e.unstable_now()),
            typeof B == "function" ? (f.callback = B) : f === n(u) && r(u),
            p(L);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var Je = !0;
      else {
        var $e = n(a);
        $e !== null && Pe(w, $e.startTime - L), (Je = !1);
      }
      return Je;
    } finally {
      (f = null), (m = A), (y = !1);
    }
  }
  var R = !1,
    C = null,
    T = -1,
    P = 5,
    D = -1;
  function F() {
    return !(e.unstable_now() - D < P);
  }
  function ve() {
    if (C !== null) {
      var _ = e.unstable_now();
      D = _;
      var L = !0;
      try {
        L = C(!0, _);
      } finally {
        L ? ye() : ((R = !1), (C = null));
      }
    } else R = !1;
  }
  var ye;
  if (typeof c == "function")
    ye = function () {
      c(ve);
    };
  else if (typeof MessageChannel < "u") {
    var qe = new MessageChannel(),
      mo = qe.port2;
    (qe.port1.onmessage = ve),
      (ye = function () {
        mo.postMessage(null);
      });
  } else
    ye = function () {
      k(ve, 0);
    };
  function En(_) {
    (C = _), R || ((R = !0), ye());
  }
  function Pe(_, L) {
    T = k(function () {
      _(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), En(S));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (P = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (_) {
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
        return _();
      } finally {
        m = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, L) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var A = m;
      m = _;
      try {
        return L();
      } finally {
        m = A;
      }
    }),
    (e.unstable_scheduleCallback = function (_, L, A) {
      var K = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? K + A : K))
          : (A = K),
        _)
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
        (_ = {
          id: d++,
          callback: L,
          priorityLevel: _,
          startTime: A,
          expirationTime: B,
          sortIndex: -1,
        }),
        A > K
          ? ((_.sortIndex = A),
            t(a, _),
            n(u) === null &&
              _ === n(a) &&
              (g ? (h(T), (T = -1)) : (g = !0), Pe(w, A - K)))
          : ((_.sortIndex = B), t(u, _), v || y || ((v = !0), En(S))),
        _
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (_) {
      var L = m;
      return function () {
        var A = m;
        m = L;
        try {
          return _.apply(this, arguments);
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
 */ var Dh = x,
  Ie = Oh;
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
var sd = new Set(),
  jr = {};
function wn(e, t) {
  bn(e, t), bn(e + "Capture", t);
}
function bn(e, t) {
  for (jr[e] = t, e = 0; e < t.length; e++) sd.add(t[e]);
}
var xt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Wl = Object.prototype.hasOwnProperty,
  Ph =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ha = {},
  ma = {};
function Lh(e) {
  return Wl.call(ma, e)
    ? !0
    : Wl.call(ha, e)
    ? !1
    : Ph.test(e)
    ? (ma[e] = !0)
    : ((ha[e] = !0), !1);
}
function Ah(e, t, n, r) {
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
function zh(e, t, n, r) {
  if (t === null || typeof t > "u" || Ah(e, t, n, r)) return !0;
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
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new xe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  fe[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  fe[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qs = /[\-:]([a-z])/g;
function Js(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(qs, Js);
    fe[t] = new xe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(qs, Js);
    fe[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(qs, Js);
  fe[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new xe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gs(e, t, n, r) {
  var o = fe.hasOwnProperty(t) ? fe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (zh(t, n, o, r) && (n = null),
    r || o === null
      ? Lh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Nt = Dh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xo = Symbol.for("react.element"),
  _n = Symbol.for("react.portal"),
  On = Symbol.for("react.fragment"),
  Zs = Symbol.for("react.strict_mode"),
  Kl = Symbol.for("react.profiler"),
  ud = Symbol.for("react.provider"),
  ad = Symbol.for("react.context"),
  eu = Symbol.for("react.forward_ref"),
  Ql = Symbol.for("react.suspense"),
  bl = Symbol.for("react.suspense_list"),
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
function Mh(e) {
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
    case On:
      return "Fragment";
    case _n:
      return "Portal";
    case Kl:
      return "Profiler";
    case Zs:
      return "StrictMode";
    case Ql:
      return "Suspense";
    case bl:
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
function Fh(e) {
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
function bt(e) {
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
function jh(e) {
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
  e._valueTracker || (e._valueTracker = jh(e));
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
  (n = bt(t.value != null ? t.value : n)),
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
  var n = bt(t.value),
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
    : t.hasOwnProperty("defaultValue") && Jl(e, t.type, bt(t.defaultValue)),
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
    for (n = "" + bt(n), t = null, o = 0; o < e.length; o++) {
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
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
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
      if (t != null) throw Error(N(92));
      if (xr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: bt(n) };
}
function hd(e, t) {
  var n = bt(t.value),
    r = bt(t.defaultValue);
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
  Ih = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rr).forEach(function (e) {
  Ih.forEach(function (t) {
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
var Uh = Y(
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
    if (Uh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
    if (typeof rs != "function") throw Error(N(280));
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
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
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
function Bh(e, t, n, r, o, i, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var Nr = !1,
  ti = null,
  ni = !1,
  is = null,
  $h = {
    onError: function (e) {
      (Nr = !0), (ti = e);
    },
  };
function Hh(e, t, n, r, o, i, l, s, u) {
  (Nr = !1), (ti = null), Bh.apply($h, arguments);
}
function Vh(e, t, n, r, o, i, l, s, u) {
  if ((Hh.apply(this, arguments), Nr)) {
    if (Nr) {
      var a = ti;
      (Nr = !1), (ti = null);
    } else throw Error(N(198));
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
  if (Sn(e) !== e) throw Error(N(188));
}
function Wh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Sn(e)), t === null)) throw Error(N(188));
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
      throw Error(N(188));
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
        if (!l) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Rd(e) {
  return (e = Wh(e)), e !== null ? Nd(e) : null;
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
var Td = Ie.unstable_scheduleCallback,
  ka = Ie.unstable_cancelCallback,
  Kh = Ie.unstable_shouldYield,
  Qh = Ie.unstable_requestPaint,
  Z = Ie.unstable_now,
  bh = Ie.unstable_getCurrentPriorityLevel,
  ru = Ie.unstable_ImmediatePriority,
  _d = Ie.unstable_UserBlockingPriority,
  ri = Ie.unstable_NormalPriority,
  Xh = Ie.unstable_LowPriority,
  Od = Ie.unstable_IdlePriority,
  zi = null,
  ht = null;
function Yh(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function")
    try {
      ht.onCommitFiberRoot(zi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var it = Math.clz32 ? Math.clz32 : Gh,
  qh = Math.log,
  Jh = Math.LN2;
function Gh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((qh(e) / Jh) | 0)) | 0;
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
function Zh(e, t) {
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
function em(e, t) {
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
      ? (!(s & n) || s & r) && (o[l] = Zh(s, t))
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
function Dd() {
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
function tm(e, t) {
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
  nm =
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
function rm(e, t, n, r, o) {
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
function om() {
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
      Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, om)));
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
function im(e, t, n, r) {
  var o = U,
    i = Vn.transition;
  Vn.transition = null;
  try {
    (U = 1), lu(e, t, n, r);
  } finally {
    (U = o), (Vn.transition = i);
  }
}
function lm(e, t, n, r) {
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
    else if (rm(o, e, t, n, r)) r.stopPropagation();
    else if ((Ca(e, r), t & 4 && -1 < nm.indexOf(e))) {
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
      switch (bh()) {
        case ru:
          return 1;
        case _d:
          return 4;
        case ri:
        case Xh:
          return 16;
        case Od:
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
function Be(e) {
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
  uu = Be(tr),
  io = Y({}, tr, { view: 0, detail: 0 }),
  sm = Be(io),
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
  Ta = Be(Mi),
  um = Y({}, Mi, { dataTransfer: 0 }),
  am = Be(um),
  cm = Y({}, io, { relatedTarget: 0 }),
  gl = Be(cm),
  dm = Y({}, tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fm = Be(dm),
  pm = Y({}, tr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  hm = Be(pm),
  mm = Y({}, tr, { data: 0 }),
  _a = Be(mm),
  gm = {
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
  vm = {
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
  ym = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function wm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ym[e]) ? !!t[e] : !1;
}
function au() {
  return wm;
}
var Sm = Y({}, io, {
    key: function (e) {
      if (e.key) {
        var t = gm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Vo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? vm[e.keyCode] || "Unidentified"
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
  Em = Be(Sm),
  xm = Y({}, Mi, {
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
  Oa = Be(xm),
  km = Y({}, io, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: au,
  }),
  Cm = Be(km),
  Rm = Y({}, tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Nm = Be(Rm),
  Tm = Y({}, Mi, {
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
  _m = Be(Tm),
  Om = [9, 13, 27, 32],
  cu = xt && "CompositionEvent" in window,
  Tr = null;
xt && "documentMode" in document && (Tr = document.documentMode);
var Dm = xt && "TextEvent" in window && !Tr,
  Ud = xt && (!cu || (Tr && 8 < Tr && 11 >= Tr)),
  Da = " ",
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
var Dn = !1;
function Pm(e, t) {
  switch (e) {
    case "compositionend":
      return $d(t);
    case "keypress":
      return t.which !== 32 ? null : ((Pa = !0), Da);
    case "textInput":
      return (e = t.data), e === Da && Pa ? null : e;
    default:
      return null;
  }
}
function Lm(e, t) {
  if (Dn)
    return e === "compositionend" || (!cu && Bd(e, t))
      ? ((e = Id()), (Ho = su = jt = null), (Dn = !1), e)
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
var Am = {
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
  return t === "input" ? !!Am[e.type] : t === "textarea";
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
function zm(e) {
  Zd(e, 0);
}
function Fi(e) {
  var t = An(e);
  if (fd(t)) return e;
}
function Mm(e, t) {
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
    Hd(t, Vr, e, nu(e)), kd(zm, t);
  }
}
function Fm(e, t, n) {
  e === "focusin"
    ? (za(), (_r = t), (Vr = n), _r.attachEvent("onpropertychange", Wd))
    : e === "focusout" && za();
}
function jm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Fi(Vr);
}
function Im(e, t) {
  if (e === "click") return Fi(t);
}
function Um(e, t) {
  if (e === "input" || e === "change") return Fi(t);
}
function Bm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var st = typeof Object.is == "function" ? Object.is : Bm;
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
function Kd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Kd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Qd() {
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
function $m(e) {
  var t = Qd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Kd(n.ownerDocument.documentElement, n)
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
var Hm = xt && "documentMode" in document && 11 >= document.documentMode,
  Pn = null,
  as = null,
  Or = null,
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
    (Or && Wr(Or, r)) ||
      ((Or = r),
      (r = si(as, "onSelect")),
      0 < r.length &&
        ((t = new uu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Pn))));
}
function Oo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ln = {
    animationend: Oo("Animation", "AnimationEnd"),
    animationiteration: Oo("Animation", "AnimationIteration"),
    animationstart: Oo("Animation", "AnimationStart"),
    transitionend: Oo("Transition", "TransitionEnd"),
  },
  wl = {},
  bd = {};
xt &&
  ((bd = document.createElement("div").style),
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
  for (n in t) if (t.hasOwnProperty(n) && n in bd) return (wl[e] = t[n]);
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
    Vm = El.toLowerCase(),
    Wm = El[0].toUpperCase() + El.slice(1);
  Yt(Vm, "on" + Wm);
}
Yt(Xd, "onAnimationEnd");
Yt(Yd, "onAnimationIteration");
Yt(qd, "onAnimationStart");
Yt("dblclick", "onDoubleClick");
Yt("focusin", "onFocus");
Yt("focusout", "onBlur");
Yt(Jd, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
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
  (e.currentTarget = n), Vh(r, t, void 0, e), (e.currentTarget = null);
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
var Do = "_reactListening" + Math.random().toString(36).slice(2);
function Kr(e) {
  if (!e[Do]) {
    (e[Do] = !0),
      sd.forEach(function (n) {
        n !== "selectionchange" && (Km.has(n) || xl(n, !1, e), xl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Do] || ((t[Do] = !0), xl("selectionchange", !1, t));
  }
}
function ef(e, t, n, r) {
  switch (jd(t)) {
    case 1:
      var o = im;
      break;
    case 4:
      o = lm;
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
      d = nu(n),
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
            y = Em;
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
            y = am;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Cm;
            break;
          case Xd:
          case Yd:
          case qd:
            y = fm;
            break;
          case Jd:
            y = Nm;
            break;
          case "scroll":
            y = sm;
            break;
          case "wheel":
            y = _m;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = hm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Oa;
        }
        var g = (t & 4) !== 0,
          k = !g && e === "scroll",
          h = g ? (m !== null ? m + "Capture" : null) : m;
        g = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var w = p.stateNode;
          if (
            (p.tag === 5 &&
              w !== null &&
              ((p = w),
              h !== null && ((w = Ur(c, h)), w != null && g.push(Qr(c, w, p)))),
            k)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((m = new y(m, v, null, n, d)), f.push({ event: m, listeners: g }));
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
            d.window === d
              ? d
              : (m = d.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = a),
              (v = v ? on(v) : null),
              v !== null &&
                ((k = Sn(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = a)),
          y !== v)
        ) {
          if (
            ((g = Ta),
            (w = "onMouseLeave"),
            (h = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Oa),
              (w = "onPointerLeave"),
              (h = "onPointerEnter"),
              (c = "pointer")),
            (k = y == null ? m : An(y)),
            (p = v == null ? m : An(v)),
            (m = new g(w, c + "leave", y, n, d)),
            (m.target = k),
            (m.relatedTarget = p),
            (w = null),
            on(d) === a &&
              ((g = new g(h, c + "enter", v, n, d)),
              (g.target = p),
              (g.relatedTarget = k),
              (w = g)),
            (k = w),
            y && v)
          )
            t: {
              for (g = y, h = v, c = 0, p = g; p; p = Tn(p)) c++;
              for (p = 0, w = h; w; w = Tn(w)) p++;
              for (; 0 < c - p; ) (g = Tn(g)), c--;
              for (; 0 < p - c; ) (h = Tn(h)), p--;
              for (; c--; ) {
                if (g === h || (h !== null && g === h.alternate)) break t;
                (g = Tn(g)), (h = Tn(h));
              }
              g = null;
            }
          else g = null;
          y !== null && Ba(f, m, y, g, !1),
            v !== null && k !== null && Ba(f, k, v, g, !0);
        }
      }
      e: {
        if (
          ((m = a ? An(a) : window),
          (y = m.nodeName && m.nodeName.toLowerCase()),
          y === "select" || (y === "input" && m.type === "file"))
        )
          var S = Mm;
        else if (La(m))
          if (Vd) S = Um;
          else {
            S = jm;
            var R = Fm;
          }
        else
          (y = m.nodeName) &&
            y.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (S = Im);
        if (S && (S = S(e, a))) {
          Hd(f, S, n, d);
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
            ((Pn = R), (as = a), (Or = null));
          break;
        case "focusout":
          Or = as = Pn = null;
          break;
        case "mousedown":
          cs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (cs = !1), ja(f, n, d);
          break;
        case "selectionchange":
          if (Hm) break;
        case "keydown":
        case "keyup":
          ja(f, n, d);
      }
      var C;
      if (cu)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Dn
          ? Bd(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Ud &&
          n.locale !== "ko" &&
          (Dn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Dn && (C = Id())
            : ((jt = d),
              (su = "value" in jt ? jt.value : jt.textContent),
              (Dn = !0))),
        (R = si(a, T)),
        0 < R.length &&
          ((T = new _a(T, e, null, n, d)),
          f.push({ event: T, listeners: R }),
          C ? (T.data = C) : ((C = $d(n)), C !== null && (T.data = C)))),
        (C = Dm ? Pm(e, n) : Lm(e, n)) &&
          ((a = si(a, "onBeforeInput")),
          0 < a.length &&
            ((d = new _a("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: a }),
            (d.data = C)));
    }
    Zd(f, t);
  });
}
function Qr(e, t, n) {
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
      i != null && r.unshift(Qr(e, i, o)),
      (i = Ur(e, t)),
      i != null && r.push(Qr(e, i, o))),
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
        ? ((u = Ur(n, i)), u != null && l.unshift(Qr(n, u, s)))
        : o || ((u = Ur(n, i)), u != null && l.push(Qr(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Qm = /\r\n?/g,
  bm = /\u0000|\uFFFD/g;
function $a(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Qm,
      `
`,
    )
    .replace(bm, "");
}
function Po(e, t, n) {
  if (((t = $a(t)), $a(e) !== t && n)) throw Error(N(425));
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
  Xm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ha = typeof Promise == "function" ? Promise : void 0,
  Ym =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ha < "u"
      ? function (e) {
          return Ha.resolve(null).then(e).catch(qm);
        }
      : hs;
function qm(e) {
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
  br = "__reactProps$" + nr,
  kt = "__reactContainer$" + nr,
  ms = "__reactEvents$" + nr,
  Jm = "__reactListeners$" + nr,
  Gm = "__reactHandles$" + nr;
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
  throw Error(N(33));
}
function Ii(e) {
  return e[br] || null;
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
  ge = qt(Xt),
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
  W(Ne), W(ge);
}
function Wa(e, t, n) {
  if (ge.current !== Xt) throw Error(N(168));
  H(ge, t), H(Ne, n);
}
function tf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, Fh(e) || "Unknown", o));
  return Y({}, n, r);
}
function ci(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xt),
    (fn = ge.current),
    H(ge, e),
    H(Ne, Ne.current),
    !0
  );
}
function Ka(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = tf(e, t, fn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(Ne),
      W(ge),
      H(ge, e))
    : W(Ne),
    H(Ne, n);
}
var yt = null,
  Ui = !1,
  Rl = !1;
function nf(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
function Zm(e) {
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
  We = [],
  Ke = 0,
  pn = null,
  wt = 1,
  St = "";
function tn(e, t) {
  (Mn[Fn++] = fi), (Mn[Fn++] = di), (di = e), (fi = t);
}
function rf(e, t, n) {
  (We[Ke++] = wt), (We[Ke++] = St), (We[Ke++] = pn), (pn = e);
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
    (pn = We[--Ke]),
      (We[Ke] = null),
      (St = We[--Ke]),
      (We[Ke] = null),
      (wt = We[--Ke]),
      (We[Ke] = null);
}
var Fe = null,
  Me = null,
  Q = !1,
  ot = null;
function of(e, t) {
  var n = Qe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Fe = e), (Me = Ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Fe = e), (Me = null), !0) : !1
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
            (Fe = e),
            (Me = null),
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
  if (Q) {
    var t = Me;
    if (t) {
      var n = t;
      if (!Qa(e, t)) {
        if (vs(e)) throw Error(N(418));
        t = Ht(n.nextSibling);
        var r = Fe;
        t && Qa(e, t)
          ? of(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Fe = e));
      }
    } else {
      if (vs(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (Q = !1), (Fe = e);
    }
  }
}
function ba(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Fe = e;
}
function Lo(e) {
  if (e !== Fe) return !1;
  if (!Q) return ba(e), (Q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ps(e.type, e.memoizedProps))),
    t && (t = Me))
  ) {
    if (vs(e)) throw (lf(), Error(N(418)));
    for (; t; ) of(e, t), (t = Ht(t.nextSibling));
  }
  if ((ba(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = Ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = Fe ? Ht(e.stateNode.nextSibling) : null;
  return !0;
}
function lf() {
  for (var e = Me; e; ) e = Ht(e.nextSibling);
}
function Yn() {
  (Me = Fe = null), (Q = !1);
}
function hu(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
var eg = Nt.ReactCurrentBatchConfig;
function vr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
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
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Ao(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
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
  function t(h, c) {
    if (e) {
      var p = h.deletions;
      p === null ? ((h.deletions = [c]), (h.flags |= 16)) : p.push(c);
    }
  }
  function n(h, c) {
    if (!e) return null;
    for (; c !== null; ) t(h, c), (c = c.sibling);
    return null;
  }
  function r(h, c) {
    for (h = new Map(); c !== null; )
      c.key !== null ? h.set(c.key, c) : h.set(c.index, c), (c = c.sibling);
    return h;
  }
  function o(h, c) {
    return (h = Qt(h, c)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, c, p) {
    return (
      (h.index = p),
      e
        ? ((p = h.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((h.flags |= 2), c) : p)
            : ((h.flags |= 2), c))
        : ((h.flags |= 1048576), c)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, c, p, w) {
    return c === null || c.tag !== 6
      ? ((c = Ll(p, h.mode, w)), (c.return = h), c)
      : ((c = o(c, p)), (c.return = h), c);
  }
  function u(h, c, p, w) {
    var S = p.type;
    return S === On
      ? d(h, c, p.props.children, w, p.key)
      : c !== null &&
        (c.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Lt &&
            Xa(S) === c.type))
      ? ((w = o(c, p.props)), (w.ref = vr(h, c, p)), (w.return = h), w)
      : ((w = qo(p.type, p.key, p.props, null, h.mode, w)),
        (w.ref = vr(h, c, p)),
        (w.return = h),
        w);
  }
  function a(h, c, p, w) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Al(p, h.mode, w)), (c.return = h), c)
      : ((c = o(c, p.children || [])), (c.return = h), c);
  }
  function d(h, c, p, w, S) {
    return c === null || c.tag !== 7
      ? ((c = cn(p, h.mode, w, S)), (c.return = h), c)
      : ((c = o(c, p)), (c.return = h), c);
  }
  function f(h, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Ll("" + c, h.mode, p)), (c.return = h), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case xo:
          return (
            (p = qo(c.type, c.key, c.props, null, h.mode, p)),
            (p.ref = vr(h, null, c)),
            (p.return = h),
            p
          );
        case _n:
          return (c = Al(c, h.mode, p)), (c.return = h), c;
        case Lt:
          var w = c._init;
          return f(h, w(c._payload), p);
      }
      if (xr(c) || fr(c))
        return (c = cn(c, h.mode, p, null)), (c.return = h), c;
      Ao(h, c);
    }
    return null;
  }
  function m(h, c, p, w) {
    var S = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return S !== null ? null : s(h, c, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case xo:
          return p.key === S ? u(h, c, p, w) : null;
        case _n:
          return p.key === S ? a(h, c, p, w) : null;
        case Lt:
          return (S = p._init), m(h, c, S(p._payload), w);
      }
      if (xr(p) || fr(p)) return S !== null ? null : d(h, c, p, w, null);
      Ao(h, p);
    }
    return null;
  }
  function y(h, c, p, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (h = h.get(p) || null), s(c, h, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case xo:
          return (h = h.get(w.key === null ? p : w.key) || null), u(c, h, w, S);
        case _n:
          return (h = h.get(w.key === null ? p : w.key) || null), a(c, h, w, S);
        case Lt:
          var R = w._init;
          return y(h, c, p, R(w._payload), S);
      }
      if (xr(w) || fr(w)) return (h = h.get(p) || null), d(c, h, w, S, null);
      Ao(c, w);
    }
    return null;
  }
  function v(h, c, p, w) {
    for (
      var S = null, R = null, C = c, T = (c = 0), P = null;
      C !== null && T < p.length;
      T++
    ) {
      C.index > T ? ((P = C), (C = null)) : (P = C.sibling);
      var D = m(h, C, p[T], w);
      if (D === null) {
        C === null && (C = P);
        break;
      }
      e && C && D.alternate === null && t(h, C),
        (c = i(D, c, T)),
        R === null ? (S = D) : (R.sibling = D),
        (R = D),
        (C = P);
    }
    if (T === p.length) return n(h, C), Q && tn(h, T), S;
    if (C === null) {
      for (; T < p.length; T++)
        (C = f(h, p[T], w)),
          C !== null &&
            ((c = i(C, c, T)), R === null ? (S = C) : (R.sibling = C), (R = C));
      return Q && tn(h, T), S;
    }
    for (C = r(h, C); T < p.length; T++)
      (P = y(C, h, T, p[T], w)),
        P !== null &&
          (e && P.alternate !== null && C.delete(P.key === null ? T : P.key),
          (c = i(P, c, T)),
          R === null ? (S = P) : (R.sibling = P),
          (R = P));
    return (
      e &&
        C.forEach(function (F) {
          return t(h, F);
        }),
      Q && tn(h, T),
      S
    );
  }
  function g(h, c, p, w) {
    var S = fr(p);
    if (typeof S != "function") throw Error(N(150));
    if (((p = S.call(p)), p == null)) throw Error(N(151));
    for (
      var R = (S = null), C = c, T = (c = 0), P = null, D = p.next();
      C !== null && !D.done;
      T++, D = p.next()
    ) {
      C.index > T ? ((P = C), (C = null)) : (P = C.sibling);
      var F = m(h, C, D.value, w);
      if (F === null) {
        C === null && (C = P);
        break;
      }
      e && C && F.alternate === null && t(h, C),
        (c = i(F, c, T)),
        R === null ? (S = F) : (R.sibling = F),
        (R = F),
        (C = P);
    }
    if (D.done) return n(h, C), Q && tn(h, T), S;
    if (C === null) {
      for (; !D.done; T++, D = p.next())
        (D = f(h, D.value, w)),
          D !== null &&
            ((c = i(D, c, T)), R === null ? (S = D) : (R.sibling = D), (R = D));
      return Q && tn(h, T), S;
    }
    for (C = r(h, C); !D.done; T++, D = p.next())
      (D = y(C, h, T, D.value, w)),
        D !== null &&
          (e && D.alternate !== null && C.delete(D.key === null ? T : D.key),
          (c = i(D, c, T)),
          R === null ? (S = D) : (R.sibling = D),
          (R = D));
    return (
      e &&
        C.forEach(function (ve) {
          return t(h, ve);
        }),
      Q && tn(h, T),
      S
    );
  }
  function k(h, c, p, w) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === On &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case xo:
          e: {
            for (var S = p.key, R = c; R !== null; ) {
              if (R.key === S) {
                if (((S = p.type), S === On)) {
                  if (R.tag === 7) {
                    n(h, R.sibling),
                      (c = o(R, p.props.children)),
                      (c.return = h),
                      (h = c);
                    break e;
                  }
                } else if (
                  R.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Lt &&
                    Xa(S) === R.type)
                ) {
                  n(h, R.sibling),
                    (c = o(R, p.props)),
                    (c.ref = vr(h, R, p)),
                    (c.return = h),
                    (h = c);
                  break e;
                }
                n(h, R);
                break;
              } else t(h, R);
              R = R.sibling;
            }
            p.type === On
              ? ((c = cn(p.props.children, h.mode, w, p.key)),
                (c.return = h),
                (h = c))
              : ((w = qo(p.type, p.key, p.props, null, h.mode, w)),
                (w.ref = vr(h, c, p)),
                (w.return = h),
                (h = w));
          }
          return l(h);
        case _n:
          e: {
            for (R = p.key; c !== null; ) {
              if (c.key === R)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(h, c.sibling),
                    (c = o(c, p.children || [])),
                    (c.return = h),
                    (h = c);
                  break e;
                } else {
                  n(h, c);
                  break;
                }
              else t(h, c);
              c = c.sibling;
            }
            (c = Al(p, h.mode, w)), (c.return = h), (h = c);
          }
          return l(h);
        case Lt:
          return (R = p._init), k(h, c, R(p._payload), w);
      }
      if (xr(p)) return v(h, c, p, w);
      if (fr(p)) return g(h, c, p, w);
      Ao(h, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(h, c.sibling), (c = o(c, p)), (c.return = h), (h = c))
          : (n(h, c), (c = Ll(p, h.mode, w)), (c.return = h), (h = c)),
        l(h))
      : n(h, c);
  }
  return k;
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
function Xe(e) {
  var t = e._currentValue;
  if (mu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), jn === null)) {
      if (hi === null) throw Error(N(308));
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
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== l &&
        (s === null ? (d.firstBaseUpdate = a) : (s.next = a),
        (d.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var f = o.baseState;
    (l = 0), (d = a = u = null), (s = i);
    do {
      var m = s.lane,
        y = s.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
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
          d === null ? ((a = d = y), (u = f)) : (d = d.next = y),
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
      (d === null && (u = f),
      (o.baseState = u),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = d),
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
          throw Error(N(191, o));
        o.call(r);
      }
    }
}
var so = {},
  mt = qt(so),
  Xr = qt(so),
  Yr = qt(so);
function sn(e) {
  if (e === so) throw Error(N(174));
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
var b = qt(0);
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
var Ko = Nt.ReactCurrentDispatcher,
  Tl = Nt.ReactCurrentBatchConfig,
  hn = 0,
  X = null,
  ne = null,
  ie = null,
  vi = !1,
  Dr = !1,
  qr = 0,
  tg = 0;
function pe() {
  throw Error(N(321));
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
    (Ko.current = e === null || e.memoizedState === null ? ig : lg),
    (e = n(r, o)),
    Dr)
  ) {
    i = 0;
    do {
      if (((Dr = !1), (qr = 0), 25 <= i)) throw Error(N(301));
      (i += 1),
        (ie = ne = null),
        (t.updateQueue = null),
        (Ko.current = sg),
        (e = n(r, o));
    } while (Dr);
  }
  if (
    ((Ko.current = yi),
    (t = ne !== null && ne.next !== null),
    (hn = 0),
    (ie = ne = X = null),
    (vi = !1),
    t)
  )
    throw Error(N(300));
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
  return ie === null ? (X.memoizedState = ie = e) : (ie = ie.next = e), ie;
}
function Ye() {
  if (ne === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = ie === null ? X.memoizedState : ie.next;
  if (t !== null) (ie = t), (ne = e);
  else {
    if (e === null) throw Error(N(310));
    (ne = e),
      (e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null,
      }),
      ie === null ? (X.memoizedState = ie = e) : (ie = ie.next = e);
  }
  return ie;
}
function Jr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _l(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = ne,
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
      var d = a.lane;
      if ((hn & d) === d)
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
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = f), (l = r)) : (u = u.next = f),
          (X.lanes |= d),
          (mn |= d);
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
function Ol(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(N(311));
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
    r = Ye(),
    o = t(),
    i = !st(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Re = !0)),
    (r = r.queue),
    Nu(gf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gr(9, mf.bind(null, n, r, o, t), void 0, null),
      se === null)
    )
      throw Error(N(349));
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
    (e = e.dispatch = og.bind(null, X, e)),
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
  return Ye().memoizedState;
}
function Qo(e, t, n, r) {
  var o = ft();
  (X.flags |= e),
    (o.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Bi(e, t, n, r) {
  var o = Ye();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ne !== null) {
    var l = ne.memoizedState;
    if (((i = l.destroy), r !== null && ku(r, l.deps))) {
      o.memoizedState = Gr(t, n, i, r);
      return;
    }
  }
  (X.flags |= e), (o.memoizedState = Gr(1 | t, n, i, r));
}
function Ga(e, t) {
  return Qo(8390656, 8, e, t);
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
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ku(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Rf(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ku(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Nf(e, t, n) {
  return hn & 21
    ? (st(n, t) || ((n = Dd()), (X.lanes |= n), (mn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Re = !0)), (e.memoizedState = n));
}
function ng(e, t) {
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
  return Ye().memoizedState;
}
function rg(e, t, n) {
  var r = Kt(e);
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
    Of(t, n);
  else if (((n = af(e, t, n, r)), n !== null)) {
    var o = Se();
    lt(n, e, r, o), Df(n, t, r);
  }
}
function og(e, t, n) {
  var r = Kt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_f(e)) Of(t, o);
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
      n !== null && ((o = Se()), lt(n, e, r, o), Df(n, t, r));
  }
}
function _f(e) {
  var t = e.alternate;
  return e === X || (t !== null && t === X);
}
function Of(e, t) {
  Dr = vi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Df(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ou(e, n);
  }
}
var yi = {
    readContext: Xe,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
  },
  ig = {
    readContext: Xe,
    useCallback: function (e, t) {
      return (ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Xe,
    useEffect: Ga,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Qo(4194308, 4, xf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Qo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Qo(4, 2, e, t);
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
        (e = e.dispatch = rg.bind(null, X, e)),
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
      return (e = ng.bind(null, e[1])), (ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        o = ft();
      if (Q) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), se === null)) throw Error(N(349));
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
        t = se.identifierPrefix;
      if (Q) {
        var n = St,
          r = wt;
        (n = (r & ~(1 << (32 - it(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = qr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = tg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  lg = {
    readContext: Xe,
    useCallback: Cf,
    useContext: Xe,
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
      var t = Ye();
      return Nf(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = _l(Jr)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: ff,
    useSyncExternalStore: pf,
    useId: Tf,
    unstable_isNewReconciler: !1,
  },
  sg = {
    readContext: Xe,
    useCallback: Cf,
    useContext: Xe,
    useEffect: Nu,
    useImperativeHandle: kf,
    useInsertionEffect: Sf,
    useLayoutEffect: Ef,
    useMemo: Rf,
    useReducer: Ol,
    useRef: wf,
    useState: function () {
      return Ol(Jr);
    },
    useDebugValue: Tu,
    useDeferredValue: function (e) {
      var t = Ye();
      return ne === null ? (t.memoizedState = e) : Nf(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = Ol(Jr)[0],
        t = Ye().memoizedState;
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
      o = Kt(e),
      i = Et(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Vt(e, i, o)),
      t !== null && (lt(t, e, o, r), Wo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      o = Kt(e),
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
      r = Kt(e),
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
      ? (i = Xe(i))
      : ((o = Te(t) ? fn : ge.current),
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
    ? (o.context = Xe(i))
    : ((i = Te(t) ? fn : ge.current), (o.context = Xn(e, i))),
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
    do (n += Mh(r)), (r = r.return);
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
function Dl(e, t, n) {
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
var ug = typeof WeakMap == "function" ? WeakMap : Map;
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
    r = e.pingCache = new ug();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = xg.bind(null, e, t, n)), t.then(e, e));
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
var ag = Nt.ReactCurrentOwner,
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
      : (Q && n && fu(t), (t.flags |= 1), we(e, t, r, o), t.child)
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
    (e = Qt(i, r)),
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
        H(Un, ze),
        (ze |= n);
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
          H(Un, ze),
          (ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        H(Un, ze),
        (ze |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      H(Un, ze),
      (ze |= r);
  return we(e, t, o, n), t.child;
}
function Ff(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ks(e, t, n, r, o) {
  var i = Te(n) ? fn : ge.current;
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
      : (Q && r && fu(t), (t.flags |= 1), we(e, t, n, o), t.child)
  );
}
function lc(e, t, n, r, o) {
  if (Te(n)) {
    var i = !0;
    ci(t);
  } else i = !1;
  if ((Wn(t, o), t.stateNode === null))
    bo(e, t), Pf(t, n, r), Es(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Xe(a))
      : ((a = Te(n) ? fn : ge.current), (a = Xn(t, a)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
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
        ? (typeof d == "function" && (Ss(t, n, d, r), (u = t.memoizedState)),
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
        ? (u = Xe(u))
        : ((u = Te(n) ? fn : ge.current), (u = Xn(t, u)));
    var y = n.getDerivedStateFromProps;
    (d =
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
          ? (d ||
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
  if (!r && !l) return o && Ka(t, n, !1), Rt(e, t, i);
  (r = t.stateNode), (ag.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = qn(t, e.child, null, i)), (t.child = qn(t, null, s, i)))
      : we(e, t, s, i),
    (t.memoizedState = r.state),
    o && Ka(t, n, !0),
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
    o = b.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    H(b, o & 1),
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
    return cg(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Qt(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Qt(s, i)) : ((i = cn(i, l, n, null)), (i.flags |= 2)),
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
    (r = Qt(i, { mode: "visible", children: r.children })),
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
function cg(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Dl(Error(N(422)))), zo(e, t, l, r))
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
    return (r = s), (i = Error(N(419))), (r = Dl(i, r, void 0)), zo(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Re || s)) {
    if (((r = se), r !== null)) {
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
    return zu(), (r = Dl(Error(N(421)))), zo(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = kg.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Me = Ht(o.nextSibling)),
      (Fe = t),
      (Q = !0),
      (ot = null),
      e !== null &&
        ((We[Ke++] = wt),
        (We[Ke++] = St),
        (We[Ke++] = pn),
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
  if ((we(e, t, r.children, n), (r = b.current), r & 2))
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
  if ((H(b, r), !(t.mode & 1))) t.memoizedState = null;
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
function bo(e, t) {
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
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Qt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function dg(e, t, n) {
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
          ? (H(b, b.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? If(e, t, n)
          : (H(b, b.current & 1),
            (e = Rt(e, t, n)),
            e !== null ? e.sibling : null);
      H(b, b.current & 1);
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
        H(b, b.current),
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
  if (!Q)
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
function he(e) {
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
function fg(e, t, n) {
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
      return he(t), null;
    case 1:
      return Te(t.type) && ai(), he(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Jn(),
        W(Ne),
        W(ge),
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
        he(t),
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
          if (t.stateNode === null) throw Error(N(166));
          return he(t), null;
        }
        if (((e = sn(mt.current)), Lo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[pt] = t), (r[br] = i), (e = (t.mode & 1) !== 0), n)) {
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
            (e[br] = r),
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
                r.value != null && e.setAttribute("value", "" + bt(r.value));
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
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) Hf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = sn(Yr.current)), sn(mt.current), Lo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pt] = t),
            (i = r.nodeValue !== n) && ((e = Fe), e !== null))
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
      return he(t), null;
    case 13:
      if (
        (W(b),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && Me !== null && t.mode & 1 && !(t.flags & 128))
          lf(), Yn(), (t.flags |= 98560), (i = !1);
        else if (((i = Lo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[pt] = t;
          } else
            Yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          he(t), (i = !1);
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
              (e === null || b.current & 1 ? oe === 0 && (oe = 3) : zu())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        Jn(), Ts(e, t), e === null && Kr(t.stateNode.containerInfo), he(t), null
      );
    case 10:
      return vu(t.type._context), he(t), null;
    case 17:
      return Te(t.type) && ai(), he(t), null;
    case 19:
      if ((W(b), (i = t.memoizedState), i === null)) return he(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) yr(i, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
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
                return H(b, (b.current & 1) | 2), t.child;
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
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !Q)
            )
              return he(t), null;
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
          (n = b.current),
          H(b, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        Au(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ze & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function pg(e, t) {
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
        W(ge),
        xu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Eu(t), null;
    case 13:
      if ((W(b), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        Yn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(b), null;
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
  me = !1,
  hg = typeof WeakSet == "function" ? WeakSet : Set,
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
function mg(e, t) {
  if (((ds = ii), (e = Qd()), du(e))) {
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
            d = 0,
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
                m === i && ++d === r && (u = l),
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
                    k = v.memoizedState,
                    h = t.stateNode,
                    c = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : nt(t.type, g),
                      k,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (w) {
          q(t, t.return, w);
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
function Os(e) {
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
        (delete t[pt], delete t[br], delete t[ms], delete t[Jm], delete t[Gm])),
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
function Ds(e, t, n) {
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
    for (Ds(e, t, n), e = e.sibling; e !== null; ) Ds(e, t, n), (e = e.sibling);
}
function Ps(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ps(e, t, n), e = e.sibling; e !== null; ) Ps(e, t, n), (e = e.sibling);
}
var ce = null,
  rt = !1;
function Dt(e, t, n) {
  for (n = n.child; n !== null; ) Kf(e, t, n), (n = n.sibling);
}
function Kf(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function")
    try {
      ht.onCommitFiberUnmount(zi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || In(n, t);
    case 6:
      var r = ce,
        o = rt;
      (ce = null),
        Dt(e, t, n),
        (ce = r),
        (rt = o),
        ce !== null &&
          (rt
            ? ((e = ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null &&
        (rt
          ? ((e = ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? Cl(e.parentNode, n)
              : e.nodeType === 1 && Cl(e, n),
            Hr(e))
          : Cl(ce, n.stateNode));
      break;
    case 4:
      (r = ce),
        (o = rt),
        (ce = n.stateNode.containerInfo),
        (rt = !0),
        Dt(e, t, n),
        (ce = r),
        (rt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
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
      Dt(e, t, n);
      break;
    case 1:
      if (
        !me &&
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
      Dt(e, t, n);
      break;
    case 21:
      Dt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), Dt(e, t, n), (me = r))
        : Dt(e, t, n);
      break;
    default:
      Dt(e, t, n);
  }
}
function dc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new hg()),
      t.forEach(function (r) {
        var o = Cg.bind(null, e, r);
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
              (ce = s.stateNode), (rt = !1);
              break e;
            case 3:
              (ce = s.stateNode.containerInfo), (rt = !0);
              break e;
            case 4:
              (ce = s.stateNode.containerInfo), (rt = !0);
              break e;
          }
          s = s.return;
        }
        if (ce === null) throw Error(N(160));
        Kf(i, l, o), (ce = null), (rt = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (a) {
        q(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Qf(t, e), (t = t.sibling);
}
function Qf(e, t) {
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
              var d = u[l],
                f = u[l + 1];
              d === "style"
                ? yd(o, f)
                : d === "dangerouslySetInnerHTML"
                ? gd(o, f)
                : d === "children"
                ? Ir(o, f)
                : Gs(o, d, f, a);
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
            o[br] = i;
          } catch (g) {
            q(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((tt(t, e), dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
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
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (a = me) || d), tt(t, e), (me = a)) : tt(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !d && e.mode & 1)
        )
          for (O = e, d = e.child; d !== null; ) {
            for (f = O = d; O !== null; ) {
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
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
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
            if (d === null)
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
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
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
        throw Error(N(160));
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
          Ds(e, s, l);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      q(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function gg(e, t, n) {
  (O = e), bf(e);
}
function bf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var o = O,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Mo;
      if (!l) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || me;
        s = Mo;
        var a = me;
        if (((Mo = l), (me = u) && !a))
          for (O = o; O !== null; )
            (l = O),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? hc(o)
                : u !== null
                ? ((u.return = l), (O = u))
                : hc(o);
        for (; i !== null; ) (O = i), bf(i), (i = i.sibling);
        (O = o), (Mo = s), (me = a);
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
              me || Hi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
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
                  var d = a.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
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
              throw Error(N(163));
          }
        me || (t.flags & 512 && Os(t));
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
            Os(t);
          } catch (u) {
            q(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Os(t);
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
var vg = Math.ceil,
  wi = Nt.ReactCurrentDispatcher,
  Ou = Nt.ReactCurrentOwner,
  be = Nt.ReactCurrentBatchConfig,
  I = 0,
  se = null,
  ee = null,
  de = 0,
  ze = 0,
  Un = qt(0),
  oe = 0,
  Zr = null,
  mn = 0,
  Vi = 0,
  Du = 0,
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
function Kt(e) {
  return e.mode & 1
    ? I & 2 && de !== 0
      ? de & -de
      : eg.transition !== null
      ? (Yo === 0 && (Yo = Dd()), Yo)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jd(e.type))),
        e)
    : 1;
}
function lt(e, t, n, r) {
  if (50 < Ar) throw ((Ar = 0), (As = null), Error(N(185)));
  oo(e, n, r),
    (!(I & 2) || e !== se) &&
      (e === se && (!(I & 2) && (Vi |= n), oe === 4 && Ft(e, de)),
      _e(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((Zn = Z() + 500), Ui && Jt()));
}
function _e(e, t) {
  var n = e.callbackNode;
  em(e, t);
  var r = oi(e, e === se ? de : 0);
  if (r === 0)
    n !== null && ka(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ka(n), t === 1))
      e.tag === 0 ? Zm(mc.bind(null, e)) : nf(mc.bind(null, e)),
        Ym(function () {
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
          n = Od;
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
  if (((Xo = -1), (Yo = 0), I & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Kn() && e.callbackNode !== n) return null;
  var r = oi(e, e === se ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xi(e, r);
  else {
    t = r;
    var o = I;
    I |= 2;
    var i = qf();
    (se !== e || de !== t) && ((vt = null), (Zn = Z() + 500), an(e, t));
    do
      try {
        Sg();
        break;
      } catch (s) {
        Yf(e, s);
      }
    while (!0);
    gu(),
      (wi.current = i),
      (I = o),
      ee !== null ? (t = 0) : ((se = null), (de = 0), (t = oe));
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
          !yg(o) &&
          ((t = xi(e, r)),
          t === 2 && ((i = ls(e)), i !== 0 && ((r = i), (t = zs(e, i)))),
          t === 1))
      )
        throw ((n = Zr), an(e, 0), Ft(e, r), _e(e, Z()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
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
                : 1960 * vg(r / 1960)) - r),
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
          throw Error(N(329));
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
function yg(e) {
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
    t &= ~Du,
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
  if (I & 6) throw Error(N(327));
  Kn();
  var t = oi(e, 0);
  if (!(t & 1)) return _e(e, Z()), null;
  var n = xi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ls(e);
    r !== 0 && ((t = r), (n = zs(e, r)));
  }
  if (n === 1) throw ((n = Zr), an(e, 0), Ft(e, t), _e(e, Z()), n);
  if (n === 6) throw Error(N(345));
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
  It !== null && It.tag === 0 && !(I & 6) && Kn();
  var t = I;
  I |= 1;
  var n = be.transition,
    r = U;
  try {
    if (((be.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (be.transition = n), (I = t), !(I & 6) && Jt();
  }
}
function Au() {
  (ze = Un.current), W(Un);
}
function an(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Xm(n)), ee !== null))
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch ((pu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ai();
          break;
        case 3:
          Jn(), W(Ne), W(ge), xu();
          break;
        case 5:
          Eu(r);
          break;
        case 4:
          Jn();
          break;
        case 13:
          W(b);
          break;
        case 19:
          W(b);
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
    ((se = e),
    (ee = e = Qt(e.current, null)),
    (de = ze = t),
    (oe = 0),
    (Zr = null),
    (Du = Vi = mn = 0),
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
    var n = ee;
    try {
      if ((gu(), (Ko.current = yi), vi)) {
        for (var r = X.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        vi = !1;
      }
      if (
        ((hn = 0),
        (ie = ne = X = null),
        (Dr = !1),
        (qr = 0),
        (Ou.current = null),
        n === null || n.return === null)
      ) {
        (oe = 1), (Zr = t), (ee = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          u = t;
        if (
          ((t = de),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            d = s,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
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
            u = Error(N(426));
          }
        } else if (Q && s.mode & 1) {
          var k = nc(l);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              rc(k, l, s, i, t),
              hu(Gn(u, s));
            break e;
          }
        }
        (i = u = Gn(u, s)),
          oe !== 4 && (oe = 2),
          Lr === null ? (Lr = [i]) : Lr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = Lf(i, u, t);
              Ya(i, h);
              break e;
            case 1:
              s = u;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Wt === null || !Wt.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = Af(i, s, t);
                Ya(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Gf(n);
    } catch (S) {
      (t = S), ee === n && n !== null && (ee = n = n.return);
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
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    se === null || (!(mn & 268435455) && !(Vi & 268435455)) || Ft(se, de);
}
function xi(e, t) {
  var n = I;
  I |= 2;
  var r = qf();
  (se !== e || de !== t) && ((vt = null), an(e, t));
  do
    try {
      wg();
      break;
    } catch (o) {
      Yf(e, o);
    }
  while (!0);
  if ((gu(), (I = n), (wi.current = r), ee !== null)) throw Error(N(261));
  return (se = null), (de = 0), oe;
}
function wg() {
  for (; ee !== null; ) Jf(ee);
}
function Sg() {
  for (; ee !== null && !Kh(); ) Jf(ee);
}
function Jf(e) {
  var t = ep(e.alternate, e, ze);
  (e.memoizedProps = e.pendingProps),
    t === null ? Gf(e) : (ee = t),
    (Ou.current = null);
}
function Gf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = pg(n, t)), n !== null)) {
        (n.flags &= 32767), (ee = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (oe = 6), (ee = null);
        return;
      }
    } else if (((n = fg(n, t, ze)), n !== null)) {
      ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function nn(e, t, n) {
  var r = U,
    o = be.transition;
  try {
    (be.transition = null), (U = 1), Eg(e, t, n, r);
  } finally {
    (be.transition = o), (U = r);
  }
  return null;
}
function Eg(e, t, n, r) {
  do Kn();
  while (It !== null);
  if (I & 6) throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (tm(e, i),
    e === se && ((ee = se = null), (de = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Fo ||
      ((Fo = !0),
      tp(ri, function () {
        return Kn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = be.transition), (be.transition = null);
    var l = U;
    U = 1;
    var s = I;
    (I |= 4),
      (Ou.current = null),
      mg(e, n),
      Qf(n, e),
      $m(fs),
      (ii = !!ds),
      (fs = ds = null),
      (e.current = n),
      gg(n),
      Qh(),
      (I = s),
      (U = l),
      (be.transition = i);
  } else e.current = n;
  if (
    (Fo && ((Fo = !1), (It = e), (Ei = o)),
    (i = e.pendingLanes),
    i === 0 && (Wt = null),
    Yh(n.stateNode),
    _e(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Si) throw ((Si = !1), (e = Ls), (Ls = null), e);
  return (
    Ei & 1 && e.tag !== 0 && Kn(),
    (i = e.pendingLanes),
    i & 1 ? (e === As ? Ar++ : ((Ar = 0), (As = e))) : (Ar = 0),
    Jt(),
    null
  );
}
function Kn() {
  if (It !== null) {
    var e = Pd(Ei),
      t = be.transition,
      n = U;
    try {
      if (((be.transition = null), (U = 16 > e ? 16 : e), It === null))
        var r = !1;
      else {
        if (((e = It), (It = null), (Ei = 0), I & 6)) throw Error(N(331));
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
                  var d = O;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pr(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (O = f);
                  else
                    for (; O !== null; ) {
                      d = O;
                      var m = d.sibling,
                        y = d.return;
                      if ((Vf(d), d === a)) {
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
                    var k = g.sibling;
                    (g.sibling = null), (g = k);
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
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (O = h);
                break e;
              }
              O = i.return;
            }
        }
        var c = e.current;
        for (O = c; O !== null; ) {
          l = O;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null) (p.return = l), (O = p);
          else
            e: for (l = c; O !== null; ) {
              if (((s = O), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hi(9, s);
                  }
                } catch (S) {
                  q(s, s.return, S);
                }
              if (s === l) {
                O = null;
                break e;
              }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (O = w);
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
      (U = n), (be.transition = t);
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
function xg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    se === e &&
      (de & n) === n &&
      (oe === 4 || (oe === 3 && (de & 130023424) === de && 500 > Z() - Pu)
        ? an(e, 0)
        : (Du |= n)),
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
function kg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Zf(e, n);
}
function Cg(e, t) {
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
      throw Error(N(314));
  }
  r !== null && r.delete(t), Zf(e, n);
}
var ep;
ep = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ne.current) Re = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Re = !1), dg(e, t, n);
      Re = !!(e.flags & 131072);
    }
  else (Re = !1), Q && t.flags & 1048576 && rf(t, fi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      bo(e, t), (e = t.pendingProps);
      var o = Xn(t, ge.current);
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
          : ((t.tag = 0), Q && i && fu(t), we(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (bo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Ng(r)),
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
        throw Error(N(306, r, ""));
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
        if ((jf(t), e === null)) throw Error(N(387));
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
            (o = Gn(Error(N(423)), t)), (t = sc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Gn(Error(N(424)), t)), (t = sc(e, t, r, n, o));
            break e;
          } else
            for (
              Me = Ht(t.stateNode.containerInfo.firstChild),
                Fe = t,
                Q = !0,
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
                        var d = a.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
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
                if (((l = i.return), l === null)) throw Error(N(341));
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
        (o = Xe(o)),
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
        bo(e, t),
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
  throw Error(N(156, t.tag));
};
function tp(e, t) {
  return Td(e, t);
}
function Rg(e, t, n, r) {
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
  return new Rg(e, t, n, r);
}
function Mu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ng(e) {
  if (typeof e == "function") return Mu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === eu)) return 11;
    if (e === tu) return 14;
  }
  return 2;
}
function Qt(e, t) {
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
      case On:
        return cn(n.children, o, i, t);
      case Zs:
        (l = 8), (o |= 8);
        break;
      case Kl:
        return (
          (e = Qe(12, n, t, o | 2)), (e.elementType = Kl), (e.lanes = i), e
        );
      case Ql:
        return (e = Qe(13, n, t, o)), (e.elementType = Ql), (e.lanes = i), e;
      case bl:
        return (e = Qe(19, n, t, o)), (e.elementType = bl), (e.lanes = i), e;
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
        throw Error(N(130, e == null ? e : typeof e, ""));
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
function Tg(e, t, n, r, o) {
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
    (e = new Tg(e, t, n, s, u)),
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
function _g(e, t, n) {
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
    if (Sn(e) !== e || e.tag !== 1) throw Error(N(170));
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
    throw Error(N(171));
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
    (o = Kt(n)),
    (i = Et(r, o)),
    (i.callback = t ?? null),
    Vt(n, i, o),
    (e.current.lanes = o),
    oo(e, o, r),
    _e(e, r),
    e
  );
}
function Ki(e, t, n, r) {
  var o = t.current,
    i = Se(),
    l = Kt(o);
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
Qi.prototype.render = Iu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Ki(e, t, null, null);
};
Qi.prototype.unmount = Iu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gn(function () {
      Ki(null, e, null, null);
    }),
      (t[kt] = null);
  }
};
function Qi(e) {
  this._internalRoot = e;
}
Qi.prototype.unstable_scheduleHydration = function (e) {
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
function bi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function yc() {}
function Dg(e, t, n, r, o) {
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
      Kr(e.nodeType === 8 ? e.parentNode : e),
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
    Kr(e.nodeType === 8 ? e.parentNode : e),
    gn(function () {
      Ki(t, u, n, r);
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
    Ki(t, l, e, o);
  } else l = Dg(n, t, e, o, r);
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
    var t = Kt(e),
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
            if (!o) throw Error(N(90));
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
var Pg = { usingClientEntryPoint: !1, Events: [lo, An, Ii, wd, Sd, Lu] },
  wr = {
    findFiberByHostInstance: on,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Lg = {
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
      (zi = jo.inject(Lg)), (ht = jo);
    } catch {}
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pg;
Ue.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Uu(t)) throw Error(N(200));
  return _g(e, t, null, n);
};
Ue.createRoot = function (e, t) {
  if (!Uu(e)) throw Error(N(299));
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
    Kr(e.nodeType === 8 ? e.parentNode : e),
    new Iu(t)
  );
};
Ue.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = Rd(t)), (e = e === null ? null : e.stateNode), e;
};
Ue.flushSync = function (e) {
  return gn(e);
};
Ue.hydrate = function (e, t, n) {
  if (!bi(t)) throw Error(N(200));
  return Xi(null, e, t, !0, n);
};
Ue.hydrateRoot = function (e, t, n) {
  if (!Uu(e)) throw Error(N(405));
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
    Kr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Qi(t);
};
Ue.render = function (e, t, n) {
  if (!bi(t)) throw Error(N(200));
  return Xi(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function (e) {
  if (!bi(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (gn(function () {
        Xi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[kt] = null);
        });
      }),
      !0)
    : !1;
};
Ue.unstable_batchedUpdates = Lu;
Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!bi(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Xi(e, t, n, !1, r);
};
Ue.version = "18.3.1-next-f1338f8080-20240426";
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
ip(), (od.exports = Ue);
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
const gt = Yi ? x.useLayoutEffect : x.useEffect;
function qi(e) {
  const t = x.useRef(e);
  return (
    gt(() => {
      t.current = e;
    }),
    x.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return t.current == null ? void 0 : t.current(...r);
    }, [])
  );
}
function Ag() {
  const e = x.useRef(null),
    t = x.useCallback((r, o) => {
      e.current = setInterval(r, o);
    }, []),
    n = x.useCallback(() => {
      e.current !== null && (clearInterval(e.current), (e.current = null));
    }, []);
  return [t, n];
}
function eo(e, t) {
  t === void 0 && (t = [e]);
  const n = x.useRef(e);
  return (
    gt(() => {
      n.current !== e && (n.current = e);
    }, t),
    n
  );
}
function ao(e, t) {
  const n = x.useRef();
  return x.useMemo(() => {
    const r = e(n.current);
    return (n.current = r), r;
  }, [...t]);
}
function Ci(e) {
  const t = qi(e),
    n = x.useRef(null),
    r = x.useCallback((o) => {
      o !== n.current && (t == null || t(o, n.current)), (n.current = o);
    }, []);
  return [n, r];
}
function Ri(e) {
  const t = x.useRef();
  return (
    x.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
let zl = {};
function Ji(e, t) {
  return x.useMemo(() => {
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
          const d = i[u];
          d != null && (i[u] = d + e * a);
        }
        return i;
      },
      { ...t },
    );
  };
}
const Qn = up(1),
  Ni = up(-1);
function zg(e) {
  return "clientX" in e && "clientY" in e;
}
function Hu(e) {
  if (!e) return !1;
  const { KeyboardEvent: t } = ke(e.target);
  return t && e instanceof t;
}
function Mg(e) {
  if (!e) return !1;
  const { TouchEvent: t } = ke(e.target);
  return t && e instanceof t;
}
function Ti(e) {
  if (Mg(e)) {
    if (e.touches && e.touches.length) {
      const { clientX: t, clientY: n } = e.touches[0];
      return { x: t, y: n };
    } else if (e.changedTouches && e.changedTouches.length) {
      const { clientX: t, clientY: n } = e.changedTouches[0];
      return { x: t, y: n };
    }
  }
  return zg(e) ? { x: e.clientX, y: e.clientY } : null;
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
function Fg(e) {
  return e.matches(Sc) ? e : e.querySelector(Sc);
}
const jg = { display: "none" };
function Ig(e) {
  let { id: t, value: n } = e;
  return G.createElement("div", { id: t, style: jg }, n);
}
function Ug(e) {
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
function Bg() {
  const [e, t] = x.useState("");
  return {
    announce: x.useCallback((r) => {
      r != null && t(r);
    }, []),
    announcement: e,
  };
}
const ap = x.createContext(null);
function $g(e) {
  const t = x.useContext(ap);
  x.useEffect(() => {
    if (!t)
      throw new Error(
        "useDndMonitor must be used within a children of <DndContext>",
      );
    return t(e);
  }, [e, t]);
}
function Hg() {
  const [e] = x.useState(() => new Set()),
    t = x.useCallback((r) => (e.add(r), () => e.delete(r)), [e]);
  return [
    x.useCallback(
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
const Vg = {
    draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `,
  },
  Wg = {
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
    announcements: t = Wg,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = Vg,
  } = e;
  const { announce: i, announcement: l } = Bg(),
    s = Ji("DndLiveRegion"),
    [u, a] = x.useState(!1);
  if (
    (x.useEffect(() => {
      a(!0);
    }, []),
    $g(
      x.useMemo(
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
  const d = G.createElement(
    G.Fragment,
    null,
    G.createElement(Ig, { id: r, value: o.draggable }),
    G.createElement(Ug, { id: s, announcement: l }),
  );
  return n ? rn.createPortal(d, n) : d;
}
var re;
(function (e) {
  (e.DragStart = "dragStart"),
    (e.DragMove = "dragMove"),
    (e.DragEnd = "dragEnd"),
    (e.DragCancel = "dragCancel"),
    (e.DragOver = "dragOver"),
    (e.RegisterDroppable = "registerDroppable"),
    (e.SetDroppableDisabled = "setDroppableDisabled"),
    (e.UnregisterDroppable = "unregisterDroppable");
})(re || (re = {}));
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
function bg(e, t) {
  let {
      data: { value: n },
    } = e,
    {
      data: { value: r },
    } = t;
  return r - n;
}
function Xg(e, t) {
  if (!e || e.length === 0) return null;
  const [n] = e;
  return n[t];
}
function Yg(e, t) {
  const n = Math.max(t.top, e.top),
    r = Math.max(t.left, e.left),
    o = Math.min(t.left + t.width, e.left + e.width),
    i = Math.min(t.top + t.height, e.top + e.height),
    l = o - r,
    s = i - n;
  if (r < o && n < i) {
    const u = t.width * t.height,
      a = e.width * e.height,
      d = l * s,
      f = d / (u + a - d);
    return Number(f.toFixed(4));
  }
  return 0;
}
const qg = (e) => {
  let { collisionRect: t, droppableRects: n, droppableContainers: r } = e;
  const o = [];
  for (const i of r) {
    const { id: l } = i,
      s = n.get(l);
    if (s) {
      const u = Yg(s, t);
      u > 0 && o.push({ id: l, data: { droppableContainer: i, value: u } });
    }
  }
  return o.sort(bg);
};
function Jg(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1,
  };
}
function cp(e, t) {
  return e && t ? { x: e.left - t.left, y: e.top - t.top } : ut;
}
function Gg(e) {
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
const Zg = Gg(1);
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
function ev(e, t, n) {
  const r = dp(t);
  if (!r) return e;
  const { scaleX: o, scaleY: i, x: l, y: s } = r,
    u = e.left - l - (1 - o) * parseFloat(n),
    a = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)),
    d = o ? e.width / o : e.width,
    f = i ? e.height / i : e.height;
  return { width: d, height: f, top: a, right: u + d, bottom: a + f, left: u };
}
const tv = { ignoreTransform: !1 };
function co(e, t) {
  t === void 0 && (t = tv);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const { transform: a, transformOrigin: d } = ke(e).getComputedStyle(e);
    a && (n = ev(n, a, d));
  }
  const { top: r, left: o, width: i, height: l, bottom: s, right: u } = n;
  return { top: r, left: o, width: i, height: l, bottom: s, right: u };
}
function Ec(e) {
  return co(e, { ignoreTransform: !0 });
}
function nv(e) {
  const t = e.innerWidth,
    n = e.innerHeight;
  return { top: 0, left: 0, right: t, bottom: n, width: t, height: n };
}
function rv(e, t) {
  return (
    t === void 0 && (t = ke(e).getComputedStyle(e)), t.position === "fixed"
  );
}
function ov(e, t) {
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
    return o !== e && ov(o, i) && n.push(o), rv(o, i) ? n : r(o.parentNode);
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
var le;
(function (e) {
  (e[(e.Forward = 1)] = "Forward"), (e[(e.Backward = -1)] = "Backward");
})(le || (le = {}));
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
const iv = { x: 0.2, y: 0.2 };
function lv(e, t, n, r, o) {
  let { top: i, left: l, right: s, bottom: u } = n;
  r === void 0 && (r = 10), o === void 0 && (o = iv);
  const { isTop: a, isBottom: d, isLeft: f, isRight: m } = gp(e),
    y = { x: 0, y: 0 },
    v = { x: 0, y: 0 },
    g = { height: t.height * o.y, width: t.width * o.x };
  return (
    !a && i <= t.top + g.height
      ? ((y.y = le.Backward),
        (v.y = r * Math.abs((t.top + g.height - i) / g.height)))
      : !d &&
        u >= t.bottom - g.height &&
        ((y.y = le.Forward),
        (v.y = r * Math.abs((t.bottom - g.height - u) / g.height))),
    !m && s >= t.right - g.width
      ? ((y.x = le.Forward),
        (v.x = r * Math.abs((t.right - g.width - s) / g.width)))
      : !f &&
        l <= t.left + g.width &&
        ((y.x = le.Backward),
        (v.x = r * Math.abs((t.left + g.width - l) / g.width))),
    { direction: y, speed: v }
  );
}
function sv(e) {
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
  return e.reduce((t, n) => Qn(t, Fs(n)), ut);
}
function uv(e) {
  return e.reduce((t, n) => t + pp(n), 0);
}
function av(e) {
  return e.reduce((t, n) => t + hp(n), 0);
}
function yp(e, t) {
  if ((t === void 0 && (t = co), !e)) return;
  const { top: n, left: r, bottom: o, right: i } = t(e);
  fp(e) &&
    (o <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) &&
    e.scrollIntoView({ block: "center", inline: "center" });
}
const cv = [
  ["x", ["left", "right"], uv],
  ["y", ["top", "bottom"], av],
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
    for (const [i, l, s] of cv)
      for (const u of l)
        Object.defineProperty(this, u, {
          get: () => {
            const a = s(r),
              d = o[i] - a;
            return this.rect[u] + d;
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
function dv(e) {
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
var Ve;
(function (e) {
  (e.Click = "click"),
    (e.DragStart = "dragstart"),
    (e.Keydown = "keydown"),
    (e.ContextMenu = "contextmenu"),
    (e.Resize = "resize"),
    (e.SelectionChange = "selectionchange"),
    (e.VisibilityChange = "visibilitychange");
})(Ve || (Ve = {}));
function xc(e) {
  e.preventDefault();
}
function fv(e) {
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
  pv = (e, t) => {
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
      this.windowListeners.add(Ve.Resize, this.handleCancel),
      this.windowListeners.add(Ve.VisibilityChange, this.handleCancel),
      setTimeout(() => this.listeners.add(Ve.Keydown, this.handleKeyDown));
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
          coordinateGetter: l = pv,
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
        d = a ? { x: a.left, y: a.top } : ut;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const f = l(t, { active: n, context: r.current, currentCoordinates: d });
      if (f) {
        const m = Ni(f, d),
          y = { x: 0, y: 0 },
          { scrollableAncestors: v } = r.current;
        for (const g of v) {
          const k = t.code,
            {
              isTop: h,
              isRight: c,
              isLeft: p,
              isBottom: w,
              maxScroll: S,
              minScroll: R,
            } = gp(g),
            C = sv(g),
            T = {
              x: Math.min(
                k === $.Right ? C.right - C.width / 2 : C.right,
                Math.max(k === $.Right ? C.left : C.left + C.width / 2, f.x),
              ),
              y: Math.min(
                k === $.Down ? C.bottom - C.height / 2 : C.bottom,
                Math.max(k === $.Down ? C.top : C.top + C.height / 2, f.y),
              ),
            },
            P = (k === $.Right && !c) || (k === $.Left && !p),
            D = (k === $.Down && !w) || (k === $.Up && !h);
          if (P && T.x !== f.x) {
            const F = g.scrollLeft + m.x,
              ve = (k === $.Right && F <= S.x) || (k === $.Left && F >= R.x);
            if (ve && !m.y) {
              g.scrollTo({ left: F, behavior: s });
              return;
            }
            ve
              ? (y.x = g.scrollLeft - F)
              : (y.x = k === $.Right ? g.scrollLeft - S.x : g.scrollLeft - R.x),
              y.x && g.scrollBy({ left: -y.x, behavior: s });
            break;
          } else if (D && T.y !== f.y) {
            const F = g.scrollTop + m.y,
              ve = (k === $.Down && F <= S.y) || (k === $.Up && F >= R.y);
            if (ve && !m.x) {
              g.scrollTo({ top: F, behavior: s });
              return;
            }
            ve
              ? (y.y = g.scrollTop - F)
              : (y.y = k === $.Down ? g.scrollTop - S.y : g.scrollTop - R.y),
              y.y && g.scrollBy({ top: -y.y, behavior: s });
            break;
          }
        }
        this.handleMove(t, Qn(Ni(f, this.referenceCoordinates), y));
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
class Ku {
  constructor(t, n, r) {
    var o;
    r === void 0 && (r = dv(t.event.target)),
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
      this.windowListeners.add(Ve.Resize, this.handleCancel),
      this.windowListeners.add(Ve.DragStart, xc),
      this.windowListeners.add(Ve.VisibilityChange, this.handleCancel),
      this.windowListeners.add(Ve.ContextMenu, xc),
      this.documentListeners.add(Ve.Keydown, this.handleKeydown),
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
      this.documentListeners.add(Ve.Click, fv, { capture: !0 }),
      this.removeTextSelection(),
      this.documentListeners.add(Ve.SelectionChange, this.removeTextSelection),
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
const hv = { move: { name: "pointermove" }, end: { name: "pointerup" } };
class Ep extends Ku {
  constructor(t) {
    const { event: n } = t,
      r = or(n.target);
    super(t, hv, r);
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
const mv = { move: { name: "mousemove" }, end: { name: "mouseup" } };
var js;
(function (e) {
  e[(e.RightClick = 2)] = "RightClick";
})(js || (js = {}));
class gv extends Ku {
  constructor(t) {
    super(t, mv, or(t.event.target));
  }
}
gv.activators = [
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
class vv extends Ku {
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
vv.activators = [
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
var Oi;
(function (e) {
  (e[(e.TreeOrder = 0)] = "TreeOrder"),
    (e[(e.ReversedTreeOrder = 1)] = "ReversedTreeOrder");
})(Oi || (Oi = {}));
function yv(e) {
  let {
    acceleration: t,
    activator: n = Mr.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: i,
    interval: l = 5,
    order: s = Oi.TreeOrder,
    pointerCoordinates: u,
    scrollableAncestors: a,
    scrollableAncestorRects: d,
    delta: f,
    threshold: m,
  } = e;
  const y = Sv({ delta: f, disabled: !i }),
    [v, g] = Ag(),
    k = x.useRef({ x: 0, y: 0 }),
    h = x.useRef({ x: 0, y: 0 }),
    c = x.useMemo(() => {
      switch (n) {
        case Mr.Pointer:
          return u ? { top: u.y, bottom: u.y, left: u.x, right: u.x } : null;
        case Mr.DraggableRect:
          return o;
      }
    }, [n, o, u]),
    p = x.useRef(null),
    w = x.useCallback(() => {
      const R = p.current;
      if (!R) return;
      const C = k.current.x * h.current.x,
        T = k.current.y * h.current.y;
      R.scrollBy(C, T);
    }, []),
    S = x.useMemo(() => (s === Oi.TreeOrder ? [...a].reverse() : a), [s, a]);
  x.useEffect(() => {
    if (!i || !a.length || !c) {
      g();
      return;
    }
    for (const R of S) {
      if ((r == null ? void 0 : r(R)) === !1) continue;
      const C = a.indexOf(R),
        T = d[C];
      if (!T) continue;
      const { direction: P, speed: D } = lv(R, T, c, t, m);
      for (const F of ["x", "y"]) y[F][P[F]] || ((D[F] = 0), (P[F] = 0));
      if (D.x > 0 || D.y > 0) {
        g(), (p.current = R), v(w, l), (k.current = D), (h.current = P);
        return;
      }
    }
    (k.current = { x: 0, y: 0 }), (h.current = { x: 0, y: 0 }), g();
  }, [
    t,
    w,
    r,
    g,
    i,
    l,
    JSON.stringify(c),
    JSON.stringify(y),
    v,
    a,
    S,
    d,
    JSON.stringify(m),
  ]);
}
const wv = {
  x: { [le.Backward]: !1, [le.Forward]: !1 },
  y: { [le.Backward]: !1, [le.Forward]: !1 },
};
function Sv(e) {
  let { delta: t, disabled: n } = e;
  const r = Ri(t);
  return ao(
    (o) => {
      if (n || !r || !o) return wv;
      const i = { x: Math.sign(t.x - r.x), y: Math.sign(t.y - r.y) };
      return {
        x: {
          [le.Backward]: o.x[le.Backward] || i.x === -1,
          [le.Forward]: o.x[le.Forward] || i.x === 1,
        },
        y: {
          [le.Backward]: o.y[le.Backward] || i.y === -1,
          [le.Forward]: o.y[le.Forward] || i.y === 1,
        },
      };
    },
    [n, t, r],
  );
}
function Ev(e, t) {
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
function xv(e, t) {
  return x.useMemo(
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
function kv(e, t) {
  let { dragging: n, dependencies: r, config: o } = t;
  const [i, l] = x.useState(null),
    { frequency: s, measure: u, strategy: a } = o,
    d = x.useRef(e),
    f = k(),
    m = eo(f),
    y = x.useCallback(
      function (h) {
        h === void 0 && (h = []),
          !m.current &&
            l((c) =>
              c === null ? h : c.concat(h.filter((p) => !c.includes(p))),
            );
      },
      [m],
    ),
    v = x.useRef(null),
    g = ao(
      (h) => {
        if (f && !n) return Rc;
        if (!h || h === Rc || d.current !== e || i != null) {
          const c = new Map();
          for (let p of e) {
            if (!p) continue;
            if (i && i.length > 0 && !i.includes(p.id) && p.rect.current) {
              c.set(p.id, p.rect.current);
              continue;
            }
            const w = p.node.current,
              S = w ? new Wu(u(w), w) : null;
            (p.rect.current = S), S && c.set(p.id, S);
          }
          return c;
        }
        return h;
      },
      [e, i, n, f, u],
    );
  return (
    x.useEffect(() => {
      d.current = e;
    }, [e]),
    x.useEffect(() => {
      f || y();
    }, [n, f]),
    x.useEffect(() => {
      i && i.length > 0 && l(null);
    }, [JSON.stringify(i)]),
    x.useEffect(() => {
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
  function k() {
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
function Qu(e, t) {
  return ao(
    (n) => (e ? n || (typeof t == "function" ? t(e) : e) : null),
    [t, e],
  );
}
function Cv(e, t) {
  return Qu(e, t);
}
function Rv(e) {
  let { callback: t, disabled: n } = e;
  const r = qi(t),
    o = x.useMemo(() => {
      if (n || typeof window > "u" || typeof window.MutationObserver > "u")
        return;
      const { MutationObserver: i } = window;
      return new i(r);
    }, [r, n]);
  return x.useEffect(() => () => (o == null ? void 0 : o.disconnect()), [o]), o;
}
function Gi(e) {
  let { callback: t, disabled: n } = e;
  const r = qi(t),
    o = x.useMemo(() => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const { ResizeObserver: i } = window;
      return new i(r);
    }, [n]);
  return x.useEffect(() => () => (o == null ? void 0 : o.disconnect()), [o]), o;
}
function Nv(e) {
  return new Wu(co(e), e);
}
function Nc(e, t, n) {
  t === void 0 && (t = Nv);
  const [r, o] = x.useReducer(s, null),
    i = Rv({
      callback(u) {
        if (e)
          for (const a of u) {
            const { type: d, target: f } = a;
            if (
              d === "childList" &&
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
    const d = t(e);
    return JSON.stringify(u) === JSON.stringify(d) ? u : d;
  }
}
function Tv(e) {
  const t = Qu(e);
  return cp(e, t);
}
const Tc = [];
function _v(e) {
  const t = x.useRef(e),
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
    x.useEffect(() => {
      t.current = e;
    }, [e]),
    n
  );
}
function Ov(e) {
  const [t, n] = x.useState(null),
    r = x.useRef(e),
    o = x.useCallback((i) => {
      const l = Ml(i.target);
      l && n((s) => (s ? (s.set(l, Fs(l)), new Map(s)) : null));
    }, []);
  return (
    x.useEffect(() => {
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
    x.useMemo(
      () =>
        e.length
          ? t
            ? Array.from(t.values()).reduce((i, l) => Qn(i, l), ut)
            : vp(e)
          : ut,
      [e, t],
    )
  );
}
function _c(e, t) {
  t === void 0 && (t = []);
  const n = x.useRef(null);
  return (
    x.useEffect(() => {
      n.current = null;
    }, t),
    x.useEffect(() => {
      const r = e !== ut;
      r && !n.current && (n.current = e), !r && n.current && (n.current = null);
    }, [e]),
    n.current ? Ni(e, n.current) : ut
  );
}
function Dv(e) {
  x.useEffect(
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
function Pv(e, t) {
  return x.useMemo(
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
  return x.useMemo(() => (e ? nv(e) : null), [e]);
}
const Il = [];
function Lv(e, t) {
  t === void 0 && (t = co);
  const [n] = e,
    r = xp(n ? ke(n) : null),
    [o, i] = x.useReducer(s, Il),
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
function Av(e) {
  let { measure: t } = e;
  const [n, r] = x.useState(null),
    o = x.useCallback(
      (a) => {
        for (const { target: d } of a)
          if (uo(d)) {
            r((f) => {
              const m = t(d);
              return f ? { ...f, width: m.width, height: m.height } : m;
            });
            break;
          }
      },
      [t],
    ),
    i = Gi({ callback: o }),
    l = x.useCallback(
      (a) => {
        const d = kp(a);
        i == null || i.disconnect(),
          d && (i == null || i.observe(d)),
          r(d ? t(d) : null);
      },
      [t, i],
    ),
    [s, u] = Ci(l);
  return x.useMemo(() => ({ nodeRef: s, rect: n, setRef: u }), [n, s, u]);
}
const zv = [
    { sensor: Ep, options: {} },
    { sensor: Sp, options: {} },
  ],
  Mv = { current: {} },
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
const Fv = {
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
  fo = x.createContext(Cp),
  Rp = x.createContext(Fv);
function jv() {
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
function Iv(e, t) {
  switch (t.type) {
    case re.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active,
        },
      };
    case re.DragMove:
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
    case re.DragEnd:
    case re.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: { x: 0, y: 0 },
          translate: { x: 0, y: 0 },
        },
      };
    case re.RegisterDroppable: {
      const { element: n } = t,
        { id: r } = n,
        o = new Fr(e.droppable.containers);
      return (
        o.set(r, n), { ...e, droppable: { ...e.droppable, containers: o } }
      );
    }
    case re.SetDroppableDisabled: {
      const { id: n, key: r, disabled: o } = t,
        i = e.droppable.containers.get(n);
      if (!i || r !== i.key) return e;
      const l = new Fr(e.droppable.containers);
      return (
        l.set(n, { ...i, disabled: o }),
        { ...e, droppable: { ...e.droppable, containers: l } }
      );
    }
    case re.UnregisterDroppable: {
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
function Uv(e) {
  let { disabled: t } = e;
  const { active: n, activatorEvent: r, draggableNodes: o } = x.useContext(fo),
    i = Ri(r),
    l = Ri(n == null ? void 0 : n.id);
  return (
    x.useEffect(() => {
      if (!t && !r && i && l != null) {
        if (!Hu(i) || document.activeElement === i.target) return;
        const s = o.get(l);
        if (!s) return;
        const { activatorNode: u, node: a } = s;
        if (!u.current && !a.current) return;
        requestAnimationFrame(() => {
          for (const d of [u.current, a.current]) {
            if (!d) continue;
            const f = Fg(d);
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
function Bv(e) {
  return x.useMemo(
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
function $v(e) {
  let { activeNode: t, measure: n, initialRect: r, config: o = !0 } = e;
  const i = x.useRef(!1),
    { x: l, y: s } = typeof o == "boolean" ? { x: o, y: o } : o;
  gt(() => {
    if ((!l && !s) || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r) return;
    const a = t == null ? void 0 : t.node.current;
    if (!a || a.isConnected === !1) return;
    const d = n(a),
      f = cp(d, r);
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
const Zi = x.createContext({ ...ut, scaleX: 1, scaleY: 1 });
var zt;
(function (e) {
  (e[(e.Uninitialized = 0)] = "Uninitialized"),
    (e[(e.Initializing = 1)] = "Initializing"),
    (e[(e.Initialized = 2)] = "Initialized");
})(zt || (zt = {}));
const Hv = x.memo(function (t) {
    var n, r, o, i;
    let {
      id: l,
      accessibility: s,
      autoScroll: u = !0,
      children: a,
      sensors: d = zv,
      collisionDetection: f = qg,
      measuring: m,
      modifiers: y,
      ...v
    } = t;
    const g = x.useReducer(Iv, void 0, jv),
      [k, h] = g,
      [c, p] = Hg(),
      [w, S] = x.useState(zt.Uninitialized),
      R = w === zt.Initialized,
      {
        draggable: { active: C, nodes: T, translate: P },
        droppable: { containers: D },
      } = k,
      F = C ? T.get(C) : null,
      ve = x.useRef({ initial: null, translated: null }),
      ye = x.useMemo(() => {
        var ue;
        return C != null
          ? {
              id: C,
              data: (ue = F == null ? void 0 : F.data) != null ? ue : Mv,
              rect: ve,
            }
          : null;
      }, [C, F]),
      qe = x.useRef(null),
      [mo, En] = x.useState(null),
      [Pe, _] = x.useState(null),
      L = eo(v, Object.values(v)),
      A = Ji("DndDescribedBy", l),
      K = x.useMemo(() => D.getEnabled(), [D]),
      B = Bv(m),
      {
        droppableRects: Je,
        measureDroppableContainers: $e,
        measuringScheduled: xn,
      } = kv(K, { dragging: R, dependencies: [P.x, P.y], config: B.droppable }),
      te = Ev(T, C),
      Gt = x.useMemo(() => (Pe ? Ti(Pe) : null), [Pe]),
      Zu = lh(),
      ea = Cv(te, B.draggable.measure);
    $v({
      activeNode: C ? T.get(C) : null,
      config: Zu.layoutShiftCompensation,
      initialRect: ea,
      measure: B.draggable.measure,
    });
    const Ge = Nc(te, B.draggable.measure, ea),
      il = Nc(te ? te.parentElement : null),
      Zt = x.useRef({
        activatorEvent: null,
        active: null,
        activeNode: te,
        collisionRect: null,
        collisions: null,
        droppableRects: Je,
        draggableNodes: T,
        draggingNode: null,
        draggingNodeRect: null,
        droppableContainers: D,
        over: null,
        scrollableAncestors: [],
        scrollAdjustedTranslate: null,
      }),
      ta = D.getNodeFor((n = Zt.current.over) == null ? void 0 : n.id),
      en = Av({ measure: B.dragOverlay.measure }),
      go = (r = en.nodeRef.current) != null ? r : te,
      kn = R ? ((o = en.rect) != null ? o : Ge) : null,
      na = !!(en.nodeRef.current && en.rect),
      ra = Tv(na ? null : Ge),
      ll = xp(go ? ke(go) : null),
      Tt = _v(R ? ta ?? te : null),
      vo = Lv(Tt),
      yo = Np(y, {
        transform: { x: P.x - ra.x, y: P.y - ra.y, scaleX: 1, scaleY: 1 },
        activatorEvent: Pe,
        active: ye,
        activeNodeRect: Ge,
        containerNodeRect: il,
        draggingNodeRect: kn,
        over: Zt.current.over,
        overlayNodeRect: en.rect,
        scrollableAncestors: Tt,
        scrollableAncestorRects: vo,
        windowRect: ll,
      }),
      oa = Gt ? Qn(Gt, P) : null,
      ia = Ov(Tt),
      Zp = _c(ia),
      eh = _c(ia, [Ge]),
      Cn = Qn(yo, Zp),
      Rn = kn ? Zg(kn, yo) : null,
      sr =
        ye && Rn
          ? f({
              active: ye,
              collisionRect: Rn,
              droppableRects: Je,
              droppableContainers: K,
              pointerCoordinates: oa,
            })
          : null,
      la = Xg(sr, "id"),
      [_t, sa] = x.useState(null),
      th = na ? yo : Qn(yo, eh),
      nh = Jg(th, (i = _t == null ? void 0 : _t.rect) != null ? i : null, Ge),
      ua = x.useCallback(
        (ue, Le) => {
          let { sensor: Ae, options: Ot } = Le;
          if (qe.current == null) return;
          const He = T.get(qe.current);
          if (!He) return;
          const Ze = ue.nativeEvent,
            ct = new Ae({
              active: qe.current,
              activeNode: He,
              event: Ze,
              options: Ot,
              context: Zt,
              onStart(et) {
                const ur = qe.current;
                if (ur == null) return;
                const ar = T.get(ur);
                if (!ar) return;
                const { onDragStart: wo } = L.current,
                  So = { active: { id: ur, data: ar.data, rect: ve } };
                rn.unstable_batchedUpdates(() => {
                  wo == null || wo(So),
                    S(zt.Initializing),
                    h({
                      type: re.DragStart,
                      initialCoordinates: et,
                      active: ur,
                    }),
                    c({ type: "onDragStart", event: So });
                });
              },
              onMove(et) {
                h({ type: re.DragMove, coordinates: et });
              },
              onEnd: Nn(re.DragEnd),
              onCancel: Nn(re.DragCancel),
            });
          rn.unstable_batchedUpdates(() => {
            En(ct), _(ue.nativeEvent);
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
                  et === re.DragEnd &&
                    typeof dr == "function" &&
                    (await Promise.resolve(dr(cr))) &&
                    (et = re.DragCancel);
              }
              (qe.current = null),
                rn.unstable_batchedUpdates(() => {
                  h({ type: et }),
                    S(zt.Uninitialized),
                    sa(null),
                    En(null),
                    _(null);
                  const dr = et === re.DragEnd ? "onDragEnd" : "onDragCancel";
                  if (cr) {
                    const sl = L.current[dr];
                    sl == null || sl(cr), c({ type: dr, event: cr });
                  }
                });
            };
          }
        },
        [T],
      ),
      rh = x.useCallback(
        (ue, Le) => (Ae, Ot) => {
          const He = Ae.nativeEvent,
            Ze = T.get(Ot);
          if (qe.current !== null || !Ze || He.dndKit || He.defaultPrevented)
            return;
          const ct = { active: Ze };
          ue(Ae, Le.options, ct) === !0 &&
            ((He.dndKit = { capturedBy: Le.sensor }),
            (qe.current = Ot),
            ua(Ae, Le));
        },
        [T, ua],
      ),
      aa = xv(d, rh);
    Dv(d),
      gt(() => {
        Ge && w === zt.Initializing && S(zt.Initialized);
      }, [Ge, w]),
      x.useEffect(() => {
        const { onDragMove: ue } = L.current,
          {
            active: Le,
            activatorEvent: Ae,
            collisions: Ot,
            over: He,
          } = Zt.current;
        if (!Le || !Ae) return;
        const Ze = {
          active: Le,
          activatorEvent: Ae,
          collisions: Ot,
          delta: { x: Cn.x, y: Cn.y },
          over: He,
        };
        rn.unstable_batchedUpdates(() => {
          ue == null || ue(Ze), c({ type: "onDragMove", event: Ze });
        });
      }, [Cn.x, Cn.y]),
      x.useEffect(() => {
        const {
          active: ue,
          activatorEvent: Le,
          collisions: Ae,
          droppableContainers: Ot,
          scrollAdjustedTranslate: He,
        } = Zt.current;
        if (!ue || qe.current == null || !Le || !He) return;
        const { onDragOver: Ze } = L.current,
          ct = Ot.get(la),
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
            active: ue,
            activatorEvent: Le,
            collisions: Ae,
            delta: { x: He.x, y: He.y },
            over: Nn,
          };
        rn.unstable_batchedUpdates(() => {
          sa(Nn), Ze == null || Ze(et), c({ type: "onDragOver", event: et });
        });
      }, [la]),
      gt(() => {
        (Zt.current = {
          activatorEvent: Pe,
          active: ye,
          activeNode: te,
          collisionRect: Rn,
          collisions: sr,
          droppableRects: Je,
          draggableNodes: T,
          draggingNode: go,
          draggingNodeRect: kn,
          droppableContainers: D,
          over: _t,
          scrollableAncestors: Tt,
          scrollAdjustedTranslate: Cn,
        }),
          (ve.current = { initial: kn, translated: Rn });
      }, [ye, te, sr, Rn, T, go, kn, Je, D, _t, Tt, Cn]),
      yv({
        ...Zu,
        delta: P,
        draggingRect: Rn,
        pointerCoordinates: oa,
        scrollableAncestors: Tt,
        scrollableAncestorRects: vo,
      });
    const oh = x.useMemo(
        () => ({
          active: ye,
          activeNode: te,
          activeNodeRect: Ge,
          activatorEvent: Pe,
          collisions: sr,
          containerNodeRect: il,
          dragOverlay: en,
          draggableNodes: T,
          droppableContainers: D,
          droppableRects: Je,
          over: _t,
          measureDroppableContainers: $e,
          scrollableAncestors: Tt,
          scrollableAncestorRects: vo,
          measuringConfiguration: B,
          measuringScheduled: xn,
          windowRect: ll,
        }),
        [ye, te, Ge, Pe, sr, il, en, T, D, Je, _t, $e, Tt, vo, B, xn, ll],
      ),
      ih = x.useMemo(
        () => ({
          activatorEvent: Pe,
          activators: aa,
          active: ye,
          activeNodeRect: Ge,
          ariaDescribedById: { draggable: A },
          dispatch: h,
          draggableNodes: T,
          over: _t,
          measureDroppableContainers: $e,
        }),
        [Pe, aa, ye, Ge, h, A, T, _t, $e],
      );
    return G.createElement(
      ap.Provider,
      { value: p },
      G.createElement(
        fo.Provider,
        { value: ih },
        G.createElement(
          Rp.Provider,
          { value: oh },
          G.createElement(Zi.Provider, { value: nh }, a),
        ),
        G.createElement(Uv, {
          disabled: (s == null ? void 0 : s.restoreFocus) === !1,
        }),
      ),
      G.createElement(Kg, { ...s, hiddenTextDescribedById: A }),
    );
    function lh() {
      const ue = (mo == null ? void 0 : mo.autoScrollEnabled) === !1,
        Le = typeof u == "object" ? u.enabled === !1 : u === !1,
        Ae = R && !ue && !Le;
      return typeof u == "object" ? { ...u, enabled: Ae } : { enabled: Ae };
    }
  }),
  Vv = x.createContext(null),
  Oc = "button",
  Wv = "Droppable";
function Tp(e) {
  let { id: t, data: n, disabled: r = !1, attributes: o } = e;
  const i = Ji(Wv),
    {
      activators: l,
      activatorEvent: s,
      active: u,
      activeNodeRect: a,
      ariaDescribedById: d,
      draggableNodes: f,
      over: m,
    } = x.useContext(fo),
    {
      role: y = Oc,
      roleDescription: v = "draggable",
      tabIndex: g = 0,
    } = o ?? {},
    k = (u == null ? void 0 : u.id) === t,
    h = x.useContext(k ? Zi : Vv),
    [c, p] = Ci(),
    [w, S] = Ci(),
    R = Pv(l, t),
    C = eo(n);
  gt(
    () => (
      f.set(t, { id: t, key: i, node: c, activatorNode: w, data: C }),
      () => {
        const P = f.get(t);
        P && P.key === i && f.delete(t);
      }
    ),
    [f, t],
  );
  const T = x.useMemo(
    () => ({
      role: y,
      tabIndex: g,
      "aria-disabled": r,
      "aria-pressed": k && y === Oc ? !0 : void 0,
      "aria-roledescription": v,
      "aria-describedby": d.draggable,
    }),
    [r, y, g, k, v, d.draggable],
  );
  return {
    active: u,
    activatorEvent: s,
    activeNodeRect: a,
    attributes: T,
    isDragging: k,
    listeners: r ? void 0 : R,
    node: c,
    over: m,
    setNodeRef: p,
    setActivatorNodeRef: S,
    transform: h,
  };
}
function Kv() {
  return x.useContext(Rp);
}
const Qv = "Droppable",
  bv = { timeout: 25 };
function bu(e) {
  let { data: t, disabled: n = !1, id: r, resizeObserverConfig: o } = e;
  const i = Ji(Qv),
    {
      active: l,
      dispatch: s,
      over: u,
      measureDroppableContainers: a,
    } = x.useContext(fo),
    d = x.useRef({ disabled: n }),
    f = x.useRef(!1),
    m = x.useRef(null),
    y = x.useRef(null),
    { disabled: v, updateMeasurementsFor: g, timeout: k } = { ...bv, ...o },
    h = eo(g ?? r),
    c = x.useCallback(() => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      y.current != null && clearTimeout(y.current),
        (y.current = setTimeout(() => {
          a(Array.isArray(h.current) ? h.current : [h.current]),
            (y.current = null);
        }, k));
    }, [k]),
    p = Gi({ callback: c, disabled: v || !l }),
    w = x.useCallback(
      (T, P) => {
        p && (P && (p.unobserve(P), (f.current = !1)), T && p.observe(T));
      },
      [p],
    ),
    [S, R] = Ci(w),
    C = eo(t);
  return (
    x.useEffect(() => {
      !p ||
        !S.current ||
        (p.disconnect(), (f.current = !1), p.observe(S.current));
    }, [S, p]),
    gt(
      () => (
        s({
          type: re.RegisterDroppable,
          element: { id: r, key: i, disabled: n, node: S, rect: m, data: C },
        }),
        () => s({ type: re.UnregisterDroppable, key: i, id: r })
      ),
      [r],
    ),
    x.useEffect(() => {
      n !== d.current.disabled &&
        (s({ type: re.SetDroppableDisabled, id: r, key: i, disabled: n }),
        (d.current.disabled = n));
    }, [r, i, n, s]),
    {
      active: l,
      rect: m,
      isOver: (u == null ? void 0 : u.id) === r,
      node: S,
      over: u,
      setNodeRef: R,
    }
  );
}
function Xv(e) {
  let { animation: t, children: n } = e;
  const [r, o] = x.useState(null),
    [i, l] = x.useState(null),
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
      r ? x.cloneElement(r, { ref: l }) : null,
    )
  );
}
const Yv = { x: 0, y: 0, scaleX: 1, scaleY: 1 };
function qv(e) {
  let { children: t } = e;
  return G.createElement(
    fo.Provider,
    { value: Cp },
    G.createElement(Zi.Provider, { value: Yv }, t),
  );
}
const Jv = { position: "fixed", touchAction: "none" },
  Gv = (e) => (Hu(e) ? "transform 250ms ease" : void 0),
  Zv = x.forwardRef((e, t) => {
    let {
      as: n,
      activatorEvent: r,
      adjustScale: o,
      children: i,
      className: l,
      rect: s,
      style: u,
      transform: a,
      transition: d = Gv,
    } = e;
    if (!s) return null;
    const f = o ? a : { ...a, scaleX: 1, scaleY: 1 },
      m = {
        ...Jv,
        width: s.width,
        height: s.height,
        top: s.top,
        left: s.left,
        transform: vn.Transform.toString(f),
        transformOrigin: o && r ? Qg(r, s) : void 0,
        transition: typeof d == "function" ? d(r) : d,
        ...u,
      };
    return G.createElement(n, { className: l, style: m, ref: t }, i);
  }),
  ey = (e) => (t) => {
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
  ty = (e) => {
    let {
      transform: { initial: t, final: n },
    } = e;
    return [
      { transform: vn.Transform.toString(t) },
      { transform: vn.Transform.toString(n) },
    ];
  },
  ny = {
    duration: 250,
    easing: "ease",
    keyframes: ty,
    sideEffects: ey({ styles: { active: { opacity: "0" } } }),
  };
function ry(e) {
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
    const { transform: d } = ke(l).getComputedStyle(l),
      f = dp(d);
    if (!f) return;
    const m = typeof t == "function" ? t : oy(t);
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
function oy(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: o,
  } = { ...ny, ...e };
  return (i) => {
    let { active: l, dragOverlay: s, transform: u, ...a } = i;
    if (!t) return;
    const d = { x: s.rect.left - l.rect.left, y: s.rect.top - l.rect.top },
      f = {
        scaleX: u.scaleX !== 1 ? (l.rect.width * u.scaleX) / s.rect.width : 1,
        scaleY: u.scaleY !== 1 ? (l.rect.height * u.scaleY) / s.rect.height : 1,
      },
      m = { x: u.x - d.x, y: u.y - d.y, ...f },
      y = o({
        ...a,
        active: l,
        dragOverlay: s,
        transform: { initial: u, final: m },
      }),
      [v] = y,
      g = y[y.length - 1];
    if (JSON.stringify(v) === JSON.stringify(g)) return;
    const k = r == null ? void 0 : r({ active: l, dragOverlay: s, ...a }),
      h = s.node.animate(y, { duration: t, easing: n, fill: "forwards" });
    return new Promise((c) => {
      h.onfinish = () => {
        k == null || k(), c();
      };
    });
  };
}
let Dc = 0;
function iy(e) {
  return x.useMemo(() => {
    if (e != null) return Dc++, Dc;
  }, [e]);
}
const ly = G.memo((e) => {
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
      activatorEvent: d,
      active: f,
      activeNodeRect: m,
      containerNodeRect: y,
      draggableNodes: v,
      droppableContainers: g,
      dragOverlay: k,
      over: h,
      measuringConfiguration: c,
      scrollableAncestors: p,
      scrollableAncestorRects: w,
      windowRect: S,
    } = Kv(),
    R = x.useContext(Zi),
    C = iy(f == null ? void 0 : f.id),
    T = Np(l, {
      activatorEvent: d,
      active: f,
      activeNodeRect: m,
      containerNodeRect: y,
      draggingNodeRect: k.rect,
      over: h,
      overlayNodeRect: k.rect,
      scrollableAncestors: p,
      scrollableAncestorRects: w,
      transform: R,
      windowRect: S,
    }),
    P = Qu(m),
    D = ry({
      config: r,
      draggableNodes: v,
      droppableContainers: g,
      measuringConfiguration: c,
    }),
    F = P ? k.setRef : void 0;
  return G.createElement(
    qv,
    null,
    G.createElement(
      Xv,
      { animation: D },
      f && C
        ? G.createElement(
            Zv,
            {
              key: C,
              id: f.id,
              ref: F,
              as: s,
              activatorEvent: d,
              adjustScale: t,
              className: u,
              transition: i,
              rect: P,
              style: { zIndex: a, ...o },
              transform: T,
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
 */ const sy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  _p = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var uy = {
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
 */ const ay = x.forwardRef(
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
    x.createElement(
      "svg",
      {
        ref: u,
        ...uy,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: _p("lucide", o),
        ...s,
      },
      [
        ...l.map(([a, d]) => x.createElement(a, d)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cy = (e, t) => {
  const n = x.forwardRef(({ className: r, ...o }, i) =>
    x.createElement(ay, {
      ref: i,
      iconNode: t,
      className: _p(`lucide-${sy(e)}`, r),
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
 */ const dy = cy("Loader", [
    ["path", { d: "M12 2v4", key: "3427ic" }],
    ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
    ["path", { d: "M18 12h4", key: "wj9ykh" }],
    ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
    ["path", { d: "M12 18v4", key: "jadmvz" }],
    ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
    ["path", { d: "M2 12h4", key: "j09sii" }],
    ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
  ]),
  Di = ({ element: e }) =>
    j.jsxs("div", {
      className:
        "flex gap-2 p-2 border border-slate-400 rounded-md text-xl h-fit w-fit hover:bg-gradient-to-t from-cyan-100 to-white",
      children: [
        j.jsx("img", {
          className: "w-8 h-8",
          src: `/static/item-images/${e.image}.svg`,
        }),
        j.jsx("div", { children: e.text }),
      ],
    }),
  fy = ({ element: e, isLoading: t }) => {
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
      children: j.jsx(Di, { element: e }),
    });
  },
  py = ({ element: e, isLoading: t }) => {
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
      { isOver: l, setNodeRef: s } = bu({
        id: e.id,
        data: { element: e, type: "placed-element" },
        disabled: t,
      }),
      u = x.useMemo(
        () => ({ transform: vn.Translate.toString(i), top: e.y, left: e.x }),
        [e.x, e.y, i],
      ),
      a = l
        ? "absolute w-fit h-fit bg-gradient-to-t from-cyan-100 to-white"
        : "absolute w-fit h-fit";
    return j.jsx("div", {
      ref: o,
      className: a,
      style: u,
      ...r,
      ...n,
      children: j.jsxs("div", {
        ref: s,
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
          !e.isLoading && j.jsx(Di, { element: e }),
        ],
      }),
    });
  },
  hy = ({ elements: e, isLoading: t }) => {
    const { setNodeRef: n } = bu({
      id: "sidebar-area",
      data: { type: "sidebar" },
      disabled: t,
    });
    return j.jsx("div", {
      className: "col-span-3 border-l relative",
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
                j.jsx(fy, { element: r, isLoading: t }, r.text),
              ),
            }),
          }),
        ],
      }),
    });
  },
  my = ({ placedElements: e, isLoading: t }) => {
    const { setNodeRef: n } = bu({
      id: "playground-area",
      data: { type: "playground" },
      disabled: t,
    });
    return j.jsx("div", {
      className: "col-span-9 h-full w-full relative",
      ref: n,
      children: e.map((r, o) => j.jsx(py, { element: r, isLoading: t }, o)),
    });
  };
var ae = [];
for (var Ul = 0; Ul < 256; ++Ul) ae.push((Ul + 256).toString(16).slice(1));
function gy(e, t = 0) {
  return (
    ae[e[t + 0]] +
    ae[e[t + 1]] +
    ae[e[t + 2]] +
    ae[e[t + 3]] +
    "-" +
    ae[e[t + 4]] +
    ae[e[t + 5]] +
    "-" +
    ae[e[t + 6]] +
    ae[e[t + 7]] +
    "-" +
    ae[e[t + 8]] +
    ae[e[t + 9]] +
    "-" +
    ae[e[t + 10]] +
    ae[e[t + 11]] +
    ae[e[t + 12]] +
    ae[e[t + 13]] +
    ae[e[t + 14]] +
    ae[e[t + 15]]
  ).toLowerCase();
}
var Io,
  vy = new Uint8Array(16);
function yy() {
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
  return Io(vy);
}
var wy =
  typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Pc = { randomUUID: wy };
function Lc(e, t, n) {
  if (Pc.randomUUID && !t && !e) return Pc.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || yy)();
  return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), gy(r);
}
function Op(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Sy } = Object.prototype,
  { getPrototypeOf: Xu } = Object,
  el = ((e) => (t) => {
    const n = Sy.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  at = (e) => ((e = e.toLowerCase()), (t) => el(t) === e),
  tl = (e) => (t) => typeof t === e,
  { isArray: ir } = Array,
  no = tl("undefined");
function Ey(e) {
  return (
    e !== null &&
    !no(e) &&
    e.constructor !== null &&
    !no(e.constructor) &&
    je(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Dp = at("ArrayBuffer");
function xy(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Dp(e.buffer)),
    t
  );
}
const ky = tl("string"),
  je = tl("function"),
  Pp = tl("number"),
  nl = (e) => e !== null && typeof e == "object",
  Cy = (e) => e === !0 || e === !1,
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
  Ry = at("Date"),
  Ny = at("File"),
  Ty = at("Blob"),
  _y = at("FileList"),
  Oy = (e) => nl(e) && je(e.pipe),
  Dy = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (je(e.append) &&
          ((t = el(e)) === "formdata" ||
            (t === "object" &&
              je(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Py = at("URLSearchParams"),
  [Ly, Ay, zy, My] = ["ReadableStream", "Request", "Response", "Headers"].map(
    at,
  ),
  Fy = (e) =>
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
function Lp(e, t) {
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
  Ap = (e) => !no(e) && e !== un;
function Us() {
  const { caseless: e } = (Ap(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && Lp(t, o)) || o;
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
const jy = (e, t, n, { allOwnKeys: r } = {}) => (
    po(
      t,
      (o, i) => {
        n && je(o) ? (e[i] = Op(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  Iy = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Uy = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  By = (e, t, n, r) => {
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
  $y = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Hy = (e) => {
    if (!e) return null;
    if (ir(e)) return e;
    let t = e.length;
    if (!Pp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Vy = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Xu(Uint8Array)),
  Wy = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  Ky = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Qy = at("HTMLFormElement"),
  by = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Ac = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Xy = at("RegExp"),
  zp = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    po(n, (o, i) => {
      let l;
      (l = t(o, i, e)) !== !1 && (r[i] = l || o);
    }),
      Object.defineProperties(e, r);
  },
  Yy = (e) => {
    zp(e, (t, n) => {
      if (je(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (je(r)) {
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
  qy = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return ir(e) ? r(e) : r(String(e).split(t)), n;
  },
  Jy = () => {},
  Gy = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Bl = "abcdefghijklmnopqrstuvwxyz",
  zc = "0123456789",
  Mp = { DIGIT: zc, ALPHA: Bl, ALPHA_DIGIT: Bl + Bl.toUpperCase() + zc },
  Zy = (e = 16, t = Mp.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function e0(e) {
  return !!(
    e &&
    je(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const t0 = (e) => {
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
  n0 = at("AsyncFunction"),
  r0 = (e) => e && (nl(e) || je(e)) && je(e.then) && je(e.catch),
  Fp = ((e, t) =>
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
    je(un.postMessage),
  ),
  o0 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(un)
      : (typeof process < "u" && process.nextTick) || Fp,
  E = {
    isArray: ir,
    isArrayBuffer: Dp,
    isBuffer: Ey,
    isFormData: Dy,
    isArrayBufferView: xy,
    isString: ky,
    isNumber: Pp,
    isBoolean: Cy,
    isObject: nl,
    isPlainObject: Go,
    isReadableStream: Ly,
    isRequest: Ay,
    isResponse: zy,
    isHeaders: My,
    isUndefined: no,
    isDate: Ry,
    isFile: Ny,
    isBlob: Ty,
    isRegExp: Xy,
    isFunction: je,
    isStream: Oy,
    isURLSearchParams: Py,
    isTypedArray: Vy,
    isFileList: _y,
    forEach: po,
    merge: Us,
    extend: jy,
    trim: Fy,
    stripBOM: Iy,
    inherits: Uy,
    toFlatObject: By,
    kindOf: el,
    kindOfTest: at,
    endsWith: $y,
    toArray: Hy,
    forEachEntry: Wy,
    matchAll: Ky,
    isHTMLForm: Qy,
    hasOwnProperty: Ac,
    hasOwnProp: Ac,
    reduceDescriptors: zp,
    freezeMethods: Yy,
    toObjectSet: qy,
    toCamelCase: by,
    noop: Jy,
    toFiniteNumber: Gy,
    findKey: Lp,
    global: un,
    isContextDefined: Ap,
    ALPHABET: Mp,
    generateString: Zy,
    isSpecCompliantForm: e0,
    toJSONObject: t0,
    isAsyncFn: n0,
    isThenable: r0,
    setImmediate: Fp,
    asap: o0,
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
E.inherits(z, Error, {
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
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const jp = z.prototype,
  Ip = {};
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
  Ip[e] = { value: e };
});
Object.defineProperties(z, Ip);
Object.defineProperty(jp, "isAxiosError", { value: !0 });
z.from = (e, t, n, r, o, i) => {
  const l = Object.create(jp);
  return (
    E.toFlatObject(
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
const i0 = null;
function Bs(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function Up(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Mc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Up(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function l0(e) {
  return E.isArray(e) && !e.some(Bs);
}
const s0 = E.toFlatObject(E, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function rl(e, t, n) {
  if (!E.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = E.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, k) {
        return !E.isUndefined(k[g]);
      },
    ));
  const r = n.metaTokens,
    o = n.visitor || d,
    i = n.dots,
    l = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && E.isSpecCompliantForm(t);
  if (!E.isFunction(o)) throw new TypeError("visitor must be a function");
  function a(v) {
    if (v === null) return "";
    if (E.isDate(v)) return v.toISOString();
    if (!u && E.isBlob(v))
      throw new z("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(v) || E.isTypedArray(v)
      ? u && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function d(v, g, k) {
    let h = v;
    if (v && !k && typeof v == "object") {
      if (E.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (E.isArray(v) && l0(v)) ||
        ((E.isFileList(v) || E.endsWith(g, "[]")) && (h = E.toArray(v)))
      )
        return (
          (g = Up(g)),
          h.forEach(function (p, w) {
            !(E.isUndefined(p) || p === null) &&
              t.append(
                l === !0 ? Mc([g], w, i) : l === null ? g : g + "[]",
                a(p),
              );
          }),
          !1
        );
    }
    return Bs(v) ? !0 : (t.append(Mc(k, g, i), a(v)), !1);
  }
  const f = [],
    m = Object.assign(s0, {
      defaultVisitor: d,
      convertValue: a,
      isVisitable: Bs,
    });
  function y(v, g) {
    if (!E.isUndefined(v)) {
      if (f.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(v),
        E.forEach(v, function (h, c) {
          (!(E.isUndefined(h) || h === null) &&
            o.call(t, h, E.isString(c) ? c.trim() : c, g, m)) === !0 &&
            y(h, g ? g.concat(c) : [c]);
        }),
        f.pop();
    }
  }
  if (!E.isObject(e)) throw new TypeError("data must be an object");
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
const Bp = Yu.prototype;
Bp.append = function (t, n) {
  this._pairs.push([t, n]);
};
Bp.toString = function (t) {
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
function u0(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function $p(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || u0,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = E.isURLSearchParams(t) ? t.toString() : new Yu(t, n).toString(r)),
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
    E.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Hp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  a0 = typeof URLSearchParams < "u" ? URLSearchParams : Yu,
  c0 = typeof FormData < "u" ? FormData : null,
  d0 = typeof Blob < "u" ? Blob : null,
  f0 = {
    isBrowser: !0,
    classes: { URLSearchParams: a0, FormData: c0, Blob: d0 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  qu = typeof window < "u" && typeof document < "u",
  $s = (typeof navigator == "object" && navigator) || void 0,
  p0 =
    qu &&
    (!$s || ["ReactNative", "NativeScript", "NS"].indexOf($s.product) < 0),
  h0 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  m0 = (qu && window.location.href) || "http://localhost",
  g0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: qu,
        hasStandardBrowserEnv: p0,
        hasStandardBrowserWebWorkerEnv: h0,
        navigator: $s,
        origin: m0,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Oe = { ...g0, ...f0 };
function v0(e, t) {
  return rl(
    e,
    new Oe.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return Oe.isNode && E.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function y0(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function w0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function Vp(e) {
  function t(n, r, o, i) {
    let l = n[i++];
    if (l === "__proto__") return !0;
    const s = Number.isFinite(+l),
      u = i >= n.length;
    return (
      (l = !l && E.isArray(o) ? o.length : l),
      u
        ? (E.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !s)
        : ((!o[l] || !E.isObject(o[l])) && (o[l] = []),
          t(n, r, o[l], i) && E.isArray(o[l]) && (o[l] = w0(o[l])),
          !s)
    );
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return (
      E.forEachEntry(e, (r, o) => {
        t(y0(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function S0(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ho = {
  transitional: Hp,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = E.isObject(t);
      if ((i && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)))
        return o ? JSON.stringify(Vp(t)) : t;
      if (
        E.isArrayBuffer(t) ||
        E.isBuffer(t) ||
        E.isStream(t) ||
        E.isFile(t) ||
        E.isBlob(t) ||
        E.isReadableStream(t)
      )
        return t;
      if (E.isArrayBufferView(t)) return t.buffer;
      if (E.isURLSearchParams(t))
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
          return v0(t, this.formSerializer).toString();
        if ((s = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return rl(
            s ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer,
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), S0(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ho.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (E.isResponse(t) || E.isReadableStream(t)) return t;
      if (t && E.isString(t) && ((r && !this.responseType) || o)) {
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
  env: { FormData: Oe.classes.FormData, Blob: Oe.classes.Blob },
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
E.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ho.headers[e] = {};
});
const E0 = E.toObjectSet([
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
  x0 = (e) => {
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
              !(!n || (t[n] && E0[n])) &&
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
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(Zo) : String(e);
}
function k0(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const C0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function $l(e, t, n, r, o) {
  if (E.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!E.isString(t))) {
    if (E.isString(r)) return t.indexOf(r) !== -1;
    if (E.isRegExp(r)) return r.test(t);
  }
}
function R0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function N0(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, l) {
        return this[r].call(this, t, o, i, l);
      },
      configurable: !0,
    });
  });
}
class De {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(s, u, a) {
      const d = Sr(u);
      if (!d) throw new Error("header name must be a non-empty string");
      const f = E.findKey(o, d);
      (!f || o[f] === void 0 || a === !0 || (a === void 0 && o[f] !== !1)) &&
        (o[f || u] = Zo(s));
    }
    const l = (s, u) => E.forEach(s, (a, d) => i(a, d, u));
    if (E.isPlainObject(t) || t instanceof this.constructor) l(t, n);
    else if (E.isString(t) && (t = t.trim()) && !C0(t)) l(x0(t), n);
    else if (E.isHeaders(t)) for (const [s, u] of t.entries()) i(u, s, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Sr(t)), t)) {
      const r = E.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return k0(o);
        if (E.isFunction(n)) return n.call(this, o, r);
        if (E.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Sr(t)), t)) {
      const r = E.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || $l(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(l) {
      if (((l = Sr(l)), l)) {
        const s = E.findKey(r, l);
        s && (!n || $l(r, r[s], s, n)) && (delete r[s], (o = !0));
      }
    }
    return E.isArray(t) ? t.forEach(i) : i(t), o;
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
      E.forEach(this, (o, i) => {
        const l = E.findKey(r, i);
        if (l) {
          (n[l] = Zo(o)), delete n[i];
          return;
        }
        const s = t ? R0(i) : String(i).trim();
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
      E.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && E.isArray(r) ? r.join(", ") : r);
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
      r[s] || (N0(o, l), (r[s] = !0));
    }
    return E.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
De.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
E.reduceDescriptors(De.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
E.freezeMethods(De);
function Hl(e, t) {
  const n = this || ho,
    r = t || n,
    o = De.from(r.headers);
  let i = r.data;
  return (
    E.forEach(e, function (s) {
      i = s.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function Wp(e) {
  return !!(e && e.__CANCEL__);
}
function lr(e, t, n) {
  z.call(this, e ?? "canceled", z.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
E.inherits(lr, z, { __CANCEL__: !0 });
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
function T0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function _0(e, t) {
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
        d = r[i];
      l || (l = a), (n[o] = u), (r[o] = a);
      let f = i,
        m = 0;
      for (; f !== o; ) (m += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), a - l < t)) return;
      const y = d && a - d;
      return y ? Math.round((m * 1e3) / y) : void 0;
    }
  );
}
function O0(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    i;
  const l = (a, d = Date.now()) => {
    (n = d), (o = null), i && (clearTimeout(i), (i = null)), e.apply(null, a);
  };
  return [
    (...a) => {
      const d = Date.now(),
        f = d - n;
      f >= r
        ? l(a, d)
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
    const o = _0(50, 250);
    return O0((i) => {
      const l = i.loaded,
        s = i.lengthComputable ? i.total : void 0,
        u = l - r,
        a = o(u),
        d = l <= s;
      r = l;
      const f = {
        loaded: l,
        total: s,
        progress: s ? l / s : void 0,
        bytes: u,
        rate: a || void 0,
        estimated: a && s && d ? (s - l) / a : void 0,
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
      E.asap(() => e(...t)),
  D0 = Oe.hasStandardBrowserEnv
    ? (function () {
        const t =
            Oe.navigator && /(msie|trident)/i.test(Oe.navigator.userAgent),
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
            const s = E.isString(l) ? o(l) : l;
            return s.protocol === r.protocol && s.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  P0 = Oe.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, i) {
          const l = [e + "=" + encodeURIComponent(t)];
          E.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
            E.isString(r) && l.push("path=" + r),
            E.isString(o) && l.push("domain=" + o),
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
function L0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function A0(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Qp(e, t) {
  return e && !L0(t) ? A0(e, t) : t;
}
const $c = (e) => (e instanceof De ? { ...e } : e);
function yn(e, t) {
  t = t || {};
  const n = {};
  function r(a, d, f) {
    return E.isPlainObject(a) && E.isPlainObject(d)
      ? E.merge.call({ caseless: f }, a, d)
      : E.isPlainObject(d)
      ? E.merge({}, d)
      : E.isArray(d)
      ? d.slice()
      : d;
  }
  function o(a, d, f) {
    if (E.isUndefined(d)) {
      if (!E.isUndefined(a)) return r(void 0, a, f);
    } else return r(a, d, f);
  }
  function i(a, d) {
    if (!E.isUndefined(d)) return r(void 0, d);
  }
  function l(a, d) {
    if (E.isUndefined(d)) {
      if (!E.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, d);
  }
  function s(a, d, f) {
    if (f in t) return r(a, d);
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
    headers: (a, d) => o($c(a), $c(d), !0),
  };
  return (
    E.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const f = u[d] || o,
        m = f(e[d], t[d], d);
      (E.isUndefined(m) && f !== s) || (n[d] = m);
    }),
    n
  );
}
const bp = (e) => {
    const t = yn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: i,
      headers: l,
      auth: s,
    } = t;
    (t.headers = l = De.from(l)),
      (t.url = $p(Qp(t.baseURL, t.url), e.params, e.paramsSerializer)),
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
    if (E.isFormData(n)) {
      if (Oe.hasStandardBrowserEnv || Oe.hasStandardBrowserWebWorkerEnv)
        l.setContentType(void 0);
      else if ((u = l.getContentType()) !== !1) {
        const [a, ...d] = u
          ? u
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        l.setContentType([a || "multipart/form-data", ...d].join("; "));
      }
    }
    if (
      Oe.hasStandardBrowserEnv &&
      (r && E.isFunction(r) && (r = r(t)), r || (r !== !1 && D0(t.url)))
    ) {
      const a = o && i && P0.read(i);
      a && l.set(o, a);
    }
    return t;
  },
  z0 = typeof XMLHttpRequest < "u",
  M0 =
    z0 &&
    function (e) {
      return new Promise(function (n, r) {
        const o = bp(e);
        let i = o.data;
        const l = De.from(o.headers).normalize();
        let { responseType: s, onUploadProgress: u, onDownloadProgress: a } = o,
          d,
          f,
          m,
          y,
          v;
        function g() {
          y && y(),
            v && v(),
            o.cancelToken && o.cancelToken.unsubscribe(d),
            o.signal && o.signal.removeEventListener("abort", d);
        }
        let k = new XMLHttpRequest();
        k.open(o.method.toUpperCase(), o.url, !0), (k.timeout = o.timeout);
        function h() {
          if (!k) return;
          const p = De.from(
              "getAllResponseHeaders" in k && k.getAllResponseHeaders(),
            ),
            S = {
              data:
                !s || s === "text" || s === "json"
                  ? k.responseText
                  : k.response,
              status: k.status,
              statusText: k.statusText,
              headers: p,
              config: e,
              request: k,
            };
          Kp(
            function (C) {
              n(C), g();
            },
            function (C) {
              r(C), g();
            },
            S,
          ),
            (k = null);
        }
        "onloadend" in k
          ? (k.onloadend = h)
          : (k.onreadystatechange = function () {
              !k ||
                k.readyState !== 4 ||
                (k.status === 0 &&
                  !(k.responseURL && k.responseURL.indexOf("file:") === 0)) ||
                setTimeout(h);
            }),
          (k.onabort = function () {
            k &&
              (r(new z("Request aborted", z.ECONNABORTED, e, k)), (k = null));
          }),
          (k.onerror = function () {
            r(new z("Network Error", z.ERR_NETWORK, e, k)), (k = null);
          }),
          (k.ontimeout = function () {
            let w = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const S = o.transitional || Hp;
            o.timeoutErrorMessage && (w = o.timeoutErrorMessage),
              r(
                new z(
                  w,
                  S.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED,
                  e,
                  k,
                ),
              ),
              (k = null);
          }),
          i === void 0 && l.setContentType(null),
          "setRequestHeader" in k &&
            E.forEach(l.toJSON(), function (w, S) {
              k.setRequestHeader(S, w);
            }),
          E.isUndefined(o.withCredentials) ||
            (k.withCredentials = !!o.withCredentials),
          s && s !== "json" && (k.responseType = o.responseType),
          a && (([m, v] = Pi(a, !0)), k.addEventListener("progress", m)),
          u &&
            k.upload &&
            (([f, y] = Pi(u)),
            k.upload.addEventListener("progress", f),
            k.upload.addEventListener("loadend", y)),
          (o.cancelToken || o.signal) &&
            ((d = (p) => {
              k &&
                (r(!p || p.type ? new lr(null, e, k) : p),
                k.abort(),
                (k = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(d),
            o.signal &&
              (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
        const c = T0(o.url);
        if (c && Oe.protocols.indexOf(c) === -1) {
          r(new z("Unsupported protocol " + c + ":", z.ERR_BAD_REQUEST, e));
          return;
        }
        k.send(i || null);
      });
    },
  F0 = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        o;
      const i = function (a) {
        if (!o) {
          (o = !0), s();
          const d = a instanceof Error ? a : this.reason;
          r.abort(
            d instanceof z ? d : new lr(d instanceof Error ? d.message : d),
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
      return (u.unsubscribe = () => E.asap(s)), u;
    }
  },
  j0 = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  I0 = async function* (e, t) {
    for await (const n of U0(e)) yield* j0(n, t);
  },
  U0 = async function* (e) {
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
    const o = I0(e, t);
    let i = 0,
      l,
      s = (u) => {
        l || ((l = !0), r && r(u));
      };
    return new ReadableStream(
      {
        async pull(u) {
          try {
            const { done: a, value: d } = await o.next();
            if (a) {
              s(), u.close();
              return;
            }
            let f = d.byteLength;
            if (n) {
              let m = (i += f);
              n(m);
            }
            u.enqueue(new Uint8Array(d));
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
  Xp = ol && typeof ReadableStream == "function",
  B0 =
    ol &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Yp = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  $0 =
    Xp &&
    Yp(() => {
      let e = !1;
      const t = new Request(Oe.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Vc = 64 * 1024,
  Hs = Xp && Yp(() => E.isReadableStream(new Response("").body)),
  Li = { stream: Hs && ((e) => e.body) };
ol &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Li[t] &&
        (Li[t] = E.isFunction(e[t])
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
const H0 = async (e) => {
    if (e == null) return 0;
    if (E.isBlob(e)) return e.size;
    if (E.isSpecCompliantForm(e))
      return (
        await new Request(Oe.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (E.isArrayBufferView(e) || E.isArrayBuffer(e)) return e.byteLength;
    if ((E.isURLSearchParams(e) && (e = e + ""), E.isString(e)))
      return (await B0(e)).byteLength;
  },
  V0 = async (e, t) => {
    const n = E.toFiniteNumber(e.getContentLength());
    return n ?? H0(t);
  },
  W0 =
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
        headers: d,
        withCredentials: f = "same-origin",
        fetchOptions: m,
      } = bp(e);
      a = a ? (a + "").toLowerCase() : "text";
      let y = F0([o, i && i.toAbortSignal()], l),
        v;
      const g =
        y &&
        y.unsubscribe &&
        (() => {
          y.unsubscribe();
        });
      let k;
      try {
        if (
          u &&
          $0 &&
          n !== "get" &&
          n !== "head" &&
          (k = await V0(d, r)) !== 0
        ) {
          let S = new Request(t, { method: "POST", body: r, duplex: "half" }),
            R;
          if (
            (E.isFormData(r) &&
              (R = S.headers.get("content-type")) &&
              d.setContentType(R),
            S.body)
          ) {
            const [C, T] = Uc(k, Pi(Bc(u)));
            r = Hc(S.body, Vc, C, T);
          }
        }
        E.isString(f) || (f = f ? "include" : "omit");
        const h = "credentials" in Request.prototype;
        v = new Request(t, {
          ...m,
          signal: y,
          method: n.toUpperCase(),
          headers: d.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: h ? f : void 0,
        });
        let c = await fetch(v);
        const p = Hs && (a === "stream" || a === "response");
        if (Hs && (s || (p && g))) {
          const S = {};
          ["status", "statusText", "headers"].forEach((P) => {
            S[P] = c[P];
          });
          const R = E.toFiniteNumber(c.headers.get("content-length")),
            [C, T] = (s && Uc(R, Pi(Bc(s), !0))) || [];
          c = new Response(
            Hc(c.body, Vc, C, () => {
              T && T(), g && g();
            }),
            S,
          );
        }
        a = a || "text";
        let w = await Li[E.findKey(Li, a) || "text"](c, e);
        return (
          !p && g && g(),
          await new Promise((S, R) => {
            Kp(S, R, {
              data: w,
              headers: De.from(c.headers),
              status: c.status,
              statusText: c.statusText,
              config: e,
              request: v,
            });
          })
        );
      } catch (h) {
        throw (
          (g && g(),
          h && h.name === "TypeError" && /fetch/i.test(h.message)
            ? Object.assign(new z("Network Error", z.ERR_NETWORK, e, v), {
                cause: h.cause || h,
              })
            : z.from(h, h && h.code, e, v))
        );
      }
    }),
  Vs = { http: i0, xhr: M0, fetch: W0 };
E.forEach(Vs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Wc = (e) => `- ${e}`,
  K0 = (e) => E.isFunction(e) || e === null || e === !1,
  qp = {
    getAdapter: (e) => {
      e = E.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let l;
        if (
          ((r = n),
          !K0(n) && ((r = Vs[(l = String(n)).toLowerCase()]), r === void 0))
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
function Kc(e) {
  return (
    Vl(e),
    (e.headers = De.from(e.headers)),
    (e.data = Hl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    qp
      .getAdapter(e.adapter || ho.adapter)(e)
      .then(
        function (r) {
          return (
            Vl(e),
            (r.data = Hl.call(e, e.transformResponse, r)),
            (r.headers = De.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            Wp(r) ||
              (Vl(e),
              r &&
                r.response &&
                ((r.response.data = Hl.call(
                  e,
                  e.transformResponse,
                  r.response,
                )),
                (r.response.headers = De.from(r.response.headers)))),
            Promise.reject(r)
          );
        },
      )
  );
}
const Jp = "1.7.7",
  Ju = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ju[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const Qc = {};
Ju.transitional = function (t, n, r) {
  function o(i, l) {
    return (
      "[Axios v" +
      Jp +
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
        !Qc[l] &&
        ((Qc[l] = !0),
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
function Q0(e, t, n) {
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
const Ws = { assertOptions: Q0, validators: Ju },
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
        (E.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Ws.assertOptions(
              o,
              { encode: Pt.function, serialize: Pt.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let l = i && E.merge(i.common, i[n.method]);
    i &&
      E.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (v) => {
          delete i[v];
        },
      ),
      (n.headers = De.concat(l, i));
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
    let d,
      f = 0,
      m;
    if (!u) {
      const v = [Kc.bind(this), void 0];
      for (
        v.unshift.apply(v, s),
          v.push.apply(v, a),
          m = v.length,
          d = Promise.resolve(n);
        f < m;

      )
        d = d.then(v[f++], v[f++]);
      return d;
    }
    m = s.length;
    let y = n;
    for (f = 0; f < m; ) {
      const v = s[f++],
        g = s[f++];
      try {
        y = v(y);
      } catch (k) {
        g.call(this, k);
        break;
      }
    }
    try {
      d = Kc.call(this, y);
    } catch (v) {
      return Promise.reject(v);
    }
    for (f = 0, m = a.length; f < m; ) d = d.then(a[f++], a[f++]);
    return d;
  }
  getUri(t) {
    t = yn(this.defaults, t);
    const n = Qp(t.baseURL, t.url);
    return $p(n, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function (t) {
  dn.prototype[t] = function (n, r) {
    return this.request(
      yn(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
E.forEach(["post", "put", "patch"], function (t) {
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
function b0(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function X0(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const Ks = {
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
Object.entries(Ks).forEach(([e, t]) => {
  Ks[t] = e;
});
function Gp(e) {
  const t = new dn(e),
    n = Op(dn.prototype.request, t);
  return (
    E.extend(n, dn.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Gp(yn(e, o));
    }),
    n
  );
}
const J = Gp(ho);
J.Axios = dn;
J.CanceledError = lr;
J.CancelToken = Gu;
J.isCancel = Wp;
J.VERSION = Jp;
J.toFormData = rl;
J.AxiosError = z;
J.Cancel = J.CanceledError;
J.all = function (t) {
  return Promise.all(t);
};
J.spread = b0;
J.isAxiosError = X0;
J.mergeConfig = yn;
J.AxiosHeaders = De;
J.formToJSON = (e) => Vp(E.isHTMLForm(e) ? new FormData(e) : e);
J.getAdapter = qp.getAdapter;
J.HttpStatusCode = Ks;
J.default = J;
function Y0() {
  const [e, t] = x.useState([]),
    [n, r] = x.useState([]),
    [o, i] = x.useState(null),
    [l, s] = x.useState(null),
    [u, a] = x.useState(null),
    [d, f] = x.useState(0),
    [m, y] = x.useState("Craft some items together and see what happens!");
  x.useEffect(() => {
    dallinger
      .get("/api/start", {
        urlParams: window.location.search,
      })
      .then((c) => {
        t(c.elements);
      }),
      dallinger
        .get("/api/n-steps", {
          urlParams: window.location.search,
        })
        .done((c) => {
          a(c.n_steps);
        });
  }, []);
  const v = (c) => {
      const { active: p } = c;
      p.data.current.type === "element"
        ? i(c.active.data.current.element)
        : p.data.current.type === "placed-element" &&
          s(c.active.data.current.element);
    },
    g = (c, p) => {
      if (u !== 0) {
        if ("id" in p) {
          if (c.id === p.id) return;
          r((w) =>
            w
              .filter((S) => S.id !== p.id)
              .map((S) => (S.id === c.id ? { ...S, isLoading: !0 } : S)),
          );
        } else
          r((w) => w.map((S) => (S.id === c.id ? { ...S, isLoading: !0 } : S)));
        dallinger
          .post("/api/combine", {
            item1: c.text,
            item2: p.text,
            urlParams: window.location.search,
          })
          .done((w) => {
            r((S) =>
              S.map((R) =>
                R.id === c.id
                  ? { ...w.element, id: Lc(), x: R.x, y: R.y, isLoading: !1 }
                  : R,
              ),
            ),
              e.every((S) => S.text !== w.element.text) &&
                (y(
                  `You discovered ${w.element.text} with value ${w.element.value}`,
                ),
                f((S) => S + w.element.value),
                t((S) => [...S, w.element])),
              a(u !== null ? u - 1 : null);
          })
          .catch((w) => {
            window.alert(
              "Something when wrong! Failed to combine elements" + w.toString(),
            ),
              r((S) =>
                S.map((R) => (R.id === c.id ? { ...R, isLoading: !1 } : R)),
              );
          });
      }
    },
    k = (c) => {
      const { active: p, over: w } = c;
      if (
        p.data.current.type === "placed-element" &&
        w &&
        w.data.current.type === "sidebar"
      ) {
        const S = p.data.current.element,
          R = n.filter((C) => C.id !== S.id);
        r(R);
      } else if (
        p.data.current.type === "placed-element" &&
        w &&
        w.data.current.type === "placed-element"
      )
        g(w.data.current.element, p.data.current.element);
      else if (p.data.current.type === "placed-element") {
        const S = p.data.current.element,
          R = n.map((C) =>
            C.id === S.id
              ? { ...S, x: S.x + c.delta.x, y: S.y + c.delta.y }
              : C,
          );
        r(R);
      }
      if (
        p.data.current.type === "element" &&
        w &&
        w.data.current.type === "playground"
      ) {
        const S = p.data.current.element,
          R = c.activatorEvent.target;
        let C;
        R.classList.contains("flex")
          ? (C = c.activatorEvent.target.getBoundingClientRect())
          : (C = R.parentElement.getBoundingClientRect());
        const T = document.querySelector("#root");
        let P;
        T ? (P = T.getBoundingClientRect()) : (P = { top: 0, left: 0 });
        const D = { ...S, id: Lc(), x: C.left - P.left, y: C.top - P.top };
        r((F) => [...F, D]);
      } else
        p.data.current.type === "element" &&
          w &&
          w.data.current.type === "placed-element" &&
          g(w.data.current.element, p.data.current.element);
      i(null), s(null);
    },
    h = x.useMemo(() => n.some((c) => c.isLoading), [n]);
  return j.jsxs(Hv, {
    onDragStart: v,
    onDragEnd: k,
    children: [
      j.jsxs("main", {
        className: "flex h-[70vh] flex-col border-2 border-black",
        children: [
          j.jsxs("div", {
            className: "grid grid-cols-12 h-full",
            children: [
              j.jsx(my, {
                setElements: t,
                setPlacedElements: r,
                placedElements: n,
                isLoading: h,
              }),
              j.jsx(hy, { elements: e, isLoading: h }),
            ],
          }),
          j.jsxs("div", {
            className: "absolute text-xl p-2 -z-10",
            children: [
              j.jsxs("div", { children: [u, " actions left"] }),
              j.jsxs("div", { children: ["Total value: ", d] }),
              j.jsx("div", { children: m }),
            ],
          }),
        ],
      }),
      j.jsxs(ly, {
        dropAnimation: null,
        children: [
          o && j.jsx(Di, { element: o }),
          l && j.jsx(Di, { element: l }),
        ],
      }),
    ],
  });
}
lp(document.getElementById("root")).render(
  j.jsx(x.StrictMode, { children: j.jsx(Y0, {}) }),
);
