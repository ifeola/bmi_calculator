const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const bmiBtn = document.querySelector(".bmi__btn");
const bmiResult = document.querySelector("#result-input");
const bmi__form = document.querySelector(".bmi__form");

function checkValidity(heightValue, weightValue) {
	if (isNaN(weightValue) || isNaN(heightValue)) {
		const alert = document.querySelector(".alert");
		alert.textContent = "Enter a valid number";
		alert.classList.add("show");
		setTimeout(() => {
			alert.classList.remove("show");
		}, 3000);
		return;
	}
}

function checkValue(heightValue, weightValue) {
	if (heightValue == "" || weightValue == "") {
		const alert = document.querySelector(".alert");
		alert.classList.add("show");
		setTimeout(() => {
			alert.classList.remove("show");
		}, 3000);
		return;
	}
}

bmi__form.addEventListener("submit", (e) => {
	e.preventDefault();
	let weightValue = weightInput.value;
	let heightValue = heightInput.value;

	// Check if the values of the inputs are not empty
	checkValue(heightValue, weightValue);

	// Check if the values of the inputs are numbers
	checkValidity(heightValue, weightValue);

	let bmi = weightValue / (heightValue / 100) ** 2;
	bmiResult.value = bmi;
});
