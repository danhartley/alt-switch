import { inatCollections } from '../api/inat-lisbon-setubal.js';
import { utils } from '../utils/utils.js';

const inat = 'https://api.inaturalist.org/v1/';
const inatTaxa = `${inat}taxa/autocomplete?q=`;

const urls = inatCollections.february.map(species => `${inatTaxa}${utils.encodeQuery(species)}`);

const observationsWithPhotos = observations => { 
  return observations.filter(observation => (observation.default_photo && observation.default_photo.medium_url))
};
const observationsToCards = observations => { 
  return observations.map(observation => {
    let { id, name='', preferred_common_name: common='', default_photo: { medium_url: url='' } } = observation;
    return { id, name, common, url, language:'en' };
  });
};

const flattenObservations = observations => {
  return observations.map(
    observation => {
      const {id, name, language } = R.head(observations);
      const images = observations.map(obs => obs.url);
      const names = [ {language: 'en', vernacularName: observations[0].common}];
      return { id, name, language, images, names };
    });
}

export const fetchLiveDataFromInat = () => {
  return urls.map(url => {
    return fetch(url)
      .then(res => res.json()
      .then(res => res.results)
      .then(observationsWithPhotos)
      .then(observationsToCards)
      .then(flattenObservations)
      .then(obs => obs[0])
  )});
      
  };