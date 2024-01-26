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

parsedLocalData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

//---------PAGINATION-----------

const buttonsContainer = document.querySelector(".pagination-container");
buttonsContainer.addEventListener("click", onButtons);

const contentPagConteiner = document.querySelector(".js-content-container");

//Buttons
const firstBtn = document.querySelector(".btn-first");
const secondBtn = document.querySelector(".btn-second");
const moreBtn = document.querySelector(".btn-more");
const backBtn = document.querySelector(".btn-back");
const oneBackBtn = document.querySelector(".btn-one-back");
const oneForwardBtn = document.querySelector(".btn-one-forward");
const forwardBtn = document.querySelector(".btn-forward");


let pages = Math.ceil(parsedLocalData.length / 4);

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
  backBtn.disabled = true;
  oneBackBtn.disabled = true;
  oneForwardBtn.disabled = true;
  forwardBtn.disabled = true;
}
if (pages === 2) {
  moreBtn.disabled = true;
  backBtn.disabled = true;
  oneBackBtn.disabled = true;
  oneForwardBtn.disabled = true;
  forwardBtn.disabled = true;
}

if (+(firstBtn.textContent) !== 1) {
  oneBackBtn.disabled = false;
  backBtn.disabled = false;
} else {
  oneForwardBtn.disabled = false;
  forwardBtn.disabled = false;
}

if (+(secondBtn.textContent) === pages) {
  moreBtn.disabled = true;
  oneForwardBtn.disabled = true;
  forwardBtn.disabled = true;
  backBtn.disabled = true;
  oneBackBtn.disabled = true;
}

if (+(moreBtn.textContent) === pages) {
  oneForwardBtn.disabled = true;
  forwardBtn.disabled = true;
  backBtn.disabled = true;
  oneBackBtn.disabled = true;
}


//---------on button-----------

function onButtons(evt) {

  const click = evt.target;

  //! First Btn
  if (click.classList.contains("btn-first")) {
    currentPage = click.textContent;
    secondBtn.classList.remove("btn-activ");
    firstBtn.classList.add("btn-activ");
    moreBtn.classList.remove("btn-activ");

    secondBtn.textContent = +(firstBtn.textContent) + 1;
    moreBtn.textContent = +(secondBtn.textContent) + 1;

    if (+(firstBtn.textContent) > pages -2) {
      oneForwardBtn.disabled = false;
      forwardBtn.disabled = false;
    }

    if (+(secondBtn.textContent) === pages) {
      oneForwardBtn.disabled = true;
      forwardBtn.disabled = true;
      backBtn.disabled = true;
      oneBackBtn.disabled = true;
      moreBtn.disabled = true;
    }

    if (+(moreBtn.textContent) === pages) {
      oneForwardBtn.disabled = true;
      forwardBtn.disabled = true;
    }
  }

    //! Second Btn
  if (click.classList.contains("btn-second")) {
    currentPage = click.textContent;
    secondBtn.classList.add("btn-activ");
    firstBtn.classList.remove("btn-activ");
    moreBtn.classList.remove("btn-activ");


    firstBtn.textContent = +(secondBtn.textContent) - 1;
    moreBtn.textContent = +(secondBtn.textContent) + 1;

    if (secondBtn !== pages - 1) {
      oneForwardBtn.disabled = false;
      forwardBtn.disabled = false;
    }

    if (+(secondBtn.textContent) === pages) {
      oneForwardBtn.disabled = true;
      forwardBtn.disabled = true;
      moreBtn.disabled = true;
    }
    
    if (+(moreBtn.textContent) === pages) {
      oneForwardBtn.disabled = true;
      forwardBtn.disabled = true;
    }
  }
  
      //! More/Thitd Btn
  if (click.classList.contains("btn-more")) {
      currentPage = click.textContent;
      moreBtn.classList.add("btn-activ");
      firstBtn.classList.remove("btn-activ");
      secondBtn.classList.remove("btn-activ");

    if (+(moreBtn.textContent) === pages) {
      oneForwardBtn.disabled = true;
      forwardBtn.disabled = true;
      backBtn.disabled = false;
      oneBackBtn.disabled = false;
    }
  }
      
        //! Forward Btn
    if (click === forwardBtn || click.closest(".btn-forward")) {
      firstBtn.textContent = pages - 2;
      secondBtn.textContent = pages - 1;
      moreBtn.textContent = pages;

      currentPage = moreBtn.textContent;
      moreBtn.classList.add("btn-activ");
      firstBtn.classList.remove("btn-activ");
      secondBtn.classList.remove("btn-activ");
  
      oneForwardBtn.disabled = true;
      forwardBtn.disabled = true;
      oneBackBtn.disabled = false;
      backBtn.disabled = false;
  } 


        //! Back Btn
    if (click === backBtn || click.closest(".btn-back")) {
      firstBtn.textContent = 1;
      secondBtn.textContent = 2;
      moreBtn.textContent = 3;

      currentPage = firstBtn.textContent;
      firstBtn.classList.add("btn-activ");
      moreBtn.classList.remove("btn-activ");
      secondBtn.classList.remove("btn-activ");
  
      oneBackBtn.disabled = true;
      backBtn.disabled = true;
      oneForwardBtn.disabled = false;
      forwardBtn.disabled = false;
  } 

          //! One Forward Btn
  if (click === oneForwardBtn || click.closest(".btn-one-forward")) {
      moreBtn.textContent = +(moreBtn.textContent) + 1;
      firstBtn.textContent = +(moreBtn.textContent) - 2;
      secondBtn.textContent = +(moreBtn.textContent) - 1;

      currentPage = moreBtn.textContent;
      moreBtn.classList.add("btn-activ");
      firstBtn.classList.remove("btn-activ");
      secondBtn.classList.remove("btn-activ");
    
      oneBackBtn.disabled = false;
      backBtn.disabled = false;
  
      if (+(moreBtn.textContent) === pages){
      oneForwardBtn.disabled = true;
      forwardBtn.disabled = true;
    }
  } 

        //! One Back Btn
  if (click === oneBackBtn || click.closest(".btn-one-back")) {
    firstBtn.textContent = +(firstBtn.textContent) - 1;
    secondBtn.textContent = +(firstBtn.textContent) + 1;
    moreBtn.textContent = +(firstBtn.textContent) + 2;
    currentPage = firstBtn.textContent;
    firstBtn.classList.add("btn-activ");
    moreBtn.classList.remove("btn-activ");
    secondBtn.classList.remove("btn-activ");

    oneForwardBtn.disabled = false;
    forwardBtn.disabled = false;

    if (+(firstBtn.textContent) === 1){
    oneBackBtn.disabled = true;
    backBtn.disabled = true;
    }
  }
  
    step = 0 + 4 * (currentPage - 1);
    onePage = parsedLocalData.slice(step, step + 4);
    makeMarkup(onePage);
}



