// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({22:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var inatSpecies = exports.inatSpecies = [[{
  "name": "Ficaria verna",
  "common": "Lesser celandine",
  "url": "https://farm1.staticflickr.com/176/436981696_6ec532a59a.jpg"
}, {
  "name": "Ficaria verna ficariiformis",
  "common": "",
  "url": "https://static.inaturalist.org/photos/281805/medium.jpg?1444712582"
}, {
  "name": "Ficaria verna verna",
  "common": "",
  "url": "https://static.inaturalist.org/photos/1868672/medium.jpg?1431983490"
}, {
  "name": "Ficaria verna fertilis",
  "common": "",
  "url": "https://static.inaturalist.org/photos/6775453/medium.jpg?1490783502"
}], [{
  "name": "Narcissus papyraceus",
  "common": "Paperwhite",
  "url": "https://farm9.staticflickr.com/8339/8186151274_e5a22292d8.jpg"
}], [{
  "name": "Narcissus papyraceus papyraceus",
  "common": "",
  "url": "https://static.inaturalist.org/photos/282726/medium.jpg?1444713986"
}], [{
  "name": "Narcissus papyraceus panizzianus",
  "common": "",
  "url": "https://static.inaturalist.org/photos/282357/medium.jpg?1444713298"
}], [{
  "name": "Pinus pinea",
  "common": "Stone pine",
  "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Pinien_La_Brena2004.jpg/500px-Pinien_La_Brena2004.jpg"
}], [{
  "name": "Anemone palmata",
  "common": "Palmate Anemone",
  "url": "https://static.inaturalist.org/photos/1608886/medium.jpg?1425892576"
}], [{
  "name": "Laurus nobilis",
  "common": "Bay laurel",
  "url": "https://farm4.staticflickr.com/3140/2420904621_f7d431b303.jpg"
}], [{
  "name": "Lobularia maritima",
  "common": "Sweet alyssum",
  "url": "https://static.inaturalist.org/photos/662500/medium.jpg?1391503562"
}, {
  "name": "Lobularia maritima maritima",
  "common": "",
  "url": "https://static.inaturalist.org/photos/12684178/medium.jpg?1514926743"
}], [{
  "name": "Ulex densus",
  "common": "",
  "url": "https://farm4.staticflickr.com/3077/2550720663_568269f705.jpg"
}], [{
  "name": "Ulex genistoides",
  "common": "",
  "url": "http://media.eol.org/content/2012/03/19/02/02402_580_360.jpg"
}], [{
  "name": "Erophaca baetica baetica",
  "common": "",
  "url": "https://static.inaturalist.org/photos/281464/medium.jpg?1444712305"
}, {
  "name": "Erophaca baetica",
  "common": "Iberian Milkvetch",
  "url": "https://farm8.staticflickr.com/7162/6726810035_13295eeee3.jpg"
}], [{
  "name": "Oxalis pes-caprae",
  "common": "Bermuda-buttercup",
  "url": "https://farm1.staticflickr.com/111/290289365_a8b82162e2.jpg"
}, {
  "name": "Oxalis pes-caprae pes-caprae",
  "common": "",
  "url": "https://static.inaturalist.org/photos/6235770/medium.jpg?1486628025"
}], [{
  "name": "Euphorbia characias",
  "common": "Mediterranean spurge",
  "url": "https://farm9.staticflickr.com/8214/8345956527_f7698794ab.jpg"
}, {
  "name": "Euphorbia characias wulfenii",
  "common": "Wulfen spurge",
  "url": "https://farm8.staticflickr.com/7051/6954204544_864254c97f.jpg"
}, {
  "name": "Euphorbia characias characias",
  "common": "",
  "url": "https://static.inaturalist.org/photos/723698/medium.jpg?1444488478"
}], [{
  "name": "Euphorbia pedroi",
  "common": "",
  "url": "https://farm2.staticflickr.com/1567/26015312913_d92ef63fe9.jpg"
}], [{
  "name": "Malva multiflora",
  "common": "Cretan Tree-mallow",
  "url": "https://static.inaturalist.org/photos/6257363/medium.jpg?1486866908"
}]];

var danObservations = exports.danObservations = [{
  "id": 352803,
  "link": "http://www.inaturalist.org/observations/352803",
  "iurl": "https://static.inaturalist.org/photos/439868/medium.jpg?1444624389",
  "guess": "Spanish Broom",
  "scientific": "Spartium junceum",
  "common": "Spanish Broom",
  "species_id": 47406
}, {
  "id": 363309,
  "link": "http://www.inaturalist.org/observations/363309",
  "iurl": "https://static.inaturalist.org/photos/453620/medium.jpg?1444637341",
  "guess": "Lesser Periwinkle",
  "scientific": "Vinca minor",
  "common": "lesser periwinkle",
  "species_id": 55844
}, {
  "id": 379450,
  "link": "http://www.inaturalist.org/observations/379450",
  "iurl": "https://static.inaturalist.org/photos/479379/medium.jpg?1377951916",
  "guess": "Sophora japonica",
  "scientific": "Styphnolobium japonicum",
  "common": "pagoda tree",
  "species_id": 53945
}, {
  "id": 379451,
  "link": "http://www.inaturalist.org/observations/379451",
  "iurl": "",
  "guess": "Ombú",
  "scientific": "Phytolacca dioica",
  "common": "Ombu",
  "species_id": 129582
}, {
  "id": 379452,
  "link": "http://www.inaturalist.org/observations/379452",
  "iurl": "https://static.inaturalist.org/photos/479378/medium.jpg?1377951915",
  "guess": "Jacaranda",
  "scientific": "Jacaranda mimosifolia",
  "common": "jacaranda",
  "species_id": 77541
}, {
  "id": 379453,
  "link": "http://www.inaturalist.org/observations/379453",
  "iurl": "",
  "guess": "Black Locust",
  "scientific": "Robinia pseudoacacia",
  "common": "black locust",
  "species_id": 56088
}, {
  "id": 379461,
  "link": "http://www.inaturalist.org/observations/379461",
  "iurl": "",
  "guess": "Rose of Sharon",
  "scientific": "Hibiscus syriacus",
  "common": "common hibiscus",
  "species_id": 126585
}, {
  "id": 379462,
  "link": "http://www.inaturalist.org/observations/379462",
  "iurl": "",
  "guess": "Lacebark Kurrajong",
  "scientific": "Brachychiton populneus",
  "common": "Kurrajong",
  "species_id": 349248
}, {
  "id": 379463,
  "link": "http://www.inaturalist.org/observations/379463",
  "iurl": "",
  "guess": "Cherry-plum",
  "scientific": "Prunus cerasifera",
  "common": "Cherry-plum",
  "species_id": 55837
}, {
  "id": 379464,
  "link": "http://www.inaturalist.org/observations/379464",
  "iurl": "",
  "guess": "golden wreath wattle",
  "scientific": "Acacia saligna",
  "common": "golden wreath wattle",
  "species_id": 75255
}, {
  "id": 379465,
  "link": "http://www.inaturalist.org/observations/379465",
  "iurl": "",
  "guess": "goldenrain tree",
  "scientific": "Koelreuteria paniculata",
  "common": "goldenrain tree",
  "species_id": 58320
}, {
  "id": 379489,
  "link": "http://www.inaturalist.org/observations/379489",
  "iurl": "https://static.inaturalist.org/photos/479983/medium.jpg?1377985460",
  "guess": "nettle-tree",
  "scientific": "Celtis australis",
  "common": "Nettle tree",
  "species_id": 76202
}, {
  "id": 379490,
  "link": "http://www.inaturalist.org/observations/379490",
  "iurl": "",
  "guess": "Avocado",
  "scientific": "Persea americana",
  "common": "Avocado",
  "species_id": 62831
}, {
  "id": 379504,
  "link": "http://www.inaturalist.org/observations/379504",
  "iurl": "",
  "guess": "Peruvian peppertree",
  "scientific": "Schinus molle",
  "common": "Peruvian peppertree",
  "species_id": 57354
}, {
  "id": 379595,
  "link": "http://www.inaturalist.org/observations/379595",
  "iurl": "https://static.inaturalist.org/photos/474782/medium.JPG?1377617032",
  "guess": "Platanus × hispanica",
  "scientific": "Platanus × hispanica",
  "common": "London Plane",
  "species_id": 552449
}, {
  "id": 379695,
  "link": "http://www.inaturalist.org/observations/379695",
  "iurl": "",
  "guess": "Platanus × hispanica",
  "scientific": "Platanus × hispanica",
  "common": "London Plane",
  "species_id": 552449
}, {
  "id": 383985,
  "link": "http://www.inaturalist.org/observations/383985",
  "iurl": "https://static.inaturalist.org/photos/479980/medium.jpg?1377985435",
  "guess": "Alzina",
  "scientific": "Quercus ilex",
  "common": "Holm oak",
  "species_id": 78805
}, {
  "id": 383986,
  "link": "http://www.inaturalist.org/observations/383986",
  "iurl": "https://static.inaturalist.org/photos/479984/medium.jpg?1377985462",
  "guess": "Tipuana tipu",
  "scientific": "Tipuana tipu",
  "common": "Pride of Bolivia",
  "species_id": 121263
}, {
  "id": 383987,
  "link": "http://www.inaturalist.org/observations/383987",
  "iurl": "https://static.inaturalist.org/photos/479987/medium.jpg?1377985491",
  "guess": "Chinese parasol tree",
  "scientific": "Firmiana simplex",
  "common": "Chinese parasol tree",
  "species_id": 162991
}, {
  "id": 383988,
  "link": "http://www.inaturalist.org/observations/383988",
  "iurl": "https://static.inaturalist.org/photos/479986/medium.jpg?1377985490",
  "guess": "Tilia europaea",
  "scientific": "",
  "common": "",
  "species_id": ""
}, {
  "id": 383989,
  "link": "http://www.inaturalist.org/observations/383989",
  "iurl": "",
  "guess": "Tipuanu tipu",
  "scientific": "",
  "common": "",
  "species_id": ""
}, {
  "id": 384814,
  "link": "http://www.inaturalist.org/observations/384814",
  "iurl": "https://static.inaturalist.org/photos/480933/medium.jpg?1378055829",
  "guess": "Silver Lime",
  "scientific": "Tilia tomentosa",
  "common": "Silver Lime",
  "species_id": 143800
}, {
  "id": 384815,
  "link": "http://www.inaturalist.org/observations/384815",
  "iurl": "https://static.inaturalist.org/photos/480934/medium.jpg?1378055848",
  "guess": "Parrotia persica",
  "scientific": "",
  "common": "",
  "species_id": ""
}, {
  "id": 384816,
  "link": "http://www.inaturalist.org/observations/384816",
  "iurl": "https://static.inaturalist.org/photos/480931/medium.jpg?1378055802",
  "guess": "Judas-tree",
  "scientific": "Cercis siliquastrum",
  "common": "Judas-tree",
  "species_id": 153440
}, {
  "id": 384817,
  "link": "http://www.inaturalist.org/observations/384817",
  "iurl": "https://static.inaturalist.org/photos/480932/medium.jpg?1378055804",
  "guess": "Mule Fat",
  "scientific": "Baccharis salicifolia",
  "common": "mule fat",
  "species_id": 57913
}, {
  "id": 384818,
  "link": "http://www.inaturalist.org/observations/384818",
  "iurl": "https://static.inaturalist.org/photos/480930/medium.jpg?1378055782",
  "guess": "Coast Redwood",
  "scientific": "Sequoia sempervirens",
  "common": "coast redwood",
  "species_id": 47372
}, {
  "id": 384819,
  "link": "http://www.inaturalist.org/observations/384819",
  "iurl": "https://static.inaturalist.org/photos/480935/medium.jpg?1378055854",
  "guess": "Pomegranate",
  "scientific": "Punica granatum",
  "common": "Pomegranate",
  "species_id": 58300
}, {
  "id": 384820,
  "link": "http://www.inaturalist.org/observations/384820",
  "iurl": "https://static.inaturalist.org/photos/480936/medium.jpg?1378055872",
  "guess": "carob tree",
  "scientific": "Ceratonia siliqua",
  "common": "carob tree",
  "species_id": 82742
}, {
  "id": 384821,
  "link": "http://www.inaturalist.org/observations/384821",
  "iurl": "https://static.inaturalist.org/photos/480940/medium.jpg?1378055910",
  "guess": "Olivier",
  "scientific": "Olea europaea",
  "common": "Olive",
  "species_id": 57140
}, {
  "id": 384822,
  "link": "http://www.inaturalist.org/observations/384822",
  "iurl": "https://static.inaturalist.org/photos/480943/medium.jpg?1378055934",
  "guess": "Pin d'Alep",
  "scientific": "Pinus halepensis",
  "common": "Aleppo pine",
  "species_id": 82722
}, {
  "id": 384823,
  "link": "http://www.inaturalist.org/observations/384823",
  "iurl": "https://static.inaturalist.org/photos/480945/medium.jpg?1378055950",
  "guess": "Mediterranean Fan Palm",
  "scientific": "Chamaerops humilis",
  "common": "Mediterranean fan palm",
  "species_id": 132759
}, {
  "id": 384824,
  "link": "http://www.inaturalist.org/observations/384824",
  "iurl": "https://static.inaturalist.org/photos/480947/medium.jpg?1378055977",
  "guess": "Tamarix canariensis",
  "scientific": "Tamarix canariensis",
  "common": "",
  "species_id": 56016
}, {
  "id": 384825,
  "link": "http://www.inaturalist.org/observations/384825",
  "iurl": "https://static.inaturalist.org/photos/481534/medium.jpg?1378071920",
  "guess": "pi pinyer",
  "scientific": "Pinus pinea",
  "common": "Stone pine",
  "species_id": 63621
}];

var flora = ['Narcissus papyraceus', 'Fumaria agraria'];
//, 'Erica erigena', 'Verbascum levanticum', 'Rosmarinus officialis'
//'Narcissus papyraceus', 'Iris planifolia',  'Polypodium interjectum', 'Chamaemelum fuscatum', 'Calendula arvensis'
//, 'Fraxinus angustifolia'

//'Oxalis purpurea', 'Borago officinalis', 'Cistus monspeliensis', 'Veronica persica', 'Bellis perennis'

var february = ['Pinus pinea', 'Anemone palmata', 'Ranunculus  ficaria', 'Laurus nobilis', 'Lobularia maritima', 'Ulex densus', 'Stauracanthus genistoides', 'Astragalus lusitanicus', 'Oxalis pes-caprae', 'Euphorbia characias', 'Euphorbia pedroi', 'Lavatera cretica'];

//const dan = danObservations.map(observation => {return ({ id, scientific, common } = observation)}).map(log('Dan\'s observations'));

// results/community_taxon/taxon_photos


var inatCollections = exports.inatCollections = {
  flora: flora,
  february: february
};
},{}],20:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Array.prototype.concatAll = function () {
  var results = [];

  this.forEach(function (subArray) {
    subArray.forEach(function (element) {
      results.push(element);
    });
  });

  return results;
};

var log = function log(msg) {
  return function (array) {
    console.log(msg, array);
    return array;
  };
};

var encodeQuery = function encodeQuery(q) {
  if (q === undefined) return q;
  if (Number.isInteger(q)) return q;
  return encodeURIComponent(q.trim());
};

var timer = function timer(sink, delay) {
  var id = null;
  Bacon.fromBinder(function () {
    id = setInterval(function () {
      sink();
    }, delay);
  }).onValue(function (element) {
    console.log(element);
  });
  return id;
};

function intervalTimer(sink, delay) {
  var timerId;

  this.pause = function () {
    window.clearInterval(timerId);
  };

  this.resume = function () {
    window.clearInterval(timerId);
    timerId = timer(sink, delay);
  };

  this.getId = function () {
    return timerId;
  };

  this.resume();

  return this;
};

var shuffleArray = function shuffleArray(arr) {
  return arr.map(function (a) {
    return [Math.random(), a];
  }).sort(function (a, b) {
    return a[0] - b[0];
  }).map(function (a) {
    return a[1];
  });
};

var randomiseSelection = function randomiseSelection(source, required) {
  var zeroBased = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var randomSelection = [];
  var randomArray = shuffleArray(source);

  var r = function r(randomSelection) {
    return randomSelection.concat(randomArray.map(function (item, index) {
      while (index + randomSelection.length < required) {
        return zeroBased ? --item : item;
      }
    })).filter(function (el) {
      return el !== undefined;
    });
  };

  randomSelection = r(randomSelection);

  return randomSelection.length < required ? r(randomSelection) : randomSelection;
};

var nextItem = function nextItem(array, index) {
  var item = array[index % array.length];
  item.index = index % array.length;
  return item;
};

var combineReducers = function combineReducers(reducers) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    return Object.keys(reducers).reduce(function (nextState, key) {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};

var utils = exports.utils = {
  log: log,
  encodeQuery: encodeQuery,
  timer: timer,
  intervalTimer: intervalTimer,
  shuffleArray: shuffleArray,
  nextItem: nextItem,
  combineReducers: combineReducers,
  randomiseSelection: randomiseSelection
};
},{}],14:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchLiveDataFromInat = undefined;

var _inatLisbonSetubal = require('../api/inat-lisbon-setubal.js');

var _utils = require('../utils/utils.js');

var inat = 'https://api.inaturalist.org/v1/';
var inatTaxa = inat + 'taxa/autocomplete?q=';

var urls = _inatLisbonSetubal.inatCollections.february.map(function (species) {
  return '' + inatTaxa + _utils.utils.encodeQuery(species);
});

var observationsWithPhotos = function observationsWithPhotos(observations) {
  return observations.filter(function (observation) {
    return observation.default_photo && observation.default_photo.medium_url;
  });
};
var observationsToCards = function observationsToCards(observations) {
  return observations.map(function (observation) {
    var id = observation.id,
        _observation$name = observation.name,
        name = _observation$name === undefined ? '' : _observation$name,
        _observation$preferre = observation.preferred_common_name,
        common = _observation$preferre === undefined ? '' : _observation$preferre,
        _observation$default_ = observation.default_photo.medium_url,
        url = _observation$default_ === undefined ? '' : _observation$default_;

    return { id: id, name: name, common: common, url: url, language: 'en' };
  });
};

var flattenObservations = function flattenObservations(observations) {
  return observations.map(function (observation) {
    var _R$head = R.head(observations),
        id = _R$head.id,
        name = _R$head.name,
        language = _R$head.language;

    var images = observations.map(function (obs) {
      return obs.url;
    });
    var names = [{ language: 'en', vernacularName: observations[0].common }];
    return { id: id, name: name, language: language, images: images, names: names };
  });
};

