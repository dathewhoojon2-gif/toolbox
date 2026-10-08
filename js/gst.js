const amountInput = document.querySelector("#amount");

const gstRateInput = document.querySelector("#gstRate");

const calculateGstBtn = document.querySelector("#calculateGstBtn");

const clearGstBtn = document.querySelector("#clearGstBtn");

const gstResult = document.querySelector("#gstResult");

const gstAmount = document.querySelector("#gstAmount");

const gstDetails = document.querySelector("#gstDetails");

calculateGstBtn.addEventListener("click", function() {

    const amount = Number(amountInput.value);

    const gstRate = Number(gstRateInput.value);

    // Check if amount is empty
    if (amountInput.value === "") {

        gstAmount.textContent = "⚠️";

        gstDetails.textContent = "Please enter an amount.";

        gstResult.classList.add("show");

        return;
    }

    // Check if amount is valid
    if (!Number.isFinite(amount) || amount < 0) {

        gstAmount.textContent = "⚠️";

        gstDetails.textContent = "Please enter a valid amount.";

        gstResult.classList.add("show");

        return;
    }

    // Calculate GST
    const gst = (amount * gstRate) / 100;

    const total = amount + gst;

    // Display result
    gstAmount.textContent = `₹${gst.toFixed(2)}`;

    gstDetails.textContent = `GST: ${gstRate}% | Total: ₹${total.toFixed(2)}`;

    gstResult.classList.add("show");

});

clearGstBtn.addEventListener("click", function() {

    amountInput.value = "";

    gstRateInput.value = "18";

    gstAmount.textContent = "₹--";

    gstDetails.textContent = "Enter an amount and calculate";

    gstResult.classList.remove("show");

});