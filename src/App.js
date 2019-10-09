import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// ACTIONS
import { addFeature, ADD } from './actions'

const App = props => {
  // console.log('propsAPP', props)

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = id => {
    // dispatch an action here to add an item
  };
  
  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} />
        <Total />
      </div>
    </div>
  );
};

export default App;