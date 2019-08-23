$(".profile-img").css("display", "none").addClass("bounce infinite fast");


$(document).ready(function () {
    $('.sidenav').sidenav(); // Materialize sidenav

    $(".about-div").css("display", "");
    $(".portfolio-div").css("display", "none");
    $(".contact-div").css("display", "none");

    //Click events for nav bar links
    function resetClasses() {

        setTimeout(
            () => {
                $(".about-div").removeClass("animated fadeIn fadeOut fast");
                $(".portfolio-div").removeClass("animated fadeIn fadeOut fast");
                $(".contact-div").removeClass("animated fadeIn fadeOut fast");
            }, 800);
    }

    let aboutClicked = true;
    let portfolioClicked = false;
    let contactClicked = false;

    $(".about").on("click", function () {
        $(".about-div").css("display", "").addClass("animated fadeIn fast");
        $(".portfolio-div").css("display", "none").addClass("animated fadeOut fast");
        $(".contact-div").css("display", "none").addClass("animated fadeOut fast");
        resetClasses();
    });
    $(".portfolio").on("click", function () {
        $(".about-div").css("display", "none").addClass("animated fadeOut fast");
        $(".portfolio-div").css("display", "").addClass("animated fadeIn fast");
        $(".contact-div").css("display", "none").addClass("animated fadeOut fast");
        resetClasses();
    });
    $(".contact").on("click", function () {
        $(".about-div").css("display", "none");
        $(".portfolio-div").css("display", "none");
        $(".contact-div").css("display", "");
    })
});