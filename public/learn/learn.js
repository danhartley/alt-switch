import { utils } from '../utils/utils.js';
import { store } from '../store/store-repo.js';
import { actions } from './learn-actions.js';
import { types } from './learn-types.js';
import { DOM } from './learn-dom.js';

const renderScore = () => {
    const score = store.getState().score;
    if(score.success) DOM.messageTxt.innerHTML = `${score.answer} is the correct answer! Well done.`;
    else if(score.total > 0) DOM.messageTxt.innerHTML = `${score.question} not ${score.answer} is correct.`;
    DOM.totalTxt.innerHTML = score.total;
    DOM.correctTxt.innerHTML = score.correct;
};

store.subscribe(renderScore);

const nextSpecies = () => {
    const { type, items, item } = store.getState();
    if(type === types.UPDATE_SCORE) 
        actions.boundNextItem(utils.nextItem(items, item.index + 1));
};

store.subscribe(nextSpecies);

const renderSpecies = () => {    
    const state = store.getState();
    if(state.type === types.NEXT_ITEM) {
        const alternativeAnswers = R.take(5, utils.shuffleArray(state.items).filter(i => i.id !== state.item.id));
        const speciesList = utils.shuffleArray([...alternativeAnswers, state.item]);
        const languages = [ 'en', 'pt' ];
        DOM.speciesRptr.innerHTML = speciesList.map(species => {
            const vernacularNames = R.take(5, 
                species.names
                    .filter(name => R.contains(name.language, languages))
                    .map(name => `<p>${name.vernacularName}</p>`)).join(''); 
                    return `<div class="rectangle">
                                <div class="answer">
                                    <button class="scientificName">${species.name}</button>
                                    <div class="vernacularName">${vernacularNames}</div>
                                </div>
                            </div>`;
        }).join('');
    }
};

store.subscribe(renderSpecies);

let renderSpecimenImages = null;

const renderImages = (specimenImages) => {
    let images = specimenImages;
    return () => {
        let displayImages = R.take(4, utils.shuffleArray(images));        
        DOM.specimenRptr.innerHTML = displayImages.map(displayImages => {
          return `<div class="square">
                    <img src="${displayImages}" onError="this.src='https://media.eol.org/content/2015/04/30/18/20117_orig.jpg';" />
                 </div>`; 
        }).join('');
        images = R.remove(0, 4, images);
    };
};

const renderSpecimens = () => {
    const { type, item: { images } } = store.getState();
    if(type === types.NEXT_ITEM) {
        renderSpecimenImages = renderImages(images);
        renderSpecimenImages();
    }
};

store.subscribe(renderSpecimens);

DOM.moreSpecimensBtn.addEventListener('click', () => {
    renderSpecimenImages();
});

DOM.speciesRptr.addEventListener('click', (event) => {
    const { item } = store.getState();    
    const qandA = { question: item.name, answer: event.target.childNodes[0].data }
    actions.boundUpdateScore(qandA);
});
    
const { items, item } = store.getState();
DOM.collectionTxt.innerHTML = `There are ${items.length} items in this test`;
actions.boundNextItem(utils.nextItem(items, item.index + 1));