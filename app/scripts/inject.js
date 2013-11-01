function injectInfoDiv(){
	div = "<div id='infoDiv' class='infoDiv'><div class='r'>OperationTool v0.1  <a href='' id='infoClose'>close</a></div><div id='actinfo' class='infodate'></div></div>"
	$("body").append(div)
}
injectInfoDiv()