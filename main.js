const sketchDiv = document.querySelector('#sketchContainer');
const drop = document.querySelector(".dropdown");
const items = Array.from(drop.children)
const rainbowBtn = document.querySelector('#rainbow');
const currentColor = "#333333";
const defaultSize = 8;
let color = "black";
let rainbowTrigger = 0;

// Main
items.forEach(item => item.addEventListener('click', createGrid))
// Creating default grid

createGrid(defaultSize);

let pixels = Array.from(document.querySelectorAll('.pixel'));
setListenersDraw();
setListenersRainbow();
sketchDiv.addEventListener('mouseleave', stopColor);


// Functions to set events

function setListenersDraw(){
  pixels.forEach(pixel => pixel.addEventListener('mousedown', colorPixel));
  pixels.forEach(pixel => pixel.addEventListener('mouseup', stopColor));
}

function setListenersRainbow(){
  rainbowBtn.addEventListener('click', rainbowMode);
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
    setListenersDraw();
  }
}

// Drawing functions

function colorPixel (e) {
  e.stopPropagation();
  this.style.backgroundColor = color;
  pixels.forEach(pixel => pixel.addEventListener('mouseover', onHover));
}

function onHover(e){
  e. stopPropagation(); 
  if (rainbowTrigger == 1) this.style.backgroundColor = `rgb(${random()},${random()},${random()})`;
  else this.style.backgroundColor = color;
}

function stopColor (e) {
  pixels.forEach(pixel => pixel.removeEventListener('mouseover', onHover));
}

// Creating random number

function random () {
  const x = Math.floor(Math.random() * 256);
  return x;
}

function rainbowMode (){
  if (rainbowTrigger == 0) {
    color = `rgb(${random()},${random()},${random()})`;
    rainbowTrigger = 1;
  }
  else { 
    color = "black";
    rainbowTrigger = 0;
  }
  
  rainbowBtn.classList.toggle('rainAct')
}