
// NEW
const affirmLink = document.getElementById("affirm-link");
const yvLink = document.getElementById("yv-link");

const brand = document.getElementById("brand");
const heading = document.getElementById("heading");
const intro =  document.getElementById("intro");
const btnGroup = document.getElementById("btn-group");
const sketchNote = document.getElementById("sketch-note");

const affirm = document.getElementById("affirm");
const imgAffirm = document.getElementById("img-affirm");
const imgAffirmParent = document.getElementById("img-affirm-parent");

affirmLink.addEventListener("mouseenter", function () {
  imgAffirm.src = "./assets/affirm-cover.png";
  brand.classList.add("opacity-10");
  heading.classList.add("opacity-10");
  intro.classList.add("opacity-10");
  btnGroup.classList.add("opacity-10");
  sketchNote.classList.add("opacity-10");
  yvLink.classList.add("opacity-10");
  imgAffirm.classList.add("opacity-100");
  imgAffirm.classList.add("translate-x-0");
});

affirmLink.addEventListener("mouseleave", function () {
  brand.classList.remove("opacity-10");
  heading.classList.remove("opacity-10");
  intro.classList.remove("opacity-10");
  btnGroup.classList.remove("opacity-10");
  sketchNote.classList.remove("opacity-10");
  yvLink.classList.remove("opacity-10");
  imgAffirm.classList.remove("opacity-100");
  imgAffirm.classList.remove("translate-x-0");
});

yvLink.addEventListener("mouseenter", function () {
  imgAffirm.src = "./assets/yv-cover.png";
  yvLink.classList.add("z-20")
  brand.classList.add("opacity-10");
  heading.classList.add("opacity-10");
  intro.classList.add("opacity-10");
  btnGroup.classList.add("opacity-10");
  sketchNote.classList.add("opacity-10");
  affirmLink.classList.add("opacity-10");
  affirm.classList.add("-z-10");
  imgAffirm.classList.add("opacity-100");
  imgAffirm.classList.add("translate-x-0");
});

yvLink.addEventListener("mouseleave", function () {
  brand.classList.remove("opacity-10");
  yvLink.classList.remove("z-20")
  heading.classList.remove("opacity-10");
  intro.classList.remove("opacity-10");
  btnGroup.classList.remove("opacity-10");
  sketchNote.classList.remove("opacity-10");
  affirmLink.classList.remove("opacity-10");
  affirm.classList.remove("-z-10");
  imgAffirm.classList.remove("opacity-100");
  imgAffirm.classList.remove("translate-x-0");
});