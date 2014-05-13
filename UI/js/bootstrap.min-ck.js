/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-transition.js, bootstrap-modal.js, bootstrap-dropdown.js, bootstrap-scrollspy.js, bootstrap-tab.js, bootstrap-tooltip.js, bootstrap-popover.js, bootstrap-affix.js, bootstrap-alert.js, bootstrap-button.js, bootstrap-collapse.js, bootstrap-carousel.js, bootstrap-typeahead.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/!function(a) {
  var e = "transitionend";
  a(function() {
    a.support.transition = function() {
      var a = function() {
        var a = document.createElement("bootstrap"), b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: e,
          OTransition: "oTransitionEnd otransitionend",
          transition: e
        }, c;
        for (c in b) if (a.style[c] !== undefined) return b[c];
      }();
      return a && {
        end: a
      };
    }();
  });
}(window.jQuery), !function(a) {
  var c, t = "options", n = "$element", r = "hide", i = "isShown", s = "show", o = "trigger", u = "isDefaultPrevented", l = "backdrop", h = "transition", p = "support", v = "hasClass", m = "fade", g = "offsetWidth", y = "in", w = "aria-hidden", E = "focus", S = "shown", x = "preventDefault", T = "focusin.modal", N = "removeClass", C = "hideModal", k = "keyup.dismiss.modal", L = "$backdrop", A = "modal", O = "data", b = function(b, c) {
    this[t] = c, this[n] = a(b).delegate('[data-dismiss="modal"]', "click.dismiss.modal", a.proxy(this[r], this)), this[t].remote && this[n].find(".modal-body").load(this[t].remote);
  };
  b.prototype = {
    constructor: b,
    toggle: function() {
      return this[this[i] ? r : s]();
    },
    show: function() {
      var b = this, c = a.Event(s);
      this[n][o](c);
      if (this[i] || c[u]()) return;
      this[i] = !0, this.escape(), this[l](function() {
        var c = a[p][h] && b[n][v](m);
        b[n].parent().length || b[n].appendTo(document.body), b[n][s](), c && b[n][0][g], b[n].addClass(y).attr(w, !1), b.enforceFocus(), c ? b[n].one(a[p][h].end, function() {
          b[n][E]()[o](S);
        }) : b[n][E]()[o](S);
      });
    },
    hide: function(b) {
      var c;
      b && b[x]();
      c = this;
      b = a.Event(r), this[n][o](b);
      if (!this[i] || b[u]()) return;
      this[i] = !1, this.escape(), a(document).off(T), this[n][N](y).attr(w, !0), a[p][h] && this[n][v](m) ? this.hideWithTransition() : this[C]();
    },
    enforceFocus: function() {
      var b = this;
      a(document).on(T, function(a) {
        b[n][0] !== a.target && !b[n].has(a.target).length && b[n][E]();
      });
    },
    escape: function() {
      var a = this;
      this[i] && this[t].keyboard ? this[n].on(k, function(b) {
        b.which == 27 && a[r]();
      }) : this[i] || this[n].off(k);
    },
    hideWithTransition: function() {
      var b = this, c = setTimeout(function() {
        b[n].off(a[p][h].end), b[C]();
      }, 500);
      this[n].one(a[p][h].end, function() {
        clearTimeout(c), b[C]();
      });
    },
    hideModal: function() {
      var a = this;
      this[n][r](), this[l](function() {
        a.removeBackdrop(), a[n][o]("hidden");
      });
    },
    removeBackdrop: function() {
      this[L] && this[L].remove(), this[L] = null;
    },
    backdrop: function(b) {
      var e, c = this, d = this[n][v](m) ? m : "";
      if (this[i] && this[t][l]) {
        e = a[p][h] && d;
        this[L] = a('<div class="modal-backdrop ' + d + '" />').appendTo(document.body), this[L].click(this[t][l] == "static" ? a.proxy(this[n][0][E], this[n][0]) : a.proxy(this[r], this)), e && this[L][0][g], this[L].addClass(y);
        if (!b) return;
        e ? this[L].one(a[p][h].end, b) : b();
      } else !this[i] && this[L] ? (this[L][N](y), a[p][h] && this[n][v](m) ? this[L].one(a[p][h].end, b) : b()) : b && b();
    }
  };
  c = a.fn[A];
  a.fn[A] = function(c) {
    return this.each(function() {
      var d = a(this), e = d[O](A), f = a.extend({}, a.fn[A].defaults, d[O](), typeof c == "object" && c);
      e || d[O](A, e = new b(this, f)), typeof c == "string" ? e[c]() : f[s] && e[s]();
    });
  }, a.fn[A].defaults = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, a.fn[A].Constructor = b, a.fn[A].noConflict = function() {
    return a.fn[A] = c, this;
  }, a(document).on("click.modal.data-api", '[data-toggle="modal"]', function(b) {
    var c = a(this), d = c.attr("href"), e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")), f = e[O](A) ? "toggle" : a.extend({
      remote: !/#/.test(d) && d
    }, e[O](), c[O]());
    b[x](), e[A](f).one(r, function() {
      c[E]();
    });
  });
}(window.jQuery), !function(a) {
  function d() {
    a(".dropdown-backdrop").remove(), a(b).each(function() {
      e(a(this))[t](n);
    });
  }
  function e(b) {
    var d, c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")), d = c && a(c);
    if (!d || !d[r]) d = b.parent();
    return d;
  }
  var b, c, f, t = "removeClass", n = "open", r = "length", s = "click.dropdown.data-api", o = "prototype", u = ".disabled, :disabled", l = "keyCode", p = "stopPropagation", v = "dropdown";
  b = "[data-toggle=dropdown]", c = function(b) {
    var c = a(b).on(s, this.toggle);
    a("html").on(s, function() {
      c.parent()[t](n);
    });
  };
  c[o] = {
    constructor: c,
    toggle: function() {
      var f, g, c = a(this);
      if (c.is(u)) return;
      return f = e(c), g = f.hasClass(n), d(), g || ("ontouchstart" in document.documentElement && a('<div class="dropdown-backdrop"/>').insertBefore(a(this)).on("click", d), f.toggleClass(n)), c.focus(), !1;
    },
    keydown: function(c) {
      var d, f, h, i, j;
      if (!/(38|40|27)/.test(c[l])) return;
      d = a(this), c.preventDefault(), c[p]();
      if (d.is(u)) return;
      h = e(d), i = h.hasClass(n);
      if (!i || i && c[l] == 27) return c.which == 27 && h.find(b).focus(), d.click();
      f = a("[role=menu] li:not(.divider):visible a", h);
      if (!f[r]) return;
      j = f.index(f.filter(":focus")), c[l] == 38 && j > 0 && j--, c[l] == 40 && j < f[r] - 1 && j++, ~j || (j = 0), f.eq(j).focus();
    }
  };
  f = a.fn[v];
  a.fn[v] = function(b) {
    return this.each(function() {
      var d = a(this), e = d.data(v);
      e || d.data(v, e = new c(this)), typeof b == "string" && e[b].call(d);
    });
  }, a.fn[v].Constructor = c, a.fn[v].noConflict = function() {
    return a.fn[v] = f, this;
  }, a(document).on(s, d).on(s, ".dropdown form", function(a) {
    a[p]();
  }).on(s, b, c[o].toggle).on("keydown.dropdown.data-api", b + ", [role=menu]", c[o].keydown);
}(window.jQuery), !function(a) {
  function b(b, c) {
    var f, d = a.proxy(this.process, this), e = a(b).is(t) ? a(window) : a(b);
    this[n] = a.extend({}, a.fn[r].defaults, c), this[i] = e.on("scroll.scroll-spy.data-api", d), this[s] = (this[n].target || (f = a(b).attr(o)) && f.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = a(t), this.refresh(), this.process();
  }
  var c, t = "body", n = "options", r = "scrollspy", i = "$scrollElement", s = "selector", o = "href", u = "offsets", l = "targets", h = "length", p = "scrollHeight", v = "activeTarget", m = "activate", y = "parent", w = "active";
  b.prototype = {
    constructor: b,
    refresh: function() {
      var c, b = this;
      this[u] = a([]), this[l] = a([]), c = this.$body.find(this[s]).map(function() {
        var c = a(this), d = c.data("target") || c.attr(o), e = /^#\w/.test(d) && a(d);
        return e && e[h] && [ [ e.position().top + (!a.isWindow(b[i].get(0)) && b[i].scrollTop()), d ] ] || null;
      }).sort(function(a, b) {
        return a[0] - b[0];
      }).each(function() {
        b[u].push(this[0]), b[l].push(this[1]);
      });
    },
    process: function() {
      var g, a = this[i].scrollTop() + this[n].offset, b = this[i][0][p] || this.$body[0][p], c = b - this[i].height(), d = this[u], e = this[l], f = this[v];
      if (a >= c) return f != (g = e.last()[0]) && this[m](g);
      for (g = d[h]; g--; ) f != e[g] && a >= d[g] && (!d[g + 1] || a <= d[g + 1]) && this[m](e[g]);
    },
    activate: function(b) {
      var c, d;
      this[v] = b, a(this[s])[y](".active").removeClass(w), d = this[s] + '[data-target="' + b + '"],' + this[s] + '[href="' + b + '"]', c = a(d)[y]("li").addClass(w), c[y](".dropdown-menu")[h] && (c = c.closest("li.dropdown").addClass(w)), c.trigger(m);
    }
  };
  c = a.fn[r];
  a.fn[r] = function(c) {
    return this.each(function() {
      var d = a(this), e = d.data(r), f = typeof c == "object" && c;
      e || d.data(r, e = new b(this, f)), typeof c == "string" && e[c]();
    });
  }, a.fn[r].Constructor = b, a.fn[r].defaults = {
    offset: 10
  }, a.fn[r].noConflict = function() {
    return a.fn[r] = c, this;
  }, a(window).on("load", function() {
    a('[data-spy="scroll"]').each(function() {
      var b = a(this);
      b[r](b.data());
    });
  });
}(window.jQuery), !function(a) {
  var c, t = "parent", n = "active", r = "show", i = "removeClass", s = "addClass", o = "fade", u = "transition", l = "tab", b = function(b) {
    this.element = a(b);
  };
  b.prototype = {
    constructor: b,
    show: function() {
      var e, f, g, b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.attr("data-target");
      d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, ""));
      if (b[t]("li").hasClass(n)) return;
      e = c.find(".active:last a")[0], g = a.Event(r, {
        relatedTarget: e
      }), b.trigger(g);
      if (g.isDefaultPrevented()) return;
      f = a(d), this.activate(b[t]("li"), c), this.activate(f, f[t](), function() {
        b.trigger({
          type: "shown",
          relatedTarget: e
        });
      });
    },
    activate: function(b, c, d) {
      function g() {
        e[i](n).find("> .dropdown-menu > .active")[i](n), b[s](n), f ? (b[0].offsetWidth, b[s]("in")) : b[i](o), b[t](".dropdown-menu") && b.closest("li.dropdown")[s](n), d && d();
      }
      var e, f;
      e = c.find("> .active"), f = d && a.support[u] && e.hasClass(o);
      f ? e.one(a.support[u].end, g) : g(), e[i]("in");
    }
  };
  c = a.fn[l];
  a.fn[l] = function(c) {
    return this.each(function() {
      var d = a(this), e = d.data(l);
      e || d.data(l, e = new b(this)), typeof c == "string" && e[c]();
    });
  }, a.fn[l].Constructor = b, a.fn[l].noConflict = function() {
    return a.fn[l] = c, this;
  }, a(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
    b.preventDefault(), a(this)[l](r);
  });
}(window.jQuery), !function(a) {
  var c, t = "tooltip", n = "type", r = "$element", s = "options", o = "enabled", u = "trigger", l = "selector", p = "manual", v = "hover", m = "_options", y = "extend", w = "defaults", E = "data", S = "delay", x = "currentTarget", T = "show", N = "timeout", C = "hoverState", k = "in", L = "hide", A = "isDefaultPrevented", O = "addClass", M = "fade", _ = "placement", D = "function", P = "detach", H = "offsetWidth", B = "offsetHeight", j = "bottom", F = "top", I = "height", q = "left", R = "offset", U = "replaceArrow", z = "removeClass", W = "transition", X = "support", V = "attr", $ = "title", J = "data-original-title", K = "string", Q = "getBoundingClientRect", b = function(a, b) {
    this.init(t, a, b);
  };
  b.prototype = {
    constructor: b,
    init: function(b, c, d) {
      var e, f, g, h, i;
      this[n] = b, this[r] = a(c), this[s] = this.getOptions(d), this[o] = !0, g = this[s][u].split(" ");
      for (i = g.length; i--; ) h = g[i], h == "click" ? this[r].on("click." + this[n], this[s][l], a.proxy(this.toggle, this)) : h != p && (e = h == v ? "mouseenter" : "focus", f = h == v ? "mouseleave" : "blur", this[r].on(e + "." + this[n], this[s][l], a.proxy(this.enter, this)), this[r].on(f + "." + this[n], this[s][l], a.proxy(this.leave, this)));
      this[s][l] ? this[m] = a[y]({}, this[s], {
        trigger: p,
        selector: ""
      }) : this.fixTitle();
    },
    getOptions: function(b) {
      return b = a[y]({}, a.fn[this[n]][w], this[r][E](), b), b[S] && typeof b[S] == "number" && (b[S] = {
        show: b[S],
        hide: b[S]
      }), b;
    },
    enter: function(b) {
      var e, c = a.fn[this[n]][w], d = {};
      this[m] && a.each(this[m], function(a, b) {
        c[a] != b && (d[a] = b);
      }, this), e = a(b[x])[this[n]](d)[E](this[n]);
      if (!e[s][S] || !e[s][S][T]) return e[T]();
      clearTimeout(this[N]), e[C] = k, this[N] = setTimeout(function() {
        e[C] == k && e[T]();
      }, e[s][S][T]);
    },
    leave: function(b) {
      var c = a(b[x])[this[n]](this[m])[E](this[n]);
      this[N] && clearTimeout(this[N]);
      if (!c[s][S] || !c[s][S][L]) return c[L]();
      c[C] = "out", this[N] = setTimeout(function() {
        c[C] == "out" && c[L]();
      }, c[s][S][L]);
    },
    show: function() {
      var b, c, d, e, f, g, h = a.Event(T);
      if (this.hasContent() && this[o]) {
        this[r][u](h);
        if (h[A]()) return;
        b = this.tip(), this.setContent(), this[s].animation && b[O](M), f = typeof this[s][_] == D ? this[s][_].call(this, b[0], this[r][0]) : this[s][_], b[P]().css({
          top: 0,
          left: 0,
          display: "block"
        }), this[s].container ? b.appendTo(this[s].container) : b.insertAfter(this[r]), c = this.getPosition(), d = b[0][H], e = b[0][B];
        switch (f) {
         case j:
          g = {
            top: c[F] + c[I],
            left: c[q] + c.width / 2 - d / 2
          };
          break;
         case F:
          g = {
            top: c[F] - e,
            left: c[q] + c.width / 2 - d / 2
          };
          break;
         case q:
          g = {
            top: c[F] + c[I] / 2 - e / 2,
            left: c[q] - d
          };
          break;
         case "right":
          g = {
            top: c[F] + c[I] / 2 - e / 2,
            left: c[q] + c.width
          };
        }
        this.applyPlacement(g, f), this[r][u]("shown");
      }
    },
    applyPlacement: function(a, b) {
      var f, g, h, i, c = this.tip(), d = c[0][H], e = c[0][B];
      c[R](a)[O](b)[O](k), f = c[0][H], g = c[0][B], b == F && g != e && (a[F] = a[F] + e - g, i = !0), b == j || b == F ? (h = 0, a[q] < 0 && (h = a[q] * -2, a[q] = 0, c[R](a), f = c[0][H], g = c[0][B]), this[U](h - d + f, f, q)) : this[U](g - e, g, F), i && c[R](a);
    },
    replaceArrow: function(a, b, c) {
      this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "");
    },
    setContent: function() {
      var a = this.tip(), b = this.getTitle();
      a.find(".tooltip-inner")[this[s].html ? "html" : "text"](b), a[z]("fade in top bottom left right");
    },
    hide: function() {
      function e() {
        var b = setTimeout(function() {
          c.off(a[X][W].end)[P]();
        }, 500);
        c.one(a[X][W].end, function() {
          clearTimeout(b), c[P]();
        });
      }
      var b, c, d;
      b = this, c = this.tip(), d = a.Event(L);
      this[r][u](d);
      if (d[A]()) return;
      return c[z](k), a[X][W] && this.$tip.hasClass(M) ? e() : c[P](), this[r][u]("hidden"), this;
    },
    fixTitle: function() {
      var a = this[r];
      (a[V]($) || typeof a[V](J) != K) && a[V](J, a[V]($) || "")[V]($, "");
    },
    hasContent: function() {
      return this.getTitle();
    },
    getPosition: function() {
      var b = this[r][0];
      return a[y]({}, typeof b[Q] == D ? b[Q]() : {
        width: b[H],
        height: b[B]
      }, this[r][R]());
    },
    getTitle: function() {
      var a, b = this[r], c = this[s];
      return a = b[V](J) || (typeof c[$] == D ? c[$].call(b[0]) : c[$]), a;
    },
    tip: function() {
      return this.$tip = this.$tip || a(this[s].template);
    },
    arrow: function() {
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    },
    validate: function() {
      this[r][0].parentNode || (this[L](), this[r] = null, this[s] = null);
    },
    enable: function() {
      this[o] = !0;
    },
    disable: function() {
      this[o] = !1;
    },
    toggleEnabled: function() {
      this[o] = !this[o];
    },
    toggle: function(b) {
      var c = b ? a(b[x])[this[n]](this[m])[E](this[n]) : this;
      c.tip().hasClass(k) ? c[L]() : c[T]();
    },
    destroy: function() {
      this[L]()[r].off("." + this[n]).removeData(this[n]);
    }
  };
  c = a.fn[t];
  a.fn[t] = function(c) {
    return this.each(function() {
      var d = a(this), e = d[E](t), f = typeof c == "object" && c;
      e || d[E](t, e = new b(this, f)), typeof c == K && e[c]();
    });
  }, a.fn[t].Constructor = b, a.fn[t][w] = {
    animation: !0,
    placement: F,
    selector: !1,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1
  }, a.fn[t].noConflict = function() {
    return a.fn[t] = c, this;
  };
}(window.jQuery), !function(a) {
  var c, t = "popover", n = "Constructor", r = "getContent", i = "html", s = "options", o = "text", u = "content", b = function(a, b) {
    this.init(t, a, b);
  };
  b.prototype = a.extend({}, a.fn.tooltip[n].prototype, {
    constructor: b,
    setContent: function() {
      var a = this.tip(), b = this.getTitle(), c = this[r]();
      a.find(".popover-title")[this[s][i] ? i : o](b), a.find(".popover-content")[this[s][i] ? i : o](c), a.removeClass("fade top bottom left right in");
    },
    hasContent: function() {
      return this.getTitle() || this[r]();
    },
    getContent: function() {
      var a, b = this.$element, c = this[s];
      return a = (typeof c[u] == "function" ? c[u].call(b[0]) : c[u]) || b.attr("data-content"), a;
    },
    tip: function() {
      return this.$tip || (this.$tip = a(this[s].template)), this.$tip;
    },
    destroy: function() {
      this.hide().$element.off("." + this.type).removeData(this.type);
    }
  });
  c = a.fn[t];
  a.fn[t] = function(c) {
    return this.each(function() {
      var d = a(this), e = d.data(t), f = typeof c == "object" && c;
      e || d.data(t, e = new b(this, f)), typeof c == "string" && e[c]();
    });
  }, a.fn[t][n] = b, a.fn[t].defaults = a.extend({}, a.fn.tooltip.defaults, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), a.fn[t].noConflict = function() {
    return a.fn[t] = c, this;
  };
}(window.jQuery), !function(a) {
  var c, t = "affix", n = "checkPosition", r = "$element", s = "offset", o = "bottom", u = "top", l = "object", p = "function", v = null, m = "offsetBottom", b = function(b, c) {
    this.options = a.extend({}, a.fn[t].defaults, c), this.$window = a(window).on("scroll.affix.data-api", a.proxy(this[n], this)).on("click.affix.data-api", a.proxy(function() {
      setTimeout(a.proxy(this[n], this), 1);
    }, this)), this[r] = a(b), this[n]();
  };
  b.prototype[n] = function() {
    var b, c, d, e, f, g, h, i;
    if (!this[r].is(":visible")) return;
    b = a(document).height(), c = this.$window.scrollTop(), d = this[r][s](), e = this.options[s], f = e[o], g = e[u], h = "affix affix-top affix-bottom";
    typeof e != l && (f = g = e), typeof g == p && (g = e[u]()), typeof f == p && (f = e[o]()), i = this.unpin != v && c + this.unpin <= d[u] ? !1 : f != v && d[u] + this[r].height() >= b - f ? o : g != v && c <= g ? u : !1;
    if (this.affixed === i) return;
    this.affixed = i, this.unpin = i == o ? d[u] - c : v, this[r].removeClass(h).addClass(t + (i ? "-" + i : ""));
  };
  c = a.fn[t];
  a.fn[t] = function(c) {
    return this.each(function() {
      var d = a(this), e = d.data(t), f = typeof c == l && c;
      e || d.data(t, e = new b(this, f)), typeof c == "string" && e[c]();
    });
  }, a.fn[t].Constructor = b, a.fn[t].defaults = {
    offset: 0
  }, a.fn[t].noConflict = function() {
    return a.fn[t] = c, this;
  }, a(window).on("load", function() {
    a('[data-spy="affix"]').each(function() {
      var b = a(this), c = b.data();
      c[s] = c[s] || {}, c[m] && (c[s][o] = c[m]), c.offsetTop && (c[s][u] = c.offsetTop), b[t](c);
    });
  });
}(window.jQuery), !function(a) {
  var d, t = "close", n = "alert", r = "transition", b = '[data-dismiss="alert"]', c = function(c) {
    a(c).on("click", b, this[t]);
  };
  c.prototype[t] = function(b) {
    function f() {
      e.trigger("closed").remove();
    }
    var c, d, e;
    c = a(this), d = c.attr("data-target");
    d || (d = c.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), e = a(d), b && b.preventDefault(), e.length || (e = c.hasClass(n) ? c : c.parent()), e.trigger(b = a.Event(t));
    if (b.isDefaultPrevented()) return;
    e.removeClass("in"), a.support[r] && e.hasClass("fade") ? e.on(a.support[r].end, f) : f();
  };
  d = a.fn[n];
  a.fn[n] = function(b) {
    return this.each(function() {
      var d = a(this), e = d.data(n);
      e || d.data(n, e = new c(this)), typeof b == "string" && e[b].call(d);
    });
  }, a.fn[n].Constructor = c, a.fn[n].noConflict = function() {
    return a.fn[n] = d, this;
  }, a(document).on("click.alert.data-api", b, c.prototype[t]);
}(window.jQuery), !function(a) {
  var c, t = "$element", n = "button", r = "resetText", i = "removeClass", s = "toggle", o = "active", b = function(b, c) {
    this[t] = a(b), this.options = a.extend({}, a.fn[n].defaults, c);
  };
  b.prototype.setState = function(a) {
    var b = "disabled", c = this[t], d = c.data(), e = c.is("input") ? "val" : "html";
    a += "Text", d[r] || c.data(r, c[e]()), c[e](d[a] || this.options[a]), setTimeout(function() {
      a == "loadingText" ? c.addClass(b).attr(b, b) : c[i](b).removeAttr(b);
    }, 0);
  }, b.prototype[s] = function() {
    var a = this[t].closest('[data-toggle="buttons-radio"]');
    a && a.find(".active")[i](o), this[t].toggleClass(o);
  };
  c = a.fn[n];
  a.fn[n] = function(c) {
    return this.each(function() {
      var d = a(this), e = d.data(n), f = typeof c == "object" && c;
      e || d.data(n, e = new b(this, f)), c == s ? e[s]() : c && e.setState(c);
    });
  }, a.fn[n].defaults = {
    loadingText: "loading..."
  }, a.fn[n].Constructor = b, a.fn[n].noConflict = function() {
    return a.fn[n] = c, this;
  }, a(document).on("click.button.data-api", "[data-toggle^=button]", function(b) {
    var c = a(b.target);
    c.hasClass("btn") || (c = c.closest(".btn")), c[n](s);
  });
}(window.jQuery), !function(a) {
  var c, t = "$element", n = "options", r = "defaults", i = "collapse", s = "$parent", o = "toggle", u = "hasClass", l = "width", h = "transitioning", p = "in", v = "dimension", m = "data", g = "hide", y = "transition", w = "addClass", E = "show", S = "support", x = "removeClass", b = function(b, c) {
    this[t] = a(b), this[n] = a.extend({}, a.fn[i][r], c), this[n].parent && (this[s] = a(this[n].parent)), this[n][o] && this[o]();
  };
  b.prototype = {
    constructor: b,
    dimension: function() {
      var a = this[t][u](l);
      return a ? l : "height";
    },
    show: function() {
      var b, c, d, e;
      if (this[h] || this[t][u](p)) return;
      b = this[v](), c = a.camelCase([ "scroll", b ].join("-")), d = this[s] && this[s].find("> .accordion-group > .in");
      if (d && d.length) {
        e = d[m](i);
        if (e && e[h]) return;
        d[i](g), e || d[m](i, null);
      }
      this[t][b](0), this[y](w, a.Event(E), "shown"), a[S][y] && this[t][b](this[t][0][c]);
    },
    hide: function() {
      var b;
      if (this[h] || !this[t][u](p)) return;
      b = this[v](), this.reset(this[t][b]()), this[y](x, a.Event(g), "hidden"), this[t][b](0);
    },
    reset: function(a) {
      var b = this[v]();
      return this[t][x](i)[b](a || "auto")[0].offsetWidth, this[t][a !== null ? w : x](i), this;
    },
    transition: function(b, c, d) {
      var e = this, f = function() {
        c.type == E && e.reset(), e[h] = 0, e[t].trigger(d);
      };
      this[t].trigger(c);
      if (c.isDefaultPrevented()) return;
      this[h] = 1, this[t][b](p), a[S][y] && this[t][u](i) ? this[t].one(a[S][y].end, f) : f();
    },
    toggle: function() {
      this[this[t][u](p) ? g : E]();
    }
  };
  c = a.fn[i];
  a.fn[i] = function(c) {
    return this.each(function() {
      var d = a(this), e = d[m](i), f = a.extend({}, a.fn[i][r], d[m](), typeof c == "object" && c);
      e || d[m](i, e = new b(this, f)), typeof c == "string" && e[c]();
    });
  }, a.fn[i][r] = {
    toggle: !0
  }, a.fn[i].Constructor = b, a.fn[i].noConflict = function() {
    return a.fn[i] = c, this;
  }, a(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(b) {
    var d, c = a(this), e = c.attr("data-target") || b.preventDefault() || (d = c.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""), f = a(e)[m](i) ? o : c[m]();
    c[a(e)[u](p) ? w : x]("collapsed"), a(e)[i](f);
  });
}(window.jQuery), !function(a) {
  var c, t = "$element", n = "$indicators", r = "find", s = "options", o = "pause", u = "hover", l = "cycle", p = "paused", v = "interval", m = "next", y = "$active", w = ".item.active", E = "$items", S = "getActiveIndex", x = "length", T = "sliding", N = "slid", C = "slide", k = "prev", L = "transition", A = "support", O = "trigger", M = "active", _ = "removeClass", D = "addClass", P = "isDefaultPrevented", H = "carousel", B = "data", b = function(b, c) {
    this[t] = a(b), this[n] = this[t][r](".carousel-indicators"), this[s] = c, this[s][o] == u && this[t].on("mouseenter", a.proxy(this[o], this)).on("mouseleave", a.proxy(this[l], this));
  };
  b.prototype = {
    cycle: function(b) {
      return b || (this[p] = !1), this[v] && clearInterval(this[v]), this[s][v] && !this[p] && (this[v] = setInterval(a.proxy(this[m], this), this[s][v])), this;
    },
    getActiveIndex: function() {
      return this[y] = this[t][r](w), this[E] = this[y].parent().children(), this[E].index(this[y]);
    },
    to: function(b) {
      var c = this[S](), d = this;
      if (b > this[E][x] - 1 || b < 0) return;
      return this[T] ? this[t].one(N, function() {
        d.to(b);
      }) : c == b ? this[o]()[l]() : this[C](b > c ? m : k, a(this[E][b]));
    },
    pause: function(b) {
      return b || (this[p] = !0), this[t][r](".next, .prev")[x] && a[A][L].end && (this[t][O](a[A][L].end), this[l](!0)), clearInterval(this[v]), this[v] = null, this;
    },
    next: function() {
      if (this[T]) return;
      return this[C](m);
    },
    prev: function() {
      if (this[T]) return;
      return this[C](k);
    },
    slide: function(b, c) {
      var j, d = this[t][r](w), e = c || d[b](), f = this[v], g = b == m ? "left" : "right", h = b == m ? "first" : "last", i = this;
      this[T] = !0, f && this[o](), e = e[x] ? e : this[t][r](".item")[h](), j = a.Event(C, {
        relatedTarget: e[0],
        direction: g
      });
      if (e.hasClass(M)) return;
      this[n][x] && (this[n][r](".active")[_](M), this[t].one(N, function() {
        var b = a(i[n].children()[i[S]()]);
        b && b[D](M);
      }));
      if (a[A][L] && this[t].hasClass(C)) {
        this[t][O](j);
        if (j[P]()) return;
        e[D](b), e[0].offsetWidth, d[D](g), e[D](g), this[t].one(a[A][L].end, function() {
          e[_]([ b, g ].join(" "))[D](M), d[_]([ M, g ].join(" ")), i[T] = !1, setTimeout(function() {
            i[t][O](N);
          }, 0);
        });
      } else {
        this[t][O](j);
        if (j[P]()) return;
        d[_](M), e[D](M), this[T] = !1, this[t][O](N);
      }
      return f && this[l](), this;
    }
  };
  c = a.fn[H];
  a.fn[H] = function(c) {
    return this.each(function() {
      var d = a(this), e = d[B](H), f = a.extend({}, a.fn[H].defaults, typeof c == "object" && c), g = typeof c == "string" ? c : f[C];
      e || d[B](H, e = new b(this, f)), typeof c == "number" ? e.to(c) : g ? e[g]() : f[v] && e[o]()[l]();
    });
  }, a.fn[H].defaults = {
    interval: 5e3,
    pause: u
  }, a.fn[H].Constructor = b, a.fn[H].noConflict = function() {
    return a.fn[H] = c, this;
  }, a(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
    var d, g, c = a(this), e = a(c.attr("data-target") || (d = c.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")), f = a.extend({}, e[B](), c[B]());
    e[H](f), (g = c.attr("data-slide-to")) && e[B](H)[o]().to(g)[l](), b.preventDefault();
  });
}(window.jQuery), !function(a) {
  var c, t = "$element", n = "options", r = "typeahead", i = "matcher", s = "sorter", o = "highlighter", u = "updater", l = "source", h = "$menu", p = "shown", v = "find", m = ".active", g = "data-value", y = "hide", w = "query", E = "length", S = "proxy", x = "indexOf", T = "toLowerCase", N = "addClass", C = "active", k = "removeClass", L = "li", A = "focus", O = "keypress", M = "keydown", _ = "mouseenter", D = "mouseleave", P = "keyCode", H = "preventDefault", B = "stopPropagation", j = "suppressKeyPressRepeat", F = "focused", I = "mousedover", b = function(b, c) {
    this[t] = a(b), this[n] = a.extend({}, a.fn[r].defaults, c), this[i] = this[n][i] || this[i], this[s] = this[n][s] || this[s], this[o] = this[n][o] || this[o], this[u] = this[n][u] || this[u], this[l] = this[n][l], this[h] = a(this[n].menu), this[p] = !1, this.listen();
  };
  b.prototype = {
    constructor: b,
    select: function() {
      var a = this[h][v](m).attr(g);
      return this[t].val(this[u](a)).change(), this[y]();
    },
    updater: function(a) {
      return a;
    },
    show: function() {
      var b = a.extend({}, this[t].position(), {
        height: this[t][0].offsetHeight
      });
      return this[h].insertAfter(this[t]).css({
        top: b.top + b.height,
        left: b.left
      }).show(), this[p] = !0, this;
    },
    hide: function() {
      return this[h][y](), this[p] = !1, this;
    },
    lookup: function() {
      var c;
      return this[w] = this[t].val(), !this[w] || this[w][E] < this[n].minLength ? this[p] ? this[y]() : this : (c = a.isFunction(this[l]) ? this[l](this[w], a[S](this.process, this)) : this[l], c ? this.process(c) : this);
    },
    process: function(b) {
      var c = this;
      return b = a.grep(b, function(a) {
        return c[i](a);
      }), b = this[s](b), b[E] ? this.render(b.slice(0, this[n].items)).show() : this[p] ? this[y]() : this;
    },
    matcher: function(a) {
      return ~a[T]()[x](this[w][T]());
    },
    sorter: function(a) {
      var e, b = [], c = [], d = [];
      while (e = a.shift()) e[T]()[x](this[w][T]()) ? ~e[x](this[w]) ? c.push(e) : d.push(e) : b.push(e);
      return b.concat(c, d);
    },
    highlighter: function(a) {
      var b = this[w].replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      return a.replace(new RegExp("(" + b + ")", "ig"), function(a, b) {
        return "<strong>" + b + "</strong>";
      });
    },
    render: function(b) {
      var c = this;
      return b = a(b).map(function(b, d) {
        return b = a(c[n].item).attr(g, d), b[v]("a").html(c[o](d)), b[0];
      }), b.first()[N](C), this[h].html(b), this;
    },
    next: function() {
      var c = this[h][v](m)[k](C), d = c.next();
      d[E] || (d = a(this[h][v](L)[0])), d[N](C);
    },
    prev: function() {
      var b = this[h][v](m)[k](C), c = b.prev();
      c[E] || (c = this[h][v](L).last()), c[N](C);
    },
    listen: function() {
      this[t].on(A, a[S](this[A], this)).on("blur", a[S](this.blur, this)).on(O, a[S](this[O], this)).on("keyup", a[S](this.keyup, this)), this.eventSupported(M) && this[t].on(M, a[S](this[M], this)), this[h].on("click", a[S](this.click, this)).on(_, L, a[S](this[_], this)).on(D, L, a[S](this[D], this));
    },
    eventSupported: function(a) {
      var b = a in this[t];
      return b || (this[t].setAttribute(a, "return;"), b = typeof this[t][a] == "function"), b;
    },
    move: function(a) {
      if (!this[p]) return;
      switch (a[P]) {
       case 9:
       case 13:
       case 27:
        a[H]();
        break;
       case 38:
        a[H](), this.prev();
        break;
       case 40:
        a[H](), this.next();
      }
      a[B]();
    },
    keydown: function(b) {
      this[j] = ~a.inArray(b[P], [ 40, 38, 9, 13, 27 ]), this.move(b);
    },
    keypress: function(a) {
      if (this[j]) return;
      this.move(a);
    },
    keyup: function(a) {
      switch (a[P]) {
       case 40:
       case 38:
       case 16:
       case 17:
       case 18:
        break;
       case 9:
       case 13:
        if (!this[p]) return;
        this.select();
        break;
       case 27:
        if (!this[p]) return;
        this[y]();
        break;
       default:
        this.lookup();
      }
      a[B](), a[H]();
    },
    focus: function() {
      this[F] = !0;
    },
    blur: function() {
      this[F] = !1, !this[I] && this[p] && this[y]();
    },
    click: function(a) {
      a[B](), a[H](), this.select(), this[t][A]();
    },
    mouseenter: function(b) {
      this[I] = !0, this[h][v](m)[k](C), a(b.currentTarget)[N](C);
    },
    mouseleave: function() {
      this[I] = !1, !this[F] && this[p] && this[y]();
    }
  };
  c = a.fn[r];
  a.fn[r] = function(c) {
    return this.each(function() {
      var d = a(this), e = d.data(r), f = typeof c == "object" && c;
      e || d.data(r, e = new b(this, f)), typeof c == "string" && e[c]();
    });
  }, a.fn[r].defaults = {
    source: [],
    items: 8,
    menu: '<ul class="typeahead dropdown-menu"></ul>',
    item: '<li><a href="#"></a></li>',
    minLength: 1
  }, a.fn[r].Constructor = b, a.fn[r].noConflict = function() {
    return a.fn[r] = c, this;
  }, a(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function() {
    var c = a(this);
    if (c.data(r)) return;
    c[r](c.data());
  });
}(window.jQuery);