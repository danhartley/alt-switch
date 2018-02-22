import { fetchLiveDataFromInat } from './inat/inat.js';
import { createDeck } from './card/card.js';
import { store } from './store/store.js';
import { getEOLSpeciesData, fetchLiveDataFromEOL } from './eol/eol.js';
import { wikiListener } from './wikipedia/wikipedia.js';
import { tejoSpecies } from './api/eol-tejo.js';
import { utils } from './utils/utils.js';
import { inatSpecies } from './api/inat-lisbon-setubal.js';

let deck;

const dispatchToStore = (data, type) => { store.dispatch({type: type, data: data });};
const render = () => {  
    const promises = store.getState();
    promises.forEach(element => {
        element.then(card => {
            deck.add(card);
        });
    });
    config
        .filter(flag => flag.enabled)
        .map(active => {
            active.subscribe[0][1]();
        });
};

const eolLive = () => dispatchToStore(fetchLiveDataFromEOL(getEOLSpeciesData()), 'EOL');
const eolLocal = () => utils.shuffleArray(tejoSpecies);
const inatLive = () => dispatchToStore(fetchLiveDataFromInat(), 'Inat');
const inatLocal = () => utils.shuffleArray(inatSpecies).forEach(species => deck.add(species));
    
const config = [
    { enabled: false, live: true, subscribe: [ [render], [wikiListener] ], call: eolLive, collection: { name: 'Flora Lisboa e Vale do Tejo', link: 'http://eol.org/collections/124189'} },
    { enabled: true,  live: false, subscribe: [ [wikiListener] ], call: eolLocal, collection: { name: 'Flora Lisboa e Vale do Tejo', link: 'http://eol.org/collections/124189'} },
    { enabled: false, live: true, subscribe: [ [render], [wikiListener] ], call: inatLive, collection: { name: 'Lisbon and Setúbal', link: 'https://www.inaturalist.org/lists/921392-Lisbon-and-Set-bal'} },
    { enabled: false, live: false, subscribe: [ [wikiListener] ], call: inatLocal, collection: { name: 'Lisbon and Setúbal', link: 'https://www.inaturalist.org/lists/921392-Lisbon-and-Set-bal'} }
];

config
    .filter(flag => flag.enabled)
    .map(active => {
        active.subscribe.map(listener => {
            listener[1] = store.subscribe(listener[0]); 
        });
        deck = createDeck(active.collection);
        active.live ? active.call() : active.call().forEach(species => deck.add(species));
    });

const pause = document.getElementById('pause');
const resume = document.getElementById('resume');

let timer = null;

let paused = false;

$(function() {    
    $('#start').asEventStream('click')
    .map(function(event) {        
        deck.next();        
    })
    .onValue(function() {});

    $('#pause').asEventStream('click')
    .map(function(event) {        
        timer = store.getState().timer;
        timer.pause();
        paused = true;
    })
    .onValue(function() {});

    $('#resume').asEventStream('click')
    .map(function(event) {        
        timer = store.getState().timer;
        timer.resume();
        paused = false;      
    })
    .onValue(function() {});

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