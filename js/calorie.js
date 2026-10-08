const gender = document.querySelector("#gender");
const age = document.querySelector("#age");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const activity = document.querySelector("#activity");
const goal = document.querySelector("#goal");
const dietPreference = document.querySelector("#dietPreference");

const calculateBtn =
    document.querySelector("#calculateCaloriesBtn");

const clearBtn =
    document.querySelector("#clearCaloriesBtn");

const calorieTarget =
    document.querySelector("#calorieTarget");

const calorieDetails =
    document.querySelector("#calorieDetails");

const bmrValue =
    document.querySelector("#bmrValue");

const maintenanceValue =
    document.querySelector("#maintenanceValue");

const goalValue =
    document.querySelector("#goalValue");

const calorieSummary =
    document.querySelector("#calorieSummary");

const dietPlan =
    document.querySelector("#dietPlan");

const dietPlanIntro =
    document.querySelector("#dietPlanIntro");

const breakfastMeal =
    document.querySelector("#breakfastMeal");

const breakfastNutrition =
    document.querySelector("#breakfastNutrition");

const morningSnackNutrition =
    document.querySelector("#morningSnackNutrition");

const lunchNutrition =
    document.querySelector("#lunchNutrition");

const eveningSnackNutrition =
    document.querySelector("#eveningSnackNutrition");

const dinnerNutrition =
    document.querySelector("#dinnerNutrition");

const bedSnackNutrition =
    document.querySelector("#bedSnackNutrition");

const morningSnack =
    document.querySelector("#morningSnack");

const lunchMeal =
    document.querySelector("#lunchMeal");

const eveningSnack =
    document.querySelector("#eveningSnack");

const dinnerMeal =
    document.querySelector("#dinnerMeal");

const bedSnack =
    document.querySelector("#bedSnack");

const calorieResult = 
    document.querySelector("#calorieResult");


/* -----------------------------------
   PORTION ELEMENTS
----------------------------------- */

const breakfastPortions =
    document.querySelector("#breakfastPortions");

const morningSnackPortions =
    document.querySelector("#morningSnackPortions");

const lunchPortions =
    document.querySelector("#lunchPortions");

const eveningSnackPortions =
    document.querySelector("#eveningSnackPortions");

const dinnerPortions =
    document.querySelector("#dinnerPortions");

const bedSnackPortions =
    document.querySelector("#bedSnackPortions");


/* -----------------------------------
   DIET SUMMARY
----------------------------------- */

const dietTargetCalories =
    document.querySelector("#dietTargetCalories");

const dietSuggestedCalories =
    document.querySelector("#dietSuggestedCalories");

const dietSuggestedProtein =
    document.querySelector("#dietSuggestedProtein");

const portionAdjustmentNote =
    document.querySelector("#portionAdjustmentNote");


/* -----------------------------------
   FORMAT CALORIES
----------------------------------- */

function formatCalories(value) {

    return new Intl.NumberFormat("en-IN", {
        maximumFractionDigits: 0
    }).format(value);

}


/* -----------------------------------
   DIET PLANS
----------------------------------- */

