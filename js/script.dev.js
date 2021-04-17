"use strict";

var whiskerBtn = $('.whisker-menu-icon');
var whiskerMenu = $('.whisker-menu-links-container');
$(whiskerBtn).on('click', function () {
  $(whiskerMenu).toggle(500);
  $(whiskerBtn).toggleClass('rotate-90');
});