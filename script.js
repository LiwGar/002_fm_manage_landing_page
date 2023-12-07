//toggle icon navbar

let menuIcon = document.querySelector('#menu_Icon');

let navBar = document.querySelector('.nav_Bar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    //se agrega en el css como nabvar.active
    navBar.classList.toggle('active');
}