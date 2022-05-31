var codingDojo = document.getElementById('one');
var codecademy = document.getElementById('two');
var ctu = document.getElementById('three');
var hhs = document.getElementById('four');

var cardOne = document.getElementById('cardOne');
var cardTwo = document.getElementById('cardTwo');
var cardThree = document.getElementById('cardThree');
var cardFour = document.getElementById('cardFour');

cardOne.addEventListener("click", function(){
   if(codingDojo.style.display !== "none") {
      codingDojo.style.display  = "none";
   } else {
      codingDojo.style.display = "block";
   }
});

cardTwo.addEventListener("click", function(){
   if(codecademy.style.display !== "none") {
      codecademy.style.display  = "none";
   } else {
      codecademy.style.display = "block";
   }
});

cardThree.addEventListener("click", function(){
   if(ctu.style.display !== "none") {
      ctu.style.display  = "none";
   } else {
      ctu.style.display = "block";
   }
});

cardFour.addEventListener("click", function(){
   if(hhs.style.display !== "none") {
      hhs.style.display  = "none";
   } else {
      hhs.style.display = "block";
   }
});
