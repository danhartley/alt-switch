import { utils } from '../../utils/utils.js';
import { actions } from '../learn-actions.js';
import { store } from '../../store/store-repo.js';
import { renderPasses } from '../screens/passes.js';
import { renderFails } from '../screens/fails.js';
import { DOM } from '../learn-dom.js';

const screens = [ renderPasses, renderFails ];

const subscriptions = [];

let { score: currScore } = store.getState();

export const renderNext = () => {

    const { randomiser, items, item, score } = store.getState();

    if(score === currScore) return;

    currScore = score;

    subscriptions.forEach(unsubscribe => {
        unsubscribe();
    });
    subscriptions.length = 0;

    DOM.rightBody.innerHTML = '';

    const strategy = randomiser.strategiesCollection.strategies[randomiser.strategiesCollection.index];

    strategy.elements.forEach(element => {
        element.render();
    });

    if(items.length === score.total) screens[0]();
    else {
        strategy.elements.forEach(element => { 
            element.render();
            subscriptions.push(store.subscribe(element.render));
        });
        subscriptions.push(store.subscribe(renderNext));

        const newScreen = { 
            item: utils.nextItem(items, item.index + 1),
            strategy: strategy,
            randomiser: { index: randomiser.strategiesCollection.index + 1 }
        };

        actions.boundNewScreen(newScreen);
    }
};

const { strategy, randomiser, items, item } = store.getState();

subscriptions.push(store.subscribe(renderNext));
strategy.elements.forEach(element => { 
    element.render();
    subscriptions.push(store.subscribe(element.render));
});

const newScreen = { 
    item: utils.nextItem(items, 0),
    strategy: strategy,
    randomiser: { index: 0 }
};

actions.boundNewScreen(newScreen);