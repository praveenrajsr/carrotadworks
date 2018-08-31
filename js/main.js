$(document).ready(()=>{

    var currentMousePosition = {x: -1, y: -1};
        // move left eyebrow
   
    var brow = document.querySelectorAll('.left-ear');

    var movebrow = anime({
      targets : brow,
      translateY: -15,
      direction: 'alternate',
      loop: true
    });

    $(document).mousemove((event)=>{
        currentMousePosition.x = event.pageX;
        currentMousePosition.y = event.pageY;

        var width = Number($(window).width());
        var height = Number($(window).height());

        var left_pos_l = ( (currentMousePosition.x / (width * 0.5)) *40 ) + 380;
        var right_pos_r = ((currentMousePosition.x / (width * 0.5)) *40 ) +500;
        var top_pos_l = (currentMousePosition.y / (height)) * 50 + 380;
        var top_pos_r = (currentMousePosition.y / (height))* 50 + 370;

        var limit_width_left = $('.pan_area_l').attr("cx")-$('.eye_l').attr("cx");
        var limit_width_left = $('.pan_area_r').attr("cx")-$('.eye_r').attr("cx");
        
        $('.eye_l').attr("cx", left_pos_l);
        $('.eye_r').attr('cx', right_pos_r);
        $('.eye_l').attr("cy", top_pos_l);
        $('.eye_r').attr('cy', top_pos_r);


    });
    $('.container').mousemove((event)=>{

    });
    particlesJS("particles-js", {
        "particles":{
            "number":{
                "value": 80,
                "density":{
                    "enable": true,
                    "value_area": 1000
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                  "width": 2,
                  "color": "#ffffff"
                },
            },
            "size": {
                "value": 1,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
            },
            "line_linked":{
                "enable" : false
            },
        }, 
        "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 540,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 2,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
    });
});
var width = $(window).width();
var height = $(window).height();

$('a.carrot-link').click(function(e){
  e.preventDefault();
  $('#menu-wrapper').toggleClass('hidden');

  third_menu_width = width / 4;
  eighthmenu_height = (height /5) + (height / 5) + (height/2);
  $('.home').css("height", (height / 5));
  $('.next-menu').css("height", (height / 5));
  $('.third-menu').css({"left":  third_menu_width , "height": ((height / 10)*4)});
  $('.fourth-menu').css("width", (width / 4));
  $('.fifth-menu').css({"right":(width/4), "width": (width/4) });
  $('.sixth-menu').css({"right":(width/2), "width": (width/4) });
  $('.seventh-menu').css({"left":(width * 0), "height": (height/2) });
  $('.eighth-menu').css({"left":(width * 0), "height": (height/8), "top": (eighthmenu_height) });

  var firstmenu = document.querySelectorAll('#menu-wrapper .home');
  var cssSelector = anime({
    targets: firstmenu,
    width: width/4 ,
    easing: 'easeOutExpo'
  });
  var nextmenu = document.querySelectorAll('#menu-wrapper .next-menu');
  var cssSelector = anime({
    targets: nextmenu,
    width: width / 4,
    easing: 'easeOutExpo',
    delay: 500
  });
  var thirdmenu = document.querySelectorAll('#menu-wrapper .third-menu');
  var cssSelector = anime({
    targets: thirdmenu,
    width: width,
    easing: 'easeOutExpo',
    delay: 750
  });
  var forthmenu = document.querySelectorAll('#menu-wrapper .fourth-menu');
  var cssSelector = anime({
    targets: forthmenu,
    height: height,
    easing: 'easeOutExpo',
    delay: 1000
  });
  var fifthmenu = document.querySelectorAll('#menu-wrapper .fifth-menu');
  var cssSelector = anime({
    targets: fifthmenu,
    height: height,
    easing: 'easeOutExpo',
    delay: 1250
  });
  var sixthmenu = document.querySelectorAll('#menu-wrapper .sixth-menu');
  var cssSelector = anime({
    targets: sixthmenu,
    height: height,
    easing: 'easeOutExpo',
    delay: 1500
  });
  var seventhmenu = document.querySelectorAll('#menu-wrapper .seventh-menu');
  var cssSelector = anime({
    targets: seventhmenu,
    width: width/ 4,
    easing: 'easeOutExpo',
    delay: 1750
  });
  var eighthmenu = document.querySelectorAll('#menu-wrapper .eighth-menu');
  var cssSelector = anime({
    targets: eighthmenu,
    width: width/ 4,
    easing: 'easeOutExpo',
    delay: 2000
  });
  $('#menu-wrapper .home a .link-span').removeClass('hidden').delay(250);
  $('#menu-wrapper .next-menu a .link-span').removeClass('hidden').delay(500);
  $('#menu-wrapper .third-menu .link-span').removeClass('hidden').delay(750);
  $('#menu-wrapper .fourth-menu .link-span').removeClass('hidden').delay(1000);
  $('#menu-wrapper .fifth-menu .link-span').removeClass('hidden').delay(1250);
  $('#menu-wrapper .sixth-menu .link-span').removeClass('hidden').delay(1500);
  $('#menu-wrapper .seventh-menu .link-span').removeClass('hidden').delay(1750);
  $('#menu-wrapper .eighth-menu .link-span').removeClass('hidden').delay(2000);
});

 // close menu
 $('a.menu-link').click(function(e){
  e.preventDefault();
  var goTo = $(this).attr('href');
  var firstmenu = document.querySelectorAll('#menu-wrapper .home');
  var cssSelector = anime({
    targets: firstmenu,
    width: 0,
    easing: 'easeOutExpo',
    delay: 2000
  });
  var nextmenu = document.querySelectorAll('#menu-wrapper .next-menu');
  var cssSelector = anime({
    targets: nextmenu,
    height: 0,
    easing: 'easeOutExpo',
    delay: 1750
  });
  var thirdmenu = document.querySelectorAll('#menu-wrapper .third-menu');
  var cssSelector = anime({
    targets: thirdmenu,
    width: 0,
    easing: 'easeOutExpo',
    delay: 1500
  });
  var fourthmenu = document.querySelectorAll('#menu-wrapper .fourth-menu');
  var cssSelector = anime({
    targets: fourthmenu,
    height: 0,
    easing: 'easeOutExpo',
    delay: 1250
  });
  var fifthmenu = document.querySelectorAll('#menu-wrapper .fifth-menu');
  var cssSelector = anime({
    targets: fifthmenu,
    height: 0,
    easing: 'easeOutExpo',
    delay: 1000
  });
  var sixthmenu = document.querySelectorAll('#menu-wrapper .sixth-menu');
  var cssSelector = anime({
    targets: sixthmenu,
    height: 0,
    easing: 'easeOutExpo',
    delay: 750
  });
  var seventhmenu = document.querySelectorAll('#menu-wrapper .seventh-menu');
  var cssSelector = anime({
    targets: seventhmenu,
    height: 0,
    easing: 'easeOutExpo',
    delay: 500
  });
  var eighthmenu = document.querySelectorAll('#menu-wrapper .eighth-menu');
  var cssSelector = anime({
    targets: eighthmenu,
    height: 0,
    easing: 'easeOutExpo',
    delay: 250
  });
  setTimeout(()=>{
    window.location = goTo;
  }, 2300);

});
