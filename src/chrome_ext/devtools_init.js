console.log("Req-Editor DevTool Panel Initialized");
chrome.devtools.panels.create("ReqEditor",
  "assets/img/logo-16_x_16.png",
  "index.html",
  function (panel) {
  });
