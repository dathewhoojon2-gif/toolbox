const loanAmountInput = document.querySelector("#loanAmount");
const interestRateInput = document.querySelector("#interestRate");
const loanTenureInput = document.querySelector("#loanTenure");

const calculateEmiBtn = document.querySelector("#calculateEmiBtn");
const clearEmiBtn = document.querySelector("#clearEmiBtn");

const emiResult = document.querySelector("#emiResult");
const emiValue = document.querySelector("#emiValue");
const emiDetails = document.querySelector("#emiDetails");

const emiSummary = document.querySelector("#emiSummary");
const principalValue = document.querySelector("#principalValue");
const interestValue = document.querySelector("#interestValue");
const totalPaymentValue = document.querySelector("#totalPaymentValue");

const repaymentSection = document.querySelector("#repaymentSection");

const repaymentTableBody = document.querySelector("#repaymentTableBody");

const showMoreBtn = document.querySelector("#showMoreBtn");

function formatIndianRupees(amount) {
    return new
    Intl.NumberFormat("en-In", {
        mininmumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}


calculateEmiBtn.addEventListener("click", function () {

    const loanAmount = Number(loanAmountInput.value);
    const annualInterestRate = Number(interestRateInput.value);
    const loanTenureYears = Number(loanTenureInput.value);


    // Check for empty fields

    if (
        loanAmountInput.value === "" ||
        interestRateInput.value === "" ||
        loanTenureInput.value === ""
    ) {

        emiValue.textContent = "⚠️";

        emiDetails.textContent =
            "Please enter all loan details.";

        emiResult.classList.add("show");

        emiSummary.classList.remove("show");

        return;
    }


    // Check for valid numbers

    if (
        !Number.isFinite(loanAmount) ||
        !Number.isFinite(annualInterestRate) ||
        !Number.isFinite(loanTenureYears)
    ) {

        emiValue.textContent = "⚠️";

        emiDetails.textContent =
            "Please enter valid numbers.";

        emiResult.classList.add("show");

        emiSummary.classList.remove("show");

        return;
    }


    // Check for positive values

    if (
        loanAmount <= 0 ||
        annualInterestRate < 0 ||
        loanTenureYears <= 0
    ) {

        emiValue.textContent = "⚠️";

        emiDetails.textContent =
            "Please enter valid positive values.";

        emiResult.classList.add("show");

        emiSummary.classList.remove("show");

        return;
    }


    // Convert annual interest rate to monthly rate

    const monthlyInterestRate =
        annualInterestRate / 12 / 100;


    // Convert years to months

    const numberOfPayments =
        loanTenureYears * 12;


    let emi;


    // If interest rate is 0%

    if (monthlyInterestRate === 0) {

        emi = loanAmount / numberOfPayments;

    } else {

        emi =
            loanAmount *
            monthlyInterestRate *
            Math.pow(
                1 + monthlyInterestRate,
                numberOfPayments
            ) /
            (
                Math.pow(
                    1 + monthlyInterestRate,
                    numberOfPayments
                ) - 1
            );

    }


    // Calculate totals

    const totalPayment =
        emi * numberOfPayments;

    const totalInterest =
        totalPayment - loanAmount;



// Clear old repayment schedule

repaymentTableBody.innerHTML = "";

showMoreBtn.classList.remove("active");
showMoreBtn.textContent = "Show More";

if (numberOfPayments > 6) {
    showMoreBtn.style.display = "block";
} else {
    showMoreBtn.style.display = "none";
}


// Generate repayment schedule

let remainingBalance = loanAmount;

for (let month = 1; month <= numberOfPayments; month++) {

    const interestForMonth =
        remainingBalance * monthlyInterestRate;

    let principalForMonth =
        emi - interestForMonth;


    // Prevent tiny rounding issues on final payment

    if (month === numberOfPayments) {

        principalForMonth =
            remainingBalance;
    }


    remainingBalance -= principalForMonth;


    if (remainingBalance < 0) {
        remainingBalance = 0;
    }


    const row =
        document.createElement("tr");


    row.innerHTML = `
        <td>${month}</td>

        <td>₹${formatIndianRupees(emi)}</td>

        <td>₹${formatIndianRupees(principalForMonth)}</td>

        <td>₹${formatIndianRupees(interestForMonth)}</td>

        <td>₹${formatIndianRupees(remainingBalance)}</td>
    `;

    // Hide rows after the first 6

    if (month > 6) {
        
        row.classList.add("hidden-repayment-row");

    }


    repaymentTableBody.appendChild(row);
}

// Reset Show More button

showMoreBtn.textContent = "Show More";

showMoreBtn.classList.remove("active");

// Only show the button if there are more than 6 months

if (numberOfPayments > 6) {

    showMoreBtn.style.display = "block";

} else {

    showMoreBtn.style.display = "none";
}

    // Display EMI

    emiValue.textContent =
        `₹${formatIndianRupees(emi)}`;

    emiDetails.textContent =
        `${loanTenureYears} years at ${annualInterestRate}% annual interest`;


    // Display summary

    principalValue.textContent =
        `₹${formatIndianRupees(loanAmount)}`;

    interestValue.textContent =
        `₹${formatIndianRupees(totalInterest)}`;

    totalPaymentValue.textContent =
        `₹${formatIndianRupees(totalPayment)}`;


   emiResult.classList.add("show");
emiSummary.classList.add("show");
repaymentSection.classList.add("show");
});


clearEmiBtn.addEventListener("click", function () {

    loanAmountInput.value = "";
    interestRateInput.value = "";
    loanTenureInput.value = "";

    emiValue.textContent = "₹--";

    emiDetails.textContent =
        "Enter your loan details and calculate";

    principalValue.textContent = "₹--";
    interestValue.textContent = "₹--";
    totalPaymentValue.textContent = "₹--";

    emiResult.classList.remove("show");
    emiSummary.classList.remove("show");

    repaymentTableBody.innerHTML = "";

    showMoreBtn.textContent = "Show Less";

    showMoreBtn.classList.add("active");

    showMoreBtn.style.display = "none";

});

showMoreBtn.addEventListener("click", function () {

    const rows = repaymentTableBody.querySelectorAll("tr");

    const isExpanded = showMoreBtn.classList.contains("active");

    rows.forEach((row, index) => {

        if (index >= 6) {
            if (isExpanded) {
                row.classList.add("hidden-repayment-row");
            } else {
                row.classList.remove("hidden-repayment-row");
            }
        }

    });

    if (isExpanded) {
        showMoreBtn.textContent = "Show More";
        showMoreBtn.classList.remove("active");
    } else {
        showMoreBtn.textContent = "Show Less";
        showMoreBtn.classList.add("active");
    }

});