calculator.js

let display = document.getElementById('display');
let history = document.getElementById('history');
let calculation = "";
let answerDisplayed = false;
let result;
let width = 10;
let counter = 28;

document.querySelectorAll('.button').forEach(function(element) {
	element.addEventListener('click', function() {

		// the following if statements change the behaviour of the operator keys (+, -, /, *) depending on what the "calculation" string ends with

		width = display.scrollWidth;
		scaleFontSize();

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
			counter = 28;
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
			width = display.scrollWidth;
			scaleFontSize();
			counter = 28;
			return;
		}

		calculation += element.innerHTML;
		display.innerHTML = calculation;

		
	});
});

function scaleFontSize() {

    // We only want to scale down long text, so first we reset
    // font-size to 100%, in case this function is called multiple times.
    
    // if (display.scrollWidth === display.clientWidth) {
    // 	counter = 28;
    // }

    // Now actually check if the text is wider than
    // its container, if so then reduce font-size
    if (display.scrollWidth > 400) {
    	// counter -= 0.5;
    }
    


    display.style.fontSize = counter + "px";
}


