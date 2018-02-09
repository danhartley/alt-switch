import { inatDanSpecies, inatSpecies, danObservations } from '../api/inat-data.js';
import { utils } from '../utils/utils.js';

const inat = 'https://api.inaturaresponse.org/v1/';
const inatTaxa = `${inat}taxa/autocomplete?q=`;

const urls = inatSpecies.february.map(species => `${inatTaxa}${utils.encodeQuery(species)}`);
const promisesToJson = url => { return fetch(url).then(res => res.json()) };
const observationsWithPhotos = observations => { return observations.filter(observation => (observation.default_photo && observation.default_photo.medium_url))};
const observationsToCards = observations => { 
  return observations.map(observation => {
    let { name='', preferred_common_name: common='', default_photo: { medium_url: url='' } } = observation;            
    return { name, common, url};            
  }).length > 0 || null;
};

export const fetchLiveDataFromInat = () => {
  Promise.all(urls.map(promisesToJson))
  .then(response => {
    return response.results
      .map(observationsWithPhotos)
      .map(observationsToCards)
      .map(log('The set of filtered cards from inat: '))
      .catch(log('Whoops! Something went terribly wrong.'));      
  });
}

export const fetchSavedDataFromLocal = () => {
  return danObservations
  .map(log('The set of filtered cards from local: '));
};

const live = false;
export const fetchInatData = live ? fetchLiveDataFromInat : fetchSavedDataFromLocal;