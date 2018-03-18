// Logs all actions and states after they are dispatched.

export const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)

  // next(action);

  return result;

  // if(result.type === 'NEW_SCREEN') {
  //   store.dispatch({type:'NEXT_ITEM', action: action.data.item});
  //   store.dispatch({type:'RANDOMISER', action: action.data.randomiser});
  //   store.dispatch({type:'STRATEGY', action: action.data.strategy});
  // } else {
  //   return result
  // }
  
};