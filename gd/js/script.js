var myScroll = null;
$(window).load(function(){
    new IScroll('.w1', {
        mouseWheel: true,
        scrollbars: true
    });
    new IScroll('.w2', {
        mouseWheel: true,
        scrollbars: true
    });
    new IScroll('.w3', {
        mouseWheel: true,
        scrollbars: true
    });

    $('.qa-item').hide();

    setTimeout(function(){
        $('.qa-item').eq(0).show();
    },300)
    FastClick.attach(document.body);

    
})


$(function(){
    $('.top-bar li').on('click',function(){
        var index = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
        $('.tab-content .content').eq(index).show().siblings().hide(); 
    })


    $('.qa-tab li').on('click',function(){
        var index = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
        $('.qa-info .qa-item').eq(index).show().siblings().hide(); 
    })

    var timer, windowInnerHeight;
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;


    var fl = false;
    // $('.qa-item input').focus(function(){
    //     if(isAndroid){
    //        $('.wrap').css({
    //         bottom:"0"
    //        })
    //        $('menu').hide();
    //     }
    // })
    // $(window).resize(function(){
    //     if(fl == false){
    //         fl = true;
    //         if(isAndroid){
    //            $('.wrap').css({
    //             bottom:"0"
    //            })
    //            $('menu').hide();
    //         }
    //     }else if(fl == true){
    //         fl = !fl;
    //         if(isAndroid){
    //            $('.wrap').css({
    //             bottom:"2.25rem"
    //            })
    //            $('menu').show();
    //         }
    //     }
    // })
    
     if(isAndroid){
        var isboard = false;
        $('.qa-item input').focus(function(){
            isboard = true;
        })
        $('.qa-item input').blur(function(){
            isboard = false;
        })
        // myScroll.on('scroll',function(){
        //     $('.qa-bottom').css({
        //         position:'static'
        //     })
        //     isboard = true;
        // })
        $(window).resize(function(){
            if(isboard){
                // $('.scroll').css({
                //     top:'-6rem'
                // })
                $('.qa-bottom').css({
                    top:'9.2rem',
                    zIndex:999,
                    position:'absolute'
                })
                isboard = false;
            }else{
                $('.qa-bottom').css({
                    position:'static'
                })
                isboard = true;
            }

        })
     }
    
})

function closeWin(){
    $('.pop').hide();
}

function surveyBtn(){
   $('.survey').show(); 
}

