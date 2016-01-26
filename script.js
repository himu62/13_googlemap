// マップ初期化
var ll_map = new google.maps.LatLng(35.7911679,139.6916239);
var opts = {
	zoom: 16,
	center: ll_map,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	mapTypeControl: false,
	zoomControl: false,
	streetViewControl: false
};
var map = new google.maps.Map(document.getElementById('map'), opts);

var icon_marker = {
	path: "M1024 448h-100.924c-27.64-178.24-168.836-319.436-347.076-347.076v-100.924h-128v100.924c-178.24 27.64-319.436 168.836-347.076 347.076h-100.924v128h100.924c27.64 178.24 168.836 319.436 347.076 347.076v100.924h128v-100.924c178.24-27.64 319.436-168.836 347.076-347.076h100.924v-128zM792.822 448h-99.762c-19.284-54.55-62.51-97.778-117.060-117.060v-99.762c107.514 24.49 192.332 109.31 216.822 216.822zM512 576c-35.346 0-64-28.654-64-64s28.654-64 64-64c35.346 0 64 28.654 64 64s-28.654 64-64 64zM448 231.178v99.762c-54.55 19.282-97.778 62.51-117.060 117.060h-99.762c24.49-107.512 109.31-192.332 216.822-216.822zM231.178 576h99.762c19.282 54.55 62.51 97.778 117.060 117.060v99.762c-107.512-24.49-192.332-109.308-216.822-216.822zM576 792.822v-99.762c54.55-19.284 97.778-62.51 117.060-117.060h99.762c-24.49 107.514-109.308 192.332-216.822 216.822z",
	fillColor: '#000000',
	fillOpacity: .87,
	anchor: new google.maps.Point(0, 0),
	strokeWeight: 0,
	scale: .025
};

var ll_mk1 = new google.maps.LatLng(35.7944108,139.6927634);
var marker1 = new google.maps.Marker({
	position: ll_mk1,
	map: map,
	icon: icon_marker
});
var info1 = new google.maps.InfoWindow({
	content: 'きれい。<br><img src="img1.jpg" width="640">'
});
google.maps.event.addListener(marker1, 'click', function() {
	info1.open(map, marker1);
});
var ll_mk2 = new google.maps.LatLng(35.7905128,139.6906368);
var marker2 = new google.maps.Marker({
	position: ll_mk2,
	map: map,
	icon: icon_marker
});
var info2 = new google.maps.InfoWindow({
	content: 'すごい。<br><img src="img2.jpg" width="640">'
});
google.maps.event.addListener(marker2, 'click', function() {
	info2.open(map, marker2);
});
var ll_mk3 = new google.maps.LatLng(35.7785214,139.6928658);
var marker3 = new google.maps.Marker({
	position: ll_mk3,
	map: map,
	icon: icon_marker,
	title: '薬師の泉庭園'
});
var info3 = new google.maps.InfoWindow({
	content: 'なごむ。<br><img src="img3.jpg" width="640">'
});
google.maps.event.addListener(marker3, 'click', function() {
	info3.open(map, marker3);
});
var ll_mk4 = new google.maps.LatLng(35.7837434,139.6943165);
var marker4 = new google.maps.Marker({
	position: ll_mk4,
	map: map,
	icon: icon_marker
});
var info4 = new google.maps.InfoWindow({
	content: 'まったり。<br><img src="img4.jpg" width="640">'
});
google.maps.event.addListener(marker4, 'click', function() {
	info4.open(map, marker4);
});
var ll_mk5 = new google.maps.LatLng(35.784855,139.6562621);
var marker5 = new google.maps.Marker({
	position: ll_mk5,
	map: map,
	icon: icon_marker
});
var info5 = new google.maps.InfoWindow({
	content: 'のほほん。<br><img src="img5.jpg" width="640">'
});
google.maps.event.addListener(marker5, 'click', function() {
	info5.open(map, marker5);
});

// メニューのアニメーション
var btnMenu = document.getElementById('btn-menu');
var stageMenu = document.getElementById('menu');
btnMenu.addEventListener('mouseover', function() {
	btnMenu.classList.add('active');
	stageMenu.classList.add('active');
});
stageMenu.addEventListener('mouseleave', function() {
	btnMenu.classList.remove('active');
	stageMenu.classList.remove('active');
});
var btns = document.getElementsByClassName('btn-mini');
for(var i=0; i<btns.length; ++i) {
	btns.item(i).addEventListener('click', function(e) {
		var offsetX = e.x - this.offsetLeft - this.offsetParent.offsetLeft;
		var offsetY = e.y - this.offsetTop - this.offsetParent.offsetTop;
		var r = this.clientWidth / 2;

		var ripple = document.createElement('div');
		ripple.classList.add('ripple');
		ripple.style.top = (offsetY - r * 2) + 'px';
		ripple.style.left = (offsetX - r * 2) + 'px';
		ripple.style['-webkit-clip-path'] = 'circle(25% at ' + (r * 3 - offsetX) + 'px ' + (r * 3 - offsetY) + 'px)';
		this.appendChild(ripple);
		ripple.addEventListener('webkitAnimationEnd', function() {
			this.remove();
		});
	});
}

