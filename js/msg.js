//*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************//
const msg = document.getElementById("msg");
const send = document.getElementById("send");
const chat = document.getElementById("chat");
send.addEventListener("click", ()=>{
  let div = document.createElement("div");
  let p = document.createElement("p");
  let v = msg.value;
  p.setAttribute("class", "self");
  p.appendChild(document.createTextNode(msg.value));
  div.appendChild(p);
  if (msg.value){
    chat.appendChild(div);
    setTimeout(()=>{
      let div1 = document.createElement("div");
      let p1 = document.createElement("p");
      p1.setAttribute("class", "hem");
      p1.appendChild(document.createTextNode(v+Math.floor(Math.random()*9999999)));
      div1.appendChild(p1);
      chat.appendChild(div1);
    }, 500);
  }
  msg.value = "";
});
