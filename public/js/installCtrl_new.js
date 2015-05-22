/**
 * Created by t_liyi on 5/22/2015.
 */

/*
* There are cases:
* 1. click on the update button : start the progress
*                                                   -> startProgress
* 2. click on the cancel icon : pause progress
*                                                   -> pauseProgress
* 3. click on the update button : re-start the progress
* 4. the progress is finished
*                                                   -> finishProgress
*                                                   -> initProgress
 */

var determinate_width = $(".determinate").width();
var progress_bar_width = $(".progress").width();
var current_progress;

var delay =500;

jQuery.fn.updateProgress = function(c_progress,delay){
    var c_progress = setInterval(startProgress,delay);
};

jQuery.fn.startProgress = function (){
    _progress = (determinate_width/progress_bar_width*100)+10;//increase 10 percent
};