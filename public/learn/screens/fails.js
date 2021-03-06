import { DOM } from '../learn-dom.js';
import { store } from '../../store/store-repo.js';

export const renderFails = () => {

    if ('content' in document.createElement('template')) {

        const template = document.querySelector('.js-fails-template');
        const rptrFails = template.content.querySelector('.js-rptr-fails');
        
        const { score, items } = store.getState();

        DOM.headerTxt.innerHTML = 
            score.wrong === 1
                ? `You got ${score.wrong} question wrong:`
                : `You got ${score.wrong} questions wrong:`;
        DOM.rightHeader.style.backgroundColor = 'rgb(141, 0, 5)';

        const species = items
            .filter(item => R.contains(item.name, score.fails));

        species.forEach(sp => {
            const rectangle = document.createElement('div');
            rectangle.setAttribute('class', 'rectangle');            
            const answer = document.createElement('div');
            answer.setAttribute('id', sp.id);
            answer.setAttribute('class', 'answer');
            const name = document.createElement('p');
            name.textContent = sp.name;
            answer.appendChild(name);
            const thumb = document.createElement('img');
            thumb.setAttribute('class', 'thumb');
            thumb.src = sp.thumbs[1];
            answer.appendChild(thumb);
            rectangle.appendChild(answer);
            rptrFails.appendChild(rectangle);
        });        

        const clone = document.importNode(template.content, true);
        DOM.rightBody.innerHTML = '';
        DOM.rightBody.appendChild(clone);
    }
};