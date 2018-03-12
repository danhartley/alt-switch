import { utils } from '../../utils/utils.js';
import { DOM } from '../learn-dom.js';
import { store } from '../../store/store-repo.js';
import { types } from '../learn-types.js';

export const renderSpecimen = () => {

    if('content' in document.createElement('template')) {
        
        const template = document.querySelector('.js-specimen-template');

        const rptrSpecimen = template.content.querySelector('.js-rptr-specimen');
        
        let renderSpecimenImages = null;

        const renderImages = (specimenImages) => {
            const { strategy } = store.getState();
            const element = strategy.elements.filter(el => el.template === template.className)[0];
            let images = specimenImages;
            return () => {        
                let displayImages = R.take(4, utils.shuffleArray(images));        
                rptrSpecimen.innerHTML = displayImages.map(displayImages => {
                return `<div class="square">                            
                            <img src="${displayImages}" onError="this.src='https://lh3.googleusercontent.com/-w9gHw3gUIuRxpOMAjEqhLtwyj9znvCJbAgGWLzutQB1eWcpVtMXMuhiKNck4dpf1IxQVOYPMeVZbbfRU7g8fTZZu019Spiu4Vc84s1FxGr_JS9igG0pGcuUn8GCDL6ryuB92Ek00ON3lTHKaUYTD8Tt3-zw2CC8tr-tA0xbNpd4bg_GcxUzd9Y6d9MD0ps1OvysJaAZwb1319aGUCSVSVoXxPOi6bfBy8MeIrvFvbuQX-sRT58tXE_QzFoN2BdogUg9mesRyBpAknxhnNp3BhODD6sYEbXljXn-2Amk6cdzv95EEb5ZucSiRwtuaPyK-jpLchT2JrQQztftOP6JsiHbD_Dv7pib_PGN6faexLUmqVhil9OttpIjVwV8bFg7L9An3FMazrGrB3VpMCQ-v_Oz1M_4Ozw0HK6Iio93vURxJi_Wdh-3zr_rNgTcLHcVPRf9NWJ0otoPyNr732FfoRcnf6tTRwecfvIO57iobx7j9xBuzv5kMW6hWF3DhX7S1-PdcAJnWqVkvtaDXMIE8Qv9tRgWU4Es97876O8GBxhO0P9HTXATSLFAh0e3OAHo10jsfQcbMfSbpRKYqiLIddUe7Hx85bCaxY5d_6U=w978-h744-no';" />
                        </div>`; 
                }).join('');
                images = R.remove(0, 4, images);
                const clone = document.importNode(template.content, true);
                element.parent.innerHTML = '';
                element.parent.appendChild(clone);
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