	$(".list_link").click(function() {
		window.location.href = "library.html"
	})
	var height = $("#container").width() * 900 / 1360;
	$("#container").height(height);
	$(".operate").height(height);

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

	var baseUrl = window.location.href.split('html/')[0] + 'img/';
	var token = getCookie("token");
	var arr = [];
	getMark();

	function getMark() {
		$.ajax({
			type: "get",
			url: "http://47.96.156.41/cy/rong/getLibrary?token=" + token,
			success: function(data) {
				if(data.success == false) {
					location.href = "login.html";
				}
				var lat, lgt;
				var imgUrl;
				for(var i = 0; i < data.length - 1; i++) {
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
				map.add(arr);
			}
		});
	}

	function addIcon(imgUrl, positions, addr) {
		var markers = [];
		for(var i = 0, marker; i < positions.length; i++) {
			console.log(positions.length)
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
		//$(".right").click(function(){
		//map.remove(markers);
		//map.clearMap();
		//addBeiJing();
		//})
	}
	$(".list_library").mousedown(function() {
		$(this).find("img").attr("src", "../img/bottom1.png")
	});
	$(".list_library").mouseup(function() {
		$(this).find("img").attr("src", "../img/bottom.png")
	})
	setInterval(getMark, 1000 * 60 * 5);