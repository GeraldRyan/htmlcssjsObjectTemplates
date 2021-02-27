const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img"); // gets each image in image container
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
let bInTrans = false;
imgs.addEventListener("transitionend", () => (bInTrans = false));

let index = 0;
let interval = setInterval(runAuto, 5000);

function runAuto() {
  index++;
  changeImage();
}

// Does not loop back like a buffer, hsa to roll back to beginning. SO maybe not best algorithm. ALso note pure CSS but can you do pure css and still have buttons? Is this best way in field?

// TODO make it a circular buffer.
//TODO give auto image change a direction based on last button pressed (next/prev)
function changeImage() {
  bInTrans = true;
  if (index >= img.length) index = 0;
  if (index < 0) index = img.length - 1;
  imgs.style.transform = `translateX(${-index * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(runAuto, 5000);
}

rightBtn.addEventListener("click", () => {
  if (!bInTrans) {
    index++;
    changeImage();
    resetInterval();
  }
});

leftBtn.addEventListener("click", () => {
  index--;
  resetInterval();
  changeImage();
});