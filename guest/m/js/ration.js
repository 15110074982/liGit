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
 } 
 //alert(width+"  h  "+height)
   var evt = "onorientationchange" in window ? "orientationchange" : "resize";
	window.addEventListener(evt, function() {
	    console.log(evt);
		//alert(evt);
		setTimeout( function(){
			var width1 = document.documentElement.clientWidth;
			 var height1 =  document.documentElement.clientHeight;
			
			 //$print =  $('#print');
			 if( width1 > height1 ){
			 		$print.width(width1);
				$print.height(height1);
			  /* if(width1/height1>height/width){
			   	  var scale=height/width1;
			   	  	$print.css('transform' , "scale("+scale+",1)");
			   }else{
			   		var scale=width/height1;
			   			$print.css('transform' , "scale(1,"+scale+")");
			  }*/
			  //$("#viewport").attr("content","width=device-width,initial-scale="+scale+",user-scalable=no")
			
				$print.css('top',  0 );
				$print.css('left',  0 );
				$print.css('transform' , 'none');
			
				$print.css('transform-origin' , '50% 50%');
			 }
			 else{
			 	/*  if(width1/height1>width/height){
			   	  var scale=width1/width;
			   }else{
			   		var scale=height1/height;
			   }*/
				$print.width(height1);
				$print.height(width1);
				$print.css('top',  (height1-width1)/2 );
				$print.css('left',  0-(height1-width1)/2 );
				$print.css('transform' , 'rotate(90deg)');
					//$print.css('transform' , "scale(0.8,0.8)");
				$print.css('transform-origin' , '50% 50%');
			 }
		  //alert(width1+"  hh  "+height1)
			
		}  , 500 );

		
	}, false);
}