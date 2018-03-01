import { reducers } from './learn-reducers.js';
import { types } from './learn-types.js';

it('learn state should reflect correct answer', () => {
  const state = {
    item: { name: 'Anagallis arvensis'},
    score: {
      total: 10,
      correct: 9,
      answer: '',
      success: false
    }
  }

  const action = {
    type: types.UPDATE_SCORE,
    data: 'Anagallis arvensis'
  }

  const newState = reducers.updateScore(state, action);
  expect(newState.score.total).toBe(11);
  expect(newState.score.success).toBe(true);
  expect(newState.score.correct).toBe(10);
});

it('learn state should reflect incorrect answer', () => {
  const state = {
    item: { name: 'Anagallis arvensis'},
    score: {
      total: 10,
      correct: 9,
      answer: '',
      success: false
    }
  }

  const action = {
    type: types.UPDATE_SCORE,
    data: 'Malva sylvestris'
  }

  const newState = reducers.updateScore(state, action);
  expect(newState.score.total).toBe(11);
  expect(newState.score.success).toBe(false);
  expect(newState.score.correct).toBe(9);
});