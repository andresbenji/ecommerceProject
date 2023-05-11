// ------------------------- BRANDS --------------------------------------

let i = 0;
let images = [];
let time = 2500;

images[0] = "images/Mazda-Logo.png";
images[1] = "images/Nissan_logo.png";
images[2] = "images/mitsubishi-1-logo-png-transparent.png";
images[3] = "images/toyota-logos-brands-logotypes-0.png";

const changeImg = () => {
  document.imgSlide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
};

window.onload = changeImg;
