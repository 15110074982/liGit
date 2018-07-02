	$(".option").click(function() {
		$(".dropDown1").toggle()
	})

	$(".dropDown1 li").click(function() {
		var string = $(this).html();
		$(".option .select1").html(string);
		getData(string);
	})
	var height = $("#container").width() * 900 / 550;
	$("#container").height(height);
	$(".mid").height(height);
	$(".rt").height(height);

	//初始化地图对象，加载地图
	AMapUI.setDomLibrary($);
	var district, map = new AMap.Map("container", {
		resizeEnable: true,
		center: [116.397428, 39.90923], //地图中心点
		zoom: 11 //地图显示的缩放级别
	});
	AMapUI.loadUI(['control/BasicControl'], function(BasicControl) {
		//缩放控件
		map.addControl(new BasicControl.Zoom({
			position: 'rb', //left top，左上角
			showZoomNum: false //显示zoom值
		}));
	});
	addBeiJing();

	function addBeiJing() {
		//加载行政区划插件
		AMap.service('AMap.DistrictSearch', function() {
			var opts = {
				subdistrict: 1, //返回下一级行政区
				extensions: 'all', //返回行政区边界坐标组等具体信息
				level: 'city' //查询行政级别为 市
			};
			//实例化DistrictSearch
			district = new AMap.DistrictSearch(opts);
			district.setLevel('district');
			//行政区查询
			district.search('朝阳区', function(status, result) {
				var bounds = result.districtList[0].boundaries;
				var polygons = [];
				if(bounds) {
					for(var i = 0, l = bounds.length; i < l; i++) {
						//生成行政区划polygon
						var polygon = new AMap.Polygon({
							map: map,
							strokeWeight: 3,
							path: bounds[i],
							fillOpacity: 0.3,
							fillColor: '#000',
							strokeColor: '#aaa'
						});
						polygons.push(polygon);
					}
					map.setFitView(); //地图自适应
					map.setZoom(11)
				}
			});
		});
	}
	var str = $(".select1").html();
	var myChart1 = echarts.init(document.getElementById('chart1'));
	var myChart4 = echarts.init(document.getElementById('chart4'));
	var baseUrl = window.location.href.split('html/')[0] + 'img/';
	var token = getCookie("token");
	var arr = [];
	getData(str);

	function getData(id) {
		$.ajax({
			type: "get",
			url: "http://47.96.156.41/cy/rong/getLibrary?token=" + token,
			success: function(data) {
				if(data.success == false) {
					location.href = "login.html";
				}
				//地图
				var lat, lgt;
				var imgUrl;
				if(id == "全部") {
					for(var i = 0; i < data.length - 2; i++) {
						var positions = [];
						var addr = [];
						for(var j = 0; j < data[i].mapData.length; j++) {
							imgUrl = baseUrl + data[i].mapData[0].icon;
							if(data[i].mapData[j].latitude != "") {
								lat = data[i].mapData[j].latitude;
								lgt = data[i].mapData[j].longitude;
							}
							positions.push([lgt, lat]);
							addr.push(data[i].mapData[j].address)
						}
						addIcon(imgUrl, positions, addr);
					}
				} else {
					for(var i = 0; i < data.length; i++) {
						var positions = [];
						var addr = [];
						if(id == data[i].type) {
							for(var j = 0; j < data[i].mapData.length; j++) {
								imgUrl = baseUrl + data[i].mapData[0].icon;
								if(data[i].mapData[j].latitude != "") {
									lat = data[i].mapData[j].latitude;
									lgt = data[i].mapData[j].longitude;
								}
								positions.push([lgt, lat]);
								addr.push(data[i].mapData[j].address)
							}
						}
						addIcon(imgUrl, positions, addr);
					}
				}
				map.add(arr);

				//图表4
				var option4 = {
					color: ['#F08C8C', '#75C9F0', '#FED471', '#7DC186', '#50B7A7', '#F58A4F', '#436CD3', '#7C66CC', '#CF69DE', '#F877BD', '#c4ccd3', '#c23531', '#6bcf5a', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#ffc', '#F08C5C', '#75C4F0', '#FED271', '#7DC116', '#5007A7'],
					title: {
						text: id,
						textStyle: {
							color: '#fff',
						},
						//x:"center",
						top: "2%",
						left: '37%'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						type: 'scroll',
						orient: 'vertical',
						data: [],
						right: "2%",
						top: "8%",
						textStyle: {
							color: '#fff',
						},
						pageIconColor: '#aaa',
						pageIconInactiveColor: '#2f4554'
					},
					series: [{
						name: '图书数据',
						type: 'pie',
						radius: '70%',
						center: ['40%', '50%'],
						data: [],
						label: {
							normal: {
								formatter: '{b}:{c} ({d}%)',
								textStyle: {
									fontWeight: 'normal',
									fontSize: 15
								}
							}
						},
					}]
				};
				for(var i = 0; i < data.length; i++) {
					var m = 0;
					var sum = 0;
					if(id == data[i].type) {
						for(var key in data[i].catagory) {
							m++;
							if(m <= 20) {
								option4.legend.data.push(key);
								option4.series[0].data.push({
									value: data[i].catagory[key],
									name: key
								})
							} else {
								sum += data[i].catagory[key];
							}
						}
						if(sum != 0) {
							option4.legend.data.push("其他");
							option4.series[0].data.push({
								value: sum,
								name: "其他"
							})
						}
					}
				}
				myChart4.setOption(option4);

				//图表1
				var option1 = {
					color: ['#F08C8C', '#75C9F0', '#FED471', '#7DC186', '#50B7A7', '#F58A4F', '#436CD3', '#7C66CC', '#CF69DE', '#F877BD', '#c4ccd3', '#c23531', '#6bcf5a', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#F08C5C', '#75C4F0', '#FED271', '#7DC116', '#5007A7'],
					//color:['#c23531','#6bcf5a', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570'],*/
					title: {
						text: '各类文化设施的数量',
						textStyle: {
							color: '#fff',
						},
						x: "center",
						top: "2%"
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						type: 'scroll',
						data: [],
						left: "3%",
						top: "11%",
						textStyle: {
							color: '#fff',
						},
						pageIconColor: '#aaa',
						pageIconInactiveColor: '#2f4554'
					},
					grid: {
						show: true,
						left: '1%',
						right: '3%',
						bottom: '3%',
						top: '20%',
						containLabel: true,
					},
					xAxis: {
						type: 'value',
						axisLine: {
							lineStyle: {
								color: "#fff"
							}
						}
					},
					yAxis: {
						type: 'category',
						axisLine: {
							lineStyle: {
								color: "#fff"
							}
						},
						axisLabel: {
							show: true,
							//rotate:50,
							textStyle: {
								color: '#fff',
								fontSize: '14'
							}
						},
						data: []
					},
					series: []
				};

				var arr1 = [];
				var arr1Value = [];
				var arr6 = [];
				for(var key in data[data.length - 1].catagory) {
					arr1.push(key)
					arr1Value.push(data[data.length - 1].catagory[key])
				}
				var arr8 = arr1;
				for(var i = 0; i < data.length - 2; i++) {
					var arr2 = [];
					var arr2Value = [];
					var arr5 = [];
					var arr9 = [];
					for(var h = 0; h < arr1Value.length; h++) {
						arr9.push(0);
					}
					for(var key in data[i].catagory) {
						arr2.push(key)
						arr2Value.push(data[i].catagory[key])
					}
					var arr4 = [];
					var arr4Value = [];
					for(var m = 0; m < arr2.length; m++) {
						for(var j = 0; j < arr1.length; j++) {
							if(arr2[m] == arr1[j]) {
								arr8.splice(j, 1, arr2[m]);
								arr9.splice(j, 1, arr2Value[m]);
							}
						}
					}
					for(var k = 0; k < arr8.length; k++) {
						arr5.push(arr9[k])
					}
					arr6[i] = arr5;
				}

				/*var arr3=[];
		  		for(var m=0;m<arr1.length;m++){
		  			arr3.push(arr1Value[m])
				}*/
				//arr6.push(arr3)
				//console.log(arr6);
				var values = [];
				var keys = [];
				var t = -1;
				for(var key in data[data.length - 1].catagory) {
					t++;
					if(t < 24) {
						option1.legend.data.push(key);
						keys.push(key);
						option1.series.push({
							name: '',
							type: 'bar',
							barWidth: 60,
							stack: '总量',
							label: {
								normal: {
									show: false
								}
							},
							data: []
						});
					}

				}
				//console.log(keys)
				if(t != 0) {
					option1.legend.data.push("其他");
					keys.push("其他");
					option1.series.push({
						name: '其他',
						type: 'bar',
						barWidth: 60,
						stack: '总量',
						label: {
							normal: {
								show: false
							}
						},
						data: []
					});
				}
				//console.log(keys)
				for(var i = 0; i < data.length - 2; i++) {
					option1.yAxis.data.push(data[i].type);
					var arrData = [];
					for(var j = 0; j < 24; j++) {
						arrData.push(arr6[i][j]);
					}
					values[i] = arrData;

				}
				for(var p = 0; p < arr6.length; p++) {
					var sum1 = 0;
					for(var q = 24; q < arr6[p].length; q++) {
						sum1 += arr6[p][q];
					}
					values[p].push(sum1)
				}
				//console.log(values);
				for(var i = 0; i < keys.length; i++) {
					option1.series[i].name = keys[i];
				}
				for(var i = 0; i < values.length; i++) {
					for(var j = 0; j < values[i].length; j++) {
						option1.series[j].data.push(values[i][j]);
					}
				}

				/*var values=[];
		    	var keys=[];
		    	for(var key in data[0].catagory){
		    			option1.legend.data.push(key);
		    			keys.push(key);
		    			option1.series.push({name:'',type: 'bar',stack: '总量',label: {normal: {show: true, position: 'insideRight'}},data:[]});
		    			
		    	}
		    	for(var i=0;i<data.length;i++){
		    	 	option1.yAxis.data.push(data[i].type);
		    	 	var arrData=[];
				    	 for(var key in data[i].catagory){
				    	 	//console.log(data[i].catagory[key])
				    			arrData.push(data[i].catagory[key]);
				    	}
				    	 values[i]=arrData;
		    	}
		    	for(var i=0;i<keys.length;i++){
		    	 	option1.series[i].name=keys[i];
		    	 }
		    	//console.log(option1.series)
		    	 for(var i=0;i<values.length;i++){
		    	 	for(var j=0;j<values[i].length;j++){
		    	 		option1.series[j].data.push(values[i][j]);
		    	 	}
		    	 }*/
				myChart1.setOption(option1);
			}
		});
	}

	function addIcon(imgUrl, positions, addr) {
		var markers = [];
		for(var i = 0, marker; i < positions.length; i++) {
			marker = new AMap.Marker({
				map: map,
				icon: imgUrl,
				position: positions[i],
			});
			marker.setTitle(addr[i]);
			markers.push(marker);
		}
		arr.push(markers)
		//移出点标记
		$(".dropDown1 li").click(function() {
			map.remove(markers);
			//map.clearMap();
			//addBeiJing();
		})
	}

	//第二个图表

	var myChart2 = echarts.init(document.getElementById('chart2'));
	getChart2();

	function getChart2() {
		var option2 = {
			color: ['#F08C8C', '#F58A4F', '#FED471', '#7DC186', '#50B7A7', '#75C9F0', '#436CD3', '#7C66CC', '#CF69DE', '#F877BD', '#c4ccd3'],
			title: {
				text: '图书自取点订单排行',
				textStyle: {
					color: '#fff',
				},
				x: "center",
				top: "2%"
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: { // 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			/*  legend: {
	    	type:'scroll',
	        data: [],
	        top:"11%",
	        textStyle:{
                	color:'#fff',
                },
	    },*/
			grid: {
				show: true,
				left: '3%',
				right: '3%',
				bottom: '1%',
				top: '15%',
				containLabel: true,
			},
			xAxis: {
				type: 'category',
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				},
				axisLabel: {
					show: true,
					rotate: 50,
					textStyle: {
						color: '#fff',
						fontSize: '14'
					}
				},
				data: []
			},
			yAxis: {
				type: 'value',
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				},
			},
			series: [{
				data: [],
				type: 'bar',
				//barWidth : 20,//柱图宽度
				label: {
					show: true
				}
			}]
		};

		$.ajax({
			type: "get",
			url: "http://47.96.156.41/cy/rong/customeGetList?token=" + token,
			success: function(data) {
				if(data.success == false) {
					location.href = "login.html";
				}
				for(var i = 0; i < 10; i++) {
					option2.series[0].data.push(data[i].orders);
					option2.xAxis.data.push(data[i].name);
				}
				myChart2.setOption(option2);
			}
		});
	}

	//第3个图表

	var myChart3 = echarts.init(document.getElementById('chart3'));
	getChart3();

	function getChart3() {
		var option3 = {
			color: ['#75C9F0', '#F58A4F', '#FED471', '#F08C8C', '#50B7A7', '#75C9F0', '#436CD3', '#7C66CC', '#CF69DE', '#F877BD', '#c4ccd3'],
			title: {
				text: '图书配送服务数据',
				textStyle: {
					color: '#fff',
				},
				x: "center",
				top: "2%"
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: { // 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			/*  legend: {
	    	type:'scroll',
	        data: [],
	        top:"11%",
	        textStyle:{
                	color:'#fff',
                },
	    },*/
			grid: {
				show: true,
				left: '3%',
				right: '3%',
				bottom: '6%',
				top: '15%',
				containLabel: true,
			},
			xAxis: {
				type: 'value',
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				},

			},
			yAxis: {
				type: 'category',
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				},
				axisLabel: {
					show: true,
					/*rotate:-50,*/
					textStyle: {
						color: '#fff',
						fontSize: '15'
					}
				},
				data: []
			},
			series: [{
				data: [],
				type: 'bar',
				label: {
					show: true,
				}
			}]
		};

		$.ajax({
			type: "get",
			url: "http://47.96.156.41/cy/rong/getLibData?token=" + token,
			success: function(data) {
				if(data.success == false) {
					location.href = "login.html";
				}
				for(var i = 0; i < data.length; i++) {
					option3.series[0].data.push(data[i].num);
					option3.yAxis.data.push(data[i].name);
				}
				myChart3.setOption(option3);
			}
		});
	}
	setInterval(function() {
		getData(str);
		getChart2();
		getChart3();
	}, 1000 * 60 * 5);