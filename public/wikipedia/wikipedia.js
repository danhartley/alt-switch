import { utils } from '../utils/utils.js';

const wikiURL = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=`;
export const getWiki = species => { 
    let strArr = species.split(' ');
    let binomial = strArr[0] + ' ' + strArr[1];
    let url = wikiURL + utils.encodeQuery(binomial);    
    let config = { 
        method: 'GET'
    };
    return fetch(url, config)
            .then(json => json.json());
};