const toggleBtn = document.querySelector(".toggle-btn");
const testEl = document.querySelector(".test-container");
const testTitelEl = document.querySelector(".test-titel")
toggleBtn.addEventListener("click", onToggle);

function onToggle(evt) {
    testEl.classList.toggle("dark-theme");
    testTitelEl.classList.toggle("dark-theme");

    if (toggleBtn.textContent === "Light") {
        toggleBtn.textContent = "Dark";
    } else {
      toggleBtn.textContent = "Light";  
    }
    
}


let parsedLocalData;

parsedLocalData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//---------pagination-----------

let pages = Math.ceil(parsedLocalData.length / 3);
console.log(pages);
     
const buttonsContainer = document.querySelector(".pagination-container");

buttonsContainer.addEventListener("click", onButtons);

// buttonsContainer.classList.add("is-hidden");

function onButtons(evt) {
if (pages === 0) {
  buttonsContainer.classList.add("is-hidden");
} else {
  buttonsContainer.classList.remove("is-hidden");
}

  // if (evt.target.textContent === "1") {
  //   console.log("Im on first page");
      
  // } else if (evt.target.textContent === "2") {
    
  // }
}

