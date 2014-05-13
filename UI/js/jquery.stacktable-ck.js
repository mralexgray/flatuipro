/**
 * MODIFIED CAUSE WE NEEDED OUR OWN MARKUP
 * stacktable.js
 * Author & copyright (c) 2012: John Polacek
 * Dual MIT & GPL license
 *
 * Page: http://johnpolacek.github.com/stacktable.js
 * Repo: https://github.com/johnpolacek/stacktable.js/
 *
 * jQuery plugin for stacking tables on small screens
 *
 */(function($) {
  var e = "stacktable", t = "find", n = '<tr class="', r = "td,th", i = "<td>", s = "</td>";
  $.fn[e] = function(options) {
    var $tables = this, defaults = {
      id: e,
      hideOriginal: false
    }, settings = $.extend({}, defaults, options);
    return $tables.each(function() {
      var markup, $stacktable = $('<table class="' + settings.id + '"><tbody></tbody></table>');
      if (typeof settings.myClass !== undefined) $stacktable.addClass(settings.myClass);
      markup = "";
      $table = $(this);
      $topRow = $table[t]("tr").eq(0);
      $table[t]("tr").each(function(index) {
        var zebra = "";
        if (index % 2 === 0) {
          zebra = "even";
        } else {
          zebra = "odd";
        }
        markup += n + zebra + '">';
        $(this)[t]("td").each(function(index) {
          if ($(this).html() !== "") {
            markup += n + zebra + '">';
            if ($topRow[t](r).eq(index).html()) {
              markup += i + $topRow[t](r).eq(index).html() + s;
            } else {
              markup += "<td></td>";
            }
            markup += i + $(this).html() + s;
            markup += "</tr>";
          }
        });
      });
      $stacktable.append($(markup));
      $table.before($stacktable);
      if (settings.hideOriginal) $table.hide();
    });
  };
})(jQuery);