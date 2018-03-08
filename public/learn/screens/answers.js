import { DOM } from '../learn-dom.js';
import { store } from '../../store/store-repo.js';
import { actions } from '../learn-actions.js';
import { types } from '../learn-types.js';
import { utils } from '../../utils/utils.js';

export const renderAnswers = () => {
    if('content' in document.createElement('template')) {
        
        const answers = document.querySelector('#answers');

        const rptrSpecies = answers.content.querySelector('#rptrSpecies');

        const renderSpecies = () => {    
            const state = store.getState();
            if(state.type === types.NEXT_ITEM) {
                const alternativeAnswers = R.take(5, utils.shuffleArray(state.items).filter(i => i.id !== state.item.id));
                const speciesList = utils.shuffleArray([...alternativeAnswers, state.item]);
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

            const clone = document.importNode(answers.content, true);

            clone.querySelector('#rptrSpecies').addEventListener('click', (event) => {
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