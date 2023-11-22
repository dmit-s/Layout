const menuBtn = document.getElementById("menu-toggler");
const handleChange = (e) => {
  const header = document.querySelector("header");
  if (e.target.checked) {
    header.classList.add("show-menu");
  } else {
    header.classList.remove("show-menu");
  }
};
menuBtn.addEventListener("change", handleChange);
