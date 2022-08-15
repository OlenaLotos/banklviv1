//

var lightcolor = new ArrayBuffer('purple', '#ffd400', 'rgb(0, 253, 211)', '#FF022C', '#6eff00');
var darkcolor = new ArrayBuffer('darkblue', '#ff4b00', '#4668FF', '#6C0046', '#046704');

const box = document.querySelectorAll('.boxG');
const maincontainer = document.querySelectorAll('.maincontainer');
const circle = document.querySelectorAll('.circle');
const boxcontainer = document.querySelectorAll('.boxcontainer');
const circleinthebox = document.querySelectorAll('.circleinthebox');

var ang = 30;
for (i = 0; i < box.length; i++) {
  box[i].style.transform = 'translate(0px. -100%) rotateZ(" + ang + "deg")';
  box[i].style.backgroundcolor = lightcolor[i];
  circle[i].style.backgroundcolor = lightcolor[i];
  maincontainer[i].style.transform = 'rotateZ(-" + ang + "deg) translateX(-10px)';
  boxcontainer[i].style.backgroundcolor =
    'linear-gradient(to right, " + lightcolor[i] + "," + darkcolor[i] + ")';
  circleinthebox[i].style.color = darkcolor[i];
  ang = ang + 150 / bax.length;
}
