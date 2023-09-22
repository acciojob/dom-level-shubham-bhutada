//your JS code here. If required.
const level = document.getElementById("level");
let count = 0;
while(level.parent !== html) {
	count++;
	level = level.parent
}
alert(`The level of the element is: count`); 