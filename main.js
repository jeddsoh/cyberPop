const affirmLink = document.getElementById("affirm-link");
const yvLink = document.getElementById("yv-link");

const affirm = document.getElementById("affirm");
const yv = document.getElementById("yv");

const brand = document.getElementById("brand");
const heading = document.getElementById("heading");
const intro = document.getElementById("intro");
const btnGroup = document.getElementById("btn-group");
const sketchNote = document.getElementById("sketch-note");

const img = document.getElementById("img-affirm");

const affirmBullet = document.getElementById("affirm-bullet");
const yvBullet = document.getElementById("yv-bullet");


function fadeOut() {
  brand.classList.add("opacity-5");
  heading.classList.add("opacity-5");
  intro.classList.add("opacity-5");
  btnGroup.classList.add("opacity-0");
  sketchNote.classList.add("opacity-0");
}

function imgOut() {
  img.classList.remove("opacity-0");
  img.classList.add("opacity-100");
  img.classList.remove("translate-x-72");
  img.classList.add("translate-x-0");
}

function fadeIn() {
  brand.classList.remove("opacity-5");
  heading.classList.remove("opacity-5");
  intro.classList.remove("opacity-5");
  btnGroup.classList.remove("opacity-0");
  sketchNote.classList.remove("opacity-0");
}

function imgIn() {
  img.classList.add("opacity-0");
  img.classList.remove("opacity-100");
  img.classList.add("translate-x-72");
  img.classList.remove("translate-x-0");
}

affirmLink.addEventListener("mouseenter", function () {
  yv.classList.add("opacity-0");
  yv.classList.add("-z-10");
  affirmBullet.classList.add("opacity-0");
  fadeOut();
  img.src = "./assets/affirm-cover.png";
  img.onload = function () {
    imgOut();
  };
});

affirmLink.addEventListener("mouseleave", function () {
  yv.classList.remove("opacity-0");
  yv.classList.remove("-z-10");
  affirmBullet.classList.remove("opacity-0");

  fadeIn();
  imgIn();
});

yvLink.addEventListener("mouseenter", function () {
  affirm.classList.add("opacity-0");
  affirm.classList.add("-z-10");
  yvBullet.classList.add("opacity-0");

  fadeOut();
  img.src = "./assets/yv-cover.png";
  img.onload = function () {
    imgOut();
  };
});

yvLink.addEventListener("mouseleave", function () {
  affirm.classList.remove("opacity-0");
  affirm.classList.remove("-z-10");
  yvBullet.classList.remove("opacity-0");
  fadeIn();
  imgIn();
});
