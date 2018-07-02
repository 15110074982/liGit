function go() { //封装函数
	var time = new Date(); //获取当前时间
	var year = time.getFullYear();
	var month = time.getMonth() + 1 >= 10 ? time.getMonth() + 1 : "0" + (time.getMonth() + 1);
	var data = time.getDate() >= 10 ? time.getDate() : "0" + time.getDate();
	var day = time.getDay();
	switch(day) {
		case 0:
			$(".day").html("星期日");
			break;
		case 1:
			$(".day").html("星期一");
			break;
		case 2:
			$(".day").html("星期二");
			break;
		case 3:
			$(".day").html("星期三");
			break;
		case 4:
			$(".day").html("星期四");
			break;
		case 5:
			$(".day").html("星期五");
			break;
		case 6:
			$(".day").html("星期六");
			break;
		default:
			break;
	}
	var s = time.getSeconds() >= 10 ? time.getSeconds() : "0" + time.getSeconds(); //获取秒数
	var min = time.getMinutes() >= 10 ? time.getMinutes() : "0" + time.getMinutes(); //获取分
	var hour = time.getHours() >= 10 ? time.getHours() : "0" + time.getHours(); //获取小时
	$(".date").html(year + "年" + month + "月" + data + "日")
	$(".time").html(hour + '：' + min + "：" + s)
}
go();
setInterval(go, 20); //设置定时器每20毫秒执行一次函数，就可以实现动态的钟表
$(".signout").click(function() {
	removeCookie("token");
	window.location.replace('login.html');
})
$(".left").click(function() {
	$(".dropDown").toggle()
})