(function(){
	var screenHeight = document.documentElement.clientHeight,
        screenWidth = document.documentElement.clientWidth;

	 function resetRem(){
	 	var rect = window.document.documentElement.getBoundingClientRect();
		var width = rect.width > 750 ? 750 : rect.width;
		var rootEm = parseFloat(width/375 * 20);
		document.getElementsByTagName('html')[0].style.fontSize = rootEm + "px";
	 }

	 function scaleEle(selector,position){
        var pageScale;
        var currentScale=screenWidth/screenHeight;
        var originScale=320/504;
        if(currentScale>originScale){
            pageScale=screenHeight/504;
        }else{
            pageScale=screenWidth/320;
        }
        $(selector).css({"-webkit-transform-origin":position,"transform-origin":position,"-webkit-transform":"scale("+pageScale+");","transform":"scale("+pageScale+");"});
    }

     window.resetRem = resetRem;
     window.scaleEle = scaleEle;
})();

window.onresize = function(){
   	setTimeout(resetRem, 300);
}

// scaleEle(".screen__inner","center");

resetRem();

