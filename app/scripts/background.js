'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});
// chrome.browserAction.onClicked.addListener(function(tab) {
// 	alert(1)
// });
// chrome.runtime.onStartup.addListener(function (details) {
// 	console.log("tool Startup!");
// 	alert(1)
// });