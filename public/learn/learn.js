import { utils } from '../utils/utils.js';
import { store } from '../store/store-repo.js';
import { actions } from './learn-actions.js';

const { strategy } = store.getState();
export const subscriptions = [];
strategy.elements.forEach(element => { 
    subscriptions.push(store.subscribe(element.render()));
});
const { items, item } = store.getState();
actions.boundNextItem(utils.nextItem(items, item.index));