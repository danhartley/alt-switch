import { DOM } from '../learn-dom.js';
import { store } from '../../store/store-repo.js';
import { actions } from '../learn-actions.js';
import { types } from '../learn-types.js';
import { utils } from '../../utils/utils.js';

export const renderAnswers = () => {
    if('content' in document.createElement('template')) {
        
        const answers = document.querySelector('#answers'); 

        const rptrSpecies = answers.content.querySelector('#rptrSpecies');
        const txtCorrect = answers.content.querySelector('#txtCorrect');
        const txtTotal = answers.content.querySelector('#txtTotal');
        const txtMessage = answers.content.querySelector('#txtMessage');
        const rightHeader = answers.content.querySelector('#right-header');

        // rptrSpecies.addEventListener('click', (event) => {
        //     if(event.target.childNodes.length > 1) return;
        //     const { item } = store.getState();    
        //     const qandA = { question: item.name, answer: event.target.childNodes[0].data }
        //     actions.boundUpdateScore(qandA);
        // });

        // const clone = document.importNode(answers.content, true);
        // DOM.rightGrid.appendChild(clone);

        const renderScore = () => {
            const { score, item } = store.getState();
            if(score.success) { 
                // DOM.messageTxt.innerHTML = `${score.answer} was the correct answer! Well done.`;
                txtMessage.innerHTML = `${score.answer} was the correct answer! Well done.`;
                // DOM.rightHeader.style.backgroundColor = 'rgb(44, 141, 86)';
                rightHeader.style.backgroundColor = 'rgb(44, 141, 86)';
            }
            else if(score.total > 0) {
                // DOM.messageTxt.innerHTML = `Oh no! The correct answer was ${item.name}.`;
                // DOM.rightHeader.style.backgroundColor = 'rgb(141, 0, 5)';
                txtMessage.innerHTML = `Oh no! The correct answer was ${item.name}.`;
                rightHeader.style.backgroundColor = 'rgb(141, 0, 5)';
            }


            txtTotal.innerHTML = score.total;
            txtCorrect.innerHTML = score.correct;


            // const scoreClone = document.importNode(answers.content, true);
            // DOM.rightGrid.appendChild(scoreClone);
            // DOM.totalTxt.innerHTML = score.total;
            // DOM.correctTxt.innerHTML = score.correct;
        };
        
        store.subscribe(renderScore);

        const renderSpecies = () => {    
            const state = store.getState();
            if(state.type === types.NEXT_ITEM) {
                const alternativeAnswers = R.take(5, utils.shuffleArray(state.items).filter(i => i.id !== state.item.id));
                const speciesList = utils.shuffleArray([...alternativeAnswers, state.item]);
                const languages = [ 'en', 'pt' ];
                // DOM.speciesRptr.innerHTML = speciesList.map(species => {
                    // rptrSpecies.innerHTML = speciesList.map(species => {
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

            //if(DOM.rightGrid.childElementCount === 0) {
                const clone = document.importNode(answers.content, true);

                clone.childNodes[3].addEventListener('click', (event) => {
                    if(event.target.childNodes.length > 1) return;
                    const { item } = store.getState();    
                    const qandA = { question: item.name, answer: event.target.childNodes[0].data }
                    actions.boundUpdateScore(qandA);
                });
    
              //  DOM.rightGrid.appendChild(clone);
            //} else {
                DOM.rightGrid.innerHTML = '';
                DOM.rightGrid.appendChild(clone);
            //}
        };
        
        store.subscribe(renderSpecies);
    }
};