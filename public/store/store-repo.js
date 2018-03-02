import { tejoSpecies } from '../api/eol-tejo.js';
import { utils } from '../utils/utils.js';
import { createStore } from './store.js';
import { types } from '../learn/learn-types.js';
import { updateScore, nextItem } from '../learn/learn-reducers.js'

const initialState = {
    score: {
        total: 0,
        correct: 0,
        answer: '',
        question: '',
        success: false
    }
};

const species = utils.shuffleArray(tejoSpecies).map(item => {
    item.name = item.name.split(' ').slice(0,2).join(' ');
    return item;
});

const items = (state = species, action) => {    
    switch(action.type) {
        case 'LOAD_INAT_DATA':
        case 'LOAD_EOL_DATA':
        if(action.data)
            return [...action.data];
        default:
            return state;
    }
};

const nextCard = (state, action) => {
    switch(action.type) {
        case 'NEXT_SPECIES':
            return { ...action.data };
        default:
            return state;
    }
};

const currentTimer = (state, action) => {
    switch(action.type) {
        case 'CURRENT_TIMER':
            return { ...action.data }
        default:
            return state;
    }
};

const reducer = (state = {}, action) => {    
    return {
        score: updateScore({ ...state.score }, action),
        items: items(state.items, action),
        item: nextItem(state.item, action),
        card: nextCard(state.card, action),
        timer: currentTimer(state.timer, action),
        type: action.type
    };
};

export const store = createStore(reducer, initialState);