import { utils } from '../utils/utils.js';
import { store } from '../store/store-repo.js';
import { actions } from './learn-actions.js';
import { types } from './learn-types.js';
import { DOM } from './learn-dom.js';
import { renderPasses } from './screens/passes.js'; 
import { renderFails } from './screens/fails.js';
import { renderScore } from './screens/score.js';

const screens = [ renderPasses, renderFails ];

let currStrategy;

const executeStrategy = () => {
    const { type, strategy } = store.getState();    
    if(strategy && !Object.is(currStrategy, strategy)) {
        currStrategy = strategy;
        currStrategy.elements.forEach(element => { element.render(); });
    }    
};

store.subscribe(executeStrategy);

renderScore();

const nextSpecies = () => {
    const { type, items, item, score } = store.getState();
    if(type === types.MARK_ANSWER) {
        if(items.length === score.total) screens[0]();
        else actions.boundNextItem(utils.nextItem(items, item.index + 1));
    }
};

store.subscribe(nextSpecies);

const { items, item } = store.getState();
DOM.collectionTxt.innerHTML = `There are ${items.length} items in this test`;
// actions.boundNextItem(utils.nextItem(items, item.index + 1));