import { utils } from '../utils/utils.js';
import { store } from '../store/store.js';

const root = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&limit=1&search=`;

const formatUrl = (name, root, encode) => {
    let binomial = name;
    if(name.indexOf(' ') > 0) {
        let ranks = name.split(' ');
        binomial = ranks[0] + ' ' + ranks[1];
    }    
    return root + encode(binomial);
};

const fetchWiki = name => {
    if(name === undefined) {
        const errorPromise = new Promise((resolve, reject) => {
            resolve('No Wikipedia entry is avilable for this plant. Sorry!')
        });
        return errorPromise;
    }
    
    const url = formatUrl(name, root, utils.encodeQuery);
    let config = { 
        method: 'GET'
    };
    return fetch(url, config)
        .then(json => json.json())
        .then(R.flatten);
};

const formatWiki = (entry) => {
    let html = '';
    if(entry.length === 1)
        return `<li><i>Species: ${entry[0]}</i></li>`;
    if(entry[0]) html += `<li><h3>${entry[0]}</h3></li>`;
    if(entry[1]) html += `<li><p>${entry[1]}</p></li>`;
    if(entry[2])
        if(entry[2].indexOf('https')!== -1)
        html += `<li><a target="_blank" href="${entry[2]}">${entry[2]}</a></li>`;
        else html += `<li><p>${entry[2]}</p></li>`;
    if(entry[3]) 
        if(entry[3].indexOf('https')!== -1)
        html += `<li><a target="_blank" href="${entry[3]}">${entry[3]}</a></li>`;
        else html += `<li><p>${entry[3]}</p></li>`;
    return html;
};

const renderWiki = (wikiNode, state) => {
    if(state.card) {
        let binomial = state.card.name;
        wikiNode.innerHTML = "";
        window.setTimeout(()=>{            
            fetchWiki(binomial)         
                .then(entry => {            
                    if(entry.length > 1) 
                        wikiNode.innerHTML = formatWiki(entry.slice(1));
                    else {                        
                        const genus = binomial.split(' ')[0];                
                        fetchWiki(genus).
                            then(genusEntry => {
                                wikiNode.innerHTML = formatWiki(entry);
                                wikiNode.innerHTML+= formatWiki(genusEntry.slice(1));
                            });
                    }                    
                });
        }, 2000);
    }
}

let currentId = 0;

const wikiListener = () => {    
    const wikiNode = document.getElementById('wiki')
    const state = store.getState();
    if(currentId !== state.card.id) {
        renderWiki(wikiNode, state);
        currentId = state.card.id;
    }    
};

export {
    formatUrl,
    formatWiki,
    wikiListener
};