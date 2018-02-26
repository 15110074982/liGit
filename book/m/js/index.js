
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
big1.addEventListener("touchmove",function(e){ move(e,"big1");},false);
big1.addEventListener("touchend",function(e){ end1(e,"10%","63%","a1","20%","5%","56%","63%","big1");},false);

small2.addEventListener("touchstart",function(e){start(e,small2);},false);
small2.addEventListener("touchmove",function(e){ move(e,"small2");},false);
small2.addEventListener("touchend",function(e){ end1(e,"18%","71%","a2","37%","11%","65%","71%","small2");},false);

small3.addEventListener("touchstart",function(e){start(e,small3);},false);
small3.addEventListener("touchmove",function(e){ move(e,"small3");},false);
small3.addEventListener("touchend",function(e){ end1(e,"22%","71%","a3","51%","11%","69%","71%","small3");},false);

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



//第三题
circle1.addEventListener("touchstart",function(e){start(e,circle1);},false);
circle1.addEventListener("touchmove",function(e){ move(e,"circle1");},false);
circle1.addEventListener("touchend",function(e){ end2(e,"6%","71%","a1","20%","5%","56%","71%","circle1");},false);

square2.addEventListener("touchstart",function(e){start(e,square2);},false);
square2.addEventListener("touchmove",function(e){ move(e,"square2");},false);
square2.addEventListener("touchend",function(e){ end2(e,"14%","73%","a2","35%","6%","65%","73%","square2");},false);

circle3.addEventListener("touchstart",function(e){start(e,circle3);},false);
circle3.addEventListener("touchmove",function(e){ move(e,"circle3");},false);
circle3.addEventListener("touchend",function(e){ end2(e,"14%","71%","a3","52%","5%","60%","71%","circle3");},false);

circle4.addEventListener("touchstart",function(e){start(e,circle4);},false);
circle4.addEventListener("touchmove",function(e){ move(e,"circle4");},false);
circle4.addEventListener("touchend",function(e){ end2(e,"18%","71%","a4","68%","5%","64%","71%","circle4");},false);

circle5.addEventListener("touchstart",function(e){start(e,circle5);},false);
circle5.addEventListener("touchmove",function(e){ move(e,"circle5");},false);
circle5.addEventListener("touchend",function(e){ end2(e,"22%","71%","a5","10%","40%","68%","71%","circle5");},false);

square6.addEventListener("touchstart",function(e){start(e,square6);},false);
square6.addEventListener("touchmove",function(e){ move(e,"square6");},false);
square6.addEventListener("touchend",function(e){ end2(e,"18%","73%","a6","26%","41%","69%","73%","square6");},false);

circle7.addEventListener("touchstart",function(e){start(e,circle7);},false);
circle7.addEventListener("touchmove",function(e){ move(e,"circle7");},false);
circle7.addEventListener("touchend",function(e){ end2(e,"26%","71%","a7","44%","40%","72%","71%","circle7");},false);

square8.addEventListener("touchstart",function(e){start(e,square8);},false);
square8.addEventListener("touchmove",function(e){ move(e,"square8");},false);
square8.addEventListener("touchend",function(e){ end2(e,"22%","73%","a8","60%","41%","73%","73%","square8");},false);

circle9.addEventListener("touchstart",function(e){start(e,circle9);},false);
circle9.addEventListener("touchmove",function(e){ move(e,"circle9");},false);
circle9.addEventListener("touchend",function(e){ end2(e,"30%","71%","a9","78%","40%","76%","71%","circle9");},false);



//第4题
sheep1.addEventListener("touchstart",function(e){start(e,sheep1);},false);
sheep1.addEventListener("touchmove",function(e){ move(e,"sheep1");},false);
sheep1.addEventListener("touchend",function(e){ end3(e,"14%","65%","a1","20%","5%","60%","65%","sheep1");},false);

sheep2.addEventListener("touchstart",function(e){start(e,sheep2);},false);
sheep2.addEventListener("touchmove",function(e){ move(e,"sheep2");},false);
sheep2.addEventListener("touchend",function(e){ end3(e,"18%","65%","a2","36%","5%","64%","65%","sheep2");},false);

sheep3.addEventListener("touchstart",function(e){start(e,sheep3);},false);
sheep3.addEventListener("touchmove",function(e){ move(e,"sheep3");},false);
sheep3.addEventListener("touchend",function(e){ end3(e,"18%","65%","a3","52%","5%","64%","65%","sheep3");},false);

