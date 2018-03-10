import { tejoSpecies } from '../api/eol-tejo.js';
import { trees } from '../api/eol-trees.js';
import { utils } from '../utils/utils.js';
import { createStore } from './store.js';
import { types } from '../learn/learn-types.js';
import { score, item } from '../learn/learn-reducers.js'
import { strategy as learnStategy } from '../learn/learn-strategy.js';

const initialState = {
    strategy: learnStategy,
    score: {
        total: 0,
        correct: 0,
        wrong: 0,
        answer: '',
        question: '',
        fails: [],
        passes: [],
        success: false
    }
};

const species = utils.shuffleArray(trees)
    .map(item => {
        const names = item.name.split(' ');
        item.genus = names[0];
        item.species = names[1];    
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

const card = (state = null, action) => {
    switch(action.type) {
        case 'NEXT_SPECIES':
            return { ...action.data };
        default:
            return state;
    }
};

const timer = (state = null, action) => {
    switch(action.type) {
        case 'CURRENT_TIMER':
            return { ...action.data }
        default:
            return state;
    }
};

const type = (state = null, action) => { 
    switch(action.type) {
        default: 
            return action.type || state; 
    }
};

const strategy = (state = null, action) => { 
    switch(action.type) {
        default: 
            return action.strategy || state;
    }
};

const { combineReducers } = Redux;

const reducer = combineReducers({
    score,
    items,
    item,
    card,
    timer,
    type,
    strategy
});

export const store = createStore(reducer, initialState);