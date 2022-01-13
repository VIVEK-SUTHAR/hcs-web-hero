const menu=document.querySelector(".menu-list");
const menubtn=document.querySelector(".menu-btn");
const cancelbtn=document.querySelector(".cancel-btn");
const navbar=document.querySelector(".navbar");

menubtn.onclick=()=>{
menu.classList.add("active");
menubtn.classList.add("hide");
}
cancelbtn.onclick=()=>{
menu.classList.remove("active");
menubtn.classList.remove("hide");

}
window.onscroll=()=>{

this.scrollY>20?navbar.classList.add("stickey") : navbar.classList.remove("stickey");
}