$(function() {
    $('.ob1').mouseover(function() {
        $(this).children().stop().animate({'opacity':'1'}, 300);
    });

    $('.ob1').mouseout(function() {
        $(this).children().stop().css({'opacity':'0'});
    });


    $('.ob2').mouseover(function() {
        $(this).children().stop().animate({'opacity':'1'}, 300);
    });

    $('.ob2').mouseout(function() {
        $(this).children().stop().css({'opacity':'0'});
    });


    $('.ob3').mouseover(function() {
        $(this).css({'margin-left':'0px'})
        $(this).children().stop().animate({'opacity':'1'}, 300);
    });

    $('.ob3').mouseout(function() {
        $(this).css({'margin-left':'-430px'})
        $(this).children().stop().css({'opacity':'0'});
    })

    $('.top').mouseover(function() {
        $(this).next().stop().animate({'opacity':'1'}, 300);
    });

    $('.top').mouseout(function() {
        $(this).next().stop().css({'opacity':'0'});
    })

    setInterval(function() {
        $('.top').animate({'top':"190px"});
        $('.top').animate({'top':"195px"});

    });

    $('.next_sign1').click(function() {
        $(this).parent().parent().parent().parent().stop().animate({'margin-left':'-1900px'},1000);
    });

    $('.prev_sign1').click(function() {
        $(this).parent().parent().parent().parent().parent().parent().stop().animate({'margin-left':'0px'},1000);
    });

    $('.nomnom')
    .mouseover(function() {
        $('.other-img').attr('src','img/nomnom.gif');
        $('.other-img').css('width','250px');
    });

    $('.charlie')
    .mouseover(function() {
        $('.other-img').attr('src','img/charlie.gif');
        $('.other-img').css('width','180px');
    });

    $('.chloe')
    .mouseover(function() {
        $('.other-img').attr('src','img/chloe.png');
        $('.other-img').css('width','180px');
    });

    $('.yuri')
    .mouseover(function() {
        $('.other-img').attr('src','img/yuri.gif');
        $('.other-img').css('width','300px');
    });

    $('.tabes')
    .mouseover(function() {
        $('.other-img').attr('src','img/tabes.gif');
        $('.other-img').css('width','230px');
    });

    $('.ralph')
    .mouseover(function() {
        $('.other-img').attr('src','img/Ralph.gif');
        $('.other-img').css('width','260px');
    });
});