var fetchLiveDataFromInat = exports.fetchLiveDataFromInat = function fetchLiveDataFromInat() {
  return urls.map(function (url) {
    return fetch(url).then(function (res) {
      return res.json().then(function (res) {
        return res.results;
      }).then(observationsWithPhotos).then(observationsToCards).then(flattenObservations).then(function (obs) {
        return obs[0];
      });
    });
  });
};
},{"../api/inat-lisbon-setubal.js":22,"../utils/utils.js":20}],19:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tejoSpecies = exports.tejoSpecies = [
// {
//   "id": 5235143,
//   "name": "Scabiosa atropurpurea var. maritima",
//   "images": [
//     "http://media.eol.org/content/2011/10/16/02/11603_orig.jpg"
//   ],
//   "names": [
//     {
//       "vernacularName": "Scabieuse maritime",
//       "language": "fr",
//       "eol_preferred": true
//     }
//   ],
//   "thumbs": [
//     "http://media.eol.org/content/2011/10/16/02/11603_98_68.jpg"
//   ]
// },
{
  "id": 579419,
  "name": "Salvia verbenaca L.",
  "images": ["http://media.eol.org/content/2014/08/15/05/05968_orig.jpg", "http://media.eol.org/content/2014/08/15/03/05940_orig.jpg", "http://media.eol.org/content/2014/08/15/04/79684_orig.jpg", "http://media.eol.org/content/2014/08/15/04/14658_orig.jpg", "http://media.eol.org/content/2014/08/15/05/06119_orig.jpg", "http://media.eol.org/content/2014/08/15/05/31654_orig.jpg", "http://media.eol.org/content/2014/08/14/23/34279_orig.jpg", "http://media.eol.org/content/2014/08/15/03/05940_orig.jpg", "http://media.eol.org/content/2014/08/15/04/15007_orig.jpg", "http://media.eol.org/content/2011/10/16/02/86933_orig.jpg"],
  "names": [{
    "vernacularName": "ثعلبه (ثَعلبه)",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "verbena sage",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Small sage",
    "language": "en"
  }, {
    "vernacularName": "Vervain Sage",
    "language": "en"
  }, {
    "vernacularName": "Wild Clary",
    "language": "en"
  }, {
    "vernacularName": "wild sage",
    "language": "en"
  }, {
    "vernacularName": "Sauge fausse-verveine",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Erva-crista",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "Jarvão",
    "language": "pt"
  }, {
    "vernacularName": "Salva-dos-caminhos",
    "language": "pt"
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/08/15/05/05968_98_68.jpg", "http://media.eol.org/content/2014/08/15/03/05940_98_68.jpg", "http://media.eol.org/content/2014/08/15/04/79684_98_68.jpg", "http://media.eol.org/content/2014/08/15/04/14658_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/06119_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/31654_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/34279_98_68.jpg", "http://media.eol.org/content/2014/08/15/03/05940_98_68.jpg", "http://media.eol.org/content/2014/08/15/04/15007_98_68.jpg", "http://media.eol.org/content/2011/10/16/02/86933_98_68.jpg"]
}, {
  "id": 467862,
  "name": "Cichorium intybus L.",
  "images": ["http://media.eol.org/content/2015/03/25/18/53312_orig.jpg", "http://media.eol.org/content/2013/12/02/08/50759_orig.jpg", "http://media.eol.org/content/2014/01/02/01/47115_orig.jpg", "http://media.eol.org/content/2011/10/15/22/36692_orig.jpg", "http://media.eol.org/content/2011/10/15/22/72505_orig.jpg", "http://media.eol.org/content/2011/10/15/22/07639_orig.jpg", "http://media.eol.org/content/2011/10/15/22/83468_orig.jpg", "http://media.eol.org/content/2011/10/15/22/64572_orig.jpg", "http://media.eol.org/content/2011/10/15/22/47953_orig.jpg", "http://media.eol.org/content/2011/10/15/22/48800_orig.jpg"],
  "names": [{
    "vernacularName": "hinduba",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "shikorieh",
    "language": "ar"
  }, {
    "vernacularName": "Wegwarte",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "chickory",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Coffee Chicory",
    "language": "en"
  }, {
    "vernacularName": "Common Cichory",
    "language": "en"
  }, {
    "vernacularName": "French endive",
    "language": "en"
  }, {
    "vernacularName": "Radicchio",
    "language": "en"
  }, {
    "vernacularName": "Wild Chicory",
    "language": "en"
  }, {
    "vernacularName": "blue sailors",
    "language": "en"
  }, {
    "vernacularName": "blueweed",
    "language": "en"
  }, {
    "vernacularName": "chicory",
    "language": "en"
  }, {
    "vernacularName": "coffeeweed",
    "language": "en"
  }, {
    "vernacularName": "common chicory",
    "language": "en"
  }, {
    "vernacularName": "succory",
    "language": "en"
  }, {
    "vernacularName": "witloof",
    "language": "en"
  }, {
    "vernacularName": "achicoria agreste",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "achicoria amargo",
    "language": "es"
  }, {
    "vernacularName": "radicheta",
    "language": "es"
  }, {
    "vernacularName": "Chicorée sauvages",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Barbe-de-capucin",
    "language": "fr"
  }, {
    "vernacularName": "Chicorée frisée",
    "language": "fr"
  }, {
    "vernacularName": "Chicorée glabre",
    "language": "fr"
  }, {
    "vernacularName": "Chicorée sauvage",
    "language": "fr"
  }, {
    "vernacularName": "Chicorée à café",
    "language": "fr"
  }, {
    "vernacularName": "chicoree",
    "language": "fr"
  }, {
    "vernacularName": "chicoree amere",
    "language": "fr"
  }, {
    "vernacularName": "chicorée bleue",
    "language": "fr"
  }, {
    "vernacularName": "chicorée commune",
    "language": "fr"
  }, {
    "vernacularName": "chicorée cultivée",
    "language": "fr"
  }, {
    "vernacularName": "chicorée ordinaire",
    "language": "fr"
  }, {
    "vernacularName": "Radicchio",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "Cicoria comune",
    "language": "it"
  }, {
    "vernacularName": "cicoria a foglia",
    "language": "it"
  }, {
    "vernacularName": "cicoria de taglia",
    "language": "it"
  }, {
    "vernacularName": "cicoria selvatica",
    "language": "it"
  }, {
    "vernacularName": "radicchia",
    "language": "it"
  }, {
    "vernacularName": "菊苣",
    "language": "zh",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2015/03/25/18/53312_98_68.jpg", "http://media.eol.org/content/2013/12/02/08/50759_98_68.jpg", "http://media.eol.org/content/2014/01/02/01/47115_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/36692_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/72505_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/07639_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/83468_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/64572_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/47953_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/48800_98_68.jpg"]
}, {
  "id": 578523,
  "name": "Veronica persica Poir.",
  "images": ["http://media.eol.org/content/2012/05/24/04/66519_orig.jpg", "http://media.eol.org/content/2013/09/02/03/23230_orig.jpg", "http://media.eol.org/content/2011/10/16/03/40259_orig.jpg", "http://media.eol.org/content/2011/10/16/03/94002_orig.jpg", "http://media.eol.org/content/2011/10/16/03/06795_orig.jpg", "http://media.eol.org/content/2011/10/16/03/68561_orig.jpg", "http://media.eol.org/content/2011/10/16/03/35253_orig.jpg", "http://media.eol.org/content/2011/10/16/03/99865_orig.jpg", "http://media.eol.org/content/2011/10/16/03/45059_orig.jpg", "http://media.eol.org/content/2011/10/16/03/25243_orig.jpg"],
  "names": [{
    "vernacularName": "عكاش (عَكاش)",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "حبق (حَبَق)، عشب المويه (عَشْب المويه)",
    "language": "ar"
  }, {
    "vernacularName": "Persischer Ehrenpreis",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "birdeye speedwell",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Bird's Eye Speedwell",
    "language": "en"
  }, {
    "vernacularName": "Bird's-eye speedwell",
    "language": "en"
  }, {
    "vernacularName": "Buxbaum's speedwell",
    "language": "en"
  }, {
    "vernacularName": "Common Field Speedwell",
    "language": "en"
  }, {
    "vernacularName": "Perscians' Speedwell",
    "language": "en"
  }, {
    "vernacularName": "Persian speedwell",
    "language": "en"
  }, {
    "vernacularName": "bird-eye speedwell",
    "language": "en"
  }, {
    "vernacularName": "birdseye speedwell",
    "language": "en"
  }, {
    "vernacularName": "field speedwell",
    "language": "en"
  }, {
    "vernacularName": "winter speedwell",
    "language": "en"
  }, {
    "vernacularName": "Véronique officinale, Herbe aux ladres",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Véronique de Perse",
    "language": "fr"
  }, {
    "vernacularName": "Véronique filiforme",
    "language": "fr"
  }, {
    "vernacularName": "Véronique à feuilles de lierre",
    "language": "fr"
  }, {
    "vernacularName": "Veronica comune",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "波斯婆婆纳",
    "language": "zh",
    "eol_preferred": true
  }, {
    "vernacularName": "阿拉伯婆婆纳",
    "language": "zh"
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/05/24/04/66519_98_68.jpg", "http://media.eol.org/content/2013/09/02/03/23230_98_68.jpg", "http://media.eol.org/content/2011/10/16/03/40259_98_68.jpg", "http://media.eol.org/content/2011/10/16/03/94002_98_68.jpg", "http://media.eol.org/content/2011/10/16/03/06795_98_68.jpg", "http://media.eol.org/content/2011/10/16/03/68561_98_68.jpg", "http://media.eol.org/content/2011/10/16/03/35253_98_68.jpg", "http://media.eol.org/content/2011/10/16/03/99865_98_68.jpg", "http://media.eol.org/content/2011/10/16/03/45059_98_68.jpg", "http://media.eol.org/content/2011/10/16/03/25243_98_68.jpg"]
}, {
  "id": 1247200,
  "name": "Digitalis purpurea subsp. purpurea L.",
  "images": ["http://media.eol.org/content/2012/08/11/23/26631_orig.jpg", "http://media.eol.org/content/2012/08/11/23/48436_orig.jpg", "http://media.eol.org/content/2012/08/11/23/83329_orig.jpg", "http://media.eol.org/content/2015/04/30/00/15186_orig.jpg", "http://media.eol.org/content/2015/04/30/00/30694_orig.jpg", "http://media.eol.org/content/2015/04/30/00/54694_orig.jpg", "http://media.eol.org/content/2011/11/01/21/02220_orig.jpg", "http://media.eol.org/content/2015/04/30/09/28316_orig.jpg", "http://media.eol.org/content/2012/08/11/23/35287_orig.jpg", "http://media.eol.org/content/2012/08/20/00/83108_orig.jpg"],
  "names": [{
    "vernacularName": "Rote Fingerhut",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "purple foxglove",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "dedalera",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "digital",
    "language": "es"
  }, {
    "vernacularName": "Digitale pourpre",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Grande Digitale",
    "language": "fr"
  }, {
    "vernacularName": "Dedaleira",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "campainha",
    "language": "pt"
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/08/11/23/26631_98_68.jpg", "http://media.eol.org/content/2012/08/11/23/48436_98_68.jpg", "http://media.eol.org/content/2012/08/11/23/83329_98_68.jpg", "http://media.eol.org/content/2015/04/30/00/15186_98_68.jpg", "http://media.eol.org/content/2015/04/30/00/30694_98_68.jpg", "http://media.eol.org/content/2015/04/30/00/54694_98_68.jpg", "http://media.eol.org/content/2011/11/01/21/02220_98_68.jpg", "http://media.eol.org/content/2015/04/30/09/28316_98_68.jpg", "http://media.eol.org/content/2012/08/11/23/35287_98_68.jpg", "http://media.eol.org/content/2012/08/20/00/83108_98_68.jpg"]
}, {
  "id": 483777,
  "name": "Acanthus mollis L.",
  "images": ["http://media.eol.org/content/2014/08/15/05/34142_orig.jpg", "http://media.eol.org/content/2014/08/15/04/01405_orig.jpg", "http://media.eol.org/content/2014/08/15/05/65106_orig.jpg", "http://media.eol.org/content/2012/12/11/14/16283_orig.jpg", "http://media.eol.org/content/2012/12/11/14/97709_orig.jpg", "http://media.eol.org/content/2012/12/11/14/44539_orig.jpg", "http://media.eol.org/content/2012/10/31/14/80629_orig.jpg", "http://media.eol.org/content/2012/10/31/15/86766_orig.jpg", "http://media.eol.org/content/2012/10/31/03/37185_orig.jpg", "http://media.eol.org/content/2012/10/31/05/16925_orig.jpg"],
  "names": [{
    "vernacularName": "Pracht-Bärenklau",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Echte Bärenklaue",
    "language": "de"
  }, {
    "vernacularName": "Pracht-Akanthus",
    "language": "de"
  }, {
    "vernacularName": "Prachtakanthus",
    "language": "de"
  }, {
    "vernacularName": "Wahrer Bärenklau",
    "language": "de"
  }, {
    "vernacularName": "Weichblättrige Bärenklaue",
    "language": "de"
  }, {
    "vernacularName": "Weiche Bärenklaue",
    "language": "de"
  }, {
    "vernacularName": "Weicher Bärenklau",
    "language": "de"
  }, {
    "vernacularName": "Bear's breeches",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "artist's acanthus",
    "language": "en"
  }, {
    "vernacularName": "bear's breech",
    "language": "en"
  }, {
    "vernacularName": "sea-dock",
    "language": "en"
  }, {
    "vernacularName": "sea-holly",
    "language": "en"
  }, {
    "vernacularName": "Acanto",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Ala de ángel",
    "language": "es"
  }, {
    "vernacularName": "Acanthe à feuilles molles, Acanthe molle",
    "language": "fr",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/08/15/05/34142_98_68.jpg", "http://media.eol.org/content/2014/08/15/04/01405_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/65106_98_68.jpg", "http://media.eol.org/content/2012/12/11/14/16283_98_68.jpg", "http://media.eol.org/content/2012/12/11/14/97709_98_68.jpg", "http://media.eol.org/content/2012/12/11/14/44539_98_68.jpg", "http://media.eol.org/content/2012/10/31/14/80629_98_68.jpg", "http://media.eol.org/content/2012/10/31/15/86766_98_68.jpg", "http://media.eol.org/content/2012/10/31/03/37185_98_68.jpg", "http://media.eol.org/content/2012/10/31/05/16925_98_68.jpg"]
}, {
  "id": 578491,
  "name": "Veronica arvensis L.",
  "images": ["http://media.eol.org/content/2012/05/24/04/42615_orig.jpg", "http://media.eol.org/content/2013/12/02/08/35176_orig.jpg", "http://media.eol.org/content/2012/12/16/15/32338_orig.jpg", "http://media.eol.org/content/2012/12/04/19/35422_orig.jpg", "http://media.eol.org/content/2012/12/04/19/25202_orig.jpg", "http://media.eol.org/content/2012/12/04/19/25599_orig.jpg", "http://media.eol.org/content/2012/12/04/19/92980_orig.jpg", "http://media.eol.org/content/2012/12/04/19/15893_orig.jpg", "http://media.eol.org/content/2012/12/04/19/46351_orig.jpg", "http://media.eol.org/content/2012/12/04/19/29783_orig.jpg"],
  "names": [{
    "vernacularName": "Feld-Ehrenpreis",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "corn speedwell",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "common speedwell",
    "language": "en"
  }, {
    "vernacularName": "rock speedwell",
    "language": "en"
  }, {
    "vernacularName": "wall speedwell",
    "language": "en"
  }, {
    "vernacularName": "Véronique des champs",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Véronique des champs, Velvote sauvage",
    "language": "fr"
  }, {
    "vernacularName": "Veronica dei campi",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "直立婆婆纳",
    "language": "zh",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/05/24/04/42615_98_68.jpg", "http://media.eol.org/content/2013/12/02/08/35176_98_68.jpg", "http://media.eol.org/content/2012/12/16/15/32338_98_68.jpg", "http://media.eol.org/content/2012/12/04/19/35422_98_68.jpg", "http://media.eol.org/content/2012/12/04/19/25202_98_68.jpg", "http://media.eol.org/content/2012/12/04/19/25599_98_68.jpg", "http://media.eol.org/content/2012/12/04/19/92980_98_68.jpg", "http://media.eol.org/content/2012/12/04/19/15893_98_68.jpg", "http://media.eol.org/content/2012/12/04/19/46351_98_68.jpg", "http://media.eol.org/content/2012/12/04/19/29783_98_68.jpg"]
}, {
  "id": 580760,
  "name": "Anchusa azurea Mill.",
  "images": ["http://media.eol.org/content/2014/08/15/03/39797_orig.jpg", "http://media.eol.org/content/2014/08/15/03/24713_orig.jpg", "http://media.eol.org/content/2014/08/15/03/40057_orig.jpg", "http://media.eol.org/content/2011/10/15/21/25766_orig.jpg", "http://media.eol.org/content/2011/10/15/21/00666_orig.jpg", "http://media.eol.org/content/2011/10/15/21/95023_orig.jpg", "http://media.eol.org/content/2011/10/15/21/87332_orig.jpg", "http://media.eol.org/content/2011/10/15/21/36870_orig.jpg", "http://media.eol.org/content/2011/10/15/21/76759_orig.jpg", "http://media.eol.org/content/2011/10/15/21/51066_orig.jpg"],
  "names": [{
    "vernacularName": "Italienische Ochsenzunge",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Italian bugloss",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Garden Anchusa",
    "language": "en"
  }, {
    "vernacularName": "Italian alkanet",
    "language": "en"
  }, {
    "vernacularName": "Large blue alkanet",
    "language": "en"
  }, {
    "vernacularName": "alkanet",
    "language": "en"
  }, {
    "vernacularName": "bugloss",
    "language": "en"
  }, {
    "vernacularName": "buglosa",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Buglosse d'Italie, Buglosse azurée",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Língua-de-vaca",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "牛舌草",
    "language": "zh",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/08/15/03/39797_98_68.jpg", "http://media.eol.org/content/2014/08/15/03/24713_98_68.jpg", "http://media.eol.org/content/2014/08/15/03/40057_98_68.jpg", "http://media.eol.org/content/2011/10/15/21/25766_98_68.jpg", "http://media.eol.org/content/2011/10/15/21/00666_98_68.jpg", "http://media.eol.org/content/2011/10/15/21/95023_98_68.jpg", "http://media.eol.org/content/2011/10/15/21/87332_98_68.jpg", "http://media.eol.org/content/2011/10/15/21/36870_98_68.jpg", "http://media.eol.org/content/2011/10/15/21/76759_98_68.jpg", "http://media.eol.org/content/2011/10/15/21/51066_98_68.jpg"]
}, {
  "id": 703392,
  "name": "Trifolium campestre Schreb.",
  "images": ["http://media.eol.org/content/2014/12/02/15/66286_orig.jpg", "http://media.eol.org/content/2014/08/15/03/46976_orig.jpg", "http://media.eol.org/content/2014/08/14/23/11878_orig.jpg", "http://media.eol.org/content/2014/08/14/23/11878_orig.jpg", "http://media.eol.org/content/2014/08/15/00/22522_orig.jpg", "http://media.eol.org/content/2014/08/15/04/29963_orig.jpg", "http://media.eol.org/content/2014/08/15/04/29963_orig.jpg", "http://media.eol.org/content/2014/08/14/23/33295_orig.jpg", "http://media.eol.org/content/2014/08/14/23/33295_orig.jpg", "http://media.eol.org/content/2015/01/08/06/81573_orig.jpg"],
  "names": [{
    "vernacularName": "قرط (قُرط)، قدب (قَدْب)، قرض (قَرَض)",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "قداب (قَدَاب)، جدوب (جَدّوب)",
    "language": "ar"
  }, {
    "vernacularName": "Acker-Klee",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Yellow Hop Clover",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Acker Klee",
    "language": "en"
  }, {
    "vernacularName": "Feld Klee",
    "language": "en"
  }, {
    "vernacularName": "Field (Big-hop) clover",
    "language": "en"
  }, {
    "vernacularName": "Hop Trefoil",
    "language": "en"
  }, {
    "vernacularName": "Smaller Hop Clover",
    "language": "en"
  }, {
    "vernacularName": "TrÉfle Des Champs",
    "language": "en"
  }, {
    "vernacularName": "big hop clover",
    "language": "en"
  }, {
    "vernacularName": "field clover",
    "language": "en"
  }, {
    "vernacularName": "hop clover",
    "language": "en"
  }, {
    "vernacularName": "large hop clover",
    "language": "en"
  }, {
    "vernacularName": "lesser hop clover",
    "language": "en"
  }, {
    "vernacularName": "low hop clover",
    "language": "en"
  }, {
    "vernacularName": "pinnate hop clover",
    "language": "en"
  }, {
    "vernacularName": "Trèfle Des Champs",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Trèfle champêtre, Trèfle jaune, Trance",
    "language": "fr"
  }, {
    "vernacularName": "Trèfle doré, Trèfle agraire",
    "language": "fr"
  }, {
    "vernacularName": "Trèfle à petites fleurs",
    "language": "fr"
  }, {
    "vernacularName": "Trèfle étalé",
    "language": "fr"
  }, {
    "vernacularName": "Trevão",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "Trevo-amarelo",
    "language": "pt"
  }, {
    "vernacularName": "草原车轴草",
    "language": "zh",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/12/02/15/66286_98_68.jpg", "http://media.eol.org/content/2014/08/15/03/46976_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/11878_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/11878_98_68.jpg", "http://media.eol.org/content/2014/08/15/00/22522_98_68.jpg", "http://media.eol.org/content/2014/08/15/04/29963_98_68.jpg", "http://media.eol.org/content/2014/08/15/04/29963_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/33295_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/33295_98_68.jpg", "http://media.eol.org/content/2015/01/08/06/81573_98_68.jpg"]
}, {
  "id": 487222,
  "name": "Fumaria capreolata L.",
  "images": ["http://media.eol.org/content/2014/08/15/00/86806_orig.jpg", "http://media.eol.org/content/2012/05/23/13/12391_orig.jpg", "http://media.eol.org/content/2012/05/23/13/30040_orig.jpg", "http://media.eol.org/content/2014/10/07/15/54224_orig.jpg", "http://media.eol.org/content/2014/10/07/15/37340_orig.jpg", "http://media.eol.org/content/2012/03/22/04/06064_orig.jpg", "http://media.eol.org/content/2012/03/22/04/07354_orig.jpg", "http://media.eol.org/content/2011/10/15/23/50328_orig.jpg", "http://media.eol.org/content/2011/10/15/23/32598_orig.jpg", "http://media.eol.org/content/2011/10/15/23/67556_orig.jpg"],
  "names": [{
    "vernacularName": "white ramping fumitory",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "fumitory",
    "language": "en"
  }, {
    "vernacularName": "Fumeterre de Bastard",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Fumeterre grimpante, Fumeterre capréolée",
    "language": "fr"
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/08/15/00/86806_98_68.jpg", "http://media.eol.org/content/2012/05/23/13/12391_98_68.jpg", "http://media.eol.org/content/2012/05/23/13/30040_98_68.jpg", "http://media.eol.org/content/2014/10/07/15/54224_98_68.jpg", "http://media.eol.org/content/2014/10/07/15/37340_98_68.jpg", "http://media.eol.org/content/2012/03/22/04/06064_98_68.jpg", "http://media.eol.org/content/2012/03/22/04/07354_98_68.jpg", "http://media.eol.org/content/2011/10/15/23/50328_98_68.jpg", "http://media.eol.org/content/2011/10/15/23/32598_98_68.jpg", "http://media.eol.org/content/2011/10/15/23/67556_98_68.jpg"]
}, {
  "id": 467843,
  "name": "Bellis perennis L.",
  "images": ["http://media.eol.org/content/2010/03/24/04/51869_orig.jpg", "http://media.eol.org/content/2012/06/13/04/47623_orig.jpg", "http://media.eol.org/content/2012/06/13/04/45649_orig.jpg", "http://media.eol.org/content/2012/06/13/04/53382_orig.jpg", "http://media.eol.org/content/2012/12/04/19/22990_orig.jpg", "http://media.eol.org/content/2012/12/04/19/84435_orig.jpg", "http://media.eol.org/content/2012/06/12/23/81560_orig.jpg", "http://media.eol.org/content/2011/10/15/22/98642_orig.jpg", "http://media.eol.org/content/2011/10/15/22/92864_orig.jpg", "http://media.eol.org/content/2011/10/15/22/52653_orig.jpg"],
  "names": [{
    "vernacularName": "Massliebchen",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Ausdauerndes Gänseblümchen",
    "language": "de"
  }, {
    "vernacularName": "Gänseblümchen",
    "language": "de"
  }, {
    "vernacularName": "Maßliebchen",
    "language": "de"
  }, {
    "vernacularName": "Mehrjähriges Gänseblümchen",
    "language": "de"
  }, {
    "vernacularName": "Müllerblümchen",
    "language": "de"
  }, {
    "vernacularName": "Tausendschön",
    "language": "de"
  }, {
    "vernacularName": "daisy",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Bruisewort",
    "language": "en"
  }, {
    "vernacularName": "Common Daisy",
    "language": "en"
  }, {
    "vernacularName": "English daisy",
    "language": "en"
  }, {
    "vernacularName": "European daisy",
    "language": "en"
  }, {
    "vernacularName": "lawn daisy",
    "language": "en"
  }, {
    "vernacularName": "lawn-daisy",
    "language": "en"
  }, {
    "vernacularName": "lawndaisy",
    "language": "en"
  }, {
    "vernacularName": "Margarita",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Chirivita",
    "language": "es"
  }, {
    "vernacularName": "bellorita",
    "language": "es"
  }, {
    "vernacularName": "Pâquerette",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Pâquerette des bois, Pâquerette d'Automne",
    "language": "fr"
  }, {
    "vernacularName": "Pâquerette vivace",
    "language": "fr"
  }, {
    "vernacularName": "Pratolina comune",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "bellide",
    "language": "it"
  }, {
    "vernacularName": "margherite",
    "language": "it"
  }, {
    "vernacularName": "pratolina",
    "language": "it"
  }, {
    "vernacularName": "雏菊",
    "language": "zh",
    "eol_preferred": true
  }, {
    "vernacularName": "延命菊",
    "language": "zh"
  }, {
    "vernacularName": "马兰头花",
    "language": "zh"
  }],
  "thumbs": [null, "http://media.eol.org/content/2010/03/24/04/51869_98_68.jpg", "http://media.eol.org/content/2012/06/13/04/47623_98_68.jpg", "http://media.eol.org/content/2012/06/13/04/45649_98_68.jpg", "http://media.eol.org/content/2012/06/13/04/53382_98_68.jpg", "http://media.eol.org/content/2012/12/04/19/22990_98_68.jpg", "http://media.eol.org/content/2012/12/04/19/84435_98_68.jpg", "http://media.eol.org/content/2012/06/12/23/81560_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/98642_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/92864_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/52653_98_68.jpg"]
}, {
  "id": 586697,
  "name": "Malva multiflora (Cav.) Soldano, Banfi & Galasso",
  "images": ["http://media.eol.org/content/2014/08/15/05/23499_orig.jpg", "http://media.eol.org/content/2014/08/15/05/28426_orig.jpg", "http://media.eol.org/content/2014/08/15/05/82107_orig.jpg", "http://media.eol.org/content/2014/08/15/05/91239_orig.jpg", "http://media.eol.org/content/2014/08/15/05/00202_orig.jpg", "http://media.eol.org/content/2015/01/08/06/15933_orig.jpg", "http://media.eol.org/content/2015/01/08/04/98584_orig.jpg", "http://media.eol.org/content/2015/08/11/22/48719_orig.jpg", "http://media.eol.org/content/2012/01/24/03/75524_orig.jpg", "http://media.eol.org/content/2012/01/24/03/17374_orig.jpg"],
  "names": [{
    "vernacularName": "Cretan Tree-mallow",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Cornish mallow",
    "language": "en"
  }, {
    "vernacularName": "Lavatère de Crète",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Malva-bastarda",
    "language": "pt",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/08/15/05/23499_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/28426_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/82107_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/91239_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/00202_98_68.jpg", "http://media.eol.org/content/2015/01/08/06/15933_98_68.jpg", "http://media.eol.org/content/2015/01/08/04/98584_98_68.jpg", "http://media.eol.org/content/2015/08/11/22/48719_98_68.jpg", "http://media.eol.org/content/2012/01/24/03/75524_98_68.jpg", "http://media.eol.org/content/2012/01/24/03/17374_98_68.jpg"]
}, {
  "id": 1230687,
  "name": "Coronilla valentina subsp. glauca (L.) Batt.",
  "images": ["http://media.eol.org/content/2014/08/15/03/42708_orig.jpg", "http://media.eol.org/content/2014/08/15/05/67730_orig.jpg", "http://media.eol.org/content/2014/08/15/03/35511_orig.jpg", "http://media.eol.org/content/2015/05/20/11/98009_orig.jpg", "http://media.eol.org/content/2014/03/18/01/17979_orig.jpg", "http://media.eol.org/content/2015/08/11/22/43411_orig.jpg", "http://media.eol.org/content/2014/06/10/15/32667_orig.jpg", "http://media.eol.org/content/2014/06/10/15/84107_orig.jpg", "http://media.eol.org/content/2014/06/10/15/53494_orig.jpg", "http://media.eol.org/content/2014/10/05/17/77721_orig.jpg"],
  "names": [{
    "vernacularName": "Mediterranean crownvetch",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Coronille glauque",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Pascoinhas",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "Serra-do-reino",
    "language": "pt"
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/08/15/03/42708_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/67730_98_68.jpg", "http://media.eol.org/content/2014/08/15/03/35511_98_68.jpg", "http://media.eol.org/content/2015/05/20/11/98009_98_68.jpg", "http://media.eol.org/content/2014/03/18/01/17979_98_68.jpg", "http://media.eol.org/content/2015/08/11/22/43411_98_68.jpg", "http://media.eol.org/content/2014/06/10/15/32667_98_68.jpg", "http://media.eol.org/content/2014/06/10/15/84107_98_68.jpg", "http://media.eol.org/content/2014/06/10/15/53494_98_68.jpg", "http://media.eol.org/content/2014/10/05/17/77721_98_68.jpg"]
}, {
  "id": 40488428,
  "name": "Lysimachia foemina (Mill.) U.Manns & Anderb., 2009",
  "images": ["http://media.eol.org/content/2014/10/05/07/87121_orig.jpg", "http://media.eol.org/content/2014/10/05/07/64878_orig.jpg", "http://media.eol.org/content/2014/10/05/08/17396_orig.jpg", "http://media.eol.org/content/2014/10/06/01/06068_orig.jpg", "http://media.eol.org/content/2014/10/06/04/89846_orig.jpg", "http://media.eol.org/content/2014/10/06/02/51711_orig.jpg", "http://media.eol.org/content/2014/10/06/02/93664_orig.jpg", "http://media.eol.org/content/2014/10/06/02/09488_orig.jpg", "http://media.eol.org/content/2014/10/06/02/80751_orig.jpg", "http://media.eol.org/content/2014/10/05/22/97261_orig.jpg"],
  "names": [{
    "vernacularName": "Blaue Gauchheil",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "poorman's weatherglass",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Mouron bleu",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Aveia-doida",
    "language": "pt",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/10/05/07/87121_98_68.jpg", "http://media.eol.org/content/2014/10/05/07/64878_98_68.jpg", "http://media.eol.org/content/2014/10/05/08/17396_98_68.jpg", "http://media.eol.org/content/2014/10/06/01/06068_98_68.jpg", "http://media.eol.org/content/2014/10/06/04/89846_98_68.jpg", "http://media.eol.org/content/2014/10/06/02/51711_98_68.jpg", "http://media.eol.org/content/2014/10/06/02/93664_98_68.jpg", "http://media.eol.org/content/2014/10/06/02/09488_98_68.jpg", "http://media.eol.org/content/2014/10/06/02/80751_98_68.jpg", "http://media.eol.org/content/2014/10/05/22/97261_98_68.jpg"]
}, {
  "id": 702952,
  "name": "Bituminaria bituminosa (L.) C. H. Stirt.",
  "images": ["http://media.eol.org/content/2014/08/15/02/70025_orig.jpg", "http://media.eol.org/content/2011/10/16/02/50847_orig.jpg", "http://media.eol.org/content/2011/10/16/02/26537_orig.jpg", "http://media.eol.org/content/2011/10/16/02/00491_orig.jpg", "http://media.eol.org/content/2011/10/16/02/14412_orig.jpg", "http://media.eol.org/content/2011/10/16/02/38820_orig.jpg", "http://media.eol.org/content/2011/10/16/02/17481_orig.jpg", "http://media.eol.org/content/2011/10/16/02/35655_orig.jpg", "http://media.eol.org/content/2011/10/16/02/64631_orig.jpg", "http://media.eol.org/content/2012/05/23/23/41708_orig.jpg"],
  "names": [{
    "vernacularName": "ذوينات الفار، اذينات الفار (أذينات الفار)",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "جطياط (جِطياط)، جدياى",
    "language": "ar"
  }, {
    "vernacularName": "دوين الفار(دُوين الفار)، ذب الفار",
    "language": "ar"
  }, {
    "vernacularName": "دُوين الفار، ذان الفار",
    "language": "ar"
  }, {
    "vernacularName": "Arabian pea",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Arabian Scurfpea",
    "language": "en"
  }, {
    "vernacularName": "Tedera",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Trèfle bitumeux, Trèfle bitumineux",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Trevo-betuminoso",
    "language": "pt",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/08/15/02/70025_98_68.jpg", "http://media.eol.org/content/2011/10/16/02/50847_98_68.jpg", "http://media.eol.org/content/2011/10/16/02/26537_98_68.jpg", "http://media.eol.org/content/2011/10/16/02/00491_98_68.jpg", "http://media.eol.org/content/2011/10/16/02/14412_98_68.jpg", "http://media.eol.org/content/2011/10/16/02/38820_98_68.jpg", "http://media.eol.org/content/2011/10/16/02/17481_98_68.jpg", "http://media.eol.org/content/2011/10/16/02/35655_98_68.jpg", "http://media.eol.org/content/2011/10/16/02/64631_98_68.jpg", "http://media.eol.org/content/2012/05/23/23/41708_98_68.jpg"]
}, {
  "id": 5133070,
  "name": "Campanula erinus L.",
  "images": ["http://media.eol.org/content/2015/01/08/05/43733_orig.jpg", "http://media.eol.org/content/2011/10/15/22/98305_orig.jpg", "http://media.eol.org/content/2011/10/15/22/50962_orig.jpg", "http://media.eol.org/content/2011/10/15/22/14677_orig.jpg", "http://media.eol.org/content/2011/10/15/22/46025_orig.jpg", "http://media.eol.org/content/2011/10/15/22/74048_orig.jpg", "http://media.eol.org/content/2011/10/15/22/87186_orig.jpg", "http://media.eol.org/content/2011/10/15/22/65421_orig.jpg", "http://media.eol.org/content/2014/02/13/18/47254_orig.jpg", "http://media.eol.org/content/2012/06/15/16/77480_orig.jpg"],
  "names": [{
    "vernacularName": "Campanule érinus, Campanule à petites fleurs",
    "language": "fr",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2015/01/08/05/43733_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/98305_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/50962_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/14677_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/46025_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/74048_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/87186_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/65421_98_68.jpg", "http://media.eol.org/content/2014/02/13/18/47254_98_68.jpg", "http://media.eol.org/content/2012/06/15/16/77480_98_68.jpg"]
}, {
  "id": 582447,
  "name": "Oxalis corniculata L.",
  "images": ["http://media.eol.org/content/2016/08/02/16/01376_orig.jpg", "http://media.eol.org/content/2011/10/16/01/79893_orig.jpg", "http://media.eol.org/content/2012/12/05/19/26605_orig.jpg", "http://media.eol.org/content/2012/11/18/08/63409_orig.jpg", "http://media.eol.org/content/2012/10/30/22/56801_orig.jpg", "http://media.eol.org/content/2012/07/07/08/66311_orig.jpg", "http://media.eol.org/content/2012/06/06/14/79153_orig.jpg", "http://media.eol.org/content/2012/06/06/14/30087_orig.jpg", "http://media.eol.org/content/2012/06/06/14/58234_orig.jpg", "http://media.eol.org/content/2012/06/06/14/99184_orig.jpg"],
  "names": [{
    "vernacularName": "حمد (حَمْد)، حميض (حُمِّيض)",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "Horn-Sauerklee",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "creeping woodsorrel",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "'ihi",
    "language": "en"
  }, {
    "vernacularName": "Creeping Wood Sorrel",
    "language": "en"
  }, {
    "vernacularName": "Creeping sorrel",
    "language": "en"
  }, {
    "vernacularName": "Creeping wood-sorrel",
    "language": "en"
  }, {
    "vernacularName": "Inda",
    "language": "en"
  }, {
    "vernacularName": "Indian Sorrel",
    "language": "en"
  }, {
    "vernacularName": "Jimson Weed",
    "language": "en"
  }, {
    "vernacularName": "Yellow sorrel",
    "language": "en"
  }, {
    "vernacularName": "creeping oxalis",
    "language": "en"
  }, {
    "vernacularName": "creeping woods",
    "language": "en"
  }, {
    "vernacularName": "creeping yellow wood sorrel",
    "language": "en"
  }, {
    "vernacularName": "yellow oxalis",
    "language": "en"
  }, {
    "vernacularName": "yellow wood sorrel",
    "language": "en"
  }, {
    "vernacularName": "Oxalide corniculée",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Oxalis corniculé, Trèfle jaune",
    "language": "fr"
  }, {
    "vernacularName": "Oxalis cornu",
    "language": "fr"
  }, {
    "vernacularName": "Oxalis corniculata",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "carpigna",
    "language": "it"
  }, {
    "vernacularName": "酢浆草",
    "language": "zh",
    "eol_preferred": true
  }, {
    "vernacularName": "酸味草",
    "language": "zh"
  }, {
    "vernacularName": "酸醋酱",
    "language": "zh"
  }, {
    "vernacularName": "鸠酸",
    "language": "zh"
  }],
  "thumbs": [null, "http://media.eol.org/content/2016/08/02/16/01376_98_68.jpg", "http://media.eol.org/content/2011/10/16/01/79893_98_68.jpg", "http://media.eol.org/content/2012/12/05/19/26605_98_68.jpg", "http://media.eol.org/content/2012/11/18/08/63409_98_68.jpg", "http://media.eol.org/content/2012/10/30/22/56801_98_68.jpg", "http://media.eol.org/content/2012/07/07/08/66311_98_68.jpg", "http://media.eol.org/content/2012/06/06/14/79153_98_68.jpg", "http://media.eol.org/content/2012/06/06/14/30087_98_68.jpg", "http://media.eol.org/content/2012/06/06/14/58234_98_68.jpg", "http://media.eol.org/content/2012/06/06/14/99184_98_68.jpg"]
}, {
  "id": 5838420,
  "name": "Dactylis glomerata subsp. hispanica",
  "images": ["http://media.eol.org/content/2011/10/15/23/67360_orig.jpg", "http://media.eol.org/content/2014/08/15/04/56148_orig.jpg", "http://media.eol.org/content/2011/10/15/23/21663_orig.jpg", "http://media.eol.org/content/2011/10/15/23/22171_orig.jpg", "http://media.eol.org/content/2011/10/15/23/44765_orig.jpg", "http://media.eol.org/content/2011/10/15/23/49362_orig.jpg", "http://media.eol.org/content/2011/10/15/23/22266_orig.jpg", "http://media.eol.org/content/2011/10/15/23/63240_orig.jpg", "http://media.eol.org/content/2011/10/15/23/84699_orig.jpg", "http://media.eol.org/content/2011/10/15/23/32626_orig.jpg"],
  "names": [{
    "vernacularName": "Cock's-foot",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "orchard grass",
    "language": "en"
  }, {
    "vernacularName": "Dactyle d'Espagne",
    "language": "fr",
    "eol_preferred": true
  }],
  "thumbs": ["http://media.eol.org/content/2011/10/15/23/67360_98_68.jpg", "http://media.eol.org/content/2014/08/15/04/56148_98_68.jpg", "http://media.eol.org/content/2011/10/15/23/21663_98_68.jpg", "http://media.eol.org/content/2011/10/15/23/22171_98_68.jpg", "http://media.eol.org/content/2011/10/15/23/44765_98_68.jpg", "http://media.eol.org/content/2011/10/15/23/49362_98_68.jpg", "http://media.eol.org/content/2011/10/15/23/22266_98_68.jpg", "http://media.eol.org/content/2011/10/15/23/63240_98_68.jpg", "http://media.eol.org/content/2011/10/15/23/84699_98_68.jpg", "http://media.eol.org/content/2011/10/15/23/32626_98_68.jpg"]
}, {
  "id": 579215,
  "name": "Plantago lanceolata L.",
  "images": ["http://media.eol.org/content/2012/05/23/22/41131_orig.jpg", "http://media.eol.org/content/2012/08/02/03/05003_orig.jpg", "http://media.eol.org/content/2012/12/05/06/19518_orig.jpg", "http://media.eol.org/content/2009/07/24/03/08141_orig.jpg", "http://media.eol.org/content/2012/05/23/22/69557_orig.jpg", "http://media.eol.org/content/2012/05/23/22/68940_orig.jpg", "http://media.eol.org/content/2012/05/23/22/55552_orig.jpg", "http://media.eol.org/content/2012/05/23/22/13729_orig.jpg", "http://media.eol.org/content/2012/05/23/22/05297_orig.jpg", "http://media.eol.org/content/2012/05/23/22/70822_orig.jpg"],
  "names": [{
    "vernacularName": "Spitz-Wegerich",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Ribwort Plantain",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "English plantain",
    "language": "en"
  }, {
    "vernacularName": "Spitzwegerich",
    "language": "en"
  }, {
    "vernacularName": "buckhorn plantain",
    "language": "en"
  }, {
    "vernacularName": "lanceleaf indianwheat",
    "language": "en"
  }, {
    "vernacularName": "lanceleaf plantain",
    "language": "en"
  }, {
    "vernacularName": "narrow-leaved plantain",
    "language": "en"
  }, {
    "vernacularName": "narrowleaf plantain",
    "language": "en"
  }, {
    "vernacularName": "plantain",
    "language": "en"
  }, {
    "vernacularName": "ribgrass",
    "language": "en"
  }, {
    "vernacularName": "ribwort",
    "language": "en"
  }, {
    "vernacularName": "llantén menor",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Plantain lancéolé",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Plantain intermédiaire",
    "language": "fr"
  }, {
    "vernacularName": "Plantain lancéolé, Herbe aux cinq coutures",
    "language": "fr"
  }, {
    "vernacularName": "Plantain très élevé",
    "language": "fr"
  }, {
    "vernacularName": "Arnoglossa",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "Piantaggine lanciuola",
    "language": "it"
  }, {
    "vernacularName": "lanciuola",
    "language": "it"
  }, {
    "vernacularName": "Língua-de-ovelha",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "长叶车前",
    "language": "zh",
    "eol_preferred": true
  }, {
    "vernacularName": "披针叶车前",
    "language": "zh"
  }, {
    "vernacularName": "欧车前",
    "language": "zh"
  }, {
    "vernacularName": "窄叶车前",
    "language": "zh"
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/05/23/22/41131_98_68.jpg", "http://media.eol.org/content/2012/08/02/03/05003_98_68.jpg", "http://media.eol.org/content/2012/12/05/06/19518_98_68.jpg", "http://media.eol.org/content/2009/07/24/03/08141_98_68.jpg", "http://media.eol.org/content/2012/05/23/22/69557_98_68.jpg", "http://media.eol.org/content/2012/05/23/22/68940_98_68.jpg", "http://media.eol.org/content/2012/05/23/22/55552_98_68.jpg", "http://media.eol.org/content/2012/05/23/22/13729_98_68.jpg", "http://media.eol.org/content/2012/05/23/22/05297_98_68.jpg", "http://media.eol.org/content/2012/05/23/22/70822_98_68.jpg"]
}, {
  "id": 2867531,
  "name": "Cistus crispus",
  "images": ["http://media.eol.org/content/2014/08/15/06/33256_orig.jpg", "http://media.eol.org/content/2014/08/15/05/82567_orig.jpg", "http://media.eol.org/content/2014/07/08/09/60885_orig.jpg", "http://media.eol.org/content/2014/07/08/09/82893_orig.jpg", "http://media.eol.org/content/2014/07/08/09/72123_orig.jpg", "http://media.eol.org/content/2015/04/06/23/01189_orig.jpg", "http://media.eol.org/content/2013/11/17/04/06785_orig.jpg", "http://media.eol.org/content/2013/11/17/04/99647_orig.jpg", "http://media.eol.org/content/2013/11/17/04/56665_orig.jpg", "http://media.eol.org/content/2013/11/17/04/56906_orig.jpg"],
  "names": [{
    "vernacularName": "Jara rizada",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Ciste crispé",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Roselha",
    "language": "pt",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/08/15/06/33256_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/82567_98_68.jpg", "http://media.eol.org/content/2014/07/08/09/60885_98_68.jpg", "http://media.eol.org/content/2014/07/08/09/82893_98_68.jpg", "http://media.eol.org/content/2014/07/08/09/72123_98_68.jpg", "http://media.eol.org/content/2015/04/06/23/01189_98_68.jpg", "http://media.eol.org/content/2013/11/17/04/06785_98_68.jpg", "http://media.eol.org/content/2013/11/17/04/99647_98_68.jpg", "http://media.eol.org/content/2013/11/17/04/56665_98_68.jpg", "http://media.eol.org/content/2013/11/17/04/56906_98_68.jpg"]
}, {
  "id": 6269866,
  "name": "Galactites tomentosus",
  "images": ["http://media.eol.org/content/2011/10/15/23/72080_orig.jpg", "http://media.eol.org/content/2011/10/15/23/10733_orig.jpg", "http://media.eol.org/content/2014/06/10/14/51938_orig.jpg", "http://media.eol.org/content/2014/06/10/14/57386_orig.jpg", "http://media.eol.org/content/2014/06/10/14/63333_orig.jpg", "http://media.eol.org/content/2014/06/10/14/36210_orig.jpg"],
  "names": [{
    "vernacularName": "Purple Milk Thistle",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Chardon laiteux",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "cardo",
    "language": "pt",
    "eol_preferred": true
  }],
  "thumbs": ["http://media.eol.org/content/2011/10/15/23/72080_98_68.jpg", "http://media.eol.org/content/2011/10/15/23/10733_98_68.jpg", "http://media.eol.org/content/2014/06/10/14/51938_98_68.jpg", "http://media.eol.org/content/2014/06/10/14/57386_98_68.jpg", "http://media.eol.org/content/2014/06/10/14/63333_98_68.jpg", "http://media.eol.org/content/2014/06/10/14/36210_98_68.jpg"]
}, {
  "id": 1114101,
  "name": "Dactylis glomerata L.",
  "images": ["http://media.eol.org/content/2012/11/20/02/26422_orig.jpg", "http://media.eol.org/content/2012/11/20/02/57029_orig.jpg", "http://media.eol.org/content/2013/12/01/04/81926_orig.jpg", "http://media.eol.org/content/2013/12/07/14/30868_orig.jpg", "http://media.eol.org/content/2012/11/20/02/81277_orig.jpg", "http://media.eol.org/content/2012/11/20/02/16869_orig.jpg", "http://media.eol.org/content/2012/11/20/02/79400_orig.jpg", "http://media.eol.org/content/2012/11/20/02/13854_orig.jpg", "http://media.eol.org/content/2014/07/01/22/70252_orig.jpg", "http://media.eol.org/content/2014/12/02/15/33732_orig.jpg"],
  "names": [{
    "vernacularName": "Wiesen-Knäuelgras",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Gemeines Knäuelgras",
    "language": "de"
  }, {
    "vernacularName": "Gewöhnliches Knäuelgras",
    "language": "de"
  }, {
    "vernacularName": "Hundsgras",
    "language": "de"
  }, {
    "vernacularName": "Katzengras",
    "language": "de"
  }, {
    "vernacularName": "Knäuelgras",
    "language": "de"
  }, {
    "vernacularName": "Wiesenknäuelgras",
    "language": "de"
  }, {
    "vernacularName": "Cock's-foot",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "cocksfoot",
    "language": "en"
  }, {
    "vernacularName": "orchard grass",
    "language": "en"
  }, {
    "vernacularName": "dactilo aglomerado",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "pasto ovillo",
    "language": "es"
  }, {
    "vernacularName": "zacate del huerto",
    "language": "es"
  }, {
    "vernacularName": "Dactyle aggloméré",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Brome mou",
    "language": "fr"
  }, {
    "vernacularName": "Dactyle aggloméré, Pied-de-poule",
    "language": "fr"
  }, {
    "vernacularName": "Dactyle de Hackel",
    "language": "fr"
  }, {
    "vernacularName": "Dactyle polygame",
    "language": "fr"
  }, {
    "vernacularName": "Fausse fléole, Rostraria à crête, Koelérie fausse Fléole",
    "language": "fr"
  }, {
    "vernacularName": "Pied-de-poule",
    "language": "fr"
  }, {
    "vernacularName": "Mazzolina",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "Erba mazzolina comune",
    "language": "it"
  }, {
    "vernacularName": "erba mazzolina",
    "language": "it"
  }, {
    "vernacularName": "鸭茅",
    "language": "zh",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/11/20/02/26422_98_68.jpg", "http://media.eol.org/content/2012/11/20/02/57029_98_68.jpg", "http://media.eol.org/content/2013/12/01/04/81926_98_68.jpg", "http://media.eol.org/content/2013/12/07/14/30868_98_68.jpg", "http://media.eol.org/content/2012/11/20/02/81277_98_68.jpg", "http://media.eol.org/content/2012/11/20/02/16869_98_68.jpg", "http://media.eol.org/content/2012/11/20/02/79400_98_68.jpg", "http://media.eol.org/content/2012/11/20/02/13854_98_68.jpg", "http://media.eol.org/content/2014/07/01/22/70252_98_68.jpg", "http://media.eol.org/content/2014/12/02/15/33732_98_68.jpg"]
}, {
  "id": 628306,
  "name": "Crataegus monogyna auct.",
  "images": ["http://media.eol.org/content/2013/11/25/10/36821_orig.jpg", "http://media.eol.org/content/2012/06/13/03/54825_orig.jpg", "http://media.eol.org/content/2012/08/20/00/79264_orig.jpg", "http://media.eol.org/content/2013/12/08/02/87044_orig.jpg", "http://media.eol.org/content/2014/07/08/09/11595_orig.jpg", "http://media.eol.org/content/2014/07/08/09/67713_orig.jpg", "http://media.eol.org/content/2015/04/30/17/49875_orig.jpg", "http://media.eol.org/content/2014/12/02/15/72659_orig.jpg", "http://media.eol.org/content/2014/12/02/15/36176_orig.jpg", "http://media.eol.org/content/2014/12/02/15/37416_orig.jpg"],
  "names": [{
    "vernacularName": "Eingriffliger Weissdorn",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Eingriffeliger Weißdorn",
    "language": "de"
  }, {
    "vernacularName": "hawthorn",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Common Hawthorn",
    "language": "en"
  }, {
    "vernacularName": "English hawthorn",
    "language": "en"
  }, {
    "vernacularName": "May thorn",
    "language": "en"
  }, {
    "vernacularName": "one-seeded hawthorn",
    "language": "en"
  }, {
    "vernacularName": "oneseed hawthorn",
    "language": "en"
  }, {
    "vernacularName": "red hawthorn",
    "language": "en"
  }, {
    "vernacularName": "singleseed hawthorn",
    "language": "en"
  }, {
    "vernacularName": "Espino majuelo",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "espino albar",
    "language": "es"
  }, {
    "vernacularName": "Aubépine à un style",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Aubépine",
    "language": "fr"
  }, {
    "vernacularName": "Aubépine à un style, Épine noire, Bois de mai",
    "language": "fr"
  }, {
    "vernacularName": "aubépine monogyne,",
    "language": "fr"
  }, {
    "vernacularName": "Biancospino comune",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "Pilriteiro",
    "language": "pt",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2013/11/25/10/36821_98_68.jpg", "http://media.eol.org/content/2012/06/13/03/54825_98_68.jpg", "http://media.eol.org/content/2012/08/20/00/79264_98_68.jpg", "http://media.eol.org/content/2013/12/08/02/87044_98_68.jpg", "http://media.eol.org/content/2014/07/08/09/11595_98_68.jpg", "http://media.eol.org/content/2014/07/08/09/67713_98_68.jpg", "http://media.eol.org/content/2015/04/30/17/49875_98_68.jpg", "http://media.eol.org/content/2014/12/02/15/72659_98_68.jpg", "http://media.eol.org/content/2014/12/02/15/36176_98_68.jpg", "http://media.eol.org/content/2014/12/02/15/37416_98_68.jpg"]
}, {
  "id": 1114993,
  "name": "Lagurus ovatus L.",
  "images": ["http://media.eol.org/content/2012/07/26/21/16070_orig.jpg", "http://media.eol.org/content/2012/06/12/16/75351_orig.jpg", "http://media.eol.org/content/2012/07/26/21/71501_orig.jpg", "http://media.eol.org/content/2014/08/15/04/65067_orig.jpg", "http://media.eol.org/content/2014/08/14/23/93756_orig.jpg", "http://media.eol.org/content/2014/08/14/23/73835_orig.jpg", "http://media.eol.org/content/2012/05/23/16/37057_orig.jpg", "http://media.eol.org/content/2012/05/23/16/35147_orig.jpg", "http://media.eol.org/content/2012/05/23/16/44188_orig.jpg", "http://media.eol.org/content/2012/05/23/16/89734_orig.jpg"],
  "names": [{
    "vernacularName": "Hare's-tail",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Hare's Tail",
    "language": "en"
  }, {
    "vernacularName": "harestail grass",
    "language": "en"
  }, {
    "vernacularName": "Lagure queue-de-lièvre, Gros-minet",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Rabo-de-lebre",
    "language": "pt",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/07/26/21/16070_98_68.jpg", "http://media.eol.org/content/2012/06/12/16/75351_98_68.jpg", "http://media.eol.org/content/2012/07/26/21/71501_98_68.jpg", "http://media.eol.org/content/2014/08/15/04/65067_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/93756_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/73835_98_68.jpg", "http://media.eol.org/content/2012/05/23/16/37057_98_68.jpg", "http://media.eol.org/content/2012/05/23/16/35147_98_68.jpg", "http://media.eol.org/content/2012/05/23/16/44188_98_68.jpg", "http://media.eol.org/content/2012/05/23/16/89734_98_68.jpg"]
}, {
  "id": 703436,
  "name": "Trifolium repens L.",
  "images": ["http://media.eol.org/content/2015/04/30/14/77339_orig.jpg", "http://media.eol.org/content/2012/03/23/01/92258_orig.jpg", "http://media.eol.org/content/2012/08/20/00/01664_orig.jpg", "http://media.eol.org/content/2014/08/15/01/33115_orig.jpg", "http://media.eol.org/content/2014/08/14/23/65739_orig.jpg", "http://media.eol.org/content/2014/08/14/23/90392_orig.jpg", "http://media.eol.org/content/2015/04/30/14/69144_orig.jpg", "http://media.eol.org/content/2012/06/12/19/37595_orig.jpg", "http://media.eol.org/content/2012/06/12/19/97769_orig.jpg", "http://media.eol.org/content/2011/10/06/00/79689_orig.jpg"],
  "names": [{
    "vernacularName": "قرط (قُرط)، قدب (قَدْب)، قرض (قَرَض)",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "قداب (قَدَاب)، جدوب (جَدّوب)",
    "language": "ar"
  }, {
    "vernacularName": "Weiss-Klee",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Kriechender Weiss-Klee",
    "language": "de"
  }, {
    "vernacularName": "white clover",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Dutch clover",
    "language": "en"
  }, {
    "vernacularName": "Tr≠bol Amargo",
    "language": "en"
  }, {
    "vernacularName": "Wild White Clover",
    "language": "en"
  }, {
    "vernacularName": "creeping white clover",
    "language": "en"
  }, {
    "vernacularName": "giant clover",
    "language": "en"
  }, {
    "vernacularName": "ladino clover",
    "language": "en"
  }, {
    "vernacularName": "white Dutch clover",
    "language": "en"
  }, {
    "vernacularName": "white trefoil",
    "language": "en"
  }, {
    "vernacularName": "Trifolium repens",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Casuarius Brisson 1760",
    "language": "es"
  }, {
    "vernacularName": "Trébol Blanco",
    "language": "es"
  }, {
    "vernacularName": "Trèfle rampant",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Trefle Blanc",
    "language": "fr"
  }, {
    "vernacularName": "Trèfle de Hollande",
    "language": "fr"
  }, {
    "vernacularName": "Trèfle rampant, Trèfle blanc, Trèfle de Hollande",
    "language": "fr"
  }, {
    "vernacularName": "trifoglio bianco",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "Trevo-branco",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "白车轴草",
    "language": "zh",
    "eol_preferred": true
  }, {
    "vernacularName": "白三叶",
    "language": "zh"
  }, {
    "vernacularName": "荷三叶",
    "language": "zh"
  }, {
    "vernacularName": "荷兰翘摇",
    "language": "zh"
  }],
  "thumbs": [null, "http://media.eol.org/content/2015/04/30/14/77339_98_68.jpg", "http://media.eol.org/content/2012/03/23/01/92258_98_68.jpg", "http://media.eol.org/content/2012/08/20/00/01664_98_68.jpg", "http://media.eol.org/content/2014/08/15/01/33115_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/65739_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/90392_98_68.jpg", "http://media.eol.org/content/2015/04/30/14/69144_98_68.jpg", "http://media.eol.org/content/2012/06/12/19/37595_98_68.jpg", "http://media.eol.org/content/2012/06/12/19/97769_98_68.jpg", "http://media.eol.org/content/2011/10/06/00/79689_98_68.jpg"]
}, {
  "id": 46321664,
  "name": "Crepis capillaris",
  "images": ["http://media.eol.org/content/2011/10/15/22/75343_orig.jpg", "http://media.eol.org/content/2011/10/15/22/75680_orig.jpg", "http://media.eol.org/content/2011/10/15/22/63292_orig.jpg", "http://media.eol.org/content/2011/10/15/22/20844_orig.jpg", "http://media.eol.org/content/2015/02/16/07/92089_orig.jpg", "http://media.eol.org/content/2015/02/16/07/13132_orig.jpg", "http://media.eol.org/content/2015/02/16/07/01697_orig.jpg", "http://media.eol.org/content/2011/10/15/22/10237_orig.jpg", "http://media.eol.org/content/2011/10/15/22/67730_orig.jpg", "http://media.eol.org/content/2011/10/15/22/53498_orig.jpg"],
  "names": [{
    "vernacularName": "green crepis",
    "language": "en"
  }, {
    "vernacularName": "smooth hawksbeard",
    "language": "en"
  }],
  "thumbs": ["http://media.eol.org/content/2011/10/15/22/75343_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/75680_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/63292_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/20844_98_68.jpg", "http://media.eol.org/content/2015/02/16/07/92089_98_68.jpg", "http://media.eol.org/content/2015/02/16/07/13132_98_68.jpg", "http://media.eol.org/content/2015/02/16/07/01697_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/10237_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/67730_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/53498_98_68.jpg"]
}, {
  "id": 483190,
  "name": "Cistus monspeliensis L.",
  "images": ["http://media.eol.org/content/2014/08/15/05/58116_orig.jpg", "http://media.eol.org/content/2014/08/15/05/46790_orig.jpg", "http://media.eol.org/content/2014/08/15/03/90880_orig.jpg", "http://media.eol.org/content/2014/08/15/05/25396_orig.jpg", "http://media.eol.org/content/2011/10/15/22/46339_orig.jpg", "http://media.eol.org/content/2014/08/15/01/66449_orig.jpg", "http://media.eol.org/content/2014/08/15/00/76927_orig.jpg", "http://media.eol.org/content/2016/08/05/21/81776_orig.jpg", "http://media.eol.org/content/2016/08/05/21/35088_orig.jpg", "http://media.eol.org/content/2016/08/03/13/47298_orig.jpg"],
  "names": [{
    "vernacularName": "Rockrose",
    "language": "en"
  }, {
    "vernacularName": "Lorbeerlättrude Zistrose",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Montpelier cistus",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Montpelier Rock Rose",
    "language": "en"
  }, {
    "vernacularName": "Rock Rose",
    "language": "en"
  }, {
    "vernacularName": "jaguarzo",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Ciste de Montpellier",
    "language": "fr",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/08/15/05/58116_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/46790_98_68.jpg", "http://media.eol.org/content/2014/08/15/03/90880_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/25396_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/46339_98_68.jpg", "http://media.eol.org/content/2014/08/15/01/66449_98_68.jpg", "http://media.eol.org/content/2014/08/15/00/76927_98_68.jpg", "http://media.eol.org/content/2016/08/05/21/81776_98_68.jpg", "http://media.eol.org/content/2016/08/05/21/35088_98_68.jpg", "http://media.eol.org/content/2016/08/03/13/47298_98_68.jpg"]
}, {
  "id": 488251,
  "name": "Cistus ladanifer L.",
  "images": ["http://media.eol.org/content/2014/12/20/00/74390_orig.jpg", "http://media.eol.org/content/2013/11/16/21/36505_orig.jpg", "http://media.eol.org/content/2014/05/24/03/44100_orig.jpg", "http://media.eol.org/content/2014/08/15/03/65758_orig.jpg", "http://media.eol.org/content/2014/08/15/04/32589_orig.jpg", "http://media.eol.org/content/2014/08/15/05/48287_orig.jpg", "http://media.eol.org/content/2011/10/15/22/37899_orig.jpg", "http://media.eol.org/content/2014/08/15/05/51740_orig.jpg", "http://media.eol.org/content/2014/08/15/04/99670_orig.jpg", "http://media.eol.org/content/2014/08/15/01/64436_orig.jpg"],
  "names": [{
    "vernacularName": "Lack-Zistrose",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "common gum cistus",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Brown-Eyed Rockrose",
    "language": "en"
  }, {
    "vernacularName": "Crimson-Spot Rockrose",
    "language": "en"
  }, {
    "vernacularName": "Gum Rock-rose",
    "language": "en"
  }, {
    "vernacularName": "Rock Rose",
    "language": "en"
  }, {
    "vernacularName": "gum rockrose",
    "language": "en"
  }, {
    "vernacularName": "labdanum",
    "language": "en"
  }, {
    "vernacularName": "laudanum",
    "language": "en"
  }, {
    "vernacularName": "jara",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Labando",
    "language": "es"
  }, {
    "vernacularName": "Ciste à gomme",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Labando",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "Esteva",
    "language": "pt",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/12/20/00/74390_98_68.jpg", "http://media.eol.org/content/2013/11/16/21/36505_98_68.jpg", "http://media.eol.org/content/2014/05/24/03/44100_98_68.jpg", "http://media.eol.org/content/2014/08/15/03/65758_98_68.jpg", "http://media.eol.org/content/2014/08/15/04/32589_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/48287_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/37899_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/51740_98_68.jpg", "http://media.eol.org/content/2014/08/15/04/99670_98_68.jpg", "http://media.eol.org/content/2014/08/15/01/64436_98_68.jpg"]
},
// {
//   "id": 32431305,
//   "name": "Taraxacum officinale",
//   "images": [],
//   "names": [],
//   "thumbs": [
//     null
//   ]
// },
// {
//   "id": 5732250,
//   "name": "Cistus ladanifer subsp. ladanifer",
//   "images": [
//     "http://media.eol.org/content/2014/08/15/05/48287_orig.jpg",
//     "http://media.eol.org/content/2014/08/15/05/51740_orig.jpg",
//     "http://media.eol.org/content/2014/08/15/01/64436_orig.jpg",
//     "http://media.eol.org/content/2014/08/15/01/60919_orig.jpg",
//     "http://media.eol.org/content/2014/08/15/01/93521_orig.jpg",
//     "http://media.eol.org/content/2014/08/15/01/62161_orig.jpg",
//     "http://media.eol.org/content/2014/08/15/01/13751_orig.jpg",
//     "http://media.eol.org/content/2014/08/15/00/10979_orig.jpg",
//     "http://media.eol.org/content/2014/08/15/00/86075_orig.jpg",
//     "http://media.eol.org/content/2014/08/15/01/01818_orig.jpg"
//   ],
//   "names": [
//     {
//       "vernacularName": "Ciste à gomme",
//       "language": "fr",
//       "eol_preferred": true
//     }
//   ],
//   "thumbs": [
//     null,
//     "http://media.eol.org/content/2014/08/15/05/48287_98_68.jpg",
//     "http://media.eol.org/content/2014/08/15/05/51740_98_68.jpg",
//     "http://media.eol.org/content/2014/08/15/01/64436_98_68.jpg",
//     "http://media.eol.org/content/2014/08/15/01/60919_98_68.jpg",
//     "http://media.eol.org/content/2014/08/15/01/93521_98_68.jpg",
//     "http://media.eol.org/content/2014/08/15/01/62161_98_68.jpg",
//     "http://media.eol.org/content/2014/08/15/01/13751_98_68.jpg",
//     "http://media.eol.org/content/2014/08/15/00/10979_98_68.jpg",
//     "http://media.eol.org/content/2014/08/15/00/86075_98_68.jpg",
//     "http://media.eol.org/content/2014/08/15/01/01818_98_68.jpg"
//   ]
// },
{
  "id": 1114782,
  "name": "Avena fatua L.",
  "images": ["http://media.eol.org/content/2014/08/02/04/73100_orig.jpg", "http://media.eol.org/content/2014/08/02/04/41911_orig.jpg", "http://media.eol.org/content/2012/05/23/06/39912_orig.jpg", "http://media.eol.org/content/2010/03/24/02/87266_orig.jpg", "http://media.eol.org/content/2012/12/05/06/70687_orig.jpg", "http://media.eol.org/content/2012/12/05/06/17707_orig.jpg", "http://media.eol.org/content/2012/07/11/02/29218_orig.jpg", "http://media.eol.org/content/2014/08/02/04/07290_orig.jpg", "http://media.eol.org/content/2011/11/03/01/20850_orig.jpg", "http://media.eol.org/content/2015/04/30/08/78492_orig.jpg"],
  "names": [{
    "vernacularName": "خفور (خَفُور)",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "زمير (زُميِّر)",
    "language": "ar"
  }, {
    "vernacularName": "فاخور",
    "language": "ar"
  }, {
    "vernacularName": "Flughafer",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Blindhafer",
    "language": "de"
  }, {
    "vernacularName": "Flug-Hafer",
    "language": "de"
  }, {
    "vernacularName": "Katzenhafer",
    "language": "de"
  }, {
    "vernacularName": "Wildhafer",
    "language": "de"
  }, {
    "vernacularName": "Wind-Hafer",
    "language": "de"
  }, {
    "vernacularName": "Windhafer",
    "language": "de"
  }, {
    "vernacularName": "wild oats",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "flaxgrass",
    "language": "en"
  }, {
    "vernacularName": "oatgrass",
    "language": "en"
  }, {
    "vernacularName": "wheat oats",
    "language": "en"
  }, {
    "vernacularName": "wild oat",
    "language": "en"
  }, {
    "vernacularName": "avena cimarrona",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "avena loca",
    "language": "es"
  }, {
    "vernacularName": "avena silvestre",
    "language": "es"
  }, {
    "vernacularName": "Folle avoine",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Avoine de Ludovic",
    "language": "fr"
  }, {
    "vernacularName": "Avoine du Nord",
    "language": "fr"
  }, {
    "vernacularName": "Avoine folle, Havenon",
    "language": "fr"
  }, {
    "vernacularName": "Avoine soyeuse",
    "language": "fr"
  }, {
    "vernacularName": "野燕麦",
    "language": "zh",
    "eol_preferred": true
  }, {
    "vernacularName": "乌麦",
    "language": "zh"
  }, {
    "vernacularName": "燕麦草",
    "language": "zh"
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/08/02/04/73100_98_68.jpg", "http://media.eol.org/content/2014/08/02/04/41911_98_68.jpg", "http://media.eol.org/content/2012/05/23/06/39912_98_68.jpg", "http://media.eol.org/content/2010/03/24/02/87266_98_68.jpg", "http://media.eol.org/content/2012/12/05/06/70687_98_68.jpg", "http://media.eol.org/content/2012/12/05/06/17707_98_68.jpg", "http://media.eol.org/content/2012/07/11/02/29218_98_68.jpg", "http://media.eol.org/content/2014/08/02/04/07290_98_68.jpg", "http://media.eol.org/content/2011/11/03/01/20850_98_68.jpg", "http://media.eol.org/content/2015/04/30/08/78492_98_68.jpg"]
}, {
  "id": 1114783,
  "name": "Avena sativa L.",
  "images": ["http://media.eol.org/content/2012/05/23/06/13235_orig.jpg", "http://media.eol.org/content/2011/10/06/02/39188_orig.jpg", "http://media.eol.org/content/2011/10/15/21/02363_orig.jpg", "http://media.eol.org/content/2012/05/23/06/03932_orig.jpg", "http://media.eol.org/content/2012/05/23/06/61766_orig.jpg", "http://media.eol.org/content/2012/05/23/06/75673_orig.jpg", "http://media.eol.org/content/2012/05/23/06/30886_orig.jpg", "http://media.eol.org/content/2012/05/23/06/19812_orig.jpg", "http://media.eol.org/content/2011/10/15/21/02356_orig.jpg", "http://media.eol.org/content/2012/05/23/06/79328_orig.jpg"],
  "names": [{
    "vernacularName": "خفور (خَفُور)",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "زمير (زُميِّر)",
    "language": "ar"
  }, {
    "vernacularName": "فاخور",
    "language": "ar"
  }, {
    "vernacularName": "Saathafer",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Echter Hafer",
    "language": "de"
  }, {
    "vernacularName": "Hafer",
    "language": "de"
  }, {
    "vernacularName": "Saat-Hafer",
    "language": "de"
  }, {
    "vernacularName": "Sommerhafer",
    "language": "de"
  }, {
    "vernacularName": "Common oats",
    "language": "en"
  }, {
    "vernacularName": "wild oat",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "common oat",
    "language": "en"
  }, {
    "vernacularName": "cultivated oat",
    "language": "en"
  }, {
    "vernacularName": "oat",
    "language": "en"
  }, {
    "vernacularName": "oatgrass (common)",
    "language": "en"
  }, {
    "vernacularName": "oats",
    "language": "en"
  }, {
    "vernacularName": "wild oats",
    "language": "en"
  }, {
    "vernacularName": "Avena",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Avoine cultivée",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Avoine",
    "language": "fr"
  }, {
    "vernacularName": "Avoine folle, Havenon",
    "language": "fr"
  }, {
    "vernacularName": "Avoine glabre",
    "language": "fr"
  }, {
    "vernacularName": "Avena",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "Avena comune",
    "language": "it"
  }, {
    "vernacularName": "aveia",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "燕麦",
    "language": "zh",
    "eol_preferred": true
  }, {
    "vernacularName": "铃当麦",
    "language": "zh"
  }, {
    "vernacularName": "香麦",
    "language": "zh"
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/05/23/06/13235_98_68.jpg", "http://media.eol.org/content/2011/10/06/02/39188_98_68.jpg", "http://media.eol.org/content/2011/10/15/21/02363_98_68.jpg", "http://media.eol.org/content/2012/05/23/06/03932_98_68.jpg", "http://media.eol.org/content/2012/05/23/06/61766_98_68.jpg", "http://media.eol.org/content/2012/05/23/06/75673_98_68.jpg", "http://media.eol.org/content/2012/05/23/06/30886_98_68.jpg", "http://media.eol.org/content/2012/05/23/06/19812_98_68.jpg", "http://media.eol.org/content/2011/10/15/21/02356_98_68.jpg", "http://media.eol.org/content/2012/05/23/06/79328_98_68.jpg"]
}, {
  "id": 1114041,
  "name": "Briza maxima L.",
  "images": ["http://media.eol.org/content/2015/03/21/03/65558_orig.jpg", "http://media.eol.org/content/2014/08/14/23/01259_orig.jpg", "http://media.eol.org/content/2014/08/20/10/56819_orig.jpg", "http://media.eol.org/content/2014/08/14/23/50055_orig.jpg", "http://media.eol.org/content/2012/12/12/00/86468_orig.jpg", "http://media.eol.org/content/2012/12/12/00/27653_orig.jpg", "http://media.eol.org/content/2014/05/19/01/69988_orig.jpg", "http://media.eol.org/content/2016/07/22/17/30799_orig.jpg", "http://media.eol.org/content/2013/11/08/02/06425_orig.jpg", "http://media.eol.org/content/2014/08/15/05/32753_orig.jpg"],
  "names": [{
    "vernacularName": "Großes Zittergras",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "big quakinggrass",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Giant quaking-grass",
    "language": "en"
  }, {
    "vernacularName": "Greater quaking-grass",
    "language": "en"
  }, {
    "vernacularName": "Large Quaking Grass",
    "language": "en"
  }, {
    "vernacularName": "Quaking Grass",
    "language": "en"
  }, {
    "vernacularName": "Brize élevée, Grande Brize",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Bole-bole-maior",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "大凌风草",
    "language": "zh",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2015/03/21/03/65558_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/01259_98_68.jpg", "http://media.eol.org/content/2014/08/20/10/56819_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/50055_98_68.jpg", "http://media.eol.org/content/2012/12/12/00/86468_98_68.jpg", "http://media.eol.org/content/2012/12/12/00/27653_98_68.jpg", "http://media.eol.org/content/2014/05/19/01/69988_98_68.jpg", "http://media.eol.org/content/2016/07/22/17/30799_98_68.jpg", "http://media.eol.org/content/2013/11/08/02/06425_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/32753_98_68.jpg"]
}, {
  "id": 991197,
  "name": "Asphodelus ramosus L.",
  "images": ["http://media.eol.org/content/2012/05/23/06/71267_orig.jpg", "http://media.eol.org/content/2012/05/23/06/84762_orig.jpg", "http://media.eol.org/content/2012/05/23/06/08848_orig.jpg", "http://media.eol.org/content/2012/05/23/06/91638_orig.jpg", "http://media.eol.org/content/2012/05/23/06/25790_orig.jpg", "http://media.eol.org/content/2012/05/23/06/23181_orig.jpg", "http://media.eol.org/content/2012/05/23/06/69740_orig.jpg", "http://media.eol.org/content/2011/10/15/21/54073_orig.jpg", "http://media.eol.org/content/2011/10/15/21/72696_orig.jpg", "http://media.eol.org/content/2011/10/15/21/13652_orig.jpg"],
  "names": [{
    "vernacularName": "Silverrod",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "asphodel",
    "language": "en"
  }, {
    "vernacularName": "Asfódel",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Bâton-blanc ramifié",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Abrótea-da-primavera",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "Abrótea",
    "language": "pt"
  }, {
    "vernacularName": "Gamão",
    "language": "pt"
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/05/23/06/71267_98_68.jpg", "http://media.eol.org/content/2012/05/23/06/84762_98_68.jpg", "http://media.eol.org/content/2012/05/23/06/08848_98_68.jpg", "http://media.eol.org/content/2012/05/23/06/91638_98_68.jpg", "http://media.eol.org/content/2012/05/23/06/25790_98_68.jpg", "http://media.eol.org/content/2012/05/23/06/23181_98_68.jpg", "http://media.eol.org/content/2012/05/23/06/69740_98_68.jpg", "http://media.eol.org/content/2011/10/15/21/54073_98_68.jpg", "http://media.eol.org/content/2011/10/15/21/72696_98_68.jpg", "http://media.eol.org/content/2011/10/15/21/13652_98_68.jpg"]
}, {
  "id": 585008,
  "name": "Foeniculum vulgare Mill.",
  "images": ["http://media.eol.org/content/2014/08/15/04/24404_orig.jpg", "http://media.eol.org/content/2014/08/15/04/25525_orig.jpg", "http://media.eol.org/content/2014/08/14/23/28275_orig.jpg", "http://media.eol.org/content/2014/08/14/23/76275_orig.jpg", "http://media.eol.org/content/2014/08/14/23/93299_orig.jpg", "http://media.eol.org/content/2014/08/14/23/57498_orig.jpg", "http://media.eol.org/content/2014/08/14/23/89042_orig.jpg", "http://media.eol.org/content/2014/08/15/05/10887_orig.jpg", "http://media.eol.org/content/2014/08/15/05/99079_orig.jpg", "http://media.eol.org/content/2014/08/14/23/53716_orig.jpg"],
  "names": [{
    "vernacularName": "شمار",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "Razianaj",
    "language": "ar"
  }, {
    "vernacularName": "Shamaar",
    "language": "ar"
  }, {
    "vernacularName": "Shamar",
    "language": "ar"
  }, {
    "vernacularName": "Shamraa",
    "language": "ar"
  }, {
    "vernacularName": "Shoumar",
    "language": "ar"
  }, {
    "vernacularName": "Shumar",
    "language": "ar"
  }, {
    "vernacularName": "bisbas",
    "language": "ar"
  }, {
    "vernacularName": "رازيانج",
    "language": "ar"
  }, {
    "vernacularName": "شمر",
    "language": "ar"
  }, {
    "vernacularName": "شمرا",
    "language": "ar"
  }, {
    "vernacularName": "شومر",
    "language": "ar"
  }, {
    "vernacularName": "شومَر",
    "language": "ar"
  }, {
    "vernacularName": "شَمَار",
    "language": "ar"
  }, {
    "vernacularName": "شَمْا",
    "language": "ar"
  }, {
    "vernacularName": "Fenchel",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Purgier-Lein",
    "language": "de"
  }, {
    "vernacularName": "fennel",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Bronze Fennel",
    "language": "en"
  }, {
    "vernacularName": "Common Fennel",
    "language": "en"
  }, {
    "vernacularName": "Giant Fennel",
    "language": "en"
  }, {
    "vernacularName": "Sweet cumin",
    "language": "en"
  }, {
    "vernacularName": "sweet fennel",
    "language": "en"
  }, {
    "vernacularName": "Hinojo",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Fenouil",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Aneth doux",
    "language": "fr"
  }, {
    "vernacularName": "Fenouil commun",
    "language": "fr"
  }, {
    "vernacularName": "Finocchio comune",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "Finocchio",
    "language": "it"
  }, {
    "vernacularName": "finocchio commune",
    "language": "it"
  }, {
    "vernacularName": "Funcho",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "茴香",
    "language": "zh",
    "eol_preferred": true
  }, {
    "vernacularName": "&#x0000E021;萫",
    "language": "zh"
  }, {
    "vernacularName": "小茴香",
    "language": "zh"
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/08/15/04/24404_98_68.jpg", "http://media.eol.org/content/2014/08/15/04/25525_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/28275_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/76275_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/93299_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/57498_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/89042_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/10887_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/99079_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/53716_98_68.jpg"]
}, {
  "id": 841400,
  "name": "Lapsana communis L.",
  "images": ["http://media.eol.org/content/2012/12/05/02/78026_orig.jpg", "http://media.eol.org/content/2012/12/05/02/48433_orig.jpg", "http://media.eol.org/content/2009/07/24/03/11956_orig.jpg", "http://media.eol.org/content/2009/07/24/03/19423_orig.jpg", "http://media.eol.org/content/2009/07/24/03/91876_orig.jpg", "http://media.eol.org/content/2009/07/24/03/54151_orig.jpg", "http://media.eol.org/content/2012/07/04/05/23880_orig.jpg", "http://media.eol.org/content/2015/01/08/05/32129_orig.jpg", "http://media.eol.org/content/2014/11/15/10/75315_orig.jpg", "http://media.eol.org/content/2014/11/15/10/07865_orig.jpg"],
  "names": [{
    "vernacularName": "Rainkohl",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "nipplewort",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "common nipplewort",
    "language": "en"
  }, {
    "vernacularName": "Lampsane commune",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Lampsane commune, Graceline",
    "language": "fr"
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/12/05/02/78026_98_68.jpg", "http://media.eol.org/content/2012/12/05/02/48433_98_68.jpg", "http://media.eol.org/content/2009/07/24/03/11956_98_68.jpg", "http://media.eol.org/content/2009/07/24/03/19423_98_68.jpg", "http://media.eol.org/content/2009/07/24/03/91876_98_68.jpg", "http://media.eol.org/content/2009/07/24/03/54151_98_68.jpg", "http://media.eol.org/content/2012/07/04/05/23880_98_68.jpg", "http://media.eol.org/content/2015/01/08/05/32129_98_68.jpg", "http://media.eol.org/content/2014/11/15/10/75315_98_68.jpg", "http://media.eol.org/content/2014/11/15/10/07865_98_68.jpg"]
}, {
  "id": 509366,
  "name": "Silybum marianum (L.) Gaertn.",
  "images": ["http://media.eol.org/content/2012/06/12/17/01185_orig.jpg", "http://media.eol.org/content/2012/08/17/00/29745_orig.jpg", "http://media.eol.org/content/2015/04/30/14/30720_orig.jpg", "http://media.eol.org/content/2010/03/24/04/34451_orig.jpg", "http://media.eol.org/content/2012/08/17/00/57905_orig.jpg", "http://media.eol.org/content/2015/04/30/14/48757_orig.jpg", "http://media.eol.org/content/2011/10/16/02/39171_orig.jpg", "http://media.eol.org/content/2011/10/16/02/21496_orig.jpg", "http://media.eol.org/content/2011/10/16/02/86330_orig.jpg", "http://media.eol.org/content/2011/10/16/02/56938_orig.jpg"],
  "names": [{
    "vernacularName": "شوك الحنش (شُوك الحَنَش)، لخلاخ (لِخْلاخ)",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "خرشوف (خَرشوف)، خشروف (خُشْروف)",
    "language": "ar"
  }, {
    "vernacularName": "خشروف (خُشْروف، خَشْروف)",
    "language": "ar"
  }, {
    "vernacularName": "شوك الجمل (شوك الجَمَل)، لخلاخ  (لِخْلاخ)",
    "language": "ar"
  }, {
    "vernacularName": "شوك الغزال (شُوك الغَزال)",
    "language": "ar"
  }, {
    "vernacularName": "شوك سنارى (شُوك سِنَّارى)، شوك نصاره (شُوك نَصَّاره)",
    "language": "ar"
  }, {
    "vernacularName": "milk thistle",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Holy Thistle",
    "language": "en"
  }, {
    "vernacularName": "Milk-thistle",
    "language": "en"
  }, {
    "vernacularName": "St. Mary's thistle",
    "language": "en"
  }, {
    "vernacularName": "blessed milk-thistle",
    "language": "en"
  }, {
    "vernacularName": "blessed milkthistle",
    "language": "en"
  }, {
    "vernacularName": "lady's thistle",
    "language": "en"
  }, {
    "vernacularName": "spotted thistle",
    "language": "en"
  }, {
    "vernacularName": "variegated thistle",
    "language": "en"
  }, {
    "vernacularName": "Cardo mariano",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Chardon Marie",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Chardon marie, Chardon marbré",
    "language": "fr"
  }, {
    "vernacularName": "Notobasis de Syrie, Chardon de Syrie",
    "language": "fr"
  }, {
    "vernacularName": "Tyrimne à taches blanches",
    "language": "fr"
  }, {
    "vernacularName": "Cardo-mariano",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "水飞蓟",
    "language": "zh",
    "eol_preferred": true
  }, {
    "vernacularName": "奶蓟",
    "language": "zh"
  }, {
    "vernacularName": "水飞雉",
    "language": "zh"
  }, {
    "vernacularName": "老鼠筋",
    "language": "zh"
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/06/12/17/01185_98_68.jpg", "http://media.eol.org/content/2012/08/17/00/29745_98_68.jpg", "http://media.eol.org/content/2015/04/30/14/30720_98_68.jpg", "http://media.eol.org/content/2010/03/24/04/34451_98_68.jpg", "http://media.eol.org/content/2012/08/17/00/57905_98_68.jpg", "http://media.eol.org/content/2015/04/30/14/48757_98_68.jpg", "http://media.eol.org/content/2011/10/16/02/39171_98_68.jpg", "http://media.eol.org/content/2011/10/16/02/21496_98_68.jpg", "http://media.eol.org/content/2011/10/16/02/86330_98_68.jpg", "http://media.eol.org/content/2011/10/16/02/56938_98_68.jpg"]
}, {
  "id": 486948,
  "name": "Lactuca virosa Habl.",
  "images": ["http://media.eol.org/content/2011/10/16/00/56646_orig.jpg", "http://media.eol.org/content/2011/10/16/00/54208_orig.jpg", "http://media.eol.org/content/2011/10/16/00/22497_orig.jpg", "http://media.eol.org/content/2012/12/04/18/46193_orig.jpg", "http://media.eol.org/content/2012/05/23/16/17821_orig.jpg", "http://media.eol.org/content/2011/10/16/00/45741_orig.jpg", "http://media.eol.org/content/2011/10/16/00/16818_orig.jpg", "http://media.eol.org/content/2011/10/16/00/14350_orig.jpg", "http://media.eol.org/content/2011/10/16/00/18231_orig.jpg", "http://media.eol.org/content/2011/10/16/00/98784_orig.jpg"],
  "names": [{
    "vernacularName": "wild lettuce",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "bitter lettuce",
    "language": "en"
  }, {
    "vernacularName": "Laitue vireuse, Laitue sauvage",
    "language": "fr",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2011/10/16/00/56646_98_68.jpg", "http://media.eol.org/content/2011/10/16/00/54208_98_68.jpg", "http://media.eol.org/content/2011/10/16/00/22497_98_68.jpg", "http://media.eol.org/content/2012/12/04/18/46193_98_68.jpg", "http://media.eol.org/content/2012/05/23/16/17821_98_68.jpg", "http://media.eol.org/content/2011/10/16/00/45741_98_68.jpg", "http://media.eol.org/content/2011/10/16/00/16818_98_68.jpg", "http://media.eol.org/content/2011/10/16/00/14350_98_68.jpg", "http://media.eol.org/content/2011/10/16/00/18231_98_68.jpg", "http://media.eol.org/content/2011/10/16/00/98784_98_68.jpg"]
}, {
  "id": 2885404,
  "name": "Urtica pilulifera",
  "images": ["http://media.eol.org/content/2009/09/08/03/69274_orig.jpg", "http://media.eol.org/content/2009/09/08/03/12719_orig.jpg", "http://media.eol.org/content/2012/05/24/04/03049_orig.jpg", "http://media.eol.org/content/2011/10/16/03/43397_orig.jpg", "http://media.eol.org/content/2011/10/16/03/91809_orig.jpg", "http://media.eol.org/content/2011/10/16/03/52652_orig.jpg", "http://media.eol.org/content/2011/10/16/03/46021_orig.jpg", "http://media.eol.org/content/2011/10/16/03/84836_orig.jpg", "http://media.eol.org/content/2011/10/16/03/76095_orig.jpg", "http://media.eol.org/content/2011/10/16/03/82825_orig.jpg"],
  "names": [{
    "vernacularName": "شعر العجوز ( شَعر العجوز)",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "زغليل (زَغْليل)، زربيح (زُربيح)",
    "language": "ar"
  }, {
    "vernacularName": "صربيح (صُربيح)، فس الكلاب (فِس الكلاب)",
    "language": "ar"
  }, {
    "vernacularName": "قريص (قُرّيص)، حراقه (حُرَّاقه)، حريق (حُرَّيق)",
    "language": "ar"
  }, {
    "vernacularName": "Roman nettle",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Ortie à pilules",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "ortica romana",
    "language": "it",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2009/09/08/03/69274_98_68.jpg", "http://media.eol.org/content/2009/09/08/03/12719_98_68.jpg", "http://media.eol.org/content/2012/05/24/04/03049_98_68.jpg", "http://media.eol.org/content/2011/10/16/03/43397_98_68.jpg", "http://media.eol.org/content/2011/10/16/03/91809_98_68.jpg", "http://media.eol.org/content/2011/10/16/03/52652_98_68.jpg", "http://media.eol.org/content/2011/10/16/03/46021_98_68.jpg", "http://media.eol.org/content/2011/10/16/03/84836_98_68.jpg", "http://media.eol.org/content/2011/10/16/03/76095_98_68.jpg", "http://media.eol.org/content/2011/10/16/03/82825_98_68.jpg"]
}, {
  "id": 595063,
  "name": "Urtica dioica L.",
  "images": ["http://media.eol.org/content/2014/06/09/17/19485_orig.jpg", "http://media.eol.org/content/2012/06/12/13/30866_orig.jpg", "http://media.eol.org/content/2012/06/12/13/10200_orig.jpg", "http://media.eol.org/content/2011/11/01/14/90463_orig.jpg", "http://media.eol.org/content/2015/04/30/04/62662_orig.jpg", "http://media.eol.org/content/2012/05/24/04/65268_orig.jpg", "http://media.eol.org/content/2012/05/24/04/17334_orig.jpg", "http://media.eol.org/content/2012/06/12/13/13185_orig.jpg", "http://media.eol.org/content/2012/12/04/18/52313_orig.jpg", "http://media.eol.org/content/2012/12/04/18/70122_orig.jpg"],
  "names": [{
    "vernacularName": "Große Brennnessel",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Grosse Brennessel",
    "language": "de"
  }, {
    "vernacularName": "Common nettle",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "California nettle",
    "language": "en"
  }, {
    "vernacularName": "Devil's Plaything",
    "language": "en"
  }, {
    "vernacularName": "European Stinging Nettle",
    "language": "en"
  }, {
    "vernacularName": "Greater Nettle",
    "language": "en"
  }, {
    "vernacularName": "True Nettle",
    "language": "en"
  }, {
    "vernacularName": "great nettle",
    "language": "en"
  }, {
    "vernacularName": "slender nettle",
    "language": "en"
  }, {
    "vernacularName": "stinging nettle",
    "language": "en"
  }, {
    "vernacularName": "tall nettle",
    "language": "en"
  }, {
    "vernacularName": "ortiga",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Ortie dioïque",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Ortie",
    "language": "fr"
  }, {
    "vernacularName": "Ortie dioïque, Grande ortie",
    "language": "fr"
  }, {
    "vernacularName": "Ortica comune",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "异株荨麻",
    "language": "zh",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/06/09/17/19485_98_68.jpg", "http://media.eol.org/content/2012/06/12/13/30866_98_68.jpg", "http://media.eol.org/content/2012/06/12/13/10200_98_68.jpg", "http://media.eol.org/content/2011/11/01/14/90463_98_68.jpg", "http://media.eol.org/content/2015/04/30/04/62662_98_68.jpg", "http://media.eol.org/content/2012/05/24/04/65268_98_68.jpg", "http://media.eol.org/content/2012/05/24/04/17334_98_68.jpg", "http://media.eol.org/content/2012/06/12/13/13185_98_68.jpg", "http://media.eol.org/content/2012/12/04/18/52313_98_68.jpg", "http://media.eol.org/content/2012/12/04/18/70122_98_68.jpg"]
}, {
  "id": 587522,
  "name": "Chenopodium album L.",
  "images": ["http://media.eol.org/content/2012/02/17/00/01790_orig.jpg", "http://media.eol.org/content/2012/02/17/00/44526_orig.jpg", "http://media.eol.org/content/2015/05/20/06/67087_orig.jpg", "http://media.eol.org/content/2011/10/15/22/56495_orig.jpg", "http://media.eol.org/content/2011/10/15/22/99309_orig.jpg", "http://media.eol.org/content/2011/10/15/22/96515_orig.jpg", "http://media.eol.org/content/2011/10/15/22/54452_orig.jpg", "http://media.eol.org/content/2011/10/15/22/88302_orig.jpg", "http://media.eol.org/content/2011/10/15/22/50883_orig.jpg"],
  "names": [{
    "vernacularName": "رقاب الجمل (رُقاب الجَمَل)",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "فس الكلب ( الكلاب)",
    "language": "ar"
  }, {
    "vernacularName": "Weisser Gänsefuss",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "weiβer Gänsefuß",
    "language": "de"
  }, {
    "vernacularName": "white goosefoot",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Bathua",
    "language": "en"
  }, {
    "vernacularName": "Fat Hen",
    "language": "en"
  }, {
    "vernacularName": "Lamb's Quarters",
    "language": "en"
  }, {
    "vernacularName": "Lamb's quarter",
    "language": "en"
  }, {
    "vernacularName": "Missouri goosefoot",
    "language": "en"
  }, {
    "vernacularName": "Stevens' lambsquarters",
    "language": "en"
  }, {
    "vernacularName": "Wild Spinach",
    "language": "en"
  }, {
    "vernacularName": "Zschack's goosefoot",
    "language": "en"
  }, {
    "vernacularName": "Zschacke's Goosefoot",
    "language": "en"
  }, {
    "vernacularName": "common lambsquarters",
    "language": "en"
  }, {
    "vernacularName": "goosefoot",
    "language": "en"
  }, {
    "vernacularName": "lamb's-quarters",
    "language": "en"
  }, {
    "vernacularName": "lambsquarters",
    "language": "en"
  }, {
    "vernacularName": "lambsquarters goosefoot",
    "language": "en"
  }, {
    "vernacularName": "pig weed",
    "language": "en"
  }, {
    "vernacularName": "pigweed",
    "language": "en"
  }, {
    "vernacularName": "Chénopode blanc",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Chénopode blanc, Senousse",
    "language": "fr"
  }, {
    "vernacularName": "Farinello comune",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "藜",
    "language": "zh",
    "eol_preferred": true
  }, {
    "vernacularName": "灰菜",
    "language": "zh"
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/02/17/00/01790_98_68.jpg", "http://media.eol.org/content/2012/02/17/00/44526_98_68.jpg", "http://media.eol.org/content/2015/05/20/06/67087_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/56495_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/99309_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/96515_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/54452_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/88302_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/50883_98_68.jpg"]
}, {
  "id": 585884,
  "name": "Beta vulgaris L.",
  "images": ["http://media.eol.org/content/2013/11/15/07/80624_orig.jpg", "http://media.eol.org/content/2013/07/02/01/19243_orig.jpg", "http://media.eol.org/content/2012/06/13/08/69921_orig.jpg", "http://media.eol.org/content/2013/07/02/01/14101_orig.jpg", "http://media.eol.org/content/2014/08/15/02/44310_orig.jpg", "http://media.eol.org/content/2014/08/15/02/03889_orig.jpg", "http://media.eol.org/content/2014/08/15/02/11946_orig.jpg", "http://media.eol.org/content/2013/07/02/01/77684_orig.jpg", "http://media.eol.org/content/2014/08/15/06/47718_orig.jpg", "http://media.eol.org/content/2014/08/15/02/18858_orig.jpg"],
  "names": [{
    "vernacularName": "ضرس الكلب (ضِرس الكَلب)",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "سلق (سَلق)",
    "language": "ar"
  }, {
    "vernacularName": "سلق (سَلْق)",
    "language": "ar"
  }, {
    "vernacularName": "فجل بو الليل (فِجل بو الليل)",
    "language": "ar"
  }, {
    "vernacularName": "Gemeine Rübe",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Rübe",
    "language": "de"
  }, {
    "vernacularName": "Zuckerrübe",
    "language": "de"
  }, {
    "vernacularName": "beet",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Beet root",
    "language": "en"
  }, {
    "vernacularName": "Beetroot",
    "language": "en"
  }, {
    "vernacularName": "Red Beet",
    "language": "en"
  }, {
    "vernacularName": "Sugar Beet",
    "language": "en"
  }, {
    "vernacularName": "Swiss chard",
    "language": "en"
  }, {
    "vernacularName": "White beet",
    "language": "en"
  }, {
    "vernacularName": "common beet",
    "language": "en"
  }, {
    "vernacularName": "common beet, sugar beet, Swiss chard",
    "language": "en"
  }, {
    "vernacularName": "cultivated beet",
    "language": "en"
  }, {
    "vernacularName": "sea beet",
    "language": "en"
  }, {
    "vernacularName": "acelga",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Betterave commune, Bette-épinard",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Betterave fourragère",
    "language": "fr"
  }, {
    "vernacularName": "Betterave rouge potagère",
    "language": "fr"
  }, {
    "vernacularName": "Betterave sucrière",
    "language": "fr"
  }, {
    "vernacularName": "bieta a foglia",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "bietola da taglio",
    "language": "it"
  }, {
    "vernacularName": "acelga",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "Acelga-brava",
    "language": "pt"
  }, {
    "vernacularName": "Beterraba-sacarina",
    "language": "pt"
  }, {
    "vernacularName": "甜菜",
    "language": "zh",
    "eol_preferred": true
  }, {
    "vernacularName": "海白菜",
    "language": "zh"
  }, {
    "vernacularName": "猪乸菜",
    "language": "zh"
  }, {
    "vernacularName": "紫萝卜",
    "language": "zh"
  }, {
    "vernacularName": "红菜头",
    "language": "zh"
  }, {
    "vernacularName": "莙荙菜",
    "language": "zh"
  }, {
    "vernacularName": "菾菜",
    "language": "zh"
  }],
  "thumbs": [null, "http://media.eol.org/content/2013/11/15/07/80624_98_68.jpg", "http://media.eol.org/content/2013/07/02/01/19243_98_68.jpg", "http://media.eol.org/content/2012/06/13/08/69921_98_68.jpg", "http://media.eol.org/content/2013/07/02/01/14101_98_68.jpg", "http://media.eol.org/content/2014/08/15/02/44310_98_68.jpg", "http://media.eol.org/content/2014/08/15/02/03889_98_68.jpg", "http://media.eol.org/content/2014/08/15/02/11946_98_68.jpg", "http://media.eol.org/content/2013/07/02/01/77684_98_68.jpg", "http://media.eol.org/content/2014/08/15/06/47718_98_68.jpg", "http://media.eol.org/content/2014/08/15/02/18858_98_68.jpg"]
}, {
  "id": 583895,
  "name": "Brassica nigra (L.) W. D. J. Koch",
  "images": ["http://media.eol.org/content/2011/10/15/22/13063_orig.jpg", "http://media.eol.org/content/2014/08/15/04/92209_orig.jpg", "http://media.eol.org/content/2014/08/15/04/24846_orig.jpg", "http://media.eol.org/content/2015/02/16/07/43917_orig.jpg", "http://media.eol.org/content/2015/02/16/07/24320_orig.jpg", "http://media.eol.org/content/2011/10/06/03/29768_orig.jpg", "http://media.eol.org/content/2011/10/15/22/93451_orig.jpg", "http://media.eol.org/content/2011/10/15/22/49522_orig.jpg", "http://media.eol.org/content/2011/10/15/22/78682_orig.jpg", "http://media.eol.org/content/2011/10/15/22/43776_orig.jpg"],
  "names": [{
    "vernacularName": "خردل",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "Khardal",
    "language": "ar"
  }, {
    "vernacularName": "Khardal aswad",
    "language": "ar"
  }, {
    "vernacularName": "habet el-baraka",
    "language": "ar"
  }, {
    "vernacularName": "خردل (خَردل)",
    "language": "ar"
  }, {
    "vernacularName": "خردل اسود",
    "language": "ar"
  }, {
    "vernacularName": "خَرْدَل",
    "language": "ar"
  }, {
    "vernacularName": "خَرْدَل أَسْوَد",
    "language": "ar"
  }, {
    "vernacularName": "كبر(كَبَر)",
    "language": "ar"
  }, {
    "vernacularName": "لبدان (لِبدان)",
    "language": "ar"
  }, {
    "vernacularName": "لبسان (لِبسان)",
    "language": "ar"
  }, {
    "vernacularName": "لفسان (لِفسان)",
    "language": "ar"
  }, {
    "vernacularName": "Schwarzer Senf",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Braunsenf",
    "language": "de"
  }, {
    "vernacularName": "black mustard",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Black mustard seed",
    "language": "en"
  }, {
    "vernacularName": "Brown mustard seed",
    "language": "en"
  }, {
    "vernacularName": "Indian mustard",
    "language": "en"
  }, {
    "vernacularName": "mustard",
    "language": "en"
  }, {
    "vernacularName": "shortpod mustard",
    "language": "en"
  }, {
    "vernacularName": "Mostaza negra",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Mostaza de Indias",
    "language": "es"
  }, {
    "vernacularName": "jenabe ajenabo",
    "language": "es"
  }, {
    "vernacularName": "Moutarde noire",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Moutarde",
    "language": "fr"
  }, {
    "vernacularName": "Moutarde brune",
    "language": "fr"
  }, {
    "vernacularName": "Moutarde de Chine",
    "language": "fr"
  }, {
    "vernacularName": "Moutarde de l'Inde",
    "language": "fr"
  }, {
    "vernacularName": "Moutarde noire, Chou noir",
    "language": "fr"
  }, {
    "vernacularName": "moutarde sauvage",
    "language": "fr"
  }, {
    "vernacularName": "petit bouquet jaune",
    "language": "fr"
  }, {
    "vernacularName": "senévé",
    "language": "fr"
  }, {
    "vernacularName": "senévé noir",
    "language": "fr"
  }, {
    "vernacularName": "Senape nera",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "senepa vera",
    "language": "it"
  }, {
    "vernacularName": "senevra",
    "language": "it"
  }, {
    "vernacularName": "Mostarda (preta)",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "mostarda preta",
    "language": "pt"
  }, {
    "vernacularName": "黑芥",
    "language": "zh",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2011/10/15/22/13063_98_68.jpg", "http://media.eol.org/content/2014/08/15/04/92209_98_68.jpg", "http://media.eol.org/content/2014/08/15/04/24846_98_68.jpg", "http://media.eol.org/content/2015/02/16/07/43917_98_68.jpg", "http://media.eol.org/content/2015/02/16/07/24320_98_68.jpg", "http://media.eol.org/content/2011/10/06/03/29768_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/93451_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/49522_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/78682_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/43776_98_68.jpg"]
}, {
  "id": 1098038,
  "name": "Galium aparine L.",
  "images": ["http://media.eol.org/content/2016/07/20/21/48179_orig.jpg", "http://media.eol.org/content/2010/03/24/02/08336_orig.jpg", "http://media.eol.org/content/2012/06/12/19/55990_orig.jpg", "http://media.eol.org/content/2013/07/02/02/57344_orig.jpg", "http://media.eol.org/content/2013/06/02/02/03455_orig.jpg", "http://media.eol.org/content/2013/09/02/02/14722_orig.jpg", "http://media.eol.org/content/2012/12/05/19/09763_orig.jpg", "http://media.eol.org/content/2013/07/02/02/35340_orig.jpg", "http://media.eol.org/content/2013/09/02/02/73413_orig.jpg", "http://media.eol.org/content/2012/12/05/02/04020_orig.jpg"],
  "names": [{
    "vernacularName": "Kletten-Labkraut",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "goose grass",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Catchweed",
    "language": "en"
  }, {
    "vernacularName": "Clivers",
    "language": "en"
  }, {
    "vernacularName": "bedstraw",
    "language": "en"
  }, {
    "vernacularName": "catchweed bedstraw",
    "language": "en"
  }, {
    "vernacularName": "cleavers",
    "language": "en"
  }, {
    "vernacularName": "cleaverwort",
    "language": "en"
  }, {
    "vernacularName": "scarthgrass",
    "language": "en"
  }, {
    "vernacularName": "scratch bedstraw",
    "language": "en"
  }, {
    "vernacularName": "sticky-willy",
    "language": "en"
  }, {
    "vernacularName": "stickywilly",
    "language": "en"
  }, {
    "vernacularName": "white hedge",
    "language": "en"
  }, {
    "vernacularName": "Hierba de gallina",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "amor del hortelano",
    "language": "es"
  }, {
    "vernacularName": "apelagoso",
    "language": "es"
  }, {
    "vernacularName": "Gaillet gratteron",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Gaillet de Paris",
    "language": "fr"
  }, {
    "vernacularName": "Gaillet gratteron, Herbe collante",
    "language": "fr"
  }, {
    "vernacularName": "Caglio asprello",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "猪殃殃",
    "language": "zh",
    "eol_preferred": true
  }, {
    "vernacularName": "八仙草",
    "language": "zh"
  }, {
    "vernacularName": "爬拉殃",
    "language": "zh"
  }],
  "thumbs": [null, "http://media.eol.org/content/2016/07/20/21/48179_98_68.jpg", "http://media.eol.org/content/2010/03/24/02/08336_98_68.jpg", "http://media.eol.org/content/2012/06/12/19/55990_98_68.jpg", "http://media.eol.org/content/2013/07/02/02/57344_98_68.jpg", "http://media.eol.org/content/2013/06/02/02/03455_98_68.jpg", "http://media.eol.org/content/2013/09/02/02/14722_98_68.jpg", "http://media.eol.org/content/2012/12/05/19/09763_98_68.jpg", "http://media.eol.org/content/2013/07/02/02/35340_98_68.jpg", "http://media.eol.org/content/2013/09/02/02/73413_98_68.jpg", "http://media.eol.org/content/2012/12/05/02/04020_98_68.jpg"]
}, {
  "id": 584656,
  "name": "Malva sylvestris L.",
  "images": ["http://media.eol.org/content/2012/05/23/18/29821_orig.jpg", "http://media.eol.org/content/2011/10/10/11/28382_orig.jpg", "http://media.eol.org/content/2011/10/10/11/28730_orig.jpg", "http://media.eol.org/content/2011/10/10/11/46647_orig.jpg", "http://media.eol.org/content/2011/10/10/11/58235_orig.jpg", "http://media.eol.org/content/2011/10/10/11/26275_orig.jpg", "http://media.eol.org/content/2011/10/10/11/16839_orig.jpg", "http://media.eol.org/content/2011/10/10/11/54325_orig.jpg", "http://media.eol.org/content/2011/10/10/11/58179_orig.jpg", "http://media.eol.org/content/2011/10/10/11/10452_orig.jpg"],
  "names": [{
    "vernacularName": "رقمه (رَقْمه)، رقميه (رَقميه)",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "خبازى (خُبازى)، خبيزه (خُبيزه)",
    "language": "ar"
  }, {
    "vernacularName": "Wilde Malve",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "high mallow",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Blue Mallow",
    "language": "en"
  }, {
    "vernacularName": "Cheeses",
    "language": "en"
  }, {
    "vernacularName": "High Cheeseweed",
    "language": "en"
  }, {
    "vernacularName": "Marsh Mallow",
    "language": "en"
  }, {
    "vernacularName": "Zebrina Mallow",
    "language": "en"
  }, {
    "vernacularName": "common mallow",
    "language": "en"
  }, {
    "vernacularName": "mallards",
    "language": "en"
  }, {
    "vernacularName": "Malva Común",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Malva",
    "language": "es"
  }, {
    "vernacularName": "Grande mauve",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Mauve sauvage, Mauve sylvestre, Grande mauve",
    "language": "fr"
  }, {
    "vernacularName": "Malva",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "Malva selvatica",
    "language": "it"
  }, {
    "vernacularName": "Malva-comum",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "Malva",
    "language": "pt"
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/05/23/18/29821_98_68.jpg", "http://media.eol.org/content/2011/10/10/11/28382_98_68.jpg", "http://media.eol.org/content/2011/10/10/11/28730_98_68.jpg", "http://media.eol.org/content/2011/10/10/11/46647_98_68.jpg", "http://media.eol.org/content/2011/10/10/11/58235_98_68.jpg", "http://media.eol.org/content/2011/10/10/11/26275_98_68.jpg", "http://media.eol.org/content/2011/10/10/11/16839_98_68.jpg", "http://media.eol.org/content/2011/10/10/11/54325_98_68.jpg", "http://media.eol.org/content/2011/10/10/11/58179_98_68.jpg", "http://media.eol.org/content/2011/10/10/11/10452_98_68.jpg"]
}, {
  "id": 1136554,
  "name": "Ophrys apifera Huds.",
  "images": ["http://media.eol.org/content/2014/10/21/22/80433_orig.jpg", "http://media.eol.org/content/2011/11/02/11/01083_orig.jpg", "http://media.eol.org/content/2015/05/20/10/20939_orig.jpg", "http://media.eol.org/content/2012/06/26/05/42673_orig.jpg", "http://media.eol.org/content/2014/07/08/07/45435_orig.jpg", "http://media.eol.org/content/2014/07/08/07/44064_orig.jpg", "http://media.eol.org/content/2014/06/14/15/15636_orig.jpg", "http://media.eol.org/content/2016/07/20/19/28740_orig.jpg", "http://media.eol.org/content/2012/05/23/20/86191_orig.jpg", "http://media.eol.org/content/2014/08/15/03/51425_orig.jpg"],
  "names": [{
    "vernacularName": "Bienen-Ragwurz",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Wasp orchid",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "bee orchid",
    "language": "en"
  }, {
    "vernacularName": "Ophrys abeille",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Ophrys Tenthrède",
    "language": "fr"
  }, {
    "vernacularName": "Ophrys bourdon",
    "language": "fr"
  }, {
    "vernacularName": "Ophrys en forme d'araignée, Ophrys arachnitiforme, Ophrys brillant",
    "language": "fr"
  }, {
    "vernacularName": "Ophrys frelon, Ophrys bourdon",
    "language": "fr"
  }, {
    "vernacularName": "Erva-aranha",
    "language": "pt",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/10/21/22/80433_98_68.jpg", "http://media.eol.org/content/2011/11/02/11/01083_98_68.jpg", "http://media.eol.org/content/2015/05/20/10/20939_98_68.jpg", "http://media.eol.org/content/2012/06/26/05/42673_98_68.jpg", "http://media.eol.org/content/2014/07/08/07/45435_98_68.jpg", "http://media.eol.org/content/2014/07/08/07/44064_98_68.jpg", "http://media.eol.org/content/2014/06/14/15/15636_98_68.jpg", "http://media.eol.org/content/2016/07/20/19/28740_98_68.jpg", "http://media.eol.org/content/2012/05/23/20/86191_98_68.jpg", "http://media.eol.org/content/2014/08/15/03/51425_98_68.jpg"]
}, {
  "id": 577759,
  "name": "Campanula patula L.",
  "images": ["http://media.eol.org/content/2009/07/24/03/05138_orig.jpg", "http://media.eol.org/content/2011/10/15/22/70562_orig.jpg", "http://media.eol.org/content/2012/05/23/08/84938_orig.jpg", "http://media.eol.org/content/2012/05/23/08/01656_orig.jpg", "http://media.eol.org/content/2012/05/23/08/43868_orig.jpg", "http://media.eol.org/content/2012/05/23/08/22336_orig.jpg", "http://media.eol.org/content/2012/05/23/08/06870_orig.jpg", "http://media.eol.org/content/2013/08/11/17/32633_orig.jpg", "http://media.eol.org/content/2012/05/23/08/27120_orig.jpg", "http://media.eol.org/content/2012/05/23/08/90730_orig.jpg"],
  "names": [{
    "vernacularName": "spreading bellflower",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Rambling Bellflower",
    "language": "en"
  }, {
    "vernacularName": "Campanule étoilée, Campanule étalée",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Campanule de Costa",
    "language": "fr"
  }, {
    "vernacularName": "Campanule étalée",
    "language": "fr"
  }],
  "thumbs": [null, "http://media.eol.org/content/2009/07/24/03/05138_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/70562_98_68.jpg", "http://media.eol.org/content/2012/05/23/08/84938_98_68.jpg", "http://media.eol.org/content/2012/05/23/08/01656_98_68.jpg", "http://media.eol.org/content/2012/05/23/08/43868_98_68.jpg", "http://media.eol.org/content/2012/05/23/08/22336_98_68.jpg", "http://media.eol.org/content/2012/05/23/08/06870_98_68.jpg", "http://media.eol.org/content/2013/08/11/17/32633_98_68.jpg", "http://media.eol.org/content/2012/05/23/08/27120_98_68.jpg", "http://media.eol.org/content/2012/05/23/08/90730_98_68.jpg"]
}, {
  "id": 583434,
  "name": "Anagallis arvensis L.",
  "images": ["http://media.eol.org/content/2014/08/14/23/13180_orig.jpg", "http://media.eol.org/content/2013/11/07/01/08522_orig.jpg", "http://media.eol.org/content/2012/05/23/05/32680_orig.jpg", "http://media.eol.org/content/2012/05/23/05/58940_orig.jpg", "http://media.eol.org/content/2012/05/23/05/03179_orig.jpg", "http://media.eol.org/content/2012/05/23/05/36075_orig.jpg", "http://media.eol.org/content/2012/05/23/05/89030_orig.jpg", "http://media.eol.org/content/2012/05/23/05/64646_orig.jpg", "http://media.eol.org/content/2012/05/23/05/40240_orig.jpg", "http://media.eol.org/content/2012/05/23/05/36440_orig.jpg"],
  "names": [{
    "vernacularName": "قنفوده (قُنفوده)",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "ام لبن (أم لِبِن)",
    "language": "ar"
  }, {
    "vernacularName": "صابون غيط",
    "language": "ar"
  }, {
    "vernacularName": "عبيله",
    "language": "ar"
  }, {
    "vernacularName": "عين الجَمل (عَين الجَمل)",
    "language": "ar"
  }, {
    "vernacularName": "لبين، حشيشه العلق",
    "language": "ar"
  }, {
    "vernacularName": "Acker-Gauchheil",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "pimpernel",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "scarlet pimpernel",
    "language": "en"
  }, {
    "vernacularName": "Andagallo",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Pimpinela",
    "language": "es"
  }, {
    "vernacularName": "Mouron des champs",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Mouron rouge, Fausse Morgeline",
    "language": "fr"
  }, {
    "vernacularName": "Mouron à feuilles larges",
    "language": "fr"
  }, {
    "vernacularName": "Centonchio dei campi",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "Erva-do-garrotilho",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "Morrião-dos-campos",
    "language": "pt"
  }, {
    "vernacularName": "琉璃繁缕",
    "language": "zh",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/08/14/23/13180_98_68.jpg", "http://media.eol.org/content/2013/11/07/01/08522_98_68.jpg", "http://media.eol.org/content/2012/05/23/05/32680_98_68.jpg", "http://media.eol.org/content/2012/05/23/05/58940_98_68.jpg", "http://media.eol.org/content/2012/05/23/05/03179_98_68.jpg", "http://media.eol.org/content/2012/05/23/05/36075_98_68.jpg", "http://media.eol.org/content/2012/05/23/05/89030_98_68.jpg", "http://media.eol.org/content/2012/05/23/05/64646_98_68.jpg", "http://media.eol.org/content/2012/05/23/05/40240_98_68.jpg", "http://media.eol.org/content/2012/05/23/05/36440_98_68.jpg"]
}, {
  "id": 579906,
  "name": "Echium plantagineum L.",
  "images": ["http://media.eol.org/content/2014/08/15/03/59975_orig.jpg", "http://media.eol.org/content/2014/08/15/03/80176_orig.jpg", "http://media.eol.org/content/2012/05/23/12/03269_orig.jpg", "http://media.eol.org/content/2012/05/23/12/59315_orig.jpg", "http://media.eol.org/content/2014/08/15/05/96951_orig.jpg", "http://media.eol.org/content/2014/08/15/05/17813_orig.jpg", "http://media.eol.org/content/2014/08/15/05/30002_orig.jpg", "http://media.eol.org/content/2014/08/15/04/85016_orig.jpg", "http://media.eol.org/content/2014/08/15/05/96951_orig.jpg", "http://media.eol.org/content/2011/10/15/23/54801_orig.jpg"],
  "names": [{
    "vernacularName": "Wegerichblättriger Natternkopf",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Purple Viper's-bugloss",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Bloubblom",
    "language": "en"
  }, {
    "vernacularName": "Blue Echium",
    "language": "en"
  }, {
    "vernacularName": "Lady Campbell-weed",
    "language": "en"
  }, {
    "vernacularName": "Paterson’s curse",
    "language": "en"
  }, {
    "vernacularName": "Purple Echium",
    "language": "en"
  }, {
    "vernacularName": "Viper's Bugloss",
    "language": "en"
  }, {
    "vernacularName": "Viperine",
    "language": "en"
  }, {
    "vernacularName": "blueweed",
    "language": "en"
  }, {
    "vernacularName": "echium",
    "language": "en"
  }, {
    "vernacularName": "plantain viper's-bugloss",
    "language": "en"
  }, {
    "vernacularName": "salvation jane",
    "language": "en"
  }, {
    "vernacularName": "Sonaja",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Vipérine à feuilles de plantain, Vipérine faux Plantain",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Vipérine vulgaire",
    "language": "fr"
  }, {
    "vernacularName": "Soagem",
    "language": "pt",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/08/15/03/59975_98_68.jpg", "http://media.eol.org/content/2014/08/15/03/80176_98_68.jpg", "http://media.eol.org/content/2012/05/23/12/03269_98_68.jpg", "http://media.eol.org/content/2012/05/23/12/59315_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/96951_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/17813_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/30002_98_68.jpg", "http://media.eol.org/content/2014/08/15/04/85016_98_68.jpg", "http://media.eol.org/content/2014/08/15/05/96951_98_68.jpg", "http://media.eol.org/content/2011/10/15/23/54801_98_68.jpg"]
}, {
  "id": 1151536,
  "name": "Quercus ilex L.",
  "images": ["http://media.eol.org/content/2012/06/12/13/03827_orig.jpg", "http://media.eol.org/content/2014/04/29/21/30619_orig.jpg", "http://media.eol.org/content/2012/06/12/13/55909_orig.jpg", "http://media.eol.org/content/2012/06/12/13/65648_orig.jpg", "http://media.eol.org/content/2012/06/12/13/83279_orig.jpg", "http://media.eol.org/content/2012/06/12/13/73919_orig.jpg", "http://media.eol.org/content/2012/06/12/13/99932_orig.jpg", "http://media.eol.org/content/2012/06/12/13/83759_orig.jpg", "http://media.eol.org/content/2012/06/12/13/33563_orig.jpg", "http://media.eol.org/content/2012/06/12/13/61668_orig.jpg"],
  "names": [{
    "vernacularName": "Holm Oak",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Evergreen Oak",
    "language": "en"
  }, {
    "vernacularName": "holly oak",
    "language": "en"
  }, {
    "vernacularName": "encina",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Chêne vert",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "leccio",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "elice",
    "language": "it"
  }, {
    "vernacularName": "azinheira",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "azinheiro",
    "language": "pt"
  }, {
    "vernacularName": "azinho",
    "language": "pt"
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/06/12/13/03827_98_68.jpg", "http://media.eol.org/content/2014/04/29/21/30619_98_68.jpg", "http://media.eol.org/content/2012/06/12/13/55909_98_68.jpg", "http://media.eol.org/content/2012/06/12/13/65648_98_68.jpg", "http://media.eol.org/content/2012/06/12/13/83279_98_68.jpg", "http://media.eol.org/content/2012/06/12/13/73919_98_68.jpg", "http://media.eol.org/content/2012/06/12/13/99932_98_68.jpg", "http://media.eol.org/content/2012/06/12/13/83759_98_68.jpg", "http://media.eol.org/content/2012/06/12/13/33563_98_68.jpg", "http://media.eol.org/content/2012/06/12/13/61668_98_68.jpg"]
}, {
  "id": 583608,
  "name": "Arbutus unedo L.",
  "images": ["http://media.eol.org/content/2012/06/13/13/64173_orig.jpg", "http://media.eol.org/content/2015/01/04/05/34066_orig.jpg", "http://media.eol.org/content/2012/06/13/13/79136_orig.jpg", "http://media.eol.org/content/2012/06/13/13/61274_orig.jpg", "http://media.eol.org/content/2012/06/13/13/04772_orig.jpg", "http://media.eol.org/content/2012/06/13/13/83559_orig.jpg", "http://media.eol.org/content/2012/06/13/13/12959_orig.jpg", "http://media.eol.org/content/2012/06/13/13/26710_orig.jpg", "http://media.eol.org/content/2015/01/04/05/88128_orig.jpg", "http://media.eol.org/content/2015/01/01/03/38579_orig.jpg"],
  "names": [{
    "vernacularName": "Erdbeerbaum",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Strawberry-tree",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Arbutus",
    "language": "en"
  }, {
    "vernacularName": "Irish Strawberry Tree",
    "language": "en"
  }, {
    "vernacularName": "Killarney Strawberry Tree",
    "language": "en"
  }, {
    "vernacularName": "strawberry tree",
    "language": "en"
  }, {
    "vernacularName": "madroño",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "borrachín",
    "language": "es"
  }, {
    "vernacularName": "Arbousier commun, Arbre aux fraises",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "corbezzolo",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "sorbo peloso",
    "language": "it"
  }, {
    "vernacularName": "Medronheiro",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "Ervedeiro",
    "language": "pt"
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/06/13/13/64173_98_68.jpg", "http://media.eol.org/content/2015/01/04/05/34066_98_68.jpg", "http://media.eol.org/content/2012/06/13/13/79136_98_68.jpg", "http://media.eol.org/content/2012/06/13/13/61274_98_68.jpg", "http://media.eol.org/content/2012/06/13/13/04772_98_68.jpg", "http://media.eol.org/content/2012/06/13/13/83559_98_68.jpg", "http://media.eol.org/content/2012/06/13/13/12959_98_68.jpg", "http://media.eol.org/content/2012/06/13/13/26710_98_68.jpg", "http://media.eol.org/content/2015/01/04/05/88128_98_68.jpg", "http://media.eol.org/content/2015/01/01/03/38579_98_68.jpg"]
}, {
  "id": 1114459,
  "name": "Hordeum murinum L.",
  "images": ["http://media.eol.org/content/2014/08/14/23/59136_orig.jpg", "http://media.eol.org/content/2014/08/14/23/33570_orig.jpg", "http://media.eol.org/content/2011/10/06/06/01357_orig.jpg", "http://media.eol.org/content/2011/10/06/06/72743_orig.jpg", "http://media.eol.org/content/2011/10/06/06/95079_orig.jpg", "http://media.eol.org/content/2011/10/06/06/46541_orig.jpg", "http://media.eol.org/content/2012/05/23/15/25926_orig.jpg", "http://media.eol.org/content/2012/05/23/15/79771_orig.jpg", "http://media.eol.org/content/2011/08/04/12/19276_orig.jpg", "http://media.eol.org/content/2014/04/26/07/47106_orig.jpg"],
  "names": [{
    "vernacularName": "بهمى (بَهمى، بُهمى)",
    "language": "ar",
    "eol_preferred": true
  }, {
    "vernacularName": "شعيريه (شَعيريه)، شعريه (شَعْريه)",
    "language": "ar"
  }, {
    "vernacularName": "Mäuse-Gerste",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "mouse barley",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "False Barley",
    "language": "en"
  }, {
    "vernacularName": "bulbous barley",
    "language": "en"
  }, {
    "vernacularName": "Orge des rats",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Orge des lièvres",
    "language": "fr"
  }, {
    "vernacularName": "Orge sauvage, Orge Queue-de-rat",
    "language": "fr"
  }, {
    "vernacularName": "Orzo selvatico",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "Cevada-das-lebres",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "Cevada-dos-ratos",
    "language": "pt"
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/08/14/23/59136_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/33570_98_68.jpg", "http://media.eol.org/content/2011/10/06/06/01357_98_68.jpg", "http://media.eol.org/content/2011/10/06/06/72743_98_68.jpg", "http://media.eol.org/content/2011/10/06/06/95079_98_68.jpg", "http://media.eol.org/content/2011/10/06/06/46541_98_68.jpg", "http://media.eol.org/content/2012/05/23/15/25926_98_68.jpg", "http://media.eol.org/content/2012/05/23/15/79771_98_68.jpg", "http://media.eol.org/content/2011/08/04/12/19276_98_68.jpg", "http://media.eol.org/content/2014/04/26/07/47106_98_68.jpg"]
}, {
  "id": 2864808,
  "name": "Galactites tomentosa Moench",
  "images": ["http://media.eol.org/content/2014/08/15/05/17177_orig.jpg", "http://media.eol.org/content/2014/08/14/23/20333_orig.jpg", "http://media.eol.org/content/2014/08/15/03/04576_orig.jpg", "http://media.eol.org/content/2014/08/15/02/52933_orig.jpg", "http://media.eol.org/content/2012/05/23/13/98678_orig.jpg", "http://media.eol.org/content/2012/05/23/13/70577_orig.jpg", "http://media.eol.org/content/2012/05/23/13/42455_orig.jpg", "http://media.eol.org/content/2012/05/23/13/20642_orig.jpg", "http://media.eol.org/content/2012/05/23/13/23964_orig.jpg", "http://media.eol.org/content/2014/07/08/09/63715_orig.jpg"],
  "names": [{
    "vernacularName": "Boar Thistle",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Purple Milk Thistle",
    "language": "en"
  }, {
    "vernacularName": "Chardon laiteux",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Cardos-prateados",
    "language": "pt",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/08/15/05/17177_98_68.jpg", "http://media.eol.org/content/2014/08/14/23/20333_98_68.jpg", "http://media.eol.org/content/2014/08/15/03/04576_98_68.jpg", "http://media.eol.org/content/2014/08/15/02/52933_98_68.jpg", "http://media.eol.org/content/2012/05/23/13/98678_98_68.jpg", "http://media.eol.org/content/2012/05/23/13/70577_98_68.jpg", "http://media.eol.org/content/2012/05/23/13/42455_98_68.jpg", "http://media.eol.org/content/2012/05/23/13/20642_98_68.jpg", "http://media.eol.org/content/2012/05/23/13/23964_98_68.jpg", "http://media.eol.org/content/2014/07/08/09/63715_98_68.jpg"]
}, {
  "id": 579910,
  "name": "Echium vulgare L.",
  "images": ["http://media.eol.org/content/2009/07/24/02/90636_orig.jpg", "http://media.eol.org/content/2013/12/02/08/07464_orig.jpg", "http://media.eol.org/content/2012/05/23/12/07084_orig.jpg", "http://media.eol.org/content/2015/01/08/04/51884_orig.jpg", "http://media.eol.org/content/2012/12/11/21/19796_orig.jpg", "http://media.eol.org/content/2012/12/11/21/01988_orig.jpg", "http://media.eol.org/content/2012/12/11/21/73966_orig.jpg", "http://media.eol.org/content/2012/12/05/20/02707_orig.jpg", "http://media.eol.org/content/2012/12/05/20/32104_orig.jpg", "http://media.eol.org/content/2012/12/05/20/57977_orig.jpg"],
  "names": [{
    "vernacularName": "Natterkopf",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Gemeiner Natternkopf",
    "language": "de"
  }, {
    "vernacularName": "Gewöhnlicher Natternkopf",
    "language": "de"
  }, {
    "vernacularName": "common viper's bugloss",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Blue Echium",
    "language": "en"
  }, {
    "vernacularName": "Blue-devil",
    "language": "en"
  }, {
    "vernacularName": "Common Viper's-bugloss",
    "language": "en"
  }, {
    "vernacularName": "Viper's Bugloss",
    "language": "en"
  }, {
    "vernacularName": "blue-thistle",
    "language": "en"
  }, {
    "vernacularName": "blueweed",
    "language": "en"
  }, {
    "vernacularName": "bugloss",
    "language": "en"
  }, {
    "vernacularName": "common echium",
    "language": "en"
  }, {
    "vernacularName": "common vipersbugloss",
    "language": "en"
  }, {
    "vernacularName": "viborera",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Vipérine commune",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Vipérine commune, Vipérine vulgaire",
    "language": "fr"
  }, {
    "vernacularName": "Vipérine vulgaire",
    "language": "fr"
  }, {
    "vernacularName": "bouquet bleu",
    "language": "fr"
  }, {
    "vernacularName": "herbe aux vipéres",
    "language": "fr"
  }, {
    "vernacularName": "herbe bleue",
    "language": "fr"
  }, {
    "vernacularName": "herbe piquante",
    "language": "fr"
  }, {
    "vernacularName": "langue d'oie",
    "language": "fr"
  }, {
    "vernacularName": "erba rogna",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "Viperina azzurra",
    "language": "it"
  }, {
    "vernacularName": "Borrago",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "Erva-azul",
    "language": "pt"
  }, {
    "vernacularName": "蓝蓟",
    "language": "zh",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2009/07/24/02/90636_98_68.jpg", "http://media.eol.org/content/2013/12/02/08/07464_98_68.jpg", "http://media.eol.org/content/2012/05/23/12/07084_98_68.jpg", "http://media.eol.org/content/2015/01/08/04/51884_98_68.jpg", "http://media.eol.org/content/2012/12/11/21/19796_98_68.jpg", "http://media.eol.org/content/2012/12/11/21/01988_98_68.jpg", "http://media.eol.org/content/2012/12/11/21/73966_98_68.jpg", "http://media.eol.org/content/2012/12/05/20/02707_98_68.jpg", "http://media.eol.org/content/2012/12/05/20/32104_98_68.jpg", "http://media.eol.org/content/2012/12/05/20/57977_98_68.jpg"]
}, {
  "id": 5152569,
  "name": "Sinapis alba subsp. mairei (H. Lindb.) Maire",
  "images": ["http://media.eol.org/content/2012/08/20/00/07702_orig.jpg", "http://media.eol.org/content/2012/08/20/00/29760_orig.jpg", "http://media.eol.org/content/2012/08/20/00/69878_orig.jpg", "http://media.eol.org/content/2012/08/20/00/01636_orig.jpg", "http://media.eol.org/content/2015/04/30/14/24229_orig.jpg", "http://media.eol.org/content/2015/04/30/14/45200_orig.jpg", "http://media.eol.org/content/2015/04/30/14/09897_orig.jpg", "http://media.eol.org/content/2015/04/30/14/00259_orig.jpg"],
  "names": [{
    "vernacularName": "Moutarde de Maire",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Mostarda-branca",
    "language": "pt",
    "eol_preferred": true
  }],
  "thumbs": ["http://media.eol.org/content/2012/08/20/00/07702_98_68.jpg", "http://media.eol.org/content/2012/08/20/00/29760_98_68.jpg", "http://media.eol.org/content/2012/08/20/00/69878_98_68.jpg", "http://media.eol.org/content/2012/08/20/00/01636_98_68.jpg", "http://media.eol.org/content/2015/04/30/14/24229_98_68.jpg", "http://media.eol.org/content/2015/04/30/14/45200_98_68.jpg", "http://media.eol.org/content/2015/04/30/14/09897_98_68.jpg", "http://media.eol.org/content/2015/04/30/14/00259_98_68.jpg"]
}, {
  "id": 509700,
  "name": "Pulicaria dysenterica (L.) Gaertn.",
  "images": ["http://media.eol.org/content/2014/10/02/04/07292_orig.jpg", "http://media.eol.org/content/2014/12/12/19/38099_orig.jpg", "http://media.eol.org/content/2014/10/02/04/82016_orig.jpg", "http://media.eol.org/content/2012/12/04/22/46268_orig.jpg", "http://media.eol.org/content/2012/12/04/22/01730_orig.jpg", "http://media.eol.org/content/2012/12/04/22/37802_orig.jpg", "http://media.eol.org/content/2012/12/04/22/17910_orig.jpg", "http://media.eol.org/content/2012/12/04/22/29105_orig.jpg", "http://media.eol.org/content/2012/12/04/12/14142_orig.jpg", "http://media.eol.org/content/2012/12/04/12/38117_orig.jpg"],
  "names": [{
    "vernacularName": "Großes Flohkraut",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Ruhr-Flohkraut",
    "language": "de"
  }, {
    "vernacularName": "Ruhrwurz",
    "language": "de"
  }, {
    "vernacularName": "meadow false fleabane",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Common Fleabane",
    "language": "en"
  }, {
    "vernacularName": "Hierba de Gato",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Pulicaire dysentérique",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Inule des fleuves, Inule d'Angleterre, Inule britannique, Inule de Grande-Bretagne",
    "language": "fr"
  }, {
    "vernacularName": "Erva-das-disenterias",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "Erva-de-São-Roque",
    "language": "pt"
  }, {
    "vernacularName": "止痢蚤草",
    "language": "zh",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/10/02/04/07292_98_68.jpg", "http://media.eol.org/content/2014/12/12/19/38099_98_68.jpg", "http://media.eol.org/content/2014/10/02/04/82016_98_68.jpg", "http://media.eol.org/content/2012/12/04/22/46268_98_68.jpg", "http://media.eol.org/content/2012/12/04/22/01730_98_68.jpg", "http://media.eol.org/content/2012/12/04/22/37802_98_68.jpg", "http://media.eol.org/content/2012/12/04/22/17910_98_68.jpg", "http://media.eol.org/content/2012/12/04/22/29105_98_68.jpg", "http://media.eol.org/content/2012/12/04/12/14142_98_68.jpg", "http://media.eol.org/content/2012/12/04/12/38117_98_68.jpg"]
}, {
  "id": 1061780,
  "name": "Pinus pinaster Aiton",
  "images": ["http://media.eol.org/content/2012/06/13/03/85842_orig.jpg", "http://media.eol.org/content/2012/06/13/03/10611_orig.jpg", "http://media.eol.org/content/2012/07/19/01/42580_orig.jpg", "http://media.eol.org/content/2015/04/30/07/50307_orig.jpg", "http://media.eol.org/content/2012/06/13/03/13189_orig.jpg", "http://media.eol.org/content/2012/08/07/03/99483_orig.jpg", "http://media.eol.org/content/2013/11/16/20/39151_orig.jpg", "http://media.eol.org/content/2014/07/08/07/99782_orig.jpg", "http://media.eol.org/content/2012/06/13/03/27893_orig.jpg", "http://media.eol.org/content/2012/07/19/01/84150_orig.jpg"],
  "names": [{
    "vernacularName": "Igelkiefer",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Igelföhre",
    "language": "de"
  }, {
    "vernacularName": "Meerkiefer",
    "language": "de"
  }, {
    "vernacularName": "Seeföhre",
    "language": "de"
  }, {
    "vernacularName": "Seekiefer",
    "language": "de"
  }, {
    "vernacularName": "Seestrand-Kiefer",
    "language": "de"
  }, {
    "vernacularName": "Sternkiefer",
    "language": "de"
  }, {
    "vernacularName": "Strand-Kiefer",
    "language": "de"
  }, {
    "vernacularName": "maritime pine",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "cluster pine",
    "language": "en"
  }, {
    "vernacularName": "pino gallego",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "pino marítimo",
    "language": "es"
  }, {
    "vernacularName": "pino resinero",
    "language": "es"
  }, {
    "vernacularName": "pin maritime",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Pin maritime, Pin mésogéen",
    "language": "fr"
  }, {
    "vernacularName": "pin des landes",
    "language": "fr"
  }, {
    "vernacularName": "pinastre",
    "language": "fr"
  }, {
    "vernacularName": "pinastro",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "Pino da fastelli",
    "language": "it"
  }, {
    "vernacularName": "pino marittimo",
    "language": "it"
  }, {
    "vernacularName": "pinheiro-bravo",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "pinheiro-marítimo",
    "language": "pt"
  }, {
    "vernacularName": "海岸松",
    "language": "zh",
    "eol_preferred": true
  }, {
    "vernacularName": "海岸松 (hai an song)",
    "language": "zh"
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/06/13/03/85842_98_68.jpg", "http://media.eol.org/content/2012/06/13/03/10611_98_68.jpg", "http://media.eol.org/content/2012/07/19/01/42580_98_68.jpg", "http://media.eol.org/content/2015/04/30/07/50307_98_68.jpg", "http://media.eol.org/content/2012/06/13/03/13189_98_68.jpg", "http://media.eol.org/content/2012/08/07/03/99483_98_68.jpg", "http://media.eol.org/content/2013/11/16/20/39151_98_68.jpg", "http://media.eol.org/content/2014/07/08/07/99782_98_68.jpg", "http://media.eol.org/content/2012/06/13/03/27893_98_68.jpg", "http://media.eol.org/content/2012/07/19/01/84150_98_68.jpg"]
}];
},{}],38:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var MARK_ANSWER = 'MARK_ANSWER';
var NEW_SCREEN = 'NEW_SCREEN';

var types = exports.types = {
    MARK_ANSWER: MARK_ANSWER,
    NEW_SCREEN: NEW_SCREEN
};
},{}],39:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var DOM = exports.DOM = {
    leftGrid: document.getElementsByClassName('js-left-grid')[0],
    leftHeader: document.getElementsByClassName('js-left-header')[0],
    leftBody: document.getElementsByClassName('js-left-body')[0],
    leftFooter: document.getElementsByClassName('js-left-footer')[0],

    collectionTxt: document.getElementsByClassName('js-txt-collection')[0],
    specimenRptr: document.getElementsByClassName('js-rptr-specimen')[0],
    moreSpecimensBtn: document.getElementsByClassName('js-btn-more-specimens')[0],

    rightGrid: document.getElementsByClassName('js-right-grid')[0],
    rightHeader: document.getElementsByClassName('js-right-header')[0],
    rightBody: document.getElementsByClassName('js-right-body')[0],
    rightFooter: document.getElementsByClassName('js-right-footer')[0],

    speciesRptr: document.getElementsByClassName('js-rptr-species')[0],
    headerTxt: document.getElementsByClassName('js-txt-header')[0],
    totalTxt: document.getElementsByClassName('js-txt-total')[0],
    correctTxt: document.getElementsByClassName('js-txt-correct')[0]
};
},{}],46:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = undefined;

var _storeRepo = require('../store/store-repo.js');

var _learnTypes = require('./learn-types.js');

var makeActionCreator = function makeActionCreator(action) {
  return function (value, meta) {
    return {
      type: action,
      data: value,
      meta: meta
    };
  };
};

var markAnswerAction = makeActionCreator(_learnTypes.types.MARK_ANSWER);
var newScreen = makeActionCreator(_learnTypes.types.NEW_SCREEN);

var boundMarkAnswer = function boundMarkAnswer(data) {
  return _storeRepo.store.dispatch(markAnswerAction(data));
};
var boundNewScreen = function boundNewScreen(data) {
  return _storeRepo.store.dispatch(newScreen(data, { delay: 500 }));
};

var actions = exports.actions = {
  boundMarkAnswer: boundMarkAnswer,
  boundNewScreen: boundNewScreen
};
},{"../store/store-repo.js":16,"./learn-types.js":38}],40:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderSpecies = undefined;

var _learnDom = require('../learn-dom.js');

var _storeRepo = require('../../store/store-repo.js');

var _learnActions = require('../learn-actions.js');

var _utils = require('../../utils/utils.js');

var currItem = null;

var renderSpecies = exports.renderSpecies = function renderSpecies() {
    var _store$getState = _storeRepo.store.getState(),
        strategy = _store$getState.strategy,
        randomiser = _store$getState.randomiser,
        items = _store$getState.items,
        item = _store$getState.item;

    if (item === currItem) return;

    currItem = item;

    var element = strategy.elements.filter(function (el) {
        return el.name === 'species';
    })[0];

    if (!element) return;

    var template = document.querySelector('.' + element.template);

    var rptrSpecies = template.content.querySelector('.js-rptr-species');

    var answers = randomiser.answersCollection.filter(function (alt) {
        return alt.id === item.id;
    })[0].species;

    var languages = ['en', 'pt'];
    rptrSpecies.innerHTML = answers.map(function (species) {
        var vernacularNames = R.take(5, species.names.filter(function (name) {
            return R.contains(name.language, languages);
        }).map(function (name) {
            return '<p>' + name.vernacularName + '</p>';
        })).join('');
        return '<div class="rectangle">\n                            <div class="answer" id="' + species.id + '">\n                                <button>' + species.name + '</button>\n                                <div class="vernacular-name">' + vernacularNames + '</div>\n                            </div>\n                        </div>';
    }).join('');

    var clone = document.importNode(template.content, true);

    clone.querySelectorAll('.js-rptr-species .rectangle .answer button').forEach(function (element) {
        element.addEventListener('click', function (event) {
            var _store$getState2 = _storeRepo.store.getState(),
                item = _store$getState2.item;

            var qandA = { question: item.name, answer: event.target.childNodes[0].data };
            _learnActions.actions.boundMarkAnswer(qandA);
        });
    });

    _learnDom.DOM.rightBody.innerHTML = '';
    _learnDom.DOM.rightBody.appendChild(clone);
};
},{"../learn-dom.js":39,"../../store/store-repo.js":16,"../learn-actions.js":46,"../../utils/utils.js":20}],42:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderFails = undefined;

var _learnDom = require('../learn-dom.js');

var _storeRepo = require('../../store/store-repo.js');

var renderFails = exports.renderFails = function renderFails() {

    if ('content' in document.createElement('template')) {

        var template = document.querySelector('.js-fails-template');
        var rptrFails = template.content.querySelector('.js-rptr-fails');

        var _store$getState = _storeRepo.store.getState(),
            score = _store$getState.score,
            items = _store$getState.items;

        _learnDom.DOM.headerTxt.innerHTML = score.wrong === 1 ? 'You got ' + score.wrong + ' question wrong:' : 'You got ' + score.wrong + ' questions wrong:';
        _learnDom.DOM.rightHeader.style.backgroundColor = 'rgb(141, 0, 5)';

        var species = items.filter(function (item) {
            return R.contains(item.name, score.fails);
        });

        species.forEach(function (sp) {
            var rectangle = document.createElement('div');
            rectangle.setAttribute('class', 'rectangle');
            var answer = document.createElement('div');
            answer.setAttribute('id', sp.id);
            answer.setAttribute('class', 'answer');
            var name = document.createElement('p');
            name.textContent = sp.name;
            answer.appendChild(name);
            var thumb = document.createElement('img');
            thumb.setAttribute('class', 'thumb');
            thumb.src = sp.thumbs[1];
            answer.appendChild(thumb);
            rectangle.appendChild(answer);
            rptrFails.appendChild(rectangle);
        });

        var clone = document.importNode(template.content, true);
        _learnDom.DOM.rightBody.innerHTML = '';
        _learnDom.DOM.rightBody.appendChild(clone);
    }
};
},{"../learn-dom.js":39,"../../store/store-repo.js":16}],41:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderPasses = undefined;

var _learnDom = require('../learn-dom.js');

var _storeRepo = require('../../store/store-repo.js');

var _fails = require('./fails.js');

var renderPasses = exports.renderPasses = function renderPasses() {
    if ('content' in document.createElement('template')) {

        var template = document.querySelector('.js-passes-template');
        var rptrPasses = template.content.querySelector('.js-rptr-passes');
        var ul = document.createElement('ul');

        var _store$getState = _storeRepo.store.getState(),
            score = _store$getState.score;

        _learnDom.DOM.headerTxt.innerHTML = score.correct === 1 ? 'You got ' + score.correct + ' question right:' : 'You got ' + score.correct + ' questions right:';
        _learnDom.DOM.rightHeader.style.backgroundColor = 'rgb(44, 141, 86)';

        score.passes.forEach(function (pass) {
            var li = document.createElement('li');
            li.textContent = pass;
            ul.appendChild(li);
        });

        rptrPasses.appendChild(ul);

        var clone = document.importNode(template.content, true);
        _learnDom.DOM.rightBody.innerHTML = '';
        _learnDom.DOM.rightBody.appendChild(clone);

        setTimeout(function () {
            (0, _fails.renderFails)();
        }, 5000);
    }
};
},{"../learn-dom.js":39,"../../store/store-repo.js":16,"./fails.js":42}],43:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderScore = undefined;

var _learnDom = require('../learn-dom.js');

var _storeRepo = require('../../store/store-repo.js');

var renderScore = exports.renderScore = function renderScore() {
    var _store$getState = _storeRepo.store.getState(),
        score = _store$getState.score,
        item = _store$getState.item;

    var template = document.querySelector('.js-score-template');

    var txtCorrect = template.content.querySelector('.js-txt-correct');
    var txtTotal = template.content.querySelector('.js-txt-total');

    if (score.success) {
        _learnDom.DOM.headerTxt.innerHTML = score.answer + ' was the correct answer! Well done.';
        _learnDom.DOM.rightHeader.style.backgroundColor = 'rgb(44, 141, 86)';
    } else if (score.total > 0) {
        _learnDom.DOM.headerTxt.innerHTML = 'Oh no! The correct answer was ' + item.name + '.';
        _learnDom.DOM.rightHeader.style.backgroundColor = 'rgb(141, 0, 5)';
    } else {
        _learnDom.DOM.headerTxt.innerHTML = '';
        _learnDom.DOM.rightHeader.style.backgroundColor = 'rgb(44, 141, 86)';
    }

    txtTotal.innerHTML = score.total;
    txtCorrect.innerHTML = score.correct;

    var clone = document.importNode(template.content, true);

    _learnDom.DOM.rightFooter.innerHTML = '';
    _learnDom.DOM.rightFooter.appendChild(clone);
};
},{"../learn-dom.js":39,"../../store/store-repo.js":16}],44:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderTextEntry = undefined;

var _learnDom = require('../learn-dom.js');

var _storeRepo = require('../../store/store-repo.js');

var _utils = require('../../utils/utils.js');

var _learnActions = require('../learn-actions.js');

var renderTextEntry = exports.renderTextEntry = function renderTextEntry() {
    var _store$getState = _storeRepo.store.getState(),
        strategy = _store$getState.strategy,
        item = _store$getState.item;

    var sendQandA = null;

    var handleEnterPress = function handleEnterPress(event) {
        if (event.key === 'Enter') {
            sendQandA();
        }
    };

    var element = strategy.elements.filter(function (el) {
        return el.name === 'text-entry';
    })[0];

    if (!element) return;

    var template = document.querySelector('.' + element.template);

    sendQandA = function sendQandA() {
        if (!document.querySelector('.js-txt-input')) return;

        var _store$getState2 = _storeRepo.store.getState(),
            item = _store$getState2.item;

        var answer = document.querySelector('.js-txt-input').value;
        var qandA = { question: item[element.question], answer: answer };
        _learnActions.actions.boundMarkAnswer(qandA);
    };

    // window.addEventListener('keypress', handleEnterPress);

    template.content.querySelector('span').innerHTML = item.genus;

    var clone = document.importNode(template.content, true);

    clone.querySelector('button').addEventListener('click', function (event) {
        sendQandA();
    });

    element.parent.innerHTML = '';
    element.parent.appendChild(clone);

    document.querySelector('.js-txt-input').focus();
};
},{"../learn-dom.js":39,"../../store/store-repo.js":16,"../../utils/utils.js":20,"../learn-actions.js":46}],45:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderSpecimen = undefined;

var _utils = require('../../utils/utils.js');

var _learnDom = require('../learn-dom.js');

var _storeRepo = require('../../store/store-repo.js');

var currItem = null;

var renderSpecimen = exports.renderSpecimen = function renderSpecimen() {
    var _store$getState = _storeRepo.store.getState(),
        strategy = _store$getState.strategy,
        randomiser = _store$getState.randomiser,
        item = _store$getState.item,
        items = _store$getState.items;

    if (item === currItem) return;

    currItem = item;

    var element = strategy.elements.filter(function (el) {
        return el.name === 'specimen';
    })[0];

    var template = document.querySelector('.' + element.template);

    var rptrSpecimen = template.content.querySelector('.js-rptr-specimen');

    _learnDom.DOM.collectionTxt.innerHTML = 'There are ' + items.length + ' items in this test';

    var renderSpecimenImages = null;

    var renderImages = function renderImages(specimenImages) {
        var images = [];
        randomiser.imageIndices.forEach(function (index) {
            return images.push(specimenImages[index]);
        });
        return function () {
            var displayImages = R.take(4, images);
            rptrSpecimen.innerHTML = displayImages.map(function (displayImages) {
                return '<div class="square">                            \n                        <img src="' + displayImages + '" onError="this.src=\'https://lh3.googleusercontent.com/-w9gHw3gUIuRxpOMAjEqhLtwyj9znvCJbAgGWLzutQB1eWcpVtMXMuhiKNck4dpf1IxQVOYPMeVZbbfRU7g8fTZZu019Spiu4Vc84s1FxGr_JS9igG0pGcuUn8GCDL6ryuB92Ek00ON3lTHKaUYTD8Tt3-zw2CC8tr-tA0xbNpd4bg_GcxUzd9Y6d9MD0ps1OvysJaAZwb1319aGUCSVSVoXxPOi6bfBy8MeIrvFvbuQX-sRT58tXE_QzFoN2BdogUg9mesRyBpAknxhnNp3BhODD6sYEbXljXn-2Amk6cdzv95EEb5ZucSiRwtuaPyK-jpLchT2JrQQztftOP6JsiHbD_Dv7pib_PGN6faexLUmqVhil9OttpIjVwV8bFg7L9An3FMazrGrB3VpMCQ-v_Oz1M_4Ozw0HK6Iio93vURxJi_Wdh-3zr_rNgTcLHcVPRf9NWJ0otoPyNr732FfoRcnf6tTRwecfvIO57iobx7j9xBuzv5kMW6hWF3DhX7S1-PdcAJnWqVkvtaDXMIE8Qv9tRgWU4Es97876O8GBxhO0P9HTXATSLFAh0e3OAHo10jsfQcbMfSbpRKYqiLIddUe7Hx85bCaxY5d_6U=w978-h744-no\';" />\n                    </div>';
            }).join('');
            images = R.remove(0, 4, images);
            var clone = document.importNode(template.content, true);
            element.parent.innerHTML = '';
            element.parent.appendChild(clone);
        };
    };

    renderSpecimenImages = renderImages(item.images);
    renderSpecimenImages();

    _learnDom.DOM.moreSpecimensBtn.addEventListener('click', function () {
        renderSpecimenImages();
    });
};
},{"../../utils/utils.js":20,"../learn-dom.js":39,"../../store/store-repo.js":16}],35:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strategies = undefined;

var _learnDom = require('./learn-dom.js');

var _species = require('./screens/species.js');

var _passes = require('./screens/passes.js');

var _fails = require('./screens/fails.js');

var _score = require('./screens/score.js');

var _textEntry = require('./screens/text-entry.js');

var _specimen = require('./screens/specimen.js');

var strategies = exports.strategies = [{
  id: 1,
  active: false,
  elements: [{
    name: 'specimen',
    render: _specimen.renderSpecimen,
    parent: _learnDom.DOM.leftBody,
    template: 'js-specimen-template'
  }, {
    name: 'text-entry',
    render: _textEntry.renderTextEntry,
    parent: _learnDom.DOM.rightBody,
    template: 'js-species-entry-template',
    question: 'species',
    header: 'Complete the binomial name'
  }, {
    name: 'score',
    render: _score.renderScore
  }]
}, {
  id: 2,
  active: false,
  elements: [{
    name: 'specimen',
    render: _specimen.renderSpecimen,
    parent: _learnDom.DOM.leftBody,
    template: 'js-specimen-template'
  }, {
    name: 'text-entry',
    render: _textEntry.renderTextEntry,
    parent: _learnDom.DOM.rightBody,
    template: 'js-species-genus-entry-template',
    question: 'name',
    header: 'Give the binomial name'
  }, {
    name: 'score',
    render: _score.renderScore
  }]
}, {
  id: 3,
  active: true,
  elements: [{
    name: 'specimen',
    render: _specimen.renderSpecimen,
    parent: _learnDom.DOM.leftBody,
    template: 'js-specimen-template'
  }, {
    name: 'species',
    render: _species.renderSpecies,
    parent: _learnDom.DOM.rightBody,
    template: 'js-species-template',
    question: 'name',
    header: 'Click the matching species'
  }, {
    name: 'score',
    render: _score.renderScore
  }]
}];
},{"./learn-dom.js":39,"./screens/species.js":40,"./screens/passes.js":41,"./screens/fails.js":42,"./screens/score.js":43,"./screens/text-entry.js":44,"./screens/specimen.js":45}],25:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var trees = exports.trees = [{
  "id": 583608,
  "name": "Arbutus unedo L.",
  "images": ["http://media.eol.org/content/2012/06/13/13/64173_orig.jpg", "http://media.eol.org/content/2015/01/04/05/34066_orig.jpg", "http://media.eol.org/content/2012/06/13/13/79136_orig.jpg", "http://media.eol.org/content/2012/06/13/13/61274_orig.jpg", "http://media.eol.org/content/2012/06/13/13/04772_orig.jpg", "http://media.eol.org/content/2012/06/13/13/83559_orig.jpg", "http://media.eol.org/content/2012/06/13/13/12959_orig.jpg", "http://media.eol.org/content/2012/06/13/13/26710_orig.jpg", "http://media.eol.org/content/2015/01/04/05/88128_orig.jpg", "http://media.eol.org/content/2015/01/01/03/38579_orig.jpg"],
  "names": [{
    "vernacularName": "Erdbeerbaum",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Strawberry-tree",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Arbutus",
    "language": "en"
  }, {
    "vernacularName": "Irish Strawberry Tree",
    "language": "en"
  }, {
    "vernacularName": "Killarney Strawberry Tree",
    "language": "en"
  }, {
    "vernacularName": "strawberry tree",
    "language": "en"
  }, {
    "vernacularName": "madroño",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "borrachín",
    "language": "es"
  }, {
    "vernacularName": "Arbousier commun, Arbre aux fraises",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "corbezzolo",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "sorbo peloso",
    "language": "it"
  }, {
    "vernacularName": "Medronheiro",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "Ervedeiro",
    "language": "pt"
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/06/13/13/64173_98_68.jpg", "http://media.eol.org/content/2015/01/04/05/34066_98_68.jpg", "http://media.eol.org/content/2012/06/13/13/79136_98_68.jpg", "http://media.eol.org/content/2012/06/13/13/61274_98_68.jpg", "http://media.eol.org/content/2012/06/13/13/04772_98_68.jpg", "http://media.eol.org/content/2012/06/13/13/83559_98_68.jpg", "http://media.eol.org/content/2012/06/13/13/12959_98_68.jpg", "http://media.eol.org/content/2012/06/13/13/26710_98_68.jpg", "http://media.eol.org/content/2015/01/04/05/88128_98_68.jpg", "http://media.eol.org/content/2015/01/01/03/38579_98_68.jpg"]
}, {
  "id": 1061780,
  "name": "Pinus pinaster Aiton",
  "images": ["http://media.eol.org/content/2012/06/13/03/85842_orig.jpg", "http://media.eol.org/content/2012/06/13/03/10611_orig.jpg", "http://media.eol.org/content/2012/07/19/01/42580_orig.jpg", "http://media.eol.org/content/2015/04/30/07/50307_orig.jpg", "http://media.eol.org/content/2012/06/13/03/13189_orig.jpg", "http://media.eol.org/content/2012/08/07/03/99483_orig.jpg", "http://media.eol.org/content/2013/11/16/20/39151_orig.jpg", "http://media.eol.org/content/2014/07/08/07/99782_orig.jpg", "http://media.eol.org/content/2012/06/13/03/27893_orig.jpg", "http://media.eol.org/content/2012/07/19/01/84150_orig.jpg"],
  "names": [{
    "vernacularName": "Igelkiefer",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Igelföhre",
    "language": "de"
  }, {
    "vernacularName": "Meerkiefer",
    "language": "de"
  }, {
    "vernacularName": "Seeföhre",
    "language": "de"
  }, {
    "vernacularName": "Seekiefer",
    "language": "de"
  }, {
    "vernacularName": "Seestrand-Kiefer",
    "language": "de"
  }, {
    "vernacularName": "Sternkiefer",
    "language": "de"
  }, {
    "vernacularName": "Strand-Kiefer",
    "language": "de"
  }, {
    "vernacularName": "maritime pine",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "cluster pine",
    "language": "en"
  }, {
    "vernacularName": "pino gallego",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "pino marítimo",
    "language": "es"
  }, {
    "vernacularName": "pino resinero",
    "language": "es"
  }, {
    "vernacularName": "pin maritime",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Pin maritime, Pin mésogéen",
    "language": "fr"
  }, {
    "vernacularName": "pin des landes",
    "language": "fr"
  }, {
    "vernacularName": "pinastre",
    "language": "fr"
  }, {
    "vernacularName": "pinastro",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "Pino da fastelli",
    "language": "it"
  }, {
    "vernacularName": "pino marittimo",
    "language": "it"
  }, {
    "vernacularName": "pinheiro-bravo",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "pinheiro-marítimo",
    "language": "pt"
  }, {
    "vernacularName": "海岸松",
    "language": "zh",
    "eol_preferred": true
  }, {
    "vernacularName": "海岸松 (hai an song)",
    "language": "zh"
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/06/13/03/85842_98_68.jpg", "http://media.eol.org/content/2012/06/13/03/10611_98_68.jpg", "http://media.eol.org/content/2012/07/19/01/42580_98_68.jpg", "http://media.eol.org/content/2015/04/30/07/50307_98_68.jpg", "http://media.eol.org/content/2012/06/13/03/13189_98_68.jpg", "http://media.eol.org/content/2012/08/07/03/99483_98_68.jpg", "http://media.eol.org/content/2013/11/16/20/39151_98_68.jpg", "http://media.eol.org/content/2014/07/08/07/99782_98_68.jpg", "http://media.eol.org/content/2012/06/13/03/27893_98_68.jpg", "http://media.eol.org/content/2012/07/19/01/84150_98_68.jpg"]
}, {
  "id": 584812,
  "name": "Tilia platyphyllos Scop.",
  "images": ["http://media.eol.org/content/2012/06/13/08/24618_orig.jpg", "http://media.eol.org/content/2012/06/13/08/28704_orig.jpg", "http://media.eol.org/content/2011/11/01/16/04922_orig.jpg", "http://media.eol.org/content/2015/04/30/05/00773_orig.jpg", "http://media.eol.org/content/2012/08/07/03/53508_orig.jpg", "http://media.eol.org/content/2011/11/01/16/79363_orig.jpg", "http://media.eol.org/content/2015/04/30/05/35151_orig.jpg", "http://media.eol.org/content/2012/06/13/08/22357_orig.jpg", "http://media.eol.org/content/2012/06/13/08/12477_orig.jpg", "http://media.eol.org/content/2012/06/13/08/85592_orig.jpg"],
  "names": [{
    "vernacularName": "Sommer-Linde",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "Large-leaved Lime",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Lime Tree",
    "language": "en"
  }, {
    "vernacularName": "bigleaf linden",
    "language": "en"
  }, {
    "vernacularName": "broad-leaved lime",
    "language": "en"
  }, {
    "vernacularName": "large-leaved basswood",
    "language": "en"
  }, {
    "vernacularName": "largeleaf linden",
    "language": "en"
  }, {
    "vernacularName": "Tilo",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Tilleul à larges feuilles",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Tilleul à grandes feuilles",
    "language": "fr"
  }, {
    "vernacularName": "Tiglio nostrano",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "Tilo de hojas grandes",
    "language": "pt",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2012/06/13/08/24618_98_68.jpg", "http://media.eol.org/content/2012/06/13/08/28704_98_68.jpg", "http://media.eol.org/content/2011/11/01/16/04922_98_68.jpg", "http://media.eol.org/content/2015/04/30/05/00773_98_68.jpg", "http://media.eol.org/content/2012/08/07/03/53508_98_68.jpg", "http://media.eol.org/content/2011/11/01/16/79363_98_68.jpg", "http://media.eol.org/content/2015/04/30/05/35151_98_68.jpg", "http://media.eol.org/content/2012/06/13/08/22357_98_68.jpg", "http://media.eol.org/content/2012/06/13/08/12477_98_68.jpg", "http://media.eol.org/content/2012/06/13/08/85592_98_68.jpg"]
}, {
  "id": 591115,
  "name": "Celtis australis L.",
  "images": ["http://media.eol.org/content/2011/10/15/22/70432_orig.jpg", "http://media.eol.org/content/2011/10/15/22/56027_orig.jpg", "http://media.eol.org/content/2011/10/15/22/32039_orig.jpg", "http://media.eol.org/content/2011/10/15/22/73558_orig.jpg", "http://media.eol.org/content/2011/10/15/22/55885_orig.jpg", "http://media.eol.org/content/2012/11/10/13/46747_orig.jpg", "http://media.eol.org/content/2016/08/04/03/92223_orig.jpg", "http://media.eol.org/content/2016/08/04/03/94909_orig.jpg", "http://media.eol.org/content/2016/08/04/03/34290_orig.jpg", "http://media.eol.org/content/2016/08/04/03/63439_orig.jpg"],
  "names": [{
    "vernacularName": "Mediterranean Hackberry",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Caucasian hackberry",
    "language": "en"
  }, {
    "vernacularName": "European hackberry",
    "language": "en"
  }, {
    "vernacularName": "European nettle tree",
    "language": "en"
  }, {
    "vernacularName": "European nettletree",
    "language": "en"
  }, {
    "vernacularName": "Lote tree",
    "language": "en"
  }, {
    "vernacularName": "honey-berry",
    "language": "en"
  }, {
    "vernacularName": "Almez",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Latonero",
    "language": "es"
  }, {
    "vernacularName": "Micocoulier de provence, Falabreguier",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "arcidiavolo",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "bagolaro",
    "language": "it"
  }, {
    "vernacularName": "spaccasassi",
    "language": "it"
  }, {
    "vernacularName": "lódão-bastardo",
    "language": "pt",
    "eol_preferred": true
  }, {
    "vernacularName": "Ginginha-do-rei",
    "language": "pt"
  }],
  "thumbs": [null, "http://media.eol.org/content/2011/10/15/22/70432_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/56027_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/32039_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/73558_98_68.jpg", "http://media.eol.org/content/2011/10/15/22/55885_98_68.jpg", "http://media.eol.org/content/2012/11/10/13/46747_98_68.jpg", "http://media.eol.org/content/2016/08/04/03/92223_98_68.jpg", "http://media.eol.org/content/2016/08/04/03/94909_98_68.jpg", "http://media.eol.org/content/2016/08/04/03/34290_98_68.jpg", "http://media.eol.org/content/2016/08/04/03/63439_98_68.jpg"]
}, {
  "id": 486446,
  "name": "Tilia cordata Mill.",
  "images": ["http://media.eol.org/content/2014/10/17/01/88260_orig.jpg", "http://media.eol.org/content/2012/06/13/08/65845_orig.jpg", "http://media.eol.org/content/2012/06/13/08/38573_orig.jpg", "http://media.eol.org/content/2012/06/13/08/10539_orig.jpg", "http://media.eol.org/content/2012/06/13/08/77145_orig.jpg", "http://media.eol.org/content/2014/08/15/04/23595_orig.jpg", "http://media.eol.org/content/2014/08/15/04/23595_orig.jpg", "http://media.eol.org/content/2012/06/13/08/85277_orig.jpg", "http://media.eol.org/content/2012/06/13/08/47054_orig.jpg", "http://media.eol.org/content/2014/10/17/01/69881_orig.jpg"],
  "names": [{
    "vernacularName": "Winter-Linde",
    "language": "de",
    "eol_preferred": true
  }, {
    "vernacularName": "linden",
    "language": "en",
    "eol_preferred": true
  }, {
    "vernacularName": "Small Leaved Lime",
    "language": "en"
  }, {
    "vernacularName": "Small-leaved Lime",
    "language": "en"
  }, {
    "vernacularName": "little-leaf basswood",
    "language": "en"
  }, {
    "vernacularName": "littleleaf linden",
    "language": "en"
  }, {
    "vernacularName": "small-leaved European linden",
    "language": "en"
  }, {
    "vernacularName": "Tilo",
    "language": "es",
    "eol_preferred": true
  }, {
    "vernacularName": "Tilleul à petites feuilles",
    "language": "fr",
    "eol_preferred": true
  }, {
    "vernacularName": "Tilleul à petites feuilles, Tilleul des bois",
    "language": "fr"
  }, {
    "vernacularName": "Tiglio selvatico",
    "language": "it",
    "eol_preferred": true
  }, {
    "vernacularName": "Tília-de-folhas-pequenas",
    "language": "pt",
    "eol_preferred": true
  }],
  "thumbs": [null, "http://media.eol.org/content/2014/10/17/01/88260_98_68.jpg", "http://media.eol.org/content/2012/06/13/08/65845_98_68.jpg", "http://media.eol.org/content/2012/06/13/08/38573_98_68.jpg", "http://media.eol.org/content/2012/06/13/08/10539_98_68.jpg", "http://media.eol.org/content/2012/06/13/08/77145_98_68.jpg", "http://media.eol.org/content/2014/08/15/04/23595_98_68.jpg", "http://media.eol.org/content/2014/08/15/04/23595_98_68.jpg", "http://media.eol.org/content/2012/06/13/08/85277_98_68.jpg", "http://media.eol.org/content/2012/06/13/08/47054_98_68.jpg", "http://media.eol.org/content/2014/10/17/01/69881_98_68.jpg"]
}];
},{}],34:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomiser = exports.items = exports.strategy = exports.item = exports.score = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../utils/utils.js');

var _learnTypes = require('./learn-types.js');

var _learnStrategy = require('./learn-strategy.js');

var _storeRepo = require('../store/store-repo.js');

var _eolTrees = require('../api/eol-trees.js');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialScoreState = {
    total: 0,
    correct: 0,
    wrong: 0,
    answer: '',
    question: '',
    fails: [],
    passes: [],
    success: false
};

var score = exports.score = function score() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialScoreState;
    var action = arguments[1];

    switch (action.type) {
        case _learnTypes.types.MARK_ANSWER:
            var qAndA = action.data;
            var _score = _extends({}, state, { question: qAndA.question, answer: qAndA.answer });
            _score.total++;
            _score.success = _score.answer === _score.question;
            if (_score.success) {
                _score.correct++;
                _score.passes.push(_score.question);
            } else {
                _score.wrong++;
                _score.fails.push(_score.question);
            }
            return _extends({}, state, _score);
        default:
            return state;
    }
};

var item = exports.item = function item() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _learnTypes.types.NEXT_ITEM:
            return _extends({}, state, action.data);
        case _learnTypes.types.NEW_SCREEN:
            return _extends({}, state, action.data.item);
        default:
            return state;
    }
};

var initialStrategyState = _learnStrategy.strategies.filter(function (strategy) {
    return strategy.active;
})[0];

var strategy = exports.strategy = function strategy() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStrategyState;
    var action = arguments[1];

    switch (action.type) {
        case _learnTypes.types.NEW_SCREEN:
            return _extends({}, state, action.data.strategy);
        default:
            return state;
    }
};

var species = _utils.utils.shuffleArray(_eolTrees.trees).map(function (item) {
    var names = item.name.split(' ');
    item.genus = names[0];
    item.species = names[1];
    item.name = item.name.split(' ').slice(0, 2).join(' ');
    return item;
});

var items = exports.items = function items() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : species;
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_INAT_DATA':
        case 'LOAD_EOL_DATA':
            if (action.data) return [].concat(_toConsumableArray(action.data));
        default:
            return state;
    }
};
var answersCollection = [];
var numberOfAlternateAnswers = (species.length > 6 ? 6 : species.length) - 1;
species.forEach(function (correctAnswer) {
    var answers = {};
    var alternateAnswers = species.filter(function (s) {
        return s.id !== correctAnswer.id;
    });
    answers.species = _utils.utils.randomiseSelection(alternateAnswers, numberOfAlternateAnswers);
    answers.species.push(correctAnswer);
    answers.id = correctAnswer.id;
    answersCollection.push(answers);
});

var initialRandomState = {
    imageIndices: _utils.utils.randomiseSelection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, true),
    strategiesCollection: {
        strategies: _utils.utils.randomiseSelection(_learnStrategy.strategies, species.length, false).map(function (strategy) {
            strategy.active = true;
            return strategy;
        }),
        index: 0
    },
    answersCollection: answersCollection
};

var randomiser = exports.randomiser = function randomiser() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialRandomState;
    var action = arguments[1];

    switch (action.type) {
        case _learnTypes.types.NEW_SCREEN:
            var strategiesCollection = { strategiesCollection: _extends({}, state.strategiesCollection, action.data.randomiser) };
            return _extends({}, state, strategiesCollection);
        default:
            return state;
    }
};
},{"../utils/utils.js":20,"./learn-types.js":38,"./learn-strategy.js":35,"../store/store-repo.js":16,"../api/eol-trees.js":25}],36:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Schedules actions with { meta: { delay: N } } to be delayed by N milliseconds.
 * Makes `dispatch` return a function to cancel the timeout in this case.
 */
var timeoutScheduler = exports.timeoutScheduler = function timeoutScheduler(store) {
  return function (next) {
    return function (action) {
      if (!action.meta || !action.meta.delay) {
        return next(action);
      }

      if (store.getState().item === null) return next(action);

      var timeoutId = setTimeout(function () {
        next(action);
      }, action.meta.delay);

      return function cancel() {
        clearTimeout(timeoutId);
      };
    };
  };
};
},{}],37:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Logs all actions and states after they are dispatched.

var logger = exports.logger = function logger(store) {
  return function (next) {
    return function (action) {
      console.group(action.type);
      console.info('dispatching', action);
      var result = next(action);
      console.log('next state', store.getState());
      console.groupEnd(action.type);
      return result;
    };
  };
};
},{}],16:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.store = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _eolTejo = require('../api/eol-tejo.js');

var _utils = require('../utils/utils.js');

var _learnReducers = require('../learn/learn-reducers.js');

var _timeoutScheduler = require('../learn/middleware/timeoutScheduler.js');

var _logger = require('../learn/middleware/logger.js');

var _learnStrategy = require('../learn/learn-strategy.js');

var card = function card() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'NEXT_SPECIES':
            return _extends({}, action.data);
        default:
            return state;
    }
};

var timer = function timer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'CURRENT_TIMER':
            return _extends({}, action.data);
        default:
            return state;
    }
};

var strategies = function strategies() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        default:
            return _learnStrategy.strategies;
    }
};

var _Redux = Redux,
    combineReducers = _Redux.combineReducers,
    createStore = _Redux.createStore,
    applyMiddleware = _Redux.applyMiddleware;


var reducer = combineReducers({
    strategies: strategies,
    strategy: _learnReducers.strategy,
    items: _learnReducers.items,
    item: _learnReducers.item,
    score: _learnReducers.score,
    randomiser: _learnReducers.randomiser,
    card: card,
    timer: timer
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var store = exports.store = createStore(reducer,
// composeEnhancers(applyMiddleware(
applyMiddleware(_timeoutScheduler.timeoutScheduler, _logger.logger));
},{"../api/eol-tejo.js":19,"../utils/utils.js":20,"../learn/learn-reducers.js":34,"../learn/middleware/timeoutScheduler.js":36,"../learn/middleware/logger.js":37,"../learn/learn-strategy.js":35}],15:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createDeck = exports.iterateOverItems = undefined;

var _storeRepo = require('../store/store-repo.js');

var _utils = require('../utils/utils.js');

var dispatchToStore = function dispatchToStore(data, type) {
    _storeRepo.store.dispatch({ type: type, data: data });
};

var renderTitle = function renderTitle(collection) {
    var title = document.getElementById('title');
    title.innerHTML = '<a target="_blank" href=\'' + collection.link + '\'>' + collection.name + '</a>';
};

var renderBinomialName = function renderBinomialName(value) {
    var binomial = document.getElementById('name');
    var name = value.split(' ');
    binomial.innerHTML = name[0] + ' ' + name[1];
};

var renderCommonNames = function renderCommonNames(collection) {
    var vernacularList = document.getElementById('vernacular');
    if (collection.length === 0) vernacularList.innerHTML = '';else {
        vernacularList.innerHTML = '';
        collection.forEach(function (names) {
            names = names.length ? names : [names];
            names.forEach(function (name) {
                vernacularList.innerHTML += '<li>' + name.language + ': ' + name.vernacularName + '</li>';
            });
        });
    }
};

var renderImage = function renderImage(url) {
    var imgElem = document.getElementById('image');
    imgElem.src = url;
};

var iterateOverItems = exports.iterateOverItems = function iterateOverItems(iterator, callback, iteratorFunction) {
    return function () {
        var nextItem = iterator.next();
        if (nextItem.done) {
            callback();
        } else {
            iteratorFunction(nextItem.value);
        }
    };
};

var createDeck = exports.createDeck = function createDeck(collection) {
    renderTitle(collection);
    var cards = [];
    var iterator = null;
    var delay = 1000;
    return {
        next: function next() {
            iterator = iterator || cards[Symbol.iterator]();
            var card = iterator.next();
            dispatchToStore(card.value, 'NEXT_SPECIES');
            if (card.done) {
                iterator = cards[Symbol.iterator]();
                card = iterator.next();
                iterator = null;
            }
            setTimeout(function () {
                renderBinomialName(card.value.name);
                var names = [R.reject(R.isEmpty, R.take(3, card.value.names.filter(function (x) {
                    return x.language === 'en';
                }))), R.head(card.value.names.filter(function (x) {
                    return x.language === 'fr';
                })), R.head(card.value.names.filter(function (x) {
                    return x.language === 'es';
                })), R.head(card.value.names.filter(function (x) {
                    return x.language === 'pt';
                })), R.head(card.value.names.filter(function (x) {
                    return x.language === 'de';
                })), R.head(card.value.names.filter(function (x) {
                    return x.language === 'it';
                })), R.head(card.value.names.filter(function (x) {
                    return x.language === 'ar';
                })), R.head(card.value.names.filter(function (x) {
                    return x.language === 'zh';
                }))];
                names = R.reject(R.isEmpty, R.reject(R.isNil, names));
                renderCommonNames(names);
            }, delay);
            this.renderImages(card.value.images);
        },
        add: function add(card) {
            cards.push(card);
        },
        renderImages: function renderImages(images) {
            var _this = this;

            var imageInterval = null;
            var imageIterator = images[Symbol.iterator]();
            var imageIteratorDone = function imageIteratorDone() {
                if (imageInterval) clearInterval(imageInterval.getId());
                imageInterval = null;
                imageIterator = null;
                _this.next();
            };
            var iterateOverImages = iterateOverItems(imageIterator, imageIteratorDone, renderImage);
            imageInterval = _utils.utils.intervalTimer(iterateOverImages, delay);
            dispatchToStore(imageInterval, 'CURRENT_TIMER');
        }
    };
};
},{"../store/store-repo.js":16,"../utils/utils.js":20}],23:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tejo = exports.tejo = [{
  "name": "Flora Lisboa e Vale do Tejo",
  "description": null,
  "logo_url": null,
  "created": "2016-04-21T10:15:43Z",
  "modified": "2017-05-10T13:42:06Z",
  "total_items": 70,
  "item_types": [{
    "item_type": "TaxonConcept",
    "item_count": 68
  }, {
    "item_type": "Text",
    "item_count": 0
  }, {
    "item_type": "Video",
    "item_count": 0
  }, {
    "item_type": "Image",
    "item_count": 0
  }, {
    "item_type": "Sound",
    "item_count": 0
  }, {
    "item_type": "Community",
    "item_count": 0
  }, {
    "item_type": "User",
    "item_count": 0
  }, {
    "item_type": "Collection",
    "item_count": 0
  }],
  "collection_items": [{
    "name": "Veronica persica Poir.",
    "object_type": "TaxonConcept",
    "object_id": 578523,
    "title": null,
    "created": "2017-05-10T13:42:05Z",
    "updated": "2017-05-10T13:42:05Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 500
  }, {
    "name": "Digitalis purpurea subsp. purpurea L.",
    "object_type": "TaxonConcept",
    "object_id": 1247200,
    "title": null,
    "created": "2017-05-10T13:41:35Z",
    "updated": "2017-05-10T13:41:35Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 100
  }, {
    "name": "Cichorium intybus L.",
    "object_type": "TaxonConcept",
    "object_id": 467862,
    "title": null,
    "created": "2017-05-10T13:40:19Z",
    "updated": "2017-05-10T13:40:19Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Scabiosa atropurpurea var. maritima",
    "object_type": "TaxonConcept",
    "object_id": 5235143,
    "title": null,
    "created": "2017-05-10T13:37:47Z",
    "updated": "2017-05-10T13:37:47Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 0
  }, {
    "name": "Acanthus mollis L.",
    "object_type": "TaxonConcept",
    "object_id": 483777,
    "title": null,
    "created": "2017-05-10T13:36:27Z",
    "updated": "2017-05-10T13:36:27Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 100
  }, {
    "name": "Salvia verbenaca L.",
    "object_type": "TaxonConcept",
    "object_id": 579419,
    "title": null,
    "created": "2017-05-10T13:35:55Z",
    "updated": "2017-05-10T13:35:55Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 400
  }, {
    "name": "Veronica arvensis L.",
    "object_type": "TaxonConcept",
    "object_id": 578491,
    "title": null,
    "created": "2017-05-10T13:32:58Z",
    "updated": "2017-05-10T13:32:58Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Anchusa azurea Mill.",
    "object_type": "TaxonConcept",
    "object_id": 580760,
    "title": null,
    "created": "2017-05-10T13:32:08Z",
    "updated": "2017-05-10T13:32:08Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 200
  }, {
    "name": "Bellis perennis L.",
    "object_type": "TaxonConcept",
    "object_id": 467843,
    "title": null,
    "created": "2017-05-10T13:31:27Z",
    "updated": "2017-05-10T13:31:27Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Trifolium campestre Schreb.",
    "object_type": "TaxonConcept",
    "object_id": 703392,
    "title": null,
    "created": "2017-05-10T13:30:18Z",
    "updated": "2017-05-10T13:30:18Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 600
  }, {
    "name": "Fumaria capreolata L.",
    "object_type": "TaxonConcept",
    "object_id": 487222,
    "title": null,
    "created": "2017-05-10T13:29:02Z",
    "updated": "2017-05-10T13:29:02Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Malva multiflora (Cav.) Soldano, Banfi & Galasso",
    "object_type": "TaxonConcept",
    "object_id": 586697,
    "title": null,
    "created": "2017-05-10T13:28:07Z",
    "updated": "2017-05-10T13:28:07Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Coronilla valentina subsp. glauca (L.) Batt.",
    "object_type": "TaxonConcept",
    "object_id": 1230687,
    "title": null,
    "created": "2017-05-10T13:27:18Z",
    "updated": "2017-05-10T13:27:18Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 0
  }, {
    "name": "Bituminaria bituminosa (L.) C. H. Stirt.",
    "object_type": "TaxonConcept",
    "object_id": 702952,
    "title": null,
    "created": "2017-05-09T11:14:36Z",
    "updated": "2017-05-09T11:14:36Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Oxalis corniculata L.",
    "object_type": "TaxonConcept",
    "object_id": 582447,
    "title": null,
    "created": "2017-05-09T11:13:04Z",
    "updated": "2017-05-09T11:13:04Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 600
  }, {
    "name": "Lysimachia foemina (Mill.) U.Manns & Anderb., 2009",
    "object_type": "TaxonConcept",
    "object_id": 40488428,
    "title": null,
    "created": "2017-05-09T11:01:54Z",
    "updated": "2017-05-09T11:01:54Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 0
  }, {
    "name": "Campanula erinus L.",
    "object_type": "TaxonConcept",
    "object_id": 5133070,
    "title": null,
    "created": "2017-05-09T10:55:31Z",
    "updated": "2017-05-09T10:55:31Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 100
  }, {
    "name": "Plantago lanceolata L.",
    "object_type": "TaxonConcept",
    "object_id": 579215,
    "title": null,
    "created": "2017-05-09T10:51:09Z",
    "updated": "2017-05-09T10:51:09Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Dactylis glomerata subsp. hispanica",
    "object_type": "TaxonConcept",
    "object_id": 5838420,
    "title": null,
    "created": "2017-05-09T10:46:09Z",
    "updated": "2017-05-09T10:46:09Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 0
  }, {
    "name": "Dactylis glomerata L.",
    "object_type": "TaxonConcept",
    "object_id": 1114101,
    "title": null,
    "created": "2017-05-09T10:43:13Z",
    "updated": "2017-05-09T10:43:13Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 400
  }, {
    "name": "Cistus crispus",
    "object_type": "TaxonConcept",
    "object_id": 2867531,
    "title": null,
    "created": "2017-05-09T10:41:17Z",
    "updated": "2017-05-09T10:41:17Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 100
  }, {
    "name": "Crataegus monogyna auct.",
    "object_type": "TaxonConcept",
    "object_id": 628306,
    "title": null,
    "created": "2017-05-09T10:22:17Z",
    "updated": "2017-05-09T10:22:17Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Galactites tomentosus",
    "object_type": "TaxonConcept",
    "object_id": 6269866,
    "title": null,
    "created": "2017-05-09T09:41:14Z",
    "updated": "2017-05-09T09:41:14Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 0
  }, {
    "name": "Lagurus ovatus L.",
    "object_type": "TaxonConcept",
    "object_id": 1114993,
    "title": null,
    "created": "2017-05-09T09:39:03Z",
    "updated": "2017-05-09T09:39:03Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Trifolium repens L.",
    "object_type": "TaxonConcept",
    "object_id": 703436,
    "title": null,
    "created": "2017-05-09T09:37:09Z",
    "updated": "2017-05-09T09:37:09Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 400
  }, {
    "name": "Crepis capillaris",
    "object_type": "TaxonConcept",
    "object_id": 46321664,
    "title": null,
    "created": "2017-05-09T09:33:08Z",
    "updated": "2017-05-09T09:33:08Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 0
  }, {
    "name": "Cistus monspeliensis L.",
    "object_type": "TaxonConcept",
    "object_id": 483190,
    "title": null,
    "created": "2017-05-08T08:05:21Z",
    "updated": "2017-05-08T08:05:21Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 100
  }, {
    "name": "Cistus ladanifer L.",
    "object_type": "TaxonConcept",
    "object_id": 488251,
    "title": null,
    "created": "2017-05-08T08:02:31Z",
    "updated": "2017-05-08T08:02:31Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Cistus ladanifer subsp. ladanifer",
    "object_type": "TaxonConcept",
    "object_id": 5732250,
    "title": null,
    "created": "2017-05-08T08:00:43Z",
    "updated": "2017-05-08T08:00:43Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 0
  }, {
    "name": "Taraxacum officinale",
    "object_type": "Text",
    "object_id": 32431305,
    "title": null,
    "created": "2017-05-08T07:58:00Z",
    "updated": "2017-05-08T07:58:00Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "data_rating": 2.5,
    "object_guid": "08aeca8b304c2e202b1de6c5ceac38c8"
  }, {
    "name": "Avena fatua L.",
    "object_type": "TaxonConcept",
    "object_id": 1114782,
    "title": null,
    "created": "2017-05-08T07:54:59Z",
    "updated": "2017-05-08T07:54:59Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 400
  }, {
    "name": "Avena sativa L.",
    "object_type": "TaxonConcept",
    "object_id": 1114783,
    "title": null,
    "created": "2017-05-08T07:34:40Z",
    "updated": "2017-05-08T07:34:40Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 400
  }, {
    "name": "Briza maxima L.",
    "object_type": "TaxonConcept",
    "object_id": 1114041,
    "title": null,
    "created": "2017-05-05T13:30:16Z",
    "updated": "2017-05-05T13:30:16Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Lapsana communis L.",
    "object_type": "TaxonConcept",
    "object_id": 841400,
    "title": null,
    "created": "2017-05-02T08:49:46Z",
    "updated": "2017-05-02T08:49:46Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Asphodelus ramosus L.",
    "object_type": "TaxonConcept",
    "object_id": 991197,
    "title": null,
    "created": "2017-04-28T16:32:11Z",
    "updated": "2017-04-28T16:32:11Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 100
  }, {
    "name": "Foeniculum vulgare Mill.",
    "object_type": "TaxonConcept",
    "object_id": 585008,
    "title": null,
    "created": "2017-04-28T16:15:57Z",
    "updated": "2017-04-28T16:15:57Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 400
  }, {
    "name": "Silybum marianum (L.) Gaertn.",
    "object_type": "TaxonConcept",
    "object_id": 509366,
    "title": null,
    "created": "2017-04-28T16:13:52Z",
    "updated": "2017-04-28T16:13:52Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Lactuca virosa Habl.",
    "object_type": "TaxonConcept",
    "object_id": 486948,
    "title": null,
    "created": "2017-04-28T16:11:45Z",
    "updated": "2017-04-28T16:11:45Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Urtica pilulifera",
    "object_type": "TaxonConcept",
    "object_id": 2885404,
    "title": null,
    "created": "2017-04-28T16:09:02Z",
    "updated": "2017-04-28T16:09:02Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 100
  }, {
    "name": "Urtica dioica L.",
    "object_type": "TaxonConcept",
    "object_id": 595063,
    "title": null,
    "created": "2017-04-28T16:07:10Z",
    "updated": "2017-04-28T16:07:10Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Beta vulgaris L.",
    "object_type": "TaxonConcept",
    "object_id": 585884,
    "title": null,
    "created": "2017-04-28T16:03:57Z",
    "updated": "2017-04-28T16:03:57Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Chenopodium album L.",
    "object_type": "TaxonConcept",
    "object_id": 587522,
    "title": null,
    "created": "2017-04-28T16:02:18Z",
    "updated": "2017-04-28T16:02:18Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 400
  }, {
    "name": "Brassica nigra (L.) W. D. J. Koch",
    "object_type": "TaxonConcept",
    "object_id": 583895,
    "title": null,
    "created": "2017-04-28T15:58:12Z",
    "updated": "2017-04-28T15:58:12Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Malva sylvestris L.",
    "object_type": "TaxonConcept",
    "object_id": 584656,
    "title": null,
    "created": "2017-04-28T12:05:57Z",
    "updated": "2017-04-28T12:05:57Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 500
  }, {
    "name": "Galium aparine L.",
    "object_type": "TaxonConcept",
    "object_id": 1098038,
    "title": null,
    "created": "2017-04-28T12:04:55Z",
    "updated": "2017-04-28T12:04:55Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 400
  }, {
    "name": "Campanula patula L.",
    "object_type": "TaxonConcept",
    "object_id": 577759,
    "title": null,
    "created": "2017-04-28T12:02:14Z",
    "updated": "2017-04-28T12:02:14Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Ophrys apifera Huds.",
    "object_type": "TaxonConcept",
    "object_id": 1136554,
    "title": null,
    "created": "2017-04-28T11:26:25Z",
    "updated": "2017-04-28T11:26:25Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 200
  }, {
    "name": "Anagallis arvensis L.",
    "object_type": "TaxonConcept",
    "object_id": 583434,
    "title": null,
    "created": "2017-04-28T11:16:04Z",
    "updated": "2017-04-28T11:16:04Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Echium plantagineum L.",
    "object_type": "TaxonConcept",
    "object_id": 579906,
    "title": null,
    "created": "2017-04-28T10:59:13Z",
    "updated": "2017-04-28T10:59:13Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Arbutus unedo L.",
    "object_type": "TaxonConcept",
    "object_id": 583608,
    "title": null,
    "created": "2017-04-27T11:56:26Z",
    "updated": "2017-04-27T11:56:26Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 100
  }, {
    "name": "Quercus ilex L.",
    "object_type": "TaxonConcept",
    "object_id": 1151536,
    "title": null,
    "created": "2017-04-27T11:06:38Z",
    "updated": "2017-04-27T11:06:38Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 200
  }, {
    "name": "Hordeum murinum L.",
    "object_type": "TaxonConcept",
    "object_id": 1114459,
    "title": null,
    "created": "2017-04-27T09:04:35Z",
    "updated": "2017-04-27T09:04:35Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 400
  }, {
    "name": "Echium vulgare L.",
    "object_type": "TaxonConcept",
    "object_id": 579910,
    "title": null,
    "created": "2017-04-27T08:33:23Z",
    "updated": "2017-04-27T08:33:23Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Galactites tomentosa Moench",
    "object_type": "TaxonConcept",
    "object_id": 2864808,
    "title": null,
    "created": "2017-04-27T07:28:59Z",
    "updated": "2017-04-27T07:28:59Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 100
  }, {
    "name": "Sinapis alba subsp. mairei (H. Lindb.) Maire",
    "object_type": "TaxonConcept",
    "object_id": 5152569,
    "title": null,
    "created": "2016-04-21T10:41:35Z",
    "updated": "2016-04-21T10:41:35Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 0
  }, {
    "name": "Pulicaria dysenterica (L.) Gaertn.",
    "object_type": "TaxonConcept",
    "object_id": 509700,
    "title": null,
    "created": "2016-04-21T10:26:56Z",
    "updated": "2016-04-21T10:26:56Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 200
  }, {
    "name": "Pinus pinaster Aiton",
    "object_type": "TaxonConcept",
    "object_id": 1061780,
    "title": null,
    "created": "2016-04-21T10:20:18Z",
    "updated": "2016-04-21T10:20:18Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }]
}];
},{}],24:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var portugueseTrees = exports.portugueseTrees = [{
  "name": "Common Portuguese Trees",
  "description": "Native, naturalised and commonly found introduced species",
  "logo_url": null,
  "created": "2017-04-11T12:35:58Z",
  "modified": "2017-04-27T11:56:27Z",
  "total_items": 6,
  "item_types": [{
    "item_type": "TaxonConcept",
    "item_count": 5
  }, {
    "item_type": "Text",
    "item_count": 0
  }, {
    "item_type": "Video",
    "item_count": 0
  }, {
    "item_type": "Image",
    "item_count": 0
  }, {
    "item_type": "Sound",
    "item_count": 0
  }, {
    "item_type": "Community",
    "item_count": 0
  }, {
    "item_type": "User",
    "item_count": 1
  }, {
    "item_type": "Collection",
    "item_count": 0
  }],
  "collection_items": [{
    "name": "Arbutus unedo L.",
    "object_type": "TaxonConcept",
    "object_id": 583608,
    "title": null,
    "created": "2017-04-27T11:56:27Z",
    "updated": "2017-04-27T11:56:27Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 100
  }, {
    "name": "Pinus pinaster Aiton",
    "object_type": "TaxonConcept",
    "object_id": 1061780,
    "title": null,
    "created": "2017-04-15T17:19:15Z",
    "updated": "2017-04-15T17:19:15Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Tilia platyphyllos Scop.",
    "object_type": "TaxonConcept",
    "object_id": 584812,
    "title": null,
    "created": "2017-04-13T07:58:01Z",
    "updated": "2017-04-13T07:58:01Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Tilia cordata Mill.",
    "object_type": "TaxonConcept",
    "object_id": 486446,
    "title": null,
    "created": "2017-04-12T08:55:29Z",
    "updated": "2017-04-12T08:55:29Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 300
  }, {
    "name": "Celtis australis L.",
    "object_type": "TaxonConcept",
    "object_id": 591115,
    "title": null,
    "created": "2017-04-11T12:37:48Z",
    "updated": "2017-04-11T12:37:48Z",
    "annotation": null,
    "sort_field": null,
    "references": [],
    "richness_score": 200
  }]
}];
},{}],17:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchLiveDataFromEOL = exports.getEOLSpeciesData = undefined;

var _utils = require('../utils/utils.js');

var _eolDanValeDoTejo = require('../api/eol-dan-vale-do-tejo.js');

var _eolDanPortugueseTrees = require('../api/eol-dan-portuguese-trees.js');

var createLookupUrl = function createLookupUrl(id) {
    return 'http://eol.org/api/pages/1.0.json?\n    batch=false&id=' + _utils.utils.encodeQuery(id) + '&images_per_page=10&images_page=1\n    &videos_per_page=0&videos_page=0&sounds_per_page=0&sounds_page=0&maps_per_page=0\n    &maps_page=0&texts_per_page=1&texts_page=1&subjects=overview&licenses=all\n    &details=true&common_names=true&synonyms=false&references=false&taxonomy=false&vetted=0&cache_ttl=&language=en';
};

// let speciesUrls = [];

var getEOLSpeciesData = exports.getEOLSpeciesData = function getEOLSpeciesData(collection) {
    var eolCollection = collection[0].collection_items.map(function (item) {
        return { id: item.object_id, name: item.name };
    });

    return eolCollection
    // .filter(species => species.id === 1114783)
    .map(function (species) {
        species.detailsUrl = createLookupUrl(species.id);
        return species;
    });
};

var fetchLiveDataFromEOL = exports.fetchLiveDataFromEOL = function fetchLiveDataFromEOL(collection) {
    return collection.map(function (collectionItem) {
        return fetch(collectionItem.detailsUrl).then(function (res) {
            return res.json();
        }).then(function (results) {
            var thumbsCollection = results.dataObjects.map(function (media) {
                return media.eolThumbnailURL;
            });
            var imagesCollection = results.dataObjects.filter(function (item) {
                return item.mediaURL || item.eolMediaURL;
            }).map(function (media) {
                return media.eolMediaURL;
            });
            var namesCollection = results.vernacularNames.filter(function (item) {
                return item.language === 'en' || item.language === 'fr' || item.language === 'es' || item.language === 'pt-BR' || item.language === 'pt' || item.language === 'de' || item.language === 'it' || item.language === 'ar' || item.language === 'cat' || item.language === 'zh';
            }
            // see logic in learn.js for R.contains
            // const languages = [ 'en', 'pt', 'es', 'de', 'fr', 'it', 'ar', 'zh' ];
            );
            return { id: collectionItem.id, name: collectionItem.name, images: imagesCollection, names: namesCollection, thumbs: thumbsCollection };
        });
    });
};
},{"../utils/utils.js":20,"../api/eol-dan-vale-do-tejo.js":23,"../api/eol-dan-portuguese-trees.js":24}],18:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wikiListener = exports.formatWiki = exports.formatUrl = undefined;

var _utils = require('../utils/utils.js');

var _storeRepo = require('../store/store-repo.js');

var root = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&limit=1&search=';

var formatUrl = function formatUrl(name, root, encode) {
    var binomial = name;
    if (name.indexOf(' ') > 0) {
        var ranks = name.split(' ');
        binomial = ranks[0] + ' ' + ranks[1];
    }
    return root + encode(binomial);
};

var fetchWiki = function fetchWiki(name, missingMessage) {
    if (name === undefined) {
        var errorPromise = new Promise(function (resolve, reject) {
            resolve(missingMessage);
        });
        return errorPromise;
    }

    var url = formatUrl(name, root, _utils.utils.encodeQuery);
    var config = {
        method: 'GET'
    };
    return fetch(url, config).then(function (json) {
        return json.json();
    }).then(R.flatten);
};

var formatWiki = function formatWiki(entry) {
    var html = '';
    if (entry.length === 1) return '<li><i>Species: ' + entry[0] + '</i></li>';
    if (entry[0]) html += '<li><h3>' + entry[0] + '</h3></li>';
    if (entry[1]) html += '<li><p>' + entry[1] + '</p></li>';
    if (entry[2]) if (entry[2].indexOf('https') !== -1) html += '<li><a target="_blank" href="' + entry[2] + '">' + entry[0] + '</a></li>';else html += '<li><p>' + entry[2] + '</p></li>';
    if (entry[3]) if (entry[3].indexOf('https') !== -1) html += '<li><a target="_blank" href="' + entry[3] + '">' + entry[0] + '</a></li>';else html += '<li><p>' + entry[3] + '</p></li>';
    return html;
};

var renderWiki = function renderWiki(wikiNode, state) {
    var missingMessage = 'No Wikipedia entry is available for this plant. Sorry!';
    if (state.card) {
        var binomial = state.card.name;
        wikiNode.innerHTML = "";
        window.setTimeout(function () {
            fetchWiki(binomial, missingMessage).then(function (entry) {
                if (entry === missingMessage) wikiNode.innerHTML = missingMessage;else if (entry.length > 3 && entry[2] === '') {
                    var genus = binomial.split(' ')[0];
                    fetchWiki(genus).then(function (genusEntry) {
                        wikiNode.innerHTML = '<li><i>Species: ' + entry[0] + '</i></li>';
                        wikiNode.innerHTML += formatWiki(genusEntry.slice(1));
                    });
                } else if (entry.length > 3) wikiNode.innerHTML = formatWiki(entry.slice(1));else {
                    var _genus = binomial.split(' ')[0];
                    fetchWiki(_genus).then(function (genusEntry) {
                        wikiNode.innerHTML = formatWiki(entry);
                        wikiNode.innerHTML += formatWiki(genusEntry.slice(1));
                    });
                }
            });
        }, 3000);
    }
};

var currentId = 0;

var wikiListener = function wikiListener() {
    var wikiNode = document.getElementById('wiki');
    var state = _storeRepo.store.getState();
    if (state && state.card && currentId !== state.card.id) {
        renderWiki(wikiNode, state);
        currentId = state.card.id;
    }
};

exports.formatUrl = formatUrl;
exports.formatWiki = formatWiki;
exports.wikiListener = wikiListener;
},{"../utils/utils.js":20,"../store/store-repo.js":16}],21:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.gbifListener = undefined;

var _storeRepo = require('../store/store-repo.js');

var currentName = 0;

var gbifListener = exports.gbifListener = function gbifListener() {
    var gbifNode = document.getElementById('family');
    var state = _storeRepo.store.getState();
    if (state && state.card && currentName !== state.card.name) {
        var binomial = state.card.name;
        var url = 'https://api.gbif.org/v1/species/match?name=' + binomial;
        fetch(url).then(function (json) {
            return json.json();
        }).then(function (taxonomy) {
            gbifNode.innerHTML = taxonomy.family;
        });
        currentName = state.card.name;
    }
};
},{"../store/store-repo.js":16}],8:[function(require,module,exports) {
'use strict';

var _inat = require('./inat/inat.js');

var _card = require('./card/card.js');

var _storeRepo = require('./store/store-repo.js');

var _eol = require('./eol/eol.js');

var _wikipedia = require('./wikipedia/wikipedia.js');

var _eolTejo = require('./api/eol-tejo.js');

var _utils = require('./utils/utils.js');

var _inatLisbonSetubal = require('./api/inat-lisbon-setubal.js');

var _gbif = require('./gbif/gbif.js');

var _eolDanValeDoTejo = require('./api/eol-dan-vale-do-tejo.js');

var _eolDanPortugueseTrees = require('./api/eol-dan-portuguese-trees.js');

var _eolTrees = require('./api/eol-trees.js');

var deck = void 0;

var dispatchToStore = function dispatchToStore(data, type) {
    _storeRepo.store.dispatch({ type: type, data: data });
};
var render = function render() {
    var promises = _storeRepo.store.getState().items;
    promises.forEach(function (element) {
        element.then(function (card) {
            deck.add(card);
        });
    });
    config.filter(function (flag) {
        return flag.enabled;
    }).map(function (active) {
        active.subscribe[0][1]();
    });
};

var eolLive = function eolLive() {
    return dispatchToStore((0, _eol.fetchLiveDataFromEOL)((0, _eol.getEOLSpeciesData)(_eolDanValeDoTejo.tejo)), 'LOAD_EOL_DATA');
};
var eolLive2 = function eolLive2() {
    return dispatchToStore((0, _eol.fetchLiveDataFromEOL)((0, _eol.getEOLSpeciesData)(_eolDanPortugueseTrees.portugueseTrees)), 'LOAD_EOL_DATA');
};
var eolLocal = function eolLocal() {
    return _utils.utils.shuffleArray(_eolTejo.tejoSpecies);
};
var eolLocal2 = function eolLocal2() {
    return _utils.utils.shuffleArray(_eolTrees.trees);
};
var inatLive = function inatLive() {
    return dispatchToStore((0, _inat.fetchLiveDataFromInat)(), 'LOAD_INAT_DATA');
};
var inatLocal = function inatLocal() {
    return _utils.utils.shuffleArray(_inatLisbonSetubal.inatSpecies).forEach(function (species) {
        return deck.add(species);
    });
};

var config = [{ enabled: false, live: true, subscribe: [[render], [_wikipedia.wikiListener], [_gbif.gbifListener]], call: eolLocal2, collection: { name: 'Common Portuguese Trees', link: 'http://eol.org/collections/124189' }, api: 'http://eol.org/api/collections/1.0/124189.json?page=1&per_page=100&filter=&sort_by=recently_added&sort_field=&cache_ttl=&language=en' }, { enabled: true, live: true, subscribe: [[render], [_wikipedia.wikiListener], [_gbif.gbifListener]], call: eolLive2, collection: { name: 'Common Portuguese Trees', link: 'http://eol.org/collections/124189' }, api: 'http://eol.org/api/collections/1.0/124189.json?page=1&per_page=100&filter=&sort_by=recently_added&sort_field=&cache_ttl=&language=en' }, { enabled: false, live: false, subscribe: [[_wikipedia.wikiListener], [_gbif.gbifListener]], call: eolLocal, collection: { name: 'Flora Lisboa e Vale do Tejo', link: 'http://eol.org/collections/124189' } }, { enabled: false, live: true, subscribe: [[render], [_wikipedia.wikiListener], [_gbif.gbifListener]], call: eolLive, collection: { name: 'Flora Lisboa e Vale do Tejo', link: 'http://eol.org/collections/124189' }, api: 'http://eol.org/api/collections/1.0/130560.json?page=1&per_page=50&filter=&sort_by=recently_added&sort_field=&cache_ttl=&language=en' }, { enabled: false, live: true, subscribe: [[render], [_wikipedia.wikiListener], [_gbif.gbifListener]], call: inatLive, collection: { name: 'Lisbon and Setúbal', link: 'https://www.inaturalist.org/lists/921392-Lisbon-and-Set-bal' } }, { enabled: false, live: false, subscribe: [[_wikipedia.wikiListener], [_gbif.gbifListener]], call: inatLocal, collection: { name: 'Lisbon and Setúbal', link: 'https://www.inaturalist.org/lists/921392-Lisbon-and-Set-bal' } }];

config.filter(function (flag) {
    return flag.enabled;
}).map(function (active) {
    active.subscribe.map(function (listener) {
        listener[1] = _storeRepo.store.subscribe(listener[0]);
    });
    deck = (0, _card.createDeck)(active.collection);
    active.live ? active.call() : active.call().forEach(function (species) {
        return deck.add(species);
    });
});

var pause = document.getElementById('pause');
var resume = document.getElementById('resume');

var timer = null;

var paused = false;

$(function () {
    $('#start').asEventStream('click').map(function (event) {
        deck.next();
    }).onValue(function () {});

    $('#pause').asEventStream('click').map(function (event) {
        timer = _storeRepo.store.getState().timer;
        timer.pause();
        paused = true;
    }).onValue(function () {});

    $('#resume').asEventStream('click').map(function (event) {
        timer = _storeRepo.store.getState().timer;
        timer.resume();
        paused = false;
    }).onValue(function () {});

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13) {
            deck.next();
        }
        if (event.keyCode === 32) {
            timer = _storeRepo.store.getState().timer;
            if (paused) {
                timer.resume();
                paused = false;
            } else {
                timer.pause();
                paused = true;
            }
        }
    });
});

document.getElementById('control-panel').addEventListener('click', function (event) {
    var button = event.target;
    var pause = document.getElementById('pause');
    var resume = document.getElementById('resume');

    if (button.id === 'start') {
        button.disabled = true;
        pause.disabled = false;
    }
    if (button.id === 'pause') {
        pause.disabled = true;
        resume.disabled = false;
    }
    if (button.id === 'resume') {
        pause.disabled = false;
        resume.disabled = true;
    }
});
},{"./inat/inat.js":14,"./card/card.js":15,"./store/store-repo.js":16,"./eol/eol.js":17,"./wikipedia/wikipedia.js":18,"./api/eol-tejo.js":19,"./utils/utils.js":20,"./api/inat-lisbon-setubal.js":22,"./gbif/gbif.js":21,"./api/eol-dan-vale-do-tejo.js":23,"./api/eol-dan-portuguese-trees.js":24,"./api/eol-trees.js":25}],47:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '53768' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[47,8])
//# sourceMappingURL=/dist/541d29d2b24b91c8b4735b548be7cec1.map