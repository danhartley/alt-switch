import { tejoSpecies } from '../api/eol-tejo.js';
import { utils } from '../utils/utils.js';
import { store } from '../store/store.js';

const dispatchToStore = (data, type) => { store.dispatch({type: type, data: data });};

export const nextItem = (array, index) => {    
    return array[index % array.length];
};

export const getSimpleBinomial = (name) => {
    const clean = name.split(' ');
    return `${clean[0]} ${clean[1]}`;
};

const items = utils.shuffleArray(tejoSpecies);

items.forEach(item => {
    item.name = getSimpleBinomial(item.name);
});;

const getNext = (items, store, index) => {
    index = index === undefined ? -1 : index; 
    dispatchToStore(++index, 'INDEX');
    return nextItem(items, store.getState().index);
}

let imageGrid = document.getElementById('imageGrid');
let nameGrid = document.getElementById('nameGrid');
let total = document.getElementById('total');
let correct = document.getElementById('correct');
let event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
let next = document.getElementById('next');
let message = document.getElementById('message');

dispatchToStore({
    total: 0,
    correct: 0
}, 'SCORE');

const scoreHandler = (event)=>{
    const score = store.getState().score;
    score.total += 1;
    const answer = event.target.childNodes[0].data;
    if(answer === item.name) {
        score.correct += 1;
        message.innerHTML = `${answer} is the correct answer! Well done.`;
    } else {
        message.innerHTML = `${answer} is the wrong answer! Oh dear. The correct answer is ${item.name}`;
    }
    dispatchToStore(score, 'SCORE');
    total.innerHTML = score.total;
    correct.innerHTML = score.correct;
    window.setTimeout(()=>{
        next.dispatchEvent(event);
    },1000);
};

if(nameGrid) {
    nameGrid.addEventListener('click', scoreHandler);
}

let item = null;

export const randomItemSelector = (array, randomNumber) => {
    return Math.floor(randomNumber * array.length);
};

const nextHandler = () => {
   item = getNext(items, store, store.getState().index);
   const images = R.take(4, utils.shuffleArray(item.images));
   imageGrid.innerHTML = '';
   images.forEach(image=>{
    imageGrid.innerHTML += `<div class="square"><img src="${image}" /></div>`; 
   });
   const five = R.take(5, utils.shuffleArray(items));
   const answers = utils.shuffleArray([...five, item]);
   nameGrid.innerHTML = '';
   answers.forEach(answer=>{
       const vernacularName = answer.names.filter(name=>name.language==='en').map(name => name.vernacularName)[0] || '';
       nameGrid.innerHTML +=  
        `<div class="rectangle">
            <div class="answer">
                <button class="scientificName">${answer.name}</button>
                <div class="vernacularName">${vernacularName}</div>
            </div>
        </div>`;
    });
}

if(next) {
    next.addEventListener('click', nextHandler);
}

next.dispatchEvent(event);
