var winH;  
var winW;
 var ratio;
var $print=$("#container");
	changeOrientation($print);
	var b1=false;
	var b2=false;
	var c1=false;
	var c2=false;
	var c3=false;
	var c4=false;
	var c5=false;
	var c6=false;
	
	$(".title1").click(function(){
		$(this).removeClass("rubberBand").addClass("bounceIn");
		//pause();
		//playSound(arr[3]);
		$(".nub1").show();
		$(".nub11").show();
		$(".nub12").hide();
		$(".nub13").hide();
		$(".nub2").hide();
		$(".nub3").hide();
		$(".content img").attr("src","images/5.png");
		$(".next img").attr("src","images/37.png");
		setTimeout(function(){
			//$(".page1").addClass("animated rotateOut").fadeOut();
			//$(".page2").addClass("animated rotateIn").fadeIn();
			$(".page1").fadeOut()
			$(".page2").fadeIn();
			setTimeout(function(){
				$(".hand1").addClass("animated pulse").show();
				$(".nub11 .person").addClass("animated pulse infinite");
				setTimeout(function(){
					$(".hand1").removeClass("animated pulse").fadeOut();
				},800);
			},1000)
		},800)
	})
	$(".title2").click(function(){
		$(this).removeClass("rubberBand").addClass("bounceIn");
		pause();
		setTimeout(function(){
			playSound(arr[3]);
		},500)
		$(".nub1").hide();
		$(".nub2").show();
		$(".nub21").show();
		$(".nub22").hide();
		$(".nub3").hide();
		$(".content img").attr("src","images/6.png");
		$(".next img").attr("src","images/37.png");
		setTimeout(function(){
			//$(".page1").addClass("animated rotateOut").fadeOut();
			//$(".page2").addClass("animated rotateIn").fadeIn();
			$(".page1").fadeOut()
			$(".page2").fadeIn();
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
			pause();
		setTimeout(function(){
			playSound(arr[4]);
		},500)
		$(".nub1").hide();
		$(".nub2").hide();
		$(".nub3").show();
		$(".content img").attr("src","images/7.png");
	   $(".next img").attr("src","images/41.png");
		$(this).removeClass("rubberBand").addClass("bounceIn")
		setTimeout(function(){
			//$(".page1").addClass("animated rotateOut").fadeOut()
			//$(".page2").addClass("animated rotateIn").fadeIn();
			$(".page1").fadeOut()
			$(".page2").fadeIn();
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
		if($(".content img").css("display")=="block"){
			//$(".content").slideUp().slow();
			$(".content img").removeClass("animated slideInLeft slideOutLeft").addClass("animated slideOutLeft");
			setTimeout(function(){
				$(".content img").hide();
			},1400);
		}else{
			$(".content img").removeClass("animated slideInLeft slideOutLeft").addClass("animated slideInLeft").show();;
		//$(".content").slideDown().slow();
		}
		
	})
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
	$(".laba").click(function(){
		$(this).addClass("animated pulse");
		setTimeout(function(){
			$(".laba").removeClass("animated pulse")
		},800);
		if($(".nub1").css("display")=="block"){
			//playSound(arr[3]);
		}else if($(".nub2").css("display")=="block"){
			pause();
			setTimeout(function(){
				playSound(arr[3]);
			},500)
		}else if($(".nub3").css("display")=="block"){
			pause(); 
			setTimeout(function(){
				playSound(arr[4]);
			},500)
		}
	});
	$(".next").click(function(){
		pause();
		$(this).addClass("animated pulse");
		setTimeout(function(){
			$(".next").removeClass("animated pulse")
		},800);
		b1=false;
		b2=false;
		c1=false;
		c2=false;
		c3=false;
		c4=false;
		c5=false;
		c6=false;
		 $(".next").removeClass("animated pulse infinite");
		$(".nub13").removeClass("animated pulse infinite").fadeOut();
	 	 $(".succ").removeClass("animated pulse infinite").fadeOut();
	 	   $(".nub22").removeClass("animated pulse infinite");
		if($(".nub1").css("display")=="block"){
			//pause();
			setTimeout(function(){
				playSound(arr[3]);
			},500)
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
			setTimeout(function(){
			   playSound(arr[4]);
		   },500)
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
		pause();
		b1=false;
		b2=false;
		c1=false;
		c2=false;
		c3=false;
		c4=false;
		c5=false;
		c6=false;
		 $(".next").removeClass("animated pulse infinite");
		$(".nub13").removeClass("animated pulse infinite");
	 	 $(".succ").removeClass("animated pulse infinite").fadeOut();
	 	   $(".nub22").removeClass("animated pulse infinite");
		if($(".nub1").css("display")=="block"){
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
		//pause(); 
		//setTimeout(function(){
			playSound(arr[1]);
		//},500)
		setTimeout(function(){
			$(".nub11 .person").removeClass("animated pulse");
			$(".nub11 .number").removeClass("animated pulse");
			$(".nub11 .apple").removeClass("animated pulse");
		},800);
		source.onended=function(){
			playing=false;
			$(".nub11").fadeOut();
			$(".nub12").fadeIn();
			$(".nub13").fadeOut();
		}
	});
	$(".nub12 .person").click(function(){
		$(".nub12 .person").addClass("animated pulse");
		$(".nub12 .number").addClass("animated pulse");
		$(".nub12 .apple").addClass("animated pulse");
		//pause(); 
		//setTimeout(function(){
			playSound(arr[2]);
		//},500)
		setTimeout(function(){
			$(".nub12 .person").removeClass("animated pulse");
			$(".nub12 .number").removeClass("animated pulse");
			$(".nub12 .apple").removeClass("animated pulse");
		},800);
		source.onended=function(){
			playing=false;
			$(".nub11").fadeOut();
			$(".nub12").fadeOut();
			$(".nub13").fadeIn();
		}
	})
	$(".nub13 .person").click(function(){
		$(".nub13 .person").addClass("animated pulse");
		$(".nub13 .number").addClass("animated pulse");
		$(".nub13 .apple").addClass("animated pulse");
		//pause();
		//setTimeout(function(){
			playSound(arr[5]);
		//},500)
		setTimeout(function(){
			$(".nub13 .person").removeClass("animated pulse");
			$(".nub13 .number").removeClass("animated pulse");
			$(".nub13 .apple").removeClass("animated pulse");
		},800);
		source.onended=function(){
			//setTimeout(function(){
			 playSound(arr[6]);
		   //},500)
			$(".succ").addClass("animated pulse infinite").fadeIn();
			$(".nub13").addClass("animated pulse infinite");
			 $(".next").addClass("animated pulse infinite");
			
			
		}
	})
	
    /* var a=document.documentElement.clientWidth;//320
     var b=document.documentElement.clientHeight;//504
     if(a>b){
         winW=a;   
     	 winH=b; 
     	
     }else if(a<b){
     	 winW=b;
     	 winH=a;
     	 
     }*/
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
	bird.addEventListener("touchstart",function(e){start(e,bird,"0.4","0.09")},false);
	bird.addEventListener("touchmove",function(e){move(e,"bird")},false);
	bird.addEventListener("touchend",function(e){
		 e.preventDefault();
		 boxy=winW*0.86*0.28*232/284;
		$(this).removeClass("scale");
		 if(px>=winW*0.86*0.36&&px<=winW*0.86*0.64 && py>=winW*0.86*527/988*0.52 && py<=(winW*0.86*527/988*0.52+boxy)){
		 	 $(this).css({
                "left":"40%",
                "top":"55%",                    
                }).css("pointer-events","none");
                 playSound1(arr[8])
                playSound1(arr[6]);
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
		 	playSound1(arr[7])
		 	 $(this).css({
                "left":"40%",
                "top":"9%",                    
                })
		 }
	},false);
	
	bird1.addEventListener("touchstart",function(e){start(e,bird1,"0.07","0.09")},false);
	bird1.addEventListener("touchmove",function(e){move(e,"bird1")},false);
	bird1.addEventListener("touchend",function(e){
		 e.preventDefault();
		$(this).removeClass("scale");
		 	playSound1(arr[7])
		 	 $(this).css({
                "left":"7%",
                "top":"9%",                    
                })
		
	},false);
	
	bird3.addEventListener("touchstart",function(e){start(e,bird3,"0.73","0.09")},false);
	bird3.addEventListener("touchmove",function(e){move(e,"bird3")},false);
	bird3.addEventListener("touchend",function(e){
		 e.preventDefault();
		$(this).removeClass("scale");
		 	playSound1(arr[7])
		 	 $(this).css({
                "left":"73%",
                "top":"9%",                    
                })
		
	},false);
	
   
    bird11.addEventListener("touchstart",function(e){start(e,bird11,"0.07","0.09")},false);
	bird11.addEventListener("touchmove",function(e){move(e,"bird11")},false);
	bird11.addEventListener("touchend",function(e){
		 e.preventDefault();
		 boxy=winW*0.86*0.28*232/284;
		$(this).removeClass("scale");
		 if(px>=winW*0.86*0.03&&px<=winW*0.86*0.31 && py>=winW*0.86*527/988*0.52 && py<=(winW*0.86*527/988*0.52+boxy)){
		 	 $(this).css({
                "left":"7%",
                "top":"55%",                    
                }).css("pointer-events","none");
                playSound1(arr[8]);
                b1=true;
                if(b1==true&&b2==true){
               	$(".succ").addClass("animated pulse infinite").fadeIn();
			   $(".nub22").addClass("animated pulse infinite");
			  $(".next").addClass("animated pulse infinite");
                 	playSound1(arr[6]);
			
	             }
             
		 }else{
		 	playSound1(arr[7])
		 	 $(this).css({
                "left":"7%",
                "top":"9%",                    
                })
		 }
	},false);
	
	bird13.addEventListener("touchstart",function(e){start(e,bird13,"0.73","0.09")},false);
	bird13.addEventListener("touchmove",function(e){move(e,"bird13")},false);
	bird13.addEventListener("touchend",function(e){
		 e.preventDefault();
		 boxy=winW*0.86*0.28*232/284;
		$(this).removeClass("scale");
		 if(px>=winW*0.86*0.69&&px<=winW*0.86*0.97 && py>=winW*0.86*527/988*0.52 && py<=(winW*0.86*527/988*0.52+boxy)){
		 	 $(this).css({
                "left":"73%",
                "top":"55%",                    
                }).css("pointer-events","none");
               b2=true;
                if(b1==true&&b2==true){
               	$(".succ").addClass("animated pulse infinite").fadeIn();
			   $(".nub22").addClass("animated pulse infinite");
			  $(".next").addClass("animated pulse infinite");
                 	playSound1(arr[6]);
			
	             }
             
		 }else{
		 	playSound1(arr[7])
		 	 $(this).css({
                "left":"73%",
                "top":"9%",                    
                })
		 }
	},false);
	
     bird12.addEventListener("touchstart",function(e){start(e,bird12,"0.4","0.09")},false);
	bird12.addEventListener("touchmove",function(e){move(e,"bird12")},false);
	bird12.addEventListener("touchend",function(e){
		 e.preventDefault();
		$(this).removeClass("scale");
		 	playSound1(arr[7])
		 	 $(this).css({
                "left":"40%",
                "top":"9%",                    
                })
		
	},false);
	
	
	//第三页答题
	no1.addEventListener("touchstart",function(e){start(e,no1,"0.9","0.05")},false);
	no1.addEventListener("touchmove",function(e){move(e,"no1")},false);
	no1.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.86*0.60*49/572; 
		  console.log(boxy)//目标div的高度;
		$(this).removeClass("scale");
		console.log(px,py)
		 
		if(px>=winW*0.86*0.07&&px<=winW*0.86*0.67 && py>=winW*0.86*527/988*0.53-8&& py<=(winW*0.86*527/988*0.53+boxy)){
		$(this).css({
            "left":"61%",
            "top":"50%",                    
            }).css("pointer-events","none");
            playSound1(arr[8]);
			 c1=true;
              if(c1==true&&c2==true&&c3==true&&c4==true&&c5==true&&c6==true){
	          	//alert(lf1);
               	$(".succ").fadeIn();
                 	playSound1(arr[6]);
	          }
		 }else{
		 	playSound1(arr[7])
		 	 $(this).css({
                "left":"90",
                "top":"5%",                    
                })
		 }
		
		
	},false);
	
	no2.addEventListener("touchstart",function(e){start(e,no2,"0.9","0.2")},false);
	no2.addEventListener("touchmove",function(e){move(e,"no2")},false);
	no2.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.86*0.60*51/572; 
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		$(this).removeClass("scale");
		console.log(px,py)
		
        //目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		if(px>=winW*0.86*0.07&&px<=winW*0.86*0.67 && py>=winW*0.86*527/988*0.38-8&& py<=(winW*0.86*527/988*0.38+boxy)){
		$(this).css({
            "left":"61%",
            "top":"36%",                    
            }).css("pointer-events","none");
            playSound1(arr[8]);
			 c2=true;
              if(c1==true&&c2==true&&c3==true&&c4==true&&c5==true&&c6==true){
               	$(".succ").fadeIn();
                 	playSound1(arr[6]);
	          }	
		 }else{
		 	playSound1(arr[7])
		 	 $(this).css({
                "left":"90",
                "top":"20%",                    
                })
		 }
		
		
	},false);
	
	no3.addEventListener("touchstart",function(e){start(e,no3,"0.9","0.36")},false);
	no3.addEventListener("touchmove",function(e){move(e,"no3")},false);
	no3.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.86*0.64*61/600; 
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		$(this).removeClass("scale");
		
		
        //目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		if(px>=winW*0.86*0.07&&px<=winW*0.86*0.71 && py>=winW*0.86*527/988*0.84-8&& py<=(winW*0.86*527/988*0.84+boxy)){
		$(this).css({
            "left":"65%",
            "top":"84%",                    
            }).css("pointer-events","none");
            playSound1(arr[8]);
			 c3=true;
              if(c1==true&&c2==true&&c3==true&&c4==true&&c5==true&&c6==true){
               	$(".succ").fadeIn();
                 	playSound1(arr[6]);
	          }	
		 }else{
		 	playSound1(arr[7])
		 	 $(this).css({
                "left":"90",
                "top":"36%",                    
                })
		 }
		
		
	},false);
	
	no4.addEventListener("touchstart",function(e){start(e,no4,"0.9","0.51")},false);
	no4.addEventListener("touchmove",function(e){move(e,"no4")},false);
	no4.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.86*0.54*57/504; 
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		$(this).removeClass("scale");
	
        //目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		if(px>=winW*0.86*0.07&&px<=winW*0.86*0.61 && py>=winW*0.86*527/988*0.21-8&& py<=(winW*0.86*527/988*0.21+boxy)){
			
		$(this).css({
            "left":"55%",
            "top":"19%",                    
            }).css("pointer-events","none");
            playSound1(arr[8]);
		 c4=true;
              if(c1==true&&c2==true&&c3==true&&c4==true&&c5==true&&c6==true){
               	$(".succ").fadeIn();
                 	playSound1(arr[6]);
	          }	
		 }else{
		 	playSound1(arr[7])
		 	 $(this).css({
                "left":"90",
                "top":"51%",                    
                })
		 }
		
		
	},false);
	
	no5.addEventListener("touchstart",function(e){start(e,no5,"0.9","0.66")},false);
	no5.addEventListener("touchmove",function(e){move(e,"no5")},false);
	no5.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.86*0.54*40/500; 
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		$(this).removeClass("scale");
        //目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		if(px>=winW*0.86*0.07&&px<=winW*0.86*0.63 && py>=winW*0.86*527/988*0.08-15&& py<=(winW*0.86*527/988*0.08+boxy)){
		$(this).css({
            "left":"55%",
            "top":"4%",                    
            }).css("pointer-events","none");
            playSound1(arr[8]);
			 c5=true;
              if(c1==true&&c2==true&&c3==true&&c4==true&&c5==true&&c6==true){
               	$(".succ").fadeIn();
                 	playSound1(arr[6]);
	          }	
		 }else{
		 	playSound1(arr[7])
		 	 $(this).css({
                "left":"90",
                "top":"66%",                    
                })
		 }
		
		
	},false);
	
	no6.addEventListener("touchstart",function(e){start(e,no6,"0.9","0.81")},false);
	no6.addEventListener("touchmove",function(e){move(e,"no6")},false);
	no6.addEventListener("touchend",function(e){
		 e.preventDefault();
		  boxy=winW*0.86*0.64*81/600; 
		  console.log(boxy)//目标div的高度; width:0.60;图片真实高度49；宽度572;
		$(this).removeClass("scale");
		console.log(px,py)
        //目标div的left:0.07，左上角起点;     //width+left        // top更改      //top+boxy 高度
		if(px>=winW*0.86*0.07&&px<=winW*0.86*0.71 && py>=winW*0.86*527/988*0.64-8&& py<=(winW*0.86*527/988*0.64+boxy)){
		$(this).css({
            "left":"65%",
            "top":"66%",                    
            }).css("pointer-events","none");
            playSound1(arr[8]);
			 c6=true;
              if(c1==true&&c2==true&&c3==true&&c4==true&&c5==true&&c6==true){
               	  $(".succ").fadeIn();
                 	playSound1(arr[6]);
	          }	
		 }else{
		 	playSound1(arr[7])
		 	 $(this).css({
                "left":"90",
                "top":"81%",                    
                })
		 }
		
		
	},false);
	

function start(e,id,left,top){
	//alert(window.orientation)
	 if(window.orientation==90||window.orientation==-90){
		 	 startX = e.touches[0].pageX; 
		     startY= e.touches[0].pageY;
		      sx=winW*0.86*left;
		      sy=winW*0.86*527/988*top;
		 }else{
		 	 startY = e.touches[0].pageX; 
			 startX = e.touches[0].pageY;
			 sx=winW*0.86*left;
			 sy=winW*0.86*527/988*top;
		 }
		 $(this).addClass("scale");
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