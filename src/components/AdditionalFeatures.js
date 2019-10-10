import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import { useSelector, useDispatch } from 'react-redux'

// ACTIONS
import { addFeature } from '../actions'

const AdditionalFeatures = props => {
  const additionalFeatures = useSelector(state => state.additionalFeatures)
  const dispatch = useDispatch()

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={item => dispatch(addFeature(item))} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures

// const mapStateToProps = state => {
//     return{
//       additionalFeatures: state.additionalFeatures
//     }
//   }
  
//   export default connect(
//     mapStateToProps,
//     { addFeature }
//   )(AdditionalFeatures);
