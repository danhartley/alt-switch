
const grid = document.getElementById('grid');

const uri = 'http://localhost:8080/arb.json';

const treeMedia = specimen => specimen.media.map(medium => { return {id: specimen.key, format: medium.format, urL: medium.identifier} } );

// fetch(uri).then(res => res.json().then(arbutus => console.log(arbutus.filter(specimen => specimen.media).map(treeMedia)) ));

const subject = 'Quercus robur';
// const wiki = `https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${subject}}&limit=5`;
const wiki = `http://dbpedia.org/data/Matteo_Donati.json`;

// fetch(wiki).then(function(resp) {
//     console.log(resp);
//     return resp.json()
// }).then(function(data) {
//     console.log(data);
// });

// const imgUri = 'http://flora-on.pt/Chamaemelum-fuscatum_low_E9Mk.jpg';
//const imgUri = 'https://media.eol.org/content/2014/01/27/02/21692_98_68.jpg';
const jsonUri = ' http://eol.org/api/search/1.0.json?q=Chamaemelum+fuscatum&page=1&exact=false&filter_by_taxon_concept_id=&filter_by_hierarchy_entry_id=&filter_by_string=&cache_ttl=';
const fetchImgConfig = {mode: 'no-cors'};


const renderLabel = text => {
  const labelElem = document.createElement('label');  
  labelElem.innerHTML = text;
  container.appendChild(labelElem)
};

// const renderImage = observation => {
//   const src = observation.default_photo.url;  
//   const imgElem = document.createElement('img');
//   imgElem.setAttribute('id', 'cardImage');
//   container.appendChild(imgElem);
//   imgElem.src = src;
//   renderLabel(observation.name);
//   renderLabel(observation.preferred_common_name);
// };

const cards = [];

const renderCard = card => {
    const src = card.default_photo.url;  
    // const imgElem = document.createElement('img');
    // imgElem.setAttribute('id', 'cardImage');
    // container.appendChild(imgElem);
    imgElem = document.getElementById('cardImage');
    imgElem.src = src;
    renderLabel(card.name);
    renderLabel(card.preferred_common_name);
}

const pushToCard = specimen => {
  cards.push(specimen);
  let card = cards[0];
  if(cards.length === 1) {
    renderCard(card);
  }
};

const fetchJSON = (uri, config) => {
  fetch(uri, config)
    .then(res => res.json())
      .then(json => json.results)
      .then(observations => {
          let specimens = observations.filter(observation => (observation && observation.default_photo && observation.default_photo.url));
          //specimens.map(specimen => renderImage(specimen));        
          specimens.map(specimen => {
            let { name, preferred_common_name, default_photo: { url } } = specimen;
            let card = { name, preferred_common_name, default_photo: { url } };            
            pushToCard(card);
          });
        })
      .catch(error => console.error('Error:', error))
    };

// const fetchImage = (imgUri, fetchImgConfig) => {
//   fetch(imgUri, fetchImgConfig)
//     .then(function(response) {   
//       return response.blob();
//         }).then(function(blob) {
//           var objectURL = URL.createObjectURL(blob);
//           console.log(objectURL);
//           var container = document.getElementById('container');
//           var imgElem = document.createElement('img');          
//           container.appendChild(imgElem);        
//           imgElem.src = objectURL;          
//         });
// }

//fetchImage(imgUri, fetchImgConfig);

const config = { headers: new Headers({
  'Content-Type': 'application/json'
})}

// fetchJSON(jsonUri, {});

//INAT

const inat = 'https://api.inaturalist.org/v1/';
const inatTaxa = `${inat}taxa/autocomplete?q=`;

const flora = [ 
  'Erica erigena', 'Verbascum levanticum', 'Fumaria agraria', 'Rosmarinus officialis', 
  'Narcissus papyraceus', 'Iris planifolia',  'Polypodium interjectum', 'Chamaemelum fuscatum', 'Calendula arvensis'
]; //, 'Fraxinus angustifolia'

const encodeQuery = q => encodeURIComponent(q.trim());

// load into memory

flora.forEach(species => fetchJSON(`${inatTaxa}${encodeQuery(species)}`, config));

// show the first item


// Card flipper

$(document).ready(function(){
  let flipCard = $('#cardImage').asEventStream('click');

  flipCard
  .map(function(event) { 
    cards.pop();
    renderCard(cards[cards.length - 1]);
    console.log(cards[cards.length - 1]); return event.target 
  })
  .onValue(function(element) { console.log(element) })


  //$('#cardImage').asEventStream('click').map(function(event) { return $(event.target).val() }).toProperty("");  
  // $('#cardImage').asEventStream('click').log();
  // $('#cardImage').asEventStream('click').map(x => {
  //   console.log('clicked: ', x);
  //   cards.pop();
  //   renderCard(cards[0]);
  // });
  // flipCard.map(0).scan(0, function(index) {
  //   console.log('clicked!');
  //   cards.pop();
  //   renderCard(cards[index]);
  // });
  // flipCard.onValue(function() { alert("you clicked the h1 element") });
});
