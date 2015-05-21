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
    var progress = ($('.progress .determinate').width()/$('.progress').width())*100;
    var progress_bar;
    function updateProgress(){
        progress_bar = setInterval(startProgress,500);
    }
    function pause(){
        console.log('pause');
        $('.update-btn').show();
        clearInterval(progress_bar);
    }
    function slidePush(){
        if($('.card-1 .progress-bar').is(':visible')){
            $('.card-1').animate({top:'-=230px'},500,'swing',function(){$(this).hide()});
            $('.card-2').animate({top:'-=230px'},500,'swing');
        }else{
            $('.card-2').animate({top:'-=230px'},500);
        }
    }
    function slideCover(){
        if($('.card-1 .progress-bar').is(':visible')){//card 1 is updating
            $('.card-2').animate({top:'-=230px'},500,'swing',function(){$('.card-1').hide();});
        }else{
            $('.card-2').zIndex(1);
            $('.card-1').zIndex(2);
            $('.card-2').animate({top:'-=230px'},500,function(){$(this).hide();});
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
        }

        progress+=10;
        $('.progress .determinate').animate({width:progress+'%'});
    }
});


