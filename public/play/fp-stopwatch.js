const arr = [1,2,3,4,5,6,7,8,9];
const iter = arr[Symbol.iterator]();
const delay = 1000;
const fn = (next) => console.log(next.value);

export const fpTimer = (iterator, delay) => {
    const state = { next: 0 };
    const timerId = setInterval(() => {
        state.next = iterator.next();
    }, delay);
    return timerId; 
};

const quickie = fpTimer(iter, delay);


  