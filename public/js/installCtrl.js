$(document).ready(function(){
    var slide_push = true;
    $('.switch-btn').click(function(){
        //first time slide_push = true
        if(slide_push){
            $('.card-1').css('zIndex',2);
            $('.card-2').css('zIndex',1);
            slide_push = false;
        }else{
            $('.card-1').zIndex(1);
            var z = $('.card-2').zIndex(2);
            slide_push =true;
        }
    });
    $('.update-btn').click(function(){
        if($(this).is(':visible')){
            $(this).hide();
            $(this).siblings('.progress-bar').show(updateProgress());
        }
    });

    $('.progress-bar .close-icon').click(function(){
        $(this).parent('.progress-bar').hide(pause());

    });

    //progress bar animation
    var card_delay = 500;
    var progress = ($('.progress .determinate').width()/$('.progress').width())*100;
    var progress_bar;
    var states = ['downloading','installing','configuring'];

//    update progress bar with a delay of 500ms
    function updateProgress(){
        progress_bar = setInterval(startProgress,700);
    }


//    pause the progress updating
    function pause(){
        console.log('pause');
        $('.update-btn').show();
        $('.progress-bar').hide();
        clearInterval(progress_bar);
    }



/* dismiss animation:
*  when the update on the first card finished,
*  the second card push the first card up
*/
    function slidePush(){
        if($('.card-1 .progress-bar').is(':visible')){
            $('.card-1').animate({top:'-=230px'},card_delay,'swing',function(){$(this).hide()});
            $('.card-2').animate({top:'-=230px'},card_delay,'swing');
        }else{
            $('.card-2').animate({top:'-=230px'},card_delay);
        }
    }




/* dismiss animation:
*  when the update on the first card finished,
*  the second card slide up and cover the first card
*/
    function slideCover(){
        if($('.card-1 .progress-bar').is(':visible')){//card 1 is updating
            $('.card-2').animate({top:'-=230px'},card_delay,'swing',function(){$('.card-1').hide();});
        }else{
            $('.card-2').zIndex(1);
            $('.card-1').zIndex(2);
            $('.card-2').animate({top:'-=230px'},card_delay,function(){$(this).hide();});
        }
    }



    function startProgress() {
        if(progress === 100) {
            console.log('finish');
            if($('.card-1').css('zIndex')==1){
                slideCover()
            }else{
                slidePush();
            }
            //initial progress bar
            $('.progress .determinate').width(0)
            progress = ($('.progress .determinate').width()/$('.progress').width())*100;
            pause();
            $('.progress-state').text(states[0]);

        }else{
            //updating progress bar
            progress+=10;
            $('.progress .determinate').animate({width:progress+'%'});

            //updating states
            if(progress === 40){
                $('.progress-state').fadeOut(function(){
                    $(this).text(states[1]).fadeIn();
                });
            }else if(progress === 70){
                $('.progress-state').fadeOut(function() {
                    $(this).text(states[2]).fadeIn();
                });
            }
        }

    }
});





