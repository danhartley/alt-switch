// import { nextItem } from './game.js';
import { reducer } from '../store/store';   

describe('reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual({})
    });
});