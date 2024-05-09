let togglebtn = document.querySelector('.toggle-bar');
let controlnav = document.querySelector('.control_nav');
let navcount = 0;

togglebtn.addEventListener('click', () => {
    if (navcount == "0") {
        controlnav.style.left = "2rem"
        togglebtn.classList.remove('fa-bars');
        togglebtn.classList.add('fa-xmark');
        navcount = 1;
    } else {
        controlnav.style.left = "-50rem"
        togglebtn.classList.add('fa-bars');
        togglebtn.classList.remove('fa-xmark');
        navcount = 0
    }
})

