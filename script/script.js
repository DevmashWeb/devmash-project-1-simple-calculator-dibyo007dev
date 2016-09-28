
var inputBox = document.getElementById('input');

var outputBox = document.getElementById('output');

var button = document.getElementById('calci');

var scr = document.getElementById('screen');

var input ;
var output ;

var classname = document.getElementsByClassName("butt");

var myFunction = function() {
    var attribute = this.getAttribute("value");
    document.getElementById('screen').value=document.getElementById('screen').value + attribute;
};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction, false);
}
