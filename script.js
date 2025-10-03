import Game from './js/game.js';

const game = new Game();
game.start();
const deck = game.deckBuilder();
const shuffledDeck = game.shuffleDeck(deck);
console.log(shuffledDeck);