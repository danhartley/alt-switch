import { store } from '../store/store-repo.js';
import { types } from './learn-types.js';

const makeActionCreator = action => {
    return function (value, meta) {
      return { 
        type: action,
        data: value,
        meta: meta
      }
    }
  }

const markAnswerAction = makeActionCreator(types.MARK_ANSWER);
const newScreen = makeActionCreator(types.NEW_SCREEN);

const boundMarkAnswer = data => store.dispatch(markAnswerAction(data));
const boundNewScreen = data => store.dispatch(newScreen(data,{delay:2000}));

export const actions = {
    boundMarkAnswer,
    boundNewScreen
};