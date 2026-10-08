const originalValueInput = document.querySelector("#originalValue");

const newValueInput = document.querySelector("#newValue");

const calculateChangeBtn = document.querySelector("#calculateChangeBtn");

const clearChangeBtn = document.querySelector("#clearChangeBtn");

const changeResult = document.querySelector("#changeResult");

const changeResultValue = document.querySelector("#changeResultValue");

const changeResultDetails = document.querySelector("#changeResultDetails");

// Calculate percentage change

calculateChangeBtn.addEventListener("click", function() {

    const originalValue = Number(originalValueInput.value);

    const newValue = Number(newValueInput.value);

    // Empty input validation

    if (
        originalValueInput.value === "" || 
        newValueInput.value === ""
    ) {

        changeResultValue.textContent = "⚠️";

        changeResultDetails.textContent = "Please enter both values.";

        changeResult.classList.add("show");

        return;

    }

    // Invalid number validation

    if (
        !Number.isFinite(originalValue) ||
        !Number.isFinite(newValue)
    ) {

        changeResultValue.textContent = "⚠️";

        changeResultDetails.textContent = "Please enter valid numbers.";

        changeResult.classList.add("show");

        return;

    }

    // Original value cannot be zero

    if (originalValue === 0) {

        changeResultValue.textContent = "⚠️";

        changeResultDetails.textContent = "The original value cannot be zero.";

        changeResult.classList.add("show");

        return;
        
    }

    // Calculate percentage change

    const percentageChange = ((newValue - originalValue) / Math.abs(originalValue)) * 100;

    const roundedChange = percentageChange.toFixed(2);

    // Determine increase or decrease 

    if (percentageChange > 0) {

        changeResultValue.textContent = `${roundedChange}%`;

        changeResultDetails.textContent = `Increase from ${originalValue} to ${newValue}`;

    } else if (percentageChange < 0) {

        changeResultValue.textContent = `${Math.abs(percentageChange).toFixed(2)}%`;

        changeResultDetails.textContent = `Decrease from ${originalValue} to ${newValue}`;

    } else {

        changeResultValue.textContent = "0%";

        changeResultDetails.textContent = "There is no percentage change.";

    }

    changeResult.classList.add("show");

});

// Clear

clearChangeBtn.addEventListener("click", function() {

    originalValueInput.value = "";

    newValueInput.value = "";

    changeResultValue.textContent = "--";

    changeResultDetails.textContent = "Enter values and calculate";

    changeResult.classList.remove("show");

});