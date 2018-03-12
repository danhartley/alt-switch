import { utils } from '../utils/utils.js';
import { store } from '../store/store-repo.js';
import { actions } from './learn-actions.js';

const { strategy } = store.getState();
strategy.elements.forEach(element => { element.render(); });