var $print=$("#container");
var winH;//屏幕宽高  
     var winW;
     changeOrientation($print);
     var imageH;//图片相对高;
     var halfH;
     
	
     /* var a=Number($(window).width());//320
     var b=Number($(window).height());//504
     if(a>b){
         winW=a;   
     	 winH=b; 
     	
     }else if(a<b){
     	 winW=b;
     	 winH=a;
     }*/
        //获取图片相对高度方法;
    
     getImageH($(".nav1").attr("src"));
     
   function getImageH(url){
		var img=new Image();
		img.src=url;
		img.onload=function(){
			var imgW=img.width;//图片真实宽高
			var imgH=img.height;
			//图片相对高度
			imageH=parseInt(winW*imgH/imgW);
			halfH=winH-imageH;
			console.log(winW,winH);
		}
		
	}
     var startX;
     var startY;
     var sx;
     var sy;
     var moveX;
     var moveY;
     var px;
     var py;
     var boxy;
     var hd;
     var hd1;
     var hd3;
     
    /* 导航宽高*/
   window.onload=function(){
	$(".nav").height(imageH);
	$(".question").height(halfH);
	
	
	//提示操作
	$(".tishi").click(function(){
		$(this).addClass("animated tada");
		setTimeout(function(){
			$(".tishi").removeClass("animated tada")
		},800)
		if($(".content img").css("display")=="block"){
			$(".content img").removeClass("animated slideInLeft slideOutLeft").addClass("animated slideOutLeft");
			setTimeout(function(){
				$(".content img").hide();
			},1400);
		}else{
			$(".content img").removeClass("animated slideInLeft slideOutLeft").addClass("animated slideInLeft").show();;
		}
		
	})
	//喇叭操作
	$(".laba").click(function(){
		$(this).addClass("animated pulse");
		setTimeout(function(){
			$(".laba").removeClass("animated pulse")
		},800);
		if($(".nub1").css("display")=="block"){
			pause();
			setTimeout(function(){
				playSound(arr[1]);
			},300)
		}
	});
	$(".page1").click(function(){
		//pause();
		setTimeout(function(){
			playSound(arr[1]);
		},300)
		$(".nub1").show();
		$(".nub11").show();
		$(".next img").attr("src","images/46.png");
		setTimeout(function(){
			$(".page1").addClass("animated rotateOut").fadeOut();
			$(".page2").addClass("animated rotateIn").fadeIn();
			setTimeout(function(){
				$(".hand").addClass("go").show();
				setTimeout(function(){
					$(".hand").removeClass("go").hide();
				},1500);
			},1000)
		},800)
	})
	var a1=false;
	var a2=false;
	var a3=false;
     
    var b1=false;
	var b2=false;
	var b3=false;
	var b4=false;
	var c1=false;
	var c2=false;
	var c3=false;
	var c4=false;
	var c5=false;
	var c6=false;
	var c7=false;
	var c8=false;
	$(".next").click(function(){
		pause();
		 a1=false;
		 a2=false;
		 a3=false;
	     
	     b1=false;
		 b2=false;
	     b3=false;
		 b4=false;
		 
		 c1=false;
		 c2=false;
		 c3=false;
		 c4=false;
		 c5=false;
		 c6=false;
		 c7=false;
		 c8=false;
	 	$(".question").removeClass("animated pulse infinite");
	 	$(".bg1").show();
	 	$(".bg2").show();
	 	$(".bg3").show();
	    $(".num").show();
	 	$(".succ").hide();
		if($(".nub11").css("display")=="block"){
			$(".nub11").fadeOut();
			$(".nub12").fadeIn();
			$(".next img").attr("src","images/46.png");
			
		}else if($(".nub12").css("display")=="block"){
			$(".nub12").fadeOut();
			$(".nub13").fadeIn();
			 $(".next img").attr("src","images/48.png");
		}else if($(".nub13").css("display")=="block"){
			$(".nub13").fadeOut();
			$(".page1").removeClass("animated rotateOut").fadeIn()
			$(".page2").removeClass("animated rotateOut").fadeOut()
		}
	});
	$(".reset").click(function(){
		pause();
	     a1=false;
		 a2=false;
		 a3=false;
	     
	     b1=false;
		 b2=false;
	     b3=false;
		 b4=false;
		 
		 c1=false;
		 c2=false;
		 c3=false;
		 c4=false;
		 c5=false;
		 c6=false;
		 c7=false;
		 c8=false;
	 	$(".question").removeClass("animated pulse infinite");
	 	$(".bg1").show();
	 	$(".bg2").show();
	 	$(".bg3").show();
	 	$(".num").show();
	 	$(".succ").hide();
		if($(".nub11").css("display")=="block"){
		    $(".next img").attr("src","images/46.png");
				setTimeout(function(){
					$(".hand").addClass("go").show();
					setTimeout(function(){
						$(".hand").removeClass("go").hide();
					},1500);
				},1000)
			
		}else if($(".nub12").css("display")=="block"){
			 $(".next img").attr("src","images/46.png");
			
		}else if($(".nub13").css("display")=="block"){
			 $(".next img").attr("src","images/48.png");
		}
	});
	
	var playing;
	var source1;
	
	







   
   
	
	nuber6.addEventListener("touchstart",function(e){start(e,nuber6,"-0.08","1.08")},false);
	nuber6.addEventListener("touchmove",function(e){move(e,"nuber6")},false);
	nuber6.addEventListener("touchend",function(e){
		 e.preventDefault();
		 if(px>=winW*0.42*0.3&&px<=winW*0.42*0.6 && py>=winW*0.42*0.21 && py<=(winW*0.42*0.51)){
		 	    $(this).hide();//下一步点击改
		 	     $(this).css({
	                "left":"-8%",
	                "top":"108%",                    
                })
		 	    $(".bg11").hide();//改
                a1=true;//改
                playSound1(arr[4]);
                if(a1&&a2&&a3){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[2]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[3]);
		 	 $(this).css({
                "left":"-8%",
                "top":"108%",                    
                })
		 }
	},false);
	
    nuber8.addEventListener("touchstart",function(e){start(e,nuber8,"0.24","1.08")},false);
	nuber8.addEventListener("touchmove",function(e){move(e,"nuber8")},false);
	nuber8.addEventListener("touchend",function(e){
		 e.preventDefault();
		 if(px>=winW*0.42*0.3&&px<=winW*0.42*0.6 && py>=winW*0.42*0.31 && py<=(winW*0.42*0.61)){
		 	    $(this).hide();//下一步点击改
		 	     $(this).css({
	                "left":"24%",
	                "top":"108%",                    
                })
		 	    $(".bg12").hide();//改
                a2=true;//改
                playSound1(arr[4]);
                if(a1&&a2&&a3){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[2]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[3]);
		 	 $(this).css({
                "left":"24%",
                "top":"108%",                    
                })
		 }
	},false);
	
	nuber9.addEventListener("touchstart",function(e){start(e,nuber9,"0.4","1.08")},false);
	nuber9.addEventListener("touchmove",function(e){move(e,"nuber9")},false);
	nuber9.addEventListener("touchend",function(e){
		 e.preventDefault();
		 if(px>=winW*0.42*0.40&&px<=winW*0.42*0.7 && py>=winW*0.42*0.31 && py<=(winW*0.42*0.61)){
		 	    $(this).hide();//下一步点击改
		 	     $(this).css({
	                "left":"40%",
	                "top":"108%",                    
                })
		 	    $(".bg13").hide();//改
                a3=true;//改
                playSound1(arr[4]);
                if(a1&&a2&&a3){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[2]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[3]);
		 	 $(this).css({
                "left":"40%",
                "top":"108%",                    
                })
		 }
	},false);
	
	
    nuber4.addEventListener("touchstart",function(e){start(e,nuber4,"-0.4","1.08")},false);
	nuber4.addEventListener("touchmove",function(e){move(e,"nuber4")},false);
	nuber4.addEventListener("touchend",function(e){end(e,"nuber4","-0.4","1.08")},false);
	
	nuber5.addEventListener("touchstart",function(e){start(e,nuber5,"-0.24","1.08")},false);
	nuber5.addEventListener("touchmove",function(e){move(e,"nuber5")},false);
	nuber5.addEventListener("touchend",function(e){end(e,"nuber5","-0.24","1.08")},false);
	
	nuber7.addEventListener("touchstart",function(e){start(e,nuber7,"0.08","1.08")},false);
	nuber7.addEventListener("touchmove",function(e){move(e,"nuber7")},false);
	nuber7.addEventListener("touchend",function(e){end(e,"nuber7","0.08","1.08")},false);
	
	nuber10.addEventListener("touchstart",function(e){start(e,nuber10,"0.57","1.08")},false);
	nuber10.addEventListener("touchmove",function(e){move(e,"nuber10")},false);
	nuber10.addEventListener("touchend",function(e){end(e,"nuber10","0.57","1.08")},false);
	
	
	nuber11.addEventListener("touchstart",function(e){start(e,nuber11,"0.74","1.08")},false);
	nuber11.addEventListener("touchmove",function(e){move(e,"nuber11")},false);
	nuber11.addEventListener("touchend",function(e){end(e,"nuber11","0.74","1.08")},false);
	
	nuber12.addEventListener("touchstart",function(e){start(e,nuber12,"0.93","1.08")},false);
	nuber12.addEventListener("touchmove",function(e){move(e,"nuber12")},false);
	nuber12.addEventListener("touchend",function(e){end(e,"nuber12","0.93","1.08")},false);
	
	
	nuber13.addEventListener("touchstart",function(e){start(e,nuber13,"1.12","1.08")},false);
	nuber13.addEventListener("touchmove",function(e){move(e,"nuber13")},false);
	nuber13.addEventListener("touchend",function(e){end(e,"nuber13","1.12","1.08")},false);
	
	nuber14.addEventListener("touchstart",function(e){start(e,nuber14,"1.3","1.08")},false);
	nuber14.addEventListener("touchmove",function(e){move(e,"nuber14")},false);
	nuber14.addEventListener("touchend",function(e){end(e,"nuber14","1.3","1.08")},false);
	


/*第二题*/
    nuber26.addEventListener("touchstart",function(e){start(e,nuber26,"-0.08","1.08")},false);
	nuber26.addEventListener("touchmove",function(e){move(e,"nuber26")},false);
	nuber26.addEventListener("touchend",function(e){
		 e.preventDefault();
		 if(px>=winW*0.42*0.79&&px<=winW*0.42*0.99 && py>=winW*0.42*0.10 && py<=(winW*0.42*0.40)){
		 	    $(this).hide();//下一步点击改
		 	     $(this).css({
	                "left":"-8%",
	                "top":"108%",                    
                })
		 	    $(".bg21").hide();//改
                b1=true;//改
                playSound1(arr[4]);
                if(b1&&b2&&b3&&b4){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[2]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[3]);
		 	 $(this).css({
                "left":"-8%",
                "top":"108%",                    
                })
		 }
	},false);
	
    nuber28.addEventListener("touchstart",function(e){start(e,nuber28,"0.24","1.08")},false);
	nuber28.addEventListener("touchmove",function(e){move(e,"nuber28")},false);
	nuber28.addEventListener("touchend",function(e){
		 e.preventDefault();
		 if(px>=winW*0.42*0.59&&px<=winW*0.42*0.89 && py>=winW*0.42*0.20 && py<=(winW*0.42*0.50)){
		 	    $(this).hide();//下一步点击改
		 	     $(this).css({
	                "left":"24%",
	                "top":"108%",                    
                })
		 	    $(".bg24").hide();//改
                b2=true;//改
                playSound1(arr[4]);
                 if(b1&&b2&&b3&&b4){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[2]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[3]);
		 	 $(this).css({
                "left":"24%",
                "top":"108%",                    
                })
		 }
	},false);
	 nuber29.addEventListener("touchstart",function(e){start(e,nuber29,"0.4","1.08")},false);
	nuber29.addEventListener("touchmove",function(e){move(e,"nuber29")},false);
	nuber29.addEventListener("touchend",function(e){
		 e.preventDefault();
		/*$(".bg").css({
		 		 "left":winW*0.4*0.405,
                "top":winW*0.4*0.3,
                "width":winW*0.4*0.1,
                "height":winW*0.4*0.1,
                "background":"#fff"
		 	})*/
		//移动后left:0.4,top:0.31
		 if(px>=winW*0.42*0.69&&px<=winW*0.42*0.99 && py>=winW*0.42*0.20 && py<=(winW*0.42*0.50)){
		 	    $(this).hide();//下一步点击改
		 	     $(this).css({
	                "left":"40%",
	                "top":"108%",                    
                })
		 	    $(".bg23").hide();//改
                b3=true;//改
                playSound1(arr[4]);
                if(b1&&b2&&b3&&b4){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[2]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[3]);
		 	 $(this).css({
                "left":"40%",
                "top":"108%",                    
                })
		 }
	},false);
	nuber30.addEventListener("touchstart",function(e){start(e,nuber30,"0.57","1.08")},false);
	nuber30.addEventListener("touchmove",function(e){move(e,"nuber30")},false);
	nuber30.addEventListener("touchend",function(e){
		 e.preventDefault();
		/*$(".bg").css({
		 		 "left":winW*0.4*0.405,
                "top":winW*0.4*0.3,
                "width":winW*0.4*0.1,
                "height":winW*0.4*0.1,
                "background":"#fff"
		 	})*/
		//移动后left:0.4,top:0.31
		 if(px>=winW*0.42*0.79&&px<=winW*0.42*0.99 && py>=winW*0.42*0.20 && py<=(winW*0.42*0.50)){
		 	    $(this).hide();//下一步点击改
		 	     $(this).css({
	                "left":"57%",
	                "top":"108%",                    
                })
		 	    $(".bg22").hide();//改
                b4=true;//改
                playSound1(arr[4]);
                if(b1&&b2&&b3&&b4){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[2]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[3]);
		 	 $(this).css({
                "left":"57%",
                "top":"108%",                    
                })
		 }
	},false);
	
    nuber24.addEventListener("touchstart",function(e){start(e,nuber24,"-0.4","1.08")},false);
	nuber24.addEventListener("touchmove",function(e){move(e,"nuber24")},false);
	nuber24.addEventListener("touchend",function(e){end(e,"nuber24","-0.4","1.08")},false);
	
	nuber25.addEventListener("touchstart",function(e){start(e,nuber25,"-0.24","1.08")},false);
	nuber25.addEventListener("touchmove",function(e){move(e,"nuber25")},false);
	nuber25.addEventListener("touchend",function(e){end(e,"nuber25","-0.24","1.08")},false);
	
	nuber27.addEventListener("touchstart",function(e){start(e,nuber27,"0.08","1.08")},false);
	nuber27.addEventListener("touchmove",function(e){move(e,"nuber27")},false);
	nuber27.addEventListener("touchend",function(e){end(e,"nuber27","0.08","1.08")},false);
	
	nuber31.addEventListener("touchstart",function(e){start(e,nuber31,"0.74","1.08")},false);
	nuber31.addEventListener("touchmove",function(e){move(e,"nuber31")},false);
	nuber31.addEventListener("touchend",function(e){end(e,"nuber31","0.74","1.08")},false);
	
	nuber32.addEventListener("touchstart",function(e){start(e,nuber32,"0.93","1.08")},false);
	nuber32.addEventListener("touchmove",function(e){move(e,"nuber32")},false);
	nuber32.addEventListener("touchend",function(e){end(e,"nuber32","0.93","1.08")},false);
	
	nuber33.addEventListener("touchstart",function(e){start(e,nuber33,"1.12","1.08")},false);
	nuber33.addEventListener("touchmove",function(e){move(e,"nuber33")},false);
	nuber33.addEventListener("touchend",function(e){end(e,"nuber33","1.12","1.08")},false);
	
	nuber34.addEventListener("touchstart",function(e){start(e,nuber34,"1.3","1.08")},false);
	nuber34.addEventListener("touchmove",function(e){move(e,"nuber34")},false);
	nuber34.addEventListener("touchend",function(e){end(e,"nuber34","1.3","1.08")},false);

	

  

/*第三题*/
    nuber47.addEventListener("touchstart",function(e){start(e,nuber47,"-0.02","1.08")},false);
	nuber47.addEventListener("touchmove",function(e){move(e,"nuber47")},false);
	nuber47.addEventListener("touchend",function(e){
		 e.preventDefault();
		/*$(".bg").css({
		 		 "left":winW*0.4*0.405,
                "top":winW*0.4*0.3,
                "width":winW*0.4*0.1,
                "height":winW*0.4*0.1,
                "background":"#fff"
		 	})*/
		//移动后left:0.4,top:0.31
		 if(px>=winW*0.42*0.2&&px<=winW*0.42*0.5 && py>=winW*0.42*0.10 && py<=(winW*0.42*0.40)){
		 	    $(this).hide();//下一步点击改
		 	     $(this).css({
	                "left":"-2%",
	                "top":"107%",                    
                })
		 	    $(".bg31").hide();//改
                c1=true;//改
                playSound1(arr[4]);
                if(c1&&c2&&c3&&c4&&c5&&c6&&c7&&c8){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[2]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[3]);
		 	 $(this).css({
                "left":"-2%",
                "top":"108%",                    
                })
		 }
	},false);
    nuber49.addEventListener("touchstart",function(e){start(e,nuber49,"0.26","1.08")},false);
	nuber49.addEventListener("touchmove",function(e){move(e,"nuber49")},false);
	nuber49.addEventListener("touchend",function(e){
		 e.preventDefault();
		/*$(".bg").css({
		 		 "left":winW*0.4*0.405,
                "top":winW*0.4*0.3,
                "width":winW*0.4*0.1,
                "height":winW*0.4*0.1,
                "background":"#fff"
		 	})*/
		//移动后left:0.4,top:0.31
		 if(px>=winW*0.42*0.1&&px<=winW*0.42*0.4 && py>=winW*0.42*0.20 && py<=(winW*0.42*0.50)){
		 	    $(this).hide();//下一步点击改
		 	     $(this).css({
	                "left":"35%",
	                "top":"107%",                    
                })
		 	    $(".bg32").hide();//改
                c2=true;//改
                playSound1(arr[4]);
                if(c1&&c2&&c3&&c4&&c5&&c6&&c7&&c8){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[2]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[3]);
		 	 $(this).css({
                "left":"26%",
                "top":"108%",                    
                })
		 }
	},false);
	
	nuber50.addEventListener("touchstart",function(e){start(e,nuber50,"0.4","1.08")},false);
	nuber50.addEventListener("touchmove",function(e){move(e,"nuber50")},false);
	nuber50.addEventListener("touchend",function(e){
		 e.preventDefault();
		/*$(".bg").css({
		 		 "left":winW*0.4*0.405,
                "top":winW*0.4*0.3,
                "width":winW*0.4*0.1,
                "height":winW*0.4*0.1,
                "background":"#fff"
		 	})*/
		//移动后left:0.4,top:0.31
		 if(px>=winW*0.42*0.3&&px<=winW*0.42*0.6 && py>=winW*0.42*0.20 && py<=(winW*0.42*0.50)){
		 	    $(this).hide();//下一步点击改
		 	     $(this).css({
	                "left":"40%",
	                "top":"108%",                    
                })
		 	    $(".bg33").hide();//改
                c3=true;//改
                playSound1(arr[4]);
                if(c1&&c2&&c3&&c4&&c5&&c6&&c7&&c8){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[2]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[3]);
		 	 $(this).css({
                "left":"40%",
                "top":"108%",                    
                })
		 }
	},false);
	
    nuber52.addEventListener("touchstart",function(e){start(e,nuber52,"0.72","1.08")},false);
	nuber52.addEventListener("touchmove",function(e){move(e,"nuber52")},false);
	nuber52.addEventListener("touchend",function(e){
		 e.preventDefault();
		/*$(".bg").css({
		 		 "left":winW*0.4*0.405,
                "top":winW*0.4*0.3,
                "width":winW*0.4*0.1,
                "height":winW*0.4*0.1,
                "background":"#fff"
		 	})*/
		//移动后left:0.4,top:0.31
		 if(px>=winW*0.42*0.2&&px<=winW*0.42*0.5 && py>=winW*0.42*0.30 && py<=(winW*0.42*0.60)){
		 	    $(this).hide();//下一步点击改
		 	     $(this).css({
	                "left":"72%",
	                "top":"108%",                    
                })
		 	    $(".bg34").hide();//改
                c4=true;//改
                playSound1(arr[4]);
                if(c1&&c2&&c3&&c4&&c5&&c6&&c7&&c8){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[2]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[3]);
		 	 $(this).css({
                "left":"72%",
                "top":"108%",                    
                })
		 }
	},false);
	
    nuber54.addEventListener("touchstart",function(e){start(e,nuber54,"1.06","1.08")},false);
	nuber54.addEventListener("touchmove",function(e){move(e,"nuber54")},false);
	nuber54.addEventListener("touchend",function(e){
		 e.preventDefault();
		/*$(".bg").css({
		 		 "left":winW*0.4*0.405,
                "top":winW*0.4*0.3,
                "width":winW*0.4*0.1,
                "height":winW*0.4*0.1,
                "background":"#fff"
		 	})*/
		//移动后left:0.4,top:0.31
		 if(px>=winW*0.42*0.79&&px<=winW*0.42*0.99 && py>=winW*0.42*0.40 && py<=(winW*0.42*0.70)){
		 	    $(this).hide();//下一步点击改
		 	     $(this).css({
	                "left":"106%",
	                "top":"108%",                    
                })
		 	    $(".bg35").hide();//改
                c5=true;//改
                playSound1(arr[4]);
                if(c1&&c2&&c3&&c4&&c5&&c6&&c7&&c8){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[2]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[3]);
		 	 $(this).css({
                "left":"106%",
                "top":"108%",                    
                })
		 }
	},false);
	
    nuber55.addEventListener("touchstart",function(e){start(e,nuber55,"1.21","1.08")},false);
	nuber55.addEventListener("touchmove",function(e){move(e,"nuber55")},false);
	nuber55.addEventListener("touchend",function(e){
		 e.preventDefault();
		/*$(".bg").css({
		 		 "left":winW*0.4*0.405,
                "top":winW*0.4*0.3,
                "width":winW*0.4*0.1,
                "height":winW*0.4*0.1,
                "background":"#fff"
		 	})*/
		//移动后left:0.4,top:0.31
		 if(px>=winW*0.42*0.59&&px<=winW*0.42*0.89 && py>=winW*0.42*0.49 && py<=(winW*0.42*0.79)){
		 	    $(this).hide();//下一步点击改
		 	     $(this).css({
	                "left":"121%",
	                "top":"108%",                    
                })
		 	    $(".bg36").hide();//改
                c6=true;//改
                playSound1(arr[4]);
                if(c1&&c2&&c3&&c4&&c5&&c6&&c7&&c8){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[2]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[3]);
		 	 $(this).css({
                "left":"121%",
                "top":"108%",                    
                })
		 }
	},false);
	
    nuber44.addEventListener("touchstart",function(e){start(e,nuber44,"-0.44","1.08")},false);
	nuber44.addEventListener("touchmove",function(e){move(e,"nuber44")},false);
	nuber44.addEventListener("touchend",function(e){
		 e.preventDefault();
		/*$(".bg").css({
		 		 "left":winW*0.4*0.405,
                "top":winW*0.4*0.3,
                "width":winW*0.4*0.1,
                "height":winW*0.4*0.1,
                "background":"#fff"
		 	})*/
		//移动后left:0.4,top:0.31
		 if(px>=winW*0.42*0.69&&px<=winW*0.42*0.99 && py>=winW*0.42*0.59 && py<=(winW*0.42*0.89)){
		 	    $(this).hide();//下一步点击改
		 	     $(this).css({
	                "left":"-44%",
	                "top":"108%",                    
                })
		 	    $(".bg37").hide();//改
                c7=true;//改
                playSound1(arr[4]);
                if(c1&&c2&&c3&&c4&&c5&&c6&&c7&&c8){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[2]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[3]);
		 	 $(this).css({
                "left":"-44%",
                "top":"108%",                    
                })
		 }
	},false);
	
   nuber45.addEventListener("touchstart",function(e){start(e,nuber45,"-0.3","1.08")},false);
	nuber45.addEventListener("touchmove",function(e){move(e,"nuber45")},false);
	nuber45.addEventListener("touchend",function(e){
		 e.preventDefault();
		/*$(".bg").css({
		 		 "left":winW*0.4*0.405,
                "top":winW*0.4*0.3,
                "width":winW*0.4*0.1,
                "height":winW*0.4*0.1,
                "background":"#fff"
		 	})*/
		//移动后left:0.4,top:0.31
		 if(px>=winW*0.42*0.79&&px<=winW*0.42*0.99 && py>=winW*0.42*0.69 && py<=(winW*0.42*0.99)){
		 	    $(this).hide();//下一步点击改
		 	     $(this).css({
	                "left":"-30%",
	                "top":"108%",                    
                })
		 	    $(".bg38").hide();//改
                c8=true;//改
                playSound1(arr[4]);
                if(c1&&c2&&c3&&c4&&c5&&c6&&c7&&c8){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[2]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[3]);
		 	 $(this).css({
                "left":"-30%",
                "top":"108%",                    
                })
		 }
	},false);
	
	
	
	
	
	nuber46.addEventListener("touchstart",function(e){start(e,nuber46,"-0.16","1.08")},false);
	nuber46.addEventListener("touchmove",function(e){move(e,"nuber46")},false);
	nuber46.addEventListener("touchend",function(e){end(e,"nuber46","-0.16","1.08")},false);
	
	nuber48.addEventListener("touchstart",function(e){start(e,nuber48,"0.12","1.08")},false);
	nuber48.addEventListener("touchmove",function(e){move(e,"nuber48")},false);
	nuber48.addEventListener("touchend",function(e){end(e,"nuber48","0.12","1.08")},false);
	
    nuber51.addEventListener("touchstart",function(e){start(e,nuber51,"0.56","1.08")},false);
	nuber51.addEventListener("touchmove",function(e){move(e,"nuber51")},false);
	nuber51.addEventListener("touchend",function(e){end(e,"nuber51","0.56","1.08")},false);
	
	nuber53.addEventListener("touchstart",function(e){start(e,nuber53,"0.89","1.08")},false);
	nuber53.addEventListener("touchmove",function(e){move(e,"nuber53")},false);
	nuber53.addEventListener("touchend",function(e){end(e,"nuber53","0.89","1.08")},false);
 
 	nuber56.addEventListener("touchstart",function(e){start(e,nuber56,"1.37","1.08")},false);
	nuber56.addEventListener("touchmove",function(e){move(e,"nuber56")},false);
	nuber56.addEventListener("touchend",function(e){end(e,"nuber56","1.37","1.08")},false);
 
	
 
	

	
}
   
