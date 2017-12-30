import React from 'react';
import {Multiselect} from 'react-widgets';
import {SingleElementContainer} from './utils';

import 'react-widgets/dist/css/react-widgets.css';

const tests = [
  "Differential Ability Scales - Second Edition (DAS-II)",
  "Woodcock Johnson Rests of Achievement - Fourth Edition (WJ-4:ACH)"
];

export default props => {
  return (
    <SingleElementContainer>
      <div className="form-group">
        <label>Tests Administered</label>
        <Multiselect data={tests} />
      </div>
    </SingleElementContainer>
  );
};