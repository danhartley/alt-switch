import { store } from './game.js';

const makeActionCreator = action => {
    return function (value) {
      return { 
        type: action,
        data: value
      }
    }
  }

const NEXT_ITEM = 'NEXT_ITEM';
const UPDATE_SCORE = 'UPDATE_SCORE';

const nextItem = makeActionCreator(NEXT_ITEM);
const updateScore = makeActionCreator(UPDATE_SCORE);

const boundNextItem = data => store.dispatch(nextItem(data))
const boundUpdateScore = data => store.dispatch(updateScore(data))

export const actions = {
    boundNextItem,
    boundUpdateScore
};