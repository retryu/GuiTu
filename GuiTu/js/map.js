
var  map;

window.onload = function() {
	 initMap();
	 
	 initPlaceList();
	 
	}


//初始化地图
function  initMap() {
	 map = new BMap.Map("container");
	var point = new BMap.Point(116.404, 39.915);
	map.centerAndZoom(point, 15);
	//添加平移缩放控件
	map.addControl(new  BMap.NavigationControl());
}

//初始化地点列表的点击事件
function initPlaceList(point){
	 var t=document.getElementById("placeTable");
	 var  tr=t.getElementsByTagName("tr");
	 for(var i=1;i<tr.length;i++){
		 
		   
		 if(i%2==0){
		 tr[i].bgColor='F4F4F4';
		 	}
		 else{
			 tr[i].style.backgroundColor="#E8E8E8";
		 }
		 tr[i].onclick=function(){
			var  lat=this.getAttribute('lat');
			var  lnt=this.getAttribute('lnt');
			 
			 var p=new  BMap.Point(lat,lnt);
			map.panTo(p);
		 }
	 }
	
}