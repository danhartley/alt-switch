import { actions } from './learn-actions.js';



// case 'UPDATE_SCORE':
//             const score = { answer : action.data };
//             score.total = state.score.total + 1;
//             if(score.answer === state.item.name) {
//                 score.correct = state.score.correct + 1;  
//                 score.success = true;
//             } else {
//                 score.question = state.item.name;
//                 score.success = false;
//             } 
//             return { ...state, score };



// function todoApp(state = initialState, action) {
//     switch (action.type) {
//       case SET_VISIBILITY_FILTER:
//         return Object.assign({}, state, {
//           visibilityFilter: action.filter
//         })
//       case ADD_TODO:
//         return Object.assign({}, state, {
//           todos: [
//             ...state.todos,
//             {
//               text: action.text,
//               completed: false
//             }
//           ]
//         })
//       default:
//         return state
//     }
//   }