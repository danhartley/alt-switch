import { utils } from '../utils/utils.js';
import { actions } from './learn-actions.js';
import { types } from './learn-types.js';

const intialScore = {
    total: 0,
    correct: 0,
    answer: '',
    question: ''
}

const updateScore = (state = intialScore, action) => {
    switch(action.type) {
        case types.UPDATE_SCORE:
            const score = { ...state.score, question: state.item.name, answer : action.data };
            score.total = score.total + 1;
            score.success = score.answer === score.question;
            if(score.success) score.correct = score.correct + 1;
            return { ...state, score };
    }   
};

const nextItem = (state = { index: 0 }, action) => {
    switch(action.type) {
        case types.NEXT_ITEM:
            return { ...state, item: action.data }
    }
};

export const reducers = {
    updateScore,
    nextItem
}