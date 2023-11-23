const menuBtn = document.getElementById("menu-toggler");
const header = document.querySelector(".header");
const handleChange = (e) => {
  if (e.target.checked) {
    header.classList.add("show-menu");
  } else {
    header.classList.remove("show-menu");
  }
};
menuBtn.addEventListener("change", handleChange);


document.addEventListener('scroll', onScroll);

let lastScrollPos = 0;

function onScroll(){
  if(window.pageYOffset === 0){
    header.classList.add('show-header');
  }
  else if(lastScrollPos < window.pageYOffset){
    header.classList.add('show-header');
  } else{
    header.classList.remove('show-header');
  } 
  lastScrollPos = window.pageYOffset;
}