import { fetchFromInat, fetchFromLocal } from './inat.js';
import { newDeck } from './card.js';

const live = false;
let fn = live ? fetchFromInat : fetchFromLocal;

const deck = newDeck();

$(function() {
    fn().map(card => deck.add(card));
    deck.flip();
    const twists = $('#image').asEventStream('click');
    twists
        .map(function(event) {
        deck.flip();
        })
        .onValue(function(element) { console.log(element) });
});