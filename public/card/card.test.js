import { iterateOverItems } from './card.js';

it('should itereate over collection', ()=>{

    let arr = [1,3,4,5];
    let arr2 = [];
    let iterator = arr[Symbol.iterator](); 
    let callback = ()=>{}; 
    let iteratorFunction = (item) => {
        arr2.push(item);
    };

    iterateOverItems(iterator, callback, iteratorFunction)();
    expect(arr2[0]).toBe(1);
});