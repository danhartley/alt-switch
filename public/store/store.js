const createStore = (reducer) => {

    let state;
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
        return [...state, ...action.data];
        case 'Species':
        return [...state, action.data];
        default:
        return state;
    }
};

export const store = createStore(reducer);

// const { createStore } = Redux;
// const createStore = Redux.createStore;
// import { createStore } from 'redux';