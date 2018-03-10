import { types } from './learn-types.js';
import { DOM } from './learn-dom.js';
import { renderSpecies } from './screens/species.js';
import { renderPasses } from './screens/passes.js'; 
import { renderFails } from './screens/fails.js';
import { renderScore } from './screens/score.js';
import { renderTextEntry } from './screens/text-entry.js';
import { renderSpecimen } from './screens/specimen.js';


export const strategy = [
    {
      id: 1,
      active: true,
      left: {
        action : types.NEXT_ITEM,
        render: renderSpecimen,
        parent: DOM.leftBody
      },
      right: {
          active: true,
          action: types.NEXT_ITEM,
          template: 'text-entry',
          render: renderTextEntry,
          parent: DOM.rightBody,
          hint: 'genus'
      }
    }
  ];