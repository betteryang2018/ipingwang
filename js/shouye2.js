// JavaScript Document// JavaScript Document

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
	box3UlWraps=box3Wrap.getElementsByTagName("div"),
	giftPics=spzsWrap.getElementsByTagName("ul"),
	len=topBarTits.length,
	leftArrow=byId("left_arrow"),
	rightArrow=byId("right_arrow");
	


/* 吃喝玩乐 图片轮播 */
slideImg(proMain,ulPics,timer1,index,next,prev,3000,topTits,titIndex,"on");

/* chwl榜 图片轮播*/
slideTitAndImg(box3UlWraps,topBarTits,titIndex,"red_tit");


/*赠送礼品 图片轮播*/
slideImgNoTit(box4Main,giftPics,timer,dataIndex,rightArrow,leftArrow,5000);



/*-------------- 下面是图片轮播库------------ */

// 图片轮播 slideImg()
function slideImg(wrapBox,picsArr,timerName,indexName,nextBtn,prevBtn,timeNum,titArr,titIndexName,titClassName){
	// 当鼠标停留时，取消定时器
	wrapBox.onmouseover=function(){
		clearInterval(timerName);
	}
	
	// 当鼠标离开timeNum秒后，切换图片
	wrapBox.onmouseout=function(){
		timerName=setInterval(function(){
			indexName++;
			if(indexName>=len) indexName=0;
			changeImg();
		},timeNum);	
	}
	
	//自动调用onmouseout事件
	wrapBox.onmouseout();
	
	// 遍历所有标题，使点击标题时切换图片
	for(var d=0;d<len;d++){
		titArr[d].setAttribute("titIndexName",d);
		titArr[d].onclick=function(){
			indexName=this.getAttribute("titIndexName");
			changeImg();
		}
	  }

	
	// 下一张
	nextBtn.onclick=function(){
		indexName++;
		if(indexName>=len) indexName=0;
		changeImg();
	}
	
	// 上一张
	prevBtn.onclick=function(){
		indexName--;
		if(indexName<0) indexName=len-1;
		changeImg();
	}
	
	// 切换图片 changeImg()  
	function changeImg(){
		for(var i=0;i<len;i++){
			picsArr[i].style.display="none";
			titArr[i].className="";
		}
		picsArr[indexName].style.display="block";
		titArr[indexName].className=titClassName;
	}  
}

// 图片轮播 slideImgNoTit()
function slideImgNoTit(wrapBox,picsArr,timerName,indexName,nextBtn,prevBtn,timeNum){
	// 当鼠标停留时，取消定时器
	wrapBox.onmouseover=function(){
		clearInterval(timerName);
	}
	
	// 当鼠标离开timeNum秒后，切换图片
	wrapBox.onmouseout=function(){
		timerName=setInterval(function(){
			indexName++;
			if(indexName>=len) indexName=0;
			changeImg();
		},timeNum);	
	}
	
	//自动调用onmouseout事件
	wrapBox.onmouseout();

	// 下一张
	nextBtn.onclick=function(){
		indexName++;
		if(indexName>=len) indexName=0;
		changeImg();
	}
	
	// 上一张
	prevBtn.onclick=function(){
		indexName--;
		if(indexName<0) indexName=len-1;
		changeImg();
	}
	
	// 切换图片 changeImg()  
	function changeImg(){
		for(var i=0;i<len;i++){
			picsArr[i].style.display="none";
		}
		picsArr[indexName].style.display="block";
	}  
}

  
// 点击标题改变标题样式，并切换图片slideTitAndImg()
function slideTitAndImg(picsArr,titArr,titIndexName,titClassName){
	changeTit();
	function changeTit(){
		// 遍历标题，为每个标题加上索引值
		for(var d=0;d<len;d++){
		titArr[d].setAttribute("titIndexName",d);
		titArr[d].onclick=function(){
			index=this.getAttribute("titIndexName");
			changeImg();
		}
	  }
	}
  
	// 切换图片 changeImg()  
	function changeImg(){
		for(var i=0;i<len;i++){
			titArr[i].className="";
			picsArr[i].style.display="none";
		}
		titArr[index].className=titClassName;
		picsArr[index].style.display="block";
	} 
}


// 封装一个获得id的函数
function byId(id){
  return typeof(id)==="string"?document.getElementById(id):id;
}