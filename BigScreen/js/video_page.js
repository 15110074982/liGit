$(function() {
	var url_a1 = "http://47.96.156.41/cy/rong/getLive?"
	var url_b = "http://47.96.156.41/cy/rong/getLiveData?";
	var token = getCookie("token");
	//调用直播数据
	getVideoData();

	function getVideoData() {
		$.ajax({
			type: "get",
			url: url_b,
			data: {
				"token": token
			},
			success: function(data) {
				if(data.success == false) {
					location.href = "login.html";
				}
				var num1 = data[2].num;
				var num1_1 = GetPercent(num1, data[3].num);
				var num2 = data[3].num;
				var num2_2 = GetPercent(num2, num1);
				var num3 = data[4].num;
				var num3_3 = GetPercent(num3, data[5].num);
				var num4 = data[5].num;
				var num4_4 = GetPercent(num4, num3);
				var num5 = data[0].num;
				var num5_5 = GetPercent(num5, data[1].num);
				var num6 = data[1].num;
				var num6_6 = GetPercent(num6, num5);

				$('.video_num1').text(num1);
				$('.video_num2').text(num2)
				$('.video_num3').text(num3)
				$('.video_num4').text(num4)
				$('.video_num5').text(num5)
				$('.video_num6').text(num6)
				$('.video_bar1').css('width', num1_1);
				$('.video_bar2').css('width', num2_2);
				$('.video_bar3').css('width', num3_3);
				$('.video_bar4').css('width', num4_4);
				$('.video_bar5').css('width', num5_5);
				$('.video_bar6').css('width', num6_6);
			}
		})
	}

	var begin = 1,
		size = 10;
	$.ajax({
		url: url_a1,
		data: {
			"begin": begin,
			"size": 10,
			"token": token
		},
		success: function(data) {
			if(data.success == false) {
				location.href = "login.html";
			}
			var html = '';
			for(var i = 0; i < data.length; i++) {
				if(data[i].url.indexOf("mp4") != -1) {
					html += '<li data_url="' + data[i].url + '" data-type="video/mp4" onclick=startVideo("' + data[i].url + '","video/mp4")>' + data[i].name + '</li>';
				} else if(data[i].url.indexOf("ogv") != -1) {
					html += '<li data_url="' + data[i].url + '" data-type="video/ogg" onclick=startVideo("' + data[i].url + '","video/ogg")>' + data[i].name + '</li>';
				} else if(data[i].url.indexOf("webm") != -1) {
					html += '<li data_url="' + data[i].url + '" data-type="video/webm" onclick=startVideo("' + data[i].url + '","video/webm")>' + data[i].name + '</li>';
				} else if(data[i].url.indexOf("m3u8") != -1) {
					html += '<li data_url="' + data[i].url + '" data-type="application/x-mpegURL" onclick=startVideo("' + data[i].url + '","application/x-mpegURL")>' + data[i].name + '</li>';
				} else if(data[i].url.indexOf("rtmp") != -1) {
					html += '<li data_url="' + data[i].url + '" data-type="rtmp/flv" onclick=startVideo("' + data[i].url + '","rtmp/flv")>' + data[i].name + '</li>';
				} else {
					html += '<li data_url="' + data[i].url + '" data-type="video/mp4" onclick=startVideo("' + data[i].url + '","video/mp4")>' + data[i].name + '</li>';
				}
			}

			$('#hiddenresult').empty().append(html);
			var type = $('#hiddenresult li').eq(0).attr("data-type");
			//调试
			/* $('.h5_tit').click(function(){
			   	startVideo("http://1253417241.vod2.myqcloud.com/9cc49720vodcq1253417241/f5d266ff7447398156747373588/playlist_eof.m3u8","application/x-mpegURL");
			  })*/
			/* "http://videofile1.cutv.com/originfileg/010002_t/2018/06/26/G18/G18ijiiikjnliikoqpnkzx_cug.mp4","video/mp4"*/
			//document.getElementById("videoMP4").setAttribute("src","rtmp://live.hkstv.hk.lxdns.com/live/hks")
			//document.getElementById("videoMP4").setAttribute("type","rtmp/flv")
			//setTimeout(function(){
			//startVideo("rtmp://live.hkstv.hk.lxdns.com/live/hks","rtmp/flv");
			//},800)
			document.getElementById("videoMP4").setAttribute("src", data[0].url);
			document.getElementById("videoMP4").setAttribute("type", type);
			//setTimeout(function(){
			startVideo(data[0].url, type);
			//},800)*/
			var navigation_html = '<a class="previous_link previous_link1" "></a>';
			navigation_html += '<a class="next_link next_link1" "></a>';
			$('#page_navigation').html(navigation_html);
		}
	})
	$('#page_navigation').on('click', '.previous_link', function() {
		begin -= 10;
		if(begin < 1) {
			begin += 10;
			$('.previous_link').removeClass('previous_link1').addClass("previous_link2");
			$('.previous_link').css("pointer-events", "none");
		} else {
			$('.next_link').removeClass('next_link2').addClass("next_link1");
			$('.next_link').css("pointer-events", "auto");
			$.ajax({
				url: url_a1,
				data: {
					"begin": begin,
					"size": 10,
					"token": token
				},
				success: function(data) {
					if(data.length < 0) {
						$('.next_link').remveClass('next_link1').addClass("next_link12");
					} else {
						var html = '';
						for(var i = 0; i < data.length; i++) {
							if(data[i].url.indexOf("mp4") != -1) {
								html += '<li data_url="' + data[i].url + '" onclick=startVideo("' + data[i].url + '","video/mp4")>' + data[i].name + '</li>';
							} else if(data[i].url.indexOf("ogv") != -1) {
								html += '<li data_url="' + data[i].url + '" onclick=startVideo("' + data[i].url + '","video/ogg")>' + data[i].name + '</li>';
							} else if(data[i].url.indexOf("webm") != -1) {
								html += '<li data_url="' + data[i].url + '" onclick=startVideo("' + data[i].url + '","video/webm")>' + data[i].name + '</li>';
							} else if(data[i].url.indexOf("m3u8") != -1) {
								html += '<li data_url="' + data[i].url + '" onclick=startVideo("' + data[i].url + '","application/x-mpegURL")>' + data[i].name + '</li>';
							} else if(data[i].url.indexOf("rtmp") != -1) {
								html += '<li data_url="' + data[i].url + '" onclick=startVideo("' + data[i].url + '","rtmp/flv")>' + data[i].name + '</li>';
							} else {
								html += '<li data_url="' + data[i].url + '" onclick=startVideo("' + data[i].url + '","video/mp4")>' + data[i].name + '</li>';
							}

						}

						$('#hiddenresult').empty().append(html);
					}

				}
			})
		}

	})
	$('#page_navigation').on('click', '.next_link', function() {
		begin += 10;
		$.ajax({
			url: url_a1,
			data: {
				"begin": begin,
				"size": 10,
				"token": token
			},
			success: function(data) {
				if(data.length == 0) {
					begin -= 10;
					$('.next_link').removeClass('next_link1').addClass("next_link2");
					$('.next_link').css("pointer-events", "none");
				} else {
					$('.previous_link').removeClass('previous_link2').addClass("previous_link1");
					$('.previous_link').css("pointer-events", "auto");
					var html = '';
					for(var i = 0; i < data.length; i++) {
						if(data[i].url.indexOf("mp4") != -1) {
							html += '<li data_url="' + data[i].url + '" onclick=startVideo("' + data[i].url + '","video/mp4")>' + data[i].name + '</li>';
						} else if(data[i].url.indexOf("ogv") != -1) {
							html += '<li data_url="' + data[i].url + '" onclick=startVideo("' + data[i].url + '","video/ogg")>' + data[i].name + '</li>';
						} else if(data[i].url.indexOf("webm") != -1) {
							html += '<li data_url="' + data[i].url + '" onclick=startVideo("' + data[i].url + '","video/webm")>' + data[i].name + '</li>';
						} else if(data[i].url.indexOf("m3u8") != -1) {
							html += '<li data_url="' + data[i].url + '" onclick=startVideo("' + data[i].url + '","application/x-mpegURL")>' + data[i].name + '</li>';
						} else if(data[i].url.indexOf("rtmp") != -1) {
							html += '<li data_url="' + data[i].url + '" onclick=startVideo("' + data[i].url + '","rtmp/flv")>' + data[i].name + '</li>';
						} else {
							html += '<li data_url="' + data[i].url + '" onclick=startVideo("' + data[i].url + '","video/mp4")>' + data[i].name + '</li>';
						}
					}

					$('#hiddenresult').html(html);
				}
			}
		})

	})
	setInterval(function() {
		getVideoData();
	}, 1000 * 60 * 5);

})
///计算两个整数的百分比值 
function GetPercent(num, total) {
	num = parseFloat(num);
	total = parseFloat(total);
	if(isNaN(num) || isNaN(total)) {
		return "-";
	}
	if(num == total) {
		var wd = "100%";
		var wd1 = "100%";
	} else if(num > total) {
		var wd = "100%";
		var wd1 = (Math.round(total / num * 10000) / 100.00 + "%")
	} else {
		var wd = (Math.round(num / total * 10000) / 100.00 + "%")
		var wd1 = "100%";
	}
	return wd;
}

function startVideo(url, type) {
	videojs("roomVideo").src([{
		type: type,
		src: url
	}]);
	videojs("roomVideo").load(url);
	videojs("roomVideo").play();
	console.log(videojs("roomVideo").src())
}