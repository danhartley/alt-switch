import { DOM } from '../learn-dom.js';
import { store } from '../../store/store-repo.js';

export const renderFails = () => {
    if ('content' in document.createElement('template')) {

        const fails = document.querySelector('#fails');
        const rptrFails = fails.content.querySelector('#rptrFails');
        
        const { score, items } = store.getState();

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

        const clone = document.importNode(fails.content, true);
        DOM.rightGrid.innerHTML = '';
        DOM.rightGrid.appendChild(clone);
    }
};