//***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************//
// selected

const likes = document.querySelectorAll("#like");
const dislikes = document.querySelectorAll("#dislike");
const shares = document.querySelectorAll("#share");

function add(){
  let span = this.childNodes[3];
  if (this.classList.toggle("selected")){
    span.innerText = parseInt(span.innerText) + 1;
  }else
    span.innerText = parseInt(span.innerText) - 1;
}
likes.forEach((like, i) => {
  like.onclick = function() {
    let span = this.childNodes[3];
    if (this.classList.toggle("selected")) {
      span.innerText = parseInt(span.innerText) + 1;
    } else
      span.innerText = parseInt(span.innerText) - 1;
    if (dislikes[i].classList.contains("selected")) {
      dislikes[i].classList.remove("selected");
      dislikes[i].childNodes[3].innerText = parseInt(dislikes[i].childNodes[3].innerText) - 1;
    }
  }
});
dislikes.forEach((dislike, i) => {
  dislike.onclick = function (){
    let span = this.childNodes[3];
    if (this.classList.toggle("selected")) {
      span.innerText = parseInt(span.innerText) + 1;
    } else
      span.innerText = parseInt(span.innerText) - 1;
    if (likes[i].classList.contains("selected")){
      likes[i].classList.remove("selected");
      likes[i].childNodes[3].innerText = parseInt(likes[i].childNodes[3].innerText) - 1;
    }
  }
});
shares.forEach(share=>{
  share.onclick = add;
});
