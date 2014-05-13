/*
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */(function(b) {
  function d(g, h) {
    var i, f;
    if (g[n].touches.length > 1) {
      return;
    }
    g.preventDefault();
    i = g[n][r][0], f = document.createEvent("MouseEvents");
    f.initMouseEvent(h, s, s, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, o, o, o, o, 0, null);
    g.target.dispatchEvent(f);
  }
  var c, e, a, t = "_mouseInit", n = "originalEvent", r = "changedTouches", s = true, o = false, u = "_touchStart", l = "_touchMoved", p = "mousemove", v = "_touchMove", m = "_touchEnd";
  b.support.touch = "ontouchend" in document;
  if (!b.support.touch) {
    return;
  }
  c = b.ui.mouse.prototype, e = c[t];
  c[u] = function(g) {
    var f = this;
    if (a || !f._mouseCapture(g[n][r][0])) {
      return;
    }
    a = s;
    f[l] = o;
    d(g, "mouseover");
    d(g, p);
    d(g, "mousedown");
  };
  c[v] = function(f) {
    if (!a) {
      return;
    }
    this[l] = s;
    d(f, p);
  };
  c[m] = function(f) {
    if (!a) {
      return;
    }
    d(f, "mouseup");
    d(f, "mouseout");
    if (!this[l]) {
      d(f, "click");
    }
    a = o;
  };
  c[t] = function() {
    var f = this;
    f.element.bind("touchstart", b.proxy(f, u)).bind("touchmove", b.proxy(f, v)).bind("touchend", b.proxy(f, m));
    e.call(f);
  };
})(jQuery);