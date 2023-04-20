chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "updateUrl") {
    sendResponse({ url: window.location.href });
  }
});