import { utils } from '../utils/utils.js';
import { tejo } from '../api/eol-dan-vale-do-tejo.js';

const createLookupUrl = id => {
    return `http://eol.org/api/pages/1.0.json?
    batch=false&id=${utils.encodeQuery(id)}&images_per_page=10&images_page=1
    &videos_per_page=0&videos_page=0&sounds_per_page=0&sounds_page=0&maps_per_page=0
    &maps_page=0&texts_per_page=1&texts_page=1&subjects=overview&licenses=all
    &details=true&common_names=true&synonyms=false&references=false&taxonomy=false&vetted=0&cache_ttl=&language=en`;
};

let speciesUrls = [];
let eolCollection = tejo[0].collection_items
    .map(item => ({ id: item.object_id, name: item.name }));

export const getEOLSpeciesData = () => {    
    return eolCollection
    .filter(species => species.id === 578523 || species.id === 1247200 || species.id === 586697)
    .map(species => {
        species.detailsUrl = createLookupUrl(species.id);
        return species;
    });
};

export const fetchLiveDataFromEOL = (collection) => {
    return collection.map(collectionItem => {
        return fetch(collectionItem.detailsUrl)
        .then(res => res.json())
        .then(results => {
                const imagesCollection = results.dataObjects
                    .filter(item => item.mediaURL || item.eolMediaURL)
                    .map(media => media.eolMediaURL);
                const namesCollection = results.vernacularNames
                    .filter(item => 
                        item.language === 'en' ||
                        item.language === 'fr' ||
                        item.language === 'es' ||
                        item.language === 'pt-BR' ||
                        item.language === 'de' ||
                        item.language === 'de' ||
                        item.language === 'it' ||
                        item.language === 'ar' ||
                        item.language === 'zh'
                    );
                return { id: collectionItem.id,  name: collectionItem.name, images: imagesCollection, names: namesCollection };
            });            
    });
};

