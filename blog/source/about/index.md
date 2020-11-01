---
title: about
date: 2018-06-01 22:34:44
---
<script type="text/javascript">
	var a = document.getElementsByClassName("meta");
	a[0].style.visibility="hidden";
</script>
<div>
   <div id='ab_related'>
      <div id="ab_port"><img onmouseleave="show(this)" src="http://i.imgur.com/4TqFuJR.jpg"></div>
      <div id='a'><img id='whoAmi' onmouseenter="hide(this)" src="http://i.imgur.com/eOiKHhQ.png"></div>
      <div id='b'><a href="/res/cv/CV_CaoLineng.pdf"><img src="http://i.imgur.com/8poffSK.png"></a></div>
   </div>
</div>
<script type="text/javascript">
	function show(x) {
		x.style.opacity="1";
		document.getElementById("b").style.visibility='visible';

	}

	function hide(x) {
	// x.style.visibility="hidden";
	$(document).ready(function(){
		$("#whoAmi").fadeOut("slow");
	});
	document.getElementById("a").style.visibility="hidden";

	}
</script>