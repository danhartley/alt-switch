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

const iterateCollection = (items, delay, fn) => ({
    iterator : null,
    nextItem : null,
    renderNext : true,
    interval : null,
    change() {
        this.iterator = items[Symbol.iterator]();
        this.nextItem = this.iterator.next();
        this.renderNext = true;
        this.interval = setInterval(() => {
            if(!this.nextItem.done && this.renderNext) {
                fn(this.nextItem.value);
                this.nextItem = this.iterator.next();
            }
        }, delay);
        return this.interval;
    }
});

export const createDeck = () => {
    const cards = [];
    let iterator = null;
    let imageInterval = null;
    return {
        flip: function flip() {        
            iterator = iterator || cards[Symbol.iterator]();
            let card = iterator.next();
            if(imageInterval !== null) {
                clearInterval(imageInterval);
                imageInterval = null;
            }            
            if(card.done) {
                iterator = cards[Symbol.iterator]();
                card = iterator.next();
                iterator = null;
            }        
            imageInterval = iterateCollection(card.value.images, 1000, renderImage).change();
            renderLabel('name', card.value.name);
            renderNames('vernacularName', card.value.names);
        },
        add: function add(card) {
            cards.push(card)
        }
    }
};


