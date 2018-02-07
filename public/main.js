import { fetchInatData } from './inat.js';
import { createDeck } from './card.js';
import { createStore, reducer } from './store.js';
import { getEOLSpeciesData, fetchLiveDataFromEOL } from './eol.js';

const deck = createDeck();
const store = createStore(reducer);
const dispatchToStore = (data, type) => { store.dispatch({type: type, data: data });};
const render = () => {
    const promises = store.getState();
    promises.forEach(element => {
        element.then(card => {
            deck.add(card);
            //deck.flip();
        }); 
    });    
};

store.subscribe(render);

//dispatchToStore(fetchInatData(), 'Inat');
dispatchToStore(fetchLiveDataFromEOL(getEOLSpeciesData()), 'EOL');

$(function() {
    const twists = $('#image').asEventStream('click');
    twists
        .map(function(event) {
        deck.flip();
    })
    .onValue(function(element) { console.log(element) });
});