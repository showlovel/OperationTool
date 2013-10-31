function getSelectText(){
    var txt = null;
    if (window.getSelection){  // mozilla FF
        txt = window.getSelection();
       }
    else if (document.getSelection){
        txt = document.getSelection();
        }
    else if (document.selection){  //IE
        txt = document.selection.createRange().text;
        }
    return txt;
}
document.onmouseup=function(){
    text = getSelectText()
    if(text.length!=0 && text!=""){
    	$.get("http://www.baidu.com/s",{wd:"text"},function(data){
    		console.log(data)
    	})
    }
}