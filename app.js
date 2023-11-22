const menuBtn = document.getElementById('menu-toggler');
const handleChange = (e) => {
    const header = document.querySelector('header');
    if(e.target.checked){
        header.classList.add('menuIsActive');
    } else{
        header.classList.remove('menuIsActive');
    }
}
menuBtn.addEventListener('change', handleChange);

