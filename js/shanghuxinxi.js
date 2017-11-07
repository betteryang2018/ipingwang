// JavaScript Document

var index=0,
	chwl=byId("chwl"),
	topTits=chwl.getElementsByTagName("a"),
	tLen=topTits.length,
	yemaMain=byId("yema"),
	pages=yemaMain.getElementsByTagName("a"),
	len=pages.length;
	console.log(topTits);

// 遍历所有页码并绑定事件
function changePage(){
	for(var i=0;i<len;i++){
		pages[i].id=i;
		pages[i].onclick=function(){
			index=this.id;
			for(var j=0;j<len;j++){
				pages[j].className="";
			}
			pages[index].className="active";
		}
	}
}

changePage()
  
// 遍历商户信息标题，使点击标题时切换样式
function changeTitStyle(){
	for(var t=0;t<tLen;t++){
		topTits[t].setAttribute("titIndex",t);
		topTits[t].onclick=function(){
			titIndex=this.getAttribute("titIndex");
			changeTit();
		}
	}
}
  
function changeTit(){
	for(var i=0;i<tLen;i++){
		topTits[i].className="";
	}
	topTits[titIndex].className="on";
} 
    
changeTitStyle();  


// 封装一个获得id的函数
function byId(id){
  return typeof(id)==="string"?document.getElementById(id):id;
}