import { DOM } from '../learn-dom.js';
import { store } from '../../store/store-repo.js';
import { actions } from '../learn-actions.js';
import { types } from '../learn-types.js';
import { utils } from '../../utils/utils.js';

export const renderSpecies = () => {

    if('content' in document.createElement('template')) {
        
        const species = document.querySelector('#species');

        const rptrSpecies = species.content.querySelector('#rptrSpecies');

        const renderSpecies = () => {
            
            const { items, item, type} = store.getState();

            DOM.messageTxt.innerHTML = `Species`;

            if(type === types.NEXT_ITEM) {
                const alternativeSpecies = R.take(5, utils.shuffleArray(items).filter(i => i.id !== item.id));
                const speciesList = utils.shuffleArray([...alternativeSpecies, item]);
                const languages = [ 'en', 'pt' ];            
                    rptrSpecies.innerHTML = speciesList.map(species => {
                    const vernacularNames = R.take(5, 
                        species.names
                            .filter(name => R.contains(name.language, languages))
                            .map(name => `<p>${name.vernacularName}</p>`)).join(''); 
                            return `<div class="rectangle">
                                        <div class="answer" id="${species.id}">
                                            <button class="scientificName">${species.name}</button>
                                            <div class="vernacularName">${vernacularNames}</div>
                                        </div>
                                    </div>`;
                }).join('');
            }

            const clone = document.importNode(species.content, true);

            // this could depend .... the listener is answer-specific, the rest not

            clone.querySelector('#rptrSpecies').addEventListener('click', event => {
                if(event.target.childNodes.length > 1) return;
                const { item } = store.getState();    
                const qandA = { question: item.name, answer: event.target.childNodes[0].data }
                actions.boundUpdateScore(qandA);
            });

            DOM.rightBody.innerHTML = '';
            DOM.rightBody.appendChild(clone);
        };
        
        store.subscribe(renderSpecies);
    }
};