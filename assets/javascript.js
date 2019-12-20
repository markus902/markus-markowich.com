$(document).ready(function () {

    //detection if links on top are in viewport
    function isOnScreen(elem) {
        // if the element doesn't exist, abort
        if (elem.length == 0) {
            return;
        }
        var $window = jQuery(window)
        var viewport_top = $window.scrollTop()
        var viewport_height = $window.height()
        var viewport_bottom = viewport_top + viewport_height
        var $elem = jQuery(elem)
        var top = $elem.offset().top
        var height = $elem.height()
        var bottom = top + height

        return (top >= viewport_top && top < viewport_bottom) ||
            (bottom > viewport_top && bottom <= viewport_bottom) ||
            (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    }

    window.addEventListener('scroll', function (e) {
        if (isOnScreen(jQuery('#top-nav'))) {

            $("#nav").removeClass("top-nav-change animated fadeInDown").addClass("nav");
        } else {
            $("#nav").removeClass("nav").addClass("top-nav-change animated fadeInDown");
        }
    });

    window.addEventListener('scroll', function (e) {
        if (isOnScreen(jQuery('.skill-list'))) {

            $(".fab").addClass("animated flipInX");
        } else {
            $(".fab").removeClass("animated flipInX");
        }
    });

    // hover effects for links on top
    $(".nav-li").on("mouseover", function () {
        $(this).css({
            "background": "#DFE9F3",
            "color": "#355E82"
        });
    }).on("mouseout", function () {
        $(this).css({
            "background": "",
            "color": "grey"
        });
    });

    //anchors

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        )
    })
});