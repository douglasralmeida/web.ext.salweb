if (typeof msBrowser !== 'undefined') {
      chrome = msBrowser;
  }
  else if (typeof browser != 'undefined') {
      chrome = browser;
  }

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if ((tab.url.match(/exibirDadosCadastraisCIApos.xhtml/i))) {
      if (tabId != null) {
        chrome.pageAction.show(tabId);
      }
    }
});