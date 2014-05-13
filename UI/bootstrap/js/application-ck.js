// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++
!function($) {
  var t = "click", n = "preventDefault", r = "attr", i = "checked", s = "#gridSystem", o = "tooltip", u = "#variables.download input", a = ":checked", f = "value", l = "jsonpi", c = "appendTo", h = "name";
  $(function() {
    var inputsComponent, inputsPlugin, inputsVariables, $window = $(window);
    $("section [href^=#]")[t](function(e) {
      e[n]();
    });
    setTimeout(function() {
      $(".bs-docs-sidenav").affix({
        offset: {
          top: function() {
            return $window.width() <= 980 ? 290 : 210;
          },
          bottom: 270
        }
      });
    }, 100);
    window.prettyPrint && prettyPrint();
    $(".add-on :checkbox").on(t, function() {
      var $this = $(this), method = $this[r](i) ? "addClass" : "removeClass";
      $(this).parents(".add-on")[method]("active");
    });
    if ($(s).length) {
      $(s)[o]({
        selector: '.show-grid > [class*="span"]',
        title: function() {
          return $(this).width() + "px";
        }
      });
    }
    $(".tooltip-demo")[o]({
      selector: "a[data-toggle=tooltip]"
    });
    $(".tooltip-test")[o]();
    $(".popover-test").popover();
    $("a[data-toggle=popover]").popover()[t](function(e) {
      e[n]();
    });
    $("#fat-btn")[t](function() {
      var btn = $(this);
      btn.button("loading");
      setTimeout(function() {
        btn.button("reset");
      }, 3e3);
    });
    $("#myCarousel").carousel();
    inputsComponent = $("#components.download input"), inputsPlugin = $("#plugins.download input"), inputsVariables = $(u);
    $("#components.download .toggle-all").on(t, function(e) {
      e[n]();
      inputsComponent[r](i, !inputsComponent.is(a));
    });
    $("#plugins.download .toggle-all").on(t, function(e) {
      e[n]();
      inputsPlugin[r](i, !inputsPlugin.is(a));
    });
    $("#variables.download .toggle-all").on(t, function(e) {
      e[n]();
      inputsVariables.val("");
    });
    $(".download-btn .btn").on(t, function() {
      var css = $("#components.download input:checked").map(function() {
        return this[f];
      }).toArray(), js = $("#plugins.download input:checked").map(function() {
        return this[f];
      }).toArray(), vars = {}, img = [ "glyphicons-halflings.png", "glyphicons-halflings-white.png" ];
      $(u).each(function() {
        $(this).val() && (vars[$(this).prev().text()] = $(this).val());
      });
      $.ajax({
        type: "POST",
        url: /\?dev/.test(window.location) ? "http://localhost:3000" : "http://bootstrap.herokuapp.com",
        dataType: l,
        params: {
          js: js,
          css: css,
          vars: vars,
          img: img
        }
      });
    });
  });
  $.ajaxTransport(l, function(opts) {
    var url = opts.url;
    return {
      send: function() {
        var name = "jQuery_iframe_" + jQuery.now(), iframe = $("<iframe>")[r](h, name)[c]("head"), form = $("<form>")[r]("method", opts.type)[r]("action", url)[r]("target", name);
        $.each(opts.params, function(k, v) {
          $("<input>")[r]("type", "hidden")[r](h, k)[r](f, typeof v == "string" ? v : JSON.stringify(v))[c](form);
        });
        form[c]("body").submit();
      }
    };
  });
}(window.jQuery);