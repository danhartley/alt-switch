import { utils } from '../../utils/utils.js';
import { DOM } from '../learn-dom.js';
import { store } from '../../store/store-repo.js';
import { types } from '../learn-types.js';

export const renderSpecimen = () => {

    if('content' in document.createElement('template')) {
        
        const specimen = document.querySelector('#specimen');

        const rptrSpecimen = specimen.content.querySelector('#rptrSpecimen');
        
        let renderSpecimenImages = null;

        const renderImages = (specimenImages) => {
            let images = specimenImages;
            return () => {        
                let displayImages = R.take(4, utils.shuffleArray(images));        
                rptrSpecimen.innerHTML = displayImages.map(displayImages => {
                return `<div class="square">
                            <img src="${displayImages}" onError="this.src='https://media.eol.org/content/2015/04/30/18/20117_orig.jpg';" />
                        </div>`; 
                }).join('');
                images = R.remove(0, 4, images);
                const clone = document.importNode(specimen.content, true);
                DOM.leftBody.innerHTML = '';
                DOM.leftBody.appendChild(clone);
            };
            // add event handler if these are answers instead of questions (or if questions, something else...)
        };

        const render = () => {
            const { type, item: { images } } = store.getState();
            if(type === types.NEXT_ITEM) {
                renderSpecimenImages = renderImages(images);
                renderSpecimenImages();
            }
        };

        store.subscribe(render);

        DOM.moreSpecimensBtn.addEventListener('click', () => {
            renderSpecimenImages();
        });
    }
}