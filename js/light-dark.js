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