const dietPlans = {

    /* =================================
       WEIGHT GAIN
    ================================= */

    gain: {

        /* ---------- VEGETARIAN ---------- */

        vegetarian: {

            intro:
                "A higher-calorie vegetarian meal pattern with protein-rich foods.",

            breakfast: {
                meal:
                    "Oats cooked with milk, banana and peanuts.",
                calories: 550,
                protein: 20,
                portions: [
                    { food: "Oats", amount: 60, unit: "g" },
                    { food: "Milk", amount: 250, unit: "mL" },
                    { food: "Banana", amount: 1, unit: "medium" },
                    { food: "Peanuts", amount: 20, unit: "g" }
                ]
            },

            morningSnack: {
                meal:
                    "Banana with a handful of peanuts.",
                calories: 250,
                protein: 8,
                portions: [
                    { food: "Banana", amount: 1, unit: "medium" },
                    { food: "Peanuts", amount: 25, unit: "g" }
                ]
            },

            lunch: {
                meal:
                    "Rice, dal, paneer, mixed vegetables and curd.",
                calories: 700,
                protein: 30,
                portions: [
                    { food: "Cooked rice", amount: 1.5, unit: "cups" },
                    { food: "Dal", amount: 1, unit: "cup" },
                    { food: "Paneer", amount: 100, unit: "g" },
                    { food: "Vegetables", amount: 1, unit: "cup" },
                    { food: "Curd", amount: 150, unit: "g" }
                ]
            },

            eveningSnack: {
                meal:
                    "Milk with a peanut butter sandwich.",
                calories: 400,
                protein: 18,
                portions: [
                    { food: "Milk", amount: 250, unit: "mL" },
                    { food: "Bread", amount: 2, unit: "slices" },
                    { food: "Peanut butter", amount: 20, unit: "g" }
                ]
            },

            dinner: {
                meal:
                    "Rice with paneer or soy chunks, dal and vegetables.",
                calories: 650,
                protein: 30,
                portions: [
                    { food: "Cooked rice", amount: 1.25, unit: "cups" },
                    { food: "Paneer/soy chunks", amount: 100, unit: "g" },
                    { food: "Dal", amount: 1, unit: "cup" },
                    { food: "Vegetables", amount: 1, unit: "cup" }
                ]
            },

            bedSnack: {
                meal:
                    "A glass of milk.",
                calories: 150,
                protein: 8,
                portions: [
                    { food: "Milk", amount: 250, unit: "mL" }
                ]
            }

        },


        /* ---------- NON-VEGETARIAN ---------- */

        nonVegetarian: {

            intro:
                "A higher-calorie meal pattern including protein-rich eggs, chicken or fish.",

            breakfast: {
                meal:
                    "Oats with milk and banana, plus 2 eggs.",
                calories: 550,
                protein: 27,
                portions: [
                    { food: "Oats", amount: 60, unit: "g" },
                    { food: "Milk", amount: 250, unit: "mL" },
                    { food: "Banana", amount: 1, unit: "medium" },
                    { food: "Eggs", amount: 2, unit: "eggs" }
                ]
            },

            morningSnack: {
                meal:
                    "Banana with peanuts.",
                calories: 250,
                protein: 8,
                portions: [
                    { food: "Banana", amount: 1, unit: "medium" },
                    { food: "Peanuts", amount: 25, unit: "g" }
                ]
            },

            lunch: {
                meal:
                    "Rice, chicken or fish, dal, vegetables and curd.",
                calories: 700,
                protein: 40,
                portions: [
                    { food: "Cooked rice", amount: 1.5, unit: "cups" },
                    { food: "Chicken/fish", amount: 150, unit: "g" },
                    { food: "Dal", amount: 1, unit: "cup" },
                    { food: "Vegetables", amount: 1, unit: "cup" },
                    { food: "Curd", amount: 150, unit: "g" }
                ]
            },

            eveningSnack: {
                meal:
                    "Milk with a peanut butter sandwich or 2 boiled eggs.",
                calories: 400,
                protein: 22,
                portions: [
                    { food: "Milk", amount: 250, unit: "mL" },
                    { food: "Bread", amount: 2, unit: "slices" },
                    { food: "Peanut butter", amount: 20, unit: "g" }
                ]
            },

            dinner: {
                meal:
                    "Rice with chicken or fish, dal and vegetables.",
                calories: 650,
                protein: 40,
                portions: [
                    { food: "Cooked rice", amount: 1.25, unit: "cups" },
                    { food: "Chicken/fish", amount: 150, unit: "g" },
                    { food: "Dal", amount: 1, unit: "cup" },
                    { food: "Vegetables", amount: 1, unit: "cup" }
                ]
            },

            bedSnack: {
                meal:
                    "A glass of milk.",
                calories: 150,
                protein: 8,
                portions: [
                    { food: "Milk", amount: 250, unit: "mL" }
                ]
            }

        }

    },


    /* =================================
       MAINTAIN WEIGHT
    ================================= */

    maintain: {

        /* ---------- VEGETARIAN ---------- */

        vegetarian: {

            intro:
                "A balanced vegetarian meal pattern aimed at maintaining your current weight.",

            breakfast: {
                meal:
                    "Vegetable poha with curd and a piece of fruit.",
                calories: 400,
                protein: 14,
                portions: [
                    { food: "Poha", amount: 1.5, unit: "cups" },
                    { food: "Curd", amount: 100, unit: "g" },
                    { food: "Fruit", amount: 1, unit: "piece" }
                ]
            },

            morningSnack: {
                meal:
                    "One fruit with a small handful of nuts.",
                calories: 200,
                protein: 5,
                portions: [
                    { food: "Fruit", amount: 1, unit: "medium" },
                    { food: "Nuts", amount: 20, unit: "g" }
                ]
            },

            lunch: {
                meal:
                    "Rice with dal, vegetables, paneer and curd.",
                calories: 600,
                protein: 25,
                portions: [
                    { food: "Cooked rice", amount: 1, unit: "cup" },
                    { food: "Dal", amount: 1, unit: "cup" },
                    { food: "Paneer", amount: 75, unit: "g" },
                    { food: "Vegetables", amount: 1, unit: "cup" },
                    { food: "Curd", amount: 100, unit: "g" }
                ]
            },

            eveningSnack: {
                meal:
                    "Curd with fruit or roasted chana.",
                calories: 200,
                protein: 8,
                portions: [
                    { food: "Curd", amount: 150, unit: "g" },
                    { food: "Fruit", amount: 1, unit: "medium" }
                ]
            },

            dinner: {
                meal:
                    "Roti with dal, paneer or soy and vegetables.",
                calories: 550,
                protein: 25,
                portions: [
                    { food: "Roti", amount: 2, unit: "pieces" },
                    { food: "Dal", amount: 1, unit: "cup" },
                    { food: "Paneer/soy", amount: 75, unit: "g" },
                    { food: "Vegetables", amount: 1, unit: "cup" }
                ]
            },

            bedSnack: {
                meal:
                    "A glass of milk if desired.",
                calories: 150,
                protein: 8,
                portions: [
                    { food: "Milk", amount: 250, unit: "mL" }
                ]
            }

        },


        /* ---------- NON-VEGETARIAN ---------- */

        nonVegetarian: {

            intro:
                "A balanced meal pattern including protein-rich animal foods.",

            breakfast: {
                meal:
                    "2 eggs with roti or toast and a piece of fruit.",
                calories: 400,
                protein: 20,
                portions: [
                    { food: "Eggs", amount: 2, unit: "eggs" },
                    { food: "Roti/toast", amount: 2, unit: "pieces" },
                    { food: "Fruit", amount: 1, unit: "medium" }
                ]
            },

            morningSnack: {
                meal:
                    "Fruit with a small handful of nuts.",
                calories: 200,
                protein: 5,
                portions: [
                    { food: "Fruit", amount: 1, unit: "medium" },
                    { food: "Nuts", amount: 20, unit: "g" }
                ]
            },

            lunch: {
                meal:
                    "Rice with chicken or fish, dal, vegetables and curd.",
                calories: 600,
                protein: 35,
                portions: [
                    { food: "Cooked rice", amount: 1, unit: "cup" },
                    { food: "Chicken/fish", amount: 120, unit: "g" },
                    { food: "Dal", amount: 1, unit: "cup" },
                    { food: "Vegetables", amount: 1, unit: "cup" },
                    { food: "Curd", amount: 100, unit: "g" }
                ]
            },

            eveningSnack: {
                meal:
                    "Curd with fruit or 1–2 boiled eggs.",
                calories: 200,
                protein: 12,
                portions: [
                    { food: "Curd", amount: 150, unit: "g" },
                    { food: "Eggs", amount: 1, unit: "egg" }
                ]
            },

            dinner: {
                meal:
                    "Roti or rice with chicken or fish, dal and vegetables.",
                calories: 550,
                protein: 35,
                portions: [
                    { food: "Roti", amount: 2, unit: "pieces" },
                    { food: "Chicken/fish", amount: 120, unit: "g" },
                    { food: "Dal", amount: 1, unit: "cup" },
                    { food: "Vegetables", amount: 1, unit: "cup" }
                ]
            },

            bedSnack: {
                meal:
                    "A glass of milk if desired.",
                calories: 150,
                protein: 8,
                portions: [
                    { food: "Milk", amount: 250, unit: "mL" }
                ]
            }

        }

    },


    /* =================================
       WEIGHT LOSS
    ================================= */

    lose: {

        /* ---------- VEGETARIAN ---------- */

        vegetarian: {

            intro:
                "A balanced vegetarian meal pattern emphasizing vegetables, protein and filling foods.",

            breakfast: {
                meal:
                    "Vegetable oats with curd and one fruit.",
                calories: 350,
                protein: 13,
                portions: [
                    { food: "Vegetable oats", amount: 1, unit: "cup" },
                    { food: "Curd", amount: 100, unit: "g" },
                    { food: "Fruit", amount: 1, unit: "medium" }
                ]
            },

            morningSnack: {
                meal:
                    "One fruit such as apple, orange or guava.",
                calories: 100,
                protein: 2,
                portions: [
                    { food: "Fruit", amount: 1, unit: "medium" }
                ]
            },

            lunch: {
                meal:
                    "Moderate rice with dal, paneer or tofu and plenty of vegetables.",
                calories: 500,
                protein: 25,
                portions: [
                    { food: "Cooked rice", amount: 0.75, unit: "cup" },
                    { food: "Dal", amount: 1, unit: "cup" },
                    { food: "Paneer/tofu", amount: 75, unit: "g" },
                    { food: "Vegetables", amount: 1.5, unit: "cups" }
                ]
            },

            eveningSnack: {
                meal:
                    "Roasted chana or unsweetened curd.",
                calories: 150,
                protein: 8,
                portions: [
                    { food: "Roasted chana", amount: 30, unit: "g" }
                ]
            },

            dinner: {
                meal:
                    "Roti with dal, paneer or tofu and plenty of vegetables.",
                calories: 450,
                protein: 25,
                portions: [
                    { food: "Roti", amount: 2, unit: "pieces" },
                    { food: "Dal", amount: 0.75, unit: "cup" },
                    { food: "Paneer/tofu", amount: 75, unit: "g" },
                    { food: "Vegetables", amount: 1.5, unit: "cups" }
                ]
            },

            bedSnack: {
                meal:
                    "Optional unsweetened milk.",
                calories: 100,
                protein: 7,
                portions: [
                    { food: "Milk", amount: 200, unit: "mL" }
                ]
            }

        },


        /* ---------- NON-VEGETARIAN ---------- */

        nonVegetarian: {

            intro:
                "A balanced meal pattern emphasizing vegetables and lean protein sources.",

            breakfast: {
                meal:
                    "2 eggs with vegetable poha or a small serving of oats.",
                calories: 350,
                protein: 20,
                portions: [
                    { food: "Eggs", amount: 2, unit: "eggs" },
                    { food: "Vegetable poha", amount: 1, unit: "cup" }
                ]
            },

            morningSnack: {
                meal:
                    "One fruit such as apple, orange or guava.",
                calories: 100,
                protein: 2,
                portions: [
                    { food: "Fruit", amount: 1, unit: "medium" }
                ]
            },

            lunch: {
                meal:
                    "Moderate rice with chicken or fish, dal and plenty of vegetables.",
                calories: 500,
                protein: 35,
                portions: [
                    { food: "Cooked rice", amount: 0.75, unit: "cup" },
                    { food: "Chicken/fish", amount: 120, unit: "g" },
                    { food: "Dal", amount: 0.75, unit: "cup" },
                    { food: "Vegetables", amount: 1.5, unit: "cups" }
                ]
            },

            eveningSnack: {
                meal:
                    "Unsweetened curd or roasted chana.",
                calories: 150,
                protein: 8,
                portions: [
                    { food: "Curd", amount: 150, unit: "g" }
                ]
            },

            dinner: {
                meal:
                    "Roti with chicken or fish and plenty of vegetables.",
                calories: 450,
                protein: 35,
                portions: [
                    { food: "Roti", amount: 2, unit: "pieces" },
                    { food: "Chicken/fish", amount: 120, unit: "g" },
                    { food: "Vegetables", amount: 1.5, unit: "cups" }
                ]
            },

            bedSnack: {
                meal:
                    "Optional unsweetened milk.",
                calories: 100,
                protein: 7,
                portions: [
                    { food: "Milk", amount: 200, unit: "mL" }
                ]
            }

        }

    }

};


