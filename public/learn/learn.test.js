import { reducers } from './learn-reducers.js';
import { types } from './learn-types.js';

it('learn state should reflect correct answer', () => {

  const stateBefore = {
    item: { name: 'Anagallis arvensis'},
    score: {
      total: 10,
      correct: 9,
      answer: '',
      success: false
    }
  }

  const stateAfter = {
    item: { name: 'Anagallis arvensis'},
    score: {
      total: 11,
      correct: 10,
      question: 'Anagallis arvensis',
      answer: 'Anagallis arvensis',
      success: true
    }
  }

  const action = {
    type: types.UPDATE_SCORE,
    data: 'Anagallis arvensis'
  }

  Object.freeze(stateBefore);
  Object.freeze(action);

  expect(reducers.updateScore(stateBefore, action)).toEqual(stateAfter);
});

it('learn state should reflect incorrect answer', () => {

  const stateBefore = {
    item: { name: 'Anagallis arvensis'},
    score: {
      total: 10,
      correct: 9,
      answer: '',
      success: false
    }
  }

  const stateAfter = {
    item: { name: 'Anagallis arvensis'},
    score: {
      total: 11,
      correct: 9,
      question: 'Anagallis arvensis',
      answer: 'Malva sylvestris',
      success: false
    }
  }

  Object.freeze(stateBefore);
  Object.freeze(action);

  const action = {
    type: types.UPDATE_SCORE,
    data: 'Malva sylvestris'
  }

  expect(reducers.updateScore(stateBefore, action)).toEqual(stateAfter);
});

it('learn state should return the next item', () => {

  const stateBefore = { items: [] };

  const stateAfter =  { items: [], item: { id: 1 }};

  const action = {
    type: types.NEXT_ITEM,
    data: { id: 1 }
  };

  Object.freeze(stateBefore);
  Object.freeze(action);

  expect(reducers.nextItem(stateBefore, action)).toEqual(stateAfter);
});