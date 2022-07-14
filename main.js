const sketchDiv = document.querySelector('#sketchContainer');

for (let i=0; i<16*16; i++) {
  createDiv();
}

function createDiv () {
  const div = document.createElement('div');
  div.classList.add("pixel");
  sketchDiv.appendChild(div)
}