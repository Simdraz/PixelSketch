const sketchDiv = document.querySelector('#sketchContainer');
const drop = document.querySelector(".dropdown");
const items = Array.from(drop.children)
const currentColor = "#333333";
const defaultSize = 8;

// Main
items.forEach(item => item.addEventListener('click', createGrid))
// Creating default grid

createGrid(defaultSize);

let pixels = Array.from(document.querySelectorAll('.pixel'));
setListeners();
sketchDiv.addEventListener('mouseleave', stopColor);


// Setting events for drawing

function setListeners(){
  pixels.forEach(pixel => pixel.addEventListener('mousedown', colorPixel));
  pixels.forEach(pixel => pixel.addEventListener('mouseup', stopColor));
}

// Grid sizing functions

function gridSize (e){
  const str = e.innerText;
  const val = str.replace('x','*');
  return val;
}

function createDiv () {
  const div = document.createElement('div');
  div.classList.add("pixel");
  sketchDiv.appendChild(div)
}

function createGrid (e) {
  sketchDiv.innerHTML = ``;
  if (e == 8) {
    for (let i=0; i<e*e; i++) {
      createDiv();
    }
  }
  else {
    const val = gridSize(e.target);
    const res = parseInt(val.substr(val.indexOf('*')+1));
    sketchDiv.style.cssText = `grid-template-rows: repeat(${res}, 1fr);grid-template-columns: repeat(${res}, 1fr);`;


    for (let i=0; i<res*res; i++) {
      createDiv();
    }

    pixels = Array.from(document.querySelectorAll('.pixel'));
    setListeners();
  }
}

// Drawing functions

function colorPixel (e) {
  e. stopPropagation(); 
  this.style.backgroundColor = "black";
  pixels.forEach(pixel => pixel.addEventListener('mouseover', onHover));
}

function onHover(e){
  e. stopPropagation(); 
  this.style.backgroundColor = "black";
}

function stopColor (e) {
  pixels.forEach(pixel => pixel.removeEventListener('mouseover', onHover));
}