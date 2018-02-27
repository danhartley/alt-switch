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

const imageGrid = document.getElementById('imageGrid');
const nameGrid = document.getElementById('nameGrid');
const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
const next = document.getElementById('next');

dispatchToStore({
    total: 0,
    correct: 0,
    answer: '',
    question: ''
}, 'SCORE');

const renderScore = () => {
    const total = document.getElementById('total');
    const correct = document.getElementById('correct');
    const message = document.getElementById('message');
    const score = store.getState().score;
    if(score.success) message.innerHTML = `${score.answer} is the correct answer! Well done.`;
    else if(score.total > 0) message.innerHTML = `${score.answer} is the wrong answer! Oh dear. The correct answer is ${score.question}`;
    total.innerHTML = score.total;
    correct.innerHTML = score.correct;
};

store.subscribe(renderScore);

const scoreHandler = (event) => {
    let item = items[store.getState().index];
    const score = store.getState().score;
    score.total += 1;
    score.answer = event.target.childNodes[0].data;
    if(score.answer === item.name) {
        score.correct += 1;  
        score.success = true;
    } else {
        score.question = item.name;
        score.success = false;
    }
    dispatchToStore(score, 'SCORE');
    window.setTimeout(()=>{
        next.dispatchEvent(event);
    },1000);
};

if(nameGrid) {
    nameGrid.addEventListener('click', scoreHandler);
}

const renderNext = () => {
    let item = nextItem(items, store.getState().index);
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
};

store.subscribe(renderNext);

const nextHandler = () => {
   let index = store.getState().index;
   index = index === undefined ? -1 : index; 
   dispatchToStore(++index, 'INDEX');   
}

if(next) {
    next.addEventListener('click', nextHandler);
}

next.dispatchEvent(event);