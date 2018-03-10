import { types } from './learn-types.js';
import { DOM } from './learn-dom.js';
import { renderSpecies } from './screens/species.js';
import { renderPasses } from './screens/passes.js'; 
import { renderFails } from './screens/fails.js';
import { renderScore } from './screens/score.js';
import { renderTextEntry } from './screens/text-entry.js';
import { renderSpecimen } from './screens/specimen.js';


const strategy = [
    {
      id: 1,
      left: {
        action : types.NEXT_ITEM,
        render: render,
        parent: DOM.leftBody
      },
      right: {
          action: types.NEXT_ITEM,
          template: 'text-entry',
          parent: DOM.rightBody,
          hint: 'genus'
      }
    }
  ];