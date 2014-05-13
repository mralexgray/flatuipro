/*
 HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/(function(l, f) {
  function m() {
    var a = e.elements;
    return "string" == typeof a ? a.split(" ") : a;
  }
  function i(a) {
    var b = n[a[o]];
    b || (b = {}, h++, a[o] = h, n[h] = b);
    return b;
  }
  function p(a, b, c) {
    b || (b = f);
    if (g) return b[u](a);
    c || (c = i(b));
    b = c[v][a] ? c[v][a][y]() : r.test(a) ? (c[v][a] = c[w](a))[y]() : c[w](a);
    return b.canHaveChildren && !s.test(a) ? c[E].appendChild(b) : b;
  }
  function t(a, b) {
    if (!b[v]) b[v] = {}, b[w] = a[u], b[S] = a[x], b[E] = b[S]();
    a[u] = function(c) {
      return !e[T] ? b[w](c) : p(c, a, b);
    };
    a[x] = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/\w+/g, function(a) {
      b[w](a);
      b[E][u](a);
      return 'c("' + a + '")';
    }) + ");return n}")(e, b[E]);
  }
  function q(a) {
    var b, c, d;
    a || (a = f);
    b = i(a);
    if (e.shivCSS && !j && !b.hasCSS) {
      d = a;
      c = d[u]("p");
      d = d.getElementsByTagName("head")[0] || d.documentElement;
      c.innerHTML = "x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
      c = d.insertBefore(c.lastChild, d.firstChild);
      b.hasCSS = !!c;
    }
    g || t(a, b);
    return a;
  }
  var k, s, r, j, o, h, n, g, e, u = "createElement", v = "cache", y = "cloneNode", w = "createElem", E = "frag", S = "createFrag", x = "createDocumentFragment", T = "shivMethods", N = "undefined";
  k = l.html5 || {}, s = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, r = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, o = "_html5shiv", h = 0, n = {};
  (function() {
    var a, b, c;
    try {
      a = f[u]("a");
      a.innerHTML = "<xyz></xyz>";
      j = "hidden" in a;
      if (!(b = 1 == a.childNodes.length)) {
        f[u]("a");
        c = f[x]();
        b = N == typeof c[y] || N == typeof c[x] || N == typeof c[u];
      }
      g = b;
    } catch (d) {
      g = j = !0;
    }
  })();
  e = {
    elements: k.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",
    version: "3.6.2",
    shivCSS: !1 !== k.shivCSS,
    supportsUnknownElements: g,
    shivMethods: !1 !== k[T],
    type: "default",
    shivDocument: q,
    createElement: p,
    createDocumentFragment: function(a, b) {
      a || (a = f);
      if (g) return a[x]();
      for (var b = b || i(a), c = b[E][y](), d = 0, e = m(), h = e.length; d < h; d++) c[u](e[d]);
      return c;
    }
  };
  l.html5 = e;
  q(f);
})(this, document);