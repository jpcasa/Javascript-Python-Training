const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");

function spinElement(event) {
  //Applies spinning animation to button element
  event.target.className = "spin";
}

btn1.addEventListener ('click', event => {
  spinElement(event);
});

btn2.addEventListener ('click', event => {
  spinElement(event);
});

btn2.addEventListener ('click', event => {
  spinElement(event);
});
