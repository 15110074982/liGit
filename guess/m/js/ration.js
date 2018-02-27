function changeOrientation( $print ){  
  var width = document.documentElement.clientWidth;
  var height =  document.documentElement.clientHeight;
  if( width < height ){
	  $print.width(height);
	   $print.height(width);
	    winW=height;
	   winH=width;
	  $print.css('top',  (height-width)/2 );
	  $print.css('left',  0-(height-width)/2 );
	  $print.css('transform' , 'rotate(90deg)');
	   $print.css('transform-origin' , '50% 50%');
	 
	    $(".nav").css('transform-origin' , '0 0').css('transform',"scale3d(1,1,1)").css("top","0%")
			 $(".question").css('transform-origin' , '50% 0').css('transform',"scale3d(1,1,1)")
			 // alert(winW,winH);
 }else{
 	   winW=width;
	   winH=height;
 }
   
   var evt = "onorientationchange" in window ? "orientationchange" : "resize";
	window.addEventListener(evt, function() {
	    console.log(evt);

		setTimeout( function(){
			var width1 = document.documentElement.clientWidth;
			 var height1 =  document.documentElement.clientHeight;
			 //$print =  $('#print');
			 if( width1 > height1 ){
			   
				$print.width(width1);
				$print.height(height1);
				  winW=width1;
	        winH=height1;
	        	var ratio=height1/width-0.05;
			    $(".nav").css('transform-origin' , '0 0').css('transform',"scale3d(1,0.8,1)").css("top","0%")
			    $(".question").css('transform-origin' , '50% 0').css('transform',"scale3d("+ratio+","+ratio+",1)")
				$print.css('top',  0 );
				$print.css('left',  0 );
				$print.css('transform' , 'none');
				$print.css('transform-origin' , '50% 50%');
			 }
			 else{
				$print.width(height1);
				$print.height(width1);
				winW=height1;
	      winH=width1;
	       $(".nav").css('transform-origin' , '0 0').css('transform',"scale3d(1,1,1)").css("top","0%")
			 $(".question").css('transform-origin' , '50% 0').css('transform',"scale3d(1,1,1)")
				$print.css('top',  (height1-width1)/2 );
				$print.css('left',  0-(height1-width1)/2 );
				$print.css('transform' , 'rotate(90deg)');
				$print.css('transform-origin' , '50% 50%');
			 }
			
		}  , 100 );
		
		
	}, false);
}