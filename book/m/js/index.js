
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
			console.log(imageH,halfH);
		}
		
	}
   
    /* 导航内容高度*/
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
	
	var buff=false;
var buff1=false;
var eid="";
window.onload=function(){
	 console.log(imageH,halfH);
	$(".nav").height(imageH);
	$(".question").height(halfH);
   
  

	 /* 标题操作*/
	$(".title1").click(function(){
			$(this).removeClass("fadeInDown").addClass("bounceIn");
			pause();
			setTimeout(function(){
				playSound(arr[1]);
			},300)
			$(".nub1").show();
			$(".nub11").show();
			$(".nub2").hide();
		  $(".nub3").hide();
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
		$(".next img").attr("src","images/50.png");
		setTimeout(function(){
			$(".page1").addClass("animated rotateOut").fadeOut();
			$(".page2").addClass("animated rotateIn").fadeIn();
			setTimeout(function(){
					$(".hand1").addClass("scale").show();
					$(".num3").addClass("scale");
					setTimeout(function(){
						$(".hand1").removeClass("scale").hide();
						$(".num3").removeClass("scale");
					},1500);
			},1000);
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
		 buff=false;
		 buff1=false;
		 eid="";
	 	 $(".question").removeClass("animated pulse infinite");
	 	$(".succ").hide();
	 	$(".next img").attr("src","images/50.png");
		if($(".nub1").css("display")=="block"){
				if($(".nub11").css("display")=="block"){
						$(".nub11").fadeOut();
			      $(".nub12").fadeIn();
			      $(".content img").attr("src","images/5.png");
			      setTimeout(function(){
								$(".hand").addClass("go").show();
								setTimeout(function(){
									$(".hand").removeClass("go").hide();
								},1500);
							 reset();
						},1000);
						
				}else if($(".nub12").css("display")=="block"){
					   $(".nub12").fadeOut();
			       $(".nub13").fadeIn();
			       $(".content img").attr("src","images/5.png");
			        setTimeout(function(){
								$(".hand2").addClass("go1").show();
								setTimeout(function(){
									$(".hand2").removeClass("go1").hide();
								},1500);
							reset();
						},1000)
		    }else if($(".nub13").css("display")=="block"){
					  $(".nub13").fadeOut();
			      $(".nub14").fadeIn();
			      $(".content img").attr("src","images/5.png");
			      setTimeout(function(){
								$(".hand").addClass("go").show();
								setTimeout(function(){
									$(".hand").removeClass("go").hide();
								},1500);
							reset();
						},1000)
		    }else if($(".nub14").css("display")=="block"){
		    	 $(".nub1").fadeOut();
					  $(".nub14").fadeOut();
			      $(".nub2").fadeIn();
			      $(".content img").attr("src","images/6.png");
		      	setTimeout(function(){
								playSound(arr[2]);
						},300)
		      	 setTimeout(function(){
								$(".hand1").addClass("scale").show();
								$(".num3").addClass("scale");
								setTimeout(function(){
									$(".hand1").removeClass("scale").hide();
									$(".num3").removeClass("scale");
								},1500);
								reset();
						},1000);
		    }
		}else if($(".nub2").css("display")=="block"){
			setTimeout(function(){
				playSound(arr[11]);
			},300)
			$(".nub2").fadeOut();
			$(".nub3").fadeIn();
			$(".nub31").show();
			$(".content img").attr("src","images/6.png");
			setTimeout(function(){
					$(".hand3").addClass("go2").fadeIn();
					setTimeout(function(){
						$(".hand3").addClass("go2").fadeOut();
				   },1500)
				},1000)
		}else if($(".nub3").css("display")=="block"){
			if($(".nub31").css("display")=="block"){
					  $(".nub31").fadeOut();
				      $(".nub32").fadeIn();
				      $(".content img").attr("src","images/6.png");
				      setTimeout(function(){
							$(".hand3").addClass("go2").fadeIn();
							setTimeout(function(){
								$(".hand3").addClass("go2").fadeOut();
						    },1500)
							reset();
					  },1000)
						
				}else if($(".nub32").css("display")=="block"){
					setTimeout(function(){
							playSound(arr[12]);
					},300)	
					   $(".nub32").fadeOut();
				       $(".nub33").fadeIn();
				       $(".content img").attr("src","images/6.png");
			          setTimeout(function(){
						$(".hand3").addClass("go2").fadeIn();
						setTimeout(function(){
							$(".hand3").addClass("go2").fadeOut();
					    },1500)
						reset();
					  },1000)
		       }else if($(".nub33").css("display")=="block"){
					   $(".nub33").fadeOut();
				       $(".nub34").fadeIn();
				       $(".next img").attr("src","images/52.png");
				       $(".content img").attr("src","images/6.png");
			          setTimeout(function(){
						$(".hand3").addClass("go2").fadeIn();
						setTimeout(function(){
							$(".hand3").addClass("go2").fadeOut();
					    },1500)
						reset();
					  },1000)
		       }else if($(".nub34").css("display")=="block"){
					   $(".nub34").fadeOut();
				        $(".nub3").fadeOut();
				        $(".page1").removeClass("animated rotateOut").fadeIn()
			           $(".page2").removeClass("animated rotateOut").fadeOut()
				       $(".content img").attr("src","images/5.png");
				        $(".next img").attr("src","images/50.png");
			          setTimeout(function(){
							$(".hand3").addClass("go2").fadeIn();
							setTimeout(function(){
								$(".hand3").addClass("go2").fadeOut();
						    },1500)
						reset();
					  },1000)
		       }
		}
	});
	//重置操作
	$(".reset").click(function(){
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
		  buff=false;
		 buff1=false;
		 eid="";
	 	 $(".question").removeClass("animated pulse infinite");
	 	$(".succ").hide();
	 		reset();
		if($(".nub1").css("display")=="block"){
				 $(".next img").attr("src","images/50.png");
				 $(".content img").attr("src","images/5.png");
				if($(".nub11").css("display")=="block"){
			      setTimeout(function(){
								$(".hand").addClass("go").show();
								setTimeout(function(){
									$(".hand").removeClass("go").hide();
								},1500);
						},1000);
				}else if($(".nub12").css("display")=="block"){
			        setTimeout(function(){
								$(".hand").addClass("go").show();
								setTimeout(function(){
									$(".hand").removeClass("go").hide();
								},1500);
						},1000)
		    }else if($(".nub13").css("display")=="block"){
			      setTimeout(function(){
								$(".hand2").addClass("go1").show();
								setTimeout(function(){
									$(".hand2").removeClass("go1").hide();
								},1500);
						},1000);
		    }else if($(".nub14").css("display")=="block"){
		      	setTimeout(function(){
								$(".hand").addClass("go").show();
								setTimeout(function(){
									$(".hand").removeClass("go").hide();
								},1500);
						},1000)
		    }
			
		}else if($(".nub2").css("display")=="block"){
			 $(".next img").attr("src","images/50.png");
			 $(".content img").attr("src","images/6.png");
				setTimeout(function(){
									$(".hand1").addClass("scale").show();
									$(".num3").addClass("scale");
									setTimeout(function(){
										$(".hand1").removeClass("scale").hide();
										$(".num3").removeClass("scale");
									},1500);
							},1000);
		}else if($(".nub3").css("display")=="block"){
			 $(".content img").attr("src","images/6.png");
						$(".nub1").hide();
						$(".nub2").hide();
						$(".nub3").show();
                		setTimeout(function(){
							$(".hand3").addClass("go2").fadeIn();
							setTimeout(function(){
								$(".hand3").addClass("go2").fadeOut();
						   },1500)
						},1000)
		}
	});

	
	
	
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
     
   
  

  big1.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.2;
		 sy=halfH*0.05;//移动前left:0.4,top:0.31
	},false);
	big1.addEventListener("touchmove",function(e){
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
	big1.addEventListener("touchend",function(e){
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
	                "top":"63%",
	                "pointer-events":"none"
                })
                a1=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"20%",
                "top":"5%",                    
                })
		 }
	},false);

	big4.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.68;
		 sy=halfH*0.05;//移动前left:0.4,top:0.31
	},false);
	big4.addEventListener("touchmove",function(e){
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
	big4.addEventListener("touchend",function(e){
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
	                "top":"63%",
	                "pointer-events":"none"
                })
                a4=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"68%",
                "top":"5%",                    
                })
		 }
	},false);
	big5.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.1;
		 sy=halfH*0.4;//移动前left:0.4,top:0.31
	},false);
	big5.addEventListener("touchmove",function(e){
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
	big5.addEventListener("touchend",function(e){
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
	                "top":"63%",
	                "pointer-events":"none"
                })
                a5=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"10%",
                "top":"40%",                    
                })
		 }
	},false);
	big6.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.27;
		 sy=halfH*0.4;//移动前left:0.4,top:0.31
	},false);
	big6.addEventListener("touchmove",function(e){
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
	big6.addEventListener("touchend",function(e){
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
	                "top":"63%",
	                "pointer-events":"none"
                })
                a6=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"27%",
                "top":"40%",                    
                })
		 }
	},false);
	big7.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.44;
		 sy=halfH*0.4;//移动前left:0.4,top:0.31
	},false);
	big7.addEventListener("touchmove",function(e){
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
	big7.addEventListener("touchend",function(e){
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
	                "top":"63%",
	                "pointer-events":"none"
                })
                a7=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"44%",
                "top":"40%",                    
                })
		 }
	},false);
	big8.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.61;
		 sy=halfH*0.4;//移动前left:0.4,top:0.31
	},false);
	big8.addEventListener("touchmove",function(e){
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
	big8.addEventListener("touchend",function(e){
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
	                "top":"63%",
	                "pointer-events":"none"
                })
                a8=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"61%",
                "top":"40%",                    
                })
		 }
	},false);
	big9.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.78;
		 sy=halfH*0.4;//移动前left:0.4,top:0.31
	},false);
	big9.addEventListener("touchmove",function(e){
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
	big9.addEventListener("touchend",function(e){
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
	                "top":"63%",
	                "pointer-events":"none"
                })
                a9=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"78%",
                "top":"40%",                    
                })
		 }
	},false);
		small2.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.37;
		 sy=halfH*0.11;//移动前left:0.4,top:0.31
	},false);
	small2.addEventListener("touchmove",function(e){
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
	small2.addEventListener("touchend",function(e){
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
	                "left":"65%",
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
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"37%",
                "top":"11%",                    
                })
		 }
	},false);

	small3.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.51;
		 sy=halfH*0.11;//移动前left:0.4,top:0.31
	},false);
	small3.addEventListener("touchmove",function(e){
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
	small3.addEventListener("touchend",function(e){
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
	                "left":"69%",
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
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"51%",
                "top":"11%",                    
                })
		 }
	},false);
	
	
	
	circle1.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.2;
		 sy=halfH*0.05;//移动前left:0.4,top:0.31
	},false);
	circle1.addEventListener("touchmove",function(e){
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
	circle1.addEventListener("touchend",function(e){
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
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"20%",
                "top":"5%",                    
                })
		 }
	},false);
	circle3.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.52;
		 sy=halfH*0.05;//移动前left:0.4,top:0.31
	},false);
	circle3.addEventListener("touchmove",function(e){
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
	circle3.addEventListener("touchend",function(e){
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
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"52%",
                "top":"5%",                    
                })
		 }
	},false);
	circle4.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.68;
		 sy=halfH*0.05;//移动前left:0.4,top:0.31
	},false);
	circle4.addEventListener("touchmove",function(e){
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
	circle4.addEventListener("touchend",function(e){
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
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"68%",
                "top":"5%",                    
                })
		 }
	},false);
	circle5.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.1;
		 sy=halfH*0.4;//移动前left:0.4,top:0.31
	},false);
	circle5.addEventListener("touchmove",function(e){
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
	circle5.addEventListener("touchend",function(e){
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
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"10%",
                "top":"40%",                    
                })
		 }
	},false);
	circle7.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.44;
		 sy=halfH*0.4;//移动前left:0.4,top:0.31
	},false);
	circle7.addEventListener("touchmove",function(e){
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
	circle7.addEventListener("touchend",function(e){
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
                a7=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"44%",
                "top":"40%",                    
                })
		 }
	},false);
	

	circle9.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.78;
		 sy=halfH*0.4;//移动前left:0.4,top:0.31
	},false);
	circle9.addEventListener("touchmove",function(e){
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
	circle9.addEventListener("touchend",function(e){
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
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"78%",
                "top":"40%",                    
                })
		 }
	},false);
	
	
	square2.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.35;
		 sy=halfH*0.06;//移动前left:0.4,top:0.31
	},false);
	square2.addEventListener("touchmove",function(e){
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
	square2.addEventListener("touchend",function(e){
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
	                "left":"65%",
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
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"35%",
                "top":"6%",                    
                })
		 }
	},false);
	
	square6.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.26;
		 sy=halfH*0.41;//移动前left:0.4,top:0.31
	},false);
	square6.addEventListener("touchmove",function(e){
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
	square6.addEventListener("touchend",function(e){
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
                a6=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"26%",
                "top":"41%",                    
                })
		 }
	},false);
	square8.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.6;
		 sy=halfH*0.41;//移动前left:0.4,top:0.31
	},false);
	square8.addEventListener("touchmove",function(e){
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
	square8.addEventListener("touchend",function(e){
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
	                "left":"69%",
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
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"60%",
                "top":"41%",                    
                })
		 }
	},false);
	
	
	
	
