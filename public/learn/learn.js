import { utils } from '../utils/utils.js';
import { store } from '../store/store-repo.js';
import { actions } from './learn-actions.js';
import { types } from './learn-types.js';
import { DOM } from './learn-dom.js';
// import { renderSpecies } from './screens/species.js';
import { renderPasses } from './screens/passes.js'; 
import { renderFails } from './screens/fails.js';
import { renderScore } from './screens/score.js';
// import { renderTextEntry } from './screens/text-entry.js';
// import { renderSpecimen } from './screens/specimen.js';
import { strategy } from './learn-strategy.js';


const screens = [ renderPasses, renderFails ];

// renderSpecimen();
// renderTextEntry();

const currentStrategy = strategy.filter(s => s.active);
currentStrategy.map(s => s.left.render());
currentStrategy.map(s => s.right.render());

renderScore();

const nextSpecies = () => {
    const { type, items, item, score } = store.getState();
    if(type === types.UPDATE_SCORE) {
        if(items.length === score.total) screens[0]();
        else actions.boundNextItem(utils.nextItem(items, item.index + 1));
    }
};

store.subscribe(nextSpecies);

const { items, item, layout } = store.getState();
DOM.collectionTxt.innerHTML = `There are ${items.length} items in this test`;
actions.boundNextItem(utils.nextItem(items, item.index + 1));

// switch(layout.left.render) {
//     case 'specimen':
//         renderSpecimen();
//         break;
// };

// switch(layout.right.render) {
//     case 'species':
//         switch(layout.right.answer) {
//             case 'entry':
//             renderTextEntry();
//             break;
//         };
// };
