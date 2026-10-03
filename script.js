const nav=document.querySelector(".nav");
window.addEventListener("scroll",()=>nav.classList.toggle("scrolled",window.scrollY>40));
const lang=document.getElementById("language");
let spanish=false;
lang.addEventListener("click",()=>{
  spanish=!spanish;
  lang.textContent=spanish?"EN":"ES";
  document.querySelectorAll("[data-en]").forEach(e=>e.textContent=spanish?e.dataset.es:e.dataset.en);
});
document.getElementById("estimateForm").addEventListener("submit",e=>{
  e.preventDefault();
  const d=new FormData(e.currentTarget);
  const msg=`Bandala Paint - Estimate Request\n\nName: ${d.get("name")}\nPhone: ${d.get("phone")}\nService: ${d.get("service")}\nProject: ${d.get("details")||"No details provided."}`;
  location.href="sms:+16195145855?body="+encodeURIComponent(msg);
});
