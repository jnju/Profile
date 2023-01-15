jQuery(document).ready(function($){
    var bArray = [];
    var sArray = [4,6,8,10];
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    setInterval(function(){
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity' : '-=0.7'
        }, 3000, function(){
            $(this).remove()
        }
        );
    }, 350);
});

$(function() {

    $(".pc-submarine-text").children('.webPF').children('.left-right').children('.design').click(function(event) {
        $('body').css('overflow','hidden');
        $(this).parent().parent().next().next().css('display','block');
    })
    $(".pc-submarine-text").children('.buttons').children('.design').click(function(event) {
        $('body').css('overflow','hidden');
        $(this).parent().next().css('display','block');
    })
    $('.x').click(function(event) {
        $(this).parent().parent().css('display','none')
        $('body').css('overflow','visible');
    });

    function mobile() {
        $('nav').css({'position':'fixed', 'top':'-60%'});
        
        $(window).on("scroll", function (e) {
            $('.circles').css({'margin-left':'0'});
            $('nav').css({
                'border' :'2px solid $color-sub'
            });

            console.log($(document).scrollTop());
            

            if ($(document).scrollTop() < 800) {
                $('nav').stop().animate({'position':'fixed','top':'-60%'},60);
            } else if ($(document).scrollTop() > 600) {
                    $('nav').stop().animate({'position':'fixed','top':'5%'},60);
                } 
            
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
        });
    } // menu-mobile 

        function pc() {
            $('.circles').css({'margin-left':'-1300px'});
            $('nav').css({'position':'absilute', 'top':'-60%'});
            $(window).on("scroll", function (e) {

                console.log($(document).scrollTop());

                if (($(document).scrollTop() > 3250) && ($(document).scrollTop() < 5400)) {
                    $('.circles').stop().animate({'margin-left':'0'},2000);
                    setTimeout(function() {
                        $('.first-slide').stop().animate({'margin': '0'},1000);
                        $('.second-slide').stop().animate({'margin': '0'},2000);
                        $('.third-slide').stop().animate({'margin': '0'},3000);
                    }, 3000);
                } else {
                    $('.circles').css({'margin-left':'-1300px'});
                    $('.first-slide').css({'margin-top': '-1120px'});
                    $('.second-slide').css({'margin-top': '-1120px'});
                    $('.third-slide').css({'margin-top': '-1120px'});
                } 
            
                if ($(document).scrollTop() < 800) {
                    $('nav').stop().animate({'position':'fixed','top':'-60%'},60);
                } else if ($(document).scrollTop() > 600) {
                        $('nav').stop().animate({'position':'fixed','top':'5%'},60);
                    } 

                if (($(document).scrollTop() > 1450) && ($(document).scrollTop() < 2864)) {
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


        pc();
        mobile();


        $(window).resize(function () {
            var WinW = $(window).width();
            if (WinW > 1024) {
                pc();
            }
            else if (WinW < 1024) {
                // $('.circles').css({'margin-left':'0'});

                mobile();
            }
        });

});