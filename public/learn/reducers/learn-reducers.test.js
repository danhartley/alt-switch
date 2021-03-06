import { score, item } from './learn-reducers.js';
import { types } from '../learn-types.js';

it('learn state should reflect correct answer', () => {

  const stateBefore = {
    total: 10,
    correct: 9,
    answer: '',
    success: false,
    wrong: 0,
    question: 'Anagallis arvensis',
    fails: [],
    passes: []
  }

  const stateAfter = {
    total: 11,
    correct: 10,
    question: 'Anagallis arvensis',
    answer: 'Anagallis arvensis',
    success: true,
    wrong: 0,
    fails: [],
    passes: ['Anagallis arvensis']
  }

  const action = {
    type: types.MARK_ANSWER,
    data: {
      question: 'Anagallis arvensis',
      answer: 'Anagallis arvensis'
    }
  }

  Object.freeze(stateBefore);
  Object.freeze(action);

  expect(score(stateBefore, action)).toEqual(stateAfter);
});

it('learn state should reflect incorrect answer', () => {

  const stateBefore = {
    total: 10,
    correct: 9,
    answer: '',
    success: false,
    wrong: 0,
    question: '',
    fails: [],
    passes: []
  }

  const stateAfter = {
    total: 11,
    correct: 9,
    question: 'Anagallis arvensis',
    answer: 'Malva sylvestris',
    success: false,
    wrong: 1,
    fails: ['Anagallis arvensis'],
    passes: []
  }

  Object.freeze(stateBefore);
  Object.freeze(action);

  const action = {
    type: types.MARK_ANSWER,
    data: {
      question: 'Anagallis arvensis',
      answer: 'Malva sylvestris'
    }
  }

  expect(score(stateBefore, action)).toEqual(stateAfter);
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

  expect(item(stateBefore, action)).toEqual(stateAfter);
});

