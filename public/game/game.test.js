import { nextItem, getSimpleBinomial } from './game.js';

export const randomItemSelector = (array, randomNumber) => {
    return Math.floor(randomNumber * array.length);
};

it('randomItemSelector() should return 1 when random numer 0.1 and array size 5', ()=>{
    const items = [1,2,3,4,5];
    expect(randomItemSelector(items, 0.5)).toBe(2);    
});

it('randomItemSelector() should return 4 when random numer 0.9 and array size 5', ()=>{
    const items = [1,2,3,4,5];
    expect(randomItemSelector(items, 0.9)).toBe(4);
});