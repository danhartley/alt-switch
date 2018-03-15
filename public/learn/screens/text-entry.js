import { DOM } from '../learn-dom.js';
import { store } from '../../store/store-repo.js';
import { utils } from '../../utils/utils.js';
import { actions } from '../learn-actions.js';
import { types } from '../learn-types.js';

export const renderTextEntry = () => {

    const { strategy, item, type } = store.getState();

    if(type === types.NEXT_ITEM) {

        let sendQandA = null;

        const handleEnterPress = event => {
            if(event.key === 'Enter') {
                sendQandA();                
            }
        };

        const { strategy } = store.getState();

        const element = strategy.elements.filter(el => el.name === 'text-entry')[0];

        if(!element) return;

        const template = document.querySelector(`.${element.template}`);

        sendQandA = () => {
            if(!document.querySelector('.js-txt-input')) return;
            const { item } = store.getState();
            const answer = document.querySelector('.js-txt-input').value;
            const qandA = { question: item[element.question], answer: answer }
            actions.boundMarkAnswer(qandA);
        };

        // window.addEventListener('keypress', handleEnterPress);
        
        template.content.querySelector('span').innerHTML = item.genus;   

        const clone = document.importNode(template.content, true);
        
        clone.querySelector('button').addEventListener('click', event => {
            sendQandA();
        });

        element.parent.innerHTML = '';
        element.parent.appendChild(clone);

        document.querySelector('.js-txt-input').focus();
    }
};
