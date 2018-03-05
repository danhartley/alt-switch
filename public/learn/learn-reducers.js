import { utils } from '../utils/utils.js';
import { types } from './learn-types.js';

export const score = (state = null, action) => {
    switch(action.type) {
        case types.UPDATE_SCORE:
            const score = { ...state, question: action.data.question, answer : action.data.answer };
            score.total++;
            score.success = score.answer === score.question;
            if(score.success) {
                score.correct++;
                score.passes.push(score.question);  
            }
            else score.fails.push(score.question);
            return score;
        default:
            return state;
    }   
};

export const item = (state = { index: 0 }, action) => {
    switch(action.type) {
        case types.NEXT_ITEM:
            return { ...state, ...action.data };
        default:
            return state;
    }
};