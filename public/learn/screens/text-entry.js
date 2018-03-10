import { DOM } from '../learn-dom.js';
import { store } from '../../store/store-repo.js';
import { utils } from '../../utils/utils.js';
import { actions } from '../learn-actions.js';
import { types } from '../learn-types.js';

export const renderTextEntry = () => {

    if('content' in document.createElement('template')) {

        DOM.messageTxt.innerHTML = `Species`;

        const sendQandA = () => {
            const { item } = store.getState();
            const answer = document.querySelector('#txtEntry') 
                ? `${document.querySelector('#txtEntry').innerHTML} ${document.querySelector('#txtInput').value}`
                : `${document.querySelector('#txtInput').value}`;
            const qandA = { question: item.name, answer: answer }
            actions.boundUpdateScore(qandA);
        };

        document.addEventListener('keypress', event => {
            if(event.keyCode === 13) {
                sendQandA();
            }
        });

        const render = () => {
      
            const { item, type, strategy } = store.getState();

            if(type === types.NEXT_ITEM) {

                const element = strategy.elements.filter(el => el.name === 'textEntry')[0];

                const template = document.querySelector(`#${element.template}`);

                if(template.content.querySelector('span')) template.content.querySelector('span').innerHTML = item.genus;   

                const clone = document.importNode(template.content, true);
                
                clone.querySelector('button').addEventListener('click', event => {
                    sendQandA();
                });

                element.parent.innerHTML = '';
                element.parent.appendChild(clone);

                document.querySelector('#txtInput').focus();
            }

        };

        store.subscribe(render);

        const { items, item } = store.getState();
        actions.boundNextItem(utils.nextItem(items, item.index + 1));
    };
};