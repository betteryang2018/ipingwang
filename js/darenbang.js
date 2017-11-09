// JavaScript Document


// 点击标题改变标题样式，并切换图片slideTitAndImg()
var titIndex=0,
	chwl=document.getElementById("chwl"),
	chwlTits=chwl.getElementsByTagName("a"),
	len=chwlTits.length;
	
	
slideTitAndImg(chwlTits,titIndex,"on");

function slideTitAndImg(titArr,titIndexName,titClassName){
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
		}
		titArr[index].className=titClassName;
	} 
}