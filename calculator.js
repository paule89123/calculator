calculator.js

let display = document.getElementById('display');
let calculation = "";
let answerDisplayed = false;

document.querySelectorAll('.button').forEach(function(element) {
	element.addEventListener('click', function() {

		// the following if statements make the operator keys (+, -, /, *) inactive if they have already been pressed

		if(calculation.endsWith("+")) {
			if(element.innerHTML === "+") {
				return;
			}
		}

		if(calculation.endsWith("-")) {
			if(element.innerHTML === "-") {
				return;
			}
		}

		if(calculation.endsWith("*")) {
			if(element.innerHTML === "*") {
				return;
			}
			if(element.innerHTML === "/") {
				calculation = calculation.slice(0,-1);
				calculation += "/";
				display.innerHTML = calculation;
				return;
			}
		}

		if(calculation.endsWith("/")) {
			if(element.innerHTML === "/") {
				return;
			}
			if(element.innerHTML === "*") {
				calculation = calculation.slice(0,-1);
				calculation += "*";
				display.innerHTML = calculation;
				return;
			}
		}

		if(answerDisplayed) {
			if(element.innerHTML === "0" || element.innerHTML === "1" || element.innerHTML === "2" || element.innerHTML === "3" || 
				element.innerHTML === "4" || element.innerHTML === "5" || element.innerHTML === "6" || element.innerHTML === "7" || 
				element.innerHTML === "8" || element.innerHTML === "9" || element.innerHTML === ".") {
			calculation = element.innerHTML;
			display.innerHTML = calculation;
			answerDisplayed = false;
			return;
			}
		}

		answerDisplayed = false;

		// what happens when user presses AC button
		if(element.innerHTML === "AC") {
			calculation = "";
			display.innerHTML = "0";
			return;
		}

		// what happens when user presses equals button
		if(element.innerHTML === "=") {
			calculation = eval(calculation)
			display.innerHTML = calculation;
			calculation = calculation.toString();
			answerDisplayed = true;
			return;
		}

		calculation += element.innerHTML;
		display.innerHTML = calculation;
	});
});