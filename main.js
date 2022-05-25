//==============================================================================================================================================================================================================================================================================================//

const navBtns = document.querySelectorAll("#navigation div");
const navBar = document.getElementById("navigation");
const cercle = document.querySelector(".cercle");
const pageViewer = document.getElementById("page-veiwer");
let mainSrc = "pages";

navBtns.forEach(el => {
  el.addEventListener('click', ()=>{
    navBtns.forEach(e => {
      e.classList.remove("selected");
    });
    el.classList.add("selected");
    pageViewer.setAttribute("src", `${mainSrc}/${el.dataset.page}.html`);
  });
});
