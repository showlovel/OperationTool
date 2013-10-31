var selected = false

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

document.onmouseup=function(env){
    text = getSelectText()
    data = text.toString()
    if(data.length!=0 && data.length!=""){
    	// $.get("http://www.baidu.com/s",{wd:"text"},function(data){
    	// 	console.log(data)
    	// })
        console.log(text.toString())
        getMouse(env)
    }
}
function getMouse(ev){
    x = ev.clientX
    y = ev.clientY
    console.log("x = "+x)
    console.log("y = "+y)
}