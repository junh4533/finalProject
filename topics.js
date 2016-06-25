$(document).ready(function() {

    //slide animations
    $(window).scroll(function() {

        //animation1
        $(".slideanim").each(function() {

            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 800) {
                $(this).addClass("slideUp");
            }

        });

        //animation2
        $(".slideanim2").each(function() {

            var pos2 = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos2 < winTop + 800) {
                $(this).addClass("slideLeft");
            }

        });

        //animation3
        $(".slideanim3").each(function() {

            var pos3 = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos3 < winTop + 800) {
                $(this).addClass("slideRight");
            }

        });


        //window scroll function end
    });

    //smooth scrolling
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash; // sets var target to the link
        var $target = $(target);

        $('body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function() {
            window.location.hash = target; //scrolls to the targeted section
        });
    });


});
