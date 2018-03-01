import { tejoSpecies } from '../api/eol-tejo.js';
import { utils } from '../utils/utils.js';
import { createStore, reducer } from '../store/store.js';
import { actions } from './game-actions.js';

const DOM = {
    specimenRptr : document.getElementById('rptrSpecimen'),
    speciesRptr : document.getElementById('rptrSpecies'),
    nextClickEvnt : new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      }),
    nextBtn : document.getElementById('btnNext'),
    moreSpecimensBtn : document.getElementById('btnMoreSpecimens'),
    totalTxt : document.getElementById('txtTotal'),
    correctTxt : document.getElementById('txtCorrect'),
    messageTxt : document.getElementById('txtMessage')
};

const initialState = {
    items: utils.shuffleArray(tejoSpecies).map(item => {
        item.name = item.name.split(' ').slice(0,2).join(' ');
        return item;
    }),
    item: { index: 0 },
    score: {
        total: 0,
        correct: 0,
        answer: '',
        question: ''
    }
};

export const store = createStore(reducer, initialState);

const renderScore = () => {
    const score = store.getState().score;
    if(score.success) DOM.messageTxt.innerHTML = `${score.answer} is the correct answer! Well done.`;
    else if(score.total > 0) DOM.messageTxt.innerHTML = `${score.answer} is the wrong answer! Oh dear. The correct answer is ${score.question}`;
    DOM.totalTxt.innerHTML = score.total;
    DOM.correctTxt.innerHTML = score.correct;
};

store.subscribe(renderScore);

const nextSpecies = () => {
    const state = store.getState();
    if(state.action === 'UPDATE_SCORE') {
        window.setTimeout(()=>{
            DOM.nextBtn.dispatchEvent(DOM.nextClickEvnt);
        },1000);
    }
};

store.subscribe(nextSpecies);

const renderSpecies = () => {    
    const state = store.getState();
    if(state.action === 'NEXT_ITEM') {
        const five = R.take(5, utils.shuffleArray(state.items).filter(i => i.id !== state.item.id));
        const speciesList = utils.shuffleArray([...five, state.item]);
        DOM.speciesRptr.innerHTML = speciesList.map(species => {
            const englishName = species.names.filter(name=>name.language==='en').map(name => name.vernacularName)[0] || '';         
            return `<div class="rectangle">
                        <div class="answer">
                            <button class="scientificName">${species.name}</button>
                            <div class="vernacularName">${englishName}</div>
                        </div>
                    </div>`;
        }).join('');
    }
};

store.subscribe(renderSpecies);

const renderSpecimens = (override = false) => {
    const state = store.getState();
    const currentImages = 
        DOM.specimenRptr.childNodes.length > 0 
        ? Array.from(DOM.specimenRptr.childNodes).map(node => node.children[0].src)
        : [];
    if(state.action !== 'NEXT_ITEM' && !override) return;
    const images = R.take(4, utils.shuffleArray(R.reject(i => currentImages.includes(i), state.item.images)));
    DOM.specimenRptr.innerHTML = images.map(image => {
      return `<div class="square"><img alt="${state.item.name}" src="${image}" /></div>`; 
    }).join('');
};

store.subscribe(renderSpecimens);

if(DOM.nextBtn) {
    DOM.nextBtn.addEventListener('click', () => {
        const state = store.getState();
        actions.boundNextItem(utils.nextItem(state.items, state.item.index + 1));
    });
}

if(DOM.moreSpecimensBtn) {
    DOM.moreSpecimensBtn.addEventListener('click', () => {
        renderSpecimens(true);
    });
}

if(DOM.speciesRptr) {
    DOM.speciesRptr.addEventListener('click', (event) => actions.boundUpdateScore(event.target.childNodes[0].data)) ;
}

DOM.nextBtn.dispatchEvent(DOM.nextClickEvnt);