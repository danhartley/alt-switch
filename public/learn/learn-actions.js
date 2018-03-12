import { store } from '../store/store-repo.js';
import { types } from './learn-types.js';

const makeActionCreator = action => {
    return function (value) {
      return { 
        type: action,
        data: value
      }
    }
  }

const nextItemAction = makeActionCreator(types.NEXT_ITEM);
const markAnswerAction = makeActionCreator(types.MARK_ANSWER);
const changeStrategyAction = makeActionCreator(types.CHANGE_STRATEGY);

const boundNextItem = data => store.dispatch(nextItemAction(data));
const boundMarkAnswer = data => store.dispatch(markAnswerAction(data));
const boundChangeStrategy = data => store.dispatch(changeStrategyAction(data));

export const actions = {
    boundNextItem,
    boundMarkAnswer,
    boundChangeStrategy
};