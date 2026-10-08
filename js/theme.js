const themeToggle = document.querySelector("#themeToggle");


// Load saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";

}


// Toggle theme

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    const isDark =
        document.body.classList.contains("dark-mode");


    if (isDark) {

        localStorage.setItem("theme", "dark");

        themeToggle.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "light");

        themeToggle.textContent = "🌙";

    }

});