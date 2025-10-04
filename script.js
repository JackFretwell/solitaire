import Game from './js/game.js';

const game = new Game();
game.start();
const deck = game.deckBuilder();
//console.log(deck);
const shuffledDeck = game.shuffleDeck(deck);
//console.log(shuffledDeck);
const piles = game.dealCards(deck);
//console.log(piles.stock);
//console.log(deck);
