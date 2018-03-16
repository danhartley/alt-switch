Array.prototype.concatAll = function() {
  const results = [];

  this.forEach(function(subArray) {
    subArray.forEach(function(element) {
      results.push(element);
    });
  });

  return results;
};

const log = msg => { 
    return array => {
      console.log(msg, array); 
      return array; 
    }
  };

const encodeQuery = q => { 
  if(q === undefined) return q;
  if(Number.isInteger(q)) return q;
  return encodeURIComponent(q.trim()) 
};

const timer = function (sink, delay) {
  let id = null;
  Bacon.fromBinder(function() {
    id = setInterval(function() {
        sink();
      }, delay);    
    })
  .onValue(function(element) { console.log(element) });
  return id;
};

function intervalTimer (sink, delay) {
  var timerId;

  this.pause = function() {
      window.clearInterval(timerId);
  };

  this.resume = function() {
      window.clearInterval(timerId);
      timerId = timer(sink, delay);
  };

  this.getId = function (){
    return timerId;
  }

  this.resume();

  return this;
};

const shuffleArray = arr => (
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])
);

const randomiseSelection = (source, required, zeroBased = false) => {
  let randomSelection = [];
  const randomArray = shuffleArray(source);
  
  const r = randomSelection => randomSelection.concat(randomArray.map((item, index) => {
    while(index + randomSelection.length < required) {
      return zeroBased ? --item : item;
    }
  })).filter(el => el !== undefined);

  randomSelection = r(randomSelection);
  
  return randomSelection.length < required 
    ? r(randomSelection)
    : randomSelection;
};


const nextItem = (array, index) => {    
  const item = array[index % array.length];
  item.index = index % array.length;
  return item;
};

const combineReducers = (reducers) => {
  return (state = {}, action) => {
      return Object.keys(reducers).reduce(
        (nextState, key) => {
          nextState[key] = reducers[key](
            state[key],
            action
          );
          return nextState;
        },
      {}
    );
  };
};

export const utils = {
  log,
  encodeQuery,
  timer, 
  intervalTimer,
  shuffleArray,
  nextItem,
  combineReducers,
  randomiseSelection
};