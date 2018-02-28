import { tejoSpecies } from '../api/eol-tejo.js';
import { utils } from '../utils/utils.js';
import { store } from '../store/store.js';

const imageGrid = document.getElementById('imageGrid');
const nameGrid = document.getElementById('nameGrid');
const nextClickEvent = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
const nextButton = document.getElementById('next');

const dispatchToStore = (data, type) => { store.dispatch({type: type, data: data });};

const items = utils.shuffleArray(tejoSpecies).map(item => {
    item.name = item.name.split(' ').slice(0,2).join(' ');
    return item;
});;

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
    const item = store.getState().item;
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
        nextButton.dispatchEvent(nextClickEvent);
    },1000);
};

if(nameGrid) {
    nameGrid.addEventListener('click', scoreHandler);
}

const renderNext = () => {
    const item = store.getState().item;
    const curr = imageGrid.childNodes.length > 0 ? imageGrid.childNodes[0].children[0].alt : '';
    if(item.name === curr) return;
    const images = R.take(4, utils.shuffleArray(item.images));
    imageGrid.innerHTML = '';
    images.forEach(image=>{
     imageGrid.innerHTML += `<div class="square"><img alt="${item.name}" src="${image}" /></div>`; 
    });
    const five = R.take(5, utils.shuffleArray(items).filter(x => x.id !== item.id));
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
   let index = store.getState().item.index + 1;
   let item = utils.nextItem(items, index);
   item.index = index++;
   dispatchToStore(item, 'ITEM');
}

if(nextButton) {
    nextButton.addEventListener('click', nextHandler);
}

nextButton.dispatchEvent(nextClickEvent);