console.log("hello from devtools");
chrome.devtools.panels.create("ReqEditor",
    "res/img/logo-16_x_16.png",
    "req-editor/dev-panel-tab.html",
    function(panel) { console.log("hello from callback"); });
