$(window).on("scroll", function () {
    var height = $(window).height;
    if ($(window).scrollTop() > height) {
        $('.title').addClass('hide');
    } else {
        $('.title').removeClass('hide');
    }
});

