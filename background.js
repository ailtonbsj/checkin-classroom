chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    if (tab.url.includes('classroom.google.com')) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: function () {
          let btns = document.querySelectorAll(".MhXXcc.oJeWuf")
          btns.forEach(function (item) {
            item.addEventListener("click", function () {
              let muralItem = item.parentElement.parentElement.parentElement.parentElement
                .parentElement.parentElement
              let colour = muralItem.style.backgroundColor
              if (colour !== 'yellow') muralItem.style.backgroundColor = 'yellow'
              else muralItem.style.backgroundColor = ''
            })
          })
        }
      })
    }
  }
})
