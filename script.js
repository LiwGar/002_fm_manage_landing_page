// //scroll Sections

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');


// window.onscroll = () => {
//     sections.forEach(section => {
//         let top = window.scrollY;
//         let offset = section.offsetTop - 100;
//         let height = section.offsetHeight;
//         let id = section.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             //active navbar links
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         }
//     });


//     //sticky header //se agrega en el css como header.sticky
//     let header = document.querySelector('header');
    
//     header.classList.toggle('sticky', window.scrollY > 100);

//     //remove toggle icon and navbar when click navbar links (scroll)
//     menuIcon.classList.remove('bx-x');
//     navBar.classList.remove('active');
// }