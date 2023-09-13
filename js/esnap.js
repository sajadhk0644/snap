const toggle=document.querySelector(".toggle");
const menu=document.querySelector(".menu ul");
toggle.addEventListener('click',function(){
    menu.classList.toggle("show_menu");
});