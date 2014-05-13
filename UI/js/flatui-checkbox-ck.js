/* =============================================================
 * flatui-checkbox.js v0.0.2
 * ============================================================ */!function($) {
  var old, t = "$element", n = "defaults", r = "checkbox", i = "closest", s = ".checkbox", o = "disabled", u = "addClass", a = "checked", f = "toggle", l = "removeAttr", c = true, h = "trigger", p = "change", v = "check", Checkbox = function(element, options) {
    this.init(element, options);
  };
  Checkbox.prototype = {
    constructor: Checkbox,
    init: function(element, options) {
      var $el = this[t] = $(element);
      this.options = $.extend({}, $.fn[r][n], options);
      $el.before(this.options.template);
      this.setState();
    },
    setState: function() {
      var $el = this[t], $parent = $el[i](s);
      $el.prop(o) && $parent[u](o);
      $el.prop(a) && $parent[u](a);
    },
    toggle: function() {
      var ch = a, $el = this[t], $parent = $el[i](s), checked = $el.prop(ch), e = $.Event(f);
      if ($el.prop(o) == false) {
        $parent.toggleClass(ch) && checked ? $el[l](ch) : $el.attr(ch, c);
        $el[h](e)[h](p);
      }
    },
    setCheck: function(option) {
      var d = o, ch = a, $el = this[t], $parent = $el[i](s), checkAction = option == v ? c : false, e = $.Event(option);
      $parent[checkAction ? u : "removeClass"](ch) && checkAction ? $el.attr(ch, c) : $el[l](ch);
      $el[h](e)[h](p);
    }
  };
  old = $.fn[r];
  $.fn[r] = function(option) {
    return this.each(function() {
      var $this = $(this), data = $this.data(r), options = $.extend({}, $.fn[r][n], $this.data(), typeof option == "object" && option);
      if (!data) $this.data(r, data = new Checkbox(this, options));
      if (option == f) data[f]();
      if (option == v || option == "uncheck") data.setCheck(option); else if (option) data.setState();
    });
  };
  $.fn[r][n] = {
    template: '<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>'
  };
  $.fn[r].noConflict = function() {
    $.fn[r] = old;
    return this;
  };
  $(document).on("click.checkbox.data-api", "[data-toggle^=checkbox], .checkbox", function(e) {
    var $checkbox = $(e.target);
    e && e.preventDefault() && e.stopPropagation();
    if (!$checkbox.hasClass(r)) $checkbox = $checkbox[i](s);
    $checkbox.find(":checkbox")[r](f);
  });
  $(window).on("load", function() {
    $('[data-toggle="checkbox"]').each(function() {
      var $checkbox = $(this);
      $checkbox[r]();
    });
  });
}(window.jQuery);