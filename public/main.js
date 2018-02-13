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
    let species = state.card.name;
    window.setTimeout(()=>{
        getWiki(species)            
        .then(json => {
            json.forEach(data => {
                wikiText.innerHTML += `<li>${data}</li>`;  
            });                
        });
    }, 3000);
};

// store.subscribe(render);
store.subscribe(renderWiki);
//dispatchToStore(fetchInatData(), 'Inat');
//dispatchToStore(fetchLiveDataFromEOL(getEOLSpeciesData()), 'EOL');

tejoSpeciesAll.forEach(species => deck.add(species));

const pause = document.getElementById('pause');
const resume = document.getElementById('resume');

let timer = null;

let paused = false;

$(function() {    
    $('#start').asEventStream('click')
    .map(function(event) {        
        deck.next();        
    })
    .onValue(function(element) { console.log(element) });

    $('#pause').asEventStream('click')
    .map(function(event) {        
        timer = store.getState().timer;
        timer.pause();
        paused = true;
    })
    .onValue(function(element) { console.log(element) });

    $('#resume').asEventStream('click')
    .map(function(event) {        
        timer = store.getState().timer;
        timer.resume();
        paused = false;      
    })
    .onValue(function(element) { console.log(element) });

    document.addEventListener('keypress', event => {
        if(event.keyCode === 13) {
            deck.next();
        }
        if(event.keyCode === 32) {
            timer = store.getState().timer;
            if(paused) {
                timer.resume();
                paused = false;
            }
            else {
                timer.pause();
                paused = true;
            }
        }
    });
});