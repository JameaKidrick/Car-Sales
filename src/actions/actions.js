// ACTION TYPES
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';


// ACTION CREATORS
export const addFeature = item => {
  // console.log(`item newFeature: ${newFeature}`)
  return { type: ADD_ITEM, payload: item };
}

export const removeFeature = item => {
  return { type: REMOVE_ITEM, payload: item}
}
