	var str="";
	 var pg;
	var length=$(".pad").length;
	for(var i=1;i<length;i++){
		str+='<li><div class="circle1"><div class="circle"></div></div><p class="num">'+i+'</p></li>'
	}
	$(".list-group").html(str);
	var $print=$("#container");
	changeOrientation($print);
	  //按钮点击操作
	$(".icon").click(function(){
			 $(".page1").show();
			$(".page1").removeClass("show");
		    $(".page1").addClass("show");
		       setTimeout(function(){
		    	   $(".page1").removeClass("show");
		    	   for(var i=2;i<length+1;i++){
		    	     $(".page"+i).fadeOut();
		    	   }
		    },1400);
		  $("#media").attr("src","");
		  pause();
		  pg=length;
	});
	$(".button").click(function(){
		$(".button").removeClass("animate");
		 $(this).addClass("animate");
		 var btn=$(this);
        setTimeout(function(){
            btn.removeClass("animate");    
        },1500)
	});
	var list;
	//倾听操作
	$(".listen").click(function(){
		$("#media").attr("src","audio/P"+length+".mp3");
		$("#media")[0].play();
		$(".start").css("pointer-events","auto");
		$(".read").css("pointer-events","auto");
		list=false;
		 pause();
		 pg=length;
	});
	var quite=true;
	var currentPage="";
	//静音操作
	$(".quite").click(function(){
		    pause();
		    pg=length;
		    $("#media").attr("src","");
		    $(".start").css("pointer-events","auto");
		$(".read").css("pointer-events","auto");
		    $(".page1").removeClass("fade");
		    $(".page1").addClass("fade");
		     $(".page2").fadeIn();
		    for(var i=3;i<length+1;i++){
		       $(".page"+i).fadeOut();
		    }
		     $(".left").show();
		    $(".right").show();
		      $("li .circle").removeClass("active1");
		      $("li").eq(0).find(".circle").addClass("active1");
		      $("li .num").removeClass("active");
		      $("li").eq(0).find(".num").addClass("active");
		      quite=false;
		    setTimeout(function(){
		    	$(".page1").removeClass("fade");
		    	  $(".page1").hide();
		    },1400);
	});
	//播放操作
     var isPlaying = false; 
     var source;
     var read;
	$(".start").click(function(){
		$("#media").attr("src","");
		$(".start").css("pointer-events","none");
		$(".read").css("pointer-events","auto");
		 pg=0;
		// $(".left").hide();
		//$(".right").hide();
		 $(this).addClass("animate");
		 var btn=$(this);
        setTimeout(function(){
            btn.removeClass("animate");    
        },1500)
        isPlaying=true;
        list=true;
        quite=true;
	    playSound(arr);
	     read=false;
	});
	//阅读操作
	
	$(".read").click(function(){
		$("#media").attr("src","");
		$(".read").css("pointer-events","none");
		$(".start").css("pointer-events","auto");
		pg=0;
		 list=true;
		 $(this).addClass("animate");
		 var btn=$(this);
        setTimeout(function(){
            btn.removeClass("animate");    
        },1500);
         $(".left").show();
		 $(".right").show();
		 currentPage=2;
		   quite=true;
		   read=true;
		   playSound(arr);
		 isPlaying=false;
		   
	});
	
	
	function playSound(buffer){
	    source = context.createBufferSource();//创建一个音频源 相当于是装音频的容器
	    source.buffer = buffer[pg];//  告诉音频源 播放哪一段音频
	    source.connect(context.destination);// 连接到输出源
	    source.start(0);//开始播放
	    console.log(pg)
	    source.onended=function(){
	    	if(pg==0){
	    		if(list){
					$(".page1").removeClass("fade");
				    $(".page1").addClass("fade");
				    $(".page2").fadeIn();
				    for(var i=3;i<length+1;i++){
				      $(".page"+i).fadeOut();
				    }
				      $("li .circle").removeClass("active1");
				      $("li").eq(0).find(".circle").addClass("active1");
				      $("li .num").removeClass("active");
				      $("li").eq(0).find(".num").addClass("active");
				    setTimeout(function(){
				    	$(".start").css("pointer-events","auto");
				    	$(".read").css("pointer-events","auto");
				    	$(".page1").removeClass("fade");
				    	  $(".page1").hide();
				    	   ++pg;
				    	  playSound(arr);
				    },1400);
				}
	    	}else if(pg>=length){
	    		return
	    	}else{
	    		console.log(pg)
		    		 if(isPlaying){
						  if(pg==(length-1)){
				   			$(".page1").show();
							$(".page1").removeClass("show");
						    $(".page1").addClass("show");
					       setTimeout(function(){
					    	  $(".page1").removeClass("show");
						      $(".page"+(pg+1)).fadeOut();
					       },1400);
					       return;
				   		 }else{
				   		 	 //if($(".page"+pg).css('display')=="block"){
						    	  $("li .circle").removeClass("active1");
							      $("li").eq(pg).find(".circle").addClass("active1");
							      $("li .num").removeClass("active");
							      $("li").eq(pg).find(".num").addClass("active");
						    	 $(".page"+(pg+1)).fadeOut();
						    	 $(".page"+(pg+2)).fadeIn();
						    	 ++pg;
	   		                    playSound(arr);
					   	    // }
				   		 }
					}
	    	 }
	    	//++pg;
	   		//playSound(arr);
	   	}
   }
	
 function pause() {
    source.stop();
}
	
	
	var flag;
	var display;
	  //按钮点击操作
	$(".left").click(function(){
		flag=true;
		for(var i=2;i<length+1;i++){
			if($(".page"+i).css('display')=="block"){
				if(i==2){
					 if(flag){
							  $(".page1").show();
							$(".page1").removeClass("show");
						    $(".page1").addClass("show");
						       setTimeout(function(){
						    	   $(".page1").removeClass("show");
						    	   for(var i=2;i<length+1;i++){
						    	     $(".page"+i).fadeOut();
						    	   }
						    },1400);
							 flag=false;
							
				     }
					 pause();
					 pg=length;
				}else{
				 if(flag){
					currentPage=i-1;
					for( var i=1;i<length+1;i++){
							if(i==currentPage){
								$(".page"+currentPage).fadeIn();
							 }else{
							 	$(".page"+i).fadeOut();
							 }
						}
							
					if(quite){
							pause();
				            pg=currentPage-2;
				   	}
					  $("li .circle").removeClass("active1");
				      $("li").eq(currentPage-2).find(".circle").addClass("active1");
				      $("li .num").removeClass("active");
				      $("li").eq(currentPage-2).find(".num").addClass("active");
				      flag=false;
				    }
				}
			}else{
				    	$(".page"+i).fadeOut();
				    };
		}
		
	});
	var flag1;
	$(".right").click(function(){
		flag1=true;
		for(var i=2;i<length+1;i++){
			if($(".page"+i).css('display')=="block"){
				console.log(i)
				if(i==length){
					 if(flag1){
						$(".page1").show();
						$(".page1").removeClass("show");
					    $(".page1").addClass("show");
					       setTimeout(function(){
					    	  $(".page1").removeClass("show");
					    	  for(var i=2;i<length+1;i++){
						    	     $(".page"+i).fadeOut();
						    	   }
					    },1400);
						 pause();
						  $("li .circle").removeClass("active1");
					      $("li").eq(0).find(".circle").addClass("active1");
					      $("li .num").removeClass("active");
					      $("li").eq(0).find(".num").addClass("active");
					      flag1=false;
				     }
				}else{
				 if(flag1 ){
					currentPage=i+1;
					for( var i=1;i<length+1;i++){
							if(i==currentPage){
								$(".page"+currentPage).fadeIn();
							 }else{
							 	$(".page"+i).fadeOut();
							 }
						}
					if(quite){
						    pause();
				            pg=currentPage-2;
				            if(read){
								pg=currentPage-1;
								playSound(arr);
							}
		   			}
					$("li .circle").removeClass("active1");
				    $("li").eq(currentPage-2).find(".circle").addClass("active1");
				    $("li .num").removeClass("active");
				    $("li").eq(currentPage-2).find(".num").addClass("active");
				    flag1=false;
				    }
				}
			}else{
				   $(".page"+i).fadeOut();
				};
		}  
	});
	
	//列表操作
	$("li").click(function(){
		  var index=$(this).index();
		  if(quite){
				pause();
				pg=index;
				if(read){
					pg=index+1;
					playSound(arr);
				}
			}else{
				
			}
			for(var i=1;i<length+1;i++){
				if(i==(index+2)){
					$(".page"+(index+2)).fadeIn();
					}else{
				      $(".page"+i).fadeOut();
				 }
			}
			  $("li .circle").removeClass("active1");
		      $("li").eq(index).find(".circle").addClass("active1");
		      $("li .num").removeClass("active");
		      $("li").eq(index).find(".num").addClass("active");
	})
	