// ロケーション
document.getElementById('loc1').addEventListener('click', function() {
	map.setCenter(ll_mk1);
});
document.getElementById('loc2').addEventListener('click', function() {
	map.setCenter(ll_mk2);
});
document.getElementById('loc3').addEventListener('click', function() {
	map.setCenter(ll_mk3);
});
document.getElementById('loc4').addEventListener('click', function() {
	map.setCenter(ll_mk4);
});
document.getElementById('loc5').addEventListener('click', function() {
	map.setCenter(ll_mk5);
});

// メニューのコントロール
document.getElementById('btn-zoom-in').addEventListener('click', function() {
	var zoom = map.getZoom();
	map.setZoom(++zoom);
});
document.getElementById('btn-zoom-out').addEventListener('click', function() {
	var zoom = map.getZoom();
	map.setZoom(--zoom);
});
document.getElementById('btn-switch-type').addEventListener('click', function() {
	var mode = map.getMapTypeId();
	if(mode.indexOf(google.maps.MapTypeId.ROADMAP) == 0) {
		map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
		this.classList.remove('roadmap');
		this.classList.add('satellite');
	} else {
		map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
		this.classList.add('roadmap');
		this.classList.remove('satellite');
	}
});
document.getElementById('btn-equalizer').addEventListener('click', function() {
	document.getElementById('color-container').classList.add('active');
	btnMenu.classList.remove('active');
	stageMenu.classList.remove('active');
});
document.getElementById('color-container').addEventListener('click', function() {
	this.classList.remove('active');
});
document.getElementById('color-dialog').addEventListener('click', function(e) {
	e.stopPropagation();
});

var hue = null;
var sat = 0;
var light = 0;

function setStyle() {
	var style = [
		{
			stylers: [
				{hue: hue},
				{saturation: sat},
				{lightness: light}
			]
		}
	];
	map.setOptions({styles: style});
}

function setHue(e) {
	if(e.type == 'mousemove' && e.webkitMovementX < 1) {
		return;
	}

	var pi = 3.14159265359;
	var h = e.offsetX / e.target.clientWidth;

	var c = Math.floor(h * 6);
	var p = Math.floor((h * 6 - c) * 255);
	var ap = 255 - p;

	var color = '';
	if(c == 0) {
		color = 'ff' + p.toString(16) + '00';
	} else if (c == 1) {
		color = ap.toString(16) + 'ff00';
	} else if (c == 2) {
		color = '00ff' + p.toString(16);
	} else if (c == 3) {
		color = '00' + ap.toString(16) + 'ff';
	} else if (c == 4) {
		color = p.toString(16) + '00ff';
	} else {
		color = 'ff00' + ap.toString(16);
	}

	hue = '#' + color;
	document.getElementById('val-hue').textContent = hue;
	setStyle();
}

var barHue = document.getElementById('bar-hue');

barHue.addEventListener('mousedown', function(e) {
	setHue(e);
	barHue.addEventListener('mousemove', setHue);
});
barHue.addEventListener('mouseup', function(e) {
	setHue(e);
	barHue.removeEventListener('mousemove', setHue);
});

function beginGrab(func) {
	document.getElementById('grab-cover').style.display = 'block';
	window.addEventListener('mousemove', func);
	window.addEventListener('mouseup', endGrab);
}

function endGrab() {
	document.getElementById('grab-cover').style.display = 'none';
	window.removeEventListener('mousemove', setSat);
	window.removeEventListener('mousemove', setLight);
}

function setSat(e) {
	var val = e.x - document.getElementById('bar-sat').getClientRects()[0].left;
	if(val - 8 < 0) {
		val = 0;
	} else if (val + 8 > 250) {
		val = 250;
	}

	sat = Math.floor(val * (200 / 250.0) - 100);

	document.getElementById('point-sat').style.left = (val - 8) + 'px';
	document.getElementById('val-sat').textContent = sat;
	setStyle();
}

function setLight(e) {
	var val = e.x - document.getElementById('bar-light').getClientRects()[0].left;
	if(val - 8 < 0) {
		val = 0;
	} else if (val + 8 > 250) {
		val = 250;
	}

	light = Math.floor(val * (200 / 250.0) - 100);

	document.getElementById('point-light').style.left = (val - 8) + 'px';
	document.getElementById('val-light').textContent = light;
	setStyle();
}

document.getElementById('bar-sat').addEventListener('mousedown', function(e) {
	beginGrab(setSat);
	setSat(e);
});
document.getElementById('point-sat').addEventListener('mousedown', function(e) {
	beginGrab(setSat);
});
document.getElementById('bar-light').addEventListener('mousedown', function(e) {
	beginGrab(setLight);
	setLight(e);
});
document.getElementById('point-light').addEventListener('mousedown', function(e) {
	beginGrab(setLight);
});

document.getElementById('btn-default').addEventListener('click', function() {
	hue = null;
	sat = 0;
	light = 0;

	document.getElementById('val-hue').textContent = 'NULL';
	document.getElementById('point-sat').style.left = '117px';
	document.getElementById('val-sat').textContent = sat;
	document.getElementById('point-light').style.left = '117px';
	document.getElementById('val-light').textContent = light;
	setStyle();
});
