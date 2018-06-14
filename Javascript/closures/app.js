// EXAMPLE 1
function makeCounter(noun) {
  let count = 0;
  return function counter() {
    count += 1;
    console.log(count);
    return count + ' ' + noun;
  }
}

const birdCounter = makeCounter('birds');
const dogCounter = makeCounter('birds');
const fishCounter = makeCounter('fish');

birdCounter();
dogCounter();
birdCounter();
dogCounter();
fishCounter();

/* ADVANTAGES OF USING CLOSURES
 1. DISTRIBUTING JS MODULES - When lots of models are created, like jquery, express, underscore.js
    a lot of conflicts would arise from the different library functionalities and variables */

// EXAMPLE 2

var buttons = document.getElementsByTagName('button');

function createHandler(name) {
  return function() {
    console.log(name);
  }
}

for(var i = 0; i < buttons.length; i += 1) {
	var button = buttons[i];
	var buttonName = button.innerHTML;
	button.addEventListener('click', createHandler(buttonName));
}
