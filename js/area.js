const areaValue = document.querySelector("#areaValue");
const fromUnit = document.querySelector("#fromUnit");
const toUnit = document.querySelector("#toUnit");

const convertBtn = document.querySelector("#convertAreaBtn");
const clearBtn = document.querySelector("#clearAreaBtn");

const areaResultValue = document.querySelector("#areaResultValue");
const areaResultDetails = document.querySelector("#areaResultDetails");
const areaResult = document.querySelector("#areaResult");


/* Conversion factors to square meters */

const areaUnits = {

    squareMeter: 1,

    squareKilometer: 1000000,

    squareFoot: 0.092903,

    squareYard: 0.836127,

    acre: 4046.8564224,

    hectare: 10000,

    squareMile: 2589988.110336,

    squareInch: 0.00064516

};


function formatNumber(number) {

    return new Intl.NumberFormat("en-IN", {
        maximumFractionDigits: 6
    }).format(number);

}


convertBtn.addEventListener("click", function () {

    const value = Number(areaValue.value);

    if (areaValue.value === "") {

        areaResultValue.textContent = "⚠️";

        areaResultDetails.textContent = ("Please enter an area value.");

        areaResult.classList.add("show");

        return;
    }


    if (value < 0) {

        areaResultValue.textContent = "⚠️";

        areaResultDetails.textContent = ("Please enter a valid positive value.");

        areaResult.classList.add("show");

        return;
    }


    const fromFactor = areaUnits[fromUnit.value];

    const toFactor = areaUnits[toUnit.value];


    /* Convert the value to square meters first */

    const squareMeters = value * fromFactor;


    /* Convert square meters to the target unit */

    const result = squareMeters / toFactor;


    areaResultValue.textContent = formatNumber(result);


    const fromText =
        fromUnit.options[fromUnit.selectedIndex].text;

    const toText =
        toUnit.options[toUnit.selectedIndex].text;


    areaResultDetails.textContent =
        `${formatNumber(value)} ${fromText} = ${formatNumber(result)} ${toText}`;

    areaResult.classList.add("show");

});


clearBtn.addEventListener("click", function () {

    areaValue.value = "";

    fromUnit.value = "squareMeter";

    toUnit.value = "squareFoot";

    areaResultValue.textContent = "--";

    areaResultDetails.textContent =
        "Enter an area value to convert";

    areaResult.classList.remove("show");

});