sheep4.addEventListener("touchstart",function(e){start(e,sheep4);},false);
sheep4.addEventListener("touchmove",function(e){ move(e,"sheep4");},false);
sheep4.addEventListener("touchend",function(e){ end3(e,"22%","65%","a4","68%","5%","68%","65%","sheep4");},false);

sheep5.addEventListener("touchstart",function(e){start(e,sheep5);},false);
sheep5.addEventListener("touchmove",function(e){ move(e,"sheep5");},false);
sheep5.addEventListener("touchend",function(e){ end3(e,"22%","65%","a5","10%","40%","68%","65%","sheep5");},false);

sheep6.addEventListener("touchstart",function(e){start(e,sheep6);},false);
sheep6.addEventListener("touchmove",function(e){ move(e,"sheep6");},false);
sheep6.addEventListener("touchend",function(e){ end3(e,"26%","65%","a6","27%","40%","72%","65%","sheep6");},false);

sheep7.addEventListener("touchstart",function(e){start(e,sheep7);},false);
sheep7.addEventListener("touchmove",function(e){ move(e,"sheep7");},false);
sheep7.addEventListener("touchend",function(e){ end3(e,"26%","65%","a7","44%","40%","72%","65%","sheep7");},false);

sheep8.addEventListener("touchstart",function(e){start(e,sheep8);},false);
sheep8.addEventListener("touchmove",function(e){ move(e,"sheep8");},false);
sheep8.addEventListener("touchend",function(e){ end3(e,"30%","65%","a8","61%","40%","76%","65%","sheep8");},false);

sheep9.addEventListener("touchstart",function(e){start(e,sheep9);},false);
sheep9.addEventListener("touchmove",function(e){ move(e,"sheep9");},false);
sheep9.addEventListener("touchend",function(e){ end3(e,"30%","65%","a9","78%","40%","76%","65%","sheep9");},false);



//第3页第一题
rabit1.addEventListener("touchstart",function(e){start(e,rabit1);},false);
rabit1.addEventListener("touchmove",function(e){ move(e,"rabit1");},false);
rabit1.addEventListener("touchend",function(e){ end6(e,"22%","51%","a1","5%","80%","62%","52%","rabit1");},false);

rabit3.addEventListener("touchstart",function(e){start(e,rabit3);},false);
rabit3.addEventListener("touchmove",function(e){ move(e,"rabit3");},false);
rabit3.addEventListener("touchend",function(e){ end6(e,"22%","52%","a2","79%","80%","62%","52%","rabit3");},false);

rabit2.addEventListener("touchstart",function(e){start(e,rabit2);},false);
rabit2.addEventListener("touchmove",function(e){ move(e,"rabit2");},false);
rabit2.addEventListener("touchend",function(e){ end11(e,"42%","75%","rabit2");},false);


cat1.addEventListener("touchstart",function(e){start(e,cat1);},false);
cat1.addEventListener("touchmove",function(e){ move(e,"cat1");},false);
cat1.addEventListener("touchend",function(e){ end7(e,"25%","52%","a1","5%","82%","65%","52%","cat1");},false);

cat3.addEventListener("touchstart",function(e){start(e,cat3);},false);
cat3.addEventListener("touchmove",function(e){ move(e,"cat3");},false);
cat3.addEventListener("touchend",function(e){ end7(e,"21%","50%","a2","77%","78%","61%","50%","cat3");},false);

cat2.addEventListener("touchstart",function(e){start(e,cat2);},false);
cat2.addEventListener("touchmove",function(e){ move(e,"cat2");},false);
cat2.addEventListener("touchend",function(e){ end11(e,"42%","75%","cat2");},false);



melon1.addEventListener("touchstart",function(e){start(e,melon1);},false);
melon1.addEventListener("touchmove",function(e){ move(e,"melon1");},false);
melon1.addEventListener("touchend",function(e){ end8(e,"28%","52%","a1","5%","84%","68%","52%","melon1");},false);

melon3.addEventListener("touchstart",function(e){start(e,melon3);},false);
melon3.addEventListener("touchmove",function(e){ move(e,"melon3");},false);
melon3.addEventListener("touchend",function(e){ end8(e,"22%","48%","a2","79%","80%","62%","48%","melon3");},false);

melon2.addEventListener("touchstart",function(e){start(e,melon2);},false);
melon2.addEventListener("touchmove",function(e){ move(e,"melon2");},false);
melon2.addEventListener("touchend",function(e){ end11(e,"45%","80%","melon2");},false);


