
import { DOM } from '../learn-dom.js';
import { store } from '../../store/store-repo.js';
import { types } from '../learn-types.js';

export const renderScore = () => {

    const template = document.querySelector('.js-score-template');

    const txtCorrect = template.content.querySelector('.js-txt-correct');
    const txtTotal = template.content.querySelector('.js-txt-total');
    
    const renderScore = () => {
        const { score, item, type } = store.getState();
        if(type === types.MARK_ANSWER) {
            if(score.success) { 
                DOM.headerTxt.innerHTML = `${score.answer} was the correct answer! Well done.`;
                DOM.rightHeader.style.backgroundColor = 'rgb(44, 141, 86)';
            }
            else if(score.total > 0) {
                DOM.headerTxt.innerHTML = `Oh no! The correct answer was ${item.name}.`;
                DOM.rightHeader.style.backgroundColor = 'rgb(141, 0, 5)';
            }

            txtTotal.innerHTML = score.total;
            txtCorrect.innerHTML = score.correct;

            const clone = document.importNode(template.content, true);

            DOM.rightFooter.innerHTML = '';
            DOM.rightFooter.appendChild(clone);
        }
    };
    
    store.subscribe(renderScore);
};