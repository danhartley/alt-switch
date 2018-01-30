const log = msg => { 
  return array => {
    console.log(msg, array); 
    return array; 
  }
};

const grid = document.getElementById('grid');

const inat = 'https://api.inaturalist.org/v1/';
const inatTaxa = `${inat}taxa/autocomplete?q=`;

const flora = [ 
  'Narcissus papyraceus', 'Fumaria agraria'
];
//, 'Erica erigena', 'Verbascum levanticum', 'Rosmarinus officialis'
//'Narcissus papyraceus', 'Iris planifolia',  'Polypodium interjectum', 'Chamaemelum fuscatum', 'Calendula arvensis'
//, 'Fraxinus angustifolia'

//'Oxalis purpurea', 'Borago officinalis', 'Cistus monspeliensis', 'Veronica persica', 'Bellis perennis'

const february = [
  'Pinus pinea', 'Anemone palmata', 'Ranunculus  ficaria', 'Laurus nobilis', 'Lobularia maritima', 'Ulex densus', 'Stauracanthus genistoides',
  'Astragalus lusitanicus', 'Oxalis pes-caprae', 'Euphorbia characias', 'Euphorbia pedroi', 'Lavatera cretica'
]

//const dan = danObservations.map(observation => {return ({ id, scientific, common } = observation)}).map(log('Dan\'s observations'));

// results/community_taxon/taxon_photos

const encodeQuery = q => encodeURIComponent(q.trim());

const urls = february.map(species => `${inatTaxa}${encodeQuery(species)}`);

const promises = url => { return fetch(url).then(res => res.json()) };

const hasPhotos = observation => (observation.default_photo && observation.default_photo.medium_url);

const observationToCard = observations => { 
  return observations.map(observation => {
    let { name='', preferred_common_name: common='', default_photo: { medium_url: url='' } } = observation;            
    return { name, common, url};            
})};

export const fetchFromInat = () =>
{
  Promise.all(urls.map(promises))
  .then(list => {
    return list
      .map(list => list.results)
      .map(observations => { return observations.filter(hasPhotos)})
      .map(observationToCard)
      .filter(card => card.length > 0)
      .map(log('The set of filtered cards from inat: '));
  });
}

export const fetchFromLocal = () => {
  return data.map(log('The set of filtered cards from local: '));
};

