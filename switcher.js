

// intention

const switcher = (cases, id) => {
     const {name, action} = cases.filter(x => x.id === id).find(x => x);    
     console.log(name);
}

const obj1 = {
    id: 1,
    name: 'Groove Master',
    action: 'spin'
};

const obj2 = {
    id: 2,
    name: 'Deep Cut',
    action: 'mow'
};

const cases = [];
cases.push(obj1);
cases.push(obj2);

//switcher(cases, 1);

const options = {
    'wait': () => 'wait',
    'run': () => 'run',
    'stop': () => 'stop'
};

const opter = (key, options) => options[key]();

module.exports = opter;