const grid = document.getElementById('grid');

const inat = 'https://api.inaturalist.org/v1/';
const inatTaxa = `${inat}taxa/autocomplete?q=`;

const flora = [ 
  'Narcissus papyraceus', 'Fumaria agraria', 'Erica erigena', 'Verbascum levanticum', 'Rosmarinus officialis'
];
//'Narcissus papyraceus', 'Iris planifolia',  'Polypodium interjectum', 'Chamaemelum fuscatum', 'Calendula arvensis'
//, 'Fraxinus angustifolia'

//'Oxalis purpurea', 'Borago officinalis', 'Cistus monspeliensis', 'Veronica persica', 'Bellis perennis'

const cards = [];

const renderCard = card => {
    imgElem = document.getElementById('cardImage');
    imgElem.src = card[0].url;
}

const fetchObservations = uri => {
  const promise = fetch(uri)
    .then(res => res.json());             
      const stream = Bacon.fromPromise(promise);
      return stream;
    };

const filterObservations = observation => (observation && observation.default_photo && observation.default_photo.url);
const createCardObservation = observations => { 
    return observations.map(observation => {
      let { name='', preferred_common_name: common='', default_photo: { url } } = observation;            
      return { name, common, url};            
  });
};

const stream = new Bacon.Bus();

const encodeQuery = q => encodeURIComponent(q.trim());

const urls = flora.map(species => `${inatTaxa}${encodeQuery(species)}`);
console.log(urls);

const promises = url => { return fetch(url).then(res => res.json()) };

const hasPhotos = observation => (observation.default_photo && observation.default_photo.url);

const observationToCard = observations => { 
  return observations.map(observation => {
    let { name='', preferred_common_name: common='', default_photo: { url } } = observation;            
    return { name, common, url};            
})};


// const deckGenerator = cards => {
//   let nextIndex = 0;
//   while(nextIndex < cards.length) {
//     yield cards[nextIndex++];
//   }
// };


let iterator;

Promise.all(urls.map(promises))
  .then(list => {
    const collections = list
      .map(list => list.results)
      .map(observations => { return observations.filter(hasPhotos)})
      .map(observationToCard)      
      .filter(card => card.length > 0)
      .map(card => cards.push(card));
      console.log(cards);
      iterator = cards[Symbol.iterator]();
      flipCard();
  });

const flipCard = () => {
  let card = iterator.next();
  if(card.done) {
    iterator = cards[Symbol.iterator]();
    card = iterator.next();
  }        
  renderCard(card.value); 
};

$(document).ready(function(){
    const deck = $('#cardImage').asEventStream('click');    
    deck
      .map(function(event) {
        flipCard();
      })
    .onValue(function(element) { console.log(element) });
  });
