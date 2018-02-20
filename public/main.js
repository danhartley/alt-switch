import { fetchInatData } from './inat/inat.js';
import { createDeck } from './card/card.js';
import { store } from './store/store.js';
import { getEOLSpeciesData, fetchLiveDataFromEOL } from './eol/eol.js';
import { wikiListener } from './wikipedia/wikipedia.js';
import { tejoSpeciesAll } from './api/eol-tejo.js';
import { utils } from './utils/utils.js';

const deck = createDeck();
const dispatchToStore = (data, type) => { store.dispatch({type: type, data: data });};
const render = () => {
    const promises = store.getState();
    let count = 0;
    promises.forEach(element => {
        element.then(card => {
            deck.add(card);
        });         
    });    
};

// store.subscribe(render);
store.subscribe(wikiListener);
//dispatchToStore(fetchInatData(), 'Inat');
// dispatchToStore(fetchLiveDataFromEOL(getEOLSpeciesData()), 'EOL');

// const randomSpecies = utils.shuffleArray(tejoSpeciesAll.filter(species => species.id === 578523 || species.id === 1247200 || species.id === 586697));
const randomSpecies = utils.shuffleArray(tejoSpeciesAll);
randomSpecies.forEach(species => deck.add(species));

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