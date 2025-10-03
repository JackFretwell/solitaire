export default class Game {
    start() {
        console.log("Game started");
        let shuffledDeck = shuffleDeck(deckBuilder());
    }

    function deckBuilder() {
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const values = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

        let deck = new Array();

        for(let i = 0; i < suits.length; i++) {
            for(let j = 0; j < values.length; j++) {
                let card = new Card(suits[i], values[j]);
                deck.push(card);
            }

        return deck;
        }
    }

    function shuffleDeck(deck) {

        for(let i = 0; i < 1000; i++) {
            let positionOne = Math.floor((Math.random() * deck.length));
            let positionTwo = Math.floor((Math.random() * deck.length));
            let temp = deck[positionOne];

            deck[positionOne] = deck[positionTwo];
            deck[positionTwo] = temp;

        }
    }