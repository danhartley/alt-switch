import { tejoSpecies } from '../api/eol-tejo.js';
import { utils } from '../utils/utils.js';

export const createStore = (reducer, intialState) => {

    let state = intialState || {};
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    dispatch({});

    return { getState, dispatch, subscribe };
};

export const reducer = (state = {}, action) => {
    state.action = action.type;
    switch(action.type) {
        case 'Inat':
        case 'EOL':
        if(action.data)
            return [...state, ...action.data];
        case 'Species':
        return { ...state, card : action.data || card };
        case 'CurrentTimer':
            return { ...state, timer: action.data }
        case 'LOAD_ITEMS':
            return { ...state, items: action.data }
        case 'UPDATE_SCORE':
            const score = { total: 0, correct: 0, question: '', answer : action.data };
            score.total = state.score.total + 1;
            if(score.answer === state.item.name) {
                score.correct = state.score.correct + 1;
                score.success = true;
            } else {
                score.question = state.item.name;
                score.success = false;
            } 
            return { ...state, score };
        case 'NEXT_ITEM':
            return { ...state, item: action.data }
        default:
        return state;
    }
};

const initialState = {
    items: utils.shuffleArray(tejoSpecies).map(item => {
        item.name = item.name.split(' ').slice(0,2).join(' ');
        return item;
    }),
    item: { index: 0 },
    score: {
        total: 0,
        correct: 0,
        answer: '',
        question: ''
    }
};

export const store = createStore(reducer, initialState);