/* -----------------------------------
   ADJUST DIET PLAN
----------------------------------- */

function adjustDietPlan(plan, targetCalories) {

    const meals = [
        plan.breakfast,
        plan.morningSnack,
        plan.lunch,
        plan.eveningSnack,
        plan.dinner,
        plan.bedSnack
    ];

    const originalCalories = meals.reduce(
        (total, meal) => total + meal.calories,
        0
    );

    const originalProtein = meals.reduce(
        (total, meal) => total + meal.protein,
        0
    );

    if (originalCalories === 0) {

        return {
            calories: 0,
            protein: 0,
            scale: 1
        };

    }

    /*
       Keep portion adjustments within a reasonable range.
       This prevents extremely small or extremely large portions.
    */

    const scale = Math.min(
        1.35,
        Math.max(
            0.65,
            targetCalories / originalCalories
        )
    );

    return {

        calories:
            Math.round(originalCalories * scale),

        protein:
            Math.round(originalProtein * scale),

        scale:
            scale

    };

}


/* -----------------------------------
   FORMAT PORTION
----------------------------------- */

function formatPortion(amount, unit) {

    let roundedAmount;

    /*
       Eggs and pieces are better shown in
       half-unit increments.
    */

    if (
        unit === "eggs" ||
        unit === "egg" ||
        unit === "pieces"
    ) {

        roundedAmount =
            Math.round(amount * 2) / 2;

    }

    /*
       Cups are shown to one decimal place.
    */

    else if (
        unit === "cup" ||
        unit === "cups"
    ) {

        roundedAmount =
            Math.round(amount * 10) / 10;

    }

    /*
       Grams are rounded to the nearest 5 g.
    */

    else if (unit === "g") {

        roundedAmount =
            Math.round(amount / 5) * 5;

    }

    /*
       mL is rounded to the nearest 10 mL.
    */

    else if (unit === "mL") {

        roundedAmount =
            Math.round(amount / 10) * 10;

    }

    else {

        roundedAmount =
            Math.round(amount * 10) / 10;

    }


    /*
       Remove unnecessary .0
    */

    if (Number.isInteger(roundedAmount)) {

        return roundedAmount.toString();

    }

    return roundedAmount.toFixed(1);

}


