const renderLabel = (obj, label) => {
    const labelElem2 = document.getElementById(label);  
    labelElem2.innerHTML = obj[label];
};

const renderImage = (obj, label) => {
    const imgElem = document.getElementById(label);
    imgElem.src = obj.url;
};


const render = card => {

    let iterator = card[Symbol.iterator]();
    let alternative = iterator.next();

    const r = function(interval) {
        return function (c) {
        setTimeout(()=>{
            if(!c.done){
                renderImage(c.value, 'image');
                renderLabel(c.value, 'name');
                renderLabel(c.value, 'common');            
                r(1000)(iterator.next());
            }
        }, interval)
    }};

    r(1)(alternative);

};

export const createDeck = () => {
    const cards = [];
    let iterator = null;
    return {
        flip: function flip() {
        iterator = iterator || cards[Symbol.iterator]();
        let card = iterator.next();
        if(card.done) {
          iterator = cards[Symbol.iterator]();
          card = iterator.next();
        }        
        render(card.value); 
      },
      add: function add(card) {cards.push(card)}
    }
};

// const deckGenerator = cards => {
//   let nextIndex = 0;
//   while(nextIndex < cards.length) {
//     yield cards[nextIndex++];
//   }
// };
