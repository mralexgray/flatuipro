/*

	jQuery Tags Input Plugin 1.3.3
	
	Copyright (c) 2011 XOXCO, Inc
	
	Documentation for this plugin lives here:
	http://xoxco.com/clickable/jquery-tags-input
	
	Licensed under the MIT license:
	http://www.opensource.org/licenses/mit-license.php

	ben@xoxco.com

*/(function($) {
  var e = "doAutosize", t = "data", n = "minwidth", r = "maxwidth", s = "#", u = "tester_id", a = "val", l = "replace", c = "width", h = "comfortZone", p = "resetAutosize", v = ".tagsinput", m = "css", g = "attr", y = "id", b = "length", w = "addTag", E = "extend", S = false, x = true, T = "split", N = "unique", C = "_tag", k = "not_valid", L = "<span>", A = "removeTag", O = "_addTag", M = "focus", _ = "updateTagsField", D = "tagsInput", P = "onAddTag", H = "onChange", B = "_tagsinput .tag", j = "importTags", F = "onRemoveTag", I = "interactive", q = "holder", R = "real_input", U = "fake_input", z = "data-default", W = "color", X = "placeholderColor", V = "bind", J = "autocomplete_url", K = "autocomplete", Q = "maxChars", G = "preventDefault", Y = "keydown", delimiter = new Array, tags_callbacks = new Array;
  $.fn[e] = function(o) {
    var escaped, testerWidth, newWidth, currentWidth, isValidWidthChange, minWidth = $(this)[t](n), maxWidth = $(this)[t](r), val = "", input = $(this), testSubject = $(s + $(this)[t](u));
    if (val === (val = input[a]())) {
      return;
    }
    escaped = val[l](/&/g, "&amp;")[l](/\s/g, " ")[l](/</g, "&lt;")[l](/>/g, "&gt;");
    testSubject.html(escaped);
    testerWidth = testSubject[c](), newWidth = testerWidth + o[h] >= minWidth ? testerWidth + o[h] : minWidth, currentWidth = input[c](), isValidWidthChange = newWidth < currentWidth && newWidth >= minWidth || newWidth > minWidth && newWidth < maxWidth;
    if (isValidWidthChange) {
      input[c](newWidth);
    }
  };
  $.fn[p] = function(options) {
    var minWidth = $(this)[t](n) || options.minInputWidth || $(this)[c](), maxWidth = $(this)[t](r) || options.maxInputWidth || $(this).closest(v)[c]() - options.inputPadding, val = "", input = $(this), testSubject = $("<tester/>")[m]({
      position: "absolute",
      top: -9999,
      left: -9999,
      width: "auto",
      fontSize: input[m]("fontSize"),
      fontFamily: input[m]("fontFamily"),
      fontWeight: input[m]("fontWeight"),
      letterSpacing: input[m]("letterSpacing"),
      whiteSpace: "nowrap"
    }), testerId = $(this)[g](y) + "_autosize_tester";
    if (!$(s + testerId)[b] > 0) {
      testSubject[g](y, testerId);
      testSubject.appendTo("body");
    }
    input[t](n, minWidth);
    input[t](r, maxWidth);
    input[t](u, testerId);
    input[m](c, minWidth);
  };
  $.fn[w] = function(value, options) {
    options = jQuery[E]({
      focus: S,
      callback: x
    }, options);
    this.each(function() {
      var skipTag, f, i, id = $(this)[g](y), tagslist = $(this)[a]()[T](delimiter[id]);
      if (tagslist[0] == "") {
        tagslist = new Array;
      }
      value = jQuery.trim(value);
      if (options[N]) {
        skipTag = $(this).tagExist(value);
        if (skipTag == x) {
          $(s + id + C).addClass(k);
        }
      } else {
        skipTag = S;
      }
      if (value != "" && skipTag != x) {
        $(L).addClass("tag").append($(L).text(value).append("&nbsp;&nbsp;"), $('<a class="tagsinput-remove-link">', {
          href: s,
          title: "Remove tag",
          text: ""
        }).click(function() {
          return $(s + id)[A](escape(value));
        })).insertBefore(s + id + O);
        tagslist.push(value);
        $(s + id + C)[a]("");
        if (options[M]) {
          $(s + id + C)[M]();
        } else {
          $(s + id + C).blur();
        }
        $.fn[D][_](this, tagslist);
        if (options.callback && tags_callbacks[id] && tags_callbacks[id][P]) {
          f = tags_callbacks[id][P];
          f.call(this, value);
        }
        if (tags_callbacks[id] && tags_callbacks[id][H]) {
          i = tagslist[b];
          f = tags_callbacks[id][H];
          f.call(this, $(this), tagslist[i - 1]);
        }
      }
    });
    return S;
  };
  $.fn[A] = function(value) {
    value = unescape(value);
    this.each(function() {
      var f, id = $(this)[g](y), old = $(this)[a]()[T](delimiter[id]);
      $(s + id + B).remove();
      str = "";
      for (i = 0; i < old[b]; i++) {
        if (old[i] != value) {
          str = str + delimiter[id] + old[i];
        }
      }
      $.fn[D][j](this, str);
      if (tags_callbacks[id] && tags_callbacks[id][F]) {
        f = tags_callbacks[id][F];
        f.call(this, value);
      }
    });
    return S;
  };
  $.fn.tagExist = function(val) {
    var id = $(this)[g](y), tagslist = $(this)[a]()[T](delimiter[id]);
    return jQuery.inArray(val, tagslist) >= 0;
  };
  $.fn[j] = function(str) {
    id = $(this)[g](y);
    $(s + id + B).remove();
    $.fn[D][j](this, str);
  };
  $.fn[D] = function(options) {
    var settings = jQuery[E]({
      interactive: x,
      defaultText: "",
      minChars: 0,
      width: "",
      height: "",
      autocomplete: {
        selectFirst: S
      },
      hide: x,
      delimiter: ",",
      unique: x,
      removeWithBackspace: x,
      placeholderColor: "#666666",
      autosize: x,
      comfortZone: 20,
      inputPadding: 6 * 2
    }, options);
    this.each(function() {
      var id, data, containerClass, markup;
      if (settings.hide) {
        $(this).hide();
      }
      id = $(this)[g](y);
      if (!id || delimiter[$(this)[g](y)]) {
        id = $(this)[g](y, "tags" + (new Date).getTime())[g](y);
      }
      data = jQuery[E]({
        pid: id,
        real_input: s + id,
        holder: s + id + "_tagsinput",
        input_wrapper: s + id + O,
        fake_input: s + id + C
      }, settings);
      delimiter[id] = data.delimiter;
      if (settings[P] || settings[F] || settings[H]) {
        tags_callbacks[id] = new Array;
        tags_callbacks[id][P] = settings[P];
        tags_callbacks[id][F] = settings[F];
        tags_callbacks[id][H] = settings[H];
      }
      containerClass = $(s + id)[g]("class")[l]("tagsinput", "");
      markup = '<div id="' + id + '_tagsinput" class="tagsinput ' + containerClass + '"><div class="tagsinput-add-container" id="' + id + '_addTag"><div class="tagsinput-add"></div>';
      if (settings[I]) {
        markup = markup + '<input id="' + id + '_tag" value="" data-default="' + settings.defaultText + '" />';
      }
      markup = markup + "</div></div>";
      $(markup).insertAfter(this);
      $(data[q])[m](c, settings[c]);
      $(data[q])[m]("min-height", settings.height);
      $(data[q])[m]("height", "100%");
      if ($(data[R])[a]() != "") {
        $.fn[D][j]($(data[R]), $(data[R])[a]());
      }
      if (settings[I]) {
        $(data[U])[a]($(data[U])[g](z));
        $(data[U])[m](W, settings[X]);
        $(data[U])[p](settings);
        $(data[q])[V]("click", data, function(event) {
          $(event[t][U])[M]();
        });
        $(data[U])[V](M, data, function(event) {
          if ($(event[t][U])[a]() == $(event[t][U])[g](z)) {
            $(event[t][U])[a]("");
          }
          $(event[t][U])[m](W, "#000000");
        });
        if (settings[J] != undefined) {
          autocomplete_options = {
            source: settings[J]
          };
          for (attrname in settings[K]) {
            autocomplete_options[attrname] = settings[K][attrname];
          }
          if (jQuery.Autocompleter !== undefined) {
            $(data[U])[K](settings[J], settings[K]);
            $(data[U])[V]("result", data, function(event, data) {
              if (data) {
                $(s + id)[w](data[0] + "", {
                  focus: x,
                  unique: settings[N]
                });
              }
            });
          } else if (jQuery.ui[K] !== undefined) {
            $(data[U])[K](autocomplete_options);
            $(data[U])[V]("autocompleteselect", data, function(event, ui) {
              $(event[t][R])[w](ui.item.value, {
                focus: x,
                unique: settings[N]
              });
              return S;
            });
          }
        } else {
          $(data[U])[V]("blur", data, function(event) {
            var d = $(this)[g](z);
            if ($(event[t][U])[a]() != "" && $(event[t][U])[a]() != d) {
              if (event[t].minChars <= $(event[t][U])[a]()[b] && (!event[t][Q] || event[t][Q] >= $(event[t][U])[a]()[b])) $(event[t][R])[w]($(event[t][U])[a](), {
                focus: x,
                unique: settings[N]
              });
            } else {
              $(event[t][U])[a]($(event[t][U])[g](z));
              $(event[t][U])[m](W, settings[X]);
            }
            return S;
          });
        }
        $(data[U])[V]("keypress", data, function(event) {
          if (event.which == event[t].delimiter.charCodeAt(0) || event.which == 13) {
            event[G]();
            if (event[t].minChars <= $(event[t][U])[a]()[b] && (!event[t][Q] || event[t][Q] >= $(event[t][U])[a]()[b])) $(event[t][R])[w]($(event[t][U])[a](), {
              focus: x,
              unique: settings[N]
            });
            $(event[t][U])[p](settings);
            return S;
          } else if (event[t].autosize) {
            $(event[t][U])[e](settings);
          }
        });
        data.removeWithBackspace && $(data[U])[V](Y, function(event) {
          var last_tag, id;
          if (event.keyCode == 8 && $(this)[a]() == "") {
            event[G]();
            last_tag = $(this).closest(v).find(".tag:last").text();
            id = $(this)[g](y)[l](/_tag$/, "");
            last_tag = last_tag[l](/[\s\u00a0]+x$/, "");
            $(s + id)[A](escape(last_tag));
            $(this).trigger(M);
          }
        });
        $(data[U]).blur();
        if (data[N]) {
          $(data[U])[Y](function(event) {
            if (event.keyCode == 8 || String.fromCharCode(event.which).match(/\w+|[áéíóúÁÉÍÓÚñÑ,/]+/)) {
              $(this).removeClass(k);
            }
          });
        }
      }
    });
    return this;
  };
  $.fn[D][_] = function(obj, tagslist) {
    var id = $(obj)[g](y);
    $(obj)[a](tagslist.join(delimiter[id]));
  };
  $.fn[D][j] = function(obj, val) {
    var id, tags, f;
    $(obj)[a]("");
    id = $(obj)[g](y);
    tags = val[T](delimiter[id]);
    for (i = 0; i < tags[b]; i++) {
      $(obj)[w](tags[i], {
        focus: S,
        callback: S
      });
    }
    if (tags_callbacks[id] && tags_callbacks[id][H]) {
      f = tags_callbacks[id][H];
      f.call(obj, obj, tags[i]);
    }
  };
})(jQuery);