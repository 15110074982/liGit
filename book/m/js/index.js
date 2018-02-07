  var $print=$("#container");
     changeOrientation($print);
     var imageH;//图片相对高;
     var halfH;
	 var winH;//屏幕宽高  
     var winW;
     var a=Number($(window).width());//320
     var b=Number($(window).height());//504
     if(a>b){
         winW=a;   
     	 winH=b; 
     	
     }else if(a<b){
     	 winW=b;
     	 winH=a;
     }
     //获取图片相对高度方法;
   function getImageH(url){
		var img=new Image();
		img.src=url;
		console.log(url)
		//img.onload=function(){
			var imgW=img.width;//图片真实宽高
			var imgH=img.height;
			//图片相对高度
			imageH=parseInt(winW*imgH/imgW);
			halfH=winH-imageH;
		//}
		
	}
    getImageH($(".nav1").attr("src"));
    /* 导航内容高度*/
   console.log(imageH,halfH);
	$(".nav").height(imageH);
	$(".question").height(halfH);
	var a1=false;
	var a2=false;
	var a3=false;
	var a4=false;
	var a5=false;
	var a6=false;
	var a7=false;
	var a8=false;
	var a9=false;
	
     
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
	 /* 标题操作*/
	$(".title1").click(function(){
			$(this).removeClass("fadeInDown").addClass("bounceIn");
			pause();
			setTimeout(function(){
				playSound(arr[1]);
			},300)
			$(".nub1").show();
			$(".nub2").hide();
		    $(".nub3").hide();
			//$(".nub11").show();
			$(".content img").attr("src","images/5.png");
			$(".next img").attr("src","images/50.png");
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
	$(".title2").click(function(){
		$(this).removeClass("rubberBand").addClass("bounceIn");
		pause();
		setTimeout(function(){
			playSound(arr[2]);
		},300)
		$(".nub1").hide();
		$(".nub2").show();
		$(".nub3").hide();
		$(".content img").attr("src","images/6.png");
		$(".next img").attr("src","images/24.png");
		setTimeout(function(){
			$(".page1").addClass("animated rotateOut").fadeOut();
			$(".page2").addClass("animated rotateIn").fadeIn();
			/*setTimeout(function(){
				$(".hand").addClass("animated pulse").fadeIn();
				$(".nub2 .box2 .road").addClass("animated pulse");
					setTimeout(function(){
					$(".hand").addClass("animated pulse").fadeOut();
				$(".nub2 .box2 .road").removeClass("animated pulse");
				},1000)
			},1000)*/
		},800)
	})

	
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
			$(".content img").removeClass("animated slideInLeft slideOutLeft").addClass("animated slideInLeft").show();
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
		}else if($(".nub2").css("display")=="block"){
			pause();
			setTimeout(function(){
				playSound(arr[2]);
			},300)
		}else if($(".nub3").css("display")=="block"){
			if($(".nub31").css("display")=="block"||$(".nub32").css("display")=="block"){
				pause();
				setTimeout(function(){
					playSound(arr[11]);
				},300)
			}else if($(".nub33").css("display")=="block"||$(".nub34").css("display")=="block"){
				pause();
				setTimeout(function(){
					playSound(arr[12]);
				},300)
			}
		}
	});
	//下一步操作
	$(".next").click(function(){
		pause();
		 a1=false;
		 a2=false;
		 a3=false;
		 a4=false;
		 a5=false;
		 a6=false;
		 a7=false;
		 a8=false;
		 a9=false;
	 	 $(".question").removeClass("animated pulse infinite").fadeOut();
	 	$(".succ").hide();
		if($(".nub1").css("display")=="block"){
			setTimeout(function(){
				playSound(arr[2]);
			},300)
			$(".nub1").fadeOut();
			$(".nub2").fadeIn();
			$(".content img").attr("src","images/5.png");
			 $(".next img").attr("src","images/50.png");
			/*setTimeout(function(){
				$(".hand").addClass("animated pulse").fadeIn();
				$(".nub2 .box2 .road").addClass("animated pulse");
					setTimeout(function(){
					$(".hand").addClass("animated pulse").fadeOut();
				$(".nub2 .box2 .road").removeClass("animated pulse");
				},1000)
			},1000)*/
		}else if($(".nub2").css("display")=="block"){
			setTimeout(function(){
				playSound(arr[3]);
			},300)
			$(".nub2").fadeOut();
			$(".nub3").fadeIn();
			$(".content img").attr("src","images/6.png");
			 $(".next img").attr("src","images/26.png");
			/*setTimeout(function(){
					$(".hand2").addClass("animated pulse").fadeIn();
				    $(".nub3 .box2 .mouse2").addClass("animated pulse");
					setTimeout(function(){
						$(".hand2").addClass("animated pulse").fadeOut();
					    $(".nub3 .box2 .mouse2").removeClass("animated pulse");
				   },1000)
				},1000)*/
		}else if($(".nub3").css("display")=="block"){
			$(".nub3").fadeOut();
			$(".page1").removeClass("animated rotateOut").fadeIn()
			$(".page2").removeClass("animated rotateOut").fadeOut()
		}
	});
	//重置操作
	$(".reset").click(function(){
		pause();
		/*$(this).addClass("animated pulse");
		setTimeout(function(){
			$(".next").removeClass("animated pulse")
		},800);*/
		$(".nub2 .box2 .person").removeClass("go").show();
		 $(".nub11 .blue").removeClass("animated pulse infinite");
	 	 $(".succ").removeClass("animated pulse infinite").fadeOut();
	 	 $(".nub2 .box2 .road").removeClass("animated pulse infinite");
	 	 $(".nub3 .box2 .mouse2").removeClass("animated pulse infinite");
		if($(".nub1").css("display")=="block"){
		    $(".content img").attr("src","images/5.png");
				/*setTimeout(function(){
					$(".hand1").addClass("animated pulse").show();
					$(".nub2 .blue").addClass("animated pulse");
					setTimeout(function(){
						$(".hand1").removeClass("animated pulse").fadeOut();
						$(".nub1 .blue").removeClass("animated pulse");
					},800);
				},1000)*/
			
		}else if($(".nub2").css("display")=="block"){
			 $(".content img").attr("src","images/6.png");
			/*setTimeout(function(){
				$(".hand").addClass("animated pulse").fadeIn();
				$(".nub2 .box2 .road").addClass("animated pulse");
					setTimeout(function(){
					$(".hand").addClass("animated pulse").fadeOut();
				$(".nub2 .box2 .road").removeClass("animated pulse");
				},1000)
			},1000)*/
		}else if($(".nub3").css("display")=="block"){
			 $(".content img").attr("src","images/6.png");
						$(".nub1").hide();
						$(".nub2").hide();
						$(".nub3").show();
                		/*setTimeout(function(){
								$(".hand2").addClass("animated pulse").fadeIn();
							    $(".nub3 .box2 .mouse2").addClass("animated pulse");
								setTimeout(function(){
									$(".hand2").addClass("animated pulse").fadeOut();
								    $(".nub3 .box2 .mouse2").removeClass("animated pulse");
							   },1000)
						},1000)*/
		}
	});

	/*声音播放区*/
	var playing;
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
	var source1;
	function playSound1(buffer){
		source1 = context.createBufferSource();//创建一个音频源 相当于是装音频的容器
	    source1.buffer = buffer;//  告诉音频源 播放哪一段音频
	    source1.connect(context.destination);// 连接到输出源
	    source1.start(0);//开始播放
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
     
   
	
	red1.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.2;
		 sy=halfH*0.05;//移动前left:0.4,top:0.31
	},false);
	red1.addEventListener("touchmove",function(e){
		 e.preventDefault();
		 moveY = e.touches[0].pageX; 
		 moveX = e.touches[0].pageY;
		 px=moveX-startX+sx;
		 py=-(moveY-startY-sy);
	     $(this).css({
                "left":px,
                "top":py,                    
                })
	},false);
	red1.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.43*46/477;
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		/*$(".bg").css({
				"position":"absolute",
		 		 "left":winW*0.04,
                "top":halfH*0.88-70,
                "width":winW*0.43,
                "height":boxy+70,
                "background":"#f00"
		 	})*/
		//目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		 if(px>=winW*0.04&&px<=winW*0.47 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
		 	     $(this).css({
	                "left":"6%",
	                "top":"71%",
	                "pointer-events":"none"
                })
                a1=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"20%",
                "top":"5%",                    
                })
		 }
	},false);
	red2.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.36;
		 sy=halfH*0.05;//移动前left:0.4,top:0.31
	},false);
	red2.addEventListener("touchmove",function(e){
		 e.preventDefault();
		 moveY = e.touches[0].pageX; 
		 moveX = e.touches[0].pageY;
		 px=moveX-startX+sx;
		 py=-(moveY-startY-sy);
	     $(this).css({
                "left":px,
                "top":py,                    
                })
	},false);
	red2.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.43*46/477;
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		/*$(".bg").css({
				"position":"absolute",
		 		 "left":winW*0.04,
                "top":halfH*0.88-70,
                "width":winW*0.43,
                "height":boxy+70,
                "background":"#f00"
		 	})*/
		//目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		 if(px>=winW*0.04&&px<=winW*0.47 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
		 	     $(this).css({
	                "left":"10%",
	                "top":"71%",
	                "pointer-events":"none"
                })
                a2=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"36%",
                "top":"5%",                    
                })
		 }
	},false);
	red3.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.52;
		 sy=halfH*0.05;//移动前left:0.4,top:0.31
	},false);
	red3.addEventListener("touchmove",function(e){
		 e.preventDefault();
		 moveY = e.touches[0].pageX; 
		 moveX = e.touches[0].pageY;
		 px=moveX-startX+sx;
		 py=-(moveY-startY-sy);
	     $(this).css({
                "left":px,
                "top":py,                    
                })
	},false);
	red3.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.43*46/477;
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		/*$(".bg").css({
				"position":"absolute",
		 		 "left":winW*0.04,
                "top":halfH*0.88-70,
                "width":winW*0.43,
                "height":boxy+70,
                "background":"#f00"
		 	})*/
		//目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		 if(px>=winW*0.04&&px<=winW*0.47 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
		 	     $(this).css({
	                "left":"14%",
	                "top":"71%",
	                "pointer-events":"none"
                })
                a3=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"53%",
                "top":"5%",                    
                })
		 }
	},false);
	red4.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.68;
		 sy=halfH*0.05;//移动前left:0.4,top:0.31
	},false);
	red4.addEventListener("touchmove",function(e){
		 e.preventDefault();
		 moveY = e.touches[0].pageX; 
		 moveX = e.touches[0].pageY;
		 px=moveX-startX+sx;
		 py=-(moveY-startY-sy);
	     $(this).css({
                "left":px,
                "top":py,                    
                })
	},false);
	red4.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.43*46/477;
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		/*$(".bg").css({
				"position":"absolute",
		 		 "left":winW*0.04,
                "top":halfH*0.88-70,
                "width":winW*0.43,
                "height":boxy+70,
                "background":"#f00"
		 	})*/
		//目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		 if(px>=winW*0.04&&px<=winW*0.47 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
		 	     $(this).css({
	                "left":"18%",
	                "top":"71%",
	                "pointer-events":"none"
                })
                a4=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"68%",
                "top":"5%",                    
                })
		 }
	},false);
	red5.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.1;
		 sy=halfH*0.4;//移动前left:0.4,top:0.31
	},false);
	red5.addEventListener("touchmove",function(e){
		 e.preventDefault();
		 moveY = e.touches[0].pageX; 
		 moveX = e.touches[0].pageY;
		 px=moveX-startX+sx;
		 py=-(moveY-startY-sy);
	     $(this).css({
                "left":px,
                "top":py,                    
                })
	},false);
	red5.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.43*46/477;
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		/*$(".bg").css({
				"position":"absolute",
		 		 "left":winW*0.04,
                "top":halfH*0.88-70,
                "width":winW*0.43,
                "height":boxy+70,
                "background":"#f00"
		 	})*/
		//目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		 if(px>=winW*0.04&&px<=winW*0.47 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
		 	     $(this).css({
	                "left":"22%",
	                "top":"71%",
	                "pointer-events":"none"
                })
                a5=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"10%",
                "top":"40%",                    
                })
		 }
	},false);
	red6.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.27;
		 sy=halfH*0.4;//移动前left:0.4,top:0.31
	},false);
	red6.addEventListener("touchmove",function(e){
		 e.preventDefault();
		 moveY = e.touches[0].pageX; 
		 moveX = e.touches[0].pageY;
		 px=moveX-startX+sx;
		 py=-(moveY-startY-sy);
	     $(this).css({
                "left":px,
                "top":py,                    
                })
	},false);
	red6.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.43*46/477;
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		/*$(".bg").css({
				"position":"absolute",
		 		 "left":winW*0.04,
                "top":halfH*0.88-70,
                "width":winW*0.43,
                "height":boxy+70,
                "background":"#f00"
		 	})*/
		//目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		 if(px>=winW*0.04&&px<=winW*0.47 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
		 	     $(this).css({
	                "left":"26%",
	                "top":"71%",
	                "pointer-events":"none"
                })
                a6=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"27%",
                "top":"40%",                    
                })
		 }
	},false);
	red8.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.61;
		 sy=halfH*0.4;//移动前left:0.4,top:0.31
	},false);
	red8.addEventListener("touchmove",function(e){
		 e.preventDefault();
		 moveY = e.touches[0].pageX; 
		 moveX = e.touches[0].pageY;
		 px=moveX-startX+sx;
		 py=-(moveY-startY-sy);
	     $(this).css({
                "left":px,
                "top":py,                    
                })
	},false);
	red8.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.43*46/477;
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		/*$(".bg").css({
				"position":"absolute",
		 		 "left":winW*0.04,
                "top":halfH*0.88-70,
                "width":winW*0.43,
                "height":boxy+70,
                "background":"#f00"
		 	})*/
		//目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		 if(px>=winW*0.04&&px<=winW*0.47 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
		 	     $(this).css({
	                "left":"30%",
	                "top":"71%",
	                "pointer-events":"none"
                })
                a8=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"61%",
                "top":"40%",                    
                })
		 }
	},false);
	red9.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.78;
		 sy=halfH*0.4;//移动前left:0.4,top:0.31
	},false);
	red9.addEventListener("touchmove",function(e){
		 e.preventDefault();
		 moveY = e.touches[0].pageX; 
		 moveX = e.touches[0].pageY;
		 px=moveX-startX+sx;
		 py=-(moveY-startY-sy);
	     $(this).css({
                "left":px,
                "top":py,                    
                })
	},false);
	red9.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.43*46/477;
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		/*$(".bg").css({
				"position":"absolute",
		 		 "left":winW*0.04,
                "top":halfH*0.88-70,
                "width":winW*0.43,
                "height":boxy+70,
                "background":"#f00"
		 	})*/
		//目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		 if(px>=winW*0.04&&px<=winW*0.47 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
		 	     $(this).css({
	                "left":"34%",
	                "top":"71%",
	                "pointer-events":"none"
                })
                a9=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"78%",
                "top":"40%",                    
                })
		 }
	},false);
	
	blue7.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.44;
		 sy=halfH*0.4;//移动前left:0.4,top:0.31
	},false);
	blue7.addEventListener("touchmove",function(e){
		 e.preventDefault();
		 moveY = e.touches[0].pageX; 
		 moveX = e.touches[0].pageY;
		 px=moveX-startX+sx;
		 py=-(moveY-startY-sy);
	     $(this).css({
                "left":px,
                "top":py,                    
                })
	},false);
	blue7.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.43*45/478;
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		/*$(".bg").css({
				"position":"absolute",
		 		 "left":winW*0.04,
                "top":halfH*0.88-70,
                "width":winW*0.43,
                "height":boxy+70,
                "background":"#f00"
		 	})*/
		//目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		 if(px>=winW*0.53&&px<=winW*0.96 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
		 	     $(this).css({
	                "left":"67%",
	                "top":"71%",
	                "pointer-events":"none"
                })
                a7=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },1000)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"44%",
                "top":"40%",                    
                })
		 }
	},false);
	
	