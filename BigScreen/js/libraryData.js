var height = $(".top_mid").width() * 560 / 800;
$(".top_mid").height(height);
$(".top_left").height(height);
$(".top_rt").height(height);
var height1 = $(".bottom_left").width() * 320 / 910;
$(".bottom_left").height(height1);
$(".bottom_rt").height(height1);
var myChart1 = echarts.init(document.getElementById('chart1'));
var myChart2 = echarts.init(document.getElementById('chart2'));
var token = getCookie("token");
var arr = [];
getData();

function getData() {
	$.ajax({
		type: "get",
		url: "http://47.96.156.41/cy/rong/getBookData?token=" + token,
		success: function(data) {
			if(data.success == false) {
				location.href = "login.html";
			}
			if(data.visit.new.todayIn > 9999) {
				var vbk = (Math.round((data.visit.new.todayIn / 10000) * 100) / 100)
				var vb = vbk + "W";
				$(".new_today").html(vb);
			} else {
				$(".new_today").html(data.visit.new.todayIn);
			}
			if(data.visit.old.todayIn > 9999) {
				var vbk = (Math.round((data.visit.old.todayIn / 10000) * 100) / 100)
				var vbm = vbk + "W";
				$(".old_today").html(vbm);
			} else {
				$(".old_today").html(data.visit.old.todayIn)
			}
			$(".new_month").html(data.visit.new.totalIn)
			$(".new_out").html(data.visit.new.todayOut)
			$(".old_month").html(data.visit.old.totalIn)
			$(".old_out").html(data.visit.old.todayOut)

			$(".top_mid_left .top_mid_left_num").html(data.book.todayBorrow);
			$(".top_mid_right .top_mid_right_num").html(data.book.weekBorrow);
			$(".top_mid_left1 .top_mid_left_num").html(data.book.monthBorrow);
			$(".top_mid_right1 .top_mid_right_num").html(data.book.todayReturn);
			//图表3的数据；
			var html = "";
			for(var i = 0; i < 10; i++) {
				html += ' <li><span class="bookName">' + data.borrow[i].detBName + '</span><span class="bookNun">' + data.borrow[i].number + '</span></li>';
			}
			$(".rank").html(html);

			//图表4
			var option4 = {
				color: ['#05e3cb', '#05A5E3', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
				title: {
					text: '近一月图书订单数折线图',
					textStyle: {
						color: '#fff',
					},
					x: "center",
					bottom: "3%"
				},
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ['自取', '上门'],
					right: "center",
					top: "3%",
					textStyle: {
						color: '#fff',
					},
				},
				grid: {
					top: '13%',
					left: '2%',
					right: '3%',
					bottom: '16%',
					containLabel: true
				},
				xAxis: {
					type: 'category',
					data: [],
					axisLine: {
						lineStyle: {
							color: "#fff"
						}
					}
				},
				yAxis: {
					type: 'value',
					axisLine: {
						lineStyle: {
							color: "#fff"
						}
					}
				},
				series: [{
						name: '自取',
						type: 'line',
						data: [],
					},
					{
						name: '上门',
						type: 'line',
						data: [],
					}
				]
			};
			for(var i = 0; i < data.order.length - 1; i++) {
				option4.xAxis.data.push(data.order[i].date)
				option4.series[0].data.push(data.order[i].selfGet);
				option4.series[1].data.push(data.order[i].inDoor)
			}
			myChart2.setOption(option4);
			$(".orders .orders_num").html(data.order[data.order.length - 1].total);
			$(".orders_intro1 .ordersNum").html(data.order[data.order.length - 1].selfGet);
			$(".orders_intro2 .ordersNum").html(data.order[data.order.length - 1].inDoor);

			//图表5
			$(".cardTotal .cardNum").html(data.card.total);
			$(".cardB .cardNum").html(data.card.sumB);
			$(".cardC .cardNum").html(data.card.sumC);
			$(".cardD .cardNum").html(data.card.sumD);
			$(".cardE .cardNum").html(data.card.sumE);
			//图表4

			var option1 = {
				color: ['#F08C8C', '#75C9F0', '#FED471', '#7DC186', '#50B7A7', '#F58A4F', '#436CD3', '#7C66CC', '#CF69DE', '#F877BD', '#c4ccd3'],
				title: {
					text: '图书办卡数据',
					textStyle: {
						color: '#fff',
					},
					x: "center",
					top: "2%"
				},
				legend: {
					type: 'scroll',
					orient: 'vertical',
					data: ['B级卡', 'C级卡', 'D级卡', 'E级卡'],
					right: "3%",
					top: "11%",
					textStyle: {
						color: '#fff',
						fontSize: '30px'
					},
				},
				grid: {
					top: '13%',
					left: '2%',
					right: '3%',
					bottom: '0%',
					/* containLabel: true*/
				},
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)",
				},
				series: [{
					name: '办卡数据',
					type: 'pie',
					radius: '70%',
					center: ['50%', '55%'],
					data: [{
						value: data.card.sumB,
						name: "B级卡"
					}, {
						value: data.card.sumC,
						name: "C级卡"
					}, {
						value: data.card.sumD,
						name: "D级卡"
					}, {
						value: data.card.sumE,
						name: "E级卡"
					}],
				}]
			};
			myChart1.setOption(option1);
		}
	});
}
setInterval(function() {
	getData();
}, 1000 * 60 * 5);