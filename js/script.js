var whiskerBtn = $('.whisker-menu-icon');
var whiskerMenu = $('.whisker-menu-links-container');

$(whiskerBtn).on('click', () => {
    $(whiskerMenu).toggle(500);
    $(whiskerBtn).toggleClass('rotate-90');
});