import { utils } from '../../utils/utils.js';
import { types } from '../learn-types.js';
import { actions } from '../learn-actions.js';
import { store } from '../../store/store-repo.js';
import { renderPasses } from '../screens/passes.js';
import { renderFails } from '../screens/fails.js';

const screens = [ renderPasses, renderFails ];

export const renderNext = () => {

    const render = () => {
        const { type, items, item, score } = store.getState();
        if(type === types.MARK_ANSWER) {
            if(items.length === score.total) screens[0]();
            else actions.boundNextItem(utils.nextItem(items, item.index + 1));
        }
    };
    store.subscribe(render);
    const { items, item } = store.getState();
    actions.boundNextItem(utils.nextItem(items, item.index));
};