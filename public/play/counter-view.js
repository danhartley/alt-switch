import { stopwatch } from './stopwatch.js';

const count = document.getElementById('counter');
const stopper = document.getElementById('stopper');
const starter = document.getElementById('starter');

const arr = [1,2,3,4,5,6,7,8,9];
// const iter = arr[Symbol.iterator]();
const delay = 1000;
// const update = (current) => { count.innerHTML = 'value ' + current.value };

// const stopstart = stopwatch(iter, delay, update);

// starter.addEventListener('click', stopstart.start);
// stopper.addEventListener('click', stopstart.stop);

const collection = ['A', 'B', 'C'];
const collectionIter = collection[Symbol.iterator]();

const collectionPosition = document.getElementById('collection');


let nextChild = (current) => { 
    count.innerHTML = 'value ' + current.value;
};
let nextParent = () => {
    let item = collectionIter.next();
    if(!item.done) {
        let iter = arr[Symbol.iterator]();
        stopwatch(iter, delay, nextChild, nextParent).start();
        collectionPosition.innerHTML = item.value;
    }
}
nextParent();