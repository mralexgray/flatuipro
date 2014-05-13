/*

Holder - 1.9 - client side image placeholders
(c) 2012-2013 Ivan Malopinsky / http://imsky.co

Provided under the Apache 2.0 License: http://www.apache.org/licenses/LICENSE-2.0
Commercial use requires attribution.

*/var Holder = Holder || {};

(function(app, win) {
  function contentLoaded(n, t) {
    var l = "complete", s = "readystatechange", u = !1, h = u, c = !0, i = n.document, a = i.documentElement, e = i[p] ? p : K, v = i[p] ? "removeEventListener" : "detachEvent", f = i[p] ? "" : "on", r = function(e) {
      (e.type != s || i.readyState == l) && ((e.type == V ? n : i)[v](f + e.type, r, u), !h && (h = !0) && t.call(n, L));
    }, o = function() {
      try {
        a.doScroll("left");
      } catch (n) {
        setTimeout(o, 50);
        return;
      }
      r("poll");
    };
    if (i.readyState == l) t.call(n, "lazy"); else {
      if (i.createEventObject && a.doScroll) {
        try {
          c = !n.frameElement;
        } catch (y) {}
        c && o();
      }
      i[e](f + "DOMContentLoaded", r, u), i[e](f + s, r, u), n[e](f + V, r, u);
    }
  }
  function selector(a) {
    var b, ret;
    a = a[A](/^(\W)?(.*)/);
    b = document["getElement" + (a[1] ? a[1] == "#" ? "ById" : "sByClassName" : "sByTagName")](a[2]);
    ret = [];
    b != L && (b[x] ? ret = b : b[x] == 0 ? ret = b : ret = [ b ]);
    return ret;
  }
  function extend(a, b) {
    var d, e, c = {};
    for (d in a) c[d] = a[d];
    for (e in b) c[e] = b[e];
    return c;
  }
  function text_size(width, height, template) {
    var dimension_arr = [ height, width ].sort(), maxFactor = Math.round(dimension_arr[1] / 16), minFactor = Math.round(dimension_arr[0] / 16), text_height = Math.max(template.size, maxFactor);
    return {
      height: text_height
    };
  }
  function draw(ctx, dimensions, template, ratio) {
    var text, ts = text_size(dimensions[w], dimensions[g], template), text_height = ts[g], width = dimensions[w] * ratio, height = dimensions[g] * ratio, font = template[I] ? template[I] : "sans-serif";
    canvas[w] = width;
    canvas[g] = height;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = template[O];
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = template.foreground;
    ctx[I] = "bold " + text_height + Q + font;
    text = template[_] ? template[_] : dimensions[w] + "x" + dimensions[g];
    if (ctx.measureText(text)[w] / width > 1) {
      text_height = template.size / (ctx.measureText(text)[w] / width);
    }
    ctx[I] = "bold " + text_height * ratio + Q + font;
    ctx.fillText(text, width / 2, height / 2, width);
    return canvas.toDataURL(X);
  }
  function render(mode, el, holder, src) {
    var ratio, dimensions = holder[m], theme = holder.theme, text = holder[_] ? decodeURIComponent(holder[_]) : holder[_], dimensions_caption = dimensions[w] + "x" + dimensions[g];
    theme = text ? extend(theme, {
      text: text
    }) : theme;
    theme = holder[I] ? extend(theme, {
      font: holder[I]
    }) : theme;
    ratio = 1;
    if (window[C] && window[C] > 1) {
      ratio = window[C];
    }
    if (mode == "image") {
      el[E](H, src);
      el[E]("alt", text ? text : theme[_] ? theme[_] + " [" + dimensions_caption + "]" : dimensions_caption);
      if (fallback || !holder.auto) {
        el[N][w] = dimensions[w] + G;
        el[N][g] = dimensions[g] + G;
      }
      if (fallback) {
        el[N][et] = theme[O];
      } else {
        el[E]("src", draw(ctx, dimensions, theme, ratio));
      }
    } else {
      if (!fallback) {
        el[N].backgroundImage = "url(" + draw(ctx, dimensions, theme, ratio) + ")";
        el[N].backgroundSize = dimensions[w] + Q + dimensions[g] + G;
      }
    }
  }
  function fluid(el, holder) {
    var fluid, dimensions = holder[m], theme = holder.theme, text = holder[_], dimensions_caption = dimensions[w] + "x" + dimensions[g];
    theme = text ? extend(theme, {
      text: text
    }) : theme;
    fluid = document[T]("div");
    fluid[N][et] = theme[O];
    fluid[N].color = theme.foreground;
    fluid[U] = el[U] + " holderjs-fluid";
    fluid[N][w] = holder[m][w] + (holder[m][w][rt]("%") > 0 ? "" : G);
    fluid[N][g] = holder[m][g] + (holder[m][g][rt]("%") > 0 ? "" : G);
    fluid.id = el.id;
    el[N][w] = 0;
    el[N][g] = 0;
    if (theme[_]) {
      fluid[P](document[it](theme[_]));
    } else {
      fluid[P](document[it](dimensions_caption));
      fluid_images.push(fluid);
      setTimeout(fluid_update, 0);
    }
    el.parentNode.insertBefore(fluid, el.nextSibling);
    if (window.jQuery) {
      jQuery(function($) {
        $(el).on(V, function() {
          el[N][w] = fluid[N][w];
          el[N][g] = fluid[N][g];
          $(el).show();
          $(fluid).remove();
        });
      });
    }
  }
  function fluid_update() {
    var el, label;
    for (i in fluid_images) {
      if (!fluid_images[S](i)) continue;
      el = fluid_images[i], label = el.firstChild;
      el[N].lineHeight = el.offsetHeight + G;
      label.data = el.offsetWidth + "x" + el.offsetHeight;
    }
  }
  function parse_flags(flags, options) {
    var flag, ret = {
      theme: settings[nt].gray
    }, render = D;
    for (sl = flags[x], j = 0; j < sl; j++) {
      flag = flags[j];
      if (app[M][m][A](flag)) {
        render = J;
        ret[m] = app[M][m][Y](flag);
      } else if (app[M].fluid[A](flag)) {
        render = J;
        ret[m] = app[M].fluid[Y](flag);
        ret.fluid = J;
      } else if (app[M].colors[A](flag)) {
        ret.theme = app[M].colors[Y](flag);
      } else if (options[nt][flag]) {
        ret.theme = options[nt][flag];
      } else if (app[M][_][A](flag)) {
        ret[_] = app[M][_][Y](flag);
      } else if (app[M][I][A](flag)) {
        ret[I] = app[M][I][Y](flag);
      } else if (app[M].auto[A](flag)) {
        ret.auto = J;
      }
    }
    return render ? ret : D;
  }
  var ctx, fluid_images, settings, flag, p = "addEventListener", m = "dimensions", g = "height", w = "width", E = "setAttribute", S = "hasOwnProperty", x = "length", T = "createElement", N = "style", C = "devicePixelRatio", k = "getComputedStyle", L = null, A = "match", O = "background", M = "flags", _ = "text", D = false, P = "appendChild", H = "data-src", B = "getElementsByClassName", F = "getElementsByTagName", I = "font", q = "holderjs-style", R = "getPropertyValue", U = "className", z = "prototype", W = "querySelectorAll", X = "image/png", V = "load", J = true, K = "attachEvent", Q = "px ", G = "px", Y = "output", Z = "images", et = "backgroundColor", tt = "bgnodes", nt = "themes", rt = "indexOf", it = "createTextNode", st = "regex", preempted = D, fallback = D, canvas = document[T]("canvas");
  document[B] || (document[B] = function(e) {
    var n, r, i, t = document, s = [];
    if (t[W]) return t[W]("." + e);
    if (t.evaluate) {
      r = ".//*[contains(concat(' ', @class, ' '), ' " + e + " ')]", n = t.evaluate(r, t, L, 0, L);
      while (i = n.iterateNext()) s.push(i);
    } else {
      n = t[F]("*"), r = new RegExp("(^|\\s)" + e + "(\\s|$)");
      for (i = 0; i < n[x]; i++) r.test(n[i][U]) && s.push(n[i]);
    }
    return s;
  });
  window[k] || (window[k] = function(e) {
    return this.el = e, this[R] = function(t) {
      var n = /(\-([a-z]){1})/g;
      return t == "float" && (t = "styleFloat"), n.test(t) && (t = t.replace(n, function() {
        return arguments[2].toUpperCase();
      })), e.currentStyle[t] ? e.currentStyle[t] : L;
    }, this;
  });
  if (!Object[z][S]) Object[z][S] = function(prop) {
    var proto = this.__proto__ || this.constructor[z];
    return prop in this && (!(prop in proto) || proto[prop] !== this[prop]);
  };
  if (!canvas.getContext) {
    fallback = J;
  } else {
    if (canvas.toDataURL(X)[rt]("data:image/png") < 0) {
      fallback = J;
    } else {
      ctx = canvas.getContext("2d");
    }
  }
  fluid_images = [];
  settings = {
    domain: "holder.js",
    images: "img",
    bgnodes: ".holderjs",
    themes: {
      gray: {
        background: "#eee",
        foreground: "#aaa",
        size: 12
      },
      social: {
        background: "#3a5a97",
        foreground: "#fff",
        size: 12
      },
      industrial: {
        background: "#434A52",
        foreground: "#C2F200",
        size: 12
      }
    },
    stylesheet: ".holderjs-fluid {font-size:16px;font-weight:bold;text-align:center;font-family:sans-serif;margin:0}"
  };
  app[M] = {
    dimensions: {
      regex: /^(\d+)x(\d+)$/,
      output: function(val) {
        var exec = this[st].exec(val);
        return {
          width: +exec[1],
          height: +exec[2]
        };
      }
    },
    fluid: {
      regex: /^([0-9%]+)x([0-9%]+)$/,
      output: function(val) {
        var exec = this[st].exec(val);
        return {
          width: exec[1],
          height: exec[2]
        };
      }
    },
    colors: {
      regex: /#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,
      output: function(val) {
        var exec = this[st].exec(val);
        return {
          size: settings[nt].gray.size,
          foreground: "#" + exec[2],
          background: "#" + exec[1]
        };
      }
    },
    text: {
      regex: /text\:(.*)/,
      output: function(val) {
        return this[st].exec(val)[1];
      }
    },
    font: {
      regex: /font\:(.*)/,
      output: function(val) {
        return this[st].exec(val)[1];
      }
    },
    auto: {
      regex: /^auto$/
    }
  };
  for (flag in app[M]) {
    if (!app[M][S](flag)) continue;
    app[M][flag][A] = function(val) {
      return val[A](this[st]);
    };
  }
  app.add_theme = function(name, theme) {
    name != L && theme != L && (settings[nt][name] = theme);
    return app;
  };
  app.add_image = function(src, el) {
    var i, l, img, node = selector(el);
    if (node[x]) {
      for (i = 0, l = node[x]; i < l; i++) {
        img = document[T]("img");
        img[E](H, src);
        node[i][P](img);
      }
    }
    return app;
  };
  app.run = function(o) {
    var holdercss, cssregex, l, i, src, flags, holder, options = extend(settings, o), images = [];
    if (options[Z] instanceof window.NodeList) {
      imageNodes = options[Z];
    } else if (options[Z] instanceof window.Node) {
      imageNodes = [ options[Z] ];
    } else {
      imageNodes = selector(options[Z]);
    }
    if (options.elements instanceof window.NodeList) {
      bgnodes = options[tt];
    } else if (options[tt] instanceof window.Node) {
      bgnodes = [ options[tt] ];
    } else {
      bgnodes = selector(options[tt]);
    }
    preempted = J;
    for (i = 0, l = imageNodes[x]; i < l; i++) images.push(imageNodes[i]);
    holdercss = document.getElementById(q);
    if (!holdercss) {
      holdercss = document[T](N);
      holdercss[E]("id", q);
      holdercss.type = "text/css";
      document[F]("head")[0][P](holdercss);
    }
    if (holdercss.styleSheet) {
      holdercss.styleSheet += options.stylesheet;
    } else {
      holdercss.textContent += options.stylesheet;
    }
    cssregex = new RegExp(options.domain + '/(.*?)"?\\)');
    for (l = bgnodes[x], i = 0; i < l; i++) {
      src = window[k](bgnodes[i], L)[R]("background-image");
      flags = src[A](cssregex);
      if (flags) {
        holder = parse_flags(flags[1].split("/"), options);
        if (holder) {
          render(O, bgnodes[i], holder, src);
        }
      }
    }
    for (l = images[x], i = 0; i < l; i++) {
      src = images[i].getAttribute("src") || images[i].getAttribute(H);
      if (src != L && src[rt](options.domain) >= 0) {
        holder = parse_flags(src.substr(src.lastIndexOf(options.domain) + options.domain[x] + 1).split("/"), options);
        if (holder) {
          if (holder.fluid) {
            fluid(images[i], holder, src);
          } else {
            render("image", images[i], holder, src);
          }
        }
      }
    }
    return app;
  };
  contentLoaded(win, function() {
    if (window[p]) {
      window[p]("resize", fluid_update, D);
      window[p]("orientationchange", fluid_update, D);
    } else {
      window[K]("onresize", fluid_update);
    }
    preempted || app.run();
  });
  if (typeof define === "function" && define.amd) {
    define("Holder", [], function() {
      return app;
    });
  }
})(Holder, window);