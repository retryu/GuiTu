
var  map;

window.onload = function() {
	 initMap();
	 
	 initPlaceList();
	 
	}


//��ʼ����ͼ
function  initMap() {
	 map = new BMap.Map("container");
	var point = new BMap.Point(116.404, 39.915);
	map.centerAndZoom(point, 15);
	//���ƽ�����ſؼ�
	map.addControl(new  BMap.NavigationControl());
}

//��ʼ���ص��б�ĵ���¼�
function initPlaceList(point){
	 var t=document.getElementById("placeTable");
	 var  tr=t.getElementsByTagName("tr");
	 for(var i=0;i<tr.length;i++){
		 tr[i].onclick=function(){
			var  lat=this.getAttribute('lat');
			var  lnt=this.getAttribute('lnt');
			 
			 var p=new  BMap.Point(lat,lnt);
			map.panTo(p);
		 }
	 }
	
}