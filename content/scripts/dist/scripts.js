if (! function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function n(t) {
            var e = t.length,
                n = ot.type(t);
            return "function" === n || ot.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function i(t, e, n) {
            if (ot.isFunction(e)) return ot.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return ot.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (pt.test(e)) return ot.filter(e, t, n);
                e = ot.filter(e, t)
            }
            return ot.grep(t, function(t) {
                return ot.inArray(t, e) >= 0 !== n
            })
        }

        function o(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function a(t) {
            var e = wt[t] = {};
            return ot.each(t.match(bt) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function r() {
            ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1)) : (ft.detachEvent("onreadystatechange", s), t.detachEvent("onload", s))
        }

        function s() {
            (ft.addEventListener || "load" === event.type || "complete" === ft.readyState) && (r(), ot.ready())
        }

        function l(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(kt, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ct.test(n) ? ot.parseJSON(n) : n
                    } catch (o) {}
                    ot.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function c(t) {
            var e;
            for (e in t)
                if (("data" !== e || !ot.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function u(t, e, n, i) {
            if (ot.acceptData(t)) {
                var o, a, r = ot.expando,
                    s = t.nodeType,
                    l = s ? ot.cache : t,
                    c = s ? t[r] : t[r] && r;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e) return c || (c = s ? t[r] = G.pop() || ot.guid++ : r), l[c] || (l[c] = s ? {} : {
                    toJSON: ot.noop
                }), ("object" == typeof e || "function" == typeof e) && (i ? l[c] = ot.extend(l[c], e) : l[c].data = ot.extend(l[c].data, e)), a = l[c], i || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[ot.camelCase(e)] = n), "string" == typeof e ? (o = a[e], null == o && (o = a[ot.camelCase(e)])) : o = a, o
            }
        }

        function d(t, e, n) {
            if (ot.acceptData(t)) {
                var i, o, a = t.nodeType,
                    r = a ? ot.cache : t,
                    s = a ? t[ot.expando] : ot.expando;
                if (r[s]) {
                    if (e && (i = n ? r[s] : r[s].data)) {
                        ot.isArray(e) ? e = e.concat(ot.map(e, ot.camelCase)) : e in i ? e = [e] : (e = ot.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                        for (; o--;) delete i[e[o]];
                        if (n ? !c(i) : !ot.isEmptyObject(i)) return
                    }(n || (delete r[s].data, c(r[s]))) && (a ? ot.cleanData([t], !0) : nt.deleteExpando || r != r.window ? delete r[s] : r[s] = null)
                }
            }
        }

        function p() {
            return !0
        }

        function h() {
            return !1
        }

        function f() {
            try {
                return ft.activeElement
            } catch (t) {}
        }

        function m(t) {
            var e = Mt.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }

        function g(t, e) {
            var n, i, o = 0,
                a = typeof t.getElementsByTagName !== Tt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Tt ? t.querySelectorAll(e || "*") : void 0;
            if (!a)
                for (a = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || ot.nodeName(i, e) ? a.push(i) : ot.merge(a, g(i, e));
            return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], a) : a
        }

        function v(t) {
            Pt.test(t.type) && (t.defaultChecked = t.checked)
        }

        function y(t, e) {
            return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function b(t) {
            return t.type = (null !== ot.find.attr(t, "type")) + "/" + t.type, t
        }

        function w(t) {
            var e = Xt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function x(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) ot._data(n, "globalEval", !e || ot._data(e[i], "globalEval"))
        }

        function _(t, e) {
            if (1 === e.nodeType && ot.hasData(t)) {
                var n, i, o, a = ot._data(t),
                    r = ot._data(e, a),
                    s = a.events;
                if (s) {
                    delete r.handle, r.events = {};
                    for (n in s)
                        for (i = 0, o = s[n].length; o > i; i++) ot.event.add(e, n, s[n][i])
                }
                r.data && (r.data = ot.extend({}, r.data))
            }
        }

        function T(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !nt.noCloneEvent && e[ot.expando]) {
                    o = ot._data(e);
                    for (i in o.events) ot.removeEvent(e, i, o.handle);
                    e.removeAttribute(ot.expando)
                }
                "script" === n && e.text !== t.text ? (b(e).text = t.text, w(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), nt.html5Clone && t.innerHTML && !ot.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Pt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function C(e, n) {
            var i, o = ot(n.createElement(e)).appendTo(n.body),
                a = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : ot.css(o[0], "display");
            return o.detach(), a
        }

        function k(t) {
            var e = ft,
                n = Jt[t];
            return n || (n = C(t, e), "none" !== n && n || (Zt = (Zt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Zt[0].contentWindow || Zt[0].contentDocument).document, e.write(), e.close(), n = C(t, e), Zt.detach()), Jt[t] = n), n
        }

        function E(t, e) {
            return {
                get: function() {
                    var n = t();
                    return null != n ? n ? void delete this.get : (this.get = e).apply(this, arguments) : void 0
                }
            }
        }

        function S(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = pe.length; o--;)
                if (e = pe[o] + n, e in t) return e;
            return i
        }

        function $(t, e) {
            for (var n, i, o, a = [], r = 0, s = t.length; s > r; r++) i = t[r], i.style && (a[r] = ot._data(i, "olddisplay"), n = i.style.display, e ? (a[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && $t(i) && (a[r] = ot._data(i, "olddisplay", k(i.nodeName)))) : (o = $t(i), (n && "none" !== n || !o) && ot._data(i, "olddisplay", o ? n : ot.css(i, "display"))));
            for (r = 0; s > r; r++) i = t[r], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? a[r] || "" : "none"));
            return t
        }

        function I(t, e, n) {
            var i = le.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function P(t, e, n, i, o) {
            for (var a = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > a; a += 2) "margin" === n && (r += ot.css(t, n + St[a], !0, o)), i ? ("content" === n && (r -= ot.css(t, "padding" + St[a], !0, o)), "margin" !== n && (r -= ot.css(t, "border" + St[a] + "Width", !0, o))) : (r += ot.css(t, "padding" + St[a], !0, o), "padding" !== n && (r += ot.css(t, "border" + St[a] + "Width", !0, o)));
            return r
        }

        function L(t, e, n) {
            var i = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                a = te(t),
                r = nt.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, a);
            if (0 >= o || null == o) {
                if (o = ee(t, e, a), (0 > o || null == o) && (o = t.style[e]), ie.test(o)) return o;
                i = r && (nt.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + P(t, e, n || (r ? "border" : "content"), i, a) + "px"
        }

        function N(t, e, n, i, o) {
            return new N.prototype.init(t, e, n, i, o)
        }

        function A() {
            return setTimeout(function() {
                he = void 0
            }), he = ot.now()
        }

        function D(t, e) {
            var n, i = {
                    height: t
                },
                o = 0;
            for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = St[o], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function j(t, e, n) {
            for (var i, o = (be[e] || []).concat(be["*"]), a = 0, r = o.length; r > a; a++)
                if (i = o[a].call(n, e, t)) return i
        }

        function M(t, e, n) {
            var i, o, a, r, s, l, c, u, d = this,
                p = {},
                h = t.style,
                f = t.nodeType && $t(t),
                m = ot._data(t, "fxshow");
            n.queue || (s = ot._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--, ot.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = ot.css(t, "display"), u = "none" === c ? ot._data(t, "olddisplay") || k(t.nodeName) : c, "inline" === u && "none" === ot.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== k(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (o = e[i], me.exec(o)) {
                    if (delete e[i], a = a || "toggle" === o, o === (f ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        f = !0
                    }
                    p[i] = m && m[i] || ot.style(t, i)
                } else c = void 0;
            if (ot.isEmptyObject(p)) "inline" === ("none" === c ? k(t.nodeName) : c) && (h.display = c);
            else {
                m ? "hidden" in m && (f = m.hidden) : m = ot._data(t, "fxshow", {}), a && (m.hidden = !f), f ? ot(t).show() : d.done(function() {
                    ot(t).hide()
                }), d.done(function() {
                    var e;
                    ot._removeData(t, "fxshow");
                    for (e in p) ot.style(t, e, p[e])
                });
                for (i in p) r = j(f ? m[i] : 0, i, d), i in m || (m[i] = r.start, f && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function O(t, e) {
            var n, i, o, a, r;
            for (n in t)
                if (i = ot.camelCase(n), o = e[i], a = t[n], ot.isArray(a) && (o = a[1], a = t[n] = a[0]), n !== i && (t[i] = a, delete t[n]), r = ot.cssHooks[i], r && "expand" in r) {
                    a = r.expand(a), delete t[i];
                    for (n in a) n in t || (t[n] = a[n], e[n] = o)
                } else e[i] = o
        }

        function F(t, e, n) {
            var i, o, a = 0,
                r = ye.length,
                s = ot.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = he || A(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, a = 1 - i, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(a);
                    return s.notifyWith(t, [c, a, n]), 1 > a && l ? n : (s.resolveWith(t, [c]), !1)
                },
                c = s.promise({
                    elem: t,
                    props: ot.extend({}, e),
                    opts: ot.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: he || A(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = ot.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) c.tweens[n].run(1);
                        return e ? s.resolveWith(t, [c, e]) : s.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (O(u, c.opts.specialEasing); r > a; a++)
                if (i = ye[a].call(c, t, u, c.opts)) return i;
            return ot.map(u, j, c), ot.isFunction(c.opts.start) && c.opts.start.call(t, c), ot.fx.timer(ot.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function H(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    a = e.toLowerCase().match(bt) || [];
                if (ot.isFunction(n))
                    for (; i = a[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function z(t, e, n, i) {
            function o(s) {
                var l;
                return a[s] = !0, ot.each(t[s] || [], function(t, s) {
                    var c = s(e, n, i);
                    return "string" != typeof c || r || a[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                }), l
            }
            var a = {},
                r = t === Be;
            return o(e.dataTypes[0]) || !a["*"] && o("*")
        }

        function q(t, e) {
            var n, i, o = ot.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && ot.extend(!0, t, n), t
        }

        function W(t, e, n) {
            for (var i, o, a, r, s = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
            if (o)
                for (r in s)
                    if (s[r] && s[r].test(o)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in n) a = l[0];
            else {
                for (r in n) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        a = r;
                        break
                    }
                    i || (i = r)
                }
                a = a || i
            }
            return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
        }

        function B(t, e, n, i) {
            var o, a, r, s, l, c = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
            for (a = u.shift(); a;)
                if (t.responseFields[a] && (n[t.responseFields[a]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = a, a = u.shift())
                    if ("*" === a) a = l;
                    else if ("*" !== l && l !== a) {
                if (r = c[l + " " + a] || c["* " + a], !r)
                    for (o in c)
                        if (s = o.split(" "), s[1] === a && (r = c[l + " " + s[0]] || c["* " + s[0]])) {
                            r === !0 ? r = c[o] : c[o] !== !0 && (a = s[0], u.unshift(s[1]));
                            break
                        }
                if (r !== !0)
                    if (r && t["throws"]) e = r(e);
                    else try {
                        e = r(e)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: r ? d : "No conversion from " + l + " to " + a
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function R(t, e, n, i) {
            var o;
            if (ot.isArray(e)) ot.each(e, function(e, o) {
                n || Xe.test(t) ? i(t, o) : R(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== ot.type(e)) i(t, e);
            else
                for (o in e) R(t + "[" + o + "]", e[o], n, i)
        }

        function U() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function V() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function X(t) {
            return ot.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }
        var G = [],
            Q = G.slice,
            K = G.concat,
            Y = G.push,
            Z = G.indexOf,
            J = {},
            tt = J.toString,
            et = J.hasOwnProperty,
            nt = {},
            it = "1.11.1",
            ot = function(t, e) {
                return new ot.fn.init(t, e)
            },
            at = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            rt = /^-ms-/,
            st = /-([\da-z])/gi,
            lt = function(t, e) {
                return e.toUpperCase()
            };
        ot.fn = ot.prototype = {
            jquery: it,
            constructor: ot,
            selector: "",
            length: 0,
            toArray: function() {
                return Q.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
            },
            pushStack: function(t) {
                var e = ot.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return ot.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(ot.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(Q.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Y,
            sort: G.sort,
            splice: G.splice
        }, ot.extend = ot.fn.extend = function() {
            var t, e, n, i, o, a, r = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof r && (c = r, r = arguments[s] || {}, s++), "object" == typeof r || ot.isFunction(r) || (r = {}), s === l && (r = this, s--); l > s; s++)
                if (null != (o = arguments[s]))
                    for (i in o) t = r[i], n = o[i], r !== n && (c && n && (ot.isPlainObject(n) || (e = ot.isArray(n))) ? (e ? (e = !1, a = t && ot.isArray(t) ? t : []) : a = t && ot.isPlainObject(t) ? t : {}, r[i] = ot.extend(c, a, n)) : void 0 !== n && (r[i] = n));
            return r
        }, ot.extend({
            expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === ot.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === ot.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !ot.isArray(t) && t - parseFloat(t) >= 0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
                try {
                    if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (nt.ownLast)
                    for (e in t) return et.call(t, e);
                for (e in t);
                return void 0 === e || et.call(t, e)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? J[tt.call(t)] || "object" : typeof t
            },
            globalEval: function(e) {
                e && ot.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(rt, "ms-").replace(st, lt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, i) {
                var o, a = 0,
                    r = t.length,
                    s = n(t);
                if (i) {
                    if (s)
                        for (; r > a && (o = e.apply(t[a], i), o !== !1); a++);
                    else
                        for (a in t)
                            if (o = e.apply(t[a], i), o === !1) break
                } else if (s)
                    for (; r > a && (o = e.call(t[a], a, t[a]), o !== !1); a++);
                else
                    for (a in t)
                        if (o = e.call(t[a], a, t[a]), o === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(at, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? ot.merge(i, "string" == typeof t ? [t] : t) : Y.call(i, t)), i
            },
            inArray: function(t, e, n) {
                var i;
                if (e) {
                    if (Z) return Z.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in e && e[n] === t) return n
                }
                return -1
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; n > i;) t[o++] = e[i++];
                if (n !== n)
                    for (; void 0 !== e[i];) t[o++] = e[i++];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                for (var i, o = [], a = 0, r = t.length, s = !n; r > a; a++) i = !e(t[a], a), i !== s && o.push(t[a]);
                return o
            },
            map: function(t, e, i) {
                var o, a = 0,
                    r = t.length,
                    s = n(t),
                    l = [];
                if (s)
                    for (; r > a; a++) o = e(t[a], a, i), null != o && l.push(o);
                else
                    for (a in t) o = e(t[a], a, i), null != o && l.push(o);
                return K.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, o;
                return "string" == typeof e && (o = t[e], e = t, t = o), ot.isFunction(t) ? (n = Q.call(arguments, 2), i = function() {
                    return t.apply(e || this, n.concat(Q.call(arguments)))
                }, i.guid = t.guid = t.guid || ot.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: nt
        }), ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            J["[object " + e + "]"] = e.toLowerCase()
        });
        var ct = function(t) {
            function e(t, e, n, i) {
                var o, a, r, s, l, c, d, h, f, m;
                if ((e ? e.ownerDocument || e : z) !== N && L(e), e = e || N, n = n || [], !t || "string" != typeof t) return n;
                if (1 !== (s = e.nodeType) && 9 !== s) return [];
                if (D && !i) {
                    if (o = yt.exec(t))
                        if (r = o[1]) {
                            if (9 === s) {
                                if (a = e.getElementById(r), !a || !a.parentNode) return n;
                                if (a.id === r) return n.push(a), n
                            } else if (e.ownerDocument && (a = e.ownerDocument.getElementById(r)) && F(e, a) && a.id === r) return n.push(a), n
                        } else {
                            if (o[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                            if ((r = o[3]) && x.getElementsByClassName && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(r)), n
                        }
                    if (x.qsa && (!j || !j.test(t))) {
                        if (h = d = H, f = e, m = 9 === s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                            for (c = k(t), (d = e.getAttribute("id")) ? h = d.replace(wt, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + p(c[l]);
                            f = bt.test(t) && u(e.parentNode) || e, m = c.join(",")
                        }
                        if (m) try {
                            return J.apply(n, f.querySelectorAll(m)), n
                        } catch (g) {} finally {
                            d || e.removeAttribute("id")
                        }
                    }
                }
                return S(t.replace(lt, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[H] = !0, t
            }

            function o(t) {
                var e = N.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function a(t, e) {
                for (var n = t.split("|"), i = t.length; i--;) _.attrHandle[n[i]] = e
            }

            function r(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function s(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var o, a = t([], n.length, e), r = a.length; r--;) n[o = a[r]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function u(t) {
                return t && typeof t.getElementsByTagName !== X && t
            }

            function d() {}

            function p(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function h(t, e, n) {
                var i = e.dir,
                    o = n && "parentNode" === i,
                    a = W++;
                return e.first ? function(e, n, a) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) return t(e, n, a)
                } : function(e, n, r) {
                    var s, l, c = [q, a];
                    if (r) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || o) && t(e, n, r)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || o) {
                                if (l = e[H] || (e[H] = {}), (s = l[i]) && s[0] === q && s[1] === a) return c[2] = s[2];
                                if (l[i] = c, c[2] = t(e, n, r)) return !0
                            }
                }
            }

            function f(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, n, i) {
                for (var o = 0, a = n.length; a > o; o++) e(t, n[o], i);
                return i
            }

            function g(t, e, n, i, o) {
                for (var a, r = [], s = 0, l = t.length, c = null != e; l > s; s++)(a = t[s]) && (!n || n(a, i, o)) && (r.push(a), c && e.push(s));
                return r
            }

            function v(t, e, n, o, a, r) {
                return o && !o[H] && (o = v(o)), a && !a[H] && (a = v(a, r)), i(function(i, r, s, l) {
                    var c, u, d, p = [],
                        h = [],
                        f = r.length,
                        v = i || m(e || "*", s.nodeType ? [s] : s, []),
                        y = !t || !i && e ? v : g(v, p, t, s, l),
                        b = n ? a || (i ? t : f || o) ? [] : r : y;
                    if (n && n(y, b, s, l), o)
                        for (c = g(b, h), o(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[h[u]] = !(y[h[u]] = d));
                    if (i) {
                        if (a || t) {
                            if (a) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                a(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = a ? et.call(i, d) : p[u]) > -1 && (i[c] = !(r[c] = d))
                        }
                    } else b = g(b === r ? b.splice(f, b.length) : b), a ? a(null, r, b, l) : J.apply(r, b)
                })
            }

            function y(t) {
                for (var e, n, i, o = t.length, a = _.relative[t[0].type], r = a || _.relative[" "], s = a ? 1 : 0, l = h(function(t) {
                        return t === e
                    }, r, !0), c = h(function(t) {
                        return et.call(e, t) > -1
                    }, r, !0), u = [function(t, n, i) {
                        return !a && (i || n !== $) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i))
                    }]; o > s; s++)
                    if (n = _.relative[t[s].type]) u = [h(f(u), n)];
                    else {
                        if (n = _.filter[t[s].type].apply(null, t[s].matches), n[H]) {
                            for (i = ++s; o > i && !_.relative[t[i].type]; i++);
                            return v(s > 1 && f(u), s > 1 && p(t.slice(0, s - 1).concat({
                                value: " " === t[s - 2].type ? "*" : ""
                            })).replace(lt, "$1"), n, i > s && y(t.slice(s, i)), o > i && y(t = t.slice(i)), o > i && p(t))
                        }
                        u.push(n)
                    }
                return f(u)
            }

            function b(t, n) {
                var o = n.length > 0,
                    a = t.length > 0,
                    r = function(i, r, s, l, c) {
                        var u, d, p, h = 0,
                            f = "0",
                            m = i && [],
                            v = [],
                            y = $,
                            b = i || a && _.find.TAG("*", c),
                            w = q += null == y ? 1 : Math.random() || .1,
                            x = b.length;
                        for (c && ($ = r !== N && r); f !== x && null != (u = b[f]); f++) {
                            if (a && u) {
                                for (d = 0; p = t[d++];)
                                    if (p(u, r, s)) {
                                        l.push(u);
                                        break
                                    }
                                c && (q = w)
                            }
                            o && ((u = !p && u) && h--, i && m.push(u))
                        }
                        if (h += f, o && f !== h) {
                            for (d = 0; p = n[d++];) p(m, v, r, s);
                            if (i) {
                                if (h > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = Y.call(l));
                                v = g(v)
                            }
                            J.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                        }
                        return c && (q = w, $ = y), m
                    };
                return o ? i(r) : r
            }
            var w, x, _, T, C, k, E, S, $, I, P, L, N, A, D, j, M, O, F, H = "sizzle" + -new Date,
                z = t.document,
                q = 0,
                W = 0,
                B = n(),
                R = n(),
                U = n(),
                V = function(t, e) {
                    return t === e && (P = !0), 0
                },
                X = "undefined",
                G = 1 << 31,
                Q = {}.hasOwnProperty,
                K = [],
                Y = K.pop,
                Z = K.push,
                J = K.push,
                tt = K.slice,
                et = K.indexOf || function(t) {
                    for (var e = 0, n = this.length; n > e; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                at = ot.replace("w", "w#"),
                rt = "\\[" + it + "*(" + ot + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + at + "))|)" + it + "*\\]",
                st = ":(" + ot + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                ct = new RegExp("^" + it + "*," + it + "*"),
                ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                pt = new RegExp(st),
                ht = new RegExp("^" + at + "$"),
                ft = {
                    ID: new RegExp("^#(" + ot + ")"),
                    CLASS: new RegExp("^\\.(" + ot + ")"),
                    TAG: new RegExp("^(" + ot.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + rt),
                    PSEUDO: new RegExp("^" + st),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + nt + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                mt = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                vt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                bt = /[+~]/,
                wt = /'|\\/g,
                xt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                _t = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                J.apply(K = tt.call(z.childNodes), z.childNodes), K[z.childNodes.length].nodeType
            } catch (Tt) {
                J = {
                    apply: K.length ? function(t, e) {
                        Z.apply(t, tt.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            x = e.support = {}, C = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, L = e.setDocument = function(t) {
                var e, n = t ? t.ownerDocument || t : z,
                    i = n.defaultView;
                return n !== N && 9 === n.nodeType && n.documentElement ? (N = n, A = n.documentElement, D = !C(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                    L()
                }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                    L()
                })), x.attributes = o(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = o(function(t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = vt.test(n.getElementsByClassName) && o(function(t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), x.getById = o(function(t) {
                    return A.appendChild(t).id = H, !n.getElementsByName || !n.getElementsByName(H).length
                }), x.getById ? (_.find.ID = function(t, e) {
                    if (typeof e.getElementById !== X && D) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, _.filter.ID = function(t) {
                    var e = t.replace(xt, _t);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete _.find.ID, _.filter.ID = function(t) {
                    var e = t.replace(xt, _t);
                    return function(t) {
                        var n = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), _.find.TAG = x.getElementsByTagName ? function(t, e) {
                    return typeof e.getElementsByTagName !== X ? e.getElementsByTagName(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        a = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = a[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return a
                }, _.find.CLASS = x.getElementsByClassName && function(t, e) {
                    return typeof e.getElementsByClassName !== X && D ? e.getElementsByClassName(t) : void 0
                }, M = [], j = [], (x.qsa = vt.test(n.querySelectorAll)) && (o(function(t) {
                    t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && j.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || j.push("\\[" + it + "*(?:value|" + nt + ")"), t.querySelectorAll(":checked").length || j.push(":checked")
                }), o(function(t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && j.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), j.push(",.*:")
                })), (x.matchesSelector = vt.test(O = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && o(function(t) {
                    x.disconnectedMatch = O.call(t, "div"), O.call(t, "[s!='']:x"), M.push("!=", st)
                }), j = j.length && new RegExp(j.join("|")), M = M.length && new RegExp(M.join("|")), e = vt.test(A.compareDocumentPosition), F = e || vt.test(A.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, V = e ? function(t, e) {
                    if (t === e) return P = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === z && F(z, t) ? -1 : e === n || e.ownerDocument === z && F(z, e) ? 1 : I ? et.call(I, t) - et.call(I, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return P = !0, 0;
                    var i, o = 0,
                        a = t.parentNode,
                        s = e.parentNode,
                        l = [t],
                        c = [e];
                    if (!a || !s) return t === n ? -1 : e === n ? 1 : a ? -1 : s ? 1 : I ? et.call(I, t) - et.call(I, e) : 0;
                    if (a === s) return r(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) c.unshift(i);
                    for (; l[o] === c[o];) o++;
                    return o ? r(l[o], c[o]) : l[o] === z ? -1 : c[o] === z ? 1 : 0
                }, n) : N
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== N && L(t), n = n.replace(dt, "='$1']"), !(!x.matchesSelector || !D || M && M.test(n) || j && j.test(n))) try {
                    var i = O.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (o) {}
                return e(n, N, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== N && L(t), F(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== N && L(t);
                var n = _.attrHandle[e.toLowerCase()],
                    i = n && Q.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !D) : void 0;
                return void 0 !== i ? i : x.attributes || !D ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if (P = !x.detectDuplicates, I = !x.sortStable && t.slice(0), t.sort(V), P) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return I = null, t
            }, T = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += T(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += T(e);
                return n
            }, _ = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(xt, _t), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, _t), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pt.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(xt, _t).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && B(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(o) {
                            var a = e.attr(o, t);
                            return null == a ? "!=" === n : n ? (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a + " ").indexOf(i) > -1 : "|=" === n ? a === i || a.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var a = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            s = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var c, u, d, p, h, f, m = a !== r ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = s && e.nodeName.toLowerCase(),
                                y = !l && !s;
                            if (g) {
                                if (a) {
                                    for (; m;) {
                                        for (d = e; d = d[m];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? g.firstChild : g.lastChild], r && y) {
                                    for (u = g[H] || (g[H] = {}), c = u[t] || [], h = c[0] === q && c[1], p = c[0] === q && c[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (p = h = 0) || f.pop();)
                                        if (1 === d.nodeType && ++p && d === e) {
                                            u[t] = [q, h, p];
                                            break
                                        }
                                } else if (y && (c = (e[H] || (e[H] = {}))[t]) && c[0] === q) p = c[1];
                                else
                                    for (;
                                        (d = ++h && d && d[m] || (p = h = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[H] || (d[H] = {}))[t] = [q, p]), d !== e)););
                                return p -= o, p === i || p % i === 0 && p / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var o, a = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return a[H] ? a(n) : a.length > 1 ? (o = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, o = a(t, n), r = o.length; r--;) i = et.call(t, o[r]), t[i] = !(e[i] = o[r])
                        }) : function(t) {
                            return a(t, 0, o)
                        }) : a
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            o = E(t.replace(lt, "$1"));
                        return o[H] ? i(function(t, e, n, i) {
                            for (var a, r = o(t, null, i, []), s = t.length; s--;)(a = r[s]) && (t[s] = !(e[s] = a))
                        }) : function(t, i, a) {
                            return e[0] = t, o(e, null, a, n), !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                    }),
                    lang: i(function(t) {
                        return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, _t).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === A
                    },
                    focus: function(t) {
                        return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !_.pseudos.empty(t)
                    },
                    header: function(t) {
                        return gt.test(t.nodeName)
                    },
                    input: function(t) {
                        return mt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: c(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: c(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: c(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, _.pseudos.nth = _.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) _.pseudos[w] = s(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) _.pseudos[w] = l(w);
            return d.prototype = _.filters = _.pseudos, _.setFilters = new d, k = e.tokenize = function(t, n) {
                var i, o, a, r, s, l, c, u = R[t + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = t, l = [], c = _.preFilter; s;) {
                    (!i || (o = ct.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(a = [])), i = !1, (o = ut.exec(s)) && (i = o.shift(), a.push({
                        value: i,
                        type: o[0].replace(lt, " ")
                    }), s = s.slice(i.length));
                    for (r in _.filter) !(o = ft[r].exec(s)) || c[r] && !(o = c[r](o)) || (i = o.shift(), a.push({
                        value: i,
                        type: r,
                        matches: o
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? e.error(t) : R(t, l).slice(0)
            }, E = e.compile = function(t, e) {
                var n, i = [],
                    o = [],
                    a = U[t + " "];
                if (!a) {
                    for (e || (e = k(t)), n = e.length; n--;) a = y(e[n]), a[H] ? i.push(a) : o.push(a);
                    a = U(t, b(o, i)), a.selector = t
                }
                return a
            }, S = e.select = function(t, e, n, i) {
                var o, a, r, s, l, c = "function" == typeof t && t,
                    d = !i && k(t = c.selector || t);
                if (n = n || [], 1 === d.length) {
                    if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (r = a[0]).type && x.getById && 9 === e.nodeType && D && _.relative[a[1].type]) {
                        if (e = (_.find.ID(r.matches[0].replace(xt, _t), e) || [])[0], !e) return n;
                        c && (e = e.parentNode), t = t.slice(a.shift().value.length)
                    }
                    for (o = ft.needsContext.test(t) ? 0 : a.length; o-- && (r = a[o], !_.relative[s = r.type]);)
                        if ((l = _.find[s]) && (i = l(r.matches[0].replace(xt, _t), bt.test(a[0].type) && u(e.parentNode) || e))) {
                            if (a.splice(o, 1), t = i.length && p(a), !t) return J.apply(n, i), n;
                            break
                        }
                }
                return (c || E(t, d))(i, e, !D, n, bt.test(t) && u(e.parentNode) || e), n
            }, x.sortStable = H.split("").sort(V).join("") === H, x.detectDuplicates = !!P, L(), x.sortDetached = o(function(t) {
                return 1 & t.compareDocumentPosition(N.createElement("div"))
            }), o(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || a("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || a("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function(t) {
                return null == t.getAttribute("disabled")
            }) || a(nt, function(t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
        var ut = ot.expr.match.needsContext,
            dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            pt = /^.[^:#\[\.,]*$/;
        ot.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ot.find.matchesSelector(i, t) ? [i] : [] : ot.find.matches(t, ot.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, ot.fn.extend({
            find: function(t) {
                var e, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof t) return this.pushStack(ot(t).filter(function() {
                    for (e = 0; o > e; e++)
                        if (ot.contains(i[e], this)) return !0
                }));
                for (e = 0; o > e; e++) ot.find(t, i[e], n);
                return n = this.pushStack(o > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(i(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(i(this, t || [], !0))
            },
            is: function(t) {
                return !!i(this, "string" == typeof t && ut.test(t) ? ot(t) : t || [], !1).length
            }
        });
        var ht, ft = t.document,
            mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            gt = ot.fn.init = function(t, e) {
                var n, i;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : mt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || ht).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : ft, !0)), dt.test(n[1]) && ot.isPlainObject(e))
                            for (n in e) ot.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    if (i = ft.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2]) return ht.find(t);
                        this.length = 1, this[0] = i
                    }
                    return this.context = ft, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? "undefined" != typeof ht.ready ? ht.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
            };
        gt.prototype = ot.fn, ht = ot(ft);
        var vt = /^(?:parents|prev(?:Until|All))/,
            yt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ot.extend({
            dir: function(t, e, n) {
                for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !ot(o).is(n));) 1 === o.nodeType && i.push(o), o = o[e];
                return i
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), ot.fn.extend({
            has: function(t) {
                var e, n = ot(t, this),
                    i = n.length;
                return this.filter(function() {
                    for (e = 0; i > e; e++)
                        if (ot.contains(this, n[e])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, o = this.length, a = [], r = ut.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
                            a.push(n);
                            break
                        }
                return this.pushStack(a.length > 1 ? ot.unique(a) : a)
            },
            index: function(t) {
                return t ? "string" == typeof t ? ot.inArray(this[0], ot(t)) : ot.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(ot.unique(ot.merge(this.get(), ot(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ot.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return ot.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return ot.dir(t, "parentNode", n)
            },
            next: function(t) {
                return o(t, "nextSibling")
            },
            prev: function(t) {
                return o(t, "previousSibling")
            },
            nextAll: function(t) {
                return ot.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return ot.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return ot.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return ot.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return ot.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return ot.sibling(t.firstChild)
            },
            contents: function(t) {
                return ot.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ot.merge([], t.childNodes)
            }
        }, function(t, e) {
            ot.fn[t] = function(n, i) {
                var o = ot.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ot.filter(i, o)), this.length > 1 && (yt[t] || (o = ot.unique(o)), vt.test(t) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var bt = /\S+/g,
            wt = {};
        ot.Callbacks = function(t) {
            t = "string" == typeof t ? wt[t] || a(t) : ot.extend({}, t);
            var e, n, i, o, r, s, l = [],
                c = !t.once && [],
                u = function(a) {
                    for (n = t.memory && a, i = !0, r = s || 0, s = 0, o = l.length, e = !0; l && o > r; r++)
                        if (l[r].apply(a[0], a[1]) === !1 && t.stopOnFalse) {
                            n = !1;
                            break
                        }
                    e = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function a(e) {
                                ot.each(e, function(e, n) {
                                    var i = ot.type(n);
                                    "function" === i ? t.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && a(n)
                                })
                            }(arguments), e ? o = l.length : n && (s = i, u(n))
                        }
                        return this
                    },
                    remove: function() {
                        return l && ot.each(arguments, function(t, n) {
                            for (var i;
                                (i = ot.inArray(n, l, i)) > -1;) l.splice(i, 1), e && (o >= i && o--, r >= i && r--)
                        }), this
                    },
                    has: function(t) {
                        return t ? ot.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], o = 0, this
                    },
                    disable: function() {
                        return l = c = n = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = void 0, n || d.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(t, n) {
                        return !l || i && !c || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? c.push(n) : u(n)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return d
        }, ot.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ot.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return ot.Deferred(function(n) {
                                ot.each(e, function(e, a) {
                                    var r = ot.isFunction(t[e]) && t[e];
                                    o[a[1]](function() {
                                        var t = r && r.apply(this, arguments);
                                        t && ot.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a[0] + "With"](this === i ? n.promise() : this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ot.extend(t, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, ot.each(e, function(t, a) {
                    var r = a[2],
                        s = a[3];
                    i[a[1]] = r.add, s && r.add(function() {
                        n = s
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[a[0]] = function() {
                        return o[a[0] + "With"](this === o ? i : this, arguments), this
                    }, o[a[0] + "With"] = r.fireWith
                }), i.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, n, i, o = 0,
                    a = Q.call(arguments),
                    r = a.length,
                    s = 1 !== r || t && ot.isFunction(t.promise) ? r : 0,
                    l = 1 === s ? t : ot.Deferred(),
                    c = function(t, n, i) {
                        return function(o) {
                            n[t] = this, i[t] = arguments.length > 1 ? Q.call(arguments) : o, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (r > 1)
                    for (e = new Array(r), n = new Array(r), i = new Array(r); r > o; o++) a[o] && ot.isFunction(a[o].promise) ? a[o].promise().done(c(o, i, a)).fail(l.reject).progress(c(o, n, e)) : --s;
                return s || l.resolveWith(i, a), l.promise()
            }
        });
        var xt;
        ot.fn.ready = function(t) {
            return ot.ready.promise().done(t), this
        }, ot.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? ot.readyWait++ : ot.ready(!0)
            },
            ready: function(t) {
                if (t === !0 ? !--ot.readyWait : !ot.isReady) {
                    if (!ft.body) return setTimeout(ot.ready);
                    ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (xt.resolveWith(ft, [ot]), ot.fn.triggerHandler && (ot(ft).triggerHandler("ready"), ot(ft).off("ready")))
                }
            }
        }), ot.ready.promise = function(e) {
            if (!xt)
                if (xt = ot.Deferred(), "complete" === ft.readyState) setTimeout(ot.ready);
                else if (ft.addEventListener) ft.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1);
            else {
                ft.attachEvent("onreadystatechange", s), t.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == t.frameElement && ft.documentElement
                } catch (i) {}
                n && n.doScroll && ! function o() {
                    if (!ot.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(o, 50)
                        }
                        r(), ot.ready()
                    }
                }()
            }
            return xt.promise(e)
        };
        var _t, Tt = "undefined";
        for (_t in ot(nt)) break;
        nt.ownLast = "0" !== _t, nt.inlineBlockNeedsLayout = !1, ot(function() {
                var t, e, n, i;
                n = ft.getElementsByTagName("body")[0], n && n.style && (e = ft.createElement("div"), i = ft.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Tt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var t = ft.createElement("div");
                if (null == nt.deleteExpando) {
                    nt.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (e) {
                        nt.deleteExpando = !1
                    }
                }
                t = null
            }(), ot.acceptData = function(t) {
                var e = ot.noData[(t.nodeName + " ").toLowerCase()],
                    n = +t.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
            };
        var Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            kt = /([A-Z])/g;
        ot.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? ot.cache[t[ot.expando]] : t[ot.expando], !!t && !c(t)
            },
            data: function(t, e, n) {
                return u(t, e, n)
            },
            removeData: function(t, e) {
                return d(t, e)
            },
            _data: function(t, e, n) {
                return u(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return d(t, e, !0)
            }
        }), ot.fn.extend({
            data: function(t, e) {
                var n, i, o, a = this[0],
                    r = a && a.attributes;
                if (void 0 === t) {
                    if (this.length && (o = ot.data(a), 1 === a.nodeType && !ot._data(a, "parsedAttrs"))) {
                        for (n = r.length; n--;) r[n] && (i = r[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), l(a, i, o[i])));
                        ot._data(a, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    ot.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    ot.data(this, t, e)
                }) : a ? l(a, t, ot.data(a, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    ot.removeData(this, t)
                })
            }
        }), ot.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = ot._data(t, e), n && (!i || ot.isArray(n) ? i = ot._data(t, e, ot.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = ot.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    a = ot._queueHooks(t, e),
                    r = function() {
                        ot.dequeue(t, e)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete a.stop, o.call(t, r, a)), !i && a && a.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return ot._data(t, n) || ot._data(t, n, {
                    empty: ot.Callbacks("once memory").add(function() {
                        ot._removeData(t, e + "queue"), ot._removeData(t, n)
                    })
                })
            }
        }), ot.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = ot.queue(this, t, e);
                    ot._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ot.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ot.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    o = ot.Deferred(),
                    a = this,
                    r = this.length,
                    s = function() {
                        --i || o.resolveWith(a, [a])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) n = ot._data(a[r], t + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(e)
            }
        });
        var Et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            St = ["Top", "Right", "Bottom", "Left"],
            $t = function(t, e) {
                return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
            },
            It = ot.access = function(t, e, n, i, o, a, r) {
                var s = 0,
                    l = t.length,
                    c = null == n;
                if ("object" === ot.type(n)) {
                    o = !0;
                    for (s in n) ot.access(t, e, s, n[s], !0, a, r)
                } else if (void 0 !== i && (o = !0, ot.isFunction(i) || (r = !0), c && (r ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                        return c.call(ot(t), n)
                    })), e))
                    for (; l > s; s++) e(t[s], n, r ? i : i.call(t[s], s, e(t[s], n)));
                return o ? t : c ? e.call(t) : l ? e(t[0], n) : a
            },
            Pt = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = ft.createElement("input"),
                e = ft.createElement("div"),
                n = ft.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === e.firstChild.nodeType, nt.tbody = !e.getElementsByTagName("tbody").length, nt.htmlSerialize = !!e.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ft.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), nt.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                    nt.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete e.test
                } catch (i) {
                    nt.deleteExpando = !1
                }
            }
        }(),
        function() {
            var e, n, i = ft.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + e, (nt[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), nt[e + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
        var Lt = /^(?:input|select|textarea)$/i,
            Nt = /^key/,
            At = /^(?:mouse|pointer|contextmenu)|click/,
            Dt = /^(?:focusinfocus|focusoutblur)$/,
            jt = /^([^.]*)(?:\.(.+)|)$/;
        ot.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var a, r, s, l, c, u, d, p, h, f, m, g = ot._data(t);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = ot.guid++), (r = g.events) || (r = g.events = {}), (u = g.handle) || (u = g.handle = function(t) {
                            return typeof ot === Tt || t && ot.event.triggered === t.type ? void 0 : ot.event.dispatch.apply(u.elem, arguments)
                        }, u.elem = t), e = (e || "").match(bt) || [""], s = e.length; s--;) a = jt.exec(e[s]) || [], h = m = a[1], f = (a[2] || "").split(".").sort(), h && (c = ot.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = ot.event.special[h] || {}, d = ot.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && ot.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, l), (p = r[h]) || (p = r[h] = [], p.delegateCount = 0, c.setup && c.setup.call(t, i, f, u) !== !1 || (t.addEventListener ? t.addEventListener(h, u, !1) : t.attachEvent && t.attachEvent("on" + h, u))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), ot.event.global[h] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, i, o) {
                var a, r, s, l, c, u, d, p, h, f, m, g = ot.hasData(t) && ot._data(t);
                if (g && (u = g.events)) {
                    for (e = (e || "").match(bt) || [""], c = e.length; c--;)
                        if (s = jt.exec(e[c]) || [], h = m = s[1], f = (s[2] || "").split(".").sort(), h) {
                            for (d = ot.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, p = u[h] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = p.length; a--;) r = p[a], !o && m !== r.origType || n && n.guid !== r.guid || s && !s.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (p.splice(a, 1), r.selector && p.delegateCount--, d.remove && d.remove.call(t, r));
                            l && !p.length && (d.teardown && d.teardown.call(t, f, g.handle) !== !1 || ot.removeEvent(t, h, g.handle), delete u[h])
                        } else
                            for (h in u) ot.event.remove(t, h + e[c], n, i, !0);
                    ot.isEmptyObject(u) && (delete g.handle, ot._removeData(t, "events"))
                }
            },
            trigger: function(e, n, i, o) {
                var a, r, s, l, c, u, d, p = [i || ft],
                    h = et.call(e, "type") ? e.type : e,
                    f = et.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = u = i = i || ft, 3 !== i.nodeType && 8 !== i.nodeType && !Dt.test(h + ot.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), r = h.indexOf(":") < 0 && "on" + h, e = e[ot.expando] ? e : new ot.Event(h, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ot.makeArray(n, [e]), c = ot.event.special[h] || {}, o || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                    if (!o && !c.noBubble && !ot.isWindow(i)) {
                        for (l = c.delegateType || h, Dt.test(l + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), u = s;
                        u === (i.ownerDocument || ft) && p.push(u.defaultView || u.parentWindow || t)
                    }
                    for (d = 0;
                        (s = p[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? l : c.bindType || h, a = (ot._data(s, "events") || {})[e.type] && ot._data(s, "handle"), a && a.apply(s, n), a = r && s[r], a && a.apply && ot.acceptData(s) && (e.result = a.apply(s, n), e.result === !1 && e.preventDefault());
                    if (e.type = h, !o && !e.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), n) === !1) && ot.acceptData(i) && r && i[h] && !ot.isWindow(i)) {
                        u = i[r], u && (i[r] = null), ot.event.triggered = h;
                        try {
                            i[h]()
                        } catch (m) {}
                        ot.event.triggered = void 0, u && (i[r] = u)
                    }
                    return e.result
                }
            },
            dispatch: function(t) {
                t = ot.event.fix(t);
                var e, n, i, o, a, r = [],
                    s = Q.call(arguments),
                    l = (ot._data(this, "events") || {})[t.type] || [],
                    c = ot.event.special[t.type] || {};
                if (s[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (r = ot.event.handlers.call(this, t, l), e = 0;
                        (o = r[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, a = 0;
                            (i = o.handlers[a++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((ot.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, a, r = [],
                    s = e.delegateCount,
                    l = t.target;
                if (s && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (o = [], a = 0; s > a; a++) i = e[a], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? ot(n, this).index(l) >= 0 : ot.find(n, this, null, [l]).length), o[n] && o.push(i);
                            o.length && r.push({
                                elem: l,
                                handlers: o
                            })
                        }
                return s < e.length && r.push({
                    elem: this,
                    handlers: e.slice(s)
                }), r
            },
            fix: function(t) {
                if (t[ot.expando]) return t;
                var e, n, i, o = t.type,
                    a = t,
                    r = this.fixHooks[o];
                for (r || (this.fixHooks[o] = r = At.test(o) ? this.mouseHooks : Nt.test(o) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, t = new ot.Event(a), e = i.length; e--;) n = i[e], t[n] = a[n];
                return t.target || (t.target = a.srcElement || ft), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, a) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, o, a = e.button,
                        r = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || ft, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement : r), t.which || void 0 === a || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== f() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ot.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return ot.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, i) {
                var o = ot.extend(new ot.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? ot.event.trigger(o, null, e) : ot.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, ot.removeEvent = ft.removeEventListener ? function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === Tt && (t[i] = null), t.detachEvent(i, n))
        }, ot.Event = function(t, e) {
            return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? p : h) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
        }, ot.Event.prototype = {
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = p, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = p, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = p, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ot.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            ot.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        a = t.handleObj;
                    return (!o || o !== i && !ot.contains(i, o)) && (t.type = a.origType, n = a.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), nt.submitBubbles || (ot.event.special.submit = {
            setup: function() {
                return ot.nodeName(this, "form") ? !1 : void ot.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target,
                        n = ot.nodeName(e, "input") || ot.nodeName(e, "button") ? e.form : void 0;
                    n && !ot._data(n, "submitBubbles") && (ot.event.add(n, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), ot._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ot.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return ot.nodeName(this, "form") ? !1 : void ot.event.remove(this, "._submit")
            }
        }), nt.changeBubbles || (ot.event.special.change = {
            setup: function() {
                return Lt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ot.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), ot.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), ot.event.simulate("change", this, t, !0)
                })), !1) : void ot.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Lt.test(e.nodeName) && !ot._data(e, "changeBubbles") && (ot.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || ot.event.simulate("change", this.parentNode, t, !0)
                    }), ot._data(e, "changeBubbles", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return ot.event.remove(this, "._change"), !Lt.test(this.nodeName)
            }
        }), nt.focusinBubbles || ot.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                ot.event.simulate(e, t.target, ot.event.fix(t), !0)
            };
            ot.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = ot._data(i, e);
                    o || i.addEventListener(t, n, !0), ot._data(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = ot._data(i, e) - 1;
                    o ? ot._data(i, e, o) : (i.removeEventListener(t, n, !0), ot._removeData(i, e))
                }
            }
        }), ot.fn.extend({
            on: function(t, e, n, i, o) {
                var a, r;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (a in t) this.on(a, e, n, t[a], o);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = h;
                else if (!i) return this;
                return 1 === o && (r = i, i = function(t) {
                    return ot().off(t), r.apply(this, arguments)
                }, i.guid = r.guid || (r.guid = ot.guid++)), this.each(function() {
                    ot.event.add(this, t, i, n, e)
                })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ot(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = h), this.each(function() {
                    ot.event.remove(this, t, n, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    ot.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? ot.event.trigger(t, e, n, !0) : void 0
            }
        });
        var Mt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ot = / jQuery\d+="(?:null|\d+)"/g,
            Ft = new RegExp("<(?:" + Mt + ")[\\s/>]", "i"),
            Ht = /^\s+/,
            zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            qt = /<([\w:]+)/,
            Wt = /<tbody/i,
            Bt = /<|&#?\w+;/,
            Rt = /<(?:script|style|link)/i,
            Ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Vt = /^$|\/(?:java|ecma)script/i,
            Xt = /^true\/(.*)/,
            Gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Qt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Kt = m(ft),
            Yt = Kt.appendChild(ft.createElement("div"));
        Qt.optgroup = Qt.option, Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead, Qt.th = Qt.td, ot.extend({
            clone: function(t, e, n) {
                var i, o, a, r, s, l = ot.contains(t.ownerDocument, t);
                if (nt.html5Clone || ot.isXMLDoc(t) || !Ft.test("<" + t.nodeName + ">") ? a = t.cloneNode(!0) : (Yt.innerHTML = t.outerHTML, Yt.removeChild(a = Yt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))
                    for (i = g(a), s = g(t), r = 0; null != (o = s[r]); ++r) i[r] && T(o, i[r]);
                if (e)
                    if (n)
                        for (s = s || g(t), i = i || g(a), r = 0; null != (o = s[r]); r++) _(o, i[r]);
                    else _(t, a);
                return i = g(a, "script"), i.length > 0 && x(i, !l && g(t, "script")), i = s = o = null, a
            },
            buildFragment: function(t, e, n, i) {
                for (var o, a, r, s, l, c, u, d = t.length, p = m(e), h = [], f = 0; d > f; f++)
                    if (a = t[f], a || 0 === a)
                        if ("object" === ot.type(a)) ot.merge(h, a.nodeType ? [a] : a);
                        else if (Bt.test(a)) {
                    for (s = s || p.appendChild(e.createElement("div")), l = (qt.exec(a) || ["", ""])[1].toLowerCase(), u = Qt[l] || Qt._default, s.innerHTML = u[1] + a.replace(zt, "<$1></$2>") + u[2], o = u[0]; o--;) s = s.lastChild;
                    if (!nt.leadingWhitespace && Ht.test(a) && h.push(e.createTextNode(Ht.exec(a)[0])), !nt.tbody)
                        for (a = "table" !== l || Wt.test(a) ? "<table>" !== u[1] || Wt.test(a) ? 0 : s : s.firstChild, o = a && a.childNodes.length; o--;) ot.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
                    for (ot.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = p.lastChild
                } else h.push(e.createTextNode(a));
                for (s && p.removeChild(s), nt.appendChecked || ot.grep(g(h, "input"), v), f = 0; a = h[f++];)
                    if ((!i || -1 === ot.inArray(a, i)) && (r = ot.contains(a.ownerDocument, a), s = g(p.appendChild(a), "script"), r && x(s), n))
                        for (o = 0; a = s[o++];) Vt.test(a.type || "") && n.push(a);
                return s = null, p
            },
            cleanData: function(t, e) {
                for (var n, i, o, a, r = 0, s = ot.expando, l = ot.cache, c = nt.deleteExpando, u = ot.event.special; null != (n = t[r]); r++)
                    if ((e || ot.acceptData(n)) && (o = n[s], a = o && l[o])) {
                        if (a.events)
                            for (i in a.events) u[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, a.handle);
                        l[o] && (delete l[o], c ? delete n[s] : typeof n.removeAttribute !== Tt ? n.removeAttribute(s) : n[s] = null, G.push(o))
                    }
            }
        }), ot.fn.extend({
            text: function(t) {
                return It(this, function(t) {
                    return void 0 === t ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ft).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = t ? ot.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || ot.cleanData(g(n)), n.parentNode && (e && ot.contains(n.ownerDocument, n) && x(g(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && ot.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && ot.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return ot.clone(this, t, e)
                })
            },
            html: function(t) {
                return It(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Ot, "") : void 0;
                    if (!("string" != typeof t || Rt.test(t) || !nt.htmlSerialize && Ft.test(t) || !nt.leadingWhitespace && Ht.test(t) || Qt[(qt.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(zt, "<$1></$2>");
                        try {
                            for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (ot.cleanData(g(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (o) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, ot.cleanData(g(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = K.apply([], t);
                var n, i, o, a, r, s, l = 0,
                    c = this.length,
                    u = this,
                    d = c - 1,
                    p = t[0],
                    h = ot.isFunction(p);
                if (h || c > 1 && "string" == typeof p && !nt.checkClone && Ut.test(p)) return this.each(function(n) {
                    var i = u.eq(n);
                    h && (t[0] = p.call(this, n, i.html())), i.domManip(t, e)
                });
                if (c && (s = ot.buildFragment(t, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (a = ot.map(g(s, "script"), b), o = a.length; c > l; l++) i = s, l !== d && (i = ot.clone(i, !0, !0), o && ot.merge(a, g(i, "script"))), e.call(this[l], i, l);
                    if (o)
                        for (r = a[a.length - 1].ownerDocument, ot.map(a, w), l = 0; o > l; l++) i = a[l], Vt.test(i.type || "") && !ot._data(i, "globalEval") && ot.contains(r, i) && (i.src ? ot._evalUrl && ot._evalUrl(i.src) : ot.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Gt, "")));
                    s = n = null
                }
                return this
            }
        }), ot.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            ot.fn[t] = function(t) {
                for (var n, i = 0, o = [], a = ot(t), r = a.length - 1; r >= i; i++) n = i === r ? this : this.clone(!0), ot(a[i])[e](n), Y.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var Zt, Jt = {};
        ! function() {
            var t;
            nt.shrinkWrapBlocks = function() {
                if (null != t) return t;
                t = !1;
                var e, n, i;
                return n = ft.getElementsByTagName("body")[0], n && n.style ? (e = ft.createElement("div"), i = ft.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Tt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ft.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
            }
        }();
        var te, ee, ne = /^margin/,
            ie = new RegExp("^(" + Et + ")(?!px)[a-z%]+$", "i"),
            oe = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (te = function(t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        }, ee = function(t, e, n) {
            var i, o, a, r, s = t.style;
            return n = n || te(t), r = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== r || ot.contains(t.ownerDocument, t) || (r = ot.style(t, e)), ie.test(r) && ne.test(e) && (i = s.width, o = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = r, r = n.width, s.width = i, s.minWidth = o,
                s.maxWidth = a)), void 0 === r ? r : r + ""
        }) : ft.documentElement.currentStyle && (te = function(t) {
            return t.currentStyle
        }, ee = function(t, e, n) {
            var i, o, a, r, s = t.style;
            return n = n || te(t), r = n ? n[e] : void 0, null == r && s && s[e] && (r = s[e]), ie.test(r) && !oe.test(e) && (i = s.left, o = t.runtimeStyle, a = o && o.left, a && (o.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : r, r = s.pixelLeft + "px", s.left = i, a && (o.left = a)), void 0 === r ? r : r + "" || "auto"
        }), ! function() {
            function e() {
                var e, n, i, o;
                n = ft.getElementsByTagName("body")[0], n && n.style && (e = ft.createElement("div"), i = ft.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a = r = !1, l = !0, t.getComputedStyle && (a = "1%" !== (t.getComputedStyle(e, null) || {}).top, r = "4px" === (t.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, o = e.appendChild(ft.createElement("div")), o.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = e.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === o[0].offsetHeight, s && (o[0].style.display = "", o[1].style.display = "none", s = 0 === o[0].offsetHeight), n.removeChild(i))
            }
            var n, i, o, a, r, s, l;
            n = ft.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], (i = o && o.style) && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, ot.extend(nt, {
                reliableHiddenOffsets: function() {
                    return null == s && e(), s
                },
                boxSizingReliable: function() {
                    return null == r && e(), r
                },
                pixelPosition: function() {
                    return null == a && e(), a
                },
                reliableMarginRight: function() {
                    return null == l && e(), l
                }
            }))
        }(), ot.swap = function(t, e, n, i) {
            var o, a, r = {};
            for (a in e) r[a] = t.style[a], t.style[a] = e[a];
            o = n.apply(t, i || []);
            for (a in e) t.style[a] = r[a];
            return o
        };
        var ae = /alpha\([^)]*\)/i,
            re = /opacity\s*=\s*([^)]*)/,
            se = /^(none|table(?!-c[ea]).+)/,
            le = new RegExp("^(" + Et + ")(.*)$", "i"),
            ce = new RegExp("^([+-])=(" + Et + ")", "i"),
            ue = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            de = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            pe = ["Webkit", "O", "Moz", "ms"];
        ot.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = ee(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
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
                zoom: !0
            },
            cssProps: {
                "float": nt.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, a, r, s = ot.camelCase(e),
                        l = t.style;
                    if (e = ot.cssProps[s] || (ot.cssProps[s] = S(l, s)), r = ot.cssHooks[e] || ot.cssHooks[s], void 0 === n) return r && "get" in r && void 0 !== (o = r.get(t, !1, i)) ? o : l[e];
                    if (a = typeof n, "string" === a && (o = ce.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(ot.css(t, e)), a = "number"), null != n && n === n && ("number" !== a || ot.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(r && "set" in r && void 0 === (n = r.set(t, n, i))))) try {
                        l[e] = n
                    } catch (c) {}
                }
            },
            css: function(t, e, n, i) {
                var o, a, r, s = ot.camelCase(e);
                return e = ot.cssProps[s] || (ot.cssProps[s] = S(t.style, s)), r = ot.cssHooks[e] || ot.cssHooks[s], r && "get" in r && (a = r.get(t, !0, n)), void 0 === a && (a = ee(t, e, i)), "normal" === a && e in de && (a = de[e]), "" === n || n ? (o = parseFloat(a), n === !0 || ot.isNumeric(o) ? o || 0 : a) : a
            }
        }), ot.each(["height", "width"], function(t, e) {
            ot.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? se.test(ot.css(t, "display")) && 0 === t.offsetWidth ? ot.swap(t, ue, function() {
                        return L(t, e, i)
                    }) : L(t, e, i) : void 0
                },
                set: function(t, n, i) {
                    var o = i && te(t);
                    return I(t, n, i ? P(t, e, i, nt.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), nt.opacity || (ot.cssHooks.opacity = {
            get: function(t, e) {
                return re.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    o = ot.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    a = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === ot.trim(a.replace(ae, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = ae.test(a) ? a.replace(ae, o) : a + " " + o)
            }
        }), ot.cssHooks.marginRight = E(nt.reliableMarginRight, function(t, e) {
            return e ? ot.swap(t, {
                display: "inline-block"
            }, ee, [t, "marginRight"]) : void 0
        }), ot.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            ot.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + St[i] + e] = a[i] || a[i - 2] || a[0];
                    return o
                }
            }, ne.test(t) || (ot.cssHooks[t + e].set = I)
        }), ot.fn.extend({
            css: function(t, e) {
                return It(this, function(t, e, n) {
                    var i, o, a = {},
                        r = 0;
                    if (ot.isArray(e)) {
                        for (i = te(t), o = e.length; o > r; r++) a[e[r]] = ot.css(t, e[r], !1, i);
                        return a
                    }
                    return void 0 !== n ? ot.style(t, e, n) : ot.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return $(this, !0)
            },
            hide: function() {
                return $(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    $t(this) ? ot(this).show() : ot(this).hide()
                })
            }
        }), ot.Tween = N, N.prototype = {
            constructor: N,
            init: function(t, e, n, i, o, a) {
                this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = a || (ot.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = N.propHooks[this.prop];
                return t && t.get ? t.get(this) : N.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = N.propHooks[this.prop];
                return this.pos = e = this.options.duration ? ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this
            }
        }, N.prototype.init.prototype = N.prototype, N.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ot.cssProps[t.prop]] || ot.cssHooks[t.prop]) ? ot.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ot.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, ot.fx = N.prototype.init, ot.fx.step = {};
        var he, fe, me = /^(?:toggle|show|hide)$/,
            ge = new RegExp("^(?:([+-])=|)(" + Et + ")([a-z%]*)$", "i"),
            ve = /queueHooks$/,
            ye = [M],
            be = {
                "*": [function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        o = ge.exec(e),
                        a = o && o[3] || (ot.cssNumber[t] ? "" : "px"),
                        r = (ot.cssNumber[t] || "px" !== a && +i) && ge.exec(ot.css(n.elem, t)),
                        s = 1,
                        l = 20;
                    if (r && r[3] !== a) {
                        a = a || r[3], o = o || [], r = +i || 1;
                        do s = s || ".5", r /= s, ot.style(n.elem, t, r + a); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return o && (r = n.start = +r || +i || 0, n.unit = a, n.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
        ot.Animation = ot.extend(F, {
                tweener: function(t, e) {
                    ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var n, i = 0, o = t.length; o > i; i++) n = t[i], be[n] = be[n] || [], be[n].unshift(e)
                },
                prefilter: function(t, e) {
                    e ? ye.unshift(t) : ye.push(t)
                }
            }), ot.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? ot.extend({}, t) : {
                    complete: n || !n && e || ot.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !ot.isFunction(e) && e
                };
                return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
                }, i
            }, ot.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter($t).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = ot.isEmptyObject(t),
                        a = ot.speed(e, n, i),
                        r = function() {
                            var e = F(this, ot.extend({}, t), a);
                            (o || ot._data(this, "finish")) && e.stop(!0)
                        };
                    return r.finish = r, o || a.queue === !1 ? this.each(r) : this.queue(a.queue, r)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            a = ot.timers,
                            r = ot._data(this);
                        if (o) r[o] && r[o].stop && i(r[o]);
                        else
                            for (o in r) r[o] && r[o].stop && ve.test(o) && i(r[o]);
                        for (o = a.length; o--;) a[o].elem !== this || null != t && a[o].queue !== t || (a[o].anim.stop(n), e = !1, a.splice(o, 1));
                        (e || !n) && ot.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, n = ot._data(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            a = ot.timers,
                            r = i ? i.length : 0;
                        for (n.finish = !0, ot.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = a.length; e--;) a[e].elem === this && a[e].queue === t && (a[e].anim.stop(!0), a.splice(e, 1));
                        for (e = 0; r > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), ot.each(["toggle", "show", "hide"], function(t, e) {
                var n = ot.fn[e];
                ot.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(D(e, !0), t, i, o)
                }
            }), ot.each({
                slideDown: D("show"),
                slideUp: D("hide"),
                slideToggle: D("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                ot.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), ot.timers = [], ot.fx.tick = function() {
                var t, e = ot.timers,
                    n = 0;
                for (he = ot.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
                e.length || ot.fx.stop(), he = void 0
            }, ot.fx.timer = function(t) {
                ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
            }, ot.fx.interval = 13, ot.fx.start = function() {
                fe || (fe = setInterval(ot.fx.tick, ot.fx.interval))
            }, ot.fx.stop = function() {
                clearInterval(fe), fe = null
            }, ot.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ot.fn.delay = function(t, e) {
                return t = ot.fx ? ot.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var t, e, n, i, o;
                e = ft.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = ft.createElement("select"), o = n.appendChild(ft.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== e.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!t.value, nt.optSelected = o.selected, nt.enctype = !!ft.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !o.disabled, t = ft.createElement("input"), t.setAttribute("value", ""), nt.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), nt.radioValue = "t" === t.value
            }();
        var we = /\r/g;
        ot.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0];
                return arguments.length ? (i = ot.isFunction(t), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? t.call(this, n, ot(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ot.isArray(o) && (o = ot.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(we, "") : null == n ? "" : n)) : void 0
            }
        }), ot.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = ot.find.attr(t, "value");
                        return null != e ? e : ot.trim(ot.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, a = "select-one" === t.type || 0 > o, r = a ? null : [], s = a ? o + 1 : i.length, l = 0 > o ? s : a ? o : 0; s > l; l++)
                            if (n = i[l], !(!n.selected && l !== o || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                                if (e = ot(n).val(), a) return e;
                                r.push(e)
                            }
                        return r
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, a = ot.makeArray(e), r = o.length; r--;)
                            if (i = o[r], ot.inArray(ot.valHooks.option.get(i), a) >= 0) try {
                                i.selected = n = !0
                            } catch (s) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), ot.each(["radio", "checkbox"], function() {
            ot.valHooks[this] = {
                set: function(t, e) {
                    return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) >= 0 : void 0
                }
            }, nt.checkOn || (ot.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var xe, _e, Te = ot.expr.attrHandle,
            Ce = /^(?:checked|selected)$/i,
            ke = nt.getSetAttribute,
            Ee = nt.input;
        ot.fn.extend({
            attr: function(t, e) {
                return It(this, ot.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    ot.removeAttr(this, t)
                })
            }
        }), ot.extend({
            attr: function(t, e, n) {
                var i, o, a = t.nodeType;
                return t && 3 !== a && 8 !== a && 2 !== a ? typeof t.getAttribute === Tt ? ot.prop(t, e, n) : (1 === a && ot.isXMLDoc(t) || (e = e.toLowerCase(), i = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? _e : xe)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : (o = ot.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void ot.removeAttr(t, e)) : void 0
            },
            removeAttr: function(t, e) {
                var n, i, o = 0,
                    a = e && e.match(bt);
                if (a && 1 === t.nodeType)
                    for (; n = a[o++];) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) ? Ee && ke || !Ce.test(n) ? t[i] = !1 : t[ot.camelCase("default-" + n)] = t[i] = !1 : ot.attr(t, n, ""), t.removeAttribute(ke ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!nt.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), _e = {
            set: function(t, e, n) {
                return e === !1 ? ot.removeAttr(t, n) : Ee && ke || !Ce.test(n) ? t.setAttribute(!ke && ot.propFix[n] || n, n) : t[ot.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = Te[e] || ot.find.attr;
            Te[e] = Ee && ke || !Ce.test(e) ? function(t, e, i) {
                var o, a;
                return i || (a = Te[e], Te[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, Te[e] = a), o
            } : function(t, e, n) {
                return n ? void 0 : t[ot.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), Ee && ke || (ot.attrHooks.value = {
            set: function(t, e, n) {
                return ot.nodeName(t, "input") ? void(t.defaultValue = e) : xe && xe.set(t, e, n)
            }
        }), ke || (xe = {
            set: function(t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
            }
        }, Te.id = Te.name = Te.coords = function(t, e, n) {
            var i;
            return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, ot.valHooks.button = {
            get: function(t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : void 0
            },
            set: xe.set
        }, ot.attrHooks.contenteditable = {
            set: function(t, e, n) {
                xe.set(t, "" === e ? !1 : e, n)
            }
        }, ot.each(["width", "height"], function(t, e) {
            ot.attrHooks[e] = {
                set: function(t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), nt.style || (ot.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || void 0
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        });
        var Se = /^(?:input|select|textarea|button|object)$/i,
            $e = /^(?:a|area)$/i;
        ot.fn.extend({
            prop: function(t, e) {
                return It(this, ot.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = ot.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {}
                })
            }
        }), ot.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, e, n) {
                var i, o, a, r = t.nodeType;
                return t && 3 !== r && 8 !== r && 2 !== r ? (a = 1 !== r || !ot.isXMLDoc(t), a && (e = ot.propFix[e] || e, o = ot.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = ot.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Se.test(t.nodeName) || $e.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), nt.hrefNormalized || ot.each(["href", "src"], function(t, e) {
            ot.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), nt.optSelected || (ot.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ot.propFix[this.toLowerCase()] = this
        }), nt.enctype || (ot.propFix.enctype = "encoding");
        var Ie = /[\t\r\n\f]/g;
        ot.fn.extend({
            addClass: function(t) {
                var e, n, i, o, a, r, s = 0,
                    l = this.length,
                    c = "string" == typeof t && t;
                if (ot.isFunction(t)) return this.each(function(e) {
                    ot(this).addClass(t.call(this, e, this.className))
                });
                if (c)
                    for (e = (t || "").match(bt) || []; l > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ie, " ") : " ")) {
                            for (a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            r = ot.trim(i), n.className !== r && (n.className = r)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, a, r, s = 0,
                    l = this.length,
                    c = 0 === arguments.length || "string" == typeof t && t;
                if (ot.isFunction(t)) return this.each(function(e) {
                    ot(this).removeClass(t.call(this, e, this.className))
                });
                if (c)
                    for (e = (t || "").match(bt) || []; l > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ie, " ") : "")) {
                            for (a = 0; o = e[a++];)
                                for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                            r = t ? ot.trim(i) : "", n.className !== r && (n.className = r)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(ot.isFunction(t) ? function(n) {
                    ot(this).toggleClass(t.call(this, n, this.className, e), e)
                } : function() {
                    if ("string" === n)
                        for (var e, i = 0, o = ot(this), a = t.match(bt) || []; e = a[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else(n === Tt || "boolean" === n) && (this.className && ot._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ot._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ie, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            ot.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ot.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var Pe = ot.now(),
            Le = /\?/,
            Ne = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ot.parseJSON = function(e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var n, i = null,
                o = ot.trim(e + "");
            return o && !ot.trim(o.replace(Ne, function(t, e, o, a) {
                return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !a - !o, "")
            })) ? Function("return " + o)() : ot.error("Invalid JSON: " + e)
        }, ot.parseXML = function(e) {
            var n, i;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
            } catch (o) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + e), n
        };
        var Ae, De, je = /#.*$/,
            Me = /([?&])_=[^&]*/,
            Oe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            He = /^(?:GET|HEAD)$/,
            ze = /^\/\//,
            qe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            We = {},
            Be = {},
            Re = "*/".concat("*");
        try {
            De = location.href
        } catch (Ue) {
            De = ft.createElement("a"), De.href = "", De = De.href
        }
        Ae = qe.exec(De.toLowerCase()) || [], ot.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: De,
                type: "GET",
                isLocal: Fe.test(Ae[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Re,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ot.parseJSON,
                    "text xml": ot.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? q(q(t, ot.ajaxSettings), e) : q(ot.ajaxSettings, t)
            },
            ajaxPrefilter: H(We),
            ajaxTransport: H(Be),
            ajax: function(t, e) {
                function n(t, e, n, i) {
                    var o, u, v, y, w, _ = e;
                    2 !== b && (b = 2, s && clearTimeout(s), c = void 0, r = i || "", x.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, n && (y = W(d, x, n)), y = B(d, y, x, o), o ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ot.lastModified[a] = w), w = x.getResponseHeader("etag"), w && (ot.etag[a] = w)), 204 === t || "HEAD" === d.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = y.state, u = y.data, v = y.error, o = !v)) : (v = _, (t || !_) && (_ = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || _) + "", o ? f.resolveWith(p, [u, _, x]) : f.rejectWith(p, [x, _, v]), x.statusCode(g), g = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? u : v]), m.fireWith(p, [x, _]), l && (h.trigger("ajaxComplete", [x, d]), --ot.active || ot.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, o, a, r, s, l, c, u, d = ot.ajaxSetup({}, e),
                    p = d.context || d,
                    h = d.context && (p.nodeType || p.jquery) ? ot(p) : ot.event,
                    f = ot.Deferred(),
                    m = ot.Callbacks("once memory"),
                    g = d.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!u)
                                    for (u = {}; e = Oe.exec(r);) u[e[1].toLowerCase()] = e[2];
                                e = u[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? r : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return b || (t = y[n] = y[n] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return b || (d.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) g[e] = [g[e], t[e]];
                                else x.always(t[x.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || w;
                            return c && c.abort(e), n(0, e), this
                        }
                    };
                if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || De) + "").replace(je, "").replace(ze, Ae[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = ot.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (i = qe.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Ae[1] && i[2] === Ae[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ae[3] || ("http:" === Ae[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ot.param(d.data, d.traditional)), z(We, d, e, x), 2 === b) return x;
                l = d.global, l && 0 === ot.active++ && ot.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !He.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (Le.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Me.test(a) ? a.replace(Me, "$1_=" + Pe++) : a + (Le.test(a) ? "&" : "?") + "_=" + Pe++)), d.ifModified && (ot.lastModified[a] && x.setRequestHeader("If-Modified-Since", ot.lastModified[a]), ot.etag[a] && x.setRequestHeader("If-None-Match", ot.etag[a])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Re + "; q=0.01" : "") : d.accepts["*"]);
                for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
                if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === b)) return x.abort();
                w = "abort";
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[o](d[o]);
                if (c = z(Be, d, e, x)) {
                    x.readyState = 1, l && h.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                        x.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, c.send(v, n)
                    } catch (_) {
                        if (!(2 > b)) throw _;
                        n(-1, _)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function(t, e, n) {
                return ot.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return ot.get(t, void 0, e, "script")
            }
        }), ot.each(["get", "post"], function(t, e) {
            ot[e] = function(t, n, i, o) {
                return ot.isFunction(n) && (o = o || i, i = n, n = void 0), ot.ajax({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            ot.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), ot._evalUrl = function(t) {
            return ot.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, ot.fn.extend({
            wrapAll: function(t) {
                if (ot.isFunction(t)) return this.each(function(e) {
                    ot(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = ot(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return this.each(ot.isFunction(t) ? function(e) {
                    ot(this).wrapInner(t.call(this, e))
                } : function() {
                    var e = ot(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = ot.isFunction(t);
                return this.each(function(n) {
                    ot(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ot.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (t.style && t.style.display || ot.css(t, "display"))
        }, ot.expr.filters.visible = function(t) {
            return !ot.expr.filters.hidden(t)
        };
        var Ve = /%20/g,
            Xe = /\[\]$/,
            Ge = /\r?\n/g,
            Qe = /^(?:submit|button|image|reset|file)$/i,
            Ke = /^(?:input|select|textarea|keygen)/i;
        ot.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    e = ot.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (n in t) R(n, t[n], e, o);
            return i.join("&").replace(Ve, "+")
        }, ot.fn.extend({
            serialize: function() {
                return ot.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = ot.prop(this, "elements");
                    return t ? ot.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !ot(this).is(":disabled") && Ke.test(this.nodeName) && !Qe.test(t) && (this.checked || !Pt.test(t))
                }).map(function(t, e) {
                    var n = ot(this).val();
                    return null == n ? null : ot.isArray(n) ? ot.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ge, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Ge, "\r\n")
                    }
                }).get()
            }
        }), ot.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || V()
        } : U;
        var Ye = 0,
            Ze = {},
            Je = ot.ajaxSettings.xhr();
        t.ActiveXObject && ot(t).on("unload", function() {
            for (var t in Ze) Ze[t](void 0, !0)
        }), nt.cors = !!Je && "withCredentials" in Je, Je = nt.ajax = !!Je, Je && ot.ajaxTransport(function(t) {
            if (!t.crossDomain || nt.cors) {
                var e;
                return {
                    send: function(n, i) {
                        var o, a = t.xhr(),
                            r = ++Ye;
                        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (o in t.xhrFields) a[o] = t.xhrFields[o];
                        t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n) void 0 !== n[o] && a.setRequestHeader(o, n[o] + "");
                        a.send(t.hasContent && t.data || null), e = function(n, o) {
                            var s, l, c;
                            if (e && (o || 4 === a.readyState))
                                if (delete Ze[r], e = void 0, a.onreadystatechange = ot.noop, o) 4 !== a.readyState && a.abort();
                                else {
                                    c = {}, s = a.status, "string" == typeof a.responseText && (c.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (u) {
                                        l = ""
                                    }
                                    s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                                }
                            c && i(s, l, c, a.getAllResponseHeaders())
                        }, t.async ? 4 === a.readyState ? setTimeout(e) : a.onreadystatechange = Ze[r] = e : e()
                    },
                    abort: function() {
                        e && e(void 0, !0)
                    }
                }
            }
        }), ot.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return ot.globalEval(t), t
                }
            }
        }), ot.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), ot.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n = ft.head || ot("head")[0] || ft.documentElement;
                return {
                    send: function(i, o) {
                        e = ft.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    },
                    abort: function() {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var tn = [],
            en = /(=)\?(?=&|$)|\?\?/;
        ot.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = tn.pop() || ot.expando + "_" + Pe++;
                return this[t] = !0, t
            }
        }), ot.ajaxPrefilter("json jsonp", function(e, n, i) {
            var o, a, r, s = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
            return s || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(en, "$1" + o) : e.jsonp !== !1 && (e.url += (Le.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return r || ot.error(o + " was not called"), r[0]
            }, e.dataTypes[0] = "json", a = t[o], t[o] = function() {
                r = arguments
            }, i.always(function() {
                t[o] = a, e[o] && (e.jsonpCallback = n.jsonpCallback, tn.push(o)), r && ot.isFunction(a) && a(r[0]), r = a = void 0
            }), "script") : void 0
        }), ot.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || ft;
            var i = dt.exec(t),
                o = !n && [];
            return i ? [e.createElement(i[1])] : (i = ot.buildFragment([t], e, o), o && o.length && ot(o).remove(), ot.merge([], i.childNodes))
        };
        var nn = ot.fn.load;
        ot.fn.load = function(t, e, n) {
            if ("string" != typeof t && nn) return nn.apply(this, arguments);
            var i, o, a, r = this,
                s = t.indexOf(" ");
            return s >= 0 && (i = ot.trim(t.slice(s, t.length)), t = t.slice(0, s)), ot.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (a = "POST"), r.length > 0 && ot.ajax({
                url: t,
                type: a,
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, r.html(i ? ot("<div>").append(ot.parseHTML(t)).find(i) : t)
            }).complete(n && function(t, e) {
                r.each(n, o || [t.responseText, e, t])
            }), this
        }, ot.expr.filters.animated = function(t) {
            return ot.grep(ot.timers, function(e) {
                return t === e.elem
            }).length
        };
        var on = t.document.documentElement;
        ot.offset = {
            setOffset: function(t, e, n) {
                var i, o, a, r, s, l, c, u = ot.css(t, "position"),
                    d = ot(t),
                    p = {};
                "static" === u && (t.style.position = "relative"), s = d.offset(), a = ot.css(t, "top"), l = ot.css(t, "left"), c = ("absolute" === u || "fixed" === u) && ot.inArray("auto", [a, l]) > -1, c ? (i = d.position(), r = i.top, o = i.left) : (r = parseFloat(a) || 0, o = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (p.top = e.top - s.top + r), null != e.left && (p.left = e.left - s.left + o), "using" in e ? e.using.call(t, p) : d.css(p)
            }
        }, ot.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    ot.offset.setOffset(this, t, e)
                });
                var e, n, i = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    a = o && o.ownerDocument;
                return a ? (e = a.documentElement, ot.contains(e, o) ? (typeof o.getBoundingClientRect !== Tt && (i = o.getBoundingClientRect()), n = X(a), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === ot.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (n = t.offset()), n.top += ot.css(t[0], "borderTopWidth", !0), n.left += ot.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - ot.css(i, "marginTop", !0),
                        left: e.left - n.left - ot.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || on; t && !ot.nodeName(t, "html") && "static" === ot.css(t, "position");) t = t.offsetParent;
                    return t || on
                })
            }
        }), ot.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = /Y/.test(e);
            ot.fn[t] = function(i) {
                return It(this, function(t, i, o) {
                    var a = X(t);
                    return void 0 === o ? a ? e in a ? a[e] : a.document.documentElement[i] : t[i] : void(a ? a.scrollTo(n ? ot(a).scrollLeft() : o, n ? o : ot(a).scrollTop()) : t[i] = o)
                }, t, i, arguments.length, null)
            }
        }), ot.each(["top", "left"], function(t, e) {
            ot.cssHooks[e] = E(nt.pixelPosition, function(t, n) {
                return n ? (n = ee(t, e), ie.test(n) ? ot(t).position()[e] + "px" : n) : void 0
            })
        }), ot.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            ot.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                ot.fn[i] = function(i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        r = n || (i === !0 || o === !0 ? "margin" : "border");
                    return It(this, function(e, n, i) {
                        var o;
                        return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement,
                            Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? ot.css(e, n, r) : ot.style(e, n, i, r)
                    }, e, a ? i : void 0, a, null)
                }
            })
        }), ot.fn.size = function() {
            return this.length
        }, ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ot
        });
        var an = t.jQuery,
            rn = t.$;
        return ot.noConflict = function(e) {
            return t.$ === ot && (t.$ = rn), e && t.jQuery === ot && (t.jQuery = an), ot
        }, typeof e === Tt && (t.jQuery = t.$ = ot), ot
    }), ! function(t, e, n, i) {
        var o = e.document,
            a = t(o),
            r = t(e),
            s = Array.prototype,
            l = 1.41,
            c = !0,
            u = 3e4,
            d = !1,
            p = navigator.userAgent.toLowerCase(),
            h = e.location.hash.replace(/#\//, ""),
            f = e.location.protocol,
            m = Math,
            g = function() {},
            v = function() {
                return !1
            },
            y = function() {
                var t = 3,
                    e = o.createElement("div"),
                    n = e.getElementsByTagName("i");
                do e.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->"; while (n[0]);
                return t > 4 ? t : o.documentMode || i
            }(),
            b = function() {
                return {
                    html: o.documentElement,
                    body: o.body,
                    head: o.getElementsByTagName("head")[0],
                    title: o.title
                }
            },
            w = e.parent !== e.self,
            x = "data ready thumbnail loadstart loadfinish image play pause progress fullscreen_enter fullscreen_exit idle_enter idle_exit rescale lightbox_open lightbox_close lightbox_image",
            _ = function() {
                var e = [];
                return t.each(x.split(" "), function(t, n) {
                    e.push(n), /_/.test(n) && e.push(n.replace(/_/g, ""))
                }), e
            }(),
            T = function(e) {
                var n;
                return "object" != typeof e ? e : (t.each(e, function(i, o) {
                    /^[a-z]+_/.test(i) && (n = "", t.each(i.split("_"), function(t, e) {
                        n += t > 0 ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
                    }), e[n] = o, delete e[i])
                }), e)
            },
            C = function(e) {
                return t.inArray(e, _) > -1 ? n[e.toUpperCase()] : e
            },
            k = {
                youtube: {
                    reg: /https?:\/\/(?:[a-zA_Z]{2,3}.)?(?:youtube\.com\/watch\?)((?:[\w\d\-\_\=]+&amp;(?:amp;)?)*v(?:&lt;[A-Z]+&gt;)?=([0-9a-zA-Z\-\_]+))/i,
                    embed: function() {
                        return "http://www.youtube.com/embed/" + this.id
                    },
                    getUrl: function() {
                        return f + "//gdata.youtube.com/feeds/api/videos/" + this.id + "?v=2&alt=json-in-script&callback=?"
                    },
                    get_thumb: function(t) {
                        return t.entry.media$group.media$thumbnail[2].url
                    },
                    get_image: function(t) {
                        return t.entry.yt$hd ? f + "//img.youtube.com/vi/" + this.id + "/maxresdefault.jpg" : t.entry.media$group.media$thumbnail[3].url
                    }
                },
                vimeo: {
                    reg: /https?:\/\/(?:www\.)?(vimeo\.com)\/(?:hd#)?([0-9]+)/i,
                    embed: function() {
                        return "http://player.vimeo.com/video/" + this.id
                    },
                    getUrl: function() {
                        return f + "//vimeo.com/api/v2/video/" + this.id + ".json?callback=?"
                    },
                    get_thumb: function(t) {
                        return t[0].thumbnail_medium
                    },
                    get_image: function(t) {
                        return t[0].thumbnail_large
                    }
                },
                dailymotion: {
                    reg: /https?:\/\/(?:www\.)?(dailymotion\.com)\/video\/([^_]+)/,
                    embed: function() {
                        return f + "//www.dailymotion.com/embed/video/" + this.id
                    },
                    getUrl: function() {
                        return "https://api.dailymotion.com/video/" + this.id + "?fields=thumbnail_240_url,thumbnail_720_url&callback=?"
                    },
                    get_thumb: function(t) {
                        return t.thumbnail_240_url
                    },
                    get_image: function(t) {
                        return t.thumbnail_720_url
                    }
                },
                _inst: []
            },
            E = function(e, n) {
                for (var i = 0; i < k._inst.length; i++)
                    if (k._inst[i].id === n && k._inst[i].type == e) return k._inst[i];
                this.type = e, this.id = n, this.readys = [], k._inst.push(this);
                var o = this;
                t.extend(this, k[e]), t.getJSON(this.getUrl(), function(e) {
                    o.data = e, t.each(o.readys, function(t, e) {
                        e(o.data)
                    }), o.readys = []
                }), this.getMedia = function(t, e, n) {
                    n = n || g;
                    var i = this,
                        o = function(n) {
                            e(i["get_" + t](n))
                        };
                    try {
                        i.data ? o(i.data) : i.readys.push(o)
                    } catch (a) {
                        n()
                    }
                }
            },
            S = function(t) {
                var e;
                for (var n in k)
                    if (e = t && k[n].reg && t.match(k[n].reg), e && e.length) return {
                        id: e[2],
                        provider: n
                    };
                return !1
            },
            $ = {
                support: function() {
                    var t = b().html;
                    return !w && (t.requestFullscreen || t.msRequestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen)
                }(),
                callback: g,
                enter: function(t, e, n) {
                    this.instance = t, this.callback = e || g, n = n || b().html, n.requestFullscreen ? n.requestFullscreen() : n.msRequestFullscreen ? n.msRequestFullscreen() : n.mozRequestFullScreen ? n.mozRequestFullScreen() : n.webkitRequestFullScreen && n.webkitRequestFullScreen()
                },
                exit: function(t) {
                    this.callback = t || g, o.exitFullscreen ? o.exitFullscreen() : o.msExitFullscreen ? o.msExitFullscreen() : o.mozCancelFullScreen ? o.mozCancelFullScreen() : o.webkitCancelFullScreen && o.webkitCancelFullScreen()
                },
                instance: null,
                listen: function() {
                    if (this.support) {
                        var t = function() {
                            if ($.instance) {
                                var t = $.instance._fullscreen;
                                o.fullscreen || o.mozFullScreen || o.webkitIsFullScreen || o.msFullscreenElement && null !== o.msFullscreenElement ? t._enter($.callback) : t._exit($.callback)
                            }
                        };
                        o.addEventListener("fullscreenchange", t, !1), o.addEventListener("MSFullscreenChange", t, !1), o.addEventListener("mozfullscreenchange", t, !1), o.addEventListener("webkitfullscreenchange", t, !1)
                    }
                }
            },
            I = [],
            P = [],
            L = !1,
            N = !1,
            A = [],
            D = [],
            j = function(e) {
                D.push(e), t.each(A, function(t, n) {
                    (n._options.theme == e.name || !n._initialized && !n._options.theme) && (n.theme = e, n._init.call(n))
                })
            },
            M = function() {
                return {
                    clearTimer: function(e) {
                        t.each(n.get(), function() {
                            this.clearTimer(e)
                        })
                    },
                    addTimer: function(e) {
                        t.each(n.get(), function() {
                            this.addTimer(e)
                        })
                    },
                    array: function(t) {
                        return s.slice.call(t, 0)
                    },
                    create: function(t, e) {
                        e = e || "div";
                        var n = o.createElement(e);
                        return n.className = t, n
                    },
                    removeFromArray: function(e, n) {
                        return t.each(e, function(t, i) {
                            return i == n ? (e.splice(t, 1), !1) : void 0
                        }), e
                    },
                    getScriptPath: function(e) {
                        e = e || t("script:last").attr("src");
                        var n = e.split("/");
                        return 1 == n.length ? "" : (n.pop(), n.join("/") + "/")
                    },
                    animate: function() {
                        var i, a, r, s, l, c, u, d = function(t) {
                                var n, i = "transition WebkitTransition MozTransition OTransition".split(" ");
                                if (e.opera) return !1;
                                for (n = 0; i[n]; n++)
                                    if ("undefined" != typeof t[i[n]]) return i[n];
                                return !1
                            }((o.body || o.documentElement).style),
                            p = {
                                MozTransition: "transitionend",
                                OTransition: "oTransitionEnd",
                                WebkitTransition: "webkitTransitionEnd",
                                transition: "transitionend"
                            }[d],
                            h = {
                                _default: [.25, .1, .25, 1],
                                galleria: [.645, .045, .355, 1],
                                galleriaIn: [.55, .085, .68, .53],
                                galleriaOut: [.25, .46, .45, .94],
                                ease: [.25, 0, .25, 1],
                                linear: [.25, .25, .75, .75],
                                "ease-in": [.42, 0, 1, 1],
                                "ease-out": [0, 0, .58, 1],
                                "ease-in-out": [.42, 0, .58, 1]
                            },
                            f = function(e, n, i) {
                                var o = {};
                                i = i || "transition", t.each("webkit moz ms o".split(" "), function() {
                                    o["-" + this + "-" + i] = n
                                }), e.css(o)
                            },
                            m = function(t) {
                                f(t, "none", "transition"), n.WEBKIT && n.TOUCH && (f(t, "translate3d(0,0,0)", "transform"), t.data("revert") && (t.css(t.data("revert")), t.data("revert", null)))
                            };
                        return function(o, v, y) {
                            return y = t.extend({
                                duration: 400,
                                complete: g,
                                stop: !1
                            }, y), o = t(o), y.duration ? d ? (y.stop && (o.off(p), m(o)), i = !1, t.each(v, function(t, e) {
                                u = o.css(t), M.parseValue(u) != M.parseValue(e) && (i = !0), o.css(t, u)
                            }), i ? (a = [], r = y.easing in h ? h[y.easing] : h._default, s = " " + y.duration + "ms cubic-bezier(" + r.join(",") + ")", void e.setTimeout(function(e, i, o, r) {
                                return function() {
                                    e.one(i, function(t) {
                                        return function() {
                                            m(t), y.complete.call(t[0])
                                        }
                                    }(e)), n.WEBKIT && n.TOUCH && (l = {}, c = [0, 0, 0], t.each(["left", "top"], function(t, n) {
                                        n in o && (c[t] = M.parseValue(o[n]) - M.parseValue(e.css(n)) + "px", l[n] = o[n], delete o[n])
                                    }), (c[0] || c[1]) && (e.data("revert", l), a.push("-webkit-transform" + r), f(e, "translate3d(" + c.join(",") + ")", "transform"))), t.each(o, function(t, e) {
                                        a.push(t + r)
                                    }), f(e, a.join(",")), e.css(o)
                                }
                            }(o, p, v, s), 2)) : void e.setTimeout(function() {
                                y.complete.call(o[0])
                            }, y.duration)) : void o.animate(v, y) : (o.css(v), void y.complete.call(o[0]))
                        }
                    }(),
                    removeAlpha: function(t) {
                        if (t instanceof jQuery && (t = t[0]), 9 > y && t) {
                            var e = t.style,
                                n = t.currentStyle,
                                i = n && n.filter || e.filter || "";
                            /alpha/.test(i) && (e.filter = i.replace(/alpha\([^)]*\)/i, ""))
                        }
                    },
                    forceStyles: function(e, n) {
                        e = t(e), e.attr("style") && e.data("styles", e.attr("style")).removeAttr("style"), e.css(n)
                    },
                    revertStyles: function() {
                        t.each(M.array(arguments), function(e, n) {
                            n = t(n), n.removeAttr("style"), n.attr("style", ""), n.data("styles") && n.attr("style", n.data("styles")).data("styles", null)
                        })
                    },
                    moveOut: function(t) {
                        M.forceStyles(t, {
                            position: "absolute",
                            left: -1e4
                        })
                    },
                    moveIn: function() {
                        M.revertStyles.apply(M, M.array(arguments))
                    },
                    hide: function(e, n, i) {
                        i = i || g;
                        var o = t(e);
                        e = o[0], o.data("opacity") || o.data("opacity", o.css("opacity"));
                        var a = {
                            opacity: 0
                        };
                        if (n) {
                            var r = 9 > y && e ? function() {
                                M.removeAlpha(e), e.style.visibility = "hidden", i.call(e)
                            } : i;
                            M.animate(e, a, {
                                duration: n,
                                complete: r,
                                stop: !0
                            })
                        } else 9 > y && e ? (M.removeAlpha(e), e.style.visibility = "hidden") : o.css(a)
                    },
                    show: function(e, n, i) {
                        i = i || g;
                        var o = t(e);
                        e = o[0];
                        var a = parseFloat(o.data("opacity")) || 1,
                            r = {
                                opacity: a
                            };
                        if (n) {
                            9 > y && (o.css("opacity", 0), e.style.visibility = "visible");
                            var s = 9 > y && e ? function() {
                                1 == r.opacity && M.removeAlpha(e), i.call(e)
                            } : i;
                            M.animate(e, r, {
                                duration: n,
                                complete: s,
                                stop: !0
                            })
                        } else 9 > y && 1 == r.opacity && e ? (M.removeAlpha(e), e.style.visibility = "visible") : o.css(r)
                    },
                    wait: function(i) {
                        n._waiters = n._waiters || [], i = t.extend({
                            until: v,
                            success: g,
                            error: function() {
                                n.raise("Could not complete wait function.")
                            },
                            timeout: 3e3
                        }, i);
                        var o, a, r, s = M.timestamp(),
                            l = function() {
                                return a = M.timestamp(), o = a - s, M.removeFromArray(n._waiters, r), i.until(o) ? (i.success(), !1) : "number" == typeof i.timeout && a >= s + i.timeout ? (i.error(), !1) : void n._waiters.push(r = e.setTimeout(l, 10))
                            };
                        n._waiters.push(r = e.setTimeout(l, 10))
                    },
                    toggleQuality: function(t, e) {
                        7 !== y && 8 !== y || !t || "IMG" != t.nodeName.toUpperCase() || ("undefined" == typeof e && (e = "nearest-neighbor" === t.style.msInterpolationMode), t.style.msInterpolationMode = e ? "bicubic" : "nearest-neighbor")
                    },
                    insertStyleTag: function(e, n) {
                        if (!n || !t("#" + n).length) {
                            var i = o.createElement("style");
                            if (n && (i.id = n), b().head.appendChild(i), i.styleSheet) i.styleSheet.cssText = e;
                            else {
                                var a = o.createTextNode(e);
                                i.appendChild(a)
                            }
                        }
                    },
                    loadScript: function(e, n) {
                        var i = !1,
                            o = t("<script>").attr({
                                src: e,
                                async: !0
                            }).get(0);
                        o.onload = o.onreadystatechange = function() {
                            i || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (i = !0, o.onload = o.onreadystatechange = null, "function" == typeof n && n.call(this, this))
                        }, b().head.appendChild(o)
                    },
                    parseValue: function(t) {
                        if ("number" == typeof t) return t;
                        if ("string" == typeof t) {
                            var e = t.match(/\-?\d|\./g);
                            return e && e.constructor === Array ? 1 * e.join("") : 0
                        }
                        return 0
                    },
                    timestamp: function() {
                        return (new Date).getTime()
                    },
                    loadCSS: function(e, a, r) {
                        var s, l;
                        if (t("link[rel=stylesheet]").each(function() {
                                return new RegExp(e).test(this.href) ? (s = this, !1) : void 0
                            }), "function" == typeof a && (r = a, a = i), r = r || g, s) return r.call(s, s), s;
                        if (l = o.styleSheets.length, t("#" + a).length) t("#" + a).attr("href", e), l--;
                        else {
                            s = t("<link>").attr({
                                rel: "stylesheet",
                                href: e,
                                id: a
                            }).get(0);
                            var c = t('link[rel="stylesheet"], style');
                            if (c.length ? c.get(0).parentNode.insertBefore(s, c[0]) : b().head.appendChild(s), y && l >= 31) return void n.raise("You have reached the browser stylesheet limit (31)", !0)
                        }
                        if ("function" == typeof r) {
                            var u = t("<s>").attr("id", "galleria-loader").hide().appendTo(b().body);
                            M.wait({
                                until: function() {
                                    return 1 == u.height()
                                },
                                success: function() {
                                    u.remove(), r.call(s, s)
                                },
                                error: function() {
                                    u.remove(), n.raise("Theme CSS could not load after 20 sec. " + (n.QUIRK ? "Your browser is in Quirks Mode, please add a correct doctype." : "Please download the latest theme at http://galleria.io/customer/."), !0)
                                },
                                timeout: 5e3
                            })
                        }
                        return s
                    }
                }
            }(),
            O = function(e) {
                var n = ".galleria-videoicon{width:60px;height:60px;position:absolute;top:50%;left:50%;z-index:1;margin:-30px 0 0 -30px;cursor:pointer;background:#000;background:rgba(0,0,0,.8);border-radius:3px;-webkit-transition:all 150ms}.galleria-videoicon i{width:0px;height:0px;border-style:solid;border-width:10px 0 10px 16px;display:block;border-color:transparent transparent transparent #ffffff;margin:20px 0 0 22px}.galleria-image:hover .galleria-videoicon{background:#000}";
                return M.insertStyleTag(n, "galleria-videoicon"), t(M.create("galleria-videoicon")).html("<i></i>").appendTo(e).click(function() {
                    t(this).siblings("img").mouseup()
                })
            },
            F = function() {
                var e = function(e, n, i, o) {
                    var a = this.getOptions("easing"),
                        r = this.getStageWidth(),
                        s = {
                            left: r * (e.rewind ? -1 : 1)
                        },
                        l = {
                            left: 0
                        };
                    i ? (s.opacity = 0, l.opacity = 1) : s.opacity = 1, t(e.next).css(s), M.animate(e.next, l, {
                        duration: e.speed,
                        complete: function(t) {
                            return function() {
                                n(), t.css({
                                    left: 0
                                })
                            }
                        }(t(e.next).add(e.prev)),
                        queue: !1,
                        easing: a
                    }), o && (e.rewind = !e.rewind), e.prev && (s = {
                        left: 0
                    }, l = {
                        left: r * (e.rewind ? 1 : -1)
                    }, i && (s.opacity = 1, l.opacity = 0), t(e.prev).css(s), M.animate(e.prev, l, {
                        duration: e.speed,
                        queue: !1,
                        easing: a,
                        complete: function() {
                            t(this).css("opacity", 0)
                        }
                    }))
                };
                return {
                    active: !1,
                    init: function(t, e, n) {
                        F.effects.hasOwnProperty(t) && F.effects[t].call(this, e, n)
                    },
                    effects: {
                        fade: function(e, n) {
                            t(e.next).css({
                                opacity: 0,
                                left: 0
                            }), M.animate(e.next, {
                                opacity: 1
                            }, {
                                duration: e.speed,
                                complete: n
                            }), e.prev && (t(e.prev).css("opacity", 1).show(), M.animate(e.prev, {
                                opacity: 0
                            }, {
                                duration: e.speed
                            }))
                        },
                        flash: function(e, n) {
                            t(e.next).css({
                                opacity: 0,
                                left: 0
                            }), e.prev ? M.animate(e.prev, {
                                opacity: 0
                            }, {
                                duration: e.speed / 2,
                                complete: function() {
                                    M.animate(e.next, {
                                        opacity: 1
                                    }, {
                                        duration: e.speed,
                                        complete: n
                                    })
                                }
                            }) : M.animate(e.next, {
                                opacity: 1
                            }, {
                                duration: e.speed,
                                complete: n
                            })
                        },
                        pulse: function(e, n) {
                            e.prev && t(e.prev).hide(), t(e.next).css({
                                opacity: 0,
                                left: 0
                            }).show(), M.animate(e.next, {
                                opacity: 1
                            }, {
                                duration: e.speed,
                                complete: n
                            })
                        },
                        slide: function(t, n) {
                            e.apply(this, M.array(arguments))
                        },
                        fadeslide: function(t, n) {
                            e.apply(this, M.array(arguments).concat([!0]))
                        },
                        doorslide: function(t, n) {
                            e.apply(this, M.array(arguments).concat([!1, !0]))
                        }
                    }
                }
            }();
        $.listen(), t.event.special["click:fast"] = {
            propagate: !0,
            add: function(n) {
                var i = function(t) {
                        if (t.touches && t.touches.length) {
                            var e = t.touches[0];
                            return {
                                x: e.pageX,
                                y: e.pageY
                            }
                        }
                    },
                    o = {
                        touched: !1,
                        touchdown: !1,
                        coords: {
                            x: 0,
                            y: 0
                        },
                        evObj: {}
                    };
                t(this).data({
                    clickstate: o,
                    timer: 0
                }).on("touchstart.fast", function(n) {
                    e.clearTimeout(t(this).data("timer")), t(this).data("clickstate", {
                        touched: !0,
                        touchdown: !0,
                        coords: i(n.originalEvent),
                        evObj: n
                    })
                }).on("touchmove.fast", function(e) {
                    var n = i(e.originalEvent),
                        o = t(this).data("clickstate"),
                        a = Math.max(Math.abs(o.coords.x - n.x), Math.abs(o.coords.y - n.y));
                    a > 6 && t(this).data("clickstate", t.extend(o, {
                        touchdown: !1
                    }))
                }).on("touchend.fast", function(i) {
                    var a = t(this),
                        r = a.data("clickstate");
                    r.touchdown && n.handler.call(this, i), a.data("timer", e.setTimeout(function() {
                        a.data("clickstate", o)
                    }, 400))
                }).on("click.fast", function(e) {
                    var i = t(this).data("clickstate");
                    return i.touched ? !1 : (t(this).data("clickstate", o), void n.handler.call(this, e))
                })
            },
            remove: function() {
                t(this).off("touchstart.fast touchmove.fast touchend.fast click.fast")
            }
        }, r.on("orientationchange", function() {
            t(this).resize()
        }), n = function() {
            var s = this;
            this._options = {}, this._playing = !1, this._playtime = 5e3, this._active = null, this._queue = {
                length: 0
            }, this._data = [], this._dom = {}, this._thumbnails = [], this._layers = [], this._initialized = !1, this._firstrun = !1, this._stageWidth = 0, this._stageHeight = 0, this._target = i, this._binds = [], this._id = parseInt(1e4 * m.random(), 10);
            var l = "container stage images image-nav image-nav-left image-nav-right info info-text info-title info-description thumbnails thumbnails-list thumbnails-container thumb-nav-left thumb-nav-right loader counter tooltip",
                c = "current total";
            t.each(l.split(" "), function(t, e) {
                s._dom[e] = M.create("galleria-" + e)
            }), t.each(c.split(" "), function(t, e) {
                s._dom[e] = M.create("galleria-" + e, "span")
            });
            var u = this._keyboard = {
                    keys: {
                        UP: 38,
                        DOWN: 40,
                        LEFT: 37,
                        RIGHT: 39,
                        RETURN: 13,
                        ESCAPE: 27,
                        BACKSPACE: 8,
                        SPACE: 32
                    },
                    map: {},
                    bound: !1,
                    press: function(t) {
                        var e = t.keyCode || t.which;
                        e in u.map && "function" == typeof u.map[e] && u.map[e].call(s, t)
                    },
                    attach: function(t) {
                        var e, n;
                        for (e in t) t.hasOwnProperty(e) && (n = e.toUpperCase(), n in u.keys ? u.map[u.keys[n]] = t[e] : u.map[n] = t[e]);
                        u.bound || (u.bound = !0, a.on("keydown", u.press))
                    },
                    detach: function() {
                        u.bound = !1, u.map = {}, a.off("keydown", u.press)
                    }
                },
                d = this._controls = {
                    0: i,
                    1: i,
                    active: 0,
                    swap: function() {
                        d.active = d.active ? 0 : 1
                    },
                    getActive: function() {
                        return s._options.swipe ? d.slides[s._active] : d[d.active]
                    },
                    getNext: function() {
                        return s._options.swipe ? d.slides[s.getNext(s._active)] : d[1 - d.active]
                    },
                    slides: [],
                    frames: [],
                    layers: []
                },
                h = this._carousel = {
                    next: s.$("thumb-nav-right"),
                    prev: s.$("thumb-nav-left"),
                    width: 0,
                    current: 0,
                    max: 0,
                    hooks: [],
                    update: function() {
                        var e = 0,
                            n = 0,
                            i = [0];
                        t.each(s._thumbnails, function(o, a) {
                            if (a.ready) {
                                e += a.outerWidth || t(a.container).outerWidth(!0);
                                var r = t(a.container).width();
                                e += r - m.floor(r), i[o + 1] = e, n = m.max(n, a.outerHeight || t(a.container).outerHeight(!0))
                            }
                        }), s.$("thumbnails").css({
                            width: e,
                            height: n
                        }), h.max = e, h.hooks = i, h.width = s.$("thumbnails-list").width(), h.setClasses(), s.$("thumbnails-container").toggleClass("galleria-carousel", e > h.width), h.width = s.$("thumbnails-list").width()
                    },
                    bindControls: function() {
                        var t;
                        h.next.on("click:fast", function(e) {
                            if (e.preventDefault(), "auto" === s._options.carouselSteps) {
                                for (t = h.current; t < h.hooks.length; t++)
                                    if (h.hooks[t] - h.hooks[h.current] > h.width) {
                                        h.set(t - 2);
                                        break
                                    }
                            } else h.set(h.current + s._options.carouselSteps)
                        }), h.prev.on("click:fast", function(e) {
                            if (e.preventDefault(), "auto" === s._options.carouselSteps)
                                for (t = h.current; t >= 0; t--) {
                                    if (h.hooks[h.current] - h.hooks[t] > h.width) {
                                        h.set(t + 2);
                                        break
                                    }
                                    if (0 === t) {
                                        h.set(0);
                                        break
                                    }
                                } else h.set(h.current - s._options.carouselSteps)
                        })
                    },
                    set: function(t) {
                        for (t = m.max(t, 0); h.hooks[t - 1] + h.width >= h.max && t >= 0;) t--;
                        h.current = t, h.animate()
                    },
                    getLast: function(t) {
                        return (t || h.current) - 1
                    },
                    follow: function(t) {
                        if (0 === t || t === h.hooks.length - 2) return void h.set(t);
                        for (var e = h.current; h.hooks[e] - h.hooks[h.current] < h.width && e <= h.hooks.length;) e++;
                        t - 1 < h.current ? h.set(t - 1) : t + 2 > e && h.set(t - e + h.current + 2)
                    },
                    setClasses: function() {
                        h.prev.toggleClass("disabled", !h.current), h.next.toggleClass("disabled", h.hooks[h.current] + h.width >= h.max)
                    },
                    animate: function(e) {
                        h.setClasses();
                        var n = -1 * h.hooks[h.current];
                        isNaN(n) || (s.$("thumbnails").css("left", function() {
                            return t(this).css("left")
                        }), M.animate(s.get("thumbnails"), {
                            left: n
                        }, {
                            duration: s._options.carouselSpeed,
                            easing: s._options.easing,
                            queue: !1
                        }))
                    }
                },
                f = this._tooltip = {
                    initialized: !1,
                    open: !1,
                    timer: "tooltip" + s._id,
                    swapTimer: "swap" + s._id,
                    init: function() {
                        f.initialized = !0;
                        var t = ".galleria-tooltip{padding:3px 8px;max-width:50%;background:#ffe;color:#000;z-index:3;position:absolute;font-size:11px;line-height:1.3;opacity:0;box-shadow:0 0 2px rgba(0,0,0,.4);-moz-box-shadow:0 0 2px rgba(0,0,0,.4);-webkit-box-shadow:0 0 2px rgba(0,0,0,.4);}";
                        M.insertStyleTag(t, "galleria-tooltip"), s.$("tooltip").css({
                            opacity: .8,
                            visibility: "visible",
                            display: "none"
                        })
                    },
                    move: function(t) {
                        var e = s.getMousePosition(t).x,
                            n = s.getMousePosition(t).y,
                            i = s.$("tooltip"),
                            o = e,
                            a = n,
                            r = i.outerHeight(!0) + 1,
                            l = i.outerWidth(!0),
                            c = r + 15,
                            u = s.$("container").width() - l - 2,
                            d = s.$("container").height() - r - 2;
                        isNaN(o) || isNaN(a) || (o += 10, a -= r + 8, o = m.max(0, m.min(u, o)), a = m.max(0, m.min(d, a)), c > n && (a = c), i.css({
                            left: o,
                            top: a
                        }))
                    },
                    bind: function(e, i) {
                        if (!n.TOUCH) {
                            f.initialized || f.init();
                            var o = function() {
                                    s.$("container").off("mousemove", f.move), s.clearTimer(f.timer), s.$("tooltip").stop().animate({
                                        opacity: 0
                                    }, 200, function() {
                                        s.$("tooltip").hide(), s.addTimer(f.swapTimer, function() {
                                            f.open = !1
                                        }, 1e3)
                                    })
                                },
                                a = function(e, n) {
                                    f.define(e, n), t(e).hover(function() {
                                        s.clearTimer(f.swapTimer), s.$("container").off("mousemove", f.move).on("mousemove", f.move).trigger("mousemove"), f.show(e), s.addTimer(f.timer, function() {
                                            s.$("tooltip").stop().show().animate({
                                                opacity: 1
                                            }), f.open = !0
                                        }, f.open ? 0 : 500)
                                    }, o).click(o)
                                };
                            "string" == typeof i ? a(e in s._dom ? s.get(e) : e, i) : t.each(e, function(t, e) {
                                a(s.get(t), e)
                            })
                        }
                    },
                    show: function(n) {
                        n = t(n in s._dom ? s.get(n) : n);
                        var i = n.data("tt"),
                            o = function(t) {
                                e.setTimeout(function(t) {
                                    return function() {
                                        f.move(t)
                                    }
                                }(t), 10), n.off("mouseup", o)
                            };
                        i = "function" == typeof i ? i() : i, i && (s.$("tooltip").html(i.replace(/\s/, "&#160;")), n.on("mouseup", o))
                    },
                    define: function(e, n) {
                        if ("function" != typeof n) {
                            var i = n;
                            n = function() {
                                return i
                            }
                        }
                        e = t(e in s._dom ? s.get(e) : e).data("tt", n), f.show(e)
                    }
                },
                g = this._fullscreen = {
                    scrolled: 0,
                    crop: i,
                    active: !1,
                    prev: t(),
                    beforeEnter: function(t) {
                        t()
                    },
                    beforeExit: function(t) {
                        t()
                    },
                    keymap: s._keyboard.map,
                    parseCallback: function(e, n) {
                        return F.active ? function() {
                            "function" == typeof e && e.call(s);
                            var i = s._controls.getActive(),
                                o = s._controls.getNext();
                            s._scaleImage(o), s._scaleImage(i), n && s._options.trueFullscreen && t(i.container).add(o.container).trigger("transitionend")
                        } : e
                    },
                    enter: function(t) {
                        g.beforeEnter(function() {
                            t = g.parseCallback(t, !0), s._options.trueFullscreen && $.support ? (g.active = !0, M.forceStyles(s.get("container"), {
                                width: "100%",
                                height: "100%"
                            }), s.rescale(), n.MAC ? n.SAFARI && /version\/[1-5]/.test(p) ? (s.$("stage").css("opacity", 0), e.setTimeout(function() {
                                g.scale(), s.$("stage").css("opacity", 1)
                            }, 4)) : (s.$("container").css("opacity", 0).addClass("fullscreen"), e.setTimeout(function() {
                                g.scale(), s.$("container").css("opacity", 1)
                            }, 50)) : s.$("container").addClass("fullscreen"), r.resize(g.scale), $.enter(s, t, s.get("container"))) : (g.scrolled = r.scrollTop(), n.TOUCH || e.scrollTo(0, 0), g._enter(t))
                        })
                    },
                    _enter: function(a) {
                        g.active = !0, w && (g.iframe = function() {
                            var i, a = o.referrer,
                                r = o.createElement("a"),
                                s = e.location;
                            return r.href = a, r.protocol != s.protocol || r.hostname != s.hostname || r.port != s.port ? (n.raise("Parent fullscreen not available. Iframe protocol, domains and ports must match."), !1) : (g.pd = e.parent.document, t(g.pd).find("iframe").each(function() {
                                var t = this.contentDocument || this.contentWindow.document;
                                return t === o ? (i = this, !1) : void 0
                            }), i)
                        }()), M.hide(s.getActiveImage()), w && g.iframe && (g.iframe.scrolled = t(e.parent).scrollTop(), e.parent.scrollTo(0, 0));
                        var l = s.getData(),
                            c = s._options,
                            u = !s._options.trueFullscreen || !$.support,
                            d = {
                                height: "100%",
                                overflow: "hidden",
                                margin: 0,
                                padding: 0
                            };
                        if (u && (s.$("container").addClass("fullscreen"), g.prev = s.$("container").prev(), g.prev.length || (g.parent = s.$("container").parent()), s.$("container").appendTo("body"), M.forceStyles(s.get("container"), {
                                position: n.TOUCH ? "absolute" : "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                zIndex: 1e4
                            }), M.forceStyles(b().html, d), M.forceStyles(b().body, d)), w && g.iframe && (M.forceStyles(g.pd.documentElement, d), M.forceStyles(g.pd.body, d), M.forceStyles(g.iframe, t.extend(d, {
                                width: "100%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                position: "fixed",
                                zIndex: 1e4,
                                border: "none"
                            }))), g.keymap = t.extend({}, s._keyboard.map), s.attachKeyboard({
                                escape: s.exitFullscreen,
                                right: s.next,
                                left: s.prev
                            }), g.crop = c.imageCrop, c.fullscreenCrop != i && (c.imageCrop = c.fullscreenCrop), l && l.big && l.image !== l.big) {
                            var p = new n.Picture,
                                h = p.isCached(l.big),
                                f = s.getIndex(),
                                m = s._thumbnails[f];
                            s.trigger({
                                type: n.LOADSTART,
                                cached: h,
                                rewind: !1,
                                index: f,
                                imageTarget: s.getActiveImage(),
                                thumbTarget: m,
                                galleriaData: l
                            }), p.load(l.big, function(e) {
                                s._scaleImage(e, {
                                    complete: function(e) {
                                        s.trigger({
                                            type: n.LOADFINISH,
                                            cached: h,
                                            index: f,
                                            rewind: !1,
                                            imageTarget: e.image,
                                            thumbTarget: m
                                        });
                                        var i = s._controls.getActive().image;
                                        i && t(i).width(e.image.width).height(e.image.height).attr("style", t(e.image).attr("style")).attr("src", e.image.src)
                                    }
                                })
                            });
                            var v = s.getNext(f),
                                y = new n.Picture,
                                x = s.getData(v);
                            y.preload(s.isFullscreen() && x.big ? x.big : x.image)
                        }
                        s.rescale(function() {
                            s.addTimer(!1, function() {
                                u && M.show(s.getActiveImage()), "function" == typeof a && a.call(s), s.rescale()
                            }, 100), s.trigger(n.FULLSCREEN_ENTER)
                        }), u ? r.resize(g.scale) : M.show(s.getActiveImage())
                    },
                    scale: function() {
                        s.rescale()
                    },
                    exit: function(t) {
                        g.beforeExit(function() {
                            t = g.parseCallback(t), s._options.trueFullscreen && $.support ? $.exit(t) : g._exit(t)
                        })
                    },
                    _exit: function(t) {
                        g.active = !1;
                        var i = !s._options.trueFullscreen || !$.support,
                            o = s.$("container").removeClass("fullscreen");
                        if (g.parent ? g.parent.prepend(o) : o.insertAfter(g.prev), i) {
                            M.hide(s.getActiveImage()), M.revertStyles(s.get("container"), b().html, b().body), n.TOUCH || e.scrollTo(0, g.scrolled);
                            var a = s._controls.frames[s._controls.active];
                            a && a.image && (a.image.src = a.image.src)
                        }
                        w && g.iframe && (M.revertStyles(g.pd.documentElement, g.pd.body, g.iframe), g.iframe.scrolled && e.parent.scrollTo(0, g.iframe.scrolled)), s.detachKeyboard(), s.attachKeyboard(g.keymap), s._options.imageCrop = g.crop;
                        var l = s.getData().big,
                            c = s._controls.getActive().image;
                        !s.getData().iframe && c && l && l == c.src && e.setTimeout(function(t) {
                            return function() {
                                c.src = t
                            }
                        }(s.getData().image), 1), s.rescale(function() {
                            s.addTimer(!1, function() {
                                i && M.show(s.getActiveImage()), "function" == typeof t && t.call(s), r.trigger("resize")
                            }, 50), s.trigger(n.FULLSCREEN_EXIT)
                        }), r.off("resize", g.scale)
                    }
                },
                v = this._idle = {
                    trunk: [],
                    bound: !1,
                    active: !1,
                    add: function(e, i, o, a) {
                        if (e && !n.TOUCH) {
                            v.bound || v.addEvent(), e = t(e), "boolean" == typeof o && (a = o, o = {}), o = o || {};
                            var r, s = {};
                            for (r in i) i.hasOwnProperty(r) && (s[r] = e.css(r));
                            e.data("idle", {
                                from: t.extend(s, o),
                                to: i,
                                complete: !0,
                                busy: !1
                            }), a ? e.css(i) : v.addTimer(), v.trunk.push(e)
                        }
                    },
                    remove: function(e) {
                        e = t(e), t.each(v.trunk, function(t, n) {
                            n && n.length && !n.not(e).length && (e.css(e.data("idle").from), v.trunk.splice(t, 1))
                        }), v.trunk.length || (v.removeEvent(), s.clearTimer(v.timer))
                    },
                    addEvent: function() {
                        v.bound = !0, s.$("container").on("mousemove click", v.showAll), "hover" == s._options.idleMode && s.$("container").on("mouseleave", v.hide)
                    },
                    removeEvent: function() {
                        v.bound = !1, s.$("container").on("mousemove click", v.showAll), "hover" == s._options.idleMode && s.$("container").off("mouseleave", v.hide)
                    },
                    addTimer: function() {
                        "hover" != s._options.idleMode && s.addTimer("idle", function() {
                            v.hide()
                        }, s._options.idleTime)
                    },
                    hide: function() {
                        if (s._options.idleMode && s.getIndex() !== !1) {
                            s.trigger(n.IDLE_ENTER);
                            var e = v.trunk.length;
                            t.each(v.trunk, function(t, n) {
                                var i = n.data("idle");
                                i && (n.data("idle").complete = !1, M.animate(n, i.to, {
                                    duration: s._options.idleSpeed,
                                    complete: function() {
                                        t == e - 1 && (v.active = !1)
                                    }
                                }))
                            })
                        }
                    },
                    showAll: function() {
                        s.clearTimer("idle"), t.each(v.trunk, function(t, e) {
                            v.show(e)
                        })
                    },
                    show: function(e) {
                        var i = e.data("idle");
                        v.active && (i.busy || i.complete) || (i.busy = !0, s.trigger(n.IDLE_EXIT), s.clearTimer("idle"), M.animate(e, i.from, {
                            duration: s._options.idleSpeed / 2,
                            complete: function() {
                                v.active = !0, t(e).data("idle").busy = !1, t(e).data("idle").complete = !0
                            }
                        })), v.addTimer()
                    }
                },
                x = this._lightbox = {
                    width: 0,
                    height: 0,
                    initialized: !1,
                    active: null,
                    image: null,
                    elems: {},
                    keymap: !1,
                    init: function() {
                        if (!x.initialized) {
                            x.initialized = !0;
                            var e = "overlay box content shadow title info close prevholder prev nextholder next counter image",
                                i = {},
                                o = s._options,
                                a = "",
                                r = "position:absolute;",
                                l = "lightbox-",
                                c = {
                                    overlay: "position:fixed;display:none;opacity:" + o.overlayOpacity + ";filter:alpha(opacity=" + 100 * o.overlayOpacity + ");top:0;left:0;width:100%;height:100%;background:" + o.overlayBackground + ";z-index:99990",
                                    box: "position:fixed;display:none;width:400px;height:400px;top:50%;left:50%;margin-top:-200px;margin-left:-200px;z-index:99991",
                                    shadow: r + "background:#000;width:100%;height:100%;",
                                    content: r + "background-color:#fff;top:10px;left:10px;right:10px;bottom:10px;overflow:hidden",
                                    info: r + "bottom:10px;left:10px;right:10px;color:#444;font:11px/13px arial,sans-serif;height:13px",
                                    close: r + "top:10px;right:10px;height:20px;width:20px;background:#fff;text-align:center;cursor:pointer;color:#444;font:16px/22px arial,sans-serif;z-index:99999",
                                    image: r + "top:10px;left:10px;right:10px;bottom:30px;overflow:hidden;display:block;",
                                    prevholder: r + "width:50%;top:0;bottom:40px;cursor:pointer;",
                                    nextholder: r + "width:50%;top:0;bottom:40px;right:-1px;cursor:pointer;",
                                    prev: r + "top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;left:20px;display:none;text-align:center;color:#000;font:bold 16px/36px arial,sans-serif",
                                    next: r + "top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;right:20px;left:auto;display:none;font:bold 16px/36px arial,sans-serif;text-align:center;color:#000",
                                    title: "float:left",
                                    counter: "float:right;margin-left:8px;"
                                },
                                u = function(e) {
                                    return e.hover(function() {
                                        t(this).css("color", "#bbb")
                                    }, function() {
                                        t(this).css("color", "#444")
                                    })
                                },
                                d = {},
                                p = "";
                            p = y > 7 ? 9 > y ? "background:#000;filter:alpha(opacity=0);" : "background:rgba(0,0,0,0);" : "z-index:99999", c.nextholder += p, c.prevholder += p, t.each(c, function(t, e) {
                                a += ".galleria-" + l + t + "{" + e + "}"
                            }), a += ".galleria-" + l + "box.iframe .galleria-" + l + "prevholder,.galleria-" + l + "box.iframe .galleria-" + l + "nextholder{width:100px;height:100px;top:50%;margin-top:-70px}", M.insertStyleTag(a, "galleria-lightbox"), t.each(e.split(" "), function(t, e) {
                                s.addElement("lightbox-" + e), i[e] = x.elems[e] = s.get("lightbox-" + e)
                            }), x.image = new n.Picture, t.each({
                                box: "shadow content close prevholder nextholder",
                                info: "title counter",
                                content: "info image",
                                prevholder: "prev",
                                nextholder: "next"
                            }, function(e, n) {
                                var i = [];
                                t.each(n.split(" "), function(t, e) {
                                    i.push(l + e)
                                }), d[l + e] = i
                            }), s.append(d), t(i.image).append(x.image.container), t(b().body).append(i.overlay, i.box), u(t(i.close).on("click:fast", x.hide).html("&#215;")), t.each(["Prev", "Next"], function(e, o) {
                                var a = t(i[o.toLowerCase()]).html(/v/.test(o) ? "&#8249;&#160;" : "&#160;&#8250;"),
                                    r = t(i[o.toLowerCase() + "holder"]);
                                return r.on("click:fast", function() {
                                    x["show" + o]()
                                }), 8 > y || n.TOUCH ? void a.show() : void r.hover(function() {
                                    a.show()
                                }, function(t) {
                                    a.stop().fadeOut(200)
                                })
                            }), t(i.overlay).on("click:fast", x.hide), n.IPAD && (s._options.lightboxTransitionSpeed = 0)
                        }
                    },
                    rescale: function(e) {
                        var i = m.min(r.width() - 40, x.width),
                            o = m.min(r.height() - 60, x.height),
                            a = m.min(i / x.width, o / x.height),
                            l = m.round(x.width * a) + 40,
                            c = m.round(x.height * a) + 60,
                            u = {
                                width: l,
                                height: c,
                                "margin-top": -1 * m.ceil(c / 2),
                                "margin-left": -1 * m.ceil(l / 2)
                            };
                        e ? t(x.elems.box).css(u) : t(x.elems.box).animate(u, {
                            duration: s._options.lightboxTransitionSpeed,
                            easing: s._options.easing,
                            complete: function() {
                                var e = x.image,
                                    i = s._options.lightboxFadeSpeed;
                                s.trigger({
                                    type: n.LIGHTBOX_IMAGE,
                                    imageTarget: e.image
                                }), t(e.container).show(), t(e.image).animate({
                                    opacity: 1
                                }, i), M.show(x.elems.info, i)
                            }
                        })
                    },
                    hide: function() {
                        x.image.image = null, r.off("resize", x.rescale), t(x.elems.box).hide().find("iframe").remove(), M.hide(x.elems.info), s.detachKeyboard(), s.attachKeyboard(x.keymap), x.keymap = !1, M.hide(x.elems.overlay, 200, function() {
                            t(this).hide().css("opacity", s._options.overlayOpacity), s.trigger(n.LIGHTBOX_CLOSE)
                        })
                    },
                    showNext: function() {
                        x.show(s.getNext(x.active))
                    },
                    showPrev: function() {
                        x.show(s.getPrev(x.active))
                    },
                    show: function(i) {
                        x.active = i = "number" == typeof i ? i : s.getIndex() || 0, x.initialized || x.init(), s.trigger(n.LIGHTBOX_OPEN), x.keymap || (x.keymap = t.extend({}, s._keyboard.map), s.attachKeyboard({
                            escape: x.hide,
                            right: x.showNext,
                            left: x.showPrev
                        })), r.off("resize", x.rescale);
                        var o, a, l, c = s.getData(i),
                            u = s.getDataLength(),
                            d = s.getNext(i);
                        M.hide(x.elems.info);
                        try {
                            for (l = s._options.preload; l > 0; l--) a = new n.Picture, o = s.getData(d), a.preload(o.big ? o.big : o.image), d = s.getNext(d)
                        } catch (p) {}
                        x.image.isIframe = c.iframe && !c.image, t(x.elems.box).toggleClass("iframe", x.image.isIframe), t(x.image.container).find(".galleria-videoicon").remove(), x.image.load(c.big || c.image || c.iframe, function(n) {
                            if (n.isIframe) {
                                var o = t(e).width(),
                                    a = t(e).height();
                                if (n.video && s._options.maxVideoSize) {
                                    var l = m.min(s._options.maxVideoSize / o, s._options.maxVideoSize / a);
                                    1 > l && (o *= l, a *= l)
                                }
                                x.width = o, x.height = a
                            } else x.width = n.original.width, x.height = n.original.height;
                            if (t(n.image).css({
                                    width: n.isIframe ? "100%" : "100.1%",
                                    height: n.isIframe ? "100%" : "100.1%",
                                    top: 0,
                                    bottom: 0,
                                    zIndex: 99998,
                                    opacity: 0,
                                    visibility: "visible"
                                }).parent().height("100%"), x.elems.title.innerHTML = c.title || "", x.elems.counter.innerHTML = i + 1 + " / " + u, r.resize(x.rescale), x.rescale(), c.image && c.iframe) {
                                if (t(x.elems.box).addClass("iframe"), c.video) {
                                    var d = O(n.container).hide();
                                    e.setTimeout(function() {
                                        d.fadeIn(200)
                                    }, 200)
                                }
                                t(n.image).css("cursor", "pointer").mouseup(function(e, n) {
                                    return function(i) {
                                        t(x.image.container).find(".galleria-videoicon").remove(), i.preventDefault(), n.isIframe = !0, n.load(e.iframe + (e.video ? "&autoplay=1" : ""), {
                                            width: "100%",
                                            height: 8 > y ? t(x.image.container).height() : "100%"
                                        })
                                    }
                                }(c, n))
                            }
                        }), t(x.elems.overlay).show().css("visibility", "visible"), t(x.elems.box).show()
                    }
                },
                _ = this._timer = {
                    trunk: {},
                    add: function(t, n, i, o) {
                        if (t = t || (new Date).getTime(), o = o || !1, this.clear(t), o) {
                            var a = n;
                            n = function() {
                                a(), _.add(t, n, i)
                            }
                        }
                        this.trunk[t] = e.setTimeout(n, i)
                    },
                    clear: function(t) {
                        var n, i = function(t) {
                            e.clearTimeout(this.trunk[t]), delete this.trunk[t]
                        };
                        if (t && t in this.trunk) i.call(this, t);
                        else if ("undefined" == typeof t)
                            for (n in this.trunk) this.trunk.hasOwnProperty(n) && i.call(this, n)
                    }
                };
            return this
        }, n.prototype = {
            constructor: n,
            init: function(e, o) {
                if (o = T(o), this._original = {
                        target: e,
                        options: o,
                        data: null
                    }, this._target = this._dom.target = e.nodeName ? e : t(e).get(0), this._original.html = this._target.innerHTML, P.push(this), !this._target) return void n.raise("Target not found", !0);
                if (this._options = {
                        autoplay: !1,
                        carousel: !0,
                        carouselFollow: !0,
                        carouselSpeed: 400,
                        carouselSteps: "auto",
                        clicknext: !1,
                        dailymotion: {
                            foreground: "%23EEEEEE",
                            highlight: "%235BCEC5",
                            background: "%23222222",
                            logo: 0,
                            hideInfos: 1
                        },
                        dataConfig: function(t) {
                            return {}
                        },
                        dataSelector: "img",
                        dataSort: !1,
                        dataSource: this._target,
                        debug: i,
                        dummy: i,
                        easing: "galleria",
                        extend: function(t) {},
                        fullscreenCrop: i,
                        fullscreenDoubleTap: !0,
                        fullscreenTransition: i,
                        height: 0,
                        idleMode: !0,
                        idleTime: 3e3,
                        idleSpeed: 200,
                        imageCrop: !1,
                        imageMargin: 0,
                        imagePan: !1,
                        imagePanSmoothness: 12,
                        imagePosition: "50%",
                        imageTimeout: i,
                        initialTransition: i,
                        keepSource: !1,
                        layerFollow: !0,
                        lightbox: !1,
                        lightboxFadeSpeed: 200,
                        lightboxTransitionSpeed: 200,
                        linkSourceImages: !0,
                        maxScaleRatio: i,
                        maxVideoSize: i,
                        minScaleRatio: i,
                        overlayOpacity: .85,
                        overlayBackground: "#0b0b0b",
                        pauseOnInteraction: !0,
                        popupLinks: !1,
                        preload: 2,
                        queue: !0,
                        responsive: !0,
                        show: 0,
                        showInfo: !0,
                        showCounter: !0,
                        showImagenav: !0,
                        swipe: "auto",
                        theme: null,
                        thumbCrop: !0,
                        thumbEventType: "click:fast",
                        thumbMargin: 0,
                        thumbQuality: "auto",
                        thumbDisplayOrder: !0,
                        thumbPosition: "50%",
                        thumbnails: !0,
                        touchTransition: i,
                        transition: "fade",
                        transitionInitial: i,
                        transitionSpeed: 400,
                        trueFullscreen: !0,
                        useCanvas: !1,
                        variation: "",
                        videoPoster: !0,
                        vimeo: {
                            title: 0,
                            byline: 0,
                            portrait: 0,
                            color: "aaaaaa"
                        },
                        wait: 5e3,
                        width: "auto",
                        youtube: {
                            modestbranding: 1,
                            autohide: 1,
                            color: "white",
                            hd: 1,
                            rel: 0,
                            showinfo: 0
                        }
                    }, this._options.initialTransition = this._options.initialTransition || this._options.transitionInitial, o && (o.debug === !1 && (c = !1), "number" == typeof o.imageTimeout && (u = o.imageTimeout), "string" == typeof o.dummy && (d = o.dummy), "string" == typeof o.theme && (this._options.theme = o.theme)), t(this._target).children().hide(), n.QUIRK && n.raise("Your page is in Quirks mode, Galleria may not render correctly. Please validate your HTML and add a correct doctype."), D.length)
                    if (this._options.theme) {
                        for (var a = 0; a < D.length; a++)
                            if (this._options.theme === D[a].name) {
                                this.theme = D[a];
                                break
                            }
                    } else this.theme = D[0];
                return "object" == typeof this.theme ? this._init() : A.push(this), this
            },
            _init: function() {
                var a = this,
                    s = this._options;
                if (this._initialized) return n.raise("Init failed: Gallery instance already initialized."), this;
                if (this._initialized = !0, !this.theme) return n.raise("Init failed: No theme found.", !0), this;
                if (t.extend(!0, s, this.theme.defaults, this._original.options, n.configure.options), s.swipe = function(t) {
                        return "enforced" == t ? !0 : t === !1 || "disabled" == t ? !1 : !!n.TOUCH
                    }(s.swipe), s.swipe && (s.clicknext = !1, s.imagePan = !1), ! function(t) {
                        return "getContext" in t ? void(N = N || {
                            elem: t,
                            context: t.getContext("2d"),
                            cache: {},
                            length: 0
                        }) : void(t = null)
                    }(o.createElement("canvas")), this.bind(n.DATA, function() {
                        e.screen && e.screen.width && Array.prototype.forEach && this._data.forEach(function(t) {
                            var n = "devicePixelRatio" in e ? e.devicePixelRatio : 1,
                                i = m.max(e.screen.width, e.screen.height);
                            1024 > i * n && (t.big = t.image)
                        }), this._original.data = this._data, this.get("total").innerHTML = this.getDataLength();
                        var t = this.$("container");
                        a._options.height < 2 && (a._userRatio = a._ratio = a._options.height);
                        var i = {
                                width: 0,
                                height: 0
                            },
                            o = function() {
                                return a.$("stage").height()
                            };
                        M.wait({
                            until: function() {
                                return i = a._getWH(), t.width(i.width).height(i.height), o() && i.width && i.height > 50
                            },
                            success: function() {
                                a._width = i.width, a._height = i.height, a._ratio = a._ratio || i.height / i.width, n.WEBKIT ? e.setTimeout(function() {
                                    a._run()
                                }, 1) : a._run()
                            },
                            error: function() {
                                o() ? n.raise("Could not extract sufficient width/height of the gallery container. Traced measures: width:" + i.width + "px, height: " + i.height + "px.", !0) : n.raise("Could not extract a stage height from the CSS. Traced height: " + o() + "px.", !0)
                            },
                            timeout: "number" == typeof this._options.wait ? this._options.wait : !1
                        })
                    }), this.append({
                        "info-text": ["info-title", "info-description"],
                        info: ["info-text"],
                        "image-nav": ["image-nav-right", "image-nav-left"],
                        stage: ["images", "loader", "counter", "image-nav"],
                        "thumbnails-list": ["thumbnails"],
                        "thumbnails-container": ["thumb-nav-left", "thumbnails-list", "thumb-nav-right"],
                        container: ["stage", "thumbnails-container", "info", "tooltip"]
                    }), M.hide(this.$("counter").append(this.get("current"), o.createTextNode(" / "), this.get("total"))), this.setCounter("&#8211;"), M.hide(a.get("tooltip")), this.$("container").addClass([n.TOUCH ? "touch" : "notouch", this._options.variation, "galleria-theme-" + this.theme.name].join(" ")), this._options.swipe || t.each(new Array(2), function(e) {
                        var i = new n.Picture;
                        t(i.container).css({
                            position: "absolute",
                            top: 0,
                            left: 0
                        }).prepend(a._layers[e] = t(M.create("galleria-layer")).css({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 2
                        })[0]), a.$("images").append(i.container), a._controls[e] = i;
                        var o = new n.Picture;
                        o.isIframe = !0, t(o.container).attr("class", "galleria-frame").css({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 4,
                            background: "#000",
                            display: "none"
                        }).appendTo(i.container), a._controls.frames[e] = o
                    }), this.$("images").css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }), s.swipe && (this.$("images").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: 0,
                        height: "100%"
                    }), this.finger = new n.Finger(this.get("stage"), {
                        onchange: function(t) {
                            a.pause().show(t)
                        },
                        oncomplete: function(e) {
                            var n = m.max(0, m.min(parseInt(e, 10), a.getDataLength() - 1)),
                                i = a.getData(n);
                            t(a._thumbnails[n].container).addClass("active").siblings(".active").removeClass("active"), i && (a.$("images").find(".galleria-frame").css("opacity", 0).hide().find("iframe").remove(), a._options.carousel && a._options.carouselFollow && a._carousel.follow(n))
                        }
                    }), this.bind(n.RESCALE, function() {
                        this.finger.setup()
                    }), this.$("stage").on("click", function(n) {
                        var o = a.getData();
                        if (o) {
                            if (o.iframe) {
                                a.isPlaying() && a.pause();
                                var r = a._controls.frames[a._active],
                                    s = a._stageWidth,
                                    l = a._stageHeight;
                                if (t(r.container).find("iframe").length) return;
                                return t(r.container).css({
                                    width: s,
                                    height: l,
                                    opacity: 0
                                }).show().animate({
                                    opacity: 1
                                }, 200), void e.setTimeout(function() {
                                    r.load(o.iframe + (o.video ? "&autoplay=1" : ""), {
                                        width: s,
                                        height: l
                                    }, function(t) {
                                        a.$("container").addClass("videoplay"), t.scale({
                                            width: a._stageWidth,
                                            height: a._stageHeight,
                                            iframelimit: o.video ? a._options.maxVideoSize : i
                                        })
                                    })
                                }, 100)
                            }
                            if (o.link)
                                if (a._options.popupLinks) {
                                    e.open(o.link, "_blank")
                                } else e.location.href = o.link;
                            else;
                        }
                    }), this.bind(n.IMAGE, function(e) {
                        a.setCounter(e.index), a.setInfo(e.index);
                        var n = this.getNext(),
                            i = this.getPrev(),
                            o = [i, n];
                        o.push(this.getNext(n), this.getPrev(i), a._controls.slides.length - 1);
                        var r = [];
                        t.each(o, function(e, n) {
                            -1 == t.inArray(n, r) && r.push(n)
                        }), t.each(r, function(e, n) {
                            var i = a.getData(n),
                                o = a._controls.slides[n],
                                r = a.isFullscreen() && i.big ? i.big : i.image || i.iframe;
                            i.iframe && !i.image && (o.isIframe = !0), o.ready || a._controls.slides[n].load(r, function(e) {
                                e.isIframe || t(e.image).css("visibility", "hidden"), a._scaleImage(e, {
                                    complete: function(e) {
                                        e.isIframe || t(e.image).css({
                                            opacity: 0,
                                            visibility: "visible"
                                        }).animate({
                                            opacity: 1
                                        }, 200)
                                    }
                                })
                            })
                        })
                    })), this.$("thumbnails, thumbnails-list").css({
                        overflow: "hidden",
                        position: "relative"
                    }), this.$("image-nav-right, image-nav-left").on("click:fast", function(t) {
                        s.pauseOnInteraction && a.pause();
                        var e = /right/.test(this.className) ? "next" : "prev";
                        a[e]()
                    }).on("click", function(t) {
                        t.preventDefault(), (s.clicknext || s.swipe) && t.stopPropagation()
                    }), t.each(["info", "counter", "image-nav"], function(t, e) {
                        s["show" + e.substr(0, 1).toUpperCase() + e.substr(1).replace(/-/, "")] === !1 && M.moveOut(a.get(e.toLowerCase()))
                    }), this.load(), s.keepSource || y || (this._target.innerHTML = ""), this.get("errors") && this.appendChild("target", "errors"), this.appendChild("target", "container"), s.carousel) {
                    var l = 0,
                        c = s.show;
                    this.bind(n.THUMBNAIL, function() {
                        this.updateCarousel(), ++l == this.getDataLength() && "number" == typeof c && c > 0 && this._carousel.follow(c)
                    })
                }
                return s.responsive && r.on("resize", function() {
                    a.isFullscreen() || a.resize()
                }), s.fullscreenDoubleTap && this.$("stage").on("touchstart", function() {
                    var t, e, n, i, o, r, s = function(t) {
                        return t.originalEvent.touches ? t.originalEvent.touches[0] : t
                    };
                    return a.$("stage").on("touchmove", function() {
                            t = 0
                        }),
                        function(l) {
                            if (!/(-left|-right)/.test(l.target.className)) {
                                if (r = M.timestamp(), e = s(l).pageX, n = s(l).pageY, l.originalEvent.touches.length < 2 && 300 > r - t && 20 > e - i && 20 > n - o) return a.toggleFullscreen(), void l.preventDefault();
                                t = r, i = e, o = n
                            }
                        }
                }()), t.each(n.on.binds, function(e, n) {
                    -1 == t.inArray(n.hash, a._binds) && a.bind(n.type, n.callback)
                }), this
            },
            addTimer: function() {
                return this._timer.add.apply(this._timer, M.array(arguments)), this
            },
            clearTimer: function() {
                return this._timer.clear.apply(this._timer, M.array(arguments)), this
            },
            _getWH: function() {
                var e, n = this.$("container"),
                    i = this.$("target"),
                    o = this,
                    a = {};
                return t.each(["width", "height"], function(t, r) {
                    o._options[r] && "number" == typeof o._options[r] ? a[r] = o._options[r] : (e = [M.parseValue(n.css(r)), M.parseValue(i.css(r)), n[r](), i[r]()], o["_" + r] || e.splice(e.length, M.parseValue(n.css("min-" + r)), M.parseValue(i.css("min-" + r))), a[r] = m.max.apply(m, e))
                }), o._userRatio && (a.height = a.width * o._userRatio), a
            },
            _createThumbnails: function(i) {
                this.get("total").innerHTML = this.getDataLength();
                var a, r, s, l, c = this,
                    u = this._options,
                    d = i ? this._data.length - i.length : 0,
                    p = d,
                    h = [],
                    f = 0,
                    m = 8 > y ? "http://upload.wikimedia.org/wikipedia/commons/c/c0/Blank.gif" : "data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D",
                    g = function() {
                        var t = c.$("thumbnails").find(".active");
                        return t.length ? t.find("img").attr("src") : !1
                    }(),
                    v = "string" == typeof u.thumbnails ? u.thumbnails.toLowerCase() : null,
                    b = function(t) {
                        return o.defaultView && o.defaultView.getComputedStyle ? o.defaultView.getComputedStyle(r.container, null)[t] : l.css(t)
                    },
                    w = function(e, i, o) {
                        return function() {
                            t(o).append(e), c.trigger({
                                type: n.THUMBNAIL,
                                thumbTarget: e,
                                index: i,
                                galleriaData: c.getData(i)
                            })
                        }
                    },
                    x = function(e) {
                        u.pauseOnInteraction && c.pause();
                        var n = t(e.currentTarget).data("index");
                        c.getIndex() !== n && c.show(n), e.preventDefault()
                    },
                    _ = function(e, i) {
                        t(e.container).css("visibility", "visible"), c.trigger({
                            type: n.THUMBNAIL,
                            thumbTarget: e.image,
                            index: e.data.order,
                            galleriaData: c.getData(e.data.order)
                        }), "function" == typeof i && i.call(c, e)
                    },
                    T = function(e, n) {
                        e.scale({
                            width: e.data.width,
                            height: e.data.height,
                            crop: u.thumbCrop,
                            margin: u.thumbMargin,
                            canvas: u.useCanvas,
                            position: u.thumbPosition,
                            complete: function(e) {
                                var i, o, a = ["left", "top"],
                                    r = ["Width", "Height"];
                                c.getData(e.index);
                                t.each(r, function(n, r) {
                                    i = r.toLowerCase(), (u.thumbCrop !== !0 || u.thumbCrop === i) && (o = {}, o[i] = e[i], t(e.container).css(o), o = {}, o[a[n]] = 0, t(e.image).css(o)), e["outer" + r] = t(e.container)["outer" + r](!0)
                                }), M.toggleQuality(e.image, u.thumbQuality === !0 || "auto" === u.thumbQuality && e.original.width < 3 * e.width), u.thumbDisplayOrder && !e.lazy ? t.each(h, function(t, e) {
                                    return t === f && e.ready && !e.displayed ? (f++, e.displayed = !0, void _(e, n)) : void 0
                                }) : _(e, n)
                            }
                        })
                    };
                for (i || (this._thumbnails = [], this.$("thumbnails").empty()); this._data[d]; d++) s = this._data[d], a = s.thumb || s.image, u.thumbnails !== !0 && "lazy" != v || !s.thumb && !s.image ? s.iframe && null !== v || "empty" === v || "numbers" === v ? (r = {
                    container: M.create("galleria-image"),
                    image: M.create("img", "span"),
                    ready: !0,
                    data: {
                        order: d
                    }
                }, "numbers" === v && t(r.image).text(d + 1), s.iframe && t(r.image).addClass("iframe"), this.$("thumbnails").append(r.container), e.setTimeout(w(r.image, d, r.container), 50 + 20 * d)) : r = {
                    container: null,
                    image: null
                } : (r = new n.Picture(d), r.index = d, r.displayed = !1, r.lazy = !1, r.video = !1, this.$("thumbnails").append(r.container), l = t(r.container), l.css("visibility", "hidden"), r.data = {
                    width: M.parseValue(b("width")),
                    height: M.parseValue(b("height")),
                    order: d,
                    src: a
                }, u.thumbCrop !== !0 ? l.css({
                    width: "auto",
                    height: "auto"
                }) : l.css({
                    width: r.data.width,
                    height: r.data.height
                }), "lazy" == v ? (l.addClass("lazy"), r.lazy = !0, r.load(m, {
                    height: r.data.height,
                    width: r.data.width
                })) : r.load(a, T), "all" === u.preload && r.preload(s.image)), t(r.container).add(u.keepSource && u.linkSourceImages ? s.original : null).data("index", d).on(u.thumbEventType, x).data("thumbload", T), g === a && t(r.container).addClass("active"), this._thumbnails.push(r);
                return h = this._thumbnails.slice(p), this
            },
            lazyLoad: function(e, n) {
                var i = e.constructor == Array ? e : [e],
                    o = this,
                    a = 0;
                return t.each(i, function(e, r) {
                    if (!(r > o._thumbnails.length - 1)) {
                        var s = o._thumbnails[r],
                            l = s.data,
                            c = function() {
                                ++a == i.length && "function" == typeof n && n.call(o)
                            },
                            u = t(s.container).data("thumbload");
                        s.video ? u.call(o, s, c) : s.load(l.src, function(t) {
                            u.call(o, t, c)
                        })
                    }
                }), this
            },
            lazyLoadChunks: function(t, n) {
                var i = this.getDataLength(),
                    o = 0,
                    a = 0,
                    r = [],
                    s = [],
                    l = this;
                for (n = n || 0; i > o; o++) s.push(o), (++a == t || o == i - 1) && (r.push(s), a = 0, s = []);
                var c = function(t) {
                    var i = r.shift();
                    i && e.setTimeout(function() {
                        l.lazyLoad(i, function() {
                            c(!0)
                        })
                    }, n && t ? n : 0)
                };
                return c(!1), this
            },
            _run: function() {
                var o = this;
                o._createThumbnails(), M.wait({
                    timeout: 1e4,
                    until: function() {
                        return n.OPERA && o.$("stage").css("display", "inline-block"), o._stageWidth = o.$("stage").width(), o._stageHeight = o.$("stage").height(), o._stageWidth && o._stageHeight > 50
                    },
                    success: function() {
                        if (I.push(o), o._options.swipe) {
                            var a = o.$("images").width(o.getDataLength() * o._stageWidth);
                            t.each(new Array(o.getDataLength()), function(e) {
                                var i = new n.Picture,
                                    r = o.getData(e);
                                t(i.container).css({
                                    position: "absolute",
                                    top: 0,
                                    left: o._stageWidth * e
                                }).prepend(o._layers[e] = t(M.create("galleria-layer")).css({
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    zIndex: 2
                                })[0]).appendTo(a), r.video && O(i.container), o._controls.slides.push(i);
                                var s = new n.Picture;
                                s.isIframe = !0, t(s.container).attr("class", "galleria-frame").css({
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    zIndex: 4,
                                    background: "#000",
                                    display: "none"
                                }).appendTo(i.container), o._controls.frames.push(s)
                            }), o.finger.setup()
                        }
                        return M.show(o.get("counter")), o._options.carousel && o._carousel.bindControls(), o._options.autoplay && (o.pause(), "number" == typeof o._options.autoplay && (o._playtime = o._options.autoplay), o._playing = !0), o._firstrun ? (o._options.autoplay && o.trigger(n.PLAY), void("number" == typeof o._options.show && o.show(o._options.show))) : (o._firstrun = !0, n.History && n.History.change(function(t) {
                            isNaN(t) ? e.history.go(-1) : o.show(t, i, !0)
                        }), o.trigger(n.READY), o.theme.init.call(o, o._options), t.each(n.ready.callbacks, function(t, e) {
                            "function" == typeof e && e.call(o, o._options)
                        }), o._options.extend.call(o, o._options), /^[0-9]{1,4}$/.test(h) && n.History ? o.show(h, i, !0) : o._data[o._options.show] && o.show(o._options.show), void(o._options.autoplay && o.trigger(n.PLAY)))
                    },
                    error: function() {
                        n.raise("Stage width or height is too small to show the gallery. Traced measures: width:" + o._stageWidth + "px, height: " + o._stageHeight + "px.", !0)
                    }
                })
            },
            load: function(e, i, o) {
                var a = this,
                    r = this._options;
                return this._data = [], this._thumbnails = [], this.$("thumbnails").empty(), "function" == typeof i && (o = i, i = null), e = e || r.dataSource, i = i || r.dataSelector, o = o || r.dataConfig, t.isPlainObject(e) && (e = [e]), t.isArray(e) ? this.validate(e) ? this._data = e : n.raise("Load failed: JSON Array not valid.") : (i += ",.video,.iframe", t(e).find(i).each(function(e, n) {
                    n = t(n);
                    var i = {},
                        r = n.parent(),
                        s = r.attr("href"),
                        l = r.attr("rel");
                    s && ("IMG" == n[0].nodeName || n.hasClass("video")) && S(s) ? i.video = s : s && n.hasClass("iframe") ? i.iframe = s : i.image = i.big = s, l && (i.big = l), t.each("big title description link layer image".split(" "), function(t, e) {
                        n.data(e) && (i[e] = n.data(e).toString())
                    }), i.big || (i.big = i.image), a._data.push(t.extend({
                        title: n.attr("title") || "",
                        thumb: n.attr("src"),
                        image: n.attr("src"),
                        big: n.attr("src"),
                        description: n.attr("alt") || "",
                        link: n.attr("longdesc"),
                        original: n.get(0)
                    }, i, o(n)))
                })), "function" == typeof r.dataSort ? s.sort.call(this._data, r.dataSort) : "random" == r.dataSort && this._data.sort(function() {
                    return m.round(m.random()) - .5
                }), this.getDataLength() && this._parseData(function() {
                    this.trigger(n.DATA)
                }), this
            },
            _parseData: function(e) {
                var n, o = this,
                    a = !1,
                    r = function() {
                        var n = !0;
                        t.each(o._data, function(t, e) {
                            return e.loading ? (n = !1, !1) : void 0
                        }), n && !a && (a = !0, e.call(o))
                    };
                return t.each(this._data, function(e, a) {
                    if (n = o._data[e], "thumb" in a == !1 && (n.thumb = a.image), a.big || (n.big = a.image), "video" in a) {
                        var s = S(a.video);
                        s && (n.iframe = new E(s.provider, s.id).embed() + function() {
                            if ("object" == typeof o._options[s.provider]) {
                                var e = "?",
                                    n = [];
                                return t.each(o._options[s.provider], function(t, e) {
                                    n.push(t + "=" + e)
                                }), "youtube" == s.provider && (n = ["wmode=opaque"].concat(n)), e + n.join("&")
                            }
                            return ""
                        }(), n.thumb && n.image || t.each(["thumb", "image"], function(t, e) {
                            if ("image" == e && !o._options.videoPoster) return void(n.image = i);
                            var a = new E(s.provider, s.id);
                            n[e] || (n.loading = !0, a.getMedia(e, function(t, e) {
                                return function(n) {
                                    t[e] = n, "image" != e || t.big || (t.big = t.image), delete t.loading, r()
                                }
                            }(n, e)))
                        }))
                    }
                }), r(), this
            },
            destroy: function() {
                return this.$("target").data("galleria", null), this.$("container").off("galleria"), this.get("target").innerHTML = this._original.html, this.clearTimer(), M.removeFromArray(P, this), M.removeFromArray(I, this), n._waiters.length && t.each(n._waiters, function(t, n) {
                    n && e.clearTimeout(n)
                }), this
            },
            splice: function() {
                var t = this,
                    n = M.array(arguments);
                return e.setTimeout(function() {
                    s.splice.apply(t._data, n), t._parseData(function() {
                        t._createThumbnails()
                    })
                }, 2), t
            },
            push: function() {
                var t = this,
                    n = M.array(arguments);
                return 1 == n.length && n[0].constructor == Array && (n = n[0]), e.setTimeout(function() {
                    s.push.apply(t._data, n), t._parseData(function() {
                        t._createThumbnails(n)
                    })
                }, 2), t
            },
            _getActive: function() {
                return this._controls.getActive()
            },
            validate: function(t) {
                return !0
            },
            bind: function(t, e) {
                return t = C(t), this.$("container").on(t, this.proxy(e)), this
            },
            unbind: function(t) {
                return t = C(t), this.$("container").off(t), this
            },
            trigger: function(e) {
                return e = "object" == typeof e ? t.extend(e, {
                    scope: this
                }) : {
                    type: C(e),
                    scope: this
                }, this.$("container").trigger(e), this
            },
            addIdleState: function(t, e, n, i) {
                return this._idle.add.apply(this._idle, M.array(arguments)), this
            },
            removeIdleState: function(t) {
                return this._idle.remove.apply(this._idle, M.array(arguments)), this
            },
            enterIdleMode: function() {
                return this._idle.hide(), this
            },
            exitIdleMode: function() {
                return this._idle.showAll(), this
            },
            enterFullscreen: function(t) {
                return this._fullscreen.enter.apply(this, M.array(arguments)), this
            },
            exitFullscreen: function(t) {
                return this._fullscreen.exit.apply(this, M.array(arguments)), this
            },
            toggleFullscreen: function(t) {
                return this._fullscreen[this.isFullscreen() ? "exit" : "enter"].apply(this, M.array(arguments)), this
            },
            bindTooltip: function(t, e) {
                return this._tooltip.bind.apply(this._tooltip, M.array(arguments)), this
            },
            defineTooltip: function(t, e) {
                return this._tooltip.define.apply(this._tooltip, M.array(arguments)), this
            },
            refreshTooltip: function(t) {
                return this._tooltip.show.apply(this._tooltip, M.array(arguments)), this
            },
            openLightbox: function() {
                return this._lightbox.show.apply(this._lightbox, M.array(arguments)), this
            },
            closeLightbox: function() {
                return this._lightbox.hide.apply(this._lightbox, M.array(arguments)), this
            },
            hasVariation: function(e) {
                return t.inArray(e, this._options.variation.split(/\s+/)) > -1
            },
            getActiveImage: function() {
                var t = this._getActive();
                return t ? t.image : i
            },
            getActiveThumb: function() {
                return this._thumbnails[this._active].image || i
            },
            getMousePosition: function(t) {
                return {
                    x: t.pageX - this.$("container").offset().left,
                    y: t.pageY - this.$("container").offset().top
                }
            },
            addPan: function(e) {
                if (this._options.imageCrop !== !1) {
                    e = t(e || this.getActiveImage());
                    var n = this,
                        i = e.width() / 2,
                        o = e.height() / 2,
                        a = parseInt(e.css("left"), 10),
                        r = parseInt(e.css("top"), 10),
                        s = a || 0,
                        l = r || 0,
                        c = 0,
                        u = 0,
                        d = !1,
                        p = M.timestamp(),
                        h = 0,
                        f = 0,
                        g = function(t, n, i) {
                            if (t > 0 && (f = m.round(m.max(-1 * t, m.min(0, n))), h !== f))
                                if (h = f, 8 === y) e.parent()["scroll" + i](-1 * f);
                                else {
                                    var o = {};
                                    o[i.toLowerCase()] = f, e.css(o)
                                }
                        },
                        v = function(t) {
                            M.timestamp() - p < 50 || (d = !0, i = n.getMousePosition(t).x, o = n.getMousePosition(t).y)
                        },
                        b = function(t) {
                            d && (c = e.width() - n._stageWidth, u = e.height() - n._stageHeight, a = i / n._stageWidth * c * -1, r = o / n._stageHeight * u * -1, s += (a - s) / n._options.imagePanSmoothness, l += (r - l) / n._options.imagePanSmoothness, g(u, l, "Top"), g(c, s, "Left"))
                        };
                    return 8 === y && (e.parent().scrollTop(-1 * l).scrollLeft(-1 * s), e.css({
                        top: 0,
                        left: 0
                    })), this.$("stage").off("mousemove", v).on("mousemove", v), this.addTimer("pan" + n._id, b, 50, !0), this
                }
            },
            proxy: function(t, e) {
                return "function" != typeof t ? g : (e = e || this, function() {
                    return t.apply(e, M.array(arguments))
                })
            },
            getThemeName: function() {
                return this.theme.name
            },
            removePan: function() {
                return this.$("stage").off("mousemove"), this.clearTimer("pan" + this._id), this
            },
            addElement: function(e) {
                var n = this._dom;
                return t.each(M.array(arguments), function(t, e) {
                    n[e] = M.create("galleria-" + e)
                }), this
            },
            attachKeyboard: function(t) {
                return this._keyboard.attach.apply(this._keyboard, M.array(arguments)), this
            },
            detachKeyboard: function() {
                return this._keyboard.detach.apply(this._keyboard, M.array(arguments)), this
            },
            appendChild: function(t, e) {
                return this.$(t).append(this.get(e) || e), this
            },
            prependChild: function(t, e) {
                return this.$(t).prepend(this.get(e) || e), this
            },
            remove: function(t) {
                return this.$(M.array(arguments).join(",")).remove(), this
            },
            append: function(t) {
                var e, n;
                for (e in t)
                    if (t.hasOwnProperty(e))
                        if (t[e].constructor === Array)
                            for (n = 0; t[e][n]; n++) this.appendChild(e, t[e][n]);
                        else this.appendChild(e, t[e]);
                return this
            },
            _scaleImage: function(e, n) {
                if (e = e || this._controls.getActive()) {
                    var i, o = function(e) {
                        t(e.container).children(":first").css({
                            top: m.max(0, M.parseValue(e.image.style.top)),
                            left: m.max(0, M.parseValue(e.image.style.left)),
                            width: M.parseValue(e.image.width),
                            height: M.parseValue(e.image.height)
                        })
                    };
                    return n = t.extend({
                        width: this._stageWidth,
                        height: this._stageHeight,
                        crop: this._options.imageCrop,
                        max: this._options.maxScaleRatio,
                        min: this._options.minScaleRatio,
                        margin: this._options.imageMargin,
                        position: this._options.imagePosition,
                        iframelimit: this._options.maxVideoSize
                    }, n), this._options.layerFollow && this._options.imageCrop !== !0 ? "function" == typeof n.complete ? (i = n.complete, n.complete = function() {
                        i.call(e, e), o(e)
                    }) : n.complete = o : t(e.container).children(":first").css({
                        top: 0,
                        left: 0
                    }), e.scale(n), this
                }
            },
            updateCarousel: function() {
                return this._carousel.update(), this
            },
            resize: function(e, n) {
                "function" == typeof e && (n = e, e = i), e = t.extend({
                    width: 0,
                    height: 0
                }, e);
                var o = this,
                    a = this.$("container");
                return t.each(e, function(t, n) {
                    n || (a[t]("auto"), e[t] = o._getWH()[t])
                }), t.each(e, function(t, e) {
                    a[t](e)
                }), this.rescale(n)
            },
            rescale: function(e, o, a) {
                var r = this;
                "function" == typeof e && (a = e, e = i);
                var s = function() {
                    r._stageWidth = e || r.$("stage").width(), r._stageHeight = o || r.$("stage").height(), r._options.swipe ? (t.each(r._controls.slides, function(e, n) {
                        r._scaleImage(n), t(n.container).css("left", r._stageWidth * e)
                    }), r.$("images").css("width", r._stageWidth * r.getDataLength())) : r._scaleImage(), r._options.carousel && r.updateCarousel();
                    var i = r._controls.frames[r._controls.active];
                    i && r._controls.frames[r._controls.active].scale({
                        width: r._stageWidth,
                        height: r._stageHeight,
                        iframelimit: r._options.maxVideoSize
                    }), r.trigger(n.RESCALE), "function" == typeof a && a.call(r)
                };
                return s.call(r), this
            },
            refreshImage: function() {
                return this._scaleImage(), this._options.imagePan && this.addPan(), this
            },
            _preload: function() {
                if (this._options.preload) {
                    var t, e, i, o = this.getNext();
                    try {
                        for (e = this._options.preload; e > 0; e--) t = new n.Picture, i = this.getData(o), t.preload(this.isFullscreen() && i.big ? i.big : i.image), o = this.getNext(o)
                    } catch (a) {}
                }
            },
            show: function(i, o, a) {
                var r = this._options.swipe;
                if (r || !(this._queue.length > 3 || i === !1 || !this._options.queue && this._queue.stalled)) {
                    if (i = m.max(0, m.min(parseInt(i, 10), this.getDataLength() - 1)), o = "undefined" != typeof o ? !!o : i < this.getIndex(), a = a || !1, !a && n.History) return void n.History.set(i.toString());
                    if (this.finger && i !== this._active && (this.finger.to = -(i * this.finger.width), this.finger.index = i), this._active = i, r) {
                        var l = this.getData(i),
                            c = this;
                        if (!l) return;
                        var u = this.isFullscreen() && l.big ? l.big : l.image || l.iframe,
                            d = this._controls.slides[i],
                            p = d.isCached(u),
                            h = this._thumbnails[i],
                            f = {
                                cached: p,
                                index: i,
                                rewind: o,
                                imageTarget: d.image,
                                thumbTarget: h.image,
                                galleriaData: l
                            };
                        this.trigger(t.extend(f, {
                            type: n.LOADSTART
                        })), c.$("container").removeClass("videoplay");
                        var g = function() {
                            c._layers[i].innerHTML = c.getData().layer || "", c.trigger(t.extend(f, {
                                type: n.LOADFINISH
                            })), c._playCheck()
                        };
                        c._preload(), e.setTimeout(function() {
                            d.ready && t(d.image).attr("src") == u ? (c.trigger(t.extend(f, {
                                type: n.IMAGE
                            })), g()) : (l.iframe && !l.image && (d.isIframe = !0), d.load(u, function(e) {
                                f.imageTarget = e.image, c._scaleImage(e, g).trigger(t.extend(f, {
                                    type: n.IMAGE
                                })), g()
                            }))
                        }, 100)
                    } else s.push.call(this._queue, {
                        index: i,
                        rewind: o
                    }), this._queue.stalled || this._show();
                    return this
                }
            },
            _show: function() {
                var o = this,
                    a = this._queue[0],
                    r = this.getData(a.index);
                if (r) {
                    var l = this.isFullscreen() && r.big ? r.big : r.image || r.iframe,
                        c = this._controls.getActive(),
                        u = this._controls.getNext(),
                        d = u.isCached(l),
                        p = this._thumbnails[a.index],
                        h = function() {
                            t(u.image).trigger("mouseup")
                        };
                    o.$("container").toggleClass("iframe", !!r.isIframe).removeClass("videoplay");
                    var f = function(a, r, l, c, u) {
                        return function() {
                            var d;
                            F.active = !1, M.toggleQuality(r.image, o._options.imageQuality), o._layers[o._controls.active].innerHTML = "", t(l.container).css({
                                zIndex: 0,
                                opacity: 0
                            }).show(), t(l.container).find("iframe, .galleria-videoicon").remove(), t(o._controls.frames[o._controls.active].container).hide(), t(r.container).css({
                                zIndex: 1,
                                left: 0,
                                top: 0
                            }).show(), o._controls.swap(), o._options.imagePan && o.addPan(r.image), (a.iframe && a.image || a.link || o._options.lightbox || o._options.clicknext) && t(r.image).css({
                                cursor: "pointer"
                            }).on("mouseup", function(r) {
                                if (!("number" == typeof r.which && r.which > 1)) {
                                    if (a.iframe) {
                                        o.isPlaying() && o.pause();
                                        var s = o._controls.frames[o._controls.active],
                                            l = o._stageWidth,
                                            c = o._stageHeight;
                                        return t(s.container).css({
                                            width: l,
                                            height: c,
                                            opacity: 0
                                        }).show().animate({
                                            opacity: 1
                                        }, 200), void e.setTimeout(function() {
                                            s.load(a.iframe + (a.video ? "&autoplay=1" : ""), {
                                                width: l,
                                                height: c
                                            }, function(t) {
                                                o.$("container").addClass("videoplay"), t.scale({
                                                    width: o._stageWidth,
                                                    height: o._stageHeight,
                                                    iframelimit: a.video ? o._options.maxVideoSize : i
                                                })
                                            })
                                        }, 100)
                                    }
                                    return o._options.clicknext && !n.TOUCH ? (o._options.pauseOnInteraction && o.pause(), void o.next()) : a.link ? void(o._options.popupLinks ? d = e.open(a.link, "_blank") : e.location.href = a.link) : void(o._options.lightbox && o.openLightbox())
                                }
                            }), o._playCheck(), o.trigger({
                                type: n.IMAGE,
                                index: c.index,
                                imageTarget: r.image,
                                thumbTarget: u.image,
                                galleriaData: a
                            }), s.shift.call(o._queue), o._queue.stalled = !1, o._queue.length && o._show()
                        }
                    }(r, u, c, a, p);
                    this._options.carousel && this._options.carouselFollow && this._carousel.follow(a.index), o._preload(), M.show(u.container), u.isIframe = r.iframe && !r.image, t(o._thumbnails[a.index].container).addClass("active").siblings(".active").removeClass("active"), o.trigger({
                        type: n.LOADSTART,
                        cached: d,
                        index: a.index,
                        rewind: a.rewind,
                        imageTarget: u.image,
                        thumbTarget: p.image,
                        galleriaData: r
                    }), o._queue.stalled = !0, u.load(l, function(e) {
                        var s = t(o._layers[1 - o._controls.active]).html(r.layer || "").hide();
                        o._scaleImage(e, {
                            complete: function(e) {
                                "image" in c && M.toggleQuality(c.image, !1), M.toggleQuality(e.image, !1), o.removePan(), o.setInfo(a.index), o.setCounter(a.index), r.layer && (s.show(), (r.iframe && r.image || r.link || o._options.lightbox || o._options.clicknext) && s.css("cursor", "pointer").off("mouseup").mouseup(h)), r.video && r.image && O(e.container);
                                var l = o._options.transition;
                                if (t.each({
                                        initial: null === c.image,
                                        touch: n.TOUCH,
                                        fullscreen: o.isFullscreen()
                                    }, function(t, e) {
                                        return e && o._options[t + "Transition"] !== i ? (l = o._options[t + "Transition"], !1) : void 0
                                    }), l in F.effects == !1) f();
                                else {
                                    var u = {
                                        prev: c.container,
                                        next: e.container,
                                        rewind: a.rewind,
                                        speed: o._options.transitionSpeed || 400
                                    };
                                    F.active = !0, F.init.call(o, l, u, f)
                                }
                                o.trigger({
                                    type: n.LOADFINISH,
                                    cached: d,
                                    index: a.index,
                                    rewind: a.rewind,
                                    imageTarget: e.image,
                                    thumbTarget: o._thumbnails[a.index].image,
                                    galleriaData: o.getData(a.index)
                                })
                            }
                        })
                    })
                }
            },
            getNext: function(t) {
                return t = "number" == typeof t ? t : this.getIndex(), t === this.getDataLength() - 1 ? 0 : t + 1
            },
            getPrev: function(t) {
                return t = "number" == typeof t ? t : this.getIndex(), 0 === t ? this.getDataLength() - 1 : t - 1
            },
            next: function() {
                return this.getDataLength() > 1 && this.show(this.getNext(), !1), this
            },
            prev: function() {
                return this.getDataLength() > 1 && this.show(this.getPrev(), !0), this
            },
            get: function(t) {
                return t in this._dom ? this._dom[t] : null
            },
            getData: function(t) {
                return t in this._data ? this._data[t] : this._data[this._active]
            },
            getDataLength: function() {
                return this._data.length
            },
            getIndex: function() {
                return "number" == typeof this._active ? this._active : !1
            },
            getStageHeight: function() {
                return this._stageHeight
            },
            getStageWidth: function() {
                return this._stageWidth
            },
            getOptions: function(t) {
                return "undefined" == typeof t ? this._options : this._options[t]
            },
            setOptions: function(e, n) {
                return "object" == typeof e ? t.extend(this._options, e) : this._options[e] = n, this
            },
            play: function(t) {
                return this._playing = !0, this._playtime = t || this._playtime, this._playCheck(), this.trigger(n.PLAY), this
            },
            pause: function() {
                return this._playing = !1, this.trigger(n.PAUSE), this
            },
            playToggle: function(t) {
                return this._playing ? this.pause() : this.play(t)
            },
            isPlaying: function() {
                return this._playing
            },
            isFullscreen: function() {
                return this._fullscreen.active
            },
            _playCheck: function() {
                var t = this,
                    e = 0,
                    i = 20,
                    o = M.timestamp(),
                    a = "play" + this._id;
                if (this._playing) {
                    this.clearTimer(a);
                    var r = function() {
                        return e = M.timestamp() - o, e >= t._playtime && t._playing ? (t.clearTimer(a), void t.next()) : void(t._playing && (t.trigger({
                            type: n.PROGRESS,
                            percent: m.ceil(e / t._playtime * 100),
                            seconds: m.floor(e / 1e3),
                            milliseconds: e
                        }), t.addTimer(a, r, i)))
                    };
                    t.addTimer(a, r, i)
                }
            },
            setPlaytime: function(t) {
                return this._playtime = t, this
            },
            setIndex: function(t) {
                return this._active = t, this
            },
            setCounter: function(t) {
                if ("number" == typeof t ? t++ : "undefined" == typeof t && (t = this.getIndex() + 1), this.get("current").innerHTML = t, y) {
                    var e = this.$("counter"),
                        n = e.css("opacity");
                    1 === parseInt(n, 10) ? M.removeAlpha(e[0]) : this.$("counter").css("opacity", n)
                }
                return this
            },
            setInfo: function(e) {
                var n = this,
                    i = this.getData(e);
                return t.each(["title", "description"], function(t, e) {
                    var o = n.$("info-" + e);
                    i[e] ? o[i[e].length ? "show" : "hide"]().html(i[e]) : o.empty().hide()
                }), this
            },
            hasInfo: function(t) {
                var e, n = "title description".split(" ");
                for (e = 0; n[e]; e++)
                    if (this.getData(t)[n[e]]) return !0;
                return !1
            },
            jQuery: function(e) {
                var n = this,
                    i = [];
                t.each(e.split(","), function(e, o) {
                    o = t.trim(o), n.get(o) && i.push(o)
                });
                var o = t(n.get(i.shift()));
                return t.each(i, function(t, e) {
                    o = o.add(n.get(e))
                }), o
            },
            $: function(t) {
                return this.jQuery.apply(this, M.array(arguments))
            }
        }, t.each(_, function(t, e) {
            var i = /_/.test(e) ? e.replace(/_/g, "") : e;
            n[e.toUpperCase()] = "galleria." + i
        }), t.extend(n, {
            IE9: 9 === y,
            IE8: 8 === y,
            IE7: 7 === y,
            IE6: 6 === y,
            IE: y,
            WEBKIT: /webkit/.test(p),
            CHROME: /chrome/.test(p),
            SAFARI: /safari/.test(p) && !/chrome/.test(p),
            QUIRK: y && o.compatMode && "BackCompat" === o.compatMode,
            MAC: /mac/.test(navigator.platform.toLowerCase()),
            OPERA: !!e.opera,
            IPHONE: /iphone/.test(p),
            IPAD: /ipad/.test(p),
            ANDROID: /android/.test(p),
            TOUCH: "ontouchstart" in o
        }), n.addTheme = function(i) {
            i.name || n.raise("No theme name specified"), "object" != typeof i.defaults ? i.defaults = {} : i.defaults = T(i.defaults);
            var o, a = !1;
            return "string" == typeof i.css ? (t("link").each(function(t, e) {
                return o = new RegExp(i.css), o.test(e.href) ? (a = !0, j(i), !1) : void 0
            }), a || t(function() {
                var r = 0,
                    s = function() {
                        t("script").each(function(t, n) {
                            o = new RegExp("galleria\\." + i.name.toLowerCase() + "\\."), o.test(n.src) && (a = n.src.replace(/[^\/]*$/, "") + i.css, e.setTimeout(function() {
                                M.loadCSS(a, "galleria-theme-" + i.name, function() {
                                    j(i)
                                })
                            }, 1))
                        }), a;
                    };
                s()
            })) : j(i), i
        }, n.loadTheme = function(i, o) {
            
        }, n.get = function(t) {
            return P[t] ? P[t] : "number" != typeof t ? P : void n.raise("Gallery index " + t + " not found")
        }, n.configure = function(e, i) {
            var o = {};
            return "string" == typeof e && i ? (o[e] = i, e = o) : t.extend(o, e), n.configure.options = o, t.each(n.get(), function(t, e) {
                e.setOptions(o)
            }), n
        }, n.configure.options = {}, n.on = function(e, i) {
            if (e) {
                i = i || g;
                var o = e + i.toString().replace(/\s/g, "") + M.timestamp();
                return t.each(n.get(), function(t, n) {
                    n._binds.push(o), n.bind(e, i)
                }), n.on.binds.push({
                    type: e,
                    callback: i,
                    hash: o
                }), n
            }
        }, n.on.binds = [], n.run = function(e, i) {
            return t.isFunction(i) && (i = {
                extend: i
            }), t(e || "#galleria").galleria(i), n
        }, n.addTransition = function(t, e) {
            return F.effects[t] = e, n
        }, n.utils = M, n.log = function() {
            var n = M.array(arguments);
            if (!("console" in e && "log" in e.console)) return e.alert(n.join("<br>"));
            try {
                return e.console.log.apply(e.console, n)
            } catch (i) {
                t.each(n, function() {
                    e.console.log(this)
                })
            }
        }, n.ready = function(e) {
            return "function" != typeof e ? n : (t.each(I, function(t, n) {
                e.call(n, n._options)
            }), n.ready.callbacks.push(e), n)
        }, n.ready.callbacks = [], n.raise = function(e, n) {
            var i = n ? "Fatal error" : "Error",
                o = {
                    color: "#fff",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1e5
                },
                a = function(e) {
                    var a = '<div style="padding:4px;margin:0 0 2px;background:#' + (n ? "811" : "222") + ';">' + (n ? "<strong>" + i + ": </strong>" : "") + e + "</div>";
                    t.each(P, function() {
                        var t = this.$("errors"),
                            e = this.$("target");
                        t.length || (e.css("position", "relative"), t = this.addElement("errors").appendChild("target", "errors").$("errors").css(o)), t.append(a)
                    }), P.length || t("<div>").css(t.extend(o, {
                        position: "fixed"
                    })).append(a).appendTo(b().body)
                };
            if (c) {
                if (a(e), n) throw new Error(i + ": " + e)
            } else if (n) {
                if (L) return;
                L = !0, n = !1, a("Gallery could not load.")
            }
        }, n.version = l, n.getLoadedThemes = function() {
            return t.map(D, function(t) {
                return t.name
            })
        }, n.requires = function(t, e) {
            return e = e || "You need to upgrade Galleria to version " + t + " to use one or more components.", n.version < t && n.raise(e, !0), n
        }, n.Picture = function(e) {
            this.id = e || null, this.image = null,
                this.container = M.create("galleria-image"), t(this.container).css({
                    overflow: "hidden",
                    position: "relative"
                }), this.original = {
                    width: 0,
                    height: 0
                }, this.ready = !1, this.isIframe = !1
        }, n.Picture.prototype = {
            cache: {},
            show: function() {
                M.show(this.image)
            },
            hide: function() {
                M.moveOut(this.image)
            },
            clear: function() {
                this.image = null
            },
            isCached: function(t) {
                return !!this.cache[t]
            },
            preload: function(e) {
                t(new Image).load(function(t, e) {
                    return function() {
                        e[t] = t
                    }
                }(e, this.cache)).attr("src", e)
            },
            load: function(i, o, a) {
                if ("function" == typeof o && (a = o, o = null), this.isIframe) {
                    var r = "if" + (new Date).getTime(),
                        s = this.image = t("<iframe>", {
                            src: i,
                            frameborder: 0,
                            id: r,
                            allowfullscreen: !0,
                            css: {
                                visibility: "hidden"
                            }
                        })[0];
                    return o && t(s).css(o), t(this.container).find("iframe,img").remove(), this.container.appendChild(this.image), t("#" + r).load(function(n, i) {
                        return function() {
                            e.setTimeout(function() {
                                t(n.image).css("visibility", "visible"), "function" == typeof i && i.call(n, n)
                            }, 10)
                        }
                    }(this, a)), this.container
                }
                this.image = new Image, n.IE8 && t(this.image).css("filter", "inherit"), n.IE || n.CHROME || n.SAFARI || t(this.image).css("image-rendering", "optimizequality");
                var l = !1,
                    c = !1,
                    u = t(this.container),
                    p = t(this.image),
                    h = function() {
                        l ? d ? t(this).attr("src", d) : n.raise("Image not found: " + i) : (l = !0, e.setTimeout(function(t, e) {
                            return function() {
                                t.attr("src", e + (e.indexOf("?") > -1 ? "&" : "?") + M.timestamp())
                            }
                        }(t(this), i), 50))
                    },
                    f = function(i, a, r) {
                        return function() {
                            var s = function() {
                                t(this).off("load"), i.original = o || {
                                    height: this.height,
                                    width: this.width
                                }, n.HAS3D && (this.style.MozTransform = this.style.webkitTransform = "translate3d(0,0,0)"), u.append(this), i.cache[r] = r, "function" == typeof a && e.setTimeout(function() {
                                    a.call(i, i)
                                }, 1)
                            };
                            this.width && this.height ? s.call(this) : ! function(e) {
                                M.wait({
                                    until: function() {
                                        return e.width && e.height
                                    },
                                    success: function() {
                                        s.call(e)
                                    },
                                    error: function() {
                                        c ? n.raise("Could not extract width/height from image: " + e.src + ". Traced measures: width:" + e.width + "px, height: " + e.height + "px.") : (t(new Image).load(f).attr("src", e.src), c = !0)
                                    },
                                    timeout: 100
                                })
                            }(this)
                        }
                    }(this, a, i);
                return u.find("iframe,img").remove(), p.css("display", "block"), M.hide(this.image), t.each("minWidth minHeight maxWidth maxHeight".split(" "), function(t, e) {
                    p.css(e, /min/.test(e) ? "0" : "none")
                }), p.load(f).on("error", h).attr("src", i), this.container
            },
            scale: function(e) {
                var o = this;
                if (e = t.extend({
                        width: 0,
                        height: 0,
                        min: i,
                        max: i,
                        margin: 0,
                        complete: g,
                        position: "center",
                        crop: !1,
                        canvas: !1,
                        iframelimit: i
                    }, e), this.isIframe) {
                    var a, r, s = e.width,
                        l = e.height;
                    if (e.iframelimit) {
                        var c = m.min(e.iframelimit / s, e.iframelimit / l);
                        1 > c ? (a = s * c, r = l * c, t(this.image).css({
                            top: l / 2 - r / 2,
                            left: s / 2 - a / 2,
                            position: "absolute"
                        })) : t(this.image).css({
                            top: 0,
                            left: 0
                        })
                    }
                    t(this.image).width(a || s).height(r || l).removeAttr("width").removeAttr("height"), t(this.container).width(s).height(l), e.complete.call(o, o);
                    try {
                        this.image.contentWindow && t(this.image.contentWindow).trigger("resize")
                    } catch (u) {}
                    return this.container
                }
                if (!this.image) return this.container;
                var d, p, h, f = t(o.container);
                return M.wait({
                    until: function() {
                        return d = e.width || f.width() || M.parseValue(f.css("width")), p = e.height || f.height() || M.parseValue(f.css("height")), d && p
                    },
                    success: function() {
                        var n = (d - 2 * e.margin) / o.original.width,
                            i = (p - 2 * e.margin) / o.original.height,
                            a = m.min(n, i),
                            r = m.max(n, i),
                            s = {
                                "true": r,
                                width: n,
                                height: i,
                                "false": a,
                                landscape: o.original.width > o.original.height ? r : a,
                                portrait: o.original.width < o.original.height ? r : a
                            },
                            l = s[e.crop.toString()],
                            c = "";
                        e.max && (l = m.min(e.max, l)), e.min && (l = m.max(e.min, l)), t.each(["width", "height"], function(e, n) {
                            t(o.image)[n](o[n] = o.image[n] = m.round(o.original[n] * l))
                        }), t(o.container).width(d).height(p), e.canvas && N && (N.elem.width = o.width, N.elem.height = o.height, c = o.image.src + ":" + o.width + "x" + o.height, o.image.src = N.cache[c] || function(t) {
                            N.context.drawImage(o.image, 0, 0, o.original.width * l, o.original.height * l);
                            try {
                                return h = N.elem.toDataURL(), N.length += h.length, N.cache[t] = h, h
                            } catch (e) {
                                return o.image.src
                            }
                        }(c));
                        var u = {},
                            f = {},
                            g = function(e, n, i) {
                                var a = 0;
                                if (/\%/.test(e)) {
                                    var r = parseInt(e, 10) / 100,
                                        s = o.image[n] || t(o.image)[n]();
                                    a = m.ceil(-1 * s * r + i * r)
                                } else a = M.parseValue(e);
                                return a
                            },
                            v = {
                                top: {
                                    top: 0
                                },
                                left: {
                                    left: 0
                                },
                                right: {
                                    left: "100%"
                                },
                                bottom: {
                                    top: "100%"
                                }
                            };
                        t.each(e.position.toLowerCase().split(" "), function(t, e) {
                            "center" === e && (e = "50%"), u[t ? "top" : "left"] = e
                        }), t.each(u, function(e, n) {
                            v.hasOwnProperty(n) && t.extend(f, v[n])
                        }), u = u.top ? t.extend(u, f) : f, u = t.extend({
                            top: "50%",
                            left: "50%"
                        }, u), t(o.image).css({
                            position: "absolute",
                            top: g(u.top, "height", p),
                            left: g(u.left, "width", d)
                        }), o.show(), o.ready = !0, e.complete.call(o, o)
                    },
                    error: function() {
                        n.raise("Could not scale image: " + o.image.src)
                    },
                    timeout: 1e3
                }), this
            }
        }, t.extend(t.easing, {
            galleria: function(t, e, n, i, o) {
                return (e /= o / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
            },
            galleriaIn: function(t, e, n, i, o) {
                return i * (e /= o) * e + n
            },
            galleriaOut: function(t, e, n, i, o) {
                return -i * (e /= o) * (e - 2) + n
            }
        }), n.Finger = function() {
            var i = (m.abs, n.HAS3D = function() {
                    var e, n, i = o.createElement("p"),
                        a = ["webkit", "O", "ms", "Moz", ""],
                        r = 0,
                        s = "transform";
                    for (b().html.insertBefore(i, null); a[r]; r++) n = a[r] ? a[r] + "Transform" : s, void 0 !== i.style[n] && (i.style[n] = "translate3d(1px,1px,1px)", e = t(i).css(a[r] ? "-" + a[r].toLowerCase() + "-" + s : s));
                    return b().html.removeChild(i), void 0 !== e && e.length > 0 && "none" !== e
                }()),
                r = function() {
                    var t = "RequestAnimationFrame";
                    return e.requestAnimationFrame || e["webkit" + t] || e["moz" + t] || e["o" + t] || e["ms" + t] || function(t) {
                        e.setTimeout(t, 1e3 / 60)
                    }
                }(),
                s = function(n, o) {
                    if (this.config = {
                            start: 0,
                            duration: 500,
                            onchange: function() {},
                            oncomplete: function() {},
                            easing: function(t, e, n, i, o) {
                                return -i * ((e = e / o - 1) * e * e * e - 1) + n
                            }
                        }, this.easeout = function(t, e, n, i, o) {
                            return i * ((e = e / o - 1) * e * e * e * e + 1) + n
                        }, n.children.length) {
                        var a = this;
                        t.extend(this.config, o), this.elem = n, this.child = n.children[0], this.to = this.pos = 0, this.touching = !1, this.start = {}, this.index = this.config.start, this.anim = 0, this.easing = this.config.easing, i || (this.child.style.position = "absolute", this.elem.style.position = "relative"), t.each(["ontouchstart", "ontouchmove", "ontouchend", "setup"], function(t, e) {
                            a[e] = function(t) {
                                return function() {
                                    t.apply(a, arguments)
                                }
                            }(a[e])
                        }), this.setX = function() {
                            var t = a.child.style;
                            return i ? void(t.MozTransform = t.webkitTransform = t.transform = "translate3d(" + a.pos + "px,0,0)") : void(t.left = a.pos + "px")
                        }, t(n).on("touchstart", this.ontouchstart), t(e).on("resize", this.setup), t(e).on("orientationchange", this.setup), this.setup(), ! function s() {
                            r(s), a.loop.call(a)
                        }()
                    }
                };
            return s.prototype = {
                constructor: s,
                setup: function() {
                    this.width = t(this.elem).width(), this.length = m.ceil(t(this.child).width() / this.width), 0 !== this.index && (this.index = m.max(0, m.min(this.index, this.length - 1)), this.pos = this.to = -this.width * this.index)
                },
                setPosition: function(t) {
                    this.pos = t, this.to = t
                },
                ontouchstart: function(t) {
                    var e = t.originalEvent.touches;
                    this.start = {
                        pageX: e[0].pageX,
                        pageY: e[0].pageY,
                        time: +new Date
                    }, this.isScrolling = null, this.touching = !0, this.deltaX = 0, a.on("touchmove", this.ontouchmove), a.on("touchend", this.ontouchend)
                },
                ontouchmove: function(t) {
                    var e = t.originalEvent.touches;
                    e && e.length > 1 || t.scale && 1 !== t.scale || (this.deltaX = e[0].pageX - this.start.pageX, null === this.isScrolling && (this.isScrolling = !!(this.isScrolling || m.abs(this.deltaX) < m.abs(e[0].pageY - this.start.pageY))), this.isScrolling || (t.preventDefault(), this.deltaX /= !this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0 ? m.abs(this.deltaX) / this.width + 1.8 : 1, this.to = this.deltaX - this.index * this.width), t.stopPropagation())
                },
                ontouchend: function(t) {
                    this.touching = !1;
                    var e = +new Date - this.start.time < 250 && m.abs(this.deltaX) > 40 || m.abs(this.deltaX) > this.width / 2,
                        n = !this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0;
                    this.isScrolling || this.show(this.index + (e && !n ? this.deltaX < 0 ? 1 : -1 : 0)), a.off("touchmove", this.ontouchmove), a.off("touchend", this.ontouchend)
                },
                show: function(t) {
                    t != this.index ? this.config.onchange.call(this, t) : this.to = -(t * this.width)
                },
                moveTo: function(t) {
                    t != this.index && (this.pos = this.to = -(t * this.width), this.index = t)
                },
                loop: function() {
                    var t = this.to - this.pos,
                        e = 1;
                    if (this.width && t && (e = m.max(.5, m.min(1.5, m.abs(t / this.width)))), this.touching || m.abs(t) <= 1) this.pos = this.to, t = 0, this.anim && !this.touching && this.config.oncomplete(this.index), this.anim = 0, this.easing = this.config.easing;
                    else {
                        this.anim || (this.anim = {
                            start: this.pos,
                            time: +new Date,
                            distance: t,
                            factor: e,
                            destination: this.to
                        });
                        var n = +new Date - this.anim.time,
                            i = this.config.duration * this.anim.factor;
                        if (n > i || this.anim.destination != this.to) return this.anim = 0, void(this.easing = this.easeout);
                        this.pos = this.easing(null, n, this.anim.start, this.anim.distance, i)
                    }
                    this.setX()
                }
            }, s
        }(), t.fn.galleria = function(e) {
            var i = this.selector;
            return t(this).length ? this.each(function() {
                t.data(this, "galleria") && (t.data(this, "galleria").destroy(), t(this).find("*").hide()), t.data(this, "galleria", (new n).init(this, e))
            }) : (t(function() {
                t(i).length ? t(i).galleria(e) : n.utils.wait({
                    until: function() {
                        return t(i).length
                    },
                    success: function() {
                        t(i).galleria(e)
                    },
                    error: function() {
                        n.raise('Init failed: Galleria could not find the element "' + i + '".')
                    },
                    timeout: 5e3
                })
            }), this)
        }, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = n : (e.Galleria = n, "function" == typeof define && define.amd && define("galleria", ["jquery"], function() {
            return n
        }))
    }(jQuery, this), function(t) {
        Galleria.addTheme({
            name: "classic",
            author: "Galleria",
            css: "assets/css/galleria.classic.css",
            defaults: {
                transition: "slide",
                thumbCrop: "height",
                _toggleInfo: !0
            },
            init: function(e) {
                Galleria.requires(1.4, "This version of Classic theme requires Galleria 1.4 or later"), this.addElement("info-link", "info-close"), this.append({
                    info: ["info-link", "info-close"]
                });
                var n = this.$("info-link,info-close,info-text"),
                    i = Galleria.TOUCH;
                this.$("loader,counter").show().css("opacity", .4), i || (this.addIdleState(this.get("image-nav-left"), {
                    left: -50
                }), this.addIdleState(this.get("image-nav-right"), {
                    right: -50
                }), this.addIdleState(this.get("counter"), {
                    opacity: 0
                })), e._toggleInfo === !0 ? n.bind("click:fast", function() {
                    n.toggle()
                }) : (n.show(), this.$("info-link, info-close").hide()), this.bind("thumbnail", function(e) {
                    i ? t(e.thumbTarget).css("opacity", this.getIndex() ? 1 : .6).bind("click:fast", function() {
                        t(this).css("opacity", 1).parent().siblings().children().css("opacity", .6)
                    }) : (t(e.thumbTarget).css("opacity", .6).parent().hover(function() {
                        t(this).not(".active").children().stop().fadeTo(100, 1)
                    }, function() {
                        t(this).not(".active").children().stop().fadeTo(400, .6)
                    }), e.index === this.getIndex() && t(e.thumbTarget).css("opacity", 1))
                });
                var o = function(e) {
                    t(e.thumbTarget).css("opacity", 1).parent().siblings().children().css("opacity", .6)
                };
                this.bind("loadstart", function(t) {
                    t.cached || this.$("loader").show().fadeTo(200, .4), window.setTimeout(function() {
                        o(t)
                    }, i ? 300 : 0), this.$("info").toggle(this.hasInfo())
                }), this.bind("loadfinish", function(t) {
                    this.$("loader").fadeOut(200)
                })
            }
        })
    }(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.2.0", i.prototype.close = function(e) {
        function n() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var i = t(this),
            o = i.attr("data-target");
        o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(o);
        e && e.preventDefault(), a.length || (a = i.hasClass("alert") ? i : i.parent()), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.button"),
                a = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, a)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            a = i.data();
        e += "Text", null == a.resetText && i.data("resetText", i[o]()), i[o](null == a[e] ? this.options[e] : a[e]), setTimeout(t.proxy(function() {
            "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), n.preventDefault()
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.carousel"),
                a = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : a.slide;
            o || i.data("bs.carousel", o = new n(this, a)), "number" == typeof e ? o.to(e) : r ? o[r]() : a.interval && o.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, n.prototype.keydown = function(t) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.to = function(e) {
        var n = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            n.to(e)
        }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(e, n) {
        var i = this.$element.find(".item.active"),
            o = n || i[e](),
            a = this.interval,
            r = "next" == e ? "left" : "right",
            s = "next" == e ? "first" : "last",
            l = this;
        if (!o.length) {
            if (!this.options.wrap) return;
            o = this.$element.find(".item")[s]()
        }
        if (o.hasClass("active")) return this.sliding = !1;
        var c = o[0],
            u = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: r
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(o)]);
                d && d.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, i.addClass(r), o.addClass(r), i.one("bsTransitionEnd", function() {
                o.removeClass([e, r].join(" ")).addClass("active"), i.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(n) {
        var i, o = t(this),
            a = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (a.hasClass("carousel")) {
            var r = t.extend({}, a.data(), o.data()),
                s = o.attr("data-slide-to");
            s && (r.interval = !1), e.call(a, r), s && a.data("bs.carousel").to(s), n.preventDefault()
        }
    }), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.collapse"),
                a = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && a.toggle && "show" == e && (e = !e), o || i.data("bs.collapse", o = new n(this, a)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var n = t.Event("show.bs.collapse");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var i = this.$parent && this.$parent.find("> .panel > .in");
                if (i && i.length) {
                    var o = i.data("bs.collapse");
                    if (o && o.transitioning) return;
                    e.call(i, "hide"), o || i.data("bs.collapse", null)
                }
                var a = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[a](0), this.transitioning = 1;
                var r = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return r.call(this);
                var s = t.camelCase(["scroll", a].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(350)[a](this.$element[0][s])
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var i = t.fn.collapse;
    t.fn.collapse = e, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = i, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var i, o = t(this),
            a = o.attr("data-target") || n.preventDefault() || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
            r = t(a),
            s = r.data("bs.collapse"),
            l = s ? "toggle" : o.data(),
            c = o.attr("data-parent"),
            u = c && t(c);
        s && s.transitioning || (u && u.find('[data-toggle="collapse"][data-parent="' + c + '"]').not(o).addClass("collapsed"), o[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), e.call(r, l)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        e && 3 === e.which || (t(o).remove(), t(a).each(function() {
            var i = n(t(this)),
                o = {
                    relatedTarget: this
                };
            i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", o)), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", o))
        }))
    }

    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new r(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        a = '[data-toggle="dropdown"]',
        r = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    r.VERSION = "3.2.0", r.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var a = n(o),
                r = a.hasClass("open");
            if (e(), !r) {
                "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var s = {
                    relatedTarget: this
                };
                if (a.trigger(i = t.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                o.trigger("focus"), a.toggleClass("open").trigger("shown.bs.dropdown", s)
            }
            return !1
        }
    }, r.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var i = t(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = n(i),
                    r = o.hasClass("open");
                if (!r || r && 27 == e.keyCode) return 27 == e.which && o.find(a).trigger("focus"), i.trigger("click");
                var s = " li:not(.divider):visible a",
                    l = o.find('[role="menu"]' + s + ', [role="listbox"]' + s);
                if (l.length) {
                    var c = l.index(l.filter(":focus"));
                    38 == e.keyCode && c > 0 && c--, 40 == e.keyCode && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = s, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", a, r.prototype.toggle).on("keydown.bs.dropdown.data-api", a + ', [role="menu"], [role="listbox"]', r.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var o = t(this),
                a = o.data("bs.modal"),
                r = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            a || o.data("bs.modal", a = new n(this, r)), "string" == typeof e ? a[e](i) : r.show && a.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var n = this,
            i = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var i = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            i ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var n = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && i;
            if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(150) : a()
        } else e && e()
    }, n.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            o = i.attr("href"),
            a = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            r = a.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, a.data(), i.data());
        i.is("a") && n.preventDefault(), a.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || a.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(a, r, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tooltip"),
                a = "object" == typeof e && e;
            (o || "destroy" != e) && (o || i.data("bs.tooltip", o = new n(this, a)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, i) {
        this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var o = this.options.trigger.split(" "), a = o.length; a--;) {
            var r = o[a];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var s = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var i = this,
                o = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                s = /\s?auto?\s?/i,
                l = s.test(r);
            l && (r = r.replace(s, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            var c = this.getPosition(),
                u = o[0].offsetWidth,
                d = o[0].offsetHeight;
            if (l) {
                var p = r,
                    h = this.$element.parent(),
                    f = this.getPosition(h);
                r = "bottom" == r && c.top + c.height + d - f.scroll > f.height ? "top" : "top" == r && c.top - f.scroll - d < 0 ? "bottom" : "right" == r && c.right + u > f.width ? "left" : "left" == r && c.left - u < f.left ? "right" : r, o.removeClass(p).addClass(r)
            }
            var m = this.getCalculatedOffset(r, c, u, d);
            this.applyPlacement(m, r);
            var g = function() {
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            a = i[0].offsetHeight,
            r = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(s) && (s = 0), e.top = e.top + r, e.left = e.left + s, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != a && (e.top = e.top + a - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var d = u.left ? 2 * u.left - o + l : 2 * u.top - a + c,
            p = u.left ? "left" : "top",
            h = u.left ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(d, i[0][h], p)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function() {
        function e() {
            "in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            i = this.tip(),
            o = t.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (i.removeClass("in"),
            t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName;
        return t.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
            width: i ? t(window).width() : e.outerWidth(),
            height: i ? t(window).height() : e.outerHeight()
        }, i ? {
            top: 0,
            left: 0
        } : e.offset())
    }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var a = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - a - r.scroll,
                l = e.top + a - r.scroll + i;
            s < r.top ? o.top = r.top - s : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var c = e.left - a,
                u = e.left + a + n;
            c < r.left ? o.left = r.left - c : u > r.width && (o.left = r.left + r.width - u)
        }
        return o
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.popover"),
                a = "object" == typeof e && e;
            (o || "destroy" != e) && (o || i.data("bs.popover", o = new n(this, a)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.2.0", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, n.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(n, i) {
        var o = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(t(n).is("body") ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.scrollspy"),
                a = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, a)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.2.0", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = "offset",
            n = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var i = this;
        this.$body.find(this.selector).map(function() {
            var i = t(this),
                o = i.data("target") || i.attr("href"),
                a = /^#./.test(o) && t(o);
            return a && a.length && a.is(":visible") && [
                [a[e]().top + n, o]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            a = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return r != (t = a[a.length - 1]) && this.activate(t);
        if (r && e <= o[0]) return r != (t = a[0]) && this.activate(t);
        for (t = o.length; t--;) r != a[t] && e >= o[t] && (!o[t + 1] || e <= o[t + 1]) && this.activate(a[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.2.0", n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a")[0],
                a = t.Event("show.bs.tab", {
                    relatedTarget: o
                });
            if (e.trigger(a), !a.isDefaultPrevented()) {
                var r = t(i);
                this.activate(e.closest("li"), n), this.activate(r, r.parent(), function() {
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, n, i) {
        function o() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
        }
        var a = n.find("> .active"),
            r = i && t.support.transition && a.hasClass("fade");
        r ? a.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o(), a.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(n) {
        n.preventDefault(), e.call(t(this), "show")
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.affix"),
                a = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, a)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.2.0", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = t(document).height(),
                i = this.$target.scrollTop(),
                o = this.$element.offset(),
                a = this.options.offset,
                r = a.top,
                s = a.bottom;
            "object" != typeof a && (s = r = a), "function" == typeof r && (r = a.top(this.$element)), "function" == typeof s && (s = a.bottom(this.$element));
            var l = null != this.unpin && i + this.unpin <= o.top ? !1 : null != s && o.top + this.$element.height() >= e - s ? "bottom" : null != r && r >= i ? "top" : !1;
            if (this.affixed !== l) {
                null != this.unpin && this.$element.css("top", "");
                var c = "affix" + (l ? "-" + l : ""),
                    u = t.Event(c + ".bs.affix");
                this.$element.trigger(u), u.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(c).trigger(t.Event(c.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: e - this.$element.height() - s
                }))
            }
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), fotoramaVersion = "4.6.4",
    function(t, e, n, i, o) {
        "use strict";

        function a(t) {
            var e = "bez_" + i.makeArray(arguments).join("_").replace(".", "p");
            if ("function" != typeof i.easing[e]) {
                var n = function(t, e) {
                    var n = [null, null],
                        i = [null, null],
                        o = [null, null],
                        a = function(a, r) {
                            return o[r] = 3 * t[r], i[r] = 3 * (e[r] - t[r]) - o[r], n[r] = 1 - o[r] - i[r], a * (o[r] + a * (i[r] + a * n[r]))
                        },
                        r = function(t) {
                            return o[0] + t * (2 * i[0] + 3 * n[0] * t)
                        },
                        s = function(t) {
                            for (var e, n = t, i = 0; ++i < 14 && (e = a(n, 0) - t, !(Math.abs(e) < .001));) n -= e / r(n);
                            return n
                        };
                    return function(t) {
                        return a(s(t), 1)
                    }
                };
                i.easing[e] = function(e, i, o, a, r) {
                    return a * n([t[0], t[1]], [t[2], t[3]])(i / r) + o
                }
            }
            return e
        }

        function r() {}

        function s(t, e, n) {
            return Math.max(isNaN(e) ? -1 / 0 : e, Math.min(isNaN(n) ? 1 / 0 : n, t))
        }

        function l(t) {
            return t.match(/ma/) && t.match(/-?\d+(?!d)/g)[t.match(/3d/) ? 12 : 4]
        }

        function c(t) {
            return De ? +l(t.css("transform")) : +t.css("left").replace("px", "")
        }

        function u(t) {
            var e = {};
            return De ? e.transform = "translate3d(" + t + "px,0,0)" : e.left = t, e
        }

        function d(t) {
            return {
                "transition-duration": t + "ms"
            }
        }

        function p(t, e) {
            return isNaN(t) ? e : t
        }

        function h(t, e) {
            return p(+String(t).replace(e || "px", ""))
        }

        function f(t) {
            return /%$/.test(t) ? h(t, "%") : o
        }

        function m(t, e) {
            return p(f(t) / 100 * e, h(t))
        }

        function g(t) {
            return (!isNaN(h(t)) || !isNaN(h(t, "%"))) && t
        }

        function v(t, e, n, i) {
            return (t - (i || 0)) * (e + (n || 0))
        }

        function y(t, e, n, i) {
            return -Math.round(t / (e + (n || 0)) - (i || 0))
        }

        function b(t) {
            var e = t.data();
            if (!e.tEnd) {
                var n = t[0],
                    i = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        msTransition: "MSTransitionEnd",
                        transition: "transitionend"
                    };
                U(n, i[we.prefixed("transition")], function(t) {
                    e.tProp && t.propertyName.match(e.tProp) && e.onEndFn()
                }), e.tEnd = !0
            }
        }

        function w(t, e, n, i) {
            var o, a = t.data();
            a && (a.onEndFn = function() {
                o || (o = !0, clearTimeout(a.tT), n())
            }, a.tProp = e, clearTimeout(a.tT), a.tT = setTimeout(function() {
                a.onEndFn()
            }, 1.5 * i), b(t))
        }

        function x(t, e) {
            if (t.length) {
                var n = t.data();
                De ? (t.css(d(0)), n.onEndFn = r, clearTimeout(n.tT)) : t.stop();
                var i = _(e, function() {
                    return c(t)
                });
                return t.css(u(i)), i
            }
        }

        function _() {
            for (var t, e = 0, n = arguments.length; n > e && (t = e ? arguments[e]() : arguments[e], "number" != typeof t); e++);
            return t
        }

        function T(t, e) {
            return Math.round(t + (e - t) / 1.5)
        }

        function C() {
            return C.p = C.p || ("https:" === n.protocol ? "https://" : "http://"), C.p
        }

        function k(t) {
            var n = e.createElement("a");
            return n.href = t, n
        }

        function E(t, e) {
            if ("string" != typeof t) return t;
            t = k(t);
            var n, i;
            if (t.host.match(/youtube\.com/) && t.search) {
                if (n = t.search.split("v=")[1]) {
                    var o = n.indexOf("&"); - 1 !== o && (n = n.substring(0, o)), i = "youtube"
                }
            } else t.host.match(/youtube\.com|youtu\.be/) ? (n = t.pathname.replace(/^\/(embed\/|v\/)?/, "").replace(/\/.*/, ""), i = "youtube") : t.host.match(/vimeo\.com/) && (i = "vimeo", n = t.pathname.replace(/^\/(video\/)?/, "").replace(/\/.*/, ""));
            return n && i || !e || (n = t.href, i = "custom"), n ? {
                id: n,
                type: i,
                s: t.search.replace(/^\?/, ""),
                p: C()
            } : !1
        }

        function S(t, e, n) {
            var o, a, r = t.video;
            return "youtube" === r.type ? (a = C() + "img.youtube.com/vi/" + r.id + "/default.jpg", o = a.replace(/\/default.jpg$/, "/hqdefault.jpg"), t.thumbsReady = !0) : "vimeo" === r.type ? i.ajax({
                url: C() + "vimeo.com/api/v2/video/" + r.id + ".json",
                dataType: "jsonp",
                success: function(i) {
                    t.thumbsReady = !0, $(e, {
                        img: i[0].thumbnail_large,
                        thumb: i[0].thumbnail_small
                    }, t.i, n)
                }
            }) : t.thumbsReady = !0, {
                img: o,
                thumb: a
            }
        }

        function $(t, e, n, o) {
            for (var a = 0, r = t.length; r > a; a++) {
                var s = t[a];
                if (s.i === n && s.thumbsReady) {
                    var l = {
                        videoReady: !0
                    };
                    l[Qe] = l[Ye] = l[Ke] = !1, o.splice(a, 1, i.extend({}, s, l, e));
                    break
                }
            }
        }

        function I(t) {
            function e(t, e, o) {
                var a = t.children("img").eq(0),
                    r = t.attr("href"),
                    s = t.attr("src"),
                    l = a.attr("src"),
                    c = e.video,
                    u = o ? E(r, c === !0) : !1;
                u ? r = !1 : u = c, n(t, a, i.extend(e, {
                    video: u,
                    img: e.img || r || s || l,
                    thumb: e.thumb || l || s || r
                }))
            }

            function n(t, e, n) {
                var o = n.thumb && n.img !== n.thumb,
                    a = h(n.width || t.attr("width")),
                    r = h(n.height || t.attr("height"));
                i.extend(n, {
                    width: a,
                    height: r,
                    thumbratio: R(n.thumbratio || h(n.thumbwidth || e && e.attr("width") || o || a) / h(n.thumbheight || e && e.attr("height") || o || r))
                })
            }
            var o = [];
            return t.children().each(function() {
                var t = i(this),
                    a = B(i.extend(t.data(), {
                        id: t.attr("id")
                    }));
                if (t.is("a, img")) e(t, a, !0);
                else {
                    if (t.is(":empty")) return;
                    n(t, null, i.extend(a, {
                        html: this,
                        _html: t.html()
                    }))
                }
                o.push(a)
            }), o
        }

        function P(t) {
            return 0 === t.offsetWidth && 0 === t.offsetHeight
        }

        function L(t) {
            return !i.contains(e.documentElement, t)
        }

        function N(t, e, n, i) {
            return N.i || (N.i = 1, N.ii = [!0]), i = i || N.i, "undefined" == typeof N.ii[i] && (N.ii[i] = !0), t() ? e() : N.ii[i] && setTimeout(function() {
                N.ii[i] && N(t, e, n, i)
            }, n || 100), N.i++
        }

        function A(t) {
            n.replace(n.protocol + "//" + n.host + n.pathname.replace(/^\/?/, "/") + n.search + "#" + t)
        }

        function D(t, e, n, i) {
            var o = t.data(),
                a = o.measures;
            if (a && (!o.l || o.l.W !== a.width || o.l.H !== a.height || o.l.r !== a.ratio || o.l.w !== e.w || o.l.h !== e.h || o.l.m !== n || o.l.p !== i)) {
                var r = a.width,
                    l = a.height,
                    c = e.w / e.h,
                    u = a.ratio >= c,
                    d = "scaledown" === n,
                    p = "contain" === n,
                    h = "cover" === n,
                    f = Z(i);
                u && (d || p) || !u && h ? (r = s(e.w, 0, d ? r : 1 / 0), l = r / a.ratio) : (u && h || !u && (d || p)) && (l = s(e.h, 0, d ? l : 1 / 0), r = l * a.ratio), t.css({
                    width: r,
                    height: l,
                    left: m(f.x, e.w - r),
                    top: m(f.y, e.h - l)
                }), o.l = {
                    W: a.width,
                    H: a.height,
                    r: a.ratio,
                    w: e.w,
                    h: e.h,
                    m: n,
                    p: i
                }
            }
            return !0
        }

        function j(t, e) {
            var n = t[0];
            n.styleSheet ? n.styleSheet.cssText = e : t.html(e)
        }

        function M(t, e, n) {
            return e === n ? !1 : e >= t ? "left" : t >= n ? "right" : "left right"
        }

        function O(t, e, n, i) {
            if (!n) return !1;
            if (!isNaN(t)) return t - (i ? 0 : 1);
            for (var o, a = 0, r = e.length; r > a; a++) {
                var s = e[a];
                if (s.id === t) {
                    o = a;
                    break
                }
            }
            return o
        }

        function F(t, e, n) {
            n = n || {}, t.each(function() {
                var t, o = i(this),
                    a = o.data();
                a.clickOn || (a.clickOn = !0, i.extend(nt(o, {
                    onStart: function(e) {
                        t = e, (n.onStart || r).call(this, e)
                    },
                    onMove: n.onMove || r,
                    onTouchEnd: n.onTouchEnd || r,
                    onEnd: function(n) {
                        n.moved || e.call(this, t)
                    }
                }), {
                    noMove: !0
                }))
            })
        }

        function H(t, e) {
            return '<div class="' + t + '">' + (e || "") + "</div>"
        }

        function z(t) {
            for (var e = t.length; e;) {
                var n = Math.floor(Math.random() * e--),
                    i = t[e];
                t[e] = t[n], t[n] = i
            }
            return t
        }

        function q(t) {
            return "[object Array]" == Object.prototype.toString.call(t) && i.map(t, function(t) {
                return i.extend({}, t)
            })
        }

        function W(t, e, n) {
            t.scrollLeft(e || 0).scrollTop(n || 0)
        }

        function B(t) {
            if (t) {
                var e = {};
                return i.each(t, function(t, n) {
                    e[t.toLowerCase()] = n
                }), e
            }
        }

        function R(t) {
            if (t) {
                var e = +t;
                return isNaN(e) ? (e = t.split("/"), +e[0] / +e[1] || o) : e
            }
        }

        function U(t, e, n, i) {
            e && (t.addEventListener ? t.addEventListener(e, n, !!i) : t.attachEvent("on" + e, n))
        }

        function V(t) {
            return !!t.getAttribute("disabled")
        }

        function X(t) {
            return {
                tabindex: -1 * t + "",
                disabled: t
            }
        }

        function G(t, e) {
            U(t, "keyup", function(n) {
                V(t) || 13 == n.keyCode && e.call(t, n)
            })
        }

        function Q(t, e) {
            U(t, "focus", t.onfocusin = function(n) {
                e.call(t, n)
            }, !0)
        }

        function K(t, e) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1, e && t.stopPropagation && t.stopPropagation()
        }

        function Y(t) {
            return t ? ">" : "<"
        }

        function Z(t) {
            return t = (t + "").split(/\s+/), {
                x: g(t[0]) || en,
                y: g(t[1]) || en
            }
        }

        function J(t, e) {
            var n = t.data(),
                o = Math.round(e.pos),
                a = function() {
                    n.sliding = !1, (e.onEnd || r)()
                };
            "undefined" != typeof e.overPos && e.overPos !== e.pos && (o = e.overPos, a = function() {
                J(t, i.extend({}, e, {
                    overPos: e.pos,
                    time: Math.max(We, e.time / 2)
                }))
            });
            var s = i.extend(u(o), e.width && {
                width: e.width
            });
            n.sliding = !0, De ? (t.css(i.extend(d(e.time), s)), e.time > 10 ? w(t, "transform", a, e.time) : a()) : t.stop().animate(s, e.time, Je, a)
        }

        function tt(t, e, n, o, a, s) {
            var l = "undefined" != typeof s;
            if (l || (a.push(arguments), Array.prototype.push.call(arguments, a.length), !(a.length > 1))) {
                t = t || i(t), e = e || i(e);
                var c = t[0],
                    u = e[0],
                    d = "crossfade" === o.method,
                    p = function() {
                        if (!p.done) {
                            p.done = !0;
                            var t = (l || a.shift()) && a.shift();
                            t && tt.apply(this, t), (o.onEnd || r)(!!t)
                        }
                    },
                    h = o.time / (s || 1);
                n.removeClass(Bt + " " + Wt), t.stop().addClass(Bt), e.stop().addClass(Wt), d && u && t.fadeTo(0, 0), t.fadeTo(d ? h : 0, 1, d && p), e.fadeTo(h, 0, p), c && d || u || p()
            }
        }

        function et(t) {
            var e = (t.touches || [])[0] || t;
            t._x = e.pageX, t._y = e.clientY, t._now = i.now()
        }

        function nt(t, n) {
            function o(t) {
                return p = i(t.target), w.checked = m = g = y = !1, u || w.flow || t.touches && t.touches.length > 1 || t.which > 1 || an && an.type !== t.type && sn || (m = n.select && p.is(n.select, b)) ? m : (f = "touchstart" === t.type, g = p.is("a, a *", b), h = w.control, v = w.noMove || w.noSwipe || h ? 16 : w.snap ? 0 : 4, et(t), d = an = t, rn = t.type.replace(/down|start/, "move").replace(/Down/, "Move"), (n.onStart || r).call(b, t, {
                    control: h,
                    $target: p
                }), u = w.flow = !0, void((!f || w.go) && K(t)))
            }

            function a(t) {
                if (t.touches && t.touches.length > 1 || He && !t.isPrimary || rn !== t.type || !u) return u && s(), void(n.onTouchEnd || r)();
                et(t);
                var e = Math.abs(t._x - d._x),
                    i = Math.abs(t._y - d._y),
                    o = e - i,
                    a = (w.go || w.x || o >= 0) && !w.noSwipe,
                    l = 0 > o;
                f && !w.checked ? (u = a) && K(t) : (K(t), (n.onMove || r).call(b, t, {
                    touch: f
                })), !y && Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) > v && (y = !0), w.checked = w.checked || a || l
            }

            function s(t) {
                (n.onTouchEnd || r)();
                var e = u;
                w.control = u = !1, e && (w.flow = !1), !e || g && !w.checked || (t && K(t), sn = !0, clearTimeout(ln), ln = setTimeout(function() {
                    sn = !1
                }, 1e3), (n.onEnd || r).call(b, {
                    moved: y,
                    $target: p,
                    control: h,
                    touch: f,
                    startEvent: d,
                    aborted: !t || "MSPointerCancel" === t.type
                }))
            }

            function l() {
                w.flow || setTimeout(function() {
                    w.flow = !0
                }, 10)
            }

            function c() {
                w.flow && setTimeout(function() {
                    w.flow = !1
                }, qe)
            }
            var u, d, p, h, f, m, g, v, y, b = t[0],
                w = {};
            return He ? (U(b, "MSPointerDown", o), U(e, "MSPointerMove", a), U(e, "MSPointerCancel", s), U(e, "MSPointerUp", s)) : (U(b, "touchstart", o), U(b, "touchmove", a), U(b, "touchend", s), U(e, "touchstart", l), U(e, "touchend", c), U(e, "touchcancel", c), Pe.on("scroll", c), t.on("mousedown", o), Le.on("mousemove", a).on("mouseup", s)), t.on("click", "a", function(t) {
                w.checked && K(t)
            }), w
        }

        function it(t, e) {
            function n(n, i) {
                E = !0, c = d = n._x, g = n._now, m = [
                    [g, c]
                ], p = h = I.noMove || i ? 0 : x(t, (e.getPos || r)()), (e.onStart || r).call(S, n)
            }

            function o(t, e) {
                y = I.min, b = I.max, w = I.snap, _ = t.altKey, E = k = !1, C = e.control, C || $.sliding || n(t)
            }

            function a(i, o) {
                I.noSwipe || (E || n(i), d = i._x, m.push([i._now, d]), h = p - (c - d), f = M(h, y, b), y >= h ? h = T(h, y) : h >= b && (h = T(h, b)), I.noMove || (t.css(u(h)), k || (k = !0, o.touch || He || t.addClass(oe)), (e.onMove || r).call(S, i, {
                    pos: h,
                    edge: f
                })))
            }

            function l(o) {
                if (!I.noSwipe || !o.moved) {
                    E || n(o.startEvent, !0), o.touch || He || t.removeClass(oe), v = i.now();
                    for (var a, l, c, u, f, g, x, T, C, k = v - qe, $ = null, P = We, L = e.friction, N = m.length - 1; N >= 0; N--) {
                        if (a = m[N][0], l = Math.abs(a - k), null === $ || c > l) $ = a, u = m[N][1];
                        else if ($ === k || l > c) break;
                        c = l
                    }
                    x = s(h, y, b);
                    var A = u - d,
                        D = A >= 0,
                        j = v - $,
                        M = j > qe,
                        O = !M && h !== p && x === h;
                    w && (x = s(Math[O ? D ? "floor" : "ceil" : "round"](h / w) * w, y, b), y = b = x), O && (w || x === h) && (C = -(A / j), P *= s(Math.abs(C), e.timeLow, e.timeHigh), f = Math.round(h + C * P / L), w || (x = f), (!D && f > b || D && y > f) && (g = D ? y : b, T = f - g, w || (x = g), T = s(x + .03 * T, g - 50, g + 50), P = Math.abs((h - T) / (C / L)))), P *= _ ? 10 : 1, (e.onEnd || r).call(S, i.extend(o, {
                        moved: o.moved || M && w,
                        pos: h,
                        newPos: x,
                        overPos: T,
                        time: P
                    }))
                }
            }
            var c, d, p, h, f, m, g, v, y, b, w, _, C, k, E, S = t[0],
                $ = t.data(),
                I = {};
            return I = i.extend(nt(e.$wrap, i.extend({}, e, {
                onStart: o,
                onMove: a,
                onEnd: l
            })), I)
        }

        function ot(t, e) {
            var n, o, a, s = t[0],
                l = {
                    prevent: {}
                };
            return U(s, ze, function(t) {
                var s = t.wheelDeltaY || -1 * t.deltaY || 0,
                    c = t.wheelDeltaX || -1 * t.deltaX || 0,
                    u = Math.abs(c) && !Math.abs(s),
                    d = Y(0 > c),
                    p = o === d,
                    h = i.now(),
                    f = qe > h - a;
                o = d, a = h, u && l.ok && (!l.prevent[d] || n) && (K(t, !0), n && p && f || (e.shift && (n = !0, clearTimeout(l.t), l.t = setTimeout(function() {
                    n = !1
                }, Be)), (e.onEnd || r)(t, e.shift ? d : c)))
            }), l
        }

        function at() {
            i.each(i.Fotorama.instances, function(t, e) {
                e.index = t
            })
        }

        function rt(t) {
            i.Fotorama.instances.push(t), at()
        }

        function st(t) {
            i.Fotorama.instances.splice(t.index, 1), at()
        }
        var lt = "fotorama",
            ct = "fullscreen",
            ut = lt + "__wrap",
            dt = ut + "--css2",
            pt = ut + "--css3",
            ht = ut + "--video",
            ft = ut + "--fade",
            mt = ut + "--slide",
            gt = ut + "--no-controls",
            vt = ut + "--no-shadows",
            yt = ut + "--pan-y",
            bt = ut + "--rtl",
            wt = ut + "--only-active",
            xt = ut + "--no-captions",
            _t = ut + "--toggle-arrows",
            Tt = lt + "__stage",
            Ct = Tt + "__frame",
            kt = Ct + "--video",
            Et = Tt + "__shaft",
            St = lt + "__grab",
            $t = lt + "__pointer",
            It = lt + "__arr",
            Pt = It + "--disabled",
            Lt = It + "--prev",
            Nt = It + "--next",
            At = lt + "__nav",
            Dt = At + "-wrap",
            jt = At + "__shaft",
            Mt = At + "--dots",
            Ot = At + "--thumbs",
            Ft = At + "__frame",
            Ht = Ft + "--dot",
            zt = Ft + "--thumb",
            qt = lt + "__fade",
            Wt = qt + "-front",
            Bt = qt + "-rear",
            Rt = lt + "__shadow",
            Ut = Rt + "s",
            Vt = Ut + "--left",
            Xt = Ut + "--right",
            Gt = lt + "__active",
            Qt = lt + "__select",
            Kt = lt + "--hidden",
            Yt = lt + "--fullscreen",
            Zt = lt + "__fullscreen-icon",
            Jt = lt + "__error",
            te = lt + "__loading",
            ee = lt + "__loaded",
            ne = ee + "--full",
            ie = ee + "--img",
            oe = lt + "__grabbing",
            ae = lt + "__img",
            re = ae + "--full",
            se = lt + "__dot",
            le = lt + "__thumb",
            ce = le + "-border",
            ue = lt + "__html",
            de = lt + "__video",
            pe = de + "-play",
            he = de + "-close",
            fe = lt + "__caption",
            me = lt + "__caption__wrap",
            ge = lt + "__spinner",
            ve = '" tabindex="0" role="button',
            ye = i && i.fn.jquery.split(".");
        if (!ye || ye[0] < 1 || 1 == ye[0] && ye[1] < 8) throw "Fotorama requires jQuery 1.8 or later and will not run without it.";
        var be = {},
            we = function(t, e, n) {
                function i(t) {
                    v.cssText = t
                }

                function o(t, e) {
                    return typeof t === e
                }

                function a(t, e) {
                    return !!~("" + t).indexOf(e)
                }

                function r(t, e) {
                    for (var i in t) {
                        var o = t[i];
                        if (!a(o, "-") && v[o] !== n) return "pfx" == e ? o : !0
                    }
                    return !1
                }

                function s(t, e, i) {
                    for (var a in t) {
                        var r = e[t[a]];
                        if (r !== n) return i === !1 ? t[a] : o(r, "function") ? r.bind(i || e) : r
                    }
                    return !1
                }

                function l(t, e, n) {
                    var i = t.charAt(0).toUpperCase() + t.slice(1),
                        a = (t + " " + w.join(i + " ") + i).split(" ");
                    return o(e, "string") || o(e, "undefined") ? r(a, e) : (a = (t + " " + x.join(i + " ") + i).split(" "), s(a, e, n))
                }
                var c, u, d, p = "2.6.2",
                    h = {},
                    f = e.documentElement,
                    m = "modernizr",
                    g = e.createElement(m),
                    v = g.style,
                    y = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
                    b = "Webkit Moz O ms",
                    w = b.split(" "),
                    x = b.toLowerCase().split(" "),
                    _ = {},
                    T = [],
                    C = T.slice,
                    k = function(t, n, i, o) {
                        var a, r, s, l, c = e.createElement("div"),
                            u = e.body,
                            d = u || e.createElement("body");
                        if (parseInt(i, 10))
                            for (; i--;) s = e.createElement("div"), s.id = o ? o[i] : m + (i + 1), c.appendChild(s);
                        return a = ["&#173;", '<style id="s', m, '">', t, "</style>"].join(""), c.id = m, (u ? c : d).innerHTML += a, d.appendChild(c), u || (d.style.background = "", d.style.overflow = "hidden", l = f.style.overflow, f.style.overflow = "hidden", f.appendChild(d)), r = n(c, t), u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), f.style.overflow = l), !!r
                    },
                    E = {}.hasOwnProperty;
                d = o(E, "undefined") || o(E.call, "undefined") ? function(t, e) {
                    return e in t && o(t.constructor.prototype[e], "undefined")
                } : function(t, e) {
                    return E.call(t, e)
                }, Function.prototype.bind || (Function.prototype.bind = function(t) {
                    var e = this;
                    if ("function" != typeof e) throw new TypeError;
                    var n = C.call(arguments, 1),
                        i = function() {
                            if (this instanceof i) {
                                var o = function() {};
                                o.prototype = e.prototype;
                                var a = new o,
                                    r = e.apply(a, n.concat(C.call(arguments)));
                                return Object(r) === r ? r : a
                            }
                            return e.apply(t, n.concat(C.call(arguments)))
                        };
                    return i
                }), _.csstransforms3d = function() {
                    var t = !!l("perspective");
                    return t
                };
                for (var S in _) d(_, S) && (u = S.toLowerCase(), h[u] = _[S](), T.push((h[u] ? "" : "no-") + u));
                return h.addTest = function(t, e) {
                    if ("object" == typeof t)
                        for (var i in t) d(t, i) && h.addTest(i, t[i]);
                    else {
                        if (t = t.toLowerCase(), h[t] !== n) return h;
                        e = "function" == typeof e ? e() : e, "undefined" != typeof enableClasses && enableClasses && (f.className += " " + (e ? "" : "no-") + t), h[t] = e
                    }
                    return h
                }, i(""), g = c = null, h._version = p, h._prefixes = y, h._domPrefixes = x, h._cssomPrefixes = w, h.testProp = function(t) {
                    return r([t])
                }, h.testAllProps = l, h.testStyles = k, h.prefixed = function(t, e, n) {
                    return e ? l(t, e, n) : l(t, "pfx")
                }, h
            }(t, e),
            xe = {
                ok: !1,
                is: function() {
                    return !1
                },
                request: function() {},
                cancel: function() {},
                event: "",
                prefix: ""
            },
            _e = "webkit moz o ms khtml".split(" ");
        if ("undefined" != typeof e.cancelFullScreen) xe.ok = !0;
        else
            for (var Te = 0, Ce = _e.length; Ce > Te; Te++)
                if (xe.prefix = _e[Te], "undefined" != typeof e[xe.prefix + "CancelFullScreen"]) {
                    xe.ok = !0;
                    break
                }
        xe.ok && (xe.event = xe.prefix + "fullscreenchange", xe.is = function() {
            switch (this.prefix) {
                case "":
                    return e.fullScreen;
                case "webkit":
                    return e.webkitIsFullScreen;
                default:
                    return e[this.prefix + "FullScreen"]
            }
        }, xe.request = function(t) {
            return "" === this.prefix ? t.requestFullScreen() : t[this.prefix + "RequestFullScreen"]()
        }, xe.cancel = function() {
            return "" === this.prefix ? e.cancelFullScreen() : e[this.prefix + "CancelFullScreen"]()
        });
        var ke, Ee = {
                lines: 12,
                length: 5,
                width: 2,
                radius: 7,
                corners: 1,
                rotate: 15,
                color: "rgba(128, 128, 128, .75)",
                hwaccel: !0
            },
            Se = {
                top: "auto",
                left: "auto",
                className: ""
            };
        ! function(t, e) {
            ke = e()
        }(this, function() {
            function t(t, n) {
                var i, o = e.createElement(t || "div");
                for (i in n) o[i] = n[i];
                return o
            }

            function n(t) {
                for (var e = 1, n = arguments.length; n > e; e++) t.appendChild(arguments[e]);
                return t
            }

            function i(t, e, n, i) {
                var o = ["opacity", e, ~~(100 * t), n, i].join("-"),
                    a = .01 + n / i * 100,
                    r = Math.max(1 - (1 - t) / e * (100 - a), t),
                    s = p.substring(0, p.indexOf("Animation")).toLowerCase(),
                    l = s && "-" + s + "-" || "";
                return f[o] || (m.insertRule("@" + l + "keyframes " + o + "{0%{opacity:" + r + "}" + a + "%{opacity:" + t + "}" + (a + .01) + "%{opacity:1}" + (a + e) % 100 + "%{opacity:" + t + "}100%{opacity:" + r + "}}", m.cssRules.length), f[o] = 1), o
            }

            function a(t, e) {
                var n, i, a = t.style;
                for (e = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < h.length; i++)
                    if (n = h[i] + e, a[n] !== o) return n;
                return a[e] !== o ? e : void 0
            }

            function r(t, e) {
                for (var n in e) t.style[a(t, n) || n] = e[n];
                return t
            }

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) t[i] === o && (t[i] = n[i])
                }
                return t
            }

            function l(t) {
                for (var e = {
                        x: t.offsetLeft,
                        y: t.offsetTop
                    }; t = t.offsetParent;) e.x += t.offsetLeft, e.y += t.offsetTop;
                return e
            }

            function c(t, e) {
                return "string" == typeof t ? t : t[e % t.length]
            }

            function u(t) {
                return "undefined" == typeof this ? new u(t) : void(this.opts = s(t || {}, u.defaults, g))
            }

            function d() {
                function e(e, n) {
                    return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', n)
                }
                m.addRule(".spin-vml", "behavior:url(#default#VML)"), u.prototype.lines = function(t, i) {
                    function o() {
                        return r(e("group", {
                            coordsize: u + " " + u,
                            coordorigin: -l + " " + -l
                        }), {
                            width: u,
                            height: u
                        })
                    }

                    function a(t, a, s) {
                        n(p, n(r(o(), {
                            rotation: 360 / i.lines * t + "deg",
                            left: ~~a
                        }), n(r(e("roundrect", {
                            arcsize: i.corners
                        }), {
                            width: l,
                            height: i.width,
                            left: i.radius,
                            top: -i.width >> 1,
                            filter: s
                        }), e("fill", {
                            color: c(i.color, t),
                            opacity: i.opacity
                        }), e("stroke", {
                            opacity: 0
                        }))))
                    }
                    var s, l = i.length + i.width,
                        u = 2 * l,
                        d = 2 * -(i.width + i.length) + "px",
                        p = r(o(), {
                            position: "absolute",
                            top: d,
                            left: d
                        });
                    if (i.shadow)
                        for (s = 1; s <= i.lines; s++) a(s, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                    for (s = 1; s <= i.lines; s++) a(s);
                    return n(t, p)
                }, u.prototype.opacity = function(t, e, n, i) {
                    var o = t.firstChild;
                    i = i.shadow && i.lines || 0, o && e + i < o.childNodes.length && (o = o.childNodes[e + i], o = o && o.firstChild, o = o && o.firstChild, o && (o.opacity = n))
                }
            }
            var p, h = ["webkit", "Moz", "ms", "O"],
                f = {},
                m = function() {
                    var i = t("style", {
                        type: "text/css"
                    });
                    return n(e.getElementsByTagName("head")[0], i), i.sheet || i.styleSheet
                }(),
                g = {
                    lines: 12,
                    length: 7,
                    width: 5,
                    radius: 10,
                    rotate: 0,
                    corners: 1,
                    color: "#000",
                    direction: 1,
                    speed: 1,
                    trail: 100,
                    opacity: .25,
                    fps: 20,
                    zIndex: 2e9,
                    className: "spinner",
                    top: "auto",
                    left: "auto",
                    position: "relative"
                };
            u.defaults = {}, s(u.prototype, {
                spin: function(e) {
                    this.stop();
                    var n, i, o = this,
                        a = o.opts,
                        s = o.el = r(t(0, {
                            className: a.className
                        }), {
                            position: a.position,
                            width: 0,
                            zIndex: a.zIndex
                        }),
                        c = a.radius + a.length + a.width;
                    if (e && (e.insertBefore(s, e.firstChild || null), i = l(e), n = l(s), r(s, {
                            left: ("auto" == a.left ? i.x - n.x + (e.offsetWidth >> 1) : parseInt(a.left, 10) + c) + "px",
                            top: ("auto" == a.top ? i.y - n.y + (e.offsetHeight >> 1) : parseInt(a.top, 10) + c) + "px"
                        })), s.setAttribute("role", "progressbar"), o.lines(s, o.opts), !p) {
                        var u, d = 0,
                            h = (a.lines - 1) * (1 - a.direction) / 2,
                            f = a.fps,
                            m = f / a.speed,
                            g = (1 - a.opacity) / (m * a.trail / 100),
                            v = m / a.lines;
                        ! function y() {
                            d++;
                            for (var t = 0; t < a.lines; t++) u = Math.max(1 - (d + (a.lines - t) * v) % m * g, a.opacity), o.opacity(s, t * a.direction + h, u, a);
                            o.timeout = o.el && setTimeout(y, ~~(1e3 / f))
                        }()
                    }
                    return o
                },
                stop: function() {
                    var t = this.el;
                    return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = o), this
                },
                lines: function(e, o) {
                    function a(e, n) {
                        return r(t(), {
                            position: "absolute",
                            width: o.length + o.width + "px",
                            height: o.width + "px",
                            background: e,
                            boxShadow: n,
                            transformOrigin: "left",
                            transform: "rotate(" + ~~(360 / o.lines * l + o.rotate) + "deg) translate(" + o.radius + "px,0)",
                            borderRadius: (o.corners * o.width >> 1) + "px"
                        })
                    }
                    for (var s, l = 0, u = (o.lines - 1) * (1 - o.direction) / 2; l < o.lines; l++) s = r(t(), {
                        position: "absolute",
                        top: 1 + ~(o.width / 2) + "px",
                        transform: o.hwaccel ? "translate3d(0,0,0)" : "",
                        opacity: o.opacity,
                        animation: p && i(o.opacity, o.trail, u + l * o.direction, o.lines) + " " + 1 / o.speed + "s linear infinite"
                    }), o.shadow && n(s, r(a("#000", "0 0 4px #000"), {
                        top: "2px"
                    })), n(e, n(s, a(c(o.color, l), "0 0 1px rgba(0,0,0,.1)")));
                    return e
                },
                opacity: function(t, e, n) {
                    e < t.childNodes.length && (t.childNodes[e].style.opacity = n)
                }
            });
            var v = r(t("group"), {
                behavior: "url(#default#VML)"
            });
            return !a(v, "transform") && v.adj ? d() : p = a(v, "animation"), u
        });
        var $e, Ie, Pe = i(t),
            Le = i(e),
            Ne = "quirks" === n.hash.replace("#", ""),
            Ae = we.csstransforms3d,
            De = Ae && !Ne,
            je = Ae || "CSS1Compat" === e.compatMode,
            Me = xe.ok,
            Oe = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),
            Fe = !De || Oe,
            He = navigator.msPointerEnabled,
            ze = "onwheel" in e.createElement("div") ? "wheel" : e.onmousewheel !== o ? "mousewheel" : "DOMMouseScroll",
            qe = 250,
            We = 300,
            Be = 1400,
            Re = 5e3,
            Ue = 2,
            Ve = 64,
            Xe = 500,
            Ge = 333,
            Qe = "$stageFrame",
            Ke = "$navDotFrame",
            Ye = "$navThumbFrame",
            Ze = "auto",
            Je = a([.1, 0, .25, 1]),
            tn = 99999,
            en = "50%",
            nn = {
                width: null,
                minwidth: null,
                maxwidth: "100%",
                height: null,
                minheight: null,
                maxheight: null,
                ratio: null,
                margin: Ue,
                glimpse: 0,
                fit: "contain",
                position: en,
                thumbposition: en,
                nav: "dots",
                navposition: "bottom",
                navwidth: null,
                thumbwidth: Ve,
                thumbheight: Ve,
                thumbmargin: Ue,
                thumbborderwidth: Ue,
                thumbfit: "cover",
                allowfullscreen: !1,
                transition: "slide",
                clicktransition: null,
                transitionduration: We,
                captions: !0,
                hash: !1,
                startindex: 0,
                loop: !1,
                autoplay: !1,
                stopautoplayontouch: !0,
                keyboard: !1,
                arrows: !0,
                click: !0,
                swipe: !0,
                trackpad: !1,
                enableifsingleframe: !1,
                controlsonstart: !0,
                shuffle: !1,
                direction: "ltr",
                shadows: !0,
                spinner: null
            },
            on = {
                left: !0,
                right: !0,
                down: !1,
                up: !1,
                space: !1,
                home: !1,
                end: !1
            };
        N.stop = function(t) {
            N.ii[t] = !1
        };
        var an, rn, sn, ln;
        jQuery.Fotorama = function(t, o) {
            function a() {
                i.each(kn, function(t, e) {
                    if (!e.i) {
                        e.i = hi++;
                        var n = E(e.video, !0);
                        if (n) {
                            var i = {};
                            e.video = n, e.img || e.thumb ? e.thumbsReady = !0 : i = S(e, kn, ci), $(kn, {
                                img: i.img,
                                thumb: i.thumb
                            }, e.i, ci)
                        }
                    }
                })
            }

            function r(t) {
                return Zn[t] || ci.fullScreen
            }

            function l(t) {
                var e = "keydown." + lt,
                    n = lt + ui,
                    i = "keydown." + n,
                    a = "resize." + n + " orientationchange." + n;
                t ? (Le.on(i, function(t) {
                    var e, n;
                    In && 27 === t.keyCode ? (e = !0, hn(In, !0, !0)) : (ci.fullScreen || o.keyboard && !ci.index) && (27 === t.keyCode ? (e = !0, ci.cancelFullScreen()) : t.shiftKey && 32 === t.keyCode && r("space") || 37 === t.keyCode && r("left") || 38 === t.keyCode && r("up") ? n = "<" : 32 === t.keyCode && r("space") || 39 === t.keyCode && r("right") || 40 === t.keyCode && r("down") ? n = ">" : 36 === t.keyCode && r("home") ? n = "<<" : 35 === t.keyCode && r("end") && (n = ">>")), (e || n) && K(t), n && ci.show({
                        index: n,
                        slow: t.altKey,
                        user: !0
                    })
                }), ci.index || Le.off(e).on(e, "textarea, input, select", function(t) {
                    !Ie.hasClass(ct) && t.stopPropagation();
                }), Pe.on(a, ci.resize)) : (Le.off(i), Pe.off(a))
            }

            function c(e) {
                e !== c.f && (e ? (t.html("").addClass(lt + " " + di).append(vi).before(mi).before(gi), rt(ci)) : (vi.detach(), mi.detach(), gi.detach(), t.html(fi.urtext).removeClass(di), st(ci)), l(e), c.f = e)
            }

            function p() {
                kn = ci.data = kn || q(o.data) || I(t), En = ci.size = kn.length, !Cn.ok && o.shuffle && z(kn), a(), Mi = C(Mi), En && c(!0)
            }

            function f() {
                var t = 2 > En && !o.enableifsingleframe || In;
                Hi.noMove = t || Un, Hi.noSwipe = t || !o.swipe, !Qn && bi.toggleClass(St, !o.click && !Hi.noMove && !Hi.noSwipe), He && vi.toggleClass(yt, !Hi.noSwipe)
            }

            function b(t) {
                t === !0 && (t = ""), o.autoplay = Math.max(+t || Re, 1.5 * Gn)
            }

            function w() {
                function t(t, n) {
                    e[t ? "add" : "remove"].push(n)
                }
                ci.options = o = B(o), Un = "crossfade" === o.transition || "dissolve" === o.transition, Hn = o.loop && (En > 2 || Un && (!Qn || "slide" !== Qn)), Gn = +o.transitionduration || We, Yn = "rtl" === o.direction, Zn = i.extend({}, o.keyboard && on, o.keyboard);
                var e = {
                    add: [],
                    remove: []
                };
                En > 1 || o.enableifsingleframe ? (zn = o.nav, Wn = "top" === o.navposition, e.remove.push(Qt), Ti.toggle(!!o.arrows)) : (zn = !1, Ti.hide()), Bt(), $n = new ke(i.extend(Ee, o.spinner, Se, {
                    direction: Yn ? -1 : 1
                })), Ne(), Ae(), o.autoplay && b(o.autoplay), Vn = h(o.thumbwidth) || Ve, Xn = h(o.thumbheight) || Ve, zi.ok = Wi.ok = o.trackpad && !Fe, f(), an(o, [Fi]), qn = "thumbs" === zn, qn ? (de(En, "navThumb"), Sn = $i, li = Ye, j(mi, i.Fotorama.jst.style({
                    w: Vn,
                    h: Xn,
                    b: o.thumbborderwidth,
                    m: o.thumbmargin,
                    s: ui,
                    q: !je
                })), ki.addClass(Ot).removeClass(Mt)) : "dots" === zn ? (de(En, "navDot"), Sn = Si, li = Ke, ki.addClass(Mt).removeClass(Ot)) : (zn = !1, ki.removeClass(Ot + " " + Mt)), zn && (Wn ? Ci.insertBefore(yi) : Ci.insertAfter(yi), _e.nav = !1, _e(Sn, Ei, "nav")), Bn = o.allowfullscreen, Bn ? (Pi.prependTo(yi), Rn = Me && "native" === Bn) : (Pi.detach(), Rn = !1), t(Un, ft), t(!Un, mt), t(!o.captions, xt), t(Yn, bt), t("always" !== o.arrows, _t), Kn = o.shadows && !Fe, t(!Kn, vt), vi.addClass(e.add.join(" ")).removeClass(e.remove.join(" ")), Oi = i.extend({}, o)
            }

            function T(t) {
                return 0 > t ? (En + t % En) % En : t >= En ? t % En : t
            }

            function C(t) {
                return s(t, 0, En - 1)
            }

            function k(t) {
                return Hn ? T(t) : C(t)
            }

            function P(t) {
                return t > 0 || Hn ? t - 1 : !1
            }

            function V(t) {
                return En - 1 > t || Hn ? t + 1 : !1
            }

            function Z() {
                Hi.min = Hn ? -1 / 0 : -v(En - 1, Fi.w, o.margin, Nn), Hi.max = Hn ? 1 / 0 : -v(0, Fi.w, o.margin, Nn), Hi.snap = Fi.w + o.margin
            }

            function et() {
                qi.min = Math.min(0, Fi.nw - Ei.width()), qi.max = 0, Ei.toggleClass(St, !(qi.noMove = qi.min === qi.max))
            }

            function nt(t, e, n) {
                if ("number" == typeof t) {
                    t = new Array(t);
                    var o = !0
                }
                return i.each(t, function(t, i) {
                    if (o && (i = t), "number" == typeof i) {
                        var a = kn[T(i)];
                        if (a) {
                            var r = "$" + e + "Frame",
                                s = a[r];
                            n.call(this, t, i, a, s, r, s && s.data())
                        }
                    }
                })
            }

            function at(t, e, n, i) {
                (!Jn || "*" === Jn && i === Fn) && (t = g(o.width) || g(t) || Xe, e = g(o.height) || g(e) || Ge, ci.resize({
                    width: t,
                    ratio: o.ratio || n || t / e
                }, 0, i !== Fn && "*"))
            }

            function qt(t, e, n, a, r, s) {
                nt(t, e, function(t, l, c, u, d, p) {
                    function h(t) {
                        var e = T(l);
                        rn(t, {
                            index: e,
                            src: _,
                            frame: kn[e]
                        })
                    }

                    function f() {
                        b.remove(), i.Fotorama.cache[_] = "error", c.html && "stage" === e || !C || C === _ ? (!_ || c.html || v ? "stage" === e && (u.trigger("f:load").removeClass(te + " " + Jt).addClass(ee), h("load"), at()) : (u.trigger("f:error").removeClass(te).addClass(Jt), h("error")), p.state = "error", !(En > 1 && kn[l] === c) || c.html || c.deleted || c.video || v || (c.deleted = !0, ci.splice(l, 1))) : (c[x] = _ = C, qt([l], e, n, a, r, !0))
                    }

                    function m() {
                        i.Fotorama.measures[_] = w.measures = i.Fotorama.measures[_] || {
                            width: y.width,
                            height: y.height,
                            ratio: y.width / y.height
                        }, at(w.measures.width, w.measures.height, w.measures.ratio, l), b.off("load error").addClass(ae + (v ? " " + re : "")).prependTo(u), D(b, (i.isFunction(n) ? n() : n) || Fi, a || c.fit || o.fit, r || c.position || o.position), i.Fotorama.cache[_] = p.state = "loaded", setTimeout(function() {
                            u.trigger("f:load").removeClass(te + " " + Jt).addClass(ee + " " + (v ? ne : ie)), "stage" === e ? h("load") : (c.thumbratio === Ze || !c.thumbratio && o.thumbratio === Ze) && (c.thumbratio = w.measures.ratio, _n())
                        }, 0)
                    }

                    function g() {
                        var t = 10;
                        N(function() {
                            return !ri || !t-- && !Fe
                        }, function() {
                            m()
                        })
                    }
                    if (u) {
                        var v = ci.fullScreen && c.full && c.full !== c.img && !p.$full && "stage" === e;
                        if (!p.$img || s || v) {
                            var y = new Image,
                                b = i(y),
                                w = b.data();
                            p[v ? "$full" : "$img"] = b;
                            var x = "stage" === e ? v ? "full" : "img" : "thumb",
                                _ = c[x],
                                C = v ? null : c["stage" === e ? "thumb" : "img"];
                            if ("navThumb" === e && (u = p.$wrap), !_) return void f();
                            i.Fotorama.cache[_] ? ! function k() {
                                "error" === i.Fotorama.cache[_] ? f() : "loaded" === i.Fotorama.cache[_] ? setTimeout(g, 0) : setTimeout(k, 100)
                            }() : (i.Fotorama.cache[_] = "*", b.on("load", g).on("error", f)), p.state = "", y.src = _
                        }
                    }
                })
            }

            function Wt(t) {
                ji.append($n.spin().el).appendTo(t)
            }

            function Bt() {
                ji.detach(), $n && $n.stop()
            }

            function Rt() {
                var t = Pn[Qe];
                t && !t.data().state && (Wt(t), t.on("f:load f:error", function() {
                    t.off("f:load f:error"), Bt()
                }))
            }

            function oe(t) {
                G(t, bn), Q(t, function() {
                    setTimeout(function() {
                        W(ki)
                    }, 0), Be({
                        time: Gn,
                        guessIndex: i(this).data().eq,
                        minMax: qi
                    })
                })
            }

            function de(t, e) {
                nt(t, e, function(t, n, o, a, r, s) {
                    if (!a) {
                        a = o[r] = vi[r].clone(), s = a.data(), s.data = o;
                        var l = a[0];
                        "stage" === e ? (o.html && i('<div class="' + ue + '"></div>').append(o._html ? i(o.html).removeAttr("id").html(o._html) : o.html).appendTo(a), o.caption && i(H(fe, H(me, o.caption))).appendTo(a), o.video && a.addClass(kt).append(Ni.clone()), Q(l, function() {
                            setTimeout(function() {
                                W(yi)
                            }, 0), gn({
                                index: s.eq,
                                user: !0
                            })
                        }), wi = wi.add(a)) : "navDot" === e ? (oe(l), Si = Si.add(a)) : "navThumb" === e && (oe(l), s.$wrap = a.children(":first"), $i = $i.add(a), o.video && s.$wrap.append(Ni.clone()))
                    }
                })
            }

            function ye(t, e, n, i) {
                return t && t.length && D(t, e, n, i)
            }

            function be(t) {
                nt(t, "stage", function(t, e, n, a, r, s) {
                    if (a) {
                        var l = T(e),
                            c = n.fit || o.fit,
                            u = n.position || o.position;
                        s.eq = l, Ri[Qe][l] = a.css(i.extend({
                            left: Un ? 0 : v(e, Fi.w, o.margin, Nn)
                        }, Un && d(0))), L(a[0]) && (a.appendTo(bi), hn(n.$video)), ye(s.$img, Fi, c, u), ye(s.$full, Fi, c, u)
                    }
                })
            }

            function we(t, e) {
                if ("thumbs" === zn && !isNaN(t)) {
                    var n = -t,
                        a = -t + Fi.nw;
                    $i.each(function() {
                        var t = i(this),
                            r = t.data(),
                            s = r.eq,
                            l = function() {
                                return {
                                    h: Xn,
                                    w: r.w
                                }
                            },
                            c = l(),
                            u = kn[s] || {},
                            d = u.thumbfit || o.thumbfit,
                            p = u.thumbposition || o.thumbposition;
                        c.w = r.w, r.l + r.w < n || r.l > a || ye(r.$img, c, d, p) || e && qt([s], "navThumb", l, d, p)
                    })
                }
            }

            function _e(t, e, n) {
                if (!_e[n]) {
                    var a = "nav" === n && qn,
                        r = 0;
                    e.append(t.filter(function() {
                        for (var t, e = i(this), n = e.data(), o = 0, a = kn.length; a > o; o++)
                            if (n.data === kn[o]) {
                                t = !0, n.eq = o;
                                break
                            }
                        return t || e.remove() && !1
                    }).sort(function(t, e) {
                        return i(t).data().eq - i(e).data().eq
                    }).each(function() {
                        if (a) {
                            var t = i(this),
                                e = t.data(),
                                n = Math.round(Xn * e.data.thumbratio) || Vn;
                            e.l = r, e.w = n, t.css({
                                width: n
                            }), r += n + o.thumbmargin
                        }
                    })), _e[n] = !0
                }
            }

            function Te(t) {
                return t - Ui > Fi.w / 3
            }

            function Ce(t) {
                return !(Hn || Mi + t && Mi - En + t || In)
            }

            function Ne() {
                var t = Ce(0),
                    e = Ce(1);
                xi.toggleClass(Pt, t).attr(X(t)), _i.toggleClass(Pt, e).attr(X(e))
            }

            function Ae() {
                zi.ok && (zi.prevent = {
                    "<": Ce(0),
                    ">": Ce(1)
                })
            }

            function Oe(t) {
                var e, n, i = t.data();
                return qn ? (e = i.l, n = i.w) : (e = t.position().left, n = t.width()), {
                    c: e + n / 2,
                    min: -e + 10 * o.thumbmargin,
                    max: -e + Fi.w - n - 10 * o.thumbmargin
                }
            }

            function ze(t) {
                var e = Pn[li].data();
                J(Ii, {
                    time: 1.2 * t,
                    pos: e.l,
                    width: e.w - 2 * o.thumbborderwidth
                })
            }

            function Be(t) {
                var e = kn[t.guessIndex][li];
                if (e) {
                    var n = qi.min !== qi.max,
                        i = t.minMax || n && Oe(Pn[li]),
                        o = n && (t.keep && Be.l ? Be.l : s((t.coo || Fi.nw / 2) - Oe(e).c, i.min, i.max)),
                        a = n && s(o, qi.min, qi.max),
                        r = 1.1 * t.time;
                    J(Ei, {
                        time: r,
                        pos: a || 0,
                        onEnd: function() {
                            we(a, !0)
                        }
                    }), pn(ki, M(a, qi.min, qi.max)), Be.l = o
                }
            }

            function Ue() {
                Je(li), Bi[li].push(Pn[li].addClass(Gt))
            }

            function Je(t) {
                for (var e = Bi[t]; e.length;) e.shift().removeClass(Gt)
            }

            function en(t) {
                var e = Ri[t];
                i.each(Ln, function(t, n) {
                    delete e[T(n)]
                }), i.each(e, function(t, n) {
                    delete e[t], n.detach()
                })
            }

            function nn(t) {
                Nn = An = Mi;
                var e = Pn[Qe];
                e && (Je(Qe), Bi[Qe].push(e.addClass(Gt)), t || ci.show.onEnd(!0), x(bi, 0, !0), en(Qe), be(Ln), Z(), et())
            }

            function an(t, e) {
                t && i.each(e, function(e, n) {
                    n && i.extend(n, {
                        width: t.width || n.width,
                        height: t.height,
                        minwidth: t.minwidth,
                        maxwidth: t.maxwidth,
                        minheight: t.minheight,
                        maxheight: t.maxheight,
                        ratio: R(t.ratio)
                    })
                })
            }

            function rn(e, n) {
                t.trigger(lt + ":" + e, [ci, n])
            }

            function sn() {
                clearTimeout(ln.t), ri = 1, o.stopautoplayontouch ? ci.stopAutoplay() : ii = !0
            }

            function ln() {
                ri && (o.stopautoplayontouch || (cn(), un()), ln.t = setTimeout(function() {
                    ri = 0
                }, We + qe))
            }

            function cn() {
                ii = !(!In && !oi)
            }

            function un() {
                if (clearTimeout(un.t), N.stop(un.w), !o.autoplay || ii) return void(ci.autoplay && (ci.autoplay = !1, rn("stopautoplay")));
                ci.autoplay || (ci.autoplay = !0, rn("startautoplay"));
                var t = Mi,
                    e = Pn[Qe].data();
                un.w = N(function() {
                    return e.state || t !== Mi
                }, function() {
                    un.t = setTimeout(function() {
                        if (!ii && t === Mi) {
                            var e = On,
                                n = kn[e][Qe].data();
                            un.w = N(function() {
                                return n.state || e !== On
                            }, function() {
                                ii || e !== On || ci.show(Hn ? Y(!Yn) : On)
                            })
                        }
                    }, o.autoplay)
                })
            }

            function dn() {
                ci.fullScreen && (ci.fullScreen = !1, Me && xe.cancel(pi), Ie.removeClass(ct), $e.removeClass(ct), t.removeClass(Yt).insertAfter(gi), Fi = i.extend({}, ai), hn(In, !0, !0), yn("x", !1), ci.resize(), qt(Ln, "stage"), W(Pe, ei, ti), rn("fullscreenexit"))
            }

            function pn(t, e) {
                Kn && (t.removeClass(Vt + " " + Xt), e && !In && t.addClass(e.replace(/^|\s/g, " " + Ut + "--")))
            }

            function hn(t, e, n) {
                e && (vi.removeClass(ht), In = !1, f()), t && t !== In && (t.remove(), rn("unloadvideo")), n && (cn(), un())
            }

            function fn(t) {
                vi.toggleClass(gt, t)
            }

            function mn(t) {
                if (!Hi.flow) {
                    var e = t ? t.pageX : mn.x,
                        n = e && !Ce(Te(e)) && o.click;
                    mn.p !== n && yi.toggleClass($t, n) && (mn.p = n, mn.x = e)
                }
            }

            function gn(t) {
                clearTimeout(gn.t), o.clicktransition && o.clicktransition !== o.transition ? setTimeout(function() {
                    var e = o.transition;
                    ci.setOptions({
                        transition: o.clicktransition
                    }), Qn = e, gn.t = setTimeout(function() {
                        ci.show(t)
                    }, 10)
                }, 0) : ci.show(t)
            }

            function vn(t, e) {
                var n = t.target,
                    a = i(n);
                a.hasClass(pe) ? ci.playVideo() : n === Li ? ci.toggleFullScreen() : In ? n === Di && hn(In, !0, !0) : e ? fn() : o.click && gn({
                    index: t.shiftKey || Y(Te(t._x)),
                    slow: t.altKey,
                    user: !0
                })
            }

            function yn(t, e) {
                Hi[t] = qi[t] = e
            }

            function bn(t) {
                var e = i(this).data().eq;
                gn({
                    index: e,
                    slow: t.altKey,
                    user: !0,
                    coo: t._x - ki.offset().left
                })
            }

            function wn(t) {
                gn({
                    index: Ti.index(this) ? ">" : "<",
                    slow: t.altKey,
                    user: !0
                })
            }

            function xn(t) {
                Q(t, function() {
                    setTimeout(function() {
                        W(yi)
                    }, 0), fn(!1)
                })
            }

            function _n() {
                if (p(), w(), !_n.i) {
                    _n.i = !0;
                    var t = o.startindex;
                    (t || o.hash && n.hash) && (Fn = O(t || n.hash.replace(/^#/, ""), kn, 0 === ci.index || t, t)), Mi = Nn = An = Dn = Fn = k(Fn) || 0
                }
                if (En) {
                    if (Tn()) return;
                    In && hn(In, !0), Ln = [], en(Qe), _n.ok = !0, ci.show({
                        index: Mi,
                        time: 0
                    }), ci.resize()
                } else ci.destroy()
            }

            function Tn() {
                return !Tn.f === Yn ? (Tn.f = Yn, Mi = En - 1 - Mi, ci.reverse(), !0) : void 0
            }

            function Cn() {
                Cn.ok || (Cn.ok = !0, rn("ready"))
            }
            $e = i("html"), Ie = i("body");
            var kn, En, Sn, $n, In, Pn, Ln, Nn, An, Dn, jn, Mn, On, Fn, Hn, zn, qn, Wn, Bn, Rn, Un, Vn, Xn, Gn, Qn, Kn, Yn, Zn, Jn, ti, ei, ni, ii, oi, ai, ri, si, li, ci = this,
                ui = i.now(),
                di = lt + ui,
                pi = t[0],
                hi = 1,
                fi = t.data(),
                mi = i("<style></style>"),
                gi = i(H(Kt)),
                vi = i(H(ut)),
                yi = i(H(Tt)).appendTo(vi),
                bi = (yi[0], i(H(Et)).appendTo(yi)),
                wi = i(),
                xi = i(H(It + " " + Lt + ve)),
                _i = i(H(It + " " + Nt + ve)),
                Ti = xi.add(_i).appendTo(yi),
                Ci = i(H(Dt)),
                ki = i(H(At)).appendTo(Ci),
                Ei = i(H(jt)).appendTo(ki),
                Si = i(),
                $i = i(),
                Ii = (bi.data(), Ei.data(), i(H(ce)).appendTo(Ei)),
                Pi = i(H(Zt + ve)),
                Li = Pi[0],
                Ni = i(H(pe)),
                Ai = i(H(he)).appendTo(yi),
                Di = Ai[0],
                ji = i(H(ge)),
                Mi = !1,
                Oi = {},
                Fi = {},
                Hi = {},
                zi = {},
                qi = {},
                Wi = {},
                Bi = {},
                Ri = {},
                Ui = 0,
                Vi = [];
            vi[Qe] = i(H(Ct)), vi[Ye] = i(H(Ft + " " + zt + ve, H(le))), vi[Ke] = i(H(Ft + " " + Ht + ve, H(se))), Bi[Qe] = [], Bi[Ye] = [], Bi[Ke] = [], Ri[Qe] = {}, vi.addClass(De ? pt : dt).toggleClass(gt, !o.controlsonstart), fi.fotorama = this, ci.startAutoplay = function(t) {
                return ci.autoplay ? this : (ii = oi = !1, b(t || o.autoplay), un(), this)
            }, ci.stopAutoplay = function() {
                return ci.autoplay && (ii = oi = !0, un()), this
            }, ci.show = function(t) {
                var e;
                "object" != typeof t ? (e = t, t = {}) : e = t.index, e = ">" === e ? An + 1 : "<" === e ? An - 1 : "<<" === e ? 0 : ">>" === e ? En - 1 : e, e = isNaN(e) ? O(e, kn, !0) : e, e = "undefined" == typeof e ? Mi || 0 : e, ci.activeIndex = Mi = k(e), jn = P(Mi), Mn = V(Mi), On = T(Mi + (Yn ? -1 : 1)), Ln = [Mi, jn, Mn], An = Hn ? e : Mi;
                var n = Math.abs(Dn - An),
                    i = _(t.time, function() {
                        return Math.min(Gn * (1 + (n - 1) / 12), 2 * Gn)
                    }),
                    a = t.overPos;
                t.slow && (i *= 10);
                var r = Pn;
                ci.activeFrame = Pn = kn[Mi];
                var l = r === Pn && !t.user;
                hn(In, Pn.i !== kn[T(Nn)].i), de(Ln, "stage"), be(Fe ? [An] : [An, P(An), V(An)]), yn("go", !0), l || rn("show", {
                    user: t.user,
                    time: i
                }), ii = !0;
                var c = ci.show.onEnd = function(e) {
                    if (!c.ok) {
                        if (c.ok = !0, e || nn(!0), l || rn("showend", {
                                user: t.user
                            }), !e && Qn && Qn !== o.transition) return ci.setOptions({
                            transition: Qn
                        }), void(Qn = !1);
                        Rt(), qt(Ln, "stage"), yn("go", !1), Ae(), mn(), cn(), un()
                    }
                };
                if (Un) {
                    var u = Pn[Qe],
                        d = Mi !== Dn ? kn[Dn][Qe] : null;
                    tt(u, d, wi, {
                        time: i,
                        method: o.transition,
                        onEnd: c
                    }, Vi)
                } else J(bi, {
                    pos: -v(An, Fi.w, o.margin, Nn),
                    overPos: a,
                    time: i,
                    onEnd: c
                });
                if (Ne(), zn) {
                    Ue();
                    var p = C(Mi + s(An - Dn, -1, 1));
                    Be({
                        time: i,
                        coo: p !== Mi && t.coo,
                        guessIndex: "undefined" != typeof t.coo ? p : Mi,
                        keep: l
                    }), qn && ze(i)
                }
                return ni = "undefined" != typeof Dn && Dn !== Mi, Dn = Mi, o.hash && ni && !ci.eq && A(Pn.id || Mi + 1), this
            }, ci.requestFullScreen = function() {
                return Bn && !ci.fullScreen && (ti = Pe.scrollTop(), ei = Pe.scrollLeft(), W(Pe), yn("x", !0), ai = i.extend({}, Fi), t.addClass(Yt).appendTo(Ie.addClass(ct)), $e.addClass(ct), hn(In, !0, !0), ci.fullScreen = !0, Rn && xe.request(pi), ci.resize(), qt(Ln, "stage"), Rt(), rn("fullscreenenter")), this
            }, ci.cancelFullScreen = function() {
                return Rn && xe.is() ? xe.cancel(e) : dn(), this
            }, ci.toggleFullScreen = function() {
                return ci[(ci.fullScreen ? "cancel" : "request") + "FullScreen"]()
            }, U(e, xe.event, function() {
                !kn || xe.is() || In || dn()
            }), ci.resize = function(t) {
                if (!kn) return this;
                var e = arguments[1] || 0,
                    n = arguments[2];
                an(ci.fullScreen ? {
                    width: "100%",
                    maxwidth: null,
                    minwidth: null,
                    height: "100%",
                    maxheight: null,
                    minheight: null
                } : B(t), [Fi, n || ci.fullScreen || o]);
                var i = Fi.width,
                    a = Fi.height,
                    r = Fi.ratio,
                    l = Pe.height() - (zn ? ki.height() : 0);
                return g(i) && (vi.addClass(wt).css({
                    width: i,
                    minWidth: Fi.minwidth || 0,
                    maxWidth: Fi.maxwidth || tn
                }), i = Fi.W = Fi.w = vi.width(), Fi.nw = zn && m(o.navwidth, i) || i, o.glimpse && (Fi.w -= Math.round(2 * (m(o.glimpse, i) || 0))), bi.css({
                    width: Fi.w,
                    marginLeft: (Fi.W - Fi.w) / 2
                }), a = m(a, l), a = a || r && i / r, a && (i = Math.round(i), a = Fi.h = Math.round(s(a, m(Fi.minheight, l), m(Fi.maxheight, l))), yi.stop().animate({
                    width: i,
                    height: a
                }, e, function() {
                    vi.removeClass(wt)
                }), nn(), zn && (ki.stop().animate({
                    width: Fi.nw
                }, e), Be({
                    guessIndex: Mi,
                    time: e,
                    keep: !0
                }), qn && _e.nav && ze(e)), Jn = n || !0, Cn())), Ui = yi.offset().left, this
            }, ci.setOptions = function(t) {
                return i.extend(o, t), _n(), this
            }, ci.shuffle = function() {
                return kn && z(kn) && _n(), this
            }, ci.destroy = function() {
                return ci.cancelFullScreen(), ci.stopAutoplay(), kn = ci.data = null, c(), Ln = [], en(Qe), _n.ok = !1, this
            }, ci.playVideo = function() {
                var t = Pn,
                    e = t.video,
                    n = Mi;
                return "object" == typeof e && t.videoReady && (Rn && ci.fullScreen && ci.cancelFullScreen(), N(function() {
                    return !xe.is() || n !== Mi
                }, function() {
                    n === Mi && (t.$video = t.$video || i(i.Fotorama.jst.video(e)), t.$video.appendTo(t[Qe]), vi.addClass(ht), In = t.$video, f(), Ti.blur(), Pi.blur(), rn("loadvideo"))
                })), this
            }, ci.stopVideo = function() {
                return hn(In, !0, !0), this
            }, yi.on("mousemove", mn), Hi = it(bi, {
                onStart: sn,
                onMove: function(t, e) {
                    pn(yi, e.edge)
                },
                onTouchEnd: ln,
                onEnd: function(t) {
                    pn(yi);
                    var e = (He && !si || t.touch) && o.arrows && "always" !== o.arrows;
                    if (t.moved || e && t.pos !== t.newPos && !t.control) {
                        var n = y(t.newPos, Fi.w, o.margin, Nn);
                        ci.show({
                            index: n,
                            time: Un ? Gn : t.time,
                            overPos: t.overPos,
                            user: !0
                        })
                    } else t.aborted || t.control || vn(t.startEvent, e)
                },
                timeLow: 1,
                timeHigh: 1,
                friction: 2,
                select: "." + Qt + ", ." + Qt + " *",
                $wrap: yi
            }), qi = it(Ei, {
                onStart: sn,
                onMove: function(t, e) {
                    pn(ki, e.edge)
                },
                onTouchEnd: ln,
                onEnd: function(t) {
                    function e() {
                        Be.l = t.newPos, cn(), un(), we(t.newPos, !0)
                    }
                    if (t.moved) t.pos !== t.newPos ? (ii = !0, J(Ei, {
                        time: t.time,
                        pos: t.newPos,
                        overPos: t.overPos,
                        onEnd: e
                    }), we(t.newPos), Kn && pn(ki, M(t.newPos, qi.min, qi.max))) : e();
                    else {
                        var n = t.$target.closest("." + Ft, Ei)[0];
                        n && bn.call(n, t.startEvent)
                    }
                },
                timeLow: .5,
                timeHigh: 2,
                friction: 5,
                $wrap: ki
            }), zi = ot(yi, {
                shift: !0,
                onEnd: function(t, e) {
                    sn(), ln(), ci.show({
                        index: e,
                        slow: t.altKey
                    })
                }
            }), Wi = ot(ki, {
                onEnd: function(t, e) {
                    sn(), ln();
                    var n = x(Ei) + .25 * e;
                    Ei.css(u(s(n, qi.min, qi.max))), Kn && pn(ki, M(n, qi.min, qi.max)), Wi.prevent = {
                        "<": n >= qi.max,
                        ">": n <= qi.min
                    }, clearTimeout(Wi.t), Wi.t = setTimeout(function() {
                        Be.l = n, we(n, !0)
                    }, qe), we(n)
                }
            }), vi.hover(function() {
                setTimeout(function() {
                    ri || fn(!(si = !0))
                }, 0)
            }, function() {
                si && fn(!(si = !1))
            }), F(Ti, function(t) {
                K(t), wn.call(this, t)
            }, {
                onStart: function() {
                    sn(), Hi.control = !0
                },
                onTouchEnd: ln
            }), Ti.each(function() {
                G(this, function(t) {
                    wn.call(this, t)
                }), xn(this)
            }), G(Li, ci.toggleFullScreen), xn(Li), i.each("load push pop shift unshift reverse sort splice".split(" "), function(t, e) {
                ci[e] = function() {
                    return kn = kn || [], "load" !== e ? Array.prototype[e].apply(kn, arguments) : arguments[0] && "object" == typeof arguments[0] && arguments[0].length && (kn = q(arguments[0])), _n(), ci
                }
            }), _n()
        }, i.fn.fotorama = function(e) {
            return this.each(function() {
                var n = this,
                    o = i(this),
                    a = o.data(),
                    r = a.fotorama;
                r ? r.setOptions(e, !0) : N(function() {
                    return !P(n)
                }, function() {
                    a.urtext = o.html(), new i.Fotorama(o, i.extend({}, nn, t.fotoramaDefaults, e, a))
                })
            })
        }, i.Fotorama.instances = [], i.Fotorama.cache = {}, i.Fotorama.measures = {}, i = i || {}, i.Fotorama = i.Fotorama || {}, i.Fotorama.jst = i.Fotorama.jst || {}, i.Fotorama.jst.style = function(t) {
            var e, n = "";
            return be.escape, n += ".fotorama" + (null == (e = t.s) ? "" : e) + " .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:" + (null == (e = t.m) ? "" : e) + "px;\nheight:" + (null == (e = t.h) ? "" : e) + "px}\n.fotorama" + (null == (e = t.s) ? "" : e) + " .fotorama__thumb-border{\nheight:" + (null == (e = t.h - t.b * (t.q ? 0 : 2)) ? "" : e) + "px;\nborder-width:" + (null == (e = t.b) ? "" : e) + "px;\nmargin-top:" + (null == (e = t.m) ? "" : e) + "px}"
        }, i.Fotorama.jst.video = function(t) {
            function e() {
                n += i.call(arguments, "")
            }
            var n = "",
                i = (be.escape, Array.prototype.join);
            return n += '<div class="fotorama__video"><iframe src="', e(("youtube" == t.type ? t.p + "youtube.com/embed/" + t.id + "?autoplay=1" : "vimeo" == t.type ? t.p + "player.vimeo.com/video/" + t.id + "?autoplay=1&badge=0" : t.id) + (t.s && "custom" != t.type ? "&" + t.s : "")), n += '" frameborder="0" allowfullscreen></iframe></div>\n'
        }, i(function() {
            i("." + lt + ':not([data-auto="false"])').fotorama()
        })
    }(window, document, location, "undefined" != typeof jQuery && jQuery), ! function(t, e) {
        function n(t) {
            return "object" == typeof t
        }

        function i(t) {
            return "string" == typeof t
        }

        function o(t) {
            return "number" == typeof t
        }

        function a(t) {
            return t === e
        }

        function r() {
            F = google.maps, O || (O = {
                verbose: !1,
                queryLimit: {
                    attempt: 5,
                    delay: 250,
                    random: 250
                },
                classes: function() {
                    var e = {};
                    return t.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "), function(t, n) {
                        e[n] = F[n]
                    }), e
                }(),
                map: {
                    mapTypeId: F.MapTypeId.ROADMAP,
                    center: [46.578498, 2.457275],
                    zoom: 2
                },
                overlay: {
                    pane: "floatPane",
                    content: "",
                    offset: {
                        x: 0,
                        y: 0
                    }
                },
                geoloc: {
                    getCurrentPosition: {
                        maximumAge: 6e4,
                        timeout: 5e3
                    }
                }
            })
        }

        function s(t, e) {
            return a(t) ? "gmap3_" + (e ? H + 1 : ++H) : t
        }

        function l(t) {
            var e, n = F.version.split(".");
            for (t = t.split("."), e = 0; e < n.length; e++) n[e] = parseInt(n[e], 10);
            for (e = 0; e < t.length; e++) {
                if (t[e] = parseInt(t[e], 10), !n.hasOwnProperty(e)) return !1;
                if (n[e] < t[e]) return !1
            }
            return !0
        }

        function c(e, n, i, o, a) {
            function r(n, o) {
                n && t.each(n, function(t, n) {
                    var r = e,
                        s = n;
                    q(n) && (r = n[0], s = n[1]), o(i, t, function(t) {
                        s.apply(r, [a || i, t, l])
                    })
                })
            }
            var s = n.td || {},
                l = {
                    id: o,
                    data: s.data,
                    tag: s.tag
                };
            r(s.events, F.event.addListener), r(s.onces, F.event.addListenerOnce)
        }

        function u(t) {
            var e, n = [];
            for (e in t) t.hasOwnProperty(e) && n.push(e);
            return n
        }

        function d(t, e) {
            var n, i = arguments;
            for (n = 2; n < i.length; n++)
                if (e in i[n] && i[n].hasOwnProperty(e)) return void(t[e] = i[n][e])
        }

        function p(e, n) {
            var i, o, a = ["data", "tag", "id", "events", "onces"],
                r = {};
            if (e.td)
                for (i in e.td) e.td.hasOwnProperty(i) && "options" !== i && "values" !== i && (r[i] = e.td[i]);
            for (o = 0; o < a.length; o++) d(r, a[o], n, e.td);
            return r.options = t.extend({}, e.opts || {}, n.options || {}), r
        }

        function h() {
            if (O.verbose) {
                var t, e = [];
                if (window.console && z(console.error)) {
                    for (t = 0; t < arguments.length; t++) e.push(arguments[t]);
                    console.error.apply(console, e)
                } else {
                    for (e = "", t = 0; t < arguments.length; t++) e += arguments[t].toString() + " ";
                    alert(e)
                }
            }
        }

        function f(t) {
            return (o(t) || i(t)) && "" !== t && !isNaN(t)
        }

        function m(t) {
            var e, i = [];
            if (!a(t))
                if (n(t))
                    if (o(t.length)) i = t;
                    else
                        for (e in t) i.push(t[e]);
            else i.push(t);
            return i
        }

        function g(e) {
            return e ? z(e) ? e : (e = m(e), function(i) {
                var o;
                if (a(i)) return !1;
                if (n(i)) {
                    for (o = 0; o < i.length; o++)
                        if (t.inArray(i[o], e) >= 0) return !0;
                    return !1
                }
                return t.inArray(i, e) >= 0
            }) : void 0
        }

        function v(t, e, n) {
            var o = e ? t : null;
            return !t || i(t) ? o : t.latLng ? v(t.latLng) : t instanceof F.LatLng ? t : f(t.lat) ? new F.LatLng(t.lat, t.lng) : !n && q(t) && f(t[0]) && f(t[1]) ? new F.LatLng(t[0], t[1]) : o
        }

        function y(t) {
            var e, n;
            return !t || t instanceof F.LatLngBounds ? t || null : (q(t) ? 2 === t.length ? (e = v(t[0]), n = v(t[1])) : 4 === t.length && (e = v([t[0], t[1]]), n = v([t[2], t[3]])) : "ne" in t && "sw" in t ? (e = v(t.ne), n = v(t.sw)) : "n" in t && "e" in t && "s" in t && "w" in t && (e = v([t.n, t.e]), n = v([t.s, t.w])), e && n ? new F.LatLngBounds(n, e) : null)
        }

        function b(t, e, n, o, a) {
            var r = n ? v(o.td, !1, !0) : !1,
                s = r ? {
                    latLng: r
                } : o.td.address ? i(o.td.address) ? {
                    address: o.td.address
                } : o.td.address : !1,
                l = s ? B.get(s) : !1,
                c = this;
            s ? (a = a || 0, l ? (o.latLng = l.results[0].geometry.location, o.results = l.results, o.status = l.status, e.apply(t, [o])) : (s.location && (s.location = v(s.location)), s.bounds && (s.bounds = y(s.bounds)), T().geocode(s, function(i, r) {
                r === F.GeocoderStatus.OK ? (B.store(s, {
                    results: i,
                    status: r
                }), o.latLng = i[0].geometry.location, o.results = i, o.status = r, e.apply(t, [o])) : r === F.GeocoderStatus.OVER_QUERY_LIMIT && a < O.queryLimit.attempt ? setTimeout(function() {
                    b.apply(c, [t, e, n, o, a + 1])
                }, O.queryLimit.delay + Math.floor(Math.random() * O.queryLimit.random)) : (h("geocode failed", r, s), o.latLng = o.results = !1, o.status = r, e.apply(t, [o]))
            }))) : (o.latLng = v(o.td, !1, !0), e.apply(t, [o]))
        }

        function w(e, n, i, o) {
            function a() {
                do s++; while (s < e.length && !("address" in e[s]));
                return s >= e.length ? void i.apply(n, [o]) : void b(r, function(n) {
                    delete n.td, t.extend(e[s], n), a.apply(r, [])
                }, !0, {
                    td: e[s]
                })
            }
            var r = this,
                s = -1;
            a()
        }

        function x(t, e, n) {
            var i = !1;
            navigator && navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(o) {
                i || (i = !0, n.latLng = new F.LatLng(o.coords.latitude, o.coords.longitude), e.apply(t, [n]))
            }, function() {
                i || (i = !0, n.latLng = !1, e.apply(t, [n]))
            }, n.opts.getCurrentPosition) : (n.latLng = !1, e.apply(t, [n]))
        }

        function _(t) {
            var e, i = !1;
            if (n(t) && t.hasOwnProperty("get")) {
                for (e in t)
                    if ("get" !== e) return !1;
                i = !t.get.hasOwnProperty("callback")
            }
            return i
        }

        function T() {
            return W.geocoder || (W.geocoder = new F.Geocoder), W.geocoder
        }

        function C() {
            var t = [];
            this.get = function(e) {
                if (t.length) {
                    var i, o, a, r, s, l = u(e);
                    for (i = 0; i < t.length; i++) {
                        for (r = t[i], s = l.length === r.keys.length, o = 0; o < l.length && s; o++) a = l[o], s = a in r.request, s && (s = n(e[a]) && "equals" in e[a] && z(e[a]) ? e[a].equals(r.request[a]) : e[a] === r.request[a]);
                        if (s) return r.results
                    }
                }
            }, this.store = function(e, n) {
                t.push({
                    request: e,
                    keys: u(e),
                    results: n
                })
            }
        }

        function k() {
            var t = [],
                e = this;
            e.empty = function() {
                return !t.length
            }, e.add = function(e) {
                t.push(e)
            }, e.get = function() {
                return t.length ? t[0] : !1
            }, e.ack = function() {
                t.shift()
            }
        }

        function E() {
            function e(t) {
                return {
                    id: t.id,
                    name: t.name,
                    object: t.obj,
                    tag: t.tag,
                    data: t.data
                }
            }

            function n(t) {
                z(t.setMap) && t.setMap(null), z(t.remove) && t.remove(), z(t.free) && t.free(), t = null
            }
            var i = {},
                o = {},
                r = this;
            r.add = function(t, e, n, a) {
                var l = t.td || {},
                    c = s(l.id);
                return i[e] || (i[e] = []), c in o && r.clearById(c), o[c] = {
                    obj: n,
                    sub: a,
                    name: e,
                    id: c,
                    tag: l.tag,
                    data: l.data
                }, i[e].push(c), c
            }, r.getById = function(t, n, i) {
                var a = !1;
                return t in o && (a = n ? o[t].sub : i ? e(o[t]) : o[t].obj), a
            }, r.get = function(t, n, a, r) {
                var s, l, c = g(a);
                if (!i[t] || !i[t].length) return null;
                for (s = i[t].length; s;)
                    if (s--, l = i[t][n ? s : i[t].length - s - 1], l && o[l]) {
                        if (c && !c(o[l].tag)) continue;
                        return r ? e(o[l]) : o[l].obj
                    }
                return null
            }, r.all = function(t, n, r) {
                var s = [],
                    l = g(n),
                    c = function(t) {
                        var n, a;
                        for (n = 0; n < i[t].length; n++)
                            if (a = i[t][n], a && o[a]) {
                                if (l && !l(o[a].tag)) continue;
                                s.push(r ? e(o[a]) : o[a].obj)
                            }
                    };
                if (t in i) c(t);
                else if (a(t))
                    for (t in i) c(t);
                return s
            }, r.rm = function(t, e, n) {
                var a, s;
                if (!i[t]) return !1;
                if (e)
                    if (n)
                        for (a = i[t].length - 1; a >= 0 && (s = i[t][a], !e(o[s].tag)); a--);
                    else
                        for (a = 0; a < i[t].length && (s = i[t][a], !e(o[s].tag)); a++);
                else a = n ? i[t].length - 1 : 0;
                return a in i[t] ? r.clearById(i[t][a], a) : !1
            }, r.clearById = function(t, e) {
                if (t in o) {
                    var r, s = o[t].name;
                    for (r = 0; a(e) && r < i[s].length; r++) t === i[s][r] && (e = r);
                    return n(o[t].obj), o[t].sub && n(o[t].sub), delete o[t], i[s].splice(e, 1), !0
                }
                return !1
            }, r.objGetById = function(t) {
                var e, n;
                if (i.clusterer)
                    for (n in i.clusterer)
                        if ((e = o[i.clusterer[n]].obj.getById(t)) !== !1) return e;
                return !1
            }, r.objClearById = function(t) {
                var e;
                if (i.clusterer)
                    for (e in i.clusterer)
                        if (o[i.clusterer[e]].obj.clearById(t)) return !0;
                return null
            }, r.clear = function(t, e, n, o) {
                var a, s, l, c = g(o);
                if (t && t.length) t = m(t);
                else {
                    t = [];
                    for (a in i) t.push(a)
                }
                for (s = 0; s < t.length; s++)
                    if (l = t[s], e) r.rm(l, c, !0);
                    else if (n) r.rm(l, c, !1);
                else
                    for (; r.rm(l, c, !1););
            }, r.objClear = function(e, n, a, r) {
                var s;
                if (i.clusterer && (t.inArray("marker", e) >= 0 || !e.length))
                    for (s in i.clusterer) o[i.clusterer[s]].obj.clear(n, a, r)
            }
        }

        function S(e, n, o) {
            function a(t) {
                var e = {};
                return e[t] = {}, e
            }

            function r() {
                var t;
                for (t in o)
                    if (o.hasOwnProperty(t) && !l.hasOwnProperty(t)) return t
            }
            var s, l = {},
                c = this,
                u = {
                    latLng: {
                        map: !1,
                        marker: !1,
                        infowindow: !1,
                        circle: !1,
                        overlay: !1,
                        getlatlng: !1,
                        getmaxzoom: !1,
                        getelevation: !1,
                        streetviewpanorama: !1,
                        getaddress: !0
                    },
                    geoloc: {
                        getgeoloc: !0
                    }
                };
            i(o) && (o = a(o)), c.run = function() {
                for (var i, a; i = r();) {
                    if (z(e[i])) return s = i, a = t.extend(!0, {}, O[i] || {}, o[i].options || {}), void(i in u.latLng ? o[i].values ? w(o[i].values, e, e[i], {
                        td: o[i],
                        opts: a,
                        session: l
                    }) : b(e, e[i], u.latLng[i], {
                        td: o[i],
                        opts: a,
                        session: l
                    }) : i in u.geoloc ? x(e, e[i], {
                        td: o[i],
                        opts: a,
                        session: l
                    }) : e[i].apply(e, [{
                        td: o[i],
                        opts: a,
                        session: l
                    }]));
                    l[i] = null
                }
                n.apply(e, [o, l])
            }, c.ack = function(t) {
                l[s] = t, c.run.apply(c, [])
            }
        }

        function $() {
            return W.ds || (W.ds = new F.DirectionsService), W.ds
        }

        function I() {
            return W.dms || (W.dms = new F.DistanceMatrixService), W.dms
        }

        function P() {
            return W.mzs || (W.mzs = new F.MaxZoomService), W.mzs
        }

        function L() {
            return W.es || (W.es = new F.ElevationService), W.es
        }

        function N(t) {
            function e() {
                var t = this;
                return t.onAdd = function() {}, t.onRemove = function() {}, t.draw = function() {}, O.classes.OverlayView.apply(t, [])
            }
            e.prototype = O.classes.OverlayView.prototype;
            var n = new e;
            return n.setMap(t), n
        }

        function A(e, i, o) {
            function a(t) {
                A[t] || (delete D[t].options.map, A[t] = new O.classes.Marker(D[t].options), c(e, {
                    td: D[t]
                }, A[t], D[t].id))
            }

            function r() {
                return (y = M.getProjection()) ? (k = !0, $.push(F.event.addListener(i, "zoom_changed", h)), $.push(F.event.addListener(i, "bounds_changed", h)), void m()) : void setTimeout(function() {
                    r.apply(S, [])
                }, 25)
            }

            function l(t) {
                n(I[t]) ? (z(I[t].obj.setMap) && I[t].obj.setMap(null), z(I[t].obj.remove) && I[t].obj.remove(), z(I[t].shadow.remove) && I[t].obj.remove(), z(I[t].shadow.setMap) && I[t].shadow.setMap(null), delete I[t].obj, delete I[t].shadow) : A[t] && A[t].setMap(null), delete I[t]
            }

            function u() {
                var t, e, n, i, o, a, r, s, l = Math.cos,
                    c = Math.sin,
                    u = arguments;
                return u[0] instanceof F.LatLng ? (t = u[0].lat(), n = u[0].lng(), u[1] instanceof F.LatLng ? (e = u[1].lat(), i = u[1].lng()) : (e = u[1], i = u[2])) : (t = u[0], n = u[1], u[2] instanceof F.LatLng ? (e = u[2].lat(), i = u[2].lng()) : (e = u[2], i = u[3])), o = Math.PI * t / 180, a = Math.PI * n / 180, r = Math.PI * e / 180, s = Math.PI * i / 180, 6371e3 * Math.acos(Math.min(l(o) * l(r) * l(a) * l(s) + l(o) * c(a) * l(r) * c(s) + c(o) * c(r), 1))
            }

            function d() {
                var t = u(i.getCenter(), i.getBounds().getNorthEast()),
                    e = new F.Circle({
                        center: i.getCenter(),
                        radius: 1.25 * t
                    });
                return e.getBounds()
            }

            function p() {
                var t, e = {};
                for (t in I) e[t] = !0;
                return e
            }

            function h() {
                clearTimeout(v), v = setTimeout(m, 25)
            }

            function f(t) {
                var e = y.fromLatLngToDivPixel(t),
                    n = y.fromDivPixelToLatLng(new F.Point(e.x + o.radius, e.y - o.radius)),
                    i = y.fromDivPixelToLatLng(new F.Point(e.x - o.radius, e.y + o.radius));
                return new F.LatLngBounds(i, n)
            }

            function m() {
                if (!_ && !C && k) {
                    var e, n, a, r, s, c, u, h, m, g, v, y = !1,
                        x = [],
                        S = {},
                        $ = i.getZoom(),
                        P = "maxZoom" in o && $ > o.maxZoom,
                        L = p();
                    for (T = !1, $ > 3 && (s = d(), y = s.getSouthWest().lng() < s.getNorthEast().lng()), e = 0; e < D.length; e++) !D[e] || y && !s.contains(D[e].options.position) || b && !b(j[e]) || x.push(e);
                    for (;;) {
                        for (e = 0; S[e] && e < x.length;) e++;
                        if (e === x.length) break;
                        if (r = [], E && !P) {
                            v = 10;
                            do
                                for (h = r, r = [], v--, u = h.length ? s.getCenter() : D[x[e]].options.position, s = f(u), n = e; n < x.length; n++) S[n] || s.contains(D[x[n]].options.position) && r.push(n); while (h.length < r.length && r.length > 1 && v)
                        } else
                            for (n = e; n < x.length; n++)
                                if (!S[n]) {
                                    r.push(n);
                                    break
                                } for (c = {
                                indexes: [],
                                ref: []
                            }, m = g = 0, a = 0; a < r.length; a++) S[r[a]] = !0, c.indexes.push(x[r[a]]), c.ref.push(x[r[a]]), m += D[x[r[a]]].options.position.lat(), g += D[x[r[a]]].options.position.lng();
                        m /= r.length, g /= r.length, c.latLng = new F.LatLng(m, g), c.ref = c.ref.join("-"), c.ref in L ? delete L[c.ref] : (1 === r.length && (I[c.ref] = !0), w(c))
                    }
                    t.each(L, function(t) {
                        l(t)
                    }), C = !1
                }
            }
            var v, y, b, w, x, _ = !1,
                T = !1,
                C = !1,
                k = !1,
                E = !0,
                S = this,
                $ = [],
                I = {},
                P = {},
                L = {},
                A = [],
                D = [],
                j = [],
                M = N(i, o.radius);
            r(), S.getById = function(t) {
                return t in P ? (a(P[t]), A[P[t]]) : !1
            }, S.rm = function(t) {
                var e = P[t];
                A[e] && A[e].setMap(null), delete A[e], A[e] = !1, delete D[e], D[e] = !1, delete j[e], j[e] = !1, delete P[t], delete L[e], T = !0
            }, S.clearById = function(t) {
                return t in P ? (S.rm(t), !0) : void 0
            }, S.clear = function(t, e, n) {
                var i, o, a, r, s, l = [],
                    c = g(n);
                for (t ? (i = D.length - 1, o = -1, a = -1) : (i = 0, o = D.length, a = 1), r = i; r !== o && (!D[r] || c && !c(D[r].tag) || (l.push(L[r]), !e && !t)); r += a);
                for (s = 0; s < l.length; s++) S.rm(l[s])
            }, S.add = function(t, e) {
                t.id = s(t.id), S.clearById(t.id), P[t.id] = A.length, L[A.length] = t.id, A.push(null), D.push(t), j.push(e), T = !0
            }, S.addMarker = function(t, n) {
                n = n || {}, n.id = s(n.id), S.clearById(n.id), n.options || (n.options = {}), n.options.position = t.getPosition(), c(e, {
                    td: n
                }, t, n.id), P[n.id] = A.length, L[A.length] = n.id, A.push(t), D.push(n), j.push(n.data || {}), T = !0
            }, S.td = function(t) {
                return D[t]
            }, S.value = function(t) {
                return j[t]
            }, S.marker = function(t) {
                return t in A ? (a(t), A[t]) : !1
            }, S.markerIsSet = function(t) {
                return Boolean(A[t])
            }, S.setMarker = function(t, e) {
                A[t] = e
            }, S.store = function(t, e, n) {
                I[t.ref] = {
                    obj: e,
                    shadow: n
                }
            }, S.free = function() {
                var e;
                for (e = 0; e < $.length; e++) F.event.removeListener($[e]);
                $ = [], t.each(I, function(t) {
                    l(t)
                }), I = {}, t.each(D, function(t) {
                    D[t] = null
                }), D = [], t.each(A, function(t) {
                    A[t] && (A[t].setMap(null), delete A[t])
                }), A = [], t.each(j, function(t) {
                    delete j[t]
                }), j = [], P = {}, L = {}
            }, S.filter = function(t) {
                b = t, m()
            }, S.enable = function(t) {
                E !== t && (E = t, m())
            }, S.display = function(t) {
                w = t
            }, S.error = function(t) {
                x = t
            }, S.beginUpdate = function() {
                _ = !0
            }, S.endUpdate = function() {
                _ = !1, T && m()
            }, S.autofit = function(t) {
                var e;
                for (e = 0; e < D.length; e++) D[e] && t.extend(D[e].options.position)
            }
        }

        function D(t, e) {
            var n = this;
            n.id = function() {
                return t
            }, n.filter = function(t) {
                e.filter(t)
            }, n.enable = function() {
                e.enable(!0)
            }, n.disable = function() {
                e.enable(!1)
            }, n.add = function(t, n, i) {
                i || e.beginUpdate(), e.addMarker(t, n), i || e.endUpdate()
            }, n.getById = function(t) {
                return e.getById(t)
            }, n.clearById = function(t, n) {
                var i;
                return n || e.beginUpdate(), i = e.clearById(t), n || e.endUpdate(), i
            }, n.clear = function(t, n, i, o) {
                o || e.beginUpdate(), e.clear(t, n, i), o || e.endUpdate()
            }
        }

        function j(e, n, i, o) {
            var a = this,
                r = [];
            O.classes.OverlayView.call(a), a.setMap(e), a.onAdd = function() {
                var e = a.getPanes();
                n.pane in e && t(e[n.pane]).append(o), t.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "), function(e, n) {
                    r.push(F.event.addDomListener(o[0], n, function(e) {
                        t.Event(e).stopPropagation(), F.event.trigger(a, n, [e]), a.draw()
                    }))
                }), r.push(F.event.addDomListener(o[0], "contextmenu", function(e) {
                    t.Event(e).stopPropagation(), F.event.trigger(a, "rightclick", [e]), a.draw()
                }))
            }, a.getPosition = function() {
                return i
            }, a.setPosition = function(t) {
                i = t, a.draw()
            }, a.draw = function() {
                var t = a.getProjection().fromLatLngToDivPixel(i);
                o.css("left", t.x + n.offset.x + "px").css("top", t.y + n.offset.y + "px")
            }, a.onRemove = function() {
                var t;
                for (t = 0; t < r.length; t++) F.event.removeListener(r[t]);
                o.remove()
            }, a.hide = function() {
                o.hide()
            }, a.show = function() {
                o.show()
            }, a.toggle = function() {
                o && (o.is(":visible") ? a.show() : a.hide())
            }, a.toggleDOM = function() {
                a.setMap(a.getMap() ? null : e)
            }, a.getDOMElement = function() {
                return o[0]
            }
        }

        function M(o) {
            function r() {
                !x && (x = T.get()) && x.run()
            }

            function u() {
                x = null, T.ack(), r.call(_)
            }

            function d(t) {
                var e, n = t.td.callback;
                n && (e = Array.prototype.slice.call(arguments, 1), z(n) ? n.apply(o, e) : q(n) && z(n[1]) && n[1].apply(n[0], e))
            }

            function f(t, e, n) {
                n && c(o, t, e, n), d(t, e), x.ack(e)
            }

            function g(e, n) {
                n = n || {};
                var i = n.td && n.td.options ? n.td.options : 0;
                N ? i && (i.center && (i.center = v(i.center)), N.setOptions(i)) : (i = n.opts || t.extend(!0, {}, O.map, i || {}), i.center = e || v(i.center), N = new O.classes.Map(o.get(0), i))
            }

            function b(n) {
                var i, a, r = new A(o, N, n),
                    s = {},
                    l = {},
                    u = [],
                    d = /^[0-9]+$/;
                for (a in n) d.test(a) ? (u.push(1 * a), l[a] = n[a], l[a].width = l[a].width || 0, l[a].height = l[a].height || 0) : s[a] = n[a];
                return u.sort(function(t, e) {
                    return t > e
                }), i = s.calculator ? function(e) {
                    var n = [];
                    return t.each(e, function(t, e) {
                        n.push(r.value(e))
                    }), s.calculator.apply(o, [n])
                } : function(t) {
                    return t.length
                }, r.error(function() {
                    h.apply(_, arguments)
                }), r.display(function(a) {
                    var d, p, h, f, m, g, y = i(a.indexes);
                    if (n.force || y > 1)
                        for (d = 0; d < u.length; d++) u[d] <= y && (p = l[u[d]]);
                    p ? (m = p.offset || [-p.width / 2, -p.height / 2], h = t.extend({}, s), h.options = t.extend({
                        pane: "overlayLayer",
                        content: p.content ? p.content.replace("CLUSTER_COUNT", y) : "",
                        offset: {
                            x: ("x" in m ? m.x : m[0]) || 0,
                            y: ("y" in m ? m.y : m[1]) || 0
                        }
                    }, s.options || {}), f = _.overlay({
                        td: h,
                        opts: h.options,
                        latLng: v(a)
                    }, !0), h.options.pane = "floatShadow", h.options.content = t(document.createElement("div")).width(p.width + "px").height(p.height + "px").css({
                        cursor: "pointer"
                    }), g = _.overlay({
                        td: h,
                        opts: h.options,
                        latLng: v(a)
                    }, !0), s.data = {
                        latLng: v(a),
                        markers: []
                    }, t.each(a.indexes, function(t, e) {
                        s.data.markers.push(r.value(e)), r.markerIsSet(e) && r.marker(e).setMap(null)
                    }), c(o, {
                        td: s
                    }, g, e, {
                        main: f,
                        shadow: g
                    }), r.store(a, f, g)) : t.each(a.indexes, function(t, e) {
                        r.marker(e).setMap(N)
                    })
                }), r
            }

            function w(e, n, i) {
                var a = [],
                    r = "values" in e.td;
                return r || (e.td.values = [{
                    options: e.opts
                }]), e.td.values.length ? (g(), t.each(e.td.values, function(t, r) {
                    var s, l, u, d, h = p(e, r);
                    if (h.options[i])
                        if (h.options[i][0][0] && q(h.options[i][0][0]))
                            for (l = 0; l < h.options[i].length; l++)
                                for (u = 0; u < h.options[i][l].length; u++) h.options[i][l][u] = v(h.options[i][l][u]);
                        else
                            for (l = 0; l < h.options[i].length; l++) h.options[i][l] = v(h.options[i][l]);
                    h.options.map = N, d = new F[n](h.options), a.push(d), s = C.add({
                        td: h
                    }, n.toLowerCase(), d), c(o, {
                        td: h
                    }, d, s)
                }), void f(e, r ? a : a[0])) : void f(e, !1)
            }
            var x, _ = this,
                T = new k,
                C = new E,
                N = null;
            _._plan = function(t) {
                var e;
                for (e = 0; e < t.length; e++) T.add(new S(_, u, t[e]));
                r()
            }, _.map = function(t) {
                g(t.latLng, t), c(o, t, N), f(t, N)
            }, _.destroy = function(t) {
                C.clear(), o.empty(), N && (N = null), f(t, !0)
            }, _.overlay = function(e, n) {
                var i = [],
                    a = "values" in e.td;
                return a || (e.td.values = [{
                    latLng: e.latLng,
                    options: e.opts
                }]), e.td.values.length ? (j.__initialised || (j.prototype = new O.classes.OverlayView, j.__initialised = !0), t.each(e.td.values, function(a, r) {
                    var s, l, u = p(e, r),
                        d = t(document.createElement("div")).css({
                            border: "none",
                            borderWidth: 0,
                            position: "absolute"
                        });
                    d.append(u.options.content), l = new j(N, u.options, v(u) || v(r), d), i.push(l), d = null, n || (s = C.add(e, "overlay", l), c(o, {
                        td: u
                    }, l, s))
                }), n ? i[0] : void f(e, a ? i : i[0])) : void f(e, !1)
            }, _.marker = function(e) {
                var n, i, a, r = "values" in e.td,
                    l = !N;
                return r || (e.opts.position = e.latLng || v(e.opts.position), e.td.values = [{
                    options: e.opts
                }]), e.td.values.length ? (l && g(), e.td.cluster && !N.getBounds() ? void F.event.addListenerOnce(N, "bounds_changed", function() {
                    _.marker.apply(_, [e])
                }) : void(e.td.cluster ? (e.td.cluster instanceof D ? (i = e.td.cluster, a = C.getById(i.id(), !0)) : (a = b(e.td.cluster), i = new D(s(e.td.id, !0), a), C.add(e, "clusterer", i, a)), a.beginUpdate(), t.each(e.td.values, function(t, n) {
                    var i = p(e, n);
                    i.options.position = v(i.options.position ? i.options.position : n), i.options.position && (i.options.map = N, l && (N.setCenter(i.options.position), l = !1), a.add(i, n))
                }), a.endUpdate(), f(e, i)) : (n = [], t.each(e.td.values, function(t, i) {
                    var a, r, s = p(e, i);
                    s.options.position = v(s.options.position ? s.options.position : i), s.options.position && (s.options.map = N, l && (N.setCenter(s.options.position), l = !1), r = new O.classes.Marker(s.options), n.push(r), a = C.add({
                        td: s
                    }, "marker", r), c(o, {
                        td: s
                    }, r, a))
                }), f(e, r ? n : n[0])))) : void f(e, !1)
            }, _.getroute = function(t) {
                t.opts.origin = v(t.opts.origin, !0), t.opts.destination = v(t.opts.destination, !0), $().route(t.opts, function(e, n) {
                    d(t, n === F.DirectionsStatus.OK ? e : !1, n), x.ack()
                })
            }, _.getdistance = function(t) {
                var e;
                for (t.opts.origins = m(t.opts.origins), e = 0; e < t.opts.origins.length; e++) t.opts.origins[e] = v(t.opts.origins[e], !0);
                for (t.opts.destinations = m(t.opts.destinations), e = 0; e < t.opts.destinations.length; e++) t.opts.destinations[e] = v(t.opts.destinations[e], !0);
                I().getDistanceMatrix(t.opts, function(e, n) {
                    d(t, n === F.DistanceMatrixStatus.OK ? e : !1, n), x.ack()
                })
            }, _.infowindow = function(n) {
                var i = [],
                    r = "values" in n.td;
                r || (n.latLng && (n.opts.position = n.latLng), n.td.values = [{
                    options: n.opts
                }]), t.each(n.td.values, function(t, s) {
                    var l, u, d = p(n, s);
                    d.options.position = v(d.options.position ? d.options.position : s.latLng), N || g(d.options.position), u = new O.classes.InfoWindow(d.options), u && (a(d.open) || d.open) && (r ? u.open(N, d.anchor || e) : u.open(N, d.anchor || (n.latLng ? e : n.session.marker ? n.session.marker : e))), i.push(u), l = C.add({
                        td: d
                    }, "infowindow", u), c(o, {
                        td: d
                    }, u, l)
                }), f(n, r ? i : i[0])
            }, _.circle = function(e) {
                var n = [],
                    i = "values" in e.td;
                return i || (e.opts.center = e.latLng || v(e.opts.center), e.td.values = [{
                    options: e.opts
                }]), e.td.values.length ? (t.each(e.td.values, function(t, i) {
                    var a, r, s = p(e, i);
                    s.options.center = v(s.options.center ? s.options.center : i), N || g(s.options.center), s.options.map = N, r = new O.classes.Circle(s.options), n.push(r), a = C.add({
                        td: s
                    }, "circle", r), c(o, {
                        td: s
                    }, r, a)
                }), void f(e, i ? n : n[0])) : void f(e, !1)
            }, _.getaddress = function(t) {
                d(t, t.results, t.status), x.ack()
            }, _.getlatlng = function(t) {
                d(t, t.results, t.status), x.ack()
            }, _.getmaxzoom = function(t) {
                P().getMaxZoomAtLatLng(t.latLng, function(e) {
                    d(t, e.status === F.MaxZoomStatus.OK ? e.zoom : !1, status), x.ack()
                })
            }, _.getelevation = function(t) {
                var e, n = [],
                    i = function(e, n) {
                        d(t, n === F.ElevationStatus.OK ? e : !1, n), x.ack()
                    };
                if (t.latLng) n.push(t.latLng);
                else
                    for (n = m(t.td.locations || []), e = 0; e < n.length; e++) n[e] = v(n[e]);
                if (n.length) L().getElevationForLocations({
                    locations: n
                }, i);
                else {
                    if (t.td.path && t.td.path.length)
                        for (e = 0; e < t.td.path.length; e++) n.push(v(t.td.path[e]));
                    n.length ? L().getElevationAlongPath({
                        path: n,
                        samples: t.td.samples
                    }, i) : x.ack()
                }
            }, _.defaults = function(e) {
                t.each(e.td, function(e, i) {
                    O[e] = n(O[e]) ? t.extend({}, O[e], i) : i
                }), x.ack(!0)
            }, _.rectangle = function(e) {
                var n = [],
                    i = "values" in e.td;
                return i || (e.td.values = [{
                    options: e.opts
                }]), e.td.values.length ? (t.each(e.td.values, function(t, i) {
                    var a, r, s = p(e, i);
                    s.options.bounds = y(s.options.bounds ? s.options.bounds : i), N || g(s.options.bounds.getCenter()), s.options.map = N, r = new O.classes.Rectangle(s.options), n.push(r), a = C.add({
                        td: s
                    }, "rectangle", r), c(o, {
                        td: s
                    }, r, a)
                }), void f(e, i ? n : n[0])) : void f(e, !1)
            }, _.polyline = function(t) {
                w(t, "Polyline", "path")
            }, _.polygon = function(t) {
                w(t, "Polygon", "paths")
            }, _.trafficlayer = function(t) {
                g();
                var e = C.get("trafficlayer");
                e || (e = new O.classes.TrafficLayer, e.setMap(N), C.add(t, "trafficlayer", e)), f(t, e)
            }, _.bicyclinglayer = function(t) {
                g();
                var e = C.get("bicyclinglayer");
                e || (e = new O.classes.BicyclingLayer, e.setMap(N), C.add(t, "bicyclinglayer", e)), f(t, e)
            }, _.groundoverlay = function(t) {
                t.opts.bounds = y(t.opts.bounds), t.opts.bounds && g(t.opts.bounds.getCenter());
                var e, n = new O.classes.GroundOverlay(t.opts.url, t.opts.bounds, t.opts.opts);
                n.setMap(N), e = C.add(t, "groundoverlay", n), f(t, n, e)
            }, _.streetviewpanorama = function(e) {
                e.opts.opts || (e.opts.opts = {}), e.latLng ? e.opts.opts.position = e.latLng : e.opts.opts.position && (e.opts.opts.position = v(e.opts.opts.position)), e.td.divId ? e.opts.container = document.getElementById(e.td.divId) : e.opts.container && (e.opts.container = t(e.opts.container).get(0));
                var n, i = new O.classes.StreetViewPanorama(e.opts.container, e.opts.opts);
                i && N.setStreetView(i), n = C.add(e, "streetviewpanorama", i), f(e, i, n)
            }, _.kmllayer = function(e) {
                var n = [],
                    i = "values" in e.td;
                return i || (e.td.values = [{
                    options: e.opts
                }]), e.td.values.length ? (t.each(e.td.values, function(t, i) {
                    var a, r, s, u = p(e, i);
                    N || g(), s = u.options, u.options.opts && (s = u.options.opts, u.options.url && (s.url = u.options.url)), s.map = N, r = l("3.10") ? new O.classes.KmlLayer(s) : new O.classes.KmlLayer(s.url, s), n.push(r), a = C.add({
                        td: u
                    }, "kmllayer", r), c(o, {
                        td: u
                    }, r, a)
                }), void f(e, i ? n : n[0])) : void f(e, !1)
            }, _.panel = function(e) {
                g();
                var n, i, r = 0,
                    s = 0,
                    l = t(document.createElement("div"));
                l.css({
                    position: "absolute",
                    zIndex: 1e3,
                    visibility: "hidden"
                }), e.opts.content && (i = t(e.opts.content), l.append(i), o.first().prepend(l), a(e.opts.left) ? a(e.opts.right) ? e.opts.center && (r = (o.width() - i.width()) / 2) : r = o.width() - i.width() - e.opts.right : r = e.opts.left, a(e.opts.top) ? a(e.opts.bottom) ? e.opts.middle && (s = (o.height() - i.height()) / 2) : s = o.height() - i.height() - e.opts.bottom : s = e.opts.top, l.css({
                    top: s,
                    left: r,
                    visibility: "visible"
                })), n = C.add(e, "panel", l), f(e, l, n), l = null
            }, _.directionsrenderer = function(e) {
                e.opts.map = N;
                var n, i = new F.DirectionsRenderer(e.opts);
                e.td.divId ? i.setPanel(document.getElementById(e.td.divId)) : e.td.container && i.setPanel(t(e.td.container).get(0)), n = C.add(e, "directionsrenderer", i), f(e, i, n)
            }, _.getgeoloc = function(t) {
                f(t, t.latLng)
            }, _.styledmaptype = function(t) {
                g();
                var e = new O.classes.StyledMapType(t.td.styles, t.opts);
                N.mapTypes.set(t.td.id, e), f(t, e)
            }, _.imagemaptype = function(t) {
                g();
                var e = new O.classes.ImageMapType(t.opts);
                N.mapTypes.set(t.td.id, e), f(t, e)
            }, _.autofit = function(e) {
                var n = new F.LatLngBounds;
                t.each(C.all(), function(t, e) {
                    e.getPosition ? n.extend(e.getPosition()) : e.getBounds ? (n.extend(e.getBounds().getNorthEast()), n.extend(e.getBounds().getSouthWest())) : e.getPaths ? e.getPaths().forEach(function(t) {
                        t.forEach(function(t) {
                            n.extend(t)
                        })
                    }) : e.getPath ? e.getPath().forEach(function(t) {
                        n.extend(t)
                    }) : e.getCenter ? n.extend(e.getCenter()) : "function" == typeof D && e instanceof D && (e = C.getById(e.id(), !0), e && e.autofit(n))
                }), n.isEmpty() || N.getBounds() && N.getBounds().equals(n) || ("maxZoom" in e.td && F.event.addListenerOnce(N, "bounds_changed", function() {
                    this.getZoom() > e.td.maxZoom && this.setZoom(e.td.maxZoom)
                }), N.fitBounds(n)), f(e, !0)
            }, _.clear = function(e) {
                if (i(e.td)) {
                    if (C.clearById(e.td) || C.objClearById(e.td)) return void f(e, !0);
                    e.td = {
                        name: e.td
                    }
                }
                e.td.id ? t.each(m(e.td.id), function(t, e) {
                    C.clearById(e) || C.objClearById(e)
                }) : (C.clear(m(e.td.name), e.td.last, e.td.first, e.td.tag), C.objClear(m(e.td.name), e.td.last, e.td.first, e.td.tag)), f(e, !0)
            }, _.get = function(n, o, a) {
                var r, s, l = o ? n : n.td;
                return o || (a = l.full), i(l) ? (s = C.getById(l, !1, a) || C.objGetById(l), s === !1 && (r = l, l = {})) : r = l.name, "map" === r && (s = N), s || (s = [], l.id ? (t.each(m(l.id), function(t, e) {
                    s.push(C.getById(e, !1, a) || C.objGetById(e))
                }), q(l.id) || (s = s[0])) : (t.each(r ? m(r) : [e], function(e, n) {
                    var i;
                    l.first ? (i = C.get(n, !1, l.tag, a), i && s.push(i)) : l.all ? t.each(C.all(n, l.tag, a), function(t, e) {
                        s.push(e)
                    }) : (i = C.get(n, !0, l.tag, a), i && s.push(i))
                }), l.all || q(r) || (s = s[0]))), s = q(s) || !l.all ? s : [s], o ? s : void f(n, s)
            }, _.exec = function(e) {
                t.each(m(e.td.func), function(n, i) {
                    t.each(_.get(e.td, !0, e.td.hasOwnProperty("full") ? e.td.full : !0), function(t, e) {
                        i.call(o, e)
                    })
                }), f(e, !0)
            }, _.trigger = function(e) {
                if (i(e.td)) F.event.trigger(N, e.td);
                else {
                    var n = [N, e.td.eventName];
                    e.td.var_args && t.each(e.td.var_args, function(t, e) {
                        n.push(e)
                    }), F.event.trigger.apply(F.event, n)
                }
                d(e), x.ack()
            }
        }
        var O, F, H = 0,
            z = t.isFunction,
            q = t.isArray,
            W = {},
            B = new C;
        t.fn.gmap3 = function() {
            var e, n = [],
                i = !0,
                o = [];
            for (r(), e = 0; e < arguments.length; e++) arguments[e] && n.push(arguments[e]);
            return n.length || n.push("map"), t.each(this, function() {
                var e = t(this),
                    a = e.data("gmap3");
                i = !1, a || (a = new M(e), e.data("gmap3", a)), 1 !== n.length || "get" !== n[0] && !_(n[0]) ? a._plan(n) : o.push("get" === n[0] ? a.get("map", !0) : a.get(n[0].get, !0, n[0].get.full))
            }), o.length ? 1 === o.length ? o[0] : o : this
        }
    }(jQuery),
    function(t) {
        t.fn.hoverIntent = function(e, n, i) {
            var o = {
                interval: 100,
                sensitivity: 6,
                timeout: 0
            };
            o = "object" == typeof e ? t.extend(o, e) : t.isFunction(n) ? t.extend(o, {
                over: e,
                out: n,
                selector: i
            }) : t.extend(o, {
                over: e,
                out: e,
                selector: n
            });
            var a, r, s, l, c = function(t) {
                    a = t.pageX, r = t.pageY
                },
                u = function(e, n) {
                    return n.hoverIntent_t = clearTimeout(n.hoverIntent_t), Math.sqrt((s - a) * (s - a) + (l - r) * (l - r)) < o.sensitivity ? (t(n).off("mousemove.hoverIntent", c), n.hoverIntent_s = !0, o.over.apply(n, [e])) : (s = a, l = r, n.hoverIntent_t = setTimeout(function() {
                        u(e, n)
                    }, o.interval), void 0)
                },
                d = function(t, e) {
                    return e.hoverIntent_t = clearTimeout(e.hoverIntent_t), e.hoverIntent_s = !1, o.out.apply(e, [t])
                },
                p = function(e) {
                    var n = t.extend({}, e),
                        i = this;
                    i.hoverIntent_t && (i.hoverIntent_t = clearTimeout(i.hoverIntent_t)), "mouseenter" === e.type ? (s = n.pageX, l = n.pageY, t(i).on("mousemove.hoverIntent", c), i.hoverIntent_s || (i.hoverIntent_t = setTimeout(function() {
                        u(n, i)
                    }, o.interval))) : (t(i).off("mousemove.hoverIntent", c), i.hoverIntent_s && (i.hoverIntent_t = setTimeout(function() {
                        d(n, i)
                    }, o.timeout)))
                };
            return this.on({
                "mouseenter.hoverIntent": p,
                "mouseleave.hoverIntent": p
            }, o.selector)
        }
    }(jQuery),
    function(t) {
        function e() {
            var t = location.href;
            return hashtag = -1 !== t.indexOf("#prettyPhoto") ? decodeURI(t.substring(t.indexOf("#prettyPhoto") + 1, t.length)) : !1, hashtag
        }

        function n() {
            "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
        }

        function i() {
            -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
        }

        function o(t, e) {
            t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var n = "[\\?&]" + t + "=([^&#]*)",
                i = new RegExp(n),
                o = i.exec(e);
            return null == o ? "" : o[1]
        }
        t.prettyPhoto = {
            version: "3.1.5"
        }, t.fn.prettyPhoto = function(a) {
            function r() {
                t(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (E / 2 - v.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                    height: v.contentHeight,
                    width: v.contentWidth
                }, settings.animation_speed), $pp_pic_holder.animate({
                    top: 10,
                    position: "fixed",
                    left: S / 2 - v.containerWidth / 2 < 0 ? 0 : S / 2 - v.containerWidth / 2,
                    width: v.containerWidth
                }, settings.animation_speed, function() {
                    $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(v.height).width(v.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == d(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (v.resized ? t("a.pp_expand,a.pp_contract").show() : t("a.pp_expand").hide()), !settings.autoplay_slideshow || T || y || t.prettyPhoto.startSlideshow(), settings.changepicturecallback(), y = !0
                }), m(), a.ajaxcallback()
            }

            function s(e) {
                $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                    t(".pp_loaderIcon").show(), e()
                })
            }

            function l(e) {
                e > 1 ? t(".pp_nav").show() : t(".pp_nav").hide()
            }

            function c(t, e) {
                if (resized = !1, u(t, e), imageWidth = t, imageHeight = e, (_ > S || x > E) && doresize && settings.allow_resize && !k) {
                    for (resized = !0, fitting = !1; !fitting;) _ > S ? (imageWidth = S - 200, imageHeight = e / t * imageWidth) : x > E ? (imageHeight = E - 200, imageWidth = t / e * imageHeight) : fitting = !0, x = imageHeight, _ = imageWidth;
                    (_ > S || x > E) && c(_, x), u(imageWidth, imageHeight)
                }
                return {
                    width: Math.floor(imageWidth),
                    height: Math.floor(imageHeight),
                    containerHeight: Math.floor(x),
                    containerWidth: Math.floor(_) + 2 * settings.horizontal_padding,
                    contentHeight: Math.floor(b),
                    contentWidth: Math.floor(w),
                    resized: resized
                }
            }

            function u(e, n) {
                e = parseFloat(e), n = parseFloat(n), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(e), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(e).appendTo(t("body")).css({
                    position: "absolute",
                    top: -1e4
                }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(e), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(t("body")).css({
                    position: "absolute",
                    top: -1e4
                }), titleHeight += $pp_title.height(), $pp_title.remove(), b = n + detailsHeight, w = e, x = b + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), _ = e
            }

            function d(t) {
                return t.match(/youtube\.com\/watch/i) || t.match(/youtu\.be/i) ? "youtube" : t.match(/vimeo\.com/i) ? "vimeo" : t.match(/\b.mov\b/i) ? "quicktime" : t.match(/\b.swf\b/i) ? "flash" : t.match(/\biframe=true\b/i) ? "iframe" : t.match(/\bajax=true\b/i) ? "ajax" : t.match(/\bcustom=true\b/i) ? "custom" : "#" == t.substr(0, 1) ? "inline" : "image"
            }

            function p() {
                if (doresize && "undefined" != typeof $pp_pic_holder) {
                    if (scroll_pos = h(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = E / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > E) return;
                    $pp_pic_holder.css({
                        top: 10,
                        position: "fixed",
                        "max-height": !!(.9 * E),
                        left: S / 2 + scroll_pos.scrollLeft - contentwidth / 2
                    })
                }
            }

            function h() {
                return self.pageYOffset ? {
                    scrollTop: self.pageYOffset,
                    scrollLeft: self.pageXOffset
                } : document.documentElement && document.documentElement.scrollTop ? {
                    scrollTop: document.documentElement.scrollTop,
                    scrollLeft: document.documentElement.scrollLeft
                } : document.body ? {
                    scrollTop: document.body.scrollTop,
                    scrollLeft: document.body.scrollLeft
                } : void 0
            }

            function f() {
                E = t(window).height(), S = t(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(t(document).height()).width(S)
            }

            function m() {
                isSet && settings.overlay_gallery && "image" == d(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((v.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, t.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
            }

            function g(e) {
                if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), t("body").append(settings.markup), $pp_pic_holder = t(".pp_pic_holder"), $ppt = t(".ppt"), $pp_overlay = t("div.pp_overlay"), isSet && settings.overlay_gallery) {
                    currentGalleryPage = 0, toInject = "";
                    for (var n = 0; n < pp_images.length; n++) pp_images[n].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[n]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                    toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = t(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function() {
                        return t.prettyPhoto.changeGalleryPage("next"), t.prettyPhoto.stopSlideshow(), !1
                    }), $pp_gallery.find(".pp_arrow_previous").click(function() {
                        return t.prettyPhoto.changeGalleryPage("previous"), t.prettyPhoto.stopSlideshow(), !1
                    }), $pp_pic_holder.find(".pp_content").hover(function() {
                        $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                    }, function() {
                        $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                    }), itemWidth = 57, $pp_gallery_li.each(function(e) {
                        t(this).find("a").click(function() {
                            return t.prettyPhoto.changePage(e), t.prettyPhoto.stopSlideshow(), !1
                        })
                    })
                }
                settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                    return t.prettyPhoto.startSlideshow(), !1
                })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                    opacity: 0,
                    height: t(document).height(),
                    width: t(window).width()
                }).bind("click", function() {
                    settings.modal || t.prettyPhoto.close()
                }), t("a.pp_close").bind("click", function() {
                    return t.prettyPhoto.close(), !1
                }), settings.allow_expand && t("a.pp_expand").bind("click", function(e) {
                    return t(this).hasClass("pp_expand") ? (t(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (t(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), s(function() {
                        t.prettyPhoto.open()
                    }), !1
                }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                    return t.prettyPhoto.changePage("previous"), t.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                    return t.prettyPhoto.changePage("next"), t.prettyPhoto.stopSlideshow(), !1
                }), p()
            }
            a = jQuery.extend({
                hook: "data-rel",
                animation_speed: "fast",
                ajaxcallback: function() {},
                slideshow: 3e3,
                autoplay_slideshow: !1,
                opacity: .8,
                show_title: !0,
                allow_resize: !0,
                allow_expand: !0,
                default_width: 500,
                default_height: 344,
                counter_separator_label: "/",
                theme: "pp_default",
                horizontal_padding: 20,
                hideflash: !1,
                wmode: "opaque",
                autoplay: !0,
                modal: !1,
                deeplinking: !0,
                overlay_gallery: !0,
                overlay_gallery_max: 30,
                keyboard_shortcuts: !0,
                changepicturecallback: function() {},
                callback: function() {},
                ie6_fallback: !0,
                markup: '<div class="pp_pic_holder"> 						<div class="ppt">&nbsp;</div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',
                gallery_markup: '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',
                image_markup: '<img id="fullResImage" src="{path}" />',
                flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
                quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
                iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
                inline_markup: '<div class="pp_inline">{content}</div>',
                custom_markup: "",
                social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
            }, a);
            var v, y, b, w, x, _, T, C = this,
                k = !1,
                E = t(window).height(),
                S = t(window).width();
            return doresize = !0, scroll_pos = h(), t(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
                p(), f()
            }), a.keyboard_shortcuts && t(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(e) {
                if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (e.keyCode) {
                    case 37:
                        t.prettyPhoto.changePage("previous"), e.preventDefault();
                        break;
                    case 39:
                        t.prettyPhoto.changePage("next"), e.preventDefault();
                        break;
                    case 27:
                        settings.modal || t.prettyPhoto.close(), e.preventDefault()
                }
            }), t.prettyPhoto.initialize = function() {
                return settings = a, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = t(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = galleryRegExp.exec(theRel) ? !0 : !1, pp_images = isSet ? jQuery.map(C, function(e, n) {
                    return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).attr("href") : void 0
                }) : t.makeArray(t(this).attr("href")), pp_titles = isSet ? jQuery.map(C, function(e, n) {
                    return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).find("img").attr("alt") ? t(e).find("img").attr("alt") : "" : void 0
                }) : t.makeArray(t(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(C, function(e, n) {
                    return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).attr("title") ? t(e).attr("title") : "" : void 0
                }) : t.makeArray(t(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(t(this).attr("href"), pp_images), rel_index = isSet ? set_position : t("a[" + settings.hook + "^='" + theRel + "']").index(t(this)), g(this), settings.allow_resize && t(window).bind("scroll.prettyphoto", function() {
                    p()
                }), t.prettyPhoto.open(), !1
            }, t.prettyPhoto.open = function(e) {
                return "undefined" == typeof settings && (settings = a, pp_images = t.makeArray(arguments[0]), pp_titles = arguments[1] ? t.makeArray(arguments[1]) : t.makeArray(""), pp_descriptions = arguments[2] ? t.makeArray(arguments[2]) : t.makeArray(""), isSet = pp_images.length > 1 ? !0 : !1, set_position = arguments[3] ? arguments[3] : 0, g(e.target)), settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), l(t(pp_images).size()), t(".pp_loaderIcon").show(), settings.deeplinking && n(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + t(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), k = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(t(window).height() * parseFloat(movie_height) / 100 - 150), k = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(t(window).width() * parseFloat(movie_width) / 100 - 150), k = !0), $pp_pic_holder.fadeIn(function() {
                    switch (settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html("&nbsp;"), imgPreloader = "", skipInjection = !1, d(pp_images[set_position])) {
                        case "image":
                            imgPreloader = new Image, nextImage = new Image, isSet && set_position < t(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() {
                                v = c(imgPreloader.width, imgPreloader.height), r()
                            }, imgPreloader.onerror = function() {
                                alert("Image cannot be loaded. Make sure the path is correct and image exist."), t.prettyPhoto.close()
                            }, imgPreloader.src = pp_images[set_position];
                            break;
                        case "youtube":
                            v = c(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, o("rel", pp_images[set_position]) ? movie += "?rel=" + o("rel", pp_images[set_position]) : movie += "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, v.width).replace(/{height}/g, v.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                            break;
                        case "vimeo":
                            v = c(movie_width, movie_height), movie_id = pp_images[set_position];
                            var e = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
                                n = movie_id.match(e);
                            movie = "http://player.vimeo.com/video/" + n[3] + "?title=0&amp;byline=0&amp;portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = v.width + "/embed/?moog_width=" + v.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, v.height).replace(/{path}/g, movie);
                            break;
                        case "quicktime":
                            v = c(movie_width, movie_height), v.height += 15, v.contentHeight += 15, v.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, v.width).replace(/{height}/g, v.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                            break;
                        case "flash":
                            v = c(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, v.width).replace(/{height}/g, v.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                            break;
                        case "iframe":
                            v = c(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, v.width).replace(/{height}/g, v.height).replace(/{path}/g, frame_url);
                            break;
                        case "ajax":
                            doresize = !1, v = c(movie_width, movie_height), doresize = !0, skipInjection = !0, t.get(pp_images[set_position], function(t) {
                                toInject = settings.inline_markup.replace(/{content}/g, t), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, r()
                            });
                            break;
                        case "custom":
                            v = c(movie_width, movie_height), toInject = settings.custom_markup;
                            break;
                        case "inline":
                            myClone = t(pp_images[set_position]).clone().append('<br clear="all" />').css({
                                width: settings.default_width
                            }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(t("body")).show(), doresize = !1, v = c(t(myClone).width(), t(myClone).height()), doresize = !0, t(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, t(pp_images[set_position]).html())
                    }
                    imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, r())
                }), !1
            }, t.prettyPhoto.changePage = function(e) {
                currentGalleryPage = 0, "previous" == e ? (set_position--, set_position < 0 && (set_position = t(pp_images).size() - 1)) : "next" == e ? (set_position++, set_position > t(pp_images).size() - 1 && (set_position = 0)) : set_position = e, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && t(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), s(function() {
                    t.prettyPhoto.open()
                })
            }, t.prettyPhoto.changeGalleryPage = function(t) {
                "next" == t ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == t ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = t, slide_speed = "next" == t || "previous" == t ? settings.animation_speed : 0, slide_to = currentGalleryPage * (itemsPerPage * itemWidth), $pp_gallery.find("ul").animate({
                    left: -slide_to
                }, slide_speed)
            }, t.prettyPhoto.startSlideshow = function() {
                "undefined" == typeof T ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                    return t.prettyPhoto.stopSlideshow(), !1
                }), T = setInterval(t.prettyPhoto.startSlideshow, settings.slideshow)) : t.prettyPhoto.changePage("next")
            }, t.prettyPhoto.stopSlideshow = function() {
                $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                    return t.prettyPhoto.startSlideshow(), !1
                }), clearInterval(T), T = void 0
            }, t.prettyPhoto.close = function() {
                $pp_overlay.is(":animated") || (t.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), t("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                    t(this).remove()
                }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                    settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), t(this).remove(), t(window).unbind("scroll.prettyphoto"), i(), settings.callback(), doresize = !0, y = !1, delete settings
                }))
            }, !pp_alreadyInitialized && e() && (pp_alreadyInitialized = !0, hashIndex = e(), hashRel = hashIndex,
                hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
                    t("a[" + a.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
                }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", t.prettyPhoto.initialize)
        }
    }(jQuery);
var pp_alreadyInitialized = !1;
! function(t, e, n) {
    "use strict";
    var i = function(i, o) {
        var a = !!e.getComputedStyle;
        a || (e.getComputedStyle = function(t) {
            return this.el = t, this.getPropertyValue = function(e) {
                var n = /(\-([a-z]){1})/g;
                return "float" === e && (e = "styleFloat"), n.test(e) && (e = e.replace(n, function() {
                    return arguments[2].toUpperCase()
                })), t.currentStyle[e] ? t.currentStyle[e] : null
            }, this
        });
        var r, s, l, c, u, d, p = function(t, e, n, i) {
                if ("addEventListener" in t) try {
                    t.addEventListener(e, n, i)
                } catch (o) {
                    if ("object" != typeof n || !n.handleEvent) throw o;
                    t.addEventListener(e, function(t) {
                        n.handleEvent.call(n, t)
                    }, i)
                } else "attachEvent" in t && ("object" == typeof n && n.handleEvent ? t.attachEvent("on" + e, function() {
                    n.handleEvent.call(n)
                }) : t.attachEvent("on" + e, n))
            },
            h = function(t, e, n, i) {
                if ("removeEventListener" in t) try {
                    t.removeEventListener(e, n, i)
                } catch (o) {
                    if ("object" != typeof n || !n.handleEvent) throw o;
                    t.removeEventListener(e, function(t) {
                        n.handleEvent.call(n, t)
                    }, i)
                } else "detachEvent" in t && ("object" == typeof n && n.handleEvent ? t.detachEvent("on" + e, function() {
                    n.handleEvent.call(n)
                }) : t.detachEvent("on" + e, n))
            },
            f = function(t) {
                if (t.children.length < 1) throw new Error("The Nav container has no containing elements");
                for (var e = [], n = 0; n < t.children.length; n++) 1 === t.children[n].nodeType && e.push(t.children[n]);
                return e
            },
            m = function(t, e) {
                for (var n in e) t.setAttribute(n, e[n])
            },
            g = function(t, e) {
                0 !== t.className.indexOf(e) && (t.className += " " + e, t.className = t.className.replace(/(^\s*)|(\s*$)/g, ""))
            },
            v = function(t, e) {
                var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
                t.className = t.className.replace(n, " ").replace(/(^\s*)|(\s*$)/g, "")
            },
            y = function(t, e, n) {
                for (var i = 0; i < t.length; i++) e.call(n, i, t[i])
            },
            b = t.createElement("style"),
            w = t.documentElement,
            x = function(e, n) {
                var i;
                this.options = {
                    animate: !0,
                    transition: 284,
                    label: "Menu",
                    insert: "before",
                    customToggle: "",
                    closeOnNavClick: !1,
                    openPos: "relative",
                    navClass: "nav-collapse",
                    navActiveClass: "js-nav-active",
                    jsClass: "js",
                    init: function() {},
                    open: function() {},
                    close: function() {}
                };
                for (i in n) this.options[i] = n[i];
                if (g(w, this.options.jsClass), this.wrapperEl = e.replace("#", ""), t.getElementById(this.wrapperEl)) this.wrapper = t.getElementById(this.wrapperEl);
                else {
                    if (!t.querySelector(this.wrapperEl)) throw new Error("The nav element you are trying to select doesn't exist");
                    this.wrapper = t.querySelector(this.wrapperEl)
                }
                this.wrapper.inner = f(this.wrapper), s = this.options, r = this.wrapper, this._init(this)
            };
        return x.prototype = {
            destroy: function() {
                this._removeStyles(), v(r, "closed"), v(r, "opened"), v(r, s.navClass), v(r, s.navClass + "-" + this.index), v(w, s.navActiveClass), r.removeAttribute("style"), r.removeAttribute("aria-hidden"), h(e, "resize", this, !1), h(e, "focus", this, !1), h(t.body, "touchmove", this, !1), h(l, "touchstart", this, !1), h(l, "touchend", this, !1), h(l, "mouseup", this, !1), h(l, "keyup", this, !1), h(l, "click", this, !1), s.customToggle ? l.removeAttribute("aria-hidden") : l.parentNode.removeChild(l)
            },
            toggle: function() {
                c === !0 && (d ? this.close() : this.open())
            },
            open: function() {
                d || (v(r, "closed"), g(r, "opened"), g(w, s.navActiveClass), g(l, "active"), r.style.position = s.openPos, m(r, {
                    "aria-hidden": "false"
                }), d = !0, s.open())
            },
            close: function() {
                d && (g(r, "closed"), v(r, "opened"), v(w, s.navActiveClass), v(l, "active"), m(r, {
                    "aria-hidden": "true"
                }), s.animate ? (c = !1, setTimeout(function() {
                    r.style.position = "absolute", c = !0
                }, s.transition + 10)) : r.style.position = "absolute", d = !1, s.close())
            },
            resize: function() {
                "none" !== e.getComputedStyle(l, null).getPropertyValue("display") ? (u = !0, m(l, {
                    "aria-hidden": "false"
                }), r.className.match(/(^|\s)closed(\s|$)/) && (m(r, {
                    "aria-hidden": "true"
                }), r.style.position = "absolute"), this._createStyles(), this._calcHeight()) : (u = !1, m(l, {
                    "aria-hidden": "true"
                }), m(r, {
                    "aria-hidden": "false"
                }), r.style.position = s.openPos, this._removeStyles())
            },
            handleEvent: function(t) {
                var n = t || e.event;
                switch (n.type) {
                    case "touchstart":
                        this._onTouchStart(n);
                        break;
                    case "touchmove":
                        this._onTouchMove(n);
                        break;
                    case "touchend":
                    case "mouseup":
                        this._onTouchEnd(n);
                        break;
                    case "click":
                        this._preventDefault(n);
                        break;
                    case "keyup":
                        this._onKeyUp(n);
                        break;
                    case "focus":
                    case "resize":
                        this.resize(n)
                }
            },
            _init: function() {
                this.index = n++, g(r, s.navClass), g(r, s.navClass + "-" + this.index), g(r, "closed"), c = !0, d = !1, this._closeOnNavClick(), this._createToggle(), this._transitions(), this.resize();
                var i = this;
                setTimeout(function() {
                    i.resize()
                }, 20), p(e, "resize", this, !1), p(e, "focus", this, !1), p(t.body, "touchmove", this, !1), p(l, "touchstart", this, !1), p(l, "touchend", this, !1), p(l, "mouseup", this, !1), p(l, "keyup", this, !1), p(l, "click", this, !1), s.init()
            },
            _createStyles: function() {
                b.parentNode || (b.type = "text/css", t.getElementsByTagName("head")[0].appendChild(b))
            },
            _removeStyles: function() {
                b.parentNode && b.parentNode.removeChild(b)
            },
            _createToggle: function() {
                if (s.customToggle) {
                    var e = s.customToggle.replace("#", "");
                    if (t.getElementById(e)) l = t.getElementById(e);
                    else {
                        if (!t.querySelector(e)) throw new Error("The custom nav toggle you are trying to select doesn't exist");
                        l = t.querySelector(e)
                    }
                } else {
                    var n = t.createElement("a");
                    n.innerHTML = s.label, m(n, {
                        href: "#",
                        "class": "nav-toggle"
                    }), "after" === s.insert ? r.parentNode.insertBefore(n, r.nextSibling) : r.parentNode.insertBefore(n, r), l = n
                }
            },
            _closeOnNavClick: function() {
                if (s.closeOnNavClick) {
                    var t = r.getElementsByTagName("a"),
                        e = this;
                    y(t, function(n) {
                        p(t[n], "click", function() {
                            u && e.toggle()
                        }, !1)
                    })
                }
            },
            _preventDefault: function(t) {
                return t.preventDefault ? (t.stopImmediatePropagation && t.stopImmediatePropagation(), t.preventDefault(), t.stopPropagation(), !1) : void(t.returnValue = !1)
            },
            _onTouchStart: function(t) {
                Event.prototype.stopImmediatePropagation || this._preventDefault(t), this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY, this.touchHasMoved = !1, h(l, "mouseup", this, !1)
            },
            _onTouchMove: function(t) {
                (Math.abs(t.touches[0].clientX - this.startX) > 10 || Math.abs(t.touches[0].clientY - this.startY) > 10) && (this.touchHasMoved = !0)
            },
            _onTouchEnd: function(t) {
                if (this._preventDefault(t), u && !this.touchHasMoved) {
                    if ("touchend" === t.type) return void this.toggle();
                    var n = t || e.event;
                    3 !== n.which && 2 !== n.button && this.toggle()
                }
            },
            _onKeyUp: function(t) {
                var n = t || e.event;
                13 === n.keyCode && this.toggle()
            },
            _transitions: function() {
                if (s.animate) {
                    var t = r.style,
                        e = "max-height " + s.transition + "ms";
                    t.WebkitTransition = t.MozTransition = t.OTransition = t.transition = e
                }
            },
            _calcHeight: function() {
                for (var t = 0, e = 0; e < r.inner.length; e++) t += r.inner[e].offsetHeight;
                var n = "." + s.jsClass + " ." + s.navClass + "-" + this.index + ".opened{max-height:" + t + "px !important} ." + s.jsClass + " ." + s.navClass + "-" + this.index + ".opened.dropdown-active {max-height:9999px !important}";
                b.styleSheet ? b.styleSheet.cssText = n : b.innerHTML = n, n = ""
            }
        }, new x(i, o)
    };
    "undefined" != typeof module && module.exports ? module.exports = i : e.responsiveNav = i
}(document, window, 0),
function(t, e, n) {
    t.fn.responsiveSlides = function(i) {
        var o = t.extend({
            auto: !0,
            speed: 500,
            timeout: 4e3,
            pager: !1,
            nav: !1,
            random: !1,
            pause: !1,
            pauseControls: !0,
            prevText: "Previous",
            nextText: "Next",
            maxwidth: "",
            navContainer: "",
            manualControls: "",
            namespace: "rslides",
            before: t.noop,
            after: t.noop
        }, i);
        return this.each(function() {
            n++;
            var a, r, s, l, c, u, d = t(this),
                p = 0,
                h = d.children(),
                f = h.size(),
                m = parseFloat(o.speed),
                g = parseFloat(o.timeout),
                v = parseFloat(o.maxwidth),
                y = o.namespace,
                b = y + n,
                w = y + "_nav " + b + "_nav",
                x = y + "_here",
                _ = b + "_on",
                T = b + "_s",
                C = t("<ul class='" + y + "_tabs " + b + "_tabs' />"),
                k = {
                    "float": "left",
                    position: "relative",
                    opacity: 1,
                    zIndex: 2
                },
                E = {
                    "float": "none",
                    position: "absolute",
                    opacity: 0,
                    zIndex: 1
                },
                S = function() {
                    var t = (document.body || document.documentElement).style,
                        e = "transition";
                    if ("string" == typeof t[e]) return !0;
                    a = ["Moz", "Webkit", "Khtml", "O", "ms"];
                    var n, e = e.charAt(0).toUpperCase() + e.substr(1);
                    for (n = 0; n < a.length; n++)
                        if ("string" == typeof t[a[n] + e]) return !0;
                    return !1
                }(),
                $ = function(e) {
                    o.before(e), S ? (h.removeClass(_).css(E).eq(e).addClass(_).css(k), p = e, setTimeout(function() {
                        o.after(e)
                    }, m)) : h.stop().fadeOut(m, function() {
                        t(this).removeClass(_).css(E).css("opacity", 1)
                    }).eq(e).fadeIn(m, function() {
                        t(this).addClass(_).css(k), o.after(e), p = e
                    })
                };
            if (o.random && (h.sort(function() {
                    return Math.round(Math.random()) - .5
                }), d.empty().append(h)), h.each(function(t) {
                    this.id = T + t
                }), d.addClass(y + " " + b), i && i.maxwidth && d.css("max-width", v), h.hide().css(E).eq(0).addClass(_).css(k).show(), S && h.show().css({
                    "-webkit-transition": "opacity " + m + "ms ease-in-out",
                    "-moz-transition": "opacity " + m + "ms ease-in-out",
                    "-o-transition": "opacity " + m + "ms ease-in-out",
                    transition: "opacity " + m + "ms ease-in-out"
                }), 1 < h.size()) {
                if (m + 100 > g) return;
                if (o.pager && !o.manualControls) {
                    var I = [];
                    h.each(function(t) {
                        t += 1, I += "<li><a href='#' class='" + T + t + "'>" + t + "</a></li>"
                    }), C.append(I), i.navContainer ? t(o.navContainer).append(C) : d.after(C)
                }
                if (o.manualControls && (C = t(o.manualControls), C.addClass(y + "_tabs " + b + "_tabs")), (o.pager || o.manualControls) && C.find("li").each(function(e) {
                        t(this).addClass(T + (e + 1))
                    }), (o.pager || o.manualControls) && (u = C.find("a"), r = function(t) {
                        u.closest("li").removeClass(x).eq(t).addClass(x)
                    }), o.auto && (s = function() {
                        c = setInterval(function() {
                            h.stop(!0, !0);
                            var t = f > p + 1 ? p + 1 : 0;
                            (o.pager || o.manualControls) && r(t), $(t)
                        }, g)
                    })(), l = function() {
                        o.auto && (clearInterval(c), s())
                    }, o.pause && d.hover(function() {
                        clearInterval(c)
                    }, function() {
                        l()
                    }), (o.pager || o.manualControls) && (u.bind("click", function(e) {
                        e.preventDefault(), o.pauseControls || l(), e = u.index(this), p === e || t("." + _).queue("fx").length || (r(e), $(e))
                    }).eq(0).closest("li").addClass(x), o.pauseControls && u.hover(function() {
                        clearInterval(c)
                    }, function() {
                        l()
                    })), o.nav) {
                    y = "<a href='#' class='" + w + " prev'>" + o.prevText + "</a><a href='#' class='" + w + " next'>" + o.nextText + "</a>", i.navContainer ? t(o.navContainer).append(y) : d.after(y);
                    var b = t("." + b + "_nav"),
                        P = b.filter(".prev");
                    b.bind("click", function(e) {
                        if (e.preventDefault(), e = t("." + _), !e.queue("fx").length) {
                            var n = h.index(e);
                            e = n - 1, n = f > n + 1 ? p + 1 : 0, $(t(this)[0] === P[0] ? e : n), (o.pager || o.manualControls) && r(t(this)[0] === P[0] ? e : n), o.pauseControls || l()
                        }
                    }), o.pauseControls && b.hover(function() {
                        clearInterval(c)
                    }, function() {
                        l()
                    })
                }
            }
            if ("undefined" == typeof document.body.style.maxWidth && i.maxwidth) {
                var L = function() {
                    d.css("width", "100%"), d.width() > v && d.css("width", v)
                };
                L(), t(e).bind("resize", function() {
                    L()
                })
            }
        })
    }
}(jQuery, this, 0), $(document).ready(function(t) {
    "use strict";

    function e() {
        t(window).scrollTop() > 40 && n > 480 ? t(".site-back-top").fadeIn() : t(".site-back-top").fadeOut()
    }
    var n = window.innerWidth,
        i = window.innerHeight;
    t(".site-toggle").click(function(e) {
        e.preventDefault();
        var n = t(".site-header"),
            i = t(".site-toggle");
        t(n).is(":visible") ? (t(n).animate({
            left: "-200px"
        }, 200, function() {
            t(n).hide(), t("body").removeClass("sidebar-on")
        }), t(i).animate({
            left: "0px"
        }, 200)) : (t("body").addClass("sidebar-on"), t(n).show(), t(n).animate({
            left: "0px"
        }, {
            duration: 200,
            queue: !1
        }), t(i).animate({
            left: "200px"
        }, {
            duration: 200,
            queue: !1
        }))
    });
    var o = function() {
        n > 1199 && (t(".site-toggle, .site-header, .header-menu ul").removeAttr("style"), t(".header-menu li").removeClass("active"), t("body").removeClass("sidebar-on"))
    };
    t(window).one("album-loaded", function() {
        var e = t(".about-me-img");
        t('<img src="/images/global/about-me.jpg" />').load(function() {
            e.attr("src", "/images/global/about-me.jpg")
        })
    });
    var a = 0,
        r = setInterval(function() {
            if ((a += !1) && clearInterval(r), a += document.getElementsByClassName("nav-collapse").length) {
                clearInterval(r);
                responsiveNav(".nav-collapse", {
                    animate: !0,
                    transition: 284,
                    label: "Menu",
                    insert: "after",
                    customToggle: "",
                    closeOnNavClick: !0,
                    openPos: "relative",
                    navClass: "nav-collapse",
                    navActiveClass: "js-nav-active",
                    jsClass: "js",
                    init: function() {},
                    open: function() {},
                    close: function() {}
                })
            }
        }, 100);
    t(".site-back-top").click(function(e) {
        e.preventDefault(), t("body,html").animate({
            scrollTop: 0
        }, 800)
    }), document.hideLoader = function() {
        t(".site-loader").delay(500).fadeOut("slow"), e()
    }, t(window).resize(function() {
        n = window.innerWidth, i = window.innerHeight, o(), e()
    })
}), Function.getClassName = function() {
    return "Function"
}, Function.prototype.Extend = function(t) {
    return this.prototype = new t, this.prototype.getSuperClass = function() {
        return t
    }, this.getSuperClass = this.prototype.getSuperClass, this
}, Function.prototype.Super = function(t, e, n) {
    if (null != e) var i = this.getSuperClass().prototype[e];
    else var i = this.getSuperClass();
    return n ? i.apply(t, n) : i.call(t)
}, Function.prototype.Implements = function(t, e) {
    "function" == typeof t && (t = t.prototype);
    for (var n = {}, i = 0, o = e.length; o > i; ++i) n[e[i]] = t[e[i]] || null;
    var a = WSDOM.Util.copyObject(n);
    for (var i in a) this.prototype[i] = a[i]
}, Function.prototype.Context = function(t) {
    var e = this;
    return function() {
        return "function" == typeof e ? e.apply(t, arguments) : t[e].apply(t, arguments)
    }
}, Function.prototype.eventContext = function(t, e) {
    var n = this;
    e = e || {};
    var i = function() {
        return n.apply(t, [arguments[0], this, e.data])
    };
    return e.delay && (i = function() {
        var i = this,
            o = arguments;
        setTimeout(function() {
            return n.apply(t, [o[0], i, e.data])
        }, e.delay)
    }), i
}, Function.prototype.EmptyFunction = function() {};
var Module = function() {};
! function() {
    Module.prototype.eventTypes = function() {
        return ["initialized"]
    }, Module.prototype.$ = function(t) {
        return this.$element.find(t)
    }, Module.prototype.init = function(t) {
        if (t ? ("string" == typeof t && (this.selector = t), this.$element = $(t).first()) : this.selector && (this.$element = $(this.selector).first()), !this.guid) {
            this.guid = guid(), this.events = {};
            for (var e = this.eventTypes(), n = 0; n < e.length; n++) this.events[e[n]] = e[n] + "." + this.guid
        }
        $(".site-loader").delay(500).fadeOut("slow"), this.initListeners(), this.emit(this.events.initialized)
    }, Module.prototype.registerModule = function(t, e, n) {
        if (e && n) {
            var i = this.$element.find(n).first();
            i.length && (this[t] || (this[t] = new e, this[t].selector = n), this[t].init(i))
        }
    }, Module.prototype.initListeners = function() {}, Module.prototype.on = function(t, e, n) {
        this.$element.on(t, e)
    }, Module.prototype.off = function(t, e, n) {
        this.$element.off(t, e)
    }, Module.prototype.emit = function(t, e) {
        this.$element.trigger(t, e)
    }
}();
var guid = function() {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    },
    time = 0,
    interval = setInterval(function() {
        if ((time += !1) && clearInterval(interval), time += document.getElementsByClassName("nav-collapse").length) {
            clearInterval(interval);
            responsiveNav(".nav-collapse", {
                animate: !0,
                transition: 284,
                label: "Menu",
                insert: "after",
                customToggle: "",
                closeOnNavClick: !0,
                openPos: "relative",
                navClass: "nav-collapse",
                navActiveClass: "js-nav-active",
                jsClass: "js",
                init: function() {},
                open: function() {},
                close: function() {}
            })
        }
    }, 100);
$.fn.await = function(t, e, n) {
        var i = new Date((new Date).getTime() + t),
            o = setInterval(function() {
                (new Date).getTime() > i.getTime() && clearInterval(o), $(this).find(e).length && (clearInterval(o), n($(e)))
            }, 1e3)
    },
    function() {
        var t = function() {
            window.innerWidth > 1199 ? ($(".header-menu *").unbind(), $(".header-menu .sub").hoverIntent({
                timeout: 100,
                over: function() {
                    $(this).addClass("active"), $(this).children("ul").slideDown("fast")
                },
                out: function() {
                    $(this).removeClass("active"), $(this).children("ul").slideUp("fast")
                }
            })) : ($(".header-menu *").unbind(), $(".header-menu .sub > a").click(function(t) {
                t.preventDefault(), $(".header-menu li ul").slideUp("normal"), $(".header-menu li").removeClass("active");
                var e = $(this).siblings("ul");
                e.is(":visible") ? (e.slideUp("normal"), $(this).parent().removeClass("active")) : (e.slideDown("normal"), $(this).parent().addClass("active"))
            }))
        };
        t(), $(window).on("resize", t)
    }(), $(".site-toggle").click(function(t) {
        t.preventDefault();
        var e = $(".site-header"),
            n = $(".site-toggle");
        $(e).is(":visible") ? ($(e).animate({
            left: "-200px"
        }, 200, function() {
            $(e).hide(), $("body").removeClass("sidebar-on")
        }), $(n).animate({
            left: "0px"
        }, 200)) : ($("body").addClass("sidebar-on"), $(e).show(), $(e).animate({
            left: "0px"
        }, {
            duration: 200,
            queue: !1
        }), $(n).animate({
            left: "200px"
        }, {
            duration: 200,
            queue: !1
        }))
    });
var Home = function() {};
Home.Extend(Module),
    function() {
        Home.prototype.init = function(t) {
            Module.prototype.init.call(this, t);
            ({
                height: $(window).height()
            });
            return this.$element.find(".rslides").responsiveSlides({
                timeout: 5e3
            }), Galleria && Galleria.loadTheme("./scripts/behavior/libs/galleria.classic.js"), this
        }
    }();
var home = (new Home).init(".home-page"),
    Contact = function() {};
Contact.Extend(Module),
    function() {
        Contact.prototype.init = function(t) {
            Module.prototype.init.call(this, t);
            var e = this.$element.find(".data-form button:submit"),
                n = this.$element.find(".data-form form");
            e.on("click", function(t) {
                t.preventDefault(), t.stopPropagation();
                n.find("input, textarea").serialize();
                $.ajax({
                    url: "./contact",
                    data: JSON.stringify({
                        name: n.find('[name="name"]').val(),
                        email: n.find('[name="email"]').val(),
                        message: n.find('[name="message"]').val()
                    }),
                    method: "POST",
                    contentType: "application/json; charset=utf-8"
                }).done(function(t) {
                    n.find("textarea").val(t)
                })
            })
        }
    }();
var contact = (new Contact).init("#contact"),
    Gallery = function() {};
Gallery.Extend(Module),
    function() {
        Gallery.prototype.init = function(t) {
            return Module.prototype.init.call(this, t), this
        }
    }();
var gallery = (new Gallery).init("#works-detail");
