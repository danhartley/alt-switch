import { DOM } from '../learn-dom.js';
import { store } from '../../store/store-repo.js';

export const renderPasses = () => {
    if ('content' in document.createElement('template')) {
        
        const passes = document.querySelector('#passes');
        const rptrPasses = passes.content.querySelector('#rptrPasses');
        const ul = document.createElement('ul');

        const { score } = store.getState();

        score.passes.forEach(pass => {
            const li = document.createElement('li');
            li.textContent = pass;
            ul.appendChild(li);            
        });
        
        rptrPasses.appendChild(ul);

        const clone = document.importNode(passes.content, true);
        DOM.rightGrid.innerHTML = '';
        DOM.rightGrid.appendChild(clone);
    }
};