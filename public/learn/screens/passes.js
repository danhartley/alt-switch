import { DOM } from '../learn-dom.js';
import { store } from '../../store/store-repo.js';
import { renderFails } from './fails.js';

export const renderPasses = () => {
    if ('content' in document.createElement('template')) {
        
        const passes = document.querySelector('#passes');
        const rptrPasses = passes.content.querySelector('#rptrPasses');
        const ul = document.createElement('ul');

        const { score } = store.getState();

        DOM.messageTxt.innerHTML = `You got ${score.correct} questions right:`;
        DOM.rightHeader.style.backgroundColor = 'rgb(44, 141, 86)';

        score.passes.forEach(pass => {
            const li = document.createElement('li');
            li.textContent = pass;
            ul.appendChild(li);            
        });
        
        rptrPasses.appendChild(ul);

        const clone = document.importNode(passes.content, true);
        DOM.rightBody.innerHTML = '';
        DOM.rightBody.appendChild(clone);

        setTimeout(()=>{
            renderFails();
        },5000);
    }
};