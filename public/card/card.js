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
    return {
        next: function next() {        
            iterator = iterator || cards[Symbol.iterator]();
            let card = iterator.next();
            dispatchToStore({ card: card.value}, 'Species');
            if(card.done) {
                iterator = cards[Symbol.iterator]();
                card = iterator.next();
                iterator = null;
            }
            this.renderImages(card.value.images);        
            setTimeout(() => {
                renderLabel('name', card.value.name);
                renderNames('vernacularName', card.value.names);
            }, 1000);
        },
        add: function add(card) {
            cards.push(card)
        },
        renderImages: function (images) {
            this.imageInterval = null;
            this.imageIterator = images[Symbol.iterator]();
            this.imageIteratorDone = () => {
                clearInterval(this.imageInterval);
                this.imageInterval = null;
                this.imageIterator = null;
                this.next();                
            };            
            const iterateOverImages = iterateOverItems(this.imageIterator, this.imageIteratorDone, renderImage);
            this.imageInterval = utils.timer(iterateOverImages, 1000);
        }
    }
};


