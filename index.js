// Getting elements with class="myColumn"
let elements = document.getElementsByClassName("myColumn");

// A variable for looping
let i;

// Function for Viewing Images as List
function list() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Function for Viewing Images as Grid
function grid() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}