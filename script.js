
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

const orderPopup = document.getElementById("orderPopup");
const orderMessage = document.getElementById("orderMessage");
const closePopupBtn = document.getElementById("closePopupBtn");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".order-btn").forEach(function (button) {
    button.addEventListener("click", function () {

        const drinkName =
            this.parentElement.querySelector("h3").textContent;

        orderMessage.textContent =
            "Your " + drinkName + " has been ordered successfully!";

        orderPopup.style.display = "flex";
    });
});
closePopupBtn.addEventListener("click", function () {
    orderPopup.style.display = "none";
});

closeBtn.addEventListener("click", function () {
    orderPopup.style.display = "none";
});
