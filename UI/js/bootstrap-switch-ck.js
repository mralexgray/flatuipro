/* ============================================================
 * bootstrapSwitch v1.3 by Larentis Mattia @spiritualGuru
 * http://www.larentis.eu/switch/
 * ============================================================
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 * ============================================================ */!function($) {
  "use strict";
  var t = false, n = "addClass", r = "data", s = "switch-", o = "on-label", u = "off-label", a = "icon", f = "<span>", l = "find", c = "input", h = "parent", p = "animated", d = "switch-animate", v = "append", m = ">div", g = ":checked", y = "switch-on", b = "switch-off", w = "deactivate", E = "trigger", S = "siblings", x = "label", T = "mouseup", N = "click", C = "stopImmediatePropagation", k = "preventDefault", L = "change", A = "left", O = "removeClass", M = "closest", _ = "unbind", D = "mouseleave", P = "prop", H = "checked", B = "input:checkbox";
  $.fn["bootstrapSwitch"] = function(method) {
    var methods = {
      init: function() {
        return this.each(function() {
          var $element = $(this), $div, $switchLeft, $switchRight, $label, myClasses = "", classes = $element.attr("class"), color, moving, onLabel = "ON", offLabel = "OFF", icon = t;
          $.each([ "switch-mini", "switch-small", "switch-large" ], function(i, el) {
            if (classes.indexOf(el) >= 0) myClasses = el;
          });
          $element[n]("has-switch");
          if ($element[r]("on") !== undefined) color = s + $element[r]("on");
          if ($element[r](o) !== undefined) onLabel = $element[r](o);
          if ($element[r](u) !== undefined) offLabel = $element[r](u);
          if ($element[r](a) !== undefined) icon = $element[r](a);
          $switchLeft = $(f)[n]("switch-left")[n](myClasses)[n](color).html(onLabel);
          color = "";
          if ($element[r]("off") !== undefined) color = s + $element[r]("off");
          $switchRight = $(f)[n]("switch-right")[n](myClasses)[n](color).html(offLabel);
          $label = $("<label>").html("&nbsp;")[n](myClasses).attr("for", $element[l](c).attr("id"));
          if (icon) {
            $label.html('<i class="' + icon + '"></i>');
          }
          $div = $element[l](":checkbox").wrap($("<div>"))[h]()[r](p, t);
          if ($element[r](p) !== t) $div[n](d)[r](p, true);
          $div[v]($switchLeft)[v]($label)[v]($switchRight);
          $element[l](m)[n]($element[l](c).is(g) ? y : b);
          if ($element[l](c).is(":disabled")) $(this)[n](w);
          var changeStatus = function($this) {
            $this[S](x)[E]("mousedown")[E](T)[E](N);
          };
          $element.on("keydown", function(e) {
            if (e.keyCode === 32) {
              e[C]();
              e[k]();
              changeStatus($(e.target)[l]("span:first"));
            }
          });
          $switchLeft.on(N, function(e) {
            changeStatus($(this));
          });
          $switchRight.on(N, function(e) {
            changeStatus($(this));
          });
          $element[l](c).on(L, function(e) {
            var $this = $(this), $element = $this[h](), thisState = $this.is(g), state = $element.is(".switch-off");
            e[k]();
            $element.css(A, "");
            if (state === thisState) {
              if (thisState) $element[O](b)[n](y); else $element[O](y)[n](b);
              if ($element[r](p) !== t) $element[n](d);
              $element[h]()[E]("switch-change", {
                el: $this,
                value: thisState
              });
            }
          });
          $element[l](x).on("mousedown touchstart", function(e) {
            var $this = $(this);
            moving = t;
            e[k]();
            e[C]();
            $this[M]("div")[O](d);
            if ($this[M](".has-switch").is(".deactivate")) $this[_](N); else {
              $this.on("mousemove touchmove", function(e) {
                var $element = $(this)[M](".switch"), relativeX = (e.pageX || e.originalEvent.targetTouches[0].pageX) - $element.offset()[A], percent = relativeX / $element.width() * 100, left = 25, right = 75;
                moving = true;
                if (percent < left) percent = left; else if (percent > right) percent = right;
                $element[l](m).css(A, percent - right + "%");
              });
              $this.on("click touchend", function(e) {
                var $this = $(this), $target = $(e.target), $myCheckBox = $target[S](c);
                e[C]();
                e[k]();
                $this[_](D);
                if (moving) $myCheckBox[P](H, !(parseInt($this[h]().css(A)) < -25)); else $myCheckBox[P](H, !$myCheckBox.is(g));
                moving = t;
                $myCheckBox[E](L);
              });
              $this.on(D, function(e) {
                var $this = $(this), $myCheckBox = $this[S](c);
                e[k]();
                e[C]();
                $this[_](D);
                $this[E](T);
                $myCheckBox[P](H, !(parseInt($this[h]().css(A)) < -25))[E](L);
              });
              $this.on(T, function(e) {
                e[C]();
                e[k]();
                $(this)[_]("mousemove");
              });
            }
          });
        });
      },
      toggleActivation: function() {
        $(this).toggleClass(w);
      },
      isActive: function() {
        return !$(this).hasClass(w);
      },
      setActive: function(active) {
        if (active) $(this)[O](w); else $(this)[n](w);
      },
      toggleState: function(skipOnChange) {
        var $input = $(this)[l](B);
        $input[P](H, !$input.is(g))[E](L, skipOnChange);
      },
      setState: function(value, skipOnChange) {
        $(this)[l](B)[P](H, value)[E](L, skipOnChange);
      },
      status: function() {
        return $(this)[l](B).is(g);
      },
      destroy: function() {
        var $div = $(this)[l]("div"), $checkbox;
        $div[l](":not(input:checkbox)").remove();
        $checkbox = $div.children();
        $checkbox.unwrap().unwrap();
        $checkbox[_](L);
        return $checkbox;
      }
    };
    if (methods[method]) return methods[method].apply(this, Array.prototype.slice.call(arguments, 1)); else if (typeof method === "object" || !method) return methods.init.apply(this, arguments); else $.error("Method " + method + " does not exist!");
  };
}(jQuery);

$(function() {
  $(".switch")["bootstrapSwitch"]();
});