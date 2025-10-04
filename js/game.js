import Card from './card.js';
import Pile from './pile.js';

export default class Game {
    start() {
        console.log("Game started");
    }

    deckBuilder() {
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const values = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Q', 'K'];

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

    dealCards(deck) {

        const tableauPiles = [];
        const foundationPiles = [];

        for(let i = 0; i < 7; i++) {
            let tableau = new Pile("tableau");
            tableauPiles.push(tableau);

            for(let j = 0; j <= i; j++) {
                let card = deck.pop();
                tableau.addCard(card);
            }

            tableau.topCard().orientation = "face-up";
        }

        let stock = new Pile("stock");
        let deckLength = deck.length;
        
        for(let i = 0; i < deckLength; i++) {
            let card = deck.pop();
            stock.addCard(card);
        }

        for(let i = 0; i < 4; i++) {
            let foundation = new Pile("foundations");
            foundationPiles.push(foundation);
        }

        let waste = new Pile("waste");

        return {
            tableau: tableauPiles,
            foundations: foundationPiles,
            stock: stock,
            waste: waste
        };
    }
    
}