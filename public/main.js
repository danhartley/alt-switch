import { fetchInatData } from './inat/inat.js';
import { createDeck } from './card/card.js';
import { store } from './store/store.js';
import { getEOLSpeciesData, fetchLiveDataFromEOL } from './eol/eol.js';
import { getWiki } from './wikipedia/wikipedia.js';
import { tejoSpeciesAll } from './api/eol-tejo.js';

const deck = createDeck();
const dispatchToStore = (data, type) => { store.dispatch({type: type, data: data });};
const render = () => {
    const promises = store.getState();
    promises.forEach(element => {
        element.then(card => {
            deck.add(card);            
        }); 
    });    
};

const renderWiki = () => {
    const wikiText = document.getElementById('wiki');
        wikiText.innerHTML = '';
        let state = store.getState();
        let species = state[state.length - 1].card.name;
        let wiki = getWiki(species)            
        .then(json => {
            json.forEach(data => {
                wikiText.innerHTML += `<li>${data}</li>`;  
            });                
        });
};

// store.subscribe(render);
store.subscribe(renderWiki);
//dispatchToStore(fetchInatData(), 'Inat');
//dispatchToStore(fetchLiveDataFromEOL(getEOLSpeciesData()), 'EOL');

tejoSpeciesAll.forEach(
    species => { return deck.add(species); }
);

$(function() {
    $('#next').asEventStream('click')
    .map(function(event) {        
        deck.next();
    })
    .onValue(function(element) { console.log(element) });
});