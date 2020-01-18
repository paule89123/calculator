let display = document.getElementById('display');
let calculation = "";
let answerDisplayed = false;

document.querySelectorAll('.button').forEach(function(element) {
	element.addEventListener('click', function() {

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

		if(element.innerHTML === "AC") {
			calculation = "";
			display.innerHTML = "0";
			return;
		}

		if(element.innerHTML === "=") {
			let answer = eval(calculation);
			display.innerHTML = answer;
			answerDisplayed = true;
			return;
		}

		calculation += element.innerHTML;
		display.innerHTML = calculation;
	});
});