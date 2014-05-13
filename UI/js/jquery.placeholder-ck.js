/*! http://mths.be/placeholder v2.0.7 by @mathias */(function(window, document, $) {
  function args(elem) {
    var newAttrs = {}, rinlinejQuery = /^jQuery\d+$/;
    $.each(elem.attributes, function(i, attr) {
      if (attr.specified && !rinlinejQuery.test(attr.name)) {
        newAttrs[attr.name] = attr[c];
      }
    });
    return newAttrs;
  }
  function clearPlaceholder(event, value) {
    var input = this, $input = $(input);
    if (input[c] == $input[p](t) && $input[l](t)) {
      if ($input[u]("placeholder-password")) {
        $input = $input.hide().next().show()[p](d, $input[v](d)[u]("placeholder-id"));
        if (event === o) {
          return $input[0][c] = value;
        }
        $input.focus();
      } else {
        input[c] = "";
        $input[m](t);
        input == document[h] && input.select();
      }
    }
  }
  function setPlaceholder() {
    var $replacement, input = this, $input = $(input), $origInput = $input, id = this[d];
    if (input[c] == "") {
      if (input.type == "password") {
        if (!$input[u]("placeholder-textinput")) {
          try {
            $replacement = $input.clone()[p]({
              type: g
            });
          } catch (e) {
            $replacement = $("<input>")[p]($.extend(args(this), {
              type: g
            }));
          }
          $replacement[v]("name")[u]({
            "placeholder-password": o,
            "placeholder-id": id
          }).bind("focus.placeholder", clearPlaceholder);
          $input[u]({
            "placeholder-textinput": $replacement,
            "placeholder-id": id
          }).before($replacement);
        }
        $input = $input[v](d).hide().prev()[p](d, id).show();
      }
      $input.addClass(t);
      $input[0][c] = $input[p](t);
    } else {
      $input[m](t);
    }
  }
  var hooks, placeholder, t = "placeholder", n = "createElement", r = "input", s = "textarea", o = true, u = "data", a = ".placeholder", f = "placeholder-enabled", l = "hasClass", c = "value", h = "activeElement", p = "attr", d = "id", v = "removeAttr", m = "removeClass", g = "text", isInputSupported = t in document[n](r), isTextareaSupported = t in document[n](s), prototype = $.fn, valHooks = $.valHooks;
  if (isInputSupported && isTextareaSupported) {
    placeholder = prototype[t] = function() {
      return this;
    };
    placeholder[r] = placeholder[s] = o;
  } else {
    placeholder = prototype[t] = function() {
      var $this = this;
      $this.filter((isInputSupported ? s : ":input") + "[placeholder]").not(a).bind({
        "focus.placeholder": clearPlaceholder,
        "blur.placeholder": setPlaceholder
      })[u](f, o).trigger("blur.placeholder");
      return $this;
    };
    placeholder[r] = isInputSupported;
    placeholder[s] = isTextareaSupported;
    hooks = {
      get: function(element) {
        var $element = $(element);
        return $element[u](f) && $element[l](t) ? "" : element[c];
      },
      set: function(element, value) {
        var $element = $(element);
        if (!$element[u](f)) {
          return element[c] = value;
        }
        if (value == "") {
          element[c] = value;
          if (element != document[h]) {
            setPlaceholder.call(element);
          }
        } else if ($element[l](t)) {
          clearPlaceholder.call(element, o, value) || (element[c] = value);
        } else {
          element[c] = value;
        }
        return $element;
      }
    };
    isInputSupported || (valHooks[r] = hooks);
    isTextareaSupported || (valHooks[s] = hooks);
    $(function() {
      $(document).delegate("form", "submit.placeholder", function() {
        var $inputs = $(a, this).each(clearPlaceholder);
        setTimeout(function() {
          $inputs.each(setPlaceholder);
        }, 10);
      });
    });
    $(window).bind("beforeunload.placeholder", function() {
      $(a).each(function() {
        this[c] = "";
      });
    });
  }
})(this, document, jQuery);