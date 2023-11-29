const menuBtn = document.getElementById("menu-toggler");
const header = document.querySelector(".header");

const handleChange = (e) => {
  if (e.target.checked) {
    header.classList.add("show-menu");
    document.body.style.setProperty('overflow-y', 'hidden');
  } else {
    header.classList.remove("show-menu");
    document.body.style.setProperty('overflow-y', 'auto');
  }
};

menuBtn.addEventListener("change", handleChange);
document.addEventListener("scroll", onScroll);

let lastScrollPos = 0;

function onScroll() {
  if (window.pageYOffset > 0) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }

  if (window.pageYOffset === 0) {
    header.classList.add("show-header");
  } else if (lastScrollPos < window.pageYOffset) {
    header.classList.add("show-header");
  } else {
    header.classList.remove("show-header");
  }

  lastScrollPos = window.pageYOffset;
}

// Modal
const ratesWrapperEl = document.querySelector(".all-rates-wrapper");
const showRatesBtn = document.getElementById("show-rates");
const hideRatesBtn = document.getElementById("hide-rates");

function openRatesModal() {
  ratesWrapperEl.classList.add("show");
}
function closeRatesModal() {
  ratesWrapperEl.classList.remove("show");
}

showRatesBtn.addEventListener("click", openRatesModal);
hideRatesBtn.addEventListener("click", closeRatesModal);

const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((el) => el.addEventListener("click", scrollTo));

function scrollTo(e) {
  if(menuBtn.checked){
    menuBtn.click();
  }

  e.preventDefault();
  const target = e.target.getAttribute("href");
  document.querySelector(`.${target.slice(1)}`).scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}
