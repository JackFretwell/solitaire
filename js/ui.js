export default function createCardElement(card) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    if(card.orientation == "face-up") {
        cardDiv.classList.add("face-up", card.suit);
        cardDiv.textContent = `${card.rank}${getSuitSymbol(card.suit)}`;
    } else {
        cardDiv.classList.add("face-down");
    }

    return cardDiv;
}

function getSuitSymbol(suit) {
    switch(suit) {
        case "hearts": return "♥";
        case "diamonds": return "♦";
        case "clubs": return "♣";
        case "spades": return "♠";
    }
}