import { actions, types } from './learn-actions.js';

export const learnApp = (state = initialState, action) => {
    switch(action.type) {
        case types.UPDATE_SCORE:
            const score = { ...state.score, question: state.item.name, answer : action.data };
            score.total = score.total + 1;
            score.success = score.answer === score.question;
            if(score.success) score.correct = score.correct + 1;
            return { ...state, score };
    }
};