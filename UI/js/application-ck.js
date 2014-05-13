// Some general UI pack related JS
// Extend JS String with repeat method
String.prototype.repeat = function(num) {
  return (new Array(num + 1)).join(this);
};

(function($) {
  var t = "addSliderSegments", n = "selectpicker", r = "click", i = "preventDefault", s = "show", o = "length", u = "slider", a = "horizontal", f = "option", l = true, c = "find", h = ".ui-slider-value:first", p = "$", d = "values", v = ".ui-slider-value:last", m = "addClass", g = "data-tooltip-style", y = "removeClass", b = "active", w = "<span class='ui-icon ", E = "'></span>", S = "</a>", x = "focus", T = "closest", N = ".ui-spinner", C = "blur", k = "input", L = ".control-group, form", A = "checked", O = ".table", M = "check", _ = "uncheck", D = ".table tbody :checkbox", P = "datepicker", H = "#datepicker-01";
  $.fn[t] = function(amount) {
    return this.each(function() {
      var segmentGap = 100 / (amount - 1) + "%", segment = "<div class='ui-slider-segment' style='margin-left: " + segmentGap + ";'></div>";
      $(this).prepend(segment.repeat(amount - 2));
    });
  };
  $(function() {
    var $slider, $slider2, $slider3, slider3ValueMultiplier, slider3Options;
    $("select[name='huge']")[n]({
      style: "btn-huge btn-primary",
      menuStyle: "dropdown-inverse"
    });
    $("select[name='large']")[n]({
      style: "btn-large btn-danger"
    });
    $("select[name='info']")[n]({
      style: "btn-info"
    });
    $("select[name='small']")[n]({
      style: "btn-small btn-warning"
    });
    $(".nav-tabs a").on(r, function(e) {
      e[i]();
      $(this).tab(s);
    });
    $("[data-toggle=tooltip]").tooltip(s);
    $(".tagsinput").tagsInput();
    $slider = $("#slider");
    if ($slider[o] > 0) {
      $slider[u]({
        min: 1,
        max: 5,
        value: 3,
        orientation: a,
        range: "min"
      })[t]($slider[u](f).max);
    }
    $slider2 = $("#slider2");
    if ($slider2[o] > 0) {
      $slider2[u]({
        min: 1,
        max: 5,
        values: [ 3, 4 ],
        orientation: a,
        range: l
      })[t]($slider2[u](f).max);
    }
    $slider3 = $("#slider3"), slider3ValueMultiplier = 100;
    if ($slider3[o] > 0) {
      $slider3[u]({
        min: 1,
        max: 5,
        values: [ 3, 4 ],
        orientation: a,
        range: l,
        slide: function(event, ui) {
          $slider3[c](h).text(p + ui[d][0] * slider3ValueMultiplier).end()[c](v).text(p + ui[d][1] * slider3ValueMultiplier);
        }
      });
      slider3Options = $slider3[u](f);
      $slider3[t](slider3Options.max)[c](h).text(p + slider3Options[d][0] * slider3ValueMultiplier).end()[c](v).text(p + slider3Options[d][1] * slider3ValueMultiplier);
    }
    $(".tooltip")[m](function() {
      if ($(this).prev().attr(g)) {
        return "tooltip-" + $(this).prev().attr(g);
      }
    });
    $("input, textarea").placeholder();
    $(".pagination a").on(r, function() {
      $(this).parent().siblings("li")[y](b).end()[m](b);
    });
    $(".btn-group a").on(r, function() {
      $(this).siblings()[y](b).end()[m](b);
    });
    $('a[href="#fakelink"]').on(r, function(e) {
      e[i]();
    });
    $.widget("ui.customspinner", $.ui.spinner, {
      _buttonHtml: function() {
        return "" + "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'>" + w + this.options.icons.up + E + S + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + w + this.options.icons.down + E + S;
      }
    });
    $("#spinner-01").customspinner({
      min: -99,
      max: 99
    }).on(x, function() {
      $(this)[T](N)[m](x);
    }).on(C, function() {
      $(this)[T](N)[y](x);
    });
    $(".input-prepend, .input-append").on(x, k, function() {
      $(this)[T](L)[m](x);
    }).on(C, k, function() {
      $(this)[T](L)[y](x);
    });
    $(".table .toggle-all").on(r, function() {
      var ch = $(this)[c](":checkbox").prop(A);
      $(this)[T](O)[c]("tbody :checkbox").checkbox(!ch ? M : _);
    });
    $(D).on("check uncheck toggle", function(e) {
      var $this = $(this), check = $this.prop(A), toggle = e.type == "toggle", checkboxes = $(D), checkAll = checkboxes[o] == checkboxes.filter(":checked")[o];
      $this[T]("tr")[check ? m : y]("selected-row");
      if (toggle) $this[T](O)[c](".toggle-all :checkbox").checkbox(checkAll ? M : _);
    });
    $(H)[P]({
      showOtherMonths: l,
      selectOtherMonths: l,
      dateFormat: "d MM, yy",
      yearRange: "-1:+1"
    }).prev(".btn").on(r, function(e) {
      e && e[i]();
      $(H)[x]();
    });
    $.extend($[P], {
      _checkOffset: function(inst, offset) {
        return offset;
      }
    });
    $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch();
    $(".table-striped").stacktable({
      id: "rwd-table"
    });
  });
})(jQuery);