/* -----------------------------------
   CREATE PORTION ADJUSTMENT
----------------------------------- */

function createPortionAdjustment(meal, scale) {

    if (
        !meal.portions ||
        meal.portions.length === 0
    ) {

        return "--";

    }


    return meal.portions.map(function (portion) {

        const adjustedAmount =
            portion.amount * scale;

        return `
            <div class="portion-item">

                <span>
                    🍽️ ${portion.food}
                </span>

                <strong>
                    ${formatPortion(
                        portion.amount,
                        portion.unit
                    )}
                    ${portion.unit}

                    →

                    ${formatPortion(
                        adjustedAmount,
                        portion.unit
                    )}
                    ${portion.unit}
                </strong>

            </div>
        `;

    }).join("");

}


/* -----------------------------------
   ADJUSTED MEAL NUTRITION
----------------------------------- */

function adjustedMealNutrition(meal, scale) {

    const calories =
        Math.round(meal.calories * scale);

    const protein =
        Math.round(meal.protein * scale);

    return `
        ≈ ${calories} kcal · ${protein} g protein
    `;

}


/* -----------------------------------
   CALCULATE CALORIES
----------------------------------- */

calculateBtn.addEventListener("click", function () {

    const ageValue =
        Number(age.value);

    const heightValue =
        Number(height.value);

    const weightValue =
        Number(weight.value);

    const activityMultiplier =
        Number(activity.value);


    /* -----------------------------------
       VALIDATION
    ----------------------------------- */

    if (
        age.value === "" ||
        height.value === "" ||
        weight.value === ""
    ) {

        calorieTarget.textContent = "⚠️";

        calorieDetails.textContent =
            "Please fill in all your details.";

        calorieResult.classList.add("show");

        return;

    }


    if (
        ageValue < 15 ||
        ageValue > 100 ||
        heightValue < 100 ||
        heightValue > 250 ||
        weightValue < 20 ||
        weightValue > 300
    ) {

        calorieTarget.textContent = "⚠️";

        calorieDetails.textContent =
            "Please enter realistic values.";

        calorieResult.classList.add("show");

        return;

    }


    /* -----------------------------------
       BMR - MIFFLIN-ST JEOR EQUATION
    ----------------------------------- */

    let bmr;


    if (gender.value === "male") {

        bmr =
            (10 * weightValue) +
            (6.25 * heightValue) -
            (5 * ageValue) +
            5;

    }

    else {

        bmr =
            (10 * weightValue) +
            (6.25 * heightValue) -
            (5 * ageValue) -
            161;

    }


    /* -----------------------------------
       MAINTENANCE CALORIES
    ----------------------------------- */

    const maintenance =
        bmr * activityMultiplier;


    /* -----------------------------------
       GOAL CALORIES
    ----------------------------------- */

    let targetCalories;
    let goalText;


    if (goal.value === "lose") {

        targetCalories =
            maintenance - 500;

        goalText =
            "Weight Loss";

    }

    else if (goal.value === "gain") {

        targetCalories =
            maintenance + 300;

        goalText =
            "Weight Gain";

    }

    else {

        targetCalories =
            maintenance;

        goalText =
            "Maintain Weight";

    }


    /*
       Prevent extremely low target values.
    */

    targetCalories =
        Math.max(targetCalories, 1200);


    /* -----------------------------------
       DISPLAY CALORIES
    ----------------------------------- */

    calorieTarget.textContent =
        `${formatCalories(targetCalories)} kcal`;


    calorieDetails.textContent =
        `Estimated daily calories for ${goalText.toLowerCase()}.`;


    bmrValue.textContent =
        `${formatCalories(bmr)} kcal`;


    maintenanceValue.textContent =
        `${formatCalories(maintenance)} kcal`;


    goalValue.textContent =
        goalText;


    calorieSummary.classList.add("show");

    calorieResult.classList.add("show");


    /* -----------------------------------
       GENERATE DIET PLAN
    ----------------------------------- */

    const selectedGoal =
        goal.value;

    const selectedDiet =
        dietPreference.value;


    const selectedPlan =
        dietPlans[selectedGoal][selectedDiet];


    const adjustedPlan =
        adjustDietPlan(
            selectedPlan,
            targetCalories
        );


    /* -----------------------------------
       DIET SUMMARY
    ----------------------------------- */

    dietTargetCalories.textContent =
        `${formatCalories(targetCalories)} kcal`;


    dietSuggestedCalories.textContent =
        `≈ ${formatCalories(adjustedPlan.calories)} kcal`;


    dietSuggestedProtein.textContent =
        `≈ ${adjustedPlan.protein} g`;


    /* -----------------------------------
       PORTION ADJUSTMENTS
    ----------------------------------- */

    breakfastPortions.innerHTML =
        createPortionAdjustment(
            selectedPlan.breakfast,
            adjustedPlan.scale
        );


    morningSnackPortions.innerHTML =
        createPortionAdjustment(
            selectedPlan.morningSnack,
            adjustedPlan.scale
        );


    lunchPortions.innerHTML =
        createPortionAdjustment(
            selectedPlan.lunch,
            adjustedPlan.scale
        );


    eveningSnackPortions.innerHTML =
        createPortionAdjustment(
            selectedPlan.eveningSnack,
            adjustedPlan.scale
        );


    dinnerPortions.innerHTML =
        createPortionAdjustment(
            selectedPlan.dinner,
            adjustedPlan.scale
        );


    bedSnackPortions.innerHTML =
        createPortionAdjustment(
            selectedPlan.bedSnack,
            adjustedPlan.scale
        );


    /* -----------------------------------
       PORTION NOTE
    ----------------------------------- */

    const adjustmentPercent =
        Math.round(
            (adjustedPlan.scale - 1) * 100
        );


    if (adjustmentPercent > 0) {

        portionAdjustmentNote.textContent =
            `Portions have been increased by approximately ${adjustmentPercent}% to get closer to your calorie target.`;

    }

    else if (adjustmentPercent < 0) {

        portionAdjustmentNote.textContent =
            `Portions have been reduced by approximately ${Math.abs(adjustmentPercent)}% to get closer to your calorie target.`;

    }

    else {

        portionAdjustmentNote.textContent =
            "The suggested portions are already close to your calorie target.";

    }


    /* -----------------------------------
       DIET PLAN INTRO
    ----------------------------------- */

    dietPlanIntro.textContent =
        selectedPlan.intro;


    /* -----------------------------------
       BREAKFAST
    ----------------------------------- */

    breakfastMeal.textContent =
        selectedPlan.breakfast.meal;

    breakfastNutrition.textContent =
        adjustedMealNutrition(
            selectedPlan.breakfast,
            adjustedPlan.scale
        );


    /* -----------------------------------
       MORNING SNACK
    ----------------------------------- */

    morningSnack.textContent =
        selectedPlan.morningSnack.meal;

    morningSnackNutrition.textContent =
        adjustedMealNutrition(
            selectedPlan.morningSnack,
            adjustedPlan.scale
        );


    /* -----------------------------------
       LUNCH
    ----------------------------------- */

    lunchMeal.textContent =
        selectedPlan.lunch.meal;

    lunchNutrition.textContent =
        adjustedMealNutrition(
            selectedPlan.lunch,
            adjustedPlan.scale
        );


    /* -----------------------------------
       EVENING SNACK
    ----------------------------------- */

    eveningSnack.textContent =
        selectedPlan.eveningSnack.meal;

    eveningSnackNutrition.textContent =
        adjustedMealNutrition(
            selectedPlan.eveningSnack,
            adjustedPlan.scale
        );


    /* -----------------------------------
       DINNER
    ----------------------------------- */

    dinnerMeal.textContent =
        selectedPlan.dinner.meal;

    dinnerNutrition.textContent =
        adjustedMealNutrition(
            selectedPlan.dinner,
            adjustedPlan.scale
        );


    /* -----------------------------------
       BEFORE-BED SNACK
    ----------------------------------- */

    bedSnack.textContent =
        selectedPlan.bedSnack.meal;

    bedSnackNutrition.textContent =
        adjustedMealNutrition(
            selectedPlan.bedSnack,
            adjustedPlan.scale
        );


    /* -----------------------------------
       SHOW DIET PLAN
    ----------------------------------- */

    dietPlan.classList.add("show");

});


