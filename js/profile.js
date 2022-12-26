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
        
        mobile();
        var WinW = $(window).width();
        if (WinW > 1024) {
        }
        else if (WinW < 1024) {

            mobile();
        }

});