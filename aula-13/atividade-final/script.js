const cards = document.querySelectorAll(".card");

console.log(cards.length);

cards.forEach((card, index) => {
    const tituloDoCard = card.querySelector(".card-title");

    const titulo = tituloDoCard
        ? tituloDoCard.textContent
        : "(sem título)";

    console.log(`Card ${index + 1}: ${titulo}`);

    tituloDoCard
        ? (tituloDoCard.innerHTML = tituloDoCard.textContent + " ✅")
        : console.log("(sem título)");
});