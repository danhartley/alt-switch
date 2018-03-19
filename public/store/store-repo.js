import { tejoSpecies } from '../api/eol-tejo.js';
import { utils } from '../utils/utils.js';
import { score, item, strategy, items, randomiser, strategies } from '../learn/reducers/learn-reducers.js'
import { timeoutScheduler } from '../learn/middleware/timeoutScheduler.js';
import { logger } from '../learn/middleware/logger.js';
// import { strategies } from '../learn/learn-strategy.js';

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

const { combineReducers, createStore, applyMiddleware } = Redux;

const reducer = combineReducers({
    strategies,
    strategy,
    items,
    item,
    score,
    randomiser,
    card,
    timer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer, 
    composeEnhancers(applyMiddleware(
        timeoutScheduler,
        logger
    ))
);