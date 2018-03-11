import { types } from './learn-types.js';
import { DOM } from './learn-dom.js';
import { renderSpecies } from './screens/species.js';
import { renderPasses } from './screens/passes.js'; 
import { renderFails } from './screens/fails.js';
import { renderScore } from './screens/score.js';
import { renderTextEntry } from './screens/text-entry.js';
import { renderSpecimen } from './screens/specimen.js';


export const strategies = [
    {
      id: 1,
      active: false,
      elements: [ 
        {
          name: 'specimen',
          render: renderSpecimen,
          parent: DOM.leftBody,
          template: 'js-specimen-template'        
        }, 
        {
            name: 'text-entry',
            render: renderTextEntry,
            parent: DOM.rightBody,
            template: 'js-species-entry-template',
            question: 'species',
            header: 'Complete the binomial name'
        }
      ]
    },
    {
      id: 2,
      active: true,
      elements: [ 
        {
          name: 'specimen',
          render: renderSpecimen,
          parent: DOM.leftBody,
          template: 'js-specimen-template'        
        }, 
        {
            name: 'text-entry',
            render: renderTextEntry,
            parent: DOM.rightBody,
            template: 'js-species-genus-entry-template',
            question: 'name',
            header: 'Give the binomial name'
        }
      ]
    }
  ];

  export const strategy = strategies.filter(strategy => strategy.active)[0];