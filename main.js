var codingDojo = document.getElementById('one');
var codecademy = document.getElementById('two');
var ctu = document.getElementById('three');
var hhs = document.getElementById('four');

var cardOne = document.getElementById('cardOne');
var cardTwo = document.getElementById('cardTwo');
var cardThree = document.getElementById('cardThree');
var cardFour = document.getElementById('cardFour');

cardOne.addEventListener("click", function(){
   if(codingDojo.style.display !== "block") {
      codingDojo.style.display  = "block";
   } else {
      codingDojo.style.display = "none";
   }
});

cardTwo.addEventListener("click", function(){
   if(codecademy.style.display !== "block") {
      codecademy.style.display  = "block";
   } else {
      codecademy.style.display = "none";
   }
});

cardThree.addEventListener("click", function(){
   if(ctu.style.display !== "block") {
      ctu.style.display  = "block";
   } else {
      ctu.style.display = "none";
   }
});

cardFour.addEventListener("click", function(){
   if(hhs.style.display !== "block") {
      hhs.style.display  = "block";
   } else {
      hhs.style.display = "none";
   }
});

