// Sprite Tabs

// adding an event listner to tabs and sprite img options
// tab id in HTML should be set to "tab-x" where x is
// the number of the tab
// tab div id should be set to "tab-div-x"

let numberOfTabs = document
  .getElementById("tab-ul")
  .getElementsByTagName("li").length;

function addOption(event) {
  let optionSelected = event.target.id;
  let optionSelectedPreview = document.getElementById(`${optionSelected}-img`);
  let optionSelectedPreviewId = optionSelectedPreview.id;
  optionSelectedPreviewId = optionSelectedPreviewId.slice(0, -4);
  let tabDiv = optionSelected.substring(0, 9);
  let tabDivOptions = document.querySelectorAll(`#${tabDiv} img`);
  let numberOfOptions = tabDivOptions.length;

  for (i = 0; i < numberOfOptions; i++) {
    console.log(numberOfOptions);
    let spriteOption = tabDivOptions[i].id;
    let spriteOptionStyle = document.getElementById(`${spriteOption}-img`);
    console.log(spriteOptionStyle);
    console.log(spriteOptionStyle);
    if (spriteOption === optionSelectedPreviewId) {
      optionSelectedPreview.classList.add("active-option");
      optionSelectedPreview.classList.remove("inactive-option");
    } else {
      spriteOptionStyle.classList.add("inactive-option");
      spriteOptionStyle.classList.remove("active-option");
    }
  }
}
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
  let tabDiv = `tab-div-${i}`;
  let tabDivOptions = document.querySelectorAll(`#${tabDiv} img`);
  let numberOfOptions = tabDivOptions.length;

  // evemt listener for sprite tabs
  document.getElementById(`${tabId}`).addEventListener("click", openTab);

  // event listener for sprite options
  for (t = 0; t < numberOfOptions; t++) {
    tabDivOptions[t].addEventListener("click", addOption);
  }
}
