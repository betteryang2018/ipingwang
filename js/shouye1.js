// JavaScript Document

var index=0,
	timer1=null,
	chwl=byId("chwl"),
	proWrap=byId("proWrap"),
	proMain=byId("pro_main"),
	topTits=chwl.getElementsByTagName("a"),
	len=topTits.length,
	ulPics=proWrap.getElementsByTagName("ul"),
	next=byId("next"),
	prev=byId("prev"),
	dataIndex=0,
	titIndex=0,
	timer=null,
	box4Main=byId("box4_main"),
	spzsWrap=byId("spzs_wrap"),
	topBar=byId("topBarStyle"),
	topBarTits=topBar.getElementsByTagName("a"),
	box3Wrap=byId("box3Wrap"),
	box3UlWraps=box3Wrap.getElementsByClassName("box3_ulWrap"),
	giftPics=spzsWrap.getElementsByTagName("ul"),
	len=topBarTits.length,
	leftArrow=byId("left_arrow"),
	rightArrow=byId("right_arrow");
	
// 吃喝玩乐 图片轮播	 
function slideImg(){
	// 当鼠标停留时，取消定时器
	proMain.onmouseover=function(){
		clearInterval(timer1);
	}
	
	// 当鼠标离开3秒后，切换图片
	proMain.onmouseout=function(){
		timer1=setInterval(function(){
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


// 赠送礼品 图片轮播

function slideImg2(){
	// 当鼠标停留时，取消定时器
	box4Main.onmouseover=function(){
		clearInterval(timer);
	}
	
	// 当鼠标离开5秒后，切换图片
	box4Main.onmouseout=function(){
		timer=setInterval(function(){
			dataIndex++;
			if(dataIndex>=len) dataIndex=0;
			changeImg2();
		},5000);	
	}
	
	//自动调用onmouseout事件
	box4Main.onmouseout();

	// 下一张
	rightArrow.onclick=function(){
		dataIndex++;
		if(dataIndex>=len) dataIndex=0;
		changeImg2();
	}
	
	// 上一张
	leftArrow.onclick=function(){
		dataIndex--;
		if(dataIndex<0) dataIndex=len-1;
		changeImg2();
	}
	
}

// 切换图片 changeImg2()  
function changeImg2(){
	for(var i=0;i<len;i++){
		giftPics[i].style.display="none";
	}
	giftPics[dataIndex].style.display="block";
} 
  
slideImg2();  
  
  
// 吃货榜 js begin
  
// 遍历所有标题，使点击标题时切换样式
function changeTitStyle(){
	for(var t=0;t<len;t++){
		topBarTits[t].setAttribute("titIndex",t);
		topBarTits[t].onclick=function(){
			index=this.getAttribute("titIndex");
			changeTit();
		}
	}
}
  
function changeTit(){
	for(var i=0;i<len;i++){
		topBarTits[i].className="";
		box3UlWraps[i].style.display="none";
	}
	topBarTits[index].className="red_tit";
	box3UlWraps[index].style.display="block";
} 

changeTitStyle();  


// 封装一个获得id的函数
function byId(id){
  return typeof(id)==="string"?document.getElementById(id):id;
}