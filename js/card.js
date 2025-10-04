export default class Card {
    constructor(suit, rank, orientation = "face-down") {
        this.suit = suit;
        this.rank = rank;
        this.orientation = orientation;
    }
}