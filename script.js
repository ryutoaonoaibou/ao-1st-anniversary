const opening=document.getElementById("opening");
const openButton=document.getElementById("openButton");
const envelopeScene=document.getElementById("envelopeScene");
const envelope=document.getElementById("envelope");
const content=document.getElementById("content");
const form=document.getElementById("letterForm");
const toast=document.getElementById("toast");

document.body.classList.add("no-scroll");

openButton.addEventListener("click",()=>{
  opening.style.transition="opacity 900ms ease, transform 1200ms ease";
  opening.style.opacity="0";
  opening.style.transform="scale(1.03)";
  setTimeout(()=>{
    opening.style.display="none";
    envelopeScene.style.display="flex";
    envelopeScene.classList.add("fade-in");
    envelopeScene.setAttribute("aria-hidden","false");
  },850);
});

envelope.addEventListener("click",()=>{
  envelope.classList.add("opened");
  envelope.querySelector(".flap").style.transform="rotateX(180deg)";
  envelope.querySelector(".seal").style.opacity="0";
  setTimeout(()=>{
    envelopeScene.style.opacity="0";
    envelopeScene.style.transition="opacity 900ms ease";
    setTimeout(()=>{
      envelopeScene.style.display="none";
      content.style.display="block";
      content.classList.add("fade-in");
      document.body.classList.remove("no-scroll");
      window.scrollTo({top:0,behavior:"instant"});
    },750);
  },850);
});

function countdown(){
  const target=new Date("2026-10-28T00:00:00+09:00").getTime();
  const diff=Math.max(0,target-Date.now());
  const d=Math.floor(diff/86400000);
  const h=Math.floor(diff%86400000/3600000);
  const m=Math.floor(diff%3600000/60000);
  const s=Math.floor(diff%60000/1000);
  document.getElementById("days").textContent=String(d).padStart(2,"0");
  document.getElementById("hours").textContent=String(h).padStart(2,"0");
  document.getElementById("minutes").textContent=String(m).padStart(2,"0");
  document.getElementById("seconds").textContent=String(s).padStart(2,"0");
}
countdown(); setInterval(countdown,1000);

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  toast.classList.add("show");
  form.reset();
  setTimeout(()=>toast.classList.remove("show"),3500);
});
