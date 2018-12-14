$(document).ready(function(){
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.about-word-area').hide();
    $('.link-area-header').css('display', 'none');
    $('.link-area-header a').click(function(){
        $('.link-area-header').hide();
    });
    $('.animated-link').click(function(){
        $('.home-page').addClass('animated fadeOutRight delay-1s');
    });
    $('.link-button').click(function(){
        $('.link-area-header').show();
    });
    $('.link-close').click(function(){
        $('.link-area-header').hide();
    });
    $(window).scroll(function(){
        if($(this).scrollTop() >= 100 ){
          $('.navigation').css('background-color', 'black');
        }else{
         $('.navigation').css('background-color', 'transparent');
        }
        if($(this).scrollTop() >= 300 ){
            $('.about-word-area').show();
          }
    });
});