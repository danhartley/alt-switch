import { fetchLiveDataFromInat } from './inat/inat.js';
import { createDeck } from './card/card.js';
import { store } from './store/store-repo.js';
import { getEOLSpeciesData, fetchLiveDataFromEOL } from './eol/eol.js';
import { wikiListener } from './wikipedia/wikipedia.js';
import { tejoSpecies } from './api/eol-tejo.js';
import { utils } from './utils/utils.js';
import { inatSpecies } from './api/inat-lisbon-setubal.js';
import { gbifListener } from './gbif/gbif.js';
import { tejo } from './api/eol-dan-vale-do-tejo.js';
import { portugueseTrees } from './api/eol-dan-portuguese-trees.js'; 
import { trees } from './api/eol-trees.js';
import { winterFlowers } from './api/eol-winter-flowers.js';
import { commonHerbs } from './api/eol-common-herbs.js';
import { lamiaceae } from './api/eol-lamiaceae.js';

let deck;

const dispatchToStore = (data, type) => { store.dispatch({type: type, data: data });};
const render = () => {  
    const promises = store.getState().items;
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

const eolLive = () => dispatchToStore(fetchLiveDataFromEOL(getEOLSpeciesData(tejo)), 'LOAD_EOL_DATA');
const eolLive2 = () => dispatchToStore(fetchLiveDataFromEOL(getEOLSpeciesData(portugueseTrees)), 'LOAD_EOL_DATA');
const eolLive3 = () => dispatchToStore(fetchLiveDataFromEOL(getEOLSpeciesData(winterFlowers)), 'LOAD_EOL_DATA');
const eolLive4 = () => dispatchToStore(fetchLiveDataFromEOL(getEOLSpeciesData(commonHerbs)), 'LOAD_EOL_DATA');
const eolLive5 = () => dispatchToStore(fetchLiveDataFromEOL(getEOLSpeciesData(lamiaceae)), 'LOAD_EOL_DATA');

const eolLocal = () => utils.shuffleArray(tejoSpecies);
const eolLocal2 = () => utils.shuffleArray(trees);
const inatLive = () => dispatchToStore(fetchLiveDataFromInat(), 'LOAD_INAT_DATA');
const inatLocal = () => utils.shuffleArray(inatSpecies).forEach(species => deck.add(species));
    
const config = [
    { enabled: true, live: true, subscribe: [ [render], [wikiListener], [gbifListener] ], call: eolLive5, collection: { name: 'Lamiaceae: Mint and Basil Family', link: 'http://eol.org/collections/139275'}, api: 'http://eol.org/api/collections/1.0/139275.json?page=1&per_page=50&filter=&sort_by=recently_added&sort_field=&cache_ttl=&language=en' },
    { enabled: false, live: true, subscribe: [ [render], [wikiListener], [gbifListener] ], call: eolLive4, collection: { name: '12 Common Herbs', link: 'http://eol.org/collections/139051'}, api: 'http://eol.org/api/collections/1.0/139051.json?page=1&per_page=50&filter=&sort_by=recently_added&sort_field=&cache_ttl=&language=en' },
    { enabled: false, live: true, subscribe: [ [render], [wikiListener], [gbifListener] ], call: eolLive3, collection: { name: 'Common Portuguese Flowers Winter', link: 'http://eol.org/collections/134395'}, api: 'http://eol.org/api/collections/1.0/134395.json?page=1&per_page=50&filter=&sort_by=recently_added&sort_field=&cache_ttl=&language=en' },
    { enabled: false, live: true, subscribe: [ [render], [wikiListener], [gbifListener] ], call: eolLocal2, collection: { name: 'Common Portuguese Trees', link: 'http://eol.org/collections/124189'}, api: 'http://eol.org/api/collections/1.0/124189.json?page=1&per_page=100&filter=&sort_by=recently_added&sort_field=&cache_ttl=&language=en' },
    { enabled: false, live: true, subscribe: [ [render], [wikiListener], [gbifListener] ], call: eolLive2, collection: { name: 'Common Portuguese Trees', link: 'http://eol.org/collections/124189'}, api: 'http://eol.org/api/collections/1.0/124189.json?page=1&per_page=100&filter=&sort_by=recently_added&sort_field=&cache_ttl=&language=en' },
    { enabled: false, live: false, subscribe: [ [wikiListener], [gbifListener] ], call: eolLocal, collection: { name: 'Flora Lisboa e Vale do Tejo', link: 'http://eol.org/collections/124189'} },
    { enabled: false, live: true, subscribe: [ [render], [wikiListener], [gbifListener] ], call: eolLive, collection: { name: 'Flora Lisboa e Vale do Tejo', link: 'http://eol.org/collections/124189'}, api: 'http://eol.org/api/collections/1.0/130560.json?page=1&per_page=50&filter=&sort_by=recently_added&sort_field=&cache_ttl=&language=en' },
    { enabled: false, live: true, subscribe: [ [render], [wikiListener], [gbifListener] ], call: inatLive, collection: { name: 'Lisbon and Setúbal', link: 'https://www.inaturalist.org/lists/921392-Lisbon-and-Set-bal'} },
    { enabled: false, live: false, subscribe: [ [wikiListener], [gbifListener] ], call: inatLocal, collection: { name: 'Lisbon and Setúbal', link: 'https://www.inaturalist.org/lists/921392-Lisbon-and-Set-bal'} }
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

document.getElementById('control-panel').addEventListener('click', (event) => { 
    let button = event.target;
    let pause = document.getElementById('pause');
    let resume = document.getElementById('resume');

    if(button.id === 'start') {
        button.disabled = true;
        pause.disabled = false;
    }
    if(button.id === 'pause') {
        pause.disabled = true;
        resume.disabled = false;
    }
    if(button.id === 'resume') {
        pause.disabled = false;
        resume.disabled = true;
    }
});