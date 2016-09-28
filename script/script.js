/*
var inputBox = document.getElementById('input');
var outputBox = document.getElementById('output');
var button = document.getElementById('calci');
var scr = document.getElementById('screen');
var input ;
var output ;
button.addEventListener("click",function(){

  input = parseInt(inputBox.value);
  output = Math.pow(input,1/2);
  outputBox.innerHTML=output;
});
button.getElementByClassName('butt').addEventListener("click", myFunc());
function myFunc() {
  alert("its done ");
}*/
var classname = document.getElementsByClassName("butt");
var myFunction = function() {
    var attribute = this.getAttribute("value");
    document.getElementById('screen').value=document.getElementById('screen').value + attribute;
};
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction, false);
}
