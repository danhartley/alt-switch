import { store } from '../store/store.js';

let currentName = 0;

export const gbifListener = () => {
    const gbifNode = document.getElementById('family')
    const state = store.getState();
    if(state && state.card && currentName !== state.card.name) {
        const binomial = state.card.name;
        const url = `https://api.gbif.org/v1/species/match?name=${binomial}`;
        fetch(url)
            .then(json => json.json())
            .then(taxonomy => {
                gbifNode.innerHTML = taxonomy.family;
            });
            currentName = state.card.name;
    }    
};