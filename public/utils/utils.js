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

export const utils = {
  log,
  encodeQuery,
  timer, 
  intervalTimer
};