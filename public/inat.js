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

const cards = [];

const renderCard = card => {
    const imgElem = document.getElementById('image');
    imgElem.src = card[0].url;
    const labelElem = document.getElementById('name');  
    labelElem.innerHTML = card[0].name;
    const labelElem2 = document.getElementById('common');  
    labelElem2.innerHTML = card[0].common;
}

const encodeQuery = q => encodeURIComponent(q.trim());

const urls = february.map(species => `${inatTaxa}${encodeQuery(species)}`);

const promises = url => { return fetch(url).then(res => res.json()) };

const hasPhotos = observation => (observation.default_photo && observation.default_photo.medium_url);

const observationToCard = observations => { 
  return observations.map(observation => {
    let { name='', preferred_common_name: common='', default_photo: { medium_url: url='' } } = observation;            
    return { name, common, url};            
})};


// const deckGenerator = cards => {
//   let nextIndex = 0;
//   while(nextIndex < cards.length) {
//     yield cards[nextIndex++];
//   }
// };


let iterator;

const log = msg => { 
  return array => {
    console.log(msg, array); 
    return array; 
  }
};

const fetchFromInat = () =>
{
  Promise.all(urls.map(promises))
  .then(list => {
    const collections = list
      .map(list => list.results)
      .map(observations => { return observations.filter(hasPhotos)})
      .map(observationToCard)
      .filter(card => card.length > 0)
      .map(log('The set of filtered cards from inat: '))
      .map(card => cards.push(card));      
      iterator = cards[Symbol.iterator]();
      flipCard();
  });
}

const fetchFromLocal = () => {
  data
    .map(log('The set of filtered cards from local: '))
    .map(card => cards.push(card)); 
    iterator = cards[Symbol.iterator]();
    flipCard();
};

const flipCard = () => {
  let card = iterator.next();
  if(card.done) {
    iterator = cards[Symbol.iterator]();
    card = iterator.next();
  }        
  renderCard(card.value); 
};

$(document).ready(function(){
  //fetchFromInat();
  fetchFromLocal();
  const deck = $('#image').asEventStream('click');
  deck
    .map(function(event) {
      flipCard();
    })
  .onValue(function(element) { console.log(element) });
});
