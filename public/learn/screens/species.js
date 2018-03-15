import { DOM } from '../learn-dom.js';
import { store } from '../../store/store-repo.js';
import { actions } from '../learn-actions.js';
import { types } from '../learn-types.js';
import { utils } from '../../utils/utils.js';

export const renderSpecies = () => {

    const { strategy, items, item, type } = store.getState();

    if(type === types.NEW_SCREEN) {

        const element = strategy.elements.filter(el => el.name === 'species')[0];

        if(!element) return;

        const template = document.querySelector(`.${element.template}`);

        const rptrSpecies = template.content.querySelector('.js-rptr-species');
                        
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
                                    <button>${species.name}</button>
                                    <div class="vernacular-name">${vernacularNames}</div>
                                </div>
                            </div>`;
        }).join('');

        const clone = document.importNode(template.content, true);

        clone.querySelectorAll('.js-rptr-species .rectangle .answer button').forEach(element => {
            element.addEventListener('click', event => {                    
                const { item } = store.getState();    
                const qandA = { question: item.name, answer: event.target.childNodes[0].data }
                actions.boundMarkAnswer(qandA);
            });
        });

        DOM.rightBody.innerHTML = '';
        DOM.rightBody.appendChild(clone);
    }
};
