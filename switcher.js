

// intention

const switcher = (cases, id) => {
     const {name, action} = cases.filter(x => x.id === id).find(x => x);    
     console.log(name);
}

// const obj1 = {
//     id: 1,
//     name: 'Groove Master',
//     action: 'spin'
// };

// const obj2 = {
//     id: 2,
//     name: 'Deep Cut',
//     action: 'mow'
// };

// const cases = [];
// cases.push(obj1);
// cases.push(obj2);

//switcher(cases, 1);

const options = {
    'wait': 'wait',
    'run': () => 'run',
    'stop': () => 'stop'
};

const opter = (key, options) => options[key]();

module.exports = opter;

const nary = (x, y) => x + y;
const unary = x => y => x + y;

const add = x => y => x + y;
const add3 = add(3);

module.exports = { add, add3 };

const trace = x => {
    console.log(x);
    return x;
  };

// [1,2].map(trace);

const flight = {
    canfly: () => true
}
//const craft = Object.assign({}, flight)
const craft = { ...flight };
// console.log(`can fly: ${craft.canfly()}`);

const fetch = require('isomorphic-fetch');

//import 'whatwg-fetch'; // client only

var fs = require('fs', 'utf8');
fs.readFile('./arb2.json', (err, data) => {
  if (err) throw err;
  const arbutus = JSON.parse(data);
  const treeMedia = specimen => specimen.media.map(medium => { return {id: specimen.key, format: medium.format, urL: medium.identifier} } );
  const details = arbutus.filter(specimen => specimen.media).map(treeMedia);
//   console.log(details);
});

const r = require('ramda');

const m = arr => arr.map(x=>x+1)

r.pipe(m, trace)([1,2])