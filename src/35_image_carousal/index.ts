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

// Does not loop back like a buffer, hsa to roll back to beginning. SO maybe not best algorithm. ALso note pure CSS but can you do pure css and still have buttons? Is this best way in field? 
function changeImage() {
  if (index >= img.length) index = 0;
  if (index < 0) index = img.length - 1;
  imgs.style.transform = `translateX(${-index*500}px)`
}