var whiskerBtn = $('.whisker-menu-icon');
var whiskerMenu = $('.whisker-menu-links-container');
var bigNavLink = $('.top-navbar-link');
var smallNavLink = $('.whisker-menu-link');
var showShieldTop = $('.tls');
var showShieldW = $('.wms');
var card1 = $('.card-1-container');
var card2 = $('.card-2-container');
var card3 = $('.card-3-container');
var p1 = $('.p1');
var p2 = $('.p2');
var p3 = $('.p3');
var learnMore = $('.learn-more-icon-container');
var mainTitle = $('.main-title-container');


$(window).resize(() => {
    if ($(window).width() > 470) {
        $(whiskerMenu).hide();
        $(whiskerBtn).removeClass('rotate-90');
    };

}).resize();


$(whiskerBtn).on('click', () => {
    $(whiskerMenu).toggle(500);
    $(whiskerBtn).toggleClass('rotate-90');
});

$(bigNavLink).on('click', (event) => {
    $(bigNavLink).removeClass('is-active');
    $(event.currentTarget).addClass('is-active');
});

$(smallNavLink).on('click', (event) => {
    $(smallNavLink).removeClass('is-active');
    $(event.currentTarget).addClass('is-active');
});

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
});

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
});

$(window).on('load', () => {
    $(mainTitle).delay(2000).fadeIn(3000)
    $(card1).delay(5000).fadeIn(3000);
    $(card2).delay(8000).fadeIn(3000);
    $(card3).delay(11000).fadeIn(3000);
});

// if($('.cp1').is(!'visible:')){
//     $('.fsd1').removeClass('rotate-180');
// }

// if($('.cp2').is(!'visible:')){
//     $('.fsd2').removeClass('rotate-180');
// }

// if($('.cp3').is(!'visible:')){
//     $('.fsd3').removeClass('rotate-180');
// }



$(learnMore).on('click', (event) => {
    // $('.fa-sort-down').removeClass('rotate-180');
    $('.cp').hide();
    if($(event.currentTarget).hasClass('p1')) {
        $('.card-1-container').toggleClass('mh208');
        $('.card-2-container').addClass('mh208');
        $('.card-3-container').addClass('mh208');
        $('.card-1-p').show();
        $('.card-2-p').hide();
        $('.card-3-p').hide();
        $('.fsd1').toggleClass('rotate-180');
        // $('.fsd2').removeClass('rotate-180');
        // $('.fsd3').removeClass('rotate-180');
    }
    else if($(event.currentTarget).hasClass('p2')) {
        $('.card-2-container').toggleClass('mh208');
        $('.card-1-container').addClass('mh208');
        $('.card-3-container').addClass('mh208');
        $('.card-2-p').toggle();
        $('.card-1-p').hide();
        $('.card-3-p').hide();
        $('.fsd2').toggleClass('rotate-180');
        // $('.fsd1').removeClass('rotate-180');
        // $('.fsd3').removeClass('rotate-180');
    }
    else if($(event.currentTarget).hasClass('p3')) {
        $('.card-3-container').toggleClass('mh208');
        $('.card-2-container').addClass('mh208');
        $('.card-1-container').addClass('mh208');
        $('.card-3-p').toggle();
        $('.card-2-p').hide();
        $('.card-1-p').hide();
        $('.fsd3').toggleClass('rotate-180');
        // $('.fsd2').removeClass('rotate-180');
        // $('.fsd1').removeClass('rotate-180');
    }
    else {
        $('.fsd1').removeClass('rotate-180');
        $('.fsd2').removeClass('rotate-180');
        $('.fsd3').removeClass('rotate-180');
    }
});
// if($('.cc').is('visible:')) {
//     $('.fsd1').addClass('rotate-180');
// }

if($(window).width() > 600) {
    $('.cp').show();
}
// $('.fa-sort-down').show();
// if($('.card-1-container').hasClass('mh208')) {
    // $('.fa-sort-down').hide();
    // $('.fa-sort-up').hide();


// } 
// else {
//     $('.fa-sort-up').show();
    // $('.fa-sort-down').hide();
// }