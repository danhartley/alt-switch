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

let display = document.getElementById('name');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let total = document.getElementById('total');
let correct = document.getElementById('correct');
let event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
let next = document.getElementById('next');
let message = document.getElementById('message');
let btns = document.getElementById('btns');

dispatchToStore({
    total: 0,
    correct: 0
}, 'SCORE');

const btnsHandler = (event)=>{
    const score = store.getState().score;
    score.total += 1;
    const answer = event.target.innerHTML;
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

if(btns) {
    btns.addEventListener('click', btnsHandler);
}

let item = null;

export const randomItemSelector = (array, randomNumber) => {
    return Math.floor(randomNumber * array.length);
};

const nextHandler = () => {
   item = getNext(items, store, store.getState().index);
   const binomial = item.name;
   const randomImages = shuffleArray(item.images);
   img1.src = randomImages[0];
   img2.src = randomImages[1];
   img3.src = randomImages[2];
   img4.src = randomImages[3];
   const three = R.take(3, utils.shuffleArray(items)).map(item => item.name);
   const options = utils.shuffleArray([...three, binomial]);
   btn1.innerHTML = options[0];
   btn2.innerHTML = options[1];
   btn3.innerHTML = options[2];
   btn4.innerHTML = options[3];
}

if(next) {
    next.addEventListener('click', nextHandler);
}
