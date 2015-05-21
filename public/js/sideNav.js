$(document).ready(function(){
    var collapsed = true;
    var expand_duration = 500;
    $('.header').click(function(){
        if(collapsed){
            //side nav bar expand
            $('#sidebar').animate({'width':'200px'},expand_duration,'swing');

            $('.expand-icon').rotate(180,expand_duration);
            collapsed = false;
        }else{
            //side nav bar collapse
            $('#sidebar').animate({'width':'50px'},expand_duration,'swing');

            $('.expand-icon').rotate(0,expand_duration);
            collapsed = true;
        }
    });
    $('a').click(function(){
        if(collapsed){
            $('a.active').parent().css('width','100%');
            $('a.active').removeClass('active');
            $(this).addClass('active');

        }else{
            $('a.active').parent().css('width','100%');
            $('a.active').removeClass('active');
            $(this).addClass('active');
        }
    });
// tab tip on mouse hover with a delay of 1000ms
    var timer;
    var delay = 1000;

    $('#sidebar ul li').hover(function() {
        // on mouse in, start a timeout

        timer = setTimeout(function() {
            $()
        }, delay);
    }, function() {
        // on mouse out, cancel the timer
        clearTimeout(timer);
    });

});


//an improved version on rotate function
//add duration parameter
jQuery.fn.rotate = function(degrees,duration) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
        '-moz-transform' : 'rotate('+ degrees +'deg)',
        '-ms-transform' : 'rotate('+ degrees +'deg)',
        'transform' : 'rotate('+ degrees +'deg)',
        'transition': duration+'ms',
        '-moz-transition': duration+'ms',
        '-webkit-transition': duration+'ms',
        'ms-transition': duration+'ms'

});
    return $(this);
};

