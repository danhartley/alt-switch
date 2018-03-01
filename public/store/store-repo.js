import { tejoSpecies } from '../api/eol-tejo.js';
import { utils } from '../utils/utils.js';
import { createStore } from './store.js';
import { types } from '../learn/learn-types.js';
import { reducers } from '../learn/learn-reducers.js'

const initialState = {
    items: utils.shuffleArray(tejoSpecies).map(item => {
        item.name = item.name.split(' ').slice(0,2).join(' ');
        return item;
    }),
    score: { success: false, total: 0, correct: 0, answer: '' },
    item: { index: 0 }
};

const reducer = (state = {}, action) => {
    state.type = action.type;
    switch(action.type) {
        case 'Inat':
        case 'EOL':
        if(action.data)
            return [...state, ...action.data];
        case 'Species':
        return { ...state, card : action.data || card };
        case 'CurrentTimer':
            return { ...state, timer: action.data }
        case types.UPDATE_SCORE:
            return reducers.updateScore(state, action);
        case types.NEXT_ITEM:
            return { ...state, item: action.data }
        default:
        return state;
    }
};

export const store = createStore(reducer, initialState);