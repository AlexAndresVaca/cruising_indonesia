(function (root, factory) {
  root.imm_loader_cst = new factory();
  root.imm_loader_cst.init("first-load");
})(this, function () {
  var Self = this;
  Self.loader = "";
  Self.loaderCount = 0;
  Self.loaderOnLoad = false;
  Self.loaderElm = false;
  Self.bg = false;
  Self.bg2 = false;
  Self.logo = false;
  Self.svg = false;
  Self.wave = false;
  Self.percentage = false;
  Self.args = "";

  Self.init = function (args) {
    clearTimeout(Self.loader);
    Self.loader = setTimeout(function () {
      if (!Self.loaderOnLoad) {
        Self.loaderFunc();
        setTimeout(arguments.callee, 100);
      } else {
        clearTimeout(Self.loader);
        Self.bg = Self.loaderElm.querySelector(".loader-bg");
        Self.bg2 = Self.loaderElm.querySelector(".loader-bg-2");
        Self.logo = Self.loaderElm.querySelector(".loader-logo-wave");
        Self.svg = Self.logo.querySelector("svg");
        Self.wave = Self.svg.querySelector(".wave-progress");
        Self.percentage = Self.loaderElm.querySelector(
          ".loader-text-percentage .text"
        );
        Self.complete.init();
      }
    }, 100);

    Self.args = args;
    if (Self.args == "first-load") {
      window.onload = function () {
        Self.loaderOnLoad = true;
      };
    }
  };

  Self.loaderFunc = function () {
    Self.loaderElm = document.querySelector("#imm-loader");
    if (Self.loaderElm) {
      var elm = Self.loaderElm.querySelector(".loader-logo-wave");
      if (!elm.classList.contains("animate")) {
        elm.classList.add("animate");
      }
      var percentage = Self.loaderElm.querySelector(
        ".loader-text-percentage .text"
      );
      if (Self.loaderCount < 70) {
        Self.loaderCount++;
      }
      var svg = elm.querySelector("svg");
      svg
        .querySelector(".wave-progress")
        .setAttribute(
          "transform",
          "matrix(1.3084748,0,0,1.4086032,0.31857104,-" +
            Self.loaderCount +
            ")translate(0 0)scale(1)"
        );
      percentage.innerText = Self.loaderCount;
    }
  };

  Self.complete = {
    count: 0,
    trigger: 0,
    init: function () {
      Self.complete.count = Self.loaderCount;
      Self.complete.trigger =
        (Self.args == "first-load" ? 2000 : 1000) / (100 - Self.loaderCount);
      Self.complete.temp = setTimeout(function () {
        if (Self.complete.count < 100) {
          Self.complete.count++;
          Self.svg
            .querySelector(".wave-progress")
            .setAttribute(
              "transform",
              "matrix(1.3084748,0,0,1.4086032,0.31857104,-" +
                Self.complete.count +
                ")translate(0 0)scale(1)"
            );
          Self.percentage.innerText = Self.complete.count;
          setTimeout(arguments.callee, Self.complete.trigger);
        } else {
          clearTimeout(Self.complete.temp);
          Self.complete.selanjutnya();
        }
      }, Self.complete.trigger);
    },
    selanjutnya: function () {
      jQuery(window).trigger("imm-script:run");
      jQuery(window).trigger("imm-animation:run");
      TweenMax.to(Self.logo, 1, {
        css: { scale: 0.05, opacity: 0 },
        ease: Power4.easeInOut,
        delay: 0.2,
      });
      TweenMax.to(Self.bg2, 1.5, {
        x: "100%",
        ease: Power4.easeInOut,
        delay: 0.8,
      });
      TweenMax.to(Self.bg, 2, {
        x: "100%",
        ease: Power4.easeInOut,
        delay: 0.8,
        onComplete: function () {
          if (Self.logo.classList.contains("animate")) {
            Self.logo.classList.remove("animate");
          }
          Self.loaderElm.classList.remove("first-load");
        },
      });
    },
    temp: "",
  };
});

!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 0));
})([
  function (e, t, r) {
    (function (e) {
      "undefined" != typeof window && (window.barba = window.barba || e);
    }.call(this, r(1)));
  },
  function (e, t, r) {
    e.exports = (function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function t(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      }
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function n(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      function o(e) {
        return (o = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function i(e, t) {
        return (i =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function s(e, t, r) {
        return (s = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Reflect.construct
          : function (e, t, r) {
              var n = [null];
              n.push.apply(n, t);
              var o = new (Function.bind.apply(e, n))();
              return r && i(o, r.prototype), o;
            }).apply(null, arguments);
      }
      function a(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (a = function (e) {
          if (
            null === e ||
            -1 === Function.toString.call(e).indexOf("[native code]")
          )
            return e;
          if ("function" != typeof e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r);
          }
          function r() {
            return s(e, arguments, o(this).constructor);
          }
          return (
            (r.prototype = Object.create(e.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            i(r, e)
          );
        })(e);
      }
      function u(e, t) {
        try {
          var r = e();
        } catch (e) {
          return t(e);
        }
        return r && r.then ? r.then(void 0, t) : r;
      }
      var c;
      "undefined" != typeof Symbol &&
        (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
        "undefined" != typeof Symbol &&
          (Symbol.asyncIterator ||
            (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))),
        (function (e) {
          (e[(e.off = 0)] = "off"),
            (e[(e.error = 1)] = "error"),
            (e[(e.warning = 2)] = "warning"),
            (e[(e.info = 3)] = "info"),
            (e[(e.debug = 4)] = "debug");
        })(c || (c = {}));
      var f = c.off,
        h = (function () {
          function e(e) {
            this.t = e;
          }
          (e.getLevel = function () {
            return f;
          }),
            (e.setLevel = function (e) {
              return (f = c[e]);
            });
          var t = e.prototype;
          return (
            (t.error = function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              this.i(console.error, c.error, t);
            }),
            (t.warn = function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              this.i(console.warn, c.warning, t);
            }),
            (t.info = function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              this.i(console.info, c.info, t);
            }),
            (t.debug = function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              this.i(console.log, c.debug, t);
            }),
            (t.i = function (t, r, n) {
              r <= e.getLevel() &&
                t.apply(console, ["[" + this.t + "] "].concat(n));
            }),
            e
          );
        })(),
        l = j,
        p = b,
        v = y,
        d = w,
        m = k,
        g = new RegExp(
          [
            "(\\\\.)",
            "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?",
          ].join("|"),
          "g"
        );
      function y(e, t) {
        for (
          var r,
            n = [],
            o = 0,
            i = 0,
            s = "",
            a = (t && t.delimiter) || "/",
            u = (t && t.whitelist) || void 0,
            c = !1;
          null !== (r = g.exec(e));

        ) {
          var f = r[0],
            h = r[1],
            l = r.index;
          if (((s += e.slice(i, l)), (i = l + f.length), h))
            (s += h[1]), (c = !0);
          else {
            var p = "",
              v = r[2],
              d = r[3],
              m = r[4],
              y = r[5];
            if (!c && s.length) {
              var b = s.length - 1,
                w = s[b];
              (!u || u.indexOf(w) > -1) && ((p = w), (s = s.slice(0, b)));
            }
            s && (n.push(s), (s = ""), (c = !1));
            var E = d || m,
              k = p || a;
            n.push({
              name: v || o++,
              prefix: p,
              delimiter: k,
              optional: "?" === y || "*" === y,
              repeat: "+" === y || "*" === y,
              pattern: E ? x(E) : "[^" + P(k === a ? k : k + a) + "]+?",
            });
          }
        }
        return (s || i < e.length) && n.push(s + e.substr(i)), n;
      }
      function b(e, t) {
        return function (r, n) {
          var o = e.exec(r);
          if (!o) return !1;
          for (
            var i = o[0],
              s = o.index,
              a = {},
              u = (n && n.decode) || decodeURIComponent,
              c = 1;
            c < o.length;
            c++
          )
            if (void 0 !== o[c]) {
              var f = t[c - 1];
              a[f.name] = f.repeat
                ? o[c].split(f.delimiter).map(function (e) {
                    return u(e, f);
                  })
                : u(o[c], f);
            }
          return { path: i, index: s, params: a };
        };
      }
      function w(e, t) {
        for (var r = new Array(e.length), n = 0; n < e.length; n++)
          "object" == typeof e[n] &&
            (r[n] = new RegExp("^(?:" + e[n].pattern + ")$", E(t)));
        return function (t, n) {
          for (
            var o = "",
              i = (n && n.encode) || encodeURIComponent,
              s = !n || !1 !== n.validate,
              a = 0;
            a < e.length;
            a++
          ) {
            var u = e[a];
            if ("string" != typeof u) {
              var c,
                f = t ? t[u.name] : void 0;
              if (Array.isArray(f)) {
                if (!u.repeat)
                  throw new TypeError(
                    'Expected "' + u.name + '" to not repeat, but got array'
                  );
                if (0 === f.length) {
                  if (u.optional) continue;
                  throw new TypeError(
                    'Expected "' + u.name + '" to not be empty'
                  );
                }
                for (var h = 0; h < f.length; h++) {
                  if (((c = i(f[h], u)), s && !r[a].test(c)))
                    throw new TypeError(
                      'Expected all "' +
                        u.name +
                        '" to match "' +
                        u.pattern +
                        '"'
                    );
                  o += (0 === h ? u.prefix : u.delimiter) + c;
                }
              } else if (
                "string" != typeof f &&
                "number" != typeof f &&
                "boolean" != typeof f
              ) {
                if (!u.optional)
                  throw new TypeError(
                    'Expected "' +
                      u.name +
                      '" to be ' +
                      (u.repeat ? "an array" : "a string")
                  );
              } else {
                if (((c = i(String(f), u)), s && !r[a].test(c)))
                  throw new TypeError(
                    'Expected "' +
                      u.name +
                      '" to match "' +
                      u.pattern +
                      '", but got "' +
                      c +
                      '"'
                  );
                o += u.prefix + c;
              }
            } else o += u;
          }
          return o;
        };
      }
      function P(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function x(e) {
        return e.replace(/([=!:$/()])/g, "\\$1");
      }
      function E(e) {
        return e && e.sensitive ? "" : "i";
      }
      function k(e, t, r) {
        for (
          var n = (r = r || {}).strict,
            o = !1 !== r.start,
            i = !1 !== r.end,
            s = r.delimiter || "/",
            a = []
              .concat(r.endsWith || [])
              .map(P)
              .concat("$")
              .join("|"),
            u = o ? "^" : "",
            c = 0;
          c < e.length;
          c++
        ) {
          var f = e[c];
          if ("string" == typeof f) u += P(f);
          else {
            var h = f.repeat
              ? "(?:" +
                f.pattern +
                ")(?:" +
                P(f.delimiter) +
                "(?:" +
                f.pattern +
                "))*"
              : f.pattern;
            t && t.push(f),
              (u += f.optional
                ? f.prefix
                  ? "(?:" + P(f.prefix) + "(" + h + "))?"
                  : "(" + h + ")?"
                : P(f.prefix) + "(" + h + ")");
          }
        }
        if (i)
          n || (u += "(?:" + P(s) + ")?"),
            (u += "$" === a ? "$" : "(?=" + a + ")");
        else {
          var l = e[e.length - 1],
            p = "string" == typeof l ? l[l.length - 1] === s : void 0 === l;
          n || (u += "(?:" + P(s) + "(?=" + a + "))?"),
            p || (u += "(?=" + P(s) + "|" + a + ")");
        }
        return new RegExp(u, E(r));
      }
      function j(e, t, r) {
        return e instanceof RegExp
          ? (function (e, t) {
              if (!t) return e;
              var r = e.source.match(/\((?!\?)/g);
              if (r)
                for (var n = 0; n < r.length; n++)
                  t.push({
                    name: n,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    pattern: null,
                  });
              return e;
            })(e, t)
          : Array.isArray(e)
          ? (function (e, t, r) {
              for (var n = [], o = 0; o < e.length; o++)
                n.push(j(e[o], t, r).source);
              return new RegExp("(?:" + n.join("|") + ")", E(r));
            })(e, t, r)
          : (function (e, t, r) {
              return k(y(e, r), t, r);
            })(e, t, r);
      }
      (l.match = function (e, t) {
        var r = [];
        return b(j(e, r, t), r);
      }),
        (l.regexpToFunction = p),
        (l.parse = v),
        (l.compile = function (e, t) {
          return w(y(e, t), t);
        }),
        (l.tokensToFunction = d),
        (l.tokensToRegExp = m);
      var S = {
          container: "container",
          history: "history",
          namespace: "namespace",
          prefix: "data-barba",
          prevent: "prevent",
          wrapper: "wrapper",
        },
        O = new ((function () {
          function e() {
            (this.o = S), (this.u = new DOMParser());
          }
          var t = e.prototype;
          return (
            (t.toString = function (e) {
              return e.outerHTML;
            }),
            (t.toDocument = function (e) {
              return this.u.parseFromString(e, "text/html");
            }),
            (t.toElement = function (e) {
              var t = document.createElement("div");
              return (t.innerHTML = e), t;
            }),
            (t.getHtml = function (e) {
              return (
                void 0 === e && (e = document), this.toString(e.documentElement)
              );
            }),
            (t.getWrapper = function (e) {
              return (
                void 0 === e && (e = document),
                e.querySelector(
                  "[" + this.o.prefix + '="' + this.o.wrapper + '"]'
                )
              );
            }),
            (t.getContainer = function (e) {
              return (
                void 0 === e && (e = document),
                e.querySelector(
                  "[" + this.o.prefix + '="' + this.o.container + '"]'
                )
              );
            }),
            (t.removeContainer = function (e) {
              document.body.contains(e) && e.parentNode.removeChild(e);
            }),
            (t.addContainer = function (e, t) {
              var r = this.getContainer();
              r ? this.s(e, r) : t.appendChild(e);
            }),
            (t.getNamespace = function (e) {
              void 0 === e && (e = document);
              var t = e.querySelector(
                "[" + this.o.prefix + "-" + this.o.namespace + "]"
              );
              return t
                ? t.getAttribute(this.o.prefix + "-" + this.o.namespace)
                : null;
            }),
            (t.getHref = function (e) {
              if (e.tagName && "a" === e.tagName.toLowerCase()) {
                if ("string" == typeof e.href) return e.href;
                var t = e.getAttribute("href") || e.getAttribute("xlink:href");
                if (t) return this.resolveUrl(t.baseVal || t);
              }
              return null;
            }),
            (t.resolveUrl = function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              var n = t.length;
              if (0 === n)
                throw new Error(
                  "resolveUrl requires at least one argument; got none."
                );
              var o = document.createElement("base");
              if (((o.href = arguments[0]), 1 === n)) return o.href;
              var i = document.getElementsByTagName("head")[0];
              i.insertBefore(o, i.firstChild);
              for (var s, a = document.createElement("a"), u = 1; u < n; u++)
                (a.href = arguments[u]), (o.href = s = a.href);
              return i.removeChild(o), s;
            }),
            (t.s = function (e, t) {
              t.parentNode.insertBefore(e, t.nextSibling);
            }),
            e
          );
        })())(),
        A = new ((function () {
          function e() {
            (this.h = []), (this.v = -1);
          }
          var n = e.prototype;
          return (
            (n.init = function (e, t) {
              this.l = "barba";
              var r = {
                ns: t,
                scroll: { x: window.scrollX, y: window.scrollY },
                url: e,
              };
              this.h.push(r), (this.v = 0);
              var n = { from: this.l, index: 0, states: [].concat(this.h) };
              window.history && window.history.replaceState(n, "", e);
            }),
            (n.change = function (e, t, r) {
              if (r && r.state) {
                var n = r.state,
                  o = n.index;
                (t = this.m(this.v - o)), this.replace(n.states), (this.v = o);
              } else this.add(e, t);
              return t;
            }),
            (n.add = function (e, t) {
              var r = this.size,
                n = this.p(t),
                o = {
                  ns: "tmp",
                  scroll: { x: window.scrollX, y: window.scrollY },
                  url: e,
                };
              this.h.push(o), (this.v = r);
              var i = { from: this.l, index: r, states: [].concat(this.h) };
              switch (n) {
                case "push":
                  window.history && window.history.pushState(i, "", e);
                  break;
                case "replace":
                  window.history && window.history.replaceState(i, "", e);
              }
            }),
            (n.update = function (e, t) {
              var n = t || this.v,
                o = r({}, this.get(n), {}, e);
              this.set(n, o);
            }),
            (n.remove = function (e) {
              e ? this.h.splice(e, 1) : this.h.pop(), this.v--;
            }),
            (n.clear = function () {
              (this.h = []), (this.v = -1);
            }),
            (n.replace = function (e) {
              this.h = e;
            }),
            (n.get = function (e) {
              return this.h[e];
            }),
            (n.set = function (e, t) {
              return (this.h[e] = t);
            }),
            (n.p = function (e) {
              var t = "push",
                r = e,
                n = S.prefix + "-" + S.history;
              return (
                r.hasAttribute && r.hasAttribute(n) && (t = r.getAttribute(n)),
                t
              );
            }),
            (n.m = function (e) {
              return Math.abs(e) > 1
                ? e > 0
                  ? "forward"
                  : "back"
                : 0 === e
                ? "popstate"
                : e > 0
                ? "back"
                : "forward";
            }),
            t(e, [
              {
                key: "current",
                get: function () {
                  return this.h[this.v];
                },
              },
              {
                key: "state",
                get: function () {
                  return this.h[this.h.length - 1];
                },
              },
              {
                key: "previous",
                get: function () {
                  return this.v < 1 ? null : this.h[this.v - 1];
                },
              },
              {
                key: "size",
                get: function () {
                  return this.h.length;
                },
              },
            ]),
            e
          );
        })())(),
        R = function (e, t) {
          try {
            var r = (function () {
              if (!t.next.html)
                return Promise.resolve(e).then(function (e) {
                  var r = t.next;
                  if (e) {
                    var n = O.toElement(e);
                    (r.namespace = O.getNamespace(n)),
                      (r.container = O.getContainer(n)),
                      (r.html = e),
                      A.update({ ns: r.namespace });
                    var o = O.toDocument(e);
                    document.title = o.title;
                  }
                });
            })();
            return Promise.resolve(
              r && r.then ? r.then(function () {}) : void 0
            );
          } catch (e) {
            return Promise.reject(e);
          }
        },
        T = l,
        L = {
          __proto__: null,
          update: R,
          nextTick: function () {
            return new Promise(function (e) {
              window.requestAnimationFrame(e);
            });
          },
          pathToRegexp: T,
        },
        _ = function () {
          return window.location.origin;
        },
        q = function (e) {
          return void 0 === e && (e = window.location.href), M(e).port;
        },
        M = function (e) {
          var t,
            r = e.match(/:\d+/);
          if (null === r)
            /^http/.test(e) && (t = 80), /^https/.test(e) && (t = 443);
          else {
            var n = r[0].substring(1);
            t = parseInt(n, 10);
          }
          var o,
            i = e.replace(_(), ""),
            s = {},
            a = i.indexOf("#");
          a >= 0 && ((o = i.slice(a + 1)), (i = i.slice(0, a)));
          var u = i.indexOf("?");
          return (
            u >= 0 && ((s = H(i.slice(u + 1))), (i = i.slice(0, u))),
            { hash: o, path: i, port: t, query: s }
          );
        },
        H = function (e) {
          return e.split("&").reduce(function (e, t) {
            var r = t.split("=");
            return (e[r[0]] = r[1]), e;
          }, {});
        },
        C = function (e) {
          return (
            void 0 === e && (e = window.location.href),
            e.replace(/(\/#.*|\/|#.*)$/, "")
          );
        },
        N = {
          __proto__: null,
          getHref: function () {
            return window.location.href;
          },
          getOrigin: _,
          getPort: q,
          getPath: function (e) {
            return void 0 === e && (e = window.location.href), M(e).path;
          },
          parse: M,
          parseQuery: H,
          clean: C,
        };
      function B(e, t, r) {
        return (
          void 0 === t && (t = 2e3),
          new Promise(function (n, o) {
            var i = new XMLHttpRequest();
            (i.onreadystatechange = function () {
              if (i.readyState === XMLHttpRequest.DONE)
                if (200 === i.status) n(i.responseText);
                else if (i.status) {
                  var t = { status: i.status, statusText: i.statusText };
                  r(e, t), o(t);
                }
            }),
              (i.ontimeout = function () {
                var n = new Error("Timeout error [" + t + "]");
                r(e, n), o(n);
              }),
              (i.onerror = function () {
                var t = new Error("Fetch error");
                r(e, t), o(t);
              }),
              i.open("GET", e),
              (i.timeout = t),
              i.setRequestHeader(
                "Accept",
                "text/html,application/xhtml+xml,application/xml"
              ),
              i.setRequestHeader("x-barba", "yes"),
              i.send();
          })
        );
      }
      var I = function (e) {
        return (
          !!e &&
          ("object" == typeof e || "function" == typeof e) &&
          "function" == typeof e.then
        );
      };
      function D(e, t) {
        return (
          void 0 === t && (t = {}),
          function () {
            for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
              n[o] = arguments[o];
            var i = !1,
              s = new Promise(function (r, o) {
                t.async = function () {
                  return (
                    (i = !0),
                    function (e, t) {
                      e ? o(e) : r(t);
                    }
                  );
                };
                var s = e.apply(t, n);
                i || (I(s) ? s.then(r, o) : r(s));
              });
            return s;
          }
        );
      }
      var U = new ((function (e) {
          function t() {
            var t;
            return (
              ((t = e.call(this) || this).logger = new h("@barba/core")),
              (t.all = [
                "ready",
                "page",
                "reset",
                "currentAdded",
                "currentRemoved",
                "nextAdded",
                "nextRemoved",
                "beforeOnce",
                "once",
                "afterOnce",
                "before",
                "beforeLeave",
                "leave",
                "afterLeave",
                "beforeEnter",
                "enter",
                "afterEnter",
                "after",
              ]),
              (t.registered = new Map()),
              t.init(),
              t
            );
          }
          n(t, e);
          var r = t.prototype;
          return (
            (r.init = function () {
              var e = this;
              this.registered.clear(),
                this.all.forEach(function (t) {
                  e[t] ||
                    (e[t] = function (r, n) {
                      e.registered.has(t) || e.registered.set(t, new Set()),
                        e.registered.get(t).add({ ctx: n || {}, fn: r });
                    });
                });
            }),
            (r.do = function (e) {
              for (
                var t = this,
                  r = arguments.length,
                  n = new Array(r > 1 ? r - 1 : 0),
                  o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              if (this.registered.has(e)) {
                var i = Promise.resolve();
                return (
                  this.registered.get(e).forEach(function (e) {
                    i = i.then(function () {
                      return D(e.fn, e.ctx).apply(void 0, n);
                    });
                  }),
                  i.catch(function (r) {
                    t.logger.debug("Hook error [" + e + "]"), t.logger.error(r);
                  })
                );
              }
              return Promise.resolve();
            }),
            (r.clear = function () {
              var e = this;
              this.all.forEach(function (t) {
                delete e[t];
              }),
                this.init();
            }),
            (r.help = function () {
              this.logger.info("Available hooks: " + this.all.join(","));
              var e = [];
              this.registered.forEach(function (t, r) {
                return e.push(r);
              }),
                this.logger.info("Registered hooks: " + e.join(","));
            }),
            t
          );
        })(function () {}))(),
        $ = (function () {
          function e(e) {
            if (((this.P = []), "boolean" == typeof e)) this.g = e;
            else {
              var t = Array.isArray(e) ? e : [e];
              this.P = t.map(function (e) {
                return T(e);
              });
            }
          }
          return (
            (e.prototype.checkHref = function (e) {
              if ("boolean" == typeof this.g) return this.g;
              var t = M(e).path;
              return this.P.some(function (e) {
                return null !== e.exec(t);
              });
            }),
            e
          );
        })(),
        F = (function (e) {
          function t(t) {
            var r;
            return ((r = e.call(this, t) || this).k = new Map()), r;
          }
          n(t, e);
          var o = t.prototype;
          return (
            (o.set = function (e, t, r) {
              return (
                this.k.set(e, { action: r, request: t }),
                { action: r, request: t }
              );
            }),
            (o.get = function (e) {
              return this.k.get(e);
            }),
            (o.getRequest = function (e) {
              return this.k.get(e).request;
            }),
            (o.getAction = function (e) {
              return this.k.get(e).action;
            }),
            (o.has = function (e) {
              return !this.checkHref(e) && this.k.has(e);
            }),
            (o.delete = function (e) {
              return this.k.delete(e);
            }),
            (o.update = function (e, t) {
              var n = r({}, this.k.get(e), {}, t);
              return this.k.set(e, n), n;
            }),
            t
          );
        })($),
        W = function () {
          return !window.history.pushState;
        },
        K = function (e) {
          return !e.el || !e.href;
        },
        X = function (e) {
          var t = e.event;
          return (
            t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey
          );
        },
        z = function (e) {
          var t = e.el;
          return t.hasAttribute("target") && "_blank" === t.target;
        },
        Y = function (e) {
          var t = e.el;
          return (
            (void 0 !== t.protocol &&
              window.location.protocol !== t.protocol) ||
            (void 0 !== t.hostname && window.location.hostname !== t.hostname)
          );
        },
        G = function (e) {
          var t = e.el;
          return void 0 !== t.port && q() !== q(t.href);
        },
        Q = function (e) {
          var t = e.el;
          return (
            t.getAttribute && "string" == typeof t.getAttribute("download")
          );
        },
        V = function (e) {
          return e.el.hasAttribute(S.prefix + "-" + S.prevent);
        },
        J = function (e) {
          return Boolean(
            e.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]')
          );
        },
        Z = function (e) {
          var t = e.href;
          return C(t) === C() && q(t) === q();
        },
        ee = (function (e) {
          function t(t) {
            var r;
            return (
              ((r = e.call(this, t) || this).suite = []),
              (r.tests = new Map()),
              r.init(),
              r
            );
          }
          n(t, e);
          var r = t.prototype;
          return (
            (r.init = function () {
              this.add("pushState", W),
                this.add("exists", K),
                this.add("newTab", X),
                this.add("blank", z),
                this.add("corsDomain", Y),
                this.add("corsPort", G),
                this.add("download", Q),
                this.add("preventSelf", V),
                this.add("preventAll", J),
                this.add("sameUrl", Z, !1);
            }),
            (r.add = function (e, t, r) {
              void 0 === r && (r = !0),
                this.tests.set(e, t),
                r && this.suite.push(e);
            }),
            (r.run = function (e, t, r, n) {
              return this.tests.get(e)({ el: t, event: r, href: n });
            }),
            (r.checkLink = function (e, t, r) {
              var n = this;
              return this.suite.some(function (o) {
                return n.run(o, e, t, r);
              });
            }),
            t
          );
        })($),
        te = (function (e) {
          function t(r, n) {
            var o;
            void 0 === n && (n = "Barba error");
            for (
              var i = arguments.length, s = new Array(i > 2 ? i - 2 : 0), a = 2;
              a < i;
              a++
            )
              s[a - 2] = arguments[a];
            return (
              ((o = e.call.apply(e, [this].concat(s)) || this).error = r),
              (o.label = n),
              Error.captureStackTrace &&
                Error.captureStackTrace(
                  (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(o),
                  t
                ),
              (o.name = "BarbaError"),
              o
            );
          }
          return n(t, e), t;
        })(a(Error)),
        re = (function () {
          function e(e) {
            void 0 === e && (e = []),
              (this.logger = new h("@barba/core")),
              (this.all = []),
              (this.page = []),
              (this.once = []),
              (this.A = [
                { name: "namespace", type: "strings" },
                { name: "custom", type: "function" },
              ]),
              e && (this.all = this.all.concat(e)),
              this.update();
          }
          var t = e.prototype;
          return (
            (t.add = function (e, t) {
              switch (e) {
                case "rule":
                  this.A.splice(t.position || 0, 0, t.value);
                  break;
                case "transition":
                default:
                  this.all.push(t);
              }
              this.update();
            }),
            (t.resolve = function (e, t) {
              var r = this;
              void 0 === t && (t = {});
              var n = t.once ? this.once : this.page;
              n = n.filter(
                t.self
                  ? function (e) {
                      return e.name && "self" === e.name;
                    }
                  : function (e) {
                      return !e.name || "self" !== e.name;
                    }
              );
              var o = new Map(),
                i = n.find(function (n) {
                  var i = !0,
                    s = {};
                  return (
                    !(!t.self || "self" !== n.name) ||
                    (r.A.reverse().forEach(function (t) {
                      i &&
                        ((i = r.R(n, t, e, s)),
                        n.from &&
                          n.to &&
                          (i =
                            r.R(n, t, e, s, "from") && r.R(n, t, e, s, "to")),
                        n.from && !n.to && (i = r.R(n, t, e, s, "from")),
                        !n.from && n.to && (i = r.R(n, t, e, s, "to")));
                    }),
                    o.set(n, s),
                    i)
                  );
                }),
                s = o.get(i),
                a = [];
              if (
                (a.push(t.once ? "once" : "page"), t.self && a.push("self"), s)
              ) {
                var u,
                  c = [i];
                Object.keys(s).length > 0 && c.push(s),
                  (u = this.logger).info.apply(
                    u,
                    ["Transition found [" + a.join(",") + "]"].concat(c)
                  );
              } else
                this.logger.info("No transition found [" + a.join(",") + "]");
              return i;
            }),
            (t.update = function () {
              var e = this;
              (this.all = this.all
                .map(function (t) {
                  return e.T(t);
                })
                .sort(function (e, t) {
                  return e.priority - t.priority;
                })
                .reverse()
                .map(function (e) {
                  return delete e.priority, e;
                })),
                (this.page = this.all.filter(function (e) {
                  return void 0 !== e.leave || void 0 !== e.enter;
                })),
                (this.once = this.all.filter(function (e) {
                  return void 0 !== e.once;
                }));
            }),
            (t.R = function (e, t, r, n, o) {
              var i = !0,
                s = !1,
                a = e,
                u = t.name,
                c = u,
                f = u,
                h = u,
                l = o ? a[o] : a,
                p = "to" === o ? r.next : r.current;
              if (o ? l && l[u] : l[u]) {
                switch (t.type) {
                  case "strings":
                  default:
                    var v = Array.isArray(l[c]) ? l[c] : [l[c]];
                    p[c] && -1 !== v.indexOf(p[c]) && (s = !0),
                      -1 === v.indexOf(p[c]) && (i = !1);
                    break;
                  case "object":
                    var d = Array.isArray(l[f]) ? l[f] : [l[f]];
                    p[f]
                      ? (p[f].name && -1 !== d.indexOf(p[f].name) && (s = !0),
                        -1 === d.indexOf(p[f].name) && (i = !1))
                      : (i = !1);
                    break;
                  case "function":
                    l[h](r) ? (s = !0) : (i = !1);
                }
                s &&
                  (o
                    ? ((n[o] = n[o] || {}), (n[o][u] = a[o][u]))
                    : (n[u] = a[u]));
              }
              return i;
            }),
            (t.O = function (e, t, r) {
              var n = 0;
              return (
                (e[t] || (e.from && e.from[t]) || (e.to && e.to[t])) &&
                  ((n += Math.pow(10, r)),
                  e.from && e.from[t] && (n += 1),
                  e.to && e.to[t] && (n += 2)),
                n
              );
            }),
            (t.T = function (e) {
              var t = this;
              e.priority = 0;
              var r = 0;
              return (
                this.A.forEach(function (n, o) {
                  r += t.O(e, n.name, o + 1);
                }),
                (e.priority = r),
                e
              );
            }),
            e
          );
        })(),
        ne = (function () {
          function e(e) {
            void 0 === e && (e = []),
              (this.logger = new h("@barba/core")),
              (this.S = !1),
              (this.store = new re(e));
          }
          var r = e.prototype;
          return (
            (r.get = function (e, t) {
              return this.store.resolve(e, t);
            }),
            (r.doOnce = function (e) {
              var t = e.data,
                r = e.transition;
              try {
                var n = function () {
                    o.S = !1;
                  },
                  o = this,
                  i = r || {};
                o.S = !0;
                var s = u(
                  function () {
                    return Promise.resolve(o.j("beforeOnce", t, i)).then(
                      function () {
                        return Promise.resolve(o.once(t, i)).then(function () {
                          return Promise.resolve(
                            o.j("afterOnce", t, i)
                          ).then(function () {});
                        });
                      }
                    );
                  },
                  function (e) {
                    (o.S = !1),
                      o.logger.debug("Transition error [before/after/once]"),
                      o.logger.error(e);
                  }
                );
                return Promise.resolve(s && s.then ? s.then(n) : n());
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (r.doPage = function (e) {
              var t = e.data,
                r = e.transition,
                n = e.page,
                o = e.wrapper;
              try {
                var i = function (e) {
                    if (s) return e;
                    a.S = !1;
                  },
                  s = !1,
                  a = this,
                  c = r || {},
                  f = !0 === c.sync || !1;
                a.S = !0;
                var h = u(
                  function () {
                    function e() {
                      return Promise.resolve(a.j("before", t, c)).then(
                        function () {
                          function e(e) {
                            return Promise.resolve(a.remove(t)).then(
                              function () {
                                return Promise.resolve(
                                  a.j("after", t, c)
                                ).then(function () {});
                              }
                            );
                          }
                          var r = (function () {
                            if (f)
                              return u(
                                function () {
                                  return Promise.resolve(a.add(t, o)).then(
                                    function () {
                                      return Promise.resolve(
                                        a.j("beforeLeave", t, c)
                                      ).then(function () {
                                        return Promise.resolve(
                                          a.j("beforeEnter", t, c)
                                        ).then(function () {
                                          return Promise.resolve(
                                            Promise.all([
                                              a.leave(t, c),
                                              a.enter(t, c),
                                            ])
                                          ).then(function () {
                                            return Promise.resolve(
                                              a.j("afterLeave", t, c)
                                            ).then(function () {
                                              return Promise.resolve(
                                                a.j("afterEnter", t, c)
                                              ).then(function () {});
                                            });
                                          });
                                        });
                                      });
                                    }
                                  );
                                },
                                function (e) {
                                  if (a.M(e))
                                    throw new te(e, "Transition error [sync]");
                                }
                              );
                            var e = function (e) {
                                return u(
                                  function () {
                                    var e = (function () {
                                      if (!1 !== r)
                                        return Promise.resolve(
                                          a.add(t, o)
                                        ).then(function () {
                                          return Promise.resolve(
                                            a.j("beforeEnter", t, c)
                                          ).then(function () {
                                            return Promise.resolve(
                                              a.enter(t, c, r)
                                            ).then(function () {
                                              return Promise.resolve(
                                                a.j("afterEnter", t, c)
                                              ).then(function () {});
                                            });
                                          });
                                        });
                                    })();
                                    if (e && e.then)
                                      return e.then(function () {});
                                  },
                                  function (e) {
                                    if (a.M(e))
                                      throw new te(
                                        e,
                                        "Transition error [before/after/enter]"
                                      );
                                  }
                                );
                              },
                              r = !1,
                              i = u(
                                function () {
                                  return Promise.resolve(
                                    a.j("beforeLeave", t, c)
                                  ).then(function () {
                                    return Promise.resolve(
                                      Promise.all([
                                        a.leave(t, c),
                                        R(n, t),
                                      ]).then(function (e) {
                                        return e[0];
                                      })
                                    ).then(function (e) {
                                      return (
                                        (r = e),
                                        Promise.resolve(
                                          a.j("afterLeave", t, c)
                                        ).then(function () {})
                                      );
                                    });
                                  });
                                },
                                function (e) {
                                  if (a.M(e))
                                    throw new te(
                                      e,
                                      "Transition error [before/after/leave]"
                                    );
                                }
                              );
                            return i && i.then ? i.then(e) : e();
                          })();
                          return r && r.then ? r.then(e) : e();
                        }
                      );
                    }
                    var r = (function () {
                      if (f)
                        return Promise.resolve(R(n, t)).then(function () {});
                    })();
                    return r && r.then ? r.then(e) : e();
                  },
                  function (e) {
                    if (((a.S = !1), e.name && "BarbaError" === e.name))
                      throw (
                        (a.logger.debug(e.label), a.logger.error(e.error), e)
                      );
                    throw (
                      (a.logger.debug("Transition error [page]"),
                      a.logger.error(e),
                      e)
                    );
                  }
                );
                return Promise.resolve(h && h.then ? h.then(i) : i(h));
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (r.once = function (e, t) {
              try {
                return Promise.resolve(U.do("once", e, t)).then(function () {
                  return t.once ? D(t.once, t)(e) : Promise.resolve();
                });
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (r.leave = function (e, t) {
              try {
                return Promise.resolve(U.do("leave", e, t)).then(function () {
                  return t.leave ? D(t.leave, t)(e) : Promise.resolve();
                });
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (r.enter = function (e, t, r) {
              try {
                return Promise.resolve(U.do("enter", e, t)).then(function () {
                  return t.enter ? D(t.enter, t)(e, r) : Promise.resolve();
                });
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (r.add = function (e, t) {
              try {
                return (
                  O.addContainer(e.next.container, t),
                  U.do("nextAdded", e),
                  Promise.resolve()
                );
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (r.remove = function (e) {
              try {
                return (
                  O.removeContainer(e.current.container),
                  U.do("currentRemoved", e),
                  Promise.resolve()
                );
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (r.M = function (e) {
              return e.message
                ? !/Timeout error|Fetch error/.test(e.message)
                : !e.status;
            }),
            (r.j = function (e, t, r) {
              try {
                return Promise.resolve(U.do(e, t, r)).then(function () {
                  return r[e] ? D(r[e], r)(t) : Promise.resolve();
                });
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            t(e, [
              {
                key: "isRunning",
                get: function () {
                  return this.S;
                },
                set: function (e) {
                  this.S = e;
                },
              },
              {
                key: "hasOnce",
                get: function () {
                  return this.store.once.length > 0;
                },
              },
              {
                key: "hasSelf",
                get: function () {
                  return this.store.all.some(function (e) {
                    return "self" === e.name;
                  });
                },
              },
              {
                key: "shouldWait",
                get: function () {
                  return this.store.all.some(function (e) {
                    return (e.to && !e.to.route) || e.sync;
                  });
                },
              },
            ]),
            e
          );
        })(),
        oe = (function () {
          function e(e) {
            var t = this;
            (this.names = [
              "beforeLeave",
              "afterLeave",
              "beforeEnter",
              "afterEnter",
            ]),
              (this.byNamespace = new Map()),
              0 !== e.length &&
                (e.forEach(function (e) {
                  t.byNamespace.set(e.namespace, e);
                }),
                this.names.forEach(function (e) {
                  U[e](t.L(e));
                }));
          }
          return (
            (e.prototype.L = function (e) {
              var t = this;
              return function (r) {
                var n = e.match(/enter/i) ? r.next : r.current,
                  o = t.byNamespace.get(n.namespace);
                return o && o[e] ? D(o[e], o)(r) : Promise.resolve();
              };
            }),
            e
          );
        })();
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
        Element.prototype.closest ||
          (Element.prototype.closest = function (e) {
            var t = this;
            do {
              if (t.matches(e)) return t;
              t = t.parentElement || t.parentNode;
            } while (null !== t && 1 === t.nodeType);
            return null;
          });
      var ie = {
        container: null,
        html: "",
        namespace: "",
        url: { hash: "", href: "", path: "", port: null, query: {} },
      };
      return new ((function () {
        function e() {
          (this.version = "2.9.7"),
            (this.schemaPage = ie),
            (this.Logger = h),
            (this.logger = new h("@barba/core")),
            (this.plugins = []),
            (this.hooks = U),
            (this.dom = O),
            (this.helpers = L),
            (this.history = A),
            (this.request = B),
            (this.url = N);
        }
        var n = e.prototype;
        return (
          (n.use = function (e, t) {
            var r = this.plugins;
            r.indexOf(e) > -1
              ? this.logger.warn("Plugin [" + e.name + "] already installed.")
              : "function" == typeof e.install
              ? (e.install(this, t), r.push(e))
              : this.logger.warn(
                  "Plugin [" + e.name + '] has no "install" method.'
                );
          }),
          (n.init = function (e) {
            var t = void 0 === e ? {} : e,
              n = t.transitions,
              o = void 0 === n ? [] : n,
              i = t.views,
              s = void 0 === i ? [] : i,
              a = t.schema,
              u = void 0 === a ? S : a,
              c = t.requestError,
              f = t.timeout,
              l = void 0 === f ? 2e3 : f,
              p = t.cacheIgnore,
              v = void 0 !== p && p,
              d = t.prefetchIgnore,
              m = void 0 !== d && d,
              g = t.preventRunning,
              y = void 0 !== g && g,
              b = t.prevent,
              w = void 0 === b ? null : b,
              P = t.debug,
              x = t.logLevel;
            if (
              (h.setLevel(
                !0 === (void 0 !== P && P) ? "debug" : void 0 === x ? "off" : x
              ),
              this.logger.info(this.version),
              Object.keys(u).forEach(function (e) {
                S[e] && (S[e] = u[e]);
              }),
              (this.$ = c),
              (this.timeout = l),
              (this.cacheIgnore = v),
              (this.prefetchIgnore = m),
              (this.preventRunning = y),
              (this._ = this.dom.getWrapper()),
              !this._)
            )
              throw new Error("[@barba/core] No Barba wrapper found");
            this._.setAttribute("aria-live", "polite"), this.q();
            var E = this.data.current;
            if (!E.container)
              throw new Error("[@barba/core] No Barba container found");
            if (
              ((this.cache = new F(v)),
              (this.prevent = new ee(m)),
              (this.transitions = new ne(o)),
              (this.views = new oe(s)),
              null !== w)
            ) {
              if ("function" != typeof w)
                throw new Error("[@barba/core] Prevent should be a function");
              this.prevent.add("preventCustom", w);
            }
            this.history.init(E.url.href, E.namespace),
              (this.B = this.B.bind(this)),
              (this.U = this.U.bind(this)),
              (this.D = this.D.bind(this)),
              this.F(),
              this.plugins.forEach(function (e) {
                return e.init();
              });
            var k = this.data;
            (k.trigger = "barba"),
              (k.next = k.current),
              (k.current = r({}, this.schemaPage)),
              this.hooks.do("ready", k),
              this.once(k),
              this.q();
          }),
          (n.destroy = function () {
            this.q(),
              this.H(),
              this.history.clear(),
              this.hooks.clear(),
              (this.plugins = []);
          }),
          (n.force = function (e) {
            window.location.assign(e);
          }),
          (n.go = function (e, t, r) {
            var n;
            if ((void 0 === t && (t = "barba"), this.transitions.isRunning))
              this.force(e);
            else if (
              !(n =
                "popstate" === t
                  ? this.history.current &&
                    this.url.getPath(this.history.current.url) ===
                      this.url.getPath(e)
                  : this.prevent.run("sameUrl", null, null, e)) ||
              this.transitions.hasSelf
            )
              return (
                (t = this.history.change(e, t, r)),
                r && (r.stopPropagation(), r.preventDefault()),
                this.page(e, t, n)
              );
          }),
          (n.once = function (e) {
            try {
              var t = this;
              return Promise.resolve(t.hooks.do("beforeEnter", e)).then(
                function () {
                  function r() {
                    return Promise.resolve(
                      t.hooks.do("afterEnter", e)
                    ).then(function () {});
                  }
                  var n = (function () {
                    if (t.transitions.hasOnce) {
                      var r = t.transitions.get(e, { once: !0 });
                      return Promise.resolve(
                        t.transitions.doOnce({ transition: r, data: e })
                      ).then(function () {});
                    }
                  })();
                  return n && n.then ? n.then(r) : r();
                }
              );
            } catch (e) {
              return Promise.reject(e);
            }
          }),
          (n.page = function (e, t, n) {
            try {
              var o = function () {
                  var e = i.data;
                  return Promise.resolve(i.hooks.do("page", e)).then(
                    function () {
                      var t = u(
                        function () {
                          var t = i.transitions.get(e, { once: !1, self: n });
                          return Promise.resolve(
                            i.transitions.doPage({
                              data: e,
                              page: s,
                              transition: t,
                              wrapper: i._,
                            })
                          ).then(function () {
                            i.q();
                          });
                        },
                        function () {
                          0 === h.getLevel() && i.force(e.current.url.href);
                        }
                      );
                      if (t && t.then) return t.then(function () {});
                    }
                  );
                },
                i = this;
              (i.data.next.url = r({ href: e }, i.url.parse(e))),
                (i.data.trigger = t);
              var s = i.cache.has(e)
                  ? i.cache.update(e, { action: "click" }).request
                  : i.cache.set(
                      e,
                      i.request(e, i.timeout, i.onRequestError.bind(i, t)),
                      "click"
                    ).request,
                a = (function () {
                  if (i.transitions.shouldWait)
                    return Promise.resolve(R(s, i.data)).then(function () {});
                })();
              return Promise.resolve(a && a.then ? a.then(o) : o());
            } catch (e) {
              return Promise.reject(e);
            }
          }),
          (n.onRequestError = function (e) {
            this.transitions.isRunning = !1;
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n];
            var o = r[0],
              i = r[1],
              s = this.cache.getAction(o);
            return (
              this.cache.delete(o),
              !(
                (this.$ && !1 === this.$(e, s, o, i)) ||
                ("click" === s && this.force(o), 1)
              )
            );
          }),
          (n.prefetch = function (e) {
            var t = this;
            this.cache.has(e) ||
              this.cache.set(
                e,
                this.request(
                  e,
                  this.timeout,
                  this.onRequestError.bind(this, "barba")
                ).catch(function (e) {
                  t.logger.error(e);
                }),
                "prefetch"
              );
          }),
          (n.F = function () {
            !0 !== this.prefetchIgnore &&
              (document.addEventListener("mouseover", this.B),
              document.addEventListener("touchstart", this.B)),
              document.addEventListener("click", this.U),
              window.addEventListener("popstate", this.D);
          }),
          (n.H = function () {
            !0 !== this.prefetchIgnore &&
              (document.removeEventListener("mouseover", this.B),
              document.removeEventListener("touchstart", this.B)),
              document.removeEventListener("click", this.U),
              window.removeEventListener("popstate", this.D);
          }),
          (n.B = function (e) {
            var t = this,
              r = this.I(e);
            if (r) {
              var n = this.dom.getHref(r);
              this.prevent.checkHref(n) ||
                this.cache.has(n) ||
                this.cache.set(
                  n,
                  this.request(
                    n,
                    this.timeout,
                    this.onRequestError.bind(this, r)
                  ).catch(function (e) {
                    t.logger.error(e);
                  }),
                  "enter"
                );
            }
          }),
          (n.U = function (e) {
            var t = this.I(e);
            if (t)
              return this.transitions.isRunning && this.preventRunning
                ? (e.preventDefault(), void e.stopPropagation())
                : void this.go(this.dom.getHref(t), t, e);
          }),
          (n.D = function (e) {
            this.go(this.url.getHref(), "popstate", e);
          }),
          (n.I = function (e) {
            for (var t = e.target; t && !this.dom.getHref(t); )
              t = t.parentNode;
            if (t && !this.prevent.checkLink(t, e, this.dom.getHref(t)))
              return t;
          }),
          (n.q = function () {
            var e = this.url.getHref(),
              t = {
                container: this.dom.getContainer(),
                html: this.dom.getHtml(),
                namespace: this.dom.getNamespace(),
                url: r({ href: e }, this.url.parse(e)),
              };
            (this.C = {
              current: t,
              next: r({}, this.schemaPage),
              trigger: void 0,
            }),
              this.hooks.do("reset", this.data);
          }),
          t(e, [
            {
              key: "data",
              get: function () {
                return this.C;
              },
            },
            {
              key: "wrapper",
              get: function () {
                return this._;
              },
            },
          ]),
          e
        );
      })())();
    })();
  },
]);

!(function (t, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define([], n)
    : "object" == typeof exports
    ? (exports.Scrollbar = n())
    : (t.Scrollbar = n());
})(window, function () {
  return (function (t) {
    var n = {};
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }
    return (
      (e.m = t),
      (e.c = n),
      (e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
      }),
      (e.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (e.t = function (t, n) {
        if ((1 & n && (t = e(t)), 8 & n)) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (e.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var o in t)
            e.d(
              r,
              o,
              function (n) {
                return t[n];
              }.bind(null, o)
            );
        return r;
      }),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(n, "a", n), n;
      }),
      (e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (e.p = ""),
      e((e.s = 58))
    );
  })([
    function (t, n, e) {
      var r = e(25)("wks"),
        o = e(16),
        i = e(2).Symbol,
        u = "function" == typeof i;
      (t.exports = function (t) {
        return r[t] || (r[t] = (u && i[t]) || (u ? i : o)("Symbol." + t));
      }).store = r;
    },
    function (t, n) {
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    },
    function (t, n) {
      var e = (t.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = e);
    },
    function (t, n) {
      var e = (t.exports = { version: "2.6.9" });
      "number" == typeof __e && (__e = e);
    },
    function (t, n, e) {
      t.exports = !e(13)(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    },
    function (t, n, e) {
      var r = e(2),
        o = e(3),
        i = e(11),
        u = e(6),
        c = e(10),
        s = function (t, n, e) {
          var a,
            f,
            l,
            p,
            h = t & s.F,
            d = t & s.G,
            v = t & s.S,
            y = t & s.P,
            m = t & s.B,
            g = d ? r : v ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
            b = d ? o : o[n] || (o[n] = {}),
            x = b.prototype || (b.prototype = {});
          for (a in (d && (e = n), e))
            (l = ((f = !h && g && void 0 !== g[a]) ? g : e)[a]),
              (p =
                m && f
                  ? c(l, r)
                  : y && "function" == typeof l
                  ? c(Function.call, l)
                  : l),
              g && u(g, a, l, t & s.U),
              b[a] != l && i(b, a, p),
              y && x[a] != l && (x[a] = l);
        };
      (r.core = o),
        (s.F = 1),
        (s.G = 2),
        (s.S = 4),
        (s.P = 8),
        (s.B = 16),
        (s.W = 32),
        (s.U = 64),
        (s.R = 128),
        (t.exports = s);
    },
    function (t, n, e) {
      var r = e(2),
        o = e(11),
        i = e(9),
        u = e(16)("src"),
        c = e(60),
        s = ("" + c).split("toString");
      (e(3).inspectSource = function (t) {
        return c.call(t);
      }),
        (t.exports = function (t, n, e, c) {
          var a = "function" == typeof e;
          a && (i(e, "name") || o(e, "name", n)),
            t[n] !== e &&
              (a && (i(e, u) || o(e, u, t[n] ? "" + t[n] : s.join(String(n)))),
              t === r
                ? (t[n] = e)
                : c
                ? t[n]
                  ? (t[n] = e)
                  : o(t, n, e)
                : (delete t[n], o(t, n, e)));
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && this[u]) || c.call(this);
        });
    },
    function (t, n, e) {
      var r = e(8),
        o = e(41),
        i = e(43),
        u = Object.defineProperty;
      n.f = e(4)
        ? Object.defineProperty
        : function (t, n, e) {
            if ((r(t), (n = i(n, !0)), r(e), o))
              try {
                return u(t, n, e);
              } catch (t) {}
            if ("get" in e || "set" in e)
              throw TypeError("Accessors not supported!");
            return "value" in e && (t[n] = e.value), t;
          };
    },
    function (t, n, e) {
      var r = e(1);
      t.exports = function (t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t;
      };
    },
    function (t, n) {
      var e = {}.hasOwnProperty;
      t.exports = function (t, n) {
        return e.call(t, n);
      };
    },
    function (t, n, e) {
      var r = e(44);
      t.exports = function (t, n, e) {
        if ((r(t), void 0 === n)) return t;
        switch (e) {
          case 1:
            return function (e) {
              return t.call(n, e);
            };
          case 2:
            return function (e, r) {
              return t.call(n, e, r);
            };
          case 3:
            return function (e, r, o) {
              return t.call(n, e, r, o);
            };
        }
        return function () {
          return t.apply(n, arguments);
        };
      };
    },
    function (t, n, e) {
      var r = e(7),
        o = e(17);
      t.exports = e(4)
        ? function (t, n, e) {
            return r.f(t, n, o(1, e));
          }
        : function (t, n, e) {
            return (t[n] = e), t;
          };
    },
    function (t, n, e) {
      var r = e(1);
      t.exports = function (t, n) {
        if (!r(t) || t._t !== n)
          throw TypeError("Incompatible receiver, " + n + " required!");
        return t;
      };
    },
    function (t, n) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    function (t, n) {
      t.exports = {};
    },
    function (t, n, e) {
      var r = e(10),
        o = e(49),
        i = e(50),
        u = e(8),
        c = e(19),
        s = e(51),
        a = {},
        f = {};
      ((n = t.exports = function (t, n, e, l, p) {
        var h,
          d,
          v,
          y,
          m = p
            ? function () {
                return t;
              }
            : s(t),
          g = r(e, l, n ? 2 : 1),
          b = 0;
        if ("function" != typeof m) throw TypeError(t + " is not iterable!");
        if (i(m)) {
          for (h = c(t.length); h > b; b++)
            if ((y = n ? g(u((d = t[b]))[0], d[1]) : g(t[b])) === a || y === f)
              return y;
        } else
          for (v = m.call(t); !(d = v.next()).done; )
            if ((y = o(v, g, d.value, n)) === a || y === f) return y;
      }).BREAK = a),
        (n.RETURN = f);
    },
    function (t, n) {
      var e = 0,
        r = Math.random();
      t.exports = function (t) {
        return "Symbol(".concat(
          void 0 === t ? "" : t,
          ")_",
          (++e + r).toString(36)
        );
      };
    },
    function (t, n) {
      t.exports = function (t, n) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: n,
        };
      };
    },
    function (t, n, e) {
      var r = e(31),
        o = e(28);
      t.exports = function (t) {
        return r(o(t));
      };
    },
    function (t, n, e) {
      var r = e(27),
        o = Math.min;
      t.exports = function (t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0;
      };
    },
    function (t, n, e) {
      var r = e(28);
      t.exports = function (t) {
        return Object(r(t));
      };
    },
    function (t, n, e) {
      var r = e(16)("meta"),
        o = e(1),
        i = e(9),
        u = e(7).f,
        c = 0,
        s =
          Object.isExtensible ||
          function () {
            return !0;
          },
        a = !e(13)(function () {
          return s(Object.preventExtensions({}));
        }),
        f = function (t) {
          u(t, r, { value: { i: "O" + ++c, w: {} } });
        },
        l = (t.exports = {
          KEY: r,
          NEED: !1,
          fastKey: function (t, n) {
            if (!o(t))
              return "symbol" == typeof t
                ? t
                : ("string" == typeof t ? "S" : "P") + t;
            if (!i(t, r)) {
              if (!s(t)) return "F";
              if (!n) return "E";
              f(t);
            }
            return t[r].i;
          },
          getWeak: function (t, n) {
            if (!i(t, r)) {
              if (!s(t)) return !0;
              if (!n) return !1;
              f(t);
            }
            return t[r].w;
          },
          onFreeze: function (t) {
            return a && l.NEED && s(t) && !i(t, r) && f(t), t;
          },
        });
    },
    function (t, n, e) {
      "use strict";
      var r = e(23),
        o = {};
      (o[e(0)("toStringTag")] = "z"),
        o + "" != "[object z]" &&
          e(6)(
            Object.prototype,
            "toString",
            function () {
              return "[object " + r(this) + "]";
            },
            !0
          );
    },
    function (t, n, e) {
      var r = e(24),
        o = e(0)("toStringTag"),
        i =
          "Arguments" ==
          r(
            (function () {
              return arguments;
            })()
          );
      t.exports = function (t) {
        var n, e, u;
        return void 0 === t
          ? "Undefined"
          : null === t
          ? "Null"
          : "string" ==
            typeof (e = (function (t, n) {
              try {
                return t[n];
              } catch (t) {}
            })((n = Object(t)), o))
          ? e
          : i
          ? r(n)
          : "Object" == (u = r(n)) && "function" == typeof n.callee
          ? "Arguments"
          : u;
      };
    },
    function (t, n) {
      var e = {}.toString;
      t.exports = function (t) {
        return e.call(t).slice(8, -1);
      };
    },
    function (t, n, e) {
      var r = e(3),
        o = e(2),
        i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
      (t.exports = function (t, n) {
        return i[t] || (i[t] = void 0 !== n ? n : {});
      })("versions", []).push({
        version: r.version,
        mode: e(40) ? "pure" : "global",
        copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)",
      });
    },
    function (t, n, e) {
      "use strict";
      var r = e(61)(!0);
      e(29)(
        String,
        "String",
        function (t) {
          (this._t = String(t)), (this._i = 0);
        },
        function () {
          var t,
            n = this._t,
            e = this._i;
          return e >= n.length
            ? { value: void 0, done: !0 }
            : ((t = r(n, e)), (this._i += t.length), { value: t, done: !1 });
        }
      );
    },
    function (t, n) {
      var e = Math.ceil,
        r = Math.floor;
      t.exports = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t);
      };
    },
    function (t, n) {
      t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(40),
        o = e(5),
        i = e(6),
        u = e(11),
        c = e(14),
        s = e(62),
        a = e(33),
        f = e(68),
        l = e(0)("iterator"),
        p = !([].keys && "next" in [].keys()),
        h = function () {
          return this;
        };
      t.exports = function (t, n, e, d, v, y, m) {
        s(e, n, d);
        var g,
          b,
          x,
          _ = function (t) {
            if (!p && t in O) return O[t];
            switch (t) {
              case "keys":
              case "values":
                return function () {
                  return new e(this, t);
                };
            }
            return function () {
              return new e(this, t);
            };
          },
          w = n + " Iterator",
          E = "values" == v,
          S = !1,
          O = t.prototype,
          T = O[l] || O["@@iterator"] || (v && O[v]),
          A = T || _(v),
          M = v ? (E ? _("entries") : A) : void 0,
          P = ("Array" == n && O.entries) || T;
        if (
          (P &&
            (x = f(P.call(new t()))) !== Object.prototype &&
            x.next &&
            (a(x, w, !0), r || "function" == typeof x[l] || u(x, l, h)),
          E &&
            T &&
            "values" !== T.name &&
            ((S = !0),
            (A = function () {
              return T.call(this);
            })),
          (r && !m) || (!p && !S && O[l]) || u(O, l, A),
          (c[n] = A),
          (c[w] = h),
          v)
        )
          if (
            ((g = {
              values: E ? A : _("values"),
              keys: y ? A : _("keys"),
              entries: M,
            }),
            m)
          )
            for (b in g) b in O || i(O, b, g[b]);
          else o(o.P + o.F * (p || S), n, g);
        return g;
      };
    },
    function (t, n, e) {
      var r = e(64),
        o = e(46);
      t.exports =
        Object.keys ||
        function (t) {
          return r(t, o);
        };
    },
    function (t, n, e) {
      var r = e(24);
      t.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function (t) {
            return "String" == r(t) ? t.split("") : Object(t);
          };
    },
    function (t, n, e) {
      var r = e(25)("keys"),
        o = e(16);
      t.exports = function (t) {
        return r[t] || (r[t] = o(t));
      };
    },
    function (t, n, e) {
      var r = e(7).f,
        o = e(9),
        i = e(0)("toStringTag");
      t.exports = function (t, n, e) {
        t &&
          !o((t = e ? t : t.prototype), i) &&
          r(t, i, { configurable: !0, value: n });
      };
    },
    function (t, n, e) {
      for (
        var r = e(69),
          o = e(30),
          i = e(6),
          u = e(2),
          c = e(11),
          s = e(14),
          a = e(0),
          f = a("iterator"),
          l = a("toStringTag"),
          p = s.Array,
          h = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1,
          },
          d = o(h),
          v = 0;
        v < d.length;
        v++
      ) {
        var y,
          m = d[v],
          g = h[m],
          b = u[m],
          x = b && b.prototype;
        if (x && (x[f] || c(x, f, p), x[l] || c(x, l, m), (s[m] = p), g))
          for (y in r) x[y] || i(x, y, r[y], !0);
      }
    },
    function (t, n, e) {
      var r = e(6);
      t.exports = function (t, n, e) {
        for (var o in n) r(t, o, n[o], e);
        return t;
      };
    },
    function (t, n) {
      t.exports = function (t, n, e, r) {
        if (!(t instanceof n) || (void 0 !== r && r in t))
          throw TypeError(e + ": incorrect invocation!");
        return t;
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(2),
        o = e(5),
        i = e(6),
        u = e(35),
        c = e(21),
        s = e(15),
        a = e(36),
        f = e(1),
        l = e(13),
        p = e(52),
        h = e(33),
        d = e(73);
      t.exports = function (t, n, e, v, y, m) {
        var g = r[t],
          b = g,
          x = y ? "set" : "add",
          _ = b && b.prototype,
          w = {},
          E = function (t) {
            var n = _[t];
            i(
              _,
              t,
              "delete" == t
                ? function (t) {
                    return !(m && !f(t)) && n.call(this, 0 === t ? 0 : t);
                  }
                : "has" == t
                ? function (t) {
                    return !(m && !f(t)) && n.call(this, 0 === t ? 0 : t);
                  }
                : "get" == t
                ? function (t) {
                    return m && !f(t) ? void 0 : n.call(this, 0 === t ? 0 : t);
                  }
                : "add" == t
                ? function (t) {
                    return n.call(this, 0 === t ? 0 : t), this;
                  }
                : function (t, e) {
                    return n.call(this, 0 === t ? 0 : t, e), this;
                  }
            );
          };
        if (
          "function" == typeof b &&
          (m ||
            (_.forEach &&
              !l(function () {
                new b().entries().next();
              })))
        ) {
          var S = new b(),
            O = S[x](m ? {} : -0, 1) != S,
            T = l(function () {
              S.has(1);
            }),
            A = p(function (t) {
              new b(t);
            }),
            M =
              !m &&
              l(function () {
                for (var t = new b(), n = 5; n--; ) t[x](n, n);
                return !t.has(-0);
              });
          A ||
            (((b = n(function (n, e) {
              a(n, b, t);
              var r = d(new g(), n, b);
              return null != e && s(e, y, r[x], r), r;
            })).prototype = _),
            (_.constructor = b)),
            (T || M) && (E("delete"), E("has"), y && E("get")),
            (M || O) && E(x),
            m && _.clear && delete _.clear;
        } else
          (b = v.getConstructor(n, t, y, x)), u(b.prototype, e), (c.NEED = !0);
        return (
          h(b, t),
          (w[t] = b),
          o(o.G + o.W + o.F * (b != g), w),
          m || v.setStrong(b, t, y),
          b
        );
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(5);
      t.exports = function (t) {
        r(r.S, t, {
          of: function () {
            for (var t = arguments.length, n = new Array(t); t--; )
              n[t] = arguments[t];
            return new this(n);
          },
        });
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(5),
        o = e(44),
        i = e(10),
        u = e(15);
      t.exports = function (t) {
        r(r.S, t, {
          from: function (t) {
            var n,
              e,
              r,
              c,
              s = arguments[1];
            return (
              o(this),
              (n = void 0 !== s) && o(s),
              null == t
                ? new this()
                : ((e = []),
                  n
                    ? ((r = 0),
                      (c = i(s, arguments[2], 2)),
                      u(t, !1, function (t) {
                        e.push(c(t, r++));
                      }))
                    : u(t, !1, e.push, e),
                  new this(e))
            );
          },
        });
      };
    },
    function (t, n) {
      t.exports = !1;
    },
    function (t, n, e) {
      t.exports =
        !e(4) &&
        !e(13)(function () {
          return (
            7 !=
            Object.defineProperty(e(42)("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    function (t, n, e) {
      var r = e(1),
        o = e(2).document,
        i = r(o) && r(o.createElement);
      t.exports = function (t) {
        return i ? o.createElement(t) : {};
      };
    },
    function (t, n, e) {
      var r = e(1);
      t.exports = function (t, n) {
        if (!r(t)) return t;
        var e, o;
        if (n && "function" == typeof (e = t.toString) && !r((o = e.call(t))))
          return o;
        if ("function" == typeof (e = t.valueOf) && !r((o = e.call(t))))
          return o;
        if (!n && "function" == typeof (e = t.toString) && !r((o = e.call(t))))
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (t, n) {
      t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
      };
    },
    function (t, n, e) {
      var r = e(8),
        o = e(63),
        i = e(46),
        u = e(32)("IE_PROTO"),
        c = function () {},
        s = function () {
          var t,
            n = e(42)("iframe"),
            r = i.length;
          for (
            n.style.display = "none",
              e(67).appendChild(n),
              n.src = "javascript:",
              (t = n.contentWindow.document).open(),
              t.write("<script>document.F=Object</script>"),
              t.close(),
              s = t.F;
            r--;

          )
            delete s.prototype[i[r]];
          return s();
        };
      t.exports =
        Object.create ||
        function (t, n) {
          var e;
          return (
            null !== t
              ? ((c.prototype = r(t)),
                (e = new c()),
                (c.prototype = null),
                (e[u] = t))
              : (e = s()),
            void 0 === n ? e : o(e, n)
          );
        };
    },
    function (t, n) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
    },
    function (t, n) {
      t.exports = function (t, n) {
        return { value: n, done: !!t };
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(7).f,
        o = e(45),
        i = e(35),
        u = e(10),
        c = e(36),
        s = e(15),
        a = e(29),
        f = e(47),
        l = e(72),
        p = e(4),
        h = e(21).fastKey,
        d = e(12),
        v = p ? "_s" : "size",
        y = function (t, n) {
          var e,
            r = h(n);
          if ("F" !== r) return t._i[r];
          for (e = t._f; e; e = e.n) if (e.k == n) return e;
        };
      t.exports = {
        getConstructor: function (t, n, e, a) {
          var f = t(function (t, r) {
            c(t, f, n, "_i"),
              (t._t = n),
              (t._i = o(null)),
              (t._f = void 0),
              (t._l = void 0),
              (t[v] = 0),
              null != r && s(r, e, t[a], t);
          });
          return (
            i(f.prototype, {
              clear: function () {
                for (var t = d(this, n), e = t._i, r = t._f; r; r = r.n)
                  (r.r = !0), r.p && (r.p = r.p.n = void 0), delete e[r.i];
                (t._f = t._l = void 0), (t[v] = 0);
              },
              delete: function (t) {
                var e = d(this, n),
                  r = y(e, t);
                if (r) {
                  var o = r.n,
                    i = r.p;
                  delete e._i[r.i],
                    (r.r = !0),
                    i && (i.n = o),
                    o && (o.p = i),
                    e._f == r && (e._f = o),
                    e._l == r && (e._l = i),
                    e[v]--;
                }
                return !!r;
              },
              forEach: function (t) {
                d(this, n);
                for (
                  var e,
                    r = u(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (e = e ? e.n : this._f);

                )
                  for (r(e.v, e.k, this); e && e.r; ) e = e.p;
              },
              has: function (t) {
                return !!y(d(this, n), t);
              },
            }),
            p &&
              r(f.prototype, "size", {
                get: function () {
                  return d(this, n)[v];
                },
              }),
            f
          );
        },
        def: function (t, n, e) {
          var r,
            o,
            i = y(t, n);
          return (
            i
              ? (i.v = e)
              : ((t._l = i = {
                  i: (o = h(n, !0)),
                  k: n,
                  v: e,
                  p: (r = t._l),
                  n: void 0,
                  r: !1,
                }),
                t._f || (t._f = i),
                r && (r.n = i),
                t[v]++,
                "F" !== o && (t._i[o] = i)),
            t
          );
        },
        getEntry: y,
        setStrong: function (t, n, e) {
          a(
            t,
            n,
            function (t, e) {
              (this._t = d(t, n)), (this._k = e), (this._l = void 0);
            },
            function () {
              for (var t = this._k, n = this._l; n && n.r; ) n = n.p;
              return this._t && (this._l = n = n ? n.n : this._t._f)
                ? f(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v])
                : ((this._t = void 0), f(1));
            },
            e ? "entries" : "values",
            !e,
            !0
          ),
            l(n);
        },
      };
    },
    function (t, n, e) {
      var r = e(8);
      t.exports = function (t, n, e, o) {
        try {
          return o ? n(r(e)[0], e[1]) : n(e);
        } catch (n) {
          var i = t.return;
          throw (void 0 !== i && r(i.call(t)), n);
        }
      };
    },
    function (t, n, e) {
      var r = e(14),
        o = e(0)("iterator"),
        i = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (r.Array === t || i[o] === t);
      };
    },
    function (t, n, e) {
      var r = e(23),
        o = e(0)("iterator"),
        i = e(14);
      t.exports = e(3).getIteratorMethod = function (t) {
        if (null != t) return t[o] || t["@@iterator"] || i[r(t)];
      };
    },
    function (t, n, e) {
      var r = e(0)("iterator"),
        o = !1;
      try {
        var i = [7][r]();
        (i.return = function () {
          o = !0;
        }),
          Array.from(i, function () {
            throw 2;
          });
      } catch (t) {}
      t.exports = function (t, n) {
        if (!n && !o) return !1;
        var e = !1;
        try {
          var i = [7],
            u = i[r]();
          (u.next = function () {
            return { done: (e = !0) };
          }),
            (i[r] = function () {
              return u;
            }),
            t(i);
        } catch (t) {}
        return e;
      };
    },
    function (t, n) {
      n.f = {}.propertyIsEnumerable;
    },
    function (t, n, e) {
      var r = e(23),
        o = e(77);
      t.exports = function (t) {
        return function () {
          if (r(this) != t) throw TypeError(t + "#toJSON isn't generic");
          return o(this);
        };
      };
    },
    function (t, n, e) {
      var r = e(10),
        o = e(31),
        i = e(20),
        u = e(19),
        c = e(87);
      t.exports = function (t, n) {
        var e = 1 == t,
          s = 2 == t,
          a = 3 == t,
          f = 4 == t,
          l = 6 == t,
          p = 5 == t || l,
          h = n || c;
        return function (n, c, d) {
          for (
            var v,
              y,
              m = i(n),
              g = o(m),
              b = r(c, d, 3),
              x = u(g.length),
              _ = 0,
              w = e ? h(n, x) : s ? h(n, 0) : void 0;
            x > _;
            _++
          )
            if ((p || _ in g) && ((y = b((v = g[_]), _, m)), t))
              if (e) w[_] = y;
              else if (y)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return v;
                  case 6:
                    return _;
                  case 2:
                    w.push(v);
                }
              else if (f) return !1;
          return l ? -1 : a || f ? f : w;
        };
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(4),
        o = e(30),
        i = e(90),
        u = e(53),
        c = e(20),
        s = e(31),
        a = Object.assign;
      t.exports =
        !a ||
        e(13)(function () {
          var t = {},
            n = {},
            e = Symbol(),
            r = "abcdefghijklmnopqrst";
          return (
            (t[e] = 7),
            r.split("").forEach(function (t) {
              n[t] = t;
            }),
            7 != a({}, t)[e] || Object.keys(a({}, n)).join("") != r
          );
        })
          ? function (t, n) {
              for (
                var e = c(t), a = arguments.length, f = 1, l = i.f, p = u.f;
                a > f;

              )
                for (
                  var h,
                    d = s(arguments[f++]),
                    v = l ? o(d).concat(l(d)) : o(d),
                    y = v.length,
                    m = 0;
                  y > m;

                )
                  (h = v[m++]), (r && !p.call(d, h)) || (e[h] = d[h]);
              return e;
            }
          : a;
    },
    function (t, n, e) {
      "use strict";
      (function (t) {
        var e = "object" == typeof t && t && t.Object === Object && t;
        n.a = e;
      }.call(this, e(99)));
    },
    function (t, n, e) {
      t.exports = e(100);
    },
    function (t, n, e) {
      e(22), e(26), e(34), e(71), e(76), e(78), e(79), (t.exports = e(3).Map);
    },
    function (t, n, e) {
      t.exports = e(25)("native-function-to-string", Function.toString);
    },
    function (t, n, e) {
      var r = e(27),
        o = e(28);
      t.exports = function (t) {
        return function (n, e) {
          var i,
            u,
            c = String(o(n)),
            s = r(e),
            a = c.length;
          return s < 0 || s >= a
            ? t
              ? ""
              : void 0
            : (i = c.charCodeAt(s)) < 55296 ||
              i > 56319 ||
              s + 1 === a ||
              (u = c.charCodeAt(s + 1)) < 56320 ||
              u > 57343
            ? t
              ? c.charAt(s)
              : i
            : t
            ? c.slice(s, s + 2)
            : u - 56320 + ((i - 55296) << 10) + 65536;
        };
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(45),
        o = e(17),
        i = e(33),
        u = {};
      e(11)(u, e(0)("iterator"), function () {
        return this;
      }),
        (t.exports = function (t, n, e) {
          (t.prototype = r(u, { next: o(1, e) })), i(t, n + " Iterator");
        });
    },
    function (t, n, e) {
      var r = e(7),
        o = e(8),
        i = e(30);
      t.exports = e(4)
        ? Object.defineProperties
        : function (t, n) {
            o(t);
            for (var e, u = i(n), c = u.length, s = 0; c > s; )
              r.f(t, (e = u[s++]), n[e]);
            return t;
          };
    },
    function (t, n, e) {
      var r = e(9),
        o = e(18),
        i = e(65)(!1),
        u = e(32)("IE_PROTO");
      t.exports = function (t, n) {
        var e,
          c = o(t),
          s = 0,
          a = [];
        for (e in c) e != u && r(c, e) && a.push(e);
        for (; n.length > s; ) r(c, (e = n[s++])) && (~i(a, e) || a.push(e));
        return a;
      };
    },
    function (t, n, e) {
      var r = e(18),
        o = e(19),
        i = e(66);
      t.exports = function (t) {
        return function (n, e, u) {
          var c,
            s = r(n),
            a = o(s.length),
            f = i(u, a);
          if (t && e != e) {
            for (; a > f; ) if ((c = s[f++]) != c) return !0;
          } else
            for (; a > f; f++)
              if ((t || f in s) && s[f] === e) return t || f || 0;
          return !t && -1;
        };
      };
    },
    function (t, n, e) {
      var r = e(27),
        o = Math.max,
        i = Math.min;
      t.exports = function (t, n) {
        return (t = r(t)) < 0 ? o(t + n, 0) : i(t, n);
      };
    },
    function (t, n, e) {
      var r = e(2).document;
      t.exports = r && r.documentElement;
    },
    function (t, n, e) {
      var r = e(9),
        o = e(20),
        i = e(32)("IE_PROTO"),
        u = Object.prototype;
      t.exports =
        Object.getPrototypeOf ||
        function (t) {
          return (
            (t = o(t)),
            r(t, i)
              ? t[i]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? u
              : null
          );
        };
    },
    function (t, n, e) {
      "use strict";
      var r = e(70),
        o = e(47),
        i = e(14),
        u = e(18);
      (t.exports = e(29)(
        Array,
        "Array",
        function (t, n) {
          (this._t = u(t)), (this._i = 0), (this._k = n);
        },
        function () {
          var t = this._t,
            n = this._k,
            e = this._i++;
          return !t || e >= t.length
            ? ((this._t = void 0), o(1))
            : o(0, "keys" == n ? e : "values" == n ? t[e] : [e, t[e]]);
        },
        "values"
      )),
        (i.Arguments = i.Array),
        r("keys"),
        r("values"),
        r("entries");
    },
    function (t, n, e) {
      var r = e(0)("unscopables"),
        o = Array.prototype;
      null == o[r] && e(11)(o, r, {}),
        (t.exports = function (t) {
          o[r][t] = !0;
        });
    },
    function (t, n, e) {
      "use strict";
      var r = e(48),
        o = e(12);
      t.exports = e(37)(
        "Map",
        function (t) {
          return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          get: function (t) {
            var n = r.getEntry(o(this, "Map"), t);
            return n && n.v;
          },
          set: function (t, n) {
            return r.def(o(this, "Map"), 0 === t ? 0 : t, n);
          },
        },
        r,
        !0
      );
    },
    function (t, n, e) {
      "use strict";
      var r = e(2),
        o = e(7),
        i = e(4),
        u = e(0)("species");
      t.exports = function (t) {
        var n = r[t];
        i &&
          n &&
          !n[u] &&
          o.f(n, u, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    function (t, n, e) {
      var r = e(1),
        o = e(74).set;
      t.exports = function (t, n, e) {
        var i,
          u = n.constructor;
        return (
          u !== e &&
            "function" == typeof u &&
            (i = u.prototype) !== e.prototype &&
            r(i) &&
            o &&
            o(t, i),
          t
        );
      };
    },
    function (t, n, e) {
      var r = e(1),
        o = e(8),
        i = function (t, n) {
          if ((o(t), !r(n) && null !== n))
            throw TypeError(n + ": can't set as prototype!");
        };
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function (t, n, r) {
                try {
                  (r = e(10)(
                    Function.call,
                    e(75).f(Object.prototype, "__proto__").set,
                    2
                  ))(t, []),
                    (n = !(t instanceof Array));
                } catch (t) {
                  n = !0;
                }
                return function (t, e) {
                  return i(t, e), n ? (t.__proto__ = e) : r(t, e), t;
                };
              })({}, !1)
            : void 0),
        check: i,
      };
    },
    function (t, n, e) {
      var r = e(53),
        o = e(17),
        i = e(18),
        u = e(43),
        c = e(9),
        s = e(41),
        a = Object.getOwnPropertyDescriptor;
      n.f = e(4)
        ? a
        : function (t, n) {
            if (((t = i(t)), (n = u(n, !0)), s))
              try {
                return a(t, n);
              } catch (t) {}
            if (c(t, n)) return o(!r.f.call(t, n), t[n]);
          };
    },
    function (t, n, e) {
      var r = e(5);
      r(r.P + r.R, "Map", { toJSON: e(54)("Map") });
    },
    function (t, n, e) {
      var r = e(15);
      t.exports = function (t, n) {
        var e = [];
        return r(t, !1, e.push, e, n), e;
      };
    },
    function (t, n, e) {
      e(38)("Map");
    },
    function (t, n, e) {
      e(39)("Map");
    },
    function (t, n, e) {
      e(22), e(26), e(34), e(81), e(82), e(83), e(84), (t.exports = e(3).Set);
    },
    function (t, n, e) {
      "use strict";
      var r = e(48),
        o = e(12);
      t.exports = e(37)(
        "Set",
        function (t) {
          return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          add: function (t) {
            return r.def(o(this, "Set"), (t = 0 === t ? 0 : t), t);
          },
        },
        r
      );
    },
    function (t, n, e) {
      var r = e(5);
      r(r.P + r.R, "Set", { toJSON: e(54)("Set") });
    },
    function (t, n, e) {
      e(38)("Set");
    },
    function (t, n, e) {
      e(39)("Set");
    },
    function (t, n, e) {
      e(22), e(34), e(86), e(92), e(93), (t.exports = e(3).WeakMap);
    },
    function (t, n, e) {
      "use strict";
      var r,
        o = e(2),
        i = e(55)(0),
        u = e(6),
        c = e(21),
        s = e(56),
        a = e(91),
        f = e(1),
        l = e(12),
        p = e(12),
        h = !o.ActiveXObject && "ActiveXObject" in o,
        d = c.getWeak,
        v = Object.isExtensible,
        y = a.ufstore,
        m = function (t) {
          return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        g = {
          get: function (t) {
            if (f(t)) {
              var n = d(t);
              return !0 === n
                ? y(l(this, "WeakMap")).get(t)
                : n
                ? n[this._i]
                : void 0;
            }
          },
          set: function (t, n) {
            return a.def(l(this, "WeakMap"), t, n);
          },
        },
        b = (t.exports = e(37)("WeakMap", m, g, a, !0, !0));
      p &&
        h &&
        (s((r = a.getConstructor(m, "WeakMap")).prototype, g),
        (c.NEED = !0),
        i(["delete", "has", "get", "set"], function (t) {
          var n = b.prototype,
            e = n[t];
          u(n, t, function (n, o) {
            if (f(n) && !v(n)) {
              this._f || (this._f = new r());
              var i = this._f[t](n, o);
              return "set" == t ? this : i;
            }
            return e.call(this, n, o);
          });
        }));
    },
    function (t, n, e) {
      var r = e(88);
      t.exports = function (t, n) {
        return new (r(t))(n);
      };
    },
    function (t, n, e) {
      var r = e(1),
        o = e(89),
        i = e(0)("species");
      t.exports = function (t) {
        var n;
        return (
          o(t) &&
            ("function" != typeof (n = t.constructor) ||
              (n !== Array && !o(n.prototype)) ||
              (n = void 0),
            r(n) && null === (n = n[i]) && (n = void 0)),
          void 0 === n ? Array : n
        );
      };
    },
    function (t, n, e) {
      var r = e(24);
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" == r(t);
        };
    },
    function (t, n) {
      n.f = Object.getOwnPropertySymbols;
    },
    function (t, n, e) {
      "use strict";
      var r = e(35),
        o = e(21).getWeak,
        i = e(8),
        u = e(1),
        c = e(36),
        s = e(15),
        a = e(55),
        f = e(9),
        l = e(12),
        p = a(5),
        h = a(6),
        d = 0,
        v = function (t) {
          return t._l || (t._l = new y());
        },
        y = function () {
          this.a = [];
        },
        m = function (t, n) {
          return p(t.a, function (t) {
            return t[0] === n;
          });
        };
      (y.prototype = {
        get: function (t) {
          var n = m(this, t);
          if (n) return n[1];
        },
        has: function (t) {
          return !!m(this, t);
        },
        set: function (t, n) {
          var e = m(this, t);
          e ? (e[1] = n) : this.a.push([t, n]);
        },
        delete: function (t) {
          var n = h(this.a, function (n) {
            return n[0] === t;
          });
          return ~n && this.a.splice(n, 1), !!~n;
        },
      }),
        (t.exports = {
          getConstructor: function (t, n, e, i) {
            var a = t(function (t, r) {
              c(t, a, n, "_i"),
                (t._t = n),
                (t._i = d++),
                (t._l = void 0),
                null != r && s(r, e, t[i], t);
            });
            return (
              r(a.prototype, {
                delete: function (t) {
                  if (!u(t)) return !1;
                  var e = o(t);
                  return !0 === e
                    ? v(l(this, n)).delete(t)
                    : e && f(e, this._i) && delete e[this._i];
                },
                has: function (t) {
                  if (!u(t)) return !1;
                  var e = o(t);
                  return !0 === e ? v(l(this, n)).has(t) : e && f(e, this._i);
                },
              }),
              a
            );
          },
          def: function (t, n, e) {
            var r = o(i(n), !0);
            return !0 === r ? v(t).set(n, e) : (r[t._i] = e), t;
          },
          ufstore: v,
        });
    },
    function (t, n, e) {
      e(38)("WeakMap");
    },
    function (t, n, e) {
      e(39)("WeakMap");
    },
    function (t, n, e) {
      e(26), e(95), (t.exports = e(3).Array.from);
    },
    function (t, n, e) {
      "use strict";
      var r = e(10),
        o = e(5),
        i = e(20),
        u = e(49),
        c = e(50),
        s = e(19),
        a = e(96),
        f = e(51);
      o(
        o.S +
          o.F *
            !e(52)(function (t) {
              Array.from(t);
            }),
        "Array",
        {
          from: function (t) {
            var n,
              e,
              o,
              l,
              p = i(t),
              h = "function" == typeof this ? this : Array,
              d = arguments.length,
              v = d > 1 ? arguments[1] : void 0,
              y = void 0 !== v,
              m = 0,
              g = f(p);
            if (
              (y && (v = r(v, d > 2 ? arguments[2] : void 0, 2)),
              null == g || (h == Array && c(g)))
            )
              for (e = new h((n = s(p.length))); n > m; m++)
                a(e, m, y ? v(p[m], m) : p[m]);
            else
              for (l = g.call(p), e = new h(); !(o = l.next()).done; m++)
                a(e, m, y ? u(l, v, [o.value, m], !0) : o.value);
            return (e.length = m), e;
          },
        }
      );
    },
    function (t, n, e) {
      "use strict";
      var r = e(7),
        o = e(17);
      t.exports = function (t, n, e) {
        n in t ? r.f(t, n, o(0, e)) : (t[n] = e);
      };
    },
    function (t, n, e) {
      e(98), (t.exports = e(3).Object.assign);
    },
    function (t, n, e) {
      var r = e(5);
      r(r.S + r.F, "Object", { assign: e(56) });
    },
    function (t, n) {
      var e;
      e = (function () {
        return this;
      })();
      try {
        e = e || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (e = window);
      }
      t.exports = e;
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      var r = {};
      e.r(r),
        e.d(r, "keyboardHandler", function () {
          return et;
        }),
        e.d(r, "mouseHandler", function () {
          return rt;
        }),
        e.d(r, "resizeHandler", function () {
          return ot;
        }),
        e.d(r, "selectHandler", function () {
          return it;
        }),
        e.d(r, "touchHandler", function () {
          return ut;
        }),
        e.d(r, "wheelHandler", function () {
          return ct;
        });
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
      var o = function (t, n) {
          return (o =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, n) {
                t.__proto__ = n;
              }) ||
            function (t, n) {
              for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
            })(t, n);
        },
        i = function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var n, e = 1, r = arguments.length; e < r; e++)
                for (var o in (n = arguments[e]))
                  Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
              return t;
            }).apply(this, arguments);
        };
      function u(t, n, e, r) {
        var o,
          i = arguments.length,
          u =
            i < 3
              ? n
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(n, e))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          u = Reflect.decorate(t, n, e, r);
        else
          for (var c = t.length - 1; c >= 0; c--)
            (o = t[c]) &&
              (u = (i < 3 ? o(u) : i > 3 ? o(n, e, u) : o(n, e)) || u);
        return i > 3 && u && Object.defineProperty(n, e, u), u;
      }
      e(59), e(80), e(85), e(94), e(97);
      var c = function (t) {
          var n = typeof t;
          return null != t && ("object" == n || "function" == n);
        },
        s = e(57),
        a = "object" == typeof self && self && self.Object === Object && self,
        f = s.a || a || Function("return this")(),
        l = f.Symbol,
        p = Object.prototype,
        h = p.hasOwnProperty,
        d = p.toString,
        v = l ? l.toStringTag : void 0,
        y = Object.prototype.toString,
        m = l ? l.toStringTag : void 0,
        g = function (t) {
          return null == t
            ? void 0 === t
              ? "[object Undefined]"
              : "[object Null]"
            : m && m in Object(t)
            ? (function (t) {
                var n = h.call(t, v),
                  e = t[v];
                try {
                  t[v] = void 0;
                  var r = !0;
                } catch (t) {}
                var o = d.call(t);
                return r && (n ? (t[v] = e) : delete t[v]), o;
              })(t)
            : (function (t) {
                return y.call(t);
              })(t);
        },
        b = /^\s+|\s+$/g,
        x = /^[-+]0x[0-9a-f]+$/i,
        _ = /^0b[01]+$/i,
        w = /^0o[0-7]+$/i,
        E = parseInt,
        S = function (t) {
          if ("number" == typeof t) return t;
          if (
            (function (t) {
              return (
                "symbol" == typeof t ||
                ((function (t) {
                  return null != t && "object" == typeof t;
                })(t) &&
                  "[object Symbol]" == g(t))
              );
            })(t)
          )
            return NaN;
          if (c(t)) {
            var n = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = c(n) ? n + "" : n;
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = t.replace(b, "");
          var e = _.test(t);
          return e || w.test(t)
            ? E(t.slice(2), e ? 2 : 8)
            : x.test(t)
            ? NaN
            : +t;
        },
        O = function (t, n, e) {
          return (
            void 0 === e && ((e = n), (n = void 0)),
            void 0 !== e && (e = (e = S(e)) == e ? e : 0),
            void 0 !== n && (n = (n = S(n)) == n ? n : 0),
            (function (t, n, e) {
              return (
                t == t &&
                  (void 0 !== e && (t = t <= e ? t : e),
                  void 0 !== n && (t = t >= n ? t : n)),
                t
              );
            })(S(t), n, e)
          );
        };
      function T(t, n) {
        return (
          void 0 === t && (t = -1 / 0),
          void 0 === n && (n = 1 / 0),
          function (e, r) {
            var o = "_" + r;
            Object.defineProperty(e, r, {
              get: function () {
                return this[o];
              },
              set: function (e) {
                Object.defineProperty(this, o, {
                  value: O(e, t, n),
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                });
              },
              enumerable: !0,
              configurable: !0,
            });
          }
        );
      }
      function A(t, n) {
        var e = "_" + n;
        Object.defineProperty(t, n, {
          get: function () {
            return this[e];
          },
          set: function (t) {
            Object.defineProperty(this, e, {
              value: !!t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            });
          },
          enumerable: !0,
          configurable: !0,
        });
      }
      var M = function () {
          return f.Date.now();
        },
        P = Math.max,
        j = Math.min,
        k = function (t, n, e) {
          var r,
            o,
            i,
            u,
            s,
            a,
            f = 0,
            l = !1,
            p = !1,
            h = !0;
          if ("function" != typeof t)
            throw new TypeError("Expected a function");
          function d(n) {
            var e = r,
              i = o;
            return (r = o = void 0), (f = n), (u = t.apply(i, e));
          }
          function v(t) {
            var e = t - a;
            return void 0 === a || e >= n || e < 0 || (p && t - f >= i);
          }
          function y() {
            var t = M();
            if (v(t)) return m(t);
            s = setTimeout(
              y,
              (function (t) {
                var e = n - (t - a);
                return p ? j(e, i - (t - f)) : e;
              })(t)
            );
          }
          function m(t) {
            return (s = void 0), h && r ? d(t) : ((r = o = void 0), u);
          }
          function g() {
            var t = M(),
              e = v(t);
            if (((r = arguments), (o = this), (a = t), e)) {
              if (void 0 === s)
                return (function (t) {
                  return (f = t), (s = setTimeout(y, n)), l ? d(t) : u;
                })(a);
              if (p) return clearTimeout(s), (s = setTimeout(y, n)), d(a);
            }
            return void 0 === s && (s = setTimeout(y, n)), u;
          }
          return (
            (n = S(n) || 0),
            c(e) &&
              ((l = !!e.leading),
              (i = (p = "maxWait" in e) ? P(S(e.maxWait) || 0, n) : i),
              (h = "trailing" in e ? !!e.trailing : h)),
            (g.cancel = function () {
              void 0 !== s && clearTimeout(s),
                (f = 0),
                (r = a = o = s = void 0);
            }),
            (g.flush = function () {
              return void 0 === s ? u : m(M());
            }),
            g
          );
        };
      function D() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return function (n, e, r) {
          var o = r.value;
          return {
            get: function () {
              return (
                this.hasOwnProperty(e) ||
                  Object.defineProperty(this, e, {
                    value: k.apply(
                      void 0,
                      (function () {
                        for (var t = 0, n = 0, e = arguments.length; n < e; n++)
                          t += arguments[n].length;
                        var r = Array(t),
                          o = 0;
                        for (n = 0; n < e; n++)
                          for (
                            var i = arguments[n], u = 0, c = i.length;
                            u < c;
                            u++, o++
                          )
                            r[o] = i[u];
                        return r;
                      })([o], t)
                    ),
                  }),
                this[e]
              );
            },
          };
        };
      }
      var L,
        N = (function () {
          function t(t) {
            var n = this;
            void 0 === t && (t = {}),
              (this.damping = 0.1),
              (this.thumbMinSize = 20),
              (this.renderByPixels = !0),
              (this.alwaysShowTracks = !1),
              (this.continuousScrolling = !0),
              (this.delegateTo = null),
              (this.plugins = {}),
              Object.keys(t).forEach(function (e) {
                n[e] = t[e];
              });
          }
          return (
            Object.defineProperty(t.prototype, "wheelEventTarget", {
              get: function () {
                return this.delegateTo;
              },
              set: function (t) {
                console.warn(
                  "[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."
                ),
                  (this.delegateTo = t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            u([T(0, 1)], t.prototype, "damping", void 0),
            u([T(0, 1 / 0)], t.prototype, "thumbMinSize", void 0),
            u([A], t.prototype, "renderByPixels", void 0),
            u([A], t.prototype, "alwaysShowTracks", void 0),
            u([A], t.prototype, "continuousScrolling", void 0),
            t
          );
        })(),
        z = new WeakMap();
      function C() {
        if (void 0 !== L) return L;
        var t = !1;
        try {
          var n = function () {},
            e = Object.defineProperty({}, "passive", {
              get: function () {
                t = !0;
              },
            });
          window.addEventListener("testPassive", n, e),
            window.removeEventListener("testPassive", n, e);
        } catch (t) {}
        return (L = !!t && { passive: !1 });
      }
      function R(t) {
        var n = z.get(t) || [];
        return (
          z.set(t, n),
          function (t, e, r) {
            function o(t) {
              t.defaultPrevented || r(t);
            }
            e.split(/\s+/g).forEach(function (e) {
              n.push({ elem: t, eventName: e, handler: o }),
                t.addEventListener(e, o, C());
            });
          }
        );
      }
      function F(t) {
        var n = (function (t) {
          return t.touches ? t.touches[t.touches.length - 1] : t;
        })(t);
        return { x: n.clientX, y: n.clientY };
      }
      function I(t, n) {
        return (
          void 0 === n && (n = []),
          n.some(function (n) {
            return t === n;
          })
        );
      }
      var W = ["webkit", "moz", "ms", "o"],
        H = new RegExp("^-(?!(?:" + W.join("|") + ")-)");
      function B(t, n) {
        (n = (function (t) {
          var n = {};
          return (
            Object.keys(t).forEach(function (e) {
              if (H.test(e)) {
                var r = t[e];
                (e = e.replace(/^-/, "")),
                  (n[e] = r),
                  W.forEach(function (t) {
                    n["-" + t + "-" + e] = r;
                  });
              } else n[e] = t[e];
            }),
            n
          );
        })(n)),
          Object.keys(n).forEach(function (e) {
            var r = e.replace(/^-/, "").replace(/-([a-z])/g, function (t, n) {
              return n.toUpperCase();
            });
            t.style[r] = n[e];
          });
      }
      var G,
        X = (function () {
          function t(t) {
            (this.updateTime = Date.now()),
              (this.delta = { x: 0, y: 0 }),
              (this.velocity = { x: 0, y: 0 }),
              (this.lastPosition = { x: 0, y: 0 }),
              (this.lastPosition = F(t));
          }
          return (
            (t.prototype.update = function (t) {
              var n = this.velocity,
                e = this.updateTime,
                r = this.lastPosition,
                o = Date.now(),
                i = F(t),
                u = { x: -(i.x - r.x), y: -(i.y - r.y) },
                c = o - e || 16,
                s = (u.x / c) * 16,
                a = (u.y / c) * 16;
              (n.x = 0.9 * s + 0.1 * n.x),
                (n.y = 0.9 * a + 0.1 * n.y),
                (this.delta = u),
                (this.updateTime = o),
                (this.lastPosition = i);
            }),
            t
          );
        })(),
        V = (function () {
          function t() {
            this._touchList = {};
          }
          return (
            Object.defineProperty(t.prototype, "_primitiveValue", {
              get: function () {
                return { x: 0, y: 0 };
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.isActive = function () {
              return void 0 !== this._activeTouchID;
            }),
            (t.prototype.getDelta = function () {
              var t = this._getActiveTracker();
              return t ? i({}, t.delta) : this._primitiveValue;
            }),
            (t.prototype.getVelocity = function () {
              var t = this._getActiveTracker();
              return t ? i({}, t.velocity) : this._primitiveValue;
            }),
            (t.prototype.track = function (t) {
              var n = this,
                e = t.targetTouches;
              return (
                Array.from(e).forEach(function (t) {
                  n._add(t);
                }),
                this._touchList
              );
            }),
            (t.prototype.update = function (t) {
              var n = this,
                e = t.touches,
                r = t.changedTouches;
              return (
                Array.from(e).forEach(function (t) {
                  n._renew(t);
                }),
                this._setActiveID(r),
                this._touchList
              );
            }),
            (t.prototype.release = function (t) {
              var n = this;
              delete this._activeTouchID,
                Array.from(t.changedTouches).forEach(function (t) {
                  n._delete(t);
                });
            }),
            (t.prototype._add = function (t) {
              if (!this._has(t)) {
                var n = new X(t);
                this._touchList[t.identifier] = n;
              }
            }),
            (t.prototype._renew = function (t) {
              this._has(t) && this._touchList[t.identifier].update(t);
            }),
            (t.prototype._delete = function (t) {
              delete this._touchList[t.identifier];
            }),
            (t.prototype._has = function (t) {
              return this._touchList.hasOwnProperty(t.identifier);
            }),
            (t.prototype._setActiveID = function (t) {
              this._activeTouchID = t[t.length - 1].identifier;
            }),
            (t.prototype._getActiveTracker = function () {
              return this._touchList[this._activeTouchID];
            }),
            t
          );
        })();
      !(function (t) {
        (t.X = "x"), (t.Y = "y");
      })(G || (G = {}));
      var U = (function () {
          function t(t, n) {
            void 0 === n && (n = 0),
              (this._direction = t),
              (this._minSize = n),
              (this.element = document.createElement("div")),
              (this.displaySize = 0),
              (this.realSize = 0),
              (this.offset = 0),
              (this.element.className = "scrollbar-thumb scrollbar-thumb-" + t);
          }
          return (
            (t.prototype.attachTo = function (t) {
              t.appendChild(this.element);
            }),
            (t.prototype.update = function (t, n, e) {
              (this.realSize = Math.min(n / e, 1) * n),
                (this.displaySize = Math.max(this.realSize, this._minSize)),
                (this.offset =
                  (t / e) * (n + (this.realSize - this.displaySize))),
                B(this.element, this._getStyle());
            }),
            (t.prototype._getStyle = function () {
              switch (this._direction) {
                case G.X:
                  return {
                    width: this.displaySize + "px",
                    "-transform": "translate3d(" + this.offset + "px, 0, 0)",
                  };
                case G.Y:
                  return {
                    height: this.displaySize + "px",
                    "-transform": "translate3d(0, " + this.offset + "px, 0)",
                  };
                default:
                  return null;
              }
            }),
            t
          );
        })(),
        Y = (function () {
          function t(t, n) {
            void 0 === n && (n = 0),
              (this.element = document.createElement("div")),
              (this._isShown = !1),
              (this.element.className = "scrollbar-track scrollbar-track-" + t),
              (this.thumb = new U(t, n)),
              this.thumb.attachTo(this.element);
          }
          return (
            (t.prototype.attachTo = function (t) {
              t.appendChild(this.element);
            }),
            (t.prototype.show = function () {
              this._isShown ||
                ((this._isShown = !0), this.element.classList.add("show"));
            }),
            (t.prototype.hide = function () {
              this._isShown &&
                ((this._isShown = !1), this.element.classList.remove("show"));
            }),
            (t.prototype.update = function (t, n, e) {
              B(this.element, { display: e <= n ? "none" : "block" }),
                this.thumb.update(t, n, e);
            }),
            t
          );
        })(),
        q = (function () {
          function t(t) {
            this._scrollbar = t;
            var n = t.options.thumbMinSize;
            (this.xAxis = new Y(G.X, n)),
              (this.yAxis = new Y(G.Y, n)),
              this.xAxis.attachTo(t.containerEl),
              this.yAxis.attachTo(t.containerEl),
              t.options.alwaysShowTracks &&
                (this.xAxis.show(), this.yAxis.show());
          }
          return (
            (t.prototype.update = function () {
              var t = this._scrollbar,
                n = t.size,
                e = t.offset;
              this.xAxis.update(e.x, n.container.width, n.content.width),
                this.yAxis.update(e.y, n.container.height, n.content.height);
            }),
            (t.prototype.autoHideOnIdle = function () {
              this._scrollbar.options.alwaysShowTracks ||
                (this.xAxis.hide(), this.yAxis.hide());
            }),
            u([D(300)], t.prototype, "autoHideOnIdle", null),
            t
          );
        })(),
        K = new WeakMap();
      function $(t) {
        return Math.pow(t - 1, 3) + 1;
      }
      var J,
        Q,
        Z,
        tt = (function () {
          function t(t, n) {
            var e = this.constructor;
            (this.scrollbar = t),
              (this.name = e.pluginName),
              (this.options = i(i({}, e.defaultOptions), n));
          }
          return (
            (t.prototype.onInit = function () {}),
            (t.prototype.onDestroy = function () {}),
            (t.prototype.onUpdate = function () {}),
            (t.prototype.onRender = function (t) {}),
            (t.prototype.transformDelta = function (t, n) {
              return i({}, t);
            }),
            (t.pluginName = ""),
            (t.defaultOptions = {}),
            t
          );
        })(),
        nt = { order: new Set(), constructors: {} };
      function et(t) {
        var n = R(t),
          e = t.containerEl;
        n(e, "keydown", function (n) {
          var r = document.activeElement;
          if (
            (r === e || e.contains(r)) &&
            !(function (t) {
              return (
                !(
                  "INPUT" !== t.tagName &&
                  "SELECT" !== t.tagName &&
                  "TEXTAREA" !== t.tagName &&
                  !t.isContentEditable
                ) && !t.disabled
              );
            })(r)
          ) {
            var o = (function (t, n) {
              var e = t.size,
                r = t.limit,
                o = t.offset;
              switch (n) {
                case J.TAB:
                  return (function (t) {
                    requestAnimationFrame(function () {
                      t.scrollIntoView(document.activeElement, {
                        offsetTop: t.size.container.height / 2,
                        onlyScrollIfNeeded: !0,
                      });
                    });
                  })(t);
                case J.SPACE:
                  return [0, 200];
                case J.PAGE_UP:
                  return [0, 40 - e.container.height];
                case J.PAGE_DOWN:
                  return [0, e.container.height - 40];
                case J.END:
                  return [0, r.y - o.y];
                case J.HOME:
                  return [0, -o.y];
                case J.LEFT:
                  return [-40, 0];
                case J.UP:
                  return [0, -40];
                case J.RIGHT:
                  return [40, 0];
                case J.DOWN:
                  return [0, 40];
                default:
                  return null;
              }
            })(t, n.keyCode || n.which);
            if (o) {
              var i = o[0],
                u = o[1];
              t.addTransformableMomentum(i, u, n, function (e) {
                e
                  ? n.preventDefault()
                  : (t.containerEl.blur(),
                    t.parent && t.parent.containerEl.focus());
              });
            }
          }
        });
      }
      function rt(t) {
        var n,
          e,
          r,
          o,
          i,
          u = R(t),
          c = t.containerEl,
          s = t.track,
          a = s.xAxis,
          f = s.yAxis;
        function l(n, e) {
          var r = t.size;
          return n === Q.X
            ? (e /
                (r.container.width +
                  (a.thumb.realSize - a.thumb.displaySize))) *
                r.content.width
            : n === Q.Y
            ? (e /
                (r.container.height +
                  (f.thumb.realSize - f.thumb.displaySize))) *
              r.content.height
            : 0;
        }
        function p(t) {
          return I(t, [a.element, a.thumb.element])
            ? Q.X
            : I(t, [f.element, f.thumb.element])
            ? Q.Y
            : void 0;
        }
        u(c, "click", function (n) {
          if (!e && I(n.target, [a.element, f.element])) {
            var r = n.target,
              o = p(r),
              i = r.getBoundingClientRect(),
              u = F(n),
              c = t.offset,
              s = t.limit;
            if (o === Q.X) {
              var h = u.x - i.left - a.thumb.displaySize / 2;
              t.setMomentum(O(l(o, h) - c.x, -c.x, s.x - c.x), 0);
            }
            o === Q.Y &&
              ((h = u.y - i.top - f.thumb.displaySize / 2),
              t.setMomentum(0, O(l(o, h) - c.y, -c.y, s.y - c.y)));
          }
        }),
          u(c, "mousedown", function (e) {
            if (I(e.target, [a.thumb.element, f.thumb.element])) {
              n = !0;
              var u = e.target,
                s = F(e),
                l = u.getBoundingClientRect();
              (o = p(u)),
                (r = { x: s.x - l.left, y: s.y - l.top }),
                (i = c.getBoundingClientRect()),
                B(t.containerEl, { "-user-select": "none" });
            }
          }),
          u(window, "mousemove", function (u) {
            if (n) {
              e = !0;
              var c = t.offset,
                s = F(u);
              if (o === Q.X) {
                var a = s.x - r.x - i.left;
                t.setPosition(l(o, a), c.y);
              }
              o === Q.Y &&
                ((a = s.y - r.y - i.top), t.setPosition(c.x, l(o, a)));
            }
          }),
          u(window, "mouseup blur", function () {
            (n = e = !1), B(t.containerEl, { "-user-select": "" });
          });
      }
      function ot(t) {
        R(t)(window, "resize", k(t.update.bind(t), 300));
      }
      function it(t) {
        var n,
          e = R(t),
          r = t.containerEl,
          o = t.contentEl,
          i = t.offset,
          u = t.limit,
          c = !1;
        e(window, "mousemove", function (e) {
          c &&
            (cancelAnimationFrame(n),
            (function e(r) {
              var o = r.x,
                c = r.y;
              (o || c) &&
                (t.setMomentum(
                  O(i.x + o, 0, u.x) - i.x,
                  O(i.y + c, 0, u.y) - i.y
                ),
                (n = requestAnimationFrame(function () {
                  e({ x: o, y: c });
                })));
            })(
              (function (t, n) {
                var e = t.bounding,
                  r = e.top,
                  o = e.right,
                  i = e.bottom,
                  u = e.left,
                  c = F(n),
                  s = c.x,
                  a = c.y,
                  f = { x: 0, y: 0 };
                return 0 === s && 0 === a
                  ? f
                  : (s > o - 20
                      ? (f.x = s - o + 20)
                      : s < u + 20 && (f.x = s - u - 20),
                    a > i - 20
                      ? (f.y = a - i + 20)
                      : a < r + 20 && (f.y = a - r - 20),
                    (f.x *= 2),
                    (f.y *= 2),
                    f);
              })(t, e)
            ));
        }),
          e(o, "selectstart", function (t) {
            t.stopPropagation(), cancelAnimationFrame(n), (c = !0);
          }),
          e(window, "mouseup blur", function () {
            cancelAnimationFrame(n), (c = !1);
          }),
          e(r, "scroll", function (t) {
            t.preventDefault(), (r.scrollTop = r.scrollLeft = 0);
          });
      }
      function ut(t) {
        var n,
          e = /Android/.test(navigator.userAgent) ? 3 : 2,
          r = t.options.delegateTo || t.containerEl,
          o = new V(),
          i = R(t),
          u = 0;
        i(r, "touchstart", function (e) {
          o.track(e),
            t.setMomentum(0, 0),
            0 === u &&
              ((n = t.options.damping), (t.options.damping = Math.max(n, 0.5))),
            u++;
        }),
          i(r, "touchmove", function (n) {
            if (!Z || Z === t) {
              o.update(n);
              var e = o.getDelta(),
                r = e.x,
                i = e.y;
              t.addTransformableMomentum(r, i, n, function (e) {
                e && (n.preventDefault(), (Z = t));
              });
            }
          }),
          i(r, "touchcancel touchend", function (r) {
            var i = o.getVelocity(),
              c = { x: 0, y: 0 };
            Object.keys(i).forEach(function (t) {
              var r = i[t] / n;
              c[t] = Math.abs(r) < 50 ? 0 : r * e;
            }),
              t.addTransformableMomentum(c.x, c.y, r),
              0 == --u && (t.options.damping = n),
              o.release(r),
              (Z = null);
          });
      }
      function ct(t) {
        R(t)(
          t.options.delegateTo || t.containerEl,
          "onwheel" in window ||
            document.implementation.hasFeature("Events.wheel", "3.0")
            ? "wheel"
            : "mousewheel",
          function (n) {
            var e = (function (t) {
                if ("deltaX" in t) {
                  var n = ft(t.deltaMode);
                  return {
                    x: (t.deltaX / st.STANDARD) * n,
                    y: (t.deltaY / st.STANDARD) * n,
                  };
                }
                return "wheelDeltaX" in t
                  ? {
                      x: t.wheelDeltaX / st.OTHERS,
                      y: t.wheelDeltaY / st.OTHERS,
                    }
                  : { x: 0, y: t.wheelDelta / st.OTHERS };
              })(n),
              r = e.x,
              o = e.y;
            t.addTransformableMomentum(r, o, n, function (t) {
              t && n.preventDefault();
            });
          }
        );
      }
      !(function (t) {
        (t[(t.TAB = 9)] = "TAB"),
          (t[(t.SPACE = 32)] = "SPACE"),
          (t[(t.PAGE_UP = 33)] = "PAGE_UP"),
          (t[(t.PAGE_DOWN = 34)] = "PAGE_DOWN"),
          (t[(t.END = 35)] = "END"),
          (t[(t.HOME = 36)] = "HOME"),
          (t[(t.LEFT = 37)] = "LEFT"),
          (t[(t.UP = 38)] = "UP"),
          (t[(t.RIGHT = 39)] = "RIGHT"),
          (t[(t.DOWN = 40)] = "DOWN");
      })(J || (J = {})),
        (function (t) {
          (t[(t.X = 0)] = "X"), (t[(t.Y = 1)] = "Y");
        })(Q || (Q = {}));
      var st = { STANDARD: 1, OTHERS: -3 },
        at = [1, 28, 500],
        ft = function (t) {
          return at[t] || at[0];
        },
        lt = new Map(),
        pt = (function () {
          function t(t, n) {
            var e = this;
            (this.offset = { x: 0, y: 0 }),
              (this.limit = { x: 1 / 0, y: 1 / 0 }),
              (this.bounding = { top: 0, right: 0, bottom: 0, left: 0 }),
              (this._plugins = []),
              (this._momentum = { x: 0, y: 0 }),
              (this._listeners = new Set()),
              (this.containerEl = t);
            var r = (this.contentEl = document.createElement("div"));
            (this.options = new N(n)),
              t.setAttribute("data-scrollbar", "true"),
              t.setAttribute("tabindex", "-1"),
              B(t, { overflow: "hidden", outline: "none" }),
              window.navigator.msPointerEnabled &&
                (t.style.msTouchAction = "none"),
              (r.className = "scroll-content"),
              Array.from(t.childNodes).forEach(function (t) {
                r.appendChild(t);
              }),
              t.appendChild(r),
              (this.track = new q(this)),
              (this.size = this.getSize()),
              (this._plugins = (function (t, n) {
                return Array.from(nt.order)
                  .filter(function (t) {
                    return !1 !== n[t];
                  })
                  .map(function (e) {
                    var r = new (0, nt.constructors[e])(t, n[e]);
                    return (n[e] = r.options), r;
                  });
              })(this, this.options.plugins));
            var o = t.scrollLeft,
              i = t.scrollTop;
            (t.scrollLeft = t.scrollTop = 0),
              this.setPosition(o, i, { withoutCallbacks: !0 });
            var u = window,
              c =
                u.MutationObserver ||
                u.WebKitMutationObserver ||
                u.MozMutationObserver;
            "function" == typeof c &&
              ((this._observer = new c(function () {
                e.update();
              })),
              this._observer.observe(r, { subtree: !0, childList: !0 })),
              lt.set(t, this),
              requestAnimationFrame(function () {
                e._init();
              });
          }
          return (
            Object.defineProperty(t.prototype, "parent", {
              get: function () {
                for (var t = this.containerEl.parentElement; t; ) {
                  var n = lt.get(t);
                  if (n) return n;
                  t = t.parentElement;
                }
                return null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "scrollTop", {
              get: function () {
                return this.offset.y;
              },
              set: function (t) {
                this.setPosition(this.scrollLeft, t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "scrollLeft", {
              get: function () {
                return this.offset.x;
              },
              set: function (t) {
                this.setPosition(t, this.scrollTop);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.getSize = function () {
              return (function (t) {
                var n = t.containerEl,
                  e = t.contentEl;
                return {
                  container: { width: n.clientWidth, height: n.clientHeight },
                  content: {
                    width: e.offsetWidth - e.clientWidth + e.scrollWidth,
                    height: e.offsetHeight - e.clientHeight + e.scrollHeight,
                  },
                };
              })(this);
            }),
            (t.prototype.update = function () {
              !(function (t) {
                var n = t.getSize(),
                  e = {
                    x: Math.max(n.content.width - n.container.width, 0),
                    y: Math.max(n.content.height - n.container.height, 0),
                  },
                  r = t.containerEl.getBoundingClientRect(),
                  o = {
                    top: Math.max(r.top, 0),
                    right: Math.min(r.right, window.innerWidth),
                    bottom: Math.min(r.bottom, window.innerHeight),
                    left: Math.max(r.left, 0),
                  };
                (t.size = n),
                  (t.limit = e),
                  (t.bounding = o),
                  t.track.update(),
                  t.setPosition();
              })(this),
                this._plugins.forEach(function (t) {
                  t.onUpdate();
                });
            }),
            (t.prototype.isVisible = function (t) {
              return (function (t, n) {
                var e = t.bounding,
                  r = n.getBoundingClientRect(),
                  o = Math.max(e.top, r.top),
                  i = Math.max(e.left, r.left),
                  u = Math.min(e.right, r.right);
                return o < Math.min(e.bottom, r.bottom) && i < u;
              })(this, t);
            }),
            (t.prototype.setPosition = function (t, n, e) {
              var r = this;
              void 0 === t && (t = this.offset.x),
                void 0 === n && (n = this.offset.y),
                void 0 === e && (e = {});
              var o = (function (t, n, e) {
                var r = t.options,
                  o = t.offset,
                  u = t.limit,
                  c = t.track,
                  s = t.contentEl;
                return (
                  r.renderByPixels &&
                    ((n = Math.round(n)), (e = Math.round(e))),
                  (n = O(n, 0, u.x)),
                  (e = O(e, 0, u.y)),
                  n !== o.x && c.xAxis.show(),
                  e !== o.y && c.yAxis.show(),
                  r.alwaysShowTracks || c.autoHideOnIdle(),
                  n === o.x && e === o.y
                    ? null
                    : ((o.x = n),
                      (o.y = e),
                      B(s, {
                        "-transform":
                          "translate3d(" + -n + "px, " + -e + "px, 0)",
                      }),
                      c.update(),
                      { offset: i({}, o), limit: i({}, u) })
                );
              })(this, t, n);
              o &&
                !e.withoutCallbacks &&
                this._listeners.forEach(function (t) {
                  t.call(r, o);
                });
            }),
            (t.prototype.scrollTo = function (t, n, e, r) {
              void 0 === t && (t = this.offset.x),
                void 0 === n && (n = this.offset.y),
                void 0 === e && (e = 0),
                void 0 === r && (r = {}),
                (function (t, n, e, r, o) {
                  void 0 === r && (r = 0);
                  var i = void 0 === o ? {} : o,
                    u = i.easing,
                    c = void 0 === u ? $ : u,
                    s = i.callback,
                    a = t.options,
                    f = t.offset,
                    l = t.limit;
                  a.renderByPixels &&
                    ((n = Math.round(n)), (e = Math.round(e)));
                  var p = f.x,
                    h = f.y,
                    d = O(n, 0, l.x) - p,
                    v = O(e, 0, l.y) - h,
                    y = Date.now();
                  cancelAnimationFrame(K.get(t)),
                    (function n() {
                      var e = Date.now() - y,
                        o = r ? c(Math.min(e / r, 1)) : 1;
                      if ((t.setPosition(p + d * o, h + v * o), e >= r))
                        "function" == typeof s && s.call(t);
                      else {
                        var i = requestAnimationFrame(n);
                        K.set(t, i);
                      }
                    })();
                })(this, t, n, e, r);
            }),
            (t.prototype.scrollIntoView = function (t, n) {
              void 0 === n && (n = {}),
                (function (t, n, e) {
                  var r = void 0 === e ? {} : e,
                    o = r.alignToTop,
                    i = void 0 === o || o,
                    u = r.onlyScrollIfNeeded,
                    c = void 0 !== u && u,
                    s = r.offsetTop,
                    a = void 0 === s ? 0 : s,
                    f = r.offsetLeft,
                    l = void 0 === f ? 0 : f,
                    p = r.offsetBottom,
                    h = void 0 === p ? 0 : p,
                    d = t.containerEl,
                    v = t.bounding,
                    y = t.offset,
                    m = t.limit;
                  if (n && d.contains(n)) {
                    var g = n.getBoundingClientRect();
                    if (!c || !t.isVisible(n)) {
                      var b = i ? g.top - v.top - a : g.bottom - v.bottom + h;
                      t.setMomentum(g.left - v.left - l, O(b, -y.y, m.y - y.y));
                    }
                  }
                })(this, t, n);
            }),
            (t.prototype.addListener = function (t) {
              if ("function" != typeof t)
                throw new TypeError(
                  "[smooth-scrollbar] scrolling listener should be a function"
                );
              this._listeners.add(t);
            }),
            (t.prototype.removeListener = function (t) {
              this._listeners.delete(t);
            }),
            (t.prototype.addTransformableMomentum = function (t, n, e, r) {
              this._updateDebounced();
              var o = this._plugins.reduce(
                  function (t, n) {
                    return n.transformDelta(t, e) || t;
                  },
                  { x: t, y: n }
                ),
                i = !this._shouldPropagateMomentum(o.x, o.y);
              i && this.addMomentum(o.x, o.y), r && r.call(this, i);
            }),
            (t.prototype.addMomentum = function (t, n) {
              this.setMomentum(this._momentum.x + t, this._momentum.y + n);
            }),
            (t.prototype.setMomentum = function (t, n) {
              0 === this.limit.x && (t = 0),
                0 === this.limit.y && (n = 0),
                this.options.renderByPixels &&
                  ((t = Math.round(t)), (n = Math.round(n))),
                (this._momentum.x = t),
                (this._momentum.y = n);
            }),
            (t.prototype.updatePluginOptions = function (t, n) {
              this._plugins.forEach(function (e) {
                e.name === t && Object.assign(e.options, n);
              });
            }),
            (t.prototype.destroy = function () {
              var t = this.containerEl,
                n = this.contentEl;
              !(function (t) {
                var n = z.get(t);
                n &&
                  (n.forEach(function (t) {
                    var n = t.elem,
                      e = t.eventName,
                      r = t.handler;
                    n.removeEventListener(e, r, C());
                  }),
                  z.delete(t));
              })(this),
                this._listeners.clear(),
                this.setMomentum(0, 0),
                cancelAnimationFrame(this._renderID),
                this._observer && this._observer.disconnect(),
                lt.delete(this.containerEl);
              for (var e = Array.from(n.childNodes); t.firstChild; )
                t.removeChild(t.firstChild);
              e.forEach(function (n) {
                t.appendChild(n);
              }),
                B(t, { overflow: "" }),
                (t.scrollTop = this.scrollTop),
                (t.scrollLeft = this.scrollLeft),
                this._plugins.forEach(function (t) {
                  t.onDestroy();
                }),
                (this._plugins.length = 0);
            }),
            (t.prototype._init = function () {
              var t = this;
              this.update(),
                Object.keys(r).forEach(function (n) {
                  r[n](t);
                }),
                this._plugins.forEach(function (t) {
                  t.onInit();
                }),
                this._render();
            }),
            (t.prototype._updateDebounced = function () {
              this.update();
            }),
            (t.prototype._shouldPropagateMomentum = function (t, n) {
              void 0 === t && (t = 0), void 0 === n && (n = 0);
              var e = this.options,
                r = this.offset,
                o = this.limit;
              if (!e.continuousScrolling) return !1;
              0 === o.x && 0 === o.y && this._updateDebounced();
              var i = O(t + r.x, 0, o.x),
                u = O(n + r.y, 0, o.y),
                c = !0;
              return (
                (c = (c = c && i === r.x) && u === r.y) &&
                (r.x === o.x || 0 === r.x || r.y === o.y || 0 === r.y)
              );
            }),
            (t.prototype._render = function () {
              var t = this._momentum;
              if (t.x || t.y) {
                var n = this._nextTick("x"),
                  e = this._nextTick("y");
                (t.x = n.momentum),
                  (t.y = e.momentum),
                  this.setPosition(n.position, e.position);
              }
              var r = i({}, this._momentum);
              this._plugins.forEach(function (t) {
                t.onRender(r);
              }),
                (this._renderID = requestAnimationFrame(
                  this._render.bind(this)
                ));
            }),
            (t.prototype._nextTick = function (t) {
              var n = this.options,
                e = this.offset,
                r = this._momentum,
                o = e[t],
                i = r[t];
              if (Math.abs(i) <= 0.1) return { momentum: 0, position: o + i };
              var u = i * (1 - n.damping);
              return (
                n.renderByPixels && (u |= 0),
                { momentum: u, position: o + i - u }
              );
            }),
            u([D(100, { leading: !0 })], t.prototype, "_updateDebounced", null),
            t
          );
        })(),
        ht =
          "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n",
        dt = "smooth-scrollbar-style",
        vt = !1;
      function yt() {
        if (!vt && "undefined" != typeof window) {
          var t = document.createElement("style");
          (t.id = dt),
            (t.textContent = ht),
            document.head && document.head.appendChild(t),
            (vt = !0);
        }
      }
      e.d(n, "ScrollbarPlugin", function () {
        return tt;
      });
      /*!
       * cast `I.Scrollbar` to `Scrollbar` to avoid error
       *
       * `I.Scrollbar` is not assignable to `Scrollbar`:
       *     "privateProp" is missing in `I.Scrollbar`
       *
       * @see https://github.com/Microsoft/TypeScript/issues/2672
       */
      var mt = (function (t) {
        function n() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          (function (t, n) {
            function e() {
              this.constructor = t;
            }
            o(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((e.prototype = n.prototype), new e()));
          })(n, t),
          (n.init = function (t, n) {
            if (!t || 1 !== t.nodeType)
              throw new TypeError(
                "expect element to be DOM Element, but got " + t
              );
            return yt(), lt.has(t) ? lt.get(t) : new pt(t, n);
          }),
          (n.initAll = function (t) {
            return Array.from(
              document.querySelectorAll("[data-scrollbar]"),
              function (e) {
                return n.init(e, t);
              }
            );
          }),
          (n.has = function (t) {
            return lt.has(t);
          }),
          (n.get = function (t) {
            return lt.get(t);
          }),
          (n.getAll = function () {
            return Array.from(lt.values());
          }),
          (n.destroy = function (t) {
            var n = lt.get(t);
            n && n.destroy();
          }),
          (n.destroyAll = function () {
            lt.forEach(function (t) {
              t.destroy();
            });
          }),
          (n.use = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              t.forEach(function (t) {
                var n = t.pluginName;
                if (!n) throw new TypeError("plugin name is required");
                nt.order.add(n), (nt.constructors[n] = t);
              });
            }.apply(void 0, t);
          }),
          (n.attachStyle = function () {
            return yt();
          }),
          (n.detachStyle = function () {
            return (function () {
              if (vt && "undefined" != typeof window) {
                var t = document.getElementById(dt);
                t && t.parentNode && (t.parentNode.removeChild(t), (vt = !1));
              }
            })();
          }),
          (n.version = "8.5.1"),
          (n.ScrollbarPlugin = tt),
          n
        );
      })(pt);
      n.default = mt;
    },
  ]).default;
});
/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license | WordPress 2019-05-16 */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "1.12.4",
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function () {
      return e.call(this);
    },
    get: function (a) {
      return null != a
        ? a < 0
          ? this[a + this.length]
          : this[a]
        : e.call(this);
    },
    pushStack: function (a) {
      var b = n.merge(this.constructor(), a);
      return (b.prevObject = this), (b.context = this.context), b;
    },
    each: function (a) {
      return n.each(this, a);
    },
    map: function (a) {
      return this.pushStack(
        n.map(this, function (b, c) {
          return a.call(b, c, b);
        })
      );
    },
    slice: function () {
      return this.pushStack(e.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (a) {
      var b = this.length,
        c = +a + (a < 0 ? b : 0);
      return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: g,
    sort: c.sort,
    splice: c.splice,
  }),
    (n.extend = n.fn.extend = function () {
      var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
      for (
        "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
          "object" == typeof g || n.isFunction(g) || (g = {}),
          h === i && ((g = this), h--);
        h < i;
        h++
      )
        if (null != (e = arguments[h]))
          for (d in e)
            (a = g[d]),
              (c = e[d]),
              "__proto__" !== d &&
                g !== c &&
                (j && c && (n.isPlainObject(c) || (b = n.isArray(c)))
                  ? (b
                      ? ((b = !1), (f = a && n.isArray(a) ? a : []))
                      : (f = a && n.isPlainObject(a) ? a : {}),
                    (g[d] = n.extend(j, f, c)))
                  : void 0 !== c && (g[d] = c));
      return g;
    }),
    n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === n.type(a);
      },
      isArray:
        Array.isArray ||
        function (a) {
          return "array" === n.type(a);
        },
      isWindow: function (a) {
        return null != a && a == a.window;
      },
      isNumeric: function (a) {
        var b = a && a.toString();
        return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      isPlainObject: function (a) {
        var b;
        if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
          return !1;
        try {
          if (
            a.constructor &&
            !k.call(a, "constructor") &&
            !k.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (c) {
          return !1;
        }
        if (!l.ownFirst) for (b in a) return k.call(a, b);
        for (b in a);
        return void 0 === b || k.call(a, b);
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? i[j.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (b) {
        b &&
          n.trim(b) &&
          (
            a.execScript ||
            function (b) {
              a.eval.call(a, b);
            }
          )(b);
      },
      camelCase: function (a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b) {
        var c,
          d = 0;
        if (s(a)) {
          for (c = a.length; d < c; d++)
            if (!1 === b.call(a[d], d, a[d])) break;
        } else for (d in a) if (!1 === b.call(a[d], d, a[d])) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(o, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (s(Object(a))
              ? n.merge(c, "string" == typeof a ? [a] : a)
              : g.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        var d;
        if (b) {
          if (h) return h.call(b, a, c);
          for (
            d = b.length, c = c ? (c < 0 ? Math.max(0, d + c) : c) : 0;
            c < d;
            c++
          )
            if (c in b && b[c] === a) return c;
        }
        return -1;
      },
      merge: function (a, b) {
        var c = +b.length,
          d = 0,
          e = a.length;
        while (d < c) a[e++] = b[d++];
        if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
          (d = !b(a[f], f)) !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          e,
          g = 0,
          h = [];
        if (s(a))
          for (d = a.length; g < d; g++)
            null != (e = b(a[g], g, c)) && h.push(e);
        else for (g in a) null != (e = b(a[g], g, c)) && h.push(e);
        return f.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, f;
        if (
          ("string" == typeof b && ((f = a[b]), (b = a), (a = f)),
          n.isFunction(a))
        )
          return (
            (c = e.call(arguments, 2)),
            (d = function () {
              return a.apply(b || this, c.concat(e.call(arguments)));
            }),
            (d.guid = a.guid = a.guid || n.guid++),
            d
          );
      },
      now: function () {
        return +new Date();
      },
      support: l,
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = n.type(a);
    return (
      "function" !== c &&
      !n.isWindow(a) &&
      ("array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a))
    );
  }
  var t = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = fa(),
      z = fa(),
      A = fa(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        M +
        "))|)" +
        L +
        "*\\]",
      O =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        N +
        ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : d < 0
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      da = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (xa) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function ea(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s,
        w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (
        ((d = d || []),
        "string" != typeof a || !a || (1 !== x && 9 !== x && 11 !== x))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== x && (o = $.exec(a)))
          if ((f = o[1])) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d;
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = o[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return H.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) (w = b), (s = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id"))
              ? (k = k.replace(aa, "\\$&"))
              : b.setAttribute("id", (k = u)),
              (r = g(a)),
              (h = r.length),
              (l = V.test(k) ? "#" + k : "[id='" + k + "']");
            while (h--) r[h] = l + " " + pa(r[h]);
            (s = r.join(",")), (w = (_.test(a) && na(b.parentNode)) || b);
          }
          if (s)
            try {
              return H.apply(d, w.querySelectorAll(s)), d;
            } catch (y) {
            } finally {
              k === u && b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e);
    }
    function fa() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ga(a) {
      return (a[u] = !0), a;
    }
    function ha(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (xa) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ia(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function ja(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ka(a) {
      return function (b) {
        return "input" === b.nodeName.toLowerCase() && b.type === a;
      };
    }
    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function ma(a) {
      return ga(function (b) {
        return (
          (b = +b),
          ga(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function na(a) {
      return a && void 0 !== a.getElementsByTagName && a;
    }
    (c = ea.support = {}),
      (f = ea.isXML = function (a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return !!b && "HTML" !== b.nodeName;
      }),
      (m = ea.setDocument = function (a) {
        var b,
          e,
          g = a ? a.ownerDocument || a : v;
        return g !== n && 9 === g.nodeType && g.documentElement
          ? ((n = g),
            (o = n.documentElement),
            (p = !f(n)),
            (e = n.defaultView) &&
              e.top !== e &&
              (e.addEventListener
                ? e.addEventListener("unload", da, !1)
                : e.attachEvent && e.attachEvent("onunload", da)),
            (c.attributes = ha(function (a) {
              return (a.className = "i"), !a.getAttribute("className");
            })),
            (c.getElementsByTagName = ha(function (a) {
              return (
                a.appendChild(n.createComment("")),
                !a.getElementsByTagName("*").length
              );
            })),
            (c.getElementsByClassName = Z.test(n.getElementsByClassName)),
            (c.getById = ha(function (a) {
              return (
                (o.appendChild(a).id = u),
                !n.getElementsByName || !n.getElementsByName(u).length
              );
            })),
            c.getById
              ? ((d.find.ID = function (a, b) {
                  if (void 0 !== b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : [];
                  }
                }),
                (d.filter.ID = function (a) {
                  var b = a.replace(ba, ca);
                  return function (a) {
                    return a.getAttribute("id") === b;
                  };
                }))
              : (delete d.find.ID,
                (d.filter.ID = function (a) {
                  var b = a.replace(ba, ca);
                  return function (a) {
                    var c =
                      void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                  };
                })),
            (d.find.TAG = c.getElementsByTagName
              ? function (a, b) {
                  return void 0 !== b.getElementsByTagName
                    ? b.getElementsByTagName(a)
                    : c.qsa
                    ? b.querySelectorAll(a)
                    : void 0;
                }
              : function (a, b) {
                  var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                  if ("*" === a) {
                    while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                    return d;
                  }
                  return f;
                }),
            (d.find.CLASS =
              c.getElementsByClassName &&
              function (a, b) {
                if (void 0 !== b.getElementsByClassName && p)
                  return b.getElementsByClassName(a);
              }),
            (r = []),
            (q = []),
            (c.qsa = Z.test(n.querySelectorAll)) &&
              (ha(function (a) {
                (o.appendChild(a).innerHTML =
                  "<a id='" +
                  u +
                  "'></a><select id='" +
                  u +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  a.querySelectorAll("[msallowcapture^='']").length &&
                    q.push("[*^$]=" + L + "*(?:''|\"\")"),
                  a.querySelectorAll("[selected]").length ||
                    q.push("\\[" + L + "*(?:value|" + K + ")"),
                  a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                  a.querySelectorAll(":checked").length || q.push(":checked"),
                  a.querySelectorAll("a#" + u + "+*").length ||
                    q.push(".#.+[+~]");
              }),
              ha(function (a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"),
                  a.appendChild(b).setAttribute("name", "D"),
                  a.querySelectorAll("[name=d]").length &&
                    q.push("name" + L + "*[*^$|!~]?="),
                  a.querySelectorAll(":enabled").length ||
                    q.push(":enabled", ":disabled"),
                  a.querySelectorAll("*,:x"),
                  q.push(",.*:");
              })),
            (c.matchesSelector = Z.test(
              (s =
                o.matches ||
                o.webkitMatchesSelector ||
                o.mozMatchesSelector ||
                o.oMatchesSelector ||
                o.msMatchesSelector)
            )) &&
              ha(function (a) {
                (c.disconnectedMatch = s.call(a, "div")),
                  s.call(a, "[s!='']:x"),
                  r.push("!=", O);
              }),
            (q = q.length && new RegExp(q.join("|"))),
            (r = r.length && new RegExp(r.join("|"))),
            (b = Z.test(o.compareDocumentPosition)),
            (t =
              b || Z.test(o.contains)
                ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                      d = b && b.parentNode;
                    return (
                      a === d ||
                      !(
                        !d ||
                        1 !== d.nodeType ||
                        !(c.contains
                          ? c.contains(d)
                          : a.compareDocumentPosition &&
                            16 & a.compareDocumentPosition(d))
                      )
                    );
                  }
                : function (a, b) {
                    if (b) while ((b = b.parentNode)) if (b === a) return !0;
                    return !1;
                  }),
            (B = b
              ? function (a, b) {
                  if (a === b) return (l = !0), 0;
                  var d =
                    !a.compareDocumentPosition - !b.compareDocumentPosition;
                  return (
                    d ||
                    ((d =
                      (a.ownerDocument || a) === (b.ownerDocument || b)
                        ? a.compareDocumentPosition(b)
                        : 1),
                    1 & d ||
                    (!c.sortDetached && b.compareDocumentPosition(a) === d)
                      ? a === n || (a.ownerDocument === v && t(v, a))
                        ? -1
                        : b === n || (b.ownerDocument === v && t(v, b))
                        ? 1
                        : k
                        ? J(k, a) - J(k, b)
                        : 0
                      : 4 & d
                      ? -1
                      : 1)
                  );
                }
              : function (a, b) {
                  if (a === b) return (l = !0), 0;
                  var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                  if (!e || !f)
                    return a === n
                      ? -1
                      : b === n
                      ? 1
                      : e
                      ? -1
                      : f
                      ? 1
                      : k
                      ? J(k, a) - J(k, b)
                      : 0;
                  if (e === f) return ja(a, b);
                  c = a;
                  while ((c = c.parentNode)) g.unshift(c);
                  c = b;
                  while ((c = c.parentNode)) h.unshift(c);
                  while (g[d] === h[d]) d++;
                  return d
                    ? ja(g[d], h[d])
                    : g[d] === v
                    ? -1
                    : h[d] === v
                    ? 1
                    : 0;
                }),
            n)
          : n;
      }),
      (ea.matches = function (a, b) {
        return ea(a, null, null, b);
      }),
      (ea.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(T, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + " "] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (xa) {}
        return ea(b, n, null, [a]).length > 0;
      }),
      (ea.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (ea.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (ea.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (ea.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = ea.getText = function (a) {
        var b,
          c = "",
          d = 0,
          f = a.nodeType;
        if (f) {
          if (1 === f || 9 === f || 11 === f) {
            if ("string" == typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
          } else if (3 === f || 4 === f) return a.nodeValue;
        } else while ((b = a[d++])) c += e(b);
        return c;
      }),
      (d = ea.selectors = {
        cacheLength: 50,
        createPseudo: ga,
        match: W,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (a) {
            return (
              (a[1] = a[1].replace(ba, ca)),
              (a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca)),
              "~=" === a[2] && (a[3] = " " + a[3] + " "),
              a.slice(0, 4)
            );
          },
          CHILD: function (a) {
            return (
              (a[1] = a[1].toLowerCase()),
              "nth" === a[1].slice(0, 3)
                ? (a[3] || ea.error(a[0]),
                  (a[4] = +(a[4]
                    ? a[5] + (a[6] || 1)
                    : 2 * ("even" === a[3] || "odd" === a[3]))),
                  (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                : a[3] && ea.error(a[0]),
              a
            );
          },
          PSEUDO: function (a) {
            var b,
              c = !a[6] && a[2];
            return W.CHILD.test(a[0])
              ? null
              : (a[3]
                  ? (a[2] = a[4] || a[5] || "")
                  : c &&
                    U.test(c) &&
                    (b = g(c, !0)) &&
                    (b = c.indexOf(")", c.length - b) - c.length) &&
                    ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                a.slice(0, 3));
          },
        },
        filter: {
          TAG: function (a) {
            var b = a.replace(ba, ca).toLowerCase();
            return "*" === a
              ? function () {
                  return !0;
                }
              : function (a) {
                  return a.nodeName && a.nodeName.toLowerCase() === b;
                };
          },
          CLASS: function (a) {
            var b = y[a + " "];
            return (
              b ||
              ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                y(a, function (a) {
                  return b.test(
                    ("string" == typeof a.className && a.className) ||
                      (void 0 !== a.getAttribute && a.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (a, b, c) {
            return function (d) {
              var e = ea.attr(d, a);
              return null == e
                ? "!=" === b
                : !b ||
                    ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1
                      : "|=" === b &&
                        (e === c || e.slice(0, c.length + 1) === c + "-"));
            };
          },
          CHILD: function (a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
            return 1 === d && 0 === e
              ? function (a) {
                  return !!a.parentNode;
                }
              : function (b, c, i) {
                  var j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p = f !== g ? "nextSibling" : "previousSibling",
                    q = b.parentNode,
                    r = h && b.nodeName.toLowerCase(),
                    s = !i && !h,
                    t = !1;
                  if (q) {
                    if (f) {
                      while (p) {
                        m = b;
                        while ((m = m[p]))
                          if (
                            h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType
                          )
                            return !1;
                        o = p = "only" === a && !o && "nextSibling";
                      }
                      return !0;
                    }
                    if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                      (m = q),
                        (l = m[u] || (m[u] = {})),
                        (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                        (j = k[a] || []),
                        (n = j[0] === w && j[1]),
                        (t = n && j[2]),
                        (m = n && q.childNodes[n]);
                      while ((m = (++n && m && m[p]) || (t = n = 0) || o.pop()))
                        if (1 === m.nodeType && ++t && m === b) {
                          k[a] = [w, n, t];
                          break;
                        }
                    } else if (
                      (s &&
                        ((m = b),
                        (l = m[u] || (m[u] = {})),
                        (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                        (j = k[a] || []),
                        (n = j[0] === w && j[1]),
                        (t = n)),
                      !1 === t)
                    )
                      while ((m = (++n && m && m[p]) || (t = n = 0) || o.pop()))
                        if (
                          (h
                            ? m.nodeName.toLowerCase() === r
                            : 1 === m.nodeType) &&
                          ++t &&
                          (s &&
                            ((l = m[u] || (m[u] = {})),
                            (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                            (k[a] = [w, t])),
                          m === b)
                        )
                          break;
                    return (t -= e) === d || (t % d == 0 && t / d >= 0);
                  }
                };
          },
          PSEUDO: function (a, b) {
            var c,
              e =
                d.pseudos[a] ||
                d.setFilters[a.toLowerCase()] ||
                ea.error("unsupported pseudo: " + a);
            return e[u]
              ? e(b)
              : e.length > 1
              ? ((c = [a, a, "", b]),
                d.setFilters.hasOwnProperty(a.toLowerCase())
                  ? ga(function (a, c) {
                      var d,
                        f = e(a, b),
                        g = f.length;
                      while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                    })
                  : function (a) {
                      return e(a, 0, c);
                    })
              : e;
          },
        },
        pseudos: {
          not: ga(function (a) {
            var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));
            return d[u]
              ? ga(function (a, b, c, e) {
                  var f,
                    g = d(a, null, e, []),
                    h = a.length;
                  while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                })
              : function (a, e, f) {
                  return (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop();
                };
          }),
          has: ga(function (a) {
            return function (b) {
              return ea(a, b).length > 0;
            };
          }),
          contains: ga(function (a) {
            return (
              (a = a.replace(ba, ca)),
              function (b) {
                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
              }
            );
          }),
          lang: ga(function (a) {
            return (
              V.test(a || "") || ea.error("unsupported lang: " + a),
              (a = a.replace(ba, ca).toLowerCase()),
              function (b) {
                var c;
                do {
                  if (
                    (c = p
                      ? b.lang
                      : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                  )
                    return (
                      (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                    );
                } while ((b = b.parentNode) && 1 === b.nodeType);
                return !1;
              }
            );
          }),
          target: function (b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id;
          },
          root: function (a) {
            return a === o;
          },
          focus: function (a) {
            return (
              a === n.activeElement &&
              (!n.hasFocus || n.hasFocus()) &&
              !!(a.type || a.href || ~a.tabIndex)
            );
          },
          enabled: function (a) {
            return !1 === a.disabled;
          },
          disabled: function (a) {
            return !0 === a.disabled;
          },
          checked: function (a) {
            var b = a.nodeName.toLowerCase();
            return (
              ("input" === b && !!a.checked) || ("option" === b && !!a.selected)
            );
          },
          selected: function (a) {
            return (
              a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
            );
          },
          empty: function (a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6) return !1;
            return !0;
          },
          parent: function (a) {
            return !d.pseudos.empty(a);
          },
          header: function (a) {
            return Y.test(a.nodeName);
          },
          input: function (a) {
            return X.test(a.nodeName);
          },
          button: function (a) {
            var b = a.nodeName.toLowerCase();
            return ("input" === b && "button" === a.type) || "button" === b;
          },
          text: function (a) {
            var b;
            return (
              "input" === a.nodeName.toLowerCase() &&
              "text" === a.type &&
              (null == (b = a.getAttribute("type")) ||
                "text" === b.toLowerCase())
            );
          },
          first: ma(function () {
            return [0];
          }),
          last: ma(function (a, b) {
            return [b - 1];
          }),
          eq: ma(function (a, b, c) {
            return [c < 0 ? c + b : c];
          }),
          even: ma(function (a, b) {
            for (var c = 0; c < b; c += 2) a.push(c);
            return a;
          }),
          odd: ma(function (a, b) {
            for (var c = 1; c < b; c += 2) a.push(c);
            return a;
          }),
          lt: ma(function (a, b, c) {
            for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
            return a;
          }),
          gt: ma(function (a, b, c) {
            for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
            return a;
          }),
        },
      }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = ka(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = la(b);
    function oa() {}
    (oa.prototype = d.filters = d.pseudos),
      (d.setFilters = new oa()),
      (g = ea.tokenize = function (a, b) {
        var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];
        if (k) return b ? 0 : k.slice(0);
        (h = a), (i = []), (j = d.preFilter);
        while (h) {
          (c && !(e = R.exec(h))) ||
            (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
            (c = !1),
            (e = S.exec(h)) &&
              ((c = e.shift()),
              f.push({ value: c, type: e[0].replace(Q, " ") }),
              (h = h.slice(c.length)));
          for (g in d.filter)
            !(e = W[g].exec(h)) ||
              (j[g] && !(e = j[g](e))) ||
              ((c = e.shift()),
              f.push({ value: c, type: g, matches: e }),
              (h = h.slice(c.length)));
          if (!c) break;
        }
        return b ? h.length : h ? ea.error(a) : z(a, i).slice(0);
      });
    function pa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
      return d;
    }
    function qa(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j,
              k = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((j = b[u] || (b[u] = {})),
                    (i = j[b.uniqueID] || (j[b.uniqueID] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (k[2] = h[2]);
                  if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function ra(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function sa(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) ea(a, b[d], c);
      return c;
    }
    function ta(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }
    function ua(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = ua(d)),
        e && !e[u] && (e = ua(e, f)),
        ga(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || sa(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : ta(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = ta(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = ta(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function va(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = qa(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = qa(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        i < f;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [qa(ra(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break;
            return ua(
              i > 1 && ra(m),
              i > 1 &&
                pa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(Q, "$1"),
              c,
              i < e && va(a.slice(i, e)),
              e < f && va((a = a.slice(e))),
              e < f && pa(a)
            );
          }
          m.push(c);
        }
      return ra(m);
    }
    function wa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG("*", k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
              u = ta(u);
            }
            H.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && ea.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ga(f) : f;
    }
    return (
      (h = ea.compile = function (a, b) {
        var c,
          d = [],
          e = [],
          f = A[a + " "];
        if (!f) {
          b || (b = g(a)), (c = b.length);
          while (c--) (f = va(b[c])), f[u] ? d.push(f) : e.push(f);
          (f = A(a, wa(e, d))), (f.selector = a);
        }
        return f;
      }),
      (i = ea.select = function (a, b, e, f) {
        var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g((a = n.selector || a));
        if (((e = e || []), 1 === o.length)) {
          if (
            ((j = o[0] = o[0].slice(0)),
            j.length > 2 &&
              "ID" === (k = j[0]).type &&
              c.getById &&
              9 === b.nodeType &&
              p &&
              d.relative[j[1].type])
          ) {
            if (!(b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0]))
              return e;
            n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
          }
          i = W.needsContext.test(a) ? 0 : j.length;
          while (i--) {
            if (((k = j[i]), d.relative[(l = k.type)])) break;
            if (
              (m = d.find[l]) &&
              (f = m(
                k.matches[0].replace(ba, ca),
                (_.test(j[0].type) && na(b.parentNode)) || b
              ))
            ) {
              if ((j.splice(i, 1), !(a = f.length && pa(j))))
                return H.apply(e, f), e;
              break;
            }
          }
        }
        return (
          (n || h(a, o))(
            f,
            b,
            !p,
            e,
            !b || (_.test(a) && na(b.parentNode)) || b
          ),
          e
        );
      }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ha(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ha(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ia("type|href|height|width", function (a, b, c) {
          if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ha(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ia("value", function (a, b, c) {
          if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }),
      ha(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ia(K, function (a, b, c) {
          var d;
          if (!c)
            return !0 === a[b]
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
              ? d.value
              : null;
        }),
      ea
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.uniqueSort = n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    v = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;
  function z(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return n.inArray(a, b) > -1 !== c;
    });
  }
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = [],
          d = this,
          e = d.length;
        if ("string" != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; b < e; b++) if (n.contains(d[b], this)) return !0;
            })
          );
        for (b = 0; b < e; b++) n.find(a, d[b], c);
        return (
          (c = this.pushStack(e > 1 ? n.unique(c) : c)),
          (c.selector = this.selector ? this.selector + " " + a : a),
          c
        );
      },
      filter: function (a) {
        return this.pushStack(z(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(z(this, a || [], !0));
      },
      is: function (a) {
        return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1)
          .length;
      },
    });
  var A,
    B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((n.fn.init = function (a, b, c) {
    var e, f;
    if (!a) return this;
    if (((c = c || A), "string" == typeof a)) {
      if (
        !(e =
          "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3
            ? [null, a, null]
            : B.exec(a)) ||
        (!e[1] && b)
      )
        return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
      if (e[1]) {
        if (
          ((b = b instanceof n ? b[0] : b),
          n.merge(
            this,
            n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
          ),
          x.test(e[1]) && n.isPlainObject(b))
        )
          for (e in b)
            n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        return this;
      }
      if ((f = d.getElementById(e[2])) && f.parentNode) {
        if (f.id !== e[2]) return A.find(a);
        (this.length = 1), (this[0] = f);
      }
      return (this.context = d), (this.selector = a), this;
    }
    return a.nodeType
      ? ((this.context = this[0] = a), (this.length = 1), this)
      : n.isFunction(a)
      ? void 0 !== c.ready
        ? c.ready(a)
        : a(n)
      : (void 0 !== a.selector &&
          ((this.selector = a.selector), (this.context = a.context)),
        n.makeArray(a, this));
  }).prototype = n.fn),
    (A = n(d));
  var C = /^(?:parents|prev(?:Until|All))/,
    D = { children: !0, contents: !0, next: !0, prev: !0 };
  n.fn.extend({
    has: function (a) {
      var b,
        c = n(a, this),
        d = c.length;
      return this.filter(function () {
        for (b = 0; b < d; b++) if (n.contains(this, c[b])) return !0;
      });
    },
    closest: function (a, b) {
      for (
        var c,
          d = 0,
          e = this.length,
          f = [],
          g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
        d < e;
        d++
      )
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (
            c.nodeType < 11 &&
            (g
              ? g.index(c) > -1
              : 1 === c.nodeType && n.find.matchesSelector(c, a))
          ) {
            f.push(c);
            break;
          }
      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? n.inArray(this[0], n(a))
          : n.inArray(a.jquery ? a[0] : a, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });
  function E(a, b) {
    do {
      a = a[b];
    } while (a && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return u(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return u(a, "parentNode", c);
      },
      next: function (a) {
        return E(a, "nextSibling");
      },
      prev: function (a) {
        return E(a, "previousSibling");
      },
      nextAll: function (a) {
        return u(a, "nextSibling");
      },
      prevAll: function (a) {
        return u(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return u(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return u(a, "previousSibling", c);
      },
      siblings: function (a) {
        return v((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return v(a.firstChild);
      },
      contents: function (a) {
        return n.nodeName(a, "iframe")
          ? a.contentDocument || a.contentWindow.document
          : n.merge([], a.childNodes);
      },
    },
    function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = n.filter(d, e)),
          this.length > 1 &&
            (D[a] || (e = n.uniqueSort(e)), C.test(a) && (e = e.reverse())),
          this.pushStack(e)
        );
      };
    }
  );
  var F = /\S+/g;
  function G(a) {
    var b = {};
    return (
      n.each(a.match(F) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = "string" == typeof a ? G(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            !1 === f[h].apply(c[0], c[1]) &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      j = {
        add: function () {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function b(c) {
                n.each(c, function (c, d) {
                  n.isFunction(d)
                    ? (a.unique && j.has(d)) || f.push(d)
                    : d && d.length && "string" !== n.type(d) && b(d);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function () {
          return (
            n.each(arguments, function (a, b) {
              var c;
              while ((c = n.inArray(b, f, c)) > -1)
                f.splice(c, 1), c <= h && h--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = g = []), (f = c = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = !0), c || j.disable(), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return j;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
            ["notify", "progress", n.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                            .promise()
                            .progress(c.notify)
                            .done(c.resolve)
                            .fail(c.reject)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || (a && n.isFunction(a.promise)) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (d) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? e.call(arguments) : d),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (d > 1)
          for (i = new Array(d), j = new Array(d), k = new Array(d); b < d; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .progress(h(b, j, i))
                  .done(h(b, k, c))
                  .fail(g.reject)
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var H;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        (!0 === a ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (!0 !== a && --n.readyWait > 0) ||
            (H.resolveWith(d, [n]),
            n.fn.triggerHandler &&
              (n(d).triggerHandler("ready"), n(d).off("ready"))));
      },
    });
  function I() {
    d.addEventListener
      ? (d.removeEventListener("DOMContentLoaded", J),
        a.removeEventListener("load", J))
      : (d.detachEvent("onreadystatechange", J), a.detachEvent("onload", J));
  }
  function J() {
    (d.addEventListener ||
      "load" === a.event.type ||
      "complete" === d.readyState) &&
      (I(), n.ready());
  }
  (n.ready.promise = function (b) {
    if (!H)
      if (
        ((H = n.Deferred()),
        "complete" === d.readyState ||
          ("loading" !== d.readyState && !d.documentElement.doScroll))
      )
        a.setTimeout(n.ready);
      else if (d.addEventListener)
        d.addEventListener("DOMContentLoaded", J),
          a.addEventListener("load", J);
      else {
        d.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
        var c = !1;
        try {
          c = null == a.frameElement && d.documentElement;
        } catch (e) {}
        c &&
          c.doScroll &&
          (function b() {
            if (!n.isReady) {
              try {
                c.doScroll("left");
              } catch (e) {
                return a.setTimeout(b, 50);
              }
              I(), n.ready();
            }
          })();
      }
    return H.promise(b);
  }),
    n.ready.promise();
  var K;
  for (K in n(l)) break;
  (l.ownFirst = "0" === K),
    (l.inlineBlockNeedsLayout = !1),
    n(function () {
      var a, b, c, e;
      (c = d.getElementsByTagName("body")[0]) &&
        c.style &&
        ((b = d.createElement("div")),
        (e = d.createElement("div")),
        (e.style.cssText =
          "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
        c.appendChild(e).appendChild(b),
        void 0 !== b.style.zoom &&
          ((b.style.cssText =
            "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
          (l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth),
          a && (c.style.zoom = 1)),
        c.removeChild(e));
    }),
    (function () {
      var a = d.createElement("div");
      l.deleteExpando = !0;
      try {
        delete a.test;
      } catch (b) {
        l.deleteExpando = !1;
      }
      a = null;
    })();
  var L = function (a) {
      var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return (
        (1 === c || 9 === c) &&
        (!b || (!0 !== b && a.getAttribute("classid") === b))
      );
    },
    M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    N = /([A-Z])/g;
  function O(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(N, "-$1").toLowerCase();
      if ("string" == typeof (c = a.getAttribute(d))) {
        try {
          c =
            "true" === c ||
            ("false" !== c &&
              ("null" === c
                ? null
                : +c + "" === c
                ? +c
                : M.test(c)
                ? n.parseJSON(c)
                : c));
        } catch (e) {}
        n.data(a, b, c);
      } else c = void 0;
    }
    return c;
  }
  function P(a) {
    var b;
    for (b in a)
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0;
  }
  function Q(a, b, d, e) {
    if (L(a)) {
      var f,
        g,
        h = n.expando,
        i = a.nodeType,
        j = i ? n.cache : a,
        k = i ? a[h] : a[h] && h;
      if (
        (k && j[k] && (e || j[k].data)) ||
        void 0 !== d ||
        "string" != typeof b
      )
        return (
          k || (k = i ? (a[h] = c.pop() || n.guid++) : h),
          j[k] || (j[k] = i ? {} : { toJSON: n.noop }),
          ("object" != typeof b && "function" != typeof b) ||
            (e
              ? (j[k] = n.extend(j[k], b))
              : (j[k].data = n.extend(j[k].data, b))),
          (g = j[k]),
          e || (g.data || (g.data = {}), (g = g.data)),
          void 0 !== d && (g[n.camelCase(b)] = d),
          "string" == typeof b
            ? null == (f = g[b]) && (f = g[n.camelCase(b)])
            : (f = g),
          f
        );
    }
  }
  function R(a, b, c) {
    if (L(a)) {
      var d,
        e,
        f = a.nodeType,
        g = f ? n.cache : a,
        h = f ? a[n.expando] : n.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b)
            ? (b = b.concat(n.map(b, n.camelCase)))
            : b in d
            ? (b = [b])
            : ((b = n.camelCase(b)), (b = b in d ? [b] : b.split(" "))),
            (e = b.length);
          while (e--) delete d[b[e]];
          if (c ? !P(d) : !n.isEmptyObject(d)) return;
        }
        (c || (delete g[h].data, P(g[h]))) &&
          (f
            ? n.cleanData([a], !0)
            : l.deleteExpando || g != g.window
            ? delete g[h]
            : (g[h] = void 0));
      }
    }
  }
  n.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (a) {
      return !!(a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando]) && !P(a);
    },
    data: function (a, b, c) {
      return Q(a, b, c);
    },
    removeData: function (a, b) {
      return R(a, b);
    },
    _data: function (a, b, c) {
      return Q(a, b, c, !0);
    },
    _removeData: function (a, b) {
      return R(a, b, !0);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = n.data(f)), 1 === f.nodeType && !n._data(f, "parsedAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = n.camelCase(d.slice(5))), O(f, d, e[d])));
            n._data(f, "parsedAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              n.data(this, a);
            })
          : arguments.length > 1
          ? this.each(function () {
              n.data(this, a, b);
            })
          : f
          ? O(f, a, n.data(f, a))
          : void 0;
      },
      removeData: function (a) {
        return this.each(function () {
          n.removeData(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        if (a)
          return (
            (b = (b || "fx") + "queue"),
            (d = n._data(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = n._data(a, b, n.makeArray(c)))
                : d.push(c)),
            d || []
          );
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          n._data(a, c) ||
          n._data(a, c, {
            empty: n.Callbacks("once memory").add(function () {
              n._removeData(a, b + "queue"), n._removeData(a, c);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = n._data(f[g], a + "queueHooks")) &&
            c.empty &&
            (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    }),
    (function () {
      var a;
      l.shrinkWrapBlocks = function () {
        if (null != a) return a;
        a = !1;
        var b, c, e;
        return (c = d.getElementsByTagName("body")[0]) && c.style
          ? ((b = d.createElement("div")),
            (e = d.createElement("div")),
            (e.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            c.appendChild(e).appendChild(b),
            void 0 !== b.style.zoom &&
              ((b.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
              (b.appendChild(d.createElement("div")).style.width = "5px"),
              (a = 3 !== b.offsetWidth)),
            c.removeChild(e),
            a)
          : void 0;
      };
    })();
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
    U = ["Top", "Right", "Bottom", "Left"],
    V = function (a, b) {
      return (
        (a = b || a),
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      );
    };
  function W(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur();
          }
        : function () {
            return n.css(a, b, "");
          },
      i = h(),
      j = (c && c[3]) || (n.cssNumber[b] ? "" : "px"),
      k = (n.cssNumber[b] || ("px" !== j && +i)) && T.exec(n.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do {
        (f = f || ".5"), (k /= f), n.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var X = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) X(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        n.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(n(a), c);
              }))),
        b)
      )
        for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    Y = /^(?:checkbox|radio)$/i,
    Z = /<([\w:-]+)/,
    $ = /^$|\/(?:java|ecma)script/i,
    _ = /^\s+/,
    aa =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  function ba(a) {
    var b = aa.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  !(function () {
    var a = d.createElement("div"),
      b = d.createDocumentFragment(),
      c = d.createElement("input");
    (a.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (l.leadingWhitespace = 3 === a.firstChild.nodeType),
      (l.tbody = !a.getElementsByTagName("tbody").length),
      (l.htmlSerialize = !!a.getElementsByTagName("link").length),
      (l.html5Clone =
        "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML),
      (c.type = "checkbox"),
      (c.checked = !0),
      b.appendChild(c),
      (l.appendChecked = c.checked),
      (a.innerHTML = "<textarea>x</textarea>"),
      (l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue),
      b.appendChild(a),
      (c = d.createElement("input")),
      c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      a.appendChild(c),
      (l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (l.noCloneEvent = !!a.addEventListener),
      (a[n.expando] = 1),
      (l.attributes = !a.getAttribute(n.expando));
  })();
  var ca = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
  };
  (ca.optgroup = ca.option),
    (ca.tbody = ca.tfoot = ca.colgroup = ca.caption = ca.thead),
    (ca.th = ca.td);
  function da(a, b) {
    var c,
      d,
      e = 0,
      f =
        void 0 !== a.getElementsByTagName
          ? a.getElementsByTagName(b || "*")
          : void 0 !== a.querySelectorAll
          ? a.querySelectorAll(b || "*")
          : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
        !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, da(d, b));
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], f) : f;
  }
  function ea(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++)
      n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
  }
  var fa = /<|&#?\w+;/,
    ga = /<tbody/i;
  function ha(a) {
    Y.test(a.type) && (a.defaultChecked = a.checked);
  }
  function ia(a, b, c, d, e) {
    for (
      var f, g, h, i, j, k, m, o = a.length, p = ba(b), q = [], r = 0;
      r < o;
      r++
    )
      if ((g = a[r]) || 0 === g)
        if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
        else if (fa.test(g)) {
          (i = i || p.appendChild(b.createElement("div"))),
            (j = (Z.exec(g) || ["", ""])[1].toLowerCase()),
            (m = ca[j] || ca._default),
            (i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2]),
            (f = m[0]);
          while (f--) i = i.lastChild;
          if (
            (!l.leadingWhitespace &&
              _.test(g) &&
              q.push(b.createTextNode(_.exec(g)[0])),
            !l.tbody)
          ) {
            (g =
              "table" !== j || ga.test(g)
                ? "<table>" !== m[1] || ga.test(g)
                  ? 0
                  : i
                : i.firstChild),
              (f = g && g.childNodes.length);
            while (f--)
              n.nodeName((k = g.childNodes[f]), "tbody") &&
                !k.childNodes.length &&
                g.removeChild(k);
          }
          n.merge(q, i.childNodes), (i.textContent = "");
          while (i.firstChild) i.removeChild(i.firstChild);
          i = p.lastChild;
        } else q.push(b.createTextNode(g));
    i && p.removeChild(i),
      l.appendChecked || n.grep(da(q, "input"), ha),
      (r = 0);
    while ((g = q[r++]))
      if (d && n.inArray(g, d) > -1) e && e.push(g);
      else if (
        ((h = n.contains(g.ownerDocument, g)),
        (i = da(p.appendChild(g), "script")),
        h && ea(i),
        c)
      ) {
        f = 0;
        while ((g = i[f++])) $.test(g.type || "") && c.push(g);
      }
    return (i = null), p;
  }
  !(function () {
    var b,
      c,
      e = d.createElement("div");
    for (b in { submit: !0, change: !0, focusin: !0 })
      (c = "on" + b),
        (l[b] = c in a) ||
          (e.setAttribute(c, "t"), (l[b] = !1 === e.attributes[c].expando));
    e = null;
  })();
  var ja = /^(?:input|select|textarea)$/i,
    ka = /^key/,
    la = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ma = /^(?:focusinfocus|focusoutblur)$/,
    na = /^([^.]*)(?:\.(.+)|)/;
  function oa() {
    return !0;
  }
  function pa() {
    return !1;
  }
  function qa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function ra(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) ra(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      !1 === e)
    )
      e = pa;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return n().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = n.guid++))),
      a.each(function () {
        n.event.add(this, b, e, d, c);
      })
    );
  }
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = n._data(a);
      if (r) {
        c.handler && ((i = c), (c = i.handler), (e = i.selector)),
          c.guid || (c.guid = n.guid++),
          (g = r.events) || (g = r.events = {}),
          (k = r.handle) ||
            ((k = r.handle = function (a) {
              return void 0 === n || (a && n.event.triggered === a.type)
                ? void 0
                : n.event.dispatch.apply(k.elem, arguments);
            }),
            (k.elem = a)),
          (b = (b || "").match(F) || [""]),
          (h = b.length);
        while (h--)
          (f = na.exec(b[h]) || []),
            (o = q = f[1]),
            (p = (f[2] || "").split(".").sort()),
            o &&
              ((j = n.event.special[o] || {}),
              (o = (e ? j.delegateType : j.bindType) || o),
              (j = n.event.special[o] || {}),
              (l = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                i
              )),
              (m = g[o]) ||
                ((m = g[o] = []),
                (m.delegateCount = 0),
                (j.setup && !1 !== j.setup.call(a, d, p, k)) ||
                  (a.addEventListener
                    ? a.addEventListener(o, k, !1)
                    : a.attachEvent && a.attachEvent("on" + o, k))),
              j.add &&
                (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
              (n.event.global[o] = !0));
        a = null;
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = n.hasData(a) && n._data(a);
      if (r && (k = r.events)) {
        (b = (b || "").match(F) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = na.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = k[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (i = f = m.length);
            while (f--)
              (g = m[f]),
                (!e && q !== g.origType) ||
                  (c && c.guid !== g.guid) ||
                  (h && !h.test(g.namespace)) ||
                  (d && d !== g.selector && ("**" !== d || !g.selector)) ||
                  (m.splice(f, 1),
                  g.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, g));
            i &&
              !m.length &&
              ((l.teardown && !1 !== l.teardown.call(a, p, r.handle)) ||
                n.removeEvent(a, o, r.handle),
              delete k[o]);
          } else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
      }
    },
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        l,
        m,
        o,
        p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((i = m = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !ma.test(q + n.event.triggered) &&
          (q.indexOf(".") > -1 &&
            ((r = q.split(".")), (q = r.shift()), r.sort()),
          (h = q.indexOf(":") < 0 && "on" + q),
          (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = r.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (l = n.event.special[q] || {}),
          f || !l.trigger || !1 !== l.trigger.apply(e, c)))
      ) {
        if (!f && !l.noBubble && !n.isWindow(e)) {
          for (
            j = l.delegateType || q, ma.test(j + q) || (i = i.parentNode);
            i;
            i = i.parentNode
          )
            p.push(i), (m = i);
          m === (e.ownerDocument || d) &&
            p.push(m.defaultView || m.parentWindow || a);
        }
        o = 0;
        while ((i = p[o++]) && !b.isPropagationStopped())
          (b.type = o > 1 ? j : l.bindType || q),
            (g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle")),
            g && g.apply(i, c),
            (g = h && i[h]) &&
              g.apply &&
              L(i) &&
              ((b.result = g.apply(i, c)),
              !1 === b.result && b.preventDefault());
        if (
          ((b.type = q),
          !f &&
            !b.isDefaultPrevented() &&
            (!l._default || !1 === l._default.apply(p.pop(), c)) &&
            L(e) &&
            h &&
            e[q] &&
            !n.isWindow(e))
        ) {
          (m = e[h]), m && (e[h] = null), (n.event.triggered = q);
          try {
            e[q]();
          } catch (s) {}
          (n.event.triggered = void 0), m && (e[h] = m);
        }
        return b.result;
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        d,
        f,
        g,
        h = [],
        i = e.call(arguments),
        j = (n._data(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || !1 !== k.preDispatch.call(this, a))
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (a.rnamespace && !a.rnamespace.test(g.namespace)) ||
              ((a.handleObj = g),
              (a.data = g.data),
              void 0 !==
                (d = (
                  (n.event.special[g.origType] || {}).handle || g.handler
                ).apply(f.elem, i)) &&
                !1 === (a.result = d) &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (
        h &&
        i.nodeType &&
        ("click" !== a.type || isNaN(a.button) || a.button < 1)
      )
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (!0 !== i.disabled || "click" !== a.type)) {
            for (d = [], c = 0; c < h; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? n(e, this).index(i) > -1
                    : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        e,
        f = a.type,
        g = a,
        h = this.fixHooks[f];
      h ||
        (this.fixHooks[f] = h = la.test(f)
          ? this.mouseHooks
          : ka.test(f)
          ? this.keyHooks
          : {}),
        (e = h.props ? this.props.concat(h.props) : this.props),
        (a = new n.Event(g)),
        (b = e.length);
      while (b--) (c = e[b]), (a[c] = g[c]);
      return (
        a.target || (a.target = g.srcElement || d),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        (a.metaKey = !!a.metaKey),
        h.filter ? h.filter(a, g) : a
      );
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
      " "
    ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
        " "
      ),
      filter: function (a, b) {
        var c,
          e,
          f,
          g = b.button,
          h = b.fromElement;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((e = a.target.ownerDocument || d),
            (f = e.documentElement),
            (c = e.body),
            (a.pageX =
              b.clientX +
              ((f && f.scrollLeft) || (c && c.scrollLeft) || 0) -
              ((f && f.clientLeft) || (c && c.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((f && f.scrollTop) || (c && c.scrollTop) || 0) -
              ((f && f.clientTop) || (c && c.clientTop) || 0))),
          !a.relatedTarget &&
            h &&
            (a.relatedTarget = h === a.target ? b.toElement : h),
          a.which ||
            void 0 === g ||
            (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
          a
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== qa() && this.focus)
            try {
              return this.focus(), !1;
            } catch (a) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === qa() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if (
            n.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
          )
            return this.click(), !1;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });
      n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (n.removeEvent = d.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c);
        }
      : function (a, b, c) {
          var d = "on" + b;
          a.detachEvent &&
            (void 0 === a[d] && (a[d] = null), a.detachEvent(d, c));
        }),
    (n.Event = function (a, b) {
      if (!(this instanceof n.Event)) return new n.Event(a, b);
      a && a.type
        ? ((this.originalEvent = a),
          (this.type = a.type),
          (this.isDefaultPrevented =
            a.defaultPrevented ||
            (void 0 === a.defaultPrevented && !1 === a.returnValue)
              ? oa
              : pa))
        : (this.type = a),
        b && n.extend(this, b),
        (this.timeStamp = (a && a.timeStamp) || n.now()),
        (this[n.expando] = !0);
    }),
    (n.Event.prototype = {
      constructor: n.Event,
      isDefaultPrevented: pa,
      isPropagationStopped: pa,
      isImmediatePropagationStopped: pa,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = oa),
          a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = oa),
          a &&
            !this.isSimulated &&
            (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = oa),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || n.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    l.submit ||
      (n.event.special.submit = {
        setup: function () {
          if (n.nodeName(this, "form")) return !1;
          n.event.add(this, "click._submit keypress._submit", function (a) {
            var b = a.target,
              c =
                n.nodeName(b, "input") || n.nodeName(b, "button")
                  ? n.prop(b, "form")
                  : void 0;
            c &&
              !n._data(c, "submit") &&
              (n.event.add(c, "submit._submit", function (a) {
                a._submitBubble = !0;
              }),
              n._data(c, "submit", !0));
          });
        },
        postDispatch: function (a) {
          a._submitBubble &&
            (delete a._submitBubble,
            this.parentNode &&
              !a.isTrigger &&
              n.event.simulate("submit", this.parentNode, a));
        },
        teardown: function () {
          if (n.nodeName(this, "form")) return !1;
          n.event.remove(this, "._submit");
        },
      }),
    l.change ||
      (n.event.special.change = {
        setup: function () {
          if (ja.test(this.nodeName))
            return (
              ("checkbox" !== this.type && "radio" !== this.type) ||
                (n.event.add(this, "propertychange._change", function (a) {
                  "checked" === a.originalEvent.propertyName &&
                    (this._justChanged = !0);
                }),
                n.event.add(this, "click._change", function (a) {
                  this._justChanged && !a.isTrigger && (this._justChanged = !1),
                    n.event.simulate("change", this, a);
                })),
              !1
            );
          n.event.add(this, "beforeactivate._change", function (a) {
            var b = a.target;
            ja.test(b.nodeName) &&
              !n._data(b, "change") &&
              (n.event.add(b, "change._change", function (a) {
                !this.parentNode ||
                  a.isSimulated ||
                  a.isTrigger ||
                  n.event.simulate("change", this.parentNode, a);
              }),
              n._data(b, "change", !0));
          });
        },
        handle: function (a) {
          var b = a.target;
          if (
            this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            ("radio" !== b.type && "checkbox" !== b.type)
          )
            return a.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          return n.event.remove(this, "._change"), !ja.test(this.nodeName);
        },
      }),
    l.focusin ||
      n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a));
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = n._data(d, b);
            e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = n._data(d, b) - 1;
            e
              ? n._data(d, b, e)
              : (d.removeEventListener(a, c, !0), n._removeData(d, b));
          },
        };
      }),
    n.fn.extend({
      on: function (a, b, c, d) {
        return ra(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return ra(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (!1 !== b && "function" != typeof b) || ((c = b), (b = void 0)),
          !1 === c && (c = pa),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        if (c) return n.event.trigger(a, b, c, !0);
      },
    });
  var sa = / jQuery\d+="(?:null|\d+)"/g,
    ta = new RegExp("<(?:" + aa + ")[\\s/>]", "i"),
    ua = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    va = /<script|<style|<link/i,
    wa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    xa = /^true\/(.*)/,
    ya = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    za = ba(d),
    Aa = za.appendChild(d.createElement("div"));
  function Ba(a, b) {
    return n.nodeName(a, "table") &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function Ca(a) {
    return (a.type = (null !== n.find.attr(a, "type")) + "/" + a.type), a;
  }
  function Da(a) {
    var b = xa.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function Ea(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c,
        d,
        e,
        f = n._data(a),
        g = n._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, (g.events = {});
        for (c in h)
          for (d = 0, e = h[c].length; d < e; d++) n.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = n.extend({}, g.data));
    }
  }
  function Fa(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (((c = b.nodeName.toLowerCase()), !l.noCloneEvent && b[n.expando])) {
        e = n._data(b);
        for (d in e.events) n.removeEvent(b, d, e.handle);
        b.removeAttribute(n.expando);
      }
      "script" === c && b.text !== a.text
        ? ((Ca(b).text = a.text), Da(b))
        : "object" === c
        ? (b.parentNode && (b.outerHTML = a.outerHTML),
          l.html5Clone &&
            a.innerHTML &&
            !n.trim(b.innerHTML) &&
            (b.innerHTML = a.innerHTML))
        : "input" === c && Y.test(a.type)
        ? ((b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value))
        : "option" === c
        ? (b.defaultSelected = b.selected = a.defaultSelected)
        : ("input" !== c && "textarea" !== c) ||
          (b.defaultValue = a.defaultValue);
    }
  }
  function Ga(a, b, c, d) {
    b = f.apply([], b);
    var e,
      g,
      h,
      i,
      j,
      k,
      m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = n.isFunction(q);
    if (r || (o > 1 && "string" == typeof q && !l.checkClone && wa.test(q)))
      return a.each(function (e) {
        var f = a.eq(e);
        r && (b[0] = q.call(this, e, f.html())), Ga(f, b, c, d);
      });
    if (
      o &&
      ((k = ia(b, a[0].ownerDocument, !1, a, d)),
      (e = k.firstChild),
      1 === k.childNodes.length && (k = e),
      e || d)
    ) {
      for (i = n.map(da(k, "script"), Ca), h = i.length; m < o; m++)
        (g = k),
          m !== p &&
            ((g = n.clone(g, !0, !0)), h && n.merge(i, da(g, "script"))),
          c.call(a[m], g, m);
      if (h)
        for (j = i[i.length - 1].ownerDocument, n.map(i, Da), m = 0; m < h; m++)
          (g = i[m]),
            $.test(g.type || "") &&
              !n._data(g, "globalEval") &&
              n.contains(j, g) &&
              (g.src
                ? n._evalUrl && n._evalUrl(g.src)
                : n.globalEval(
                    (g.text || g.textContent || g.innerHTML || "").replace(
                      ya,
                      ""
                    )
                  ));
      k = e = null;
    }
    return a;
  }
  function Ha(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || n.cleanData(da(d)),
        d.parentNode &&
          (c && n.contains(d.ownerDocument, d) && ea(da(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  n.extend({
    htmlPrefilter: function (a) {
      return a.replace(ua, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i = n.contains(a.ownerDocument, a);
      if (
        (l.html5Clone || n.isXMLDoc(a) || !ta.test("<" + a.nodeName + ">")
          ? (f = a.cloneNode(!0))
          : ((Aa.innerHTML = a.outerHTML), Aa.removeChild((f = Aa.firstChild))),
        !(
          (l.noCloneEvent && l.noCloneChecked) ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          n.isXMLDoc(a)
        ))
      )
        for (d = da(f), h = da(a), g = 0; null != (e = h[g]); ++g)
          d[g] && Fa(e, d[g]);
      if (b)
        if (c)
          for (h = h || da(a), d = d || da(f), g = 0; null != (e = h[g]); g++)
            Ea(e, d[g]);
        else Ea(a, f);
      return (
        (d = da(f, "script")),
        d.length > 0 && ea(d, !i && da(a, "script")),
        (d = h = e = null),
        f
      );
    },
    cleanData: function (a, b) {
      for (
        var d,
          e,
          f,
          g,
          h = 0,
          i = n.expando,
          j = n.cache,
          k = l.attributes,
          m = n.event.special;
        null != (d = a[h]);
        h++
      )
        if ((b || L(d)) && ((f = d[i]), (g = f && j[f]))) {
          if (g.events)
            for (e in g.events)
              m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          j[f] &&
            (delete j[f],
            k || void 0 === d.removeAttribute
              ? (d[i] = void 0)
              : d.removeAttribute(i),
            c.push(f));
        }
    },
  }),
    n.fn.extend({
      domManip: Ga,
      detach: function (a) {
        return Ha(this, a, !0);
      },
      remove: function (a) {
        return Ha(this, a);
      },
      text: function (a) {
        return X(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || d).createTextNode(a)
                );
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return Ga(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            Ba(this, a).appendChild(a);
          }
        });
      },
      prepend: function () {
        return Ga(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ba(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return Ga(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return Ga(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++) {
          1 === a.nodeType && n.cleanData(da(a, !1));
          while (a.firstChild) a.removeChild(a.firstChild);
          a.options && n.nodeName(a, "select") && (a.options.length = 0);
        }
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null != a && a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return X(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a)
              return 1 === b.nodeType ? b.innerHTML.replace(sa, "") : void 0;
            if (
              "string" == typeof a &&
              !va.test(a) &&
              (l.htmlSerialize || !ta.test(a)) &&
              (l.leadingWhitespace || !_.test(a)) &&
              !ca[(Z.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = n.htmlPrefilter(a);
              try {
                for (; c < d; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (n.cleanData(da(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return Ga(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            n.inArray(this, a) < 0 &&
              (n.cleanData(da(this)), c && c.replaceChild(b, this));
          },
          a
        );
      },
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = 0, e = [], f = n(a), h = f.length - 1; d <= h; d++)
            (c = d === h ? this : this.clone(!0)),
              n(f[d])[b](c),
              g.apply(e, c.get());
          return this.pushStack(e);
        };
      }
    );
  var Ia,
    Ja = { HTML: "block", BODY: "block" };
  function Ka(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
      d = n.css(c[0], "display");
    return c.detach(), d;
  }
  function La(a) {
    var b = d,
      c = Ja[a];
    return (
      c ||
        ((c = Ka(a, b)),
        ("none" !== c && c) ||
          ((Ia = (
            Ia || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = (Ia[0].contentWindow || Ia[0].contentDocument).document),
          b.write(),
          b.close(),
          (c = Ka(a, b)),
          Ia.detach()),
        (Ja[a] = c)),
      c
    );
  }
  var Ma = /^margin/,
    Na = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
    Oa = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    },
    Pa = d.documentElement;
  !(function () {
    var b,
      c,
      e,
      f,
      g,
      h,
      i = d.createElement("div"),
      j = d.createElement("div");
    function k() {
      var k,
        l,
        m = d.documentElement;
      m.appendChild(i),
        (j.style.cssText =
          "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
        (b = e = h = !1),
        (c = g = !0),
        a.getComputedStyle &&
          ((l = a.getComputedStyle(j)),
          (b = "1%" !== (l || {}).top),
          (h = "2px" === (l || {}).marginLeft),
          (e = "4px" === (l || { width: "4px" }).width),
          (j.style.marginRight = "50%"),
          (c = "4px" === (l || { marginRight: "4px" }).marginRight),
          (k = j.appendChild(d.createElement("div"))),
          (k.style.cssText = j.style.cssText =
            "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
          (k.style.marginRight = k.style.width = "0"),
          (j.style.width = "1px"),
          (g = !parseFloat((a.getComputedStyle(k) || {}).marginRight)),
          j.removeChild(k)),
        (j.style.display = "none"),
        (f = 0 === j.getClientRects().length),
        f &&
          ((j.style.display = ""),
          (j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
          (j.childNodes[0].style.borderCollapse = "separate"),
          (k = j.getElementsByTagName("td")),
          (k[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
          (f = 0 === k[0].offsetHeight) &&
            ((k[0].style.display = ""),
            (k[1].style.display = "none"),
            (f = 0 === k[0].offsetHeight))),
        m.removeChild(i);
    }
    j.style &&
      ((j.style.cssText = "float:left;opacity:.5"),
      (l.opacity = "0.5" === j.style.opacity),
      (l.cssFloat = !!j.style.cssFloat),
      (j.style.backgroundClip = "content-box"),
      (j.cloneNode(!0).style.backgroundClip = ""),
      (l.clearCloneStyle = "content-box" === j.style.backgroundClip),
      (i = d.createElement("div")),
      (i.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      (j.innerHTML = ""),
      i.appendChild(j),
      (l.boxSizing =
        "" === j.style.boxSizing ||
        "" === j.style.MozBoxSizing ||
        "" === j.style.WebkitBoxSizing),
      n.extend(l, {
        reliableHiddenOffsets: function () {
          return null == b && k(), f;
        },
        boxSizingReliable: function () {
          return null == b && k(), e;
        },
        pixelMarginRight: function () {
          return null == b && k(), c;
        },
        pixelPosition: function () {
          return null == b && k(), b;
        },
        reliableMarginRight: function () {
          return null == b && k(), g;
        },
        reliableMarginLeft: function () {
          return null == b && k(), h;
        },
      }));
  })();
  var Qa,
    Ra,
    Sa = /^(top|right|bottom|left)$/;
  a.getComputedStyle
    ? ((Qa = function (b) {
        var c = b.ownerDocument.defaultView;
        return (c && c.opener) || (c = a), c.getComputedStyle(b);
      }),
      (Ra = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Qa(a)),
          (g = c ? c.getPropertyValue(b) || c[b] : void 0),
          ("" !== g && void 0 !== g) ||
            n.contains(a.ownerDocument, a) ||
            (g = n.style(a, b)),
          c &&
            !l.pixelMarginRight() &&
            Na.test(g) &&
            Ma.test(b) &&
            ((d = h.width),
            (e = h.minWidth),
            (f = h.maxWidth),
            (h.minWidth = h.maxWidth = h.width = g),
            (g = c.width),
            (h.width = d),
            (h.minWidth = e),
            (h.maxWidth = f)),
          void 0 === g ? g : g + ""
        );
      }))
    : Pa.currentStyle &&
      ((Qa = function (a) {
        return a.currentStyle;
      }),
      (Ra = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Qa(a)),
          (g = c ? c[b] : void 0),
          null == g && h && h[b] && (g = h[b]),
          Na.test(g) &&
            !Sa.test(b) &&
            ((d = h.left),
            (e = a.runtimeStyle),
            (f = e && e.left),
            f && (e.left = a.currentStyle.left),
            (h.left = "fontSize" === b ? "1em" : g),
            (g = h.pixelLeft + "px"),
            (h.left = d),
            f && (e.left = f)),
          void 0 === g ? g : g + "" || "auto"
        );
      }));
  function Ta(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  var Ua = /alpha\([^)]*\)/i,
    Va = /opacity\s*=\s*([^)]*)/i,
    Wa = /^(none|table(?!-c[ea]).+)/,
    Xa = new RegExp("^(" + S + ")(.*)$", "i"),
    Ya = { position: "absolute", visibility: "hidden", display: "block" },
    Za = { letterSpacing: "0", fontWeight: "400" },
    $a = ["Webkit", "O", "Moz", "ms"],
    _a = d.createElement("div").style;
  function ab(a) {
    if (a in _a) return a;
    var b = a.charAt(0).toUpperCase() + a.slice(1),
      c = $a.length;
    while (c--) if ((a = $a[c] + b) in _a) return a;
  }
  function bb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; g < h; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = n._data(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                V(d) &&
                (f[g] = n._data(d, "olddisplay", La(d.nodeName))))
            : ((e = V(d)),
              ((c && "none" !== c) || !e) &&
                n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; g < h; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  function cb(a, b, c) {
    var d = Xa.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function db(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      f < 4;
      f += 2
    )
      "margin" === c && (g += n.css(a, c + U[f], !0, e)),
        d
          ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e)))
          : ((g += n.css(a, "padding" + U[f], !0, e)),
            "padding" !== c &&
              (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    return g;
  }
  function eb(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Qa(a),
      g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
    if (e <= 0 || null == e) {
      if (
        ((e = Ra(a, b, f)),
        (e < 0 || null == e) && (e = a.style[b]),
        Na.test(e))
      )
        return e;
      (d = g && (l.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + db(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Ra(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: l.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        if (
          ((b = n.cssProps[h] || (n.cssProps[h] = ab(h) || h)),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c)
        )
          return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (
          ((f = typeof c),
          "string" === f &&
            (e = T.exec(c)) &&
            e[1] &&
            ((c = W(a, b, e)), (f = "number")),
          null != c &&
            c === c &&
            ("number" === f &&
              (c += (e && e[3]) || (n.cssNumber[h] ? "" : "px")),
            l.clearCloneStyle ||
              "" !== c ||
              0 !== b.indexOf("background") ||
              (i[b] = "inherit"),
            !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
        )
          try {
            i[b] = c;
          } catch (j) {}
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = ab(h) || h)),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && "get" in g && (f = g.get(a, !0, c)),
        void 0 === f && (f = Ra(a, b, d)),
        "normal" === f && b in Za && (f = Za[b]),
        "" === c || c
          ? ((e = parseFloat(f)), !0 === c || isFinite(e) ? e || 0 : f)
          : f
      );
    },
  }),
    n.each(["height", "width"], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          if (c)
            return Wa.test(n.css(a, "display")) && 0 === a.offsetWidth
              ? Oa(a, Ya, function () {
                  return eb(a, b, d);
                })
              : eb(a, b, d);
        },
        set: function (a, c, d) {
          var e = d && Qa(a);
          return cb(
            a,
            c,
            d
              ? db(
                  a,
                  b,
                  d,
                  l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e),
                  e
                )
              : 0
          );
        },
      };
    }),
    l.opacity ||
      (n.cssHooks.opacity = {
        get: function (a, b) {
          return Va.test(
            (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : b
            ? "1"
            : "";
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
            f = (d && d.filter) || c.filter || "";
          (c.zoom = 1),
            ((b >= 1 || "" === b) &&
              "" === n.trim(f.replace(Ua, "")) &&
              c.removeAttribute &&
              (c.removeAttribute("filter"), "" === b || (d && !d.filter))) ||
              (c.filter = Ua.test(f) ? f.replace(Ua, e) : f + " " + e);
        },
      }),
    (n.cssHooks.marginRight = Ta(l.reliableMarginRight, function (a, b) {
      if (b) return Oa(a, { display: "inline-block" }, Ra, [a, "marginRight"]);
    })),
    (n.cssHooks.marginLeft = Ta(l.reliableMarginLeft, function (a, b) {
      if (b)
        return (
          (parseFloat(Ra(a, "marginLeft")) ||
            (n.contains(a.ownerDocument, a)
              ? a.getBoundingClientRect().left -
                Oa(a, { marginLeft: 0 }, function () {
                  return a.getBoundingClientRect().left;
                })
              : 0)) + "px"
        );
    })),
    n.each(
      {
        margin: "",
        padding: "",
        border: "Width",
      },
      function (a, b) {
        (n.cssHooks[a + b] = {
          expand: function (c) {
            for (
              var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
              d < 4;
              d++
            )
              e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
            return e;
          },
        }),
          Ma.test(a) || (n.cssHooks[a + b].set = cb);
      }
    ),
    n.fn.extend({
      css: function (a, b) {
        return X(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = Qa(a), e = b.length; g < e; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return bb(this, !0);
      },
      hide: function () {
        return bb(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              V(this) ? n(this).show() : n(this).hide();
            });
      },
    });
  function fb(a, b, c, d, e) {
    return new fb.prototype.init(a, b, c, d, e);
  }
  (n.Tween = fb),
    (fb.prototype = {
      constructor: fb,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || n.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = fb.propHooks[this.prop];
        return a && a.get ? a.get(this) : fb.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = fb.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b = n.easing[this.easing](
                a,
                this.options.duration * a,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : fb.propHooks._default.set(this),
          this
        );
      },
    }),
    (fb.prototype.init.prototype = fb.prototype),
    (fb.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : n.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (fb.propHooks.scrollTop = fb.propHooks.scrollLeft = {
      set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      },
    }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (n.fx = fb.prototype.init),
    (n.fx.step = {});
  var gb,
    hb,
    ib = /^(?:toggle|show|hide)$/,
    jb = /queueHooks$/;
  function kb() {
    return (
      a.setTimeout(function () {
        gb = void 0;
      }),
      (gb = n.now())
    );
  }
  function lb(a, b) {
    var c,
      d = { height: a },
      e = 0;
    for (b = b ? 1 : 0; e < 4; e += 2 - b)
      (c = U[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }
  function mb(a, b, c) {
    for (
      var d,
        e = (pb.tweeners[b] || []).concat(pb.tweeners["*"]),
        f = 0,
        g = e.length;
      f < g;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function nb(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      m = this,
      o = {},
      p = a.style,
      q = a.nodeType && V(a),
      r = n._data(a, "fxshow");
    c.queue ||
      ((h = n._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      m.always(function () {
        m.always(function () {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [p.overflow, p.overflowX, p.overflowY]),
        (j = n.css(a, "display")),
        "inline" ===
          (k = "none" === j ? n._data(a, "olddisplay") || La(a.nodeName) : j) &&
          "none" === n.css(a, "float") &&
          (l.inlineBlockNeedsLayout && "inline" !== La(a.nodeName)
            ? (p.zoom = 1)
            : (p.display = "inline-block"))),
      c.overflow &&
        ((p.overflow = "hidden"),
        l.shrinkWrapBlocks() ||
          m.always(function () {
            (p.overflow = c.overflow[0]),
              (p.overflowX = c.overflow[1]),
              (p.overflowY = c.overflow[2]);
          }));
    for (d in b)
      if (((e = b[d]), ib.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (q ? "hide" : "show"))
        ) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0;
        }
        o[d] = (r && r[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(o))
      "inline" === ("none" === j ? La(a.nodeName) : j) && (p.display = j);
    else {
      r ? "hidden" in r && (q = r.hidden) : (r = n._data(a, "fxshow", {})),
        f && (r.hidden = !q),
        q
          ? n(a).show()
          : m.done(function () {
              n(a).hide();
            }),
        m.done(function () {
          var b;
          n._removeData(a, "fxshow");
          for (b in o) n.style(a, b, o[b]);
        });
      for (d in o)
        (g = mb(q ? r[d] : 0, d, m)),
          d in r ||
            ((r[d] = g.start),
            q &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function ob(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]) && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function pb(a, b, c) {
    var d,
      e,
      f = 0,
      g = pb.prefilters.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = gb || kb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          g < i;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: gb || kb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; c < d; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for (ob(k, j.opts.specialEasing); f < g; f++)
      if ((d = pb.prefilters[f].call(j, a, k, j.opts)))
        return (
          n.isFunction(d.stop) &&
            (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
          d
        );
    return (
      n.map(k, mb, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(pb, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return W(c.elem, a, T.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(F));
      for (var c, d = 0, e = a.length; d < e; d++)
        (c = a[d]),
          (pb.tweeners[c] = pb.tweeners[c] || []),
          pb.tweeners[c].unshift(b);
    },
    prefilters: [nb],
    prefilter: function (a, b) {
      b ? pb.prefilters.unshift(a) : pb.prefilters.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in n.fx.speeds
          ? n.fx.speeds[d.duration]
          : n.fx.speeds._default),
        (null != d.queue && !0 !== d.queue) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(V)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = pb(this, n.extend({}, a), f);
            (e || n._data(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && !1 !== a && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = n._data(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && jb.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var b,
              c = n._data(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; b < g; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(lb(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: lb("show"),
        slideUp: lb("hide"),
        slideToggle: lb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = n.timers,
        c = 0;
      for (gb = n.now(); c < b.length; c++)
        (a = b[c])() || b[c] !== a || b.splice(c--, 1);
      b.length || n.fx.stop(), (gb = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      hb || (hb = a.setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      a.clearInterval(hb), (hb = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (b, c) {
      return (
        (b = n.fx ? n.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a,
        b = d.createElement("input"),
        c = d.createElement("div"),
        e = d.createElement("select"),
        f = e.appendChild(d.createElement("option"));
      (c = d.createElement("div")),
        c.setAttribute("className", "t"),
        (c.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (a = c.getElementsByTagName("a")[0]),
        b.setAttribute("type", "checkbox"),
        c.appendChild(b),
        (a = c.getElementsByTagName("a")[0]),
        (a.style.cssText = "top:1px"),
        (l.getSetAttribute = "t" !== c.className),
        (l.style = /top/.test(a.getAttribute("style"))),
        (l.hrefNormalized = "/a" === a.getAttribute("href")),
        (l.checkOn = !!b.value),
        (l.optSelected = f.selected),
        (l.enctype = !!d.createElement("form").enctype),
        (e.disabled = !0),
        (l.optDisabled = !f.disabled),
        (b = d.createElement("input")),
        b.setAttribute("value", ""),
        (l.input = "" === b.getAttribute("value")),
        (b.value = "t"),
        b.setAttribute("type", "radio"),
        (l.radioValue = "t" === b.value);
    })();
  var qb = /\r/g,
    rb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : n.isArray(e) &&
                    (e = n.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                ((b =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in b &&
                  void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (b =
            n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]) &&
            "get" in b &&
            void 0 !== (c = b.get(e, "value"))
            ? c
            : ((c = e.value),
              "string" == typeof c ? c.replace(qb, "") : null == c ? "" : c);
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a)).replace(rb, " ");
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || e < 0,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = e < 0 ? h : f ? e : 0;
              i < h;
              i++
            )
              if (
                ((c = d[i]),
                (c.selected || i === e) &&
                  (l.optDisabled
                    ? !c.disabled
                    : null === c.getAttribute("disabled")) &&
                  (!c.parentNode.disabled ||
                    !n.nodeName(c.parentNode, "optgroup")))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--)
              if (((d = e[g]), n.inArray(n.valHooks.option.get(d), f) > -1))
                try {
                  d.selected = c = !0;
                } catch (h) {
                  d.scrollHeight;
                }
              else d.selected = !1;
            return c || (a.selectedIndex = -1), e;
          },
        },
      },
    }),
    n.each(["radio", "checkbox"], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          if (n.isArray(b)) return (a.checked = n.inArray(n(a).val(), b) > -1);
        },
      }),
        l.checkOn ||
          (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var sb,
    tb,
    ub = n.expr.attrHandle,
    vb = /^(?:checked|selected)$/i,
    wb = l.getSetAttribute,
    xb = l.input;
  n.fn.extend({
    attr: function (a, b) {
      return X(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return void 0 === a.getAttribute
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? tb : sb))),
              void 0 !== c
                ? null === c
                  ? void n.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : ((d = n.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(F);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c)
                ? (xb && wb) || !vb.test(c)
                  ? (a[d] = !1)
                  : (a[n.camelCase("default-" + c)] = a[d] = !1)
                : n.attr(a, c, ""),
              a.removeAttribute(wb ? c : d);
      },
    }),
    (tb = {
      set: function (a, b, c) {
        return (
          !1 === b
            ? n.removeAttr(a, c)
            : (xb && wb) || !vb.test(c)
            ? a.setAttribute((!wb && n.propFix[c]) || c, c)
            : (a[n.camelCase("default-" + c)] = a[c] = !0),
          c
        );
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = ub[b] || n.find.attr;
      (xb && wb) || !vb.test(b)
        ? (ub[b] = function (a, b, d) {
            var e, f;
            return (
              d ||
                ((f = ub[b]),
                (ub[b] = e),
                (e = null != c(a, b, d) ? b.toLowerCase() : null),
                (ub[b] = f)),
              e
            );
          })
        : (ub[b] = function (a, b, c) {
            if (!c)
              return a[n.camelCase("default-" + b)] ? b.toLowerCase() : null;
          });
    }),
    (xb && wb) ||
      (n.attrHooks.value = {
        set: function (a, b, c) {
          if (!n.nodeName(a, "input")) return sb && sb.set(a, b, c);
          a.defaultValue = b;
        },
      }),
    wb ||
      ((sb = {
        set: function (a, b, c) {
          var d = a.getAttributeNode(c);
          if (
            (d || a.setAttributeNode((d = a.ownerDocument.createAttribute(c))),
            (d.value = b += ""),
            "value" === c || b === a.getAttribute(c))
          )
            return b;
        },
      }),
      (ub.id = ub.name = ub.coords = function (a, b, c) {
        var d;
        if (!c)
          return (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
      }),
      (n.valHooks.button = {
        get: function (a, b) {
          var c = a.getAttributeNode(b);
          if (c && c.specified) return c.value;
        },
        set: sb.set,
      }),
      (n.attrHooks.contenteditable = {
        set: function (a, b, c) {
          sb.set(a, "" !== b && b, c);
        },
      }),
      n.each(["width", "height"], function (a, b) {
        n.attrHooks[b] = {
          set: function (a, c) {
            if ("" === c) return a.setAttribute(b, "auto"), c;
          },
        };
      })),
    l.style ||
      (n.attrHooks.style = {
        get: function (a) {
          return a.style.cssText || void 0;
        },
        set: function (a, b) {
          return (a.style.cssText = b + "");
        },
      });
  var yb = /^(?:input|select|textarea|button|object)$/i,
    zb = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return X(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return (
        (a = n.propFix[a] || a),
        this.each(function () {
          try {
            (this[a] = void 0), delete this[a];
          } catch (b) {}
        })
      );
    },
  }),
    n.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && n.isXMLDoc(a)) ||
              ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = n.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : yb.test(a.nodeName) || (zb.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    l.hrefNormalized ||
      n.each(["href", "src"], function (a, b) {
        n.propHooks[b] = {
          get: function (a) {
            return a.getAttribute(b, 4);
          },
        };
      }),
    l.optSelected ||
      (n.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return (
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
          );
        },
        set: function (a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        },
      }),
    n.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        n.propFix[this.toLowerCase()] = this;
      }
    ),
    l.enctype || (n.propFix.enctype = "encoding");
  var Ab = /[\t\r\n\f]/g;
  function Bb(a) {
    return n.attr(a, "class") || "";
  }
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, Bb(this)));
        });
      if ("string" == typeof a && a) {
        b = a.match(F) || [];
        while ((c = this[i++]))
          if (
            ((e = Bb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")))
          ) {
            g = 0;
            while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            (h = n.trim(d)), e !== h && n.attr(c, "class", h);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, Bb(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(F) || [];
        while ((c = this[i++]))
          if (
            ((e = Bb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")))
          ) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(" " + f + " ") > -1)
                d = d.replace(" " + f + " ", " ");
            (h = n.trim(d)), e !== h && n.attr(c, "class", h);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : n.isFunction(a)
        ? this.each(function (c) {
            n(this).toggleClass(a.call(this, c, Bb(this), b), b);
          })
        : this.each(function () {
            var b, d, e, f;
            if ("string" === c) {
              (d = 0), (e = n(this)), (f = a.match(F) || []);
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (void 0 !== a && "boolean" !== c) || ((b = Bb(this)), b && n._data(this, "__className__", b), n.attr(this, "class", b || !1 === a ? "" : n._data(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while ((c = this[d++]))
        if (
          1 === c.nodeType &&
          (" " + Bb(c) + " ").replace(Ab, " ").indexOf(b) > -1
        )
          return !0;
      return !1;
    },
  }),
    n.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    });
  var Cb = a.location,
    Db = n.now(),
    Eb = /\?/,
    Fb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (n.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
      d = null,
      e = n.trim(b + "");
    return e &&
      !n.trim(
        e.replace(Fb, function (a, b, e, f) {
          return (
            c && b && (d = 0), 0 === d ? a : ((c = e || b), (d += !f - !e), "")
          );
        })
      )
      ? Function("return " + e)()
      : n.error("Invalid JSON: " + b);
  }),
    (n.parseXML = function (b) {
      var c, d;
      if (!b || "string" != typeof b) return null;
      try {
        a.DOMParser
          ? ((d = new a.DOMParser()), (c = d.parseFromString(b, "text/xml")))
          : ((c = new a.ActiveXObject("Microsoft.XMLDOM")),
            (c.async = "false"),
            c.loadXML(b));
      } catch (e) {
        c = void 0;
      }
      return (
        (c &&
          c.documentElement &&
          !c.getElementsByTagName("parsererror").length) ||
          n.error("Invalid XML: " + b),
        c
      );
    });
  var Gb = /#.*$/,
    Hb = /([?&])_=[^&]*/,
    Ib = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Jb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Kb = /^(?:GET|HEAD)$/,
    Lb = /^\/\//,
    Mb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Nb = {},
    Ob = {},
    Pb = "*/".concat("*"),
    Qb = Cb.href,
    Rb = Mb.exec(Qb.toLowerCase()) || [];
  function Sb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(F) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          "+" === d.charAt(0)
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Tb(a, b, c, d) {
    var e = {},
      f = a === Ob;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Ub(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && n.extend(!0, a, c), a;
  }
  function Vb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }
        d || (d = g);
      }
      f = f || d;
    }
    if (f) return f !== i[0] && i.unshift(f), c[f];
  }
  function Wb(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (!(g = j[i + " " + f] || j["* " + f]))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                !0 === g
                  ? (g = j[e])
                  : !0 !== j[e] && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (!0 !== g)
            if (g && a.throws) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Qb,
      type: "GET",
      isLocal: Jb.test(Rb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Pb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? Ub(Ub(a, n.ajaxSettings), b) : Ub(n.ajaxSettings, a);
    },
    ajaxPrefilter: Sb(Nb),
    ajaxTransport: Sb(Ob),
    ajax: function (b, c) {
      "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = n.ajaxSetup({}, c),
        m = l.context || l,
        o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
        p = n.Deferred(),
        q = n.Callbacks("once memory"),
        r = l.statusCode || {},
        s = {},
        t = {},
        u = 0,
        v = "canceled",
        w = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === u) {
              if (!k) {
                k = {};
                while ((b = Ib.exec(g))) k[b[1].toLowerCase()] = b[2];
              }
              b = k[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === u ? g : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return u || ((a = t[c] = t[c] || a), (s[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return u || (l.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (u < 2) for (b in a) r[b] = [r[b], a[b]];
              else w.always(a[w.status]);
            return this;
          },
          abort: function (a) {
            var b = a || v;
            return j && j.abort(b), x(0, b), this;
          },
        };
      if (
        ((p.promise(w).complete = q.add),
        (w.success = w.done),
        (w.error = w.fail),
        (l.url = ((b || l.url || Qb) + "")
          .replace(Gb, "")
          .replace(Lb, Rb[1] + "//")),
        (l.type = c.method || c.type || l.method || l.type),
        (l.dataTypes = n
          .trim(l.dataType || "*")
          .toLowerCase()
          .match(F) || [""]),
        null == l.crossDomain &&
          ((d = Mb.exec(l.url.toLowerCase())),
          (l.crossDomain = !(
            !d ||
            (d[1] === Rb[1] &&
              d[2] === Rb[2] &&
              (d[3] || ("http:" === d[1] ? "80" : "443")) ===
                (Rb[3] || ("http:" === Rb[1] ? "80" : "443")))
          ))),
        l.data &&
          l.processData &&
          "string" != typeof l.data &&
          (l.data = n.param(l.data, l.traditional)),
        Tb(Nb, l, c, w),
        2 === u)
      )
        return w;
      (i = n.event && l.global),
        i && 0 == n.active++ && n.event.trigger("ajaxStart"),
        (l.type = l.type.toUpperCase()),
        (l.hasContent = !Kb.test(l.type)),
        (f = l.url),
        l.hasContent ||
          (l.data &&
            ((f = l.url += (Eb.test(f) ? "&" : "?") + l.data), delete l.data),
          !1 === l.cache &&
            (l.url = Hb.test(f)
              ? f.replace(Hb, "$1_=" + Db++)
              : f + (Eb.test(f) ? "&" : "?") + "_=" + Db++)),
        l.ifModified &&
          (n.lastModified[f] &&
            w.setRequestHeader("If-Modified-Since", n.lastModified[f]),
          n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])),
        ((l.data && l.hasContent && !1 !== l.contentType) || c.contentType) &&
          w.setRequestHeader("Content-Type", l.contentType),
        w.setRequestHeader(
          "Accept",
          l.dataTypes[0] && l.accepts[l.dataTypes[0]]
            ? l.accepts[l.dataTypes[0]] +
                ("*" !== l.dataTypes[0] ? ", " + Pb + "; q=0.01" : "")
            : l.accepts["*"]
        );
      for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
      if (l.beforeSend && (!1 === l.beforeSend.call(m, w, l) || 2 === u))
        return w.abort();
      v = "abort";
      for (e in { success: 1, error: 1, complete: 1 }) w[e](l[e]);
      if ((j = Tb(Ob, l, c, w))) {
        if (((w.readyState = 1), i && o.trigger("ajaxSend", [w, l]), 2 === u))
          return w;
        l.async &&
          l.timeout > 0 &&
          (h = a.setTimeout(function () {
            w.abort("timeout");
          }, l.timeout));
        try {
          (u = 1), j.send(s, x);
        } catch (y) {
          if (!(u < 2)) throw y;
          x(-1, y);
        }
      } else x(-1, "No Transport");
      function x(b, c, d, e) {
        var k,
          s,
          t,
          v,
          x,
          y = c;
        2 !== u &&
          ((u = 2),
          h && a.clearTimeout(h),
          (j = void 0),
          (g = e || ""),
          (w.readyState = b > 0 ? 4 : 0),
          (k = (b >= 200 && b < 300) || 304 === b),
          d && (v = Vb(l, w, d)),
          (v = Wb(l, v, w, k)),
          k
            ? (l.ifModified &&
                ((x = w.getResponseHeader("Last-Modified")),
                x && (n.lastModified[f] = x),
                (x = w.getResponseHeader("etag")) && (n.etag[f] = x)),
              204 === b || "HEAD" === l.type
                ? (y = "nocontent")
                : 304 === b
                ? (y = "notmodified")
                : ((y = v.state), (s = v.data), (t = v.error), (k = !t)))
            : ((t = y), (!b && y) || ((y = "error"), b < 0 && (b = 0))),
          (w.status = b),
          (w.statusText = (c || y) + ""),
          k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]),
          w.statusCode(r),
          (r = void 0),
          i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]),
          q.fireWith(m, [w, y]),
          i &&
            (o.trigger("ajaxComplete", [w, l]),
            --n.active || n.event.trigger("ajaxStop")));
      }
      return w;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    },
  }),
    n.each(["get", "post"], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax(
            n.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              n.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        if (n.isFunction(a))
          return this.each(function (b) {
            n(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstChild && 1 === a.firstChild.nodeType)
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = n(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    });
  function Xb(a) {
    return (a.style && a.style.display) || n.css(a, "display");
  }
  function Yb(a) {
    if (!n.contains(a.ownerDocument || d, a)) return !0;
    while (a && 1 === a.nodeType) {
      if ("none" === Xb(a) || "hidden" === a.type) return !0;
      a = a.parentNode;
    }
    return !1;
  }
  (n.expr.filters.hidden = function (a) {
    return l.reliableHiddenOffsets()
      ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length
      : Yb(a);
  }),
    (n.expr.filters.visible = function (a) {
      return !n.expr.filters.hidden(a);
    });
  var Zb = /%20/g,
    $b = /\[\]$/,
    _b = /\r?\n/g,
    ac = /^(?:submit|button|image|reset|file)$/i,
    bc = /^(?:input|select|textarea|keygen)/i;
  function cc(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || $b.test(a)
          ? d(a, e)
          : cc(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== n.type(b)) d(a, b);
    else for (e in b) cc(a + "[" + e + "]", b[e], c, d);
  }
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) cc(c, a[c], b, e);
    return d.join("&").replace(Zb, "+");
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              bc.test(this.nodeName) &&
              !ac.test(a) &&
              (this.checked || !Y.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
              ? n.map(c, function (a) {
                  return { name: b.name, value: a.replace(_b, "\r\n") };
                })
              : { name: b.name, value: c.replace(_b, "\r\n") };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr =
      void 0 !== a.ActiveXObject
        ? function () {
            return this.isLocal
              ? hc()
              : d.documentMode > 8
              ? gc()
              : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  gc()) ||
                hc();
          }
        : gc);
  var dc = 0,
    ec = {},
    fc = n.ajaxSettings.xhr();
  a.attachEvent &&
    a.attachEvent("onunload", function () {
      for (var a in ec) ec[a](void 0, !0);
    }),
    (l.cors = !!fc && "withCredentials" in fc),
    (fc = l.ajax = !!fc) &&
      n.ajaxTransport(function (b) {
        if (!b.crossDomain || l.cors) {
          var c;
          return {
            send: function (d, e) {
              var f,
                g = b.xhr(),
                h = ++dc;
              if (
                (g.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
              )
                for (f in b.xhrFields) g[f] = b.xhrFields[f];
              b.mimeType &&
                g.overrideMimeType &&
                g.overrideMimeType(b.mimeType),
                b.crossDomain ||
                  d["X-Requested-With"] ||
                  (d["X-Requested-With"] = "XMLHttpRequest");
              for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
              g.send((b.hasContent && b.data) || null),
                (c = function (a, d) {
                  var f, i, j;
                  if (c && (d || 4 === g.readyState))
                    if (
                      (delete ec[h],
                      (c = void 0),
                      (g.onreadystatechange = n.noop),
                      d)
                    )
                      4 !== g.readyState && g.abort();
                    else {
                      (j = {}),
                        (f = g.status),
                        "string" == typeof g.responseText &&
                          (j.text = g.responseText);
                      try {
                        i = g.statusText;
                      } catch (k) {
                        i = "";
                      }
                      f || !b.isLocal || b.crossDomain
                        ? 1223 === f && (f = 204)
                        : (f = j.text ? 200 : 404);
                    }
                  j && e(f, i, j, g.getAllResponseHeaders());
                }),
                b.async
                  ? 4 === g.readyState
                    ? a.setTimeout(c)
                    : (g.onreadystatechange = ec[h] = c)
                  : c();
            },
            abort: function () {
              c && c(void 0, !0);
            },
          };
        }
      });
  function gc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function hc() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }
  n.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
    },
    contents: { script: /\b(?:java|ecma)script\b/ },
    converters: {
      "text script": function (a) {
        return n.globalEval(a), a;
      },
    },
  }),
    n.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1),
        a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    n.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b,
          c = d.head || n("head")[0] || d.documentElement;
        return {
          send: function (e, f) {
            (b = d.createElement("script")),
              (b.async = !0),
              a.scriptCharset && (b.charset = a.scriptCharset),
              (b.src = a.url),
              (b.onload = b.onreadystatechange = function (a, c) {
                (c || !b.readyState || /loaded|complete/.test(b.readyState)) &&
                  ((b.onload = b.onreadystatechange = null),
                  b.parentNode && b.parentNode.removeChild(b),
                  (b = null),
                  c || f(200, "success"));
              }),
              c.insertBefore(b, c.firstChild);
          },
          abort: function () {
            b && b.onload(void 0, !0);
          },
        };
      }
    });
  var ic = [],
    jc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = ic.pop() || n.expando + "_" + Db++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          !1 !== b.jsonp &&
          (jc.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              jc.test(b.data) &&
              "data");
      if (h || "jsonp" === b.dataTypes[0])
        return (
          (e = b.jsonpCallback = n.isFunction(b.jsonpCallback)
            ? b.jsonpCallback()
            : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(jc, "$1" + e))
            : !1 !== b.jsonp &&
              (b.url += (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? n(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), ic.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script"
        );
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || d);
      var e = x.exec(a),
        f = !c && [];
      return e
        ? [b.createElement(e[1])]
        : ((e = ia([a], b, f)),
          f && f.length && n(f).remove(),
          n.merge([], e.childNodes));
    });
  var kc = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ("string" != typeof a && kc) return kc.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h > -1 && ((d = n.trim(a.slice(h, a.length))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
          })
          .always(
            c &&
              function (a, b) {
                g.each(function () {
                  c.apply(this, f || [a.responseText, b, a]);
                });
              }
          ),
      this
    );
  }),
    n.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  function lc(a) {
    return n.isWindow(a)
      ? a
      : 9 === a.nodeType && (a.defaultView || a.parentWindow);
  }
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = n.css(a, "top")),
        (i = n.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) &&
          n.inArray("auto", [f, i]) > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = { top: 0, left: 0 },
          e = this[0],
          f = e && e.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, e)
              ? (void 0 !== e.getBoundingClientRect &&
                  (d = e.getBoundingClientRect()),
                (c = lc(f)),
                {
                  top:
                    d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                  left:
                    d.left +
                    (c.pageXOffset || b.scrollLeft) -
                    (b.clientLeft || 0),
                })
              : d
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = { top: 0, left: 0 },
            d = this[0];
          return (
            "fixed" === n.css(d, "position")
              ? (b = d.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], "html") || (c = a.offset()),
                (c.top += n.css(a[0], "borderTopWidth", !0)),
                (c.left += n.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - c.top - n.css(d, "marginTop", !0),
              left: b.left - c.left - n.css(d, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent;
          while (
            a &&
            !n.nodeName(a, "html") &&
            "static" === n.css(a, "position")
          )
            a = a.offsetParent;
          return a || Pa;
        });
      },
    }),
    n.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function (d) {
          return X(
            this,
            function (a, d, e) {
              var f = lc(a);
              if (void 0 === e)
                return f
                  ? b in f
                    ? f[b]
                    : f.document.documentElement[d]
                  : a[d];
              f
                ? f.scrollTo(
                    c ? n(f).scrollLeft() : e,
                    c ? e : n(f).scrollTop()
                  )
                : (a[d] = e);
            },
            a,
            d,
            arguments.length,
            null
          );
        };
      }
    ),
    n.each(["top", "left"], function (a, b) {
      n.cssHooks[b] = Ta(l.pixelPosition, function (a, c) {
        if (c)
          return (c = Ra(a, b)), Na.test(c) ? n(a).position()[b] + "px" : c;
      });
    }),
    n.each({ Height: "height", Width: "width" }, function (a, b) {
      n.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          n.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (!0 === d || !0 === e ? "margin" : "border");
            return X(
              this,
              function (b, c, d) {
                var e;
                return n.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? n.css(b, c, g)
                  : n.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    n.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    }),
    (n.fn.size = function () {
      return this.length;
    }),
    (n.fn.andSelf = n.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return n;
      });
  var mc = a.jQuery,
    nc = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = nc), b && a.jQuery === n && (a.jQuery = mc), n;
    }),
    b || (a.jQuery = a.$ = n),
    n
  );
});
jQuery.noConflict();

/*!
 * GSAP 3.1.1
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  "use strict";
  function _inheritsLoose(t, e) {
    (t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e);
  }
  function _assertThisInitialized(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function n(t) {
    return "string" == typeof t;
  }
  function o(t) {
    return "function" == typeof t;
  }
  function p(t) {
    return "number" == typeof t;
  }
  function q(t) {
    return void 0 === t;
  }
  function r(t) {
    return "object" == typeof t;
  }
  function s(t) {
    return !1 !== t;
  }
  function t() {
    return "undefined" != typeof window;
  }
  function u(t) {
    return o(t) || n(t);
  }
  function J(t) {
    return (l = _t(t, at)) && ne;
  }
  function K(t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  }
  function L(t, e) {
    return !e && console.warn(t);
  }
  function M(t, e) {
    return (t && (at[t] = e) && l && (l[t] = e)) || at;
  }
  function N() {
    return 0;
  }
  function X(t) {
    var e,
      n,
      i = t[0];
    if ((r(i) || o(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
      for (n = pt.length; n-- && !pt[n].targetTest(i); );
      e = pt[n];
    }
    for (n = t.length; n--; )
      (t[n] && (t[n]._gsap || (t[n]._gsap = new Et(t[n], e)))) ||
        t.splice(n, 1);
    return t;
  }
  function Y(t) {
    return t._gsap || X(yt(t))[0]._gsap;
  }
  function Z(t, e) {
    var r = t[e];
    return o(r) ? t[e]() : (q(r) && t.getAttribute(e)) || r;
  }
  function $(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function _(t) {
    return Math.round(1e4 * t) / 1e4;
  }
  function aa(t, e) {
    for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
    return n < r;
  }
  function ba(t, e, r) {
    var n,
      i = p(t[1]),
      a = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[a];
    if ((i && (o.duration = t[1]), (o.parent = r), e)) {
      for (n = o; r && !("immediateRender" in n); )
        (n = r.vars.defaults || {}), (r = s(r.vars.inherit) && r.parent);
      (o.immediateRender = s(n.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[a - 1]);
    }
    return o;
  }
  function ca() {
    var t,
      e,
      r = ot.length,
      n = ot.slice(0);
    for (ut = {}, t = ot.length = 0; t < r; t++)
      (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function da(t, e, r, n) {
    ot.length && ca(), t.render(e, r, n), ot.length && ca();
  }
  function ea(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(it).length < 2 ? e : t;
  }
  function fa(t) {
    return t;
  }
  function ga(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function ha(t, e) {
    for (var r in e)
      r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
  }
  function ja(t, e) {
    for (var n in e) t[n] = r(e[n]) ? ja(t[n] || (t[n] = {}), e[n]) : e[n];
    return t;
  }
  function ka(t, e) {
    var r,
      n = {};
    for (r in t) r in e || (n[r] = t[r]);
    return n;
  }
  function oa(t, e, r, n) {
    void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
    var i = e._prev,
      a = e._next;
    i ? (i._next = a) : t[r] === e && (t[r] = a),
      a ? (a._prev = i) : t[n] === e && (t[n] = i),
      (e._dp = t),
      (e._next = e._prev = e.parent = null);
  }
  function pa(t, e) {
    !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t),
      (t._act = 0);
  }
  function qa(t) {
    for (var e = t; e; ) (e._dirty = 1), (e = e.parent);
    return t;
  }
  function ta(t) {
    return t._repeat ? ct(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  }
  function va(t, e) {
    return (
      (t - e._start) * e._ts +
      (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  }
  function wa(t, e, r) {
    if (
      (e.parent && pa(e),
      (e._start = r + e._delay),
      (e._end = e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
      (function _addLinkedListItem(t, e, r, n, i) {
        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
        var a,
          s = t[n];
        if (i) for (a = e[i]; s && s[i] > a; ) s = s._prev;
        s
          ? ((e._next = s._next), (s._next = e))
          : ((e._next = t[r]), (t[r] = e)),
          e._next ? (e._next._prev = e) : (t[n] = e),
          (e._prev = s),
          (e.parent = t);
      })(t, e, "_first", "_last", t._sort ? "_start" : 0),
      (t._recent = e)._time || (!e._dur && e._initted))
    ) {
      var n = (t.rawTime() - e._start) * e._ts;
      (!e._dur || gt(0, e.totalDuration(), n) - e._tTime > B) &&
        e.render(n, !0);
    }
    if ((qa(t), t._dp && t._time >= t._dur && t._ts && t._dur < t.duration()))
      for (var i = t; i._dp; ) i.totalTime(i._tTime, !0), (i = i._dp);
    return t;
  }
  function xa(t, e, r, n) {
    return (
      Nt(t, e),
      t._initted
        ? !r &&
          t._pt &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          d !== Ct.frame
          ? (ot.push(t), (t._lazy = [e, n]), 1)
          : void 0
        : 1
    );
  }
  function Aa(t) {
    if (t instanceof Bt) return qa(t);
    var e = t._repeat;
    return (
      (t._tDur = e
        ? e < 0
          ? 1e12
          : _(t._dur * (e + 1) + t._rDelay * e)
        : t._dur),
      qa(t.parent),
      t
    );
  }
  function Ca(t, e) {
    var r,
      i,
      a = t.labels,
      s = t._recent || mt,
      o = t.duration() >= F ? s.endTime(!1) : t._dur;
    return n(e) && (isNaN(e) || e in a)
      ? "<" === (r = e.charAt(0)) || ">" === r
        ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) +
          (parseFloat(e.substr(1)) || 0)
        : (r = e.indexOf("=")) < 0
        ? (e in a || (a[e] = o), a[e])
        : ((i = +(e.charAt(r - 1) + e.substr(r + 1))),
          1 < r ? Ca(t, e.substr(0, r - 1)) + i : o + i)
      : null == e
      ? o
      : +e;
  }
  function Da(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function Fa(t) {
    return (t + "").substr((parseFloat(t) + "").length);
  }
  function Ia(t, e) {
    return (
      t &&
      r(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && r(t[0]))) &&
      !t.nodeType &&
      t !== i
    );
  }
  function La(t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  }
  function Ma(t) {
    if (o(t)) return t;
    var c = r(t) ? t : { each: t },
      m = Ft(c.ease),
      g = c.from || 0,
      v = parseFloat(c.base) || 0,
      y = {},
      e = 0 < g && g < 1,
      b = isNaN(g) || e,
      w = c.axis,
      T = g,
      x = g;
    return (
      n(g)
        ? (T = x = { center: 0.5, edges: 0.5, end: 1 }[g] || 0)
        : !e && b && ((T = g[0]), (x = g[1])),
      function (t, e, r) {
        var n,
          i,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          p = (r || c).length,
          d = y[p];
        if (!d) {
          if (!(f = "auto" === c.grid ? 0 : (c.grid || [1, F])[1])) {
            for (
              h = -F;
              h < (h = r[f++].getBoundingClientRect().left) && f < p;

            );
            f--;
          }
          for (
            d = y[p] = [],
              n = b ? Math.min(f, p) * T - 0.5 : g % f,
              i = b ? (p * x) / f - 0.5 : (g / f) | 0,
              l = F,
              u = h = 0;
            u < p;
            u++
          )
            (a = (u % f) - n),
              (s = i - ((u / f) | 0)),
              (d[u] = o = w ? Math.abs("y" === w ? s : a) : V(a * a + s * s)),
              h < o && (h = o),
              o < l && (l = o);
          "random" === g && La(d),
            (d.max = h - l),
            (d.min = l),
            (d.v = p =
              (parseFloat(c.amount) ||
                parseFloat(c.each) *
                  (p < f
                    ? p - 1
                    : w
                    ? "y" === w
                      ? p / f
                      : f
                    : Math.max(f, p / f)) ||
                0) * ("edges" === g ? -1 : 1)),
            (d.b = p < 0 ? v - p : v),
            (d.u = Fa(c.amount || c.each) || 0),
            (m = m && p < 0 ? At(m) : m);
        }
        return (
          (p = (d[t] - d.min) / d.max || 0), _(d.b + (m ? m(p) : p) * d.v) + d.u
        );
      }
    );
  }
  function Na(e) {
    var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
    return function (t) {
      return ~~(Math.round(parseFloat(t) / e) * e * r) / r + (p(t) ? 0 : Fa(t));
    };
  }
  function Oa(u, t) {
    var h,
      l,
      e = G(u);
    return (
      !e &&
        r(u) &&
        ((h = e = u.radius || F),
        u.values
          ? ((u = yt(u.values)), (l = !p(u[0])) && (h *= h))
          : (u = Na(u.increment))),
      Da(
        t,
        e
          ? o(u)
            ? function (t) {
                return (l = u(t)), Math.abs(l - t) <= h ? l : t;
              }
            : function (t) {
                for (
                  var e,
                    r,
                    n = parseFloat(l ? t.x : t),
                    i = parseFloat(l ? t.y : 0),
                    a = F,
                    s = 0,
                    o = u.length;
                  o--;

                )
                  (e = l
                    ? (e = u[o].x - n) * e + (r = u[o].y - i) * r
                    : Math.abs(u[o] - n)) < a && ((a = e), (s = o));
                return (
                  (s = !h || a <= h ? u[s] : t),
                  l || s === t || p(t) ? s : s + Fa(t)
                );
              }
          : Na(u)
      )
    );
  }
  function Pa(t, e, r, n) {
    return Da(G(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
      return G(t)
        ? t[~~(Math.random() * t.length)]
        : (r = r || 1e-5) &&
            (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            ~~(Math.round((t + Math.random() * (e - t)) / r) * r * n) / n;
    });
  }
  function Ta(e, r, t) {
    return Da(t, function (t) {
      return e[~~r(t)];
    });
  }
  function Wa(t) {
    for (var e, r, n, i, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
      (n = t.indexOf(")", e)),
        (i = "[" === t.charAt(e + 7)),
        (r = t.substr(e + 7, n - e - 7).match(i ? it : H)),
        (s += t.substr(a, e - a) + Pa(i ? r : +r[0], +r[1], +r[2] || 1e-5)),
        (a = n + 1);
    return s + t.substr(a, t.length - a);
  }
  function Za(t, e, r) {
    var n,
      i,
      a,
      s = t.labels,
      o = F;
    for (n in s)
      (i = s[n] - e) < 0 == !!r &&
        i &&
        o > (i = Math.abs(i)) &&
        ((a = n), (o = i));
    return a;
  }
  function _a(t) {
    return pa(t), t.progress() < 1 && wt(t, "onInterrupt"), t;
  }
  function eb(t, e, r) {
    return (
      ((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
        ? e + (r - e) * t * 6
        : t < 0.5
        ? r
        : 3 * t < 2
        ? e + (r - e) * (2 / 3 - t) * 6
        : e) *
        Tt +
        0.5) |
      0
    );
  }
  function fb(t, e) {
    var r,
      n,
      i,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      d = t ? (p(t) ? [t >> 16, (t >> 8) & Tt, t & Tt] : 0) : xt.black;
    if (!d) {
      if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), xt[t]))
        d = xt[t];
      else if ("#" === t.charAt(0))
        4 === t.length &&
          (t =
            "#" +
            (r = t.charAt(1)) +
            r +
            (n = t.charAt(2)) +
            n +
            (i = t.charAt(3)) +
            i),
          (d = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & Tt, t & Tt]);
      else if ("hsl" === t.substr(0, 3))
        if (((d = f = t.match(H)), e)) {
          if (~t.indexOf("=")) return t.match(tt);
        } else
          (a = (+d[0] % 360) / 360),
            (s = d[1] / 100),
            (r =
              2 * (o = d[2] / 100) -
              (n = o <= 0.5 ? o * (s + 1) : o + s - o * s)),
            3 < d.length && (d[3] *= 1),
            (d[0] = eb(a + 1 / 3, r, n)),
            (d[1] = eb(a, r, n)),
            (d[2] = eb(a - 1 / 3, r, n));
      else d = t.match(H) || xt.transparent;
      d = d.map(Number);
    }
    return (
      e &&
        !f &&
        ((r = d[0] / Tt),
        (n = d[1] / Tt),
        (i = d[2] / Tt),
        (o = ((u = Math.max(r, n, i)) + (h = Math.min(r, n, i))) / 2),
        u === h
          ? (a = s = 0)
          : ((l = u - h),
            (s = 0.5 < o ? l / (2 - u - h) : l / (u + h)),
            (a =
              u === r
                ? (n - i) / l + (n < i ? 6 : 0)
                : u === n
                ? (i - r) / l + 2
                : (r - n) / l + 4),
            (a *= 60)),
        (d[0] = (a + 0.5) | 0),
        (d[1] = (100 * s + 0.5) | 0),
        (d[2] = (100 * o + 0.5) | 0)),
      d
    );
  }
  function gb(t, e) {
    var r,
      n,
      i,
      a = (t + "").match(kt),
      s = 0,
      o = "";
    if (!a) return t;
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        (s += (i = t.substr(s, t.indexOf(n, s) - s)).length + n.length),
        3 === (n = fb(n, e)).length && n.push(1),
        (o +=
          i +
          (e
            ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3]
            : "rgba(" + n.join(",")) +
          ")");
    return o + t.substr(s);
  }
  function jb(t) {
    var e,
      r = t.join(" ");
    (kt.lastIndex = 0),
      kt.test(r) &&
        ((e = Ot.test(r)), (t[0] = gb(t[0], e)), (t[1] = gb(t[1], e)));
  }
  function rb(t) {
    var e = (t + "").split("("),
      r = Pt[e[0]];
    return r && 1 < e.length && r.config
      ? r.config.apply(
          null,
          ~t.indexOf("{")
            ? [
                (function _parseObjectInString(t) {
                  for (
                    var e,
                      r,
                      n,
                      i = {},
                      a = t.substr(1, t.length - 3).split(":"),
                      s = a[0],
                      o = 1,
                      u = a.length;
                    o < u;
                    o++
                  )
                    (r = a[o]),
                      (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
                      (n = r.substr(0, e)),
                      (i[s] = isNaN(n) ? n.replace(Dt, "").trim() : +n),
                      (s = r.substr(e + 1).trim());
                  return i;
                })(e[1]),
              ]
            : rt.exec(t)[1].split(",").map(ea)
        )
      : Pt._CE && St.test(t)
      ? Pt._CE("", t)
      : r;
  }
  function ub(t, e, r, n) {
    void 0 === r &&
      (r = function easeOut(t) {
        return 1 - e(1 - t);
      }),
      void 0 === n &&
        (n = function easeInOut(t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var i,
      a = { easeIn: e, easeOut: r, easeInOut: n };
    return (
      $(t, function (t) {
        for (var e in ((Pt[t] = at[t] = a), (Pt[(i = t.toLowerCase())] = r), a))
          Pt[
            i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
          ] = Pt[t + "." + e] = a[e];
      }),
      a
    );
  }
  function vb(e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
    };
  }
  function wb(r, t, e) {
    function Dk(t) {
      return 1 === t ? 1 : n * Math.pow(2, -10 * t) * Q((t - a) * i) + 1;
    }
    var n = 1 <= t ? t : 1,
      i = (e || (r ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (i / R) * (Math.asin(1 / n) || 0),
      s =
        "out" === r
          ? Dk
          : "in" === r
          ? function (t) {
              return 1 - Dk(1 - t);
            }
          : vb(Dk);
    return (
      (i = R / i),
      (s.config = function (t, e) {
        return wb(r, t, e);
      }),
      s
    );
  }
  function xb(e, r) {
    function Lk(t) {
      return --t * t * ((r + 1) * t + r) + 1;
    }
    void 0 === r && (r = 1.70158);
    var t =
      "out" === e
        ? Lk
        : "in" === e
        ? function (t) {
            return 1 - Lk(1 - t);
          }
        : vb(Lk);
    return (
      (t.config = function (t) {
        return xb(e, t);
      }),
      t
    );
  }
  var E,
    i,
    a,
    h,
    l,
    f,
    d,
    c,
    m,
    g,
    v,
    y,
    b,
    w,
    T,
    x,
    k,
    O,
    C,
    P,
    S,
    D,
    A,
    j = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    z = { duration: 0.5, overwrite: !1, delay: 0 },
    F = 1e8,
    B = 1 / F,
    R = 2 * Math.PI,
    I = R / 4,
    U = 0,
    V = Math.sqrt,
    W = Math.cos,
    Q = Math.sin,
    G = Array.isArray,
    H = /(?:-?\.?\d|\.)+/gi,
    tt = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,
    et = /[-+=\.]*\d+(?:\.|e-|e)*\d*/gi,
    rt = /\(([^()]+)\)/i,
    nt = /[\+-]=-?[\.\d]+/,
    it = /[#\-+\.]*\b[a-z\d-=+%.]+/gi,
    at = {},
    st = {},
    ot = [],
    ut = {},
    ht = {},
    lt = {},
    ft = 30,
    pt = [],
    dt = "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
    _t = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    ct = function _animationCycle(t, e) {
      return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
    },
    mt = { _start: 0, endTime: N },
    gt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    vt = [].slice,
    yt = function toArray(t, e) {
      return !n(t) || e || (!a && Mt())
        ? G(t)
          ? (function _flatten(t, e, r) {
              return (
                void 0 === r && (r = []),
                t.forEach(function (t) {
                  return (n(t) && !e) || Ia(t, 1)
                    ? r.push.apply(r, yt(t))
                    : r.push(t);
                }) || r
              );
            })(t, e)
          : Ia(t)
          ? vt.call(t, 0)
          : t
          ? [t]
          : []
        : vt.call(h.querySelectorAll(t), 0);
    },
    bt = function mapRange(e, t, r, n, i) {
      var a = t - e,
        s = n - r;
      return Da(i, function (t) {
        return r + ((t - e) / a) * s;
      });
    },
    wt = function _callback(t, e, r) {
      var n,
        i,
        a = t.vars,
        s = a[e];
      if (s)
        return (
          (n = a[e + "Params"]),
          (i = a.callbackScope || t),
          r && ot.length && ca(),
          n ? s.apply(i, n) : s.call(i)
        );
    },
    Tt = 255,
    xt = {
      aqua: [0, Tt, Tt],
      lime: [0, Tt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, Tt],
      navy: [0, 0, 128],
      white: [Tt, Tt, Tt],
      olive: [128, 128, 0],
      yellow: [Tt, Tt, 0],
      orange: [Tt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [Tt, 0, 0],
      pink: [Tt, 192, 203],
      cyan: [0, Tt, Tt],
      transparent: [Tt, Tt, Tt, 0],
    },
    kt = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
      for (t in xt) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Ot = /hsl[a]?\(/,
    Ct =
      ((w = Date.now),
      (T = 500),
      (x = 33),
      (k = w()),
      (O = k),
      (P = C = 1 / 60),
      (b = {
        time: 0,
        frame: 0,
        tick: function tick() {
          Jj(!0);
        },
        wake: function wake() {
          f &&
            (!a &&
              t() &&
              ((i = a = window),
              (h = i.document || {}),
              (at.gsap = ne),
              (i.gsapVersions || (i.gsapVersions = [])).push(ne.version),
              J(l || i.GreenSockGlobals || (!i.gsap && i) || {}),
              (y = i.requestAnimationFrame)),
            g && b.sleep(),
            (v =
              y ||
              function (t) {
                return setTimeout(t, (1e3 * (P - b.time) + 1) | 0);
              }),
            (m = 1),
            Jj(2));
        },
        sleep: function sleep() {
          (y ? i.cancelAnimationFrame : clearTimeout)(g), (m = 0), (v = N);
        },
        lagSmoothing: function lagSmoothing(t, e) {
          (T = t || 1e8), (x = Math.min(e, T, 0));
        },
        fps: function fps(t) {
          (C = 1 / (t || 60)), (P = b.time + C);
        },
        add: function add(t) {
          S.indexOf(t) < 0 && S.push(t), Mt();
        },
        remove: function remove(t) {
          var e;
          ~(e = S.indexOf(t)) && S.splice(e, 1);
        },
        _listeners: (S = []),
      })),
    Mt = function _wake() {
      return !m && Ct.wake();
    },
    Pt = {},
    St = /^[\d.\-M][\d.\-,\s]/,
    Dt = /["']/g,
    At = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Ft = function _parseEase(t, e) {
      return (t && (o(t) ? t : Pt[t] || rb(t))) || e;
    };
  function Jj(e) {
    var t,
      r,
      n = w() - O,
      i = !0 === e;
    T < n && (k += n - x),
      (O += n),
      (b.time = (O - k) / 1e3),
      (0 < (t = b.time - P) || i) &&
        (b.frame++, (P += t + (C <= t ? 0.004 : C - t)), (r = 1)),
      i || (g = v(Jj)),
      r &&
        S.forEach(function (t) {
          return t(b.time, n, b.frame, e);
        });
  }
  function al(t) {
    return t < A
      ? D * t * t
      : t < 0.7272727272727273
      ? D * Math.pow(t - 1.5 / 2.75, 2) + 0.75
      : t < 0.9090909090909092
      ? D * (t -= 2.25 / 2.75) * t + 0.9375
      : D * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
  }
  $("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    ub(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, r) / 2
          : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Pt.Linear.easeNone = Pt.none = Pt.Linear.easeIn),
    ub("Elastic", wb("in"), wb("out"), wb()),
    (D = 7.5625),
    (A = 1 / 2.75),
    ub(
      "Bounce",
      function (t) {
        return 1 - al(1 - t);
      },
      al
    ),
    ub("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    ub("Circ", function (t) {
      return -(V(1 - t * t) - 1);
    }),
    ub("Sine", function (t) {
      return 1 - W(t * I);
    }),
    ub("Back", xb("in"), xb("out"), xb()),
    (Pt.SteppedEase = Pt.steps = at.SteppedEase = {
      config: function config(t, e) {
        void 0 === t && (t = 1);
        var r = 1 / t,
          n = t + (e ? 0 : 1),
          i = e ? 1 : 0;
        return function (t) {
          return (((n * gt(0, 0.99999999, t)) | 0) + i) * r;
        };
      },
    }),
    (z.ease = Pt["quad.out"]);
  var Rt,
    Et = function GSCache(t, e) {
      (this.id = U++),
        ((t._gsap = this).target = t),
        (this.harness = e),
        (this.get = e ? e.get : Z),
        (this.set = e ? e.getSetter : Wt);
    },
    zt =
      (((Rt = Animation.prototype).delay = function delay(t) {
        return t || 0 === t ? ((this._delay = t), this) : this._delay;
      }),
      (Rt.duration = function duration(t) {
        var e = arguments.length,
          r = this._repeat,
          n = 0 < r ? r * ((e ? t : this._dur) + this._rDelay) : 0;
        return e
          ? this.totalDuration(r < 0 ? t : t + n)
          : this.totalDuration() && this._dur;
      }),
      (Rt.totalDuration = function totalDuration(t) {
        if (!arguments.length) return this._tDur;
        var e = this._repeat,
          r = (t || this._rDelay) && e < 0;
        return (
          (this._tDur = r ? 1e12 : t),
          (this._dur = r ? t : (t - e * this._rDelay) / (e + 1)),
          (this._dirty = 0),
          qa(this.parent),
          this
        );
      }),
      (Rt.totalTime = function totalTime(t, e) {
        if ((Mt(), !arguments.length)) return this._tTime;
        var r,
          n = this.parent || this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (
            r = this._start,
              this._start =
                n._time -
                (0 < this._ts
                  ? t / this._ts
                  : ((this._dirty ? this.totalDuration() : this._tDur) - t) /
                    -this._ts),
              this._end += this._start - r,
              n._dirty || qa(n);
            n.parent;

          )
            n.parent._time !==
              n._start +
                (0 < n._ts
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            n.autoRemoveChildren &&
            wa(n, this, this._start - this._delay);
        }
        return (
          (this._tTime === t && (this._dur || e)) ||
            (this._ts || (this._pTime = t), da(this, t, e)),
          this
        );
      }),
      (Rt.time = function time(t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + ta(this)) % this._dur ||
                (t ? this._dur : 0),
              e
            )
          : this._time;
      }),
      (Rt.totalProgress = function totalProgress(t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this._tTime / this.totalDuration();
      }),
      (Rt.progress = function progress(t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                ta(this),
              e
            )
          : this.duration()
          ? this._time / this._dur
          : this.ratio;
      }),
      (Rt.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * r, e)
          : this._repeat
          ? ct(this._tTime, r) + 1
          : 1;
      }),
      (Rt.timeScale = function timeScale(t) {
        if (!arguments.length) return this._ts || this._pauseTS || 0;
        if (null !== this._pauseTS) return (this._pauseTS = t), this;
        var e =
          this.parent && this._ts ? va(this.parent._time, this) : this._tTime;
        return (
          (this._ts = t),
          (function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          })(this.totalTime(e, !0))
        );
      }),
      (Rt.paused = function paused(t) {
        var e = !this._ts;
        return arguments.length
          ? (e !== t &&
              (t
                ? ((this._pauseTS = this._ts),
                  (this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : ((this._ts = this._pauseTS || 1),
                  (this._pauseTS = null),
                  (t = this._tTime || this._pTime),
                  1 === this.progress() && (this._tTime -= B),
                  this.totalTime(t, !0))),
            this)
          : e;
      }),
      (Rt.startTime = function startTime(t) {
        return arguments.length
          ? (this.parent &&
              this.parent._sort &&
              wa(this.parent, this, t - this._delay),
            this)
          : this._start;
      }),
      (Rt.endTime = function endTime(t) {
        return (
          this._start +
          (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        );
      }),
      (Rt.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? va(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (Rt.repeat = function repeat(t) {
        return arguments.length ? ((this._repeat = t), Aa(this)) : this._repeat;
      }),
      (Rt.repeatDelay = function repeatDelay(t) {
        return arguments.length ? ((this._rDelay = t), Aa(this)) : this._rDelay;
      }),
      (Rt.yoyo = function yoyo(t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (Rt.seek = function seek(t, e) {
        return this.totalTime(Ca(this, t), s(e));
      }),
      (Rt.restart = function restart(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, s(e));
      }),
      (Rt.play = function play(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (Rt.reverse = function reverse(t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (Rt.pause = function pause(t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (Rt.resume = function resume() {
        return this.paused(!1);
      }),
      (Rt.reversed = function reversed(t) {
        var e = this._ts || this._pauseTS || 0;
        return arguments.length
          ? (t !== this.reversed() &&
              ((this[null === this._pauseTS ? "_ts" : "_pauseTS"] =
                Math.abs(e) * (t ? -1 : 1)),
              this.totalTime(this._tTime, !0)),
            this)
          : e < 0;
      }),
      (Rt.invalidate = function invalidate() {
        return (this._initted = 0), this;
      }),
      (Rt.isActive = function isActive(t) {
        var e,
          r = this.parent || this._dp,
          n = this._start;
        return !(
          r &&
          !(
            this._ts &&
            (this._initted || !t) &&
            r.isActive(t) &&
            (e = r.rawTime(!0)) >= n &&
            e < this.endTime(!0) - B
          )
        );
      }),
      (Rt.eventCallback = function eventCallback(t, e, r) {
        var n = this.vars;
        return 1 < arguments.length
          ? (e
              ? ((n[t] = e),
                r && (n[t + "Params"] = r),
                "onUpdate" === t && (this._onUpdate = e))
              : delete n[t],
            this)
          : n[t];
      }),
      (Rt.then = function then(t) {
        var n = this;
        return new Promise(function (e) {
          function vm() {
            var t = n.then;
            (n.then = null),
              (r = r(n)) &&
                (r.then || r === n ? (n.then = t) : o(r) || (r = fa)),
              e(r),
              (n.then = t);
          }
          var r = o(t) ? t : fa;
          (n._initted && 1 === n.totalProgress() && 0 <= n._ts) ||
          (!n._tTime && n._ts < 0)
            ? vm()
            : (n._prom = vm);
        });
      }),
      (Rt.kill = function kill() {
        _a(this);
      }),
      Animation);
  function Animation(t, e) {
    var r = t.parent || E;
    (this.vars = t),
      (this._dur = this._tDur = +t.duration || 0),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat || 0) &&
        ((this._rDelay = t.repeatDelay || 0),
        (this._yoyo = !!t.yoyo || !!t.yoyoEase),
        Aa(this)),
      (this._ts = 1),
      (this.data = t.data),
      m || Ct.wake(),
      r && wa(r, this, e || 0 === e ? e : r._time),
      t.reversed && this.reversed(!0),
      t.paused && this.paused(!0);
  }
  ga(zt.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: 0,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -B,
    _prom: 0,
    _pauseTS: null,
  });
  var Bt = (function (i) {
    function Timeline(t, e) {
      var r;
      return (
        void 0 === t && (t = {}),
        ((r = i.call(this, t, e) || this).labels = {}),
        (r.smoothChildTiming = s(t.smoothChildTiming)),
        (r.autoRemoveChildren = !!t.autoRemoveChildren),
        (r._sort = s(t.sortChildren)),
        r
      );
    }
    _inheritsLoose(Timeline, i);
    var t = Timeline.prototype;
    return (
      (t.to = function to(t, e, r, n) {
        return new jt(t, ba(arguments, 0, this), Ca(this, p(e) ? n : r)), this;
      }),
      (t.from = function from(t, e, r, n) {
        return new jt(t, ba(arguments, 1, this), Ca(this, p(e) ? n : r)), this;
      }),
      (t.fromTo = function fromTo(t, e, r, n, i) {
        return new jt(t, ba(arguments, 2, this), Ca(this, p(e) ? i : n)), this;
      }),
      (t.set = function set(t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          e.repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new jt(t, e, Ca(this, r)),
          this
        );
      }),
      (t.call = function call(t, e, r) {
        return wa(this, jt.delayedCall(0, t, e), Ca(this, r));
      }),
      (t.staggerTo = function staggerTo(t, e, r, n, i, a, s) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || n),
          (r.onComplete = a),
          (r.onCompleteParams = s),
          (r.parent = this),
          new jt(t, r, Ca(this, i)),
          this
        );
      }),
      (t.staggerFrom = function staggerFrom(t, e, r, n, i, a, o) {
        return (
          (r.runBackwards = 1),
          (r.immediateRender = s(r.immediateRender)),
          this.staggerTo(t, e, r, n, i, a, o)
        );
      }),
      (t.staggerFromTo = function staggerFromTo(t, e, r, n, i, a, o, u) {
        return (
          (n.startAt = r),
          (n.immediateRender = s(n.immediateRender)),
          this.staggerTo(t, e, n, i, a, o, u)
        );
      }),
      (t.render = function render(t, e, r) {
        var n,
          i,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          p,
          d,
          c,
          m = this._time,
          g = this._dirty ? this.totalDuration() : this._tDur,
          v = this._dur,
          y = g - B < t && 0 <= t && this !== E ? g : t < B ? 0 : t,
          b = this._zTime < 0 != t < 0 && (this._initted || !v);
        if (y !== this._tTime || r || b) {
          if (
            (b && (v || (m = this._zTime), (!t && e) || (this._zTime = t)),
            (n = y),
            (f = this._start),
            (u = 0 === (l = this._ts)),
            m !== this._time && v && (n += this._time - m),
            this._repeat &&
              ((d = this._yoyo),
              (o = v + this._rDelay),
              (v < (n = _(y % o)) || g === y) && (n = v),
              (s = ~~(y / o)) && s === y / o && ((n = v), s--),
              d && 1 & s && ((n = v - n), (c = 1)),
              s !== (p = ct(this._tTime, o)) && !this._lock))
          ) {
            var w = d && 1 & p,
              T = w === (d && 1 & s);
            if (
              (s < p && (w = !w),
              (m = w ? 0 : v),
              (this._lock = 1),
              (this.render(m, e, !v)._lock = 0),
              !e && this.parent && wt(this, "onRepeat"),
              this.vars.repeatRefresh &&
                !c &&
                this.getChildren().forEach(function (t) {
                  return t.invalidate();
                }),
              m !== this._time || u != !this._ts)
            )
              return this;
            if (
              (T &&
                ((this._lock = 2),
                (m = w ? v + 1e-4 : -1e-4),
                this.render(m, !0)),
              (this._lock = 0),
              !this._ts && !u)
            )
              return this;
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (h = (function _findNextPauseTween(t, e, r) {
                var n;
                if (e < r)
                  for (n = t._first; n && n._start <= r; ) {
                    if (!n._dur && "isPause" === n.data && n._start > e)
                      return n;
                    n = n._next;
                  }
                else
                  for (n = t._last; n && n._start >= r; ) {
                    if (!n._dur && "isPause" === n.data && n._start < e)
                      return n;
                    n = n._prev;
                  }
              })(this, _(m), _(n))) &&
              (y -= n - (n = h._start)),
            (this._tTime = y),
            (this._time = n),
            (this._act = !l),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate), (this._initted = 1)),
            m || !n || e || wt(this, "onStart"),
            m <= n && 0 <= t)
          )
            for (i = this._first; i; ) {
              if (
                ((a = i._next), (i._act || n >= i._start) && i._ts && h !== i)
              ) {
                if (i.parent !== this) return this.render(t, e, r);
                if (
                  (i.render(
                    0 < i._ts
                      ? (n - i._start) * i._ts
                      : (i._dirty ? i.totalDuration() : i._tDur) +
                          (n - i._start) * i._ts,
                    e,
                    r
                  ),
                  n !== this._time || (!this._ts && !u))
                ) {
                  h = 0;
                  break;
                }
              }
              i = a;
            }
          else {
            i = this._last;
            for (var x = t < 0 ? t : n; i; ) {
              if (
                ((a = i._prev), (i._act || x <= i._end) && i._ts && h !== i)
              ) {
                if (i.parent !== this) return this.render(t, e, r);
                if (
                  (i.render(
                    0 < i._ts
                      ? (x - i._start) * i._ts
                      : (i._dirty ? i.totalDuration() : i._tDur) +
                          (x - i._start) * i._ts,
                    e,
                    r
                  ),
                  n !== this._time || (!this._ts && !u))
                ) {
                  h = 0;
                  break;
                }
              }
              i = a;
            }
          }
          if (
            h &&
            !e &&
            (this.pause(),
            (h.render(m <= n ? 0 : -B)._zTime = m <= n ? 1 : -1),
            this._ts)
          )
            return (this._start = f), this.render(t, e, r);
          this._onUpdate && !e && wt(this, "onUpdate", !0),
            ((y === g && g >= this.totalDuration()) || (!y && this._ts < 0)) &&
              ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                ((!t && v) ||
                  !((t && 0 < this._ts) || (!y && this._ts < 0)) ||
                  pa(this, 1),
                e ||
                  (t < 0 && !m) ||
                  (wt(this, y === g ? "onComplete" : "onReverseComplete", !0),
                  this._prom && this._prom())));
        }
        return this;
      }),
      (t.add = function add(t, e) {
        var r = this;
        if ((p(e) || (e = Ca(this, e)), !(t instanceof zt))) {
          if (G(t))
            return (
              t.forEach(function (t) {
                return r.add(t, e);
              }),
              qa(this)
            );
          if (n(t)) return this.addLabel(t, e);
          if (!o(t)) return this;
          t = jt.delayedCall(0, t);
        }
        return this !== t ? wa(this, t, e) : this;
      }),
      (t.getChildren = function getChildren(t, e, r, n) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === n && (n = -F);
        for (var i = [], a = this._first; a; )
          a._start >= n &&
            (a instanceof jt
              ? e && i.push(a)
              : (r && i.push(a),
                t && i.push.apply(i, a.getChildren(!0, e, r)))),
            (a = a._next);
        return i;
      }),
      (t.getById = function getById(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
          if (e[r].vars.id === t) return e[r];
      }),
      (t.remove = function remove(t) {
        return n(t)
          ? this.removeLabel(t)
          : o(t)
          ? this.killTweensOf(t)
          : (oa(this, t),
            t === this._recent && (this._recent = this._last),
            qa(this));
      }),
      (t.totalTime = function totalTime(t, e) {
        return arguments.length
          ? ((this._forcing = 1),
            this.parent ||
              this._dp ||
              !this._ts ||
              (this._start =
                Ct.time -
                (0 < this._ts
                  ? t / this._ts
                  : (this.totalDuration() - t) / -this._ts)),
            i.prototype.totalTime.call(this, t, e),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function addLabel(t, e) {
        return (this.labels[t] = Ca(this, e)), this;
      }),
      (t.removeLabel = function removeLabel(t) {
        return delete this.labels[t], this;
      }),
      (t.addPause = function addPause(t, e, r) {
        var n = jt.delayedCall(0, e || N, r);
        return (
          (n.data = "isPause"), (this._hasPause = 1), wa(this, n, Ca(this, t))
        );
      }),
      (t.removePause = function removePause(t) {
        var e = this._first;
        for (t = Ca(this, t); e; )
          e._start === t && "isPause" === e.data && pa(e), (e = e._next);
      }),
      (t.killTweensOf = function killTweensOf(t, e, r) {
        for (var n = this.getTweensOf(t, r), i = n.length; i--; )
          Lt !== n[i] && n[i].kill(t, e);
        return this;
      }),
      (t.getTweensOf = function getTweensOf(t, e) {
        for (var r, n = [], i = yt(t), a = this._first; a; )
          a instanceof jt
            ? !aa(a._targets, i) ||
              (e && !a.isActive("started" === e)) ||
              n.push(a)
            : (r = a.getTweensOf(i, e)).length && n.push.apply(n, r),
            (a = a._next);
        return n;
      }),
      (t.tweenTo = function tweenTo(t, e) {
        var r = this,
          n = Ca(r, t),
          i = e && e.startAt,
          a = jt.to(
            r,
            ga(
              {
                ease: "none",
                lazy: !1,
                time: n,
                duration:
                  Math.abs(n - (i && "time" in i ? i.time : r._time)) /
                    r.timeScale() || B,
                onStart: function onStart() {
                  r.pause();
                  var t = Math.abs(n - r._time) / r.timeScale();
                  a._dur !== t && ((a._dur = t), a.render(a._time, !0, !0)),
                    e && e.onStart && e.onStart.apply(a, e.onStartParams || []);
                },
              },
              e
            )
          );
        return a;
      }),
      (t.tweenFromTo = function tweenFromTo(t, e, r) {
        return this.tweenTo(e, ga({ startAt: { time: Ca(this, t) } }, r));
      }),
      (t.recent = function recent() {
        return this._recent;
      }),
      (t.nextLabel = function nextLabel(t) {
        return void 0 === t && (t = this._time), Za(this, Ca(this, t));
      }),
      (t.previousLabel = function previousLabel(t) {
        return void 0 === t && (t = this._time), Za(this, Ca(this, t), 1);
      }),
      (t.currentLabel = function currentLabel(t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + B);
      }),
      (t.shiftChildren = function shiftChildren(t, e, r) {
        void 0 === r && (r = 0);
        for (var n, i = this._first, a = this.labels; i; )
          i._start >= r && (i._start += t), (i = i._next);
        if (e) for (n in a) a[n] >= r && (a[n] += t);
        return qa(this);
      }),
      (t.invalidate = function invalidate() {
        var t = this._first;
        for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
        return i.prototype.invalidate.call(this);
      }),
      (t.clear = function clear(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
          (e = r._next), this.remove(r), (r = e);
        return (
          (this._time = this._tTime = 0), t && (this.labels = {}), qa(this)
        );
      }),
      (t.totalDuration = function totalDuration(t) {
        var e,
          r,
          n = 0,
          i = this,
          a = i._last,
          s = F,
          o = i._repeat,
          u = o * i._rDelay || 0,
          h = o < 0;
        if (arguments.length) return h ? i : i.timeScale(i.totalDuration() / t);
        if (i._dirty) {
          for (; a; )
            (e = a._prev),
              a._dirty && a.totalDuration(),
              a._start > s && i._sort && a._ts && !i._lock
                ? ((i._lock = 1), wa(i, a, a._start - a._delay), (i._lock = 0))
                : (s = a._start),
              a._start < 0 &&
                a._ts &&
                ((n -= a._start),
                ((!i.parent && !i._dp) ||
                  (i.parent && i.parent.smoothChildTiming)) &&
                  ((i._start += a._start / i._ts),
                  (i._time -= a._start),
                  (i._tTime -= a._start)),
                i.shiftChildren(-a._start, !1, -1e20),
                (s = 0)),
              n <
                (r = a._end =
                  a._start + a._tDur / Math.abs(a._ts || a._pauseTS || B)) &&
                a._ts &&
                (n = _(r)),
              (a = e);
          (i._dur = i === E && i._time > n ? i._time : Math.min(F, n)),
            (i._tDur =
              h && (i._dur || u) ? 1e12 : Math.min(F, n * (o + 1) + u)),
            (i._end =
              i._start + (i._tDur / Math.abs(i._ts || i._pauseTS || B) || 0)),
            (i._dirty = 0);
        }
        return i._tDur;
      }),
      (Timeline.updateRoot = function updateRoot(t) {
        if ((E._ts && (da(E, va(t, E)), (d = Ct.frame)), Ct.frame >= ft)) {
          ft += j.autoSleep || 120;
          var e = E._first;
          if ((!e || !e._ts) && j.autoSleep && Ct._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || Ct.sleep();
          }
        }
      }),
      Timeline
    );
  })(zt);
  ga(Bt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  function Eb(t, e, i, a, s, u) {
    var h, l, f, p;
    if (
      ht[t] &&
      !1 !==
        (h = new ht[t]()).init(
          s,
          h.rawVars
            ? e[t]
            : (function _processVars(t, e, i, a, s) {
                if (
                  (o(t) && (t = Yt(t, s, e, i, a)),
                  !r(t) || (t.style && t.nodeType) || G(t))
                )
                  return n(t) ? Yt(t, s, e, i, a) : t;
                var u,
                  h = {};
                for (u in t) h[u] = Yt(t[u], s, e, i, a);
                return h;
              })(e[t], a, s, u, i),
          i,
          a,
          u
        ) &&
      ((i._pt = l = new ee(i._pt, s, t, 0, 1, h.render, h, 0, h.priority)),
      i !== c)
    )
      for (f = i._ptLookup[i._targets.indexOf(s)], p = h._props.length; p--; )
        f[h._props[p]] = l;
    return h;
  }
  var Lt,
    It = function _addPropTween(t, e, r, i, a, s, u, h, l) {
      o(i) && (i = i(a || 0, t, s));
      var f,
        p = t[e],
        d =
          "get" !== r
            ? r
            : o(p)
            ? l
              ? t[
                  e.indexOf("set") || !o(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](l)
              : t[e]()
            : p,
        _ = o(p) ? (l ? $t : Vt) : Ut;
      if (
        (n(i) &&
          (~i.indexOf("random(") && (i = Wa(i)),
          "=" === i.charAt(1) &&
            (i =
              parseFloat(d) +
              parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) +
              (Fa(d) || 0))),
        d !== i)
      )
        return isNaN(d + i)
          ? (p || e in t || K(e, i),
            function _addComplexStringPropTween(t, e, r, n, i, a, s) {
              var o,
                u,
                h,
                l,
                f,
                p,
                d,
                _,
                c = new ee(this._pt, t, e, 0, 1, Gt, null, i),
                m = 0,
                g = 0;
              for (
                c.b = r,
                  c.e = n,
                  r += "",
                  (d = ~(n += "").indexOf("random(")) && (n = Wa(n)),
                  a && (a((_ = [r, n]), t, e), (r = _[0]), (n = _[1])),
                  u = r.match(et) || [];
                (o = et.exec(n));

              )
                (l = o[0]),
                  (f = n.substring(m, o.index)),
                  h ? (h = (h + 1) % 5) : "rgba(" === f.substr(-5) && (h = 1),
                  l !== u[g++] &&
                    ((p = parseFloat(u[g - 1]) || 0),
                    (c._pt = {
                      _next: c._pt,
                      p: f || 1 === g ? f : ",",
                      s: p,
                      c:
                        "=" === l.charAt(1)
                          ? parseFloat(l.substr(2)) *
                            ("-" === l.charAt(0) ? -1 : 1)
                          : parseFloat(l) - p,
                      m: h && h < 4 ? Math.round : 0,
                    }),
                    (m = et.lastIndex));
              return (
                (c.c = m < n.length ? n.substring(m, n.length) : ""),
                (c.fp = s),
                (nt.test(n) || d) && (c.e = 0),
                (this._pt = c)
              );
            }.call(this, t, e, d, i, _, h || j.stringFilter, l))
          : ((f = new ee(
              this._pt,
              t,
              e,
              +d || 0,
              i - (d || 0),
              "boolean" == typeof p ? Zt : Qt,
              0,
              _
            )),
            l && (f.fp = l),
            u && f.modifier(u, this, t),
            (this._pt = f));
    },
    Nt = function _initTween(t, e) {
      var r,
        n,
        i,
        a,
        o,
        u,
        h,
        l,
        f,
        p,
        d,
        _,
        c = t.vars,
        m = c.ease,
        g = c.startAt,
        v = c.immediateRender,
        y = c.lazy,
        b = c.onUpdate,
        w = c.onUpdateParams,
        T = c.callbackScope,
        x = c.runBackwards,
        k = c.yoyoEase,
        O = c.keyframes,
        C = c.autoRevert,
        M = t._dur,
        P = t._startAt,
        S = t._targets,
        D = t.parent,
        A = D && "nested" === D.data ? D.parent._targets : S,
        F = "auto" === t._overwrite,
        R = t.timeline;
      if (
        (!R || (O && m) || (m = "none"),
        (t._ease = Ft(m, z.ease)),
        (t._yEase = k ? At(Ft(!0 === k ? m : k, z.ease)) : 0),
        k &&
          t._yoyo &&
          !t._repeat &&
          ((k = t._yEase), (t._yEase = t._ease), (t._ease = k)),
        !R)
      ) {
        if ((P && P.render(-1, !0).kill(), g)) {
          if (
            (pa(
              (t._startAt = jt.set(
                S,
                ga(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: D,
                    immediateRender: !0,
                    lazy: s(y),
                    startAt: null,
                    delay: 0,
                    onUpdate: b,
                    onUpdateParams: w,
                    callbackScope: T,
                    stagger: 0,
                  },
                  g
                )
              ))
            ),
            v)
          )
            if (0 < e) C || (t._startAt = 0);
            else if (M) return;
        } else if (x && M)
          if (P) C || (t._startAt = 0);
          else if (
            (e && (v = !1),
            pa(
              (t._startAt = jt.set(
                S,
                _t(ka(c, st), {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: v && s(y),
                  immediateRender: v,
                  stagger: 0,
                  parent: D,
                })
              ))
            ),
            v)
          ) {
            if (!e) return;
          } else _initTween(t._startAt, B);
        for (
          r = ka(c, st),
            _ = (l = S[(t._pt = 0)] ? Y(S[0]).harness : 0) && c[l.prop],
            y = (M && s(y)) || (y && !M),
            n = 0;
          n < S.length;
          n++
        ) {
          if (
            ((h = (o = S[n])._gsap || X(S)[n]._gsap),
            (t._ptLookup[n] = p = {}),
            ut[h.id] && ca(),
            (d = A === S ? n : A.indexOf(o)),
            l &&
              !1 !== (f = new l()).init(o, _ || r, t, d, A) &&
              ((t._pt = a = new ee(
                t._pt,
                o,
                f.name,
                0,
                1,
                f.render,
                f,
                0,
                f.priority
              )),
              f._props.forEach(function (t) {
                p[t] = a;
              }),
              f.priority && (u = 1)),
            !l || _)
          )
            for (i in r)
              ht[i] && (f = Eb(i, r, t, d, o, A))
                ? f.priority && (u = 1)
                : (p[i] = a = It.call(
                    t,
                    o,
                    i,
                    "get",
                    r[i],
                    d,
                    A,
                    0,
                    c.stringFilter
                  ));
          t._op && t._op[n] && t.kill(o, t._op[n]),
            F && t._pt && ((Lt = t), E.killTweensOf(o, p, "started"), (Lt = 0)),
            t._pt && y && (ut[h.id] = 1);
        }
        u && te(t), t._onInit && t._onInit(t);
      }
      (t._from = !R && !!c.runBackwards), (t._onUpdate = b), (t._initted = 1);
    },
    Yt = function _parseFuncOrString(t, e, r, i, a) {
      return o(t)
        ? t.call(e, r, i, a)
        : n(t) && ~t.indexOf("random(")
        ? Wa(t)
        : t;
    },
    qt = dt + ",repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    Xt = (qt + ",id,stagger,delay,duration,paused").split(","),
    jt = (function (O) {
      function Tween(t, e, n) {
        var i;
        "number" == typeof e && ((n.duration = e), (e = n), (n = null));
        var a,
          o,
          h,
          l,
          f,
          d,
          _,
          c,
          m = (i =
            O.call(
              this,
              (function _inheritDefaults(t) {
                var e = t.parent || E,
                  r = t.keyframes ? ha : ga;
                if (s(t.inherit))
                  for (; e; ) r(t, e.vars.defaults), (e = e.parent);
                return t;
              })(e),
              n
            ) || this).vars,
          g = m.duration,
          v = m.delay,
          y = m.immediateRender,
          b = m.stagger,
          w = m.overwrite,
          T = m.keyframes,
          x = m.defaults,
          k = G(t) && p(t[0]) ? [t] : yt(t);
        if (
          ((i._targets = k.length
            ? X(k)
            : L(
                "GSAP target " + t + " not found. https://greensock.com",
                !j.nullTargetWarn
              ) || []),
          (i._ptLookup = []),
          (i._overwrite = w),
          T || b || u(g) || u(v))
        ) {
          if (
            ((e = i.vars),
            (a = i.timeline = new Bt({
              data: "nested",
              defaults: x || {},
            })).kill(),
            (a.parent = _assertThisInitialized(i)),
            T)
          )
            ga(a.vars.defaults, { ease: "none" }),
              T.forEach(function (t) {
                return a.to(k, t, ">");
              });
          else {
            if (((l = k.length), (_ = b ? Ma(b) : N), r(b)))
              for (f in b) ~qt.indexOf(f) && ((c = c || {})[f] = b[f]);
            for (o = 0; o < l; o++) {
              for (f in ((h = {}), e)) Xt.indexOf(f) < 0 && (h[f] = e[f]);
              (h.stagger = 0),
                c && _t(h, c),
                e.yoyoEase && !e.repeat && (h.yoyoEase = e.yoyoEase),
                (d = k[o]),
                (h.duration = +Yt(g, _assertThisInitialized(i), o, d, k)),
                (h.delay =
                  (+Yt(v, _assertThisInitialized(i), o, d, k) || 0) - i._delay),
                !b &&
                  1 === l &&
                  h.delay &&
                  ((i._delay = v = h.delay), (i._start += v), (h.delay = 0)),
                a.to(d, h, _(o, d, k));
            }
            g = v = 0;
          }
          g || i.duration((g = a.duration()));
        } else i.timeline = 0;
        return (
          !0 === w &&
            ((Lt = _assertThisInitialized(i)), E.killTweensOf(k), (Lt = 0)),
          (y ||
            (!g &&
              !T &&
              i._start === i.parent._time &&
              s(y) &&
              (function _hasNoPausedAncestors(t) {
                return !t || (t._ts && _hasNoPausedAncestors(t.parent));
              })(_assertThisInitialized(i)) &&
              "nested" !== i.parent.data)) &&
            ((i._tTime = -B), i.render(Math.max(0, -v))),
          i
        );
      }
      _inheritsLoose(Tween, O);
      var t = Tween.prototype;
      return (
        (t.render = function render(t, e, r) {
          var n,
            i,
            a,
            s,
            o,
            u,
            h,
            l,
            f,
            p = this._time,
            d = this._tDur,
            c = this._dur,
            m = d - B < t && 0 <= t ? d : t < B ? 0 : t;
          if (c) {
            if (
              m !== this._tTime ||
              !t ||
              r ||
              (this._startAt && this._zTime < 0 != t < 0)
            ) {
              if (((n = m), (l = this.timeline), this._repeat)) {
                if (
                  ((s = c + this._rDelay),
                  c < (n = _(m % s)) && (n = c),
                  (a = ~~(m / s)) && a === m / s && ((n = c), a--),
                  (u = this._yoyo && 1 & a) && ((f = this._yEase), (n = c - n)),
                  (o = ct(this._tTime, s)),
                  n === p && !r && this._initted)
                )
                  return this;
                a !== o &&
                  (!this.vars.repeatRefresh ||
                    u ||
                    this._lock ||
                    ((this._lock = r = 1),
                    (this.render(s * a, !0).invalidate()._lock = 0)));
              }
              if (!this._initted && xa(this, n, r, e))
                return (this._tTime = 0), this;
              for (
                this._tTime = m,
                  this._time = n,
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  this.ratio = h = (f || this._ease)(n / c),
                  this._from && (this.ratio = h = 1 - h),
                  p || !n || e || wt(this, "onStart"),
                  i = this._pt;
                i;

              )
                i.r(h, i.d), (i = i._next);
              (l && l.render(t < 0 ? t : !n && u ? -B : l._dur * h, e, r)) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                  wt(this, "onUpdate")),
                this._repeat &&
                  a !== o &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  wt(this, "onRepeat"),
                (m !== this._tDur && m) ||
                  this._tTime !== m ||
                  (t < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startAt.render(t, !0, r),
                  (!t && c) ||
                    !((t && 0 < this._ts) || (!m && this._ts < 0)) ||
                    pa(this, 1),
                  e ||
                    (t < 0 && !p) ||
                    (wt(this, m === d ? "onComplete" : "onReverseComplete", !0),
                    this._prom && this._prom()));
            }
          } else
            !(function _renderZeroDurationTween(t, e, r, n) {
              var i,
                a = t._zTime < 0 ? 0 : 1,
                s = e < 0 ? 0 : 1,
                o = t._rDelay,
                u = 0;
              if (
                (o &&
                  t._repeat &&
                  ((u = gt(0, t._tDur, e)),
                  ct(u, o) !== ct(t._tTime, o) &&
                    ((a = 1 - s),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                (t._initted || !xa(t, e, n, r)) &&
                  (s !== a || n || t._zTime === B || (!e && t._zTime)))
              ) {
                for (
                  t._zTime = e || (r ? B : 0),
                    t.ratio = s,
                    t._from && (s = 1 - s),
                    t._time = 0,
                    t._tTime = u,
                    r || wt(t, "onStart"),
                    i = t._pt;
                  i;

                )
                  i.r(s, i.d), (i = i._next);
                !s &&
                  t._startAt &&
                  !t._onUpdate &&
                  t._start &&
                  t._startAt.render(e, !0, n),
                  t._onUpdate && !r && wt(t, "onUpdate"),
                  u && t._repeat && !r && t.parent && wt(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                    t.ratio === s &&
                    (t.ratio && pa(t, 1),
                    r ||
                      (wt(t, t.ratio ? "onComplete" : "onReverseComplete", !0),
                      t._prom && t._prom()));
              }
            })(this, t, e, r);
          return this;
        }),
        (t.targets = function targets() {
          return this._targets;
        }),
        (t.invalidate = function invalidate() {
          return (
            (this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(),
            O.prototype.invalidate.call(this)
          );
        }),
        (t.kill = function kill(t, e) {
          if (
            (void 0 === e && (e = "all"),
            !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))
          )
            return _a(this);
          if (this.timeline)
            return (
              this.timeline.killTweensOf(t, e, Lt && !0 !== Lt.vars.overwrite),
              this
            );
          var r,
            i,
            a,
            s,
            o,
            u,
            h,
            l = this._targets,
            f = t ? yt(t) : l,
            p = this._ptLookup,
            d = this._pt;
          if (
            (!e || "all" === e) &&
            (function _arraysMatch(t, e) {
              for (
                var r = t.length, n = r === e.length;
                n && r-- && t[r] === e[r];

              );
              return r < 0;
            })(l, f)
          )
            return _a(this);
          for (
            r = this._op = this._op || [],
              "all" !== e &&
                (n(e) &&
                  ((o = {}),
                  $(e, function (t) {
                    return (o[t] = 1);
                  }),
                  (e = o)),
                (e = (function _addAliasesToVars(t, e) {
                  var r,
                    n,
                    i,
                    a,
                    s = t[0] ? Y(t[0]).harness : 0,
                    o = s && s.aliases;
                  if (!o) return e;
                  for (n in ((r = _t({}, e)), o))
                    if ((n in r))
                      for (i = (a = o[n].split(",")).length; i--; )
                        r[a[i]] = r[n];
                  return r;
                })(l, e))),
              h = l.length;
            h--;

          )
            if (~f.indexOf(l[h]))
              for (o in ((i = p[h]),
              "all" === e
                ? ((r[h] = e), (s = i), (a = {}))
                : ((a = r[h] = r[h] || {}), (s = e)),
              s))
                (u = i && i[o]) &&
                  (("kill" in u.d && !0 !== u.d.kill(o)) || oa(this, u, "_pt"),
                  delete i[o]),
                  "all" !== a && (a[o] = 1);
          return this._initted && !this._pt && d && _a(this), this;
        }),
        (Tween.to = function to(t, e, r) {
          return new Tween(t, e, r);
        }),
        (Tween.from = function from(t, e) {
          return new Tween(t, ba(arguments, 1));
        }),
        (Tween.delayedCall = function delayedCall(t, e, r, n) {
          return new Tween(e, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: n,
          });
        }),
        (Tween.fromTo = function fromTo(t, e, r) {
          return new Tween(t, ba(arguments, 2));
        }),
        (Tween.set = function set(t, e) {
          return (
            (e.duration = 0), e.repeatDelay || (e.repeat = 0), new Tween(t, e)
          );
        }),
        (Tween.killTweensOf = function killTweensOf(t, e, r) {
          return E.killTweensOf(t, e, r);
        }),
        Tween
      );
    })(zt);
  ga(jt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    $("staggerTo,staggerFrom,staggerFromTo", function (r) {
      jt[r] = function () {
        var t = new Bt(),
          e = vt.call(arguments, 0);
        return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
      };
    });
  function Pb(t, e, r) {
    return t.setAttribute(e, r);
  }
  function Xb(t, e, r, n) {
    n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
  }
  var Ut = function _setterPlain(t, e, r) {
      return (t[e] = r);
    },
    Vt = function _setterFunc(t, e, r) {
      return t[e](r);
    },
    $t = function _setterFuncWithParam(t, e, r, n) {
      return t[e](n.fp, r);
    },
    Wt = function _getSetter(t, e) {
      return o(t[e]) ? Vt : q(t[e]) && t.setAttribute ? Pb : Ut;
    },
    Qt = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
    },
    Zt = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    Gt = function _renderComplexString(t, e) {
      var r = e._pt,
        n = "";
      if (!t && e.b) n = e.b;
      else if (1 === t && e.e) n = e.e;
      else {
        for (; r; )
          (n =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
            n),
            (r = r._next);
        n += e.c;
      }
      e.set(e.t, e.p, n, e);
    },
    Jt = function _renderPropTweens(t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    Ht = function _addPluginModifier(t, e, r, n) {
      for (var i, a = this._pt; a; )
        (i = a._next), a.p === n && a.modifier(t, e, r), (a = i);
    },
    Kt = function _killPropTweensOf(t) {
      for (var e, r, n = this._pt; n; )
        (r = n._next),
          (n.p === t && !n.op) || n.op === t
            ? oa(this, n, "_pt")
            : n.dep || (e = 1),
          (n = r);
      return !e;
    },
    te = function _sortPropTweensByPriority(t) {
      for (var e, r, n, i, a = t._pt; a; ) {
        for (e = a._next, r = n; r && r.pr > a.pr; ) r = r._next;
        (a._prev = r ? r._prev : i) ? (a._prev._next = a) : (n = a),
          (a._next = r) ? (r._prev = a) : (i = a),
          (a = e);
      }
      t._pt = n;
    },
    ee =
      ((PropTween.prototype.modifier = function modifier(t, e, r) {
        (this.mSet = this.mSet || this.set),
          (this.set = Xb),
          (this.m = t),
          (this.mt = r),
          (this.tween = e);
      }),
      PropTween);
  function PropTween(t, e, r, n, i, a, s, o, u) {
    (this.t = e),
      (this.s = n),
      (this.c = i),
      (this.p = r),
      (this.r = a || Qt),
      (this.d = s || this),
      (this.set = o || Ut),
      (this.pr = u || 0),
      (this._next = t) && (t._prev = this);
  }
  $(
    dt +
      ",parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert",
    function (t) {
      (st[t] = 1), "on" === t.substr(0, 2) && (st[t + "Params"] = 1);
    }
  ),
    (at.TweenMax = at.TweenLite = jt),
    (at.TimelineLite = at.TimelineMax = Bt),
    (E = new Bt({
      sortChildren: !1,
      defaults: z,
      autoRemoveChildren: !0,
      id: "root",
    })),
    (j.stringFilter = jb);
  var re = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      e.forEach(function (t) {
        return (function _createPlugin(t) {
          var e = (t = (!t.name && t.default) || t).name,
            r = o(t),
            n =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            i = {
              init: N,
              render: Jt,
              add: It,
              kill: Kt,
              modifier: Ht,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Wt,
              aliases: {},
              register: 0,
            };
          if ((Mt(), t !== n)) {
            if (ht[e]) return;
            ga(n, ga(ka(t, i), a)),
              _t(n.prototype, _t(i, ka(t, a))),
              (ht[(n.prop = e)] = n),
              t.targetTest && (pt.push(n), (st[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          M(e, n), t.register && t.register(ne, n, ee);
        })(t);
      });
    },
    timeline: function timeline(t) {
      return new Bt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return E.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, r) {
      n(i) && (i = yt(i)[0]);
      var a = Y(i || {}).get,
        s = e ? fa : ea;
      return (
        "native" === e && (e = ""),
        i
          ? t
            ? s(((ht[t] && ht[t].get) || a)(i, t, e, r))
            : function (t, e, r) {
                return s(((ht[t] && ht[t].get) || a)(i, t, e, r));
              }
          : i
      );
    },
    quickSetter: function quickSetter(r, e, n) {
      if (1 < (r = yt(r)).length) {
        var i = r.map(function (t) {
            return ne.quickSetter(t, e, n);
          }),
          a = i.length;
        return function (t) {
          for (var e = a; e--; ) i[e](t);
        };
      }
      r = r[0] || {};
      var s = ht[e],
        o = Y(r),
        u = s
          ? function (t) {
              var e = new s();
              (c._pt = 0),
                e.init(r, n ? t + n : t, c, 0, [r]),
                e.render(1, e),
                c._pt && Jt(1, c);
            }
          : o.set(r, e);
      return s
        ? u
        : function (t) {
            return u(r, e, n ? t + n : t, o, 1);
          };
    },
    isTweening: function isTweening(t) {
      return 0 < E.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Ft(t.ease, z.ease)), ja(z, t || {});
    },
    config: function config(t) {
      return ja(j, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
        n = t.effect,
        e = t.plugins,
        a = t.defaults,
        s = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return (
          t && !ht[t] && !at[t] && L(i + " effect requires " + t + " plugin.")
        );
      }),
        (lt[i] = function (t, e) {
          return n(yt(t), ga(e || {}, a));
        }),
        s &&
          (Bt.prototype[i] = function (t, e, n) {
            return this.add(lt[i](t, r(e) ? e : (n = e) && {}), n);
          });
    },
    registerEase: function registerEase(t, e) {
      Pt[t] = Ft(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Ft(t, e) : Pt;
    },
    getById: function getById(t) {
      return E.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r,
        n,
        i = new Bt(t);
      for (
        i.smoothChildTiming = s(t.smoothChildTiming),
          E.remove(i),
          i._dp = 0,
          i._time = i._tTime = E._time,
          r = E._first;
        r;

      )
        (n = r._next),
          (!e &&
            !r._dur &&
            r instanceof jt &&
            r.vars.onComplete === r._targets[0]) ||
            wa(i, r, r._start - r._delay),
          (r = n);
      return wa(E, i, 0), i;
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var n = t - e;
        return G(e)
          ? Ta(e, wrap(0, e.length), t)
          : Da(r, function (t) {
              return ((n + ((t - e) % n)) % n) + e;
            });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var n = t - e,
          i = 2 * n;
        return G(e)
          ? Ta(e, wrapYoyo(0, e.length - 1), t)
          : Da(r, function (t) {
              return e + (n < (t = (i + ((t - e) % i)) % i) ? i - t : t);
            });
      },
      distribute: Ma,
      random: Pa,
      snap: Oa,
      normalize: function normalize(t, e, r) {
        return bt(t, e, 0, 1, r);
      },
      getUnit: Fa,
      clamp: function clamp(e, r, t) {
        return Da(t, function (t) {
          return gt(e, r, t);
        });
      },
      splitColor: fb,
      toArray: yt,
      mapRange: bt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Fa(t));
        };
      },
      interpolate: function interpolate(e, r, t, i) {
        var a = isNaN(e + r)
          ? 0
          : function (t) {
              return (1 - t) * e + t * r;
            };
        if (!a) {
          var s,
            o,
            u,
            h,
            l,
            f = n(e),
            p = {};
          if ((!0 === t && (i = 1) && (t = null), f))
            (e = { p: e }), (r = { p: r });
          else if (G(e) && !G(r)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++)
              u.push(interpolate(e[o - 1], e[o]));
            h--,
              (a = function func(t) {
                t *= h;
                var e = Math.min(l, ~~t);
                return u[e](t - e);
              }),
              (t = r);
          } else i || (e = _t(G(e) ? [] : {}, e));
          if (!u) {
            for (s in r) It.call(p, e, s, "get", r[s]);
            a = function func(t) {
              return Jt(t, p) || (f ? e.p : e);
            };
          }
        }
        return Da(t, a);
      },
      shuffle: La,
    },
    install: J,
    effects: lt,
    ticker: Ct,
    updateRoot: Bt.updateRoot,
    plugins: ht,
    globalTimeline: E,
    core: {
      PropTween: ee,
      globals: M,
      Tween: jt,
      Timeline: Bt,
      Animation: zt,
      getCache: Y,
    },
  };
  $("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (re[t] = jt[t]);
  }),
    Ct.add(Bt.updateRoot),
    (c = re.to({}, { duration: 0 }));
  function _b(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
      r = r._next;
    return r;
  }
  function bc(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, i, e) {
        e._onInit = function (t) {
          var e, r;
          if (
            (n(i) &&
              ((e = {}),
              $(i, function (t) {
                return (e[t] = 1);
              }),
              (i = e)),
            a)
          ) {
            for (r in ((e = {}), i)) e[r] = a(i[r]);
            i = e;
          }
          !(function _addModifiers(t, e) {
            var r,
              n,
              i,
              a = t._targets;
            for (r in e)
              for (n = a.length; n--; )
                (i = (i = t._ptLookup[n][r]) && i.d) &&
                  (i._pt && (i = _b(i, r)),
                  i && i.modifier && i.modifier(e[r], t, a[n], r));
          })(t, i);
        };
      },
    };
  }
  var ne =
    re.registerPlugin(
      {
        name: "attr",
        init: function init(t, e, r, n, i) {
          for (var a in e)
            this.add(
              t,
              "setAttribute",
              (t.getAttribute(a) || 0) + "",
              e[a],
              n,
              i,
              0,
              0,
              a
            ),
              this._props.push(a);
        },
      },
      {
        name: "endArray",
        init: function init(t, e) {
          for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
        },
      },
      bc("roundProps", Na),
      bc("modifiers"),
      bc("snap", Oa)
    ) || re;
  (jt.version = Bt.version = ne.version = "3.1.1"), (f = 1), t() && Mt();
  function Nc(t, e) {
    return e.set(e.t, e.p, ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u, e);
  }
  function Oc(t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u,
      e
    );
  }
  function Pc(t, e) {
    return e.set(e.t, e.p, t ? ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u : e.b, e);
  }
  function Qc(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  }
  function Rc(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function Sc(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function Tc(t, e, r) {
    return (t.style[e] = r);
  }
  function Uc(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function Vc(t, e, r) {
    return (t._gsap[e] = r);
  }
  function Wc(t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  }
  function Xc(t, e, r, n, i) {
    var a = t._gsap;
    (a.scaleX = a.scaleY = r), a.renderTransform(i, a);
  }
  function Yc(t, e, r, n, i) {
    var a = t._gsap;
    (a[e] = r), a.renderTransform(i, a);
  }
  function ad(t, e) {
    var r = ae.createElementNS
      ? ae.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : ae.createElement(t);
    return r.style ? r : ae.createElement(t);
  }
  function bd(t, e, r) {
    var n = getComputedStyle(t);
    return (
      n[e] ||
      n.getPropertyValue(e.replace(Ee, "-$1").toLowerCase()) ||
      n.getPropertyValue(e) ||
      (!r && bd(t, Xe(e) || e, 1)) ||
      ""
    );
  }
  function ed() {
    !(function _windowExists() {
      return "undefined" != typeof window;
    })() ||
      ((ie = window),
      (ae = ie.document),
      (se = ae.documentElement),
      (ue = ad("div") || { style: {} }),
      (he = ad("div")),
      (Ne = Xe(Ne)),
      (Ye = Xe(Ye)),
      (ue.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (fe = !!Xe("perspective")),
      (oe = 1));
  }
  function gd(t, e) {
    for (var r = e.length; r--; )
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function hd(e) {
    var r;
    try {
      r = e.getBBox();
    } catch (t) {
      r = function _getBBoxHack(t) {
        var e,
          r = ad(
            "svg",
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute("xmlns")) ||
              "http://www.w3.org/2000/svg"
          ),
          n = this.parentNode,
          i = this.nextSibling,
          a = this.style.cssText;
        if (
          (se.appendChild(r),
          r.appendChild(this),
          (this.style.display = "block"),
          t)
        )
          try {
            (e = this.getBBox()),
              (this._gsapBBox = this.getBBox),
              (this.getBBox = _getBBoxHack);
          } catch (t) {}
        else this._gsapBBox && (e = this._gsapBBox());
        return (
          i ? n.insertBefore(this, i) : n.appendChild(this),
          se.removeChild(r),
          (this.style.cssText = a),
          e
        );
      }.call(e, !0);
    }
    return !r || r.width || r.x || r.y
      ? r
      : {
          x: +gd(e, ["x", "cx", "x1"]) || 0,
          y: +gd(e, ["y", "cy", "y1"]) || 0,
          width: 0,
          height: 0,
        };
  }
  function id(t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !hd(t));
  }
  function jd(t, e) {
    if (e) {
      var r = t.style;
      e in De && (e = Ne),
        r.removeProperty
          ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
              (e = "-" + e),
            r.removeProperty(e.replace(Ee, "-$1").toLowerCase()))
          : r.removeAttribute(e);
    }
  }
  function kd(t, e, r, n, i, a) {
    var s = new ee(t._pt, e, r, 0, 1, a ? Sc : Rc);
    return ((t._pt = s).b = n), (s.e = i), t._props.push(r), s;
  }
  function md(t, e, r, n) {
    var i,
      a,
      s,
      o,
      u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = ue.style,
      f = Be.test(e),
      p = "svg" === t.tagName.toLowerCase(),
      d = (p ? "client" : "offset") + (f ? "Width" : "Height"),
      c = "px" === n;
    return n === h || !u || je[n] || je[h]
      ? u
      : ((o = t.getCTM && id(t)),
        "%" === n && (De[e] || ~e.indexOf("adius"))
          ? _((u / (o ? t.getBBox()[f ? "width" : "height"] : t[d])) * 100)
          : ((l[f ? "width" : "height"] = 100 + (c ? h : n)),
            (a =
              ~e.indexOf("adius") || ("em" === n && t.appendChild && !p)
                ? t
                : t.parentNode),
            o && (a = (t.ownerSVGElement || {}).parentNode),
            (a && a !== ae && a.appendChild) || (a = ae.body),
            (s = a._gsap) && "%" === n && s.width && f && s.time === Ct.time
              ? _((u / s.width) * 100)
              : (a === t && (l.position = "static"),
                a.appendChild(ue),
                (i = ue[d]),
                a.removeChild(ue),
                (l.position = "absolute"),
                f &&
                  "%" === n &&
                  (((s = Y(a)).time = Ct.time), (s.width = a[d])),
                _(c ? (i * u) / 100 : (100 / i) * u))));
  }
  function nd(t, e, r, n) {
    var i;
    return (
      oe || ed(),
      e in Ie &&
        "transform" !== e &&
        ~(e = Ie[e]).indexOf(",") &&
        (e = e.split(",")[0]),
      De[e] && "transform" !== e
        ? ((i = Qe(t, n)),
          (i =
            "transformOrigin" !== e ? i[e] : Ze(bd(t, Ye)) + i.zOrigin + "px"))
        : ((i = t.style[e]) &&
            "auto" !== i &&
            !n &&
            !~(i + "").indexOf("calc(")) ||
          (i =
            (Ve[e] && Ve[e](t, e, r)) ||
            bd(t, e) ||
            Z(t, e) ||
            ("opacity" === e ? 1 : 0)),
      r && !~(i + "").indexOf(" ") ? md(t, e, i, r) + r : i
    );
  }
  function od(t, e, r, n) {
    var i,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      p,
      d,
      _,
      c,
      m = new ee(this._pt, t.style, e, 0, 1, Gt),
      g = 0,
      v = 0;
    if (
      ((m.b = r),
      (m.e = n),
      (r += ""),
      "auto" === (n += "") &&
        ((t.style[e] = n), (n = bd(t, e) || n), (t.style[e] = r)),
      jb((i = [r, n])),
      (n = i[1]),
      !!(h = (r = i[0]).indexOf("rgba(")) != !!(l = n.indexOf("rgba(")) &&
        (h
          ? (r = r.substr(h) + " " + r.substr(0, h - 1))
          : (n = n.substr(l) + " " + n.substr(0, l - 1))),
      (s = r.match(ze) || []),
      (n.match(ze) || []).length)
    ) {
      for (; (a = ze.exec(n)); )
        (l = a[0]),
          (p = n.substring(g, a.index)),
          u
            ? (u = (u + 1) % 5)
            : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) || (u = 1),
          l !== (h = s[v++] || "") &&
            ((o = parseFloat(h) || 0),
            (_ = h.substr((o + "").length)),
            (c = "=" === l.charAt(1) ? +(l.charAt(0) + "1") : 0) &&
              (l = l.substr(2)),
            (f = parseFloat(l)),
            (d = l.substr((f + "").length)),
            (g = ze.lastIndex - d.length),
            d ||
              ((d = d || j.units[e] || _),
              g === n.length && ((n += d), (m.e += d))),
            _ !== d && (o = md(t, e, h, d) || 0),
            (m._pt = {
              _next: m._pt,
              p: p || 1 === v ? p : ",",
              s: o,
              c: c ? c * f : f - o,
              m: u && u < 4 ? Math.round : 0,
            }));
      m.c = g < n.length ? n.substring(g, n.length) : "";
    } else m.r = "display" === e && "none" === n ? Sc : Rc;
    return nt.test(n) && (m.e = 0), (this._pt = m);
  }
  function qd(t) {
    var e = t.split(" "),
      r = e[0],
      n = e[1] || "50%";
    return (
      ("top" !== r && "bottom" !== r && "left" !== n && "right" !== n) ||
        ((t = r), (r = n), (n = t)),
      (e[0] = Ue[r] || r),
      (e[1] = Ue[n] || n),
      e.join(" ")
    );
  }
  function rd(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        n,
        i,
        a = e.t,
        s = a.style,
        o = e.u;
      if ("all" === o || !0 === o) (s.cssText = ""), (n = 1);
      else
        for (i = (o = o.split(",")).length; -1 < --i; )
          (r = o[i]),
            De[r] && ((n = 1), (r = "transformOrigin" === r ? Ye : Ne)),
            jd(a, r);
      n &&
        (jd(a, Ne),
        (n = a._gsap) && (n.svg && a.removeAttribute("transform"), Qe(a, 1)));
    }
  }
  function vd(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function wd(t) {
    var e = bd(t, Ne);
    return vd(e) ? $e : e.substr(7).match(tt).map(_);
  }
  function xd(t, e) {
    var r,
      n,
      i,
      a,
      s = t._gsap,
      o = t.style,
      u = wd(t);
    return s.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (u = [
          (i = t.transform.baseVal.consolidate().matrix).a,
          i.b,
          i.c,
          i.d,
          i.e,
          i.f,
        ]).join(",")
        ? $e
        : u
      : (u !== $e ||
          t.offsetParent ||
          t === se ||
          s.svg ||
          ((i = o.display),
          (o.display = "block"),
          ((r = t.parentNode) && t.offsetParent) ||
            ((a = 1), (n = t.nextSibling), se.appendChild(t)),
          (u = wd(t)),
          i ? (o.display = i) : jd(t, "display"),
          a &&
            (n
              ? r.insertBefore(t, n)
              : r
              ? r.appendChild(t)
              : se.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function yd(t, e, r, n, i, a) {
    var s,
      o,
      u,
      h = t._gsap,
      l = i || xd(t, !0),
      f = h.xOrigin || 0,
      p = h.yOrigin || 0,
      d = h.xOffset || 0,
      _ = h.yOffset || 0,
      c = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      b = l[5],
      w = e.split(" "),
      T = parseFloat(w[0]) || 0,
      x = parseFloat(w[1]) || 0;
    r
      ? l !== $e &&
        (o = c * v - m * g) &&
        ((u = T * (-m / o) + x * (c / o) - (c * b - m * y) / o),
        (T = T * (v / o) + x * (-g / o) + (g * b - v * y) / o),
        (x = u))
      : ((T = (s = hd(t)).x + (~w[0].indexOf("%") ? (T / 100) * s.width : T)),
        (x = s.y + (~(w[1] || w[0]).indexOf("%") ? (x / 100) * s.height : x))),
      n || (!1 !== n && h.smooth)
        ? ((y = T - f),
          (b = x - p),
          (h.xOffset = d + (y * c + b * g) - y),
          (h.yOffset = _ + (y * m + b * v) - b))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = T),
      (h.yOrigin = x),
      (h.smooth = !!n),
      (h.origin = e),
      (h.originIsAbsolute = !!r),
      (t.style[Ye] = "0px 0px"),
      a &&
        (kd(a, h, "xOrigin", f, T),
        kd(a, h, "yOrigin", p, x),
        kd(a, h, "xOffset", d, h.xOffset),
        kd(a, h, "yOffset", _, h.yOffset));
  }
  function Bd(t, e, r) {
    var n = Fa(e);
    return _(parseFloat(e) + parseFloat(md(t, "x", r + "px", n))) + n;
  }
  function Id(t, e, r, i, a, s) {
    var o,
      u,
      h = 360,
      l = n(a),
      f = parseFloat(a) * (l && ~a.indexOf("rad") ? Ae : 1),
      p = s ? f * s : f - i,
      d = i + p + "deg";
    return (
      l &&
        ("short" === (o = a.split("_")[1]) &&
          (p %= h) !== p % 180 &&
          (p += p < 0 ? h : -h),
        "cw" === o && p < 0
          ? (p = ((p + 36e9) % h) - ~~(p / h) * h)
          : "ccw" === o && 0 < p && (p = ((p - 36e9) % h) - ~~(p / h) * h)),
      (t._pt = u = new ee(t._pt, e, r, i, p, Oc)),
      (u.e = d),
      (u.u = "deg"),
      t._props.push(r),
      u
    );
  }
  function Jd(t, e, r) {
    var n,
      i,
      a,
      s,
      o,
      u,
      h,
      l = he.style,
      f = r._gsap;
    for (i in ((l.cssText =
      getComputedStyle(r).cssText + ";position:absolute;display:block;"),
    (l[Ne] = e),
    ae.body.appendChild(he),
    (n = Qe(he, 1)),
    De))
      (a = f[i]) !== (s = n[i]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
        ((o = Fa(a) !== (h = Fa(s)) ? md(r, i, a, h) : parseFloat(a)),
        (u = parseFloat(s)),
        (t._pt = new ee(t._pt, f, i, o, u - o, Nc)),
        (t._pt.u = h || 0),
        t._props.push(i));
    ae.body.removeChild(he);
  }
  var ie,
    ae,
    se,
    oe,
    ue,
    he,
    le,
    fe,
    pe = Pt.Power0,
    de = Pt.Power1,
    _e = Pt.Power2,
    ce = Pt.Power3,
    me = Pt.Power4,
    ge = Pt.Linear,
    ve = Pt.Quad,
    ye = Pt.Cubic,
    be = Pt.Quart,
    we = Pt.Quint,
    Te = Pt.Strong,
    xe = Pt.Elastic,
    ke = Pt.Back,
    Oe = Pt.SteppedEase,
    Ce = Pt.Bounce,
    Me = Pt.Sine,
    Pe = Pt.Expo,
    Se = Pt.Circ,
    De = {},
    Ae = 180 / Math.PI,
    Fe = Math.PI / 180,
    Re = Math.atan2,
    Ee = /([A-Z])/g,
    ze = /[-+=\.]*\d+[\.e-]*\d*[a-z%]*/g,
    Be = /(?:left|right|width|margin|padding|x)/i,
    Le = /[\s,\(]\S/,
    Ie = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Ne = "transform",
    Ye = Ne + "Origin",
    qe = "O,Moz,ms,Ms,Webkit".split(","),
    Xe = function _checkPropPrefix(t, e) {
      var r = (e || ue).style,
        n = 5;
      if (t in r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(qe[n] + t in r);

      );
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? qe[n] : "") + t;
    },
    je = { deg: 1, rad: 1, turn: 1 },
    Ue = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Ve = {
      clearProps: function clearProps(t, e, r, n, i) {
        if ("isFromStart" !== i.data) {
          var a = (t._pt = new ee(t._pt, e, r, 0, 0, rd));
          return (a.u = n), (a.pr = -10), (a.tween = i), t._props.push(r), 1;
        }
      },
    },
    $e = [1, 0, 0, 1, 0, 0],
    We = {},
    Qe = function _parseTransform(t, e) {
      var r = t._gsap || new Et(t);
      if ("x" in r && !e && !r.uncache) return r;
      var n,
        i,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        p,
        d,
        c,
        m,
        g,
        v,
        y,
        b,
        w,
        T,
        x,
        k,
        O,
        C,
        M,
        P,
        S,
        D,
        A,
        F,
        R,
        E = t.style,
        z = r.scaleX < 0,
        B = r.xOrigin || 0,
        L = r.yOrigin || 0,
        I = "deg",
        N = bd(t, Ye) || "0";
      return (
        (n = i = a = u = h = l = f = p = d = 0),
        (s = o = 1),
        (r.svg = !(!t.getCTM || !id(t))),
        (c = xd(t, r.svg)),
        r.svg && yd(t, N, r.originIsAbsolute, !1 !== r.smooth, c),
        c !== $e &&
          ((y = c[0]),
          (b = c[1]),
          (w = c[2]),
          (T = c[3]),
          (n = x = c[4]),
          (i = k = c[5]),
          6 === c.length
            ? ((s = Math.sqrt(y * y + b * b)),
              (o = Math.sqrt(T * T + w * w)),
              (u = y || b ? Re(b, y) * Ae : 0),
              (f = w || T ? Re(w, T) * Ae + u : 0),
              r.svg && ((n -= B - (B * y + L * w)), (i -= L - (B * b + L * T))))
            : ((R = c[6]),
              (A = c[7]),
              (P = c[8]),
              (S = c[9]),
              (D = c[10]),
              (F = c[11]),
              (n = c[12]),
              (i = c[13]),
              (a = c[14]),
              (h = (m = Re(R, D)) * Ae),
              m &&
                ((O = x * (g = Math.cos(-m)) + P * (v = Math.sin(-m))),
                (C = k * g + S * v),
                (M = R * g + D * v),
                (P = x * -v + P * g),
                (S = k * -v + S * g),
                (D = R * -v + D * g),
                (F = A * -v + F * g),
                (x = O),
                (k = C),
                (R = M)),
              (l = (m = Re(-w, D)) * Ae),
              m &&
                ((g = Math.cos(-m)),
                (F = T * (v = Math.sin(-m)) + F * g),
                (y = O = y * g - P * v),
                (b = C = b * g - S * v),
                (w = M = w * g - D * v)),
              (u = (m = Re(b, y)) * Ae),
              m &&
                ((O = y * (g = Math.cos(m)) + b * (v = Math.sin(m))),
                (C = x * g + k * v),
                (b = b * g - y * v),
                (k = k * g - x * v),
                (y = O),
                (x = C)),
              h &&
                359.9 < Math.abs(h) + Math.abs(u) &&
                ((h = u = 0), (l = 180 - l)),
              (s = _(Math.sqrt(y * y + b * b + w * w))),
              (o = _(Math.sqrt(k * k + R * R))),
              (m = Re(x, k)),
              (f = 2e-4 < Math.abs(m) ? m * Ae : 0),
              (d = F ? 1 / (F < 0 ? -F : F) : 0)),
          r.svg &&
            ((c = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !vd(bd(t, Ne))),
            c && t.setAttribute("transform", c))),
        90 < Math.abs(f) &&
          Math.abs(f) < 270 &&
          (z
            ? ((s *= -1),
              (f += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((o *= -1), (f += f <= 0 ? 180 : -180))),
        (r.x =
          ((r.xPercent =
            n && Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)
            ? 0
            : n) + "px"),
        (r.y =
          ((r.yPercent =
            i && Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)
            ? 0
            : i) + "px"),
        (r.z = a + "px"),
        (r.scaleX = _(s)),
        (r.scaleY = _(o)),
        (r.rotation = _(u) + I),
        (r.rotationX = _(h) + I),
        (r.rotationY = _(l) + I),
        (r.skewX = f + I),
        (r.skewY = p + I),
        (r.transformPerspective = d + "px"),
        (r.zOrigin = parseFloat(N.split(" ")[2]) || 0) && (E[Ye] = Ze(N)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = j.force3D),
        (r.renderTransform = r.svg ? er : fe ? tr : Ge),
        (r.uncache = 0),
        r
      );
    },
    Ze = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Ge = function _renderNon3DTransforms(t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        tr(t, e);
    },
    Je = "0deg",
    He = "0px",
    Ke = ") ",
    tr = function _renderCSSTransforms(t, e) {
      var r = e || this,
        n = r.xPercent,
        i = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        p = r.skewY,
        d = r.scaleX,
        _ = r.scaleY,
        c = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        b = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (l !== Je || h !== Je)) {
        var w,
          T = parseFloat(h) * Fe,
          x = Math.sin(T),
          k = Math.cos(T);
        (T = parseFloat(l) * Fe),
          (w = Math.cos(T)),
          (a = Bd(g, a, x * w * -v)),
          (s = Bd(g, s, -Math.sin(T) * -v)),
          (o = Bd(g, o, k * w * -v + v));
      }
      c !== He && (y += "perspective(" + c + Ke),
        (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
        (!b && a === He && s === He && o === He) ||
          (y +=
            o !== He || b
              ? "translate3d(" + a + ", " + s + ", " + o + ") "
              : "translate(" + a + ", " + s + Ke),
        u !== Je && (y += "rotate(" + u + Ke),
        h !== Je && (y += "rotateY(" + h + Ke),
        l !== Je && (y += "rotateX(" + l + Ke),
        (f === Je && p === Je) || (y += "skew(" + f + ", " + p + Ke),
        (1 === d && 1 === _) || (y += "scale(" + d + ", " + _ + Ke),
        (g.style[Ne] = y || "translate(0, 0)");
    },
    er = function _renderSVGTransforms(t, e) {
      var r,
        n,
        i,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        p = o.rotation,
        d = o.skewX,
        c = o.skewY,
        m = o.scaleX,
        g = o.scaleY,
        v = o.target,
        y = o.xOrigin,
        b = o.yOrigin,
        w = o.xOffset,
        T = o.yOffset,
        x = o.forceCSS,
        k = parseFloat(l),
        O = parseFloat(f);
      (p = parseFloat(p)),
        (d = parseFloat(d)),
        (c = parseFloat(c)) && ((d += c = parseFloat(c)), (p += c)),
        p || d
          ? ((p *= Fe),
            (d *= Fe),
            (r = Math.cos(p) * m),
            (n = Math.sin(p) * m),
            (i = Math.sin(p - d) * -g),
            (a = Math.cos(p - d) * g),
            d &&
              ((c *= Fe),
              (s = Math.tan(d - c)),
              (i *= s = Math.sqrt(1 + s * s)),
              (a *= s),
              c &&
                ((s = Math.tan(c)), (r *= s = Math.sqrt(1 + s * s)), (n *= s))),
            (r = _(r)),
            (n = _(n)),
            (i = _(i)),
            (a = _(a)))
          : ((r = m), (a = g), (n = i = 0)),
        ((k && !~(l + "").indexOf("px")) || (O && !~(f + "").indexOf("px"))) &&
          ((k = md(v, "x", l, "px")), (O = md(v, "y", f, "px"))),
        (y || b || w || T) &&
          ((k = _(k + y - (y * r + b * i) + w)),
          (O = _(O + b - (y * n + b * a) + T))),
        (u || h) &&
          ((s = v.getBBox()),
          (k = _(k + (u / 100) * s.width)),
          (O = _(O + (h / 100) * s.height))),
        (s =
          "matrix(" +
          r +
          "," +
          n +
          "," +
          i +
          "," +
          a +
          "," +
          k +
          "," +
          O +
          ")"),
        v.setAttribute("transform", s),
        x && (v.style[Ne] = s);
    };
  $("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
      n = "Bottom",
      i = "Left",
      o = (r < 3 ? ["Top", t, n, i] : ["Top" + i, "Top" + t, n + t, n + i]).map(
        function (t) {
          return r < 2 ? e + t : "border" + t + e;
        }
      );
    Ve[1 < r ? "border" + e : e] = function (e, t, r, n, i) {
      var a, s;
      if (arguments.length < 4)
        return (
          (a = o.map(function (t) {
            return nd(e, t, r);
          })),
          5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s
        );
      (a = (n + "").split(" ")),
        (s = {}),
        o.forEach(function (t, e) {
          return (s[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
        }),
        e.init(t, s, i);
    };
  });
  var rr,
    nr,
    ir,
    ar = {
      name: "css",
      register: ed,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, r, n, i) {
        var a,
          s,
          o,
          u,
          h,
          l,
          f,
          p,
          d,
          _,
          c,
          m,
          g,
          v,
          y,
          b = this._props,
          w = t.style;
        for (f in (oe || ed(), e))
          if (
            "autoRound" !== f &&
            ((s = e[f]), !ht[f] || !Eb(f, e, r, n, t, i))
          )
            if (
              ((h = typeof s),
              (l = Ve[f]),
              "function" === h && (h = typeof (s = s.call(r, n, t, i))),
              "string" === h && ~s.indexOf("random(") && (s = Wa(s)),
              l)
            )
              l(this, t, f, s, r) && (y = 1);
            else if ("--" === f.substr(0, 2))
              this.add(
                w,
                "setProperty",
                getComputedStyle(t).getPropertyValue(f) + "",
                s + "",
                n,
                i,
                0,
                0,
                f
              );
            else {
              if (
                ((a = nd(t, f)),
                (u = parseFloat(a)),
                (_ =
                  "string" === h && "=" === s.charAt(1)
                    ? +(s.charAt(0) + "1")
                    : 0) && (s = s.substr(2)),
                (o = parseFloat(s)),
                f in Ie &&
                  ("autoAlpha" === f &&
                    (1 === u &&
                      "hidden" === nd(t, "visibility") &&
                      o &&
                      (u = 0),
                    kd(
                      this,
                      w,
                      "visibility",
                      u ? "inherit" : "hidden",
                      o ? "inherit" : "hidden",
                      !o
                    )),
                  "scale" !== f &&
                    "transform" !== f &&
                    ~(f = Ie[f]).indexOf(",") &&
                    (f = f.split(",")[0])),
                (c = f in De))
              )
                if (
                  (m ||
                    ((g = t._gsap).renderTransform || Qe(t),
                    (v = !1 !== e.smoothOrigin && g.smooth),
                    ((m = this._pt = new ee(
                      this._pt,
                      w,
                      Ne,
                      0,
                      1,
                      g.renderTransform,
                      g,
                      0,
                      -1
                    )).dep = 1)),
                  "scale" === f)
                )
                  (this._pt = new ee(
                    this._pt,
                    g,
                    "scaleY",
                    g.scaleY,
                    _ ? _ * o : o - g.scaleY
                  )),
                    b.push("scaleY", f),
                    (f += "X");
                else {
                  if ("transformOrigin" === f) {
                    (s = qd(s)),
                      g.svg
                        ? yd(t, s, 0, v, 0, this)
                        : ((d = parseFloat(s.split(" ")[2])) !== g.zOrigin &&
                            kd(this, g, "zOrigin", g.zOrigin, d),
                          kd(this, w, f, Ze(a), Ze(s)));
                    continue;
                  }
                  if ("svgOrigin" === f) {
                    yd(t, s, 1, v, 0, this);
                    continue;
                  }
                  if (f in We) {
                    Id(this, g, f, u, s, _);
                    continue;
                  }
                  if ("smoothOrigin" === f) {
                    kd(this, g, "smooth", g.smooth, s);
                    continue;
                  }
                  if ("force3D" === f) {
                    g[f] = s;
                    continue;
                  }
                  if ("transform" === f) {
                    Jd(this, s, t);
                    continue;
                  }
                }
              else f in w || (f = Xe(f) || f);
              if (
                c ||
                ((o || 0 === o) && (u || 0 === u) && !Le.test(s) && f in w)
              )
                (p = (a + "").substr((u + "").length)) !==
                  (d =
                    (s + "").substr((o + "").length) ||
                    (f in j.units ? j.units[f] : p)) && (u = md(t, f, a, d)),
                  (this._pt = new ee(
                    this._pt,
                    c ? g : w,
                    f,
                    u,
                    _ ? _ * o : o - u,
                    "px" !== d || !1 === e.autoRound || c ? Nc : Qc
                  )),
                  (this._pt.u = d || 0),
                  p !== d && ((this._pt.b = a), (this._pt.r = Pc));
              else if (f in w) od.call(this, t, f, a, s);
              else {
                if (!(f in t)) {
                  K(f, s);
                  continue;
                }
                this.add(t, f, t[f], s, n, i);
              }
              b.push(f);
            }
        y && te(this);
      },
      get: nd,
      aliases: Ie,
      getSetter: function getSetter(t, e, r) {
        return (e = Ie[e] || e) in De && e !== Ye && (t._gsap.x || nd(t, "x"))
          ? r && le === r
            ? "scale" === e
              ? Wc
              : Vc
            : (le = r || {}) && ("scale" === e ? Xc : Yc)
          : t.style && !q(t.style[e])
          ? Tc
          : ~e.indexOf("-")
          ? Uc
          : Wt(t, e);
      },
    };
  (ne.utils.checkPrefix = Xe),
    (ir = $(
      (rr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (nr = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        De[t] = 1;
      }
    )),
    $(nr, function (t) {
      (j.units[t] = "deg"), (We[t] = 1);
    }),
    (Ie[ir[13]] = rr + "," + nr),
    $(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        Ie[e[1]] = ir[e[0]];
      }
    ),
    $(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        j.units[t] = "px";
      }
    ),
    ne.registerPlugin(ar);
  var sr = ne.registerPlugin(ar) || ne,
    or = sr.core.Tween;
  (e.Back = ke),
    (e.Bounce = Ce),
    (e.CSSPlugin = ar),
    (e.Circ = Se),
    (e.Cubic = ye),
    (e.Elastic = xe),
    (e.Expo = Pe),
    (e.Linear = ge),
    (e.Power0 = pe),
    (e.Power1 = de),
    (e.Power2 = _e),
    (e.Power3 = ce),
    (e.Power4 = me),
    (e.Quad = ve),
    (e.Quart = be),
    (e.Quint = we),
    (e.Sine = Me),
    (e.SteppedEase = Oe),
    (e.Strong = Te),
    (e.TimelineLite = Bt),
    (e.TimelineMax = Bt),
    (e.TweenLite = jt),
    (e.TweenMax = or),
    (e.default = sr),
    (e.gsap = sr);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
//# sourceMappingURL=gsap.min.js.map


(function(root, factory, factory2) {
    document.addEventListener('lazybeforesizes', function(e){
        e.detail.width = jQuery(e.target).closest('.lax[data-lax-scale]').length > 0 ? (jQuery(e.target).closest('.lax[data-lax-scale]').innerWidth() * 1.5) : e.detail.width;
    });
    document.addEventListener('DOMContentLoaded', function() {
      root.immSplitText = factory2;
      root.imm_script_module = new factory(jQuery);
      root.imm_script_module.init();
    });
  })(this, function($, root) {
    var Self = this;
    Self.animation = {};
    Self.barbaInjectScript = [];
    Self.script = {};
    Self.scrollbar = false;
    Self.scrollbar_menu = false;
    Self.laxInit = false;
    Self.mouse = false;
  
    Self.init = function() {
  
      Self.mouse = new Self.scrollMouse;
      Self.barba();
      Self.isMobile.check();
      if (imm_script_module.isMobile.device == "desktop") {
        Self.lax();
        Self.runningLax();
      }
      Self.barbaInjectScript.push(function() {
        var injectMenu = $('.only-menu.barba-menu-updates');
        if(injectMenu.length > 0){
          var inject = injectMenu.html();
          $('#headerNavigation .menu-navigation-wrapper').html(inject);
          injectMenu.remove();
        }
        if ( document.documentElement.classList.contains('touchevents') ) {
          Self.mouse.detach();
        }
        else {
          Self.mouse.init();
        }
      });
      Self.barbaInjectScript.push(function() {
        if(typeof immslider !== 'undefined'){
          if(jQuery('.imm-slider-section[data-slider-id]:not(.imm-slider-initialized)').length > 0 && jQuery('.imm-slider-section[data-slider-id] .imm-slider:not(.slick-initialized)').length > 0){
            immslider.init(jQuery('.imm-slider-section[data-slider-id]:not(.imm-slider-initialized)'));
          }
        }
      });
      
      // Self.salmobile.init();
  
      $(window).on('imm-script:run', function() {
        /* initialize barbar script */
        if (typeof Self.scrollbar.destroy !== 'undefined') {
            Self.scrollbar.destroy();
        }
  
        if ( document.documentElement.classList.contains('no-touchevents') ) {
          window.scrollY = 0;
          Self.scrollbarFunc.init();
        }
        else {
          /* console.log('mobile'); */
          window.scrollTo(0, 0);
          sal({threshold: 0.2});
        }
        // Self.salmobile.init();
        Self.siteOriginSupport.init();
        if (imm_script_module.isMobile.device == "desktop") {
          Self.laxUpdate();
        }
        /* initialize barbar script */
  
        /* additional other script */
        Self.arrayManager(Self.barbaInjectScript);
        Self.triggerFuncScript();
        if (imm_script_module.isMobile.device == "desktop") {
          setTimeout(function() {
            lax.updateElements();
          }, 300);
        }
        /* additional other script */
      });
  
      $(window).on('imm-animation:run', function() {
        setTimeout(function() {
          Self.triggerFuncAnimation();
        }, 1300);
        if (imm_script_module.isMobile.device == "desktop") {
          lax.updateElements();
        }
      });
  
      $(window).on('load resize', function() {
        if (imm_script_module.isMobile.device == "desktop") {
          lax.updateElements();
        }
      });
  
      // $(window).load(function(){
      //
      // });
    };
  
    Self.lax = function() {
      if (typeof lax.elements !== 'undefined') {
        lax.elements = [];
      }
      lax.setup();
      lax.updateElements();
    };
  
    Self.runningLax = function() {
      var updateLax = function() {
        if (!Self.scrollbar) {
          window.requestAnimationFrame(updateLax);
          return;
        } else {
          window.scrollY = Self.scrollbarFunc.y = Self.scrollbar.offset.y;
          lax.update(window.scrollY);
          window.requestAnimationFrame(updateLax);
        }
      };
      window.requestAnimationFrame(updateLax);
    };
  
    Self.laxUpdate = function() {
      if (typeof lax.elements !== 'undefined') {
        lax.elements = [];
      }
      lax.populateElements();
      lax.updateElements();
    };
  
    Self.barba = function() {
      if (typeof barba !== 'undefined') {
        barba.init({
          timeout: 15e3,
          transitions: Self.barbaTransition
        });
      }
    };
  
    Self.barbaTransition = [{
      name: "default",
      leave: function(e) {
        return new Promise(function(t) {
          var n;
          e.current.container,
            n = {
              onComplete: function() {
                t();
              }
            },
            Self.barbaPageLeave(n.onComplete);
        })
      },
      afterEnter: function(e) {
        Self.barbaPageEnter();
      }
    }];
  
    Self.barbaPageLeave = function(t) {
      if (typeof Self.scrollbar_menu.destroy !== 'undefined') {
        Self.scrollbar_menu.destroy();
      }
      Self.mouse.detach();
      ! function(t) {
        $(imm_loader_cst.logo).addClass('animate');
        imm_loader_cst.wave.setAttribute('transform', 'matrix(1.3084748,0,0,1.4086032,0.31857104,-0)translate(0 0)scale(1)');
        imm_loader_cst.loaderCount = 0;
        imm_loader_cst.loaderOnLoad = false;
        TweenMax.fromTo(imm_loader_cst.bg, 1, {
          x: "-100%"
        }, {
          x: "0%",
          ease: Power4.easeInOut
        });
        TweenMax.fromTo(imm_loader_cst.bg2, 1.5, {
          x: "-100%"
        }, {
          x: "0%",
          ease: Power4.easeInOut
        });
  
        imm_loader_cst.init();
        TweenMax.fromTo(imm_loader_cst.logo, 1, {
          css: {
            scale: .05,
            opacity: 0
          }
        }, {
          css: {
            scale: 1,
            opacity: 1
          },
          delay: .8,
          onComplete: function() {
            t();
          },
          ease: Power4.easeInOut
        });
      }(t)
    };
  
    Self.barbaPageEnter = function(n) {
      $('body').addClass('barba-transition-ready');
      imm_loader_cst.loaderOnLoad = true;
    };
  
    Self.triggerFuncAnimation = function() {
      var elm = $('[data-imm-animation]');
      elm.each(function() {
        var _elm = this;
        if (!$(_elm).hasClass('animation-triggered')) {
          $(_elm).addClass('animation-triggered');
          var animation = _elm.dataset.immAnimation;
          if (typeof Self.animation[animation] !== 'undefined') {
            Self.animation[animation].init(_elm);
          }
        }
      });
    };
  
    Self.triggerFuncScript = function() {
      $('[data-imm-script]').each(function() {
        var a = $(this),
          script = a.data('imm-script');
        if (typeof Self.script[script] !== 'undefined' && !a.hasClass('script-initialized')) {
          a.addClass('script-initialized');
          Self.script[script].init();
          if (typeof Self.script[script].animation !== 'undefined' && typeof Self.animation[Self.script[script].animation.name] == 'undefined') {
            Self.animation[Self.script[script].animation.name] = Self.script[script].animation;
          }
        }
      });
    };
  
    Self.scrollbarFunc = {
      elm: '',
      menu: '',
      init: function() {
        Self.scrollbarFunc.elm = document.querySelector("#smooth-scroll-define-here");
        if (Self.scrollbarFunc.elm) {
          if ($(window).width() < 1025) {
            Self.scrollbarFunc.damping = .1;
          }
          else {
            Self.scrollbarFunc.damping = .045;
            // Self.scrollbar = Scrollbar.init(Self.scrollbarFunc.elm, {
            //   damping: Self.scrollbarFunc.damping,
            //   delegateTo: document.querySelector('#page')
            // });
          }
  
          
  
          class StopScrollPlugin extends Scrollbar.ScrollbarPlugin {
            transformDelta(delta) {
              return !this.options.scroll ? {
                x: 0,
                y: 0
              } : delta;
            }
  
          }
  
          _defineProperty(StopScrollPlugin, "pluginName", "stopScroll");
  
          _defineProperty(StopScrollPlugin, "defaultOptions", {
            scroll: true
          });
  
          Scrollbar.use(StopScrollPlugin);
          
  
          Self.scrollbar = Scrollbar.init(Self.scrollbarFunc.elm, {
            damping: Self.scrollbarFunc.damping,
            delegateTo: document
          });
  
          setTimeout(function(){
            Self.scrollbarFunc.menu = document.querySelector("#smooth-scroll-define-here-menu");
            Self.scrollbar_menu = Scrollbar.init(Self.scrollbarFunc.menu, {
              damping: Self.scrollbarFunc.damping,
              delegateTo: document
            });
  
            // const Scroll = Scrollbar.init(Self.scrollbarFunc.menu);
            // Scroll.track.xAxis.element.remove();
            
          }, 300); 
  
  
  
        }
  
      },
      damping: .045,
      setY: function(e) {
        Self.scrollbarFunc.y = e.offset.y;
      },
      y: 0,
    };
  
    Self.arrayManager = function(array) {
      if (array.length > 0) {
        var args = arguments;
        $.each(array, function(index, value) {
          value([].slice.call(args, 1));
        });
      }
    };
    Self.siteOriginSupport = {
      fullContainer: '',
      init: function() {
        Self.siteOriginSupport.fullContainer = $('body');
        Self.siteOriginSupport.stretchFullWidthRows();
      },
      stretchFullWidthRows: function() {
        var $panelsRow = $('.siteorigin-panels-stretch.panel-row-style');
        $panelsRow.each(function() {
          var $$ = $(this);
  
          var stretchType = $$.data('stretch-type');
          var defaultSidePadding = stretchType === 'full-stretched-padded' ? '' : 0;
  
          // Reset all the styles associated with row stretching
          $$.css({
            'margin-left': 0,
            'margin-right': 0,
            'padding-left': defaultSidePadding,
            'padding-right': defaultSidePadding
          });
  
          var leftSpace = $$.offset().left - Self.siteOriginSupport.fullContainer.offset().left,
            rightSpace = Self.siteOriginSupport.fullContainer.outerWidth() - leftSpace - $$.parent().outerWidth();
  
          $$.css({
            'margin-left': -leftSpace,
            'margin-right': -rightSpace,
            'padding-left': stretchType === 'full' ? leftSpace : defaultSidePadding,
            'padding-right': stretchType === 'full' ? rightSpace : defaultSidePadding
          });
  
          var cells = $$.find('> .panel-grid-cell');
  
          if (stretchType === 'full-stretched' && cells.length === 1) {
            cells.css({
              'padding-left': 0,
              'padding-right': 0
            });
          }
  
          $$.css({
            'border-left': defaultSidePadding,
            'border-right': defaultSidePadding
          });
        });
  
        if ($panelsRow.length) {
          $(window).trigger('panelsStretchRows');
        }
      }
    };
  
    Self.isMobile = {
      check:function(){
        var isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4));
  
        if (isMobile) {
          imm_script_module.isMobile.device = "mobile";
        }
      },
      device: "desktop",
    };
  
  
  
    Self.mouseX = 0;
    Self.mouseY = 0;
    Self.scrollMouse = function() {
      var elm = document.querySelector('#imm-cursor');
      var transition = function() {
        TweenMax.to(elm, .5, {
          autoAlpha: 1
        })
      };
      var mouseOffset = function(e) {
        Self.mouseX = e.clientX,
          Self.mouseY = e.clientY;
      }
      var changeCursor = function() {
        var elm = document.querySelector("#imm-drag");
        var triggeredELm = $('asd');
        triggeredELm.length && triggeredELm.each(function() {
          var _elm = $(this)[0];
          _elm.addEventListener('mousemove', function() {
            elm.classList.contains('imm-show') || (elm.classList.add('imm-show'), TweenMax.to(elm, .5, {
              autoAlpha: 1
            }))
          });
        });
      };
  
      var changeCursorToLoaderContact = function(){
        jQuery( 'div.wpcf7 > form' ).each( function() {
          var $form = jQuery( this );
          $form.on('submit', function(){
            elm.classList.add('contact-submited');
          });
        } );
        document.addEventListener( 'wpcf7submit', function( event ) {
            elm.classList.remove('contact-submited');
        }, false );
      };
  
      var idk = function(e, t, n) {
          return (1 - n) * e + n * t
      }
  
      var setOffsetMouse = function t() {
        elm.x = idk(elm.x, Self.mouseX, .2),
        elm.y = idk(elm.y, Self.mouseY, .2),
        elm.style.transform = "translateX(".concat(elm.x, "px) translateY(").concat(elm.y, "px)"),
        elm.handle = window.requestAnimationFrame(t);
      };
  
      return {
        init: function() {
          var progressBar;
          document.addEventListener("mousemove", transition, {
            once: !0
          });
          document.addEventListener("mousemove", mouseOffset);
          elm.x = Self.mouseX;
          elm.y = Self.mouseY;
          elm.handle = window.requestAnimationFrame(setOffsetMouse);
          // progressBar = document.querySelector("#ac-cursor-progress circle");
          // Self.scrollbar && Self.scrollbar.addListener(function() {
          //   var e = Self.scrollbarFunc.y / (Self.scrollbar.size.content.height - window.innerHeight);
          //   TweenMax.to(progressBar, .5, {
          //     strokeDashoffset: 200 * (1 - e),
          //     overwrite: 5
          //   })
          // });
          !function() {
            var e, triggeredELm = document.querySelectorAll("a, input, button"),
            triggeredELmWhite = document.querySelectorAll(".page-banner-wrapper, .header-navigation.scrolled, footer"),
            triggeredELmChange = document.querySelectorAll(".expedition-slider-wrap, .draggable-slide")
            scrollIndicator = document.querySelector("#imm-scroll-indicator");
            triggeredELm.forEach(function(e) {
              ["mouseover", "mousemove"].forEach(function(t) {
                  return e.addEventListener(t, function() {
                    scrollIndicator.classList.contains("imm-hide-trig") || (scrollIndicator.classList.add("imm-hide-trig"))
                  })
                }),
                e.addEventListener("mouseleave", function() {
                  scrollIndicator.classList.remove("imm-hide-trig")
                })
            });
            triggeredELmWhite.forEach(function(e) {
              ["mouseover", "mousemove"].forEach(function(t) {
                  return e.addEventListener(t, function() {
                    scrollIndicator.classList.contains("white") || (scrollIndicator.classList.add("white"))
                  })
                }),
                e.addEventListener("mouseleave", function() {
                  scrollIndicator.classList.remove("white")
                })
            });
            triggeredELmChange.forEach(function(e) {
              ["mouseover", "mousemove"].forEach(function(t) {
                  return e.addEventListener(t, function() {
                    scrollIndicator.classList.contains("dragging-mode") || (scrollIndicator.classList.add("dragging-mode"))
                  })
                }),
                e.addEventListener("mouseleave", function() {
                  scrollIndicator.classList.remove("dragging-mode")
                })
            });
          }();
          changeCursorToLoaderContact();
        },
        detach: function() {
          document.removeEventListener("mousemove", transition),
            document.removeEventListener("mousemove", mouseOffset),
            cancelAnimationFrame(elm.handle);
        },
        hide: function() {
          // var e = document.querySelectorAll("#ac-drag-progress circle"),
          //   t = document.querySelectorAll("#ac-cursor-progress circle");
          // TweenMax.to(e, .5, {
          //     strokeDashoffset: 0,
          //     overwrite: 1
          //   }),
          //   TweenMax.to(t, .5, {
          //     strokeDashoffset: 200,
          //     overwrite: 1
          //   })
        },
        showIndicator: function() {
          var e = document.querySelector("#imm-scroll-indicator");
          e.classList.remove("ac-hide-trig"),
            TweenMax.to(e, .5, {
              autoAlpha: 1
            })
        },
        draggerProgress: function(e) {
          // var t = document.querySelector("#ac-drag-progress circle");
          // TweenMax.to(t, 1, {
          //   strokeDashoffset: 200 * (1 - e),
          //   overwrite: 5
          // })
        },
        fadeInCursor: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          TweenMax.to(elm, .4, {
            autoAlpha: 1,
            delay: t,
            overwrite: 5
          })
        },
        fadeOutCursor: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          TweenMax.to(elm, .2, {
            autoAlpha: 0,
            delay: t,
            overwrite: 5
          })
        }
      }
    };
  
  }, function(element, options) {
    if (!options.hasOwnProperty("words")) options.words = 1;
    if (!options.hasOwnProperty("chars")) options.chars = 1;
    if (!options.hasOwnProperty("spacing")) options.spacing = 5;
    this.searchTextNodes = function(element) {
      var foundTextNodes = [];
      if (element == null || element == undefined) return foundTextNodes;
      for (var i = 0; i <= element.childNodes.length - 1; i++) {
        var node = element.childNodes[i];
        if (node.nodeName == "#text") { //text found
          foundTextNodes.push(node);
        } else {
          var foundTextNodes = foundTextNodes.concat(this.searchTextNodes(node));
        }
      }
      return foundTextNodes;
    }
    this.createElement = function(text, relatedNode) {
      var node = document.createElement("div");
      var nodeText = document.createTextNode(text);
      node.nodeText = nodeText;
      node.appendChild(nodeText);
      node.style.display = "inline-block";
      node.style.position = "relative";
      if (text.trim() == "") node.style.width = String(options.spacing) + "px";
      relatedNode.parentNode.insertBefore(node, relatedNode);
      return node;
    }
    this.splitCharacters = function(textNode) {
      var characters = textNode.nodeValue.toString();
      var chars = [];
      if (characters.trim() != "") {
        for (var c = 0; c <= characters.length - 1; c++) {
          var character = characters.substr(c, 1)
          var char = this.createElement(character, textNode);
          if (character.trim() != "") chars.push(char);
        }
        textNode.parentNode.removeChild(textNode);
      }
      return chars;
    }
    this.splitWords = function(textNode) {
      var textWords = textNode.nodeValue.toString().split(" ");
      var words = [];
      for (var w = 0; w <= textWords.length - 1; w++) {
        var textWord = textWords[w];
        var word = this.createElement(textWord, textNode);
        if (textWord.trim() != "") words.push(word);
        if (w < textWords.length - 1) this.createElement(" ", textNode); //spacing for word
      }
      textNode.parentNode.removeChild(textNode);
      return words;
    }
    this.splitTextNodes = function(textNodes) {
      var splitText = {
        words: [],
        chars: []
      };
      for (var i = 0; i <= textNodes.length - 1; i++) {
        var textNode = textNodes[i];
        if (options.words == 0) {
          splitText.chars = splitText.chars.concat(this.splitCharacters(textNode));
        } else {
          var words = this.splitWords(textNode);
          if (options.chars == 1) {
            for (var w = 0; w <= words.length - 1; w++) {
              word = words[w];
              var chars = this.splitCharacters(word.nodeText);
              splitText.chars = splitText.chars.concat(chars);
              word.chars = chars;
            }
          }
          splitText.words = splitText.words.concat(words);
        }
      }
      return splitText;
    }
    var textNodes = this.searchTextNodes(element);
    var splitText = this.splitTextNodes(textNodes);
    return splitText;
  });
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (function($) {
    $(window).on("load", function() {
      if ( document.documentElement.classList.contains('no-touchevents') ) {
        if (typeof imm_script_module !== 'undefined') {
            imm_script_module.animation.staggerP = {
              name : 'staggerP',
              init: function(elm) {
                if (typeof imm_script_module.scrollbar !== 'undefined') {
                  imm_script_module.scrollbar.addListener(function t() {
                    if (imm_script_module.scrollbar.isVisible(elm) && !$(elm).hasClass('anim-run')) {
                      $(elm).addClass('anim-run');
                      var tl = gsap.timeline();
                      var elmP = elm.querySelectorAll("p");
                      if (elmP) {
                        tl.staggerFrom(elmP, 1.5, {
                          yPercent: 115,
                          alpha: 0,
                          rotation: 4,
                          ease: Expo.easeOut
                        }, .2, 0);
                      }
                      imm_script_module.scrollbar.removeListener(t);
                    }
                  });
                }
              }
            }
  
            imm_script_module.animation.staggerChild = {
              init: function(elm) {
                if (imm_script_module.scrollbar) {
                  var run = function() {
                    if (imm_script_module.scrollbar.isVisible(elm) && !$(elm).hasClass('animation-running')) {
                      imm_script_module.animation.staggerChild.run(elm);
                      imm_script_module.scrollbar.removeListener(run)
                    }
                  };
  
                  imm_script_module.scrollbar.addListener(run);
                  run();
                }
              },
              run: function(elm) {
                $(elm).addClass('animation-running');
                var parentAnim = typeof elm.dataset.parentAnim !== 'undefined' ? elm.querySelector(elm.dataset.parentAnim) : false,
                  childrenAnim = typeof elm.dataset.childrenAnim !== 'undefined' ? elm.dataset.childrenAnim : false,
                  theElm = parentAnim ? parentAnim : elm,
                  child = childrenAnim ? theElm.querySelectorAll(childrenAnim) : theElm.children;
                if (child) {
                  var tl = gsap.timeline();
                  tl.fromTo(child, 1, {
                    yPercent: 20,
                    alpha: 0,
                    scale: 0,
                  }, {
                    yPercent: 0,
                    alpha: 1,
                    scale: 1,
                    delay: .2,
                    ease: Power4.easeInOut,
                    stagger: {
                      axis: "x",
                      amount: .5
                    }
                  });
                }
              }
            };
  
            imm_script_module.animation.staggerChar = {
              init: function(elm) {
                if (imm_script_module.scrollbar) {
                  var run = function() {
                    if (imm_script_module.scrollbar.isVisible(elm) && !$(elm).hasClass('animation-running')) {
                      imm_script_module.animation.staggerChar.run(elm);
                      imm_script_module.scrollbar.removeListener(run)
                    }
                  };
  
                  imm_script_module.scrollbar.addListener(run);
                  run();
                }
              },
              run: function(elm) {
                $(elm).addClass('animation-running');
                if ( $(window).width() < 767) {
                  var wordSpace = 10;
                }
                else if ( $(window).width() < 1440 ) {
                  var wordSpace = 15;
                }
                else {
                  var wordSpace = 20;
                }
                var parentAnim = typeof elm.dataset.parentAnim !== 'undefined' ? elm.querySelector(elm.dataset.parentAnim) : false,
                  theElm = parentAnim ? parentAnim : elm,
                  text = immSplitText(theElm, {
                    'chars': 1,
                    'words': 1,
                    'spacing': wordSpace
                  });
                if (text) {
                  var tl = gsap.timeline();
                  tl.fromTo(text.chars, 1, {
                    yPercent: 15,
                    alpha: 0,
                    rotation: 4,
                  }, {
                    yPercent: 0,
                    alpha: 1,
                    rotation: 0,
                    delay: .1,
                    ease: Power4.easeInOut,
                    stagger: {
                      axis: "x",
                      amount: .5
                    }
                  });
                }
              }
            };
  
            imm_script_module.animation.lineWidthAnimation = {
              init: function(elm) {
                if (imm_script_module.scrollbar) {
                  var run = function() {
                    if (imm_script_module.scrollbar.isVisible(elm) && !$(elm).hasClass('animation-running')) {
                      imm_script_module.animation.lineWidthAnimation.run(elm);
                      imm_script_module.scrollbar.removeListener(run)
                    }
                  };
  
                  imm_script_module.scrollbar.addListener(run);
                  run();
                }
              },
              run: function(elm) {
                $(elm).addClass('animation-running');
                var parentAnim = elm,
                  child = false;
                if (typeof elm.dataset.parentAnim !== 'undefined') {
                  parentAnim = elm.querySelector(elm.dataset.parentAnim);
                }
                child = parentAnim.children;
                if (child) {
                  widthParent = parentAnim.offsetWidth;
                  delay = .4;
                  $.each(child, function(i, v) {
                    var tl = gsap.timeline();
                    tl.to(child, 1, {
                      css: {
                        width: widthParent
                      },
                      delay: delay,
                      ease: Power4.easeInOut
                    });
                    delay = delay + .4;
                  });
                }
              }
            };
  
            imm_script_module.animation.cssAnim = {
              init: function(elm) {
                if (imm_script_module.scrollbar) {
                  var run = function() {
                    if (imm_script_module.scrollbar.isVisible(elm) && !$(elm).hasClass('animation-running')) {
                      $(elm).addClass('animation-running');
                      imm_script_module.scrollbar.removeListener(run)
                    }
                  };
  
                  imm_script_module.scrollbar.addListener(run);
                  run();
                }
              }
            };
        }
      }
    });
  })(jQuery);

  