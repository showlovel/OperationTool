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
        place = getMouse(env)
        //check ip
        var info = ""
        if(/^\d+\.\d+\.\d+\.\d+$/.test(data)){
            console.log("is a ip")
            info = checkIp(data,place)
        }else if(/^[A-Za-z]{3}-[A-Za-z]{2,3}-[A-Za-z0-9]{1}-[A-Za-z0-9]{3}$/.test(data)){
        //check device
            console.log("is a device")
            info = checkDevice(data)
        }else if(/^[A-Za-z0-9.-]+$/.test(data)){
        //check group
            console.log("is group")
            info = checkGroup(data)
        }
        
    }
}
//get mouse location
function getMouse(ev){
    x = ev.clientX
    y = ev.clientY
    scx = window.scrollX
    scy = window.scrollY
    b = {}
    b.x = x + scx + 10
    b.y = y + scy + 10
    console.log("x = "+x)
    console.log("y = "+y)
    console.log("scx = "+scx)
    console.log("scy = "+scy)
    return b
}
//check ip info from ip138
function checkIp(ip,place){
    retinfo = ""
    //checkIp Info
    $.get("http://www.ip138.com/ips1388.asp?ip="+ip+"&action=2",function(data){
        retinfo = $(data)[27].getElementsByTagName("td")[2].getElementsByTagName("li")[0]["innerText"]
        toggleInfoDiv(retinfo,place.x,place.y)
    })
    console.log(retinfo)
    return retinfo
}

//check device info from sys
function checkDevice(device){
    return device
}
//check group info
function checkGroup(group){
    return group
}
//add div to html
function toggleInfoDiv(info,x,y){
    $("#actinfo").append("<span>"+info+"</span>")
    document.getElementById("infoDiv").style.top  = y+"px"
    document.getElementById("infoDiv").style.left = x+"px"
}
// remove chindren nodes
function removeChildNode(){

}