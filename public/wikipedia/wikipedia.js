import { utils } from '../utils/utils.js';
import { store } from '../store/store.js';

const wikiURL = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&limit=1&search=`;

const fetchWiki = species => { 
    let strArr = species.split(' ');
    let binomial = strArr[0] + ' ' + strArr[1];
    let url = wikiURL + utils.encodeQuery(binomial);    
    let config = { 
        method: 'GET'
    };
    return fetch(url, config)
        .then(json => json.json())
        .then(R.flatten);
};

const cleanupWiki = (wiki, binomial) => {
    const genus = binomial.split(' ')[0];
    const species = binomial.split(' ')[1];
    const regex = new RegExp(species.toUpperCase(), 'i');
    const unique = wiki.map(response => {
        return response.replace(regex, species);
        //   if(Array.isArray(response)) { 
        //       return response[0].replace(regex, species);
        //   }
        //   else { 
        //       return response.replace(regex, species);
        //   }
        });
    const entry = R.uniq(R.flatten(unique));
    return {
        genus,
        entry
    };
};

const formatWiki = (entry) => {
    let html = '';
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
        window.setTimeout(()=>{            
            fetchWiki(binomial)         
                .then(entry => {            
                    const genus = binomial.split(' ')[0];  
                    // const {genus, entry} = cleanupWiki(wiki, binomial);
                    wikiNode.innerHTML = formatWiki(entry.slice(1));
                    if(entry.length === 1 || entry.length === 2) {
                        fetchWiki(genus).
                            then(genusEntry => {
                                // const {entry:genusEntry} = cleanupWiki(wiki, binomial);
                                wikiNode.innerHTML+= formatWiki(genusEntry.slice(1));
                            });
                    }
                });
        }, 2000);
    }
}

const wikiListener = () => {
    const wikiNode = document.getElementById('wiki')
    const state = store.getState();
    renderWiki(wikiNode, state);
};

export {
    cleanupWiki,
    formatWiki,
    wikiListener
};