chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setIcon({ path: "icons/icon_disabled.png" });
});

chrome.action.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, { action: "updateUrl" }, function (response) {
    if (response) {
      chrome.action.setPopup({ tabId: tab.id, popup: "popup.html" });
    }
  });
});

// background.js
const icons = {
  enabled: "icons/icon.png",
  disabled: "icons/icon_disabled.png"
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url) {
    if (tab.url.indexOf('title/tt') != -1) {
      chrome.action.setIcon({ tabId, path: icons.enabled });
      chrome.action.setPopup({ popup: "popup.html" });
      chrome.action.setBadgeText({ tabId, text: '1' });
      chrome.action.setBadgeTextColor({ tabId, color: "#000000" });
      chrome.action.setBadgeBackgroundColor({ tabId, color: '#00FF00' });
    } else {
      chrome.action.setIcon({ tabId, path: icons.disabled });
    };
  };
});