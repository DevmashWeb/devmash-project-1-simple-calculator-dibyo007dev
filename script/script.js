
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


button.addEventListener("click", myFunc());

function myFunc() {
  this.getElementByClassName('butt');
  alert("its done ");
}
