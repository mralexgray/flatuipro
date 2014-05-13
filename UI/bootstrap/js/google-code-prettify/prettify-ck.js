var q = null;

window.PR_SHOULD_USE_CONTINUATION = !0;

(function() {
  function L(a) {
    function m(a) {
      var b, f = a[pt](0);
      if (f !== 92) return f;
      b = a[ut](1);
      return (f = r[b]) ? f : "0" <= b && b <= "7" ? parseInt(a[_](1), 8) : b === "u" || b === "x" ? parseInt(a[_](2), 16) : a[pt](1);
    }
    function e(a) {
      if (a < 32) return (a < 16 ? "\\x0" : "\\x") + a.toString(16);
      a = String.fromCharCode(a);
      if (a === ct || a === "-" || a === "[" || a === "]") a = ct + a;
      return a;
    }
    function h(a) {
      var a, f, b, o, c, i, j, d;
      for (f = a[_](1, a[T] - 1)[nt](/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g), a = [], b = [], o = f[0] === "^", c = o ? 1 : 0, i = f[T]; c < i; ++c) {
        j = f[c];
        if (/\\[bdsw]/i.test(j)) a[P](j); else {
          j = m(j);
          c + 2 < i && "-" === f[c + 1] ? (d = m(f[c + 2]), c += 2) : d = j;
          b[P]([ j, d ]);
          d < 65 || j > 122 || (d < 65 || j > 90 || b[P]([ Math.max(65, j) | 32, Math.min(d, 90) | 32 ]), d < 97 || j > 122 || b[P]([ Math.max(97, j) & -33, Math.min(d, 122) & -33 ]));
        }
      }
      b.sort(function(a, f) {
        return a[0] - f[0] || f[1] - a[1];
      });
      f = [];
      j = [ NaN, NaN ];
      for (c = 0; c < b[T]; ++c) i = b[c], i[0] <= j[1] + 1 ? j[1] = Math.max(j[1], i[1]) : f[P](j = i);
      b = [ "[" ];
      o && b[P]("^");
      b[P].apply(b, a);
      for (c = 0; c < f[T]; ++c) i = f[c], b[P](e(i[0])), i[1] > i[0] && (i[1] + 1 > i[0] && b[P]("-"), b[P](e(i[1])));
      b[P]("]");
      return b.join("");
    }
    function y(a) {
      var f, b, d, c, i, j;
      for (f = a.source[nt](/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), b = f[T], d = [], c = 0, i = 0; c < b; ++c) {
        j = f[c];
        j === "(" ? ++i : ct === j[ut](0) && (j = +j[_](1)) && j <= i && (d[j] = -1);
      }
      for (c = 1; c < d[T]; ++c) -1 === d[c] && (d[c] = ++t);
      for (i = c = 0; c < b; ++c) j = f[c], j === "(" ? (++i, d[i] === void 0 && (f[c] = "(?:")) : ct === j[ut](0) && (j = +j[_](1)) && j <= i && (f[c] = ct + d[i]);
      for (i = c = 0; c < b; ++c) "^" === f[c] && "^" !== f[c + 1] && (f[c] = "");
      if (a.ignoreCase && s) for (c = 0; c < b; ++c) j = f[c], a = j[ut](0), j[T] >= 2 && a === "[" ? f[c] = h(j) : a !== ct && (f[c] = j[$](/[A-Za-z]/g, function(a) {
        a = a[pt](0);
        return "[" + String.fromCharCode(a & -33, a | 32) + "]";
      }));
      return f.join("");
    }
    var t, s, l, p, d, g, r, n;
    for (t = 0, s = !1, l = !1, p = 0, d = a[T]; p < d; ++p) {
      g = a[p];
      if (g.ignoreCase) l = !0; else if (/[a-z]/i.test(g.source[$](/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
        s = !0;
        l = !1;
        break;
      }
    }
    for (r = {
      b: 8,
      t: 9,
      n: 10,
      v: 11,
      f: 12,
      r: 13
    }, n = [], p = 0, d = a[T]; p < d; ++p) {
      g = a[p];
      if (g.global || g.multiline) throw Error("" + g);
      n[P]("(?:" + y(g) + ")");
    }
    return RegExp(n.join("|"), l ? "gi" : "g");
  }
  function M(a) {
    function m(a) {
      var g;
      switch (a[ht]) {
       case 1:
        if (e.test(a[W])) break;
        for (g = a[Q]; g; g = g[R]) m(g);
        g = a.nodeName;
        if ("BR" === g || "LI" === g) h[s] = "\n", t[s << 1] = y++, t[s++ << 1 | 1] = a;
        break;
       case 3:
       case 4:
        g = a[rt], g[T] && (g = p ? g[$](/\r\n?/g, "\n") : g[$](/[\t\n\r ]+/g, " "), h[s] = g, t[s << 1] = y, y += g[T], t[s++ << 1 | 1] = a);
      }
    }
    var e, h, y, t, s, l, p;
    e = /(?:^|\s)nocode(?:\s|$)/, h = [], y = 0, t = [], s = 0;
    a[et] ? l = a[et].whiteSpace : window[V] && (l = document.defaultView[V](a, q)[bt](gt));
    p = l && St === l[_](0, 3);
    m(a);
    return {
      a: h.join("")[$](/\n$/, ""),
      c: t
    };
  }
  function B(a, m, e, h) {
    m && (a = {
      a: m,
      d: a
    }, e(a), h[P].apply(h, a.e));
  }
  function x(a, m) {
    function e(a) {
      var l, p, d, g, r, n, z, f, b, o, c, i, j, k;
      for (l = a.d, p = [ l, st ], d = 0, g = a.a[nt](y) || [], r = {}, n = 0, z = g[T]; n < z; ++n) {
        f = g[n], b = r[f], o = void 0;
        if (typeof b === "string") c = !1; else {
          i = h[f[ut](0)];
          if (i) o = f[nt](i[1]), b = i[0]; else {
            for (c = 0; c < t; ++c) if (i = m[c], o = f[nt](i[1])) {
              b = i[0];
              break;
            }
            o || (b = st);
          }
          if ((c = b[T] >= 5 && dt === b[_](0, 5)) && !(o && typeof o[1] === "string")) c = !1, b = "src";
          c || (r[f] = b);
        }
        i = d;
        d += f[T];
        if (c) {
          c = o[1];
          j = f.indexOf(c), k = j + c[T];
          o[2] && (k = f[T] - o[2][T], j = k - c[T]);
          b = b[_](5);
          B(l + i, f[_](0, j), e, p);
          B(l + i + j, c, C(b, c), p);
          B(l + i + k, f[_](k), e, p);
        } else p[P](l + i, b);
      }
      a.e = p;
    }
    var h, y, t;
    h = {};
    (function() {
      var e, l, p, d, g, r, n, k;
      for (e = a.concat(m), l = [], p = {}, d = 0, g = e[T]; d < g; ++d) {
        r = e[d], n = r[3];
        if (n) for (k = n[T]; --k >= 0; ) h[n[ut](k)] = r;
        r = r[1];
        n = "" + r;
        p[at](n) || (l[P](r), p[n] = q);
      }
      l[P](/[\S\s]/);
      y = L(l);
    })();
    t = m[T];
    return e;
  }
  function u(a) {
    var h, m = [], e = [];
    a.tripleQuotedStrings ? m[P]([ ft, /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, q, "'\"" ]) : a.multiLineStrings ? m[P]([ ft, /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/, q, "'\"`" ]) : m[P]([ ft, /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, q, "\"'" ]);
    a.verbatimStrings && e[P]([ ft, /^@"(?:[^"]|"")*(?:"|$)/, q ]);
    h = a.hashComments;
    h && (a[xt] ? (h > 1 ? m[P]([ lt, /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, q, "#" ]) : m[P]([ lt, /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/, q, "#" ]), e[P]([ ft, /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/, q ])) : m[P]([ lt, /^#[^\n\r]*/, q, "#" ]));
    a[xt] && (e[P]([ lt, /^\/\/[^\n\r]*/, q ]), e[P]([ lt, /^\/\*[\S\s]*?(?:\*\/|$)/, q ]));
    a.regexLiterals && e[P]([ "lang-regex", /^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/ ]);
    (h = a.types) && e[P]([ "typ", h ]);
    a = ("" + a.keywords)[$](/^ | $/g, "");
    a[T] && e[P]([ "kwd", RegExp("^(?:" + a[$](/[\s,]+/g, "|") + ")\\b"), q ]);
    m[P]([ st, /^\s+/, q, " \r\n	 " ]);
    e[P]([ "lit", /^@[$_a-z][\w$@]*/i, q ], [ "typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q ], [ st, /^[$_a-z][\w$@]*/i, q ], [ "lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, q, "0123456789" ], [ st, /^\\[\S\s]?/, q ], [ Et, /^.[^\s\w"-$'./@\\`]*/, q ]);
    return x(m, e);
  }
  function D(a, m) {
    function e(a) {
      var b, d, c;
      switch (a[ht]) {
       case 1:
        if (k.test(a[W])) break;
        if ("BR" === a.nodeName) h(a), a[U] && a[U].removeChild(a); else for (a = a[Q]; a; a = a[R]) e(a);
        break;
       case 3:
       case 4:
        if (p) {
          b = a[rt], d = b[nt](t);
          if (d) {
            c = b[_](0, d.index);
            a[rt] = c;
            (b = b[_](d.index + d[0][T])) && a[U].insertBefore(s[ot](b), a[R]);
            h(a);
            c || a[U].removeChild(a);
          }
        }
      }
    }
    function h(a) {
      function b(a, d) {
        var g, h, e = d ? a.cloneNode(!1) : a, f = a[U];
        if (f) {
          f = b(f, 1), g = a[R];
          f[X](e);
          for (h = g; h; h = g) g = h[R], f[X](h);
        }
        return e;
      }
      var a, e;
      for (; !a[R]; ) if (a = a[U], !a) return;
      for (a = b(a[R], 0); (e = a[U]) && e[ht] === 1; ) a = e;
      d[P](a);
    }
    var k, t, s, l, p, d, g, r, n, z;
    k = /(?:^|\s)nocode(?:\s|$)/, t = /\r\n?|\n/, s = a[Tt];
    a[et] ? l = a[et].whiteSpace : window[V] && (l = s.defaultView[V](a, q)[bt](gt));
    p = l && St === l[_](0, 3);
    for (l = s[Z]("LI"); a[Q]; ) l[X](a[Q]);
    for (d = [ l ], g = 0; g < d[T]; ++g) e(d[g]);
    m === (m | 0) && d[0].setAttribute("value", m);
    r = s[Z]("OL");
    r[W] = "linenums";
    for (n = Math.max(0, m - 1 | 0) || 0, g = 0, z = d[T]; g < z; ++g) l = d[g], l[W] = "L" + (g + n) % 10, l[Q] || l[X](s[ot](" ")), r[X](l);
    a[X](r);
  }
  function k(a, m) {
    var e, h;
    for (e = m[T]; --e >= 0; ) {
      h = m[e];
      A[at](h) ? window.console && console.warn("cannot override language handler %s", h) : A[h] = a;
    }
  }
  function C(a, m) {
    if (!a || !A[at](a)) a = /^\s*</.test(m) ? vt : mt;
    return A[a];
  }
  function E(a) {
    var a, e, h, k, t, s, l, p, d, g, r, n, z, f, b, o, c, i, j, u, v, x, m = a.g;
    try {
      e = M(a.h), h = e.a;
      a.a = h;
      a.c = e.c;
      a.d = 0;
      C(m, h)(a);
      k = /\bMSIE\b/.test(navigator.userAgent), m = /\n/g, t = a.a, s = t[T], e = 0, l = a.c, p = l[T], h = 0, d = a.e, g = d[T], a = 0;
      d[g] = s;
      for (n = r = 0; n < g; ) d[n] !== d[n + 2] ? (d[r++] = d[n++], d[r++] = d[n++]) : n += 2;
      g = r;
      for (n = r = 0; n < g; ) {
        for (z = d[n], f = d[n + 1], b = n + 2; b + 2 <= g && d[b + 1] === f; ) b += 2;
        d[r++] = z;
        d[r++] = f;
        n = b;
      }
      for (d[T] = r; h < p; ) {
        o = l[h + 2] || s, c = d[a + 2] || s, b = Math.min(o, c), i = l[h + 1];
        if (i[ht] !== 1 && (j = t[_](e, b))) {
          k && (j = j[$](m, "\r"));
          i[rt] = j;
          u = i[Tt], v = u[Z]("SPAN");
          v[W] = d[a + 1];
          x = i[U];
          x.replaceChild(v, i);
          v[X](i);
          e < o && (l[h + 1] = i = u[ot](t[_](b, o)), x.insertBefore(i, v[R]));
        }
        e = b;
        e >= o && (h += 2);
        e >= c && (a += 2);
      }
    } catch (w) {
      "console" in window && console.log(w && w.stack ? w.stack : w);
    }
  }
  var v, w, F, G, H, I, J, K, N, O, A, S = "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", T = "length", _ = "substring", P = "push", R = "nextSibling", U = "parentNode", W = "className", X = "appendChild", V = "getComputedStyle", $ = "replace", Q = "firstChild", Y = "getElementsByTagName", Z = "createElement", et = "currentStyle", tt = "lang-css", nt = "match", rt = "nodeValue", it = "lang-js", st = "pln", ot = "createTextNode", ut = "charAt", at = "hasOwnProperty", ft = "str", lt = "com", ct = "\\", ht = "nodeType", pt = "charCodeAt", dt = "lang-", vt = "default-markup", mt = "default-code", gt = "white-space", yt = "prettyprint", bt = "getPropertyValue", wt = "tagName", Et = "pun", St = "pre", xt = "cStyleComments", Tt = "ownerDocument";
  v = [ "break,continue,do,else,for,if,return,while" ], w = [ [ v, "auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile" ], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof" ], F = [ w, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where" ], G = [ w, "abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient" ], H = [ G, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var" ], w = [ w, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN" ], I = [ v, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None" ], J = [ v, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END" ], v = [ v, "case,done,elif,esac,eval,fi,function,in,local,set,then,until" ], K = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/, N = /\S/, O = u({
    keywords: [ F, H, w, S + I, J, v ],
    hashComments: !0,
    cStyleComments: !0,
    multiLineStrings: !0,
    regexLiterals: !0
  }), A = {};
  k(O, [ mt ]);
  k(x([], [ [ st, /^[^<?]+/ ], [ "dec", /^<!\w[^>]*(?:>|$)/ ], [ lt, /^<\!--[\S\s]*?(?:--\>|$)/ ], [ dt, /^<\?([\S\s]+?)(?:\?>|$)/ ], [ dt, /^<%([\S\s]+?)(?:%>|$)/ ], [ Et, /^(?:<[%?]|[%?]>)/ ], [ dt, /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i ], [ it, /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i ], [ tt, /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i ], [ "lang-in.tag", /^(<\/?[a-z][^<>]*>)/i ] ]), [ vt, "htm", "html", "mxml", "xhtml", "xml", "xsl" ]);
  k(x([ [ st, /^\s+/, q, " 	\r\n" ], [ "atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'" ] ], [ [ "tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i ], [ "atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i ], [ "lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/ ], [ Et, /^[/<->]+/ ], [ it, /^on\w+\s*=\s*"([^"]+)"/i ], [ it, /^on\w+\s*=\s*'([^']+)'/i ], [ it, /^on\w+\s*=\s*([^\s"'>]+)/i ], [ tt, /^style\s*=\s*"([^"]+)"/i ], [ tt, /^style\s*=\s*'([^']+)'/i ], [ tt, /^style\s*=\s*([^\s"'>]+)/i ] ]), [ "in.tag" ]);
  k(x([], [ [ "atv", /^[\S\s]+/ ] ]), [ "uq.val" ]);
  k(u({
    keywords: F,
    hashComments: !0,
    cStyleComments: !0,
    types: K
  }), [ "c", "cc", "cpp", "cxx", "cyc", "m" ]);
  k(u({
    keywords: "null,true,false"
  }), [ "json" ]);
  k(u({
    keywords: H,
    hashComments: !0,
    cStyleComments: !0,
    verbatimStrings: !0,
    types: K
  }), [ "cs" ]);
  k(u({
    keywords: G,
    cStyleComments: !0
  }), [ "java" ]);
  k(u({
    keywords: v,
    hashComments: !0,
    multiLineStrings: !0
  }), [ "bsh", "csh", "sh" ]);
  k(u({
    keywords: I,
    hashComments: !0,
    multiLineStrings: !0,
    tripleQuotedStrings: !0
  }), [ "cv", "py" ]);
  k(u({
    keywords: S,
    hashComments: !0,
    multiLineStrings: !0,
    regexLiterals: !0
  }), [ "perl", "pl", "pm" ]);
  k(u({
    keywords: J,
    hashComments: !0,
    multiLineStrings: !0,
    regexLiterals: !0
  }), [ "rb" ]);
  k(u({
    keywords: w,
    cStyleComments: !0,
    regexLiterals: !0
  }), [ "js" ]);
  k(u({
    keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
    hashComments: 3,
    cStyleComments: !0,
    multilineStrings: !0,
    tripleQuotedStrings: !0,
    regexLiterals: !0
  }), [ "coffee" ]);
  k(x([], [ [ ft, /^[\S\s]+/ ] ]), [ "regex" ]);
  window.prettyPrintOne = function(a, m, e) {
    var h = document[Z]("PRE");
    h.innerHTML = a;
    e && D(h, e);
    E({
      g: m,
      i: e,
      h: h
    });
    return h.innerHTML;
  };
  window.prettyPrint = function(a) {
    function m() {
      var e, n, k, f, b, o, c, i;
      for (e = window.PR_SHOULD_USE_CONTINUATION ? l.now() + 250 : Infinity; p < h[T] && l.now() < e; p++) {
        n = h[p], k = n[W];
        if (k.indexOf(yt) >= 0) {
          k = k[nt](g);
          if (b = !k) {
            b = n;
            for (o = void 0, c = b[Q]; c; c = c[R]) i = c[ht], o = i === 1 ? o ? b : c : i === 3 ? N.test(c[rt]) ? b : o : o;
            b = (f = o === b ? void 0 : o) && "CODE" === f[wt];
          }
          b && (k = f[W][nt](g));
          k && (k = k[1]);
          b = !1;
          for (o = n[U]; o; o = o[U]) if ((o[wt] === St || o[wt] === "code" || o[wt] === "xmp") && o[W] && o[W].indexOf(yt) >= 0) {
            b = !0;
            break;
          }
          b || ((b = (b = n[W][nt](/\blinenums\b(?::(\d+))?/)) ? b[1] && b[1][T] ? +b[1] : !0 : !1) && D(n, b), d = {
            g: k,
            h: n,
            i: b
          }, E(d));
        }
      }
      p < h[T] ? setTimeout(m, 250) : a && a();
    }
    var e, h, k, t, s, l, p, d, g;
    for (e = [ document[Y](St), document[Y]("code"), document[Y]("xmp") ], h = [], k = 0; k < e[T]; ++k) for (t = 0, s = e[k][T]; t < s; ++t) h[P](e[k][t]);
    e = q, l = Date;
    l.now || (l = {
      now: function() {
        return +(new Date);
      }
    });
    p = 0, g = /\blang(?:uage)?-([\w.]+)(?!\S)/;
    m();
  };
  window.PR = {
    createSimpleLexer: x,
    registerLangHandler: k,
    sourceDecorator: u,
    PR_ATTRIB_NAME: "atn",
    PR_ATTRIB_VALUE: "atv",
    PR_COMMENT: lt,
    PR_DECLARATION: "dec",
    PR_KEYWORD: "kwd",
    PR_LITERAL: "lit",
    PR_NOCODE: "nocode",
    PR_PLAIN: st,
    PR_PUNCTUATION: Et,
    PR_SOURCE: "src",
    PR_STRING: ft,
    PR_TAG: "tag",
    PR_TYPE: "typ"
  };
})();