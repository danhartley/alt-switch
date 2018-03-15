import { utils } from '../utils/utils.js';
import { types } from './learn-types.js';
import { strategies } from './learn-strategy.js';
import { store } from '../store/store-repo.js';

const initialScoreState = {
    total: 0,
    correct: 0,
    wrong: 0,
    answer: '',
    question: '',
    fails: [],
    passes: [],
    success: false
};

export const score = (state = initialScoreState, action) => {
    switch(action.type) {
        case types.MARK_ANSWER:
            const score = { ...state, question: action.data.question, answer : action.data.answer };
            score.total++;
            score.success = score.answer === score.question;
            if(score.success) {
                score.correct++;
                score.passes.push(score.question);  
            }
            else {
                score.wrong++;
                score.fails.push(score.question);
            }
            return { ...state, ...score};
        default:
            return state;
    }       
};

export const item = (state = { index: 0 }, action) => {
    switch(action.type) {
        case types.NEXT_ITEM:
            return { ...state, ...action.data };
        case types.NEW_SCREEN:
            return { ...state, ...action.data.item }
        default:
            return state;
    }
};

const initialStrategyState = strategies.filter(strategy => strategy.active)[0];

export const strategy = (state = initialStrategyState, action) => { 
    switch(action.type) {
        case types.NEW_SCREEN:
            return { ...state, ...action.data.strategy }
        default: 
            return state;
    }
};