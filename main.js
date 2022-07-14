const sketchDiv = document.querySelector('#sketchContainer');

for (let i=0; i<16*16; i++) {
  createDiv();
}

const pixels = Array.from(document.querySelectorAll('.pixel'));

pixels.forEach( pixel => pixel.addEventListener('mouseover', colorPixel));





function colorPixel (e) {
  this.style.background = "black";

}

function createDiv () {
  const div = document.createElement('div');
  div.classList.add("pixel");
  sketchDiv.appendChild(div)
}