/*第一大题4小题*/	
	
	sheep2.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.36;
		 sy=halfH*0.05;//移动前left:0.4,top:0.31
	},false);
	sheep2.addEventListener("touchmove",function(e){
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
	sheep2.addEventListener("touchend",function(e){
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
	                "top":"65%",
	                "pointer-events":"none"
                })
                a2=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"36%",
                "top":"5%",                    
                })
		 }
	},false);
	
	sheep4.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.68;
		 sy=halfH*0.05;//移动前left:0.4,top:0.31
	},false);
	sheep4.addEventListener("touchmove",function(e){
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
	sheep4.addEventListener("touchend",function(e){
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
	                "top":"65%",
	                "pointer-events":"none"
                })
                a4=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"68%",
                "top":"5%",                    
                })
		 }
	},false);
	
	sheep6.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.27;
		 sy=halfH*0.4;//移动前left:0.4,top:0.31
	},false);
	sheep6.addEventListener("touchmove",function(e){
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
	sheep6.addEventListener("touchend",function(e){
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
	                "top":"65%",
	                "pointer-events":"none"
                })
                a6=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"27%",
                "top":"40%",                    
                })
		 }
	},false);
	sheep8.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.61;
		 sy=halfH*0.4;//移动前left:0.4,top:0.31
	},false);
	sheep8.addEventListener("touchmove",function(e){
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
	sheep8.addEventListener("touchend",function(e){
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
	                "top":"65%",
	                "pointer-events":"none"
                })
                a8=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"61%",
                "top":"40%",                    
                })
		 }
	},false);
	
	
	sheep1.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.20;
		 sy=halfH*0.05;//移动前left:0.4,top:0.31
	},false);
	sheep1.addEventListener("touchmove",function(e){
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
	sheep1.addEventListener("touchend",function(e){
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
	                "left":"59%",
	                "top":"65%",
	                "pointer-events":"none"
                })
                a1=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"20%",
                "top":"5%",                    
                })
		 }
	},false);
	sheep3.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.52;
		 sy=halfH*0.05;//移动前left:0.4,top:0.31
	},false);
	sheep3.addEventListener("touchmove",function(e){
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
	sheep3.addEventListener("touchend",function(e){
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
	                "left":"63%",
	                "top":"65%",
	                "pointer-events":"none"
                })
                a3=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"52%",
                "top":"5%",                    
                })
		 }
	},false);
	sheep5.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.10;
		 sy=halfH*0.40;//移动前left:0.4,top:0.31
	},false);
	sheep5.addEventListener("touchmove",function(e){
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
	sheep5.addEventListener("touchend",function(e){
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
	                "top":"65%",
	                "pointer-events":"none"
                })
                a5=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"10%",
                "top":"40%",                    
                })
		 }
	},false);
	sheep7.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.44;
		 sy=halfH*0.40;//移动前left:0.4,top:0.31
	},false);
	sheep7.addEventListener("touchmove",function(e){
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
	sheep7.addEventListener("touchend",function(e){
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
	                "left":"71%",
	                "top":"65%",
	                "pointer-events":"none"
                })
                a7=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"44%",
                "top":"40%",                    
                })
		 }
	},false);
	sheep9.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.78;
		 sy=halfH*0.40;//移动前left:0.4,top:0.31
	},false);
	sheep9.addEventListener("touchmove",function(e){
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
	sheep9.addEventListener("touchend",function(e){
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
	                "left":"76%",
	                "top":"65%",
	                "pointer-events":"none"
                })
                a9=true;//改
                playSound1(arr[15]);
                if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"78%",
                "top":"40%",                    
                })
		 }
	},false);
	
	/*第二大题*/
	$(".num").click(function(){
		pause();
		var index=$(this).index();
		var that=$(this);
		that.addClass("scale");
		setTimeout(function(){
			that.removeClass("scale");
		},1400)
		if(index==1){
				$(".num").eq(7).addClass("scale");
			setTimeout(function(){
				$(".num").eq(7).removeClass("scale");
			},1400);
			setTimeout(function(){
				playSound(arr[3])
			},300)
		}else if(index==2){
				$(".num").eq(6).addClass("scale");
			setTimeout(function(){
				$(".num").eq(6).removeClass("scale");
			},1400);
			setTimeout(function(){
				playSound(arr[4])
			},300)
		}else if(index==3){
				$(".num").eq(5).addClass("scale");
			setTimeout(function(){
				$(".num").eq(5).removeClass("scale");
			},1400);
			setTimeout(function(){
				playSound(arr[5])
			},300)
		}else if(index==4){
				$(".num").eq(4).addClass("scale");
			setTimeout(function(){
				$(".num").eq(4).removeClass("scale");
			},1400);
			setTimeout(function(){
				playSound(arr[6])
			},300)
		}else if(index==5){
				$(".num").eq(3).addClass("scale");
			setTimeout(function(){
				$(".num").eq(3).removeClass("scale");
			},1400);
			setTimeout(function(){
				playSound(arr[7])
			},300)
		}else if(index==6){
				$(".num").eq(2).addClass("scale");
			setTimeout(function(){
				$(".num").eq(2).removeClass("scale");
			},1400);
			setTimeout(function(){
				playSound(arr[8])
			},300)
		}else if(index==7){
				$(".num").eq(1).addClass("scale");
			setTimeout(function(){
				$(".num").eq(1).removeClass("scale");
			},1400);
			setTimeout(function(){
				playSound(arr[9])
			},300)
		}else if(index==8){
				$(".num").eq(0).addClass("scale");
			setTimeout(function(){
				$(".num").eq(0).removeClass("scale");
			},1400);
			setTimeout(function(){
				playSound(arr[10])
			},300)
		}							
	})
	/*第三大题*/
	rabit1.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.05;
		 sy=halfH*0.8;//移动前left:0.4,top:0.31
	},false);
	rabit1.addEventListener("touchmove",function(e){
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
	rabit1.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.2*130/245;
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
		 if(px>=winW*0.2&&px<=winW*0.4 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
		 	     $(this).css({
	                "left":"22%",
	                "top":"51%",
	                "pointer-events":"none"
                })
                a1=true;//改
                playSound1(arr[15]);
                if(a1&&a2){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"5%",
                "top":"80%",                    
                })
		 }
	},false);
	rabit3.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.79;
		 sy=halfH*0.8;//移动前left:0.4,top:0.31
	},false);
	rabit3.addEventListener("touchmove",function(e){
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
	rabit3.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.2*130/245;
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
		 if(px>=winW*0.6&&px<=winW*0.8 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
		 	     $(this).css({
	                "left":"62%",
	                "top":"52%",
	                "pointer-events":"none"
                })
                a2=true;//改
                playSound1(arr[15]);
                if(a1&&a2){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"79%",
                "top":"80%",                    
                })
		 }
	},false);
	rabit2.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.42;
		 sy=halfH*0.75;//移动前left:0.4,top:0.31
	},false);
	rabit2.addEventListener("touchmove",function(e){
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
	rabit2.addEventListener("touchend",function(e){
		 e.preventDefault();
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"42%",
                "top":"75%",                    
                })
		
	},false);
	
	
	cat1.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.05;
		 sy=halfH*0.82;//移动前left:0.4,top:0.31
	},false);
	cat1.addEventListener("touchmove",function(e){
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
	cat1.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.2*130/245;
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
		 if(px>=winW*0.2&&px<=winW*0.4 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
		 	     $(this).css({
	                "left":"25%",
	                "top":"52%",
	                "pointer-events":"none"
                })
                a1=true;//改
                playSound1(arr[15]);
                if(a1&&a2){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"5%",
                "top":"82%",                    
                })
		 }
	},false);
	
	cat3.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.77;
		 sy=halfH*0.78;//移动前left:0.4,top:0.31
	},false);
	cat3.addEventListener("touchmove",function(e){
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
	cat3.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.2*130/245;
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
		 if(px>=winW*0.6&&px<=winW*0.8 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
		 	     $(this).css({
	                "left":"61%",
	                "top":"50%",
	                "pointer-events":"none"
                })
                a2=true;//改
                playSound1(arr[15]);
                if(a1&&a2){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"77%",
                "top":"78%",                    
                })
		 }
	},false);
	
	cat2.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.43;
		 sy=halfH*0.78;//移动前left:0.4,top:0.31
	},false);
	cat2.addEventListener("touchmove",function(e){
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
	cat2.addEventListener("touchend",function(e){
		 e.preventDefault();
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"43%",
                "top":"78%",                    
                })
		
	},false);
	
	melon1.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.05;
		 sy=halfH*0.84;//移动前left:0.4,top:0.31
	},false);
	melon1.addEventListener("touchmove",function(e){
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
	melon1.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.2*130/245;
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
		 if(px>=winW*0.2&&px<=winW*0.4 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
		 	     $(this).css({
	                "left":"28%",
	                "top":"52%",
	                "pointer-events":"none"
                })
                a1=true;//改
                playSound1(arr[15]);
                if(a1&&a2){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"5%",
                "top":"84%",                    
                })
		 }
	},false);
	
	melon3.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.79;
		 sy=halfH*0.80;//移动前left:0.4,top:0.31
	},false);
	melon3.addEventListener("touchmove",function(e){
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
	melon3.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.2*130/245;
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
		 if(px>=winW*0.6&&px<=winW*0.8 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
		 	     $(this).css({
	                "left":"62%",
	                "top":"48%",
	                "pointer-events":"none"
                })
                a2=true;//改
                playSound1(arr[15]);
                if(a1&&a2){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"79%",
                "top":"80%",                    
                })
		 }
	},false);
	
	melon2.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.45;
		 sy=halfH*0.80;//移动前left:0.4,top:0.31
	},false);
	melon2.addEventListener("touchmove",function(e){
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
	melon2.addEventListener("touchend",function(e){
		 e.preventDefault();
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"45%",
                "top":"80%",                    
                })
		
	},false);
	
	mlon2.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.43;
		 sy=halfH*0.84;//移动前left:0.4,top:0.31
	},false);
	mlon2.addEventListener("touchmove",function(e){
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
	mlon2.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.2*130/245;
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
		 if(px>=winW*0.2&&px<=winW*0.4 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
		 	     $(this).css({
	                "left":"23%",
	                "top":"52%",
	                "pointer-events":"none"
                })
                a1=true;//改
                playSound1(arr[15]);
                if(a1&&a2){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"43%",
                "top":"84%",                    
                })
		 }
	},false);
	
	mlon3.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.83;
		 sy=halfH*0.80;//移动前left:0.4,top:0.31
	},false);
	mlon3.addEventListener("touchmove",function(e){
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
	mlon3.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.2*130/245;
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
		 if(px>=winW*0.6&&px<=winW*0.8 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
		 	     $(this).css({
	                "left":"64%",
	                "top":"47%",
	                "pointer-events":"none"
                })
                a2=true;//改
                playSound1(arr[15]);
                if(a1&&a2){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
		 }else{
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"83%",
                "top":"80%",                    
                })
		 }
	},false);
	
	mlon1.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.05;
		 sy=halfH*0.84;//移动前left:0.4,top:0.31
	},false);
	mlon1.addEventListener("touchmove",function(e){
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
	mlon1.addEventListener("touchend",function(e){
		 e.preventDefault();
		 	playSound1(arr[14]);
		 	 $(this).css({
                "left":"5%",
                "top":"84%",                    
                })
		
	},false);
	

}
function reset(){
				$(".red1").css({
	                "left":"20%",
	                "top":"5%",
	                "pointer-events":"auto"
               });
               $(".red2").css({
	                "left":"36%",
	                "top":"5%",
	                "pointer-events":"auto"
                })
               $(".red3").css({
	                "left":"52%",
	                "top":"5%",
	                "pointer-events":"auto"
                })
               $(".red4").css({
	                "left":"68%",
	                "top":"5%",
	                "pointer-events":"auto"
                })
               $(".red5").css({
	                "left":"10%",
	                "top":"40%",
	                "pointer-events":"auto"
                })
               $(".red6").css({
	                "left":"27%",
	                "top":"40%",
	                "pointer-events":"auto"
                })
               $(".blue7").css({
	                "left":"44%",
	                "top":"40%",
	                "pointer-events":"auto"
                })
               $(".red8").css({
	                "left":"61%",
	                "top":"40%",
	                "pointer-events":"auto"
                })
               $(".red9").css({
	                "left":"78%",
	                "top":"40%",
	                "pointer-events":"auto"
                })
							$(".big1").css({
	                "left":"20%",
	                "top":"5%",
	                "pointer-events":"auto"
               });
               $(".small2").css({
	                "left":"37%",
	                "top":"11%",
	                "pointer-events":"auto"
                })
               $(".small3").css({
	                "left":"51%",
	                "top":"11%",
	                "pointer-events":"auto"
                })
               $(".big4").css({
	                "left":"68%",
	                "top":"5%",
	                "pointer-events":"auto"
                })
               $(".big5").css({
	                "left":"10%",
	                "top":"40%",
	                "pointer-events":"auto"
                })
               $(".big6").css({
	                "left":"27%",
	                "top":"40%",
	                "pointer-events":"auto"
                })
               $(".big7").css({
	                "left":"44%",
	                "top":"40%",
	                "pointer-events":"auto"
                })
               $(".big8").css({
	                "left":"61%",
	                "top":"40%",
	                "pointer-events":"auto"
                })
               $(".big9").css({
	                "left":"78%",
	                "top":"40%",
	                "pointer-events":"auto"
               });
               
		          $(".circle1").css({
	                "left":"20%",
	                "top":"5%",
	                "pointer-events":"auto"
               });
               $(".square2").css({
	                "left":"35%",
	                "top":"6%",
	                "pointer-events":"auto"
                })
               $(".circle3").css({
	                "left":"52%",
	                "top":"5%",
	                "pointer-events":"auto"
                })
               $(".circle4").css({
	                "left":"68%",
	                "top":"5%",
	                "pointer-events":"auto"
                })
               $(".circle5").css({
	                "left":"10%",
	                "top":"40%",
	                "pointer-events":"auto"
                })
               $(".square6").css({
	                "left":"26%",
	                "top":"41%",
	                "pointer-events":"auto"
                })
               $(".circle7").css({
	                "left":"44%",
	                "top":"40%",
	                "pointer-events":"auto"
                })
               $(".square8").css({
	                "left":"60%",
	                "top":"41%",
	                "pointer-events":"auto"
                })
               $(".circle9").css({
	                "left":"78%",
	                "top":"40%",
	                "pointer-events":"auto"
                })
               $(".sheep1").css({
	                "left":"20%",
	                "top":"5%",
	                "pointer-events":"auto"
               });
               $(".sheep2").css({
	                "left":"36%",
	                "top":"5%",
	                "pointer-events":"auto"
                })
               $(".sheep3").css({
	                "left":"52%",
	                "top":"5%",
	                "pointer-events":"auto"
                })
               $(".sheep4").css({
	                "left":"68%",
	                "top":"5%",
	                "pointer-events":"auto"
                })
               $(".sheep5").css({
	                "left":"10%",
	                "top":"40%",
	                "pointer-events":"auto"
                })
               $(".sheep6").css({
	                "left":"27%",
	                "top":"40%",
	                "pointer-events":"auto"
                })
               $(".sheep7").css({
	                "left":"44%",
	                "top":"40%",
	                "pointer-events":"auto"
                })
               $(".sheep8").css({
	                "left":"61%",
	                "top":"40%",
	                "pointer-events":"auto"
                })
               $(".sheep9").css({
	                "left":"78%",
	                "top":"40%",
	                "pointer-events":"auto"
                })
                 $(".rabit1").css({
	                "left":"5%",
	                "top":"80%",
	                "pointer-events":"auto"
                })
                   $(".rabit3").css({
	                "left":"79%",
	                "top":"80%",
	                "pointer-events":"auto"
                })
                $(".cat1").css({
	                "left":"5%",
	                "top":"82%",
	                "pointer-events":"auto"
                })
                   $(".cat3").css({
	                "left":"77%",
	                "top":"78%",
	                "pointer-events":"auto"
                })
                 $(".melon1").css({
	                "left":"5%",
	                "top":"84%",
	                "pointer-events":"auto"
                })
                   $(".melon3").css({
	                "left":"79%",
	                "top":"80%",
	                "pointer-events":"auto"
                })
                    $(".mlon2").css({
	                "left":"43%",
	                "top":"84%",
	                "pointer-events":"auto"
                })
                   $(".mlon3").css({
	                "left":"83%",
	                "top":"80%",
	                "pointer-events":"auto"
                })
	}
	/*声音播放区*/
	var playing;
		var source1;
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















red1.addEventListener("touchstart",function(e){start(e,red1);},false);
red1.addEventListener("touchmove",function(e){ move(e,"red1");},false);
red1.addEventListener("touchend",function(e){ end(e,"6%","71%","a1","20%","5%","56%","71%","red1");},false);

red2.addEventListener("touchstart",function(e){start(e,red2);},false);
red2.addEventListener("touchmove",function(e){ move(e,"red2");},false);
red2.addEventListener("touchend",function(e){ end(e,"10%","71%","a2","36%","5%","60%","71%","red2");},false);

red3.addEventListener("touchstart",function(e){start(e,red3);},false);
red3.addEventListener("touchmove",function(e){ move(e,"red3");},false);
red3.addEventListener("touchend",function(e){ end(e,"14%","71%","a3","52%","5%","64%","71%","red3");},false);

red4.addEventListener("touchstart",function(e){start(e,red4);},false);
red4.addEventListener("touchmove",function(e){ move(e,"red4");},false);
red4.addEventListener("touchend",function(e){ end(e,"18%","71%","a4","68%","5%","68%","71%","red4");},false);

red5.addEventListener("touchstart",function(e){start(e,red5);},false);
red5.addEventListener("touchmove",function(e){ move(e,"red5");},false);
red5.addEventListener("touchend",function(e){ end(e,"22%","71%","a5","10%","40%","72%","71%","red5");},false);

red6.addEventListener("touchstart",function(e){start(e,red6);},false);
red6.addEventListener("touchmove",function(e){ move(e,"red6");},false);
red6.addEventListener("touchend",function(e){ end(e,"26%","71%","a6","27%","40%","76%","71%","red6");},false);

red8.addEventListener("touchstart",function(e){start(e,red8);},false);
red8.addEventListener("touchmove",function(e){ move(e,"red8");},false);
red8.addEventListener("touchend",function(e){ end(e,"30%","71%","a8","61%","40%","80%","71%","red8");},false);

red9.addEventListener("touchstart",function(e){start(e,red9);},false);
red9.addEventListener("touchmove",function(e){ move(e,"red9");},false);
red9.addEventListener("touchend",function(e){ end(e,"34%","71%","a9","78%","40%","84%","71%","red9");},false);

blue7.addEventListener("touchstart",function(e){start(e,blue7);},false);
blue7.addEventListener("touchmove",function(e){ move(e,"blue7");},false);
blue7.addEventListener("touchend",function(e){ end(e,"18%","71%","a7","44%","40%","67%","71%","blue7");},false);


//第二题
big1.addEventListener("touchstart",function(e){start(e,big1);},false);
big1.addEventListener("touchmove",function(e){ move(e,"red1");},false);
big1.addEventListener("touchend",function(e){ end1(e,"10%","63%","a1","20%","5%","56%","63%","big1");},false);

small2.addEventListener("touchstart",function(e){start(e,small2);},false);
small2.addEventListener("touchmove",function(e){ move(e,"small2");},false);
small2.addEventListener("touchend",function(e){ end1(e,"14%","71%","a2","37%","11%","65%","71%","small2");},false);

small3.addEventListener("touchstart",function(e){start(e,small3);},false);
small3.addEventListener("touchmove",function(e){ move(e,"small3");},false);
small3.addEventListener("touchend",function(e){ end1(e,"18%","71%","a3","51%","11%","69%","71%","small3");},false);

big4.addEventListener("touchstart",function(e){start(e,big4);},false);
big4.addEventListener("touchmove",function(e){ move(e,"big4");},false);
big4.addEventListener("touchend",function(e){ end1(e,"14%","63%","a4","68%","5%","60%","63%","big4");},false);

big5.addEventListener("touchstart",function(e){start(e,big5);},false);
big5.addEventListener("touchmove",function(e){ move(e,"big5");},false);
big5.addEventListener("touchend",function(e){ end1(e,"18%","63%","a5","10%","40%","64%","63%","big5");},false);

big6.addEventListener("touchstart",function(e){start(e,big6);},false);
big6.addEventListener("touchmove",function(e){ move(e,"big6");},false);
big6.addEventListener("touchend",function(e){ end1(e,"22%","63%","a6","27%","40%","68%","63%","big6");},false);

big7.addEventListener("touchstart",function(e){start(e,big7);},false);
big7.addEventListener("touchmove",function(e){ move(e,"big7");},false);
big7.addEventListener("touchend",function(e){ end1(e,"26%","63%","a7","44%","40%","72%","63%","big7");},false);

big8.addEventListener("touchstart",function(e){start(e,big8);},false);
big8.addEventListener("touchmove",function(e){ move(e,"big8");},false);
big8.addEventListener("touchend",function(e){ end1(e,"30%","63%","a8","61%","40%","76%","63%","big8");},false);

big9.addEventListener("touchstart",function(e){start(e,big9);},false);
big9.addEventListener("touchmove",function(e){ move(e,"big9");},false);
big9.addEventListener("touchend",function(e){ end1(e,"34%","63%","a9","78%","40%","80%","63%","big9");},false);



function start(e,id){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 //sx=winW*0.2;
		 //sy=halfH*0.05;//移动前left:0.4,top:0.31
		 	sx=id.offsetLeft;
		  sy=id.offsetTop;
		  console.log(sx,sy)
	}
function move(e,id){
	e.preventDefault();
		 moveY = e.touches[0].pageX; 
		 moveX = e.touches[0].pageY;
		 px=moveX-startX+sx;
		 py=-(moveY-startY-sy);
		 console.log(px)
	     $("#"+id).css({
                "left":px,
                "top":py,                    
                })
	}
function end(e,left1,top1,flag,left2,top2,left3,top3,id){
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
		if(!a1&&!a2&&!a4&&!a5&&!a6&&!a7&&!a8&&!a9){
				 if(px>=winW*0.04&&px<=winW*0.47 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
				 	     $("#"+id).css({
			                "left":left1,
			                "top":top1,
			                "pointer-events":"none"
		               });
		               if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }else if(flag=="a3"){
		               	a3=true;
		               }else if(flag=="a4"){
		               	a4=true;
		               }else if(flag=="a5"){
		               	a5=true;
		               }else if(flag=="a6"){
		               	a6=true;
		               }else if(flag=="a7"){
		               	a7=true;
		               }else if(flag=="a8"){
		               	a8=true;
		               }else if(flag=="a9"){
		               	a9=true;
		               }
		                playSound1(arr[15]);
		                //success();
		                buff=true;
		                eid=id;
				 }else if(px>=winW*0.53&&px<=winW*0.96 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
				 			 $("#"+id).css({
			                "left":left3,
			                "top":top3,
			                "pointer-events":"none"
		                })
		               if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }else if(flag=="a3"){
		               	a3=true;
		               }else if(flag=="a4"){
		               	a4=true;
		               }else if(flag=="a5"){
		               	a5=true;
		               }else if(flag=="a6"){
		               	a6=true;
		               }else if(flag=="a7"){
		               	a7=true;
		               }else if(flag=="a8"){
		               	a8=true;
		               }else if(flag=="a9"){
		               	a9=true;
		               }
		                playSound1(arr[15]);
		                success();
		                 buff1=true;
		                 eid=id;
				 }else{
				 	playSound1(arr[14]);
				 	  $("#"+id).css({
		                "left":left2,
		                "top":top2,                    
		                })
				 }
		 }else if(buff){//左板有东西
		 	console.log(eid)
		 	 if(eid!="blue7"){//左板是红色
				 	 	 if(id=="blue7"){//蓝本子在右板
				 	 	 		if(px>=winW*0.53&&px<=winW*0.96 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
							 			 $("#"+id).css({
						                "left":left3,
						                "top":top3,
						                "pointer-events":"none"
					                })
					               if(flag=="a1"){
					               	a1=true;
					               }else if(flag=="a2"){
					               	a2=true;
					               }else if(flag=="a3"){
					               	a3=true;
					               }else if(flag=="a4"){
					               	a4=true;
					               }else if(flag=="a5"){
					               	a5=true;
					               }else if(flag=="a6"){
					               	a6=true;
					               }else if(flag=="a7"){
					               	a7=true;
					               }else if(flag=="a8"){
					               	a8=true;
					               }else if(flag=="a9"){
					               	a9=true;
					               }
					                playSound1(arr[15]);
					                success();
									 }else{
									 	playSound1(arr[14]);
									 	  $("#"+id).css({
							                "left":left2,
							                "top":top2,                    
							                })
									 }
				 	 	 }else{//红本子在左板
				 	 	 		if(px>=winW*0.04&&px<=winW*0.47 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
						 	     $("#"+id).css({
					                "left":left1,
					                "top":top1,
					                "pointer-events":"none"
				                })
				           if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }else if(flag=="a3"){
		               	a3=true;
		               }else if(flag=="a4"){
		               	a4=true;
		               }else if(flag=="a5"){
		               	a5=true;
		               }else if(flag=="a6"){
		               	a6=true;
		               }else if(flag=="a7"){
		               	a7=true;
		               }else if(flag=="a8"){
		               	a8=true;
		               }else if(flag=="a9"){
		               	a9=true;
		               }
				                playSound1(arr[15]);
				                success();
				               // buff=true;
					  }else{
						 	playSound1(arr[14]);
						 	  $("#"+id).css({
				                "left":left2,
				                "top":top2,                    
				                })
					 }
				 	 	 	
				 	 	 	
				 	 	 }
			 	      
				  }else{//左板是蓝色本子
				  	//红本子在右板
				  	if(px>=winW*0.53&&px<=winW*0.96 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
				 			 $("#"+id).css({
			                "left":left3,
			                "top":top3,
			                "pointer-events":"none"
		                })
		               if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }else if(flag=="a3"){
		               	a3=true;
		               }else if(flag=="a4"){
		               	a4=true;
		               }else if(flag=="a5"){
		               	a5=true;
		               }else if(flag=="a6"){
		               	a6=true;
		               }else if(flag=="a7"){
		               	a7=true;
		               }else if(flag=="a8"){
		               	a8=true;
		               }else if(flag=="a9"){
		               	a9=true;
		               }
		                playSound1(arr[15]);
		                success();
						 }else{
						 	playSound1(arr[14]);
						 	  $("#"+id).css({
				                "left":left2,
				                "top":top2,                    
				                })
						 }
				  }
		 }else if(buff1){//右板子有东西
		 	 if(eid=="blue7"){//右板子是蓝色本子
		 	 	//左板是红本子
			 	      if(px>=winW*0.04&&px<=winW*0.47 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
						 	     $("#"+id).css({
					                "left":left1,
					                "top":top1,
					                "pointer-events":"none"
				                })
				            if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }else if(flag=="a3"){
		               	a3=true;
		               }else if(flag=="a4"){
		               	a4=true;
		               }else if(flag=="a5"){
		               	a5=true;
		               }else if(flag=="a6"){
		               	a6=true;
		               }else if(flag=="a7"){
		               	a7=true;
		               }else if(flag=="a8"){
		               	a8=true;
		               }else if(flag=="a9"){
		               	a9=true;
		               }
				                playSound1(arr[15]);
				                success();
				               // buff=true;
					  }else{
						 	playSound1(arr[14]);
						 	  $("#"+id).css({
				                "left":left2,
				                "top":top2,                    
				                })
					 }
				  }else{//右板子是红色本子
				  	if(id!="blue7"){//红本子应该在右板
				 	 	 		if(px>=winW*0.53&&px<=winW*0.96 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
							 			 $("#"+id).css({
						                "left":left3,
						                "top":top3,
						                "pointer-events":"none"
					                })
					                if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }else if(flag=="a3"){
		               	a3=true;
		               }else if(flag=="a4"){
		               	a4=true;
		               }else if(flag=="a5"){
		               	a5=true;
		               }else if(flag=="a6"){
		               	a6=true;
		               }else if(flag=="a7"){
		               	a7=true;
		               }else if(flag=="a8"){
		               	a8=true;
		               }else if(flag=="a9"){
		               	a9=true;
		               }
					                playSound1(arr[15]);
					                success();
									 }else{
									 	playSound1(arr[14]);
									 	  $("#"+id).css({
							                "left":left2,
							                "top":top2,                    
							                })
									 }
				 	 	 }else{//蓝本子应该在左板
				 	 	 		if(px>=winW*0.04&&px<=winW*0.47 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
						 	     $("#"+id).css({
					                "left":left1,
					                "top":top1,
					                "pointer-events":"none"
				                })
				           if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }else if(flag=="a3"){
		               	a3=true;
		               }else if(flag=="a4"){
		               	a4=true;
		               }else if(flag=="a5"){
		               	a5=true;
		               }else if(flag=="a6"){
		               	a6=true;
		               }else if(flag=="a7"){
		               	a7=true;
		               }else if(flag=="a8"){
		               	a8=true;
		               }else if(flag=="a9"){
		               	a9=true;
		               }
				                playSound1(arr[15]);
				                success();
				               // buff=true;
					  }else{
						 	playSound1(arr[14]);
						 	  $("#"+id).css({
				                "left":left2,
				                "top":top2,                    
				                })
					 }
				 	 	 	
				 	 	 	
				 	 	 }
				  	
				  
				  }
		 }
	}


