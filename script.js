const searchInput = document.querySelector("#searchInput");
const toolsSection = document.querySelector(".tools");
const toolCards = Array.from(document.querySelectorAll(".tool-card"));

// Remember the original order of the cards
const originalOrder = [...toolCards];

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.trim().toLowerCase();

    // If search box is empty, restore original order
    if (searchText === "") {

        originalOrder.forEach(function (card) {
            card.style.display = "block";
            toolsSection.appendChild(card);
        });

        return;
    }

    const matchingCards = [];
    const nonMatchingCards = [];

    toolCards.forEach(function (card) {

        const toolName = (card.dataset.name || "").toLowerCase();

        if (toolName.includes(searchText)) {

            let priority = 3;

            // Exact match
            if (toolName === searchText) {
                priority = 1;
            }

            // Starts with the search text
            else if (toolName.startsWith(searchText)) {
                priority = 2;
            }

            matchingCards.push({
                card: card,
                priority: priority
            });

        } else {

            nonMatchingCards.push(card);

        }
    });

    // Sort matching tools by relevance
    matchingCards.sort(function (a, b) {
        return a.priority - b.priority;
    });

    // Show matching tools first
    matchingCards.forEach(function (item) {
        item.card.style.display = "block";
        toolsSection.appendChild(item.card);
    });

    // Hide tools that don't match
    nonMatchingCards.forEach(function (card) {
        card.style.display = "none";
    });

});