$(".login_btn").click(function() {
	$.ajax({
		type: "get",
		url: "http://47.96.156.41/cy/authenticate",
		data: {
			'username': $("#uname").val(),
			'password': $("#pwd").val(),
		},
		success: function(data) {
			if(data.success == true) {
				setCookie("token", JSON.stringify(data.token));
				window.location.replace('cultureMap.html');
			} else {
				$(".msg").html(data.message);
				$(".msg").css("visibility", "visible");
			}
		}
	});
})
$('input').focus(function() {
	$(".msg").css("visibility", "hidden");
})