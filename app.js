const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const bmiResult = document.querySelector("#result-input");
const bmiForm = document.querySelector(".bmi__form");

function checkValidity(height, weight) {
	if (isNaN(weight.value) || isNaN(height.value)) {
		const alert = document.querySelector(".alert");
		alert.textContent = "Enter a valid number";
		alert.classList.add("show");
		height.classList.add("error");
		weight.classList.add("error");

		setTimeout(() => {
			alert.classList.remove("show");
			height.classList.remove("error");
			weight.classList.remove("error");
		}, 3000);
		return false;
	}
	return true;
}

function checkValue(height, weight) {
	if (height.value === "" || weight.value === "") {
		const alert = document.querySelector(".alert");
		alert.textContent = "Please fill in all fields";
		alert.classList.add("show");
		height.classList.add("error");
		weight.classList.add("error");
		setTimeout(() => {
			alert.classList.remove("show");
			height.classList.remove("error");
			weight.classList.remove("error");
		}, 3000);
		return false;
	}
	return true;
}

bmiForm.addEventListener("submit", (e) => {
	e.preventDefault();

	// Check if the values of the inputs are not empty
	if (!checkValue(heightInput, weightInput)) {
		return;
	}

	// Check if the values of the inputs are numbers
	if (!checkValidity(heightInput, weightInput)) {
		return;
	}

	let bmi = weightInput.value / (heightInput.value / 100) ** 2;
	bmiResult.value = bmi.toFixed(2); // Round to 2 decimal places

	// Reset all input fields
	heightInput.value = "";
	weightInput.value = "";
});
