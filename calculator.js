let display = document.getElementById('display');
let calculation = "";

document.querySelectorAll('.button').forEach(function(element) {
	element.addEventListener('click', function() {

		if(element.innerHTML === "=") {
			let answer = eval(calculation);
			display.innerHTML = answer;
			return;
		}

		calculation += element.innerHTML;
		display.innerHTML = calculation;
	});
});