function end1(e,left1,top1,flag,left2,top2,left3,top3,id){
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
		if(!a1&&!a2&&!a4&&!a5&&!a6&&!a7&&!a8&&!a9){
				 if(px>=winW*0.04&&px<=winW*0.47 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
				 	     $("#"+id).css({
			                "left":left1,
			                "top":top1,
			                "pointer-events":"none"
		               });
		               if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }else if(flag=="a3"){
		               	a3=true;
		               }else if(flag=="a4"){
		               	a4=true;
		               }else if(flag=="a5"){
		               	a5=true;
		               }else if(flag=="a6"){
		               	a6=true;
		               }else if(flag=="a7"){
		               	a7=true;
		               }else if(flag=="a8"){
		               	a8=true;
		               }else if(flag=="a9"){
		               	a9=true;
		               }
		                playSound1(arr[15]);
		                //success();
		                buff=true;
		                eid=id;
				 }else if(px>=winW*0.53&&px<=winW*0.96 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
				 			 $("#"+id).css({
			                "left":left3,
			                "top":top3,
			                "pointer-events":"none"
		                })
		               if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }else if(flag=="a3"){
		               	a3=true;
		               }else if(flag=="a4"){
		               	a4=true;
		               }else if(flag=="a5"){
		               	a5=true;
		               }else if(flag=="a6"){
		               	a6=true;
		               }else if(flag=="a7"){
		               	a7=true;
		               }else if(flag=="a8"){
		               	a8=true;
		               }else if(flag=="a9"){
		               	a9=true;
		               }
		                playSound1(arr[15]);
		                success();
		                 buff1=true;
		                 eid=id;
				 }else{
				 	playSound1(arr[14]);
				 	  $("#"+id).css({
		                "left":left2,
		                "top":top2,                    
		                })
				 }
		 }else if(buff){//左板有东西
		 	console.log(eid)
		 	 if(eid!="small2"&&eid!="small3"){//左板是大本子
				 	 	 if(id=="small2"||id=="small3"){//小本子在右板
				 	 	 		if(px>=winW*0.53&&px<=winW*0.96 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
							 			 $("#"+id).css({
						                "left":left3,
						                "top":top3,
						                "pointer-events":"none"
					                })
					               if(flag=="a1"){
					               	a1=true;
					               }else if(flag=="a2"){
					               	a2=true;
					               }else if(flag=="a3"){
					               	a3=true;
					               }else if(flag=="a4"){
					               	a4=true;
					               }else if(flag=="a5"){
					               	a5=true;
					               }else if(flag=="a6"){
					               	a6=true;
					               }else if(flag=="a7"){
					               	a7=true;
					               }else if(flag=="a8"){
					               	a8=true;
					               }else if(flag=="a9"){
					               	a9=true;
					               }
					                playSound1(arr[15]);
					                success();
									 }else{
									 	playSound1(arr[14]);
									 	  $("#"+id).css({
							                "left":left2,
							                "top":top2,                    
							                })
									 }
				 	 	 }else{//大本子在左板
				 	 	 		if(px>=winW*0.04&&px<=winW*0.47 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
						 	     $("#"+id).css({
					                "left":left1,
					                "top":top1,
					                "pointer-events":"none"
				                })
				           if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }else if(flag=="a3"){
		               	a3=true;
		               }else if(flag=="a4"){
		               	a4=true;
		               }else if(flag=="a5"){
		               	a5=true;
		               }else if(flag=="a6"){
		               	a6=true;
		               }else if(flag=="a7"){
		               	a7=true;
		               }else if(flag=="a8"){
		               	a8=true;
		               }else if(flag=="a9"){
		               	a9=true;
		               }
				                playSound1(arr[15]);
				                success();
				               // buff=true;
					  }else{
						 	playSound1(arr[14]);
						 	  $("#"+id).css({
				                "left":left2,
				                "top":top2,                    
				                })
					 }
				 	 	 	
				 	 	 	
				 	 	 }
			 	      
				  }else{//左板是小本子
				  	//大本子在右板
				  	if(px>=winW*0.53&&px<=winW*0.96 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
				 			 $("#"+id).css({
			                "left":left3,
			                "top":top3,
			                "pointer-events":"none"
		                })
		               if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }else if(flag=="a3"){
		               	a3=true;
		               }else if(flag=="a4"){
		               	a4=true;
		               }else if(flag=="a5"){
		               	a5=true;
		               }else if(flag=="a6"){
		               	a6=true;
		               }else if(flag=="a7"){
		               	a7=true;
		               }else if(flag=="a8"){
		               	a8=true;
		               }else if(flag=="a9"){
		               	a9=true;
		               }
		                playSound1(arr[15]);
		                success();
						 }else{
						 	playSound1(arr[14]);
						 	  $("#"+id).css({
				                "left":left2,
				                "top":top2,                    
				                })
						 }
				  }
		 }else if(buff1){//右板子有东西
		 	 if(eid=="blue7"){//右板子是蓝色本子
		 	 	//左板是红本子
			 	      if(px>=winW*0.04&&px<=winW*0.47 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
						 	     $("#"+id).css({
					                "left":left1,
					                "top":top1,
					                "pointer-events":"none"
				                })
				            if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }else if(flag=="a3"){
		               	a3=true;
		               }else if(flag=="a4"){
		               	a4=true;
		               }else if(flag=="a5"){
		               	a5=true;
		               }else if(flag=="a6"){
		               	a6=true;
		               }else if(flag=="a7"){
		               	a7=true;
		               }else if(flag=="a8"){
		               	a8=true;
		               }else if(flag=="a9"){
		               	a9=true;
		               }
				                playSound1(arr[15]);
				                success();
				               // buff=true;
					  }else{
						 	playSound1(arr[14]);
						 	  $("#"+id).css({
				                "left":left2,
				                "top":top2,                    
				                })
					 }
				  }else{//右板子是红色本子
				  	if(id!="blue7"){//红本子应该在右板
				 	 	 		if(px>=winW*0.53&&px<=winW*0.96 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
							 			 $("#"+id).css({
						                "left":left3,
						                "top":top3,
						                "pointer-events":"none"
					                })
					                if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }else if(flag=="a3"){
		               	a3=true;
		               }else if(flag=="a4"){
		               	a4=true;
		               }else if(flag=="a5"){
		               	a5=true;
		               }else if(flag=="a6"){
		               	a6=true;
		               }else if(flag=="a7"){
		               	a7=true;
		               }else if(flag=="a8"){
		               	a8=true;
		               }else if(flag=="a9"){
		               	a9=true;
		               }
					                playSound1(arr[15]);
					                success();
									 }else{
									 	playSound1(arr[14]);
									 	  $("#"+id).css({
							                "left":left2,
							                "top":top2,                    
							                })
									 }
				 	 	 }else{//蓝本子应该在左板
				 	 	 		if(px>=winW*0.04&&px<=winW*0.47 && py>=(halfH*0.88-70)&& py<=(halfH*0.88+boxy)){
						 	     $("#"+id).css({
					                "left":left1,
					                "top":top1,
					                "pointer-events":"none"
				                })
				           if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }else if(flag=="a3"){
		               	a3=true;
		               }else if(flag=="a4"){
		               	a4=true;
		               }else if(flag=="a5"){
		               	a5=true;
		               }else if(flag=="a6"){
		               	a6=true;
		               }else if(flag=="a7"){
		               	a7=true;
		               }else if(flag=="a8"){
		               	a8=true;
		               }else if(flag=="a9"){
		               	a9=true;
		               }
				                playSound1(arr[15]);
				                success();
				               // buff=true;
					  }else{
						 	playSound1(arr[14]);
						 	  $("#"+id).css({
				                "left":left2,
				                "top":top2,                    
				                })
					 }
				 	 	 	
				 	 	 	
				 	 	 }
				  	
				  
				  }
		 }
	}













 function success(){
 	console.log(a1,a2,a3,a4,a5,a6,a7,a8,a9)
                	 if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
                }