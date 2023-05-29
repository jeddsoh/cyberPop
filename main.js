const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-nav");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
})

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrolled = window.scrollY > 0;
  header.classList.toggle('scrolled', scrolled);
});
