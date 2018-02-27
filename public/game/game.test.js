import { nextItem, getSimpleBinomial, randomItemSelector } from './game.js';

it('nextItem() returns the next item from a given starting point', ()=>{
    const species = [1,2,3,4,5,6,7,8,9];
    expect(nextItem(species, 3)).toBe(4);
    expect(nextItem(species, 9)).toBe(1);
});

it('getSimpleBinomial() should return two part name from a string', ()=>{
    const string = 'Troglodytes troglodytes L.';
    expect(getSimpleBinomial(string)).toBe('Troglodytes troglodytes');
});

it('randomItemSelector() should return 1 when random numer 0.1 and array size 5', ()=>{
    const items = [1,2,3,4,5];
    expect(randomItemSelector(items, 0.5)).toBe(2);    
});

it('randomItemSelector() should return 4 when random numer 0.9 and array size 5', ()=>{
    const items = [1,2,3,4,5];
    expect(randomItemSelector(items, 0.9)).toBe(4);
});