import { store } from '../store/store.js';
import { utils } from '../utils/utils.js';

const dispatchToStore = (data, type) => { store.dispatch({type: type, data: data });};

const renderBinomialName = (value) => {
    const binomial = document.getElementById('name');
    binomial.innerHTML = value;
    if(binomial.length > 40)
        binomial.style.fontSize = '1.1em';
};

const renderCommonNames = (collection) => { 
    const vernacularList = document.getElementById('vernacular');
    if(collection.length === 0) vernacularList.innerHTML = '';
    else {        
        vernacularList.innerHTML = '';
        collection.forEach(name => {
            if(name.length) {
                name.forEach(en => {
                    vernacularList.innerHTML += `<li>${en.language}: ${en.vernacularName}</li>`;    
                });
            } else {
                vernacularList.innerHTML += `<li>${name.language}: ${name.vernacularName}</li>`;
            }
        });
    }
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
                renderBinomialName(card.value.name);
                let names = [
                    R.reject(R.isEmpty, R.take(3, card.value.names.filter(x=>x.language==='en'))),
                    R.head(card.value.names.filter(x=>x.language==='fr')),
                    R.head(card.value.names.filter(x=>x.language==='es')),
                    R.head(card.value.names.filter(x=>x.language==='pt')),
                    R.head(card.value.names.filter(x=>x.language==='de')),
                    R.head(card.value.names.filter(x=>x.language==='it')),
                    R.head(card.value.names.filter(x=>x.language==='ar')),
                    R.head(card.value.names.filter(x=>x.language==='zh')),
                ];
                names = R.reject(R.isEmpty, R.reject(R.isNil, names));
                renderCommonNames(names);
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


