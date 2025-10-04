export default class Pile {
    constructor(type) {
        this.type = type;
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

    removeCard() {
        return this.cards.pop();
    }

    topCard() {
        return this.cards[this.cards.length - 1];
    }
}