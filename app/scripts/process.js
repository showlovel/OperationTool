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
        console.log(text.toString())
        getMouse(env)
        //check wether ip
        if(/\d+.\d+.\d+.\d+/.test(data)){
            console.log("is a ip")
            checkIp(data)
        }
        if(/\w+-\w+-\w+-\w+/.test(data)){
            console.log("is a device")
            checkDevice(data)
        }
    }
}
//get mouse location
function getMouse(ev){
    x = ev.clientX
    y = ev.clientY
    console.log("x = "+x)
    console.log("y = "+y)
}
//check ip info from ip138
function checkIp(ip){
    //checkIp Info
    $.get("http://www.ip138.com/ips1388.asp?ip="+ip+"&action=2",function(data){
        info = $(data)[27].getElementsByTagName("td")[2].getElementsByTagName("li")[0]["innerText"]
        console.log(info)
    })
}
//check device info from sys
function checkDevice(device){
    alert(data)
}