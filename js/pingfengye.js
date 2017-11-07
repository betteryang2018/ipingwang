// JavaScript Document

// 全局变量
var index=0,
	num=2,
	timer=null,
	rating=byId("rating"),
	olArr=rating.getElementsByTagName("ol"),
	ol1=olArr[0].getElementsByTagName("li"),
	ol2=olArr[1].getElementsByTagName("li"),
	ol3=olArr[2].getElementsByTagName("li"),
	ol4=olArr[3].getElementsByTagName("li"),
	ol5=olArr[4].getElementsByTagName("li"),
	scr1=olArr[0].getElementsByTagName("i")[0],
	scr2=olArr[1].getElementsByTagName("i")[0],
	scr3=olArr[2].getElementsByTagName("i")[0],
	scr4=olArr[3].getElementsByTagName("i")[0],
	scr5=olArr[4].getElementsByTagName("i")[0],
	len=ol1.length;

// 遍历星星，并绑定事件
function check(ratingItems,scoreVal){
	for(var i=0;i<len;i++){
		// 给每个星星添加一个id属性为索引
		ratingItems[i].id=i;
		ratingItems[i].onmouseover=function(){
		  clearcolors();	
		  index=this.id;
		  // 将index之前星星遍历显示为选中状态
		  checked();
		}
		  
		// 鼠标点击时，星星选中
		ratingItems[i].onclick=function(){
		 clearcolors();
		  checked();
	  }
	  
	}
	
	// 清除星星的颜色 clearColors()
	function clearcolors(){
		for(var i=0;i<len;i++){
			ratingItems[i].style.background="url(img/else/uncheck.png)";
		}
	}
	
	// 点亮星星 checked()
	function checked(){
		for(var j=index;j>=0;j--){
			ratingItems[j].style.background="url(img/else/check.png)";
		}
		// 显示分数
		scoreVal.innerHTML=parseInt(index)+1;
	}
}



check(ol1,scr1); 
check(ol2,scr2); 
check(ol3,scr3); 
check(ol4,scr4); 
check(ol5,scr5); 



// 封装一个获得id的函数
function byId(id){
  return typeof(id)==="string"?document.getElementById(id):id;
}