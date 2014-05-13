/* =============================================================
 * flatui-radio.js v0.0.2
 * ============================================================ */!function($) {
  var old, t = "$element", n = "defaults", r = "radio", i = "closest", s = ".radio", o = "prop", u = "disabled", a = "addClass", f = "checked", l = "form", c = "body", h = ':radio[name="', p = "attr", v = "name", m = "toggle", g = false, y = "removeClass", b = "trigger", w = "change", E = true, S = "check", x = "removeAttr", Radio = function(element, options) {
    this.init(element, options);
  };
  Radio.prototype = {
    constructor: Radio,
    init: function(element, options) {
      var $el = this[t] = $(element);
      this.options = $.extend({}, $.fn[r][n], options);
      $el.before(this.options.template);
      this.setState();
    },
    setState: function() {
      var $el = this[t], $parent = $el[i](s);
      $el[o](u) && $parent[a](u);
      $el[o](f) && $parent[a](f);
    },
    toggle: function() {
      var d = u, ch = f, $el = this[t], checked = $el[o](ch), $parent = $el[i](s), $parentWrap = $el[i](l).length ? $el[i](l) : $el[i](c), $elemGroup = $parentWrap.find(h + $el[p](v) + '"]'), e = $.Event(m);
      $elemGroup.not($el).each(function() {
        var $el = $(this), $parent = $(this)[i](s);
        if ($el[o](d) == g) {
          $parent[y](ch) && $el[p](ch, g)[b](w);
        }
      });
      if ($el[o](d) == g) {
        if (checked == g) $parent[a](ch) && $el[p](ch, E);
        $el[b](e);
        if (checked !== $el[o](ch)) {
          $el[b](w);
        }
      }
    },
    setCheck: function(option) {
      var ch = f, $el = this[t], $parent = $el[i](s), checkAction = option == S ? E : g, checked = $el[o](ch), $parentWrap = $el[i](l).length ? $el[i](l) : $el[i](c), $elemGroup = $parentWrap.find(h + $el[p](v) + '"]'), e = $.Event(option);
      $elemGroup.not($el).each(function() {
        var $el = $(this), $parent = $(this)[i](s);
        $parent[y](ch) && $el[x](ch);
      });
      $parent[checkAction ? a : y](ch) && checkAction ? $el[p](ch, E) : $el[x](ch);
      $el[b](e);
      if (checked !== $el[o](ch)) {
        $el[b](w);
      }
    }
  };
  old = $.fn[r];
  $.fn[r] = function(option) {
    return this.each(function() {
      var $this = $(this), data = $this.data(r), options = $.extend({}, $.fn[r][n], $this.data(), typeof option == "object" && option);
      if (!data) $this.data(r, data = new Radio(this, options));
      if (option == m) data[m]();
      if (option == S || option == "uncheck") data.setCheck(option); else if (option) data.setState();
    });
  };
  $.fn[r][n] = {
    template: '<span class="icons"><span class="first-icon fui-radio-unchecked"></span><span class="second-icon fui-radio-checked"></span></span>'
  };
  $.fn[r].noConflict = function() {
    $.fn[r] = old;
    return this;
  };
  $(document).on("click.radio.data-api", "[data-toggle^=radio], .radio", function(e) {
    var $radio = $(e.target);
    e && e.preventDefault() && e.stopPropagation();
    if (!$radio.hasClass(r)) $radio = $radio[i](s);
    $radio.find(":radio")[r](m);
  });
  $(window).on("load", function() {
    $('[data-toggle="radio"]').each(function() {
      var $radio = $(this);
      $radio[r]();
    });
  });
}(window.jQuery);