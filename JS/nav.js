$(document).ready(function () {
    var previousScroll = 0;

    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();

        if (currentScroll > previousScroll) {
            // Scrolling down, hide the header
            $("header").addClass("invisible");
        } else {
            // Scrolling up, show the header
            $("header").removeClass("invisible");
        }

        previousScroll = currentScroll;
    });
});
