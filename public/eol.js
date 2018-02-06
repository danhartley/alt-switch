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
        .filter(species => species.id === 578523 || species.id === 1247200)
        .map(species => {
            species.detailsUrl = createLookupUrl(species.id);
            return species;
        });
    };

const btnEOL = document.getElementById('eol');
btnEOL.onclick = getEOLSpeciesData;

export const fetchLiveDataFromEOL = (collection) => {
    return collection.map(collectionItem => {
        return fetch(collectionItem.detailsUrl)
        .then(res => res.json())
        .then(results => {
            return results.dataObjects
                .filter(item => item.mediaURL || item.eolMediaURL)
                .map(media => {                
                    let { eolMediaURL: url } = media;
                    var currCollection = {...collectionItem, ...{ url }};              
                    return currCollection;
                });
            });            
    });
};

const create = document.getElementById('create');

create.addEventListener('click', function () {
let blob = new Blob([JSON.stringify(allCollections, null, 2)], {type : 'application/json'});
let myBlobUrl = URL.createObjectURL(blob);
var link = document.getElementById('downloadlink');
link.href = myBlobUrl;
link.style.display = 'block';
}, false);

// "vernacularNames": [
//     {
//       "vernacularName": "Italienische Steinkiefer",
//       "language": "de"
//     }
// dataObjects with : mediaURL, eolMediaURL

