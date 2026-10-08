const lengthValue =
    document.querySelector("#lengthValue");

const fromLengthUnit =
    document.querySelector("#fromLengthUnit");

const toLengthUnit =
    document.querySelector("#toLengthUnit");

const convertBtn =
    document.querySelector("#convertLengthBtn");

const clearBtn =
    document.querySelector("#clearLengthBtn");

const lengthResultValue =
    document.querySelector("#lengthResultValue");

const lengthResultDetails =
    document.querySelector("#lengthResultDetails");

const lengthResult =
    document.querySelector("#lengthResult");


/* -----------------------------------
   LENGTH UNITS

   Values represent meters.
----------------------------------- */

const lengthUnits = {

    meter: 1,

    kilometer: 1000,

    centimeter: 0.01,

    millimeter: 0.001,

    mile: 1609.344,

    yard: 0.9144,

    foot: 0.3048,

    inch: 0.0254,

    nauticalMile: 1852

};


/* -----------------------------------
   FORMAT NUMBER
----------------------------------- */

function formatNumber(number) {

    return new Intl.NumberFormat("en-IN", {
        maximumFractionDigits: 6
    }).format(number);

}


/* -----------------------------------
   CONVERT
----------------------------------- */

convertBtn.addEventListener("click", function () {

    const value =
        Number(lengthValue.value);


    /* Validation */

    if (lengthValue.value === "") {

       lengthResultValue.textContent = "⚠️";

       lengthResultDetails.textContent = ("Please enter a length value.");

       lengthResult.classList.add("show");

        return;
    }


    if (value < 0) {

       lengthResultValue.textContent = "⚠️";

       lengthResultDetails.textContent = ("Please enter a valid positive value.");

       lengthResult.classList.add("show");

        return;

    }


    /* Get conversion factors */

    const fromFactor =
        lengthUnits[fromLengthUnit.value];

    const toFactor =
        lengthUnits[toLengthUnit.value];


    /* Convert to meters first */

    const meters =
        value * fromFactor;


    /* Convert meters to target unit */

    const result =
        meters / toFactor;


    /* Display result */

    lengthResultValue.textContent =
        formatNumber(result);


    /* Get unit names */

    const fromText =
        fromLengthUnit
            .options[
                fromLengthUnit.selectedIndex
            ].text;

    const toText =
        toLengthUnit
            .options[
                toLengthUnit.selectedIndex
            ].text;


    lengthResultDetails.textContent =
        `${formatNumber(value)} ${fromText} = ${formatNumber(result)} ${toText}`;

    lengthResult.classList.add("show");

});


/* -----------------------------------
   CLEAR
----------------------------------- */

clearBtn.addEventListener("click", function () {

    lengthValue.value = "";

    fromLengthUnit.value =
        "meter";

    toLengthUnit.value =
        "foot";

    lengthResultValue.textContent =
        "--";

    lengthResultDetails.textContent =
        "Enter a length value to convert";

    lengthResult.classList.remove("show");

});