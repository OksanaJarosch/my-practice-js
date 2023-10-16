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

parsedLocalData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//---------PAGINATION-----------
   
const buttonsContainer = document.querySelector(".pagination-container");
buttonsContainer.addEventListener("click", onButtons);

const contentPagConteiner = document.querySelector(".js-content-container");

//Buttons
const firstBtn = document.querySelector(".btn-first");
const secondBtn = document.querySelector(".btn-second");
const thirdBtn = document.querySelector(".btn-third");
const moreBtn = document.querySelector(".btn-more");
const backBtn = document.querySelector(".btn-back");
const oneBackBtn = document.querySelector(".btn-one-back");
const oneForwardBtn = document.querySelector(".btn-one-forward");
const forwardBtn = document.querySelector(".btn-forward");


let pages = Math.ceil(parsedLocalData.length / 4);
console.log(pages);

let currentPage = 1;

let step = 0;

let onePage = parsedLocalData.slice(step, step + 4);

//---------markup-----------

function makeMarkup(arr) {
 const markup = arr.map(item => {
    return `<div>${item}</div>`
  }).join("");

  contentPagConteiner.innerHTML = markup;
}

if (pages === 0) {
  buttonsContainer.classList.add("is-hidden");
} else {
makeMarkup(onePage)
}

if (pages === 1) {
  secondBtn.disabled = true;
  moreBtn.disabled = true;
  thirdBtn.disabled = true;
}
if (pages === 2) {
  thirdBtn.disabled = true;
  moreBtn.disabled = true;
}
if (+(secondBtn.textContent) === pages) {
  moreBtn.disabled = true;
}


//---------on button-----------

function onButtons(evt) {

  // if (pages === 0) {
  //   buttonsContainer.classList.add("is-hidden");
  // } else {
  //   buttonsContainer.classList.remove("is-hidden");
  // }

  const click = evt.target;

  if (click.classList.contains("btn-first")) {
    currentPage = click.textContent;
    secondBtn.classList.remove("btn-activ");
    firstBtn.classList.add("btn-activ");
    moreBtn.classList.remove("btn-activ");

    if (firstBtn !== pages -2) {
      oneForwardBtn.disabled = false;
      forwardBtn.disabled = false;
    }
  }

  if (click.classList.contains("btn-second")) {
    currentPage = click.textContent;
    secondBtn.classList.add("btn-activ");
    firstBtn.classList.remove("btn-activ");
    moreBtn.classList.remove("btn-activ");

    if (secondBtn !== pages - 1) {
      oneForwardBtn.disabled = false;
      forwardBtn.disabled = false;
    }
  }
  
  // if (click.classList.contains("btn-third")) {
  //   currentPage = click.textContent;
  // } 
  
  if (click.classList.contains("btn-more")) {

    if (+(secondBtn.textContent) === pages - 1) {
      moreBtn.textContent = pages;
      currentPage = click.textContent;
      moreBtn.classList.add("btn-activ");
      firstBtn.classList.remove("btn-activ");
      secondBtn.classList.remove("btn-activ");

      oneForwardBtn.disabled = true;
      forwardBtn.disabled = true;
      
    } else {
      firstBtn.textContent = +(firstBtn.textContent) + 1;
      secondBtn.textContent = +(secondBtn.textContent) + 1;
    }
  }
  
  if (click === oneForwardBtn) {

    if (+(secondBtn.textContent) === pages - 2) {
      moreBtn.textContent = pages;
      currentPage = moreBtn.textContent;
      moreBtn.classList.add("btn-activ");
      firstBtn.classList.remove("btn-activ");
      secondBtn.classList.remove("btn-activ");

      oneForwardBtn.disabled = true;
      forwardBtn.disabled = true;
      
      firstBtn.textContent = +(firstBtn.textContent) + 1;
      secondBtn.textContent = +(secondBtn.textContent) + 1;
    }
  }
      
    if (click === forwardBtn) {
      firstBtn.textContent = pages - 2;
      secondBtn.textContent = pages - 1;
      moreBtn.textContent = pages;
      currentPage = moreBtn.textContent;
      moreBtn.classList.add("btn-activ");
      firstBtn.classList.remove("btn-activ");
      secondBtn.classList.remove("btn-activ");
  
      oneForwardBtn.disabled = true;
      forwardBtn.disabled = true;
  } 
  
    step = 0 + 4 * (currentPage - 1);
    onePage = parsedLocalData.slice(step, step + 4);
    makeMarkup(onePage);
    
  }


