var whiskerBtn = $('.whisker-menu-icon');
var whiskerMenu = $('.whisker-menu-links-container');
var bigNavLink = $('.top-navbar-link');
var smallNavLink = $('.whisker-menu-link');
var showShieldTop = $('.tls');
var showShieldW = $('.wms');



$(window).resize(() => {
    if ($(window).width() > 470) {
        $(whiskerMenu).hide();
        $(whiskerBtn).removeClass('rotate-90');
    }

}).resize();


$(whiskerBtn).on('click', () => {
    $(whiskerMenu).toggle(500);
    $(whiskerBtn).toggleClass('rotate-90');
});

$(bigNavLink).on('click', (event) => {
    $(bigNavLink).removeClass('is-active');
    $(event.currentTarget).addClass('is-active');
})

$(smallNavLink).on('click', (event) => {
    $(smallNavLink).removeClass('is-active');
    $(event.currentTarget).addClass('is-active');
})

$(bigNavLink).click((event) => {
    $(showShieldTop).hide();
    $(showShieldW).hide();
    $(smallNavLink).removeClass('is-active');
    if ($(event.currentTarget).hasClass('tl1')) {
        $(event.currentTarget).children().show();
        $('.wm1').addClass('is-active');
        $('.ws1').show();
    } else if ($(event.currentTarget).hasClass('tl2')) {
        $(event.currentTarget).children().show();
        $('.wm2').addClass('is-active');
        $('.ws2').show();
    } else if ($(event.currentTarget).hasClass('tl3')) {
        $(event.currentTarget).children().show();
        $('.wm3').addClass('is-active');
        $('.ws3').show();
    } else if ($(event.currentTarget).hasClass('tl4')) {
        $(event.currentTarget).children().show();
        $('.wm4').addClass('is-active');
        $('.ws4').show();
    } else if ($(event.currentTarget).hasClass('tl5')) {
        $(event.currentTarget).children().show();
        $('.wm5').addClass('is-active');
        $('.ws5').show();
    }
})

$(smallNavLink).click((event) => {
    $(showShieldW).hide();
    $(showShieldTop).hide();
    $(bigNavLink).removeClass('is-active');
    if ($(event.currentTarget).hasClass('wm1')) {
        $(event.currentTarget).children().show();
        $('.tl1').addClass('is-active');
        $('.ts1').show();
    } else if ($(event.currentTarget).hasClass('wm2')) {
        $(event.currentTarget).children().show();
        $('.tl2').addClass('is-active');
        $('.ts2').show();
    } else if ($(event.currentTarget).hasClass('wm3')) {
        $(event.currentTarget).children().show();
        $('.tl3').addClass('is-active');
        $('.ts3').show();
    } else if ($(event.currentTarget).hasClass('wm4')) {
        $(event.currentTarget).children().show();
        $('.tl4').addClass('is-active');
        $('.ts4').show();
    } else if ($(event.currentTarget).hasClass('wm5')) {
        $(event.currentTarget).children().show();
        $('.tl5').addClass('is-active');
        $('.ts5').show();
    }
})