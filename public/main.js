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
            deck.flip();
        }); 
    });    
};

store.subscribe(render);

//dispatchToStore(fetchInatData(), 'Inat');
dispatchToStore(fetchLiveDataFromEOL(getEOLSpeciesData()), 'EOL');

$(function() {
    $('#next').asEventStream('click')    
    .map(function(event) {
        deck.flip();
    })
    .onValue(function(element) { console.log(element) });
});

const autoHandler = () => {
    Bacon.fromBinder(function(callback) {
        var id = setInterval(function() {
            deck.flip();
        }, 5000)
        return function() {
            clearInterval(id)
        }
    }).onValue(function(element) { console.log(element) });
}

const auto = document.getElementById('auto');
auto.addEventListener('click', autoHandler);