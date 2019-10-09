// ACTION TYPES
export const ADD = 'ADD';


// ACTION CREATORS
export const addFeature = id => {
  return { type: ADD, payload: id };
}
