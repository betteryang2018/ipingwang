// JavaScript Document

var index=0,
	timer=null,
	chwl=byId("chwl"),
	proWrap=byId("proWrap"),
	proMain=byId("pro_main"),
	topTits=chwl.getElementsByTagName("a"),
	len=topTits.length,
	ulPics=proWrap.getElementsByTagName("ul"),
	next=byId("next"),
	prev=byId("prev");

// 图片轮播
function slideImg(){
	// 当鼠标停留时，取消定时器
	proMain.onmouseover=function(){
		clearInterval(timer);
	}
	
	// 当鼠标离开3秒后，切换图片
	proMain.onmouseout=function(){
		timer=setInterval(function(){
			index++;
			if(index>=len) index=0;
			changeImg();
		},3000);	
	}
	
	//自动调用onmouseout事件
	proMain.onmouseout();
	
	// 遍历所有标题，使点击标题时切换图片
	for(var d=0;d<len;d++){
			topTits[d].id=d;
			topTits[d].onclick=function(){
				index=this.id;
				changeImg();
			}
		  }
		  
	// 下一张
	next.onclick=function(){
		index++;
		if(index>=len) index=0;
		changeImg();
	}
	
	// 上一张
	prev.onclick=function(){
		index--;
		if(index<0) index=len-1;
		changeImg();
	}
	
}

// 切换图片 changeImg()  
function changeImg(){
	for(var i=0;i<len;i++){
		topTits[i].className="";
		ulPics[i].style.display="none";
	}
	topTits[index].className="on";
	ulPics[index].style.display="block";
}  
	
slideImg();  
  
  
 
	
// 封装一个获得id的函数
function byId(id){
  return typeof(id)==="string"?document.getElementById(id):id;
}
  





