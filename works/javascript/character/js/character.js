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

    $('.nomnom').parent()
    .mouseover(function() {
        $('.other-img').attr('src','img/nomnom.gif');
        $('.other-img').css('width','250px');
        $('.other-text').html('인터넷에 자신의 귀여운 모습을 찍은 영상으로 수많은 팔로워를 거느리고 있는 인터넷 스타 코알라로 이로 인해 엄청난 부를 축적하고 있어요. 그러나 귀여운 겉모습과 달리 이기적인 성격입니다. 자신의 야욕을 위해 곰들을 이용하고 쓸모가 없어지거나 방해가 되면 등 돌립니다. 매스컴에서 귀여운 모습으로 연기를 함으로써 인기를 유지해서인지 상당한 관심종자이기도 해요.');
        $('.other-episode-url').attr('href', 'https://www.youtube.com/watch?v=cG9jwtqeTXE');
    });

    $('.charlie').parent()
    .mouseover(function() {
        $('.other-img').attr('src','img/charlie.gif');
        $('.other-img').css('width','180px');
        $('.other-text').html('오랜 시간 동안 숲속에 혼자 살아 고독함을 느끼며 친구들을 사귀고 싶어 해요. 하지만 인간들에게 다가가기엔 자신의 정체가 들킬까 두렵고, 숲속의 동물들은 자신과 말이 안 통하고, 유일하게 말이 통하는 곰들을 자신의 친구로 생각해 곰들의 동굴에 자주 놀러 와요. 수다스럽고 눈치가 없어서 곰들이 가끔 귀찮아하지만 마음씨 자체는 따뜻해서 친구가 안 좋은 일이 있을 때면 무슨 일이냐며 고민을 들어주기도 합니다.');
        $('.other-episode-url').attr('href', 'https://www.youtube.com/watch?v=Rk5wyDVcviM');

    });

    $('.chloe').parent()
    .mouseover(function() {
        $('.other-img').attr('src','img/chloe.png');
        $('.other-img').css('width','160px');
        $('.other-text').html('10살의 어린 나이에 대학생이 되었을 정도의 굉장한 천재로, 또래들과 달리 휴대전화를 들여다보는 것보다 연구 공책에 뭔가를 적는 걸 더 좋아하고 학교 첫 주에 교과서를 전부 읽어버릴 정도로 학구열이 굉장합니다. 대학교에서 유일한 어린이인 탓에 낯을 많이 가려서 사람보다 주로 곰 삼 형제와 시간을 자주 보내요. 그 때문인지 동물 세계에 관해서는 빠삭하지만 인간 사회에서 일어나는 일들을 종종 이해하지 못해요.');
        $('.other-episode-url').attr('href', 'https://www.youtube.com/watch?v=0qadvl7n53A');
    });

    $('.yuri').parent()
    .mouseover(function() {
        $('.other-img').attr('src','img/yuri.gif');
        $('.other-img').css('width','270px');
        $('.other-text').html('음식 냄새를 맡고 천막에 몰래 들어온 어린 아이스 베어와 만나면서 아이스 베어에게 도끼 다루는 법, 요리, 정비기술 그리고 언어 등을 가르쳐주며 가깝게 지냈지만 아이스 베어가 숨겨놨던 가족들의 물건 중 실수로 가족사진의 액자를 깨뜨리자, 자신의 비밀을 파헤친 것에 유리는 화를 내며 아이스 베어를 쫓아냈어요. 이후 쫓겨난 아이스 베어가 덫에 걸리자 구해주지만 밀렵꾼들의 추격으로 어쩔 수 없이 아이스 베어와 헤어지게 됩니다. ');
        $('.other-episode-url').attr('href', 'https://www.youtube.com/watch?v=D0gQ1ZTOWhg');

    });

    $('.tabes').parent()
    .mouseover(function() {
        $('.other-img').attr('src','img/tabes.gif');
        $('.other-img').css('width','230px');
        $('.other-text').html('키와 몸집이 크고 얼굴에 주근깨가 있으며 연한 적갈색 머리색을 지니고 있어요. 파크 레인저 소속이다 보니 베이지색 계통의 레인저 복장과 모자를 착용하고 다닙니다. 활발하고 적극적인 성격을 지니고 있으며 매사에 정의감을 가지며 활동해요. 또한 자연과 동물들을 매우 사랑하는 성격의 인물이랍니다.');
        $('.other-episode-url').attr('href', 'https://www.youtube.com/watch?v=2ZbwZUJmvhQ&t=26s');
    });

    $('.ralph').parent()
    .mouseover(function() {
        $('.other-img').attr('src','img/Ralph.gif');
        $('.other-img').css('width','200px');
        $('.other-text').html(' 빅풋인 찰리와 친척 관계라고 할 수 있는 예티입니다. 찰리는 남을 구해주는 등 따뜻한 면모를 보여주는 반면에, 랄프는 남을 겁주고 남이 고통스러워하는 거에 즐거움을 느끼는 캐릭터에요. 찰리는 랄프를 처음 만났을 때 자신과 닮은 생명체가 또 있었단 사실과 사람들 앞에서 기죽지 않는 모습에 그와 친해지고 닮아가려 하며 이때 랄프의 행동을 지적하는 곰들을 비난했지만, 얼마 안 가 랄프가 사람들을 해치려 하면서 죄책감을 안 느끼고 당연시하는 모습에 실망해요. ');
        $('.other-episode-url').attr('href', 'https://www.youtube.com/watch?v=9hbek0VgwSI');
    });

    $('.video-btn img')
    .mouseover(function() {
        $('.video-btn img').attr('src','img/video-btn.gif');
        $('.btn-desc').css('display','block');
    }).mouseout(function() {
        $('.video-btn img').attr('src','img/video-btn_default.gif');
        $('.btn-desc').css('display','none');
    })
});