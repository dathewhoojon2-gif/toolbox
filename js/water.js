const weightInput =
    document.querySelector("#waterWeight");

const activityInput =
    document.querySelector("#activityLevel");

const calculateBtn =
    document.querySelector("#calculateWaterBtn");

const clearBtn =
    document.querySelector("#clearWaterBtn");

const waterAmount =
    document.querySelector("#waterAmount");

const waterGlasses =
    document.querySelector("#waterGlasses");

const waterDetails =
    document.querySelector("#waterDetails");


calculateBtn.addEventListener("click", function() {

    const weight =
        Number(weightInput.value);

    const activity =
        activityInput.value;


    // Validation

    if (!weight || weight <= 0) {

        waterAmount.textContent = " --";

        waterDetails.textContent =
            "Please enter a valid weight.";

        return;

    }


    // Basic calculation
    // 35 ml of water per kg of body weight

    let waterML =
        weight * 35;


    // Activity adjustment

    if (activity === "moderate") {

        waterML += 350;

    }

    else if (activity === "high") {

        waterML += 700;

    }


    const waterLitres =
    waterML / 1000;
    
    // Calculate approximate glasses
    // 1 glass = 250 mL
     
    const glasses =
    Math.ceil(waterML / 250);
    
    waterAmount.textContent =
    `${waterLitres.toFixed(1)} L`;
    
    waterGlasses.textContent =
    ` ${glasses} glasses`;

    waterDetails.textContent =
        `Approximately ${Math.round(waterML)} ml of water per day.`;
});

clearBtn.addEventListener("click", function() {

    weightInput.value = "";

    activityInput.value = "low";

    waterAmount.textContent = " --";
    
    waterGlasses.textContent =
       "-- glasses";

    waterDetails.textContent =
        "Enter your weight and calculate";

});