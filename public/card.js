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

const renderImage = (label, url) => {
    const imgElem = document.getElementById(label);
    imgElem.src = url;
};

const imageRotator = images => ({
    iterator : null,
    nextImage : null,
    renderNext : true,
    interval : null,
    change() {
        this.iterator = images[Symbol.iterator]();
        this.nextImage = this.iterator.next();
        this.renderNext = true;
        this.interval = setInterval(() => {
            if(!this.nextImage.done && this.renderNext) {
                renderImage('image', this.nextImage.value);
                this.nextImage = this.iterator.next();
            }
        }, 1000);
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
            imageInterval = imageRotator(card.value.images).change();
            renderLabel('name', card.value.name);
            renderNames('vernacularName', card.value.names);
        },
        add: function add(card) {
            cards.push(card)
        }
    }
};

// const renderImages = card => {

//     let iterator = card.images[Symbol.iterator]();
//     let nextImage = iterator.next();
//     let renderNext = true;

//     const imageRotation = function(interval) {        
//         return function (c) {
//             const timer = setTimeout(() => {
//                 if(!c.done && renderNext){
//                     renderImage('image', c.value);
//                     imageRotation(2500)(iterator.next());
//                 }
//             }, interval); 
//             return timer;
//     }};

//     imageRotation(0)(nextImage);

//     const stopRotation = () => renderNext = false;
// };

// iterator = iterator || cards[Symbol.iterator]();
// if(card && card.done) {
//     iterator = cards[Symbol.iterator]();                
// }        
// card = iterator.next();
// render(card.value); 

// function* cardFlipper() {
//   let nextIndex = 0;
//   while(nextIndex < cards.length) {
//     yield cards[nextIndex++];
//   }
// };

// function* idMaker() {
//     var index = 0;
//     while(true)
//       yield index++;
//   }
  
//   var gen = idMaker();
