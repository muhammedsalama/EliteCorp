$(function () {
    'use strict';

    /*ADJUST HEIGHT*/
    var windowHeight = $(window).height(),
        upperNav = $('.upper_bar').innerHeight(),
        navBar = $('.navbar').innerHeight();
    $('.slider,.carousel-item').height(windowHeight -(upperNav+navBar));
    $('.featured-work ul li').on('click',function () {
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') == 'all'){
            $('.shuffle-imgs .col-sm').css('opacity',1);
        }
        else{
            $('.shuffle-imgs .col-sm').css('opacity','0.1');
            $($(this).data('class')).parent().css('opacity',1);
        }
    });


});