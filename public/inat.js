const grid = document.getElementById('grid');

const inat = 'https://api.inaturalist.org/v1/';
const inatTaxa = `${inat}taxa/autocomplete?q=`;

const flora = [ 
  'Erica erigena', 'Verbascum levanticum', 'Fumaria agraria', 'Rosmarinus officialis'
  
];
//'Narcissus papyraceus', 'Iris planifolia',  'Polypodium interjectum', 'Chamaemelum fuscatum', 'Calendula arvensis'
//, 'Fraxinus angustifolia'

const cards = [];

const renderCard = card => {
    imgElem = document.getElementById('cardImage');
    imgElem.src = card.url;
}

const addCardToDeck = observation => {
    cards.push(observation);
    let card = cards[cards.length - 1];
    if(cards.length === 1) {
      renderCard(card);
    }
  };

  // const fetchObservations = (uri, config) => {
  //   fetch(uri, config)
  //     .then(res => res.json())
  //       .then(json => {
  //           let observations = json.results.filter(observation => (observation && observation.default_photo && observation.default_photo.url));
  //           observations.map(observation => {
  //             let { name='', preferred_common_name: common='', default_photo: { url } } = observation;            
  //             addCardToDeck({ name, common, url });
  //           });
  //         })
  //       .catch(error => console.error('Error:', error))
  //     };

      const fetchObservations = (uri) => {
        const promise = fetch(uri)
          .then(res => res.json());             
            const stream = Bacon.fromPromise(promise);
            return stream;
          };
  
const stream = new Bacon.Bus();

// stream
//   .flatMap(species => fetchObservations(species))
//   .map(json => {
//     let observations = json.results.filter(observation => (observation && observation.default_photo && observation.default_photo.url));
//         observations.map(observation => {
//           let { name='', preferred_common_name: common='', default_photo: { url } } = observation;            
//           addCardToDeck({ name, common, url});
//         });
//     return observations;
//   })
//   .onValue(observation => console.log('next observation is ', observation))

stream
  .flatMap(species => fetchObservations(species))
  // .map(json => {return json.results.filter(observation => (observation && observation.default_photo && observation.default_photo.url))})
  .map(observations => { 
          observations.map(observation => {
          let { name='', preferred_common_name: common='', default_photo: { url } } = observation;            
          addCardToDeck({ name, common, url});
        })
        return observations;  
      })
  .onValue(observation => console.log('next observation is ', observation))

const encodeQuery = q => encodeURIComponent(q.trim());

// load into memory

// flora.map(species => fetchObservations(`${inatTaxa}${encodeQuery(species)}`, {}));
flora.map(species => stream.push(`${inatTaxa}${encodeQuery(species)}`));

$(document).ready(function(){
    let flipCard = $('#cardImage').asEventStream('click');
    flipCard
    .map(function(event) { 
      console.log(cards[cards.length - 1]);
      if(cards.length > 0) {
        cards.pop();
      }      
      renderCard(cards[cards.length - 1]);
      console.log(cards[cards.length - 1]); return event.target 
    })
    .onValue(function(element) { console.log(element) });
  });
