/*! jQuery v1.8.3 jquery.com | jquery.org/license */(function(e, t) {
  function _(e) {
    var t = M[e] = {};
    return v[nr](e[rr](y), function(e, n) {
      t[n] = !0;
    }), t;
  }
  function H(e, n, r) {
    var i;
    if (r === t && e[ir] === 1) {
      i = "data-" + n[or](P, "-$1")[sr]();
      r = e[ur](i);
      if (typeof r == ar) {
        try {
          r = r === "true" ? !0 : r === fr ? !1 : r === "null" ? lr : +r + "" === r ? +r : D[cr](r) ? v.parseJSON(r) : r;
        } catch (s) {}
        v[hr](e, n, r);
      } else r = t;
    }
    return r;
  }
  function B(e) {
    var t;
    for (t in e) {
      if (t === hr && v[pr](e[t])) continue;
      if (t !== "toJSON") return !1;
    }
    return !0;
  }
  function et() {
    return !1;
  }
  function tt() {
    return !0;
  }
  function ut(e) {
    return !e || !e[dr] || e[dr][ir] === 11;
  }
  function at(e, t) {
    do e = e[t]; while (e && e[ir] !== 1);
    return e;
  }
  function ft(e, t, n) {
    var r;
    t = t || 0;
    if (v[vr](t)) return v.grep(e, function(e, r) {
      var i = !!t[mr](e, r, e);
      return i === n;
    });
    if (t[ir]) return v.grep(e, function(e) {
      return e === t === n;
    });
    if (typeof t == ar) {
      r = v.grep(e, function(e) {
        return e[ir] === 1;
      });
      if (it[cr](t)) return v[gr](t, r, !n);
      t = v[gr](t, r);
    }
    return v.grep(e, function(e) {
      return v[yr](e, t) >= 0 === n;
    });
  }
  function lt(e) {
    var t = ct[rr]("|"), n = e[br]();
    if (n[wr]) while (t[Er]) n[wr](t.pop());
    return n;
  }
  function Lt(e, t) {
    return e[Sr](t)[0] || e[xr](e[Tr][wr](t));
  }
  function At(e, t) {
    var n, r, i, s, o, u;
    if (t[ir] !== 1 || !v.hasData(e)) return;
    s = v[Nr](e), o = v[Nr](t, s), u = s[Cr];
    if (u) {
      delete o[kr], o[Cr] = {};
      for (n in u) for (r = 0, i = u[n][Er]; r < i; r++) v[Lr].add(t, n, u[n][r]);
    }
    o[hr] && (o[hr] = v[Ar]({}, o[hr]));
  }
  function Ot(e, t) {
    var n;
    if (t[ir] !== 1) return;
    t[Or] && t[Or](), t[Mr] && t[Mr](e), n = t[_r][sr](), n === Dr ? (t[dr] && (t[Pr] = e[Pr]), v[Br][Hr] && e[jr] && !v.trim(t[jr]) && (t[jr] = e[jr])) : n === Fr && Et[cr](e[Ir]) ? (t[qr] = t[Rr] = e[Rr], t[Ur] !== e[Ur] && (t[Ur] = e[Ur])) : n === zr ? t[Wr] = e.defaultSelected : n === Fr || n === "textarea" ? t.defaultValue = e.defaultValue : n === Xr && t[Vr] !== e[Vr] && (t[Vr] = e[Vr]), t[$r](v[Jr]);
  }
  function Mt(e) {
    return typeof e[Sr] != Kr ? e[Sr](Qr) : typeof e[Gr] != Kr ? e[Gr](Qr) : [];
  }
  function _t(e) {
    Et[cr](e[Ir]) && (e[qr] = e[Rr]);
  }
  function Qt(e, t) {
    var n, r, i;
    if (t in e) return t;
    n = t.charAt(0)[Yr]() + t[Zr](1), r = t, i = Jt[Er];
    while (i--) {
      t = Jt[i] + n;
      if (t in e) return t;
    }
    return r;
  }
  function Gt(e, t) {
    return e = t || e, v.css(e, ei) === ti || !v[ni](e[Tr], e);
  }
  function Yt(e, t) {
    var n, r, i = [], s = 0, o = e[Er];
    for (; s < o; s++) {
      n = e[s];
      if (!n[ri]) continue;
      i[s] = v[Nr](n, ii), t ? (!i[s] && n[ri][ei] === ti && (n[ri][ei] = ""), n[ri][ei] === "" && Gt(n) && (i[s] = v[Nr](n, ii, nn(n[_r])))) : (r = Dt(n, ei), !i[s] && r !== ti && v[Nr](n, ii, r));
    }
    for (s = 0; s < o; s++) {
      n = e[s];
      if (!n[ri]) continue;
      if (!t || n[ri][ei] === ti || n[ri][ei] === "") n[ri][ei] = t ? i[s] || "" : ti;
    }
    return e;
  }
  function Zt(e, t, n) {
    var r = Rt[si](t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || oi) : t;
  }
  function en(e, t, n, r) {
    var i = n === (r ? ui : ai) ? 4 : t === fi ? 1 : 0, s = 0;
    for (; i < 4; i += 2) n === li && (s += v.css(e, n + $t[i], !0)), r ? (n === ai && (s -= parseFloat(Dt(e, ci + $t[i])) || 0), n !== li && (s -= parseFloat(Dt(e, ui + $t[i] + hi)) || 0)) : (s += parseFloat(Dt(e, ci + $t[i])) || 0, n !== ci && (s += parseFloat(Dt(e, ui + $t[i] + hi)) || 0));
    return s;
  }
  function tn(e, t, n) {
    var r = t === fi ? e[pi] : e[di], i = !0, s = v[Br][vi] && v.css(e, vi) === mi;
    if (r <= 0 || r == lr) {
      r = Dt(e, t);
      if (r < 0 || r == lr) r = e[ri][t];
      if (Ut[cr](r)) return r;
      i = s && (v[Br][gi] || r === e[ri][t]), r = parseFloat(r) || 0;
    }
    return r + en(e, t, n || (s ? ui : ai), i) + oi;
  }
  function nn(e) {
    var t, n;
    if (Wt[e]) return Wt[e];
    t = v("<" + e + ">").appendTo(i[yi]), n = t.css(ei);
    t[bi]();
    if (n === ti || n === "") {
      Pt = i[yi][xr](Pt || v[Ar](i[wr]("iframe"), {
        frameBorder: 0,
        width: 0,
        height: 0
      }));
      if (!Ht || !Pt[wr]) Ht = (Pt[Ei] || Pt[Si])[wi], Ht.write("<!doctype html><html><body>"), Ht.close();
      t = Ht[yi][xr](Ht[wr](e)), n = Dt(t, ei), i[yi][xi](Pt);
    }
    return Wt[e] = n, n;
  }
  function fn(e, t, n, r) {
    var i;
    if (v[Ti](t)) v[nr](t, function(t, i) {
      n || sn[cr](e) ? r(e, i) : fn(e + "[" + (typeof i == Dr ? t : "") + "]", i, n, r);
    }); else if (!n && v[Ir](t) === Dr) for (i in t) fn(e + "[" + i + "]", t[i], n, r); else r(e, t);
  }
  function Cn(e) {
    return function(t, n) {
      var r, i, s, o, u, a;
      typeof t != ar && (n = t, t = Qr);
      o = t[sr]()[rr](y), u = 0, a = o[Er];
      if (v[vr](n)) for (; u < a; u++) r = o[u], s = /^\+/[cr](r), s && (r = r.substr(1) || Qr), i = e[r] = e[r] || [], i[s ? Ni : Ci](n);
    };
  }
  function kn(e, n, r, i, s, o) {
    var u, a, f, l, c;
    s = s || n[ki][0], o = o || {}, o[s] = !0;
    a = e[s], f = 0, l = a ? a[Er] : 0, c = e === Sn;
    for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == ar && (!c || o[u] ? u = t : (n[ki][Ni](u), u = kn(e, n, r, i, u, o)));
    return (c || !u) && !o[Qr] && (u = kn(e, n, r, i, Qr, o)), u;
  }
  function Ln(e, n) {
    var r, i, s = v[Li].flatOptions || {};
    for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
    i && v[Ar](!0, e, i);
  }
  function An(e, n, r) {
    var i, s, o, u, a = e.contents, f = e[ki], l = e.responseFields;
    for (s in l) s in r && (n[l[s]] = r[s]);
    while (f[0] === Qr) f[Ai](), i === t && (i = e[Oi] || n[Mi]("content-type"));
    if (i) for (s in a) if (a[s] && a[s][cr](i)) {
      f[Ni](s);
      break;
    }
    if (f[0] in r) o = f[0]; else {
      for (s in r) {
        if (!f[0] || e[_i][s + Di + f[0]]) {
          o = s;
          break;
        }
        u || (u = s);
      }
      o = o || u;
    }
    if (o) return o !== f[0] && f[Ni](o), r[o];
  }
  function On(e, t) {
    var n, r, i, s, o = e[ki][Zr](), u = o[0], a = {}, f = 0;
    e.dataFilter && (t = e.dataFilter(t, e.dataType));
    if (o[1]) for (n in e[_i]) a[n[sr]()] = e[_i][n];
    for (; i = o[++f]; ) if (i !== Qr) {
      if (u !== Qr && u !== i) {
        n = a[u + Di + i] || a["* " + i];
        if (!n) for (r in a) {
          s = r[rr](Di);
          if (s[1] === i) {
            n = a[u + Di + s[0]] || a["* " + s[0]];
            if (n) {
              n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o[Pi](f--, 0, i));
              break;
            }
          }
        }
        if (n !== !0) if (n && e["throws"]) t = n(t); else try {
          t = n(t);
        } catch (l) {
          return {
            state: Hi,
            error: n ? l : "No conversion from " + u + " to " + i
          };
        }
      }
      u = i;
    }
    return {
      state: Bi,
      data: t
    };
  }
  function Fn() {
    try {
      return new e[ji];
    } catch (t) {}
  }
  function In() {
    try {
      return new e[Fi]("Microsoft.XMLHTTP");
    } catch (t) {}
  }
  function $n() {
    return setTimeout(function() {
      qn = t;
    }, 0), qn = v.now();
  }
  function Jn(e, t) {
    v[nr](t, function(t, n) {
      var r = (Vn[t] || [])[Ii](Vn[Qr]), i = 0, s = r[Er];
      for (; i < s; i++) if (r[i][mr](e, t, n)) return;
    });
  }
  function Kn(e, t, n) {
    var r, i = 0, s = 0, o = Xn[Er], u = v[Ri]()[qi](function() {
      delete a[Ui];
    }), a = function() {
      var t = qn || $n(), n = Math.max(0, f.startTime + f[zi] - t), r = n / f[zi] || 0, i = 1 - r, s = 0, o = f[Wi][Er];
      for (; s < o; s++) f[Wi][s].run(i);
      return u.notifyWith(e, [ f, i, n ]), i < 1 && o ? n : (u[Xi](e, [ f ]), !1);
    }, f = u[Vi]({
      elem: e,
      props: v[Ar]({}, t),
      opts: v[Ar](!0, {
        specialEasing: {}
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: qn || $n(),
      duration: n[zi],
      tweens: [],
      createTween: function(t, n, r) {
        var i = v.Tween(e, f[$i], t, n, f[$i][Ji][t] || f[$i][Ki]);
        return f[Wi][Ci](i), i;
      },
      stop: function(t) {
        var n = 0, r = t ? f[Wi][Er] : 0;
        for (; n < r; n++) f[Wi][n].run(1);
        return t ? u[Xi](e, [ f, t ]) : u.rejectWith(e, [ f, t ]), this;
      }
    }), l = f.props;
    Qn(l, f[$i][Ji]);
    for (; i < o; i++) {
      r = Xn[i][mr](f, e, l, f[$i]);
      if (r) return r;
    }
    return Jn(f, l), v[vr](f[$i][Qi]) && f[$i][Qi][mr](e, f), v.fx.timer(v[Ar](a, {
      anim: f,
      queue: f[$i][Gi],
      elem: e
    })), f[Zi](f[$i][Zi])[Yi](f[$i][Yi], f[$i][es]).fail(f[$i].fail)[qi](f[$i][qi]);
  }
  function Qn(e, t) {
    var n, r, i, s, o;
    for (n in e) {
      r = v[ts](n), i = t[r], s = e[n], v[Ti](s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v[ns][r];
      if (o && "expand" in o) {
        s = o.expand(s), delete e[r];
        for (n in s) n in e || (e[n] = s[n], t[n] = i);
      } else t[r] = i;
    }
  }
  function Gn(e, t, n) {
    var r, i, s, o, u, a, f, l, c, h = this, p = e[ri], d = {}, m = [], g = e[ir] && Gt(e);
    n[Gi] || (l = v[rs](e, "fx"), l[is] == lr && (l[is] = 0, c = l[ss].fire, l[ss].fire = function() {
      l[is] || c();
    }), l[is]++, h[qi](function() {
      h[qi](function() {
        l[is]--, v[Gi](e, "fx")[Er] || l[ss].fire();
      });
    })), e[ir] === 1 && (os in t || fi in t) && (n[us] = [ p[us], p.overflowX, p.overflowY ], v.css(e, ei) === "inline" && v.css(e, "float") === ti && (!v[Br][as] || nn(e[_r]) === "inline" ? p[ei] = fs : p.zoom = 1)), n[us] && (p[us] = ls, v[Br][cs] || h[Yi](function() {
      p[us] = n[us][0], p.overflowX = n[us][1], p.overflowY = n[us][2];
    }));
    for (r in t) {
      s = t[r];
      if (Un[si](s)) {
        delete t[r], a = a || s === hs;
        if (s === (g ? ps : ds)) continue;
        m[Ci](r);
      }
    }
    o = m[Er];
    if (o) {
      u = v[Nr](e, vs) || v[Nr](e, vs, {}), ls in u && (g = u[ls]), a && (u[ls] = !g), g ? v(e)[ds]() : h[Yi](function() {
        v(e)[ps]();
      }), h[Yi](function() {
        var t;
        v[ms](e, vs, !0);
        for (t in d) v[ri](e, t, d[t]);
      });
      for (r = 0; r < o; r++) i = m[r], f = h.createTween(i, g ? u[i] : 0), d[i] = u[i] || v[ri](e, i), i in u || (u[i] = f[Qi], g && (f.end = f[Qi], f[Qi] = i === fi || i === os ? 1 : 0));
    }
  }
  function Yn(e, t, n, r, i) {
    return new Yn[gs].init(e, t, n, r, i);
  }
  function Zn(e, t) {
    var n, r = {
      height: e
    }, i = 0;
    t = t ? 1 : 0;
    for (; i < 4; i += 2 - t) n = $t[i], r[li + n] = r[ci + n] = e;
    return t && (r[ys] = r[fi] = e), r;
  }
  function tr(e) {
    return v[bs](e) ? e : e[ir] === 9 ? e.defaultView || e.parentWindow : !1;
  }
  var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, D, P, j, F, I, q, R, U, z, W, X, V, $, J, K, Q, G, Y, Z, nt, rt, it, st, ot, ct, ht, pt, dt, vt, mt, gt, yt, bt, wt, Et, St, xt, Tt, Nt, Ct, kt, Dt, Pt, Ht, Bt, jt, Ft, It, qt, Rt, Ut, zt, Wt, Xt, Vt, $t, Jt, Kt, rn, sn, on, un, an, ln, cn, hn, pn, dn, vn, mn, gn, yn, bn, wn, En, Sn, xn, Tn, Mn, _n, Dn, Pn, Hn, Bn, jn, qn, Rn, Un, zn, Wn, Xn, Vn, er, nr = "each", rr = "split", ir = "nodeType", sr = "toLowerCase", or = "replace", ur = "getAttribute", ar = "string", fr = "false", lr = null, cr = "test", hr = "data", pr = "isEmptyObject", dr = "parentNode", vr = "isFunction", mr = "call", gr = "filter", yr = "inArray", br = "createDocumentFragment", wr = "createElement", Er = "length", Sr = "getElementsByTagName", xr = "appendChild", Tr = "ownerDocument", Nr = "_data", Cr = "events", kr = "handle", Lr = "event", Ar = "extend", Or = "clearAttributes", Mr = "mergeAttributes", _r = "nodeName", Dr = "object", Pr = "outerHTML", Hr = "html5Clone", Br = "support", jr = "innerHTML", Fr = "input", Ir = "type", qr = "defaultChecked", Rr = "checked", Ur = "value", zr = "option", Wr = "selected", Xr = "script", Vr = "text", $r = "removeAttribute", Jr = "expando", Kr = "undefined", Qr = "*", Gr = "querySelectorAll", Yr = "toUpperCase", Zr = "slice", ei = "display", ti = "none", ni = "contains", ri = "style", ii = "olddisplay", si = "exec", oi = "px", ui = "border", ai = "content", fi = "width", li = "margin", ci = "padding", hi = "Width", pi = "offsetWidth", di = "offsetHeight", vi = "boxSizing", mi = "border-box", gi = "boxSizingReliable", yi = "body", bi = "remove", wi = "document", Ei = "contentWindow", Si = "contentDocument", xi = "removeChild", Ti = "isArray", Ni = "unshift", Ci = "push", ki = "dataTypes", Li = "ajaxSettings", Ai = "shift", Oi = "mimeType", Mi = "getResponseHeader", _i = "converters", Di = " ", Pi = "splice", Hi = "parsererror", Bi = "success", ji = "XMLHttpRequest", Fi = "ActiveXObject", Ii = "concat", qi = "always", Ri = "Deferred", Ui = "elem", zi = "duration", Wi = "tweens", Xi = "resolveWith", Vi = "promise", $i = "opts", Ji = "specialEasing", Ki = "easing", Qi = "start", Gi = "queue", Yi = "done", Zi = "progress", es = "complete", ts = "camelCase", ns = "cssHooks", rs = "_queueHooks", is = "unqueued", ss = "empty", os = "height", us = "overflow", as = "inlineBlockNeedsLayout", fs = "inline-block", ls = "hidden", cs = "shrinkWrapBlocks", hs = "toggle", ps = "hide", ds = "show", vs = "fxshow", ms = "removeData", gs = "prototype", ys = "opacity", bs = "isWindow", ws = "jQuery", Es = "indexOf", Ss = "hasOwnProperty", xs = "addEventListener", Ts = "removeEventListener", Ns = "DOMContentLoaded", Cs = "ready", ks = "readyState", Ls = "detachEvent", As = "onreadystatechange", Os = "context", Ms = "isPlainObject", _s = "merge", Ds = "getElementById", Ps = "find", Hs = "selector", Bs = "jquery", js = "constructor", Fs = "makeArray", Is = "prevObject", qs = ".", Rs = ")", Us = "pushStack", zs = "apply", Ws = "join", Xs = "boolean", Vs = "readyWait", $s = "trigger", Js = "function", Ks = "buildFragment", Qs = "childNodes", Gs = "fragment", Ys = "error", Zs = "async", eo = "documentElement", to = "number", no = "guid", ro = "access", io = "attachEvent", so = "onload", oo = "left", uo = "Callbacks", ao = "unique", fo = "fireWith", lo = "once memory", co = "div", ho = "setAttribute", po = "className", vo = "cssText", mo = "firstChild", go = "tbody", yo = "href", bo = "cssFloat", wo = "form", Eo = "cloneNode", So = "noCloneChecked", xo = "disabled", To = "deleteExpando", No = "onclick", Co = "radio", ko = "lastChild", Lo = "checkClone", Ao = "appendChecked", Oo = "insertBefore", Mo = "reliableHiddenOffsets", _o = "doesNotIncludeMarginInBodyOffset", Do = "getComputedStyle", Po = "pixelPosition", Ho = "marginRight", Bo = "reliableMarginRight", jo = "block", Fo = "cache", Io = "acceptData", qo = "cleanData", Ro = "parsedAttrs", Uo = "triggerHandler", zo = "dequeue", Wo = "inprogress", Xo = "queueHooks", Vo = "speeds", $o = "removeAttr", Jo = "prop", Ko = "propFix", Qo = "removeClass", Go = "__className__", Yo = "valHooks", Zo = "get", eu = "set", tu = "specified", nu = "options", ru = "selectedIndex", iu = "isXMLDoc", su = "attrHooks", ou = "button", uu = "propHooks", au = "getAttributeNode", fu = "auto", lu = "checkbox", cu = "special", hu = "handler", pu = "triggered", du = "dispatch", vu = "delegateType", mu = "bindType", gu = "needsContext", yu = "expr", bu = "delegateCount", wu = "(^|\\.)", Eu = "\\.(?:.*\\.|)", Su = "(\\.|$)", xu = "origType", Tu = "namespace", Nu = "removeEvent", Cu = "Event", ku = "isTrigger", Lu = "namespace_re", Au = "target", Ou = "isPropagationStopped", Mu = "preventDefault", _u = "isDefaultPrevented", Du = "_default", Pu = "click", Hu = "delegateTarget", Bu = "matches", ju = "isImmediatePropagationStopped", Fu = "handleObj", Iu = "stopPropagation", qu = "scrollLeft", Ru = "clientLeft", Uu = "scrollTop", zu = "clientTop", Wu = "relatedTarget", Xu = "fixHooks", Vu = "focusin", $u = "focusout", Ju = "onbeforeunload", Ku = "originalEvent", Qu = "getPreventDefault", Gu = "submit", Yu = "_submit_attached", Zu = "_submit_bubble", ea = "simulate", ta = "change", na = "_just_changed", ra = "_change_attached", ia = "lastToggle", sa = "getElementsByClassName", oa = "$1", ua = "nextSibling", aa = "first", fa = "relative", la = "uniqueSort", ca = "i", ha = "getElementsByName", pa = "matchesSelector", da = "textContent", va = "compareDocumentPosition", ma = "previousSibling", ga = "pseudos", ya = "setFilters", ba = "activeElement", wa = "sourceIndex", Ea = ":checked", Sa = ":enabled", xa = "filters", Ta = "<table>", Na = "htmlSerialize", Ca = "append", ka = "createTextNode", La = "replaceWith", Aa = "domManip", Oa = "before", Ma = "leadingWhitespace", _a = "<$1></$2>", Da = "fragments", Pa = "absolute", Ha = "cssProps", Ba = "cssNumber", ja = "minWidth", Fa = "maxWidth", Ia = "currentStyle", qa = "runtimeStyle", Ra = "position", Ua = "responseText", za = "responseXML", Wa = "lastModified", Xa = "statusCode", Va = "ajaxSetup", $a = "abort", Ja = "crossDomain", Ka = "hasContent", Qa = "contentType", Ga = "setRequestHeader", Ya = "timeout", Za = "ajaxPrefilter", ef = "jsonpCallback", tf = "ajaxTransport", nf = "scriptCharset", rf = "xhrFields", sf = "overrideMimeType", of = "X-Requested-With", uf = "timers", af = "offset", ff = "getBoundingClientRect", lf = "pageYOffset", cf = "pageXOffset", hf = "marginTop", pf = "marginLeft", df = "offsetParent";
  i = e[wi], s = e.location, o = e.navigator, u = e[ws], a = e.$, f = Array[gs][Ci], l = Array[gs][Zr], c = Array[gs][Es], h = Object[gs].toString, p = Object[gs][Ss], d = String[gs].trim, v = function(e, t) {
    return new v.fn.init(e, t, n);
  }, m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, g = /\S/, y = /\s+/, b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, S = /^[\],:{}\s]*$/, x = /(?:^|:|,)(?:\s*\[)+/g, T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, C = /^-ms-/, k = /-([\da-z])/gi, L = function(e, t) {
    return (t + "")[Yr]();
  }, A = function() {
    i[xs] ? (i[Ts](Ns, A, !1), v[Cs]()) : i[ks] === es && (i[Ls](As, A), v[Cs]());
  }, O = {};
  v.fn = v[gs] = {
    constructor: v,
    init: function(e, n, r) {
      var s, o, a;
      if (!e) return this;
      if (e[ir]) return this[Os] = this[0] = e, this[Er] = 1, this;
      if (typeof e == ar) {
        e.charAt(0) === "<" && e.charAt(e[Er] - 1) === ">" && e[Er] >= 3 ? s = [ lr, e, lr ] : s = w[si](e);
        if (s && (s[1] || !n)) {
          if (s[1]) return n = n instanceof v ? n[0] : n, a = n && n[ir] ? n[Tr] || n : i, e = v.parseHTML(s[1], a, !0), E[cr](s[1]) && v[Ms](n) && this.attr[mr](e, n, !0), v[_s](this, e);
          o = i[Ds](s[2]);
          if (o && o[dr]) {
            if (o.id !== s[2]) return r[Ps](e);
            this[Er] = 1, this[0] = o;
          }
          return this[Os] = i, this[Hs] = e, this;
        }
        return !n || n[Bs] ? (n || r)[Ps](e) : this[js](n)[Ps](e);
      }
      return v[vr](e) ? r[Cs](e) : (e[Hs] !== t && (this[Hs] = e[Hs], this[Os] = e[Os]), v[Fs](e, this));
    },
    selector: "",
    jquery: "1.8.3",
    length: 0,
    size: function() {
      return this[Er];
    },
    toArray: function() {
      return l[mr](this);
    },
    get: function(e) {
      return e == lr ? this.toArray() : e < 0 ? this[this[Er] + e] : this[e];
    },
    pushStack: function(e, t, n) {
      var r = v[_s](this[js](), e);
      return r[Is] = this, r[Os] = this[Os], t === Ps ? r[Hs] = this[Hs] + (this[Hs] ? Di : "") + n : t && (r[Hs] = this[Hs] + qs + t + "(" + n + Rs), r;
    },
    each: function(e, t) {
      return v[nr](this, e, t);
    },
    ready: function(e) {
      return v[Cs][Vi]()[Yi](e), this;
    },
    eq: function(e) {
      return e = +e, e === -1 ? this[Zr](e) : this[Zr](e, e + 1);
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    slice: function() {
      return this[Us](l[zs](this, arguments), Zr, l[mr](arguments)[Ws](","));
    },
    map: function(e) {
      return this[Us](v.map(this, function(t, n) {
        return e[mr](t, n, t);
      }));
    },
    end: function() {
      return this[Is] || this[js](lr);
    },
    push: f,
    sort: [].sort,
    splice: [][Pi]
  }, v.fn.init[gs] = v.fn, v[Ar] = v.fn[Ar] = function() {
    var e, n, r, i, s, o, u = arguments[0] || {}, a = 1, f = arguments[Er], l = !1;
    typeof u == Xs && (l = u, u = arguments[1] || {}, a = 2), typeof u != Dr && !v[vr](u) && (u = {}), f === a && (u = this, --a);
    for (; a < f; a++) if ((e = arguments[a]) != lr) for (n in e) {
      r = u[n], i = e[n];
      if (u === i) continue;
      l && i && (v[Ms](i) || (s = v[Ti](i))) ? (s ? (s = !1, o = r && v[Ti](r) ? r : []) : o = r && v[Ms](r) ? r : {}, u[n] = v[Ar](l, o, i)) : i !== t && (u[n] = i);
    }
    return u;
  }, v[Ar]({
    noConflict: function(t) {
      return e.$ === v && (e.$ = a), t && e[ws] === v && (e[ws] = u), v;
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? v[Vs]++ : v[Cs](!0);
    },
    ready: function(e) {
      if (e === !0 ? --v[Vs] : v.isReady) return;
      if (!i[yi]) return setTimeout(v[Cs], 1);
      v.isReady = !0;
      if (e !== !0 && --v[Vs] > 0) return;
      r[Xi](i, [ v ]), v.fn[$s] && v(i)[$s](Cs).off(Cs);
    },
    isFunction: function(e) {
      return v[Ir](e) === Js;
    },
    isArray: Array[Ti] || function(e) {
      return v[Ir](e) === "array";
    },
    isWindow: function(e) {
      return e != lr && e == e.window;
    },
    isNumeric: function(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    type: function(e) {
      return e == lr ? String(e) : O[h[mr](e)] || Dr;
    },
    isPlainObject: function(e) {
      var r;
      if (!e || v[Ir](e) !== Dr || e[ir] || v[bs](e)) return !1;
      try {
        if (e[js] && !p[mr](e, js) && !p[mr](e[js][gs], "isPrototypeOf")) return !1;
      } catch (n) {
        return !1;
      }
      for (r in e) ;
      return r === t || p[mr](e, r);
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    error: function(e) {
      throw new Error(e);
    },
    parseHTML: function(e, t, n) {
      var r;
      return !e || typeof e != ar ? lr : (typeof t == Xs && (n = t, t = 0), t = t || i, (r = E[si](e)) ? [ t[wr](r[1]) ] : (r = v[Ks]([ e ], t, n ? lr : []), v[_s]([], (r.cacheable ? v.clone(r[Gs]) : r[Gs])[Qs])));
    },
    parseJSON: function(t) {
      if (!t || typeof t != ar) return lr;
      t = v.trim(t);
      if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
      if (S[cr](t[or](T, "@")[or](N, "]")[or](x, ""))) return (new Function("return " + t))();
      v[Ys]("Invalid JSON: " + t);
    },
    parseXML: function(n) {
      var r, i;
      if (!n || typeof n != ar) return lr;
      try {
        e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r[Zs] = fr, r.loadXML(n));
      } catch (s) {
        r = t;
      }
      return (!r || !r[eo] || r[Sr](Hi)[Er]) && v[Ys]("Invalid XML: " + n), r;
    },
    noop: function() {},
    globalEval: function(t) {
      t && g[cr](t) && (e.execScript || function(t) {
        e.eval[mr](e, t);
      })(t);
    },
    camelCase: function(e) {
      return e[or](C, "ms-")[or](k, L);
    },
    nodeName: function(e, t) {
      return e[_r] && e[_r][sr]() === t[sr]();
    },
    each: function(e, n, r) {
      var i, s = 0, o = e[Er], u = o === t || v[vr](e);
      if (r) {
        if (u) {
          for (i in e) if (n[zs](e[i], r) === !1) break;
        } else for (; s < o; ) if (n[zs](e[s++], r) === !1) break;
      } else if (u) {
        for (i in e) if (n[mr](e[i], i, e[i]) === !1) break;
      } else for (; s < o; ) if (n[mr](e[s], s, e[s++]) === !1) break;
      return e;
    },
    trim: d && !d[mr]("﻿ ") ? function(e) {
      return e == lr ? "" : d[mr](e);
    } : function(e) {
      return e == lr ? "" : (e + "")[or](b, "");
    },
    makeArray: function(e, t) {
      var n, r = t || [];
      return e != lr && (n = v[Ir](e), e[Er] == lr || n === ar || n === Js || n === "regexp" || v[bs](e) ? f[mr](r, e) : v[_s](r, e)), r;
    },
    inArray: function(e, t, n) {
      var r;
      if (t) {
        if (c) return c[mr](t, e, n);
        r = t[Er], n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
        for (; n < r; n++) if (n in t && t[n] === e) return n;
      }
      return -1;
    },
    merge: function(e, n) {
      var r = n[Er], i = e[Er], s = 0;
      if (typeof r == to) for (; s < r; s++) e[i++] = n[s]; else while (n[s] !== t) e[i++] = n[s++];
      return e[Er] = i, e;
    },
    grep: function(e, t, n) {
      var r, i = [], s = 0, o = e[Er];
      n = !!n;
      for (; s < o; s++) r = !!t(e[s], s), n !== r && i[Ci](e[s]);
      return i;
    },
    map: function(e, n, r) {
      var i, s, o = [], u = 0, a = e[Er], f = e instanceof v || a !== t && typeof a == to && (a > 0 && e[0] && e[a - 1] || a === 0 || v[Ti](e));
      if (f) for (; u < a; u++) i = n(e[u], u, r), i != lr && (o[o[Er]] = i); else for (s in e) i = n(e[s], s, r), i != lr && (o[o[Er]] = i);
      return o[Ii][zs]([], o);
    },
    guid: 1,
    proxy: function(e, n) {
      var r, i, s;
      return typeof n == ar && (r = e[n], n = e, e = r), v[vr](e) ? (i = l[mr](arguments, 2), s = function() {
        return e[zs](n, i[Ii](l[mr](arguments)));
      }, s[no] = e[no] = e[no] || v[no]++, s) : t;
    },
    access: function(e, n, r, i, s, o, u) {
      var a, f = r == lr, l = 0, c = e[Er];
      if (r && typeof r == Dr) {
        for (l in r) v[ro](e, n, l, r[l], 1, o, i);
        s = 1;
      } else if (i !== t) {
        a = u === t && v[vr](i), f && (a ? (a = n, n = function(e, t, n) {
          return a[mr](v(e), n);
        }) : (n[mr](e, i), n = lr));
        if (n) for (; l < c; l++) n(e[l], r, a ? i[mr](e[l], l, n(e[l], r)) : i, u);
        s = 1;
      }
      return s ? e : f ? n[mr](e) : c ? n(e[0], r) : o;
    },
    now: function() {
      return (new Date).getTime();
    }
  }), v[Cs][Vi] = function(t) {
    var n;
    if (!r) {
      r = v[Ri]();
      if (i[ks] === es) setTimeout(v[Cs], 1); else if (i[xs]) i[xs](Ns, A, !1), e[xs]("load", v[Cs], !1); else {
        i[io](As, A), e[io](so, v[Cs]);
        n = !1;
        try {
          n = e.frameElement == lr && i[eo];
        } catch (s) {}
        n && n.doScroll && function o() {
          if (!v.isReady) {
            try {
              n.doScroll(oo);
            } catch (e) {
              return setTimeout(o, 50);
            }
            v[Cs]();
          }
        }();
      }
    }
    return r[Vi](t);
  }, v[nr]("Boolean Number String Function Array Date RegExp Object"[rr](Di), function(e, t) {
    O["[object " + t + "]"] = t[sr]();
  }), n = v(i);
  M = {};
  v[uo] = function(e) {
    var n, r, i, s, o, u, a, f, l, c;
    e = typeof e == ar ? M[e] || _(e) : v[Ar]({}, e);
    a = [], f = !e.once && [], l = function(t) {
      n = e.memory && t, r = !0, u = s || 0, s = 0, o = a[Er], i = !0;
      for (; a && u < o; u++) if (a[u][zs](t[0], t[1]) === !1 && e.stopOnFalse) {
        n = !1;
        break;
      }
      i = !1, a && (f ? f[Er] && l(f[Ai]()) : n ? a = [] : c.disable());
    }, c = {
      add: function() {
        if (a) {
          var t = a[Er];
          (function r(t) {
            v[nr](t, function(t, n) {
              var i = v[Ir](n);
              i === Js ? (!e[ao] || !c.has(n)) && a[Ci](n) : n && n[Er] && i !== ar && r(n);
            });
          })(arguments), i ? o = a[Er] : n && (s = t, l(n));
        }
        return this;
      },
      remove: function() {
        return a && v[nr](arguments, function(e, t) {
          var n;
          while ((n = v[yr](t, a, n)) > -1) a[Pi](n, 1), i && (n <= o && o--, n <= u && u--);
        }), this;
      },
      has: function(e) {
        return v[yr](e, a) > -1;
      },
      empty: function() {
        return a = [], this;
      },
      disable: function() {
        return a = f = n = t, this;
      },
      disabled: function() {
        return !a;
      },
      lock: function() {
        return f = t, n || c.disable(), this;
      },
      locked: function() {
        return !f;
      },
      fireWith: function(e, t) {
        return t = t || [], t = [ e, t[Zr] ? t[Zr]() : t ], a && (!r || f) && (i ? f[Ci](t) : l(t)), this;
      },
      fire: function() {
        return c[fo](this, arguments), this;
      },
      fired: function() {
        return !!r;
      }
    };
    return c;
  }, v[Ar]({
    Deferred: function(e) {
      var t = [ [ "resolve", Yi, v[uo](lo), "resolved" ], [ "reject", "fail", v[uo](lo), "rejected" ], [ "notify", Zi, v[uo]("memory") ] ], n = "pending", r = {
        state: function() {
          return n;
        },
        always: function() {
          return i[Yi](arguments).fail(arguments), this;
        },
        then: function() {
          var e = arguments;
          return v[Ri](function(n) {
            v[nr](t, function(t, r) {
              var s = r[0], o = e[t];
              i[r[1]](v[vr](o) ? function() {
                var e = o[zs](this, arguments);
                e && v[vr](e[Vi]) ? e[Vi]()[Yi](n.resolve).fail(n.reject)[Zi](n.notify) : n[s + "With"](this === i ? n : this, [ e ]);
              } : n[s]);
            }), e = lr;
          })[Vi]();
        },
        promise: function(e) {
          return e != lr ? v[Ar](e, r) : r;
        }
      }, i = {};
      return r.pipe = r.then, v[nr](t, function(e, s) {
        var o = s[2], u = s[3];
        r[s[1]] = o.add, u && o.add(function() {
          n = u;
        }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o[fo];
      }), r[Vi](i), e && e[mr](i, i), i;
    },
    when: function(e) {
      var u, a, f, t = 0, n = l[mr](arguments), r = n[Er], i = r !== 1 || e && v[vr](e[Vi]) ? r : 0, s = i === 1 ? e : v[Ri](), o = function(e, t, n) {
        return function(r) {
          t[e] = this, n[e] = arguments[Er] > 1 ? l[mr](arguments) : r, n === u ? s.notifyWith(t, n) : --i || s[Xi](t, n);
        };
      };
      if (r > 1) {
        u = new Array(r), a = new Array(r), f = new Array(r);
        for (; t < r; t++) n[t] && v[vr](n[t][Vi]) ? n[t][Vi]()[Yi](o(t, f, n)).fail(s.reject)[Zi](o(t, a, u)) : --i;
      }
      return i || s[Xi](f, n), s[Vi]();
    }
  }), v[Br] = function() {
    var t, n, r, s, o, u, a, f, l, c, h, p = i[wr](co);
    p[ho](po, "t"), p[jr] = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p[Sr](Qr), r = p[Sr]("a")[0];
    if (!n || !r || !n[Er]) return {};
    s = i[wr]("select"), o = s[xr](i[wr](zr)), u = p[Sr](Fr)[0], r[ri][vo] = "top:1px;float:left;opacity:.5", t = {
      leadingWhitespace: p[mo][ir] === 3,
      tbody: !p[Sr](go)[Er],
      htmlSerialize: !!p[Sr]("link")[Er],
      style: /top/[cr](r[ur](ri)),
      hrefNormalized: r[ur](yo) === "/a",
      opacity: /^0.5/[cr](r[ri][ys]),
      cssFloat: !!r[ri][bo],
      checkOn: u[Ur] === "on",
      optSelected: o[Wr],
      getSetAttribute: p[po] !== "t",
      enctype: !!i[wr](wo).enctype,
      html5Clone: i[wr]("nav")[Eo](!0)[Pr] !== "<:nav></:nav>",
      boxModel: i.compatMode === "CSS1Compat",
      submitBubbles: !0,
      changeBubbles: !0,
      focusinBubbles: !1,
      deleteExpando: !0,
      noCloneEvent: !0,
      inlineBlockNeedsLayout: !1,
      shrinkWrapBlocks: !1,
      reliableMarginRight: !0,
      boxSizingReliable: !0,
      pixelPosition: !1
    }, u[Rr] = !0, t[So] = u[Eo](!0)[Rr], s[xo] = !0, t.optDisabled = !o[xo];
    try {
      delete p[cr];
    } catch (d) {
      t[To] = !1;
    }
    !p[xs] && p[io] && p.fireEvent && (p[io](No, h = function() {
      t.noCloneEvent = !1;
    }), p[Eo](!0).fireEvent(No), p[Ls](No, h)), u = i[wr](Fr), u[Ur] = "t", u[ho](Ir, Co), t.radioValue = u[Ur] === "t", u[ho](Rr, Rr), u[ho]("name", "t"), p[xr](u), a = i[br](), a[xr](p[ko]), t[Lo] = a[Eo](!0)[Eo](!0)[ko][Rr], t[Ao] = u[Rr], a[xi](u), a[xr](p);
    if (p[io]) for (l in {
      submit: !0,
      change: !0,
      focusin: !0
    }) f = "on" + l, c = f in p, c || (p[ho](f, "return;"), c = typeof p[f] == Js), t[l + "Bubbles"] = c;
    return v(function() {
      var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;", a = i[Sr](yi)[0];
      if (!a) return;
      n = i[wr](co), n[ri][vo] = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a[Oo](n, a[mo]), r = i[wr](co), n[xr](r), r[jr] = "<table><tr><td></td><td>t</td></tr></table>", s = r[Sr]("td"), s[0][ri][vo] = "padding:0;margin:0;border:0;display:none", c = s[0][di] === 0, s[0][ri][ei] = "", s[1][ri][ei] = ti, t[Mo] = c && s[0][di] === 0, r[jr] = "", r[ri][vo] = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t[vi] = r[pi] === 4, t[_o] = a.offsetTop !== 1, e[Do] && (t[Po] = (e[Do](r, lr) || {}).top !== "1%", t[gi] = (e[Do](r, lr) || {
        width: "4px"
      })[fi] === "4px", o = i[wr](co), o[ri][vo] = r[ri][vo] = u, o[ri][Ho] = o[ri][fi] = "0", r[ri][fi] = "1px", r[xr](o), t[Bo] = !parseFloat((e[Do](o, lr) || {})[Ho])), typeof r[ri].zoom != Kr && (r[jr] = "", r[ri][vo] = u + "width:1px;padding:1px;display:inline;zoom:1", t[as] = r[pi] === 3, r[ri][ei] = jo, r[ri][us] = "visible", r[jr] = "<div></div>", r[mo][ri][fi] = "5px", t[cs] = r[pi] !== 3, n[ri].zoom = 1), a[xi](n), n = r = s = o = lr;
    }), a[xi](p), n = r = s = o = u = a = p = lr, t;
  }();
  D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g;
  v[Ar]({
    cache: {},
    deletedIds: [],
    uuid: 0,
    expando: ws + (v.fn[Bs] + Math.random())[or](/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0
    },
    hasData: function(e) {
      return e = e[ir] ? v[Fo][e[v[Jr]]] : e[v[Jr]], !!e && !B(e);
    },
    data: function(e, n, r, i) {
      var s, o, u, a, f, l, c;
      if (!v[Io](e)) return;
      u = v[Jr], a = typeof n == ar, f = e[ir], l = f ? v[Fo] : e, c = f ? e[u] : e[u] && u;
      if ((!c || !l[c] || !i && !l[c][hr]) && a && r === t) return;
      c || (f ? e[u] = c = v.deletedIds.pop() || v[no]++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
      if (typeof n == Dr || typeof n == Js) i ? l[c] = v[Ar](l[c], n) : l[c][hr] = v[Ar](l[c][hr], n);
      return s = l[c], i || (s[hr] || (s[hr] = {}), s = s[hr]), r !== t && (s[v[ts](n)] = r), a ? (o = s[n], o == lr && (o = s[v[ts](n)])) : o = s, o;
    },
    removeData: function(e, t, n) {
      var r, i, s, o, u, a;
      if (!v[Io](e)) return;
      o = e[ir], u = o ? v[Fo] : e, a = o ? e[v[Jr]] : v[Jr];
      if (!u[a]) return;
      if (t) {
        r = n ? u[a] : u[a][hr];
        if (r) {
          v[Ti](t) || (t in r ? t = [ t ] : (t = v[ts](t), t in r ? t = [ t ] : t = t[rr](Di)));
          for (i = 0, s = t[Er]; i < s; i++) delete r[t[i]];
          if (!(n ? B : v[pr])(r)) return;
        }
      }
      if (!n) {
        delete u[a][hr];
        if (!B(u[a])) return;
      }
      o ? v[qo]([ e ], !0) : v[Br][To] || u != u.window ? delete u[a] : u[a] = lr;
    },
    _data: function(e, t, n) {
      return v[hr](e, t, n, !0);
    },
    acceptData: function(e) {
      var t = e[_r] && v.noData[e[_r][sr]()];
      return !t || t !== !0 && e[ur]("classid") === t;
    }
  }), v.fn[Ar]({
    data: function(e, n) {
      var r, i, s, o, u, a = this[0], f = 0, l = lr;
      if (e === t) {
        if (this[Er]) {
          l = v[hr](a);
          if (a[ir] === 1 && !v[Nr](a, Ro)) {
            s = a.attributes;
            for (u = s[Er]; f < u; f++) o = s[f].name, o[Es]("data-") || (o = v[ts](o.substring(5)), H(a, o, l[o]));
            v[Nr](a, Ro, !0);
          }
        }
        return l;
      }
      return typeof e == Dr ? this[nr](function() {
        v[hr](this, e);
      }) : (r = e[rr](qs, 2), r[1] = r[1] ? qs + r[1] : "", i = r[1] + "!", v[ro](this, function(n) {
        if (n === t) return l = this[Uo]("getData" + i, [ r[0] ]), l === t && a && (l = v[hr](a, e), l = H(a, e, l)), l === t && r[1] ? this[hr](r[0]) : l;
        r[1] = n, this[nr](function() {
          var t = v(this);
          t[Uo]("setData" + i, r), v[hr](this, e, n), t[Uo]("changeData" + i, r);
        });
      }, lr, n, arguments[Er] > 1, lr, !1));
    },
    removeData: function(e) {
      return this[nr](function() {
        v[ms](this, e);
      });
    }
  }), v[Ar]({
    queue: function(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + Gi, r = v[Nr](e, t), n && (!r || v[Ti](n) ? r = v[Nr](e, t, v[Fs](n)) : r[Ci](n)), r || [];
    },
    dequeue: function(e, t) {
      var n, r, i, s, o;
      t = t || "fx";
      n = v[Gi](e, t), r = n[Er], i = n[Ai](), s = v[rs](e, t), o = function() {
        v[zo](e, t);
      };
      i === Wo && (i = n[Ai](), r--), i && (t === "fx" && n[Ni](Wo), delete s.stop, i[mr](e, o, s)), !r && s && s[ss].fire();
    },
    _queueHooks: function(e, t) {
      var n = t + Xo;
      return v[Nr](e, n) || v[Nr](e, n, {
        empty: v[uo](lo).add(function() {
          v[ms](e, t + Gi, !0), v[ms](e, n, !0);
        })
      });
    }
  }), v.fn[Ar]({
    queue: function(e, n) {
      var r = 2;
      return typeof e != ar && (n = e, e = "fx", r--), arguments[Er] < r ? v[Gi](this[0], e) : n === t ? this : this[nr](function() {
        var t = v[Gi](this, e, n);
        v[rs](this, e), e === "fx" && t[0] !== Wo && v[zo](this, e);
      });
    },
    dequeue: function(e) {
      return this[nr](function() {
        v[zo](this, e);
      });
    },
    delay: function(e, t) {
      return e = v.fx ? v.fx[Vo][e] || e : e, t = t || "fx", this[Gi](t, function(t, n) {
        var r = setTimeout(t, e);
        n.stop = function() {
          clearTimeout(r);
        };
      });
    },
    clearQueue: function(e) {
      return this[Gi](e || "fx", []);
    },
    promise: function(e, n) {
      var r, i = 1, s = v[Ri](), o = this, u = this[Er], a = function() {
        --i || s[Xi](o, [ o ]);
      };
      typeof e != ar && (n = e, e = t), e = e || "fx";
      while (u--) r = v[Nr](o[u], e + Xo), r && r[ss] && (i++, r[ss].add(a));
      return a(), s[Vi](n);
    }
  });
  q = /[\t\r\n]/g, R = /\r/g, U = /^(?:button|input)$/i, z = /^(?:button|input|object|select|textarea)$/i, W = /^a(?:rea|)$/i, X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, V = v[Br].getSetAttribute;
  v.fn[Ar]({
    attr: function(e, t) {
      return v[ro](this, v.attr, e, t, arguments[Er] > 1);
    },
    removeAttr: function(e) {
      return this[nr](function() {
        v[$o](this, e);
      });
    },
    prop: function(e, t) {
      return v[ro](this, v[Jo], e, t, arguments[Er] > 1);
    },
    removeProp: function(e) {
      return e = v[Ko][e] || e, this[nr](function() {
        try {
          this[e] = t, delete this[e];
        } catch (n) {}
      });
    },
    addClass: function(e) {
      var t, n, r, i, s, o, u;
      if (v[vr](e)) return this[nr](function(t) {
        v(this).addClass(e[mr](this, t, this[po]));
      });
      if (e && typeof e == ar) {
        t = e[rr](y);
        for (n = 0, r = this[Er]; n < r; n++) {
          i = this[n];
          if (i[ir] === 1) if (!i[po] && t[Er] === 1) i[po] = e; else {
            s = Di + i[po] + Di;
            for (o = 0, u = t[Er]; o < u; o++) s[Es](Di + t[o] + Di) < 0 && (s += t[o] + Di);
            i[po] = v.trim(s);
          }
        }
      }
      return this;
    },
    removeClass: function(e) {
      var n, r, i, s, o, u, a;
      if (v[vr](e)) return this[nr](function(t) {
        v(this)[Qo](e[mr](this, t, this[po]));
      });
      if (e && typeof e == ar || e === t) {
        n = (e || "")[rr](y);
        for (u = 0, a = this[Er]; u < a; u++) {
          i = this[u];
          if (i[ir] === 1 && i[po]) {
            r = (Di + i[po] + Di)[or](q, Di);
            for (s = 0, o = n[Er]; s < o; s++) while (r[Es](Di + n[s] + Di) >= 0) r = r[or](Di + n[s] + Di, Di);
            i[po] = e ? v.trim(r) : "";
          }
        }
      }
      return this;
    },
    toggleClass: function(e, t) {
      var n = typeof e, r = typeof t == Xs;
      return v[vr](e) ? this[nr](function(n) {
        v(this).toggleClass(e[mr](this, n, this[po], t), t);
      }) : this[nr](function() {
        var i, s, o, u, a;
        if (n === ar) {
          s = 0, o = v(this), u = t, a = e[rr](y);
          while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : Qo](i);
        } else if (n === Kr || n === Xs) this[po] && v[Nr](this, Go, this[po]), this[po] = this[po] || e === !1 ? "" : v[Nr](this, Go) || "";
      });
    },
    hasClass: function(e) {
      var t = Di + e + Di, n = 0, r = this[Er];
      for (; n < r; n++) if (this[n][ir] === 1 && (Di + this[n][po] + Di)[or](q, Di)[Es](t) >= 0) return !0;
      return !1;
    },
    val: function(e) {
      var n, r, i, s = this[0];
      if (!arguments[Er]) {
        if (s) return n = v[Yo][s[Ir]] || v[Yo][s[_r][sr]()], n && Zo in n && (r = n[Zo](s, Ur)) !== t ? r : (r = s[Ur], typeof r == ar ? r[or](R, "") : r == lr ? "" : r);
        return;
      }
      return i = v[vr](e), this[nr](function(r) {
        var s, o = v(this);
        if (this[ir] !== 1) return;
        i ? s = e[mr](this, r, o.val()) : s = e, s == lr ? s = "" : typeof s == to ? s += "" : v[Ti](s) && (s = v.map(s, function(e) {
          return e == lr ? "" : e + "";
        })), n = v[Yo][this[Ir]] || v[Yo][this[_r][sr]()];
        if (!n || !(eu in n) || n[eu](this, s, Ur) === t) this[Ur] = s;
      });
    }
  }), v[Ar]({
    valHooks: {
      option: {
        get: function(e) {
          var t = e.attributes[Ur];
          return !t || t[tu] ? e[Ur] : e[Vr];
        }
      },
      select: {
        get: function(e) {
          var t, n, r = e[nu], i = e[ru], s = e[Ir] === "select-one" || i < 0, o = s ? lr : [], u = s ? i + 1 : r[Er], a = i < 0 ? u : s ? i : 0;
          for (; a < u; a++) {
            n = r[a];
            if ((n[Wr] || a === i) && (v[Br].optDisabled ? !n[xo] : n[ur](xo) === lr) && (!n[dr][xo] || !v[_r](n[dr], "optgroup"))) {
              t = v(n).val();
              if (s) return t;
              o[Ci](t);
            }
          }
          return o;
        },
        set: function(e, t) {
          var n = v[Fs](t);
          return v(e)[Ps](zr)[nr](function() {
            this[Wr] = v[yr](v(this).val(), n) >= 0;
          }), n[Er] || (e[ru] = -1), n;
        }
      }
    },
    attrFn: {},
    attr: function(e, n, r, i) {
      var s, o, u, a = e[ir];
      if (!e || a === 3 || a === 8 || a === 2) return;
      if (i && v[vr](v.fn[n])) return v(e)[n](r);
      if (typeof e[ur] == Kr) return v[Jo](e, n, r);
      u = a !== 1 || !v[iu](e), u && (n = n[sr](), o = v[su][n] || (X[cr](n) ? F : j));
      if (r !== t) {
        if (r === lr) {
          v[$o](e, n);
          return;
        }
        return o && eu in o && u && (s = o[eu](e, r, n)) !== t ? s : (e[ho](n, r + ""), r);
      }
      return o && Zo in o && u && (s = o[Zo](e, n)) !== lr ? s : (s = e[ur](n), s === lr ? t : s);
    },
    removeAttr: function(e, t) {
      var n, r, i, s, o = 0;
      if (t && e[ir] === 1) {
        r = t[rr](y);
        for (; o < r[Er]; o++) i = r[o], i && (n = v[Ko][i] || i, s = X[cr](i), s || v.attr(e, i, ""), e[$r](V ? i : n), s && n in e && (e[n] = !1));
      }
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          var n;
          if (U[cr](e[_r]) && e[dr]) v[Ys]("type property can't be changed"); else if (!v[Br].radioValue && t === Co && v[_r](e, Fr)) {
            n = e[Ur];
            return e[ho](Ir, t), n && (e[Ur] = n), t;
          }
        }
      },
      value: {
        get: function(e, t) {
          return j && v[_r](e, ou) ? j[Zo](e, t) : t in e ? e[Ur] : lr;
        },
        set: function(e, t, n) {
          if (j && v[_r](e, ou)) return j[eu](e, t, n);
          e[Ur] = t;
        }
      }
    },
    propFix: {
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": po,
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
    prop: function(e, n, r) {
      var i, s, o, u = e[ir];
      if (!e || u === 3 || u === 8 || u === 2) return;
      return o = u !== 1 || !v[iu](e), o && (n = v[Ko][n] || n, s = v[uu][n]), r !== t ? s && eu in s && (i = s[eu](e, r, n)) !== t ? i : e[n] = r : s && Zo in s && (i = s[Zo](e, n)) !== lr ? i : e[n];
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var n = e[au]("tabindex");
          return n && n[tu] ? parseInt(n[Ur], 10) : z[cr](e[_r]) || W[cr](e[_r]) && e[yo] ? 0 : t;
        }
      }
    }
  }), F = {
    get: function(e, n) {
      var r, i = v[Jo](e, n);
      return i === !0 || typeof i != Xs && (r = e[au](n)) && r.nodeValue !== !1 ? n[sr]() : t;
    },
    set: function(e, t, n) {
      var r;
      return t === !1 ? v[$o](e, n) : (r = v[Ko][n] || n, r in e && (e[r] = !0), e[ho](n, n[sr]())), n;
    }
  }, V || (I = {
    name: !0,
    id: !0,
    coords: !0
  }, j = v[Yo][ou] = {
    get: function(e, n) {
      var r;
      return r = e[au](n), r && (I[n] ? r[Ur] !== "" : r[tu]) ? r[Ur] : t;
    },
    set: function(e, t, n) {
      var r = e[au](n);
      return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r[Ur] = t + "";
    }
  }, v[nr]([ fi, os ], function(e, t) {
    v[su][t] = v[Ar](v[su][t], {
      set: function(e, n) {
        if (n === "") return e[ho](t, fu), n;
      }
    });
  }), v[su].contenteditable = {
    get: j[Zo],
    set: function(e, t, n) {
      t === "" && (t = fr), j[eu](e, t, n);
    }
  }), v[Br].hrefNormalized || v[nr]([ yo, "src", fi, os ], function(e, n) {
    v[su][n] = v[Ar](v[su][n], {
      get: function(e) {
        var r = e[ur](n, 2);
        return r === lr ? t : r;
      }
    });
  }), v[Br][ri] || (v[su][ri] = {
    get: function(e) {
      return e[ri][vo][sr]() || t;
    },
    set: function(e, t) {
      return e[ri][vo] = t + "";
    }
  }), v[Br].optSelected || (v[uu][Wr] = v[Ar](v[uu][Wr], {
    get: function(e) {
      var t = e[dr];
      return t && (t[ru], t[dr] && t[dr][ru]), lr;
    }
  })), v[Br].enctype || (v[Ko].enctype = "encoding"), v[Br].checkOn || v[nr]([ Co, lu ], function() {
    v[Yo][this] = {
      get: function(e) {
        return e[ur](Ur) === lr ? "on" : e[Ur];
      }
    };
  }), v[nr]([ Co, lu ], function() {
    v[Yo][this] = v[Ar](v[Yo][this], {
      set: function(e, t) {
        if (v[Ti](t)) return e[Rr] = v[yr](v(e).val(), t) >= 0;
      }
    });
  });
  $ = /^(?:textarea|input|select)$/i, J = /^([^\.]*|)(?:\.(.+)|)$/, K = /(?:^|\s)hover(\.\S+|)\b/, Q = /^key/, G = /^(?:mouse|contextmenu)|click/, Y = /^(?:focusinfocus|focusoutblur)$/, Z = function(e) {
    return v[Lr][cu].hover ? e : e[or](K, "mouseenter$1 mouseleave$1");
  };
  v[Lr] = {
    add: function(e, n, r, i, s) {
      var o, u, a, f, l, c, h, p, d, m, g;
      if (e[ir] === 3 || e[ir] === 8 || !n || !r || !(o = v[Nr](e))) return;
      r[hu] && (d = r, r = d[hu], s = d[Hs]), r[no] || (r[no] = v[no]++), a = o[Cr], a || (o[Cr] = a = {}), u = o[kr], u || (o[kr] = u = function(e) {
        return typeof v == Kr || !!e && v[Lr][pu] === e[Ir] ? t : v[Lr][du][zs](u[Ui], arguments);
      }, u[Ui] = e), n = v.trim(Z(n))[rr](Di);
      for (f = 0; f < n[Er]; f++) {
        l = J[si](n[f]) || [], c = l[1], h = (l[2] || "")[rr](qs).sort(), g = v[Lr][cu][c] || {}, c = (s ? g[vu] : g[mu]) || c, g = v[Lr][cu][c] || {}, p = v[Ar]({
          type: c,
          origType: l[1],
          data: i,
          handler: r,
          guid: r[no],
          selector: s,
          needsContext: s && v[yu].match[gu][cr](s),
          namespace: h[Ws](qs)
        }, d), m = a[c];
        if (!m) {
          m = a[c] = [], m[bu] = 0;
          if (!g.setup || g.setup[mr](e, i, h, u) === !1) e[xs] ? e[xs](c, u, !1) : e[io] && e[io]("on" + c, u);
        }
        g.add && (g.add[mr](e, p), p[hu][no] || (p[hu][no] = r[no])), s ? m[Pi](m[bu]++, 0, p) : m[Ci](p), v[Lr].global[c] = !0;
      }
      e = lr;
    },
    global: {},
    remove: function(e, t, n, r, i) {
      var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v[Nr](e);
      if (!g || !(h = g[Cr])) return;
      t = v.trim(Z(t || ""))[rr](Di);
      for (s = 0; s < t[Er]; s++) {
        o = J[si](t[s]) || [], u = a = o[1], f = o[2];
        if (!u) {
          for (u in h) v[Lr][bi](e, u + t[s], n, r, !0);
          continue;
        }
        p = v[Lr][cu][u] || {}, u = (r ? p[vu] : p[mu]) || u, d = h[u] || [], l = d[Er], f = f ? new RegExp(wu + f[rr](qs).sort()[Ws](Eu) + Su) : lr;
        for (c = 0; c < d[Er]; c++) m = d[c], (i || a === m[xu]) && (!n || n[no] === m[no]) && (!f || f[cr](m[Tu])) && (!r || r === m[Hs] || r === "**" && m[Hs]) && (d[Pi](c--, 1), m[Hs] && d[bu]--, p[bi] && p[bi][mr](e, m));
        d[Er] === 0 && l !== d[Er] && ((!p.teardown || p.teardown[mr](e, f, g[kr]) === !1) && v[Nu](e, u, g[kr]), delete h[u]);
      }
      v[pr](h) && (delete g[kr], v[ms](e, Cr, !0));
    },
    customEvent: {
      getData: !0,
      setData: !0,
      changeData: !0
    },
    trigger: function(n, r, s, o) {
      var u, a, f, l, c, h, p, d, m, g, y, b;
      if (!s || s[ir] !== 3 && s[ir] !== 8) {
        y = n[Ir] || n, b = [];
        if (Y[cr](y + v[Lr][pu])) return;
        y[Es]("!") >= 0 && (y = y[Zr](0, -1), a = !0), y[Es](qs) >= 0 && (b = y[rr](qs), y = b[Ai](), b.sort());
        if ((!s || v[Lr].customEvent[y]) && !v[Lr].global[y]) return;
        n = typeof n == Dr ? n[v[Jr]] ? n : new v[Cu](y, n) : new v[Cu](y), n[Ir] = y, n[ku] = !0, n.exclusive = a, n[Tu] = b[Ws](qs), n[Lu] = n[Tu] ? new RegExp(wu + b[Ws](Eu) + Su) : lr, h = y[Es](":") < 0 ? "on" + y : "";
        if (!s) {
          u = v[Fo];
          for (f in u) u[f][Cr] && u[f][Cr][y] && v[Lr][$s](n, r, u[f][kr][Ui], !0);
          return;
        }
        n.result = t, n[Au] || (n[Au] = s), r = r != lr ? v[Fs](r) : [], r[Ni](n), p = v[Lr][cu][y] || {};
        if (p[$s] && p[$s][zs](s, r) === !1) return;
        m = [ [ s, p[mu] || y ] ];
        if (!o && !p.noBubble && !v[bs](s)) {
          g = p[vu] || y, l = Y[cr](g + y) ? s : s[dr];
          for (c = s; l; l = l[dr]) m[Ci]([ l, g ]), c = l;
          c === (s[Tr] || i) && m[Ci]([ c.defaultView || c.parentWindow || e, g ]);
        }
        for (f = 0; f < m[Er] && !n[Ou](); f++) l = m[f][0], n[Ir] = m[f][1], d = (v[Nr](l, Cr) || {})[n[Ir]] && v[Nr](l, kr), d && d[zs](l, r), d = h && l[h], d && v[Io](l) && d[zs] && d[zs](l, r) === !1 && n[Mu]();
        return n[Ir] = y, !o && !n[_u]() && (!p[Du] || p[Du][zs](s[Tr], r) === !1) && (y !== Pu || !v[_r](s, "a")) && v[Io](s) && h && s[y] && (y !== "focus" && y !== "blur" || n[Au][pi] !== 0) && !v[bs](s) && (c = s[h], c && (s[h] = lr), v[Lr][pu] = y, s[y](), v[Lr][pu] = t, c && (s[h] = c)), n.result;
      }
      return;
    },
    dispatch: function(n) {
      var r, i, s, o, u, a, f, c, h, d, m, g, y, b, w;
      n = v[Lr].fix(n || e[Lr]);
      d = (v[Nr](this, Cr) || {})[n[Ir]] || [], m = d[bu], g = l[mr](arguments), y = !n.exclusive && !n[Tu], b = v[Lr][cu][n[Ir]] || {}, w = [];
      g[0] = n, n[Hu] = this;
      if (b.preDispatch && b.preDispatch[mr](this, n) === !1) return;
      if (m && (!n[ou] || n[Ir] !== Pu)) for (s = n[Au]; s != this; s = s[dr] || this) if (s[xo] !== !0 || n[Ir] !== Pu) {
        u = {}, f = [];
        for (r = 0; r < m; r++) c = d[r], h = c[Hs], u[h] === t && (u[h] = c[gu] ? v(h, this).index(s) >= 0 : v[Ps](h, this, lr, [ s ])[Er]), u[h] && f[Ci](c);
        f[Er] && w[Ci]({
          elem: s,
          matches: f
        });
      }
      d[Er] > m && w[Ci]({
        elem: this,
        matches: d[Zr](m)
      });
      for (r = 0; r < w[Er] && !n[Ou](); r++) {
        a = w[r], n.currentTarget = a[Ui];
        for (i = 0; i < a[Bu][Er] && !n[ju](); i++) {
          c = a[Bu][i];
          if (y || !n[Tu] && !c[Tu] || n[Lu] && n[Lu][cr](c[Tu])) n[hr] = c[hr], n[Fu] = c, o = ((v[Lr][cu][c[xu]] || {})[kr] || c[hu])[zs](a[Ui], g), o !== t && (n.result = o, o === !1 && (n[Mu](), n[Iu]()));
        }
      }
      return b.postDispatch && b.postDispatch[mr](this, n), n.result;
    },
    props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"[rr](Di),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode"[rr](Di),
      filter: function(e, t) {
        return e.which == lr && (e.which = t.charCode != lr ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"[rr](Di),
      filter: function(e, n) {
        var r, s, o, u = n[ou], a = n.fromElement;
        return e.pageX == lr && n.clientX != lr && (r = e[Au][Tr] || i, s = r[eo], o = r[yi], e.pageX = n.clientX + (s && s[qu] || o && o[qu] || 0) - (s && s[Ru] || o && o[Ru] || 0), e.pageY = n.clientY + (s && s[Uu] || o && o[Uu] || 0) - (s && s[zu] || o && o[zu] || 0)), !e[Wu] && a && (e[Wu] = a === e[Au] ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e;
      }
    },
    fix: function(e) {
      var t, n, r, s, o;
      if (e[v[Jr]]) return e;
      r = e, s = v[Lr][Xu][e[Ir]] || {}, o = s.props ? this.props[Ii](s.props) : this.props;
      e = v[Cu](r);
      for (t = o[Er]; t; ) n = o[--t], e[n] = r[n];
      return e[Au] || (e[Au] = r.srcElement || i), e[Au][ir] === 3 && (e[Au] = e[Au][dr]), e.metaKey = !!e.metaKey, s[gr] ? s[gr](e, r) : e;
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        delegateType: Vu
      },
      blur: {
        delegateType: $u
      },
      beforeunload: {
        setup: function(e, t, n) {
          v[bs](this) && (this[Ju] = n);
        },
        teardown: function(e, t) {
          this[Ju] === t && (this[Ju] = lr);
        }
      }
    },
    simulate: function(e, t, n, r) {
      var i = v[Ar](new v[Cu], n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      r ? v[Lr][$s](i, lr, t) : v[Lr][du][mr](t, i), i[_u]() && n[Mu]();
    }
  }, v[Lr][kr] = v[Lr][du], v[Nu] = i[Ts] ? function(e, t, n) {
    e[Ts] && e[Ts](t, n, !1);
  } : function(e, t, n) {
    var r = "on" + t;
    e[Ls] && (typeof e[r] == Kr && (e[r] = lr), e[Ls](r, n));
  }, v[Cu] = function(e, t) {
    if (!(this instanceof v[Cu])) return new v[Cu](e, t);
    e && e[Ir] ? (this[Ku] = e, this[Ir] = e[Ir], this[_u] = e.defaultPrevented || e.returnValue === !1 || e[Qu] && e[Qu]() ? tt : et) : this[Ir] = e, t && v[Ar](this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v[Jr]] = !0;
  }, v[Cu][gs] = {
    preventDefault: function() {
      var e;
      this[_u] = tt;
      e = this[Ku];
      if (!e) return;
      e[Mu] ? e[Mu]() : e.returnValue = !1;
    },
    stopPropagation: function() {
      var e;
      this[Ou] = tt;
      e = this[Ku];
      if (!e) return;
      e[Iu] && e[Iu](), e.cancelBubble = !0;
    },
    stopImmediatePropagation: function() {
      this[ju] = tt, this[Iu]();
    },
    isDefaultPrevented: et,
    isPropagationStopped: et,
    isImmediatePropagationStopped: et
  }, v[nr]({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function(e, t) {
    v[Lr][cu][e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, r = this, i = e[Wu], s = e[Fu], o = s[Hs];
        if (!i || i !== r && !v[ni](r, i)) e[Ir] = s[xu], n = s[hu][zs](this, arguments), e[Ir] = t;
        return n;
      }
    };
  }), v[Br].submitBubbles || (v[Lr][cu][Gu] = {
    setup: function() {
      if (v[_r](this, wo)) return !1;
      v[Lr].add(this, "click._submit keypress._submit", function(e) {
        var n = e[Au], r = v[_r](n, Fr) || v[_r](n, ou) ? n[wo] : t;
        r && !v[Nr](r, Yu) && (v[Lr].add(r, "submit._submit", function(e) {
          e[Zu] = !0;
        }), v[Nr](r, Yu, !0));
      });
    },
    postDispatch: function(e) {
      e[Zu] && (delete e[Zu], this[dr] && !e[ku] && v[Lr][ea](Gu, this[dr], e, !0));
    },
    teardown: function() {
      if (v[_r](this, wo)) return !1;
      v[Lr][bi](this, "._submit");
    }
  }), v[Br].changeBubbles || (v[Lr][cu][ta] = {
    setup: function() {
      if ($[cr](this[_r])) {
        if (this[Ir] === lu || this[Ir] === Co) v[Lr].add(this, "propertychange._change", function(e) {
          e[Ku].propertyName === Rr && (this[na] = !0);
        }), v[Lr].add(this, "click._change", function(e) {
          this[na] && !e[ku] && (this[na] = !1), v[Lr][ea](ta, this, e, !0);
        });
        return !1;
      }
      v[Lr].add(this, "beforeactivate._change", function(e) {
        var t = e[Au];
        $[cr](t[_r]) && !v[Nr](t, ra) && (v[Lr].add(t, "change._change", function(e) {
          this[dr] && !e.isSimulated && !e[ku] && v[Lr][ea](ta, this[dr], e, !0);
        }), v[Nr](t, ra, !0));
      });
    },
    handle: function(e) {
      var t = e[Au];
      if (this !== t || e.isSimulated || e[ku] || t[Ir] !== Co && t[Ir] !== lu) return e[Fu][hu][zs](this, arguments);
    },
    teardown: function() {
      return v[Lr][bi](this, "._change"), !$[cr](this[_r]);
    }
  }), v[Br].focusinBubbles || v[nr]({
    focus: Vu,
    blur: $u
  }, function(e, t) {
    var n = 0, r = function(e) {
      v[Lr][ea](t, e[Au], v[Lr].fix(e), !0);
    };
    v[Lr][cu][t] = {
      setup: function() {
        n++ === 0 && i[xs](e, r, !0);
      },
      teardown: function() {
        --n === 0 && i[Ts](e, r, !0);
      }
    };
  }), v.fn[Ar]({
    on: function(e, n, r, i, s) {
      var o, u;
      if (typeof e == Dr) {
        typeof n != ar && (r = r || n, n = t);
        for (u in e) this.on(u, n, r, e[u], s);
        return this;
      }
      r == lr && i == lr ? (i = n, r = n = t) : i == lr && (typeof n == ar ? (i = r, r = t) : (i = r, r = n, n = t));
      if (i === !1) i = et; else if (!i) return this;
      return s === 1 && (o = i, i = function(e) {
        return v().off(e), o[zs](this, arguments);
      }, i[no] = o[no] || (o[no] = v[no]++)), this[nr](function() {
        v[Lr].add(this, e, i, r, n);
      });
    },
    one: function(e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function(e, n, r) {
      var i, s;
      if (e && e[Mu] && e[Fu]) return i = e[Fu], v(e[Hu]).off(i[Tu] ? i[xu] + qs + i[Tu] : i[xu], i[Hs], i[hu]), this;
      if (typeof e == Dr) {
        for (s in e) this.off(s, n, e[s]);
        return this;
      }
      if (n === !1 || typeof n == Js) r = n, n = t;
      return r === !1 && (r = et), this[nr](function() {
        v[Lr][bi](this, e, r, n);
      });
    },
    bind: function(e, t, n) {
      return this.on(e, lr, t, n);
    },
    unbind: function(e, t) {
      return this.off(e, lr, t);
    },
    live: function(e, t, n) {
      return v(this[Os]).on(e, this[Hs], t, n), this;
    },
    die: function(e, t) {
      return v(this[Os]).off(e, this[Hs] || "**", t), this;
    },
    delegate: function(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function(e, t, n) {
      return arguments[Er] === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    trigger: function(e, t) {
      return this[nr](function() {
        v[Lr][$s](e, t, this);
      });
    },
    triggerHandler: function(e, t) {
      if (this[0]) return v[Lr][$s](e, t, this[0], !0);
    },
    toggle: function(e) {
      var t = arguments, n = e[no] || v[no]++, r = 0, i = function(n) {
        var i = (v[Nr](this, ia + e[no]) || 0) % r;
        return v[Nr](this, ia + e[no], i + 1), n[Mu](), t[i][zs](this, arguments) || !1;
      };
      i[no] = n;
      while (r < t[Er]) t[r++][no] = n;
      return this[Pu](i);
    },
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), v[nr]("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"[rr](Di), function(e, t) {
    v.fn[t] = function(e, n) {
      return n == lr && (n = e, e = lr), arguments[Er] > 0 ? this.on(t, lr, e, n) : this[$s](t);
    }, Q[cr](t) && (v[Lr][Xu][t] = v[Lr].keyHooks), G[cr](t) && (v[Lr][Xu][t] = v[Lr].mouseHooks);
  }), function(e, t) {
    function nt(e, t, n, r) {
      var i, s, a, f, l;
      n = n || [], t = t || g;
      l = t[ir];
      if (!e || typeof e != ar) return n;
      if (l !== 1 && l !== 9) return [];
      a = o(t);
      if (!a && !r) if (i = R[si](e)) if (f = i[1]) {
        if (l === 9) {
          s = t[Ds](f);
          if (!s || !s[dr]) return n;
          if (s.id === f) return n[Ci](s), n;
        } else if (t[Tr] && (s = t[Tr][Ds](f)) && u(t, s) && s.id === f) return n[Ci](s), n;
      } else {
        if (i[2]) return S[zs](n, x[mr](t[Sr](e), 0)), n;
        if ((f = i[3]) && Z && t[sa]) return S[zs](n, x[mr](t[sa](f), 0)), n;
      }
      return vt(e[or](j, oa), t, n, r, a);
    }
    function rt(e) {
      return function(t) {
        var n = t[_r][sr]();
        return n === Fr && t[Ir] === e;
      };
    }
    function it(e) {
      return function(t) {
        var n = t[_r][sr]();
        return (n === Fr || n === ou) && t[Ir] === e;
      };
    }
    function st(e) {
      return N(function(t) {
        return t = +t, N(function(n, r) {
          var i, s = e([], n[Er], t), o = s[Er];
          while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]));
        });
      });
    }
    function ot(e, t, n) {
      var r;
      if (e === t) return n;
      r = e[ua];
      while (r) {
        if (r === t) return -1;
        r = r[ua];
      }
      return 1;
    }
    function ut(e, t) {
      var n, r, s, o, u, a, f, l = L[d][e + Di];
      if (l) return t ? 0 : l[Zr](0);
      u = e, a = [], f = i.preFilter;
      while (u) {
        if (!n || (r = F[si](u))) r && (u = u[Zr](r[0][Er]) || u), a[Ci](s = []);
        n = !1;
        if (r = I[si](u)) s[Ci](n = new m(r[Ai]())), u = u[Zr](n[Er]), n[Ir] = r[0][or](j, Di);
        for (o in i[gr]) (r = J[o][si](u)) && (!f[o] || (r = f[o](r))) && (s[Ci](n = new m(r[Ai]())), u = u[Zr](n[Er]), n[Ir] = o, n[Bu] = r);
        if (!n) break;
      }
      return t ? u[Er] : u ? nt[Ys](e) : L(e, a)[Zr](0);
    }
    function at(e, t, r) {
      var i = t.dir, s = r && t.dir === dr, o = w++;
      return t[aa] ? function(t, n, r) {
        while (t = t[i]) if (s || t[ir] === 1) return e(t, n, r);
      } : function(t, r, u) {
        var a, f, l;
        if (!u) {
          f = b + Di + o + Di, l = f + n;
          while (t = t[i]) if (s || t[ir] === 1) {
            if ((a = t[d]) === l) return t.sizset;
            if (typeof a == ar && a[Es](f) === 0) {
              if (t.sizset) return t;
            } else {
              t[d] = l;
              if (e(t, r, u)) return t.sizset = !0, t;
              t.sizset = !1;
            }
          }
        } else while (t = t[i]) if (s || t[ir] === 1) if (e(t, r, u)) return t;
      };
    }
    function ft(e) {
      return e[Er] > 1 ? function(t, n, r) {
        var i = e[Er];
        while (i--) if (!e[i](t, n, r)) return !1;
        return !0;
      } : e[0];
    }
    function lt(e, t, n, r, i) {
      var s, o = [], u = 0, a = e[Er], f = t != lr;
      for (; u < a; u++) if (s = e[u]) if (!n || n(s, r, i)) o[Ci](s), f && t[Ci](u);
      return o;
    }
    function ct(e, t, n, r, i, s) {
      return r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function(s, o, u, a) {
        var f, l, c, h = [], p = [], d = o[Er], v = s || dt(t || Qr, u[ir] ? [ u ] : u, []), m = e && (s || !t) ? lt(v, h, e, u, a) : v, g = n ? i || (s ? e : d || r) ? [] : o : m;
        n && n(m, g, u, a);
        if (r) {
          f = lt(g, p), r(f, [], u, a), l = f[Er];
          while (l--) if (c = f[l]) g[p[l]] = !(m[p[l]] = c);
        }
        if (s) {
          if (i || e) {
            if (i) {
              f = [], l = g[Er];
              while (l--) (c = g[l]) && f[Ci](m[l] = c);
              i(lr, g = [], f, a);
            }
            l = g[Er];
            while (l--) (c = g[l]) && (f = i ? T[mr](s, c) : h[l]) > -1 && (s[f] = !(o[f] = c));
          }
        } else g = lt(g === o ? g[Pi](d, g[Er]) : g), i ? i(lr, o, g, a) : S[zs](o, g);
      });
    }
    function ht(e) {
      var t, n, r, s = e[Er], o = i[fa][e[0][Ir]], u = o || i[fa][Di], a = o ? 1 : 0, f = at(function(e) {
        return e === t;
      }, u, !0), l = at(function(e) {
        return T[mr](t, e) > -1;
      }, u, !0), h = [ function(e, n, r) {
        return !o && (r || n !== c) || ((t = n)[ir] ? f(e, n, r) : l(e, n, r));
      } ];
      for (; a < s; a++) if (n = i[fa][e[a][Ir]]) h = [ at(ft(h), n) ]; else {
        n = i[gr][e[a][Ir]][zs](lr, e[a][Bu]);
        if (n[d]) {
          r = ++a;
          for (; r < s; r++) if (i[fa][e[r][Ir]]) break;
          return ct(a > 1 && ft(h), a > 1 && e[Zr](0, a - 1)[Ws]("")[or](j, oa), n, a < r && ht(e[Zr](a, r)), r < s && ht(e = e[Zr](r)), r < s && e[Ws](""));
        }
        h[Ci](n);
      }
      return ft(h);
    }
    function pt(e, t) {
      var r = t[Er] > 0, s = e[Er] > 0, o = function(u, a, f, l, h) {
        var p, d, v, m = [], y = 0, w = "0", x = u && [], T = h != lr, N = c, C = u || s && i[Ps].TAG(Qr, h && a[dr] || a), k = b += N == lr ? 1 : Math.E;
        T && (c = a !== g && a, n = o.el);
        for (; (p = C[w]) != lr; w++) {
          if (s && p) {
            for (d = 0; v = e[d]; d++) if (v(p, a, f)) {
              l[Ci](p);
              break;
            }
            T && (b = k, n = ++o.el);
          }
          r && ((p = !v && p) && y--, u && x[Ci](p));
        }
        y += w;
        if (r && w !== y) {
          for (d = 0; v = t[d]; d++) v(x, m, a, f);
          if (u) {
            if (y > 0) while (w--) !x[w] && !m[w] && (m[w] = E[mr](l));
            m = lt(m);
          }
          S[zs](l, m), T && !u && m[Er] > 0 && y + t[Er] > 1 && nt[la](l);
        }
        return T && (b = k, c = N), x;
      };
      return o.el = 0, r ? N(o) : o;
    }
    function dt(e, t, n) {
      var r = 0, i = t[Er];
      for (; r < i; r++) nt(e, t[r], n);
      return n;
    }
    function vt(e, t, n, r, s) {
      var o, u, f, l, c, h = ut(e), p = h[Er];
      if (!r && h[Er] === 1) {
        u = h[0] = h[0][Zr](0);
        if (u[Er] > 2 && (f = u[0])[Ir] === "ID" && t[ir] === 9 && !s && i[fa][u[1][Ir]]) {
          t = i[Ps].ID(f[Bu][0][or]($, ""), t, s)[0];
          if (!t) return n;
          e = e[Zr](u[Ai]()[Er]);
        }
        for (o = J.POS[cr](e) ? -1 : u[Er] - 1; o >= 0; o--) {
          f = u[o];
          if (i[fa][l = f[Ir]]) break;
          if (c = i[Ps][l]) if (r = c(f[Bu][0][or]($, ""), z[cr](u[0][Ir]) && t[dr] || t, s)) {
            u[Pi](o, 1), e = r[Er] && u[Ws]("");
            if (!e) return S[zs](n, x[mr](r, 0)), n;
            break;
          }
        }
      }
      return a(e, h)(r, t, s, n, z[cr](e)), n;
    }
    function mt() {}
    var n, r, i, s, o, u, a, f, l, c, h, p, d, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q, R, U, z, W, X, V, $, J, K, Q, G, Y, Z, et;
    h = !0, p = Kr, d = ("sizcache" + Math.random())[or](qs, ""), m = String, g = e[wi], y = g[eo], b = 0, w = 0, E = [].pop, S = [][Ci], x = [][Zr], T = [][Es] || function(e) {
      var t = 0, n = this[Er];
      for (; t < n; t++) if (this[t] === e) return t;
      return -1;
    }, N = function(e, t) {
      return e[d] = t == lr || t, e;
    }, C = function() {
      var e = {}, t = [];
      return N(function(n, r) {
        return t[Ci](n) > i.cacheLength && delete e[t[Ai]()], e[n + Di] = r;
      }, e);
    }, k = C(), L = C(), A = C(), O = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", _ = M[or]("w", "w#"), D = "([*^$|!~]?=)", P = "\\[" + O + "*(" + M + Rs + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]", H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)", B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"), F = new RegExp("^" + O + "*," + O + Qr), I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + Qr), q = new RegExp(H), R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, U = /^:not/, z = /[\x20\t\r\n\f]*[+~]/, W = /:not\($/, X = /h\d/i, V = /input|select|textarea|button/i, $ = /\\(?!\\)/g, J = {
      ID: new RegExp("^#(" + M + Rs),
      CLASS: new RegExp("^\\.(" + M + Rs),
      NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
      TAG: new RegExp("^(" + M[or]("w", "w*") + Rs),
      ATTR: new RegExp("^" + P),
      PSEUDO: new RegExp("^" + H),
      POS: new RegExp(B, ca),
      CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", ca),
      needsContext: new RegExp("^" + O + "*[>+~]|" + B, ca)
    }, K = function(e) {
      var t = g[wr](co);
      try {
        return e(t);
      } catch (n) {
        return !1;
      } finally {
        t = lr;
      }
    }, Q = K(function(e) {
      return e[xr](g.createComment("")), !e[Sr](Qr)[Er];
    }), G = K(function(e) {
      return e[jr] = "<a href='#'></a>", e[mo] && typeof e[mo][ur] !== p && e[mo][ur](yo) === "#";
    }), Y = K(function(e) {
      e[jr] = "<select></select>";
      var t = typeof e[ko][ur]("multiple");
      return t !== Xs && t !== ar;
    }), Z = K(function(e) {
      return e[jr] = "<div class='hidden e'></div><div class='hidden'></div>", !e[sa] || !e[sa]("e")[Er] ? !1 : (e[ko][po] = "e", e[sa]("e")[Er] === 2);
    }), et = K(function(e) {
      e.id = d + 0, e[jr] = "<a name='" + d + "'></a><div name='" + d + "'></div>", y[Oo](e, y[mo]);
      var t = g[ha] && g[ha](d)[Er] === 2 + g[ha](d + 0)[Er];
      return r = !g[Ds](d), y[xi](e), t;
    });
    try {
      x[mr](y[Qs], 0)[0][ir];
    } catch (tt) {
      x = function(e) {
        var t, n = [];
        for (; t = this[e]; e++) n[Ci](t);
        return n;
      };
    }
    nt[Bu] = function(e, t) {
      return nt(e, lr, lr, t);
    }, nt[pa] = function(e, t) {
      return nt(t, lr, lr, [ e ])[Er] > 0;
    }, s = nt.getText = function(e) {
      var t, n = "", r = 0, i = e[ir];
      if (i) {
        if (i === 1 || i === 9 || i === 11) {
          if (typeof e[da] == ar) return e[da];
          for (e = e[mo]; e; e = e[ua]) n += s(e);
        } else if (i === 3 || i === 4) return e.nodeValue;
      } else for (; t = e[r]; r++) n += s(t);
      return n;
    }, o = nt.isXML = function(e) {
      var t = e && (e[Tr] || e)[eo];
      return t ? t[_r] !== "HTML" : !1;
    }, u = nt[ni] = y[ni] ? function(e, t) {
      var n = e[ir] === 9 ? e[eo] : e, r = t && t[dr];
      return e === r || !!(r && r[ir] === 1 && n[ni] && n[ni](r));
    } : y[va] ? function(e, t) {
      return t && !!(e[va](t) & 16);
    } : function(e, t) {
      while (t = t[dr]) if (t === e) return !0;
      return !1;
    }, nt.attr = function(e, t) {
      var n, r = o(e);
      return r || (t = t[sr]()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e[ur](t) : (n = e[au](t), n ? typeof e[t] == Xs ? e[t] ? t : lr : n[tu] ? n[Ur] : lr : lr);
    }, i = nt.selectors = {
      cacheLength: 50,
      createPseudo: N,
      match: J,
      attrHandle: G ? {} : {
        href: function(e) {
          return e[ur](yo, 2);
        },
        type: function(e) {
          return e[ur](Ir);
        }
      },
      find: {
        ID: r ? function(e, t, n) {
          var r;
          if (typeof t[Ds] !== p && !n) {
            r = t[Ds](e);
            return r && r[dr] ? [ r ] : [];
          }
        } : function(e, n, r) {
          var i;
          if (typeof n[Ds] !== p && !r) {
            i = n[Ds](e);
            return i ? i.id === e || typeof i[au] !== p && i[au]("id")[Ur] === e ? [ i ] : t : [];
          }
        },
        TAG: Q ? function(e, t) {
          if (typeof t[Sr] !== p) return t[Sr](e);
        } : function(e, t) {
          var r, i, s, n = t[Sr](e);
          if (e === Qr) {
            i = [], s = 0;
            for (; r = n[s]; s++) r[ir] === 1 && i[Ci](r);
            return i;
          }
          return n;
        },
        NAME: et && function(e, t) {
          if (typeof t[ha] !== p) return t[ha](name);
        },
        CLASS: Z && function(e, t, n) {
          if (typeof t[sa] !== p && !n) return t[sa](e);
        }
      },
      relative: {
        ">": {
          dir: dr,
          first: !0
        },
        " ": {
          dir: dr
        },
        "+": {
          dir: ma,
          first: !0
        },
        "~": {
          dir: ma
        }
      },
      preFilter: {
        ATTR: function(e) {
          return e[1] = e[1][or]($, ""), e[3] = (e[4] || e[5] || "")[or]($, ""), e[2] === "~=" && (e[3] = Di + e[3] + Di), e[Zr](0, 4);
        },
        CHILD: function(e) {
          return e[1] = e[1][sr](), e[1] === "nth" ? (e[2] || nt[Ys](e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt[Ys](e[0]), e;
        },
        PSEUDO: function(e) {
          var t, n;
          if (J.CHILD[cr](e[0])) return lr;
          if (e[3]) e[2] = e[3]; else if (t = e[4]) q[cr](t) && (n = ut(t, !0)) && (n = t[Es](Rs, t[Er] - n) - t[Er]) && (t = t[Zr](0, n), e[0] = e[0][Zr](0, n)), e[2] = t;
          return e[Zr](0, 3);
        }
      },
      filter: {
        ID: r ? function(e) {
          return e = e[or]($, ""), function(t) {
            return t[ur]("id") === e;
          };
        } : function(e) {
          return e = e[or]($, ""), function(t) {
            var n = typeof t[au] !== p && t[au]("id");
            return n && n[Ur] === e;
          };
        },
        TAG: function(e) {
          return e === Qr ? function() {
            return !0;
          } : (e = e[or]($, "")[sr](), function(t) {
            return t[_r] && t[_r][sr]() === e;
          });
        },
        CLASS: function(e) {
          var t = k[d][e + Di];
          return t || (t = new RegExp("(^|" + O + Rs + e + "(" + O + "|$)")) && k(e, function(e) {
            return t[cr](e[po] || typeof e[ur] !== p && e[ur]("class") || "");
          });
        },
        ATTR: function(e, t, n) {
          return function(r) {
            var s = nt.attr(r, e);
            return s == lr ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s[Es](n) === 0 : t === "*=" ? n && s[Es](n) > -1 : t === "$=" ? n && s.substr(s[Er] - n[Er]) === n : t === "~=" ? (Di + s + Di)[Es](n) > -1 : t === "|=" ? s === n || s.substr(0, n[Er] + 1) === n + "-" : !1) : !0;
          };
        },
        CHILD: function(e, t, n, r) {
          return e === "nth" ? function(e) {
            var t, i, s = e[dr];
            if (n === 1 && r === 0) return !0;
            if (s) {
              i = 0;
              for (t = s[mo]; t; t = t[ua]) if (t[ir] === 1) {
                i++;
                if (e === t) break;
              }
            }
            return i -= r, i === n || i % n === 0 && i / n >= 0;
          } : function(t) {
            var n = t;
            switch (e) {
             case "only":
             case aa:
              while (n = n[ma]) if (n[ir] === 1) return !1;
              if (e === aa) return !0;
              n = t;
             case "last":
              while (n = n[ua]) if (n[ir] === 1) return !1;
              return !0;
            }
          };
        },
        PSEUDO: function(e, t) {
          var n, r = i[ga][e] || i[ya][e[sr]()] || nt[Ys]("unsupported pseudo: " + e);
          return r[d] ? r(t) : r[Er] > 1 ? (n = [ e, e, "", t ], i[ya][Ss](e[sr]()) ? N(function(e, n) {
            var i, s = r(e, t), o = s[Er];
            while (o--) i = T[mr](e, s[o]), e[i] = !(n[i] = s[o]);
          }) : function(e) {
            return r(e, 0, n);
          }) : r;
        }
      },
      pseudos: {
        not: N(function(e) {
          var t = [], n = [], r = a(e[or](j, oa));
          return r[d] ? N(function(e, t, n, i) {
            var s, o = r(e, lr, i, []), u = e[Er];
            while (u--) if (s = o[u]) e[u] = !(t[u] = s);
          }) : function(e, i, s) {
            return t[0] = e, r(t, lr, s, n), !n.pop();
          };
        }),
        has: N(function(e) {
          return function(t) {
            return nt(e, t)[Er] > 0;
          };
        }),
        contains: N(function(e) {
          return function(t) {
            return (t[da] || t.innerText || s(t))[Es](e) > -1;
          };
        }),
        enabled: function(e) {
          return e[xo] === !1;
        },
        disabled: function(e) {
          return e[xo] === !0;
        },
        checked: function(e) {
          var t = e[_r][sr]();
          return t === Fr && !!e[Rr] || t === zr && !!e[Wr];
        },
        selected: function(e) {
          return e[dr] && e[dr][ru], e[Wr] === !0;
        },
        parent: function(e) {
          return !i[ga][ss](e);
        },
        empty: function(e) {
          var t;
          e = e[mo];
          while (e) {
            if (e[_r] > "@" || (t = e[ir]) === 3 || t === 4) return !1;
            e = e[ua];
          }
          return !0;
        },
        header: function(e) {
          return X[cr](e[_r]);
        },
        text: function(e) {
          var t, n;
          return e[_r][sr]() === Fr && (t = e[Ir]) === Vr && ((n = e[ur](Ir)) == lr || n[sr]() === t);
        },
        radio: rt(Co),
        checkbox: rt(lu),
        file: rt("file"),
        password: rt("password"),
        image: rt("image"),
        submit: it(Gu),
        reset: it("reset"),
        button: function(e) {
          var t = e[_r][sr]();
          return t === Fr && e[Ir] === ou || t === ou;
        },
        input: function(e) {
          return V[cr](e[_r]);
        },
        focus: function(e) {
          var t = e[Tr];
          return e === t[ba] && (!t.hasFocus || t.hasFocus()) && !!(e[Ir] || e[yo] || ~e.tabIndex);
        },
        active: function(e) {
          return e === e[Tr][ba];
        },
        first: st(function() {
          return [ 0 ];
        }),
        last: st(function(e, t) {
          return [ t - 1 ];
        }),
        eq: st(function(e, t, n) {
          return [ n < 0 ? n + t : n ];
        }),
        even: st(function(e, t) {
          var n;
          for (n = 0; n < t; n += 2) e[Ci](n);
          return e;
        }),
        odd: st(function(e, t) {
          var n;
          for (n = 1; n < t; n += 2) e[Ci](n);
          return e;
        }),
        lt: st(function(e, t, n) {
          var r;
          for (r = n < 0 ? n + t : n; --r >= 0; ) e[Ci](r);
          return e;
        }),
        gt: st(function(e, t, n) {
          var r;
          for (r = n < 0 ? n + t : n; ++r < t; ) e[Ci](r);
          return e;
        })
      }
    }, f = y[va] ? function(e, t) {
      return e === t ? (l = !0, 0) : (!e[va] || !t[va] ? e[va] : e[va](t) & 4) ? -1 : 1;
    } : function(e, t) {
      var n, r, i, s, o, u, a, f;
      if (e === t) return l = !0, 0;
      if (e[wa] && t[wa]) return e[wa] - t[wa];
      i = [], s = [], o = e[dr], u = t[dr], a = o;
      if (o === u) return ot(e, t);
      if (!o) return -1;
      if (!u) return 1;
      while (a) i[Ni](a), a = a[dr];
      a = u;
      while (a) s[Ni](a), a = a[dr];
      n = i[Er], r = s[Er];
      for (f = 0; f < n && f < r; f++) if (i[f] !== s[f]) return ot(i[f], s[f]);
      return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1);
    }, [ 0, 0 ].sort(f), h = !l, nt[la] = function(e) {
      var t, n = [], r = 1, i = 0;
      l = h, e.sort(f);
      if (l) {
        for (; t = e[r]; r++) t === e[r - 1] && (i = n[Ci](r));
        while (i--) e[Pi](n[i], 1);
      }
      return e;
    }, nt[Ys] = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, a = nt.compile = function(e, t) {
      var n, r = [], i = [], s = A[d][e + Di];
      if (!s) {
        t || (t = ut(e)), n = t[Er];
        while (n--) s = ht(t[n]), s[d] ? r[Ci](s) : i[Ci](s);
        s = A(e, pt(i, r));
      }
      return s;
    }, g[Gr] && function() {
      var e, t = vt, n = /'|\\/g, r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, i = [ ":focus" ], s = [ ":active" ], u = y[pa] || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
      K(function(e) {
        e[jr] = "<select><option selected=''></option></select>", e[Gr]("[selected]")[Er] || i[Ci]("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e[Gr](Ea)[Er] || i[Ci](Ea);
      }), K(function(e) {
        e[jr] = "<p test=''></p>", e[Gr]("[test^='']")[Er] && i[Ci]("[*^$]=" + O + "*(?:\"\"|'')"), e[jr] = "<input type='hidden'/>", e[Gr](Sa)[Er] || i[Ci](Sa, ":disabled");
      }), i = new RegExp(i[Ws]("|")), vt = function(e, r, s, o, u) {
        var a, f, l, c, h, p;
        if (!o && !u && !i[cr](e)) {
          l = !0, c = d, h = r, p = r[ir] === 9 && e;
          if (r[ir] === 1 && r[_r][sr]() !== Dr) {
            a = ut(e), (l = r[ur]("id")) ? c = l[or](n, "\\$&") : r[ho]("id", c), c = "[id='" + c + "'] ", f = a[Er];
            while (f--) a[f] = c + a[f][Ws]("");
            h = z[cr](e) && r[dr] || r, p = a[Ws](",");
          }
          if (p) try {
            return S[zs](s, x[mr](h[Gr](p), 0)), s;
          } catch (v) {} finally {
            l || r[$r]("id");
          }
        }
        return t(e, r, s, o, u);
      }, u && (K(function(t) {
        e = u[mr](t, co);
        try {
          u[mr](t, "[test!='']:sizzle"), s[Ci]("!=", H);
        } catch (n) {}
      }), s = new RegExp(s[Ws]("|")), nt[pa] = function(t, n) {
        var a;
        n = n[or](r, "='$1']");
        if (!o(t) && !s[cr](n) && !i[cr](n)) try {
          a = u[mr](t, n);
          if (a || e || t[wi] && t[wi][ir] !== 11) return a;
        } catch (f) {}
        return nt(n, lr, lr, [ t ])[Er] > 0;
      });
    }(), i[ga].nth = i[ga].eq, i[xa] = mt[gs] = i[ga], i[ya] = new mt, nt.attr = v.attr, v[Ps] = nt, v[yu] = nt.selectors, v[yu][":"] = v[yu][ga], v[ao] = nt[la], v[Vr] = nt.getText, v[iu] = nt.isXML, v[ni] = nt[ni];
  }(e);
  nt = /Until$/, rt = /^(?:parents|prev(?:Until|All))/, it = /^.[^:#\[\.,]*$/, st = v[yu].match[gu], ot = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  v.fn[Ar]({
    find: function(e) {
      var t, n, r, i, s, o, u = this;
      if (typeof e != ar) return v(e)[gr](function() {
        for (t = 0, n = u[Er]; t < n; t++) if (v[ni](u[t], this)) return !0;
      });
      o = this[Us]("", Ps, e);
      for (t = 0, n = this[Er]; t < n; t++) {
        r = o[Er], v[Ps](e, this[t], o);
        if (t > 0) for (i = r; i < o[Er]; i++) for (s = 0; s < r; s++) if (o[s] === o[i]) {
          o[Pi](i--, 1);
          break;
        }
      }
      return o;
    },
    has: function(e) {
      var t, n = v(e, this), r = n[Er];
      return this[gr](function() {
        for (t = 0; t < r; t++) if (v[ni](this, n[t])) return !0;
      });
    },
    not: function(e) {
      return this[Us](ft(this, e, !1), "not", e);
    },
    filter: function(e) {
      return this[Us](ft(this, e, !0), gr, e);
    },
    is: function(e) {
      return !!e && (typeof e == ar ? st[cr](e) ? v(e, this[Os]).index(this[0]) >= 0 : v[gr](e, this)[Er] > 0 : this[gr](e)[Er] > 0);
    },
    closest: function(e, t) {
      var n, r = 0, i = this[Er], s = [], o = st[cr](e) || typeof e != ar ? v(e, t || this[Os]) : 0;
      for (; r < i; r++) {
        n = this[r];
        while (n && n[Tr] && n !== t && n[ir] !== 11) {
          if (o ? o.index(n) > -1 : v[Ps][pa](n, e)) {
            s[Ci](n);
            break;
          }
          n = n[dr];
        }
      }
      return s = s[Er] > 1 ? v[ao](s) : s, this[Us](s, "closest", e);
    },
    index: function(e) {
      return e ? typeof e == ar ? v[yr](this[0], v(e)) : v[yr](e[Bs] ? e[0] : e, this) : this[0] && this[0][dr] ? this.prevAll()[Er] : -1;
    },
    add: function(e, t) {
      var n = typeof e == ar ? v(e, t) : v[Fs](e && e[ir] ? [ e ] : e), r = v[_s](this[Zo](), n);
      return this[Us](ut(n[0]) || ut(r[0]) ? r : v[ao](r));
    },
    addBack: function(e) {
      return this.add(e == lr ? this[Is] : this[Is][gr](e));
    }
  }), v.fn.andSelf = v.fn.addBack, v[nr]({
    parent: function(e) {
      var t = e[dr];
      return t && t[ir] !== 11 ? t : lr;
    },
    parents: function(e) {
      return v.dir(e, dr);
    },
    parentsUntil: function(e, t, n) {
      return v.dir(e, dr, n);
    },
    next: function(e) {
      return at(e, ua);
    },
    prev: function(e) {
      return at(e, ma);
    },
    nextAll: function(e) {
      return v.dir(e, ua);
    },
    prevAll: function(e) {
      return v.dir(e, ma);
    },
    nextUntil: function(e, t, n) {
      return v.dir(e, ua, n);
    },
    prevUntil: function(e, t, n) {
      return v.dir(e, ma, n);
    },
    siblings: function(e) {
      return v.sibling((e[dr] || {})[mo], e);
    },
    children: function(e) {
      return v.sibling(e[mo]);
    },
    contents: function(e) {
      return v[_r](e, "iframe") ? e[Si] || e[Ei][wi] : v[_s]([], e[Qs]);
    }
  }, function(e, t) {
    v.fn[e] = function(n, r) {
      var i = v.map(this, t, n);
      return nt[cr](e) || (r = n), r && typeof r == ar && (i = v[gr](r, i)), i = this[Er] > 1 && !ot[e] ? v[ao](i) : i, this[Er] > 1 && rt[cr](e) && (i = i.reverse()), this[Us](i, e, l[mr](arguments)[Ws](","));
    };
  }), v[Ar]({
    filter: function(e, t, n) {
      return n && (e = ":not(" + e + Rs), t[Er] === 1 ? v[Ps][pa](t[0], e) ? [ t[0] ] : [] : v[Ps][Bu](e, t);
    },
    dir: function(e, n, r) {
      var i = [], s = e[n];
      while (s && s[ir] !== 9 && (r === t || s[ir] !== 1 || !v(s).is(r))) s[ir] === 1 && i[Ci](s), s = s[n];
      return i;
    },
    sibling: function(e, t) {
      var n = [];
      for (; e; e = e[ua]) e[ir] === 1 && e !== t && n[Ci](e);
      return n;
    }
  });
  ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", ht = / jQuery\d+="(?:null|\d+)"/g, pt = /^\s+/, dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, vt = /<([\w:]+)/, mt = /<tbody/i, gt = /<|&#?\w+;/, yt = /<(?:script|style|link)/i, bt = /<(?:script|object|embed|option|style)/i, wt = new RegExp("<(?:" + ct + ")[\\s/>]", ca), Et = /^(?:checkbox|radio)$/, St = /checked\s*(?:[^=]|=\s*.checked.)/i, xt = /\/(java|ecma)script/i, Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, Nt = {
    option: [ 1, "<select multiple='multiple'>", "</select>" ],
    legend: [ 1, "<fieldset>", "</fieldset>" ],
    thead: [ 1, Ta, "</table>" ],
    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
    col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
    area: [ 1, "<map>", "</map>" ],
    _default: [ 0, "", "" ]
  }, Ct = lt(i), kt = Ct[xr](i[wr](co));
  Nt.optgroup = Nt[zr], Nt[go] = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v[Br][Na] || (Nt[Du] = [ 1, "X<div>", "</div>" ]), v.fn[Ar]({
    text: function(e) {
      return v[ro](this, function(e) {
        return e === t ? v[Vr](this) : this[ss]()[Ca]((this[0] && this[0][Tr] || i)[ka](e));
      }, lr, e, arguments[Er]);
    },
    wrapAll: function(e) {
      var t;
      if (v[vr](e)) return this[nr](function(t) {
        v(this).wrapAll(e[mr](this, t));
      });
      if (this[0]) {
        t = v(e, this[0][Tr]).eq(0).clone(!0);
        this[0][dr] && t[Oo](this[0]), t.map(function() {
          var e = this;
          while (e[mo] && e[mo][ir] === 1) e = e[mo];
          return e;
        })[Ca](this);
      }
      return this;
    },
    wrapInner: function(e) {
      return v[vr](e) ? this[nr](function(t) {
        v(this).wrapInner(e[mr](this, t));
      }) : this[nr](function() {
        var t = v(this), n = t.contents();
        n[Er] ? n.wrapAll(e) : t[Ca](e);
      });
    },
    wrap: function(e) {
      var t = v[vr](e);
      return this[nr](function(n) {
        v(this).wrapAll(t ? e[mr](this, n) : e);
      });
    },
    unwrap: function() {
      return this.parent()[nr](function() {
        v[_r](this, yi) || v(this)[La](this[Qs]);
      }).end();
    },
    append: function() {
      return this[Aa](arguments, !0, function(e) {
        (this[ir] === 1 || this[ir] === 11) && this[xr](e);
      });
    },
    prepend: function() {
      return this[Aa](arguments, !0, function(e) {
        (this[ir] === 1 || this[ir] === 11) && this[Oo](e, this[mo]);
      });
    },
    before: function() {
      var e;
      if (!ut(this[0])) return this[Aa](arguments, !1, function(e) {
        this[dr][Oo](e, this);
      });
      if (arguments[Er]) {
        e = v.clean(arguments);
        return this[Us](v[_s](e, this), Oa, this[Hs]);
      }
    },
    after: function() {
      var e;
      if (!ut(this[0])) return this[Aa](arguments, !1, function(e) {
        this[dr][Oo](e, this[ua]);
      });
      if (arguments[Er]) {
        e = v.clean(arguments);
        return this[Us](v[_s](this, e), "after", this[Hs]);
      }
    },
    remove: function(e, t) {
      var n, r = 0;
      for (; (n = this[r]) != lr; r++) if (!e || v[gr](e, [ n ])[Er]) !t && n[ir] === 1 && (v[qo](n[Sr](Qr)), v[qo]([ n ])), n[dr] && n[dr][xi](n);
      return this;
    },
    empty: function() {
      var e, t = 0;
      for (; (e = this[t]) != lr; t++) {
        e[ir] === 1 && v[qo](e[Sr](Qr));
        while (e[mo]) e[xi](e[mo]);
      }
      return this;
    },
    clone: function(e, t) {
      return e = e == lr ? !1 : e, t = t == lr ? e : t, this.map(function() {
        return v.clone(this, e, t);
      });
    },
    html: function(e) {
      return v[ro](this, function(e) {
        var n = this[0] || {}, r = 0, i = this[Er];
        if (e === t) return n[ir] === 1 ? n[jr][or](ht, "") : t;
        if (typeof e == ar && !yt[cr](e) && (v[Br][Na] || !wt[cr](e)) && (v[Br][Ma] || !pt[cr](e)) && !Nt[(vt[si](e) || [ "", "" ])[1][sr]()]) {
          e = e[or](dt, _a);
          try {
            for (; r < i; r++) n = this[r] || {}, n[ir] === 1 && (v[qo](n[Sr](Qr)), n[jr] = e);
            n = 0;
          } catch (s) {}
        }
        n && this[ss]()[Ca](e);
      }, lr, e, arguments[Er]);
    },
    replaceWith: function(e) {
      return ut(this[0]) ? this[Er] ? this[Us](v(v[vr](e) ? e() : e), La, e) : this : v[vr](e) ? this[nr](function(t) {
        var n = v(this), r = n.html();
        n[La](e[mr](this, t, r));
      }) : (typeof e != ar && (e = v(e).detach()), this[nr](function() {
        var t = this[ua], n = this[dr];
        v(this)[bi](), t ? v(t)[Oa](e) : v(n)[Ca](e);
      }));
    },
    detach: function(e) {
      return this[bi](e, !0);
    },
    domManip: function(e, n, r) {
      var i, s, o, u, a, f, l, c;
      e = [][Ii][zs]([], e);
      a = 0, f = e[0], l = [], c = this[Er];
      if (!v[Br][Lo] && c > 1 && typeof f == ar && St[cr](f)) return this[nr](function() {
        v(this)[Aa](e, n, r);
      });
      if (v[vr](f)) return this[nr](function(i) {
        var s = v(this);
        e[0] = f[mr](this, i, n ? s.html() : t), s[Aa](e, n, r);
      });
      if (this[0]) {
        i = v[Ks](e, this, l), o = i[Gs], s = o[mo], o[Qs][Er] === 1 && (o = s);
        if (s) {
          n = n && v[_r](s, "tr");
          for (u = i.cacheable || c - 1; a < c; a++) r[mr](n && v[_r](this[a], "table") ? Lt(this[a], go) : this[a], a === u ? o : v.clone(o, !0, !0));
        }
        o = s = lr, l[Er] && v[nr](l, function(e, t) {
          t.src ? v.ajax ? v.ajax({
            url: t.src,
            type: "GET",
            dataType: Xr,
            async: !1,
            global: !1,
            "throws": !0
          }) : v[Ys]("no ajax") : v.globalEval((t[Vr] || t[da] || t[jr] || "")[or](Tt, "")), t[dr] && t[dr][xi](t);
        });
      }
      return this;
    }
  }), v[Ks] = function(e, n, r) {
    var s, o, u, a = e[0];
    return n = n || i, n = !n[ir] && n[0] || n, n = n[Tr] || n, e[Er] === 1 && typeof a == ar && a[Er] < 512 && n === i && a.charAt(0) === "<" && !bt[cr](a) && (v[Br][Lo] || !St[cr](a)) && (v[Br][Hr] || !wt[cr](a)) && (o = !0, s = v[Da][a], u = s !== t), s || (s = n[br](), v.clean(e, n, s, r), o && (v[Da][a] = u && s)), {
      fragment: s,
      cacheable: o
    };
  }, v[Da] = {}, v[nr]({
    appendTo: Ca,
    prependTo: "prepend",
    insertBefore: Oa,
    insertAfter: "after",
    replaceAll: La
  }, function(e, t) {
    v.fn[e] = function(n) {
      var r, i = 0, s = [], o = v(n), u = o[Er], a = this[Er] === 1 && this[0][dr];
      if ((a == lr || a && a[ir] === 11 && a[Qs][Er] === 1) && u === 1) return o[t](this[0]), this;
      for (; i < u; i++) r = (i > 0 ? this.clone(!0) : this)[Zo](), v(o[i])[t](r), s = s[Ii](r);
      return this[Us](s, e, o[Hs]);
    };
  }), v[Ar]({
    clone: function(e, t, n) {
      var r, i, s, o;
      v[Br][Hr] || v[iu](e) || !wt[cr]("<" + e[_r] + ">") ? o = e[Eo](!0) : (kt[jr] = e[Pr], kt[xi](o = kt[mo]));
      if ((!v[Br].noCloneEvent || !v[Br][So]) && (e[ir] === 1 || e[ir] === 11) && !v[iu](e)) {
        Ot(e, o), r = Mt(e), i = Mt(o);
        for (s = 0; r[s]; ++s) i[s] && Ot(r[s], i[s]);
      }
      if (t) {
        At(e, o);
        if (n) {
          r = Mt(e), i = Mt(o);
          for (s = 0; r[s]; ++s) At(r[s], i[s]);
        }
      }
      return r = i = lr, o;
    },
    clean: function(e, t, n, r) {
      var s, o, u, a, f, l, c, h, p, m, g, y = t === i && Ct, b = [];
      if (!t || typeof t[br] == Kr) t = i;
      for (s = 0; (u = e[s]) != lr; s++) {
        typeof u == to && (u += "");
        if (!u) continue;
        if (typeof u == ar) if (!gt[cr](u)) u = t[ka](u); else {
          y = y || lt(t), c = t[wr](co), y[xr](c), u = u[or](dt, _a), a = (vt[si](u) || [ "", "" ])[1][sr](), f = Nt[a] || Nt[Du], l = f[0], c[jr] = f[1] + u + f[2];
          while (l--) c = c[ko];
          if (!v[Br][go]) {
            h = mt[cr](u), p = a === "table" && !h ? c[mo] && c[mo][Qs] : f[1] === Ta && !h ? c[Qs] : [];
            for (o = p[Er] - 1; o >= 0; --o) v[_r](p[o], go) && !p[o][Qs][Er] && p[o][dr][xi](p[o]);
          }
          !v[Br][Ma] && pt[cr](u) && c[Oo](t[ka](pt[si](u)[0]), c[mo]), u = c[Qs], c[dr][xi](c);
        }
        u[ir] ? b[Ci](u) : v[_s](b, u);
      }
      c && (u = c = y = lr);
      if (!v[Br][Ao]) for (s = 0; (u = b[s]) != lr; s++) v[_r](u, Fr) ? _t(u) : typeof u[Sr] != Kr && v.grep(u[Sr](Fr), _t);
      if (n) {
        m = function(e) {
          if (!e[Ir] || xt[cr](e[Ir])) return r ? r[Ci](e[dr] ? e[dr][xi](e) : e) : n[xr](e);
        };
        for (s = 0; (u = b[s]) != lr; s++) if (!v[_r](u, Xr) || !m(u)) n[xr](u), typeof u[Sr] != Kr && (g = v.grep(v[_s]([], u[Sr](Xr)), m), b[Pi][zs](b, [ s + 1, 0 ][Ii](g)), s += g[Er]);
      }
      return b;
    },
    cleanData: function(e, t) {
      var n, r, i, s, o = 0, u = v[Jr], a = v[Fo], f = v[Br][To], l = v[Lr][cu];
      for (; (i = e[o]) != lr; o++) if (t || v[Io](i)) {
        r = i[u], n = r && a[r];
        if (n) {
          if (n[Cr]) for (s in n[Cr]) l[s] ? v[Lr][bi](i, s) : v[Nu](i, s, n[kr]);
          a[r] && (delete a[r], f ? delete i[u] : i[$r] ? i[$r](u) : i[u] = lr, v.deletedIds[Ci](r));
        }
      }
    }
  }), function() {
    var e, t;
    v.uaMatch = function(e) {
      var t;
      e = e[sr]();
      t = /(chrome)[ \/]([\w.]+)/[si](e) || /(webkit)[ \/]([\w.]+)/[si](e) || /(opera)(?:.*version|)[ \/]([\w.]+)/[si](e) || /(msie) ([\w.]+)/[si](e) || e[Es]("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/[si](e) || [];
      return {
        browser: t[1] || "",
        version: t[2] || "0"
      };
    }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function() {
      function e(t, n) {
        return new e.fn.init(t, n);
      }
      var t;
      v[Ar](!0, e, this), e.superclass = this, e.fn = e[gs] = this(), e.fn[js] = e, e.sub = this.sub, e.fn.init = function(r, i) {
        return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init[mr](this, r, i, t);
      }, e.fn.init[gs] = e.fn;
      t = e(i);
      return e;
    };
  }();
  Bt = /alpha\([^)]*\)/i, jt = /opacity=([^)]*)/, Ft = /^(top|right|bottom|left)$/, It = /^(none|table(?!-c[ea]).+)/, qt = /^margin/, Rt = new RegExp("^(" + m + ")(.*)$", ca), Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", ca), zt = new RegExp("^([-+])=(" + m + Rs, ca), Wt = {
    BODY: jo
  }, Xt = {
    position: Pa,
    visibility: ls,
    display: jo
  }, Vt = {
    letterSpacing: 0,
    fontWeight: 400
  }, $t = [ "Top", "Right", "Bottom", "Left" ], Jt = [ "Webkit", "O", "Moz", "ms" ], Kt = v.fn[hs];
  v.fn[Ar]({
    css: function(e, n) {
      return v[ro](this, function(e, n, r) {
        return r !== t ? v[ri](e, n, r) : v.css(e, n);
      }, e, n, arguments[Er] > 1);
    },
    show: function() {
      return Yt(this, !0);
    },
    hide: function() {
      return Yt(this);
    },
    toggle: function(e, t) {
      var n = typeof e == Xs;
      return v[vr](e) && v[vr](t) ? Kt[zs](this, arguments) : this[nr](function() {
        (n ? e : Gt(this)) ? v(this)[ds]() : v(this)[ps]();
      });
    }
  }), v[Ar]({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          var n;
          if (t) {
            n = Dt(e, ys);
            return n === "" ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": v[Br][bo] ? bo : "styleFloat"
    },
    style: function(e, n, r, i) {
      var s, o, u, a, f;
      if (!e || e[ir] === 3 || e[ir] === 8 || !e[ri]) return;
      a = v[ts](n), f = e[ri];
      n = v[Ha][a] || (v[Ha][a] = Qt(f, a)), u = v[ns][n] || v[ns][a];
      if (r === t) return u && Zo in u && (s = u[Zo](e, !1, i)) !== t ? s : f[n];
      o = typeof r, o === ar && (s = zt[si](r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = to);
      if (r == lr || o === to && isNaN(r)) return;
      o === to && !v[Ba][a] && (r += oi);
      if (!u || !(eu in u) || (r = u[eu](e, r, i)) !== t) try {
        f[n] = r;
      } catch (l) {}
    },
    css: function(e, n, r, i) {
      var s, o, u, a = v[ts](n);
      return n = v[Ha][a] || (v[Ha][a] = Qt(e[ri], a)), u = v[ns][n] || v[ns][a], u && Zo in u && (s = u[Zo](e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s;
    },
    swap: function(e, t, n) {
      var r, i, s = {};
      for (i in t) s[i] = e[ri][i], e[ri][i] = t[i];
      r = n[mr](e);
      for (i in t) e[ri][i] = s[i];
      return r;
    }
  }), e[Do] ? Dt = function(t, n) {
    var r, i, s, o, u = e[Do](t, lr), a = t[ri];
    return u && (r = u.getPropertyValue(n) || u[n], r === "" && !v[ni](t[Tr], t) && (r = v[ri](t, n)), Ut[cr](r) && qt[cr](n) && (i = a[fi], s = a[ja], o = a[Fa], a[ja] = a[Fa] = a[fi] = r, r = u[fi], a[fi] = i, a[ja] = s, a[Fa] = o)), r;
  } : i[eo][Ia] && (Dt = function(e, t) {
    var n, r, i = e[Ia] && e[Ia][t], s = e[ri];
    return i == lr && s && s[t] && (i = s[t]), Ut[cr](i) && !Ft[cr](t) && (n = s[oo], r = e[qa] && e[qa][oo], r && (e[qa][oo] = e[Ia][oo]), s[oo] = t === "fontSize" ? "1em" : i, i = s.pixelLeft + oi, s[oo] = n, r && (e[qa][oo] = r)), i === "" ? fu : i;
  }), v[nr]([ os, fi ], function(e, t) {
    v[ns][t] = {
      get: function(e, n, r) {
        if (n) return e[pi] === 0 && It[cr](Dt(e, ei)) ? v.swap(e, Xt, function() {
          return tn(e, t, r);
        }) : tn(e, t, r);
      },
      set: function(e, n, r) {
        return Zt(e, n, r ? en(e, t, r, v[Br][vi] && v.css(e, vi) === mi) : 0);
      }
    };
  }), v[Br][ys] || (v[ns][ys] = {
    get: function(e, t) {
      return jt[cr]((t && e[Ia] ? e[Ia][gr] : e[ri][gr]) || "") ? .01 * parseFloat(RegExp[oa]) + "" : t ? "1" : "";
    },
    set: function(e, t) {
      var n = e[ri], r = e[Ia], i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + Rs : "", s = r && r[gr] || n[gr] || "";
      n.zoom = 1;
      if (t >= 1 && v.trim(s[or](Bt, "")) === "" && n[$r]) {
        n[$r](gr);
        if (r && !r[gr]) return;
      }
      n[gr] = Bt[cr](s) ? s[or](Bt, i) : s + Di + i;
    }
  }), v(function() {
    v[Br][Bo] || (v[ns][Ho] = {
      get: function(e, t) {
        return v.swap(e, {
          display: fs
        }, function() {
          if (t) return Dt(e, Ho);
        });
      }
    }), !v[Br][Po] && v.fn[Ra] && v[nr]([ "top", oo ], function(e, t) {
      v[ns][t] = {
        get: function(e, n) {
          var r;
          if (n) {
            r = Dt(e, t);
            return Ut[cr](r) ? v(e)[Ra]()[t] + oi : r;
          }
        }
      };
    });
  }), v[yu] && v[yu][xa] && (v[yu][xa][ls] = function(e) {
    return e[pi] === 0 && e[di] === 0 || !v[Br][Mo] && (e[ri] && e[ri][ei] || Dt(e, ei)) === ti;
  }, v[yu][xa].visible = function(e) {
    return !v[yu][xa][ls](e);
  }), v[nr]({
    margin: "",
    padding: "",
    border: hi
  }, function(e, t) {
    v[ns][e + t] = {
      expand: function(n) {
        var r, i = typeof n == ar ? n[rr](Di) : [ n ], s = {};
        for (r = 0; r < 4; r++) s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
        return s;
      }
    }, qt[cr](e) || (v[ns][e + t][eu] = Zt);
  });
  rn = /%20/g, sn = /\[\]$/, on = /\r?\n/g, un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, an = /^(?:select|textarea)/i;
  v.fn[Ar]({
    serialize: function() {
      return v.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        return this.elements ? v[Fs](this.elements) : this;
      })[gr](function() {
        return this.name && !this[xo] && (this[Rr] || an[cr](this[_r]) || un[cr](this[Ir]));
      }).map(function(e, t) {
        var n = v(this).val();
        return n == lr ? lr : v[Ti](n) ? v.map(n, function(e) {
          return {
            name: t.name,
            value: e[or](on, "\r\n")
          };
        }) : {
          name: t.name,
          value: n[or](on, "\r\n")
        };
      })[Zo]();
    }
  }), v.param = function(e, n) {
    var r, i = [], s = function(e, t) {
      t = v[vr](t) ? t() : t == lr ? "" : t, i[i[Er]] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };
    n === t && (n = v[Li] && v[Li].traditional);
    if (v[Ti](e) || e[Bs] && !v[Ms](e)) v[nr](e, function() {
      s(this.name, this[Ur]);
    }); else for (r in e) fn(r, e[r], n, s);
    return i[Ws]("&")[or](rn, "+");
  };
  hn = /#.*$/, pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, vn = /^(?:GET|HEAD)$/, mn = /^\/\//, gn = /\?/, yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bn = /([?&])_=[^&]*/, wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, En = v.fn.load, Sn = {}, xn = {}, Tn = [ "*/" ] + [ Qr ];
  try {
    cn = s[yo];
  } catch (Nn) {
    cn = i[wr]("a"), cn[yo] = "", cn = cn[yo];
  }
  ln = wn[si](cn[sr]()) || [], v.fn.load = function(e, n, r) {
    var i, s, o, u, a;
    if (typeof e != ar && En) return En[zs](this, arguments);
    if (!this[Er]) return this;
    u = this, a = e[Es](Di);
    return a >= 0 && (i = e[Zr](a, e[Er]), e = e[Zr](0, a)), v[vr](n) ? (r = n, n = t) : n && typeof n == Dr && (s = "POST"), v.ajax({
      url: e,
      type: s,
      dataType: "html",
      data: n,
      complete: function(e, t) {
        r && u[nr](r, o || [ e[Ua], t, e ]);
      }
    })[Yi](function(e) {
      o = arguments, u.html(i ? v("<div>")[Ca](e[or](yn, ""))[Ps](i) : e);
    }), this;
  }, v[nr]("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend"[rr](Di), function(e, t) {
    v.fn[t] = function(e) {
      return this.on(t, e);
    };
  }), v[nr]([ Zo, "post" ], function(e, n) {
    v[n] = function(e, r, i, s) {
      return v[vr](r) && (s = s || i, i = r, r = t), v.ajax({
        type: n,
        url: e,
        data: r,
        success: i,
        dataType: s
      });
    };
  }), v[Ar]({
    getScript: function(e, n) {
      return v[Zo](e, t, n, Xr);
    },
    getJSON: function(e, t, n) {
      return v[Zo](e, t, n, "json");
    },
    ajaxSetup: function(e, t) {
      return t ? Ln(e, v[Li]) : (t = e, e = v[Li]), Ln(e, t), e;
    },
    ajaxSettings: {
      url: cn,
      isLocal: dn[cr](ln[1]),
      global: !0,
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      processData: !0,
      async: !0,
      accepts: {
        xml: "application/xml, text/xml",
        html: "text/html",
        text: "text/plain",
        json: "application/json, text/javascript",
        "*": Tn
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: za,
        text: Ua
      },
      converters: {
        "* text": e.String,
        "text html": !0,
        "text json": v.parseJSON,
        "text xml": v.parseXML
      },
      flatOptions: {
        context: !0,
        url: !0
      }
    },
    ajaxPrefilter: Cn(Sn),
    ajaxTransport: Cn(xn),
    ajax: function(e, n) {
      function T(e, n, s, a) {
        var l, y, b, w, S, T = n;
        if (E === 2) return;
        E = 2, u && clearTimeout(u), o = t, i = a || "", x[ks] = e > 0 ? 4 : 0, s && (w = An(c, x, s));
        if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x[Mi]("Last-Modified"), S && (v[Wa][r] = S), S = x[Mi]("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l[hr], b = l[Ys], l = !b); else {
          b = T;
          if (!T || e) T = Ys, e < 0 && (e = 0);
        }
        x.status = e, x.statusText = (n || T) + "", l ? d[Xi](h, [ y, T, x ]) : d.rejectWith(h, [ x, T, b ]), x[Xa](g), g = t, f && p[$s]("ajax" + (l ? "Success" : "Error"), [ x, c, l ? y : b ]), m[fo](h, [ x, T ]), f && (p[$s]("ajaxComplete", [ x, c ]), --v.active || v[Lr][$s]("ajaxStop"));
      }
      var r, i, s, o, u, a, f, l, c, h, p, d, m, g, b, w, E, S, x, N, C;
      typeof e == Dr && (n = e, e = t), n = n || {};
      c = v[Va]({}, n), h = c[Os] || c, p = h !== c && (h[ir] || h instanceof v) ? v(h) : v[Lr], d = v[Ri](), m = v[uo](lo), g = c[Xa] || {}, b = {}, w = {}, E = 0, S = "canceled", x = {
        readyState: 0,
        setRequestHeader: function(e, t) {
          if (!E) {
            var n = e[sr]();
            e = w[n] = w[n] || e, b[e] = t;
          }
          return this;
        },
        getAllResponseHeaders: function() {
          return E === 2 ? i : lr;
        },
        getResponseHeader: function(e) {
          var n;
          if (E === 2) {
            if (!s) {
              s = {};
              while (n = pn[si](i)) s[n[1][sr]()] = n[2];
            }
            n = s[e[sr]()];
          }
          return n === t ? lr : n;
        },
        overrideMimeType: function(e) {
          return E || (c[Oi] = e), this;
        },
        abort: function(e) {
          return e = e || S, o && o[$a](e), T(0, e), this;
        }
      };
      d[Vi](x), x[Bi] = x[Yi], x[Ys] = x.fail, x[es] = m.add, x[Xa] = function(e) {
        var t;
        if (e) {
          if (E < 2) for (t in e) g[t] = [ g[t], e[t] ]; else t = e[x.status], x[qi](t);
        }
        return this;
      }, c.url = ((e || c.url) + "")[or](hn, "")[or](mn, ln[1] + "//"), c[ki] = v.trim(c.dataType || Qr)[sr]()[rr](y), c[Ja] == lr && (a = wn[si](c.url[sr]()), c[Ja] = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c[hr] && c.processData && typeof c[hr] != ar && (c[hr] = v.param(c[hr], c.traditional)), kn(Sn, c, n, x);
      if (E === 2) return x;
      f = c.global, c[Ir] = c[Ir][Yr](), c[Ka] = !vn[cr](c[Ir]), f && v.active++ === 0 && v[Lr][$s]("ajaxStart");
      if (!c[Ka]) {
        c[hr] && (c.url += (gn[cr](c.url) ? "&" : "?") + c[hr], delete c[hr]), r = c.url;
        if (c[Fo] === !1) {
          N = v.now(), C = c.url[or](bn, "$1_=" + N);
          c.url = C + (C === c.url ? (gn[cr](c.url) ? "&" : "?") + "_=" + N : "");
        }
      }
      (c[hr] && c[Ka] && c[Qa] !== !1 || n[Qa]) && x[Ga]("Content-Type", c[Qa]), c.ifModified && (r = r || c.url, v[Wa][r] && x[Ga]("If-Modified-Since", v[Wa][r]), v.etag[r] && x[Ga]("If-None-Match", v.etag[r])), x[Ga]("Accept", c[ki][0] && c.accepts[c[ki][0]] ? c.accepts[c[ki][0]] + (c[ki][0] !== Qr ? ", " + Tn + "; q=0.01" : "") : c.accepts[Qr]);
      for (l in c.headers) x[Ga](l, c.headers[l]);
      if (!c.beforeSend || c.beforeSend[mr](h, x, c) !== !1 && E !== 2) {
        S = $a;
        for (l in {
          success: 1,
          error: 1,
          complete: 1
        }) x[l](c[l]);
        o = kn(xn, c, n, x);
        if (!o) T(-1, "No Transport"); else {
          x[ks] = 1, f && p[$s]("ajaxSend", [ x, c ]), c[Zs] && c[Ya] > 0 && (u = setTimeout(function() {
            x[$a](Ya);
          }, c[Ya]));
          try {
            E = 1, o.send(b, T);
          } catch (k) {
            if (!(E < 2)) throw k;
            T(-1, k);
          }
        }
        return x;
      }
      return x[$a]();
    },
    active: 0,
    lastModified: {},
    etag: {}
  });
  Mn = [], _n = /\?/, Dn = /(=)\?(?=&|$)|\?\?/, Pn = v.now();
  v[Va]({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = Mn.pop() || v[Jr] + "_" + Pn++;
      return this[e] = !0, e;
    }
  }), v[Za]("json jsonp", function(n, r, i) {
    var s, o, u, a = n[hr], f = n.url, l = n.jsonp !== !1, c = l && Dn[cr](f), h = l && !c && typeof a == ar && !(n[Qa] || "")[Es]("application/x-www-form-urlencoded") && Dn[cr](a);
    if (n[ki][0] === "jsonp" || c || h) return s = n[ef] = v[vr](n[ef]) ? n[ef]() : n[ef], o = e[s], c ? n.url = f[or](Dn, oa + s) : h ? n[hr] = a[or](Dn, oa + s) : l && (n.url += (_n[cr](f) ? "&" : "?") + n.jsonp + "=" + s), n[_i]["script json"] = function() {
      return u || v[Ys](s + " was not called"), u[0];
    }, n[ki][0] = "json", e[s] = function() {
      u = arguments;
    }, i[qi](function() {
      e[s] = o, n[s] && (n[ef] = r[ef], Mn[Ci](s)), u && v[vr](o) && o(u[0]), u = o = t;
    }), Xr;
  }), v[Va]({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /javascript|ecmascript/
    },
    converters: {
      "text script": function(e) {
        return v.globalEval(e), e;
      }
    }
  }), v[Za](Xr, function(e) {
    e[Fo] === t && (e[Fo] = !1), e[Ja] && (e[Ir] = "GET", e.global = !1);
  }), v[tf](Xr, function(e) {
    var n, r;
    if (e[Ja]) {
      r = i.head || i[Sr]("head")[0] || i[eo];
      return {
        send: function(s, o) {
          n = i[wr](Xr), n[Zs] = Zs, e[nf] && (n.charset = e[nf]), n.src = e.url, n[so] = n[As] = function(e, i) {
            if (i || !n[ks] || /loaded|complete/[cr](n[ks])) n[so] = n[As] = lr, r && n[dr] && r[xi](n), n = t, i || o(200, Bi);
          }, r[Oo](n, r[mo]);
        },
        abort: function() {
          n && n[so](0, 1);
        }
      };
    }
  });
  Bn = e[Fi] ? function() {
    for (var e in Hn) Hn[e](0, 1);
  } : !1, jn = 0;
  v[Li].xhr = e[Fi] ? function() {
    return !this.isLocal && Fn() || In();
  } : Fn, function(e) {
    v[Ar](v[Br], {
      ajax: !!e,
      cors: !!e && "withCredentials" in e
    });
  }(v[Li].xhr()), v[Br].ajax && v[tf](function(n) {
    var r;
    if (!n[Ja] || v[Br].cors) {
      return {
        send: function(i, s) {
          var o, u, a = n.xhr();
          n.username ? a.open(n[Ir], n.url, n[Zs], n.username, n.password) : a.open(n[Ir], n.url, n[Zs]);
          if (n[rf]) for (u in n[rf]) a[u] = n[rf][u];
          n[Oi] && a[sf] && a[sf](n[Oi]), !n[Ja] && !i[of] && (i[of] = ji);
          try {
            for (u in i) a[Ga](u, i[u]);
          } catch (f) {}
          a.send(n[Ka] && n[hr] || lr), r = function(e, i) {
            var u, f, l, c, h;
            try {
              if (r && (i || a[ks] === 4)) {
                r = t, o && (a[As] = v.noop, Bn && delete Hn[o]);
                if (i) a[ks] !== 4 && a[$a](); else {
                  u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a[za], h && h[eo] && (c.xml = h);
                  try {
                    c[Vr] = a[Ua];
                  } catch (p) {}
                  try {
                    f = a.statusText;
                  } catch (p) {
                    f = "";
                  }
                  !u && n.isLocal && !n[Ja] ? u = c[Vr] ? 200 : 404 : u === 1223 && (u = 204);
                }
              }
            } catch (d) {
              i || s(-1, d);
            }
            c && s(u, f, c, l);
          }, n[Zs] ? a[ks] === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a[As] = r) : r();
        },
        abort: function() {
          r && r(0, 1);
        }
      };
    }
  });
  Un = /^(?:toggle|show|hide)$/, zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", ca), Wn = /queueHooks$/, Xn = [ Gn ], Vn = {
    "*": [ function(e, t) {
      var n, r, i = this.createTween(e, t), s = zn[si](t), o = i.cur(), u = +o || 0, a = 1, f = 20;
      if (s) {
        n = +s[2], r = s[3] || (v[Ba][e] ? "" : oi);
        if (r !== oi && u) {
          u = v.css(i[Ui], e, !0) || n || 1;
          do a = a || ".5", u /= a, v[ri](i[Ui], e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f);
        }
        i.unit = r, i[Qi] = u, i.end = s[1] ? u + (s[1] + 1) * n : n;
      }
      return i;
    } ]
  };
  v.Animation = v[Ar](Kn, {
    tweener: function(e, t) {
      var n, r, i;
      v[vr](e) ? (t = e, e = [ Qr ]) : e = e[rr](Di);
      r = 0, i = e[Er];
      for (; r < i; r++) n = e[r], Vn[n] = Vn[n] || [], Vn[n][Ni](t);
    },
    prefilter: function(e, t) {
      t ? Xn[Ni](e) : Xn[Ci](e);
    }
  }), v.Tween = Yn, Yn[gs] = {
    constructor: Yn,
    init: function(e, t, n, r, i, s) {
      this[Ui] = e, this[Jo] = n, this[Ki] = i || "swing", this[nu] = t, this[Qi] = this.now = this.cur(), this.end = r, this.unit = s || (v[Ba][n] ? "" : oi);
    },
    cur: function() {
      var e = Yn[uu][this[Jo]];
      return e && e[Zo] ? e[Zo](this) : Yn[uu][Du][Zo](this);
    },
    run: function(e) {
      var t, n = Yn[uu][this[Jo]];
      return this[nu][zi] ? this.pos = t = v[Ki][this[Ki]](e, this[nu][zi] * e, 0, 1, this[nu][zi]) : this.pos = t = e, this.now = (this.end - this[Qi]) * t + this[Qi], this[nu].step && this[nu].step[mr](this[Ui], this.now, this), n && n[eu] ? n[eu](this) : Yn[uu][Du][eu](this), this;
    }
  }, Yn[gs].init[gs] = Yn[gs], Yn[uu] = {
    _default: {
      get: function(e) {
        var t;
        return e[Ui][e[Jo]] == lr || !!e[Ui][ri] && e[Ui][ri][e[Jo]] != lr ? (t = v.css(e[Ui], e[Jo], !1, ""), !t || t === fu ? 0 : t) : e[Ui][e[Jo]];
      },
      set: function(e) {
        v.fx.step[e[Jo]] ? v.fx.step[e[Jo]](e) : e[Ui][ri] && (e[Ui][ri][v[Ha][e[Jo]]] != lr || v[ns][e[Jo]]) ? v[ri](e[Ui], e[Jo], e.now + e.unit) : e[Ui][e[Jo]] = e.now;
      }
    }
  }, Yn[uu][Uu] = Yn[uu][qu] = {
    set: function(e) {
      e[Ui][ir] && e[Ui][dr] && (e[Ui][e[Jo]] = e.now);
    }
  }, v[nr]([ hs, ds, ps ], function(e, t) {
    var n = v.fn[t];
    v.fn[t] = function(r, i, s) {
      return r == lr || typeof r == Xs || !e && v[vr](r) && v[vr](i) ? n[zs](this, arguments) : this.animate(Zn(t, !0), r, i, s);
    };
  }), v.fn[Ar]({
    fadeTo: function(e, t, n, r) {
      return this[gr](Gt).css(ys, 0)[ds]().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function(e, t, n, r) {
      var i = v[pr](e), s = v.speed(t, n, r), o = function() {
        var t = Kn(this, v[Ar]({}, e), s);
        i && t.stop(!0);
      };
      return i || s[Gi] === !1 ? this[nr](o) : this[Gi](s[Gi], o);
    },
    stop: function(e, n, r) {
      var i = function(e) {
        var t = e.stop;
        delete e.stop, t(r);
      };
      return typeof e != ar && (r = n, n = e, e = t), n && e !== !1 && this[Gi](e || "fx", []), this[nr](function() {
        var t = !0, n = e != lr && e + Xo, s = v[uf], o = v[Nr](this);
        if (n) o[n] && o[n].stop && i(o[n]); else for (n in o) o[n] && o[n].stop && Wn[cr](n) && i(o[n]);
        for (n = s[Er]; n--; ) s[n][Ui] === this && (e == lr || s[n][Gi] === e) && (s[n].anim.stop(r), t = !1, s[Pi](n, 1));
        (t || !r) && v[zo](this, e);
      });
    }
  }), v[nr]({
    slideDown: Zn(ds),
    slideUp: Zn(ps),
    slideToggle: Zn(hs),
    fadeIn: {
      opacity: ds
    },
    fadeOut: {
      opacity: ps
    },
    fadeToggle: {
      opacity: hs
    }
  }, function(e, t) {
    v.fn[e] = function(e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), v.speed = function(e, t, n) {
    var r = e && typeof e == Dr ? v[Ar]({}, e) : {
      complete: n || !n && t || v[vr](e) && e,
      duration: e,
      easing: n && t || t && !v[vr](t) && t
    };
    r[zi] = v.fx.off ? 0 : typeof r[zi] == to ? r[zi] : r[zi] in v.fx[Vo] ? v.fx[Vo][r[zi]] : v.fx[Vo][Du];
    if (r[Gi] == lr || r[Gi] === !0) r[Gi] = "fx";
    return r.old = r[es], r[es] = function() {
      v[vr](r.old) && r.old[mr](this), r[Gi] && v[zo](this, r[Gi]);
    }, r;
  }, v[Ki] = {
    linear: function(e) {
      return e;
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }
  }, v[uf] = [], v.fx = Yn[gs].init, v.fx.tick = function() {
    var e, n = v[uf], r = 0;
    qn = v.now();
    for (; r < n[Er]; r++) e = n[r], !e() && n[r] === e && n[Pi](r--, 1);
    n[Er] || v.fx.stop(), qn = t;
  }, v.fx.timer = function(e) {
    e() && v[uf][Ci](e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval));
  }, v.fx.interval = 13, v.fx.stop = function() {
    clearInterval(Rn), Rn = lr;
  }, v.fx[Vo] = {
    slow: 600,
    fast: 200,
    _default: 400
  }, v.fx.step = {}, v[yu] && v[yu][xa] && (v[yu][xa].animated = function(e) {
    return v.grep(v[uf], function(t) {
      return e === t[Ui];
    })[Er];
  });
  er = /^(?:body|html)$/i;
  v.fn[af] = function(e) {
    var n, r, i, s, o, u, a, f, l, c;
    if (arguments[Er]) return e === t ? this : this[nr](function(t) {
      v[af].setOffset(this, e, t);
    });
    f = {
      top: 0,
      left: 0
    }, l = this[0], c = l && l[Tr];
    if (!c) return;
    return (r = c[yi]) === l ? v[af].bodyOffset(l) : (n = c[eo], v[ni](n, l) ? (typeof l[ff] != Kr && (f = l[ff]()), i = tr(c), s = n[zu] || r[zu] || 0, o = n[Ru] || r[Ru] || 0, u = i[lf] || n[Uu], a = i[cf] || n[qu], {
      top: f.top + u - s,
      left: f[oo] + a - o
    }) : f);
  }, v[af] = {
    bodyOffset: function(e) {
      var t = e.offsetTop, n = e.offsetLeft;
      return v[Br][_o] && (t += parseFloat(v.css(e, hf)) || 0, n += parseFloat(v.css(e, pf)) || 0), {
        top: t,
        left: n
      };
    },
    setOffset: function(e, t, n) {
      var i, s, o, u, a, f, l, c, h, r = v.css(e, Ra);
      r === "static" && (e[ri][Ra] = fa);
      i = v(e), s = i[af](), o = v.css(e, "top"), u = v.css(e, oo), a = (r === Pa || r === "fixed") && v[yr](fu, [ o, u ]) > -1, f = {}, l = {};
      a ? (l = i[Ra](), c = l.top, h = l[oo]) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v[vr](t) && (t = t[mr](e, n, s)), t.top != lr && (f.top = t.top - s.top + c), t[oo] != lr && (f[oo] = t[oo] - s[oo] + h), "using" in t ? t.using[mr](e, f) : i.css(f);
    }
  }, v.fn[Ar]({
    position: function() {
      var e, t, n, r;
      if (!this[0]) return;
      e = this[0], t = this[df](), n = this[af](), r = er[cr](t[0][_r]) ? {
        top: 0,
        left: 0
      } : t[af]();
      return n.top -= parseFloat(v.css(e, hf)) || 0, n[oo] -= parseFloat(v.css(e, pf)) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r[oo] += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
        top: n.top - r.top,
        left: n[oo] - r[oo]
      };
    },
    offsetParent: function() {
      return this.map(function() {
        var e = this[df] || i[yi];
        while (e && !er[cr](e[_r]) && v.css(e, Ra) === "static") e = e[df];
        return e || i[yi];
      });
    }
  }), v[nr]({
    scrollLeft: cf,
    scrollTop: lf
  }, function(e, n) {
    var r = /Y/[cr](n);
    v.fn[e] = function(i) {
      return v[ro](this, function(e, i, s) {
        var o = tr(e);
        if (s === t) return o ? n in o ? o[n] : o[wi][eo][i] : e[i];
        o ? o.scrollTo(r ? v(o)[qu]() : s, r ? s : v(o)[Uu]()) : e[i] = s;
      }, e, i, arguments[Er], lr);
    };
  }), v[nr]({
    Height: os,
    Width: fi
  }, function(e, n) {
    v[nr]({
      padding: "inner" + e,
      content: n,
      "": "outer" + e
    }, function(r, i) {
      v.fn[i] = function(i, s) {
        var o = arguments[Er] && (r || typeof i != Xs), u = r || (i === !0 || s === !0 ? li : ui);
        return v[ro](this, function(n, r, i) {
          var s;
          return v[bs](n) ? n[wi][eo]["client" + e] : n[ir] === 9 ? (s = n[eo], Math.max(n[yi]["scroll" + e], s["scroll" + e], n[yi][af + e], s[af + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v[ri](n, r, i, u);
        }, n, o ? i : t, o, lr);
      };
    });
  }), e[ws] = e.$ = v, typeof define == Js && define.amd && define.amd[ws] && define(Bs, [], function() {
    return v;
  });
})(window);