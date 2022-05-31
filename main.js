var codingDojo = document.getElementById('one');
var codecademy = document.getElementById('two');
var ctu = document.getElementById('three');
var hhs = document.getElementById('four');

function dropdown() {
   if(codingDojo.style.display !== "none") {
      codingDojo.style.display  = "none";
   } else {
      codingDojo.style.display = "block";
   }
}

function dropdownTwo() {
   if(codecademy.style.display !== "none") {
      codecademy.style.display  = "none";
   } else {
      codecademy.style.display = "block";
   }
}

function dropdownThree() {
   if(ctu.style.display !== "none") {
      ctu.style.display  = "none";
   } else {
      ctu.style.display = "block";
   }
}

function dropdownFour() {
   if(hhs.style.display !== "none") {
      hhs.style.display  = "none";
   } else {
      hhs.style.display = "block";
   }
}