mlon2.addEventListener("touchstart",function(e){start(e,mlon2);},false);
mlon2.addEventListener("touchmove",function(e){ move(e,"mlon2");},false);
mlon2.addEventListener("touchend",function(e){ end9(e,"23%","52%","a1","43%","84%","64%","52%","mlon2");},false);

mlon3.addEventListener("touchstart",function(e){start(e,mlon3);},false);
mlon3.addEventListener("touchmove",function(e){ move(e,"mlon3");},false);
mlon3.addEventListener("touchend",function(e){ end9(e,"24%","47%","a2","83%","80%","64%","47%","mlon3");},false);

mlon1.addEventListener("touchstart",function(e){start(e,mlon1);},false);
mlon1.addEventListener("touchmove",function(e){ move(e,"mlon1");},false);
mlon1.addEventListener("touchend",function(e){ end11(e,"5%","84%","mlon1");},false);


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

function end11(e,left1,top1,id){
	 e.preventDefault();
		 	playSound1(arr[14]);
		 	 $("#"+id).css({
                "left":left1,
                "top":top1,                    
                })
}
function end9(e,left1,top1,flag,left2,top2,left3,top3,id){
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
		if(!a1&&!a2){
					 if(px>=winW*0.2&&px<=winW*0.4 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
				 	     $("#"+id).css({
			                "left":left1,
			                "top":top1,
			                "pointer-events":"none"
		               });
		               if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }
		                playSound1(arr[15]);
		                //success();
		                buff=true;
		                eid=id;
				 }else if(px>=winW*0.6&&px<=winW*0.8 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
				 			 $("#"+id).css({
			                "left":left3,
			                "top":top3,
			                "pointer-events":"none"
		                })
		               if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }
		                playSound1(arr[15]);
		                //success();
		                 buff1=true;
		                 eid=id;
				 }else{
				 	playSound1(arr[14]);
				 	  $("#"+id).css({
		                "left":left2,
		                "top":top2,                    
		                })
				 }
		 }else if(buff){//左框有东西
		 	console.log(eid)
		 	 if(eid!="mlon3"){//左框是第一个
				 	 	 if(id=="mlon3"){//第3个在右框
				 	 	  	if(px>=winW*0.6&&px<=winW*0.8 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
							 			 $("#"+id).css({
						                "left":left3,
						                "top":top3,
						                "pointer-events":"none"
					                })
					               if(flag=="a1"){
					               	a1=true;
					               }else if(flag=="a2"){
					               	a2=true;
					               }
					                playSound1(arr[15]);
					                success1();
									 }else{
									 	playSound1(arr[14]);
									 	  $("#"+id).css({
							                "left":left2,
							                "top":top2,                    
							                })
									 }
				 	 	 }
				  }else{//左框是第3题
				    if(id=="mlon2"){//第1个在右框
						  	if(px>=winW*0.6&&px<=winW*0.8 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
						 			 $("#"+id).css({
					                "left":left3,
					                "top":top3,
					                "pointer-events":"none"
				                })
				               if(flag=="a1"){
				               	a1=true;
				               }else if(flag=="a2"){
				               	a2=true;
				               }
				                playSound1(arr[15]);
				                success1();
								 }else{
								 	playSound1(arr[14]);
								 	  $("#"+id).css({
						                "left":left2,
						                "top":top2,                    
						                })
								 }
						 }
				  }
		 }else if(buff1){//右框有东西
		 	 if(eid=="mlon2"){//右框是第1题
		 	 	  if(id=="mlon3"){
					 	      if(px>=winW*0.2&&px<=winW*0.4 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
								 	     $("#"+id).css({
							                "left":left1,
							                "top":top1,
							                "pointer-events":"none"
						                })
						            if(flag=="a1"){
				               	a1=true;
				               }else if(flag=="a2"){
				               	a2=true;
				               }
						                playSound1(arr[15]);
						                success1();
						               // buff=true;
							  }else{
								 	playSound1(arr[14]);
								 	  $("#"+id).css({
						                "left":left2,
						                "top":top2,                    
						                })
							 }
						}
				  }else{//右框是第3题
				  	if(id=="mlon2"){//左框是第1题
				 	 	 	  if(px>=winW*0.2&&px<=winW*0.4 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
							 			 $("#"+id).css({
						                "left":left1,
						                "top":top1,
						                "pointer-events":"none"
					                })
					                if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }
					                playSound1(arr[15]);
					                success1();
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
function end8(e,left1,top1,flag,left2,top2,left3,top3,id){
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
		if(!a1&&!a2){
					 if(px>=winW*0.2&&px<=winW*0.4 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
				 	     $("#"+id).css({
			                "left":left1,
			                "top":top1,
			                "pointer-events":"none"
		               });
		               if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }
		                playSound1(arr[15]);
		                //success();
		                buff=true;
		                eid=id;
				 }else if(px>=winW*0.6&&px<=winW*0.8 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
				 			 $("#"+id).css({
			                "left":left3,
			                "top":top3,
			                "pointer-events":"none"
		                })
		               if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }
		                playSound1(arr[15]);
		                //success();
		                 buff1=true;
		                 eid=id;
				 }else{
				 	playSound1(arr[14]);
				 	  $("#"+id).css({
		                "left":left2,
		                "top":top2,                    
		                })
				 }
		 }else if(buff){//左框有东西
		 	console.log(eid)
		 	 if(eid!="melon3"){//左框是第一个
				 	 	 if(id=="melon3"){//第3个在右框
				 	 	  	if(px>=winW*0.6&&px<=winW*0.8 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
							 			 $("#"+id).css({
						                "left":left3,
						                "top":top3,
						                "pointer-events":"none"
					                })
					               if(flag=="a1"){
					               	a1=true;
					               }else if(flag=="a2"){
					               	a2=true;
					               }
					                playSound1(arr[15]);
					                success1();
									 }else{
									 	playSound1(arr[14]);
									 	  $("#"+id).css({
							                "left":left2,
							                "top":top2,                    
							                })
									 }
				 	 	 }
				  }else{//左框是第3题
				    if(id=="melon1"){//第1个在右框
						  	if(px>=winW*0.6&&px<=winW*0.8 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
						 			 $("#"+id).css({
					                "left":left3,
					                "top":top3,
					                "pointer-events":"none"
				                })
				               if(flag=="a1"){
				               	a1=true;
				               }else if(flag=="a2"){
				               	a2=true;
				               }
				                playSound1(arr[15]);
				                success1();
								 }else{
								 	playSound1(arr[14]);
								 	  $("#"+id).css({
						                "left":left2,
						                "top":top2,                    
						                })
								 }
						 }
				  }
		 }else if(buff1){//右框有东西
		 	 if(eid=="melon1"){//右框是第1题
		 	 	  if(id=="melon3"){
					 	      if(px>=winW*0.2&&px<=winW*0.4 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
								 	     $("#"+id).css({
							                "left":left1,
							                "top":top1,
							                "pointer-events":"none"
						                })
						            if(flag=="a1"){
				               	a1=true;
				               }else if(flag=="a2"){
				               	a2=true;
				               }
						                playSound1(arr[15]);
						                success1();
						               // buff=true;
							  }else{
								 	playSound1(arr[14]);
								 	  $("#"+id).css({
						                "left":left2,
						                "top":top2,                    
						                })
							 }
						}
				  }else{//右框是第3题
				  	if(id=="melon1"){//左框是第1题
				 	 	 	  if(px>=winW*0.2&&px<=winW*0.4 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
							 			 $("#"+id).css({
						                "left":left1,
						                "top":top1,
						                "pointer-events":"none"
					                })
					                if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }
					                playSound1(arr[15]);
					                success1();
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


function end7(e,left1,top1,flag,left2,top2,left3,top3,id){
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
		if(!a1&&!a2){
					 if(px>=winW*0.2&&px<=winW*0.4 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
				 	     $("#"+id).css({
			                "left":left1,
			                "top":top1,
			                "pointer-events":"none"
		               });
		               if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }
		                playSound1(arr[15]);
		                //success();
		                buff=true;
		                eid=id;
				 }else if(px>=winW*0.6&&px<=winW*0.8 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
				 			 $("#"+id).css({
			                "left":left3,
			                "top":top3,
			                "pointer-events":"none"
		                })
		               if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }
		                playSound1(arr[15]);
		                //success();
		                 buff1=true;
		                 eid=id;
				 }else{
				 	playSound1(arr[14]);
				 	  $("#"+id).css({
		                "left":left2,
		                "top":top2,                    
		                })
				 }
		 }else if(buff){//左框有东西
		 	console.log(eid)
		 	 if(eid!="cat3"){//左框是第一个
				 	 	 if(id=="cat3"){//第3个在右框
				 	 	  	if(px>=winW*0.6&&px<=winW*0.8 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
							 			 $("#"+id).css({
						                "left":left3,
						                "top":top3,
						                "pointer-events":"none"
					                })
					               if(flag=="a1"){
					               	a1=true;
					               }else if(flag=="a2"){
					               	a2=true;
					               }
					                playSound1(arr[15]);
					                success1();
									 }else{
									 	playSound1(arr[14]);
									 	  $("#"+id).css({
							                "left":left2,
							                "top":top2,                    
							                })
									 }
				 	 	 }
				  }else{//左框是第3题
				    if(id=="cat1"){//第1个在右框
						  	if(px>=winW*0.6&&px<=winW*0.8 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
						 			 $("#"+id).css({
					                "left":left3,
					                "top":top3,
					                "pointer-events":"none"
				                })
				               if(flag=="a1"){
				               	a1=true;
				               }else if(flag=="a2"){
				               	a2=true;
				               }
				                playSound1(arr[15]);
				                success1();
								 }else{
								 	playSound1(arr[14]);
								 	  $("#"+id).css({
						                "left":left2,
						                "top":top2,                    
						                })
								 }
						 }
				  }
		 }else if(buff1){//右框有东西
		 	 if(eid=="cat1"){//右框是第1题
		 	 	  if(id=="cat3"){
					 	      if(px>=winW*0.2&&px<=winW*0.4 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
								 	     $("#"+id).css({
							                "left":left1,
							                "top":top1,
							                "pointer-events":"none"
						                })
						            if(flag=="a1"){
				               	a1=true;
				               }else if(flag=="a2"){
				               	a2=true;
				               }
						                playSound1(arr[15]);
						                success1();
						               // buff=true;
							  }else{
								 	playSound1(arr[14]);
								 	  $("#"+id).css({
						                "left":left2,
						                "top":top2,                    
						                })
							 }
						}
				  }else{//右框是第3题
				  	if(id=="cat1"){//左框是第1题
				 	 	 	  if(px>=winW*0.2&&px<=winW*0.4 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
							 			 $("#"+id).css({
						                "left":left1,
						                "top":top1,
						                "pointer-events":"none"
					                })
					                if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }
					                playSound1(arr[15]);
					                success1();
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


function end6(e,left1,top1,flag,left2,top2,left3,top3,id){
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
		if(!a1&&!a2){
					 if(px>=winW*0.2&&px<=winW*0.4 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
				 	     $("#"+id).css({
			                "left":left1,
			                "top":top1,
			                "pointer-events":"none"
		               });
		               if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }
		                playSound1(arr[15]);
		                //success();
		                buff=true;
		                eid=id;
				 }else if(px>=winW*0.6&&px<=winW*0.8 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
				 			 $("#"+id).css({
			                "left":left3,
			                "top":top3,
			                "pointer-events":"none"
		                })
		               if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }
		                playSound1(arr[15]);
		                //success();
		                 buff1=true;
		                 eid=id;
				 }else{
				 	playSound1(arr[14]);
				 	  $("#"+id).css({
		                "left":left2,
		                "top":top2,                    
		                })
				 }
		 }else if(buff){//左框有东西
		 	console.log(eid)
		 	 if(eid!="rabit3"){//左框是第一个
				 	 	 if(id=="rabit3"){//第3个在右框
				 	 	  	if(px>=winW*0.6&&px<=winW*0.8 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
							 			 $("#"+id).css({
						                "left":left3,
						                "top":top3,
						                "pointer-events":"none"
					                })
					               if(flag=="a1"){
					               	a1=true;
					               }else if(flag=="a2"){
					               	a2=true;
					               }
					                playSound1(arr[15]);
					                success1();
									 }else{
									 	playSound1(arr[14]);
									 	  $("#"+id).css({
							                "left":left2,
							                "top":top2,                    
							                })
									 }
				 	 	 }
				  }else{//左框是第3题
				    if(id=="rabit1"){//第1个在右框
						  	if(px>=winW*0.6&&px<=winW*0.8 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
						 			 $("#"+id).css({
					                "left":left3,
					                "top":top3,
					                "pointer-events":"none"
				                })
				               if(flag=="a1"){
				               	a1=true;
				               }else if(flag=="a2"){
				               	a2=true;
				               }
				                playSound1(arr[15]);
				                success1();
								 }else{
								 	playSound1(arr[14]);
								 	  $("#"+id).css({
						                "left":left2,
						                "top":top2,                    
						                })
								 }
						 }
				  }
		 }else if(buff1){//右框有东西
		 	 if(eid=="rabit1"){//右框是第1题
		 	 	  if(id=="rabit3"){
					 	      if(px>=winW*0.2&&px<=winW*0.4 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
								 	     $("#"+id).css({
							                "left":left1,
							                "top":top1,
							                "pointer-events":"none"
						                })
						            if(flag=="a1"){
				               	a1=true;
				               }else if(flag=="a2"){
				               	a2=true;
				               }
						                playSound1(arr[15]);
						                success1();
						               // buff=true;
							  }else{
								 	playSound1(arr[14]);
								 	  $("#"+id).css({
						                "left":left2,
						                "top":top2,                    
						                })
							 }
						}
				  }else{//右框是第3题
				  	if(id=="rabit1"){//左框是第1题
				 	 	 	  if(px>=winW*0.2&&px<=winW*0.4 && py>=(halfH*0.45)&& py<=(halfH*0.45+boxy)){
							 			 $("#"+id).css({
						                "left":left1,
						                "top":top1,
						                "pointer-events":"none"
					                })
					                if(flag=="a1"){
		               	a1=true;
		               }else if(flag=="a2"){
		               	a2=true;
		               }
					                playSound1(arr[15]);
					                success1();
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
				  	if(id=="small2"||id=="small3"){
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
				 	 	 }else{
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
				  }
		 }else if(buff1){//右板子有东西
		 	 if(eid=="small2"||eid=="small3"){//右板子是小本子
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
				 	 	 }else{
				 	 	    //左板是大本子
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
				  }else{//第一个动的是右板子是大本子
				  	if(id!="small2"&&id!="small3"){//大本子应该在右板
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
				 	 	 }else{//小子应该在左板
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

function end2(e,left1,top1,flag,left2,top2,left3,top3,id){
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
		 	 if(eid!="square2"&&eid!="square6"&&eid!="square8"){//左板是大本子
				 	 	 if(id=="square2"||id=="square6"||id=="square8"){//小本子在右板
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
				  	if(id=="square2"||id=="square6"||id=="square8"){
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
				 	 	 }else{
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
				  }
		 }else if(buff1){//右板子有东西
		 	 if(eid=="square2"||eid=="square6"||eid=="square8"){//右板子是小本子
		 	 					if(id=="square2"||id=="square6"||id=="square8"){//小本子在右板
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
				 	 	 }else{
				 	 	    //左板是大本子
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
				  }else{//第一个动的是右板子是大本子
				  	if(id!="square2"&&id!="square6"&&id!="square8"){//大本子应该在右板
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
				 	 	 }else{//小子应该在左板
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




function end3(e,left1,top1,flag,left2,top2,left3,top3,id){
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
		 	 if(eid!="sheep1"&&eid!="sheep3"&&eid!="sheep5"&&eid!="sheep7"&&eid!="sheep9"){//左板是大本子
				 	 	 if(id=="sheep1"||id=="sheep3"||id=="sheep5"||id=="sheep7"||id=="sheep9"){//小本子在右板
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
				  	if(id=="sheep1"||id=="sheep3"||id=="sheep5"||id=="sheep7"||id=="sheep9"){
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
				 	 	 }else{
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
				  }
		 }else if(buff1){//右板子有东西
		 	 if(eid=="sheep1"||eid=="sheep3"||eid=="sheep5"||eid=="sheep7"||eid=="sheep9"){//右板子是小本子
		 	 					if(id=="sheep1"||id=="sheep3"||id=="sheep5"||id=="sheep7"||id=="sheep9"){//小本子在右板
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
				 	 	 }else{
				 	 	    //左板是大本子
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
				  }else{//第一个动的是右板子是大本子
				  	if(id!="sheep1"&&id!="sheep3"&&id!="sheep5"&&id!="sheep7"&&id!="sheep9"){//大本子应该在右板
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
				 	 	 }else{//小子应该在左板
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
                	 if(a1&&a2&&a3&&a4&&a5&&a6&&a7&&a8&&a9){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
                }
 
function success1(){
                	 if(a1&&a2){
                	setTimeout(function(){
	                	$(".succ").fadeIn();//改
	                	$(".question").addClass("animated pulse infinite")
	                	 playSound1(arr[13]);
                	 },200)
                }
                }