/* -----------------------------------
   CLEAR
----------------------------------- */

clearBtn.addEventListener("click", function () {

    gender.value = "male";

    age.value = "";

    height.value = "";

    weight.value = "";

    activity.value = "1.2";

    goal.value = "maintain";

    dietPreference.value = "vegetarian";


    /* -----------------------------------
       CALORIE RESULTS
    ----------------------------------- */

    calorieTarget.textContent =
        "-- kcal";


    calorieDetails.textContent =
        "Enter your details to calculate";


    bmrValue.textContent =
        "-- kcal";


    maintenanceValue.textContent =
        "-- kcal";


    goalValue.textContent =
        "--";


    calorieSummary.classList.remove("show");

    calorieResult.classList.remove("show");


    /* -----------------------------------
       HIDE DIET PLAN
    ----------------------------------- */

    dietPlan.classList.remove("show");


    /* -----------------------------------
       CLEAR MEALS
    ----------------------------------- */

    breakfastMeal.textContent =
        "--";

    morningSnack.textContent =
        "--";

    lunchMeal.textContent =
        "--";

    eveningSnack.textContent =
        "--";

    dinnerMeal.textContent =
        "--";

    bedSnack.textContent =
        "--";


    /* -----------------------------------
       CLEAR NUTRITION
    ----------------------------------- */

    breakfastNutrition.textContent =
        "--";

    morningSnackNutrition.textContent =
        "--";

    lunchNutrition.textContent =
        "--";

    eveningSnackNutrition.textContent =
        "--";

    dinnerNutrition.textContent =
        "--";

    bedSnackNutrition.textContent =
        "--";


    /* -----------------------------------
       CLEAR PORTIONS
    ----------------------------------- */

    breakfastPortions.innerHTML =
        "--";

    morningSnackPortions.innerHTML =
        "--";

    lunchPortions.innerHTML =
        "--";

    eveningSnackPortions.innerHTML =
        "--";

    dinnerPortions.innerHTML =
        "--";

    bedSnackPortions.innerHTML =
        "--";


    /* -----------------------------------
       CLEAR DIET SUMMARY
    ----------------------------------- */

    dietTargetCalories.textContent =
        "-- kcal";

    dietSuggestedCalories.textContent =
        "-- kcal";

    dietSuggestedProtein.textContent =
        "-- g";

});