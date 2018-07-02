//封装cookie
function setCookie(key,value,days){
	var now = new Date();
	now.setTime(now.getTime() + days*24*60*60*1000 ) 
	document.cookie=key+"="+value + ";expires="+now;
}

function getCookie(key){
	if(document.cookie){		
		var cookieInfo = document.cookie;
		var arr = cookieInfo.replace(/;\s/g,';').split(";");	
		for(var i=0;i<arr.length;i++){
			item = arr[i].split("=");
			if(item[0] == key){
				brr = item[1];
				return JSON.parse(brr);
			}
		}	
		return [];
	}
	return [];
}

function removeCookie(key){
	setCookie(key,"",-1);
}
