const vehicleType =
    document.querySelector("#vehicleType");

const vehiclePrice =
    document.querySelector("#vehiclePrice");

const downPayment =
    document.querySelector("#downPayment");

const vehicleInterest =
    document.querySelector("#vehicleInterest");

const vehicleTenure =
    document.querySelector("#vehicleTenure");

const calculateBtn =
    document.querySelector("#calculateVehicleLoanBtn");

const clearBtn =
    document.querySelector("#clearVehicleLoanBtn");

const vehicleEmiValue =
    document.querySelector("#vehicleEmiValue");

const vehicleEmiDetails =
    document.querySelector("#vehicleEmiDetails");

const vehiclePriceValue =
    document.querySelector("#vehiclePriceValue");

const downPaymentValue =
    document.querySelector("#downPaymentValue");

const vehicleLoanAmountValue =
    document.querySelector("#vehicleLoanAmountValue");

const vehicleInterestValue =
    document.querySelector("#vehicleInterestValue");

const vehicleTotalPaymentValue =
    document.querySelector("#vehicleTotalPaymentValue");

const downPaymentPercentage =
    document.querySelector("#downPaymentPercentage");

const vehicleRepaymentSection =
    document.querySelector("#vehicleRepaymentSection");

const vehicleRepaymentTableBody =
    document.querySelector("#vehicleRepaymentTableBody");

const vehicleShowMoreBtn =
    document.querySelector("#vehicleShowMoreBtn");

const vehicleLoanSummary =
    document.querySelector("#vehicleLoanSummary");

const downPaymentInfo =
    document.querySelector("#downPaymentInfo");

const vehicleLoanResult = 
    document.querySelector("#vehicleLoanResult");


/* ========================================
   INDIAN NUMBER FORMAT
======================================== */

function formatIndianRupees(amount) {

    return new Intl.NumberFormat("en-IN", {
        maximumFractionDigits: 0
    }).format(amount);

}



/* ========================================
   CALCULATE LOAN
======================================== */

calculateBtn.addEventListener("click", function () {

    const price =
        Number(vehiclePrice.value);

    const down =
        Number(downPayment.value);

    const annualRate =
        Number(vehicleInterest.value);

    const years =
        Number(vehicleTenure.value);


    /* Validation */

     if (
        vehiclePrice.value === "" ||
        downPayment.value === "" ||
        vehicleInterest.value === "" ||
        vehicleTenure.value === ""
    ) {

        vehicleEmiValue.textContent = "⚠️";

        vehicleEmiDetails.textContent =
            "Please fill in all fields.";

        vehiclePriceValue.classList.add("show");

        vehicleLoanSummary.classList.remove("show");

        vehicleLoanResult.classList.add("show");

        return;
    }

    if (
        price <= 0 ||
        down < 0 ||
        annualRate < 0 ||
        years <= 0
    ) {

        vehicleEmiValue.textContent = "⚠️";

        vehicleEmiDetails.textContent =
           "Please enter valid values.";

        vehiclePriceValue.classList.add("show");

        vehicleLoanSummary.classList.remove("show");

        vehicleLoanResult.classList.add("show");

        return;
    }


    if (down >= price) {

        vehicleEmiValue.textContent = "⚠️";

        vehicleEmiDetails.textContent =
           "Down payment must be less than the vehicle price.";

        vehiclePriceValue.classList.add("show");

        vehicleLoanSummary.classList.remove("show");

        vehicleLoanResult.classList.add("show");

        return;
    }


    /* Loan amount */

    const loanAmount =
        price - down;


    /* Monthly interest */

    const monthlyRate =
        annualRate / 12 / 100;


    /* Number of payments */

    const numberOfPayments =
        years * 12;


    /* EMI */

    let emi;


    if (monthlyRate === 0) {

        emi =
            loanAmount / numberOfPayments;

    } else {

        emi =
            loanAmount *
            monthlyRate *
            Math.pow(
                1 + monthlyRate,
                numberOfPayments
            ) /
            (
                Math.pow(
                    1 + monthlyRate,
                    numberOfPayments
                ) - 1
            );

    }


    const totalPayment =
        emi * numberOfPayments;


    const totalInterest =
        totalPayment - loanAmount;


    /* Down payment percentage */

    const downPercentage =
        (down / price) * 100;



    /* ========================================
       DISPLAY RESULTS
    ======================================== */

    vehicleEmiValue.textContent =
        `₹${formatIndianRupees(emi)}`;


    vehicleEmiDetails.textContent =
        `${vehicleType.value === "car" ? "Car" : "Bike"} loan EMI for ${years} year(s)`;


    vehiclePriceValue.textContent =
        `₹${formatIndianRupees(price)}`;


    downPaymentValue.textContent =
        `₹${formatIndianRupees(down)}`;


    vehicleLoanAmountValue.textContent =
        `₹${formatIndianRupees(loanAmount)}`;


    vehicleInterestValue.textContent =
        `₹${formatIndianRupees(totalInterest)}`;



    vehicleTotalPaymentValue.textContent =
        `₹${formatIndianRupees(totalPayment)}`;

    
    vehicleLoanSummary.classList.add("show");

    
    downPaymentInfo.classList.add("show");


    downPaymentPercentage.textContent =
        `${downPercentage.toFixed(1)}%`;


    vehicleRepaymentSection.classList.add("show");

    vehicleLoanResult.classList.add("show");


    createRepaymentSchedule(
        loanAmount,
        emi,
        monthlyRate,
        numberOfPayments
    );

});



