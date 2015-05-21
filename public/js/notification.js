$(document).ready(function(){
    $('.notice-btn-1').click(function(){Materialize.toast(
            '<div class="noticeHeader"><i class="noticeIcon mdi-social-notifications-none"></i><span>Notification</span></div>' +
            '<div class="noticeContent"><span>This will be closed automatically</span> <a class="btn-flat yellow-text" href="#!">OK<a></div>',1000,'bottom-notice'
    );
    });

    $('.notice-btn-2').click(function () {
        $('.notice').animate({opacity:1,top:'0'},300,'easeOutCubic');
    });
    $('.close-icon').click(function(){
        $('.notice').animate({opacity:0,top:'-40px'},375,'easeOutCubic');
    });

});