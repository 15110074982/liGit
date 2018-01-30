var $print=$("#container");
	changeOrientation($print);
	$(".title1").click(function(){
		$(this).removeClass("rubberBand").addClass("bounceIn");
		playSound(arr[3]);
		$(".nub1").show();
		$(".nub11").show();
		$(".nub12").hide();
		$(".nub13").hide();
		$(".nub2").hide();
		$(".nub3").hide();
		$(".content img").attr("src","images/5.png");
		$(".next img").attr("src","images/37.png");
		setTimeout(function(){
			$(".page1").addClass("animated rotateOut").fadeOut();
			$(".page2").addClass("animated rotateIn").fadeIn();
			setTimeout(function(){
				$(".hand1").addClass("animated pulse").show();
				$(".nub11 .person").addClass("animated pulse");
			    $(".nub11 .number").addClass("animated pulse");
			    $(".nub11 .apple").addClass("animated pulse");
				setTimeout(function(){
					$(".hand1").removeClass("animated pulse").fadeOut();
					$(".nub11 .person").removeClass("animated pulse");
					$(".nub11 .number").removeClass("animated pulse");
					$(".nub11 .apple").removeClass("animated pulse");
				},800);
			},1000)
		},800)
	})
	$(".title2").click(function(){
		$(this).removeClass("rubberBand").addClass("bounceIn");
		//pause();
		playSound(arr[3]);
		$(".nub1").hide();
		$(".nub2").show();
		$(".nub21").show();
		$(".nub22").hide();
		$(".nub3").hide();
		$(".content img").attr("src","images/6.png");
		$(".next img").attr("src","images/37.png");
		setTimeout(function(){
			$(".page1").addClass("animated rotateOut").fadeOut();
			$(".page2").addClass("animated rotateIn").fadeIn();
			setTimeout(function(){
				$(".hand").addClass("gusture").show();
					setTimeout(function(){
					$(".hand").hide();
					$(".hand").removeClass("gusture");
				},1000)
			},1000)
			
		},800)
	})
	$(".title3").click(function(){
			//pause();
		playSound(arr[4]);
		$(".nub1").hide();
		$(".nub2").hide();
		$(".nub3").show();
		$(".content img").attr("src","images/7.png");
	   $(".next img").attr("src","images/41.png");
		$(this).removeClass("rubberBand").addClass("bounceIn")
		setTimeout(function(){
			$(".page1").addClass("animated rotateOut").fadeOut()
			$(".page2").addClass("animated rotateIn").fadeIn();
			 setTimeout(function(){
				$(".hand").addClass("gusture1").show();
					setTimeout(function(){
					$(".hand").hide();
					$(".hand").removeClass("gusture1");
				},1000)
			},1000)
		},800)
	})
	$(".tishi").click(function(){
		$(this).addClass("animated tada");
		setTimeout(function(){
			$(".tishi").removeClass("animated tada")
		},800)
		$(".content").fadeToggle();
	})
	var playing;
	function playSound(buffer){
	    source = context.createBufferSource();//创建一个音频源 相当于是装音频的容器
	    source.buffer = buffer;//  告诉音频源 播放哪一段音频
	    source.connect(context.destination);// 连接到输出源
	    source.start(0);//开始播放
	    playing=true;
	    source.onended=function(){
	    	playing=false;
	    }
	   }
	function pause() {
		if(playing){
         source.stop();
      }
    }
	$(".laba").click(function(){
		$(this).addClass("animated pulse");
		setTimeout(function(){
			playSound(arr[3]);
			$(".laba").removeClass("animated pulse")
		},800);
		if($(".nub1").css("display")=="block"){
			
		}else if($(".nub2").css("display")=="block"){
			pause();
			playSound(arr[3]);
		}else if($(".nub3").css("display")=="block"){
			pause(); 
			playSound(arr[4])
		}
	});
	$(".next").click(function(){
		//pause();
		$(this).addClass("animated pulse");
		setTimeout(function(){
			$(".next").removeClass("animated pulse")
		},800);
		
		 $(".next").removeClass("animated pulse infinite");
		$(".nub13").removeClass("animated pulse infinite").fadeOut();
	 	 $(".succ").removeClass("animated pulse infinite").fadeOut();
	 	   $(".nub22").removeClass("animated pulse infinite");
		if($(".nub1").css("display")=="block"){
			//pause();
			playSound(arr[3]);
			$(".nub1").fadeOut();
			$(".nub2").fadeIn();
			$(".nub21").show();
			$(".nub22").hide();
			$(".content img").attr("src","images/6.png");
			 $(".next img").attr("src","images/37.png");
			setTimeout(function(){
				$(".hand").addClass("gusture").show();
					setTimeout(function(){
					$(".hand").hide();
					$(".hand").removeClass("gusture");
				},1000)
			},1000)
		}else if($(".nub2").css("display")=="block"){
				//pause();
			playSound(arr[4]);
			$(".nub2").fadeOut();
			$(".nub3").fadeIn();
			$(".content img").attr("src","images/7.png");
			 $(".next img").attr("src","images/41.png");
			setTimeout(function(){
					$(".hand").addClass("gusture1").show();
						setTimeout(function(){
						$(".hand").hide();
						$(".hand").removeClass("gusture1");
					},1000)
				},1000)
			setTimeout(function(){
				$("#bird11").css({
                "left":"7%",
                "top":"9%", 
                "pointer-events":"auto",
	    		});
	    		$("#bird13").css({
	                "left":"73%",
	                "top":"9%", 
	                "pointer-events":"auto",
	    		});
			},1500)
		}else if($(".nub3").css("display")=="block"){
			//pause();
			$(".nub3").fadeOut();
			$(".page1").removeClass("animated rotateOut").fadeIn()
			$(".page2").removeClass("animated rotateOut").fadeOut()
			               $("#no1").css({
						                "left":"90%",
						                "top":"5%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no2").css({
						                "left":"90%",
						                "top":"20%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no3").css({
						                "left":"90%",
						                "top":"36%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no4").css({
						                "left":"90%",
						                "top":"51%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no5").css({
						                "left":"90%",
						                "top":"66%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no6").css({
						                "left":"90%",
						                "top":"81%", 
						                "pointer-events":"auto",
			                		});
			                		
			
		}
	});
	$(".reset").click(function(){
		//pause();
		$(this).addClass("animated pulse");
		setTimeout(function(){
			$(".next").removeClass("animated pulse")
		},800);
		 $(".next").removeClass("animated pulse infinite");
		$(".nub13").removeClass("animated pulse infinite");
	 	 $(".succ").removeClass("animated pulse infinite").fadeOut();
	 	   $(".nub22").removeClass("animated pulse infinite");
		if($(".nub1").css("display")=="block"){
			//pause();
			if($(".nub11").css("display")=="block"){
				$(".nub11").show();
				$(".nub12").hide();
				$(".nub13").hide();
				$(".nub2").hide();
				$(".nub3").hide();
			}else if($(".nub12").css("display")=="block"){
				$(".nub11").hide();
				$(".nub12").show();
				$(".nub13").hide();
				$(".nub2").hide();
				$(".nub3").hide();
			}else if($(".nub13").css("display")=="block"){
				$(".nub11").hide();
				$(".nub12").hide();
				$(".nub13").show();
				$(".nub2").hide();
				$(".nub3").hide();
			}
			
		    $(".content img").attr("src","images/5.png");
			setTimeout(function(){
				$(".page1").addClass("animated rotateOut").fadeOut();
				$(".page2").addClass("animated rotateIn").fadeIn();
				setTimeout(function(){
					$(".hand1").addClass("animated pulse").show();
					$(".person").addClass("animated pulse");
				    $(".number").addClass("animated pulse");
				    $(".apple").addClass("animated pulse");
					setTimeout(function(){
						$(".hand1").removeClass("animated pulse").fadeOut();
						$(".person").removeClass("animated pulse");
						$(".number").removeClass("animated pulse");
						$(".apple").removeClass("animated pulse");
					},800);
				},1000)
			},800)
		}else if($(".nub2").css("display")=="block"){
			//pause();
			if($(".nub21").css("display")=="block"){
				$(".nub1").hide();
			    $(".nub2").show();
			   $(".nub21").show();
			   $(".nub22").hide();
			   $(".nub3").hide();
			   setTimeout(function(){
					$(".hand").addClass("gusture").show();
						setTimeout(function(){
						$(".hand").hide();
						$(".hand").removeClass("gusture");
					},1000)
				},1000)
			}else if($(".nub22").css("display")=="block"){
				//pause();
				$(".nub1").hide();
			    $(".nub2").show();
			   $(".nub21").hide();
			   $(".nub22").show();
			   $(".nub3").hide();
			   setTimeout(function(){
					$(".hand").css("left","16%").addClass("gusture").show();
						setTimeout(function(){
						$(".hand").hide();
						$(".hand").removeClass("gusture");
					},1000)
				},1000)
			}
			
			$(".content img").attr("src","images/6.png");
        	$("#bird11").css({
                "left":"7%",
                "top":"9%", 
                "pointer-events":"auto",
    		});
    		$("#bird13").css({
                "left":"73%",
                "top":"9%", 
                "pointer-events":"auto",
    		});
    		$("#bird").css({
                "left":"40%",
                "top":"9%", 
                "pointer-events":"auto",
    		});
			//setTimeout(function(){
				//$(".page1").addClass("animated rotateOut").fadeOut();
				//$(".page2").addClass("animated rotateIn").fadeIn();
				
				
			//},800)
		}else if($(".nub3").css("display")=="block"){
						$(".nub1").hide();
						$(".nub2").hide();
						$(".nub21").show();
						$(".nub22").hide();
						$(".nub3").show();
			                      $("#no1").css({
						                "left":"90%",
						                "top":"5%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no2").css({
						                "left":"90%",
						                "top":"20%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no3").css({
						                "left":"90%",
						                "top":"36%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no4").css({
						                "left":"90%",
						                "top":"51%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no5").css({
						                "left":"90%",
						                "top":"66%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no6").css({
						                "left":"90%",
						                "top":"81%", 
						                "pointer-events":"auto",
			                		});
			                		setTimeout(function(){
										$(".hand").addClass("gusture1").show();
											setTimeout(function(){
											$(".hand").hide();
											$(".hand").removeClass("gusture1");
										},1000)
									},1000)
		}
	});
	$(".nub11 .person").click(function(){
		$(".nub11 .person").addClass("animated pulse");
		$(".nub11 .number").addClass("animated pulse");
		$(".nub11 .apple").addClass("animated pulse");
		pause(); 
		//source="";
	    playSound(arr[1]);
		setTimeout(function(){
			$(".nub11 .person").removeClass("animated pulse");
			$(".nub11 .number").removeClass("animated pulse");
			$(".nub11 .apple").removeClass("animated pulse");
		},800);
		source.onended=function(){
			$(".nub11").fadeOut();
			$(".nub12").fadeIn();
			$(".nub13").fadeOut();
		}
	});
	$(".number").click(function(){
		pause();
		playSound(arr[7]);
	})
	$(".apple").click(function(){
		pause();
		playSound(arr[7]);
	});
	$(".nub12 .person").click(function(){
		$(".nub12 .person").addClass("animated pulse");
		$(".nub12 .number").addClass("animated pulse");
		$(".nub12 .apple").addClass("animated pulse");
		pause(); 
	    playSound(arr[2]);
		setTimeout(function(){
			$(".nub12 .person").removeClass("animated pulse");
			$(".nub12 .number").removeClass("animated pulse");
			$(".nub12 .apple").removeClass("animated pulse");
		},800);
		source.onended=function(){
			$(".nub11").fadeOut();
			$(".nub12").fadeOut();
			$(".nub13").fadeIn();
		}
	})
	$(".nub13 .person").click(function(){
		$(".nub13 .person").addClass("animated pulse");
		$(".nub13 .number").addClass("animated pulse");
		$(".nub13 .apple").addClass("animated pulse");
		pause();
	    playSound(arr[5]);
	    
		setTimeout(function(){
			$(".nub13 .person").removeClass("animated pulse");
			$(".nub13 .number").removeClass("animated pulse");
			$(".nub13 .apple").removeClass("animated pulse");
		},800);
		source.onended=function(){
			playSound(arr[6]);
			$(".succ").addClass("animated pulse infinite").fadeIn();
			$(".nub13").addClass("animated pulse infinite");
			 $(".next").addClass("animated pulse infinite");
			
			
		}
	})
	 var winH=$(window).width();    
     var winW=$(window).height();
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
	bird.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.86*0.4;
		 sy=winW*0.86*527/988*0.09;
		 $(this).addClass("scale");
	},false);
	bird.addEventListener("touchmove",function(e){
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
	bird.addEventListener("touchend",function(e){
		 e.preventDefault();
		 boxy=winW*0.86*0.28*232/284;
		$(this).removeClass("scale");
		 if(px>=winW*0.86*0.36&&px<=winW*0.86*0.64 && py>=winW*0.86*527/988*0.52 && py<=(winW*0.86*527/988*0.52+boxy)){
		 	 $(this).css({
                "left":"40%",
                "top":"55%",                    
                }).css("pointer-events","none");
                 playSound(arr[8])
                playSound(arr[6]);
                $(".succ").fadeIn();
                setTimeout(function(){
                	 $(".succ").hide();
                   $(".nub21").fadeOut();
                   $(".nub22").fadeIn();
	                  setTimeout(function(){
	                	$("#bird").css({
			                "left":"40%",
			                "top":"9%", 
			                "pointer-events":"auto",
                		});
	                },600);
                },1200)
             
		 }else{
		 	playSound(arr[7])
		 	 $(this).css({
                "left":"40%",
                "top":"9%",                    
                })
		 }
	},false);
	
	bird1.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.86*0.07;
		 sy=winW*0.86*527/988*0.09;
		 $(this).addClass("scale");
	},false);
	bird1.addEventListener("touchmove",function(e){
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
	bird1.addEventListener("touchend",function(e){
		 e.preventDefault();
		$(this).removeClass("scale");
		 	playSound(arr[7])
		 	 $(this).css({
                "left":"7%",
                "top":"9%",                    
                })
		
	},false);
	
	bird3.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.86*0.73;
		 sy=winW*0.86*527/988*0.09;
		 $(this).addClass("scale");
	},false);
	bird3.addEventListener("touchmove",function(e){
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
	bird3.addEventListener("touchend",function(e){
		 e.preventDefault();
		$(this).removeClass("scale");
		 	playSound(arr[7])
		 	 $(this).css({
                "left":"73%",
                "top":"9%",                    
                })
		
	},false);
	
   
   bird11.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.86*0.07;
		 sy=winW*0.86*527/988*0.09;
		 $(this).addClass("scale");
	},false);
	bird11.addEventListener("touchmove",function(e){
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
	bird11.addEventListener("touchend",function(e){
		 e.preventDefault();
		 boxy=winW*0.86*0.28*232/284;
		$(this).removeClass("scale");
		 if(px>=winW*0.86*0.03&&px<=winW*0.86*0.31 && py>=winW*0.86*527/988*0.52 && py<=(winW*0.86*527/988*0.52+boxy)){
		 	 $(this).css({
                "left":"7%",
                "top":"55%",                    
                }).css("pointer-events","none");
                playSound(arr[8]);
                hd=winW*0.86*527/988*0.09+20;
               hd1=$("#bird11").css("top").split("px")[0];
               hd3=$("#bird13").css("top").split("px")[0];
               if(hd1>=hd&&hd3>=hd){
               	$(".succ").addClass("animated pulse infinite").fadeIn();
			   $(".nub22").addClass("animated pulse infinite");
			  $(".next").addClass("animated pulse infinite");
                 	playSound(arr[6]);
				/*	setTimeout(function(){
			                	 $(".succ").hide();
			                   $(".nub2").fadeOut();
			                   $(".nub3").fadeIn();
			                   $(".content img").attr("src","images/7.png");
			                    setTimeout(function(){
				                	$("#bird11").css({
						                "left":"7%",
						                "top":"9%", 
						                "pointer-events":"auto",
			                		});
			                		$("#bird13").css({
						                "left":"73%",
						                "top":"9%", 
						                "pointer-events":"auto",
			                		});
	                          },600);
			          },1200)*/
	             }
             
		 }else{
		 	playSound(arr[7])
		 	 $(this).css({
                "left":"7%",
                "top":"9%",                    
                })
		 }
	},false);
	
	 bird13.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.86*0.73;
		 sy=winW*0.86*527/988*0.09;
		 $(this).addClass("scale");
	},false);
	bird13.addEventListener("touchmove",function(e){
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
	bird13.addEventListener("touchend",function(e){
		 e.preventDefault();
		 boxy=winW*0.86*0.28*232/284;
		$(this).removeClass("scale");
		 if(px>=winW*0.86*0.69&&px<=winW*0.86*0.97 && py>=winW*0.86*527/988*0.52 && py<=(winW*0.86*527/988*0.52+boxy)){
		 	 $(this).css({
                "left":"73%",
                "top":"55%",                    
                }).css("pointer-events","none");
                playSound(arr[8]);
               hd=winW*0.86*527/988*0.09+20;
               hd1=$("#bird11").css("top").split("px")[0];
               hd3=$("#bird13").css("top").split("px")[0];
               if(hd1>=hd&&hd3>=hd){
               	$(".succ").addClass("animated pulse infinite").fadeIn();
			   $(".nub22").addClass("animated pulse infinite");
			  $(".next").addClass("animated pulse infinite");
                 	playSound(arr[6]);
				/*	setTimeout(function(){
			                	 $(".succ").hide();
			                   $(".nub2").fadeOut();
			                   $(".nub3").fadeIn();
			                   $(".content img").attr("src","images/7.png");
			                    setTimeout(function(){
				                	$("#bird11").css({
						                "left":"7%",
						                "top":"9%", 
						                "pointer-events":"auto",
			                		});
			                		$("#bird13").css({
						                "left":"73%",
						                "top":"9%", 
						                "pointer-events":"auto",
			                		});
	                          },600);
			          },1200)*/
	             }
             
		 }else{
		 	playSound(arr[7])
		 	 $(this).css({
                "left":"73%",
                "top":"9%",                    
                })
		 }
	},false);
	
   bird12.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.86*0.4;
		 sy=winW*0.86*527/988*0.09;
		 $(this).addClass("scale");
	},false);
	bird12.addEventListener("touchmove",function(e){
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
	bird12.addEventListener("touchend",function(e){
		 e.preventDefault();
		$(this).removeClass("scale");
		 	playSound(arr[7])
		 	 $(this).css({
                "left":"40%",
                "top":"9%",                    
                })
		
	},false);
	
	
	
	//第三页答题
	 no1.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 sx=winW*0.86*0.9;
		 sy=winW*0.86*527/988*0.05;
		 $(this).addClass("scale");
	},false);
	no1.addEventListener("touchmove",function(e){
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
	no1.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.86*0.60*49/572; 
		  console.log(boxy)//目标div的高度;
		$(this).removeClass("scale");
		console.log(px,py)
		 
		if(px>=winW*0.86*0.07&&px<=winW*0.86*0.67 && py>=winW*0.86*527/988*0.53-8&& py<=(winW*0.86*527/988*0.53+boxy)){
			/*$(".bg").css({
            "left":winW*0.86*0.07,
            "top":winW*0.86*527/988*0.53-8, 
            "width":winW*0.86*0.67-winW*0.86*0.07,   
            "height":(winW*0.86*527/988*0.53+boxy)-winW*0.86*527/988*0.53+8, 
            "background":"#f00"
            })*/
		$(this).css({
            "left":"61%",
            "top":"50%",                    
            }).css("pointer-events","none");
            playSound(arr[8]);
			 lf=parseInt(winW*0.86*0.9)-10;
	          lf1=parseInt($("#no1").css("left").split("px")[0]);
	          lf2=parseInt($("#no2").css("left").split("px")[0]);
	          lf3=parseInt($("#no3").css("left").split("px")[0]);
	          lf4=parseInt($("#no4").css("left").split("px")[0]);
	          lf5=parseInt($("#no5").css("left").split("px")[0]);
	          lf6=parseInt($("#no6").css("left").split("px")[0]);
	          if(lf1<lf&&lf2<lf&&lf3<lf&&lf4<lf&&lf5<lf&&lf6<lf){
	          	alert(lf1);
               	$(".succ").fadeIn();
                 	playSound(arr[6]);
					/*setTimeout(function(){
			                	 $(".succ").hide();
			               $(".nub3").fadeOut();
			$(".page1").removeClass("animated rotateOut").fadeIn()
			$(".page2").removeClass("animated rotateOut").fadeOut()
			                   $(".content img").attr("src","images/7.png");
			                    setTimeout(function(){
				                	$("#no1").css({
						                "left":"90%",
						                "top":"5%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no2").css({
						                "left":"90%",
						                "top":"20%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no3").css({
						                "left":"90%",
						                "top":"36%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no4").css({
						                "left":"90%",
						                "top":"51%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no5").css({
						                "left":"90%",
						                "top":"66%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no6").css({
						                "left":"90%",
						                "top":"81%", 
						                "pointer-events":"auto",
			                		});
	                          },600);
			          },1200)*/
	             
	          }
		 }else{
		 	playSound(arr[7])
		 	 $(this).css({
                "left":"90",
                "top":"5%",                    
                })
		 }
		
		
	},false);
	
	 no2.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 //源的left 0.9;top 0.2;
		 sx=winW*0.86*0.9;
		 sy=winW*0.86*527/988*0.2;
		 $(this).addClass("scale");
	},false);
	no2.addEventListener("touchmove",function(e){
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
	no2.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.86*0.60*51/572; 
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		$(this).removeClass("scale");
		console.log(px,py)
		/* lf=parseInt(winW*0.86*527/988*0.19);
		 lf1=parseInt(winW*0.86*527/988*0.5);
		 lf2=parseInt(winW*0.86*527/988*0.66);
         lf3=parseInt($("#no5").css("top").split("px")[0]);
         console.log(lf2,lf3);*/
        //目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		if(px>=winW*0.86*0.07&&px<=winW*0.86*0.67 && py>=winW*0.86*527/988*0.38-8&& py<=(winW*0.86*527/988*0.38+boxy)){
			/*$(".bg").css({
            "left":winW*0.86*0.07,
            "top":winW*0.86*527/988*0.38-8, 
            "width":winW*0.86*0.67-winW*0.86*0.07,   
            "height":(winW*0.86*527/988*0.38+boxy)-winW*0.86*527/988*0.38+8, 
            "background":"#f00"
            })*/
		$(this).css({
            "left":"61%",
            "top":"36%",                    
            }).css("pointer-events","none");
            playSound(arr[8]);
			 lf=parseInt(winW*0.86*0.9)-10;
	          lf1=parseInt($("#no1").css("left").split("px")[0]);
	          lf2=parseInt($("#no2").css("left").split("px")[0]);
	          lf3=parseInt($("#no3").css("left").split("px")[0]);
	          lf4=parseInt($("#no4").css("left").split("px")[0]);
	          lf5=parseInt($("#no5").css("left").split("px")[0]);
	          lf6=parseInt($("#no6").css("left").split("px")[0]);
	          if(lf1<lf&&lf2<lf&&lf3<lf&&lf4<lf&&lf5<lf&&lf6<lf){
               	$(".succ").fadeIn();
                 	playSound(arr[6]);
					/*setTimeout(function(){
			                	 $(".succ").hide();
			                 $(".nub3").fadeOut();
			$(".page1").removeClass("animated rotateOut").fadeIn()
			$(".page2").removeClass("animated rotateOut").fadeOut()
			                   $(".content img").attr("src","images/7.png");
			                    setTimeout(function(){
				                	$("#no1").css({
						                "left":"90%",
						                "top":"5%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no2").css({
						                "left":"90%",
						                "top":"20%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no3").css({
						                "left":"90%",
						                "top":"36%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no4").css({
						                "left":"90%",
						                "top":"51%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no5").css({
						                "left":"90%",
						                "top":"66%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no6").css({
						                "left":"90%",
						                "top":"81%", 
						                "pointer-events":"auto",
			                		});
	                          },600);
			          },1200)*/
	             
	          }	
		 }else{
		 	playSound(arr[7])
		 	 $(this).css({
                "left":"90",
                "top":"20%",                    
                })
		 }
		
		
	},false);
	
	 no3.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 //源的left 0.9;top 0.2;
		 sx=winW*0.86*0.9;
		 sy=winW*0.86*527/988*0.36;
		 $(this).addClass("scale");
	},false);
	no3.addEventListener("touchmove",function(e){
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
	no3.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.86*0.64*61/600; 
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		$(this).removeClass("scale");
		console.log(px,py)
		/* lf=parseInt(winW*0.86*527/988*0.19);
		 lf1=parseInt(winW*0.86*527/988*0.5);
		 lf2=parseInt(winW*0.86*527/988*0.66);
         lf3=parseInt($("#no5").css("top").split("px")[0]);
         console.log(lf2,lf3);*/
        //目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		if(px>=winW*0.86*0.07&&px<=winW*0.86*0.71 && py>=winW*0.86*527/988*0.84-8&& py<=(winW*0.86*527/988*0.84+boxy)){
			/*$(".bg").css({
            "left":winW*0.86*0.07,
            "top":winW*0.86*527/988*0.84-8, 
            "width":winW*0.86*0.71-winW*0.86*0.07,   
            "height":(winW*0.86*527/988*0.84+boxy)-winW*0.86*527/988*0.84+8, 
            "background":"#f00"
            })*/
		$(this).css({
            "left":"65%",
            "top":"84%",                    
            }).css("pointer-events","none");
            playSound(arr[8]);
			 lf=parseInt(winW*0.86*0.9)-10;
	          lf1=parseInt($("#no1").css("left").split("px")[0]);
	          lf2=parseInt($("#no2").css("left").split("px")[0]);
	          lf3=parseInt($("#no3").css("left").split("px")[0]);
	          lf4=parseInt($("#no4").css("left").split("px")[0]);
	          lf5=parseInt($("#no5").css("left").split("px")[0]);
	          lf6=parseInt($("#no6").css("left").split("px")[0]);
	          if(lf1<lf&&lf2<lf&&lf3<lf&&lf4<lf&&lf5<lf&&lf6<lf){
               	$(".succ").fadeIn();
                 	playSound(arr[6]);
					/*setTimeout(function(){
			                	 $(".succ").hide();
			                  $(".nub3").fadeOut();
			$(".page1").removeClass("animated rotateOut").fadeIn()
			$(".page2").removeClass("animated rotateOut").fadeOut()
			                   $(".content img").attr("src","images/7.png");
			                    setTimeout(function(){
				                	$("#no1").css({
						                "left":"90%",
						                "top":"5%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no2").css({
						                "left":"90%",
						                "top":"20%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no3").css({
						                "left":"90%",
						                "top":"36%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no4").css({
						                "left":"90%",
						                "top":"51%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no5").css({
						                "left":"90%",
						                "top":"66%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no6").css({
						                "left":"90%",
						                "top":"81%", 
						                "pointer-events":"auto",
			                		});
	                          },600);
			          },1200)*/
	             
	          }	
		 }else{
		 	playSound(arr[7])
		 	 $(this).css({
                "left":"90",
                "top":"36%",                    
                })
		 }
		
		
	},false);
	
	 no4.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 //源的left 0.9;top 0.2;
		 sx=winW*0.86*0.9;
		 sy=winW*0.86*527/988*0.51;
		 $(this).addClass("scale");
	},false);
	no4.addEventListener("touchmove",function(e){
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
	no4.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.86*0.54*57/504; 
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		$(this).removeClass("scale");
		console.log(px,py)
		/* lf=parseInt(winW*0.86*527/988*0.19);
		 lf1=parseInt(winW*0.86*527/988*0.5);
		 lf2=parseInt(winW*0.86*527/988*0.66);
         lf3=parseInt($("#no5").css("top").split("px")[0]);
         console.log(lf2,lf3);*/
        //目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		if(px>=winW*0.86*0.07&&px<=winW*0.86*0.61 && py>=winW*0.86*527/988*0.21-8&& py<=(winW*0.86*527/988*0.21+boxy)){
			/*$(".bg").css({
            "left":winW*0.86*0.07,
            "top":winW*0.86*527/988*0.21-8, 
            "width":winW*0.86*0.61-winW*0.86*0.07,   
            "height":(winW*0.86*527/988*0.21+boxy)-winW*0.86*527/988*0.21+8, 
            "background":"#f00"
            })*/
		$(this).css({
            "left":"55%",
            "top":"19%",                    
            }).css("pointer-events","none");
            playSound(arr[8]);
			 lf=parseInt(winW*0.86*0.9)-10;
	          lf1=parseInt($("#no1").css("left").split("px")[0]);
	          lf2=parseInt($("#no2").css("left").split("px")[0]);
	          lf3=parseInt($("#no3").css("left").split("px")[0]);
	          lf4=parseInt($("#no4").css("left").split("px")[0]);
	          lf5=parseInt($("#no5").css("left").split("px")[0]);
	          lf6=parseInt($("#no6").css("left").split("px")[0]);
	          if(lf1<lf&&lf2<lf&&lf3<lf&&lf4<lf&&lf5<lf&&lf6<lf){
               	$(".succ").fadeIn();
                 	playSound(arr[6]);
					/*setTimeout(function(){
			                	 $(".succ").hide();
			                  $(".nub3").fadeOut();
			$(".page1").removeClass("animated rotateOut").fadeIn()
			$(".page2").removeClass("animated rotateOut").fadeOut()
			                   $(".content img").attr("src","images/7.png");
			                    setTimeout(function(){
				                	$("#no1").css({
						                "left":"90%",
						                "top":"5%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no2").css({
						                "left":"90%",
						                "top":"20%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no3").css({
						                "left":"90%",
						                "top":"36%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no4").css({
						                "left":"90%",
						                "top":"51%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no5").css({
						                "left":"90%",
						                "top":"66%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no6").css({
						                "left":"90%",
						                "top":"81%", 
						                "pointer-events":"auto",
			                		});
	                          },600);
			          },1200)*/
	             
	          }	
		 }else{
		 	playSound(arr[7])
		 	 $(this).css({
                "left":"90",
                "top":"51%",                    
                })
		 }
		
		
	},false);
	
	 no5.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 //源的left 0.9;top 0.2;
		 sx=winW*0.86*0.9;
		 sy=winW*0.86*527/988*0.66;
		 $(this).addClass("scale");
	},false);
	no5.addEventListener("touchmove",function(e){
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
	no5.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.86*0.54*40/500; 
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		$(this).removeClass("scale");
		console.log(px,py)
		/* lf=parseInt(winW*0.86*527/988*0.19);
		 lf1=parseInt(winW*0.86*527/988*0.5);
		 lf2=parseInt(winW*0.86*527/988*0.66);
         lf3=parseInt($("#no5").css("top").split("px")[0]);
         console.log(lf2,lf3);*/
        //目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		if(px>=winW*0.86*0.07&&px<=winW*0.86*0.61 && py>=winW*0.86*527/988*0.08-8&& py<=(winW*0.86*527/988*0.08+boxy)){
		$(this).css({
            "left":"55%",
            "top":"4%",                    
            }).css("pointer-events","none");
            playSound(arr[8]);
			 lf=parseInt(winW*0.86*0.9)-10;
	          lf1=parseInt($("#no1").css("left").split("px")[0]);
	          lf2=parseInt($("#no2").css("left").split("px")[0]);
	          lf3=parseInt($("#no3").css("left").split("px")[0]);
	          lf4=parseInt($("#no4").css("left").split("px")[0]);
	          lf5=parseInt($("#no5").css("left").split("px")[0]);
	          lf6=parseInt($("#no6").css("left").split("px")[0]);
	          if(lf1<lf&&lf2<lf&&lf3<lf&&lf4<lf&&lf5<lf&&lf6<lf){
               	$(".succ").fadeIn();
                 	playSound(arr[6]);
					/*setTimeout(function(){
			                	 $(".succ").hide();
			                  $(".nub3").fadeOut();
			$(".page1").removeClass("animated rotateOut").fadeIn()
			$(".page2").removeClass("animated rotateOut").fadeOut()
			                   $(".page1").fadeIn();
			                   $(".content img").attr("src","images/7.png");
			                    setTimeout(function(){
				                	$("#no1").css({
						                "left":"90%",
						                "top":"5%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no2").css({
						                "left":"90%",
						                "top":"20%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no3").css({
						                "left":"90%",
						                "top":"36%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no4").css({
						                "left":"90%",
						                "top":"51%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no5").css({
						                "left":"90%",
						                "top":"66%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no6").css({
						                "left":"90%",
						                "top":"81%", 
						                "pointer-events":"auto",
			                		});
	                          },600);
			          },1200)*/
	             
	          }	
		 }else{
		 	playSound(arr[7])
		 	 $(this).css({
                "left":"90",
                "top":"66%",                    
                })
		 }
		
		
	},false);
	
	 no6.addEventListener("touchstart",function(e){
		 startY = e.touches[0].pageX; 
		 startX = e.touches[0].pageY;
		 //源的left 0.9;top 0.2;
		 sx=winW*0.86*0.9;
		 sy=winW*0.86*527/988*0.81;
		 $(this).addClass("scale");
	},false);
	no6.addEventListener("touchmove",function(e){
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
	no6.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.86*0.64*81/600; 
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		$(this).removeClass("scale");
		console.log(px,py)
		/* lf=parseInt(winW*0.86*527/988*0.19);
		 lf1=parseInt(winW*0.86*527/988*0.5);
		 lf2=parseInt(winW*0.86*527/988*0.66);
         lf3=parseInt($("#no5").css("top").split("px")[0]);
         console.log(lf2,lf3);*/
        //目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		if(px>=winW*0.86*0.07&&px<=winW*0.86*0.71 && py>=winW*0.86*527/988*0.64-8&& py<=(winW*0.86*527/988*0.64+boxy)){
		$(this).css({
            "left":"65%",
            "top":"66%",                    
            }).css("pointer-events","none");
            playSound(arr[8]);
			 lf=parseInt(winW*0.86*0.9)-10;
	          lf1=parseInt($("#no1").css("left").split("px")[0]);
	          lf2=parseInt($("#no2").css("left").split("px")[0]);
	          lf3=parseInt($("#no3").css("left").split("px")[0]);
	          lf4=parseInt($("#no4").css("left").split("px")[0]);
	          lf5=parseInt($("#no5").css("left").split("px")[0]);
	          lf6=parseInt($("#no6").css("left").split("px")[0]);
	          if(lf1<lf&&lf2<lf&&lf3<lf&&lf4<lf&&lf5<lf&&lf6<lf){
               	$(".succ").fadeIn();
                 	playSound(arr[6]);
					/*setTimeout(function(){
			                	 $(".succ").hide();
			                 $(".nub3").fadeOut();
			$(".page1").removeClass("animated rotateOut").fadeIn()
			$(".page2").removeClass("animated rotateOut").fadeOut()
			                   $(".content img").attr("src","images/7.png");
			                    setTimeout(function(){
				                	$("#no1").css({
						                "left":"90%",
						                "top":"5%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no2").css({
						                "left":"90%",
						                "top":"20%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no3").css({
						                "left":"90%",
						                "top":"36%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no4").css({
						                "left":"90%",
						                "top":"51%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no5").css({
						                "left":"90%",
						                "top":"66%", 
						                "pointer-events":"auto",
			                		});
			                		$("#no6").css({
						                "left":"90%",
						                "top":"81%", 
						                "pointer-events":"auto",
			                		});
	                          },600);
			          },1200)*/
	             
	          }	
		 }else{
		 	playSound(arr[7])
		 	 $(this).css({
                "left":"90",
                "top":"81%",                    
                })
		 }
		
		
	},false);