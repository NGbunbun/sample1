$(function(){

    // ページ内スクロール
    $('.menu a,.btn').click(function(){
        var id=$(this).attr('href');
        var position=$(id).offset().top;
        $('body,html').animate({scrollTop:position},500);
    });
    
    //　ページトップへ戻る
    var $pageTop=$('.page-top');
    $(window).scroll(function(){        //画面がスクロールされた時の挙動
        if($(this).scrollTop()>300){
            $pageTop.fadeIn();
        } else{
            $pageTop.fadeOut();
        }
    });
    $pageTop.click(function(){
        $('body,html').animate({scrollTop: 0},300);
        return false;
    });


});
