$(document).ready(function () {
    $(".nav-bar").click(function () {
        $(".responsive-nav ul").toggle(400);
    });
});

$(document).ready(function () {
    $("#lightSlider").lightSlider({
        item: 1,
        rtl: true,
        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,
        speed: 1300, 
        auto: true,
        loop: true,
        slideEndAnimation: true,
        pause: 3000,

    });
});


