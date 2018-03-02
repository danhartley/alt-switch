import { updateScore, nextItem } from './learn-reducers.js';
import { types } from './learn-types.js';

it('learn state should reflect correct answer', () => {

  const stateBefore = {
    total: 10,
    correct: 9,
    answer: '',
    success: false
  }

  const stateAfter = {
    total: 11,
    correct: 10,
    question: 'Anagallis arvensis',
    answer: 'Anagallis arvensis',
    success: true
  }

  const action = {
    type: types.UPDATE_SCORE,
    data: {
      question: 'Anagallis arvensis',
      answer: 'Anagallis arvensis'
    }
  }

  Object.freeze(stateBefore);
  Object.freeze(action);

  expect(updateScore(stateBefore, action)).toEqual(stateAfter);
});

it('learn state should reflect incorrect answer', () => {

  const stateBefore = {
    total: 10,
    correct: 9,
    answer: '',
    success: false
  }

  const stateAfter = {
    total: 11,
    correct: 9,
    question: 'Anagallis arvensis',
    answer: 'Malva sylvestris',
    success: false
  }

  Object.freeze(stateBefore);
  Object.freeze(action);

  const action = {
    type: types.UPDATE_SCORE,
    data: {
      question: 'Anagallis arvensis',
      answer: 'Malva sylvestris'
    }
  }

  expect(updateScore(stateBefore, action)).toEqual(stateAfter);
});

it('learn state should return the next item', () => {

  const stateBefore = { };

  const stateAfter =  { id: 1 };

  const action = {
    type: types.NEXT_ITEM,
    data: { id: 1 }
  };

  Object.freeze(stateBefore);
  Object.freeze(action);

  expect(nextItem(stateBefore, action)).toEqual(stateAfter);
});