import { ADD_ITEM, REMOVE_ITEM } from '../actions'

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26935,
    name: '2019 Ford Mustang',
    image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}

// add and remove features are set up but they are not working; i think something is not connected correctly to the reducer since my console.log is not being shown when i click the respective add or remove buttons

export const reducer = (state = initialState, action) => {
  // console.log(state.car.features)
  switch(action.type){
    case ADD_ITEM:
        return {
          ...state,
          // console.log(state.car.features)
          // additionalPrice: (state.additionalPrice + action.payload.price),
          car: {
            ...state.car, 
            features: [...state.car.features, action.payload],
            additionalFeatures: state.additionalFeatures.filter(element => 
              !(element.id === action.payload.id)) }
        }
    case REMOVE_ITEM:
        return {...state,
          // console.log(state.car.features)
          // additionalPrice: (state.additionalPrice - action.payload.price),
          car: {
            ...state.car, 
            features: state.car.features.filter(element => 
              !(element.id===action.payload.id))},
            additionalFeatures: [...state.additionalFeatures, action.payload]
        }
    default:
      return state;
  }
}