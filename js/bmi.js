const heightInput = document.querySelector("#height");

const weightInput = document.querySelector("#weight");

const calculateBtn = document.querySelector("#calculateBtn");

const clearBtn = document.querySelector("#clearBtn");

const result = document.querySelector("#result");

const bmiValue = document.querySelector("#bmiValue");

const bmiCategory = document.querySelector("#bmiCategory");


calculateBtn.addEventListener("click", function() {

    const height = Number(heightInput.value);

    const weight = Number(weightInput.value);

    // Check for invalid numbers 

    if (isNaN(height) || isNaN(weight)) {

        bmiCategory.textContent = "Please enter valid numbers.";

        bmiValue.textContent = "--";

        return;
    }

    // Check for zero

    if (height === 0 || weight === 0) {

        bmiCategory.textContent = "Height and weight must be greater than zero.";

        bmiValue.textContent = "--";

        return;
    }

    // Check for negative numbers

    if (height < 0 || weight < 0) {

        bmiCategory.textContent = "Height and weight cannot be negative.";

        bmiValue.textContent = "--";

        return;

    }

    // Convert height from cm to meters

    const heightInMeters = height / 100;

    // Calculate BMI

    const bmi = weight / (heightInMeters * heightInMeters);

    // Round BMI

    const roundedBMI = bmi.toFixed(1);

    // Remove previous category

    result.classList.remove(
        "underweight",
        "normal",
        "overweight",
        "obesity"
    );

    // Determine category

    let category;

    if (bmi < 18.5) {

        category = "Underweight";

        result.classList.add("underweight");

    } else if (bmi < 25) {

        category = "Normal weight";

         result.classList.add("normal");

    } else if (bmi < 30) {

        category = "Overweight";

         result.classList.add("overweight");

    } else {

        category = "Obesity";

         result.classList.add("obesity");

    }

    // Display result

    bmiValue.textContent = roundedBMI;

    bmiCategory.textContent = category;

    result.classList.add("show");

});

clearBtn.addEventListener("click", function() {

    heightInput.value = "";

    weightInput.value = "";

    bmiValue.textContent = "--";

    bmiCategory.textContent = "Enter your details";

    result.classList.remove(
        "show",
        "underweight",
        "normal",
        "overweight",
        "obesity"
    );
});