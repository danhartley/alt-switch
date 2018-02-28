const createStore = (reducer, intialState) => {

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

const reducer = (state = [], action) => {
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
        case 'SCORE':
            state.score = action.data;
            return state;
        case 'ITEM':
            state.item = action.data;
            return state;
        default:
        return state;
    }
};

export const store = createStore(reducer, {
    item: { index: 0 },
    score: {
        total: 0,
        correct: 0,
        answer: '',
        question: ''
    }
});

// const { createStore } = Redux;
// const createStore = Redux.createStore;
// import { createStore } from 'redux';