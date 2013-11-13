// inject Info Div
function injectInfoDiv(){
    div = "<div id='infoDiv' class='infoDiv' style='display:none'><div class='r'><span id='title'></span></div><div id='actinfo' class='infodate'><span id='content'></span></div></div>"
    $("body").append(div)
}
injectInfoDiv()