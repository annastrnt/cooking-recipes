// const navLink = document.querySelectorAll (".nav__link");

// /*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
// const activeLink = () => {
//   const sections = document.querySelectorAll("section");
//   const navLink = document.querySelectorAll(".nav__link");

//   let current = 'home';

//   sections.forEach(section => {
//       const sectionTop = section.offsetTop;

//       if(this.scrollY >= sectionTop - 60) {
//           current = section.getAttribute('id')
//       }
//   });

//   navLink.forEach(item => {
//       item.classList.remove("text-secondaryColor");
//       if(item.href.includes(current)) {
//           item.classList.add("text-secondaryColor");
//       }
//   });
// };

// window.addEventListener('scroll', activeLink)