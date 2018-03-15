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

const nextItemAction = makeActionCreator(types.NEXT_ITEM);
const markAnswerAction = makeActionCreator(types.MARK_ANSWER);
const newScreen = makeActionCreator(types.NEW_SCREEN);

const boundNextItem = data => store.dispatch(nextItemAction(data,{delay:500}));
const boundMarkAnswer = data => store.dispatch(markAnswerAction(data));
const boundNewScreen = data => store.dispatch(newScreen(data));

export const actions = {
    boundNextItem,
    boundMarkAnswer,
    boundNewScreen
};