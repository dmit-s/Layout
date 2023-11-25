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
  if(window.pageYOffset > 0){
    header.classList.add('scroll')
  }else{
    header.classList.remove('scroll')
  }

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




// Modal
const ratesWrapperEl= document.querySelector('.all-rates-wrapper');
const showRatesBtn = document.getElementById('show-rates');
const hideRatesBtn = document.getElementById('hide-rates');

function openRatesModal(){
  ratesWrapperEl.classList.add('show');
}
function closeRatesModal(){
  ratesWrapperEl.classList.remove('show');
}

showRatesBtn.addEventListener('click', openRatesModal);
hideRatesBtn.addEventListener('click', closeRatesModal);