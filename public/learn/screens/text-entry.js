import { DOM } from '../learn-dom.js';
import { store } from '../../store/store-repo.js';
import { utils } from '../../utils/utils.js';
import { actions } from '../learn-actions.js';
import { types } from '../learn-types.js';

export const renderTextEntry = () => {

    if('content' in document.createElement('template')) {
    
        const entry = document.querySelector('#text-entry');
        const answerHint = entry.content.querySelector('#answer-hint');
        const answerInput = entry.content.querySelector('#answer-input');
        
        DOM.messageTxt.innerHTML = `Species`;  

        const sendQandA = () => {
            const { item } = store.getState();    
            const answer = 
                `${document.querySelector('#answer-hint').innerHTML} ${document.querySelector('#answer-input').value}`;
            const qandA = { question: item.name, answer: answer }
            actions.boundUpdateScore(qandA);
        };

        document.addEventListener('keypress', event => {
            if(event.keyCode === 13) {
                sendQandA();
            }
        });

        const render = () => {

            const { item, type } = store.getState();

            if(type === types.NEXT_ITEM) {

                item.name = item.name.split(' ').slice(0,2).join(' ');
                const names = item.name.split(' ');

                answerHint.innerHTML = names[0];

                const clone = document.importNode(entry.content, true);
                
                clone.querySelector('#answer-button').addEventListener('click', event => {
                    sendQandA();
                });

                DOM.rightBody.innerHTML = '';
                DOM.rightBody.appendChild(clone);

                document.querySelector('#answer-input').focus();
            }

        };

        store.subscribe(render);

        const { items, item } = store.getState();
        actions.boundNextItem(utils.nextItem(items, item.index + 1));
    };
};