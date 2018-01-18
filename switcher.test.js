const opter = require('./switcher.js');

const options = {
    'wait': () => 'wait',
    'run': () => 'run',
    'stop': () => 'stop'
};

console.log("The return value is " + opter('wait', options));

it('key of wait return string wait',() => {    
    expect(opter('wait', options)).toBe('wait');
});