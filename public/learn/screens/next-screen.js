import { utils } from '../../utils/utils.js';
import { types } from '../learn-types.js';
import { actions } from '../learn-actions.js';
import { store } from '../../store/store-repo.js';
import { renderPasses } from '../screens/passes.js';
import { renderFails } from '../screens/fails.js';
import { strategies } from '../learn-strategy.js';
import { DOM } from '../learn-dom.js';
import { subscriptions } from '../learn.js';

const screens = [ renderPasses, renderFails ];

export const renderNext = () => {

    const render = () => {
        const { type, items, item, score } = store.getState();
        if(type === types.MARK_ANSWER) {
            if(items.length === score.total) {
                screens[0]();
            }
            else {
                subscriptions.forEach(unsubscribe => unsubscribe());
                subscriptions.length = 0;
                const strategy = R.take(1, utils.shuffleArray(strategies))[0];
                strategy.active = true;                
                setTimeout(()=> {
                    DOM.rightBody.innerHTML = '';
                    actions.boundChangeStrategy(strategy);
                    strategy.elements.forEach(element => { 
                        subscriptions.push(store.subscribe(element.render()));
                    });
                    actions.boundNextItem(utils.nextItem(items, item.index + 1));
                },2000);    
            }
        }
    };
    return render;
};