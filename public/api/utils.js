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

const utils = {
  encodeQuery
};

Array.prototype.concatAll = function() {
  const results = [];

  this.forEach(function(subArray) {
    subArray.forEach(function(element) {
      results.push(element);
    });
  });

  return results;
};