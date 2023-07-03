const affirmLink = document.getElementById("affirm-link");
const yvLink = document.getElementById("yv-link");

const affirm = document.getElementById("affirm");
const yv = document.getElementById("yv");


const brand = document.getElementById("brand");
const heading = document.getElementById("heading");
const intro = document.getElementById("intro");
const btnGroup = document.getElementById("btn-group");
const sketchNote = document.getElementById("sketch-note");

const imgAffirm = document.getElementById("img-affirm");
const imgYV = document.getElementById("img-yv");

const imgAffirmParent = document.getElementById("img-affirm-parent");

function fadeOut() {
  imgAffirm.classList.remove("opacity-0");
  imgAffirm.classList.add("opacity-100");
  imgAffirm.classList.remove("translate-x-72");
  imgAffirm.classList.add("translate-x-0");
  brand.classList.add("opacity-10");
  heading.classList.add("opacity-10");
  intro.classList.add("opacity-10");
  btnGroup.classList.add("opacity-10");
  sketchNote.classList.add("opacity-10");
}

function fadeIn() {
  imgAffirm.classList.add("opacity-0");
  imgAffirm.classList.remove("opacity-100");
  imgAffirm.classList.add("translate-x-72");
  imgAffirm.classList.remove("translate-x-0");
  brand.classList.remove("opacity-10");
  heading.classList.remove("opacity-10");
  intro.classList.remove("opacity-10");
  btnGroup.classList.remove("opacity-10");
  sketchNote.classList.remove("opacity-10");
}

affirmLink.addEventListener("mouseenter", function() {
  imgAffirm.src = "./assets/affirm-cover.png";
  imgAffirm.onload = function() {
    yv.classList.add("opacity-10");
    yv.classList.add("-z-10");
    fadeOut();
  };
});

affirmLink.addEventListener("mouseleave", function() {
  yv.classList.remove("opacity-10");
  yv.classList.remove("-z-10");
fadeIn();
});

yvLink.addEventListener("mouseenter", function() {
  imgAffirm.src = "./assets/yv-cover.png";
  imgAffirm.onload = function() {
    affirm.classList.add("opacity-10");
    affirm.classList.add("-z-10");
    fadeOut();
  };
});

yvLink.addEventListener("mouseleave", function() {
  affirm.classList.remove("opacity-10");
  affirm.classList.remove("-z-10");
  fadeIn();
});


