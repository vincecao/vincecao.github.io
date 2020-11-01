(function(){
    var ifFeedValue = window.location.href.indexOf("in\/feed");
    var ifFacValue = window.location.href.indexOf("in\/faves");
    var ifExpValue = window.location.href.indexOf("in\/explore");
    var ifInValue = window.location.href.indexOf("in");

    if (parseInt(ifFeedValue) != -1){ //feed exist in url, detele it
        alert("Locate to download page, click bookmark pulgin again~")
        location = window.location.href.substring(0, ifFeedValue) + "sizes\/o";
    }else if(parseInt(ifFacValue) != -1){ //fav exist
        alert("Locate to download page, click bookmark again~")
        location = window.location.href.substring(0, ifFacValue) + "sizes\/o";
    }else if(parseInt(ifExpValue) != -1){ //fav exist
        alert("Locate to download page, click bookmark again~")
        location = window.location.href.substring(0, ifExpValue) + "sizes\/o";
    }else if(parseInt(ifInValue) != -1){ //fav exist
        alert("Locate to download page, click bookmark again~")
        location = window.location.href.substring(0, ifInValue) + "sizes\/o";
    }else{
        var ifSizeValue = window.location.href.indexOf("sizes\/l");
        if (parseInt(ifSizeValue) != -1){
            alert("Change to the biggest image, click bookmark pulgin again~")
            location = window.location.href.substring(0, ifSizeValue) + "sizes\/k";
        }else{
            var str = document.documentElement.innerHTML;
            var substrBeginIndex = str.indexOf("\<div id=\"allsizes-photo\"\>", 0) + "\<div id=\"allsizes-photo\"\>".length;
            var substrEndIndex = str.indexOf("\<p id\=\"faq-link\"", parseInt(substrBeginIndex));
            str = str.substring(substrBeginIndex, parseInt(substrEndIndex));
        
            substrBeginIndex = str.indexOf("\<img src=\"", 0) + "\<img src=\"".length;
            substrEndIndex = str.indexOf("\"\>", parseInt(substrBeginIndex));
            str = str.substring(substrBeginIndex, parseInt(substrEndIndex));
            
            if (str != null){
                location = str + "";
                
            }else{
                alert("Something, error! Maybe login and try again...")
            }	
        }
    }
}
)();
