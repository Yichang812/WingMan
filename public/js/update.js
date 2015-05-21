$(document).ready(function(){
    $('.example_1 .arrow-icon').click(function(){
        if($('.child-panel').css('display')!=='none'){
            $('.child-panel').slideUp(500,"easeOutQuart");
            $(this).rotate(0);
        }else{
            $('.child-panel').slideDown(500, "easeOutQuart");
            $(this).rotate(180);
        }

    });
    $('.example_4 .learn-more').click(function(){
        var position = $('.learn-content').position().top;
        if(position <50){
            $('.learn-content').animate({top:'0'});
        }else{
            $('.learn-content').animate({top:'-195px'});
        }
    });
});

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
        '-moz-transform' : 'rotate('+ degrees +'deg)',
        '-ms-transform' : 'rotate('+ degrees +'deg)',
        'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

