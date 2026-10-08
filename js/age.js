const birthDateInput = document.querySelector("#birthDate");

const calculateAgeBtn = document.querySelector("#calculateAgeBtn");

const clearAgeBtn = document.querySelector("#clearAgeBtn");

const ageResult = document.querySelector("#ageResult");

const ageValue = document.querySelector("#ageValue");

const ageDetails = document.querySelector("#ageDetails");

const birthdayResult = document.querySelector("#birthdayResult");

const birthdayDate = document.querySelector("#birthdayDate");

const birthdayDays = document.querySelector("#birthdayDays");

const birthDayValue = document.querySelector("#birthDayValue");

function isLeapYear(year) {

    return (
        year % 4 === 0 &&
        (year % 100 !== 0 || year % 400 === 0)
    );
}

function
getBirthdayForYear(birthDate, year) {

    const month = birthDate.getMonth();
    const day = birthDate.getDate();

    // February 29 birthday

    if (
        month === 1 &&
        day === 29 &&
        !isLeapYear(year)
    ) {

        return new Date(year, 1, 28);
    }

    return new Date(year, month, day);
}

calculateAgeBtn.addEventListener("click", function() {

    // Get the date entered by the user

    const birthDate = new Date(birthDateInput.value);

    const today = new Date();

    // Check if no date was entered

    if (!birthDateInput.value) {

        ageValue.textContent = "--";

        ageDetails.textContent = "Please enter your date of birth.";

        ageResult.classList.add("show");

        return;
    }

    // Check if the birth date is in the future

    if (birthDate > today) {

        ageValue.textContent = "--";

        ageDetails.textContent = "Date of birth cannot be in the future.";

        ageResult.classList.add("show");

        return;

    }

     // Calculate day of birth

    const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const dayOfBirth = dayNames[birthDate.getDay()];

    birthDayValue.textContent = dayOfBirth;

    birthdayResult.classList.add("show");

    // Calculate years

    let years = today.getFullYear() - birthDate.getFullYear();

    const birthdayThisYear = getBirthdayForYear(birthDate,today.getFullYear);

    // Calculate months

    let months = today.getMonth() - birthDate.getMonth();

    // Calculate days

    let days = today.getDate() - birthDate.getDate();

    // Adjust days

    if (days < 0) {

        months--;

        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    // Adjust months

    if (months < 0) {

        years--;

        months += 12;
    }

    // Display result

    ageValue.textContent = years;

    ageDetails.textContent =
    `${months} Months • ${days} Days`;
    ageResult.classList.add("show");

    if (
        today.getTime() === birthdayThisYear.getTime()
    ) {

        birthdayDate.textContent = "Today!";

        birthdayDays.textContent = "🎉";

        birthdayResult.querySelector(".birthday-label")
               .textContent = "Happy Birthday!";

        birthdayResult.classList.add("show");

    } else { 

    // Calculate next birthday

    const currentYear = today.getFullYear();

    let nextBirthday = 
        getBirthdayForYear(
            birthDate,
            currentYear
        );

    // If birthday has already happened this year,
    // use next year.
    
    if (nextBirthday < today) {

        nextBirthday = 
            getBirthdayForYear(
                birthDate,
                currentYear + 1
            );
    }

    // Format birthday date

    const dateOptions = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const formattedBirthday = 

    nextBirthday.toLocaleDateString(
        "en-US",
        dateOptions
    );

    birthdayDate.textContent = formattedBirthday;

    // Calculate remaining days

    const difference = nextBirthday - today;

    const daysRemaining = Math.ceil(difference / (1000 * 60 * 60 * 24));

    // Display remaining days 

    birthdayDays.textContent = daysRemaining;

   

    birthdayResult.classList.add("show");

   }

});

clearAgeBtn.addEventListener("click", function() {

    birthDateInput.value = "";

    ageValue.textContent = "--";

    ageDetails.textContent = "Enter your date of birth";

    birthdayDate.textContent = "--";

    birthdayDays.textContent = "--";

    birthdayResult.querySelector(".birthday-label")
           .textContent = "days remaining";

    birthDayValue.textContent = "--";

    ageResult.classList.remove("show");

    birthdayResult.classList.remove("show");

    birthdayResult.classList.remove("show");

});