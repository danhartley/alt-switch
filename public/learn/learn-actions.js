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
const updateScoreAction = makeActionCreator(types.UPDATE_SCORE);

const boundNextItem = data => store.dispatch(nextItemAction(data))
const boundUpdateScore = data => store.dispatch(updateScoreAction(data))

export const actions = {
    boundNextItem,
    boundUpdateScore
};