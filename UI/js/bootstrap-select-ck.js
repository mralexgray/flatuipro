!function($) {
  var t = "$newElement", n = "$element", r = "selected", s = "options", o = "option", u = "find", a = "selectpicker", f = "addClass", l = "length", c = "stopPropagation", h = "button", p = "select", d = "parent", v = "preventDefault", m = "multiple", g = ":disabled", y = ".dropdown-menu", b = '<div class="divider"></div>', w = "title", E = "auto", S = "attr", x = "width", T = ".select", N = "subtext", C = "disabled", k = '<small class="muted">', L = null, A = "class", O = "li", M = "option:selected", _ = "DOMNodeInserted", D = "removeClass", P = true, H = "outerHeight", B = "render", j = "data", F = ".filter-option", I = "createA", q = "click", R = "menuStyle", U = "prototype", z = "change", W = "opt ", X = "selectedTextFormat", V = "</small>", J = "divider", K = "object", Q = "css", G = "push", Y = "size", Z = "index", et = "tabindex", Selectpicker = function(element, options, e) {
    if (e) {
      e[c]();
      e[v]();
    }
    this[n] = $(element);
    this[t] = L;
    this[h] = L;
    this[s] = $.extend({}, $.fn[a].defaults, this[n][j](), typeof options == K && options);
    if (this[s][w] == L) this[s][w] = this[n][S](w);
    this.val = Selectpicker[U].val;
    this[B] = Selectpicker[U][B];
    this.init();
  };
  Selectpicker[U] = {
    constructor: Selectpicker,
    init: function() {
      var classList, id, select, menu, menuArrow, menuA, liHeight, divHeight, selectOffset_top, size, menuHeight, selectHeight, i, menuPadding, optIndex, divLength, _this = this;
      this[n].hide();
      this[m] = this[n].prop(m);
      classList = this[n][S](A) !== undefined ? this[n][S](A).split(/\s+/) : "";
      id = this[n][S]("id");
      this[n].after(this.createView());
      this[t] = this[n].next(T);
      select = this[t];
      menu = this[t][u](y);
      menuArrow = this[t][u](".dropdown-arrow");
      menuA = menu[u]("li > a");
      liHeight = select[f]("open")[u](".dropdown-menu li > a")[H]();
      select[D]("open");
      divHeight = menu[u]("li .divider")[H](P);
      selectOffset_top = this[t].offset().top;
      size = 0;
      menuHeight = 0;
      selectHeight = this[t][H]();
      this[h] = this[t][u]("> button");
      if (id !== undefined) {
        this[h][S]("id", id);
        $('label[for="' + id + '"]')[q](function() {
          select[u]("button#" + id).focus();
        });
      }
      for (i = 0; i < classList[l]; i++) {
        if (classList[i] != a) {
          this[t][f](classList[i]);
        }
      }
      if (this[m]) {
        this[t][f]("select-multiple");
      }
      this[h][f](this[s].style);
      menu[f](this[s][R]);
      menuArrow[f](function() {
        if (_this[s][R]) {
          return _this[s][R].replace("dropdown-", "dropdown-arrow-");
        }
      });
      this.checkDisabled();
      this.checkTabIndex();
      this.clickListener();
      menuPadding = parseInt(menu[Q]("padding-top")) + parseInt(menu[Q]("padding-bottom")) + parseInt(menu[Q]("border-top-width")) + parseInt(menu[Q]("border-bottom-width"));
      if (this[s][Y] == E) {
        function getSize() {
          var selectOffset_top_scroll = selectOffset_top - $(window).scrollTop(), windowHeight = window.innerHeight, menuExtras = menuPadding + parseInt(menu[Q]("margin-top")) + parseInt(menu[Q]("margin-bottom")) + 2, selectOffset_bot = windowHeight - selectOffset_top_scroll - selectHeight - menuExtras;
          menuHeight = selectOffset_bot;
          if (select.hasClass("dropup")) {
            menuHeight = selectOffset_top_scroll - menuExtras;
          }
          menu[Q]({
            "max-height": menuHeight + "px",
            "overflow-y": E,
            "min-height": liHeight * 3 + "px"
          });
        }
        getSize();
        $(window).resize(getSize);
        $(window).scroll(getSize);
        this[n].bind(_, getSize);
      } else if (this[s][Y] && this[s][Y] != E && menu[u](O)[l] > this[s][Y]) {
        optIndex = menu[u]("li > *").filter(":not(.divider)").slice(0, this[s][Y]).last()[d]()[Z]();
        divLength = menu[u](O).slice(0, optIndex + 1)[u](".divider")[l];
        menuHeight = liHeight * this[s][Y] + divLength * divHeight + menuPadding;
        menu[Q]({
          "max-height": menuHeight + "px",
          "overflow-y": "scroll"
        });
      }
      this[n].bind(_, $.proxy(this.reloadLi, this));
      this[B]();
    },
    createDropdown: function() {
      var drop = "<div class='btn-group select'>" + "<i class='dropdown-arrow'></i>" + "<button class='btn dropdown-toggle clearfix' data-toggle='dropdown'>" + "<span class='filter-option pull-left'></span>&nbsp;" + "<span class='caret'></span>" + "</button>" + "<ul class='dropdown-menu' role='menu'>" + "</ul>" + "</div>";
      return $(drop);
    },
    createView: function() {
      var $drop = this.createDropdown(), $li = this.createLi();
      $drop[u]("ul").append($li);
      return $drop;
    },
    reloadLi: function() {
      this.destroyLi();
      $li = this.createLi();
      this[t][u]("ul").append($li);
      this[B]();
    },
    destroyLi: function() {
      this[t][u](O).remove();
    },
    createLi: function() {
      var i, $option, _this = this, _li = [], _liA = [], _liHtml = "";
      this[n][u](o).each(function() {
        _li[G]($(this).text());
      });
      this[n][u](o).each(function() {
        var label, labelSubtext, optionClass = $(this)[S](A) !== undefined ? $(this)[S](A) : "", text = $(this).text(), subtext = $(this)[j](N) !== undefined ? k + $(this)[j](N) + V : "";
        text += subtext;
        if ($(this)[d]().is("optgroup") && $(this)[j](J) != P) {
          if ($(this)[Z]() == 0) {
            label = $(this)[d]()[S]("label");
            labelSubtext = $(this)[d]()[j](N) !== undefined ? k + $(this)[d]()[j](N) + V : "";
            label += labelSubtext;
            if ($(this)[0][Z] != 0) {
              _liA[G](b + "<dt>" + label + "</dt>" + _this[I](text, W + optionClass));
            } else {
              _liA[G]("<dt>" + label + "</dt>" + _this[I](text, W + optionClass));
            }
          } else {
            _liA[G](_this[I](text, W + optionClass));
          }
        } else if ($(this)[j](J) == P) {
          _liA[G](b);
        } else {
          _liA[G](_this[I](text, optionClass));
        }
      });
      if (_li[l] > 0) {
        for (i = 0; i < _li[l]; i++) {
          $option = this[n][u](o).eq(i);
          _liHtml += "<li rel=" + i + ">" + _liA[i] + "</li>";
        }
      }
      if (this[n][u](M)[l] == 0 && !_this[s][w]) {
        this[n][u](o).eq(0).prop(r, P)[S](r, r);
      }
      return $(_liHtml);
    },
    createA: function(test, classes) {
      return '<a tabindex="-1" href="#" class="' + classes + '">' + '<span class="pull-left">' + test + "</span>" + "</a>";
    },
    render: function() {
      var ulWidth, selectedItems, title, max, _this = this;
      if (this[s][x] == E) {
        ulWidth = this[t][u](y)[Q](x);
        this[t][Q](x, ulWidth);
      } else if (this[s][x] && this[s][x] != E) {
        this[t][Q](x, this[s][x]);
      }
      this[n][u](o).each(function(index) {
        _this.setDisabled(index, $(this).is(g) || $(this)[d]().is(g));
        _this.setSelected(index, $(this).is(":selected"));
      });
      selectedItems = this[n][u](M).map(function(index, value) {
        if ($(this)[S](w) != undefined) {
          return $(this)[S](w);
        } else {
          return $(this).text();
        }
      }).toArray();
      title = selectedItems.join(", ");
      if (_this[m] && _this[s][X].indexOf("count") > -1) {
        max = _this[s][X].split(">");
        if (max[l] > 1 && selectedItems[l] > max[1] || max[l] == 1 && selectedItems[l] >= 2) {
          title = selectedItems[l] + " of " + this[n][u](o)[l] + " selected";
        }
      }
      if (!title) {
        title = _this[s][w] != undefined ? _this[s][w] : _this[s].noneSelectedText;
      }
      this[n].next(T)[u](F).html(title);
    },
    setSelected: function(index, selected) {
      if (selected) {
        this[t][u](O).eq(index)[f](r);
      } else {
        this[t][u](O).eq(index)[D](r);
      }
    },
    setDisabled: function(index, disabled) {
      if (disabled) {
        this[t][u](O).eq(index)[f](C);
      } else {
        this[t][u](O).eq(index)[D](C);
      }
    },
    checkDisabled: function() {
      if (this[n].is(g)) {
        this[h][f](C);
        this[h][q](function(e) {
          e[v]();
        });
      }
    },
    checkTabIndex: function() {
      var tabindex;
      if (this[n].is("[tabindex]")) {
        tabindex = this[n][S](et);
        this[h][S](et, tabindex);
      }
    },
    clickListener: function() {
      var _this = this;
      $("body").on("touchstart.dropdown", y, function(e) {
        e[c]();
      });
      this[t].on(q, "li a", function(e) {
        var selected, clickedIndex = $(this)[d]()[Z](), $this = $(this)[d](), $select = $this.parents(T);
        if (_this[m]) {
          e[c]();
        }
        e[v]();
        if ($select.prev(p).not(g) && !$(this)[d]().hasClass(C)) {
          if (!_this[m]) {
            $select.prev(p)[u](o).removeAttr(r);
            $select.prev(p)[u](o).eq(clickedIndex).prop(r, P)[S](r, r);
          } else {
            selected = $select.prev(p)[u](o).eq(clickedIndex).prop(r);
            if (selected) {
              $select.prev(p)[u](o).eq(clickedIndex).removeAttr(r);
            } else {
              $select.prev(p)[u](o).eq(clickedIndex).prop(r, P)[S](r, r);
            }
          }
          $select[u](F).html($this.text());
          $select[u](h).focus();
          $select.prev(p).trigger(z);
        }
      });
      this[t].on(q, "li.disabled a, li dt, li .divider", function(e) {
        e[v]();
        e[c]();
        $select = $(this)[d]().parents(T);
        $select[u](h).focus();
      });
      this[n].on(z, function() {
        _this[B]();
      });
    },
    val: function(value) {
      if (value != undefined) {
        this[n].val(value);
        this[n].trigger(z);
        return this[n];
      } else {
        return this[n].val();
      }
    }
  };
  $.fn[a] = function(option, event) {
    var value, args = arguments, chain = this.each(function() {
      var $this = $(this), data = $this[j](a), options = typeof option == K && option;
      if (!data) {
        $this[j](a, data = new Selectpicker(this, options, event));
      } else {
        for (var i in option) {
          data[i] = option[i];
        }
      }
      if (typeof option == "string") {
        property = option;
        if (data[property] instanceof Function) {
          [].shift.apply(args);
          value = data[property].apply(data, args);
        } else {
          value = data[property];
        }
      }
    });
    if (value != undefined) {
      return value;
    } else {
      return chain;
    }
  };
  $.fn[a].defaults = {
    style: L,
    size: E,
    title: L,
    selectedTextFormat: "values",
    noneSelectedText: "Nothing selected",
    width: L,
    menuStyle: L,
    toggleSize: L
  };
}(window.jQuery);