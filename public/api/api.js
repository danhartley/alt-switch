import { utils } from '../utils/utils.js';
// import { trees } from './eol-trees.js';
import { tejoSpecies as trees } from './eol-tejo.js';

const binomials = trees.map(item => {
        const names = item.name.split(' ');
        item.genus = names[0];
        item.species = names[1];    
        item.name = item.name.split(' ').slice(0,2).join(' ');
        return item;
});

const species = utils.shuffleArray(binomials);

export const api = {
    species
};