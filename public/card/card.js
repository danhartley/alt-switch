import { store } from '../store/store.js';
import { utils } from '../utils/utils.js';

const dispatchToStore = (data, type) => { store.dispatch({type: type, data: data });};

const renderLabel = (label, value) => {
    const labelElem = document.getElementById(label);
    labelElem.innerHTML = value;
};

const renderNames = (label, collection) => { 
    const labelElem = document.getElementById(label);
    let orderedList = `<ul>`;
    collection.forEach(name => {
        orderedList += `<li><p>${name.language}: ${name.vernacularName}`;
    });
    orderedList += `</ul>`;
    labelElem.innerHTML = orderedList;    
};

const renderImage = (url) => {
    const imgElem = document.getElementById('image');
    imgElem.src = url;
};

export const iterateOverItems = (iterator, callback, iteratorFunction) => {            
    return function() {
        let nextItem = iterator.next();
        if(nextItem.done) {
            callback();
        } else {
            iteratorFunction(nextItem.value);
        }
    }
};

export const createDeck = () => {
    const cards = [];
    let iterator = null;
    const delay = 2000;
    return {
        next: function next() {        
            iterator = iterator || cards[Symbol.iterator]();
            let card = iterator.next();
            dispatchToStore(card.value, 'Species');
            if(card.done) {
                iterator = cards[Symbol.iterator]();
                card = iterator.next();
                iterator = null;
            }                 
            setTimeout(() => {
                renderLabel('name', card.value.name);
                renderNames('vernacularName', card.value.names);
            }, delay);
            this.renderImages(card.value.images);
        },
        add: function add(card) {
            cards.push(card)
        },
        renderImages: function (images) {
            let imageInterval = null;
            let imageIterator = images[Symbol.iterator]();
            let imageIteratorDone = () => {            
                clearInterval(imageInterval.getId());
                imageInterval = null;
                imageIterator = null;
                this.next();                
            };            
            const iterateOverImages = iterateOverItems(imageIterator, imageIteratorDone, renderImage);
            imageInterval = utils.intervalTimer(iterateOverImages, delay);    
            dispatchToStore(imageInterval, 'CurrentTimer');            
        }
    }
};


