const percentageInput = document.querySelector("#percentage");

const numberInput = document.querySelector("#number");

const calculatePercentageBtn = document.querySelector("#calculatePercentageBtn");

const percentageResult = document.querySelector("#percentageResult");

const percentageResultValue = document.querySelector("#percentageResultValue");

const percentageResultDetails = document.querySelector("#percentageResultDetails");

const clearPercentageBtn = document.querySelector ("#clearPercentageBtn");

calculatePercentageBtn.addEventListener("click", function() {

    const percentage = Number(percentageInput.value);

    const number = Number(numberInput.value);

    // Check for empty inputs

    if (
        percentageInput.value === "" || numberInput.value === ""
    ) {
        percentageResultValue.textContent = "⚠️";

        percentageResultDetails.textContent = "Please enter both a percentage and a number.";

        percentageResult.classList.add("show");

        return;
    }

    // Check for invalid numbers

    if (
        !Number.isFinite(percentage) || !Number.isFinite(number)
    ) {
        percentageResultValue.textContent = "⚠️";

        percentageResultDetails.textContent = "Please enter valid numbers.";

        percentageResult.classList.add("show");

        return;
    }

    // Check for negative percentage

    if (percentage < 0) {

        percentageResultValue.textContent = "⚠️";

        percentageResultDetails.textContent = " Percentage cannot be negative.";

        percentageResult.classList.add("show");

        return;
    }

    // Calculate percentage

    const result = (percentage / 100) * number;

    // Display result

    percentageResultValue.textContent = result;
    
    percentageResultDetails.textContent = `${percentage}% of ${number}`;

    percentageResult.classList.add("show");

});

// Clear percentage

clearPercentageBtn.addEventListener("click", function() {
    
    percentageInput.value = "";

    numberInput.value = "";

    percentageResultValue.textContent = "--";

    percentageResultDetails.textContent = "Enter values and calculate";

    percentageResult.classList.remove("show");

});

