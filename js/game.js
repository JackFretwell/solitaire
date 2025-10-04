import Card from './card.js';
import Pile from './pile.js';

export default class Game {
    start() {
        console.log("Game started");
    }

    deckBuilder() {
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const values = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

        const deck = [];

        for(let i = 0; i < suits.length; i++) {
            for(let j = 0; j < values.length; j++) {
                let card = new Card(suits[i], values[j]);
                deck.push(card);
            }
        }

        return deck;
    }

    shuffleDeck(deck) {
        for(let i = 0; i < 1000; i++) {
            let positionOne = Math.floor((Math.random() * deck.length));
            let positionTwo = Math.floor((Math.random() * deck.length));
            let temp = deck[positionOne];

            deck[positionOne] = deck[positionTwo];
            deck[positionTwo] = temp;
        }

        return deck;
    }

    createPiles() {
        const tableauPiles = [];
        const foundationPiles = [];
        const stockPile = [];
        const wastePile = [];

        for(let i = 0; i < 7; i++) {
            let tableau = new Pile("tableau");
            tableauPiles.push(tableau);
        }

        
        for(let i = 0; i < 4; i++) {
            let foundation = new Pile("foundations");
            foundationPiles.push(foundation);
        }

        let stock = new Pile("stock");
        stockPile.push(stock);

        let waste = new Pile("waste");
        wastePile.push(waste);

        return {
            tableau: tableauPiles,
            foundations: foundationPiles,
            stock: stockPile,
            waste: wastePile
        };
    }
}