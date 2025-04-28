const toggleBtn=document.getElementById("menu-toggle");
const navLinks=document.getElementById("nav-links");
const links=document.querySelectorAll("li");

toggleBtn.addEventListener("click", function(){
  const isActive = navLinks.classList.contains("active");
 if (!isActive){
  navLinks.classList.add("active");
 
 
 }else{
  navLinks.classList.remove("active");
 
 }
 toggleBtn.innerHTML=isActive?'<i class="fa fa-bars" aria-hidden="true"></i>':'<i class="fa fa-times" aria-hidden="true"></i>';
 
})
links.forEach(function(list){
  list.addEventListener("click", function(){
    navLinks.classList.remove("active");
    toggleBtn.innerHTML='<i class="fa fa-bars" aria-hidden="true"></i>';
  }) 
})