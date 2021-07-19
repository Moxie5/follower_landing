$(document).ready(function() {
    /*====================
    *   Animated burger mobile menu
    * ====================*/
    $('.burger').on('click', function () {
        $(this).toggleClass('toggle');
        $('.nav-links li').each(function (index, value) {
            $(value).toggleClass('toggle-li').css({'transition-delay':(index - 1)/10+'s'});
        });
    });
    /*====================
    *   Back to top
    * ====================*/
    $('.to-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
    /*====================
    *   TESTIMONIALS
    * ====================*/
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        autoplay:true
    });
    /*====================
    *   FAQ ACCORDION
    * ====================*/
    $("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
        $(e.target)
        .prev()
        .find("i:last-child")
        .toggleClass("fa-minus fa-plus");
    });
});