function playSound(buffer){
		source = context.createBufferSource();//创建一个音频源 相当于是装音频的容器
	    source.buffer = buffer;//  告诉音频源 播放哪一段音频
	    source.connect(context.destination);// 连接到输出源
	    source.start(0);//开始播放
	    playing=true;
	   }
	function pause() {
		if(playing){
         source.stop();
         playing=false;
      }
    }
	
	function playSound1(buffer){
		source1 = context.createBufferSource();//创建一个音频源 相当于是装音频的容器
	    source1.buffer = buffer;//  告诉音频源 播放哪一段音频
	    source1.connect(context.destination);// 连接到输出源
	    source1.start(0);//开始播放
	   }
	







function start(e,id,left,top){
	//alert(winW)
	if(window.orientation==90||window.orientation==-90){
		 	 startX = e.touches[0].pageX; 
		     startY= e.touches[0].pageY;
		      sx=winW*0.4*left;
		      sy=winW*0.4*top;
		 }else{
		 	 startY = e.touches[0].pageX; 
			 startX = e.touches[0].pageY;
			 sx=winW*0.4*left;
			 sy=winW*0.4*top;
		}
	}
function move(e,id){
	e.preventDefault();
	 if(window.orientation==90||window.orientation==-90){
		  	    moveX = e.touches[0].pageX; 
				moveY = e.touches[0].pageY;
				 px=moveX-startX+sx;
				 py=moveY-startY+sy;
		  }else{
				 moveY = e.touches[0].pageX; 
				moveX = e.touches[0].pageY;
				 px=moveX-startX+sx;
				 py=-(moveY-startY-sy);
		 }
	      $("#"+id).css({
                "left":px,
                "top":py,                    
                })
	}


function end(e,id,left1,top1){
	 e.preventDefault();
		 	playSound1(arr[3]);
		 	 $("#"+id).css({
                "left":left1,
                "top":top1,                    
                })
}