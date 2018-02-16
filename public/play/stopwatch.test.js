import { stopwatch } from './stopwatch.js';
var isPureFunction = require('is-pure-function');

const arr = [1,2,3,4,5,6,7,8,9];
const iter = arr[Symbol.iterator]();
const delay = 1000;

jest.useFakeTimers();

it('Calls the update callback and iterates until the end of the collection', () => {
    
    const update = jest.fn();

    const stopstart = stopwatch(iter, delay, update);
    
    stopstart.start();

    expect(update).not.toBeCalled();

    jest.runAllTimers();

    expect(update).toBeCalled();
    expect(iter.next().value).toBe(undefined);
    expect(iter.next().done).toBe(true);

});

it('Creating stopwatches, and stopping them, while iterating through a collection', () => {

    const collection = ['A', 'B', 'C'];

});
import { fpTimer } from './fp-stopwatch';
