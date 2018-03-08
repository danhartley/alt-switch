import { utils } from '../utils/utils.js';
import { store } from '../store/store-repo.js';
import { actions } from './learn-actions.js';
import { types } from './learn-types.js';
import { DOM } from './learn-dom.js';
import { renderAnswers } from './screens/answers.js';
import { renderPasses } from './screens/passes.js'; 
import { renderFails } from './screens/fails.js';
import { renderScore } from './screens/score.js';

const screens = [ renderPasses, renderFails ];

renderAnswers();
renderScore();

const nextSpecies = () => {
    const { type, items, item, score } = store.getState();
    if(type === types.UPDATE_SCORE) {
        if(items.length === score.total) utils.shuffleArray(screens)[0]();
        else actions.boundNextItem(utils.nextItem(items, item.index + 1));
    }
};

store.subscribe(nextSpecies);

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

const { items, item } = store.getState();
DOM.collectionTxt.innerHTML = `There are ${items.length} items in this test`;
actions.boundNextItem(utils.nextItem(items, item.index + 1));