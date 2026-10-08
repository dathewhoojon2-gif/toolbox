const valueXInput = document.querySelector("#valueX");

const valueYInput = document.querySelector("#valueY");

const calculateWhatPercentageBtn = document.querySelector("#calculateWhatPercentageBtn");

const clearWhatPercentageBtn = document.querySelector("#clearWhatPercentageBtn");

const whatPercentageResult = document.querySelector("#whatPercentageResult");

const whatPercentageValue = document.querySelector("#whatPercentageValue");

const whatPercentageDetails = document.querySelector("#whatPercentageDetails");

// Calculate

calculateWhatPercentageBtn.addEventListener("click", function() {

    const x = Number(valueXInput.value);

    const y = Number(valueYInput.value);

    // Empty input validation

    if (
        valueXInput.value === "" 
        || 
        valueYInput.value === "" 
    ) {

        whatPercentageValue.textContent = "⚠️";

        whatPercentageDetails.textContent = "Please enter both values.";

        whatPercentageResult.classList.add("show");

        return;

    }

    // Invalid number validation

    if (
        !Number.isFinite(x) ||
        !Number.isFinite(y)
    ) {

        whatPercentageValue.textContent = "⚠️";

        whatPercentageDetails.textContent = "Please enter valid numbers.";

        whatPercentageResult.classList.add("show");

        return;

    }

    // Prevent division by zero

    if (y === 0) {

        whatPercentageValue.textContent = "⚠️";

        whatPercentageDetails.textContent = "The total cannot be zero.";

        whatPercentageResult.classList.add("show");

        return;

    }

    // Calculate percentage

    const result = (x / y) * 100;

    // Round to two decimal places

    const roundedResult = result.toFixed(2);

    // Display result

    whatPercentageValue.textContent = `${roundedResult}%`;

    whatPercentageDetails.textContent = `${x} is ${roundedResult}% of ${y}`;

    whatPercentageResult.classList.add("show");

});

// Clear

clearWhatPercentageBtn.addEventListener("click", function() {

    valueXInput.value = "";

    valueYInput.value = "";

    whatPercentageValue.textContent = "--";

    whatPercentageDetails.textContent = "Enter values and calculate";

    whatPercentageResult.classList.remove("show");

});