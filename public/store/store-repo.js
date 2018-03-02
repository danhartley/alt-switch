import { tejoSpecies } from '../api/eol-tejo.js';
import { utils } from '../utils/utils.js';
import { createStore } from './store.js';
import { types } from '../learn/learn-types.js';
import { updateScore, nextItem } from '../learn/learn-reducers.js'

const initialState = {
    items: utils.shuffleArray(tejoSpecies).map(item => {
        item.name = item.name.split(' ').slice(0,2).join(' ');
        return item;
    }),
    score: {
        total: 0,
        correct: 0,
        answer: '',
        question: '',
        success: false
    }
};

const items = (state = {}, action) => {    
    switch(action.type) {
        case 'LOAD_INAT_DATA':
        case 'LOAD_EOL_DATA':
        if(action.data)
            return [...action.data];
        case 'NEXT_SPECIES':
            return { ...state, card : action.data || card };
        case 'CURRENT_TIMER':
            return { ...state, timer: action.data }
        default:
            return state.items;
    }
};

const reducer = (state = {}, action) => {    
    return {
        score: updateScore({ ...state.score }, action),
        items: items(state, action),
        item: nextItem(state.item, action),
        type: action.type
    };
};

export const store = createStore(reducer, initialState);