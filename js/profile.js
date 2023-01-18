$(function() {

    var canvas = document.querySelector('canvas');
    var c = canvas.getContext('2d');

    canvas.height = innerHeight-80;
    canvas.width = innerWidth-50;

    var mouse = {
        x: 0,
        y: 0
    };

    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    class Bubbles {
        constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = {
                bg: 'rgba(255, 255, 255, 0.45)'
            };
            this.velocity = {
                x: (Math.random() - 0.5) * 4.5,
                y: Math.random() * 5
            };
            this.opacity = 1;
        }
    }
    Bubbles.prototype.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color.bg;
        c.fill();
        c.closePath();
    };
    Bubbles.prototype.update = function () {
        this.y -= this.velocity.y;
        this.draw();
    };


    class miniBubbles {
        constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = {
                bg: 'rgba(255, 255, 255, 0.45)',
            };
            this.velocity = {
                x: (Math.random() - 0.5) * 0.6,
                y: (Math.random() - 1) * 1.5
            }
            this.gravity = -0.3;
            this.timeToLive = 200;
        }
    }
    miniBubbles.prototype.draw = function () {
        c.save();
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color.bg;
        c.fill();
        c.closePath();
        c.restore();
    }
    miniBubbles.prototype.update = function () {
        if (this.y - this.radius < 0) {
            this.velocity.y = this.velocity.y;
        } else {
            this.velocity.y += this.gravity;
        }
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.timeToLive -= 1;
        this.draw();
    }

    const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
    backgroundGradient.addColorStop(0, '#142850')
    backgroundGradient.addColorStop(1, '#142850')
    var bubbles = [];
    var minibubbles = [];
    var timer = 0;
    var spawnRate = 99;

    function init() {
        bubbles = [];
        minibubbles = [];
    }

    function animate() {
        requestAnimationFrame(animate);
        c.fillStyle = backgroundGradient;
        c.fillRect(0, 0, canvas.width, canvas.height);

        bubbles.forEach((bubble, index) => {
            bubble.update();
            if (bubble.radius == 0) {
                bubbles.splice(index, 1);
            }
        });
        minibubbles.forEach((minibubble, index) => {
            minibubble.update();
            if (minibubble.timeToLive == 0) {
                minibubbles.splice(index, 1);
            }
        });

        timer++;
        if (timer % spawnRate == 0) {
            const radius = randomIntFromRange(15, 30);
            const minradius = Math.random() * 2 + 1;
            const x = Math.max(radius, Math.random() * canvas.width - radius);
            const y = innerHeight + 100;
            bubbles.push(new Bubbles(x, y, radius, 'white'));
            minibubbles.push(new miniBubbles(x, y, minradius));
            spawnRate = randomIntFromRange(70, 200);
        }

        for (var i = 0; i < bubbles.length; i++) {
            if (
                mouse.x > bubbles[i].x - bubbles[i].radius &&
                mouse.x < bubbles[i].x + bubbles[i].radius
            ) {
                if (
                    mouse.y > bubbles[i].y - bubbles[i].radius &&
                    mouse.y < bubbles[i].y + bubbles[i].radius
                ) {
                    var x = bubbles[i].x;
                    var y = bubbles[i].y;
                    var radius = Math.random() * 2 + 1;
                    bubbles[i].radius -= bubbles[i].radius;
                    for (let a = 0; a < Math.random() * 2 + 2; a++) {
                        minibubbles.push(new miniBubbles(x, y, radius));
                    }
                }
            }
        }
    }


    canvas.addEventListener('mousemove', mouseMove);

    function mouseMove(e) {
        mouse.x = e.offsetX;
        mouse.y = e.offsetY;
    }
    addEventListener('resize', function () {
        canvas.height = innerHeight-80;
        canvas.width = innerWidth-50;
        init();
    });

    animate();
    init();

    AOS.init();

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
        $('nav').css({'position':'fixed', 'top':'-70%'});
        
        $(window).on("scroll", function (e) {
            
            $('nav').css({
                'border' :'2px solid $color-sub'
            });

            console.log($(document).scrollTop());
            

            if ($(document).scrollTop() < 800) {
                $('nav').stop().animate({'position':'fixed','top':'-60%'},60);
            } else if ($(document).scrollTop() > 600) {
                    $('nav').stop().animate({'position':'fixed','top':'5%', 'margin-top':'3%'},60);
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
            $('nav').css({'position':'absolute', 'top':'-500px'});
            $(window).on("scroll", function (e) {
                console.log($(document).scrollTop());
                if ($(document).scrollTop() < 800) {
                    $('nav').stop().animate({'position':'fixed','top':'-60%'},60);
                } else if ($(document).scrollTop() > 600) {
                        $('nav').stop().animate({'position':'fixed','margin-top':'40%'},60);
                    } 

                if (($(document).scrollTop() > 3250) && ($(document).scrollTop() < 5500)) { // 5500
                    $('.circles').stop().animate({'margin-left':'0'},2000);
                    setTimeout(function() {
                        $('.first-slide').stop().animate({'margin': '0'},800);
                        $('.second-slide').stop().animate({'margin': '0'},1000);
                        $('.third-slide').stop().animate({'margin': '0'},1200);
                    }, 3000);
                } else {
                    $('.circles').css({'margin-left':'-1300px'});
                    $('.first-slide').css({'margin-top': '-1120px'});
                    $('.second-slide').css({'margin-top': '-1120px'});
                    $('.third-slide').css({'margin-top': '-1120px'});
                } 
            

                if (($(document).scrollTop() > 1150) && ($(document).scrollTop() < 2904)) {
                    $('.skills').css('opacity','1');

                    $('.random-move1').stop().animate({'left': '115%'}, 1000);
                    $('.random-move2').stop().animate({'left': '100%'}, 1000);
                    $('.random-move3').stop().animate({'left': '95%'}, 1000);
                    $('.random-move4').stop().animate({'left': '105%'}, 1000);

                } else {
                    $('.boat').stop().animate({'left': '0'});
                    $('.skills').css('opacity','0');
                } 

                if (($(document).scrollTop() > 4750) && ($(document).scrollTop() < 6600)) {
                    $('.first-turtle').stop().animate({'left': '-90%'}, 800);
                    $('.second-turtle').stop().animate({'left': '135%'}, 800);
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
                mobile();
            }
        });

});