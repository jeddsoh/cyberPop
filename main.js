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

const affirmBullet = document.getElementById("affirm-bullet");
const yvBullet = document.getElementById("yv-bullet");

const imgAffirmParent = document.getElementById("img-affirm-parent");

function fadeOut() {
  brand.classList.add("opacity-10");
  heading.classList.add("opacity-10");
  intro.classList.add("opacity-10");
  btnGroup.classList.add("opacity-10");
  sketchNote.classList.add("opacity-10");
}

function imgOut() {
  imgAffirm.classList.remove("opacity-0");
  imgAffirm.classList.add("opacity-100");
  imgAffirm.classList.remove("translate-x-72");
  imgAffirm.classList.add("translate-x-0");
}

function fadeIn() {
  brand.classList.remove("opacity-10");
  heading.classList.remove("opacity-10");
  intro.classList.remove("opacity-10");
  btnGroup.classList.remove("opacity-10");
  sketchNote.classList.remove("opacity-10");
}

function imgIn() {
  imgAffirm.classList.add("opacity-0");
  imgAffirm.classList.remove("opacity-100");
  imgAffirm.classList.add("translate-x-72");
  imgAffirm.classList.remove("translate-x-0");
}

affirmLink.addEventListener("mouseenter", function () {
  imgAffirm.src = "./assets/affirm-cover.png";
  yv.classList.add("opacity-0");
  yv.classList.add("-z-10");
  affirmBullet.classList.add("opacity-0");
  fadeOut();
  imgAffirm.onload = function () {
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
  imgAffirm.src = "./assets/yv-cover.png";
  affirm.classList.add("opacity-0");
  affirm.classList.add("-z-10");
  yvBullet.classList.add("opacity-0");

  fadeOut();
  imgAffirm.onload = function () {
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
