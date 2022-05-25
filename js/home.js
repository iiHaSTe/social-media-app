//***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************//
// selected

const likes = document.querySelectorAll("#like");
const dislikes = document.querySelectorAll("#dislike");
const shares = document.querySelectorAll("#share");

function add(){
  let span = this.childNodes[3];
  if (this.classList.toggle("selected"))
    span.innerText = parseInt(span.innerText) + 1;
  else
    span.innerText = parseInt(span.innerText) - 1;
}
likes.forEach(like => {
  like.onclick = add;
});
dislikes.forEach(dislike => {
  dislike.onclick = add;
});
shares.forEach(share=>{
  share.onclick = add;
});
