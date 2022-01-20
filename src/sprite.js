// Sprite Tabs

// adding an event listner to tabs
// tab id in HTML should be set to "tab-x" where x is
// the number of the tab

let numberOfTabs = document
  .getElementById("tab-ul")
  .getElementsByTagName("li").length;

function openTab(event) {
  let targetId = event.target.id;

  for (i = 1; i <= numberOfTabs; i++) {
    let tabId = `tab-${i}`;
    let tabStyle = document.getElementById(`${tabId}`);
    let tabDiv = `tab-div-${i}`;
    tabDiv = document.getElementById(`${tabDiv}`);

    if (tabId === targetId) {
      tabDiv.style.display = "block";
      tabStyle.classList.add("active-tab");
      tabStyle.classList.remove("inactive-tab");
    } else {
      tabDiv.style.display = "none";
      tabStyle.classList.remove("active-tab");
      tabStyle.classList.add("inactive-tab");
    }
  }
}

for (i = 1; i <= numberOfTabs; i++) {
  let tabId = `tab-${i}`;
  document.getElementById(`${tabId}`).addEventListener("click", openTab);
}
