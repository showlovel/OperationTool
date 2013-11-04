// inject Info Div
function injectInfoDiv(){
    div = "<div id='infoDiv' class='infoDiv'><div class='closeaction'></div><div class='r'><span id='title'></span></div><div id='actinfo' class='infodate'><span id='content'></span></div></div>"
    $("body").append(div)
}

injectInfoDiv()
