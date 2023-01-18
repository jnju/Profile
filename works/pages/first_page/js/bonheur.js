$(function() {
    $('a').on("click",function(e){
        e.preventDefault();
    });
    $(window).on("scroll", function (e) {
        console.log($(document).scrollTop());

        if ($(document).scrollTop() > 1100) {
            $('nav').css({'position': 'fixed', 'top':'70px', 'margin-top':'0'});
        }
        else {
            $('nav').css({'position': 'relative', 'margin-top': '-70px'});
        }
    });

    $('.likelist').children('.heart-box').click(function() {
        $(this).children('.heart').css('display','none');
        $(this).parent().css({'display':'none'});
    });

    $('.typeboxes').children('.box1').mouseover(function() {
        $(this).next().children().css({
            'display': 'block',
            'z-index': '2'
        });
        $('.for-course-box').html(' ');
    })
    .mouseout(function() {
        $(this).next().children().css({
            'display': 'none'
        });
        $('.for-course-box').html('추천 코스에 마우스를 올려보세요!');
    });

    $('.typeboxes').children('.box2').mouseover(function() {
        $(this).next().children().css({
            'display': 'block',
            'z-index': '2'
        });
        $('.for-course-box').html(' ');
    })
    .mouseout(function() {
        $(this).next().children().css({
            'display': 'none'
        });
        $('.for-course-box').html('추천 코스에 마우스를 올려보세요!');
    });

    $('.typeboxes').children('.box3').mouseover(function() {
        $(this).next().children().css({
            'display': 'block',
            'z-index': '2'
        });
        $('.for-course-box').html(' ');
    })
    .mouseout(function() {
        $(this).next().children().css({
            'display': 'none'
        });
        $('.for-course-box').html('추천 코스에 마우스를 올려보세요!');
    });

    $('.typeboxes').children('.box4').mouseover(function() {
        $(this).next().children().css({
            'display': 'block',
            'z-index': '2'
        });
        $('.for-course-box').html(' ');
    })
    .mouseout(function() {
        $(this).next().children().css({
            'display': 'none'
        });
        $('.for-course-box').html('추천 코스에 마우스를 올려보세요!');
    });
});