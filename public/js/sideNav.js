$(document).ready(function(){
    var expand_duration = 500;
    var delay = 300;


//function for collapse or expand the side nav bar
        var collapsed = true;
        $(".header").click(function(){
            if(collapsed){
                //side nav bar expand
}       $("#sidebar").animate({"width":"200px"},expand_duration,"swing");
            $(".expand-icon").rotate(180,expand_duration);
            collapsed = false;
        }else{
        //side nav bar collapse
        $("#sidebar").animate({"width":"50px"},expand_duration,"swing");
        $(".expand-icon").rotate(0,expand_duration);
        collapsed = true;
    }
});


//    switch between active tab
$("#sidebar a").click(function(){
    if(collapsed){
        $("#sidebar .active").removeClass("active");
        $(this).addClass("active");
    }else{
        $("a.active").removeClass("active");
        $(this).addClass("active");
    }
});


// tab tip on mouse hover with delay

var timeout;
$("#sidebar a").hover(

    function() {
        var ob = $(this);
        var b_color;
        if(ob.hasClass("active")){
            b_color = "#ff9800";
        }else{
            b_color = "#424242";
        }
        timeout = setTimeout(function(){
            console.log(b_color);
            ob.animate({"width":"300%","background-color":b_color});
        }, delay);
    },
    function(){
        var ob = $(this);
        clearTimeout(timeout);
        ob.animate({"width":'100%'});
    }
);


});
/*
 *   an improved version on rotate function
 *   add duration parameter
 *   for degrees: 0deg means original orientation
 *                90deg means rotate 90 degrees clockwise related to the original orientation, not current orientation
 */

jQuery.fn.rotate = function(degrees,duration) {
    $(this).css({'-webkit-transform' : "rotate("+ degrees +"deg)",
        '-moz-transform' : "rotate("+ degrees +"deg)",
        '-ms-transform' : "rotate("+ degrees +"deg)",
        'transform' : "rotate("+ degrees +"deg)",
        'transition': duration+"ms",
        '-moz-transition': duration+"ms",
        '-webkit-transition': duration+"ms",
        'ms-transition': duration+"ms"

    });
    return $(this);