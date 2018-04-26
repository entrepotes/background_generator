var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.querySelector('body'); 
var css = document.querySelector('h3'); 

console.log(color1);
console.log(color2)


function setGradient(){
	// body.setAttribute('background')
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ', ' + color2.value + ') ';

	css.textContent = body.style.background + ';'
}

