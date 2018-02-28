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
        if(action.data) 
            state.card = action.data;
            return state;
        case 'CurrentTimer':
            state.timer = action.data;
            return state;
        case 'LOAD_ITEMS':
            state.items = action.data;
            return state;
        case 'UPDATE_SCORE':
            state.score.total += 1;
            state.score.answer = action.data;
            if(state.score.answer === state.item.name) {
                state.score.correct += 1;  
                state.score.success = true;
            } else {
                state.score.question = state.item.name;
                state.score.success = false;
            }      
            return state;
        case 'NEXT_ITEM':
            state.item = action.data;
            return state;
        default:
        return state;
    }
};

const initialState = {
    item: { index: 0 },
    score: {
        total: 0,
        correct: 0,
        answer: '',
        question: ''
    }
};

export const store = createStore(reducer, initialState);

// const { createStore } = Redux;
// const createStore = Redux.createStore;
// import { createStore } from 'redux';