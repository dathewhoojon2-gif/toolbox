const monthlyEmiInput = document.querySelector("#monthlyEmi");
const interestRateInput = document.querySelector("#interestRate");
const loanTenureInput = document.querySelector("#loanTenure");

const calculateLoanBtn = document.querySelector("#calculateLoanBtn");
const clearLoanBtn = document.querySelector("#clearLoanBtn");

const loanResult = document.querySelector("#loanResult");

const loanAmountValue = document.querySelector("#loanAmountValue");
const recommendedLoan = document.querySelector("#recommendedLoan");
const recommendedLoanValue = document.querySelector("#recommendedLoanValue");

const recommendedLoanDetails = document.querySelector("#recommendedLoanDetails");
const loanDetails = document.querySelector("#loanDetails");

const loanEmiValue = document.querySelector("#loanEmiValue");
const loanInterestValue = document.querySelector("#loanInterestValue");
const loanTotalPaymentValue =
    document.querySelector("#loanTotalPaymentValue");


// Indian Rupee Formatting

function formatIndianRupees(amount) {

    return new Intl.NumberFormat("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);

}


// Calculate Maximum Loan

calculateLoanBtn.addEventListener("click", function () {

    const monthlyEmi = Number(monthlyEmiInput.value);
    const annualInterestRate = Number(interestRateInput.value);
    const loanTenureYears = Number(loanTenureInput.value);


    // Check for empty fields

    if (
        monthlyEmiInput.value === "" ||
        interestRateInput.value === "" ||
        loanTenureInput.value === ""
    ) {

        loanAmountValue.textContent = "⚠️";

        loanDetails.textContent =
            "Please enter all loan details.";

        loanResult.classList.add("show");

        loanSummary.classList.remove("show");

        return;
    }

    // Check for valid numbers

    if (
        !Number.isFinite(monthlyEmi) ||
        !Number.isFinite(annualInterestRate) ||
        !Number.isFinite(loanTenureYears)
    ) {

        loanAmountValue.textContent = "⚠️";


        loanDetails.textContent =
            "Please enter valid numbers.";

        loanResult.classList.add("show");

        loanSummary.classList.remove("show");

        return;
    }

    // Check for positive values

    if (
        monthlyEmi <= 0 ||
        annualInterestRate < 0 ||
        loanTenureYears <= 0
    ) {

        loanAmountValue.textContent = "⚠️";


        loanDetails.textContent =
            "Please enter valid positive values.";

        loanResult.classList.add("show");

        loanSummary.classList.remove("show");

        return;
    }


    // Convert annual values to monthly

    const monthlyInterestRate =
        annualInterestRate / 12 / 100;

    const numberOfPayments =
        loanTenureYears * 12;


    let maximumLoanAmount;


    // If interest rate is 0%

    if (monthlyInterestRate === 0) {

        maximumLoanAmount =
            monthlyEmi * numberOfPayments;

    }


    // Normal loan calculation

    else {

        maximumLoanAmount =
            monthlyEmi *
            (
                1 -
                Math.pow(
                    1 + monthlyInterestRate,
                    -numberOfPayments
                )
            ) /
            monthlyInterestRate;

    }


    // Total repayment

    const totalPayment =
        monthlyEmi * numberOfPayments;

    // Recommended loan amount
   // Uses 80% of the maximum affordable amount

    const recommendedLoanAmount = maximumLoanAmount * 0.80;


    // Total interest

    const totalInterest =
        totalPayment - maximumLoanAmount;


    // Display results

    loanAmountValue.textContent =
        `₹${formatIndianRupees(maximumLoanAmount)}`;

    recommendedLoanValue.textContent = `₹${formatIndianRupees(recommendedLoanAmount)}`;

    recommendedLoanDetails.textContent = `About 80% of your maximum affordable loan`;

    recommendedLoan.classList.add("show");


    loanDetails.textContent =
        `Based on ₹${formatIndianRupees(monthlyEmi)} monthly EMI for ${loanTenureYears} years`;


    loanEmiValue.textContent =
        `₹${formatIndianRupees(monthlyEmi)}`;


    loanInterestValue.textContent =
        `₹${formatIndianRupees(totalInterest)}`;


    loanTotalPaymentValue.textContent =
        `₹${formatIndianRupees(totalPayment)}`;


    loanResult.classList.add("show");

});


// Clear Button

clearLoanBtn.addEventListener("click", function () {

    monthlyEmiInput.value = "";
    interestRateInput.value = "";
    loanTenureInput.value = "";

    loanAmountValue.textContent = "₹--";

    loanDetails.textContent =
        "Enter your details and calculate";

    loanEmiValue.textContent = "₹--";

    loanInterestValue.textContent = "₹--";

    loanTotalPaymentValue.textContent = "₹--";

    loanResult.classList.remove("show");

    recommendedLoanValue.textContent = "₹--";

    recommendedLoanDetails.textContent = "A safer amount based on your maximum affordability";

    recommendedLoan.classList.remove("show");

});