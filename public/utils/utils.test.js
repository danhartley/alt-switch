import { utils } from './utils';

it('nextItem() returns the next item from a given starting point', ()=>{
    const species = [1,2,3,4,5,6,7,8,9];
    expect(utils.nextItem(species, 3)).toBe(4);
    expect(utils.nextItem(species, 9)).toBe(1);
});
