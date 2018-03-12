import { DOM } from '../learn-dom.js';
import { store } from '../../store/store-repo.js';
import { utils } from '../../utils/utils.js';
import { actions } from '../learn-actions.js';
import { types } from '../learn-types.js';

export const renderTextEntry = () => {

    if('content' in document.createElement('template')) {

        const { strategy } = store.getState();

        const element = strategy.elements.filter(el => el.name === 'text-entry')[0];

        DOM.headerTxt.innerHTML = element.header;

        const template = document.querySelector(`.${element.template}`);

        const sendQandA = () => {
            const { item } = store.getState();
            const answer = document.querySelector('.js-txt-input').value;
            const qandA = { question: item[element.question], answer: answer }
            actions.boundMarkAnswer(qandA);
        };

        document.addEventListener('keypress', event => {
            if(event.key === 'Enter') {
                sendQandA();
            }
        });

        // document.addEventListener('keyup', event => {
        //     const { item } = store.getState();
        //     console.log(event.target.value === item[element.question]);
        // });

        let _item = null;

        const render = () => {
      
            const { item, type } = store.getState();

            if(!Object.is(_item,item)) { 
                _item = item;
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
        return render;
    };
};