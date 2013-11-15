// main process 
document.onmouseup=function(env){
    text = getSelectText()
    data = text.toString()
    if(data.length!=0 && data.length!=""){
        console.log(text.toString())
        place    = getMouse(env)
        //check ip
        var info = ""
        if(/^\d+\.\d+\.\d+\.\d+$/.test(data)){
            console.log("is a ip")
            checkIp(data)
        }else if(/^[A-Za-z]{3}-[A-Za-z]{2,3}-[A-Za-z0-9]{1}-[A-Za-z0-9]{3}$/.test(data)){
        //check device
            console.log("is a device")
            checkDevice(data)
        }else{
        //check group
            console.log("is group")
            checkGroup(data)
        }
        
    }
}
//get select text
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
//get mouse location
function getMouse(ev){
    var excursion = 15
    b             = {}
    b.x           = ev.clientX + window.scrollX + excursion
    b.y           = ev.clientY + window.scrollY + excursion
    return b
}
//check ip info from ip138
function checkIp(ip){
    retinfo = ""
    //checkIp Info
    $.get("http://www.ip138.com/ips1388.asp?ip="+ip+"&action=2",function(data){
        retinfo      = $(data)[27].getElementsByTagName("td")[2].getElementsByTagName("li")[0]["innerText"]
        info         = {}
        info.title   = ip
        info.content = "<tr><td>IP138:</td><td>"+retinfo.substr(6,ip.length)+"</td></tr>"
        toggleInfoDiv(info,place.x,place.y)
    })
    console.log(retinfo)
    return retinfo
}
// check deviceinfo from MsgOffer
function checkDevice(device){
    $.get("http://localhost:3000/info/device.json?name="+device,function(data){
        console.log(data)
        r1           = "<tr>"+"<td>备注:</td>"+"<td>"+data.description+"</td></tr>"
        r2           = "<tr>"+"<td>Domain:</td>"+"<td>"+data.domain+"</td></tr>"
        r3           = "<tr>"+"<td>设备状态:</td>"+"<td>"+data.devStatus+"</td></tr>"
        content      = r1+r2+r3
        info         = {}
        info.title   = device
        info.content = content
        toggleInfoDiv(info,place.x,place.y)
    })
}

//check group info
function checkGroup(group){
    $.get("http://localhost:3000/info/group.json?name=" + group, function(data){
        console.log(data)
        r0           = "<tr>" + "<td>Total:</td>"   +  "<td>" + data.Total   + "</td></tr>"
        r1           = "<tr>" + "<td>OPEN:</td>"    +  "<td>" + data.OPEN    + "</td></tr>"
        r2           = "<tr>" + "<td>CLOSE:</td>"   +  "<td>" + data.CLOSE   + "</td></tr>"
        r3           = "<tr>" + "<td>SUSPEND:</td>" +  "<td>" + data.SUSPEND + "</td></tr>"
        content      = r0+r1+r2+r 3
        info         = { }
        info.title   = grou p
        info.content = content
        toggleInfoDiv(info,place.x,place.y)
    })
    return group
}
//add div to html
function toggleInfoDiv(info,x,y){
    undisplayInfoDiv()
    dislpayInfoDiv()
    removeInformationDiv()

    $(".r").append("<span id=\"title\">" + info.title + "</span>")
    $("#actinfo").append("<table id=\"content\">" + info.content + "</table>")
    document.getElementById("infoDiv").style.top  = y + "px"
    document.getElementById("infoDiv").style.left = x + "px"
    setTimeout("undisplayInfoDiv()",3000)
}
// remove chindren nodes
function removeInformationDiv(){
    $("#content").remove()
    $("#title").remove()
}
//undisplay info div
function undisplayInfoDiv(){
    $("#infoDiv").fadeOut("slow", function(){
        $("#infoDiv").css({ display: "none" })
    });
}
// display info div
function dislpayInfoDiv(){
//    $("#infoDiv").fadeIn("fast",function(){
        $("#infoDiv").css({ display: "" })
//    });
}