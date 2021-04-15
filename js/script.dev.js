"use strict";

$(document).ready(function () {
  $('a#home').next().show();
  $('a').click(function (event) {
    $('.fa-shield-alt').hide();
    $('.nav-link').removeClass('selected-nav-link');

    if ($(event.currentTarget).is('a#home')) {
      $(event.currentTarget).next().show();
      $(event.currentTarget).addClass('selected-nav-link');
    } else if ($(event.currentTarget).is('a#about')) {
      $(event.currentTarget).next().show();
      $(event.currentTarget).addClass('selected-nav-link');
    } else if ($(event.currentTarget).is('a#projects')) {
      $(event.currentTarget).next().show();
      $(event.currentTarget).addClass('selected-nav-link');
    } else if ($(event.currentTarget).is('a#clients')) {
      $(event.currentTarget).next().show();
      $(event.currentTarget).addClass('selected-nav-link');
    } else if ($(event.currentTarget).is('a#contact')) {
      $(event.currentTarget).next().show();
      $(event.currentTarget).addClass('selected-nav-link');
    }
  });
  var count = 0;
  $('.dot-link').click(function (event) {
    $('.fa-circle').removeClass('default');
    $('.slider-container').fadeOut(700);

    if ($(event.currentTarget).is('a#dot-link-1')) {
      $('.slider-container').fadeOut(700);
      $('.dot').removeClass('default');
      $('a#dot-link-1').children().addClass('default');
      $('.slider-container').delay(300).fadeIn();
      $('.slider').hide();
      $('.slider-1').show(1500);
      count = 0;
    } else if ($(event.currentTarget).is('a#dot-link-2')) {
      $('.slider-container').fadeOut(700);
      $(event.currentTarget).children().addClass('default');
      $('.dot').removeClass('default');
      $('a#dot-link-2').children().addClass('default');
      $('.slider-container').delay(300).fadeIn();
      $('.slider').hide();
      $('.slider-2').show(1500);
      count = 1;
    } else if ($(event.currentTarget).is('a#dot-link-3')) {
      $(event.currentTarget).children().addClass('default');
      $('.dot').removeClass('default');
      $('a#dot-link-3').children().addClass('default');
      $('.slider-container').delay(300).fadeIn();
      $('.slider').hide();
      $('.slider-3').show(1500);
      count = 2;
    }
  });
  $('.cycle-btns').click(function (event) {
    if ($(event.currentTarget).is('a.next-btn-link')) {
      count++;
    } else if ($(event.currentTarget).is('a.prev-btn-link')) {
      count--;
    }

    if (count > 2) {
      count = 0;
    } else if (count < 0) {
      count = 2;
    }

    if (count > -1 || count < 3) {
      $('.slider-container').fadeOut(700);

      if (count === 0) {
        $('.dot').removeClass('default');
        $('a#dot-link-1').children().addClass('default');
        $('.slider-container').delay(300).fadeIn();
        $('.slider').hide();
        $('.slider-1').show(1500);
        $('a#dot-link-1').children().addClass('default');
      } else if (count === 1) {
        $('.dot').removeClass('default');
        $('a#dot-link-2').children().addClass('default');
        $('.slider-container').delay(300).fadeIn();
        $('.slider').hide();
        $('.slider-2').show(1500);
        $('a#dot-link-2').children().addClass('default');
      } else if (count === 2) {
        $('.dot').removeClass('default');
        $('a#dot-link-3').children().addClass('default');
        $('.slider-container').delay(300).fadeIn();
        $('.slider').hide();
        $('.slider-3').show(1500);
        $('a#dot-link-3').children().addClass('default');
      }
    }
  });
  $('.title').delay(1000).slideDown(2000);
  $('.logo-container').addClass('hidden').delay(3000).slideDown(1000);
  $('.leader-title').delay(4000).fadeIn(2000);
  $('.slider-container').addClass('hidden').delay(6000).fadeIn(2000);
  $('.dot-container').addClass('hidden').delay(8000).slideDown(1000);
  $('.nav ul').addClass('hidden').delay(9000).fadeIn(2000);
});