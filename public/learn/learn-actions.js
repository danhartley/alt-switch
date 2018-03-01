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

const nextItem = makeActionCreator(types.NEXT_ITEM);
const updateScore = makeActionCreator(types.UPDATE_SCORE);

const boundNextItem = data => store.dispatch(nextItem(data))
const boundUpdateScore = data => store.dispatch(updateScore(data))

export const actions = {
    boundNextItem,
    boundUpdateScore
};