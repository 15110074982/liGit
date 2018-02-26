function changeOrientation( $print ){  
  var width = document.documentElement.clientWidth;
  var height =  document.documentElement.clientHeight;
  if( width < height ){
	  $print.width(height);
	   $print.height(width);
	  $print.css('top',  (height-width)/2 );
	  $print.css('left',  0-(height-width)/2 );
	  $print.css('transform' , 'rotate(90deg)');
	   $print.css('transform-origin' , '50% 50%');
	    $(".title1").css("width","28%")
			    $(".title2").css("width","28%").css("left","33%")
			     $(".title3").css("width","28%")
	     $(".nav").css('transform-origin' , '0 0').css('transform',"scale3d(1,1,1)").css("top","0%")
			 $(".question").css('transform-origin' , '50% 0').css('transform',"scale3d(1,1,1)")
	   winW=height;
	   winH=width;
 } 
 //alert(width+"  h  "+height)
   var evt = "onorientationchange" in window ? "orientationchange" : "resize";
	window.addEventListener(evt, function() {
	    console.log(evt);
		//alert(evt);
		setTimeout( function(){
			var width1 = document.documentElement.clientWidth;
			 var height1 =  document.documentElement.clientHeight;
			
			 if( width1 > height1 ){
			 		$print.width(width1);
				  $print.height(height1);
				  winW=width1;
	        winH=height1;
			 // if(width1/height1>height/width){
			   	//  var ratio=height/width1-0.1;
			  // }else{
			  	//alert(height1+"w"+width)
			   		var ratio=height1/width;
			  //}
			   $(".title1").css("width","22%")
			    $(".title2").css("width","22%").css("left","39%")
			     $(".title3").css("width","22%")
			    $(".nav").css('transform-origin' , '0 0').css('transform',"scale3d(1,0.8,1)").css("top","0%")
			    $(".question").css('transform-origin' , '50% 0').css('transform',"scale3d("+ratio+","+ratio+",1)")
				 $print.css('top',  0 );
				 $print.css('left',  0 );
				 $print.css('transform' , 'none');
			  	$print.css('transform-origin' , '50% 50%');
			 }
			 else{
			 	//alert(1)
				$print.width(height1);
				$print.height(width1);
				winW=height1;
	      winH=width1;
				$print.css('top',  (height1-width1)/2 );
				$print.css('left',  0-(height1-width1)/2 );
				$print.css('transform' , 'rotate(90deg)');
				$print.css('transform-origin' , '50% 50%');
				$(".title1").css("width","28%")
			    $(".title2").css("width","28%").css("left","33%")
			     $(".title3").css("width","28%")
	     $(".nav").css('transform-origin' , '0 0').css('transform',"scale3d(1,1,1)").css("top","0%")
			 $(".question").css('transform-origin' , '50% 0').css('transform',"scale3d(1,1,1)")
			 }
			
		}  , 300 );

		
	}, false);
}