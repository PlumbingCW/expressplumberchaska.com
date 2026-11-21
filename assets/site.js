(function(){
var ham=document.getElementById("hamburger"),dr=document.getElementById("mobDrawer"),ov=document.getElementById("mobOverlay"),cl=document.getElementById("mobClose");
function setMenu(open){if(!dr){return;}dr.classList.toggle("open",open);ov.classList.toggle("open",open);ham.setAttribute("aria-expanded",open?"true":"false");dr.setAttribute("aria-hidden",open?"false":"true");document.documentElement.style.overflow=open?"hidden":"";}
if(ham){ham.addEventListener("click",function(){setMenu(true);});}
if(cl){cl.addEventListener("click",function(){setMenu(false);});}
if(ov){ov.addEventListener("click",function(){setMenu(false);});}
if(dr){dr.addEventListener("click",function(e){if(e.target.closest("a")){setMenu(false);}});}
document.addEventListener("keydown",function(e){if(e.key==="Escape"){setMenu(false);}});
window.addEventListener("resize",function(){if(window.innerWidth>768){setMenu(false);}});
var qs=document.querySelectorAll(".faq-q");
for(var i=0;i<qs.length;i++){qs[i].addEventListener("click",function(){var b=this,a=document.getElementById(b.getAttribute("aria-controls")),o=b.getAttribute("aria-expanded")==="true";b.setAttribute("aria-expanded",o?"false":"true");a.style.maxHeight=o?"0px":a.scrollHeight+"px";});}
})();
