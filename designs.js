// Initialization: Check window size and set valid input when loading the page
const width  = window.innerWidth || document.documentElement.clientWidth ||
document.body.clientWidth;
let maxInputWidth = document.querySelector('#inputWidth');
maxInputWidth.max = Math.round(width/20)-4;

// Select color input
let origBoxColor = document.querySelector('#colorPicker').value;

// Select size input
let origHeight = document.querySelector('#inputHeight').value;
let origWidth = document.querySelector('#inputWidth').value;

// Set needed Constants for input reaction
const submitInput = document.querySelector('#submitData');
const colorInput = document.querySelector('#colorPicker');
const table = document.getElementById('table');

// When size is submitted by the user, call makeGrid
submitInput.addEventListener('click', makeGrid, false);

// When color has been changed, call setColor
colorInput.addEventListener('onclick', setColor, false);

// While clicking on a field in the table, call colorize
table.onclick = colorize;

function makeGrid(e1) {
  // Calculate actual maximum input width
  event.preventDefault();
  let width  = window.innerWidth || document.documentElement.clientWidth ||
  document.body.clientWidth;
  let maxInputWidth = document.querySelector('#inputWidth').max;
  maxInputWidth = Math.round(width/20)-4;
  // Set chosen input height and Width
  let gridHeight= document.querySelector('#inputHeight').value;
  let gridWidth = document.querySelector('#inputWidth').value;
  origHeight.value = gridHeight;
  origWidth.value = gridWidth;
  // Check if maximum box number is reached
  if (gridWidth >= maxInputWidth) {
    gridWidth = maxInputWidth-1;
    alert("Reduced your width input to maximum number");
  }
  // Check if minimum input is considered
  if (gridWidth < 1 || gridHeight < 1) {
    if (gridWidth < 1) {
      gridWidth = 1;
    }
    else {
      gridHeight = 1;
    }
  }
  // Write inner HTML string for table setup
  let tableString = '';
  for (i=1; i<=gridHeight; i++) {
    tableString += '<tr>';
    for (y=1; y<=gridWidth; y++) {
      tableString += '<td></td>';
      }
    tableString += '</tr>';
    }
  // Set Table as requested
  table.innerHTML = tableString;
  // Actualize gridWidth and gridHeigth on input form
  document.querySelector('#inputWidth').value = gridWidth;
  document.querySelector('#inputHeight').value = gridHeight;
};

// Take color from input form
function setColor(e2) {
  event.preventDefault();
  let newBoxColor = document.querySelector('#colorPicker').value;
  origBoxColor.value = newBoxColor;
};

// Set the color of the chosen table cell
function colorize(e3) {
  event.preventDefault();
  let newBoxColor = document.querySelector('#colorPicker').value;
  let target = (e3 || window.event).target;
  if (target.tagName in {TD:1,TH:1})
    target.style.backgroundColor = newBoxColor;
};
