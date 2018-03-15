import { utils } from '../../utils/utils.js';
import { types } from '../learn-types.js';
import { actions } from '../learn-actions.js';
import { store } from '../../store/store-repo.js';
import { renderPasses } from '../screens/passes.js';
import { renderFails } from '../screens/fails.js';
import { strategies } from '../learn-strategy.js';
import { DOM } from '../learn-dom.js';

const screens = [ renderPasses, renderFails ];

const subscriptions = [];

export const renderNext = () => {

    const { strategy, type, items, item, score } = store.getState();

    if(type === types.MARK_ANSWER) {

        subscriptions.forEach(unsubscribe => {
            unsubscribe();
        });
        subscriptions.length = 0;

        DOM.rightBody.innerHTML = '';

        strategies.map(strategy => strategy.active = false);
        const strategy = R.take(1, utils.shuffleArray(strategies))[0];
        strategy.active = true;                

        strategy.elements.forEach(element => {
            element.render();
        });

        if(items.length === score.total) screens[0]();
        else {
            actions.boundChangeStrategy(strategy);

            strategy.elements.forEach(element => { 
                element.render();
                subscriptions.push(store.subscribe(element.render));
            });
            subscriptions.push(store.subscribe(renderNext));

            actions.boundNextItem(utils.nextItem(items, item.index + 1));
        }
    }
};

const { strategy, items, item } = store.getState();

subscriptions.push(store.subscribe(renderNext));
strategy.elements.forEach(element => { 
    element.render();
    subscriptions.push(store.subscribe(element.render));
});

actions.boundNextItem(utils.nextItem(items, item.index));