/* ========================================
   REPAYMENT SCHEDULE
======================================== */

function createRepaymentSchedule(
    loanAmount,
    emi,
    monthlyRate,
    numberOfPayments
) {

    vehicleRepaymentTableBody.innerHTML = "";


    vehicleShowMoreBtn.classList.remove("active");

    vehicleShowMoreBtn.textContent =
        "Show More";


    vehicleShowMoreBtn.style.display =
        numberOfPayments > 6
            ? "block"
            : "none";


    let balance = loanAmount;


    for (
        let month = 1;
        month <= numberOfPayments;
        month++
    ) {

        const interest =
            balance * monthlyRate;


        let principal =
            emi - interest;


        if (month === numberOfPayments) {

            principal = balance;

        }


        balance -= principal;


        if (balance < 0) {

            balance = 0;

        }


        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>${month}</td>

            <td>
                ₹${formatIndianRupees(emi)}
            </td>

            <td>
                ₹${formatIndianRupees(principal)}
            </td>

            <td>
                ₹${formatIndianRupees(interest)}
            </td>

            <td>
                ₹${formatIndianRupees(balance)}
            </td>

        `;


        if (month > 6) {

            row.classList.add(
                "hidden-repayment-row"
            );

        }


        vehicleRepaymentTableBody.appendChild(row);

    }

}



/* ========================================
   SHOW MORE / SHOW LESS
======================================== */

vehicleShowMoreBtn.addEventListener(
    "click",
    function () {

        const rows =
            vehicleRepaymentTableBody
                .querySelectorAll("tr");


        const isExpanded =
            vehicleShowMoreBtn
                .classList
                .contains("active");


        rows.forEach(function (row, index) {

            if (index >= 6) {

                row.classList.toggle(
                    "hidden-repayment-row",
                    isExpanded
                );

            }

        });


        vehicleShowMoreBtn
            .classList
            .toggle("active");


        vehicleShowMoreBtn.textContent =
            isExpanded
                ? "Show More"
                : "Show Less";

    }
);



/* ========================================
   CLEAR
======================================== */

clearBtn.addEventListener(
    "click",
    function () {

        vehiclePrice.value = "";

        downPayment.value = "";

        vehicleInterest.value = "";

        vehicleTenure.value = "";


        vehicleType.value = "car";


        vehicleEmiValue.textContent =
            "₹--";


        vehicleEmiDetails.textContent =
            "Enter your vehicle loan details";


        vehiclePriceValue.textContent =
            "₹--";


        downPaymentValue.textContent =
            "₹--";


        vehicleLoanAmountValue.textContent =
            "₹--";


        vehicleInterestValue.textContent =
            "₹--";


        vehicleTotalPaymentValue.textContent =
            "₹--";


        downPaymentPercentage.textContent =
            "--%";


        vehicleRepaymentSection
            .classList
            .remove("show");


        vehicleRepaymentTableBody.innerHTML =
            "";


        vehicleShowMoreBtn.style.display =
            "none";


        vehicleShowMoreBtn
            .classList
            .remove("active");


        vehicleShowMoreBtn.textContent =
            "Show More";

        vehicleLoanSummary.classList.remove("show");

        vehicleLoanResult.classList.remove("show");

    }
);