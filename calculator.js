calculator.js

let display = document.getElementById('display');
let history = document.getElementById('history');
let calculation = "";
let answerDisplayed = false;
let result;

document.querySelectorAll('.button-text').forEach(function(element) {
	element.addEventListener('click', function() {

		// the following if statements change the behaviour of the operator keys (+, -, /, *) depending on what the "calculation" string ends with

		if(calculation.endsWith("×  - ") || calculation.endsWith("×  + ") || calculation.endsWith("÷  - ") || calculation.endsWith("÷  + ")) {
			if(element.innerHTML === " × " || element.innerHTML === " ÷ " || element.innerHTML === " + " || element.innerHTML === " - ") {
				return;
			}
		}

		if(calculation.endsWith("+ ")) {
			if(element.innerHTML === " + ") {
				return;
			}
			if(element.innerHTML === " - ") {
				calculation = calculation.slice(0,-2);
				calculation += "- ";
				display.innerHTML = calculation;
				return;
			}
			if(element.innerHTML === " × ") {
				calculation = calculation.slice(0,-2);
				calculation += "× ";
				display.innerHTML = calculation;
				return;
			}
			if(element.innerHTML === " ÷ ") {
				calculation = calculation.slice(0,-2);
				calculation += "÷ ";
				display.innerHTML = calculation;
				return;
			}
		}

		if(calculation.endsWith("- ")) {
			if(element.innerHTML === " - ") {
				return;
			}
			if(element.innerHTML === " + ") {
				calculation = calculation.slice(0,-2);
				calculation += "+ ";
				display.innerHTML = calculation;
				return;
			}
			if(element.innerHTML === " × ") {
				calculation = calculation.slice(0,-2);
				calculation += "× ";
				display.innerHTML = calculation;
				return;
			}
			if(element.innerHTML === " ÷ ") {
				calculation = calculation.slice(0,-2);
				calculation += "÷ ";
				display.innerHTML = calculation;
				return;
			}
		}

		if(calculation.endsWith("× ")) {
			if(element.innerHTML === " × ") {
				return;
			}
			if(element.innerHTML === " ÷ ") {
				calculation = calculation.slice(0,-2);
				calculation += "÷ ";
				display.innerHTML = calculation;
				return;
			}
		}

		if(calculation.endsWith("÷ ")) {
			if(element.innerHTML === " ÷ ") {
				return;
			}
			if(element.innerHTML === " × ") {
				calculation = calculation.slice(0,-2);
				calculation += "× ";
				display.innerHTML = calculation;
				return;
			}
		}

		if(calculation.endsWith(") ")) {
			if(element.innerHTML === " ) ") {
				return;
			}
		}

		if(calculation.endsWith("( ")) {
			if(element.innerHTML === " ( ") {
				return;
			}
		}		

		if(answerDisplayed) {
			if(element.innerHTML === "0" || element.innerHTML === "1" || element.innerHTML === "2" || element.innerHTML === "3" || 
				element.innerHTML === "4" || element.innerHTML === "5" || element.innerHTML === "6" || element.innerHTML === "7" || 
				element.innerHTML === "8" || element.innerHTML === "9" || element.innerHTML === "." || element.innerHTML === " ( " ||
				element.innerHTML === " ) ") {
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
			history.innerHTML = "";
			return;
		}

		// what happens when user presses equals button
		if(element.innerHTML === "=") {

			if(answerDisplayed === "true") {
				return;
			}

			answerDisplayed = true;
			history.innerHTML = calculation;
			calculation = calculation.replace(/÷/g, "/");
			calculation = calculation.replace(/×/g, "*");
			calculation = calculation.replace(/%/g, "/100");
			result = eval(calculation);
			calculation = result.toString();
			display.innerHTML = result;
			return;
		}

		calculation += element.innerHTML;
		display.innerHTML = calculation;
	});
});

