import _ from 'lodash';
import React from 'react';
import {Multiselect} from 'react-widgets';
import {SingleElementContainer, ContainerFluid, Row, Col, TextField} from './utils';

import 'react-widgets/dist/css/react-widgets.css';

const tests = [
  {id: "DAS-II", name: "Differential Ability Scales - Second Edition (DAS-II)"},
  {id: "WJ-4:ACH", name: "Woodcock Johnson Rests of Achievement - Fourth Edition (WJ-4:ACH)"}
];

export default props => {
  return (
    <div>
      <SingleElementContainer>
        <fieldset>
          <legend>Testing</legend>
          <div className="form-group">
            <label>Tests Administered</label>
            <Multiselect
              data={tests}
              valueField="id"
              textField="name"
              onChange={props.onListChange} />
          </div>
        </fieldset>
      </SingleElementContainer>
      {_.map(props.data, info => <TestInfo key={info.id} info={info} />)}
    </div>
  );
};

function TestInfo(props)
{
  return (
    <SingleElementContainer>
      <b><u>{props.info.name}</u></b>
      <TextField label="T-Score" />
      <TextField label="Percentile Rank" />
      <TextField label="Descriptive Range" />
      <TextField label="Confidence Interval" />
    </SingleElementContainer>
  );
}