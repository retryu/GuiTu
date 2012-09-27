 window.onload=function(){
	 var menu_dropdown_panel=document.getElementById("menu-dropdown-panel");
	 menu_sub_me=document.getElementById('menu-sub-me');
	 
	 
	 /*当鼠标移到menu_sub_me时显示下拉菜单*/
	 menu_sub_me.onmouseover=function(){
		 menu_dropdown_panel.style.display='block';
	 };
	 
	 /*当鼠标移出menu_sub_me或者menu_dropdown_panel时隐藏下拉菜单*/
	 menu_sub_me.onmouseout=function(){
		 menu_dropdown_panel.style.display='none';
	 };
	 menu_dropdown_panel.onmouseout=function(){
		 menu_dropdown_panel.style.display='none';
	 };
 }