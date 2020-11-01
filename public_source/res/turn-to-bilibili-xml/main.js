(function(){
	var patt = new RegExp('cid=(.+?)&a');	
	var cid = patt.exec(document.documentElement.innerHTML);
	if (cid != null){
		location = "http://comment.bilibili.com/" + cid[1] + ".xml";
	}else{
		alert("好像这个页面VINCE还没能找到方法")
	}	
})();