const imgs = document.getElementById('imgs');
console.log(imgs)
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img"); // gets each image in image container

let index = 0;

let interval = setInterval(run, 2000);

function run() {
  index++;
  changeImage();
}

function changeImage() {
  if (index >= img.length) index = 0;
  if (index < 0) index = img.length - 1;
  imgs.style.transform = `translateX(${-index*500}px)`
  // imageContainer.style.transform = `translate3d` 
}
