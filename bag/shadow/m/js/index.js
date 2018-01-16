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
   			$("#media1").attr("src","");
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
		list=false;
	});
	var quite=true;
	var currentPage="";
	//静音操作
	$(".quite").click(function(){
		    $("#media").attr("src","");
		    $("#media1").attr("src","");
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
	$(".start").click(function(){
		pg=1;
		 $("#media1").attr("src","");
		$("#media").attr("src","audio/P0.mp3");
		$("#media")[0].play();
		 $(".left").hide();
		  $(".right").hide();
		 $(this).addClass("animate");
		 var btn=$(this);
        setTimeout(function(){
            btn.removeClass("animate");    
        },1500)
        isPlaying=true;
        list=true;
         quite=true;
	});
	//阅读操作
	$(".read").click(function(){
		pg=1;
		 list=true;
		$("#media").attr("src","audio/P0.mp3");
		$("#media")[0].play();
		 $(this).addClass("animate");
		 var btn=$(this);
        setTimeout(function(){
            btn.removeClass("animate");    
        },1500);
         $(".left").show();
		 $(".right").show();
		 currentPage=2;
		 isPlaying=false;
		   quite=true;
	});
	var flag;
	  var display;
	  //按钮点击操作
	$(".left").click(function(){
		flag=true;
		for(var i=2;i<length+1;i++){
			if($(".page"+i).css('display')=="block"){
				console.log(i)
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
				   			$("#media1").attr("src","");
							 flag=false;
				     }
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
							$("#media1").attr("src","audio/P"+(currentPage-1)+".mp3");
				   			$("#media1")[0].play();
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
						  $("#media1").attr("src","");
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
						$("#media1").attr("src","audio/P"+(currentPage-1)+".mp3");
			   			$("#media1")[0].play();
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
	//播放结束操作
	media.onended = function() {
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
		       $("#media").attr("src","");
		       $("#media1").attr("src","audio/P1.mp3");
		    setTimeout(function(){
		    	$(".page1").removeClass("fade");
		    	  $(".page1").hide();
		    	  $("#media1")[0].play();
		    },1400);
		 }
	 } 
	
	 media1.onended = function(){
	 	++pg;
	 	 if(isPlaying){
			  if(pg==length){
	   			$(".page1").show();
				$(".page1").removeClass("show");
			    $(".page1").addClass("show");
			    $("#media").attr("src","");
			     $("#media1").attr("src","");
		       setTimeout(function(){
		    	  $(".page1").removeClass("show");
			      $(".page"+pg).fadeOut();
		       },1400);
		       return;
	   		 }else{
	   		 	 if($(".page"+pg).css('display')=="block"){
			    	  $("li .circle").removeClass("active1");
				      $("li").eq(pg-1).find(".circle").addClass("active1");
				      $("li .num").removeClass("active");
				      $("li").eq(pg-1).find(".num").addClass("active");
			    	 $(".page"+pg).fadeOut();
			    	 $(".page"+(pg+1)).fadeIn();
			    	 $("#media1").attr("src","audio/P"+pg+".mp3");
		   			 $("#media1")[0].play();
		   	     }
	   		 }
		 }
		} 
	//列表操作
	$("li").click(function(){
		var index=$(this).index();
		pg=index+1;
			for(var i=1;i<length+1;i++){
				if(i==(index+2)){
					$(".page"+(index+2)).fadeIn();
					}else{
				      $(".page"+i).fadeOut();
				 }
			}
			if(quite){
				$("#media1").attr("src","audio/P"+(index+1)+".mp3");
				$("#media1")[0].play();
			}
			  $("#media").attr("src","");
			  $("li .circle").removeClass("active1");
		      $("li").eq(index).find(".circle").addClass("active1");
		      $("li .num").removeClass("active");
		      $("li").eq(index).find(".num").addClass("active");
	})

