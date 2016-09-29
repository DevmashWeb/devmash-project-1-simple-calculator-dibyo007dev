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

// my faults ....................

button.getElementByClassName('butt').addEventListener("click", myFunc());
function myFunc() {
  alert("its done ");
}*/

// ---------------------------------- to print the pressed button on the text box
var classname = document.getElementsByClassName("butt");
var myFunction = function() {
    var attribute = this.getAttribute("value");
    document.getElementById('screen').value=document.getElementById('screen').value + attribute;
};
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction, false);
}


// ---------------------- to get button AC work ... hell yeah
var clear = document.getElementById('clrscr');

var clearf = function() {
  document.getElementById('screen').value = "";
}

clear.addEventListener('click', clearf, false);


// ---------------------- evaluate --------------------------

var evalp = document.getElementById('evaluate');

var evalfunc = function() {
  var evalt = document.getElementById('screen').getAttribute("value");
  var answer = eval(evalt);
  clearf();
  document.getElementById('screen').value = answer;
}

evalp.addEventListener('click', evalfunc, false);
