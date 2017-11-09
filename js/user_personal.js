// JavaScript Document

var pageBox=document.getElementById("pageBox"),
	pageArr=pageBox.getElementsByTagName("a"),
	len=pageArr.length;

// 遍历所有页码并绑定事件
function changePage(pages,activeClassName){
	for(var i=0;i<len;i++){
		pages[i].id=i;
		pages[i].onclick=function(){
			index=this.id;
			for(var j=0;j<len;j++){
				pages[j].className="";
			}
			pages[index].className=activeClassName;
		}
	}
}

changePage(pageArr,"active");
