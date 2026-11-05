
const hotBtn = document.getElementById("hotBtn");
const coldBtn = document.getElementById("coldBtn");
const cards = document.querySelectorAll(".menu-card");
const message = document.getElementById("message");

hotBtn.addEventListener("click", function () {
    cards.forEach(function (card) {
        card.style.display =
            card.dataset.type === "hot" ? "block" : "none";
    });

    message.textContent = "Showing Hot Drinks";
});

coldBtn.addEventListener("click", function () {
    cards.forEach(function (card) {
        card.style.display =
            card.dataset.type === "cold" ? "block" : "none";
    });

    message.textContent = "Showing Cold Drinks";
});

document.querySelectorAll(".order-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        const drinkName =
            this.parentElement.querySelector("h3").textContent;

        message.textContent =
            drinkName + " selected! Thank you for your order.";
    });
});
