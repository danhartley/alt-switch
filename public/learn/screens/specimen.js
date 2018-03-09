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
            };

            // add event handler if these are answers instead of questions (or if questions, something else...)
        };

        const renderSpecimens = () => {
            // which images? could be random images from different species...
            // which would mean using the items collection and taking an image from each at random + one, random item image.
            const { type, item: { images } } = store.getState();
            if(type === types.NEXT_ITEM) {
                renderSpecimenImages = renderImages(images);
                renderSpecimenImages();
            }
            const clone = document.importNode(specimen.content, true);

            DOM.leftBody.innerHTML = '';
            DOM.leftBody.appendChild(clone);
        };

        store.subscribe(renderSpecimens);

        DOM.moreSpecimensBtn.addEventListener('click', () => {
            renderSpecimenImages();
        });
    }
}