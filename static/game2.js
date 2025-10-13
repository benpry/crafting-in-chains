(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
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
var k =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Xn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Sc(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Og = { exports: {} },
  Gl = {},
  Ng = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ea = Symbol.for("react.element"),
  Ly = Symbol.for("react.portal"),
  Fy = Symbol.for("react.fragment"),
  Iy = Symbol.for("react.strict_mode"),
  By = Symbol.for("react.profiler"),
  Wy = Symbol.for("react.provider"),
  Vy = Symbol.for("react.context"),
  Hy = Symbol.for("react.forward_ref"),
  Uy = Symbol.for("react.suspense"),
  Gy = Symbol.for("react.memo"),
  Ky = Symbol.for("react.lazy"),
  qf = Symbol.iterator;
function Xy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (qf && e[qf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Eg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Tg = Object.assign,
  Cg = {};
function Wo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cg),
    (this.updater = n || Eg);
}
Wo.prototype.isReactComponent = {};
Wo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Wo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function kg() {}
kg.prototype = Wo.prototype;
function wc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cg),
    (this.updater = n || Eg);
}
var _c = (wc.prototype = new kg());
_c.constructor = wc;
Tg(_c, Wo.prototype);
_c.isPureReactComponent = !0;
var ed = Array.isArray,
  jg = Object.prototype.hasOwnProperty,
  xc = { current: null },
  Pg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rg(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      jg.call(t, r) && !Pg.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: ea,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: xc.current,
  };
}
function Yy(e, t) {
  return {
    $$typeof: ea,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Oc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ea;
}
function Qy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var td = /\/+/g;
function Rs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Qy("" + e.key)
    : t.toString(36);
}
function Ja(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ea:
          case Ly:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + Rs(a, 0) : r),
      ed(o)
        ? ((n = ""),
          e != null && (n = e.replace(td, "$&/") + "/"),
          Ja(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Oc(o) &&
            (o = Yy(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(td, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), ed(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var s = r + Rs(i, l);
      a += Ja(i, t, n, s, o);
    }
  else if (((s = Xy(e)), typeof s == "function"))
    for (e = s.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Rs(i, l++)), (a += Ja(i, t, n, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function xa(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ja(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Zy(e) {
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
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var tt = { current: null },
  qa = { transition: null },
  Jy = {
    ReactCurrentDispatcher: tt,
    ReactCurrentBatchConfig: qa,
    ReactCurrentOwner: xc,
  };
function Dg() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = {
  map: xa,
  forEach: function (e, t, n) {
    xa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      xa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      xa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Oc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
G.Component = Wo;
G.Fragment = Fy;
G.Profiler = By;
G.PureComponent = wc;
G.StrictMode = Iy;
G.Suspense = Uy;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jy;
G.act = Dg;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Tg({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = xc.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      jg.call(t, s) &&
        !Pg.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ea, type: e.type, key: o, ref: i, props: r, _owner: a };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: Vy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Wy, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = Rg;
G.createFactory = function (e) {
  var t = Rg.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: Hy, render: e };
};
G.isValidElement = Oc;
G.lazy = function (e) {
  return { $$typeof: Ky, _payload: { _status: -1, _result: e }, _init: Zy };
};
G.memo = function (e, t) {
  return { $$typeof: Gy, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = qa.transition;
  qa.transition = {};
  try {
    e();
  } finally {
    qa.transition = t;
  }
};
G.unstable_act = Dg;
G.useCallback = function (e, t) {
  return tt.current.useCallback(e, t);
};
G.useContext = function (e) {
  return tt.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return tt.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return tt.current.useEffect(e, t);
};
G.useId = function () {
  return tt.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return tt.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return tt.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return tt.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return tt.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return tt.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return tt.current.useRef(e);
};
G.useState = function (e) {
  return tt.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return tt.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return tt.current.useTransition();
};
G.version = "18.3.1";
Ng.exports = G;
var S = Ng.exports;
const V = Xn(S);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qy = S,
  e0 = Symbol.for("react.element"),
  t0 = Symbol.for("react.fragment"),
  n0 = Object.prototype.hasOwnProperty,
  r0 = qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  o0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function zg(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) n0.call(t, r) && !o0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: e0,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: r0.current,
  };
}
Gl.Fragment = t0;
Gl.jsx = zg;
Gl.jsxs = zg;
Og.exports = Gl;
var ne = Og.exports,
  $g = { exports: {} },
  _t = {},
  Mg = { exports: {} },
  Ag = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, M) {
    var F = j.length;
    j.push(M);
    e: for (; 0 < F; ) {
      var Q = (F - 1) >>> 1,
        K = j[Q];
      if (0 < o(K, M)) (j[Q] = M), (j[F] = K), (F = Q);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var M = j[0],
      F = j.pop();
    if (F !== M) {
      j[0] = F;
      e: for (var Q = 0, K = j.length, U = K >>> 1; Q < U; ) {
        var xe = 2 * (Q + 1) - 1,
          Ye = j[xe],
          Z = xe + 1,
          dt = j[Z];
        if (0 > o(Ye, F))
          Z < K && 0 > o(dt, Ye)
            ? ((j[Q] = dt), (j[Z] = F), (Q = Z))
            : ((j[Q] = Ye), (j[xe] = F), (Q = xe));
        else if (Z < K && 0 > o(dt, F)) (j[Q] = dt), (j[Z] = F), (Q = Z);
        else break e;
      }
    }
    return M;
  }
  function o(j, M) {
    var F = j.sortIndex - M.sortIndex;
    return F !== 0 ? F : j.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var s = [],
    u = [],
    p = 1,
    m = null,
    h = 3,
    y = !1,
    x = !1,
    b = !1,
    O = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(j) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= j)
        r(u), (M.sortIndex = M.expirationTime), t(s, M);
      else break;
      M = n(u);
    }
  }
  function w(j) {
    if (((b = !1), g(j), !x))
      if (n(s) !== null) (x = !0), Ot(N);
      else {
        var M = n(u);
        M !== null && ke(w, M.startTime - j);
      }
  }
  function N(j, M) {
    (x = !1), b && ((b = !1), d(C), (C = -1)), (y = !0);
    var F = h;
    try {
      for (
        g(M), m = n(s);
        m !== null && (!(m.expirationTime > M) || (j && !A()));

      ) {
        var Q = m.callback;
        if (typeof Q == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var K = Q(m.expirationTime <= M);
          (M = e.unstable_now()),
            typeof K == "function" ? (m.callback = K) : m === n(s) && r(s),
            g(M);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var U = !0;
      else {
        var xe = n(u);
        xe !== null && ke(w, xe.startTime - M), (U = !1);
      }
      return U;
    } finally {
      (m = null), (h = F), (y = !1);
    }
  }
  var T = !1,
    E = null,
    C = -1,
    z = 5,
    R = -1;
  function A() {
    return !(e.unstable_now() - R < z);
  }
  function q() {
    if (E !== null) {
      var j = e.unstable_now();
      R = j;
      var M = !0;
      try {
        M = E(!0, j);
      } finally {
        M ? re() : ((T = !1), (E = null));
      }
    } else T = !1;
  }
  var re;
  if (typeof c == "function")
    re = function () {
      c(q);
    };
  else if (typeof MessageChannel < "u") {
    var ie = new MessageChannel(),
      Qt = ie.port2;
    (ie.port1.onmessage = q),
      (re = function () {
        Qt.postMessage(null);
      });
  } else
    re = function () {
      O(q, 0);
    };
  function Ot(j) {
    (E = j), T || ((T = !0), re());
  }
  function ke(j, M) {
    C = O(function () {
      j(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || y || ((x = !0), Ot(N));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (z = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (j) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = h;
      }
      var F = h;
      h = M;
      try {
        return j();
      } finally {
        h = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, M) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var F = h;
      h = j;
      try {
        return M();
      } finally {
        h = F;
      }
    }),
    (e.unstable_scheduleCallback = function (j, M, F) {
      var Q = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? Q + F : Q))
          : (F = Q),
        j)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = F + K),
        (j = {
          id: p++,
          callback: M,
          priorityLevel: j,
          startTime: F,
          expirationTime: K,
          sortIndex: -1,
        }),
        F > Q
          ? ((j.sortIndex = F),
            t(u, j),
            n(s) === null &&
              j === n(u) &&
              (b ? (d(C), (C = -1)) : (b = !0), ke(w, F - Q)))
          : ((j.sortIndex = K), t(s, j), x || y || ((x = !0), Ot(N))),
        j
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (j) {
      var M = h;
      return function () {
        var F = h;
        h = M;
        try {
          return j.apply(this, arguments);
        } finally {
          h = F;
        }
      };
    });
})(Ag);
Mg.exports = Ag;
var i0 = Mg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var a0 = S,
  wt = i0;
function P(e) {
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
var Lg = new Set(),
  Di = {};
function Yr(e, t) {
  Po(e, t), Po(e + "Capture", t);
}
function Po(e, t) {
  for (Di[e] = t, e = 0; e < t.length; e++) Lg.add(t[e]);
}
var Vn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  hu = Object.prototype.hasOwnProperty,
  l0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  nd = {},
  rd = {};
function s0(e) {
  return hu.call(rd, e)
    ? !0
    : hu.call(nd, e)
    ? !1
    : l0.test(e)
    ? (rd[e] = !0)
    : ((nd[e] = !0), !1);
}
function u0(e, t, n, r) {
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
function c0(e, t, n, r) {
  if (t === null || typeof t > "u" || u0(e, t, n, r)) return !0;
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
function nt(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ve[e] = new nt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ve[t] = new nt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ve[e] = new nt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ve[e] = new nt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ve[e] = new nt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ve[e] = new nt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ve[e] = new nt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ve[e] = new nt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ve[e] = new nt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Nc = /[\-:]([a-z])/g;
function Ec(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Nc, Ec);
    Ve[t] = new nt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Nc, Ec);
    Ve[t] = new nt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Nc, Ec);
  Ve[t] = new nt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ve[e] = new nt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ve.xlinkHref = new nt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ve[e] = new nt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Tc(e, t, n, r) {
  var o = Ve.hasOwnProperty(t) ? Ve[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (c0(t, n, o, r) && (n = null),
    r || o === null
      ? s0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Yn = a0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Oa = Symbol.for("react.element"),
  fo = Symbol.for("react.portal"),
  po = Symbol.for("react.fragment"),
  Cc = Symbol.for("react.strict_mode"),
  vu = Symbol.for("react.profiler"),
  Fg = Symbol.for("react.provider"),
  Ig = Symbol.for("react.context"),
  kc = Symbol.for("react.forward_ref"),
  yu = Symbol.for("react.suspense"),
  bu = Symbol.for("react.suspense_list"),
  jc = Symbol.for("react.memo"),
  ar = Symbol.for("react.lazy"),
  Bg = Symbol.for("react.offscreen"),
  od = Symbol.iterator;
function ei(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (od && e[od]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var we = Object.assign,
  Ds;
function hi(e) {
  if (Ds === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ds = (t && t[1]) || "";
    }
  return (
    `
` +
    Ds +
    e
  );
}
var zs = !1;
function $s(e, t) {
  if (!e || zs) return "";
  zs = !0;
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
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          l = i.length - 1;
        1 <= a && 0 <= l && o[a] !== i[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || o[a] !== i[l])) {
                var s =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (zs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? hi(e) : "";
}
function f0(e) {
  switch (e.tag) {
    case 5:
      return hi(e.type);
    case 16:
      return hi("Lazy");
    case 13:
      return hi("Suspense");
    case 19:
      return hi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = $s(e.type, !1)), e;
    case 11:
      return (e = $s(e.type.render, !1)), e;
    case 1:
      return (e = $s(e.type, !0)), e;
    default:
      return "";
  }
}
function Su(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case po:
      return "Fragment";
    case fo:
      return "Portal";
    case vu:
      return "Profiler";
    case Cc:
      return "StrictMode";
    case yu:
      return "Suspense";
    case bu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ig:
        return (e.displayName || "Context") + ".Consumer";
      case Fg:
        return (e._context.displayName || "Context") + ".Provider";
      case kc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case jc:
        return (
          (t = e.displayName || null), t !== null ? t : Su(e.type) || "Memo"
        );
      case ar:
        (t = e._payload), (e = e._init);
        try {
          return Su(e(t));
        } catch {}
    }
  return null;
}
function d0(e) {
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
      return Su(t);
    case 8:
      return t === Cc ? "StrictMode" : "Mode";
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
function _r(e) {
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
function Wg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function p0(e) {
  var t = Wg(e) ? "checked" : "value",
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
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Na(e) {
  e._valueTracker || (e._valueTracker = p0(e));
}
function Vg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Wg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function gl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function wu(e, t) {
  var n = t.checked;
  return we({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function id(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = _r(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Hg(e, t) {
  (t = t.checked), t != null && Tc(e, "checked", t, !1);
}
function _u(e, t) {
  Hg(e, t);
  var n = _r(t.value),
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
    ? xu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && xu(e, t.type, _r(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ad(e, t, n) {
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
function xu(e, t, n) {
  (t !== "number" || gl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vi = Array.isArray;
function Oo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + _r(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ou(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return we({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ld(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (vi(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: _r(n) };
}
function Ug(e, t) {
  var n = _r(t.value),
    r = _r(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function sd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Gg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Nu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Gg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ea,
  Kg = (function (e) {
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
        Ea = Ea || document.createElement("div"),
          Ea.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ea.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function zi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var wi = {
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
  g0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(wi).forEach(function (e) {
  g0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wi[t] = wi[e]);
  });
});
function Xg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (wi.hasOwnProperty(e) && wi[e])
    ? ("" + t).trim()
    : t + "px";
}
function Yg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Xg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var m0 = we(
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
  }
);
function Eu(e, t) {
  if (t) {
    if (m0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function Tu(e, t) {
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
var Cu = null;
function Pc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ku = null,
  No = null,
  Eo = null;
function ud(e) {
  if ((e = ra(e))) {
    if (typeof ku != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = Zl(t)), ku(e.stateNode, e.type, t));
  }
}
function Qg(e) {
  No ? (Eo ? Eo.push(e) : (Eo = [e])) : (No = e);
}
function Zg() {
  if (No) {
    var e = No,
      t = Eo;
    if (((Eo = No = null), ud(e), t)) for (e = 0; e < t.length; e++) ud(t[e]);
  }
}
function Jg(e, t) {
  return e(t);
}
function qg() {}
var Ms = !1;
function em(e, t, n) {
  if (Ms) return e(t, n);
  Ms = !0;
  try {
    return Jg(e, t, n);
  } finally {
    (Ms = !1), (No !== null || Eo !== null) && (qg(), Zg());
  }
}
function $i(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Zl(n);
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
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var ju = !1;
if (Vn)
  try {
    var ti = {};
    Object.defineProperty(ti, "passive", {
      get: function () {
        ju = !0;
      },
    }),
      window.addEventListener("test", ti, ti),
      window.removeEventListener("test", ti, ti);
  } catch {
    ju = !1;
  }
function h0(e, t, n, r, o, i, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (p) {
    this.onError(p);
  }
}
var _i = !1,
  ml = null,
  hl = !1,
  Pu = null,
  v0 = {
    onError: function (e) {
      (_i = !0), (ml = e);
    },
  };
function y0(e, t, n, r, o, i, a, l, s) {
  (_i = !1), (ml = null), h0.apply(v0, arguments);
}
function b0(e, t, n, r, o, i, a, l, s) {
  if ((y0.apply(this, arguments), _i)) {
    if (_i) {
      var u = ml;
      (_i = !1), (ml = null);
    } else throw Error(P(198));
    hl || ((hl = !0), (Pu = u));
  }
}
function Qr(e) {
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
function tm(e) {
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
function cd(e) {
  if (Qr(e) !== e) throw Error(P(188));
}
function S0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Qr(e)), t === null)) throw Error(P(188));
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
        if (i === n) return cd(o), e;
        if (i === r) return cd(o), t;
        i = i.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, l = o.child; l; ) {
        if (l === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function nm(e) {
  return (e = S0(e)), e !== null ? rm(e) : null;
}
function rm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = rm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var om = wt.unstable_scheduleCallback,
  fd = wt.unstable_cancelCallback,
  w0 = wt.unstable_shouldYield,
  _0 = wt.unstable_requestPaint,
  Ce = wt.unstable_now,
  x0 = wt.unstable_getCurrentPriorityLevel,
  Rc = wt.unstable_ImmediatePriority,
  im = wt.unstable_UserBlockingPriority,
  vl = wt.unstable_NormalPriority,
  O0 = wt.unstable_LowPriority,
  am = wt.unstable_IdlePriority,
  Kl = null,
  Tn = null;
function N0(e) {
  if (Tn && typeof Tn.onCommitFiberRoot == "function")
    try {
      Tn.onCommitFiberRoot(Kl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ut = Math.clz32 ? Math.clz32 : C0,
  E0 = Math.log,
  T0 = Math.LN2;
function C0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((E0(e) / T0) | 0)) | 0;
}
var Ta = 64,
  Ca = 4194304;
function yi(e) {
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
function yl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? (r = yi(l)) : ((i &= a), i !== 0 && (r = yi(i)));
  } else (a = n & ~o), a !== 0 ? (r = yi(a)) : i !== 0 && (r = yi(i));
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
      (n = 31 - Ut(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function k0(e, t) {
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
function j0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Ut(i),
      l = 1 << a,
      s = o[a];
    s === -1
      ? (!(l & n) || l & r) && (o[a] = k0(l, t))
      : s <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function Ru(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function lm() {
  var e = Ta;
  return (Ta <<= 1), !(Ta & 4194240) && (Ta = 64), e;
}
function As(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ta(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ut(t)),
    (e[t] = n);
}
function P0(e, t) {
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
    var o = 31 - Ut(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Dc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ut(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var oe = 0;
function sm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var um,
  zc,
  cm,
  fm,
  dm,
  Du = !1,
  ka = [],
  pr = null,
  gr = null,
  mr = null,
  Mi = new Map(),
  Ai = new Map(),
  ur = [],
  R0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function dd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pr = null;
      break;
    case "dragenter":
    case "dragleave":
      gr = null;
      break;
    case "mouseover":
    case "mouseout":
      mr = null;
      break;
    case "pointerover":
    case "pointerout":
      Mi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ai.delete(t.pointerId);
  }
}
function ni(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ra(t)), t !== null && zc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function D0(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (pr = ni(pr, e, t, n, r, o)), !0;
    case "dragenter":
      return (gr = ni(gr, e, t, n, r, o)), !0;
    case "mouseover":
      return (mr = ni(mr, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Mi.set(i, ni(Mi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Ai.set(i, ni(Ai.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function pm(e) {
  var t = Ar(e.target);
  if (t !== null) {
    var n = Qr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = tm(n)), t !== null)) {
          (e.blockedOn = t),
            dm(e.priority, function () {
              cm(n);
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
function el(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = zu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Cu = r), n.target.dispatchEvent(r), (Cu = null);
    } else return (t = ra(n)), t !== null && zc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function pd(e, t, n) {
  el(e) && n.delete(t);
}
function z0() {
  (Du = !1),
    pr !== null && el(pr) && (pr = null),
    gr !== null && el(gr) && (gr = null),
    mr !== null && el(mr) && (mr = null),
    Mi.forEach(pd),
    Ai.forEach(pd);
}
function ri(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Du ||
      ((Du = !0),
      wt.unstable_scheduleCallback(wt.unstable_NormalPriority, z0)));
}
function Li(e) {
  function t(o) {
    return ri(o, e);
  }
  if (0 < ka.length) {
    ri(ka[0], e);
    for (var n = 1; n < ka.length; n++) {
      var r = ka[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pr !== null && ri(pr, e),
      gr !== null && ri(gr, e),
      mr !== null && ri(mr, e),
      Mi.forEach(t),
      Ai.forEach(t),
      n = 0;
    n < ur.length;
    n++
  )
    (r = ur[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ur.length && ((n = ur[0]), n.blockedOn === null); )
    pm(n), n.blockedOn === null && ur.shift();
}
var To = Yn.ReactCurrentBatchConfig,
  bl = !0;
function $0(e, t, n, r) {
  var o = oe,
    i = To.transition;
  To.transition = null;
  try {
    (oe = 1), $c(e, t, n, r);
  } finally {
    (oe = o), (To.transition = i);
  }
}
function M0(e, t, n, r) {
  var o = oe,
    i = To.transition;
  To.transition = null;
  try {
    (oe = 4), $c(e, t, n, r);
  } finally {
    (oe = o), (To.transition = i);
  }
}
function $c(e, t, n, r) {
  if (bl) {
    var o = zu(e, t, n, r);
    if (o === null) Ks(e, t, r, Sl, n), dd(e, r);
    else if (D0(o, e, t, n, r)) r.stopPropagation();
    else if ((dd(e, r), t & 4 && -1 < R0.indexOf(e))) {
      for (; o !== null; ) {
        var i = ra(o);
        if (
          (i !== null && um(i),
          (i = zu(e, t, n, r)),
          i === null && Ks(e, t, r, Sl, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ks(e, t, r, null, n);
  }
}
var Sl = null;
function zu(e, t, n, r) {
  if (((Sl = null), (e = Pc(r)), (e = Ar(e)), e !== null))
    if (((t = Qr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = tm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Sl = e), null;
}
function gm(e) {
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
      switch (x0()) {
        case Rc:
          return 1;
        case im:
          return 4;
        case vl:
        case O0:
          return 16;
        case am:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var fr = null,
  Mc = null,
  tl = null;
function mm() {
  if (tl) return tl;
  var e,
    t = Mc,
    n = t.length,
    r,
    o = "value" in fr ? fr.value : fr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (tl = o.slice(e, 1 < r ? 1 - r : void 0));
}
function nl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ja() {
  return !0;
}
function gd() {
  return !1;
}
function xt(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ja
        : gd),
      (this.isPropagationStopped = gd),
      this
    );
  }
  return (
    we(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ja));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ja));
      },
      persist: function () {},
      isPersistent: ja,
    }),
    t
  );
}
var Vo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ac = xt(Vo),
  na = we({}, Vo, { view: 0, detail: 0 }),
  A0 = xt(na),
  Ls,
  Fs,
  oi,
  Xl = we({}, na, {
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
    getModifierState: Lc,
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
        : (e !== oi &&
            (oi && e.type === "mousemove"
              ? ((Ls = e.screenX - oi.screenX), (Fs = e.screenY - oi.screenY))
              : (Fs = Ls = 0),
            (oi = e)),
          Ls);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Fs;
    },
  }),
  md = xt(Xl),
  L0 = we({}, Xl, { dataTransfer: 0 }),
  F0 = xt(L0),
  I0 = we({}, na, { relatedTarget: 0 }),
  Is = xt(I0),
  B0 = we({}, Vo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  W0 = xt(B0),
  V0 = we({}, Vo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  H0 = xt(V0),
  U0 = we({}, Vo, { data: 0 }),
  hd = xt(U0),
  G0 = {
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
  K0 = {
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
  X0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Y0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = X0[e]) ? !!t[e] : !1;
}
function Lc() {
  return Y0;
}
var Q0 = we({}, na, {
    key: function (e) {
      if (e.key) {
        var t = G0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = nl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? K0[e.keyCode] || "Unidentified"
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
    getModifierState: Lc,
    charCode: function (e) {
      return e.type === "keypress" ? nl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? nl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Z0 = xt(Q0),
  J0 = we({}, Xl, {
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
  vd = xt(J0),
  q0 = we({}, na, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Lc,
  }),
  e1 = xt(q0),
  t1 = we({}, Vo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  n1 = xt(t1),
  r1 = we({}, Xl, {
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
  o1 = xt(r1),
  i1 = [9, 13, 27, 32],
  Fc = Vn && "CompositionEvent" in window,
  xi = null;
Vn && "documentMode" in document && (xi = document.documentMode);
var a1 = Vn && "TextEvent" in window && !xi,
  hm = Vn && (!Fc || (xi && 8 < xi && 11 >= xi)),
  yd = " ",
  bd = !1;
function vm(e, t) {
  switch (e) {
    case "keyup":
      return i1.indexOf(t.keyCode) !== -1;
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
function ym(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var go = !1;
function l1(e, t) {
  switch (e) {
    case "compositionend":
      return ym(t);
    case "keypress":
      return t.which !== 32 ? null : ((bd = !0), yd);
    case "textInput":
      return (e = t.data), e === yd && bd ? null : e;
    default:
      return null;
  }
}
function s1(e, t) {
  if (go)
    return e === "compositionend" || (!Fc && vm(e, t))
      ? ((e = mm()), (tl = Mc = fr = null), (go = !1), e)
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
      return hm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var u1 = {
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
function Sd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!u1[e.type] : t === "textarea";
}
function bm(e, t, n, r) {
  Qg(r),
    (t = wl(t, "onChange")),
    0 < t.length &&
      ((n = new Ac("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Oi = null,
  Fi = null;
function c1(e) {
  jm(e, 0);
}
function Yl(e) {
  var t = vo(e);
  if (Vg(t)) return e;
}
function f1(e, t) {
  if (e === "change") return t;
}
var Sm = !1;
if (Vn) {
  var Bs;
  if (Vn) {
    var Ws = "oninput" in document;
    if (!Ws) {
      var wd = document.createElement("div");
      wd.setAttribute("oninput", "return;"),
        (Ws = typeof wd.oninput == "function");
    }
    Bs = Ws;
  } else Bs = !1;
  Sm = Bs && (!document.documentMode || 9 < document.documentMode);
}
function _d() {
  Oi && (Oi.detachEvent("onpropertychange", wm), (Fi = Oi = null));
}
function wm(e) {
  if (e.propertyName === "value" && Yl(Fi)) {
    var t = [];
    bm(t, Fi, e, Pc(e)), em(c1, t);
  }
}
function d1(e, t, n) {
  e === "focusin"
    ? (_d(), (Oi = t), (Fi = n), Oi.attachEvent("onpropertychange", wm))
    : e === "focusout" && _d();
}
function p1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Yl(Fi);
}
function g1(e, t) {
  if (e === "click") return Yl(t);
}
function m1(e, t) {
  if (e === "input" || e === "change") return Yl(t);
}
function h1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Kt = typeof Object.is == "function" ? Object.is : h1;
function Ii(e, t) {
  if (Kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!hu.call(t, o) || !Kt(e[o], t[o])) return !1;
  }
  return !0;
}
function xd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Od(e, t) {
  var n = xd(e);
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
    n = xd(n);
  }
}
function _m(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? _m(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function xm() {
  for (var e = window, t = gl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = gl(e.document);
  }
  return t;
}
function Ic(e) {
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
function v1(e) {
  var t = xm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _m(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ic(n)) {
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
          (o = Od(n, i));
        var a = Od(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
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
var y1 = Vn && "documentMode" in document && 11 >= document.documentMode,
  mo = null,
  $u = null,
  Ni = null,
  Mu = !1;
function Nd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Mu ||
    mo == null ||
    mo !== gl(r) ||
    ((r = mo),
    "selectionStart" in r && Ic(r)
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
    (Ni && Ii(Ni, r)) ||
      ((Ni = r),
      (r = wl($u, "onSelect")),
      0 < r.length &&
        ((t = new Ac("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = mo))));
}
function Pa(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ho = {
    animationend: Pa("Animation", "AnimationEnd"),
    animationiteration: Pa("Animation", "AnimationIteration"),
    animationstart: Pa("Animation", "AnimationStart"),
    transitionend: Pa("Transition", "TransitionEnd"),
  },
  Vs = {},
  Om = {};
Vn &&
  ((Om = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ho.animationend.animation,
    delete ho.animationiteration.animation,
    delete ho.animationstart.animation),
  "TransitionEvent" in window || delete ho.transitionend.transition);
function Ql(e) {
  if (Vs[e]) return Vs[e];
  if (!ho[e]) return e;
  var t = ho[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Om) return (Vs[e] = t[n]);
  return e;
}
var Nm = Ql("animationend"),
  Em = Ql("animationiteration"),
  Tm = Ql("animationstart"),
  Cm = Ql("transitionend"),
  km = new Map(),
  Ed =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Or(e, t) {
  km.set(e, t), Yr(t, [e]);
}
for (var Hs = 0; Hs < Ed.length; Hs++) {
  var Us = Ed[Hs],
    b1 = Us.toLowerCase(),
    S1 = Us[0].toUpperCase() + Us.slice(1);
  Or(b1, "on" + S1);
}
Or(Nm, "onAnimationEnd");
Or(Em, "onAnimationIteration");
Or(Tm, "onAnimationStart");
Or("dblclick", "onDoubleClick");
Or("focusin", "onFocus");
Or("focusout", "onBlur");
Or(Cm, "onTransitionEnd");
Po("onMouseEnter", ["mouseout", "mouseover"]);
Po("onMouseLeave", ["mouseout", "mouseover"]);
Po("onPointerEnter", ["pointerout", "pointerover"]);
Po("onPointerLeave", ["pointerout", "pointerover"]);
Yr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Yr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Yr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Yr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Yr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var bi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  w1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));
function Td(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), b0(r, t, void 0, e), (e.currentTarget = null);
}
function jm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== i && o.isPropagationStopped())) break e;
          Td(o, l, u), (i = s);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          Td(o, l, u), (i = s);
        }
    }
  }
  if (hl) throw ((e = Pu), (hl = !1), (Pu = null), e);
}
function fe(e, t) {
  var n = t[Bu];
  n === void 0 && (n = t[Bu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Pm(t, e, 2, !1), n.add(r));
}
function Gs(e, t, n) {
  var r = 0;
  t && (r |= 4), Pm(n, e, r, t);
}
var Ra = "_reactListening" + Math.random().toString(36).slice(2);
function Bi(e) {
  if (!e[Ra]) {
    (e[Ra] = !0),
      Lg.forEach(function (n) {
        n !== "selectionchange" && (w1.has(n) || Gs(n, !1, e), Gs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ra] || ((t[Ra] = !0), Gs("selectionchange", !1, t));
  }
}
function Pm(e, t, n, r) {
  switch (gm(t)) {
    case 1:
      var o = $0;
      break;
    case 4:
      o = M0;
      break;
    default:
      o = $c;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ju ||
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
function Ks(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var s = a.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = a.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = Ar(l)), a === null)) return;
          if (((s = a.tag), s === 5 || s === 6)) {
            r = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  em(function () {
    var u = i,
      p = Pc(n),
      m = [];
    e: {
      var h = km.get(e);
      if (h !== void 0) {
        var y = Ac,
          x = e;
        switch (e) {
          case "keypress":
            if (nl(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Z0;
            break;
          case "focusin":
            (x = "focus"), (y = Is);
            break;
          case "focusout":
            (x = "blur"), (y = Is);
            break;
          case "beforeblur":
          case "afterblur":
            y = Is;
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
            y = md;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = F0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = e1;
            break;
          case Nm:
          case Em:
          case Tm:
            y = W0;
            break;
          case Cm:
            y = n1;
            break;
          case "scroll":
            y = A0;
            break;
          case "wheel":
            y = o1;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = H0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = vd;
        }
        var b = (t & 4) !== 0,
          O = !b && e === "scroll",
          d = b ? (h !== null ? h + "Capture" : null) : h;
        b = [];
        for (var c = u, g; c !== null; ) {
          g = c;
          var w = g.stateNode;
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w),
              d !== null && ((w = $i(c, d)), w != null && b.push(Wi(c, w, g)))),
            O)
          )
            break;
          c = c.return;
        }
        0 < b.length &&
          ((h = new y(h, x, null, n, p)), m.push({ event: h, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Cu &&
            (x = n.relatedTarget || n.fromElement) &&
            (Ar(x) || x[Hn]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            p.window === p
              ? p
              : (h = p.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          y
            ? ((x = n.relatedTarget || n.toElement),
              (y = u),
              (x = x ? Ar(x) : null),
              x !== null &&
                ((O = Qr(x)), x !== O || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((y = null), (x = u)),
          y !== x)
        ) {
          if (
            ((b = md),
            (w = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((b = vd),
              (w = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (O = y == null ? h : vo(y)),
            (g = x == null ? h : vo(x)),
            (h = new b(w, c + "leave", y, n, p)),
            (h.target = O),
            (h.relatedTarget = g),
            (w = null),
            Ar(p) === u &&
              ((b = new b(d, c + "enter", x, n, p)),
              (b.target = g),
              (b.relatedTarget = O),
              (w = b)),
            (O = w),
            y && x)
          )
            t: {
              for (b = y, d = x, c = 0, g = b; g; g = oo(g)) c++;
              for (g = 0, w = d; w; w = oo(w)) g++;
              for (; 0 < c - g; ) (b = oo(b)), c--;
              for (; 0 < g - c; ) (d = oo(d)), g--;
              for (; c--; ) {
                if (b === d || (d !== null && b === d.alternate)) break t;
                (b = oo(b)), (d = oo(d));
              }
              b = null;
            }
          else b = null;
          y !== null && Cd(m, h, y, b, !1),
            x !== null && O !== null && Cd(m, O, x, b, !0);
        }
      }
      e: {
        if (
          ((h = u ? vo(u) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var N = f1;
        else if (Sd(h))
          if (Sm) N = m1;
          else {
            N = p1;
            var T = d1;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (N = g1);
        if (N && (N = N(e, u))) {
          bm(m, N, n, p);
          break e;
        }
        T && T(e, h, u),
          e === "focusout" &&
            (T = h._wrapperState) &&
            T.controlled &&
            h.type === "number" &&
            xu(h, "number", h.value);
      }
      switch (((T = u ? vo(u) : window), e)) {
        case "focusin":
          (Sd(T) || T.contentEditable === "true") &&
            ((mo = T), ($u = u), (Ni = null));
          break;
        case "focusout":
          Ni = $u = mo = null;
          break;
        case "mousedown":
          Mu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Mu = !1), Nd(m, n, p);
          break;
        case "selectionchange":
          if (y1) break;
        case "keydown":
        case "keyup":
          Nd(m, n, p);
      }
      var E;
      if (Fc)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        go
          ? vm(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (hm &&
          n.locale !== "ko" &&
          (go || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && go && (E = mm())
            : ((fr = p),
              (Mc = "value" in fr ? fr.value : fr.textContent),
              (go = !0))),
        (T = wl(u, C)),
        0 < T.length &&
          ((C = new hd(C, e, null, n, p)),
          m.push({ event: C, listeners: T }),
          E ? (C.data = E) : ((E = ym(n)), E !== null && (C.data = E)))),
        (E = a1 ? l1(e, n) : s1(e, n)) &&
          ((u = wl(u, "onBeforeInput")),
          0 < u.length &&
            ((p = new hd("onBeforeInput", "beforeinput", null, n, p)),
            m.push({ event: p, listeners: u }),
            (p.data = E)));
    }
    jm(m, t);
  });
}
function Wi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = $i(e, n)),
      i != null && r.unshift(Wi(e, i, o)),
      (i = $i(e, t)),
      i != null && r.push(Wi(e, i, o))),
      (e = e.return);
  }
  return r;
}
function oo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Cd(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((s = $i(n, i)), s != null && a.unshift(Wi(n, s, l)))
        : o || ((s = $i(n, i)), s != null && a.push(Wi(n, s, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var _1 = /\r\n?/g,
  x1 = /\u0000|\uFFFD/g;
function kd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      _1,
      `
`
    )
    .replace(x1, "");
}
function Da(e, t, n) {
  if (((t = kd(t)), kd(e) !== t && n)) throw Error(P(425));
}
function _l() {}
var Au = null,
  Lu = null;
function Fu(e, t) {
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
var Iu = typeof setTimeout == "function" ? setTimeout : void 0,
  O1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  jd = typeof Promise == "function" ? Promise : void 0,
  N1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof jd < "u"
      ? function (e) {
          return jd.resolve(null).then(e).catch(E1);
        }
      : Iu;
function E1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xs(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Li(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Li(t);
}
function hr(e) {
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
function Pd(e) {
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
var Ho = Math.random().toString(36).slice(2),
  rn = "__reactFiber$" + Ho,
  Vi = "__reactProps$" + Ho,
  Hn = "__reactContainer$" + Ho,
  Bu = "__reactEvents$" + Ho,
  T1 = "__reactListeners$" + Ho,
  C1 = "__reactHandles$" + Ho;
function Ar(e) {
  var t = e[rn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Hn] || n[rn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Pd(e); e !== null; ) {
          if ((n = e[rn])) return n;
          e = Pd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ra(e) {
  return (
    (e = e[rn] || e[Hn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function vo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Zl(e) {
  return e[Vi] || null;
}
var Wu = [],
  yo = -1;
function Nr(e) {
  return { current: e };
}
function de(e) {
  0 > yo || ((e.current = Wu[yo]), (Wu[yo] = null), yo--);
}
function ce(e, t) {
  yo++, (Wu[yo] = e.current), (e.current = t);
}
var xr = {},
  Xe = Nr(xr),
  ut = Nr(!1),
  Wr = xr;
function Ro(e, t) {
  var n = e.type.contextTypes;
  if (!n) return xr;
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
function ct(e) {
  return (e = e.childContextTypes), e != null;
}
function xl() {
  de(ut), de(Xe);
}
function Rd(e, t, n) {
  if (Xe.current !== xr) throw Error(P(168));
  ce(Xe, t), ce(ut, n);
}
function Rm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(P(108, d0(e) || "Unknown", o));
  return we({}, n, r);
}
function Ol(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xr),
    (Wr = Xe.current),
    ce(Xe, e),
    ce(ut, ut.current),
    !0
  );
}
function Dd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = Rm(e, t, Wr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      de(ut),
      de(Xe),
      ce(Xe, e))
    : de(ut),
    ce(ut, n);
}
var Ln = null,
  Jl = !1,
  Ys = !1;
function Dm(e) {
  Ln === null ? (Ln = [e]) : Ln.push(e);
}
function k1(e) {
  (Jl = !0), Dm(e);
}
function Er() {
  if (!Ys && Ln !== null) {
    Ys = !0;
    var e = 0,
      t = oe;
    try {
      var n = Ln;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ln = null), (Jl = !1);
    } catch (o) {
      throw (Ln !== null && (Ln = Ln.slice(e + 1)), om(Rc, Er), o);
    } finally {
      (oe = t), (Ys = !1);
    }
  }
  return null;
}
var bo = [],
  So = 0,
  Nl = null,
  El = 0,
  Ct = [],
  kt = 0,
  Vr = null,
  In = 1,
  Bn = "";
function Dr(e, t) {
  (bo[So++] = El), (bo[So++] = Nl), (Nl = e), (El = t);
}
function zm(e, t, n) {
  (Ct[kt++] = In), (Ct[kt++] = Bn), (Ct[kt++] = Vr), (Vr = e);
  var r = In;
  e = Bn;
  var o = 32 - Ut(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Ut(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (In = (1 << (32 - Ut(t) + o)) | (n << o) | r),
      (Bn = i + e);
  } else (In = (1 << i) | (n << o) | r), (Bn = e);
}
function Bc(e) {
  e.return !== null && (Dr(e, 1), zm(e, 1, 0));
}
function Wc(e) {
  for (; e === Nl; )
    (Nl = bo[--So]), (bo[So] = null), (El = bo[--So]), (bo[So] = null);
  for (; e === Vr; )
    (Vr = Ct[--kt]),
      (Ct[kt] = null),
      (Bn = Ct[--kt]),
      (Ct[kt] = null),
      (In = Ct[--kt]),
      (Ct[kt] = null);
}
var St = null,
  bt = null,
  me = !1,
  Vt = null;
function $m(e, t) {
  var n = jt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function zd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (St = e), (bt = hr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (St = e), (bt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Vr !== null ? { id: In, overflow: Bn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = jt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (St = e),
            (bt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Vu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Hu(e) {
  if (me) {
    var t = bt;
    if (t) {
      var n = t;
      if (!zd(e, t)) {
        if (Vu(e)) throw Error(P(418));
        t = hr(n.nextSibling);
        var r = St;
        t && zd(e, t)
          ? $m(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (me = !1), (St = e));
      }
    } else {
      if (Vu(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (me = !1), (St = e);
    }
  }
}
function $d(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  St = e;
}
function za(e) {
  if (e !== St) return !1;
  if (!me) return $d(e), (me = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Fu(e.type, e.memoizedProps))),
    t && (t = bt))
  ) {
    if (Vu(e)) throw (Mm(), Error(P(418)));
    for (; t; ) $m(e, t), (t = hr(t.nextSibling));
  }
  if (($d(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              bt = hr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      bt = null;
    }
  } else bt = St ? hr(e.stateNode.nextSibling) : null;
  return !0;
}
function Mm() {
  for (var e = bt; e; ) e = hr(e.nextSibling);
}
function Do() {
  (bt = St = null), (me = !1);
}
function Vc(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e);
}
var j1 = Yn.ReactCurrentBatchConfig;
function ii(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var l = o.refs;
            a === null ? delete l[i] : (l[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function $a(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Md(e) {
  var t = e._init;
  return t(e._payload);
}
function Am(e) {
  function t(d, c) {
    if (e) {
      var g = d.deletions;
      g === null ? ((d.deletions = [c]), (d.flags |= 16)) : g.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function o(d, c) {
    return (d = Sr(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, c, g) {
    return (
      (d.index = g),
      e
        ? ((g = d.alternate),
          g !== null
            ? ((g = g.index), g < c ? ((d.flags |= 2), c) : g)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function a(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function l(d, c, g, w) {
    return c === null || c.tag !== 6
      ? ((c = nu(g, d.mode, w)), (c.return = d), c)
      : ((c = o(c, g)), (c.return = d), c);
  }
  function s(d, c, g, w) {
    var N = g.type;
    return N === po
      ? p(d, c, g.props.children, w, g.key)
      : c !== null &&
        (c.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === ar &&
            Md(N) === c.type))
      ? ((w = o(c, g.props)), (w.ref = ii(d, c, g)), (w.return = d), w)
      : ((w = ul(g.type, g.key, g.props, null, d.mode, w)),
        (w.ref = ii(d, c, g)),
        (w.return = d),
        w);
  }
  function u(d, c, g, w) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== g.containerInfo ||
      c.stateNode.implementation !== g.implementation
      ? ((c = ru(g, d.mode, w)), (c.return = d), c)
      : ((c = o(c, g.children || [])), (c.return = d), c);
  }
  function p(d, c, g, w, N) {
    return c === null || c.tag !== 7
      ? ((c = Br(g, d.mode, w, N)), (c.return = d), c)
      : ((c = o(c, g)), (c.return = d), c);
  }
  function m(d, c, g) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = nu("" + c, d.mode, g)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Oa:
          return (
            (g = ul(c.type, c.key, c.props, null, d.mode, g)),
            (g.ref = ii(d, null, c)),
            (g.return = d),
            g
          );
        case fo:
          return (c = ru(c, d.mode, g)), (c.return = d), c;
        case ar:
          var w = c._init;
          return m(d, w(c._payload), g);
      }
      if (vi(c) || ei(c))
        return (c = Br(c, d.mode, g, null)), (c.return = d), c;
      $a(d, c);
    }
    return null;
  }
  function h(d, c, g, w) {
    var N = c !== null ? c.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return N !== null ? null : l(d, c, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Oa:
          return g.key === N ? s(d, c, g, w) : null;
        case fo:
          return g.key === N ? u(d, c, g, w) : null;
        case ar:
          return (N = g._init), h(d, c, N(g._payload), w);
      }
      if (vi(g) || ei(g)) return N !== null ? null : p(d, c, g, w, null);
      $a(d, g);
    }
    return null;
  }
  function y(d, c, g, w, N) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (d = d.get(g) || null), l(c, d, "" + w, N);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Oa:
          return (d = d.get(w.key === null ? g : w.key) || null), s(c, d, w, N);
        case fo:
          return (d = d.get(w.key === null ? g : w.key) || null), u(c, d, w, N);
        case ar:
          var T = w._init;
          return y(d, c, g, T(w._payload), N);
      }
      if (vi(w) || ei(w)) return (d = d.get(g) || null), p(c, d, w, N, null);
      $a(c, w);
    }
    return null;
  }
  function x(d, c, g, w) {
    for (
      var N = null, T = null, E = c, C = (c = 0), z = null;
      E !== null && C < g.length;
      C++
    ) {
      E.index > C ? ((z = E), (E = null)) : (z = E.sibling);
      var R = h(d, E, g[C], w);
      if (R === null) {
        E === null && (E = z);
        break;
      }
      e && E && R.alternate === null && t(d, E),
        (c = i(R, c, C)),
        T === null ? (N = R) : (T.sibling = R),
        (T = R),
        (E = z);
    }
    if (C === g.length) return n(d, E), me && Dr(d, C), N;
    if (E === null) {
      for (; C < g.length; C++)
        (E = m(d, g[C], w)),
          E !== null &&
            ((c = i(E, c, C)), T === null ? (N = E) : (T.sibling = E), (T = E));
      return me && Dr(d, C), N;
    }
    for (E = r(d, E); C < g.length; C++)
      (z = y(E, d, C, g[C], w)),
        z !== null &&
          (e && z.alternate !== null && E.delete(z.key === null ? C : z.key),
          (c = i(z, c, C)),
          T === null ? (N = z) : (T.sibling = z),
          (T = z));
    return (
      e &&
        E.forEach(function (A) {
          return t(d, A);
        }),
      me && Dr(d, C),
      N
    );
  }
  function b(d, c, g, w) {
    var N = ei(g);
    if (typeof N != "function") throw Error(P(150));
    if (((g = N.call(g)), g == null)) throw Error(P(151));
    for (
      var T = (N = null), E = c, C = (c = 0), z = null, R = g.next();
      E !== null && !R.done;
      C++, R = g.next()
    ) {
      E.index > C ? ((z = E), (E = null)) : (z = E.sibling);
      var A = h(d, E, R.value, w);
      if (A === null) {
        E === null && (E = z);
        break;
      }
      e && E && A.alternate === null && t(d, E),
        (c = i(A, c, C)),
        T === null ? (N = A) : (T.sibling = A),
        (T = A),
        (E = z);
    }
    if (R.done) return n(d, E), me && Dr(d, C), N;
    if (E === null) {
      for (; !R.done; C++, R = g.next())
        (R = m(d, R.value, w)),
          R !== null &&
            ((c = i(R, c, C)), T === null ? (N = R) : (T.sibling = R), (T = R));
      return me && Dr(d, C), N;
    }
    for (E = r(d, E); !R.done; C++, R = g.next())
      (R = y(E, d, C, R.value, w)),
        R !== null &&
          (e && R.alternate !== null && E.delete(R.key === null ? C : R.key),
          (c = i(R, c, C)),
          T === null ? (N = R) : (T.sibling = R),
          (T = R));
    return (
      e &&
        E.forEach(function (q) {
          return t(d, q);
        }),
      me && Dr(d, C),
      N
    );
  }
  function O(d, c, g, w) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === po &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Oa:
          e: {
            for (var N = g.key, T = c; T !== null; ) {
              if (T.key === N) {
                if (((N = g.type), N === po)) {
                  if (T.tag === 7) {
                    n(d, T.sibling),
                      (c = o(T, g.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  T.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === ar &&
                    Md(N) === T.type)
                ) {
                  n(d, T.sibling),
                    (c = o(T, g.props)),
                    (c.ref = ii(d, T, g)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, T);
                break;
              } else t(d, T);
              T = T.sibling;
            }
            g.type === po
              ? ((c = Br(g.props.children, d.mode, w, g.key)),
                (c.return = d),
                (d = c))
              : ((w = ul(g.type, g.key, g.props, null, d.mode, w)),
                (w.ref = ii(d, c, g)),
                (w.return = d),
                (d = w));
          }
          return a(d);
        case fo:
          e: {
            for (T = g.key; c !== null; ) {
              if (c.key === T)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === g.containerInfo &&
                  c.stateNode.implementation === g.implementation
                ) {
                  n(d, c.sibling),
                    (c = o(c, g.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = ru(g, d.mode, w)), (c.return = d), (d = c);
          }
          return a(d);
        case ar:
          return (T = g._init), O(d, c, T(g._payload), w);
      }
      if (vi(g)) return x(d, c, g, w);
      if (ei(g)) return b(d, c, g, w);
      $a(d, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = o(c, g)), (c.return = d), (d = c))
          : (n(d, c), (c = nu(g, d.mode, w)), (c.return = d), (d = c)),
        a(d))
      : n(d, c);
  }
  return O;
}
var zo = Am(!0),
  Lm = Am(!1),
  Tl = Nr(null),
  Cl = null,
  wo = null,
  Hc = null;
function Uc() {
  Hc = wo = Cl = null;
}
function Gc(e) {
  var t = Tl.current;
  de(Tl), (e._currentValue = t);
}
function Uu(e, t, n) {
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
function Co(e, t) {
  (Cl = e),
    (Hc = wo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (st = !0), (e.firstContext = null));
}
function Rt(e) {
  var t = e._currentValue;
  if (Hc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), wo === null)) {
      if (Cl === null) throw Error(P(308));
      (wo = e), (Cl.dependencies = { lanes: 0, firstContext: e });
    } else wo = wo.next = e;
  return t;
}
var Lr = null;
function Kc(e) {
  Lr === null ? (Lr = [e]) : Lr.push(e);
}
function Fm(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Kc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Un(e, r)
  );
}
function Un(e, t) {
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
var lr = !1;
function Xc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Im(e, t) {
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
function Wn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function vr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Un(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Kc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Un(e, n)
  );
}
function rl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Dc(e, n);
  }
}
function Ad(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
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
function kl(e, t, n, r) {
  var o = e.updateQueue;
  lr = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), a === null ? (i = u) : (a.next = u), (a = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (l = p.lastBaseUpdate),
      l !== a &&
        (l === null ? (p.firstBaseUpdate = u) : (l.next = u),
        (p.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = o.baseState;
    (a = 0), (p = u = s = null), (l = i);
    do {
      var h = l.lane,
        y = l.eventTime;
      if ((r & h) === h) {
        p !== null &&
          (p = p.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var x = e,
            b = l;
          switch (((h = t), (y = n), b.tag)) {
            case 1:
              if (((x = b.payload), typeof x == "function")) {
                m = x.call(y, m, h);
                break e;
              }
              m = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = b.payload),
                (h = typeof x == "function" ? x.call(y, m, h) : x),
                h == null)
              )
                break e;
              m = we({}, m, h);
              break e;
            case 2:
              lr = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [l]) : h.push(l));
      } else
        (y = {
          eventTime: y,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          p === null ? ((u = p = y), (s = m)) : (p = p.next = y),
          (a |= h);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (s = m),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = p),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Ur |= a), (e.lanes = a), (e.memoizedState = m);
  }
}
function Ld(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(P(191, o));
        o.call(r);
      }
    }
}
var oa = {},
  Cn = Nr(oa),
  Hi = Nr(oa),
  Ui = Nr(oa);
function Fr(e) {
  if (e === oa) throw Error(P(174));
  return e;
}
function Yc(e, t) {
  switch ((ce(Ui, t), ce(Hi, e), ce(Cn, oa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Nu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Nu(t, e));
  }
  de(Cn), ce(Cn, t);
}
function $o() {
  de(Cn), de(Hi), de(Ui);
}
function Bm(e) {
  Fr(Ui.current);
  var t = Fr(Cn.current),
    n = Nu(t, e.type);
  t !== n && (ce(Hi, e), ce(Cn, n));
}
function Qc(e) {
  Hi.current === e && (de(Cn), de(Hi));
}
var be = Nr(0);
function jl(e) {
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
var Qs = [];
function Zc() {
  for (var e = 0; e < Qs.length; e++)
    Qs[e]._workInProgressVersionPrimary = null;
  Qs.length = 0;
}
var ol = Yn.ReactCurrentDispatcher,
  Zs = Yn.ReactCurrentBatchConfig,
  Hr = 0,
  Se = null,
  Pe = null,
  Me = null,
  Pl = !1,
  Ei = !1,
  Gi = 0,
  P1 = 0;
function He() {
  throw Error(P(321));
}
function Jc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Kt(e[n], t[n])) return !1;
  return !0;
}
function qc(e, t, n, r, o, i) {
  if (
    ((Hr = i),
    (Se = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ol.current = e === null || e.memoizedState === null ? $1 : M1),
    (e = n(r, o)),
    Ei)
  ) {
    i = 0;
    do {
      if (((Ei = !1), (Gi = 0), 25 <= i)) throw Error(P(301));
      (i += 1),
        (Me = Pe = null),
        (t.updateQueue = null),
        (ol.current = A1),
        (e = n(r, o));
    } while (Ei);
  }
  if (
    ((ol.current = Rl),
    (t = Pe !== null && Pe.next !== null),
    (Hr = 0),
    (Me = Pe = Se = null),
    (Pl = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function ef() {
  var e = Gi !== 0;
  return (Gi = 0), e;
}
function tn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Me === null ? (Se.memoizedState = Me = e) : (Me = Me.next = e), Me;
}
function Dt() {
  if (Pe === null) {
    var e = Se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Pe.next;
  var t = Me === null ? Se.memoizedState : Me.next;
  if (t !== null) (Me = t), (Pe = e);
  else {
    if (e === null) throw Error(P(310));
    (Pe = e),
      (e = {
        memoizedState: Pe.memoizedState,
        baseState: Pe.baseState,
        baseQueue: Pe.baseQueue,
        queue: Pe.queue,
        next: null,
      }),
      Me === null ? (Se.memoizedState = Me = e) : (Me = Me.next = e);
  }
  return Me;
}
function Ki(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Js(e) {
  var t = Dt(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = Pe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (a = null),
      s = null,
      u = i;
    do {
      var p = u.lane;
      if ((Hr & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var m = {
          lane: p,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = m), (a = r)) : (s = s.next = m),
          (Se.lanes |= p),
          (Ur |= p);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (a = r) : (s.next = l),
      Kt(r, t.memoizedState) || (st = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Se.lanes |= i), (Ur |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function qs(e) {
  var t = Dt(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    Kt(i, t.memoizedState) || (st = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Wm() {}
function Vm(e, t) {
  var n = Se,
    r = Dt(),
    o = t(),
    i = !Kt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (st = !0)),
    (r = r.queue),
    tf(Gm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Me !== null && Me.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xi(9, Um.bind(null, n, r, o, t), void 0, null),
      Le === null)
    )
      throw Error(P(349));
    Hr & 30 || Hm(n, t, o);
  }
  return o;
}
function Hm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Se.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Um(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Km(t) && Xm(e);
}
function Gm(e, t, n) {
  return n(function () {
    Km(t) && Xm(e);
  });
}
function Km(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Kt(e, n);
  } catch {
    return !0;
  }
}
function Xm(e) {
  var t = Un(e, 1);
  t !== null && Gt(t, e, 1, -1);
}
function Fd(e) {
  var t = tn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ki,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = z1.bind(null, Se, e)),
    [t.memoizedState, e]
  );
}
function Xi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Se.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ym() {
  return Dt().memoizedState;
}
function il(e, t, n, r) {
  var o = tn();
  (Se.flags |= e),
    (o.memoizedState = Xi(1 | t, n, void 0, r === void 0 ? null : r));
}
function ql(e, t, n, r) {
  var o = Dt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Pe !== null) {
    var a = Pe.memoizedState;
    if (((i = a.destroy), r !== null && Jc(r, a.deps))) {
      o.memoizedState = Xi(t, n, i, r);
      return;
    }
  }
  (Se.flags |= e), (o.memoizedState = Xi(1 | t, n, i, r));
}
function Id(e, t) {
  return il(8390656, 8, e, t);
}
function tf(e, t) {
  return ql(2048, 8, e, t);
}
function Qm(e, t) {
  return ql(4, 2, e, t);
}
function Zm(e, t) {
  return ql(4, 4, e, t);
}
function Jm(e, t) {
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
function qm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ql(4, 4, Jm.bind(null, t, e), n)
  );
}
function nf() {}
function eh(e, t) {
  var n = Dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function th(e, t) {
  var n = Dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function nh(e, t, n) {
  return Hr & 21
    ? (Kt(n, t) || ((n = lm()), (Se.lanes |= n), (Ur |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (st = !0)), (e.memoizedState = n));
}
function R1(e, t) {
  var n = oe;
  (oe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Zs.transition;
  Zs.transition = {};
  try {
    e(!1), t();
  } finally {
    (oe = n), (Zs.transition = r);
  }
}
function rh() {
  return Dt().memoizedState;
}
function D1(e, t, n) {
  var r = br(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    oh(e))
  )
    ih(t, n);
  else if (((n = Fm(e, t, n, r)), n !== null)) {
    var o = et();
    Gt(n, e, r, o), ah(n, t, r);
  }
}
function z1(e, t, n) {
  var r = br(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (oh(e)) ih(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Kt(l, a))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), Kc(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Fm(e, t, o, r)),
      n !== null && ((o = et()), Gt(n, e, r, o), ah(n, t, r));
  }
}
function oh(e) {
  var t = e.alternate;
  return e === Se || (t !== null && t === Se);
}
function ih(e, t) {
  Ei = Pl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ah(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Dc(e, n);
  }
}
var Rl = {
    readContext: Rt,
    useCallback: He,
    useContext: He,
    useEffect: He,
    useImperativeHandle: He,
    useInsertionEffect: He,
    useLayoutEffect: He,
    useMemo: He,
    useReducer: He,
    useRef: He,
    useState: He,
    useDebugValue: He,
    useDeferredValue: He,
    useTransition: He,
    useMutableSource: He,
    useSyncExternalStore: He,
    useId: He,
    unstable_isNewReconciler: !1,
  },
  $1 = {
    readContext: Rt,
    useCallback: function (e, t) {
      return (tn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Rt,
    useEffect: Id,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        il(4194308, 4, Jm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return il(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return il(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = tn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = tn();
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
        (e = e.dispatch = D1.bind(null, Se, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = tn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Fd,
    useDebugValue: nf,
    useDeferredValue: function (e) {
      return (tn().memoizedState = e);
    },
    useTransition: function () {
      var e = Fd(!1),
        t = e[0];
      return (e = R1.bind(null, e[1])), (tn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Se,
        o = tn();
      if (me) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), Le === null)) throw Error(P(349));
        Hr & 30 || Hm(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Id(Gm.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Xi(9, Um.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = tn(),
        t = Le.identifierPrefix;
      if (me) {
        var n = Bn,
          r = In;
        (n = (r & ~(1 << (32 - Ut(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Gi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = P1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  M1 = {
    readContext: Rt,
    useCallback: eh,
    useContext: Rt,
    useEffect: tf,
    useImperativeHandle: qm,
    useInsertionEffect: Qm,
    useLayoutEffect: Zm,
    useMemo: th,
    useReducer: Js,
    useRef: Ym,
    useState: function () {
      return Js(Ki);
    },
    useDebugValue: nf,
    useDeferredValue: function (e) {
      var t = Dt();
      return nh(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = Js(Ki)[0],
        t = Dt().memoizedState;
      return [e, t];
    },
    useMutableSource: Wm,
    useSyncExternalStore: Vm,
    useId: rh,
    unstable_isNewReconciler: !1,
  },
  A1 = {
    readContext: Rt,
    useCallback: eh,
    useContext: Rt,
    useEffect: tf,
    useImperativeHandle: qm,
    useInsertionEffect: Qm,
    useLayoutEffect: Zm,
    useMemo: th,
    useReducer: qs,
    useRef: Ym,
    useState: function () {
      return qs(Ki);
    },
    useDebugValue: nf,
    useDeferredValue: function (e) {
      var t = Dt();
      return Pe === null ? (t.memoizedState = e) : nh(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = qs(Ki)[0],
        t = Dt().memoizedState;
      return [e, t];
    },
    useMutableSource: Wm,
    useSyncExternalStore: Vm,
    useId: rh,
    unstable_isNewReconciler: !1,
  };
function Bt(e, t) {
  if (e && e.defaultProps) {
    (t = we({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Gu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : we({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var es = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = et(),
      o = br(e),
      i = Wn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = vr(e, i, o)),
      t !== null && (Gt(t, e, o, r), rl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = et(),
      o = br(e),
      i = Wn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = vr(e, i, o)),
      t !== null && (Gt(t, e, o, r), rl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = et(),
      r = br(e),
      o = Wn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = vr(e, o, r)),
      t !== null && (Gt(t, e, r, n), rl(t, e, r));
  },
};
function Bd(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ii(n, r) || !Ii(o, i)
      : !0
  );
}
function lh(e, t, n) {
  var r = !1,
    o = xr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Rt(i))
      : ((o = ct(t) ? Wr : Xe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Ro(e, o) : xr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = es),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Wd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && es.enqueueReplaceState(t, t.state, null);
}
function Ku(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Xc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Rt(i))
    : ((i = ct(t) ? Wr : Xe.current), (o.context = Ro(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Gu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && es.enqueueReplaceState(o, o.state, null),
      kl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Mo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += f0(r)), (r = r.return);
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
function eu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var L1 = typeof WeakMap == "function" ? WeakMap : Map;
function sh(e, t, n) {
  (n = Wn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      zl || ((zl = !0), (oc = r)), Xu(e, t);
    }),
    n
  );
}
function uh(e, t, n) {
  (n = Wn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Xu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Xu(e, t),
          typeof r != "function" &&
            (yr === null ? (yr = new Set([this])) : yr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Vd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new L1();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = J1.bind(null, e, t, n)), t.then(e, e));
}
function Hd(e) {
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
function Ud(e, t, n, r, o) {
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
              : ((t = Wn(-1, 1)), (t.tag = 2), vr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var F1 = Yn.ReactCurrentOwner,
  st = !1;
function qe(e, t, n, r) {
  t.child = e === null ? Lm(t, null, n, r) : zo(t, e.child, n, r);
}
function Gd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Co(t, o),
    (r = qc(e, t, n, r, i, o)),
    (n = ef()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Gn(e, t, o))
      : (me && n && Bc(t), (t.flags |= 1), qe(e, t, r, o), t.child)
  );
}
function Kd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ff(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ch(e, t, i, r, o))
      : ((e = ul(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ii), n(a, r) && e.ref === t.ref)
    )
      return Gn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Sr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ch(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ii(i, r) && e.ref === t.ref)
      if (((st = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (st = !0);
      else return (t.lanes = e.lanes), Gn(e, t, o);
  }
  return Yu(e, t, n, r, o);
}
function fh(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ce(xo, yt),
        (yt |= n);
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
          ce(xo, yt),
          (yt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ce(xo, yt),
        (yt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ce(xo, yt),
      (yt |= r);
  return qe(e, t, o, n), t.child;
}
function dh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Yu(e, t, n, r, o) {
  var i = ct(n) ? Wr : Xe.current;
  return (
    (i = Ro(t, i)),
    Co(t, o),
    (n = qc(e, t, n, r, i, o)),
    (r = ef()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Gn(e, t, o))
      : (me && r && Bc(t), (t.flags |= 1), qe(e, t, n, o), t.child)
  );
}
function Xd(e, t, n, r, o) {
  if (ct(n)) {
    var i = !0;
    Ol(t);
  } else i = !1;
  if ((Co(t, o), t.stateNode === null))
    al(e, t), lh(t, n, r), Ku(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var s = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Rt(u))
      : ((u = ct(n) ? Wr : Xe.current), (u = Ro(t, u)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || s !== u) && Wd(t, a, r, u)),
      (lr = !1);
    var h = t.memoizedState;
    (a.state = h),
      kl(t, r, a, o),
      (s = t.memoizedState),
      l !== r || h !== s || ut.current || lr
        ? (typeof p == "function" && (Gu(t, n, p, r), (s = t.memoizedState)),
          (l = lr || Bd(t, n, l, r, h, s, u))
            ? (m ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (a.props = r),
          (a.state = s),
          (a.context = u),
          (r = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Im(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Bt(t.type, l)),
      (a.props = u),
      (m = t.pendingProps),
      (h = a.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Rt(s))
        : ((s = ct(n) ? Wr : Xe.current), (s = Ro(t, s)));
    var y = n.getDerivedStateFromProps;
    (p =
      typeof y == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== m || h !== s) && Wd(t, a, r, s)),
      (lr = !1),
      (h = t.memoizedState),
      (a.state = h),
      kl(t, r, a, o);
    var x = t.memoizedState;
    l !== m || h !== x || ut.current || lr
      ? (typeof y == "function" && (Gu(t, n, y, r), (x = t.memoizedState)),
        (u = lr || Bd(t, n, u, r, h, x, s) || !1)
          ? (p ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, x, s),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, x, s)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (a.props = r),
        (a.state = x),
        (a.context = s),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Qu(e, t, n, r, i, o);
}
function Qu(e, t, n, r, o, i) {
  dh(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && Dd(t, n, !1), Gn(e, t, i);
  (r = t.stateNode), (F1.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = zo(t, e.child, null, i)), (t.child = zo(t, null, l, i)))
      : qe(e, t, l, i),
    (t.memoizedState = r.state),
    o && Dd(t, n, !0),
    t.child
  );
}
function ph(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Rd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Rd(e, t.context, !1),
    Yc(e, t.containerInfo);
}
function Yd(e, t, n, r, o) {
  return Do(), Vc(o), (t.flags |= 256), qe(e, t, n, r), t.child;
}
var Zu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ju(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function gh(e, t, n) {
  var r = t.pendingProps,
    o = be.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ce(be, o & 1),
    e === null)
  )
    return (
      Hu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = rs(a, r, 0, null)),
              (e = Br(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ju(n)),
              (t.memoizedState = Zu),
              e)
            : rf(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return I1(e, t, a, r, l, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (l = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Sr(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Sr(l, i)) : ((i = Br(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Ju(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Zu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Sr(i, { mode: "visible", children: r.children })),
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
function rf(e, t) {
  return (
    (t = rs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ma(e, t, n, r) {
  return (
    r !== null && Vc(r),
    zo(t, e.child, null, n),
    (e = rf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function I1(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = eu(Error(P(422)))), Ma(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = rs({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Br(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && zo(t, e.child, null, a),
        (t.child.memoizedState = Ju(a)),
        (t.memoizedState = Zu),
        i);
  if (!(t.mode & 1)) return Ma(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(P(419))), (r = eu(i, r, void 0)), Ma(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), st || l)) {
    if (((r = Le), r !== null)) {
      switch (a & -a) {
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
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Un(e, o), Gt(r, e, o, -1));
    }
    return cf(), (r = eu(Error(P(421)))), Ma(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = q1.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (bt = hr(o.nextSibling)),
      (St = t),
      (me = !0),
      (Vt = null),
      e !== null &&
        ((Ct[kt++] = In),
        (Ct[kt++] = Bn),
        (Ct[kt++] = Vr),
        (In = e.id),
        (Bn = e.overflow),
        (Vr = t)),
      (t = rf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Qd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Uu(e.return, t, n);
}
function tu(e, t, n, r, o) {
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
function mh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((qe(e, t, r.children, n), (r = be.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Qd(e, n, t);
        else if (e.tag === 19) Qd(e, n, t);
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
  if ((ce(be, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && jl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          tu(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && jl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        tu(t, !0, n, null, i);
        break;
      case "together":
        tu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function al(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Gn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ur |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Sr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Sr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function B1(e, t, n) {
  switch (t.tag) {
    case 3:
      ph(t), Do();
      break;
    case 5:
      Bm(t);
      break;
    case 1:
      ct(t.type) && Ol(t);
      break;
    case 4:
      Yc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ce(Tl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ce(be, be.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? gh(e, t, n)
          : (ce(be, be.current & 1),
            (e = Gn(e, t, n)),
            e !== null ? e.sibling : null);
      ce(be, be.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return mh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ce(be, be.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), fh(e, t, n);
  }
  return Gn(e, t, n);
}
var hh, qu, vh, yh;
hh = function (e, t) {
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
qu = function () {};
vh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Fr(Cn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = wu(e, o)), (r = wu(e, r)), (i = []);
        break;
      case "select":
        (o = we({}, o, { value: void 0 })),
          (r = we({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Ou(e, o)), (r = Ou(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = _l);
    }
    Eu(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Di.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((l = o?.[u]),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in s)
              s.hasOwnProperty(a) &&
                l[a] !== s[a] &&
                (n || (n = {}), (n[a] = s[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (i = i || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Di.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && fe("scroll", e),
                  i || l === s || (i = []))
                : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
yh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ai(e, t) {
  if (!me)
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
function Ue(e) {
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
function W1(e, t, n) {
  var r = t.pendingProps;
  switch ((Wc(t), t.tag)) {
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
      return Ue(t), null;
    case 1:
      return ct(t.type) && xl(), Ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        $o(),
        de(ut),
        de(Xe),
        Zc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (za(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Vt !== null && (lc(Vt), (Vt = null)))),
        qu(e, t),
        Ue(t),
        null
      );
    case 5:
      Qc(t);
      var o = Fr(Ui.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        vh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return Ue(t), null;
        }
        if (((e = Fr(Cn.current)), za(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[rn] = t), (r[Vi] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              fe("cancel", r), fe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              fe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < bi.length; o++) fe(bi[o], r);
              break;
            case "source":
              fe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              fe("error", r), fe("load", r);
              break;
            case "details":
              fe("toggle", r);
              break;
            case "input":
              id(r, i), fe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                fe("invalid", r);
              break;
            case "textarea":
              ld(r, i), fe("invalid", r);
          }
          Eu(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Da(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Da(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Di.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  fe("scroll", r);
            }
          switch (n) {
            case "input":
              Na(r), ad(r, i, !0);
              break;
            case "textarea":
              Na(r), sd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = _l);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Gg(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[rn] = t),
            (e[Vi] = r),
            hh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Tu(n, r)), n)) {
              case "dialog":
                fe("cancel", e), fe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < bi.length; o++) fe(bi[o], e);
                o = r;
                break;
              case "source":
                fe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", e), fe("load", e), (o = r);
                break;
              case "details":
                fe("toggle", e), (o = r);
                break;
              case "input":
                id(e, r), (o = wu(e, r)), fe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = we({}, r, { value: void 0 })),
                  fe("invalid", e);
                break;
              case "textarea":
                ld(e, r), (o = Ou(e, r)), fe("invalid", e);
                break;
              default:
                o = r;
            }
            Eu(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var s = l[i];
                i === "style"
                  ? Yg(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Kg(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && zi(e, s)
                    : typeof s == "number" && zi(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Di.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && fe("scroll", e)
                      : s != null && Tc(e, i, s, a));
              }
            switch (n) {
              case "input":
                Na(e), ad(e, r, !1);
                break;
              case "textarea":
                Na(e), sd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + _r(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Oo(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Oo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = _l);
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
      return Ue(t), null;
    case 6:
      if (e && t.stateNode != null) yh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = Fr(Ui.current)), Fr(Cn.current), za(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[rn] = t),
            (i = r.nodeValue !== n) && ((e = St), e !== null))
          )
            switch (e.tag) {
              case 3:
                Da(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Da(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[rn] = t),
            (t.stateNode = r);
      }
      return Ue(t), null;
    case 13:
      if (
        (de(be),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (me && bt !== null && t.mode & 1 && !(t.flags & 128))
          Mm(), Do(), (t.flags |= 98560), (i = !1);
        else if (((i = za(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(P(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(P(317));
            i[rn] = t;
          } else
            Do(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ue(t), (i = !1);
        } else Vt !== null && (lc(Vt), (Vt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || be.current & 1 ? De === 0 && (De = 3) : cf())),
          t.updateQueue !== null && (t.flags |= 4),
          Ue(t),
          null);
    case 4:
      return (
        $o(), qu(e, t), e === null && Bi(t.stateNode.containerInfo), Ue(t), null
      );
    case 10:
      return Gc(t.type._context), Ue(t), null;
    case 17:
      return ct(t.type) && xl(), Ue(t), null;
    case 19:
      if ((de(be), (i = t.memoizedState), i === null)) return Ue(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) ai(i, !1);
        else {
          if (De !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = jl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    ai(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ce(be, (be.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ce() > Ao &&
            ((t.flags |= 128), (r = !0), ai(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = jl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ai(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !me)
            )
              return Ue(t), null;
          } else
            2 * Ce() - i.renderingStartTime > Ao &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ai(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ce()),
          (t.sibling = null),
          (n = be.current),
          ce(be, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ue(t), null);
    case 22:
    case 23:
      return (
        uf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? yt & 1073741824 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function V1(e, t) {
  switch ((Wc(t), t.tag)) {
    case 1:
      return (
        ct(t.type) && xl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        $o(),
        de(ut),
        de(Xe),
        Zc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Qc(t), null;
    case 13:
      if (
        (de(be), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(P(340));
        Do();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return de(be), null;
    case 4:
      return $o(), null;
    case 10:
      return Gc(t.type._context), null;
    case 22:
    case 23:
      return uf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Aa = !1,
  Ke = !1,
  H1 = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function _o(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Oe(e, t, r);
      }
    else n.current = null;
}
function ec(e, t, n) {
  try {
    n();
  } catch (r) {
    Oe(e, t, r);
  }
}
var Zd = !1;
function U1(e, t) {
  if (((Au = bl), (e = xm()), Ic(e))) {
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
          var a = 0,
            l = -1,
            s = -1,
            u = 0,
            p = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              m !== n || (o !== 0 && m.nodeType !== 3) || (l = a + o),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = a + r),
                m.nodeType === 3 && (a += m.nodeValue.length),
                (y = m.firstChild) !== null;

            )
              (h = m), (m = y);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++u === o && (l = a),
                h === i && ++p === r && (s = a),
                (y = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = y;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Lu = { focusedElem: e, selectionRange: n }, bl = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var b = x.memoizedProps,
                    O = x.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? b : Bt(t.type, b),
                      O
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (w) {
          Oe(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (x = Zd), (Zd = !1), x;
}
function Ti(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && ec(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ts(e, t) {
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
function tc(e) {
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
function bh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[rn], delete t[Vi], delete t[Bu], delete t[T1], delete t[C1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Sh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Jd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Sh(e.return)) return null;
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
function nc(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = _l));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (nc(e, t, n), e = e.sibling; e !== null; ) nc(e, t, n), (e = e.sibling);
}
function rc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (rc(e, t, n), e = e.sibling; e !== null; ) rc(e, t, n), (e = e.sibling);
}
var Be = null,
  Wt = !1;
function nr(e, t, n) {
  for (n = n.child; n !== null; ) wh(e, t, n), (n = n.sibling);
}
function wh(e, t, n) {
  if (Tn && typeof Tn.onCommitFiberUnmount == "function")
    try {
      Tn.onCommitFiberUnmount(Kl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ke || _o(n, t);
    case 6:
      var r = Be,
        o = Wt;
      (Be = null),
        nr(e, t, n),
        (Be = r),
        (Wt = o),
        Be !== null &&
          (Wt
            ? ((e = Be),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Be.removeChild(n.stateNode));
      break;
    case 18:
      Be !== null &&
        (Wt
          ? ((e = Be),
            (n = n.stateNode),
            e.nodeType === 8
              ? Xs(e.parentNode, n)
              : e.nodeType === 1 && Xs(e, n),
            Li(e))
          : Xs(Be, n.stateNode));
      break;
    case 4:
      (r = Be),
        (o = Wt),
        (Be = n.stateNode.containerInfo),
        (Wt = !0),
        nr(e, t, n),
        (Be = r),
        (Wt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ke &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && ec(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      nr(e, t, n);
      break;
    case 1:
      if (
        !Ke &&
        (_o(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Oe(n, t, l);
        }
      nr(e, t, n);
      break;
    case 21:
      nr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ke = (r = Ke) || n.memoizedState !== null), nr(e, t, n), (Ke = r))
        : nr(e, t, n);
      break;
    default:
      nr(e, t, n);
  }
}
function qd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new H1()),
      t.forEach(function (r) {
        var o = eb.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Ft(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Be = l.stateNode), (Wt = !1);
              break e;
            case 3:
              (Be = l.stateNode.containerInfo), (Wt = !0);
              break e;
            case 4:
              (Be = l.stateNode.containerInfo), (Wt = !0);
              break e;
          }
          l = l.return;
        }
        if (Be === null) throw Error(P(160));
        wh(i, a, o), (Be = null), (Wt = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        Oe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) _h(t, e), (t = t.sibling);
}
function _h(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ft(t, e), en(e), r & 4)) {
        try {
          Ti(3, e, e.return), ts(3, e);
        } catch (b) {
          Oe(e, e.return, b);
        }
        try {
          Ti(5, e, e.return);
        } catch (b) {
          Oe(e, e.return, b);
        }
      }
      break;
    case 1:
      Ft(t, e), en(e), r & 512 && n !== null && _o(n, n.return);
      break;
    case 5:
      if (
        (Ft(t, e),
        en(e),
        r & 512 && n !== null && _o(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          zi(o, "");
        } catch (b) {
          Oe(e, e.return, b);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Hg(o, i),
              Tu(l, a);
            var u = Tu(l, i);
            for (a = 0; a < s.length; a += 2) {
              var p = s[a],
                m = s[a + 1];
              p === "style"
                ? Yg(o, m)
                : p === "dangerouslySetInnerHTML"
                ? Kg(o, m)
                : p === "children"
                ? zi(o, m)
                : Tc(o, p, m, u);
            }
            switch (l) {
              case "input":
                _u(o, i);
                break;
              case "textarea":
                Ug(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? Oo(o, !!i.multiple, y, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Oo(o, !!i.multiple, i.defaultValue, !0)
                      : Oo(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Vi] = i;
          } catch (b) {
            Oe(e, e.return, b);
          }
      }
      break;
    case 6:
      if ((Ft(t, e), en(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (b) {
          Oe(e, e.return, b);
        }
      }
      break;
    case 3:
      if (
        (Ft(t, e), en(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Li(t.containerInfo);
        } catch (b) {
          Oe(e, e.return, b);
        }
      break;
    case 4:
      Ft(t, e), en(e);
      break;
    case 13:
      Ft(t, e),
        en(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (lf = Ce())),
        r & 4 && qd(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ke = (u = Ke) || p), Ft(t, e), (Ke = u)) : Ft(t, e),
        en(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !p && e.mode & 1)
        )
          for (D = e, p = e.child; p !== null; ) {
            for (m = D = p; D !== null; ) {
              switch (((h = D), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ti(4, h, h.return);
                  break;
                case 1:
                  _o(h, h.return);
                  var x = h.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (b) {
                      Oe(r, n, b);
                    }
                  }
                  break;
                case 5:
                  _o(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    tp(m);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (D = y)) : tp(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                (o = m.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = m.stateNode),
                      (s = m.memoizedProps.style),
                      (a =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = Xg("display", a)));
              } catch (b) {
                Oe(e, e.return, b);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = u ? "" : m.memoizedProps;
              } catch (b) {
                Oe(e, e.return, b);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            p === m && (p = null), (m = m.return);
          }
          p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Ft(t, e), en(e), r & 4 && qd(e);
      break;
    case 21:
      break;
    default:
      Ft(t, e), en(e);
  }
}
function en(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (zi(o, ""), (r.flags &= -33));
          var i = Jd(e);
          rc(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = Jd(e);
          nc(e, l, a);
          break;
        default:
          throw Error(P(161));
      }
    } catch (s) {
      Oe(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function G1(e, t, n) {
  (D = e), xh(e);
}
function xh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var o = D,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Aa;
      if (!a) {
        var l = o.alternate,
          s = (l !== null && l.memoizedState !== null) || Ke;
        l = Aa;
        var u = Ke;
        if (((Aa = a), (Ke = s) && !u))
          for (D = o; D !== null; )
            (a = D),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? np(o)
                : s !== null
                ? ((s.return = a), (D = s))
                : np(o);
        for (; i !== null; ) (D = i), xh(i), (i = i.sibling);
        (D = o), (Aa = l), (Ke = u);
      }
      ep(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (D = i)) : ep(e);
  }
}
function ep(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ke || ts(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ke)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Bt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Ld(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ld(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                  var p = u.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && Li(m);
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
              throw Error(P(163));
          }
        Ke || (t.flags & 512 && tc(t));
      } catch (h) {
        Oe(t, t.return, h);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function tp(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function np(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ts(4, t);
          } catch (s) {
            Oe(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Oe(t, o, s);
            }
          }
          var i = t.return;
          try {
            tc(t);
          } catch (s) {
            Oe(t, i, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            tc(t);
          } catch (s) {
            Oe(t, a, s);
          }
      }
    } catch (s) {
      Oe(t, t.return, s);
    }
    if (t === e) {
      D = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (D = l);
      break;
    }
    D = t.return;
  }
}
var K1 = Math.ceil,
  Dl = Yn.ReactCurrentDispatcher,
  of = Yn.ReactCurrentOwner,
  Pt = Yn.ReactCurrentBatchConfig,
  J = 0,
  Le = null,
  je = null,
  We = 0,
  yt = 0,
  xo = Nr(0),
  De = 0,
  Yi = null,
  Ur = 0,
  ns = 0,
  af = 0,
  Ci = null,
  at = null,
  lf = 0,
  Ao = 1 / 0,
  An = null,
  zl = !1,
  oc = null,
  yr = null,
  La = !1,
  dr = null,
  $l = 0,
  ki = 0,
  ic = null,
  ll = -1,
  sl = 0;
function et() {
  return J & 6 ? Ce() : ll !== -1 ? ll : (ll = Ce());
}
function br(e) {
  return e.mode & 1
    ? J & 2 && We !== 0
      ? We & -We
      : j1.transition !== null
      ? (sl === 0 && (sl = lm()), sl)
      : ((e = oe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gm(e.type))),
        e)
    : 1;
}
function Gt(e, t, n, r) {
  if (50 < ki) throw ((ki = 0), (ic = null), Error(P(185)));
  ta(e, n, r),
    (!(J & 2) || e !== Le) &&
      (e === Le && (!(J & 2) && (ns |= n), De === 4 && cr(e, We)),
      ft(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((Ao = Ce() + 500), Jl && Er()));
}
function ft(e, t) {
  var n = e.callbackNode;
  j0(e, t);
  var r = yl(e, e === Le ? We : 0);
  if (r === 0)
    n !== null && fd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && fd(n), t === 1))
      e.tag === 0 ? k1(rp.bind(null, e)) : Dm(rp.bind(null, e)),
        N1(function () {
          !(J & 6) && Er();
        }),
        (n = null);
    else {
      switch (sm(r)) {
        case 1:
          n = Rc;
          break;
        case 4:
          n = im;
          break;
        case 16:
          n = vl;
          break;
        case 536870912:
          n = am;
          break;
        default:
          n = vl;
      }
      n = Ph(n, Oh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Oh(e, t) {
  if (((ll = -1), (sl = 0), J & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (ko() && e.callbackNode !== n) return null;
  var r = yl(e, e === Le ? We : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ml(e, r);
  else {
    t = r;
    var o = J;
    J |= 2;
    var i = Eh();
    (Le !== e || We !== t) && ((An = null), (Ao = Ce() + 500), Ir(e, t));
    do
      try {
        Q1();
        break;
      } catch (l) {
        Nh(e, l);
      }
    while (!0);
    Uc(),
      (Dl.current = i),
      (J = o),
      je !== null ? (t = 0) : ((Le = null), (We = 0), (t = De));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ru(e)), o !== 0 && ((r = o), (t = ac(e, o)))), t === 1)
    )
      throw ((n = Yi), Ir(e, 0), cr(e, r), ft(e, Ce()), n);
    if (t === 6) cr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !X1(o) &&
          ((t = Ml(e, r)),
          t === 2 && ((i = Ru(e)), i !== 0 && ((r = i), (t = ac(e, i)))),
          t === 1))
      )
        throw ((n = Yi), Ir(e, 0), cr(e, r), ft(e, Ce()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          zr(e, at, An);
          break;
        case 3:
          if (
            (cr(e, r), (r & 130023424) === r && ((t = lf + 500 - Ce()), 10 < t))
          ) {
            if (yl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              et(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Iu(zr.bind(null, e, at, An), t);
            break;
          }
          zr(e, at, An);
          break;
        case 4:
          if ((cr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Ut(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Ce() - r),
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
                : 1960 * K1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Iu(zr.bind(null, e, at, An), r);
            break;
          }
          zr(e, at, An);
          break;
        case 5:
          zr(e, at, An);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return ft(e, Ce()), e.callbackNode === n ? Oh.bind(null, e) : null;
}
function ac(e, t) {
  var n = Ci;
  return (
    e.current.memoizedState.isDehydrated && (Ir(e, t).flags |= 256),
    (e = Ml(e, t)),
    e !== 2 && ((t = at), (at = n), t !== null && lc(t)),
    e
  );
}
function lc(e) {
  at === null ? (at = e) : at.push.apply(at, e);
}
function X1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Kt(i(), o)) return !1;
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
function cr(e, t) {
  for (
    t &= ~af,
      t &= ~ns,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ut(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function rp(e) {
  if (J & 6) throw Error(P(327));
  ko();
  var t = yl(e, 0);
  if (!(t & 1)) return ft(e, Ce()), null;
  var n = Ml(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ru(e);
    r !== 0 && ((t = r), (n = ac(e, r)));
  }
  if (n === 1) throw ((n = Yi), Ir(e, 0), cr(e, t), ft(e, Ce()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zr(e, at, An),
    ft(e, Ce()),
    null
  );
}
function sf(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((Ao = Ce() + 500), Jl && Er());
  }
}
function Gr(e) {
  dr !== null && dr.tag === 0 && !(J & 6) && ko();
  var t = J;
  J |= 1;
  var n = Pt.transition,
    r = oe;
  try {
    if (((Pt.transition = null), (oe = 1), e)) return e();
  } finally {
    (oe = r), (Pt.transition = n), (J = t), !(J & 6) && Er();
  }
}
function uf() {
  (yt = xo.current), de(xo);
}
function Ir(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), O1(n)), je !== null))
    for (n = je.return; n !== null; ) {
      var r = n;
      switch ((Wc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && xl();
          break;
        case 3:
          $o(), de(ut), de(Xe), Zc();
          break;
        case 5:
          Qc(r);
          break;
        case 4:
          $o();
          break;
        case 13:
          de(be);
          break;
        case 19:
          de(be);
          break;
        case 10:
          Gc(r.type._context);
          break;
        case 22:
        case 23:
          uf();
      }
      n = n.return;
    }
  if (
    ((Le = e),
    (je = e = Sr(e.current, null)),
    (We = yt = t),
    (De = 0),
    (Yi = null),
    (af = ns = Ur = 0),
    (at = Ci = null),
    Lr !== null)
  ) {
    for (t = 0; t < Lr.length; t++)
      if (((n = Lr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    Lr = null;
  }
  return e;
}
function Nh(e, t) {
  do {
    var n = je;
    try {
      if ((Uc(), (ol.current = Rl), Pl)) {
        for (var r = Se.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Pl = !1;
      }
      if (
        ((Hr = 0),
        (Me = Pe = Se = null),
        (Ei = !1),
        (Gi = 0),
        (of.current = null),
        n === null || n.return === null)
      ) {
        (De = 1), (Yi = t), (je = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          l = n,
          s = t;
        if (
          ((t = We),
          (l.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            p = l,
            m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = p.alternate;
            h
              ? ((p.updateQueue = h.updateQueue),
                (p.memoizedState = h.memoizedState),
                (p.lanes = h.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var y = Hd(a);
          if (y !== null) {
            (y.flags &= -257),
              Ud(y, a, l, i, t),
              y.mode & 1 && Vd(i, u, t),
              (t = y),
              (s = u);
            var x = t.updateQueue;
            if (x === null) {
              var b = new Set();
              b.add(s), (t.updateQueue = b);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Vd(i, u, t), cf();
              break e;
            }
            s = Error(P(426));
          }
        } else if (me && l.mode & 1) {
          var O = Hd(a);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256),
              Ud(O, a, l, i, t),
              Vc(Mo(s, l));
            break e;
          }
        }
        (i = s = Mo(s, l)),
          De !== 4 && (De = 2),
          Ci === null ? (Ci = [i]) : Ci.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = sh(i, s, t);
              Ad(i, d);
              break e;
            case 1:
              l = s;
              var c = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (yr === null || !yr.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = uh(i, l, t);
                Ad(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ch(n);
    } catch (N) {
      (t = N), je === n && n !== null && (je = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Eh() {
  var e = Dl.current;
  return (Dl.current = Rl), e === null ? Rl : e;
}
function cf() {
  (De === 0 || De === 3 || De === 2) && (De = 4),
    Le === null || (!(Ur & 268435455) && !(ns & 268435455)) || cr(Le, We);
}
function Ml(e, t) {
  var n = J;
  J |= 2;
  var r = Eh();
  (Le !== e || We !== t) && ((An = null), Ir(e, t));
  do
    try {
      Y1();
      break;
    } catch (o) {
      Nh(e, o);
    }
  while (!0);
  if ((Uc(), (J = n), (Dl.current = r), je !== null)) throw Error(P(261));
  return (Le = null), (We = 0), De;
}
function Y1() {
  for (; je !== null; ) Th(je);
}
function Q1() {
  for (; je !== null && !w0(); ) Th(je);
}
function Th(e) {
  var t = jh(e.alternate, e, yt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ch(e) : (je = t),
    (of.current = null);
}
function Ch(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = V1(n, t)), n !== null)) {
        (n.flags &= 32767), (je = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (De = 6), (je = null);
        return;
      }
    } else if (((n = W1(n, t, yt)), n !== null)) {
      je = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      je = t;
      return;
    }
    je = t = e;
  } while (t !== null);
  De === 0 && (De = 5);
}
function zr(e, t, n) {
  var r = oe,
    o = Pt.transition;
  try {
    (Pt.transition = null), (oe = 1), Z1(e, t, n, r);
  } finally {
    (Pt.transition = o), (oe = r);
  }
  return null;
}
function Z1(e, t, n, r) {
  do ko();
  while (dr !== null);
  if (J & 6) throw Error(P(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (P0(e, i),
    e === Le && ((je = Le = null), (We = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      La ||
      ((La = !0),
      Ph(vl, function () {
        return ko(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Pt.transition), (Pt.transition = null);
    var a = oe;
    oe = 1;
    var l = J;
    (J |= 4),
      (of.current = null),
      U1(e, n),
      _h(n, e),
      v1(Lu),
      (bl = !!Au),
      (Lu = Au = null),
      (e.current = n),
      G1(n),
      _0(),
      (J = l),
      (oe = a),
      (Pt.transition = i);
  } else e.current = n;
  if (
    (La && ((La = !1), (dr = e), ($l = o)),
    (i = e.pendingLanes),
    i === 0 && (yr = null),
    N0(n.stateNode),
    ft(e, Ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (zl) throw ((zl = !1), (e = oc), (oc = null), e);
  return (
    $l & 1 && e.tag !== 0 && ko(),
    (i = e.pendingLanes),
    i & 1 ? (e === ic ? ki++ : ((ki = 0), (ic = e))) : (ki = 0),
    Er(),
    null
  );
}
function ko() {
  if (dr !== null) {
    var e = sm($l),
      t = Pt.transition,
      n = oe;
    try {
      if (((Pt.transition = null), (oe = 16 > e ? 16 : e), dr === null))
        var r = !1;
      else {
        if (((e = dr), (dr = null), ($l = 0), J & 6)) throw Error(P(331));
        var o = J;
        for (J |= 4, D = e.current; D !== null; ) {
          var i = D,
            a = i.child;
          if (D.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (D = u; D !== null; ) {
                  var p = D;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ti(8, p, i);
                  }
                  var m = p.child;
                  if (m !== null) (m.return = p), (D = m);
                  else
                    for (; D !== null; ) {
                      p = D;
                      var h = p.sibling,
                        y = p.return;
                      if ((bh(p), p === u)) {
                        D = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = y), (D = h);
                        break;
                      }
                      D = y;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var b = x.child;
                if (b !== null) {
                  x.child = null;
                  do {
                    var O = b.sibling;
                    (b.sibling = null), (b = O);
                  } while (b !== null);
                }
              }
              D = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (D = a);
          else
            e: for (; D !== null; ) {
              if (((i = D), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ti(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (D = d);
                break e;
              }
              D = i.return;
            }
        }
        var c = e.current;
        for (D = c; D !== null; ) {
          a = D;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) (g.return = a), (D = g);
          else
            e: for (a = c; D !== null; ) {
              if (((l = D), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ts(9, l);
                  }
                } catch (N) {
                  Oe(l, l.return, N);
                }
              if (l === a) {
                D = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (D = w);
                break e;
              }
              D = l.return;
            }
        }
        if (
          ((J = o), Er(), Tn && typeof Tn.onPostCommitFiberRoot == "function")
        )
          try {
            Tn.onPostCommitFiberRoot(Kl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (oe = n), (Pt.transition = t);
    }
  }
  return !1;
}
function op(e, t, n) {
  (t = Mo(n, t)),
    (t = sh(e, t, 1)),
    (e = vr(e, t, 1)),
    (t = et()),
    e !== null && (ta(e, 1, t), ft(e, t));
}
function Oe(e, t, n) {
  if (e.tag === 3) op(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        op(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yr === null || !yr.has(r)))
        ) {
          (e = Mo(n, e)),
            (e = uh(t, e, 1)),
            (t = vr(t, e, 1)),
            (e = et()),
            t !== null && (ta(t, 1, e), ft(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function J1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = et()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Le === e &&
      (We & n) === n &&
      (De === 4 || (De === 3 && (We & 130023424) === We && 500 > Ce() - lf)
        ? Ir(e, 0)
        : (af |= n)),
    ft(e, t);
}
function kh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ca), (Ca <<= 1), !(Ca & 130023424) && (Ca = 4194304))
      : (t = 1));
  var n = et();
  (e = Un(e, t)), e !== null && (ta(e, t, n), ft(e, n));
}
function q1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), kh(e, n);
}
function eb(e, t) {
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
      throw Error(P(314));
  }
  r !== null && r.delete(t), kh(e, n);
}
var jh;
jh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ut.current) st = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (st = !1), B1(e, t, n);
      st = !!(e.flags & 131072);
    }
  else (st = !1), me && t.flags & 1048576 && zm(t, El, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      al(e, t), (e = t.pendingProps);
      var o = Ro(t, Xe.current);
      Co(t, n), (o = qc(null, t, r, e, o, n));
      var i = ef();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ct(r) ? ((i = !0), Ol(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Xc(t),
            (o.updater = es),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ku(t, r, e, n),
            (t = Qu(null, t, r, !0, i, n)))
          : ((t.tag = 0), me && i && Bc(t), qe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (al(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = nb(r)),
          (e = Bt(r, e)),
          o)
        ) {
          case 0:
            t = Yu(null, t, r, e, n);
            break e;
          case 1:
            t = Xd(null, t, r, e, n);
            break e;
          case 11:
            t = Gd(null, t, r, e, n);
            break e;
          case 14:
            t = Kd(null, t, r, Bt(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Bt(r, o)),
        Yu(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Bt(r, o)),
        Xd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((ph(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Im(e, t),
          kl(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Mo(Error(P(423)), t)), (t = Yd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Mo(Error(P(424)), t)), (t = Yd(e, t, r, n, o));
            break e;
          } else
            for (
              bt = hr(t.stateNode.containerInfo.firstChild),
                St = t,
                me = !0,
                Vt = null,
                n = Lm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Do(), r === o)) {
            t = Gn(e, t, n);
            break e;
          }
          qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Bm(t),
        e === null && Hu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Fu(r, o) ? (a = null) : i !== null && Fu(r, i) && (t.flags |= 32),
        dh(e, t),
        qe(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Hu(t), null;
    case 13:
      return gh(e, t, n);
    case 4:
      return (
        Yc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = zo(t, null, r, n)) : qe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Bt(r, o)),
        Gd(e, t, r, o, n)
      );
    case 7:
      return qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          ce(Tl, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (Kt(i.value, a)) {
            if (i.children === o.children && !ut.current) {
              t = Gn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Wn(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var p = u.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Uu(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(P(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  Uu(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        qe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Co(t, n),
        (o = Rt(o)),
        (r = r(o)),
        (t.flags |= 1),
        qe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Bt(r, t.pendingProps)),
        (o = Bt(r.type, o)),
        Kd(e, t, r, o, n)
      );
    case 15:
      return ch(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Bt(r, o)),
        al(e, t),
        (t.tag = 1),
        ct(r) ? ((e = !0), Ol(t)) : (e = !1),
        Co(t, n),
        lh(t, r, o),
        Ku(t, r, o, n),
        Qu(null, t, r, !0, e, n)
      );
    case 19:
      return mh(e, t, n);
    case 22:
      return fh(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function Ph(e, t) {
  return om(e, t);
}
function tb(e, t, n, r) {
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
function jt(e, t, n, r) {
  return new tb(e, t, n, r);
}
function ff(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function nb(e) {
  if (typeof e == "function") return ff(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === kc)) return 11;
    if (e === jc) return 14;
  }
  return 2;
}
function Sr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = jt(e.tag, t, e.key, e.mode)),
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
function ul(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) ff(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case po:
        return Br(n.children, o, i, t);
      case Cc:
        (a = 8), (o |= 8);
        break;
      case vu:
        return (
          (e = jt(12, n, t, o | 2)), (e.elementType = vu), (e.lanes = i), e
        );
      case yu:
        return (e = jt(13, n, t, o)), (e.elementType = yu), (e.lanes = i), e;
      case bu:
        return (e = jt(19, n, t, o)), (e.elementType = bu), (e.lanes = i), e;
      case Bg:
        return rs(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Fg:
              a = 10;
              break e;
            case Ig:
              a = 9;
              break e;
            case kc:
              a = 11;
              break e;
            case jc:
              a = 14;
              break e;
            case ar:
              (a = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = jt(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Br(e, t, n, r) {
  return (e = jt(7, e, r, t)), (e.lanes = n), e;
}
function rs(e, t, n, r) {
  return (
    (e = jt(22, e, r, t)),
    (e.elementType = Bg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function nu(e, t, n) {
  return (e = jt(6, e, null, t)), (e.lanes = n), e;
}
function ru(e, t, n) {
  return (
    (t = jt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function rb(e, t, n, r, o) {
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
    (this.eventTimes = As(0)),
    (this.expirationTimes = As(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = As(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function df(e, t, n, r, o, i, a, l, s) {
  return (
    (e = new rb(e, t, n, l, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = jt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Xc(i),
    e
  );
}
function ob(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: fo,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Rh(e) {
  if (!e) return xr;
  e = e._reactInternals;
  e: {
    if (Qr(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ct(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ct(n)) return Rm(e, n, t);
  }
  return t;
}
function Dh(e, t, n, r, o, i, a, l, s) {
  return (
    (e = df(n, r, !0, e, o, i, a, l, s)),
    (e.context = Rh(null)),
    (n = e.current),
    (r = et()),
    (o = br(n)),
    (i = Wn(r, o)),
    (i.callback = t ?? null),
    vr(n, i, o),
    (e.current.lanes = o),
    ta(e, o, r),
    ft(e, r),
    e
  );
}
function os(e, t, n, r) {
  var o = t.current,
    i = et(),
    a = br(o);
  return (
    (n = Rh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Wn(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = vr(o, t, a)),
    e !== null && (Gt(e, o, a, i), rl(e, o, a)),
    a
  );
}
function Al(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ip(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pf(e, t) {
  ip(e, t), (e = e.alternate) && ip(e, t);
}
function ib() {
  return null;
}
var zh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function gf(e) {
  this._internalRoot = e;
}
is.prototype.render = gf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  os(e, t, null, null);
};
is.prototype.unmount = gf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gr(function () {
      os(null, e, null, null);
    }),
      (t[Hn] = null);
  }
};
function is(e) {
  this._internalRoot = e;
}
is.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = fm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ur.length && t !== 0 && t < ur[n].priority; n++);
    ur.splice(n, 0, e), n === 0 && pm(e);
  }
};
function mf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function as(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ap() {}
function ab(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Al(a);
        i.call(u);
      };
    }
    var a = Dh(t, r, e, 0, null, !1, !1, "", ap);
    return (
      (e._reactRootContainer = a),
      (e[Hn] = a.current),
      Bi(e.nodeType === 8 ? e.parentNode : e),
      Gr(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Al(s);
      l.call(u);
    };
  }
  var s = df(e, 0, !1, null, null, !1, !1, "", ap);
  return (
    (e._reactRootContainer = s),
    (e[Hn] = s.current),
    Bi(e.nodeType === 8 ? e.parentNode : e),
    Gr(function () {
      os(t, s, n, r);
    }),
    s
  );
}
function ls(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var s = Al(a);
        l.call(s);
      };
    }
    os(t, a, e, o);
  } else a = ab(n, t, e, o, r);
  return Al(a);
}
um = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yi(t.pendingLanes);
        n !== 0 &&
          (Dc(t, n | 1), ft(t, Ce()), !(J & 6) && ((Ao = Ce() + 500), Er()));
      }
      break;
    case 13:
      Gr(function () {
        var r = Un(e, 1);
        if (r !== null) {
          var o = et();
          Gt(r, e, 1, o);
        }
      }),
        pf(e, 1);
  }
};
zc = function (e) {
  if (e.tag === 13) {
    var t = Un(e, 134217728);
    if (t !== null) {
      var n = et();
      Gt(t, e, 134217728, n);
    }
    pf(e, 134217728);
  }
};
cm = function (e) {
  if (e.tag === 13) {
    var t = br(e),
      n = Un(e, t);
    if (n !== null) {
      var r = et();
      Gt(n, e, t, r);
    }
    pf(e, t);
  }
};
fm = function () {
  return oe;
};
dm = function (e, t) {
  var n = oe;
  try {
    return (oe = e), t();
  } finally {
    oe = n;
  }
};
ku = function (e, t, n) {
  switch (t) {
    case "input":
      if ((_u(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Zl(r);
            if (!o) throw Error(P(90));
            Vg(r), _u(r, o);
          }
        }
      }
      break;
    case "textarea":
      Ug(e, n);
      break;
    case "select":
      (t = n.value), t != null && Oo(e, !!n.multiple, t, !1);
  }
};
Jg = sf;
qg = Gr;
var lb = { usingClientEntryPoint: !1, Events: [ra, vo, Zl, Qg, Zg, sf] },
  li = {
    findFiberByHostInstance: Ar,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  sb = {
    bundleType: li.bundleType,
    version: li.version,
    rendererPackageName: li.rendererPackageName,
    rendererConfig: li.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Yn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = nm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: li.findFiberByHostInstance || ib,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fa.isDisabled && Fa.supportsFiber)
    try {
      (Kl = Fa.inject(sb)), (Tn = Fa);
    } catch {}
}
_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lb;
_t.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!mf(t)) throw Error(P(200));
  return ob(e, t, null, n);
};
_t.createRoot = function (e, t) {
  if (!mf(e)) throw Error(P(299));
  var n = !1,
    r = "",
    o = zh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = df(e, 1, !1, null, null, n, !1, r, o)),
    (e[Hn] = t.current),
    Bi(e.nodeType === 8 ? e.parentNode : e),
    new gf(t)
  );
};
_t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = nm(t)), (e = e === null ? null : e.stateNode), e;
};
_t.flushSync = function (e) {
  return Gr(e);
};
_t.hydrate = function (e, t, n) {
  if (!as(t)) throw Error(P(200));
  return ls(null, e, t, !0, n);
};
_t.hydrateRoot = function (e, t, n) {
  if (!mf(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = zh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Dh(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[Hn] = t.current),
    Bi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new is(t);
};
_t.render = function (e, t, n) {
  if (!as(t)) throw Error(P(200));
  return ls(null, e, t, !1, n);
};
_t.unmountComponentAtNode = function (e) {
  if (!as(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (Gr(function () {
        ls(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Hn] = null);
        });
      }),
      !0)
    : !1;
};
_t.unstable_batchedUpdates = sf;
_t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!as(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return ls(e, t, n, !1, r);
};
_t.version = "18.3.1-next-f1338f8080-20240426";
function $h() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($h);
    } catch (e) {
      console.error(e);
    }
}
$h(), ($g.exports = _t);
var Fn = $g.exports;
const Ia = Xn(Fn);
var ub,
  lp = Fn;
(ub = lp.createRoot), lp.hydrateRoot;
var hf = {},
  lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.clear = lt.hydrate = lt.entries = lt.set = lt.get = void 0;
let Lo = new Map();
function cb(e, t, n = "") {
  return Lo.get(n + e + t);
}
lt.get = cb;
function fb(e, t, n, r = "") {
  Lo.set(r + e + t, n);
}
lt.set = fb;
function db() {
  return [...Lo];
}
lt.entries = db;
function pb(e) {
  Lo = new Map([...Lo, ...e]);
}
lt.hydrate = pb;
function gb() {
  Lo.clear();
}
lt.clear = gb;
var kn = {},
  vf = {},
  ia = {};
Object.defineProperty(ia, "__esModule", { value: !0 });
const mb = () => !0;
ia.default = mb;
var hb =
  (k && k.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(vf, "__esModule", { value: !0 });
const vb = hb(ia),
  si = typeof window < "u";
function sp(e) {
  return e[e.length - 1];
}
function up(e) {
  if (e.sheet) return e.sheet;
  for (let t = 0; t < document.styleSheets.length; t += 1)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function cp() {
  const e = document.createElement("style");
  return (
    (e.type = "text/css"),
    e.setAttribute("data-ui-box", ""),
    e.append(document.createTextNode("")),
    (document.head || document.querySelector("head")).append(e),
    e
  );
}
class yb {
  constructor(t = {}) {
    (this.tags = []),
      (this.ctr = 0),
      (this.injected = !1),
      (this.isSpeedy = t.speedy === void 0 ? (0, vb.default)() : t.speedy),
      (this.maxLength = t.maxLength || 65e3);
  }
  getSheet() {
    return up(sp(this.tags));
  }
  inject() {
    if (this.injected) throw new Error("StyleSheet has already been injected.");
    si
      ? (this.tags[0] = cp())
      : (this.sheet = {
          cssRules: [],
          insertRule: (t) => {
            this.sheet.cssRules.push({ cssText: t });
          },
        }),
      (this.injected = !0);
  }
  speedy(t) {
    if (this.ctr !== 0)
      throw new Error(
        `StyleSheet cannot change speedy mode after inserting any rule to sheet. Either call speedy(${t}) earlier in your app, or call flush() before speedy(${t})`
      );
    this.isSpeedy = !!t;
  }
  _insert(t, n) {
    t.insertRule(n, t.cssRules.length);
  }
  insert(t) {
    if (si) {
      const n = this.getSheet();
      this.isSpeedy && n != null
        ? this._insert(n, t)
        : sp(this.tags).append(document.createTextNode(t));
    } else this.sheet && this.sheet.insertRule(t, this.sheet.cssRules.length);
    return (
      (this.ctr += 1),
      si && this.ctr % this.maxLength === 0 && this.tags.push(cp()),
      this.ctr - 1
    );
  }
  flush() {
    si
      ? (this.tags.forEach((t) => t.parentNode.removeChild(t)),
        (this.tags = []),
        (this.sheet = null),
        (this.ctr = 0))
      : this.sheet && (this.sheet.cssRules = []),
      (this.injected = !1);
  }
  rules() {
    if (!si) return this.sheet ? this.sheet.cssRules : [];
    const t = [];
    return (
      this.tags.forEach((n) => {
        const r = up(n);
        if (r) {
          const o = Array.from(r.cssRules);
          t.splice(t.length, 0, ...o);
        }
      }),
      t
    );
  }
}
vf.default = yb;
var bb =
  (k && k.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.clear = kn.getAll = kn.add = void 0;
const Sb = bb(vf),
  Qi = new Sb.default({});
Qi.inject();
function wb(e) {
  Qi.insert(e);
}
kn.add = wb;
function _b() {
  return Qi.rules().reduce((e, t) => e + t.cssText, "");
}
kn.getAll = _b;
function xb() {
  Qi.flush(), Qi.inject();
}
kn.clear = xb;
var yf = {},
  Mh = { exports: {} },
  Ob = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Nb = Ob,
  Eb = Nb;
function Ah() {}
function Lh() {}
Lh.resetWarningCache = Ah;
var Tb = function () {
  function e(r, o, i, a, l, s) {
    if (s !== Eb) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Lh,
    resetWarningCache: Ah,
  };
  return (n.PropTypes = n), n;
};
Mh.exports = Tb();
var he = Mh.exports;
const W = Xn(he);
var Zr = {},
  on = {},
  _e = {},
  bf = {};
function sc(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Cb(e, t, n) {
  if (e.hasOwnProperty(t)) {
    for (
      var r = {}, o = e[t], i = sc(t), a = Object.keys(n), l = 0;
      l < a.length;
      l++
    ) {
      var s = a[l];
      if (s === t) for (var u = 0; u < o.length; u++) r[o[u] + i] = n[t];
      r[s] = n[s];
    }
    return r;
  }
  return n;
}
function fp(e, t, n, r, o) {
  for (var i = 0, a = e.length; i < a; ++i) {
    var l = e[i](t, n, r, o);
    if (l) return l;
  }
}
function dp(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function kb(e, t) {
  if (Array.isArray(t)) for (var n = 0, r = t.length; n < r; ++n) dp(e, t[n]);
  else dp(e, t);
}
function jb(e) {
  return e instanceof Object && !Array.isArray(e);
}
function Fh(e) {
  var t = e.prefixMap,
    n = e.plugins;
  return function r(o) {
    for (var i in o) {
      var a = o[i];
      if (jb(a)) o[i] = r(a);
      else if (Array.isArray(a)) {
        for (var l = [], s = 0, u = a.length; s < u; ++s) {
          var p = fp(n, i, a[s], o, t);
          kb(l, p || a[s]);
        }
        l.length > 0 && (o[i] = l);
      } else {
        var m = fp(n, i, a, o, t);
        m && (o[i] = m), (o = Cb(t, i, o));
      }
    }
    return o;
  };
}
var B = ["Webkit"],
  Pb = ["Moz"],
  ou = ["ms"],
  Rb = ["Webkit", "Moz"],
  it = ["Webkit", "ms"],
  Db = ["Webkit", "Moz", "ms"];
const zb = {
  plugins: [],
  prefixMap: {
    appearance: Rb,
    textEmphasisPosition: B,
    textEmphasis: B,
    textEmphasisStyle: B,
    textEmphasisColor: B,
    boxDecorationBreak: B,
    maskImage: B,
    maskMode: B,
    maskRepeat: B,
    maskPosition: B,
    maskClip: B,
    maskOrigin: B,
    maskSize: B,
    maskComposite: B,
    mask: B,
    maskBorderSource: B,
    maskBorderMode: B,
    maskBorderSlice: B,
    maskBorderWidth: B,
    maskBorderOutset: B,
    maskBorderRepeat: B,
    maskBorder: B,
    maskType: B,
    textDecorationStyle: B,
    textDecorationSkip: B,
    textDecorationLine: B,
    textDecorationColor: B,
    userSelect: Db,
    backdropFilter: B,
    fontKerning: B,
    scrollSnapType: it,
    scrollSnapPointsX: it,
    scrollSnapPointsY: it,
    scrollSnapDestination: it,
    scrollSnapCoordinate: it,
    clipPath: B,
    shapeImageThreshold: B,
    shapeImageMargin: B,
    shapeImageOutside: B,
    filter: B,
    hyphens: it,
    flowInto: it,
    flowFrom: it,
    breakBefore: it,
    breakAfter: it,
    breakInside: it,
    regionFragment: it,
    writingMode: it,
    textOrientation: B,
    tabSize: Pb,
    fontFeatureSettings: B,
    columnCount: B,
    columnFill: B,
    columnGap: B,
    columnRule: B,
    columnRuleColor: B,
    columnRuleStyle: B,
    columnRuleWidth: B,
    columns: B,
    columnSpan: B,
    columnWidth: B,
    wrapFlow: ou,
    wrapThrough: ou,
    wrapMargin: ou,
    textSizeAdjust: it,
  },
};
function $b(e, t) {
  if (typeof t == "string" && t === "text") return ["-webkit-text", "text"];
}
var Mb = ["-webkit-", "-moz-", ""],
  Ab = { "zoom-in": !0, "zoom-out": !0, grab: !0, grabbing: !0 };
function Lb(e, t) {
  if (e === "cursor" && Ab.hasOwnProperty(t))
    return Mb.map(function (n) {
      return n + t;
    });
}
var uc = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r);
  var n = /-webkit-|-moz-|-ms-/;
  function r(o) {
    return typeof o == "string" && n.test(o);
  }
  e.exports = t.default;
})(uc, uc.exports);
var Fb = uc.exports;
const aa = Xn(Fb);
var Ib = ["-webkit-", ""];
function Bb(e, t) {
  if (typeof t == "string" && !aa(t) && t.indexOf("cross-fade(") > -1)
    return Ib.map(function (n) {
      return t.replace(/cross-fade\(/g, n + "cross-fade(");
    });
}
var Wb = ["-webkit-", ""];
function Vb(e, t) {
  if (typeof t == "string" && !aa(t) && t.indexOf("filter(") > -1)
    return Wb.map(function (n) {
      return t.replace(/filter\(/g, n + "filter(");
    });
}
var pp = {
  flex: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"],
  "inline-flex": [
    "-webkit-inline-box",
    "-moz-inline-box",
    "-ms-inline-flexbox",
    "-webkit-inline-flex",
    "inline-flex",
  ],
};
function Hb(e, t) {
  if (e === "display" && pp.hasOwnProperty(t)) return pp[t];
}
var Ub = {
    "space-around": "justify",
    "space-between": "justify",
    "flex-start": "start",
    "flex-end": "end",
    "wrap-reverse": "multiple",
    wrap: "multiple",
  },
  gp = {
    alignItems: "WebkitBoxAlign",
    justifyContent: "WebkitBoxPack",
    flexWrap: "WebkitBoxLines",
    flexGrow: "WebkitBoxFlex",
  };
function Gb(e, t, n) {
  e === "flexDirection" &&
    typeof t == "string" &&
    (t.indexOf("column") > -1
      ? (n.WebkitBoxOrient = "vertical")
      : (n.WebkitBoxOrient = "horizontal"),
    t.indexOf("reverse") > -1
      ? (n.WebkitBoxDirection = "reverse")
      : (n.WebkitBoxDirection = "normal")),
    gp.hasOwnProperty(e) && (n[gp[e]] = Ub[t] || t);
}
var Kb = ["-webkit-", "-moz-", ""],
  mp =
    /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;
function Xb(e, t) {
  if (typeof t == "string" && !aa(t) && mp.test(t))
    return Kb.map(function (n) {
      return t.replace(mp, function (r) {
        return n + r;
      });
    });
}
var Ba = (function () {
  function e(t, n) {
    var r = [],
      o = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var l = t[Symbol.iterator](), s;
        !(o = (s = l.next()).done) && (r.push(s.value), !(n && r.length === n));
        o = !0
      );
    } catch (u) {
      (i = !0), (a = u);
    } finally {
      try {
        !o && l.return && l.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
  return function (t, n) {
    if (Array.isArray(t)) return t;
    if (Symbol.iterator in Object(t)) return e(t, n);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
})();
function rr(e) {
  return typeof e == "number" && !isNaN(e);
}
function hp(e) {
  return typeof e == "string" && e.includes("/");
}
var vp = ["center", "end", "start", "stretch"],
  yp = {
    "inline-grid": ["-ms-inline-grid", "inline-grid"],
    grid: ["-ms-grid", "grid"],
  },
  nn = {
    alignSelf: function (t, n) {
      vp.indexOf(t) > -1 && (n.msGridRowAlign = t);
    },
    gridColumn: function (t, n) {
      if (rr(t)) n.msGridColumn = t;
      else if (hp(t)) {
        var r = t.split("/"),
          o = Ba(r, 2),
          i = o[0],
          a = o[1];
        nn.gridColumnStart(+i, n);
        var l = a.split(/ ?span /),
          s = Ba(l, 2),
          u = s[0],
          p = s[1];
        u === "" ? nn.gridColumnEnd(+i + +p, n) : nn.gridColumnEnd(+a, n);
      } else nn.gridColumnStart(t, n);
    },
    gridColumnEnd: function (t, n) {
      var r = n.msGridColumn;
      rr(t) && rr(r) && (n.msGridColumnSpan = t - r);
    },
    gridColumnStart: function (t, n) {
      rr(t) && (n.msGridColumn = t);
    },
    gridRow: function (t, n) {
      if (rr(t)) n.msGridRow = t;
      else if (hp(t)) {
        var r = t.split("/"),
          o = Ba(r, 2),
          i = o[0],
          a = o[1];
        nn.gridRowStart(+i, n);
        var l = a.split(/ ?span /),
          s = Ba(l, 2),
          u = s[0],
          p = s[1];
        u === "" ? nn.gridRowEnd(+i + +p, n) : nn.gridRowEnd(+a, n);
      } else nn.gridRowStart(t, n);
    },
    gridRowEnd: function (t, n) {
      var r = n.msGridRow;
      rr(t) && rr(r) && (n.msGridRowSpan = t - r);
    },
    gridRowStart: function (t, n) {
      rr(t) && (n.msGridRow = t);
    },
    gridTemplateColumns: function (t, n) {
      n.msGridColumns = t;
    },
    gridTemplateRows: function (t, n) {
      n.msGridRows = t;
    },
    justifySelf: function (t, n) {
      vp.indexOf(t) > -1 && (n.msGridColumnAlign = t);
    },
  };
function Yb(e, t, n) {
  if (e === "display" && t in yp) return yp[t];
  if (e in nn) {
    var r = nn[e];
    r(t, n);
  }
}
var Qb = ["-webkit-", ""];
function Zb(e, t) {
  if (typeof t == "string" && !aa(t) && t.indexOf("image-set(") > -1)
    return Qb.map(function (n) {
      return t.replace(/image-set\(/g, n + "image-set(");
    });
}
var bp = {
  marginBlockStart: ["WebkitMarginBefore"],
  marginBlockEnd: ["WebkitMarginAfter"],
  marginInlineStart: ["WebkitMarginStart", "MozMarginStart"],
  marginInlineEnd: ["WebkitMarginEnd", "MozMarginEnd"],
  paddingBlockStart: ["WebkitPaddingBefore"],
  paddingBlockEnd: ["WebkitPaddingAfter"],
  paddingInlineStart: ["WebkitPaddingStart", "MozPaddingStart"],
  paddingInlineEnd: ["WebkitPaddingEnd", "MozPaddingEnd"],
  borderBlockStart: ["WebkitBorderBefore"],
  borderBlockStartColor: ["WebkitBorderBeforeColor"],
  borderBlockStartStyle: ["WebkitBorderBeforeStyle"],
  borderBlockStartWidth: ["WebkitBorderBeforeWidth"],
  borderBlockEnd: ["WebkitBorderAfter"],
  borderBlockEndColor: ["WebkitBorderAfterColor"],
  borderBlockEndStyle: ["WebkitBorderAfterStyle"],
  borderBlockEndWidth: ["WebkitBorderAfterWidth"],
  borderInlineStart: ["WebkitBorderStart", "MozBorderStart"],
  borderInlineStartColor: ["WebkitBorderStartColor", "MozBorderStartColor"],
  borderInlineStartStyle: ["WebkitBorderStartStyle", "MozBorderStartStyle"],
  borderInlineStartWidth: ["WebkitBorderStartWidth", "MozBorderStartWidth"],
  borderInlineEnd: ["WebkitBorderEnd", "MozBorderEnd"],
  borderInlineEndColor: ["WebkitBorderEndColor", "MozBorderEndColor"],
  borderInlineEndStyle: ["WebkitBorderEndStyle", "MozBorderEndStyle"],
  borderInlineEndWidth: ["WebkitBorderEndWidth", "MozBorderEndWidth"],
};
function Jb(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(bp, e))
    for (var r = bp[e], o = 0, i = r.length; o < i; ++o) n[r[o]] = t;
}
function qb(e, t) {
  if (e === "position" && t === "sticky") return ["-webkit-sticky", "sticky"];
}
var eS = ["-webkit-", "-moz-", ""],
  tS = {
    maxHeight: !0,
    maxWidth: !0,
    width: !0,
    height: !0,
    columnWidth: !0,
    minWidth: !0,
    minHeight: !0,
  },
  nS = {
    "min-content": !0,
    "max-content": !0,
    "fill-available": !0,
    "fit-content": !0,
    "contain-floats": !0,
  };
function rS(e, t) {
  if (tS.hasOwnProperty(e) && nS.hasOwnProperty(t))
    return eS.map(function (n) {
      return n + t;
    });
}
var cc = { exports: {} },
  oS = /[A-Z]/g,
  iS = /^ms-/,
  iu = {};
function aS(e) {
  return "-" + e.toLowerCase();
}
function lS(e) {
  if (iu.hasOwnProperty(e)) return iu[e];
  var t = e.replace(oS, aS);
  return (iu[e] = iS.test(t) ? "-" + t : t);
}
const sS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: lS },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  uS = Sc(sS);
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
  var n = uS,
    r = o(n);
  function o(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, r.default)(a);
  }
  e.exports = t.default;
})(cc, cc.exports);
var cS = cc.exports;
const fS = Xn(cS);
var dS = {
    transition: !0,
    transitionProperty: !0,
    WebkitTransition: !0,
    WebkitTransitionProperty: !0,
    MozTransition: !0,
    MozTransitionProperty: !0,
  },
  pS = { Webkit: "-webkit-", Moz: "-moz-", ms: "-ms-" };
function gS(e, t) {
  if (aa(e)) return e;
  for (
    var n = e.split(/,(?![^()]*(?:\([^()]*\))?\))/g), r = 0, o = n.length;
    r < o;
    ++r
  ) {
    var i = n[r],
      a = [i];
    for (var l in t) {
      var s = fS(l);
      if (i.indexOf(s) > -1 && s !== "order")
        for (var u = t[l], p = 0, m = u.length; p < m; ++p)
          a.unshift(i.replace(s, pS[u[p]] + s));
    }
    n[r] = a.join(",");
  }
  return n.join(",");
}
function mS(e, t, n, r) {
  if (typeof t == "string" && dS.hasOwnProperty(e)) {
    var o = gS(t, r),
      i = o
        .split(/,(?![^()]*(?:\([^()]*\))?\))/g)
        .filter(function (l) {
          return !/-moz-|-ms-/.test(l);
        })
        .join(",");
    if (e.indexOf("Webkit") > -1) return i;
    var a = o
      .split(/,(?![^()]*(?:\([^()]*\))?\))/g)
      .filter(function (l) {
        return !/-webkit-|-ms-/.test(l);
      })
      .join(",");
    return e.indexOf("Moz") > -1
      ? a
      : ((n["Webkit" + sc(e)] = i), (n["Moz" + sc(e)] = a), o);
  }
}
var hS = [$b, Bb, Lb, Vb, Gb, Xb, Yb, Zb, Jb, qb, rS, mS, Hb],
  vS = Fh({ prefixMap: zb.prefixMap, plugins: hS });
const yS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, createPrefixer: Fh, prefix: vS },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  bS = Sc(yS);
var Sf = {};
Object.defineProperty(Sf, "__esModule", { value: !0 });
const Sp = "-",
  SS = /([a-z\d])([A-Z])/g,
  wS = /([a-z]+)([A-Z][a-z\d]+)/g;
function _S(e) {
  return e.replace(SS, `$1${Sp}$2`).replace(wS, `$1${Sp}$2`).toLowerCase();
}
Sf.default = _S;
var xS =
  (k && k.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(bf, "__esModule", { value: !0 });
const OS = bS,
  NS = xS(Sf),
  ES = /^(Webkit|ms|Moz|O)/;
function TS(e, t) {
  const n = (0, OS.prefix)({ [e]: t }),
    r = [],
    o = Object.keys(n);
  for (let i = 0; i < o.length; i++) {
    const a = o[i],
      l = a.match(ES) ? `-${a}` : a,
      s = (0, NS.default)(l),
      u = n[a];
    if (Array.isArray(u))
      for (let p = 0; p < u.length; p++) r.push({ property: s, value: u[p] });
    else r.push({ property: s, value: u });
  }
  return r;
}
bf.default = TS;
var wf = {};
Object.defineProperty(wf, "__esModule", { value: !0 });
function CS(e, t = "px") {
  return typeof e == "number" ? `${e}${t}` : e;
}
wf.default = CS;
var Kn = {};
function kS(e) {
  for (var t = e.length, n = t ^ t, r = 0, o; t >= 4; )
    (o =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (o =
        (o & 65535) * 1540483477 + ((((o >>> 16) * 1540483477) & 65535) << 16)),
      (o ^= o >>> 24),
      (o =
        (o & 65535) * 1540483477 + ((((o >>> 16) * 1540483477) & 65535) << 16)),
      (n =
        ((n & 65535) * 1540483477 +
          ((((n >>> 16) * 1540483477) & 65535) << 16)) ^
        o),
      (t -= 4),
      ++r;
  switch (t) {
    case 3:
      n ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      n ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (n ^= e.charCodeAt(r) & 255),
        (n =
          (n & 65535) * 1540483477 +
          ((((n >>> 16) * 1540483477) & 65535) << 16));
  }
  return (
    (n ^= n >>> 13),
    (n =
      (n & 65535) * 1540483477 + ((((n >>> 16) * 1540483477) & 65535) << 16)),
    (n ^= n >>> 15),
    (n >>> 0).toString(36)
  );
}
const jS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: kS },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ih = Sc(jS);
var _f = {},
  Fo = {};
Object.defineProperty(Fo, "__esModule", { value: !0 });
Fo.unsafeClassNameCharacters = Fo.spacesOutsideParentheses = void 0;
Fo.spacesOutsideParentheses = / (?=([^()]*\([^()]*\))*[^()]*$)/g;
Fo.unsafeClassNameCharacters = /[^_a-zA-Z0-9-]/g;
Object.defineProperty(_f, "__esModule", { value: !0 });
const PS = Fo,
  RS = /[ .]/g,
  DS = /%/g;
function zS(e) {
  return e
    .replace(RS, "-")
    .replace(DS, "prcnt")
    .replace(PS.unsafeClassNameCharacters, "");
}
_f.default = zS;
var Bh =
  (k && k.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.setClassNamePrefix = Kn.getClassNamePrefix = void 0;
const wp = Bh(Ih),
  $S = Bh(_f);
let xf = "ub-";
function MS() {
  return xf;
}
Kn.getClassNamePrefix = MS;
function AS(e) {
  xf = e;
}
Kn.setClassNamePrefix = AS;
function LS(e, t, n = "") {
  const { className: r, safeValue: o = !1, complexValue: i = !1 } = e;
  let a;
  return (
    t === "inherit" || t === "initial" || t === "unset"
      ? (a = t)
      : i || t.includes("calc(")
      ? (a = (0, wp.default)(t))
      : o
      ? (a = t)
      : (a = (0, $S.default)(t)),
    n && (a = `${a}_${(0, wp.default)(n)}`),
    `${xf}${r}_${a}`
  );
}
Kn.default = LS;
var ss =
  (k && k.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(_e, "__esModule", { value: !0 });
const FS = ss(bf),
  IS = ss(wf),
  BS = ss(Kn),
  WS = ss(ia);
function VS(e, t, n = "") {
  let r;
  const o = typeof t;
  if (o !== "string" && o !== "number") return null;
  const i = (0, IS.default)(t, e.defaultUnit),
    a = (0, BS.default)(e, i, n);
  e.isPrefixed
    ? (r = (0, FS.default)(e.jsName || "", i))
    : (r = [{ property: e.cssName || "", value: i }]);
  let l;
  if ((0, WS.default)()) {
    const s = r.map((u) => `${u.property}:${u.value}`).join(";");
    l = `${_p(a, n)}{${s}}`;
  } else {
    const s = r.map((u) => `  ${u.property}: ${u.value};`).join(`
`);
    l = `
${_p(a, n)} {
${s}
}`;
  }
  return { className: a, styles: l, rules: r };
}
_e.default = VS;
const _p = (e, t) =>
  t.includes(",")
    ? t
        .split(",")
        .map((n) => `.${e}${n}`)
        .join(", ")
    : `.${e}${t}`;
var Wh =
  (k && k.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(on, "__esModule", { value: !0 });
on.propEnhancers = on.propValidators = on.propAliases = on.propTypes = void 0;
const It = Wh(he),
  Dn = Wh(_e);
on.propTypes = {
  animation: It.default.string,
  animationDelay: It.default.string,
  animationDirection: It.default.string,
  animationDuration: It.default.string,
  animationFillMode: It.default.string,
  animationIterationCount: It.default.oneOfType([
    It.default.string,
    It.default.number,
  ]),
  animationName: It.default.string,
  animationPlayState: It.default.string,
  animationTimingFunction: It.default.string,
};
on.propAliases = {};
on.propValidators = {};
const HS = {
    className: "a",
    cssName: "animation",
    jsName: "animation",
    complexValue: !0,
  },
  US = {
    className: "a-dly",
    cssName: "animation-delay",
    jsName: "animationDelay",
    defaultUnit: "ms",
  },
  GS = {
    className: "a-dir",
    cssName: "animation-direction",
    jsName: "animationDirection",
    safeValue: !0,
  },
  KS = {
    className: "a-dur",
    cssName: "animation-duration",
    jsName: "animationDuration",
    defaultUnit: "ms",
  },
  XS = {
    className: "a-fill-md",
    cssName: "animation-fill-mode",
    jsName: "animationFillMode",
    safeValue: !0,
  },
  YS = {
    className: "a-itr-ct",
    cssName: "animation-iteration-count",
    jsName: "animationIterationCount",
    defaultUnit: "",
  },
  QS = {
    className: "a-nm",
    cssName: "animation-name",
    jsName: "animationName",
  },
  ZS = {
    className: "a-ply-ste",
    cssName: "animation-play-state",
    jsName: "animationPlayState",
    safeValue: !0,
  },
  JS = {
    className: "a-tmng-fn",
    cssName: "animation-timing-function",
    jsName: "animationTimingFunction",
    complexValue: !0,
  };
on.propEnhancers = {
  animation: (e, t) => (0, Dn.default)(HS, e, t),
  animationDelay: (e, t) => (0, Dn.default)(US, e, t),
  animationDirection: (e, t) => (0, Dn.default)(GS, e, t),
  animationDuration: (e, t) => (0, Dn.default)(KS, e, t),
  animationFillMode: (e, t) => (0, Dn.default)(XS, e, t),
  animationIterationCount: (e, t) => (0, Dn.default)(YS, e, t),
  animationName: (e, t) => (0, Dn.default)(QS, e, t),
  animationPlayState: (e, t) => (0, Dn.default)(ZS, e, t),
  animationTimingFunction: (e, t) => (0, Dn.default)(JS, e, t),
};
var an = {},
  Vh =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(an, "__esModule", { value: !0 });
an.propEnhancers = an.propValidators = an.propAliases = an.propTypes = void 0;
const zn = Vh(he),
  $n = Vh(_e);
an.propTypes = {
  background: zn.default.string,
  backgroundBlendMode: zn.default.string,
  backgroundClip: zn.default.string,
  backgroundColor: zn.default.string,
  backgroundImage: zn.default.string,
  backgroundOrigin: zn.default.string,
  backgroundPosition: zn.default.string,
  backgroundRepeat: zn.default.string,
  backgroundSize: zn.default.string,
};
an.propAliases = {};
an.propValidators = {};
const qS = {
    className: "bg",
    cssName: "background",
    jsName: "background",
    isPrefixed: !0,
    complexValue: !0,
  },
  ew = {
    className: "bg-clr",
    cssName: "background-color",
    jsName: "backgroundColor",
  },
  tw = {
    className: "bg-img",
    cssName: "background-image",
    jsName: "backgroundImage",
    isPrefixed: !0,
    complexValue: !0,
  },
  nw = {
    className: "bg-pos",
    cssName: "background-position",
    jsName: "backgroundPosition",
  },
  rw = {
    className: "bg-siz",
    cssName: "background-size",
    jsName: "backgroundSize",
  },
  ow = {
    className: "bg-orgn",
    cssName: "background-origin",
    jsName: "backgroundOrigin",
  },
  iw = {
    className: "bg-rpt",
    cssName: "background-repeat",
    jsName: "backgroundRepeat",
  },
  aw = {
    className: "bg-clp",
    cssName: "background-clip",
    jsName: "backgroundClip",
  },
  lw = {
    className: "bg-blnd-md",
    cssName: "background-blend-mode",
    jsName: "backgroundBlendMode",
  };
an.propEnhancers = {
  background: (e, t) => (0, $n.default)(qS, e, t),
  backgroundBlendMode: (e, t) => (0, $n.default)(lw, e, t),
  backgroundClip: (e, t) => (0, $n.default)(aw, e, t),
  backgroundColor: (e, t) => (0, $n.default)(ew, e, t),
  backgroundImage: (e, t) => (0, $n.default)(tw, e, t),
  backgroundOrigin: (e, t) => (0, $n.default)(ow, e, t),
  backgroundPosition: (e, t) => (0, $n.default)(nw, e, t),
  backgroundRepeat: (e, t) => (0, $n.default)(iw, e, t),
  backgroundSize: (e, t) => (0, $n.default)(rw, e, t),
};
var ln = {},
  Hh =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.propEnhancers = ln.propValidators = ln.propAliases = ln.propTypes = void 0;
const Je = Hh(he),
  Wa = Hh(_e);
ln.propTypes = {
  borderBottomLeftRadius: Je.default.oneOfType([
    Je.default.string,
    Je.default.number,
  ]),
  borderBottomRightRadius: Je.default.oneOfType([
    Je.default.string,
    Je.default.number,
  ]),
  borderRadius: Je.default.oneOfType([Je.default.string, Je.default.number]),
  borderTopLeftRadius: Je.default.oneOfType([
    Je.default.string,
    Je.default.number,
  ]),
  borderTopRightRadius: Je.default.oneOfType([
    Je.default.string,
    Je.default.number,
  ]),
};
ln.propAliases = {
  borderRadius: [
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
    "borderTopLeftRadius",
    "borderTopRightRadius",
  ],
};
ln.propValidators = {};
const sw = {
    className: "btlr",
    cssName: "border-top-left-radius",
    jsName: "borderTopLeftRadius",
  },
  uw = {
    className: "btrr",
    cssName: "border-top-right-radius",
    jsName: "borderTopRightRadius",
  },
  cw = {
    className: "bblr",
    cssName: "border-bottom-left-radius",
    jsName: "borderBottomLeftRadius",
  },
  fw = {
    className: "bbrr",
    cssName: "border-bottom-right-radius",
    jsName: "borderBottomRightRadius",
  };
ln.propEnhancers = {
  borderBottomLeftRadius: (e, t) => (0, Wa.default)(cw, e, t),
  borderBottomRightRadius: (e, t) => (0, Wa.default)(fw, e, t),
  borderTopLeftRadius: (e, t) => (0, Wa.default)(sw, e, t),
  borderTopRightRadius: (e, t) => (0, Wa.default)(uw, e, t),
};
var sn = {},
  Uh =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(sn, "__esModule", { value: !0 });
sn.propEnhancers = sn.propValidators = sn.propAliases = sn.propTypes = void 0;
const te = Uh(he),
  Ge = Uh(_e);
sn.propTypes = {
  border: te.default.string,
  borderBottom: te.default.string,
  borderBottomColor: te.default.string,
  borderBottomStyle: te.default.string,
  borderBottomWidth: te.default.oneOfType([
    te.default.string,
    te.default.number,
  ]),
  borderColor: te.default.string,
  borderLeft: te.default.string,
  borderLeftColor: te.default.string,
  borderLeftStyle: te.default.string,
  borderLeftWidth: te.default.oneOfType([te.default.string, te.default.number]),
  borderRight: te.default.string,
  borderRightColor: te.default.string,
  borderRightStyle: te.default.string,
  borderRightWidth: te.default.oneOfType([
    te.default.string,
    te.default.number,
  ]),
  borderStyle: te.default.string,
  borderTop: te.default.string,
  borderTopColor: te.default.string,
  borderTopStyle: te.default.string,
  borderTopWidth: te.default.oneOfType([te.default.string, te.default.number]),
  borderWidth: te.default.oneOfType([te.default.string, te.default.number]),
};
sn.propAliases = {
  border: ["borderBottom", "borderLeft", "borderRight", "borderTop"],
  borderColor: [
    "borderBottomColor",
    "borderLeftColor",
    "borderRightColor",
    "borderTopColor",
  ],
  borderStyle: [
    "borderBottomStyle",
    "borderLeftStyle",
    "borderRightStyle",
    "borderTopStyle",
  ],
  borderWidth: [
    "borderBottomWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderTopWidth",
  ],
};
sn.propValidators = {};
const dw = { className: "b-lft", cssName: "border-left", jsName: "borderLeft" },
  pw = {
    className: "b-lft-clr",
    cssName: "border-left-color",
    jsName: "borderLeftColor",
  },
  gw = {
    className: "b-lft-stl",
    cssName: "border-left-style",
    jsName: "borderLeftStyle",
    safeValue: !0,
  },
  mw = {
    className: "b-lft-wdt",
    cssName: "border-left-width",
    jsName: "borderLeftWidth",
  },
  hw = { className: "b-rgt", cssName: "border-right", jsName: "borderRight" },
  vw = {
    className: "b-rgt-clr",
    cssName: "border-right-color",
    jsName: "borderRightColor",
  },
  yw = {
    className: "b-rgt-stl",
    cssName: "border-right-style",
    jsName: "borderRightStyle",
    safeValue: !0,
  },
  bw = {
    className: "b-rgt-wdt",
    cssName: "border-right-width",
    jsName: "borderRightWidth",
  },
  Sw = { className: "b-top", cssName: "border-top", jsName: "borderTop" },
  ww = {
    className: "b-top-clr",
    cssName: "border-top-color",
    jsName: "borderTopColor",
  },
  _w = {
    className: "b-top-stl",
    cssName: "border-top-style",
    jsName: "borderTopStyle",
    safeValue: !0,
  },
  xw = {
    className: "b-top-wdt",
    cssName: "border-top-width",
    jsName: "borderTopWidth",
  },
  Ow = { className: "b-btm", cssName: "border-bottom", jsName: "borderBottom" },
  Nw = {
    className: "b-btm-clr",
    cssName: "border-bottom-color",
    jsName: "borderBottomColor",
  },
  Ew = {
    className: "b-btm-stl",
    cssName: "border-bottom-style",
    jsName: "borderBottomStyle",
    safeValue: !0,
  },
  Tw = {
    className: "b-btm-wdt",
    cssName: "border-bottom-width",
    jsName: "borderBottomWidth",
  };
sn.propEnhancers = {
  borderBottom: (e, t) => (0, Ge.default)(Ow, e, t),
  borderBottomColor: (e, t) => (0, Ge.default)(Nw, e, t),
  borderBottomStyle: (e, t) => (0, Ge.default)(Ew, e, t),
  borderBottomWidth: (e, t) => (0, Ge.default)(Tw, e, t),
  borderLeft: (e, t) => (0, Ge.default)(dw, e, t),
  borderLeftColor: (e, t) => (0, Ge.default)(pw, e, t),
  borderLeftStyle: (e, t) => (0, Ge.default)(gw, e, t),
  borderLeftWidth: (e, t) => (0, Ge.default)(mw, e, t),
  borderRight: (e, t) => (0, Ge.default)(hw, e, t),
  borderRightColor: (e, t) => (0, Ge.default)(vw, e, t),
  borderRightStyle: (e, t) => (0, Ge.default)(yw, e, t),
  borderRightWidth: (e, t) => (0, Ge.default)(bw, e, t),
  borderTop: (e, t) => (0, Ge.default)(Sw, e, t),
  borderTopColor: (e, t) => (0, Ge.default)(ww, e, t),
  borderTopStyle: (e, t) => (0, Ge.default)(_w, e, t),
  borderTopWidth: (e, t) => (0, Ge.default)(xw, e, t),
};
var un = {},
  Gh =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(un, "__esModule", { value: !0 });
un.propEnhancers = un.propValidators = un.propAliases = un.propTypes = void 0;
const Cw = Gh(he),
  kw = Gh(_e);
un.propTypes = { boxShadow: Cw.default.string };
un.propAliases = {};
un.propValidators = {};
const jw = {
  className: "bs",
  cssName: "box-shadow",
  jsName: "boxShadow",
  complexValue: !0,
};
un.propEnhancers = { boxShadow: (e, t) => (0, kw.default)(jw, e, t) };
var cn = {},
  Kh =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.propEnhancers = cn.propValidators = cn.propAliases = cn.propTypes = void 0;
const ze = Kh(he),
  io = Kh(_e);
cn.propTypes = {
  height: ze.default.oneOfType([ze.default.string, ze.default.number]),
  maxHeight: ze.default.oneOfType([ze.default.string, ze.default.number]),
  maxWidth: ze.default.oneOfType([ze.default.string, ze.default.number]),
  minHeight: ze.default.oneOfType([ze.default.string, ze.default.number]),
  minWidth: ze.default.oneOfType([ze.default.string, ze.default.number]),
  width: ze.default.oneOfType([ze.default.string, ze.default.number]),
};
cn.propAliases = {};
cn.propValidators = {};
const Pw = { className: "w", cssName: "width", jsName: "width" },
  Rw = { className: "h", cssName: "height", jsName: "height" },
  Dw = { className: "min-w", cssName: "min-width", jsName: "minWidth" },
  zw = { className: "min-h", cssName: "min-height", jsName: "minHeight" },
  $w = { className: "max-w", cssName: "max-width", jsName: "maxWidth" },
  Mw = { className: "max-h", cssName: "max-height", jsName: "maxHeight" };
cn.propEnhancers = {
  height: (e, t) => (0, io.default)(Rw, e, t),
  maxHeight: (e, t) => (0, io.default)(Mw, e, t),
  maxWidth: (e, t) => (0, io.default)($w, e, t),
  minHeight: (e, t) => (0, io.default)(zw, e, t),
  minWidth: (e, t) => (0, io.default)(Dw, e, t),
  width: (e, t) => (0, io.default)(Pw, e, t),
};
var fn = {},
  Xh =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.propEnhancers = fn.propValidators = fn.propAliases = fn.propTypes = void 0;
const le = Xh(he),
  Fe = Xh(_e);
fn.propTypes = {
  alignContent: le.default.string,
  alignItems: le.default.string,
  alignSelf: le.default.string,
  flex: le.default.oneOfType([le.default.string, le.default.number]),
  flexBasis: le.default.oneOfType([le.default.string, le.default.number]),
  flexDirection: le.default.string,
  flexFlow: le.default.string,
  flexGrow: le.default.oneOfType([le.default.string, le.default.number]),
  flexShrink: le.default.oneOfType([le.default.string, le.default.number]),
  flexWrap: le.default.string,
  justifyContent: le.default.string,
  justifyItems: le.default.string,
  justifySelf: le.default.string,
  order: le.default.oneOfType([le.default.string, le.default.number]),
  placeContent: le.default.string,
  placeItems: le.default.string,
  placeSelf: le.default.string,
};
fn.propAliases = {};
fn.propValidators = {};
const Aw = {
    className: "flx",
    cssName: "flex",
    jsName: "flex",
    isPrefixed: !0,
    defaultUnit: "",
  },
  Lw = {
    className: "algn-itms",
    cssName: "align-items",
    jsName: "alignItems",
    isPrefixed: !0,
  },
  Fw = {
    className: "algn-slf",
    cssName: "align-self",
    jsName: "alignSelf",
    isPrefixed: !0,
  },
  Iw = {
    className: "algn-cnt",
    cssName: "align-content",
    jsName: "alignContent",
    isPrefixed: !0,
  },
  Bw = {
    className: "just-cnt",
    cssName: "justify-content",
    jsName: "justifyContent",
    isPrefixed: !0,
  },
  Ww = {
    className: "just-items",
    cssName: "justify-items",
    jsName: "justifyItems",
    isPrefixed: !0,
  },
  Vw = {
    className: "just-self",
    cssName: "justify-self",
    jsName: "justifySelf",
    isPrefixed: !0,
  },
  Hw = {
    className: "flx-drct",
    cssName: "flex-direction",
    jsName: "flexDirection",
    isPrefixed: !0,
    safeValue: !0,
  },
  Uw = {
    className: "flx-wrap",
    cssName: "flex-wrap",
    jsName: "flexWrap",
    isPrefixed: !0,
    safeValue: !0,
  },
  Gw = {
    className: "flx-grow",
    cssName: "flex-grow",
    jsName: "flexGrow",
    isPrefixed: !0,
    defaultUnit: "",
  },
  Kw = {
    className: "flx-srnk",
    cssName: "flex-shrink",
    jsName: "flexShrink",
    isPrefixed: !0,
    defaultUnit: "",
  },
  Xw = {
    className: "flx-basis",
    cssName: "flex-basis",
    jsName: "flexBasis",
    isPrefixed: !0,
  },
  Yw = {
    className: "order",
    cssName: "order",
    jsName: "order",
    isPrefixed: !0,
    defaultUnit: "",
    safeValue: !0,
  },
  Qw = {
    className: "flx-flow",
    cssName: "flex-flow",
    jsName: "flexFlow",
    isPrefixed: !0,
    defaultUnit: "",
  },
  Zw = {
    className: "plc-cnt",
    cssName: "place-content",
    jsName: "placeContent",
  },
  Jw = { className: "plc-items", cssName: "place-items", jsName: "placeItems" },
  qw = { className: "plc-self", cssName: "place-self", jsName: "placeSelf" };
fn.propEnhancers = {
  alignContent: (e, t) => (0, Fe.default)(Iw, e, t),
  alignItems: (e, t) => (0, Fe.default)(Lw, e, t),
  alignSelf: (e, t) => (0, Fe.default)(Fw, e, t),
  flex: (e, t) => (0, Fe.default)(Aw, e, t),
  flexBasis: (e, t) => (0, Fe.default)(Xw, e, t),
  flexDirection: (e, t) => (0, Fe.default)(Hw, e, t),
  flexFlow: (e, t) => (0, Fe.default)(Qw, e, t),
  flexGrow: (e, t) => (0, Fe.default)(Gw, e, t),
  flexShrink: (e, t) => (0, Fe.default)(Kw, e, t),
  flexWrap: (e, t) => (0, Fe.default)(Uw, e, t),
  justifyContent: (e, t) => (0, Fe.default)(Bw, e, t),
  justifyItems: (e, t) => (0, Fe.default)(Ww, e, t),
  justifySelf: (e, t) => (0, Fe.default)(Vw, e, t),
  order: (e, t) => (0, Fe.default)(Yw, e, t),
  placeContent: (e, t) => (0, Fe.default)(Zw, e, t),
  placeItems: (e, t) => (0, Fe.default)(Jw, e, t),
  placeSelf: (e, t) => (0, Fe.default)(qw, e, t),
};
var dn = {},
  Yh =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(dn, "__esModule", { value: !0 });
dn.propEnhancers = dn.propValidators = dn.propAliases = dn.propTypes = void 0;
const I = Yh(he),
  Te = Yh(_e);
dn.propTypes = {
  columnGap: I.default.oneOfType([I.default.string, I.default.number]),
  gap: I.default.oneOfType([I.default.string, I.default.number]),
  grid: I.default.string,
  gridArea: I.default.string,
  gridAutoColumns: I.default.oneOfType([I.default.string, I.default.number]),
  gridAutoFlow: I.default.string,
  gridAutoRows: I.default.oneOfType([I.default.string, I.default.number]),
  gridColumn: I.default.oneOfType([I.default.string, I.default.number]),
  gridColumnEnd: I.default.oneOfType([I.default.string, I.default.number]),
  gridColumnGap: I.default.oneOfType([I.default.string, I.default.number]),
  gridColumnStart: I.default.oneOfType([I.default.string, I.default.number]),
  gridGap: I.default.oneOfType([I.default.string, I.default.number]),
  gridRow: I.default.oneOfType([I.default.string, I.default.number]),
  gridRowEnd: I.default.oneOfType([I.default.string, I.default.number]),
  gridRowGap: I.default.oneOfType([I.default.string, I.default.number]),
  gridRowStart: I.default.oneOfType([I.default.string, I.default.number]),
  gridTemplate: I.default.string,
  gridTemplateAreas: I.default.string,
  gridTemplateColumns: I.default.string,
  gridTemplateRows: I.default.string,
  rowGap: I.default.oneOfType([I.default.string, I.default.number]),
};
dn.propAliases = {};
dn.propValidators = {};
const e_ = { className: "col-gap", cssName: "column-gap", jsName: "columnGap" },
  t_ = { className: "gap", cssName: "gap", jsName: "gap" },
  n_ = { className: "grd", cssName: "grid", jsName: "grid", complexValue: !0 },
  r_ = {
    className: "grd-ara",
    cssName: "grid-area",
    jsName: "gridArea",
    complexValue: !0,
  },
  o_ = {
    className: "grd-ato-col",
    cssName: "grid-auto-columns",
    jsName: "gridAutoColumns",
    complexValue: !0,
  },
  i_ = {
    className: "grd-ato-flw",
    cssName: "grid-auto-flow",
    jsName: "gridAutoFlow",
  },
  a_ = {
    className: "grd-ato-row",
    cssName: "grid-auto-rows",
    jsName: "gridAutoRows",
    complexValue: !0,
  },
  l_ = {
    className: "grd-col",
    cssName: "grid-column",
    jsName: "gridColumn",
    defaultUnit: "",
    complexValue: !0,
  },
  s_ = {
    className: "grd-col-end",
    cssName: "grid-column-end",
    jsName: "gridColumnEnd",
    defaultUnit: "",
  },
  u_ = {
    className: "grd-col-gap",
    cssName: "grid-column-gap",
    jsName: "gridColumnGap",
  },
  c_ = {
    className: "grd-col-str",
    cssName: "grid-column-start",
    jsName: "gridColumnStart",
    defaultUnit: "",
  },
  f_ = { className: "grd-gap", cssName: "grid-gap", jsName: "gridGap" },
  d_ = {
    className: "grd-row",
    cssName: "grid-row",
    jsName: "gridRow",
    defaultUnit: "",
    complexValue: !0,
  },
  p_ = {
    className: "grd-row-end",
    cssName: "grid-row-end",
    jsName: "gridRowEnd",
    defaultUnit: "",
  },
  g_ = {
    className: "grd-row-gap",
    cssName: "grid-row-gap",
    jsName: "gridRowGap",
  },
  m_ = {
    className: "grd-row-str",
    cssName: "grid-row-start",
    jsName: "gridRowStart",
    defaultUnit: "",
  },
  h_ = {
    className: "grd-tmp",
    cssName: "grid-template",
    jsName: "gridTemplate",
    complexValue: !0,
  },
  v_ = {
    className: "grd-tmp-ara",
    cssName: "grid-template-areas",
    jsName: "gridTemplateAreas",
    complexValue: !0,
  },
  y_ = {
    className: "grd-tmp-col",
    cssName: "grid-template-columns",
    jsName: "gridTemplateColumns",
    complexValue: !0,
  },
  b_ = {
    className: "grd-tmp-row",
    cssName: "grid-template-rows",
    jsName: "gridTemplateRows",
    complexValue: !0,
  },
  S_ = { className: "row-gap", cssName: "row-gap", jsName: "rowGap" };
dn.propEnhancers = {
  columnGap: (e, t) => (0, Te.default)(e_, e, t),
  gap: (e, t) => (0, Te.default)(t_, e, t),
  grid: (e, t) => (0, Te.default)(n_, e, t),
  gridArea: (e, t) => (0, Te.default)(r_, e, t),
  gridAutoColumns: (e, t) => (0, Te.default)(o_, e, t),
  gridAutoFlow: (e, t) => (0, Te.default)(i_, e, t),
  gridAutoRows: (e, t) => (0, Te.default)(a_, e, t),
  gridColumn: (e, t) => (0, Te.default)(l_, e, t),
  gridColumnEnd: (e, t) => (0, Te.default)(s_, e, t),
  gridColumnGap: (e, t) => (0, Te.default)(u_, e, t),
  gridColumnStart: (e, t) => (0, Te.default)(c_, e, t),
  gridGap: (e, t) => (0, Te.default)(f_, e, t),
  gridRow: (e, t) => (0, Te.default)(d_, e, t),
  gridRowEnd: (e, t) => (0, Te.default)(p_, e, t),
  gridRowGap: (e, t) => (0, Te.default)(g_, e, t),
  gridRowStart: (e, t) => (0, Te.default)(m_, e, t),
  gridTemplate: (e, t) => (0, Te.default)(h_, e, t),
  gridTemplateAreas: (e, t) => (0, Te.default)(v_, e, t),
  gridTemplateColumns: (e, t) => (0, Te.default)(y_, e, t),
  gridTemplateRows: (e, t) => (0, Te.default)(b_, e, t),
  rowGap: (e, t) => (0, Te.default)(S_, e, t),
};
var pn = {},
  Qh =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(pn, "__esModule", { value: !0 });
pn.propEnhancers = pn.propValidators = pn.propAliases = pn.propTypes = void 0;
const Va = Qh(he),
  Ha = Qh(_e);
pn.propTypes = {
  cursor: Va.default.string,
  pointerEvents: Va.default.string,
  userSelect: Va.default.string,
  visibility: Va.default.string,
};
pn.propAliases = {};
pn.propValidators = {};
const w_ = { className: "crsr", cssName: "cursor", jsName: "cursor" },
  __ = {
    className: "usr-slct",
    cssName: "user-select",
    jsName: "userSelect",
    safeValue: !0,
    isPrefixed: !0,
  },
  x_ = {
    className: "vsblt",
    cssName: "visibility",
    jsName: "visibility",
    safeValue: !0,
  },
  O_ = {
    className: "ptr-evts",
    cssName: "pointer-events",
    jsName: "pointerEvents",
    safeValue: !0,
  };
pn.propEnhancers = {
  cursor: (e, t) => (0, Ha.default)(w_, e, t),
  pointerEvents: (e, t) => (0, Ha.default)(O_, e, t),
  userSelect: (e, t) => (0, Ha.default)(__, e, t),
  visibility: (e, t) => (0, Ha.default)(x_, e, t),
};
var gn = {},
  Zh =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(gn, "__esModule", { value: !0 });
gn.propEnhancers = gn.propValidators = gn.propAliases = gn.propTypes = void 0;
const Mn = Zh(he),
  ao = Zh(_e),
  N_ = Kn;
gn.propTypes = {
  boxSizing: Mn.default.string,
  clear: Mn.default.string,
  clearfix: Mn.default.bool,
  content: Mn.default.string,
  display: Mn.default.string,
  float: Mn.default.string,
  zIndex: Mn.default.oneOfType([Mn.default.string, Mn.default.number]),
};
gn.propAliases = {};
gn.propValidators = {};
const E_ = {
    className: "dspl",
    cssName: "display",
    jsName: "display",
    safeValue: !0,
    isPrefixed: !0,
  },
  T_ = { className: "flt", cssName: "float", jsName: "float", safeValue: !0 },
  C_ = { className: "clr", cssName: "clear", jsName: "clear", safeValue: !0 },
  k_ = {
    className: "z-idx",
    cssName: "z-index",
    jsName: "zIndex",
    safeValue: !0,
    defaultUnit: "",
  },
  j_ = {
    className: "box-szg",
    cssName: "box-sizing",
    jsName: "boxSizing",
    safeValue: !0,
  },
  P_ = () => {
    const e = `${(0, N_.getClassNamePrefix)()}clearfix`,
      t = [
        { property: "display", value: "table" },
        { property: "clear", value: "both" },
        { property: "content", value: '""' },
      ],
      n = t.map((o) => `  ${o.property}: ${o.value};`).join(`
`),
      r = `
.${e}:before, .${e}:after {
${n}
}`;
    return { className: e, rules: t, styles: r };
  },
  R_ = {
    className: "cnt",
    cssName: "content",
    jsName: "content",
    complexValue: !0,
  };
gn.propEnhancers = {
  boxSizing: (e, t) => (0, ao.default)(j_, e, t),
  clear: (e, t) => (0, ao.default)(C_, e, t),
  clearfix: P_,
  content: (e, t) => (0, ao.default)(R_, e, t),
  display: (e, t) => (0, ao.default)(E_, e, t),
  float: (e, t) => (0, ao.default)(T_, e, t),
  zIndex: (e, t) => (0, ao.default)(k_, e, t),
};
var mn = {},
  Jh =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(mn, "__esModule", { value: !0 });
mn.propEnhancers = mn.propValidators = mn.propAliases = mn.propTypes = void 0;
const Ua = Jh(he),
  Ga = Jh(_e);
mn.propTypes = {
  listStyle: Ua.default.string,
  listStyleType: Ua.default.string,
  listStyleImage: Ua.default.string,
  listStylePosition: Ua.default.string,
};
mn.propAliases = {};
mn.propValidators = {};
const D_ = {
    className: "ls",
    cssName: "list-style",
    jsName: "listStyle",
    complexValue: !0,
  },
  z_ = {
    className: "ls-typ",
    cssName: "list-style-type",
    jsName: "listStyleType",
  },
  $_ = {
    className: "ls-img",
    cssName: "list-style-image",
    jsName: "listStyleImage",
    complexValue: !0,
  },
  M_ = {
    className: "ls-pos",
    cssName: "list-style-position",
    jsName: "listStylePosition",
    safeValue: !0,
  };
mn.propEnhancers = {
  listStyle: (e, t) => (0, Ga.default)(D_, e, t),
  listStyleType: (e, t) => (0, Ga.default)(z_, e, t),
  listStyleImage: (e, t) => (0, Ga.default)($_, e, t),
  listStylePosition: (e, t) => (0, Ga.default)(M_, e, t),
};
var hn = {},
  qh =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.propEnhancers = hn.propValidators = hn.propAliases = hn.propTypes = void 0;
const au = qh(he),
  A_ = qh(_e);
hn.propTypes = {
  opacity: au.default.oneOfType([au.default.string, au.default.number]),
};
hn.propAliases = {};
hn.propValidators = {};
const L_ = {
  className: "opct",
  cssName: "opacity",
  jsName: "opacity",
  defaultUnit: "",
};
hn.propEnhancers = { opacity: (e, t) => (0, A_.default)(L_, e, t) };
var vn = {},
  ev =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(vn, "__esModule", { value: !0 });
vn.propEnhancers = vn.propValidators = vn.propAliases = vn.propTypes = void 0;
const F_ = ev(he),
  I_ = ev(_e);
vn.propTypes = { outline: F_.default.string };
vn.propAliases = {};
vn.propValidators = {};
const B_ = {
  className: "otln",
  cssName: "outline",
  jsName: "outline",
  complexValue: !0,
};
vn.propEnhancers = { outline: (e, t) => (0, I_.default)(B_, e, t) };
var yn = {},
  tv =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(yn, "__esModule", { value: !0 });
yn.propEnhancers = yn.propValidators = yn.propAliases = yn.propTypes = void 0;
const lu = tv(he),
  xp = tv(_e);
yn.propTypes = {
  overflow: lu.default.string,
  overflowX: lu.default.string,
  overflowY: lu.default.string,
};
yn.propAliases = { overflow: ["overflowX", "overflowY"] };
yn.propValidators = {};
const W_ = {
    className: "ovflw-y",
    cssName: "overflow-y",
    jsName: "overflowY",
    safeValue: !0,
  },
  V_ = {
    className: "ovflw-x",
    cssName: "overflow-x",
    jsName: "overflowX",
    safeValue: !0,
  };
yn.propEnhancers = {
  overflowX: (e, t) => (0, xp.default)(V_, e, t),
  overflowY: (e, t) => (0, xp.default)(W_, e, t),
};
var bn = {},
  nv =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(bn, "__esModule", { value: !0 });
bn.propEnhancers = bn.propValidators = bn.propAliases = bn.propTypes = void 0;
const ht = nv(he),
  ui = nv(_e);
bn.propTypes = {
  bottom: ht.default.oneOfType([ht.default.string, ht.default.number]),
  left: ht.default.oneOfType([ht.default.string, ht.default.number]),
  position: ht.default.string,
  right: ht.default.oneOfType([ht.default.string, ht.default.number]),
  top: ht.default.oneOfType([ht.default.string, ht.default.number]),
};
bn.propAliases = {};
bn.propValidators = {};
const H_ = {
    className: "pst",
    cssName: "position",
    jsName: "position",
    safeValue: !0,
    isPrefixed: !0,
  },
  U_ = { className: "top", cssName: "top", jsName: "top" },
  G_ = { className: "rgt", cssName: "right", jsName: "right" },
  K_ = { className: "btm", cssName: "bottom", jsName: "bottom" },
  X_ = { className: "lft", cssName: "left", jsName: "left" };
bn.propEnhancers = {
  bottom: (e, t) => (0, ui.default)(K_, e, t),
  left: (e, t) => (0, ui.default)(X_, e, t),
  position: (e, t) => (0, ui.default)(H_, e, t),
  right: (e, t) => (0, ui.default)(G_, e, t),
  top: (e, t) => (0, ui.default)(U_, e, t),
};
var Sn = {},
  rv =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Sn, "__esModule", { value: !0 });
Sn.propEnhancers = Sn.propValidators = Sn.propAliases = Sn.propTypes = void 0;
const Y_ = rv(he),
  Q_ = rv(_e);
Sn.propTypes = { resize: Y_.default.string };
Sn.propAliases = {};
Sn.propValidators = {};
const Z_ = { className: "rsz", cssName: "resize", jsName: "resize" };
Sn.propEnhancers = { resize: (e, t) => (0, Q_.default)(Z_, e, t) };
var wn = {},
  J_ =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(wn, "__esModule", { value: !0 });
wn.propEnhancers = wn.propValidators = wn.propAliases = wn.propTypes = void 0;
const q_ = J_(he);
wn.propTypes = { selectors: q_.default.object };
wn.propAliases = {};
wn.propValidators = {};
wn.propEnhancers = {};
var _n = {},
  ov =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(_n, "__esModule", { value: !0 });
_n.propEnhancers = _n.propValidators = _n.propAliases = _n.propTypes = void 0;
const H = ov(he),
  or = ov(_e);
_n.propTypes = {
  margin: H.default.oneOfType([H.default.string, H.default.number]),
  marginBottom: H.default.oneOfType([H.default.string, H.default.number]),
  marginLeft: H.default.oneOfType([H.default.string, H.default.number]),
  marginRight: H.default.oneOfType([H.default.string, H.default.number]),
  marginTop: H.default.oneOfType([H.default.string, H.default.number]),
  marginX: H.default.oneOfType([H.default.string, H.default.number]),
  marginY: H.default.oneOfType([H.default.string, H.default.number]),
  padding: H.default.oneOfType([H.default.string, H.default.number]),
  paddingBottom: H.default.oneOfType([H.default.string, H.default.number]),
  paddingLeft: H.default.oneOfType([H.default.string, H.default.number]),
  paddingRight: H.default.oneOfType([H.default.string, H.default.number]),
  paddingTop: H.default.oneOfType([H.default.string, H.default.number]),
  paddingX: H.default.oneOfType([H.default.string, H.default.number]),
  paddingY: H.default.oneOfType([H.default.string, H.default.number]),
};
_n.propAliases = {
  margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
  marginX: ["marginLeft", "marginRight"],
  marginY: ["marginBottom", "marginTop"],
  padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
  paddingX: ["paddingLeft", "paddingRight"],
  paddingY: ["paddingBottom", "paddingTop"],
};
_n.propValidators = {};
const ex = { className: "mt", cssName: "margin-top", jsName: "marginTop" },
  tx = { className: "mr", cssName: "margin-right", jsName: "marginRight" },
  nx = { className: "mb", cssName: "margin-bottom", jsName: "marginBottom" },
  rx = { className: "ml", cssName: "margin-left", jsName: "marginLeft" },
  ox = { className: "pt", cssName: "padding-top", jsName: "paddingTop" },
  ix = { className: "pr", cssName: "padding-right", jsName: "paddingRight" },
  ax = { className: "pb", cssName: "padding-bottom", jsName: "paddingBottom" },
  lx = { className: "pl", cssName: "padding-left", jsName: "paddingLeft" };
_n.propEnhancers = {
  marginBottom: (e, t) => (0, or.default)(nx, e, t),
  marginLeft: (e, t) => (0, or.default)(rx, e, t),
  marginRight: (e, t) => (0, or.default)(tx, e, t),
  marginTop: (e, t) => (0, or.default)(ex, e, t),
  paddingBottom: (e, t) => (0, or.default)(ax, e, t),
  paddingLeft: (e, t) => (0, or.default)(lx, e, t),
  paddingRight: (e, t) => (0, or.default)(ix, e, t),
  paddingTop: (e, t) => (0, or.default)(ox, e, t),
};
var xn = {},
  iv =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(xn, "__esModule", { value: !0 });
xn.propEnhancers = xn.propValidators = xn.propAliases = xn.propTypes = void 0;
const vt = iv(he),
  Rr = iv(_e);
xn.propTypes = {
  fill: vt.default.string,
  stroke: vt.default.string,
  strokeDasharray: vt.default.oneOfType([vt.default.string, vt.default.number]),
  strokeDashoffset: vt.default.oneOfType([
    vt.default.string,
    vt.default.number,
  ]),
  strokeLinecap: vt.default.string,
  strokeMiterlimit: vt.default.number,
  strokeWidth: vt.default.oneOfType([vt.default.string, vt.default.number]),
};
xn.propAliases = {};
xn.propValidators = {};
const sx = { className: "fill", cssName: "fill", jsName: "fill" },
  ux = { className: "strk", cssName: "stroke", jsName: "stroke" },
  cx = {
    className: "strk-dshary",
    cssName: "stroke-dasharray",
    jsName: "strokeDasharray",
    defaultUnit: "",
  },
  fx = {
    className: "strk-dshofst",
    cssName: "stroke-dashoffset",
    jsName: "strokeDashoffset",
    defaultUnit: "",
  },
  dx = {
    className: "strk-lncp",
    cssName: "stroke-linecap",
    jsName: "strokeLinecap",
    safeValue: !0,
  },
  px = {
    className: "strk-mtrlmt",
    cssName: "stroke-miterlimit",
    jsName: "strokeMiterlimit",
    defaultUnit: "",
  },
  gx = {
    className: "strk-w",
    cssName: "stroke-width",
    jsName: "strokeWidth",
    defaultUnit: "",
  };
xn.propEnhancers = {
  fill: (e, t) => (0, Rr.default)(sx, e, t),
  stroke: (e, t) => (0, Rr.default)(ux, e, t),
  strokeDasharray: (e, t) => (0, Rr.default)(cx, e, t),
  strokeDashoffset: (e, t) => (0, Rr.default)(fx, e, t),
  strokeLinecap: (e, t) => (0, Rr.default)(dx, e, t),
  strokeMiterlimit: (e, t) => (0, Rr.default)(px, e, t),
  strokeWidth: (e, t) => (0, Rr.default)(gx, e, t),
};
var On = {},
  av =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(On, "__esModule", { value: !0 });
On.propEnhancers = On.propValidators = On.propAliases = On.propTypes = void 0;
const se = av(he),
  $e = av(_e);
On.propTypes = {
  color: se.default.string,
  font: se.default.string,
  fontFamily: se.default.string,
  fontSize: se.default.oneOfType([se.default.string, se.default.number]),
  fontStyle: se.default.string,
  fontVariant: se.default.string,
  fontWeight: se.default.oneOfType([se.default.string, se.default.number]),
  letterSpacing: se.default.oneOfType([se.default.string, se.default.number]),
  lineHeight: se.default.oneOfType([se.default.string, se.default.number]),
  textAlign: se.default.string,
  textDecoration: se.default.string,
  textOverflow: se.default.string,
  textShadow: se.default.string,
  textTransform: se.default.string,
  verticalAlign: se.default.string,
  whiteSpace: se.default.string,
  wordBreak: se.default.string,
  wordWrap: se.default.string,
};
On.propAliases = {};
On.propValidators = {};
const mx = {
    className: "txt-algn",
    safeValue: !0,
    cssName: "text-align",
    jsName: "textAlign",
  },
  hx = {
    className: "txt-deco",
    cssName: "text-decoration",
    jsName: "textDecoration",
  },
  vx = {
    className: "txt-trns",
    cssName: "text-transform",
    jsName: "textTransform",
    safeValue: !0,
  },
  yx = {
    className: "txt-shdw",
    cssName: "text-shadow",
    jsName: "textShadow",
    complexValue: !0,
  },
  bx = {
    className: "txt-ovrf",
    cssName: "text-overflow",
    jsName: "textOverflow",
    safeValue: !0,
  },
  Sx = { className: "color", cssName: "color", jsName: "color" },
  wx = { className: "fnt", cssName: "font", jsName: "font", complexValue: !0 },
  _x = {
    className: "fnt-fam",
    cssName: "font-family",
    jsName: "fontFamily",
    complexValue: !0,
  },
  xx = { className: "fnt-sze", cssName: "font-size", jsName: "fontSize" },
  Ox = {
    className: "fnt-stl",
    cssName: "font-style",
    jsName: "fontStyle",
    safeValue: !0,
  },
  Nx = { className: "f-vari", cssName: "font-variant", jsName: "fontVariant" },
  Ex = {
    className: "f-wght",
    cssName: "font-weight",
    jsName: "fontWeight",
    safeValue: !0,
    defaultUnit: "",
  },
  Tx = {
    className: "ln-ht",
    cssName: "line-height",
    jsName: "lineHeight",
    defaultUnit: "",
  },
  Cx = {
    className: "ver-algn",
    cssName: "vertical-align",
    jsName: "verticalAlign",
    safeValue: !0,
  },
  kx = {
    className: "wrd-brk",
    cssName: "word-break",
    jsName: "wordBreak",
    safeValue: !0,
  },
  jx = {
    className: "wrd-wrp",
    cssName: "word-wrap",
    jsName: "wordWrap",
    safeValue: !0,
  },
  Px = {
    className: "wht-spc",
    cssName: "white-space",
    jsName: "whiteSpace",
    safeValue: !0,
  },
  Rx = {
    className: "ltr-spc",
    cssName: "letter-spacing",
    jsName: "letterSpacing",
  };
On.propEnhancers = {
  color: (e, t) => (0, $e.default)(Sx, e, t),
  font: (e, t) => (0, $e.default)(wx, e, t),
  fontFamily: (e, t) => (0, $e.default)(_x, e, t),
  fontSize: (e, t) => (0, $e.default)(xx, e, t),
  fontStyle: (e, t) => (0, $e.default)(Ox, e, t),
  fontVariant: (e, t) => (0, $e.default)(Nx, e, t),
  fontWeight: (e, t) => (0, $e.default)(Ex, e, t),
  letterSpacing: (e, t) => (0, $e.default)(Rx, e, t),
  lineHeight: (e, t) => (0, $e.default)(Tx, e, t),
  textAlign: (e, t) => (0, $e.default)(mx, e, t),
  textDecoration: (e, t) => (0, $e.default)(hx, e, t),
  textOverflow: (e, t) => (0, $e.default)(bx, e, t),
  textShadow: (e, t) => (0, $e.default)(yx, e, t),
  textTransform: (e, t) => (0, $e.default)(vx, e, t),
  verticalAlign: (e, t) => (0, $e.default)(Cx, e, t),
  whiteSpace: (e, t) => (0, $e.default)(Px, e, t),
  wordBreak: (e, t) => (0, $e.default)(kx, e, t),
  wordWrap: (e, t) => (0, $e.default)(jx, e, t),
};
var Nn = {},
  lv =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Nn, "__esModule", { value: !0 });
Nn.propEnhancers = Nn.propValidators = Nn.propAliases = Nn.propTypes = void 0;
const Op = lv(he),
  Np = lv(_e);
Nn.propTypes = {
  transform: Op.default.string,
  transformOrigin: Op.default.string,
};
Nn.propAliases = {};
Nn.propValidators = {};
const Dx = {
    className: "tfrm",
    cssName: "transform",
    jsName: "transform",
    complexValue: !0,
  },
  zx = {
    className: "tfrm-orgn",
    cssName: "transform-origin",
    jsName: "transformOrigin",
    complexValue: !0,
  };
Nn.propEnhancers = {
  transform: (e, t) => (0, Np.default)(Dx, e, t),
  transformOrigin: (e, t) => (0, Np.default)(zx, e, t),
};
var En = {},
  sv =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(En, "__esModule", { value: !0 });
En.propEnhancers = En.propValidators = En.propAliases = En.propTypes = void 0;
const ci = sv(he),
  fi = sv(_e);
En.propTypes = {
  transition: ci.default.string,
  transitionDelay: ci.default.string,
  transitionDuration: ci.default.string,
  transitionProperty: ci.default.string,
  transitionTimingFunction: ci.default.string,
};
En.propAliases = {};
En.propValidators = {};
const $x = {
    className: "tstn",
    cssName: "transition",
    jsName: "transition",
    complexValue: !0,
  },
  Mx = {
    className: "tstn-dly",
    cssName: "transition-delay",
    jsName: "transitionDelay",
    complexValue: !0,
  },
  Ax = {
    className: "tstn-drn",
    cssName: "transition-duration",
    jsName: "transitionDuration",
    complexValue: !0,
  },
  Lx = {
    className: "tstn-pty",
    cssName: "transition-property",
    jsName: "transitionProperty",
    complexValue: !0,
  },
  Fx = {
    className: "tstn-tf",
    cssName: "transition-timing-function",
    jsName: "transitionTimingFunction",
    complexValue: !0,
  };
En.propEnhancers = {
  transition: (e, t) => (0, fi.default)($x, e, t),
  transitionDelay: (e, t) => (0, fi.default)(Mx, e, t),
  transitionDuration: (e, t) => (0, fi.default)(Ax, e, t),
  transitionProperty: (e, t) => (0, fi.default)(Lx, e, t),
  transitionTimingFunction: (e, t) => (0, fi.default)(Fx, e, t),
};
(function (e) {
  var t =
      (k && k.__createBinding) ||
      (Object.create
        ? function (R, A, q, re) {
            re === void 0 && (re = q);
            var ie = Object.getOwnPropertyDescriptor(A, q);
            (!ie ||
              ("get" in ie ? !A.__esModule : ie.writable || ie.configurable)) &&
              (ie = {
                enumerable: !0,
                get: function () {
                  return A[q];
                },
              }),
              Object.defineProperty(R, re, ie);
          }
        : function (R, A, q, re) {
            re === void 0 && (re = q), (R[re] = A[q]);
          }),
    n =
      (k && k.__setModuleDefault) ||
      (Object.create
        ? function (R, A) {
            Object.defineProperty(R, "default", { enumerable: !0, value: A });
          }
        : function (R, A) {
            R.default = A;
          }),
    r =
      (k && k.__importStar) ||
      function (R) {
        if (R && R.__esModule) return R;
        var A = {};
        if (R != null)
          for (var q in R)
            q !== "default" &&
              Object.prototype.hasOwnProperty.call(R, q) &&
              t(A, R, q);
        return n(A, R), A;
      };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.propEnhancers =
      e.propValidators =
      e.propAliases =
      e.propNames =
      e.propTypes =
      e.transition =
      e.transform =
      e.text =
      e.svg =
      e.spacing =
      e.selectors =
      e.resize =
      e.position =
      e.overflow =
      e.outline =
      e.opacity =
      e.list =
      e.layout =
      e.interaction =
      e.grid =
      e.flex =
      e.dimensions =
      e.boxShadow =
      e.borders =
      e.borderRadius =
      e.background =
      e.animation =
        void 0);
  const o = r(on);
  e.animation = o;
  const i = r(an);
  e.background = i;
  const a = r(ln);
  e.borderRadius = a;
  const l = r(sn);
  e.borders = l;
  const s = r(un);
  e.boxShadow = s;
  const u = r(cn);
  e.dimensions = u;
  const p = r(fn);
  e.flex = p;
  const m = r(dn);
  e.grid = m;
  const h = r(pn);
  e.interaction = h;
  const y = r(gn);
  e.layout = y;
  const x = r(mn);
  e.list = x;
  const b = r(hn);
  e.opacity = b;
  const O = r(vn);
  e.outline = O;
  const d = r(yn);
  e.overflow = d;
  const c = r(bn);
  e.position = c;
  const g = r(Sn);
  e.resize = g;
  const w = r(wn);
  e.selectors = w;
  const N = r(_n);
  e.spacing = N;
  const T = r(xn);
  e.svg = T;
  const E = r(On);
  e.text = E;
  const C = r(Nn);
  e.transform = C;
  const z = r(En);
  (e.transition = z),
    (e.propTypes = Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              Object.assign(
                                Object.assign(
                                  Object.assign(
                                    Object.assign(
                                      Object.assign(
                                        Object.assign(
                                          Object.assign(
                                            Object.assign(
                                              Object.assign({}, o.propTypes),
                                              i.propTypes
                                            ),
                                            a.propTypes
                                          ),
                                          l.propTypes
                                        ),
                                        s.propTypes
                                      ),
                                      u.propTypes
                                    ),
                                    p.propTypes
                                  ),
                                  m.propTypes
                                ),
                                h.propTypes
                              ),
                              y.propTypes
                            ),
                            x.propTypes
                          ),
                          b.propTypes
                        ),
                        O.propTypes
                      ),
                      d.propTypes
                    ),
                    c.propTypes
                  ),
                  g.propTypes
                ),
                w.propTypes
              ),
              N.propTypes
            ),
            T.propTypes
          ),
          E.propTypes
        ),
        C.propTypes
      ),
      z.propTypes
    )),
    (e.propNames = Object.keys(e.propTypes)),
    (e.propAliases = Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              Object.assign(
                                Object.assign(
                                  Object.assign(
                                    Object.assign(
                                      Object.assign(
                                        Object.assign(
                                          Object.assign(
                                            Object.assign(
                                              Object.assign({}, o.propAliases),
                                              i.propAliases
                                            ),
                                            a.propAliases
                                          ),
                                          l.propAliases
                                        ),
                                        s.propAliases
                                      ),
                                      u.propAliases
                                    ),
                                    p.propAliases
                                  ),
                                  m.propAliases
                                ),
                                h.propAliases
                              ),
                              y.propAliases
                            ),
                            x.propAliases
                          ),
                          b.propAliases
                        ),
                        O.propAliases
                      ),
                      d.propAliases
                    ),
                    c.propAliases
                  ),
                  g.propAliases
                ),
                w.propAliases
              ),
              N.propAliases
            ),
            T.propAliases
          ),
          E.propAliases
        ),
        C.propAliases
      ),
      z.propAliases
    )),
    (e.propValidators = Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              Object.assign(
                                Object.assign(
                                  Object.assign(
                                    Object.assign(
                                      Object.assign(
                                        Object.assign(
                                          Object.assign(
                                            Object.assign(
                                              Object.assign(
                                                {},
                                                o.propValidators
                                              ),
                                              i.propValidators
                                            ),
                                            a.propValidators
                                          ),
                                          l.propValidators
                                        ),
                                        s.propValidators
                                      ),
                                      u.propValidators
                                    ),
                                    p.propValidators
                                  ),
                                  m.propValidators
                                ),
                                h.propValidators
                              ),
                              y.propValidators
                            ),
                            x.propValidators
                          ),
                          b.propValidators
                        ),
                        O.propValidators
                      ),
                      d.propValidators
                    ),
                    c.propValidators
                  ),
                  g.propValidators
                ),
                w.propValidators
              ),
              N.propValidators
            ),
            T.propValidators
          ),
          E.propValidators
        ),
        C.propValidators
      ),
      z.propValidators
    )),
    (e.propEnhancers = Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              Object.assign(
                                Object.assign(
                                  Object.assign(
                                    Object.assign(
                                      Object.assign(
                                        Object.assign(
                                          Object.assign(
                                            Object.assign(
                                              Object.assign(
                                                {},
                                                o.propEnhancers
                                              ),
                                              i.propEnhancers
                                            ),
                                            a.propEnhancers
                                          ),
                                          l.propEnhancers
                                        ),
                                        s.propEnhancers
                                      ),
                                      u.propEnhancers
                                    ),
                                    p.propEnhancers
                                  ),
                                  m.propEnhancers
                                ),
                                h.propEnhancers
                              ),
                              y.propEnhancers
                            ),
                            x.propEnhancers
                          ),
                          b.propEnhancers
                        ),
                        O.propEnhancers
                      ),
                      d.propEnhancers
                    ),
                    c.propEnhancers
                  ),
                  g.propEnhancers
                ),
                w.propEnhancers
              ),
              N.propEnhancers
            ),
            T.propEnhancers
          ),
          E.propEnhancers
        ),
        C.propEnhancers
      ),
      z.propEnhancers
    ));
})(Zr);
var Of = {},
  Nf = {};
Object.defineProperty(Nf, "__esModule", { value: !0 });
const Ix = Zr;
function Bx(e) {
  const t = Object.keys(e),
    n = new Map();
  return (
    t.forEach((r) => {
      const o = e[r];
      (Ix.propAliases[r] || [r]).forEach((a) => {
        n.set(a, o);
      });
    }),
    n
  );
}
Nf.default = Bx;
var Wx =
    (k && k.__createBinding) ||
    (Object.create
      ? function (e, t, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(t, n);
          (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }),
            Object.defineProperty(e, r, o);
        }
      : function (e, t, n, r) {
          r === void 0 && (r = n), (e[r] = t[n]);
        }),
  Vx =
    (k && k.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, "default", { enumerable: !0, value: t });
        }
      : function (e, t) {
          e.default = t;
        }),
  uv =
    (k && k.__importStar) ||
    function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null)
        for (var n in e)
          n !== "default" &&
            Object.prototype.hasOwnProperty.call(e, n) &&
            Wx(t, e, n);
      return Vx(t, e), t;
    },
  Hx =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Of, "__esModule", { value: !0 });
const Ux = Zr,
  Gx = Hx(Nf),
  Ep = uv(lt),
  Kx = uv(kn),
  Tp = "selectors";
function cv(e, t = "", n = "") {
  const r = (0, Gx.default)(e),
    o = {};
  let i = e.className || "";
  for (const [a, l] of r) {
    const s = a === Tp || n.length > 0;
    if (Xx(l) && s) {
      const h = a === Tp ? "" : a,
        y = t.includes(",")
          ? t
              .split(",")
              .map((b) => `${b}${h}`)
              .join(",")
          : `${t}${h}`,
        x = cv(l, Yx(y), a);
      i = `${i} ${x.className}`;
      continue;
    }
    const u = Ux.propEnhancers[a];
    if (!u) {
      o[a] = l;
      continue;
    }
    if (l == null || l === !1) continue;
    const p = Ep.get(a, l, t);
    if (p) {
      i = `${i} ${p}`;
      continue;
    }
    const m = u(l, t);
    m &&
      (Kx.add(m.styles),
      Ep.set(a, l, m.className, t),
      (i = `${i} ${m.className}`));
  }
  return (i = i.trim()), { className: i, enhancedProps: o };
}
Of.default = cv;
const Xx = (e) => e != null && typeof e == "object",
  Yx = (e) => e.replace(/&/g, "");
var Ht = {};
Object.defineProperty(Ht, "__esModule", { value: !0 });
Ht.extractAnchorProps =
  Ht.getURLInfo =
  Ht.getUseSafeHref =
  Ht.configureSafeHref =
    void 0;
const Qx = /^[a-z]+:/,
  Zx = /^(?:[a-z]+:?:)?(?:\/\/)?([^\/\?]+)/;
let fv = !0,
  fc = typeof window < "u" ? window.location.origin : !1;
function Jx(e) {
  typeof e.enabled == "boolean" && (fv = e.enabled),
    e.origin && (fc = e.origin);
}
Ht.configureSafeHref = Jx;
function qx() {
  return fv;
}
Ht.getUseSafeHref = qx;
function dv(e) {
  const t = ["http:", "https:", "mailto:", "tel:", "data:"],
    n = e.match(Qx),
    r = e.match(Zx),
    o = n ? n[0] : "relative";
  let i = o === "relative";
  return (
    !i && fc && (i = fc === (r && r[0])),
    (i ? !0 : t.includes(o))
      ? { url: e, sameOrigin: i }
      : (console.error(
          "📦 `href` passed to anchor tag is unsafe. Because of this, the `href` on the element was not set. Please review the safe href documentation if you have questions.",
          "https://www.github.com/segmentio/ui-box"
        ),
        { url: void 0, sameOrigin: i })
  );
}
Ht.getURLInfo = dv;
function eO(e, t) {
  const n = dv(e),
    r = n.url;
  let o = t || "";
  return (
    n.url &&
      (o.includes("noopener") || (o += `${o.length > 0 ? " " : ""}noopener`),
      !o.includes("noreferrer") &&
        !n.sameOrigin &&
        (o += `${o.length > 0 ? " " : ""}noreferrer`)),
    { safeHref: r, safeRel: o }
  );
}
Ht.extractAnchorProps = eO;
var tO =
    (k && k.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    },
  Ef =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(yf, "__esModule", { value: !0 });
const Cp = Ef(S),
  di = Ef(he),
  nO = Zr,
  rO = Ef(Of),
  kp = Ht,
  us = Cp.default.forwardRef((e, t) => {
    var { is: n, children: r, allowUnsafeHref: o } = e,
      i = tO(e, ["is", "children", "allowUnsafeHref"]);
    const { className: a, enhancedProps: l } = (0, rO.default)(i);
    if (
      ((l.className = a),
      t && (l.ref = t),
      (typeof o == "boolean" ? !o : (0, kp.getUseSafeHref)()) &&
        n === "a" &&
        l.href)
    ) {
      const { safeHref: u, safeRel: p } = (0, kp.extractAnchorProps)(
        l.href,
        l.rel
      );
      (l.href = u), (l.rel = p);
    }
    return Cp.default.createElement(n || "div", l, r);
  });
us.displayName = "Box";
us.propTypes = Object.assign(Object.assign({}, nO.propTypes), {
  is: di.default.oneOfType([
    di.default.string,
    di.default.func,
    di.default.elementType,
  ]),
  allowUnsafeHref: di.default.bool,
});
us.defaultProps = { is: "div", boxSizing: "border-box" };
yf.default = us;
var Tf = {},
  Cf = {};
Object.defineProperty(Cf, "__esModule", { value: !0 });
const dc = (e) =>
  Object.keys(e)
    .map((n) => {
      const r = e[n],
        o = typeof r;
      return Array.isArray(r)
        ? `${n}:array:[${r.map((i, a) => dc({ [a]: i }))}]`
        : r != null && o === "object"
        ? `${n}:${o}:${dc(r)}`
        : `${n}:${o}:${r}`;
    })
    .join(";");
Cf.default = dc;
var oO =
    (k && k.__createBinding) ||
    (Object.create
      ? function (e, t, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(t, n);
          (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }),
            Object.defineProperty(e, r, o);
        }
      : function (e, t, n, r) {
          r === void 0 && (r = n), (e[r] = t[n]);
        }),
  iO =
    (k && k.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, "default", { enumerable: !0, value: t });
        }
      : function (e, t) {
          e.default = t;
        }),
  pv =
    (k && k.__importStar) ||
    function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null)
        for (var n in e)
          n !== "default" &&
            Object.prototype.hasOwnProperty.call(e, n) &&
            oO(t, e, n);
      return iO(t, e), t;
    },
  kf =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Tf, "__esModule", { value: !0 });
const aO = kf(Ih),
  lO = kf(Cf),
  sO = Zr,
  cl = kf(ia),
  uO = pv(kn),
  jp = pv(lt),
  cO = (e, t) => {
    const n = (0, aO.default)((0, lO.default)(t)),
      r = `${e}_${n}`;
    if (jp.get(e, n, "keyframe") != null) return r;
    const a = Object.keys(t).map((s) => dO(s, t[s] || {})),
      l = gO(r, a);
    return jp.set(e, n, l, "keyframe"), uO.add(l), r;
  },
  fO = (e) => [].concat(...e),
  dO = (e, t) => {
    const n = Object.keys(t),
      r = fO(n.map((a) => pO(a, t))),
      o = mO(e),
      i = r
        .map((a) => {
          const { property: l, value: s } = a;
          return (0, cl.default)() ? `${l}:${s};` : `    ${l}: ${s};`;
        })
        .join(
          (0, cl.default)()
            ? ""
            : `
`
        );
    return (0, cl.default)()
      ? `${o} {${i}}`
      : `  ${o} {
${i}
  }`;
  },
  pO = (e, t) => {
    const n = t[e],
      r = sO.propEnhancers[e];
    if (r == null || n == null || n === !1) return [];
    const o = r(n, "");
    return o == null ? [] : o.rules;
  },
  gO = (e, t) => {
    const n = (0, cl.default)()
        ? ""
        : `
`,
      r = `{${n}`,
      o = `${n}}`,
      i = t.join(n);
    return `@keyframes ${e} ${r}${i}${o}`;
  },
  mO = (e) => (!isNaN(Number(e)) ? `${e}%` : e.toString());
Tf.default = cO;
var cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 });
function hO(e, t) {
  const n = {},
    r = {},
    o = Object.keys(e);
  for (let i = 0; i < o.length; i++) {
    const a = o[i],
      l = e[a];
    t.includes(a) ? (n[a] = l) : (r[a] = l);
  }
  return { matchedProps: n, remainingProps: r };
}
cs.default = hO;
var jf = {},
  vO =
    (k && k.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(jf, "__esModule", { value: !0 });
const yO = Zr,
  bO = vO(cs);
function SO(e) {
  return (0, bO.default)(e, yO.propNames);
}
jf.default = SO;
(function (e) {
  var t =
      (k && k.__createBinding) ||
      (Object.create
        ? function (O, d, c, g) {
            g === void 0 && (g = c);
            var w = Object.getOwnPropertyDescriptor(d, c);
            (!w ||
              ("get" in w ? !d.__esModule : w.writable || w.configurable)) &&
              (w = {
                enumerable: !0,
                get: function () {
                  return d[c];
                },
              }),
              Object.defineProperty(O, g, w);
          }
        : function (O, d, c, g) {
            g === void 0 && (g = c), (O[g] = d[c]);
          }),
    n =
      (k && k.__setModuleDefault) ||
      (Object.create
        ? function (O, d) {
            Object.defineProperty(O, "default", { enumerable: !0, value: d });
          }
        : function (O, d) {
            O.default = d;
          }),
    r =
      (k && k.__importStar) ||
      function (O) {
        if (O && O.__esModule) return O;
        var d = {};
        if (O != null)
          for (var c in O)
            c !== "default" &&
              Object.prototype.hasOwnProperty.call(O, c) &&
              t(d, O, c);
        return n(d, O), d;
      },
    o =
      (k && k.__importDefault) ||
      function (O) {
        return O && O.__esModule ? O : { default: O };
      };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.clearStyles =
      e.extractStyles =
      e.hydrate =
      e.propEnhancers =
      e.propAliases =
      e.propNames =
      e.propTypes =
      e.transform =
      e.text =
      e.spacing =
      e.position =
      e.overflow =
      e.opacity =
      e.list =
      e.layout =
      e.interaction =
      e.flex =
      e.dimensions =
      e.boxShadow =
      e.borders =
      e.borderRadius =
      e.background =
      e.configureSafeHref =
      e.setClassNamePrefix =
      e.splitBoxProps =
      e.splitProps =
      e.keyframes =
      e.default =
        void 0);
  const i = r(lt),
    a = r(kn);
  var l = yf;
  Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function () {
      return o(l).default;
    },
  });
  var s = Tf;
  Object.defineProperty(e, "keyframes", {
    enumerable: !0,
    get: function () {
      return o(s).default;
    },
  });
  var u = cs;
  Object.defineProperty(e, "splitProps", {
    enumerable: !0,
    get: function () {
      return o(u).default;
    },
  });
  var p = jf;
  Object.defineProperty(e, "splitBoxProps", {
    enumerable: !0,
    get: function () {
      return o(p).default;
    },
  });
  var m = Kn;
  Object.defineProperty(e, "setClassNamePrefix", {
    enumerable: !0,
    get: function () {
      return m.setClassNamePrefix;
    },
  });
  var h = Ht;
  Object.defineProperty(e, "configureSafeHref", {
    enumerable: !0,
    get: function () {
      return h.configureSafeHref;
    },
  });
  var y = Zr;
  Object.defineProperty(e, "background", {
    enumerable: !0,
    get: function () {
      return y.background;
    },
  }),
    Object.defineProperty(e, "borderRadius", {
      enumerable: !0,
      get: function () {
        return y.borderRadius;
      },
    }),
    Object.defineProperty(e, "borders", {
      enumerable: !0,
      get: function () {
        return y.borders;
      },
    }),
    Object.defineProperty(e, "boxShadow", {
      enumerable: !0,
      get: function () {
        return y.boxShadow;
      },
    }),
    Object.defineProperty(e, "dimensions", {
      enumerable: !0,
      get: function () {
        return y.dimensions;
      },
    }),
    Object.defineProperty(e, "flex", {
      enumerable: !0,
      get: function () {
        return y.flex;
      },
    }),
    Object.defineProperty(e, "interaction", {
      enumerable: !0,
      get: function () {
        return y.interaction;
      },
    }),
    Object.defineProperty(e, "layout", {
      enumerable: !0,
      get: function () {
        return y.layout;
      },
    }),
    Object.defineProperty(e, "list", {
      enumerable: !0,
      get: function () {
        return y.list;
      },
    }),
    Object.defineProperty(e, "opacity", {
      enumerable: !0,
      get: function () {
        return y.opacity;
      },
    }),
    Object.defineProperty(e, "overflow", {
      enumerable: !0,
      get: function () {
        return y.overflow;
      },
    }),
    Object.defineProperty(e, "position", {
      enumerable: !0,
      get: function () {
        return y.position;
      },
    }),
    Object.defineProperty(e, "spacing", {
      enumerable: !0,
      get: function () {
        return y.spacing;
      },
    }),
    Object.defineProperty(e, "text", {
      enumerable: !0,
      get: function () {
        return y.text;
      },
    }),
    Object.defineProperty(e, "transform", {
      enumerable: !0,
      get: function () {
        return y.transform;
      },
    }),
    Object.defineProperty(e, "propTypes", {
      enumerable: !0,
      get: function () {
        return y.propTypes;
      },
    }),
    Object.defineProperty(e, "propNames", {
      enumerable: !0,
      get: function () {
        return y.propNames;
      },
    }),
    Object.defineProperty(e, "propAliases", {
      enumerable: !0,
      get: function () {
        return y.propAliases;
      },
    }),
    Object.defineProperty(e, "propEnhancers", {
      enumerable: !0,
      get: function () {
        return y.propEnhancers;
      },
    }),
    (e.hydrate = i.hydrate);
  function x() {
    const O = { cache: i.entries(), styles: a.getAll() };
    return b(), O;
  }
  e.extractStyles = x;
  function b() {
    i.clear(), a.clear();
  }
  e.clearStyles = b;
})(hf);
const fs = Xn(hf);
function Kr(e) {
  "@babel/helpers - typeof";
  return (
    (Kr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Kr(e)
  );
}
function wO(e, t) {
  if (Kr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Kr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _O(e) {
  var t = wO(e, "string");
  return Kr(t) == "symbol" ? t : t + "";
}
function Yt(e, t, n) {
  return (
    (t = _O(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Io() {
  return (
    (Io = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Io.apply(null, arguments)
  );
}
function gv(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Bo(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = gv(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      (n = i[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (o[n] = e[n]);
  }
  return o;
}
function xO(e) {
  if (Array.isArray(e)) return e;
}
function OO(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      o,
      i,
      a,
      l = [],
      s = !0,
      u = !1;
    try {
      if (((i = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        s = !1;
      } else
        for (
          ;
          !(s = (r = i.call(n)).done) && (l.push(r.value), l.length !== t);
          s = !0
        );
    } catch (p) {
      (u = !0), (o = p);
    } finally {
      try {
        if (!s && n.return != null && ((a = n.return()), Object(a) !== a))
          return;
      } finally {
        if (u) throw o;
      }
    }
    return l;
  }
}
function Pp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function NO(e, t) {
  if (e) {
    if (typeof e == "string") return Pp(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set"
        ? Array.from(e)
        : n === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? Pp(e, t)
        : void 0
    );
  }
}
function EO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zi(e, t) {
  return xO(e) || OO(e, t) || NO(e, t) || EO();
}
var TO = 0;
function CO(e, t) {
  var n = S.useState(function () {
      return t || [e, ++TO].filter(Boolean).join("-");
    }),
    r = Zi(n, 1),
    o = r[0];
  return o;
}
var kO = typeof document < "u" ? S.useLayoutEffect : S.useEffect;
function Rp(e, t) {
  typeof e == "function" ? e(t) : e && "current" in e && (e.current = t);
}
function Dp(e, t) {
  return V.useMemo(
    function () {
      return !e && !t
        ? null
        : function (n) {
            Rp(e, n), Rp(t, n);
          };
    },
    [e, t]
  );
}
function jO(e, t) {
  var n = V.useRef(t);
  return (
    V.useEffect(
      function () {
        n.current = e;
      },
      [e]
    ),
    n.current
  );
}
var Ll = { exports: {} };
Ll.exports;
(function (e, t) {
  var n = 200,
    r = "__lodash_hash_undefined__",
    o = 800,
    i = 16,
    a = 9007199254740991,
    l = "[object Arguments]",
    s = "[object Array]",
    u = "[object AsyncFunction]",
    p = "[object Boolean]",
    m = "[object Date]",
    h = "[object Error]",
    y = "[object Function]",
    x = "[object GeneratorFunction]",
    b = "[object Map]",
    O = "[object Number]",
    d = "[object Null]",
    c = "[object Object]",
    g = "[object Proxy]",
    w = "[object RegExp]",
    N = "[object Set]",
    T = "[object String]",
    E = "[object Undefined]",
    C = "[object WeakMap]",
    z = "[object ArrayBuffer]",
    R = "[object DataView]",
    A = "[object Float32Array]",
    q = "[object Float64Array]",
    re = "[object Int8Array]",
    ie = "[object Int16Array]",
    Qt = "[object Int32Array]",
    Ot = "[object Uint8Array]",
    ke = "[object Uint8ClampedArray]",
    j = "[object Uint16Array]",
    M = "[object Uint32Array]",
    F = /[\\^$.*+?()[\]{}|]/g,
    Q = /^\[object .+?Constructor\]$/,
    K = /^(?:0|[1-9]\d*)$/,
    U = {};
  (U[A] = U[q] = U[re] = U[ie] = U[Qt] = U[Ot] = U[ke] = U[j] = U[M] = !0),
    (U[l] =
      U[s] =
      U[z] =
      U[p] =
      U[R] =
      U[m] =
      U[h] =
      U[y] =
      U[b] =
      U[O] =
      U[c] =
      U[w] =
      U[N] =
      U[T] =
      U[C] =
        !1);
  var xe = typeof k == "object" && k && k.Object === Object && k,
    Ye = typeof self == "object" && self && self.Object === Object && self,
    Z = xe || Ye || Function("return this")(),
    dt = t && !t.nodeType && t,
    zt = dt && !0 && e && !e.nodeType && e,
    Tr = zt && zt.exports === dt,
    Qe = Tr && xe.process,
    Jr = (function () {
      try {
        var f = zt && zt.require && zt.require("util").types;
        return f || (Qe && Qe.binding && Qe.binding("util"));
      } catch {}
    })(),
    Zt = Jr && Jr.isTypedArray;
  function fa(f, v, _) {
    switch (_.length) {
      case 0:
        return f.call(v);
      case 1:
        return f.call(v, _[0]);
      case 2:
        return f.call(v, _[0], _[1]);
      case 3:
        return f.call(v, _[0], _[1], _[2]);
    }
    return f.apply(v, _);
  }
  function Pn(f, v) {
    for (var _ = -1, $ = Array(f); ++_ < f; ) $[_] = v(_);
    return $;
  }
  function qr(f) {
    return function (v) {
      return f(v);
    };
  }
  function Zn(f, v) {
    return f?.[v];
  }
  function da(f, v) {
    return function (_) {
      return f(v(_));
    };
  }
  var pa = Array.prototype,
    Ko = Function.prototype,
    pt = Object.prototype,
    Jn = Z["__core-js_shared__"],
    Rn = Ko.toString,
    $t = pt.hasOwnProperty,
    Xo = (function () {
      var f = /[^.]+$/.exec((Jn && Jn.keys && Jn.keys.IE_PROTO) || "");
      return f ? "Symbol(src)_1." + f : "";
    })(),
    ga = pt.toString,
    ys = Rn.call(Object),
    qn = RegExp(
      "^" +
        Rn.call($t)
          .replace(F, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Mt = Tr ? Z.Buffer : void 0,
    er = Z.Symbol,
    Yo = Z.Uint8Array;
  Mt && Mt.allocUnsafe;
  var At = da(Object.getPrototypeOf, Object),
    Qo = Object.create,
    bs = pt.propertyIsEnumerable,
    Ss = pa.splice,
    Jt = er ? er.toStringTag : void 0,
    eo = (function () {
      try {
        var f = Os(Object, "defineProperty");
        return f({}, "", {}), f;
      } catch {}
    })(),
    ma = Mt ? Mt.isBuffer : void 0,
    ha = Math.max,
    ws = Date.now,
    va = Os(Z, "Map"),
    ve = Os(Object, "create"),
    Ze = (function () {
      function f() {}
      return function (v) {
        if (!Pr(v)) return {};
        if (Qo) return Qo(v);
        f.prototype = v;
        var _ = new f();
        return (f.prototype = void 0), _;
      };
    })();
  function Ne(f) {
    var v = -1,
      _ = f == null ? 0 : f.length;
    for (this.clear(); ++v < _; ) {
      var $ = f[v];
      this.set($[0], $[1]);
    }
  }
  function qt() {
    (this.__data__ = ve ? ve(null) : {}), (this.size = 0);
  }
  function ot(f) {
    var v = this.has(f) && delete this.__data__[f];
    return (this.size -= v ? 1 : 0), v;
  }
  function gt(f) {
    var v = this.__data__;
    if (ve) {
      var _ = v[f];
      return _ === r ? void 0 : _;
    }
    return $t.call(v, f) ? v[f] : void 0;
  }
  function Nt(f) {
    var v = this.__data__;
    return ve ? v[f] !== void 0 : $t.call(v, f);
  }
  function tr(f, v) {
    var _ = this.__data__;
    return (
      (this.size += this.has(f) ? 0 : 1),
      (_[f] = ve && v === void 0 ? r : v),
      this
    );
  }
  (Ne.prototype.clear = qt),
    (Ne.prototype.delete = ot),
    (Ne.prototype.get = gt),
    (Ne.prototype.has = Nt),
    (Ne.prototype.set = tr);
  function Ee(f) {
    var v = -1,
      _ = f == null ? 0 : f.length;
    for (this.clear(); ++v < _; ) {
      var $ = f[v];
      this.set($[0], $[1]);
    }
  }
  function Cr() {
    (this.__data__ = []), (this.size = 0);
  }
  function kr(f) {
    var v = this.__data__,
      _ = ba(v, f);
    if (_ < 0) return !1;
    var $ = v.length - 1;
    return _ == $ ? v.pop() : Ss.call(v, _, 1), --this.size, !0;
  }
  function to(f) {
    var v = this.__data__,
      _ = ba(v, f);
    return _ < 0 ? void 0 : v[_][1];
  }
  function no(f) {
    return ba(this.__data__, f) > -1;
  }
  function ya(f, v) {
    var _ = this.__data__,
      $ = ba(_, f);
    return $ < 0 ? (++this.size, _.push([f, v])) : (_[$][1] = v), this;
  }
  (Ee.prototype.clear = Cr),
    (Ee.prototype.delete = kr),
    (Ee.prototype.get = to),
    (Ee.prototype.has = no),
    (Ee.prototype.set = ya);
  function Et(f) {
    var v = -1,
      _ = f == null ? 0 : f.length;
    for (this.clear(); ++v < _; ) {
      var $ = f[v];
      this.set($[0], $[1]);
    }
  }
  function jr() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Ne(),
        map: new (va || Ee)(),
        string: new Ne(),
      });
  }
  function Zo(f) {
    var v = wa(this, f).delete(f);
    return (this.size -= v ? 1 : 0), v;
  }
  function Zv(f) {
    return wa(this, f).get(f);
  }
  function Jv(f) {
    return wa(this, f).has(f);
  }
  function qv(f, v) {
    var _ = wa(this, f),
      $ = _.size;
    return _.set(f, v), (this.size += _.size == $ ? 0 : 1), this;
  }
  (Et.prototype.clear = jr),
    (Et.prototype.delete = Zo),
    (Et.prototype.get = Zv),
    (Et.prototype.has = Jv),
    (Et.prototype.set = qv);
  function ro(f) {
    var v = (this.__data__ = new Ee(f));
    this.size = v.size;
  }
  function ey() {
    (this.__data__ = new Ee()), (this.size = 0);
  }
  function ty(f) {
    var v = this.__data__,
      _ = v.delete(f);
    return (this.size = v.size), _;
  }
  function ny(f) {
    return this.__data__.get(f);
  }
  function ry(f) {
    return this.__data__.has(f);
  }
  function oy(f, v) {
    var _ = this.__data__;
    if (_ instanceof Ee) {
      var $ = _.__data__;
      if (!va || $.length < n - 1)
        return $.push([f, v]), (this.size = ++_.size), this;
      _ = this.__data__ = new Et($);
    }
    return _.set(f, v), (this.size = _.size), this;
  }
  (ro.prototype.clear = ey),
    (ro.prototype.delete = ty),
    (ro.prototype.get = ny),
    (ro.prototype.has = ry),
    (ro.prototype.set = oy);
  function iy(f, v) {
    var _ = Ts(f),
      $ = !_ && Es(f),
      Y = !_ && !$ && Kf(f),
      ae = !_ && !$ && !Y && Yf(f),
      pe = _ || $ || Y || ae,
      ee = pe ? Pn(f.length, String) : [],
      ge = ee.length;
    for (var Lt in f)
      (pe &&
        (Lt == "length" ||
          (Y && (Lt == "offset" || Lt == "parent")) ||
          (ae &&
            (Lt == "buffer" || Lt == "byteLength" || Lt == "byteOffset")) ||
          Uf(Lt, ge))) ||
        ee.push(Lt);
    return ee;
  }
  function _s(f, v, _) {
    ((_ !== void 0 && !_a(f[v], _)) || (_ === void 0 && !(v in f))) &&
      xs(f, v, _);
  }
  function ay(f, v, _) {
    var $ = f[v];
    (!($t.call(f, v) && _a($, _)) || (_ === void 0 && !(v in f))) &&
      xs(f, v, _);
  }
  function ba(f, v) {
    for (var _ = f.length; _--; ) if (_a(f[_][0], v)) return _;
    return -1;
  }
  function xs(f, v, _) {
    v == "__proto__" && eo
      ? eo(f, v, { configurable: !0, enumerable: !0, value: _, writable: !0 })
      : (f[v] = _);
  }
  var ly = Sy();
  function Sa(f) {
    return f == null
      ? f === void 0
        ? E
        : d
      : Jt && Jt in Object(f)
      ? wy(f)
      : Ty(f);
  }
  function Vf(f) {
    return Jo(f) && Sa(f) == l;
  }
  function sy(f) {
    if (!Pr(f) || Ny(f)) return !1;
    var v = ks(f) ? qn : Q;
    return v.test(Py(f));
  }
  function uy(f) {
    return Jo(f) && Xf(f.length) && !!U[Sa(f)];
  }
  function cy(f) {
    if (!Pr(f)) return Ey(f);
    var v = Gf(f),
      _ = [];
    for (var $ in f) ($ == "constructor" && (v || !$t.call(f, $))) || _.push($);
    return _;
  }
  function Hf(f, v, _, $, Y) {
    f !== v &&
      ly(
        v,
        function (ae, pe) {
          if ((Y || (Y = new ro()), Pr(ae))) fy(f, v, pe, _, Hf, $, Y);
          else {
            var ee = $ ? $(Ns(f, pe), ae, pe + "", f, v, Y) : void 0;
            ee === void 0 && (ee = ae), _s(f, pe, ee);
          }
        },
        Qf
      );
  }
  function fy(f, v, _, $, Y, ae, pe) {
    var ee = Ns(f, _),
      ge = Ns(v, _),
      Lt = pe.get(ge);
    if (Lt) {
      _s(f, _, Lt);
      return;
    }
    var mt = ae ? ae(ee, ge, _ + "", f, v, pe) : void 0,
      qo = mt === void 0;
    if (qo) {
      var js = Ts(ge),
        Ps = !js && Kf(ge),
        Jf = !js && !Ps && Yf(ge);
      (mt = ge),
        js || Ps || Jf
          ? Ts(ee)
            ? (mt = ee)
            : Ry(ee)
            ? (mt = vy(ee))
            : Ps
            ? ((qo = !1), (mt = gy(ge)))
            : Jf
            ? ((qo = !1), (mt = hy(ge)))
            : (mt = [])
          : Dy(ge) || Es(ge)
          ? ((mt = ee),
            Es(ee) ? (mt = zy(ee)) : (!Pr(ee) || ks(ee)) && (mt = _y(ge)))
          : (qo = !1);
    }
    qo && (pe.set(ge, mt), Y(mt, ge, $, ae, pe), pe.delete(ge)), _s(f, _, mt);
  }
  function dy(f, v) {
    return ky(Cy(f, v, Zf), f + "");
  }
  var py = eo
    ? function (f, v) {
        return eo(f, "toString", {
          configurable: !0,
          enumerable: !1,
          value: My(v),
          writable: !0,
        });
      }
    : Zf;
  function gy(f, v) {
    return f.slice();
  }
  function my(f) {
    var v = new f.constructor(f.byteLength);
    return new Yo(v).set(new Yo(f)), v;
  }
  function hy(f, v) {
    var _ = my(f.buffer);
    return new f.constructor(_, f.byteOffset, f.length);
  }
  function vy(f, v) {
    var _ = -1,
      $ = f.length;
    for (v || (v = Array($)); ++_ < $; ) v[_] = f[_];
    return v;
  }
  function yy(f, v, _, $) {
    var Y = !_;
    _ || (_ = {});
    for (var ae = -1, pe = v.length; ++ae < pe; ) {
      var ee = v[ae],
        ge = void 0;
      ge === void 0 && (ge = f[ee]), Y ? xs(_, ee, ge) : ay(_, ee, ge);
    }
    return _;
  }
  function by(f) {
    return dy(function (v, _) {
      var $ = -1,
        Y = _.length,
        ae = Y > 1 ? _[Y - 1] : void 0,
        pe = Y > 2 ? _[2] : void 0;
      for (
        ae = f.length > 3 && typeof ae == "function" ? (Y--, ae) : void 0,
          pe && xy(_[0], _[1], pe) && ((ae = Y < 3 ? void 0 : ae), (Y = 1)),
          v = Object(v);
        ++$ < Y;

      ) {
        var ee = _[$];
        ee && f(v, ee, $, ae);
      }
      return v;
    });
  }
  function Sy(f) {
    return function (v, _, $) {
      for (var Y = -1, ae = Object(v), pe = $(v), ee = pe.length; ee--; ) {
        var ge = pe[++Y];
        if (_(ae[ge], ge, ae) === !1) break;
      }
      return v;
    };
  }
  function wa(f, v) {
    var _ = f.__data__;
    return Oy(v) ? _[typeof v == "string" ? "string" : "hash"] : _.map;
  }
  function Os(f, v) {
    var _ = Zn(f, v);
    return sy(_) ? _ : void 0;
  }
  function wy(f) {
    var v = $t.call(f, Jt),
      _ = f[Jt];
    try {
      f[Jt] = void 0;
      var $ = !0;
    } catch {}
    var Y = ga.call(f);
    return $ && (v ? (f[Jt] = _) : delete f[Jt]), Y;
  }
  function _y(f) {
    return typeof f.constructor == "function" && !Gf(f) ? Ze(At(f)) : {};
  }
  function Uf(f, v) {
    var _ = typeof f;
    return (
      (v = v ?? a),
      !!v &&
        (_ == "number" || (_ != "symbol" && K.test(f))) &&
        f > -1 &&
        f % 1 == 0 &&
        f < v
    );
  }
  function xy(f, v, _) {
    if (!Pr(_)) return !1;
    var $ = typeof v;
    return ($ == "number" ? Cs(_) && Uf(v, _.length) : $ == "string" && v in _)
      ? _a(_[v], f)
      : !1;
  }
  function Oy(f) {
    var v = typeof f;
    return v == "string" || v == "number" || v == "symbol" || v == "boolean"
      ? f !== "__proto__"
      : f === null;
  }
  function Ny(f) {
    return !!Xo && Xo in f;
  }
  function Gf(f) {
    var v = f && f.constructor,
      _ = (typeof v == "function" && v.prototype) || pt;
    return f === _;
  }
  function Ey(f) {
    var v = [];
    if (f != null) for (var _ in Object(f)) v.push(_);
    return v;
  }
  function Ty(f) {
    return ga.call(f);
  }
  function Cy(f, v, _) {
    return (
      (v = ha(v === void 0 ? f.length - 1 : v, 0)),
      function () {
        for (
          var $ = arguments, Y = -1, ae = ha($.length - v, 0), pe = Array(ae);
          ++Y < ae;

        )
          pe[Y] = $[v + Y];
        Y = -1;
        for (var ee = Array(v + 1); ++Y < v; ) ee[Y] = $[Y];
        return (ee[v] = _(pe)), fa(f, this, ee);
      }
    );
  }
  function Ns(f, v) {
    if (!(v === "constructor" && typeof f[v] == "function") && v != "__proto__")
      return f[v];
  }
  var ky = jy(py);
  function jy(f) {
    var v = 0,
      _ = 0;
    return function () {
      var $ = ws(),
        Y = i - ($ - _);
      if (((_ = $), Y > 0)) {
        if (++v >= o) return arguments[0];
      } else v = 0;
      return f.apply(void 0, arguments);
    };
  }
  function Py(f) {
    if (f != null) {
      try {
        return Rn.call(f);
      } catch {}
      try {
        return f + "";
      } catch {}
    }
    return "";
  }
  function _a(f, v) {
    return f === v || (f !== f && v !== v);
  }
  var Es = Vf(
      (function () {
        return arguments;
      })()
    )
      ? Vf
      : function (f) {
          return Jo(f) && $t.call(f, "callee") && !bs.call(f, "callee");
        },
    Ts = Array.isArray;
  function Cs(f) {
    return f != null && Xf(f.length) && !ks(f);
  }
  function Ry(f) {
    return Jo(f) && Cs(f);
  }
  var Kf = ma || Ay;
  function ks(f) {
    if (!Pr(f)) return !1;
    var v = Sa(f);
    return v == y || v == x || v == u || v == g;
  }
  function Xf(f) {
    return typeof f == "number" && f > -1 && f % 1 == 0 && f <= a;
  }
  function Pr(f) {
    var v = typeof f;
    return f != null && (v == "object" || v == "function");
  }
  function Jo(f) {
    return f != null && typeof f == "object";
  }
  function Dy(f) {
    if (!Jo(f) || Sa(f) != c) return !1;
    var v = At(f);
    if (v === null) return !0;
    var _ = $t.call(v, "constructor") && v.constructor;
    return typeof _ == "function" && _ instanceof _ && Rn.call(_) == ys;
  }
  var Yf = Zt ? qr(Zt) : uy;
  function zy(f) {
    return yy(f, Qf(f));
  }
  function Qf(f) {
    return Cs(f) ? iy(f) : cy(f);
  }
  var $y = by(function (f, v, _) {
    Hf(f, v, _);
  });
  function My(f) {
    return function () {
      return f;
    };
  }
  function Zf(f) {
    return f;
  }
  function Ay() {
    return !1;
  }
  e.exports = $y;
})(Ll, Ll.exports);
var PO = Ll.exports;
const RO = Xn(PO);
var DO = typeof Element < "u",
  zO = typeof Map == "function",
  $O = typeof Set == "function",
  MO = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function fl(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!fl(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (zO && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!fl(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if ($O && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (MO && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (DO && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !fl(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var AO = function (t, n) {
  try {
    return fl(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const pc = Xn(AO);
var LO = function (t, n) {
    var r = n.intent,
      o = r === void 0 ? "info" : r;
    return {
      backgroundColor: "intents.".concat(o, ".background"),
      border: "1px solid ".concat(t.intents[o].border),
      borderRadius: "radii.2",
      color: t.intents[o].text,
    };
  },
  FO = {},
  IO = {};
const BO = { baseStyle: LO, appearances: FO, sizes: IO };
function zp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function WO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zp(Object(n), !0).forEach(function (r) {
          Yt(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : zp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function VO(e, t) {
  var n = t.color,
    r = t.hashValue;
  if (n === "automatic") {
    var o = Object.keys(e.fills);
    return r
      ? e.fills[o[r % o.length]]
      : e.fills[o[Math.floor(Math.random() * o.length)]];
  }
  return e.fills[n];
}
var HO = function (t, n) {
    return WO(
      { borderRadius: n.shape === "round" ? "100%" : "radii.1" },
      VO(t, n)
    );
  },
  UO = {},
  GO = {};
const KO = { baseStyle: HO, appearances: UO, sizes: GO };
function XO(e, t) {
  var n = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = YO(e)) || t) {
      n && (e = n);
      var r = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        },
        e: function (u) {
          throw u;
        },
        f: o,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0,
    a = !1,
    l;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var u = n.next();
      return (i = u.done), u;
    },
    e: function (u) {
      (a = !0), (l = u);
    },
    f: function () {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a) throw l;
      }
    },
  };
}
function YO(e, t) {
  if (e) {
    if (typeof e == "string") return $p(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return $p(e, t);
  }
}
function $p(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function wr(e, t, n) {
  var r = t && t.split ? t.split(".") : [t],
    o = e,
    i = XO(r),
    a;
  try {
    for (i.s(); !(a = i.n()).done; ) {
      var l = a.value;
      o = o ? o[l] : void 0;
    }
  } catch (s) {
    i.e(s);
  } finally {
    i.f();
  }
  return o === void 0 ? n : o;
}
function QO(e, t) {
  return wr(e, t, t);
}
function mv(e, t) {
  for (var n = {}, r = 0, o = Object.keys(t); r < o.length; r++) {
    var i = o[r],
      a = t[i];
    a !== null && (Kr(a) === "object" ? (n[i] = mv(e, a)) : (n[i] = QO(e, a)));
  }
  return n;
}
var ZO = {
    height: 16,
    paddingY: 0,
    paddingX: 6,
    borderRadius: "radii.1",
    fontSize: "11.5px",
    textAlign: "center",
    textDecoration: "none",
    textTransform: "uppercase",
  },
  JO = {
    subtle: function (t, n) {
      var r = wr(t, "fills.".concat(n.color), {
        backgroundColor: n.color,
        color: n.color,
      });
      return { color: r.color, backgroundColor: r.backgroundColor };
    },
  },
  qO = {};
const eN = { baseStyle: ZO, appearances: JO, sizes: qO };
var tN = {
    fontFamily: "fontFamilies.ui",
    border: "1px solid transparent",
    borderRadius: "radii.1",
    color: function (t, n) {
      var r = n.color;
      return t.colors[r] || r || "colors.default";
    },
    transition: "box-shadow 80ms ease-in-out",
    selectors: {
      _focus: { boxShadow: "shadows.focusRing" },
      _disabled: { cursor: "not-allowed", pointerEvents: "none" },
    },
  },
  nN = function (t, n) {
    if (t === "destructive") return "red";
    switch (n) {
      case "success":
        return "green";
      case "danger":
        return "red";
      default:
        return "blue";
    }
  },
  Mp = function (t) {
    return t === "danger" ? "red500" : t === "success" ? "green500" : "gray800";
  },
  Ap = function (t, n) {
    return t === "danger"
      ? "red".concat(n ? 500 : 300)
      : t === "success"
      ? "green".concat(n ? 400 : 300)
      : "gray".concat(n ? 600 : 500);
  },
  Lp = function (t, n, r, o) {
    var i = nN(t, n);
    return {
      backgroundColor: "colors.".concat(i, "500"),
      borderColor: "colors.".concat(i, "500"),
      color: r || "white",
      selectors: {
        _hover: {
          backgroundColor: "colors.".concat(i, "600"),
          borderColor: "colors.".concat(i, "600"),
        },
        _disabled: {
          backgroundColor: "colors.".concat(i, "100"),
          borderColor: "colors.".concat(i, "100"),
        },
        _focus: {
          backgroundColor: "colors.".concat(i, "500"),
          boxShadow: "0 0 0 2px ".concat(o && o.colors["".concat(i, "100")]),
          borderColor: "colors.".concat(i, "500"),
        },
        _active: {
          backgroundColor: "colors.".concat(i, "700"),
          borderColor: "colors.".concat(i, "700"),
        },
      },
    };
  },
  rN = {
    primary: function (t, n) {
      var r = n.appearance,
        o = n.color,
        i = n.intent;
      return Lp(r, i, o, t);
    },
    default: {
      backgroundColor: "white",
      border: function (t, n) {
        return "1px solid ".concat(t.colors[Ap(n.intent)]);
      },
      color: function (t, n) {
        return n.color || t.colors[Mp(n.intent)];
      },
      selectors: {
        _disabled: { color: "colors.gray500", borderColor: "colors.gray300" },
        _hover: {
          border: function (t, n) {
            return "1px solid ".concat(t.colors[Ap(n.intent, !0)]);
          },
          backgroundColor: "colors.gray50",
        },
        _active: { backgroundColor: "colors.gray100" },
      },
    },
    minimal: {
      backgroundColor: "transparent",
      color: function (t, n) {
        return n.color || t.colors[Mp(n.intent)];
      },
      selectors: {
        _disabled: { color: "colors.gray500", opacity: 0.6 },
        _hover: { backgroundColor: "colors.gray100" },
        _active: { backgroundColor: "colors.gray200" },
      },
    },
    destructive: Lp("destructive"),
  },
  oN = {
    small: {
      height: 24,
      minWidth: 24,
      fontSize: "fontSizes.1",
      lineHeight: "24px",
      paddingLeft: 12,
      paddingRight: 12,
    },
    medium: {
      height: 32,
      minWidth: 32,
      fontSize: "fontSizes.1",
      lineHeight: "32px",
      paddingLeft: 16,
      paddingRight: 16,
    },
    large: {
      height: 40,
      minWidth: 40,
      fontSize: "fontSizes.2",
      lineHeight: "40px",
      paddingLeft: 20,
      paddingRight: 20,
    },
  };
const iN = { baseStyle: tN, appearances: rN, sizes: oN };
var aN = { borderRadius: "radii.1" },
  lN = {},
  sN = {};
const uN = { baseStyle: aN, appearances: lN, sizes: sN };
var cN = {},
  fN = {
    default: {
      selectors: {
        _base: {
          color: "white",
          background: "white",
          boxShadow: function (t) {
            return "inset 0 0 0 1px ".concat(t.colors.gray400);
          },
        },
        _disabled: {
          cursor: "not-allowed",
          background: "colors.gray100",
          color: "colors.gray100",
          boxShadow: function (t) {
            return "inset 0 0 0 1px ".concat(t.colors.gray100);
          },
        },
        _hover: {
          boxShadow: function (t) {
            return "inset 0 0 0 1px ".concat(t.colors.gray600);
          },
        },
        _focus: {
          boxShadow: function (t) {
            return "0 0 0 2px ".concat(t.colors.blue100);
          },
        },
        _active: {
          background: "colors.gray100",
          boxShadow: function (t) {
            return "inset 0 0 0 1px ".concat(t.colors.gray500);
          },
        },
        _checked: {
          color: "white",
          boxShadow: function (t) {
            return "inset 0 0 0 -1px ".concat(t.colors.blue700);
          },
          background: "colors.blue500",
        },
        _checkedHover: {
          color: "white",
          background: "colors.blue600",
          boxShadow: function (t) {
            return "inset 0 0 0 1px ".concat(t.colors.blue600);
          },
        },
        _checkedActive: {
          color: "white",
          boxShadow: function (t) {
            return "inset 0 0 0 -1px ".concat(t.colors.blue700);
          },
          background: "colors.blue700",
        },
        _checkedDisabled: {
          color: "colors.gray600",
          background: "colors.gray100",
        },
      },
    },
  },
  dN = {};
const Fp = { baseStyle: cN, appearances: fN, sizes: dN };
var pN = {},
  gN = "rgba(16, 112, 202, 0.06)",
  mN = "rgba(16, 112, 202, 0.14)",
  hN = {
    default: {
      backgroundColor: gN,
      boxShadow: "inset 0 0 0 1px ".concat(mN),
      paddingX: 6,
      paddingY: 3,
      borderRadius: "radii.1",
    },
  },
  vN = {};
const yN = { baseStyle: pN, appearances: hN, sizes: vN };
var bN = { paddingY: 8, paddingX: 32 };
const SN = { baseStyle: bN };
var wN = { paddingX: 32, paddingBottom: 32, paddingTop: 24 };
const _N = { baseStyle: wN };
var xN = { paddingX: 32, paddingTop: 32, paddingBottom: 24 };
const ON = { baseStyle: xN };
var NN = {
  display: "flex",
  flexDirection: "row",
  height: 64,
  width: "100%",
  borderWidth: 1,
  borderRadius: "radii.1",
  borderStyle: "solid",
  borderColor: "colors.gray400",
  alignItems: "center",
  justifyContent: "space-between",
  selectors: {
    _invalid: { backgroundColor: "colors.red25", borderColor: "colors.red500" },
  },
};
const EN = { baseStyle: NN };
function Ip(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Bp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ip(Object(n), !0).forEach(function (r) {
          Yt(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ip(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var ye = {
    gray900: "#101840",
    gray800: "#474d66",
    gray700: "#696f8c",
    gray600: "#8f95b2",
    gray500: "#c1c4d6",
    gray400: "#d8dae5",
    gray300: "#E6E8F0",
    gray200: "#edeff5",
    gray100: "#F4F5F9",
    gray90: "#F4F6FA",
    gray75: "#F9FAFC",
    gray50: "#FAFBFF",
    white: "#FFFFFF",
    blue900: "#0A1433",
    blue800: "#142966",
    blue700: "#1F3D99",
    blue600: "#2952CC",
    blue500: "#3366FF",
    blue400: "#5C85FF",
    blue300: "#85A3FF",
    blue200: "#ADC2FF",
    blue100: "#D6E0FF",
    blue50: "#EBF0FF",
    blue25: "#F3F6FF",
    red700: "#7D2828",
    red600: "#A73636",
    red500: "#D14343",
    red300: "#EE9191",
    red100: "#F9DADA",
    red25: "#FDF4F4",
    green900: "#10261E",
    green800: "#214C3C",
    green700: "#317159",
    green600: "#429777",
    green500: "#52BD95",
    green400: "#75CAAA",
    green300: "#97D7BF",
    green200: "#BAE5D5",
    green100: "#DCF2EA",
    green25: "#F5FBF8",
    orange700: "#996A13",
    orange500: "#FFB020",
    orange100: "#F8E3DA",
    orange25: "#FFFAF2",
    purple600: "#6E62B6",
    purple100: "#E7E4F9",
    teal800: "#0F5156",
    teal100: "#D3F5F7",
    yellow800: "#66460D",
    yellow100: "#FFEFD2",
  },
  X = Bp(
    Bp({}, ye),
    {},
    {
      muted: ye.gray700,
      default: ye.gray800,
      dark: ye.gray900,
      selected: ye.blue500,
      tint1: ye.gray50,
      tint2: ye.gray75,
      overlay: "rgba(67, 90, 111, 0.7)",
      yellowTint: ye.yellow100,
      greenTint: ye.green25,
      orangeTint: ye.orange25,
      redTint: ye.red25,
      blueTint: ye.blue25,
      purpleTint: ye.purple100,
      tealTint: ye.teal100,
      border: { default: ye.gray300, muted: ye.gray200 },
      icon: {
        default: ye.gray700,
        muted: ye.gray600,
        disabled: ye.gray400,
        selected: ye.blue500,
      },
      text: { danger: ye.red500, success: ye.green500, info: ye.blue500 },
    }
  ),
  TN = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "colors.gray50",
    borderWidth: 1,
    borderRadius: "radii.1",
    borderStyle: "dashed",
    borderColor: "colors.gray400",
    height: "100%",
    width: "100%",
    paddingX: 40,
    paddingY: 40,
    selectors: {
      _focus: {
        outline: "none",
        borderStyle: "solid",
        borderColor: "colors.blue200",
        boxShadow: "0px 0px 0px 2px ".concat(X.blue100),
      },
      _hover: {
        cursor: "pointer",
        backgroundColor: "colors.gray90",
        borderColor: "colors.gray600",
      },
      _hoverBrowseCopy: { color: "colors.blue500", cursor: "pointer" },
      _hoverOrDragCopy: { color: "colors.gray800", cursor: "pointer" },
      _disabled: {
        backgroundColor: "colors.gray50",
        borderColor: "colors.gray50",
        borderStyle: "solid",
      },
      _dragHover: {
        backgroundColor: "colors.blue50",
        borderColor: "colors.blue500",
        borderStyle: "solid",
      },
      _invalid: {
        backgroundColor: "colors.red100",
        borderColor: "colors.red500",
        borderStyle: "solid",
      },
    },
  };
const CN = { baseStyle: TN };
var kN = {
    selectors: {
      _child: {
        selectors: {
          "&:focus": { zIndex: "zIndices.focused" },
          "&:active": { zIndex: "zIndices.focused" },
        },
      },
      _firstChild: { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
      _middleChild: { borderRadius: 0, marginLeft: "-1px" },
      _lastChild: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        marginLeft: "-1px",
      },
    },
  },
  jN = {},
  PN = {};
const RN = { baseStyle: kN, appearances: jN, sizes: PN };
var DN = {
    color: "colors.dark",
    fontFamily: "fontFamilies.display",
    fontWeight: "fontWeights.semibold",
  },
  zN = {},
  $N = {
    900: {
      fontSize: "fontSizes.7",
      lineHeight: "lineHeights.6",
      fontWeight: "fontWeights.bold",
      letterSpacing: "letterSpacings.tightest",
    },
    800: {
      fontSize: "fontSizes.6",
      lineHeight: "lineHeights.5",
      fontWeight: "fontWeights.bold",
      letterSpacing: "letterSpacings.tightest",
    },
    700: {
      fontSize: "fontSizes.5",
      lineHeight: "lineHeights.3",
      fontWeight: "fontWeights.bold",
      letterSpacing: "letterSpacings.tighter",
    },
    600: {
      fontSize: "fontSizes.4",
      lineHeight: "lineHeights.3",
      fontWeight: "fontWeights.bold",
      letterSpacing: "letterSpacings.tighter",
    },
    500: {
      fontFamily: "fontFamilies.ui",
      fontSize: "fontSizes.3",
      fontWeight: "fontWeights.bold",
      letterSpacing: "letterSpacings.tight",
      lineHeight: "lineHeights.2",
    },
    400: {
      fontSize: "fontSizes.2",
      lineHeight: "lineHeights.1",
      letterSpacing: "letterSpacings.tight",
      fontFamily: "fontFamilies.ui",
    },
    300: {
      fontSize: "fontSizes.1",
      lineHeight: "lineHeights.0",
      letterSpacing: "letterSpacings.normal",
      fontFamily: "fontFamilies.ui",
    },
    200: {
      fontSize: "fontSizes.1",
      lineHeight: "lineHeights.0",
      letterSpacing: "letterSpacings.normal",
      fontFamily: "fontFamilies.ui",
      color: "colors.muted",
    },
    100: {
      fontSize: "fontSizes.0",
      textTransform: "uppercase",
      lineHeight: "lineHeights.0",
      letterSpacing: "letterSpacings.wide",
      fontFamily: "fontFamilies.ui",
      color: "colors.muted",
    },
  };
const MN = { baseStyle: DN, appearances: zN, sizes: $N };
var AN = function (t, n) {
    var r = n.color;
    return {
      fill:
        wr(t, "intents.".concat(r, ".icon")) ||
        wr(t, "colors.icon.".concat(r)) ||
        wr(t, "colors.".concat(r)) ||
        r,
    };
  },
  LN = {},
  FN = {};
const IN = { baseStyle: AN, appearances: LN, sizes: FN };
var BN = function (t, n) {
    var r = n.intent,
      o = r === void 0 ? "info" : r;
    return { color: t.intents[o].text };
  },
  WN = {},
  VN = {};
const HN = { baseStyle: BN, appearances: WN, sizes: VN };
var UN = {
    borderColor: "colors.gray400",
    borderRadius: "radii.1",
    borderStyle: "solid",
    borderWidth: 1,
    color: "colors.default",
    fontFamily: "fontFamilies.ui",
    fontSize: "fontSizes.1",
    lineHeight: "lineHeights.0",
    paddingX: 12,
    transition: "box-shadow 80ms ease-in-out",
    selectors: {
      _placeholder: { color: "colors.gray600" },
      _disabled: {
        cursor: "not-allowed",
        backgroundColor: "colors.gray100",
        color: "colors.muted",
      },
    },
  },
  GN = {
    default: {
      backgroundColor: "white",
      borderColor: "colors.gray400",
      selectors: {
        _focus: {
          zIndex: "zIndices.focused",
          boxShadow: "shadows.focusRing",
          borderColor: "colors.blue200",
        },
        _invalid: { borderColor: "colors.red500" },
      },
    },
    none: { borderColor: "transparent", backgroundColor: "transparent" },
  },
  KN = {
    small: { height: 24 },
    medium: { height: 32 },
    large: { height: 40, lineHeight: "lineHeights.1" },
  };
const XN = { baseStyle: UN, appearances: GN, sizes: KN };
var YN = {
    color: "colors.dark",
    fontFamily: "fontFamilies.display",
    fontWeight: "fontWeights.semibold",
  },
  QN = {},
  ZN = {
    900: {
      fontSize: "fontSizes.7",
      lineHeight: "lineHeights.6",
      fontWeight: "fontWeights.bold",
      letterSpacing: "letterSpacings.tightest",
    },
    800: {
      fontSize: "fontSizes.6",
      lineHeight: "lineHeights.5",
      fontWeight: "fontWeights.bold",
      letterSpacing: "letterSpacings.tightest",
    },
    700: {
      fontSize: "fontSizes.5",
      lineHeight: "lineHeights.3",
      fontWeight: "fontWeights.bold",
      letterSpacing: "letterSpacings.tighter",
    },
    600: {
      fontSize: "fontSizes.4",
      lineHeight: "lineHeights.3",
      fontWeight: "fontWeights.bold",
      letterSpacing: "letterSpacings.tighter",
    },
    500: {
      fontFamily: "fontFamilies.ui",
      fontSize: "fontSizes.3",
      fontWeight: "fontWeights.bold",
      letterSpacing: "letterSpacings.tight",
      lineHeight: "lineHeights.2",
    },
    400: {
      fontSize: "fontSizes.2",
      lineHeight: "lineHeights.1",
      letterSpacing: "letterSpacings.tight",
      fontFamily: "fontFamilies.ui",
    },
    300: {
      fontSize: "fontSizes.1",
      lineHeight: "lineHeights.0",
      letterSpacing: "letterSpacings.normal",
      fontFamily: "fontFamilies.ui",
    },
    200: {
      fontSize: "fontSizes.1",
      lineHeight: "lineHeights.0",
      letterSpacing: "letterSpacings.normal",
      fontFamily: "fontFamilies.ui",
      color: "colors.muted",
    },
    100: {
      fontSize: "fontSizes.0",
      textTransform: "uppercase",
      lineHeight: "lineHeights.0",
      letterSpacing: "letterSpacings.wide",
      fontFamily: "fontFamilies.ui",
      color: "colors.muted",
    },
  };
const JN = { baseStyle: YN, appearances: QN, sizes: ZN };
var qN = {
    borderRadius: "radii.1",
    transition: "120ms all ease-in-out",
    color: function (t, n) {
      var r = n.color;
      switch (r) {
        case "neutral":
          return "gray700";
        case "default":
        default:
          return "blue500";
      }
    },
    textDecoration: "none",
    selectors: {
      _hover: {
        color: function (t, n) {
          var r = n.color;
          switch (r) {
            case "neutral":
              return t.colors.gray800;
            case "default":
            default:
              return t.colors.blue600;
          }
        },
      },
      _active: {
        color: function (t, n) {
          var r = n.color;
          switch (r) {
            case "neutral":
              return t.colors.gray900;
            case "default":
            default:
              return t.colors.blue700;
          }
        },
      },
      _focus: {
        boxShadow: function (t, n) {
          var r = n.color;
          switch (r) {
            case "neutral":
              return "0 0 0 2px ".concat(t.colors.gray300);
            case "default":
            default:
              return "0 0 0 2px ".concat(t.colors.blue200);
          }
        },
      },
    },
  },
  eE = {},
  tE = {};
const nE = { baseStyle: qN, appearances: eE, sizes: tE };
var rE = {},
  oE = {},
  iE = {};
const aE = { baseStyle: rE, appearances: oE, sizes: iE };
var lE = {
    outline: "none",
    textDecoration: "none",
    display: "flex",
    position: "relative",
    paddingX: 12,
    selectors: {
      _isSelectable: { cursor: "pointer" },
      _disabled: { cursor: "not-allowed", userSelect: "none" },
    },
  },
  sE = {
    default: {
      backgroundColor: "white",
      selectors: {
        "&:before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 2,
          borderRadiusTopLeft: 0,
          borderRadiusTopRight: 2,
          borderRadiusBottomRight: 2,
          borderRadiusBottomLeft: 0,
          backgroundColor: "colors.blue500",
          transition: "0.25s",
          transformOrigin: "left center",
          transform: "scaleX(0)",
        },
        _hover: { backgroundColor: "colors.gray75" },
        _focus: { backgroundColor: "colors.gray75" },
        _active: {
          backgroundColor: "intents.info.background",
          selectors: { "&:before": { transform: "scaleX(1)" } },
        },
        _current: {
          backgroundColor: "intents.info.background",
          selectors: { "&:before": { transform: "scaleX(1)" } },
        },
      },
    },
  };
const uE = { baseStyle: lE, appearances: sE };
var cE = {
  outline: "none",
  textDecoration: "none",
  display: "flex",
  position: "relative",
  backgroundColor: "white",
  height: 32,
  borderBottom: function (t) {
    return "1px solid ".concat(t.colors.border.muted);
  },
  selectors: {
    _before: {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 2,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 2,
      borderBottomRightRadius: 2,
      backgroundColor: "colors.blue500",
      transition: "0.25s",
      transformOrigin: "left center",
      transform: "scaleX(0)",
    },
    _isSelectable: { cursor: "pointer" },
    _hover: { backgroundColor: "colors.gray75" },
    _focus: { backgroundColor: "colors.gray75" },
    _active: { backgroundColor: "intents.info.background" },
    _selected: {
      backgroundColor: "intents.info.background",
      " span": { color: "intents.info.text" },
      "&:before": { transform: "scaleX(1)" },
    },
    _disabled: { opacity: 0.5, pointerEvents: "none", cursor: "not-allowed" },
  },
};
const fE = { baseStyle: cE };
function Wp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Vp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wp(Object(n), !0).forEach(function (r) {
          Yt(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Wp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ka(e, t) {
  var n = t.border,
    r = t.value;
  return Object.prototype.hasOwnProperty.call(e.colors.border, r)
    ? "1px solid ".concat(e.colors.border[r])
    : r === !0
    ? "1px solid ".concat(e.colors.border.default)
    : r === !1
    ? null
    : Object.prototype.hasOwnProperty.call(e.colors.border, n)
    ? "1px solid ".concat(e.colors.border[n])
    : n === !0
    ? "1px solid ".concat(e.colors.border.default)
    : r || n;
}
var dE = function (t, n) {
    var r = {};
    (t.shadows[n.hoverElevation] || t.shadows[n.activeElevation]) &&
      Object.assign(r, {
        transitionDuration: "150ms",
        transitionProperty: "box-shadow, transform",
        transitionTimingFunction: "cubic-bezier(0.0, 0.0, 0.2, 1)",
      });
    var o;
    t.shadows[n.hoverElevation] &&
      (o = {
        transform: "translateY(-2px)",
        boxShadow: "shadows.".concat(n.hoverElevation),
      });
    var i;
    return (
      t.shadows[n.activeElevation] &&
        (i = {
          transform: "translateY(-1px)",
          boxShadow: "shadows.".concat(n.activeElevation),
        }),
      Vp(
        Vp(
          {
            background: t.colors[n.background] || n.background,
            boxShadow: t.shadows[n.elevation],
            borderTop: Ka(t, { border: n.border, value: n.borderTop }),
            borderRight: Ka(t, { border: n.border, value: n.borderRight }),
            borderBottom: Ka(t, { border: n.border, value: n.borderBottom }),
            borderLeft: Ka(t, { border: n.border, value: n.borderLeft }),
          },
          r
        ),
        {},
        { selectors: { _hover: o, _active: i } }
      )
    );
  },
  pE = {},
  gE = {};
const mE = { baseStyle: dE, appearances: pE, sizes: gE };
function Hp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Up(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hp(Object(n), !0).forEach(function (r) {
          Yt(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Hp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var hE = {
    fontFamily: function (t, n) {
      var r = n.fontFamily,
        o = r === void 0 ? "ui" : r;
      return t.fontFamilies[o] ? "fontFamilies.".concat(o) : o;
    },
    color: function (t, n) {
      var r = n.color,
        o = r === void 0 ? "default" : r;
      return t.colors[o] ? "colors.".concat(o) : o;
    },
    marginTop: 0,
    marginBottom: 0,
  },
  vE = {},
  Xa = {
    300: {
      fontSize: "fontSizes.1",
      fontWeight: "fontWeights.normal",
      lineHeight: "lineHeights.1",
      letterSpacing: "letterSpacings.normal",
    },
    400: {
      fontSize: "fontSizes.2",
      fontWeight: "fontWeights.normal",
      lineHeight: "lineHeights.3",
      letterSpacing: "letterSpacings.tight",
    },
    500: {
      fontSize: "fontSizes.3",
      fontWeight: "fontWeights.normal",
      lineHeight: "lineHeights.3",
      letterSpacing: "letterSpacings.tight",
    },
    600: {
      fontSize: "fontSizes.4",
      fontWeight: "fontWeights.normal",
      lineHeight: "lineHeights.4",
      letterSpacing: "letterSpacings.tighter",
    },
  },
  yE = Up(Up({}, Xa), {}, { small: Xa[300], medium: Xa[400], large: Xa[500] });
const bE = { baseStyle: hE, appearances: vE, sizes: yE };
var SE = { fontFamily: "fontFamilies.ui", borderRadius: "radii.1", border: 0 },
  wE = {
    default: {
      backgroundColor: "white",
      border: function (t) {
        return "1px solid ".concat(t.colors.gray400);
      },
      color: "colors.gray800",
      selectors: {
        _disabled: {
          cursor: "not-allowed",
          color: "colors.gray500",
          borderColor: "colors.gray300",
        },
        _hover: {
          borderColor: "colors.gray600",
          backgroundColor: "colors.gray50",
        },
        _invalid: { borderColor: "colors.red500" },
        _focus: {
          borderColor: "colors.blue200",
          boxShadow: "shadows.focusRing",
        },
        _active: { backgroundColor: "colors.gray100" },
      },
    },
  },
  _E = {
    small: { height: 24, fontSize: "fontSizes.1", lineHeight: "lineHeights.0" },
    medium: {
      height: 32,
      fontSize: "fontSizes.1",
      lineHeight: "lineHeights.0",
    },
    large: { height: 40, fontSize: "fontSizes.2", lineHeight: "lineHeights.2" },
  };
const xE = { baseStyle: SE, appearances: wE, sizes: _E };
var OE = { color: "rgba(67, 90, 111, 0.47)" },
  NE = {},
  EE = {
    small: { width: 32, height: 32 },
    medium: { width: 40, height: 40 },
    large: { width: 48, height: 48 },
  };
const TE = { baseStyle: OE, appearances: NE, sizes: EE };
var CE = {},
  kE = {
    default: {
      selectors: {
        _base: { color: "white", backgroundColor: "colors.gray400" },
        _disabled: { cursor: "not-allowed", opacity: 0.5 },
        _hover: { backgroundColor: "colors.gray500" },
        _focus: {
          boxShadow: function (t) {
            return "0 0 0 3px ".concat(t.colors.blue100);
          },
        },
        _active: { backgroundColor: "colors.gray600" },
        _checked: { backgroundColor: "colors.blue500", color: "white" },
        _checkedHover: { backgroundColor: "colors.blue600", color: "white" },
        _checkedActive: { backgroundColor: "colors.blue700", color: "white" },
        _checkedDisabled: {},
      },
    },
  },
  jE = {};
const PE = { baseStyle: CE, appearances: kE, sizes: jE };
var RE = {
    fontFamily: "fontFamilies.ui",
    fontWeight: 500,
    marginBottom: function (t, n) {
      return n.direction === "vertical" ? "8px" : null;
    },
  },
  DE = {
    primary: {
      color: "colors.muted",
      paddingTop: "6px",
      paddingBottom: "6px",
      paddingLeft: "2px",
      paddingRight: "2px",
      position: "relative",
      selectors: {
        ":not(:last-child)": {
          marginRight: function (t, n) {
            return n.direction === "horizontal" ? "20px" : null;
          },
        },
        _before: {
          content: '""',
          position: "absolute",
          bottom: 0,
          right: 0,
          height: "2px",
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          backgroundColor: "colors.blue500",
          width: "100%",
          transition: "0.25s",
          transform: "scaleY(0)",
          transformOrigin: "bottom center",
        },
        _hover: { color: "colors.default" },
        _current: {
          color: "colors.blue500",
          "&:before": { transform: "scaleY(1)" },
          "&:focus": { color: "colors.blue600" },
        },
        _focus: { boxShadow: "shadows.focusRing", color: "colors.default" },
        _disabled: {
          pointerEvents: "none",
          cursor: "not-allowed",
          color: "colors.gray500",
          "&:before": { backgroundColor: "colors.gray500" },
        },
      },
    },
    secondary: {
      paddingX: "16px",
      paddingY: "8px",
      borderRadius: "radii.1",
      color: "colors.default",
      selectors: {
        ":not(:last-child)": {
          marginRight: function (t, n) {
            return n.direction === "horizontal" ? "8px" : null;
          },
        },
        _hover: { backgroundColor: "colors.gray100", color: "colors.gray800" },
        _active: { backgroundColor: "colors.gray200" },
        _current: { backgroundColor: "colors.blue50", color: "colors.blue500" },
        _focus: { boxShadow: "shadows.focusRing" },
        _disabled: {
          pointerEvents: "none",
          cursor: "not-allowed",
          color: "colors.gray500",
          '&[aria-current="page"],&[aria-selected="true"]': {
            backgroundColor: "colors.gray100",
          },
        },
      },
    },
  };
const zE = { baseStyle: RE, appearances: DE };
var $E = { borderRadius: "radii.1", border: "muted" },
  ME = {},
  AE = {};
const LE = { baseStyle: $E, appearances: ME, sizes: AE };
var FE = { paddingX: 12 },
  IE = {
    default: {
      selectors: {
        _focus: {
          outline: "none",
          background: "colors.blue50",
          boxShadow: function (t) {
            return "inset 0 0 0 1px ".concat(t.colors.blue500);
          },
        },
      },
    },
  },
  BE = {};
const WE = { baseStyle: FE, appearances: IE, sizes: BE };
var VE = {
    borderBottom: "default",
    background: "colors.tint2",
    height: "56px",
    fontSize: "fontSizes.1",
    fontWeight: "fontWeights.bold",
    lineHeight: "lineHeights.0",
    letterSpacing: "letterSpacings.normal",
    fontFamily: "fontFamilies.ui",
    color: "colors.muted",
    textTransform: "uppercase",
    selectors: {
      _firstOfType: {
        borderTopLeftRadius: "radii.1",
        borderTopRightRadius: "radii.1",
      },
    },
  },
  HE = {},
  UE = {};
const GE = { baseStyle: VE, appearances: HE, sizes: UE };
var KE = {
    none: {
      base: "white",
      hover: "colors.gray75",
      focus: "colors.gray75",
      active: "intents.info.background",
      current: "intents.info.background",
    },
    danger: {
      base: "intents.danger.background",
      hover: "intents.danger.background",
      focus: "colors.red100",
      active: "colors.red100",
      current: "colors.red100",
    },
    warning: {
      base: "intents.warning.background",
      hover: "intents.warning.background",
      focus: "colors.orange100",
      active: "colors.orange100",
      current: "colors.orange100",
    },
    success: {
      base: "intents.success.background",
      hover: "intents.success.background",
      focus: "colors.green100",
      active: "colors.green100",
      current: "colors.green100",
    },
  },
  pi = function (t, n) {
    return KE[t][n];
  },
  XE = {
    outline: "none",
    textDecoration: "none",
    height: 64,
    selectors: {
      _lastOfType: {
        borderBottom: "none",
        borderBottomLeftRadius: "radii.1",
        borderBottomRightRadius: "radii.1",
      },
      _isSelectable: { cursor: "pointer" },
    },
  },
  YE = {
    default: {
      backgroundColor: function (t, n) {
        return pi(n.intent, "base");
      },
      selectors: {
        _hover: {
          backgroundColor: function (t, n) {
            return pi(n.intent, "hover");
          },
        },
        _focus: {
          backgroundColor: function (t, n) {
            return pi(n.intent, "focus");
          },
        },
        _active: {
          backgroundColor: function (t, n) {
            return pi(n.intent, "active");
          },
        },
        _current: {
          backgroundColor: function (t, n) {
            return pi(n.intent, "current");
          },
        },
      },
    },
  };
const QE = { baseStyle: XE, appearances: YE };
var ZE = { paddingY: "2px", backgroundColor: "white", borderRadius: "radii.1" },
  JE = {
    default: {
      border: function (t) {
        return "1px solid ".concat(t.colors.gray400);
      },
      selectors: {
        _focused: {
          outline: "none",
          zIndex: "zIndices.focused",
          border: function (t) {
            return "1px solid ".concat(t.colors.blue200);
          },
          transition: "box-shadow 80ms ease-in-out",
          boxShadow: "shadows.focusRing",
        },
        _disabled: { cursor: "not-allowed", backgroundColor: "colors.gray100" },
        _invalid: { borderColor: "colors.red600" },
      },
    },
  },
  qE = {};
const eT = { baseStyle: ZE, appearances: JE, sizes: qE };
function Gp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Kp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gp(Object(n), !0).forEach(function (r) {
          Yt(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Gp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var tT = {},
  nT = {},
  Ya = {
    300: {
      fontSize: "fontSizes.1",
      fontWeight: "fontWeights.normal",
      lineHeight: "lineHeights.0",
      letterSpacing: "letterSpacings.normal",
    },
    400: {
      fontSize: "fontSizes.2",
      fontWeight: "fontWeights.normal",
      lineHeight: "lineHeights.2",
      letterSpacing: "letterSpacings.tight",
    },
    500: {
      fontSize: "fontSizes.3",
      fontWeight: "fontWeights.normal",
      lineHeight: "lineHeights.2",
      letterSpacing: "letterSpacings.tight",
    },
    600: {
      fontSize: "fontSizes.4",
      fontWeight: "fontWeights.normal",
      lineHeight: "lineHeights.3",
      letterSpacing: "letterSpacings.tighter",
    },
  },
  rT = Kp(Kp({}, Ya), {}, { small: Ya[300], medium: Ya[400], large: Ya[500] });
const oT = { baseStyle: tT, appearances: nT, sizes: rT };
var iT = {
    fontFamily: "fontFamilies.ui",
    backgroundColor: "transparent",
    borderRadius: "radii.1",
    paddingX: 4,
    marginX: -4,
    paddingY: 2,
    marginY: -2,
    color: "colors.default",
    selectors: {
      _disabled: { cursor: "not-allowed", pointerEvents: "none" },
      _focus: { boxShadow: "shadows.focusRing" },
    },
  },
  aT = {},
  lT = {
    small: { fontSize: "fontSizes.1", lineHeight: "lineHeights.0" },
    medium: { fontSize: "fontSizes.1", lineHeight: "lineHeights.0" },
    large: { fontSize: "fontSizes.2", lineHeight: "lineHeights.2" },
  };
const sT = { baseStyle: iT, appearances: aT, sizes: lT };
var uT = {
    paddingY: 8,
    paddingX: 16,
    maxWidth: 240,
    borderRadius: "radii.2",
    boxShadow: "shadows.3",
  },
  cT = {
    card: { backgroundColor: "white" },
    default: { color: "white", backgroundColor: "colors.gray800" },
  },
  fT = {};
const dT = { baseStyle: uT, appearances: cT, sizes: fT },
  pT = {
    Alert: BO,
    Avatar: KO,
    Badge: eN,
    Button: iN,
    Card: uN,
    Checkbox: Fp,
    Code: yN,
    DialogBody: SN,
    DialogFooter: _N,
    DialogHeader: ON,
    FileCard: EN,
    FileUploader: CN,
    Group: RN,
    Heading: MN,
    Icon: IN,
    InlineAlert: HN,
    Input: XN,
    Label: JN,
    List: aE,
    Link: nE,
    MenuItem: uE,
    Option: fE,
    Pane: mE,
    Paragraph: bE,
    Radio: Fp,
    Select: xE,
    Spinner: TE,
    Switch: PE,
    Tab: zE,
    Table: LE,
    TableCell: WE,
    TableHead: GE,
    TableRow: QE,
    TagInput: eT,
    Text: oT,
    TextDropdownButton: sT,
    Tooltip: dT,
  };
var gT = {
    neutral: { color: X.gray800, backgroundColor: X.gray200 },
    blue: { color: X.blue600, backgroundColor: X.blue100 },
    red: { color: X.red700, backgroundColor: X.red100 },
    orange: { color: X.orange700, backgroundColor: X.orange100 },
    yellow: { color: X.yellow800, backgroundColor: X.yellow100 },
    green: { color: X.green700, backgroundColor: X.green100 },
    teal: { color: X.teal800, backgroundColor: X.teal100 },
    purple: { color: X.purple600, backgroundColor: X.purple100 },
  },
  mT = {
    info: {
      background: X.blue25,
      border: X.blue500,
      text: X.blue600,
      icon: X.blue500,
    },
    success: {
      background: X.green25,
      border: X.green500,
      text: X.green700,
      icon: X.green500,
    },
    warning: {
      background: X.orange25,
      border: X.orange500,
      text: X.orange700,
      icon: X.orange500,
    },
    danger: {
      background: X.red25,
      border: X.red500,
      text: X.red600,
      icon: X.red500,
    },
  },
  hT = ["0px", "4px", "8px"],
  gi = "rgba(67, 90, 111, 0.3)",
  Qa = "rgba(67, 90, 111, 0.47)",
  hv = [
    "0 0 1px ".concat(gi),
    "0 0 1px ".concat(gi, ", 0 2px 4px -2px ").concat(Qa),
    "0 0 1px ".concat(gi, ", 0 5px 8px -4px ").concat(Qa),
    "0 0 1px ".concat(gi, ", 0 8px 10px -4px ").concat(Qa),
    "0 0 1px ".concat(gi, ", 0 16px 24px -8px ").concat(Qa),
  ];
hv.focusRing = "0 0 0 2px ".concat(X.blue100);
var ds = ["10px", "12px", "14px", "16px", "18px", "20px", "24px", "32px"];
ds.body = "14px";
ds.heading = "16px";
ds.caption = "10px";
var vT = {
    fontFamilies: {
      display:
        '"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      ui: '"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',
    },
    fontSizes: ds,
    fontWeights: { light: 300, normal: 400, semibold: 500, bold: 600 },
    letterSpacings: {
      tightest: "-0.2px",
      tighter: "-0.07px",
      tight: "-0.05px",
      normal: "0",
      wide: "0.6px",
    },
    lineHeights: ["16px", "18px", "20px", "24px", "28px", "32px", "40px"],
  },
  yT = { focused: 2, stack: 5, positioner: 10, overlay: 20, toaster: 30 };
function Xp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Yp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xp(Object(n), !0).forEach(function (r) {
          Yt(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Xp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var bT = Yp(
  Yp({ colors: X, fills: gT, intents: mT, radii: hT, shadows: hv }, vT),
  {},
  { zIndices: yT }
);
function Qp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Zp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qp(Object(n), !0).forEach(function (r) {
          Yt(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Qp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
const ST = Zp(Zp({}, bT), {}, { components: pT });
var Pf = V.createContext(ST);
Pf.Consumer;
Pf.Provider;
function gc(e, t) {
  return (
    (gc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    gc(e, t)
  );
}
function vv() {
  return S.useContext(Pf);
}
var wT = ["selectors"];
function Jp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function _T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jp(Object(n), !0).forEach(function (r) {
          Yt(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Jp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function yv(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return typeof e == "function" ? e.apply(void 0, n) : e;
}
function dl(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  if (e && Kr(e) === "object") {
    for (var o = {}, i = 0, a = Object.keys(e); i < a.length; i++) {
      var l = a[i];
      o[l] = dl.apply(void 0, [e[l]].concat(n));
    }
    return o;
  }
  return yv.apply(void 0, [e].concat(n));
}
function xT(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    o = yv(n, e, t),
    i = dl(o.baseStyle, e, t),
    a = dl(wr(o, "sizes.".concat(t.size), {}), e, t),
    l = dl(wr(o, "appearances.".concat(t.appearance), {}), e, t);
  return RO({}, r, i, a, l);
}
function OT(e, t, n, r) {
  var o = S.useRef({});
  return S.useMemo(
    function () {
      var i = xT(e, t, n, r);
      return pc(o.current, i) || (o.current = i), o.current;
    },
    [e, t, n, r]
  );
}
function NT(e, t) {
  return S.useMemo(
    function () {
      for (
        var n = hf.splitBoxProps(e),
          r = n.matchedProps,
          o = r.selectors,
          i = o === void 0 ? {} : o,
          a = Bo(r, wT),
          l = n.remainingProps,
          s = {},
          u = 0,
          p = Object.keys(i);
        u < p.length;
        u++
      ) {
        var m = p[u],
          h = m in t ? t[m] : m;
        s[h] = i[m];
      }
      var y = _T({}, a);
      return pc({}, l) || (y.style = l), pc({}, s) || (y.selectors = s), y;
    },
    [e, t]
  );
}
function Rf(e, t, n, r) {
  var o = vv(),
    i = wr(o, "components.".concat(e)) || {},
    a = OT(o, t, i, r),
    l = S.useMemo(
      function () {
        return mv(o, a);
      },
      [o, a]
    );
  return NT(l, n);
}
var ET = [
  "activeElevation",
  "background",
  "border",
  "borderBottom",
  "borderLeft",
  "borderRight",
  "borderTop",
  "className",
  "elevation",
  "hoverElevation",
];
function qp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function eg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qp(Object(n), !0).forEach(function (r) {
          Yt(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : qp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var TT = { _hover: "&:hover", _active: "&:active" },
  CT = {},
  bv = function (t, n) {
    var r = t.activeElevation,
      o = t.background,
      i = t.border,
      a = t.borderBottom,
      l = t.borderLeft,
      s = t.borderRight,
      u = t.borderTop,
      p = t.className,
      m = t.elevation,
      h = t.hoverElevation,
      y = Bo(t, ET),
      x = Rf(
        "Pane",
        {
          elevation: m,
          hoverElevation: h,
          activeElevation: r,
          background: o,
          border: i,
          borderTop: u,
          borderRight: s,
          borderBottom: a,
          borderLeft: l,
          className: p,
        },
        TT,
        CT
      );
    return V.createElement(fs, Io({ ref: n, className: p }, x, y));
  };
bv.displayName = "_Pane";
var Sv = S.memo(S.forwardRef(bv));
Sv.propTypes = eg(
  eg({}, fs.propTypes),
  {},
  {
    background: W.string,
    elevation: W.oneOf([0, 1, 2, 3, 4]),
    hoverElevation: W.oneOf([0, 1, 2, 3, 4]),
    activeElevation: W.oneOf([0, 1, 2, 3, 4]),
    border: W.oneOfType([W.string, W.bool]),
    borderTop: W.oneOfType([W.string, W.bool]),
    borderRight: W.oneOfType([W.string, W.bool]),
    borderBottom: W.oneOfType([W.string, W.bool]),
    borderLeft: W.oneOfType([W.string, W.bool]),
  }
);
var kT = ["color", "fontFamily", "size"];
function tg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ng(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tg(Object(n), !0).forEach(function (r) {
          Yt(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : tg(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var rg = {},
  Df = S.memo(
    S.forwardRef(function (t, n) {
      var r = t.color,
        o = r === void 0 ? "default" : r,
        i = t.fontFamily,
        a = i === void 0 ? "ui" : i,
        l = t.size,
        s = l === void 0 ? 400 : l,
        u = Bo(t, kT),
        p = vv(),
        m = p.colors,
        h = p.fontFamilies,
        y = h[a] || a,
        x = m[o] || (m.text && m.text[o]) || o,
        b = Rf("Paragraph", { size: s }, rg, rg);
      return V.createElement(
        fs,
        Io({ is: "p", ref: n }, b, { fontFamily: y, color: x }, u)
      );
    })
  );
Df.propTypes = ng(
  ng({}, fs.propTypes),
  {},
  {
    size: W.oneOf([300, 400, 500, "small", "medium", "large"]),
    fontFamily: W.string,
  }
);
const zf = {
    FOCUSED: 2,
    STACKING_CONTEXT: 5,
    POSITIONER: 10,
    OVERLAY: 20,
    TOASTER: 30,
  },
  L = {
    TOP: "top",
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    BOTTOM: "bottom",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    LEFT: "left",
    RIGHT: "right",
  };
function jT(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    gc(e, t);
}
const og = { disabled: !1 },
  wv = V.createContext(null);
var PT = function (t) {
    return t.scrollTop;
  },
  Si = "unmounted",
  $r = "exited",
  Mr = "entering",
  co = "entered",
  mc = "exiting",
  Qn = (function (e) {
    jT(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var a = o,
        l = a && !a.isMounting ? r.enter : r.appear,
        s;
      return (
        (i.appearStatus = null),
        r.in
          ? l
            ? ((s = $r), (i.appearStatus = Mr))
            : (s = co)
          : r.unmountOnExit || r.mountOnEnter
          ? (s = Si)
          : (s = $r),
        (i.state = { status: s }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var a = o.in;
      return a && i.status === Si ? { status: $r } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var a = this.state.status;
          this.props.in
            ? a !== Mr && a !== co && (i = Mr)
            : (a === Mr || a === co) && (i = mc);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          a,
          l;
        return (
          (i = a = l = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (a = o.enter),
            (l = o.appear !== void 0 ? o.appear : a)),
          { exit: i, enter: a, appear: l }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === Mr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : Ia.findDOMNode(this);
              a && PT(a);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === $r &&
            this.setState({ status: Si });
      }),
      (n.performEnter = function (o) {
        var i = this,
          a = this.props.enter,
          l = this.context ? this.context.isMounting : o,
          s = this.props.nodeRef ? [l] : [Ia.findDOMNode(this), l],
          u = s[0],
          p = s[1],
          m = this.getTimeouts(),
          h = l ? m.appear : m.enter;
        if ((!o && !a) || og.disabled) {
          this.safeSetState({ status: co }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, p),
          this.safeSetState({ status: Mr }, function () {
            i.props.onEntering(u, p),
              i.onTransitionEnd(h, function () {
                i.safeSetState({ status: co }, function () {
                  i.props.onEntered(u, p);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          a = this.getTimeouts(),
          l = this.props.nodeRef ? void 0 : Ia.findDOMNode(this);
        if (!i || og.disabled) {
          this.safeSetState({ status: $r }, function () {
            o.props.onExited(l);
          });
          return;
        }
        this.props.onExit(l),
          this.safeSetState({ status: mc }, function () {
            o.props.onExiting(l),
              o.onTransitionEnd(a.exit, function () {
                o.safeSetState({ status: $r }, function () {
                  o.props.onExited(l);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          a = !0;
        return (
          (this.nextCallback = function (l) {
            a && ((a = !1), (i.nextCallback = null), o(l));
          }),
          (this.nextCallback.cancel = function () {
            a = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var a = this.props.nodeRef
            ? this.props.nodeRef.current
            : Ia.findDOMNode(this),
          l = o == null && !this.props.addEndListener;
        if (!a || l) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var s = this.props.nodeRef
              ? [this.nextCallback]
              : [a, this.nextCallback],
            u = s[0],
            p = s[1];
          this.props.addEndListener(u, p);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === Si) return null;
        var i = this.props,
          a = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var l = gv(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return V.createElement(
          wv.Provider,
          { value: null },
          typeof a == "function"
            ? a(o, l)
            : V.cloneElement(V.Children.only(a), l)
        );
      }),
      t
    );
  })(V.Component);
Qn.contextType = wv;
Qn.propTypes = {};
function lo() {}
Qn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: lo,
  onEntering: lo,
  onEntered: lo,
  onExit: lo,
  onExiting: lo,
  onExited: lo,
};
Qn.UNMOUNTED = Si;
Qn.EXITED = $r;
Qn.ENTERING = Mr;
Qn.ENTERED = co;
Qn.EXITING = mc;
var _v = function (t) {
  var n = t.children,
    r = S.useState(!1),
    o = Zi(r, 2),
    i = o[0],
    a = o[1],
    l = S.useRef();
  return (
    kO(function () {
      return (
        a(!0),
        (l.current = document.createElement("div")),
        l.current.setAttribute("evergreen-portal-container", ""),
        document.body.appendChild(l.current),
        function () {
          document.body.removeChild(l.current);
        }
      );
    }, []),
    i ? Fn.createPortal(n, l.current) : null
  );
};
_v.propTypes = { children: W.node.isRequired };
var ig = V.createContext(zf.STACKING_CONTEXT),
  xv = S.memo(function (t) {
    var n = t.children,
      r = t.value,
      o = r === void 0 ? zf.STACKING_CONTEXT : r,
      i = S.useContext(ig),
      a = Math.max(o, i),
      l = a + 1;
    return V.createElement(ig.Provider, { value: l }, n(a));
  });
xv.propTypes = { children: W.func.isRequired, value: W.number };
var ir = function (t, n) {
    var r = t.height,
      o = t.width,
      i = n.left,
      a = n.top,
      l = Math.ceil(i),
      s = Math.ceil(a);
    return {
      width: o,
      height: r,
      left: l,
      top: s,
      right: l + o,
      bottom: s + r,
    };
  },
  so = function (t) {
    switch (t) {
      case L.TOP_LEFT:
        return L.BOTTOM_LEFT;
      case L.TOP:
      default:
        return L.BOTTOM;
      case L.TOP_RIGHT:
        return L.BOTTOM_RIGHT;
      case L.BOTTOM_LEFT:
        return L.TOP_LEFT;
      case L.BOTTOM:
        return L.TOP;
      case L.BOTTOM_RIGHT:
        return L.TOP_RIGHT;
    }
  },
  Ov = function (t) {
    switch (t) {
      case L.TOP_LEFT:
      case L.TOP:
      case L.TOP_RIGHT:
        return !0;
      default:
        return !1;
    }
  },
  Nv = function (t) {
    switch (t) {
      case L.LEFT:
      case L.RIGHT:
        return !0;
      default:
        return !1;
    }
  },
  RT = function (t, n, r) {
    return t.bottom < n.height - r;
  },
  DT = function (t, n) {
    return t.top > n;
  },
  zT = function (t, n, r) {
    return t.right < n.width - r;
  },
  $T = function (t, n) {
    return t.left > n;
  },
  MT = function (t) {
    var n = t.dimensions,
      r = t.position,
      o = t.rect,
      i = t.targetCenter,
      a = Math.round(i - o.top);
    if (r === L.LEFT) return "".concat(n.width, "px ").concat(a, "px");
    if (r === L.RIGHT) return "0px ".concat(a, "px");
    var l = Math.round(i - o.left);
    return Ov(r)
      ? "".concat(l, "px ").concat(n.height, "px ")
      : "".concat(l, "px 0px ");
  };
function AT(e) {
  var t = e.dimensions,
    n = e.position,
    r = e.targetOffset,
    o = e.targetRect,
    i = e.viewport,
    a = e.viewportOffset,
    l = a === void 0 ? 8 : a,
    s = LT({
      position: n,
      dimensions: t,
      targetRect: o,
      targetOffset: r,
      viewport: i,
      viewportOffset: l,
    }),
    u = s.position,
    p = s.rect;
  if (
    (p.left < l &&
      ((p.right += Math.ceil(Math.abs(p.left - l))), (p.left = Math.ceil(l))),
    p.right > i.width - l)
  ) {
    var m = Math.ceil(p.right - (i.width - l));
    (p.left -= m), (p.right -= m);
  }
  if (
    (p.top < l &&
      ((p.top += Math.ceil(Math.abs(p.top - l))), (p.bottom = Math.ceil(l))),
    p.bottom > i.height - l)
  ) {
    var h = Math.ceil(p.bottom - (i.height - l));
    (p.top -= h), (p.bottom -= h);
  }
  var y = Nv(n) ? o.top + o.height / 2 : o.left + o.width / 2,
    x = MT({ rect: p, position: u, dimensions: t, targetCenter: y });
  return { rect: p, position: u, transformOrigin: x };
}
function LT(e) {
  var t = e.dimensions,
    n = e.position,
    r = e.targetOffset,
    o = e.targetRect,
    i = e.viewport,
    a = e.viewportOffset,
    l = a === void 0 ? 8 : a,
    s = Nv(n);
  if (s) {
    var u = uo({
        position: L.LEFT,
        dimensions: t,
        targetRect: o,
        targetOffset: r,
      }),
      p = uo({
        position: L.RIGHT,
        dimensions: t,
        targetRect: o,
        targetOffset: r,
      }),
      m = $T(u, l),
      h = zT(p, i, l);
    if (n === L.LEFT) {
      if (m) return { position: n, rect: u };
      if (h) return { position: L.RIGHT, rect: p };
    }
    if (n === L.RIGHT) {
      if (h) return { position: n, rect: p };
      if (m) return { position: L.LEFT, rect: u };
    }
    var y = Math.abs(i.width - l - p.right),
      x = Math.abs(u.left - l);
    return y < x
      ? { position: L.RIGHT, rect: p }
      : { position: L.LEFT, rect: u };
  }
  var b = Ov(n),
    O,
    d;
  b
    ? ((O = uo({ position: n, dimensions: t, targetRect: o, targetOffset: r })),
      (d = uo({
        position: so(n),
        dimensions: t,
        targetRect: o,
        targetOffset: r,
      })))
    : ((O = uo({
        position: so(n),
        dimensions: t,
        targetRect: o,
        targetOffset: r,
      })),
      (d = uo({ position: n, dimensions: t, targetRect: o, targetOffset: r })));
  var c = DT(O, l),
    g = RT(d, i, l);
  if (b) {
    if (c) return { position: n, rect: O };
    if (g) return { position: so(n), rect: d };
  }
  if (!b) {
    if (g) return { position: n, rect: d };
    if (c) return { position: so(n), rect: O };
  }
  var w = Math.abs(i.height - l - d.bottom),
    N = Math.abs(O.top - l);
  return w < N
    ? { position: b ? so(n) : n, rect: d }
    : { position: b ? n : so(n), rect: O };
}
function uo(e) {
  var t = e.dimensions,
    n = e.position,
    r = e.targetOffset,
    o = e.targetRect,
    i = o.left + o.width / 2 - t.width / 2,
    a = o.top - t.height - r,
    l = o.bottom + r,
    s = o.right - t.width,
    u = o.top + o.height / 2 - t.height / 2;
  switch (n) {
    case L.LEFT:
      return ir(t, { left: o.left - t.width - r, top: u });
    case L.RIGHT:
      return ir(t, { left: o.right + r, top: u });
    case L.TOP:
      return ir(t, { left: i, top: a });
    case L.TOP_LEFT:
      return ir(t, { left: o.left, top: a });
    case L.TOP_RIGHT:
      return ir(t, { left: s, top: a });
    default:
    case L.BOTTOM:
      return ir(t, { left: i, top: l });
    case L.BOTTOM_LEFT:
      return ir(t, { left: o.left, top: l });
    case L.BOTTOM_RIGHT:
      return ir(t, { left: s, top: l });
  }
}
var FT = { spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)" },
  IT = function (t) {
    var n = t.animationDuration,
      r = t.initialScale;
    return {
      position: "fixed",
      transitionTimingFunction: FT.spring,
      transitionDuration: "".concat(n, "ms"),
      transitionProperty: "opacity, transform",
      transform: "scale(".concat(r, ") translateY(-1px)"),
      selectors: {
        '&[data-state="entering"],&[data-state="entered"]': {
          opacity: 1,
          visibility: "visible",
          transform: "scale(1)",
        },
        '&[data-state="exiting"],&[data-state="exited"]': {
          opacity: 0,
          transform: "scale(1)",
        },
      },
    };
  },
  ag = function () {},
  su = { left: 0, top: 0, height: 0, width: 0, transformOrigin: null },
  Ev = S.memo(function (t) {
    var n = t.target,
      r = t.isShown,
      o = t.children,
      i = t.initialScale,
      a = i === void 0 ? 0.9 : i,
      l = t.animationDuration,
      s = l === void 0 ? 300 : l,
      u = t.position,
      p = u === void 0 ? L.BOTTOM : u,
      m = t.bodyOffset,
      h = m === void 0 ? 6 : m,
      y = t.targetOffset,
      x = y === void 0 ? 6 : y,
      b = t.onOpenComplete,
      O = b === void 0 ? ag : b,
      d = t.onCloseComplete,
      c = d === void 0 ? ag : d,
      g = S.useState(su),
      w = Zi(g, 2),
      N = w[0],
      T = w[1],
      E = jO(N, su),
      C = S.useRef(),
      z = S.useRef(),
      R = S.useRef(),
      A = S.useRef(),
      q = Dp(A),
      re = Dp(R),
      ie = S.useCallback(
        function () {
          var j =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : 0,
            M =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 0;
          if (!(!r || !A.current || !R.current)) {
            var F = A.current.getBoundingClientRect(),
              Q = R.current.getAttribute("data-state") === "entered",
              K = document.documentElement.clientHeight,
              U = document.documentElement.clientWidth,
              xe,
              Ye;
            if (Q) {
              var Z = R.current.getBoundingClientRect();
              (xe = Math.round(Z.height)), (Ye = Math.round(Z.width));
            } else
              (xe = Math.max(R.current.offsetHeight, j)),
                (Ye = Math.max(R.current.offsetWidth, M));
            var dt = AT({
                position: p,
                targetRect: F,
                targetOffset: x,
                dimensions: { height: xe, width: Ye },
                viewport: { width: U, height: K },
                viewportOffset: h,
              }),
              zt = dt.rect,
              Tr = dt.transformOrigin;
            T({
              left: zt.left,
              top: zt.top,
              height: xe,
              width: Ye,
              transformOrigin: Tr,
            });
          }
        },
        [h, r, p, x]
      );
    S.useEffect(
      function () {
        return (
          z.current === "entered" &&
            (C.current = requestAnimationFrame(function () {
              ie(E.height, E.width);
            })),
          function () {
            C.current && cancelAnimationFrame(C.current);
          }
        );
      },
      [E.height, E.width, ie, o]
    );
    var Qt = function () {
        (z.current = "entering"), ie();
      },
      Ot = function () {
        (z.current = "entered"), ie();
      },
      ke = function () {
        (z.current = "exited"), T(su), c();
      };
    return (
      S.useEffect(function () {
        var j = function () {
          return ie();
        };
        return (
          window.addEventListener("resize", j),
          window.addEventListener("scroll", j),
          function () {
            window.removeEventListener("resize", j),
              window.removeEventListener("scroll", j);
          }
        );
      }),
      V.createElement(xv, { value: zf.POSITIONER }, function (j) {
        return V.createElement(
          V.Fragment,
          null,
          n({ getRef: q, isShown: r }),
          V.createElement(
            Qn,
            {
              nodeRef: R,
              appear: !0,
              in: r,
              timeout: s,
              onEnter: Ot,
              onEntering: Qt,
              onEntered: O,
              onExited: ke,
              unmountOnExit: !0,
            },
            function (M) {
              return V.createElement(
                _v,
                null,
                o({
                  top: N.top,
                  left: N.left,
                  state: M,
                  zIndex: j,
                  css: IT({ initialScale: a, animationDuration: s }),
                  style: {
                    transformOrigin: N.transformOrigin,
                    left: N.left,
                    top: N.top,
                    zIndex: j,
                  },
                  getRef: re,
                  animationDuration: s,
                })
              );
            }
          )
        );
      })
    );
  });
Ev.propTypes = {
  position: W.oneOf([
    L.TOP,
    L.TOP_LEFT,
    L.TOP_RIGHT,
    L.BOTTOM,
    L.BOTTOM_LEFT,
    L.BOTTOM_RIGHT,
    L.LEFT,
    L.RIGHT,
  ]),
  isShown: W.bool,
  children: W.func.isRequired,
  bodyOffset: W.number,
  targetOffset: W.number,
  target: W.func.isRequired,
  initialScale: W.number,
  animationDuration: W.number,
  onCloseComplete: W.func,
  onOpenComplete: W.func,
};
var BT = "Expected a function",
  lg = NaN,
  WT = "[object Symbol]",
  VT = /^\s+|\s+$/g,
  HT = /^[-+]0x[0-9a-f]+$/i,
  UT = /^0b[01]+$/i,
  GT = /^0o[0-7]+$/i,
  KT = parseInt,
  XT = typeof k == "object" && k && k.Object === Object && k,
  YT = typeof self == "object" && self && self.Object === Object && self,
  QT = XT || YT || Function("return this")(),
  ZT = Object.prototype,
  JT = ZT.toString,
  qT = Math.max,
  eC = Math.min,
  uu = function () {
    return QT.Date.now();
  };
function tC(e, t, n) {
  var r,
    o,
    i,
    a,
    l,
    s,
    u = 0,
    p = !1,
    m = !1,
    h = !0;
  if (typeof e != "function") throw new TypeError(BT);
  (t = sg(t) || 0),
    hc(n) &&
      ((p = !!n.leading),
      (m = "maxWait" in n),
      (i = m ? qT(sg(n.maxWait) || 0, t) : i),
      (h = "trailing" in n ? !!n.trailing : h));
  function y(T) {
    var E = r,
      C = o;
    return (r = o = void 0), (u = T), (a = e.apply(C, E)), a;
  }
  function x(T) {
    return (u = T), (l = setTimeout(d, t)), p ? y(T) : a;
  }
  function b(T) {
    var E = T - s,
      C = T - u,
      z = t - E;
    return m ? eC(z, i - C) : z;
  }
  function O(T) {
    var E = T - s,
      C = T - u;
    return s === void 0 || E >= t || E < 0 || (m && C >= i);
  }
  function d() {
    var T = uu();
    if (O(T)) return c(T);
    l = setTimeout(d, b(T));
  }
  function c(T) {
    return (l = void 0), h && r ? y(T) : ((r = o = void 0), a);
  }
  function g() {
    l !== void 0 && clearTimeout(l), (u = 0), (r = s = o = l = void 0);
  }
  function w() {
    return l === void 0 ? a : c(uu());
  }
  function N() {
    var T = uu(),
      E = O(T);
    if (((r = arguments), (o = this), (s = T), E)) {
      if (l === void 0) return x(s);
      if (m) return (l = setTimeout(d, t)), y(s);
    }
    return l === void 0 && (l = setTimeout(d, t)), a;
  }
  return (N.cancel = g), (N.flush = w), N;
}
function hc(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function nC(e) {
  return !!e && typeof e == "object";
}
function rC(e) {
  return typeof e == "symbol" || (nC(e) && JT.call(e) == WT);
}
function sg(e) {
  if (typeof e == "number") return e;
  if (rC(e)) return lg;
  if (hc(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = hc(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(VT, "");
  var n = UT.test(e);
  return n || GT.test(e) ? KT(e.slice(2), n ? 2 : 8) : HT.test(e) ? lg : +e;
}
var oC = tC;
const ug = Xn(oC);
var iC = ["appearance", "children"],
  aC = ["color"],
  lC = {},
  sC = {},
  Tv = S.memo(
    S.forwardRef(function (t, n) {
      var r = t.appearance,
        o = t.children,
        i = Bo(t, iC),
        a = Rf("Tooltip", { appearance: r }, lC, sC),
        l = a.color,
        s = Bo(a, aC),
        u;
      return (
        typeof o == "string"
          ? (u = V.createElement(Df, { color: l, size: 400 }, o))
          : (u = o),
        V.createElement(Sv, Io({ ref: n }, s, i), u)
      );
    })
  );
Tv.propTypes = {
  children: W.node,
  appearance: W.oneOf(["default", "card"]).isRequired,
};
var uC = ["getTargetRef", "isShown"];
function cg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function mi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cg(Object(n), !0).forEach(function (r) {
          Yt(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : cg(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var cC = {},
  Cv = S.memo(function (t) {
    var n = t.appearance,
      r = n === void 0 ? "default" : n,
      o = t.position,
      i = o === void 0 ? L.BOTTOM : o,
      a = t.content,
      l = t.hideDelay,
      s = l === void 0 ? 120 : l,
      u = t.showDelay,
      p = u === void 0 ? 0 : u,
      m = t.isShown,
      h = t.children,
      y = t.statelessProps,
      x = y === void 0 ? cC : y,
      b = CO("evergreen-tooltip", t.id),
      O = S.useState(m || !1),
      d = Zi(O, 2),
      c = d[0],
      g = d[1],
      w = S.useState(!1),
      N = Zi(w, 2),
      T = N[0],
      E = N[1],
      C = S.useRef(void 0),
      z = function () {
        E(!1);
      },
      R = ug(z, s),
      A = function () {
        g(!1), clearTimeout(C.current);
      },
      q = ug(A, s);
    S.useEffect(function () {
      return function () {
        clearTimeout(C.current);
      };
    }, []);
    var re = function () {
        if (!c) {
          if (!p) {
            g(!0);
            return;
          }
          clearTimeout(C.current),
            (C.current = setTimeout(function () {
              g(!0);
            }, p));
        }
      },
      ie = function (M) {
        var F = M.getRef,
          Q = { onMouseEnter: re, onMouseLeave: q, "aria-describedby": b };
        if (t.popoverProps) {
          var K = t.popoverProps,
            U = K.getTargetRef;
          K.isShown;
          var xe = Bo(K, uC);
          return V.cloneElement(
            h,
            mi(
              mi(mi({}, xe), Q),
              {},
              {
                ref: function (Z) {
                  F(Z), U(Z);
                },
              }
            )
          );
        }
        return V.cloneElement(
          h,
          mi(
            mi({}, Q),
            {},
            {
              ref: function (Z) {
                F(Z);
              },
            }
          )
        );
      },
      Qt = function () {
        return t.popoverProps && t.popoverProps.isShown;
      },
      Ot = function () {
        E(!0);
      },
      ke = (m || c || T) && !Qt();
    return (
      m === !1 && (ke = !1),
      V.createElement(
        Ev,
        { target: ie, isShown: ke, position: i, animationDuration: 160 },
        function (j) {
          var M = j.css,
            F = j.getRef,
            Q = j.state,
            K = j.style;
          return V.createElement(
            Tv,
            Io(
              {
                id: b,
                appearance: r,
                ref: F,
                "data-state": Q,
                style: K,
                onMouseEnter: Ot,
                onMouseLeave: R,
              },
              x,
              M,
              { className: x.className }
            ),
            a
          );
        }
      )
    );
  });
Cv.propTypes = {
  appearance: W.oneOf(["default", "card"]),
  id: W.string,
  position: W.oneOf([
    L.TOP,
    L.TOP_LEFT,
    L.TOP_RIGHT,
    L.BOTTOM,
    L.BOTTOM_LEFT,
    L.BOTTOM_RIGHT,
    L.LEFT,
    L.RIGHT,
  ]),
  content: W.node,
  hideDelay: W.number,
  showDelay: W.number,
  isShown: W.bool,
  children: W.node,
  statelessProps: W.object,
};
const ps =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function Uo(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || t === "[object global]";
}
function $f(e) {
  return "nodeType" in e;
}
function rt(e) {
  var t, n;
  return e
    ? Uo(e)
      ? e
      : $f(e) &&
        (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null
      ? t
      : window
    : window;
}
function Mf(e) {
  const { Document: t } = rt(e);
  return e instanceof t;
}
function la(e) {
  return Uo(e) ? !1 : e instanceof rt(e).HTMLElement;
}
function kv(e) {
  return e instanceof rt(e).SVGElement;
}
function Go(e) {
  return e
    ? Uo(e)
      ? e.document
      : $f(e)
      ? Mf(e)
        ? e
        : la(e) || kv(e)
        ? e.ownerDocument
        : document
      : document
    : document;
}
const jn = ps ? S.useLayoutEffect : S.useEffect;
function gs(e) {
  const t = S.useRef(e);
  return (
    jn(() => {
      t.current = e;
    }),
    S.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return t.current == null ? void 0 : t.current(...r);
    }, [])
  );
}
function fC() {
  const e = S.useRef(null),
    t = S.useCallback((r, o) => {
      e.current = setInterval(r, o);
    }, []),
    n = S.useCallback(() => {
      e.current !== null && (clearInterval(e.current), (e.current = null));
    }, []);
  return [t, n];
}
function Ji(e, t) {
  t === void 0 && (t = [e]);
  const n = S.useRef(e);
  return (
    jn(() => {
      n.current !== e && (n.current = e);
    }, t),
    n
  );
}
function sa(e, t) {
  const n = S.useRef();
  return S.useMemo(() => {
    const r = e(n.current);
    return (n.current = r), r;
  }, [...t]);
}
function Fl(e) {
  const t = gs(e),
    n = S.useRef(null),
    r = S.useCallback((o) => {
      o !== n.current && t?.(o, n.current), (n.current = o);
    }, []);
  return [n, r];
}
function Il(e) {
  const t = S.useRef();
  return (
    S.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
let cu = {};
function ms(e, t) {
  return S.useMemo(() => {
    if (t) return t;
    const n = cu[e] == null ? 0 : cu[e] + 1;
    return (cu[e] = n), e + "-" + n;
  }, [e, t]);
}
function jv(e) {
  return function (t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      r[o - 1] = arguments[o];
    return r.reduce(
      (i, a) => {
        const l = Object.entries(a);
        for (const [s, u] of l) {
          const p = i[s];
          p != null && (i[s] = p + e * u);
        }
        return i;
      },
      { ...t }
    );
  };
}
const jo = jv(1),
  Bl = jv(-1);
function dC(e) {
  return "clientX" in e && "clientY" in e;
}
function Af(e) {
  if (!e) return !1;
  const { KeyboardEvent: t } = rt(e.target);
  return t && e instanceof t;
}
function pC(e) {
  if (!e) return !1;
  const { TouchEvent: t } = rt(e.target);
  return t && e instanceof t;
}
function Wl(e) {
  if (pC(e)) {
    if (e.touches && e.touches.length) {
      const { clientX: t, clientY: n } = e.touches[0];
      return { x: t, y: n };
    } else if (e.changedTouches && e.changedTouches.length) {
      const { clientX: t, clientY: n } = e.changedTouches[0];
      return { x: t, y: n };
    }
  }
  return dC(e) ? { x: e.clientX, y: e.clientY } : null;
}
const Xr = Object.freeze({
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
          return [Xr.Translate.toString(e), Xr.Scale.toString(e)].join(" ");
      },
    },
    Transition: {
      toString(e) {
        let { property: t, duration: n, easing: r } = e;
        return t + " " + n + "ms " + r;
      },
    },
  }),
  fg =
    "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function gC(e) {
  return e.matches(fg) ? e : e.querySelector(fg);
}
const mC = { display: "none" };
function hC(e) {
  let { id: t, value: n } = e;
  return V.createElement("div", { id: t, style: mC }, n);
}
function vC(e) {
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
  return V.createElement(
    "div",
    { id: t, style: o, role: "status", "aria-live": r, "aria-atomic": !0 },
    n
  );
}
function yC() {
  const [e, t] = S.useState("");
  return {
    announce: S.useCallback((r) => {
      r != null && t(r);
    }, []),
    announcement: e,
  };
}
const Pv = S.createContext(null);
function bC(e) {
  const t = S.useContext(Pv);
  S.useEffect(() => {
    if (!t)
      throw new Error(
        "useDndMonitor must be used within a children of <DndContext>"
      );
    return t(e);
  }, [e, t]);
}
function SC() {
  const [e] = S.useState(() => new Set()),
    t = S.useCallback((r) => (e.add(r), () => e.delete(r)), [e]);
  return [
    S.useCallback(
      (r) => {
        let { type: o, event: i } = r;
        e.forEach((a) => {
          var l;
          return (l = a[o]) == null ? void 0 : l.call(a, i);
        });
      },
      [e]
    ),
    t,
  ];
}
const wC = {
    draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `,
  },
  _C = {
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
function xC(e) {
  let {
    announcements: t = _C,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = wC,
  } = e;
  const { announce: i, announcement: a } = yC(),
    l = ms("DndLiveRegion"),
    [s, u] = S.useState(!1);
  if (
    (S.useEffect(() => {
      u(!0);
    }, []),
    bC(
      S.useMemo(
        () => ({
          onDragStart(m) {
            let { active: h } = m;
            i(t.onDragStart({ active: h }));
          },
          onDragMove(m) {
            let { active: h, over: y } = m;
            t.onDragMove && i(t.onDragMove({ active: h, over: y }));
          },
          onDragOver(m) {
            let { active: h, over: y } = m;
            i(t.onDragOver({ active: h, over: y }));
          },
          onDragEnd(m) {
            let { active: h, over: y } = m;
            i(t.onDragEnd({ active: h, over: y }));
          },
          onDragCancel(m) {
            let { active: h, over: y } = m;
            i(t.onDragCancel({ active: h, over: y }));
          },
        }),
        [i, t]
      )
    ),
    !s)
  )
    return null;
  const p = V.createElement(
    V.Fragment,
    null,
    V.createElement(hC, { id: r, value: o.draggable }),
    V.createElement(vC, { id: l, announcement: a })
  );
  return n ? Fn.createPortal(p, n) : p;
}
var Re;
(function (e) {
  (e.DragStart = "dragStart"),
    (e.DragMove = "dragMove"),
    (e.DragEnd = "dragEnd"),
    (e.DragCancel = "dragCancel"),
    (e.DragOver = "dragOver"),
    (e.RegisterDroppable = "registerDroppable"),
    (e.SetDroppableDisabled = "setDroppableDisabled"),
    (e.UnregisterDroppable = "unregisterDroppable");
})(Re || (Re = {}));
function Vl() {}
const Xt = Object.freeze({ x: 0, y: 0 });
function OC(e, t) {
  const n = Wl(e);
  if (!n) return "0 0";
  const r = {
    x: ((n.x - t.left) / t.width) * 100,
    y: ((n.y - t.top) / t.height) * 100,
  };
  return r.x + "% " + r.y + "%";
}
function NC(e, t) {
  let {
      data: { value: n },
    } = e,
    {
      data: { value: r },
    } = t;
  return r - n;
}
function EC(e, t) {
  if (!e || e.length === 0) return null;
  const [n] = e;
  return n[t];
}
function TC(e, t) {
  const n = Math.max(t.top, e.top),
    r = Math.max(t.left, e.left),
    o = Math.min(t.left + t.width, e.left + e.width),
    i = Math.min(t.top + t.height, e.top + e.height),
    a = o - r,
    l = i - n;
  if (r < o && n < i) {
    const s = t.width * t.height,
      u = e.width * e.height,
      p = a * l,
      m = p / (s + u - p);
    return Number(m.toFixed(4));
  }
  return 0;
}
const CC = (e) => {
  let { collisionRect: t, droppableRects: n, droppableContainers: r } = e;
  const o = [];
  for (const i of r) {
    const { id: a } = i,
      l = n.get(a);
    if (l) {
      const s = TC(l, t);
      s > 0 && o.push({ id: a, data: { droppableContainer: i, value: s } });
    }
  }
  return o.sort(NC);
};
function kC(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1,
  };
}
function Rv(e, t) {
  return e && t ? { x: e.left - t.left, y: e.top - t.top } : Xt;
}
function jC(e) {
  return function (n) {
    for (
      var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1;
      i < r;
      i++
    )
      o[i - 1] = arguments[i];
    return o.reduce(
      (a, l) => ({
        ...a,
        top: a.top + e * l.y,
        bottom: a.bottom + e * l.y,
        left: a.left + e * l.x,
        right: a.right + e * l.x,
      }),
      { ...n }
    );
  };
}
const PC = jC(1);
function Dv(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return { x: +t[12], y: +t[13], scaleX: +t[0], scaleY: +t[5] };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return { x: +t[4], y: +t[5], scaleX: +t[0], scaleY: +t[3] };
  }
  return null;
}
function RC(e, t, n) {
  const r = Dv(t);
  if (!r) return e;
  const { scaleX: o, scaleY: i, x: a, y: l } = r,
    s = e.left - a - (1 - o) * parseFloat(n),
    u = e.top - l - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)),
    p = o ? e.width / o : e.width,
    m = i ? e.height / i : e.height;
  return { width: p, height: m, top: u, right: s + p, bottom: u + m, left: s };
}
const DC = { ignoreTransform: !1 };
function ua(e, t) {
  t === void 0 && (t = DC);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const { transform: u, transformOrigin: p } = rt(e).getComputedStyle(e);
    u && (n = RC(n, u, p));
  }
  const { top: r, left: o, width: i, height: a, bottom: l, right: s } = n;
  return { top: r, left: o, width: i, height: a, bottom: l, right: s };
}
function dg(e) {
  return ua(e, { ignoreTransform: !0 });
}
function zC(e) {
  const t = e.innerWidth,
    n = e.innerHeight;
  return { top: 0, left: 0, right: t, bottom: n, width: t, height: n };
}
function $C(e, t) {
  return (
    t === void 0 && (t = rt(e).getComputedStyle(e)), t.position === "fixed"
  );
}
function MC(e, t) {
  t === void 0 && (t = rt(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const i = t[o];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function Lf(e, t) {
  const n = [];
  function r(o) {
    if ((t != null && n.length >= t) || !o) return n;
    if (Mf(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return n.push(o.scrollingElement), n;
    if (!la(o) || kv(o) || n.includes(o)) return n;
    const i = rt(e).getComputedStyle(o);
    return o !== e && MC(o, i) && n.push(o), $C(o, i) ? n : r(o.parentNode);
  }
  return e ? r(e) : n;
}
function zv(e) {
  const [t] = Lf(e, 1);
  return t ?? null;
}
function fu(e) {
  return !ps || !e
    ? null
    : Uo(e)
    ? e
    : $f(e)
    ? Mf(e) || e === Go(e).scrollingElement
      ? window
      : la(e)
      ? e
      : null
    : null;
}
function $v(e) {
  return Uo(e) ? e.scrollX : e.scrollLeft;
}
function Mv(e) {
  return Uo(e) ? e.scrollY : e.scrollTop;
}
function vc(e) {
  return { x: $v(e), y: Mv(e) };
}
var Ae;
(function (e) {
  (e[(e.Forward = 1)] = "Forward"), (e[(e.Backward = -1)] = "Backward");
})(Ae || (Ae = {}));
function Av(e) {
  return !ps || !e ? !1 : e === document.scrollingElement;
}
function Lv(e) {
  const t = { x: 0, y: 0 },
    n = Av(e)
      ? { height: window.innerHeight, width: window.innerWidth }
      : { height: e.clientHeight, width: e.clientWidth },
    r = { x: e.scrollWidth - n.width, y: e.scrollHeight - n.height },
    o = e.scrollTop <= t.y,
    i = e.scrollLeft <= t.x,
    a = e.scrollTop >= r.y,
    l = e.scrollLeft >= r.x;
  return {
    isTop: o,
    isLeft: i,
    isBottom: a,
    isRight: l,
    maxScroll: r,
    minScroll: t,
  };
}
const AC = { x: 0.2, y: 0.2 };
function LC(e, t, n, r, o) {
  let { top: i, left: a, right: l, bottom: s } = n;
  r === void 0 && (r = 10), o === void 0 && (o = AC);
  const { isTop: u, isBottom: p, isLeft: m, isRight: h } = Lv(e),
    y = { x: 0, y: 0 },
    x = { x: 0, y: 0 },
    b = { height: t.height * o.y, width: t.width * o.x };
  return (
    !u && i <= t.top + b.height
      ? ((y.y = Ae.Backward),
        (x.y = r * Math.abs((t.top + b.height - i) / b.height)))
      : !p &&
        s >= t.bottom - b.height &&
        ((y.y = Ae.Forward),
        (x.y = r * Math.abs((t.bottom - b.height - s) / b.height))),
    !h && l >= t.right - b.width
      ? ((y.x = Ae.Forward),
        (x.x = r * Math.abs((t.right - b.width - l) / b.width)))
      : !m &&
        a <= t.left + b.width &&
        ((y.x = Ae.Backward),
        (x.x = r * Math.abs((t.left + b.width - a) / b.width))),
    { direction: y, speed: x }
  );
}
function FC(e) {
  if (e === document.scrollingElement) {
    const { innerWidth: i, innerHeight: a } = window;
    return { top: 0, left: 0, right: i, bottom: a, width: i, height: a };
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
function Fv(e) {
  return e.reduce((t, n) => jo(t, vc(n)), Xt);
}
function IC(e) {
  return e.reduce((t, n) => t + $v(n), 0);
}
function BC(e) {
  return e.reduce((t, n) => t + Mv(n), 0);
}
function Iv(e, t) {
  if ((t === void 0 && (t = ua), !e)) return;
  const { top: n, left: r, bottom: o, right: i } = t(e);
  zv(e) &&
    (o <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) &&
    e.scrollIntoView({ block: "center", inline: "center" });
}
const WC = [
  ["x", ["left", "right"], IC],
  ["y", ["top", "bottom"], BC],
];
class Ff {
  constructor(t, n) {
    (this.rect = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.right = void 0),
      (this.left = void 0);
    const r = Lf(n),
      o = Fv(r);
    (this.rect = { ...t }), (this.width = t.width), (this.height = t.height);
    for (const [i, a, l] of WC)
      for (const s of a)
        Object.defineProperty(this, s, {
          get: () => {
            const u = l(r),
              p = o[i] - u;
            return this.rect[s] + p;
          },
          enumerable: !0,
        });
    Object.defineProperty(this, "rect", { enumerable: !1 });
  }
}
class ji {
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
function VC(e) {
  const { EventTarget: t } = rt(e);
  return e instanceof t ? e : Go(e);
}
function du(e, t) {
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
var Tt;
(function (e) {
  (e.Click = "click"),
    (e.DragStart = "dragstart"),
    (e.Keydown = "keydown"),
    (e.ContextMenu = "contextmenu"),
    (e.Resize = "resize"),
    (e.SelectionChange = "selectionchange"),
    (e.VisibilityChange = "visibilitychange");
})(Tt || (Tt = {}));
function pg(e) {
  e.preventDefault();
}
function HC(e) {
  e.stopPropagation();
}
var ue;
(function (e) {
  (e.Space = "Space"),
    (e.Down = "ArrowDown"),
    (e.Right = "ArrowRight"),
    (e.Left = "ArrowLeft"),
    (e.Up = "ArrowUp"),
    (e.Esc = "Escape"),
    (e.Enter = "Enter");
})(ue || (ue = {}));
const Bv = {
    start: [ue.Space, ue.Enter],
    cancel: [ue.Esc],
    end: [ue.Space, ue.Enter],
  },
  UC = (e, t) => {
    let { currentCoordinates: n } = t;
    switch (e.code) {
      case ue.Right:
        return { ...n, x: n.x + 25 };
      case ue.Left:
        return { ...n, x: n.x - 25 };
      case ue.Down:
        return { ...n, y: n.y + 25 };
      case ue.Up:
        return { ...n, y: n.y - 25 };
    }
  };
class Wv {
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
      (this.listeners = new ji(Go(n))),
      (this.windowListeners = new ji(rt(n))),
      (this.handleKeyDown = this.handleKeyDown.bind(this)),
      (this.handleCancel = this.handleCancel.bind(this)),
      this.attach();
  }
  attach() {
    this.handleStart(),
      this.windowListeners.add(Tt.Resize, this.handleCancel),
      this.windowListeners.add(Tt.VisibilityChange, this.handleCancel),
      setTimeout(() => this.listeners.add(Tt.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const { activeNode: t, onStart: n } = this.props,
      r = t.node.current;
    r && Iv(r), n(Xt);
  }
  handleKeyDown(t) {
    if (Af(t)) {
      const { active: n, context: r, options: o } = this.props,
        {
          keyboardCodes: i = Bv,
          coordinateGetter: a = UC,
          scrollBehavior: l = "smooth",
        } = o,
        { code: s } = t;
      if (i.end.includes(s)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(s)) {
        this.handleCancel(t);
        return;
      }
      const { collisionRect: u } = r.current,
        p = u ? { x: u.left, y: u.top } : Xt;
      this.referenceCoordinates || (this.referenceCoordinates = p);
      const m = a(t, { active: n, context: r.current, currentCoordinates: p });
      if (m) {
        const h = Bl(m, p),
          y = { x: 0, y: 0 },
          { scrollableAncestors: x } = r.current;
        for (const b of x) {
          const O = t.code,
            {
              isTop: d,
              isRight: c,
              isLeft: g,
              isBottom: w,
              maxScroll: N,
              minScroll: T,
            } = Lv(b),
            E = FC(b),
            C = {
              x: Math.min(
                O === ue.Right ? E.right - E.width / 2 : E.right,
                Math.max(O === ue.Right ? E.left : E.left + E.width / 2, m.x)
              ),
              y: Math.min(
                O === ue.Down ? E.bottom - E.height / 2 : E.bottom,
                Math.max(O === ue.Down ? E.top : E.top + E.height / 2, m.y)
              ),
            },
            z = (O === ue.Right && !c) || (O === ue.Left && !g),
            R = (O === ue.Down && !w) || (O === ue.Up && !d);
          if (z && C.x !== m.x) {
            const A = b.scrollLeft + h.x,
              q = (O === ue.Right && A <= N.x) || (O === ue.Left && A >= T.x);
            if (q && !h.y) {
              b.scrollTo({ left: A, behavior: l });
              return;
            }
            q
              ? (y.x = b.scrollLeft - A)
              : (y.x =
                  O === ue.Right ? b.scrollLeft - N.x : b.scrollLeft - T.x),
              y.x && b.scrollBy({ left: -y.x, behavior: l });
            break;
          } else if (R && C.y !== m.y) {
            const A = b.scrollTop + h.y,
              q = (O === ue.Down && A <= N.y) || (O === ue.Up && A >= T.y);
            if (q && !h.x) {
              b.scrollTo({ top: A, behavior: l });
              return;
            }
            q
              ? (y.y = b.scrollTop - A)
              : (y.y = O === ue.Down ? b.scrollTop - N.y : b.scrollTop - T.y),
              y.y && b.scrollBy({ top: -y.y, behavior: l });
            break;
          }
        }
        this.handleMove(t, jo(Bl(m, this.referenceCoordinates), y));
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
Wv.activators = [
  {
    eventName: "onKeyDown",
    handler: (e, t, n) => {
      let { keyboardCodes: r = Bv, onActivation: o } = t,
        { active: i } = n;
      const { code: a } = e.nativeEvent;
      if (r.start.includes(a)) {
        const l = i.activatorNode.current;
        return l && e.target !== l
          ? !1
          : (e.preventDefault(), o?.({ event: e.nativeEvent }), !0);
      }
      return !1;
    },
  },
];
function gg(e) {
  return !!(e && "distance" in e);
}
function mg(e) {
  return !!(e && "delay" in e);
}
class If {
  constructor(t, n, r) {
    var o;
    r === void 0 && (r = VC(t.event.target)),
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
      { target: a } = i;
    (this.props = t),
      (this.events = n),
      (this.document = Go(a)),
      (this.documentListeners = new ji(this.document)),
      (this.listeners = new ji(r)),
      (this.windowListeners = new ji(rt(a))),
      (this.initialCoordinates = (o = Wl(i)) != null ? o : Xt),
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
      this.windowListeners.add(Tt.Resize, this.handleCancel),
      this.windowListeners.add(Tt.DragStart, pg),
      this.windowListeners.add(Tt.VisibilityChange, this.handleCancel),
      this.windowListeners.add(Tt.ContextMenu, pg),
      this.documentListeners.add(Tt.Keydown, this.handleKeydown),
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
      if (mg(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay);
        return;
      }
      if (gg(n)) return;
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
      this.documentListeners.add(Tt.Click, HC, { capture: !0 }),
      this.removeTextSelection(),
      this.documentListeners.add(Tt.SelectionChange, this.removeTextSelection),
      n(t));
  }
  handleMove(t) {
    var n;
    const { activated: r, initialCoordinates: o, props: i } = this,
      {
        onMove: a,
        options: { activationConstraint: l },
      } = i;
    if (!o) return;
    const s = (n = Wl(t)) != null ? n : Xt,
      u = Bl(o, s);
    if (!r && l) {
      if (gg(l)) {
        if (l.tolerance != null && du(u, l.tolerance))
          return this.handleCancel();
        if (du(u, l.distance)) return this.handleStart();
      }
      return mg(l) && du(u, l.tolerance) ? this.handleCancel() : void 0;
    }
    t.cancelable && t.preventDefault(), a(s);
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
    t.code === ue.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const GC = { move: { name: "pointermove" }, end: { name: "pointerup" } };
class Vv extends If {
  constructor(t) {
    const { event: n } = t,
      r = Go(n.target);
    super(t, GC, r);
  }
}
Vv.activators = [
  {
    eventName: "onPointerDown",
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      return !n.isPrimary || n.button !== 0 ? !1 : (r?.({ event: n }), !0);
    },
  },
];
const KC = { move: { name: "mousemove" }, end: { name: "mouseup" } };
var yc;
(function (e) {
  e[(e.RightClick = 2)] = "RightClick";
})(yc || (yc = {}));
class XC extends If {
  constructor(t) {
    super(t, KC, Go(t.event.target));
  }
}
XC.activators = [
  {
    eventName: "onMouseDown",
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      return n.button === yc.RightClick ? !1 : (r?.({ event: n }), !0);
    },
  },
];
const pu = { move: { name: "touchmove" }, end: { name: "touchend" } };
class YC extends If {
  constructor(t) {
    super(t, pu);
  }
  static setup() {
    return (
      window.addEventListener(pu.move.name, t, { capture: !1, passive: !1 }),
      function () {
        window.removeEventListener(pu.move.name, t);
      }
    );
    function t() {}
  }
}
YC.activators = [
  {
    eventName: "onTouchStart",
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      const { touches: o } = n;
      return o.length > 1 ? !1 : (r?.({ event: n }), !0);
    },
  },
];
var Pi;
(function (e) {
  (e[(e.Pointer = 0)] = "Pointer"),
    (e[(e.DraggableRect = 1)] = "DraggableRect");
})(Pi || (Pi = {}));
var Hl;
(function (e) {
  (e[(e.TreeOrder = 0)] = "TreeOrder"),
    (e[(e.ReversedTreeOrder = 1)] = "ReversedTreeOrder");
})(Hl || (Hl = {}));
function QC(e) {
  let {
    acceleration: t,
    activator: n = Pi.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: i,
    interval: a = 5,
    order: l = Hl.TreeOrder,
    pointerCoordinates: s,
    scrollableAncestors: u,
    scrollableAncestorRects: p,
    delta: m,
    threshold: h,
  } = e;
  const y = JC({ delta: m, disabled: !i }),
    [x, b] = fC(),
    O = S.useRef({ x: 0, y: 0 }),
    d = S.useRef({ x: 0, y: 0 }),
    c = S.useMemo(() => {
      switch (n) {
        case Pi.Pointer:
          return s ? { top: s.y, bottom: s.y, left: s.x, right: s.x } : null;
        case Pi.DraggableRect:
          return o;
      }
    }, [n, o, s]),
    g = S.useRef(null),
    w = S.useCallback(() => {
      const T = g.current;
      if (!T) return;
      const E = O.current.x * d.current.x,
        C = O.current.y * d.current.y;
      T.scrollBy(E, C);
    }, []),
    N = S.useMemo(() => (l === Hl.TreeOrder ? [...u].reverse() : u), [l, u]);
  S.useEffect(() => {
    if (!i || !u.length || !c) {
      b();
      return;
    }
    for (const T of N) {
      if (r?.(T) === !1) continue;
      const E = u.indexOf(T),
        C = p[E];
      if (!C) continue;
      const { direction: z, speed: R } = LC(T, C, c, t, h);
      for (const A of ["x", "y"]) y[A][z[A]] || ((R[A] = 0), (z[A] = 0));
      if (R.x > 0 || R.y > 0) {
        b(), (g.current = T), x(w, a), (O.current = R), (d.current = z);
        return;
      }
    }
    (O.current = { x: 0, y: 0 }), (d.current = { x: 0, y: 0 }), b();
  }, [
    t,
    w,
    r,
    b,
    i,
    a,
    JSON.stringify(c),
    JSON.stringify(y),
    x,
    u,
    N,
    p,
    JSON.stringify(h),
  ]);
}
const ZC = {
  x: { [Ae.Backward]: !1, [Ae.Forward]: !1 },
  y: { [Ae.Backward]: !1, [Ae.Forward]: !1 },
};
function JC(e) {
  let { delta: t, disabled: n } = e;
  const r = Il(t);
  return sa(
    (o) => {
      if (n || !r || !o) return ZC;
      const i = { x: Math.sign(t.x - r.x), y: Math.sign(t.y - r.y) };
      return {
        x: {
          [Ae.Backward]: o.x[Ae.Backward] || i.x === -1,
          [Ae.Forward]: o.x[Ae.Forward] || i.x === 1,
        },
        y: {
          [Ae.Backward]: o.y[Ae.Backward] || i.y === -1,
          [Ae.Forward]: o.y[Ae.Forward] || i.y === 1,
        },
      };
    },
    [n, t, r]
  );
}
function qC(e, t) {
  const n = t !== null ? e.get(t) : void 0,
    r = n ? n.node.current : null;
  return sa(
    (o) => {
      var i;
      return t === null ? null : (i = r ?? o) != null ? i : null;
    },
    [r, t]
  );
}
function ek(e, t) {
  return S.useMemo(
    () =>
      e.reduce((n, r) => {
        const { sensor: o } = r,
          i = o.activators.map((a) => ({
            eventName: a.eventName,
            handler: t(a.handler, r),
          }));
        return [...n, ...i];
      }, []),
    [e, t]
  );
}
var qi;
(function (e) {
  (e[(e.Always = 0)] = "Always"),
    (e[(e.BeforeDragging = 1)] = "BeforeDragging"),
    (e[(e.WhileDragging = 2)] = "WhileDragging");
})(qi || (qi = {}));
var bc;
(function (e) {
  e.Optimized = "optimized";
})(bc || (bc = {}));
const hg = new Map();
function tk(e, t) {
  let { dragging: n, dependencies: r, config: o } = t;
  const [i, a] = S.useState(null),
    { frequency: l, measure: s, strategy: u } = o,
    p = S.useRef(e),
    m = O(),
    h = Ji(m),
    y = S.useCallback(
      function (d) {
        d === void 0 && (d = []),
          !h.current &&
            a((c) =>
              c === null ? d : c.concat(d.filter((g) => !c.includes(g)))
            );
      },
      [h]
    ),
    x = S.useRef(null),
    b = sa(
      (d) => {
        if (m && !n) return hg;
        if (!d || d === hg || p.current !== e || i != null) {
          const c = new Map();
          for (let g of e) {
            if (!g) continue;
            if (i && i.length > 0 && !i.includes(g.id) && g.rect.current) {
              c.set(g.id, g.rect.current);
              continue;
            }
            const w = g.node.current,
              N = w ? new Ff(s(w), w) : null;
            (g.rect.current = N), N && c.set(g.id, N);
          }
          return c;
        }
        return d;
      },
      [e, i, n, m, s]
    );
  return (
    S.useEffect(() => {
      p.current = e;
    }, [e]),
    S.useEffect(() => {
      m || y();
    }, [n, m]),
    S.useEffect(() => {
      i && i.length > 0 && a(null);
    }, [JSON.stringify(i)]),
    S.useEffect(() => {
      m ||
        typeof l != "number" ||
        x.current !== null ||
        (x.current = setTimeout(() => {
          y(), (x.current = null);
        }, l));
    }, [l, m, y, ...r]),
    {
      droppableRects: b,
      measureDroppableContainers: y,
      measuringScheduled: i != null,
    }
  );
  function O() {
    switch (u) {
      case qi.Always:
        return !1;
      case qi.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Bf(e, t) {
  return sa(
    (n) => (e ? n || (typeof t == "function" ? t(e) : e) : null),
    [t, e]
  );
}
function nk(e, t) {
  return Bf(e, t);
}
function rk(e) {
  let { callback: t, disabled: n } = e;
  const r = gs(t),
    o = S.useMemo(() => {
      if (n || typeof window > "u" || typeof window.MutationObserver > "u")
        return;
      const { MutationObserver: i } = window;
      return new i(r);
    }, [r, n]);
  return S.useEffect(() => () => o?.disconnect(), [o]), o;
}
function hs(e) {
  let { callback: t, disabled: n } = e;
  const r = gs(t),
    o = S.useMemo(() => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const { ResizeObserver: i } = window;
      return new i(r);
    }, [n]);
  return S.useEffect(() => () => o?.disconnect(), [o]), o;
}
function ok(e) {
  return new Ff(ua(e), e);
}
function vg(e, t, n) {
  t === void 0 && (t = ok);
  const [r, o] = S.useReducer(l, null),
    i = rk({
      callback(s) {
        if (e)
          for (const u of s) {
            const { type: p, target: m } = u;
            if (
              p === "childList" &&
              m instanceof HTMLElement &&
              m.contains(e)
            ) {
              o();
              break;
            }
          }
      },
    }),
    a = hs({ callback: o });
  return (
    jn(() => {
      o(),
        e
          ? (a?.observe(e),
            i?.observe(document.body, { childList: !0, subtree: !0 }))
          : (a?.disconnect(), i?.disconnect());
    }, [e]),
    r
  );
  function l(s) {
    if (!e) return null;
    if (e.isConnected === !1) {
      var u;
      return (u = s ?? n) != null ? u : null;
    }
    const p = t(e);
    return JSON.stringify(s) === JSON.stringify(p) ? s : p;
  }
}
function ik(e) {
  const t = Bf(e);
  return Rv(e, t);
}
const yg = [];
function ak(e) {
  const t = S.useRef(e),
    n = sa(
      (r) =>
        e
          ? r &&
            r !== yg &&
            e &&
            t.current &&
            e.parentNode === t.current.parentNode
            ? r
            : Lf(e)
          : yg,
      [e]
    );
  return (
    S.useEffect(() => {
      t.current = e;
    }, [e]),
    n
  );
}
function lk(e) {
  const [t, n] = S.useState(null),
    r = S.useRef(e),
    o = S.useCallback((i) => {
      const a = fu(i.target);
      a && n((l) => (l ? (l.set(a, vc(a)), new Map(l)) : null));
    }, []);
  return (
    S.useEffect(() => {
      const i = r.current;
      if (e !== i) {
        a(i);
        const l = e
          .map((s) => {
            const u = fu(s);
            return u
              ? (u.addEventListener("scroll", o, { passive: !0 }), [u, vc(u)])
              : null;
          })
          .filter((s) => s != null);
        n(l.length ? new Map(l) : null), (r.current = e);
      }
      return () => {
        a(e), a(i);
      };
      function a(l) {
        l.forEach((s) => {
          const u = fu(s);
          u?.removeEventListener("scroll", o);
        });
      }
    }, [o, e]),
    S.useMemo(
      () =>
        e.length
          ? t
            ? Array.from(t.values()).reduce((i, a) => jo(i, a), Xt)
            : Fv(e)
          : Xt,
      [e, t]
    )
  );
}
function bg(e, t) {
  t === void 0 && (t = []);
  const n = S.useRef(null);
  return (
    S.useEffect(() => {
      n.current = null;
    }, t),
    S.useEffect(() => {
      const r = e !== Xt;
      r && !n.current && (n.current = e), !r && n.current && (n.current = null);
    }, [e]),
    n.current ? Bl(e, n.current) : Xt
  );
}
function sk(e) {
  S.useEffect(
    () => {
      if (!ps) return;
      const t = e.map((n) => {
        let { sensor: r } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t) n?.();
      };
    },
    e.map((t) => {
      let { sensor: n } = t;
      return n;
    })
  );
}
function uk(e, t) {
  return S.useMemo(
    () =>
      e.reduce((n, r) => {
        let { eventName: o, handler: i } = r;
        return (
          (n[o] = (a) => {
            i(a, t);
          }),
          n
        );
      }, {}),
    [e, t]
  );
}
function Hv(e) {
  return S.useMemo(() => (e ? zC(e) : null), [e]);
}
const gu = [];
function ck(e, t) {
  t === void 0 && (t = ua);
  const [n] = e,
    r = Hv(n ? rt(n) : null),
    [o, i] = S.useReducer(l, gu),
    a = hs({ callback: i });
  return (
    e.length > 0 && o === gu && i(),
    jn(() => {
      e.length ? e.forEach((s) => a?.observe(s)) : (a?.disconnect(), i());
    }, [e]),
    o
  );
  function l() {
    return e.length ? e.map((s) => (Av(s) ? r : new Ff(t(s), s))) : gu;
  }
}
function Uv(e) {
  if (!e) return null;
  if (e.children.length > 1) return e;
  const t = e.children[0];
  return la(t) ? t : e;
}
function fk(e) {
  let { measure: t } = e;
  const [n, r] = S.useState(null),
    o = S.useCallback(
      (u) => {
        for (const { target: p } of u)
          if (la(p)) {
            r((m) => {
              const h = t(p);
              return m ? { ...m, width: h.width, height: h.height } : h;
            });
            break;
          }
      },
      [t]
    ),
    i = hs({ callback: o }),
    a = S.useCallback(
      (u) => {
        const p = Uv(u);
        i?.disconnect(), p && i?.observe(p), r(p ? t(p) : null);
      },
      [t, i]
    ),
    [l, s] = Fl(a);
  return S.useMemo(() => ({ nodeRef: l, rect: n, setRef: s }), [n, l, s]);
}
const dk = [
    { sensor: Vv, options: {} },
    { sensor: Wv, options: {} },
  ],
  pk = { current: {} },
  pl = {
    draggable: { measure: dg },
    droppable: {
      measure: dg,
      strategy: qi.WhileDragging,
      frequency: bc.Optimized,
    },
    dragOverlay: { measure: ua },
  };
class Ri extends Map {
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
const gk = {
    activatorEvent: null,
    active: null,
    activeNode: null,
    activeNodeRect: null,
    collisions: null,
    containerNodeRect: null,
    draggableNodes: new Map(),
    droppableRects: new Map(),
    droppableContainers: new Ri(),
    over: null,
    dragOverlay: { nodeRef: { current: null }, rect: null, setRef: Vl },
    scrollableAncestors: [],
    scrollableAncestorRects: [],
    measuringConfiguration: pl,
    measureDroppableContainers: Vl,
    windowRect: null,
    measuringScheduled: !1,
  },
  Gv = {
    activatorEvent: null,
    activators: [],
    active: null,
    activeNodeRect: null,
    ariaDescribedById: { draggable: "" },
    dispatch: Vl,
    draggableNodes: new Map(),
    over: null,
    measureDroppableContainers: Vl,
  },
  ca = S.createContext(Gv),
  Kv = S.createContext(gk);
function mk() {
  return {
    draggable: {
      active: null,
      initialCoordinates: { x: 0, y: 0 },
      nodes: new Map(),
      translate: { x: 0, y: 0 },
    },
    droppable: { containers: new Ri() },
  };
}
function hk(e, t) {
  switch (t.type) {
    case Re.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active,
        },
      };
    case Re.DragMove:
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
    case Re.DragEnd:
    case Re.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: { x: 0, y: 0 },
          translate: { x: 0, y: 0 },
        },
      };
    case Re.RegisterDroppable: {
      const { element: n } = t,
        { id: r } = n,
        o = new Ri(e.droppable.containers);
      return (
        o.set(r, n), { ...e, droppable: { ...e.droppable, containers: o } }
      );
    }
    case Re.SetDroppableDisabled: {
      const { id: n, key: r, disabled: o } = t,
        i = e.droppable.containers.get(n);
      if (!i || r !== i.key) return e;
      const a = new Ri(e.droppable.containers);
      return (
        a.set(n, { ...i, disabled: o }),
        { ...e, droppable: { ...e.droppable, containers: a } }
      );
    }
    case Re.UnregisterDroppable: {
      const { id: n, key: r } = t,
        o = e.droppable.containers.get(n);
      if (!o || r !== o.key) return e;
      const i = new Ri(e.droppable.containers);
      return (
        i.delete(n), { ...e, droppable: { ...e.droppable, containers: i } }
      );
    }
    default:
      return e;
  }
}
function vk(e) {
  let { disabled: t } = e;
  const { active: n, activatorEvent: r, draggableNodes: o } = S.useContext(ca),
    i = Il(r),
    a = Il(n?.id);
  return (
    S.useEffect(() => {
      if (!t && !r && i && a != null) {
        if (!Af(i) || document.activeElement === i.target) return;
        const l = o.get(a);
        if (!l) return;
        const { activatorNode: s, node: u } = l;
        if (!s.current && !u.current) return;
        requestAnimationFrame(() => {
          for (const p of [s.current, u.current]) {
            if (!p) continue;
            const m = gC(p);
            if (m) {
              m.focus();
              break;
            }
          }
        });
      }
    }, [r, t, o, a, i]),
    null
  );
}
function Xv(e, t) {
  let { transform: n, ...r } = t;
  return e != null && e.length
    ? e.reduce((o, i) => i({ transform: o, ...r }), n)
    : n;
}
function yk(e) {
  return S.useMemo(
    () => ({
      draggable: { ...pl.draggable, ...e?.draggable },
      droppable: { ...pl.droppable, ...e?.droppable },
      dragOverlay: { ...pl.dragOverlay, ...e?.dragOverlay },
    }),
    [e?.draggable, e?.droppable, e?.dragOverlay]
  );
}
function bk(e) {
  let { activeNode: t, measure: n, initialRect: r, config: o = !0 } = e;
  const i = S.useRef(!1),
    { x: a, y: l } = typeof o == "boolean" ? { x: o, y: o } : o;
  jn(() => {
    if ((!a && !l) || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r) return;
    const u = t?.node.current;
    if (!u || u.isConnected === !1) return;
    const p = n(u),
      m = Rv(p, r);
    if (
      (a || (m.x = 0),
      l || (m.y = 0),
      (i.current = !0),
      Math.abs(m.x) > 0 || Math.abs(m.y) > 0)
    ) {
      const h = zv(u);
      h && h.scrollBy({ top: m.y, left: m.x });
    }
  }, [t, a, l, r, n]);
}
const vs = S.createContext({ ...Xt, scaleX: 1, scaleY: 1 });
var sr;
(function (e) {
  (e[(e.Uninitialized = 0)] = "Uninitialized"),
    (e[(e.Initializing = 1)] = "Initializing"),
    (e[(e.Initialized = 2)] = "Initialized");
})(sr || (sr = {}));
const Sk = S.memo(function (t) {
    var n, r, o, i;
    let {
      id: a,
      accessibility: l,
      autoScroll: s = !0,
      children: u,
      sensors: p = dk,
      collisionDetection: m = CC,
      measuring: h,
      modifiers: y,
      ...x
    } = t;
    const b = S.useReducer(hk, void 0, mk),
      [O, d] = b,
      [c, g] = SC(),
      [w, N] = S.useState(sr.Uninitialized),
      T = w === sr.Initialized,
      {
        draggable: { active: E, nodes: C, translate: z },
        droppable: { containers: R },
      } = O,
      A = E ? C.get(E) : null,
      q = S.useRef({ initial: null, translated: null }),
      re = S.useMemo(() => {
        var ve;
        return E != null
          ? { id: E, data: (ve = A?.data) != null ? ve : pk, rect: q }
          : null;
      }, [E, A]),
      ie = S.useRef(null),
      [Qt, Ot] = S.useState(null),
      [ke, j] = S.useState(null),
      M = Ji(x, Object.values(x)),
      F = ms("DndDescribedBy", a),
      Q = S.useMemo(() => R.getEnabled(), [R]),
      K = yk(h),
      {
        droppableRects: U,
        measureDroppableContainers: xe,
        measuringScheduled: Ye,
      } = tk(Q, { dragging: T, dependencies: [z.x, z.y], config: K.droppable }),
      Z = qC(C, E),
      dt = S.useMemo(() => (ke ? Wl(ke) : null), [ke]),
      zt = va(),
      Tr = nk(Z, K.draggable.measure);
    bk({
      activeNode: E ? C.get(E) : null,
      config: zt.layoutShiftCompensation,
      initialRect: Tr,
      measure: K.draggable.measure,
    });
    const Qe = vg(Z, K.draggable.measure, Tr),
      Jr = vg(Z ? Z.parentElement : null),
      Zt = S.useRef({
        activatorEvent: null,
        active: null,
        activeNode: Z,
        collisionRect: null,
        collisions: null,
        droppableRects: U,
        draggableNodes: C,
        draggingNode: null,
        draggingNodeRect: null,
        droppableContainers: R,
        over: null,
        scrollableAncestors: [],
        scrollAdjustedTranslate: null,
      }),
      fa = R.getNodeFor((n = Zt.current.over) == null ? void 0 : n.id),
      Pn = fk({ measure: K.dragOverlay.measure }),
      qr = (r = Pn.nodeRef.current) != null ? r : Z,
      Zn = T ? ((o = Pn.rect) != null ? o : Qe) : null,
      da = !!(Pn.nodeRef.current && Pn.rect),
      pa = ik(da ? null : Qe),
      Ko = Hv(qr ? rt(qr) : null),
      pt = ak(T ? fa ?? Z : null),
      Jn = ck(pt),
      Rn = Xv(y, {
        transform: { x: z.x - pa.x, y: z.y - pa.y, scaleX: 1, scaleY: 1 },
        activatorEvent: ke,
        active: re,
        activeNodeRect: Qe,
        containerNodeRect: Jr,
        draggingNodeRect: Zn,
        over: Zt.current.over,
        overlayNodeRect: Pn.rect,
        scrollableAncestors: pt,
        scrollableAncestorRects: Jn,
        windowRect: Ko,
      }),
      $t = dt ? jo(dt, z) : null,
      Xo = lk(pt),
      ga = bg(Xo),
      ys = bg(Xo, [Qe]),
      qn = jo(Rn, ga),
      Mt = Zn ? PC(Zn, Rn) : null,
      er =
        re && Mt
          ? m({
              active: re,
              collisionRect: Mt,
              droppableRects: U,
              droppableContainers: Q,
              pointerCoordinates: $t,
            })
          : null,
      Yo = EC(er, "id"),
      [At, Qo] = S.useState(null),
      bs = da ? Rn : jo(Rn, ys),
      Ss = kC(bs, (i = At?.rect) != null ? i : null, Qe),
      Jt = S.useCallback(
        (ve, Ze) => {
          let { sensor: Ne, options: qt } = Ze;
          if (ie.current == null) return;
          const ot = C.get(ie.current);
          if (!ot) return;
          const gt = ve.nativeEvent,
            Nt = new Ne({
              active: ie.current,
              activeNode: ot,
              event: gt,
              options: qt,
              context: Zt,
              onStart(Ee) {
                const Cr = ie.current;
                if (Cr == null) return;
                const kr = C.get(Cr);
                if (!kr) return;
                const { onDragStart: to } = M.current,
                  no = { active: { id: Cr, data: kr.data, rect: q } };
                Fn.unstable_batchedUpdates(() => {
                  to?.(no),
                    N(sr.Initializing),
                    d({
                      type: Re.DragStart,
                      initialCoordinates: Ee,
                      active: Cr,
                    }),
                    c({ type: "onDragStart", event: no });
                });
              },
              onMove(Ee) {
                d({ type: Re.DragMove, coordinates: Ee });
              },
              onEnd: tr(Re.DragEnd),
              onCancel: tr(Re.DragCancel),
            });
          Fn.unstable_batchedUpdates(() => {
            Ot(Nt), j(ve.nativeEvent);
          });
          function tr(Ee) {
            return async function () {
              const {
                active: kr,
                collisions: to,
                over: no,
                scrollAdjustedTranslate: ya,
              } = Zt.current;
              let Et = null;
              if (kr && ya) {
                const { cancelDrop: jr } = M.current;
                (Et = {
                  activatorEvent: gt,
                  active: kr,
                  collisions: to,
                  delta: ya,
                  over: no,
                }),
                  Ee === Re.DragEnd &&
                    typeof jr == "function" &&
                    (await Promise.resolve(jr(Et))) &&
                    (Ee = Re.DragCancel);
              }
              (ie.current = null),
                Fn.unstable_batchedUpdates(() => {
                  d({ type: Ee }),
                    N(sr.Uninitialized),
                    Qo(null),
                    Ot(null),
                    j(null);
                  const jr = Ee === Re.DragEnd ? "onDragEnd" : "onDragCancel";
                  if (Et) {
                    const Zo = M.current[jr];
                    Zo?.(Et), c({ type: jr, event: Et });
                  }
                });
            };
          }
        },
        [C]
      ),
      eo = S.useCallback(
        (ve, Ze) => (Ne, qt) => {
          const ot = Ne.nativeEvent,
            gt = C.get(qt);
          if (ie.current !== null || !gt || ot.dndKit || ot.defaultPrevented)
            return;
          const Nt = { active: gt };
          ve(Ne, Ze.options, Nt) === !0 &&
            ((ot.dndKit = { capturedBy: Ze.sensor }),
            (ie.current = qt),
            Jt(Ne, Ze));
        },
        [C, Jt]
      ),
      ma = ek(p, eo);
    sk(p),
      jn(() => {
        Qe && w === sr.Initializing && N(sr.Initialized);
      }, [Qe, w]),
      S.useEffect(() => {
        const { onDragMove: ve } = M.current,
          {
            active: Ze,
            activatorEvent: Ne,
            collisions: qt,
            over: ot,
          } = Zt.current;
        if (!Ze || !Ne) return;
        const gt = {
          active: Ze,
          activatorEvent: Ne,
          collisions: qt,
          delta: { x: qn.x, y: qn.y },
          over: ot,
        };
        Fn.unstable_batchedUpdates(() => {
          ve?.(gt), c({ type: "onDragMove", event: gt });
        });
      }, [qn.x, qn.y]),
      S.useEffect(() => {
        const {
          active: ve,
          activatorEvent: Ze,
          collisions: Ne,
          droppableContainers: qt,
          scrollAdjustedTranslate: ot,
        } = Zt.current;
        if (!ve || ie.current == null || !Ze || !ot) return;
        const { onDragOver: gt } = M.current,
          Nt = qt.get(Yo),
          tr =
            Nt && Nt.rect.current
              ? {
                  id: Nt.id,
                  rect: Nt.rect.current,
                  data: Nt.data,
                  disabled: Nt.disabled,
                }
              : null,
          Ee = {
            active: ve,
            activatorEvent: Ze,
            collisions: Ne,
            delta: { x: ot.x, y: ot.y },
            over: tr,
          };
        Fn.unstable_batchedUpdates(() => {
          Qo(tr), gt?.(Ee), c({ type: "onDragOver", event: Ee });
        });
      }, [Yo]),
      jn(() => {
        (Zt.current = {
          activatorEvent: ke,
          active: re,
          activeNode: Z,
          collisionRect: Mt,
          collisions: er,
          droppableRects: U,
          draggableNodes: C,
          draggingNode: qr,
          draggingNodeRect: Zn,
          droppableContainers: R,
          over: At,
          scrollableAncestors: pt,
          scrollAdjustedTranslate: qn,
        }),
          (q.current = { initial: Zn, translated: Mt });
      }, [re, Z, er, Mt, C, qr, Zn, U, R, At, pt, qn]),
      QC({
        ...zt,
        delta: z,
        draggingRect: Mt,
        pointerCoordinates: $t,
        scrollableAncestors: pt,
        scrollableAncestorRects: Jn,
      });
    const ha = S.useMemo(
        () => ({
          active: re,
          activeNode: Z,
          activeNodeRect: Qe,
          activatorEvent: ke,
          collisions: er,
          containerNodeRect: Jr,
          dragOverlay: Pn,
          draggableNodes: C,
          droppableContainers: R,
          droppableRects: U,
          over: At,
          measureDroppableContainers: xe,
          scrollableAncestors: pt,
          scrollableAncestorRects: Jn,
          measuringConfiguration: K,
          measuringScheduled: Ye,
          windowRect: Ko,
        }),
        [re, Z, Qe, ke, er, Jr, Pn, C, R, U, At, xe, pt, Jn, K, Ye, Ko]
      ),
      ws = S.useMemo(
        () => ({
          activatorEvent: ke,
          activators: ma,
          active: re,
          activeNodeRect: Qe,
          ariaDescribedById: { draggable: F },
          dispatch: d,
          draggableNodes: C,
          over: At,
          measureDroppableContainers: xe,
        }),
        [ke, ma, re, Qe, d, F, C, At, xe]
      );
    return V.createElement(
      Pv.Provider,
      { value: g },
      V.createElement(
        ca.Provider,
        { value: ws },
        V.createElement(
          Kv.Provider,
          { value: ha },
          V.createElement(vs.Provider, { value: Ss }, u)
        ),
        V.createElement(vk, { disabled: l?.restoreFocus === !1 })
      ),
      V.createElement(xC, { ...l, hiddenTextDescribedById: F })
    );
    function va() {
      const ve = Qt?.autoScrollEnabled === !1,
        Ze = typeof s == "object" ? s.enabled === !1 : s === !1,
        Ne = T && !ve && !Ze;
      return typeof s == "object" ? { ...s, enabled: Ne } : { enabled: Ne };
    }
  }),
  wk = S.createContext(null),
  Sg = "button",
  _k = "Droppable";
function Yv(e) {
  let { id: t, data: n, disabled: r = !1, attributes: o } = e;
  const i = ms(_k),
    {
      activators: a,
      activatorEvent: l,
      active: s,
      activeNodeRect: u,
      ariaDescribedById: p,
      draggableNodes: m,
      over: h,
    } = S.useContext(ca),
    {
      role: y = Sg,
      roleDescription: x = "draggable",
      tabIndex: b = 0,
    } = o ?? {},
    O = s?.id === t,
    d = S.useContext(O ? vs : wk),
    [c, g] = Fl(),
    [w, N] = Fl(),
    T = uk(a, t),
    E = Ji(n);
  jn(
    () => (
      m.set(t, { id: t, key: i, node: c, activatorNode: w, data: E }),
      () => {
        const z = m.get(t);
        z && z.key === i && m.delete(t);
      }
    ),
    [m, t]
  );
  const C = S.useMemo(
    () => ({
      role: y,
      tabIndex: b,
      "aria-disabled": r,
      "aria-pressed": O && y === Sg ? !0 : void 0,
      "aria-roledescription": x,
      "aria-describedby": p.draggable,
    }),
    [r, y, b, O, x, p.draggable]
  );
  return {
    active: s,
    activatorEvent: l,
    activeNodeRect: u,
    attributes: C,
    isDragging: O,
    listeners: r ? void 0 : T,
    node: c,
    over: h,
    setNodeRef: g,
    setActivatorNodeRef: N,
    transform: d,
  };
}
function xk() {
  return S.useContext(Kv);
}
const Ok = "Droppable",
  Nk = { timeout: 25 };
function Wf(e) {
  let { data: t, disabled: n = !1, id: r, resizeObserverConfig: o } = e;
  const i = ms(Ok),
    {
      active: a,
      dispatch: l,
      over: s,
      measureDroppableContainers: u,
    } = S.useContext(ca),
    p = S.useRef({ disabled: n }),
    m = S.useRef(!1),
    h = S.useRef(null),
    y = S.useRef(null),
    { disabled: x, updateMeasurementsFor: b, timeout: O } = { ...Nk, ...o },
    d = Ji(b ?? r),
    c = S.useCallback(() => {
      if (!m.current) {
        m.current = !0;
        return;
      }
      y.current != null && clearTimeout(y.current),
        (y.current = setTimeout(() => {
          u(Array.isArray(d.current) ? d.current : [d.current]),
            (y.current = null);
        }, O));
    }, [O]),
    g = hs({ callback: c, disabled: x || !a }),
    w = S.useCallback(
      (C, z) => {
        g && (z && (g.unobserve(z), (m.current = !1)), C && g.observe(C));
      },
      [g]
    ),
    [N, T] = Fl(w),
    E = Ji(t);
  return (
    S.useEffect(() => {
      !g ||
        !N.current ||
        (g.disconnect(), (m.current = !1), g.observe(N.current));
    }, [N, g]),
    jn(
      () => (
        l({
          type: Re.RegisterDroppable,
          element: { id: r, key: i, disabled: n, node: N, rect: h, data: E },
        }),
        () => l({ type: Re.UnregisterDroppable, key: i, id: r })
      ),
      [r]
    ),
    S.useEffect(() => {
      n !== p.current.disabled &&
        (l({ type: Re.SetDroppableDisabled, id: r, key: i, disabled: n }),
        (p.current.disabled = n));
    }, [r, i, n, l]),
    { active: a, rect: h, isOver: s?.id === r, node: N, over: s, setNodeRef: T }
  );
}
function Ek(e) {
  let { animation: t, children: n } = e;
  const [r, o] = S.useState(null),
    [i, a] = S.useState(null),
    l = Il(n);
  return (
    !n && !r && l && o(l),
    jn(() => {
      if (!i) return;
      const s = r?.key,
        u = r?.props.id;
      if (s == null || u == null) {
        o(null);
        return;
      }
      Promise.resolve(t(u, i)).then(() => {
        o(null);
      });
    }, [t, r, i]),
    V.createElement(
      V.Fragment,
      null,
      n,
      r ? S.cloneElement(r, { ref: a }) : null
    )
  );
}
const Tk = { x: 0, y: 0, scaleX: 1, scaleY: 1 };
function Ck(e) {
  let { children: t } = e;
  return V.createElement(
    ca.Provider,
    { value: Gv },
    V.createElement(vs.Provider, { value: Tk }, t)
  );
}
const kk = { position: "fixed", touchAction: "none" },
  jk = (e) => (Af(e) ? "transform 250ms ease" : void 0),
  Pk = S.forwardRef((e, t) => {
    let {
      as: n,
      activatorEvent: r,
      adjustScale: o,
      children: i,
      className: a,
      rect: l,
      style: s,
      transform: u,
      transition: p = jk,
    } = e;
    if (!l) return null;
    const m = o ? u : { ...u, scaleX: 1, scaleY: 1 },
      h = {
        ...kk,
        width: l.width,
        height: l.height,
        top: l.top,
        left: l.left,
        transform: Xr.Transform.toString(m),
        transformOrigin: o && r ? OC(r, l) : void 0,
        transition: typeof p == "function" ? p(r) : p,
        ...s,
      };
    return V.createElement(n, { className: a, style: h, ref: t }, i);
  }),
  Rk = (e) => (t) => {
    let { active: n, dragOverlay: r } = t;
    const o = {},
      { styles: i, className: a } = e;
    if (i != null && i.active)
      for (const [l, s] of Object.entries(i.active))
        s !== void 0 &&
          ((o[l] = n.node.style.getPropertyValue(l)),
          n.node.style.setProperty(l, s));
    if (i != null && i.dragOverlay)
      for (const [l, s] of Object.entries(i.dragOverlay))
        s !== void 0 && r.node.style.setProperty(l, s);
    return (
      a != null && a.active && n.node.classList.add(a.active),
      a != null && a.dragOverlay && r.node.classList.add(a.dragOverlay),
      function () {
        for (const [s, u] of Object.entries(o)) n.node.style.setProperty(s, u);
        a != null && a.active && n.node.classList.remove(a.active);
      }
    );
  },
  Dk = (e) => {
    let {
      transform: { initial: t, final: n },
    } = e;
    return [
      { transform: Xr.Transform.toString(t) },
      { transform: Xr.Transform.toString(n) },
    ];
  },
  zk = {
    duration: 250,
    easing: "ease",
    keyframes: Dk,
    sideEffects: Rk({ styles: { active: { opacity: "0" } } }),
  };
function $k(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: o,
  } = e;
  return gs((i, a) => {
    if (t === null) return;
    const l = n.get(i);
    if (!l) return;
    const s = l.node.current;
    if (!s) return;
    const u = Uv(a);
    if (!u) return;
    const { transform: p } = rt(a).getComputedStyle(a),
      m = Dv(p);
    if (!m) return;
    const h = typeof t == "function" ? t : Mk(t);
    return (
      Iv(s, o.draggable.measure),
      h({
        active: { id: i, data: l.data, node: s, rect: o.draggable.measure(s) },
        draggableNodes: n,
        dragOverlay: { node: a, rect: o.dragOverlay.measure(u) },
        droppableContainers: r,
        measuringConfiguration: o,
        transform: m,
      })
    );
  });
}
function Mk(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: o,
  } = { ...zk, ...e };
  return (i) => {
    let { active: a, dragOverlay: l, transform: s, ...u } = i;
    if (!t) return;
    const p = { x: l.rect.left - a.rect.left, y: l.rect.top - a.rect.top },
      m = {
        scaleX: s.scaleX !== 1 ? (a.rect.width * s.scaleX) / l.rect.width : 1,
        scaleY: s.scaleY !== 1 ? (a.rect.height * s.scaleY) / l.rect.height : 1,
      },
      h = { x: s.x - p.x, y: s.y - p.y, ...m },
      y = o({
        ...u,
        active: a,
        dragOverlay: l,
        transform: { initial: s, final: h },
      }),
      [x] = y,
      b = y[y.length - 1];
    if (JSON.stringify(x) === JSON.stringify(b)) return;
    const O = r?.({ active: a, dragOverlay: l, ...u }),
      d = l.node.animate(y, { duration: t, easing: n, fill: "forwards" });
    return new Promise((c) => {
      d.onfinish = () => {
        O?.(), c();
      };
    });
  };
}
let wg = 0;
function Ak(e) {
  return S.useMemo(() => {
    if (e != null) return wg++, wg;
  }, [e]);
}
const Lk = V.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: o,
    transition: i,
    modifiers: a,
    wrapperElement: l = "div",
    className: s,
    zIndex: u = 999,
  } = e;
  const {
      activatorEvent: p,
      active: m,
      activeNodeRect: h,
      containerNodeRect: y,
      draggableNodes: x,
      droppableContainers: b,
      dragOverlay: O,
      over: d,
      measuringConfiguration: c,
      scrollableAncestors: g,
      scrollableAncestorRects: w,
      windowRect: N,
    } = xk(),
    T = S.useContext(vs),
    E = Ak(m?.id),
    C = Xv(a, {
      activatorEvent: p,
      active: m,
      activeNodeRect: h,
      containerNodeRect: y,
      draggingNodeRect: O.rect,
      over: d,
      overlayNodeRect: O.rect,
      scrollableAncestors: g,
      scrollableAncestorRects: w,
      transform: T,
      windowRect: N,
    }),
    z = Bf(h),
    R = $k({
      config: r,
      draggableNodes: x,
      droppableContainers: b,
      measuringConfiguration: c,
    }),
    A = z ? O.setRef : void 0;
  return V.createElement(
    Ck,
    null,
    V.createElement(
      Ek,
      { animation: R },
      m && E
        ? V.createElement(
            Pk,
            {
              key: E,
              id: m.id,
              ref: A,
              as: l,
              activatorEvent: p,
              adjustScale: t,
              className: s,
              transition: i,
              rect: z,
              style: { zIndex: u, ...o },
              transform: C,
            },
            n
          )
        : null
    )
  );
});
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fk = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Qv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ik = {
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
 */ const Bk = S.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: a,
      ...l
    },
    s
  ) =>
    S.createElement(
      "svg",
      {
        ref: s,
        ...Ik,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Qv("lucide", o),
        ...l,
      },
      [
        ...a.map(([u, p]) => S.createElement(u, p)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wk = (e, t) => {
  const n = S.forwardRef(({ className: r, ...o }, i) =>
    S.createElement(Bk, {
      ref: i,
      iconNode: t,
      className: Qv(`lucide-${Fk(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vk = Wk("Loader", [
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
  ["path", { d: "M18 12h4", key: "wj9ykh" }],
  ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
  ["path", { d: "M12 18v4", key: "jadmvz" }],
  ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
  ["path", { d: "M2 12h4", key: "j09sii" }],
  ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
]);
function Hk(e) {
  return "id" in e && "x" in e && "y" in e;
}
const Uk = (e) =>
    e.description
      .split(
        `
`
      )
      .map((t, n) =>
        ne.jsx(Df, { style: { maxWidth: "300px" }, children: t }, n)
      ),
  Ul = ({ element: e }) => {
    const t = e.tool ? "bg-slate-200" : "bg-white",
      n = e.tool ? "to-slate-200" : "to-white",
      o = `${`flex gap-2 p-2 border ${t} border-slate-400 rounded-md text-xl h-fit w-fit hover:bg-gradient-to-t from-cyan-100 ${n} select-none`} hover:bg-cyan-100`,
      i = Hk(e) ? e.id : void 0,
      a = ne.jsxs("div", {
        className: o,
        id: i,
        children: [
          ne.jsxs("div", {
            className: "pointer-events-none",
            children: [e.emoji, " ", e.name],
          }),
          e.tool
            ? null
            : ne.jsx("div", {
                className: "pointer-events-none",
                children: e.value,
              }),
        ],
      });
    return e.tool
      ? a
      : ne.jsx(Cv, { content: Uk(e), appearance: "card", children: a });
  },
  Gk = ({ element: e, isLoading: t }) => {
    const {
        attributes: n,
        listeners: r,
        setNodeRef: o,
        transform: i,
      } = Yv({
        id: e.name,
        data: { element: e, type: "element" },
        disabled: t,
      }),
      a = { transform: Xr.Translate.toString(i) };
    return ne.jsx("div", {
      ref: o,
      style: a,
      className: "w-fit h-fit",
      onMouseDown: (l) => {
        l.preventDefault();
      },
      ...r,
      ...n,
      children: ne.jsx(Ul, { element: e }),
    });
  },
  Kk = ({ element: e, isLoading: t }) => {
    const {
        attributes: n,
        listeners: r,
        setNodeRef: o,
        transform: i,
      } = Yv({
        id: e.id,
        data: { element: e, type: "placed-element" },
        disabled: t,
      }),
      { setNodeRef: a } = Wf({
        id: e.id,
        data: { element: e, type: "placed-element" },
        disabled: t,
      }),
      l = S.useMemo(
        () => ({ transform: Xr.Translate.toString(i), top: e.y, left: e.x }),
        [e.x, e.y, i]
      );
    return ne.jsx("div", {
      ref: o,
      className: "absolute w-fit h-fit",
      style: l,
      ...r,
      ...n,
      children: ne.jsxs("div", {
        ref: a,
        children: [
          e.isLoading &&
            ne.jsxs("div", {
              className:
                "flex gap-2 p-2 border bg-white border-slate-400 rounded-md text-xl h-fit w-fit select-none",
              children: [
                ne.jsx("div", {
                  children: ne.jsx(Vk, {
                    className: "animate-spin inline-block",
                  }),
                }),
                ne.jsx("div", { children: "combining..." }),
              ],
            }),
          !e.isLoading && ne.jsx(Ul, { element: e }),
        ],
      }),
    });
  },
  Xk = ({ elements: e, isLoading: t }) => {
    const { setNodeRef: n } = Wf({
      id: "sidebar-area",
      data: { type: "sidebar" },
      disabled: t,
    });
    return ne.jsx("div", {
      className: "col-span-4 border-l relative",
      ref: n,
      children: ne.jsxs("div", {
        className: "absolute inset-0 flex flex-col",
        children: [
          ne.jsx("h2", {
            className: "text-lg text-center font-semibold select-none",
            children: "Inventory",
          }),
          ne.jsx("div", {
            className: "overflow-y-auto flex-1",
            children: ne.jsx("div", {
              className: "flex flex-wrap gap-2 p-2",
              children: e.map((r) =>
                ne.jsx(Gk, { element: r, isLoading: t }, r.name)
              ),
            }),
          }),
        ],
      }),
    });
  },
  Yk = ({ placedElements: e, isLoading: t }) => {
    const { setNodeRef: n } = Wf({
      id: "playground-area",
      data: { type: "playground" },
      disabled: t,
    });
    return ne.jsx("div", {
      className: "col-span-8 h-full w-full relative",
      ref: n,
      children: e.map((r, o) => ne.jsx(Kk, { element: r, isLoading: t }, o)),
    });
  };
var Ie = [];
for (var mu = 0; mu < 256; ++mu) Ie.push((mu + 256).toString(16).slice(1));
function Qk(e, t = 0) {
  return (
    Ie[e[t + 0]] +
    Ie[e[t + 1]] +
    Ie[e[t + 2]] +
    Ie[e[t + 3]] +
    "-" +
    Ie[e[t + 4]] +
    Ie[e[t + 5]] +
    "-" +
    Ie[e[t + 6]] +
    Ie[e[t + 7]] +
    "-" +
    Ie[e[t + 8]] +
    Ie[e[t + 9]] +
    "-" +
    Ie[e[t + 10]] +
    Ie[e[t + 11]] +
    Ie[e[t + 12]] +
    Ie[e[t + 13]] +
    Ie[e[t + 14]] +
    Ie[e[t + 15]]
  ).toLowerCase();
}
var Za,
  Zk = new Uint8Array(16);
function Jk() {
  if (
    !Za &&
    ((Za =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !Za)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return Za(Zk);
}
var qk =
  typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const _g = { randomUUID: qk };
function xg(e, t, n) {
  if (_g.randomUUID && !t && !e) return _g.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || Jk)();
  return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), Qk(r);
}
function ej({
  elements: e,
  setElements: t,
  placedElements: n,
  setPlacedElements: r,
  setActions: o,
  domain: i,
}) {
  const [a, l] = S.useState(null),
    [s, u] = S.useState(null),
    p = new Audio("/static/pop-sound.mp3"),
    m = (b) => {
      const { active: O } = b;
      O.data.current.type === "element"
        ? l(b.active.data.current.element)
        : O.data.current.type === "placed-element" &&
          u(b.active.data.current.element);
    },
    h = (b, O) => {
      "id" in O
        ? r((d) =>
            d
              .filter((c) => c.id !== O.id)
              .map((c) => (c.id === b.id ? { ...c, isLoading: !0 } : c))
          )
        : r((d) => d.map((c) => (c.id === b.id ? { ...c, isLoading: !0 } : c))),
        dallinger
          .post("/api/step", {
            action: [JSON.stringify(b), JSON.stringify(O)],
            urlParams: window.location.search,
          })
          .done((d) => {
            const c = d.new_item;
            if (!c) {
              r((g) => g.filter((w) => w.id !== b.id && w.id !== O.id)),
                o((g) => [
                  ...g,
                  { inputs: [b, O], output: c, time: Date.now() },
                ]);
              return;
            }
            r((g) =>
              g.map((w) =>
                w.id === b.id
                  ? { ...c, id: xg(), x: w.x, y: w.y, isLoading: !1 }
                  : w
              )
            ),
              c.tool && t([...e, c]),
              o((g) => [...g, { inputs: [b, O], output: c, time: Date.now() }]);
          })
          .fail((d) => {
            window.alert(
              "Something went wrong! Failed to combine elements" + d.toString()
            ),
              r((c) =>
                c.map((g) => (g.id === b.id ? { ...g, isLoading: !1 } : g))
              );
          });
    },
    y = (b) => {
      const { active: O, over: d } = b;
      let c = {
        id: "",
        x: 0,
        y: 0,
        name: "",
        emoji: "",
        value: 0,
        tool: !1,
        description: "",
      };
      if (
        O.data.current.type === "placed-element" &&
        (!d || d.data.current.type === "sidebar")
      ) {
        const g = O.data.current.element,
          w = n.filter((N) => N.id !== g.id);
        r(w), g.tool || t([...e, g]);
      } else if (O.data.current.type === "placed-element") {
        const g = O.data.current.element;
        c = { ...g, x: g.x + b.delta.x, y: g.y + b.delta.y };
        const w = [...n.filter((N) => N.id !== c.id), c];
        r(w), p.play();
      } else if (
        O.data.current.type === "element" &&
        d &&
        d.data.current.type !== "sidebar"
      ) {
        const g = O.data.current.element,
          w = b.activatorEvent.target;
        let N;
        w.classList.contains("flex")
          ? (N = b.activatorEvent.target.getBoundingClientRect())
          : (N = w.parentElement.getBoundingClientRect());
        const T = document.querySelector("#root");
        let E;
        T ? (E = T.getBoundingClientRect()) : (E = { top: 0, left: 0 }),
          (c = { ...g, id: xg(), x: N.left - E.left, y: N.top - E.top }),
          r((C) => [...C, c]),
          p.play(),
          g.tool || t(e.filter((C) => C.name !== g.name));
      }
      c.id !== "" &&
        d &&
        d.data.current.type === "placed-element" &&
        d.data.current.element.id !== c.id &&
        h(d.data.current.element, c),
        l(null),
        u(null);
    },
    x = S.useMemo(() => n.some((b) => b.isLoading), [n]);
  return ne.jsxs(Sk, {
    onDragStart: m,
    onDragEnd: y,
    children: [
      ne.jsx("main", {
        className: "flex h-[70vh] flex-col border-b-2 border-slate-400",
        children: ne.jsxs("div", {
          className: "grid grid-cols-12 h-full",
          children: [
            ne.jsx(Yk, {
              setPlacedElements: r,
              placedElements: n,
              isLoading: x,
            }),
            ne.jsx(Xk, { elements: e, isLoading: x }),
          ],
        }),
      }),
      ne.jsxs(Lk, {
        dropAnimation: null,
        children: [
          a && ne.jsx(Ul, { element: a }),
          s && ne.jsx(Ul, { element: s }),
        ],
      }),
    ],
  });
}
export {
  fs as B,
  ej as G,
  W as P,
  V as R,
  Bo as _,
  Io as a,
  Yt as b,
  Zi as c,
  vv as d,
  Fn as e,
  ub as f,
  Xn as g,
  ne as j,
  S as r,
  hf as s,
  Rf as u,
};
