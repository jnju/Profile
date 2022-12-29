$(function() {
    function mobile() {
        $('nav').css({'position':'absilute', 'top':'-60%'});
        $(window).on("scroll", function (e) {
            console.log($(document).scrollTop());
            
            if ($(document).scrollTop() < 800) {
                $('nav').stop().animate({'position':'fixed','top':'-60%'},60);
            } else if ($(document).scrollTop() > 600) {
                    $('nav').stop().animate({'position':'fixed','top':'5%'},60);
                } 
            });
            
            $(".ABOUT").click(function(event){            
                event.preventDefault();
                $('html,body').stop().animate({scrollTop: 850}, 800);
            });
            $(".SKILLS").click(function(event){            
                event.preventDefault();
                $('html,body').stop().animate({scrollTop: 2200}, 800);
            });
            $(".PORTFOLIO").click(function(event){            
                event.preventDefault();
                $('html,body').stop().animate({scrollTop: 3900}, 800);
            });
            $(".CONTACT").click(function(event){            
                event.preventDefault();
                $('html,body').stop().animate({scrollTop: 7600}, 800);
            });
            // menu-mobile 
        }

        function pc() {
            $('nav').css({'position':'absilute', 'top':'-60%'});
            $(window).on("scroll", function (e) {
            console.log($(document).scrollTop());
            
            if ($(document).scrollTop() < 800) {
                $('nav').stop().animate({'position':'fixed','top':'-60%'},60);
            } else if ($(document).scrollTop() > 600) {
                    $('nav').stop().animate({'position':'fixed','top':'5%'},60);
                } 

                if (($(document).scrollTop() > 2050) && ($(document).scrollTop() < 2864)) {
                    $('.random-move1').stop().animate({'left': '115%'}, 3000);
                    $('.random-move2').stop().animate({'left': '100%'}, 3000);
                    $('.random-move3').stop().animate({'left': '95%'}, 3000);
                    $('.random-move4').stop().animate({'left': '105%'}, 3000);

                } else {
                    $('.boat').stop().animate({'left': '0'});
                } 

                if (($(document).scrollTop() > 5200) && ($(document).scrollTop() < 6600)) {
                    $('.first-turtle').stop().animate({'left': '-90%'}, 3000);
                    $('.second-turtle').stop().animate({'left': '135%'}, 3000);
                } else {
                    $('.first-turtle').css({'left': '32%'});
                    $('.second-turtle').css({'left': '32%'});
                } 
            });

            $(".ABOUT").click(function(event){            
                event.preventDefault();
                $('html,body').stop().animate({scrollTop: 1050}, 800);
            });
            $(".SKILLS").click(function(event){            
                event.preventDefault();
                $('html,body').stop().animate({scrollTop: 2300}, 800);
            });
            $(".PORTFOLIO").click(function(event){            
                event.preventDefault();
                $('html,body').stop().animate({scrollTop: 3800}, 800);
            });
            $(".CONTACT").click(function(event){            
                event.preventDefault();
                $('html,body').stop().animate({scrollTop: 7200}, 800);
            });

            
        }

        

        mobile();
        pc();

        var WinW = $(window).width();
        if (WinW > 1024) {
            pc();
        }
        else if (WinW < 1024) {
            mobile();
        }

});