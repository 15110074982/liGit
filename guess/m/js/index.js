   changeOrientation($print);
     var $print=$("#container");
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
   function getImageH(url){
		var img=new Image();
		img.src="images/40.png"
		var imgW=img.width;//图片真实宽高
		var imgH=img.height;
		//图片相对高度
		imageH=parseInt(winW*imgH/imgW);
		halfH=winH-imageH;
		console.log(imageH,halfH);
	}
    getImageH($(".nav").attr("src"));
	$(".nav").height(imageH);
	$(".question").height(halfH);
	$(".page1").click(function(){
		pause();
		setTimeout(function(){
			playSound(arr[1]);
		},300)
		$(".nub1").show();
		//$(".nub11").show();
		$(".next img").attr("src","images/46.png");
		setTimeout(function(){
			$(".page1").addClass("animated rotateOut").fadeOut();
			$(".page2").addClass("animated rotateIn").fadeIn();
			/*setTimeout(function(){
				$(".hand1").addClass("animated pulse").show();
				$(".nub11 .blue").addClass("animated pulse");
				setTimeout(function(){
					$(".hand1").removeClass("animated pulse").fadeOut();
					$(".nub11 .blue").removeClass("animated pulse");
				},800);
			},1000)*/
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
			pause();
			setTimeout(function(){
				playSound(arr[3]);
			},300)
		}
	});
	$(".next").click(function(){
		pause();
		$(".nub2 .box2 .person").removeClass("go").show();
		 $(".nub11 .blue").removeClass("animated pulse infinite");
	 	 $(".succ").removeClass("animated pulse infinite").fadeOut();
	 	 $(".nub2 .box2 .road").removeClass("animated pulse infinite");
	 	 $(".nub3 .box2 .mouse2").removeClass("animated pulse infinite");
		if($(".nub1").css("display")=="block"){
			setTimeout(function(){
				playSound(arr[2]);
			},300)
			$(".nub1").fadeOut();
			$(".nub2").fadeIn();
			$(".content img").attr("src","images/6.png");
			 $(".next img").attr("src","images/24.png");
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
						},1000)*//**/
		}
	});
	$(".nub11 .blue").click(function(){
		$(".nub11 .blue").addClass("animated pulse");
	    playSound1(arr[4]);
		setTimeout(function(){
			$(".nub11 .blue").removeClass("animated pulse");
			$(".succ").addClass("animated pulse infinite").fadeIn();
			 $(".nub11 .blue").addClass("animated pulse infinite");
		},800);
	});
	$(".red").click(function(){
		playSound1(arr[5]);
	})
	$(".yellow").click(function(){
		playSound1(arr[5]);
	});
	$(".green").click(function(){
		playSound1(arr[5]);
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