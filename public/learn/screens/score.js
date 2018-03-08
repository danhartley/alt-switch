
import { DOM } from '../learn-dom.js';
import { store } from '../../store/store-repo.js';

export const renderScore = () => {

    const footer = document.querySelector('#score');

    const txtCorrect = footer.content.querySelector('#txtCorrect');
    const txtTotal = footer.content.querySelector('#txtTotal');
    
    const renderScore = () => {
        const { score, item } = store.getState();
        if(score.success) { 
            DOM.messageTxt.innerHTML = `${score.answer} was the correct answer! Well done.`;
            DOM.rightHeader.style.backgroundColor = 'rgb(44, 141, 86)';
        }
        else if(score.total > 0) {
            DOM.messageTxt.innerHTML = `Oh no! The correct answer was ${item.name}.`;
            DOM.rightHeader.style.backgroundColor = 'rgb(141, 0, 5)';
        }

        txtTotal.innerHTML = score.total;
        txtCorrect.innerHTML = score.correct;

        const clone = document.importNode(footer.content, true);

        DOM.rightFooter.innerHTML = '';
        DOM.rightFooter.appendChild(clone);
    };
    
    store.subscribe(renderScore);
};