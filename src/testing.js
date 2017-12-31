import _ from 'lodash';
import React, {Component} from 'react';
import {Multiselect} from 'react-widgets';
import {SingleElementContainer, ContainerFluid, Row, Col} from './utils';
import {TextField, SelectBox, NumberField} from './utils';
import * as test_info from './test_spec';

import 'react-widgets/dist/css/react-widgets.css';

const tests = [
  {id: test_info.DAS_II,  name: "Differential Ability Scales - Second Edition (DAS-II)"},
  {id: test_info.WJ4_ACH, name: "Woodcock Johnson Rests of Achievement - Fourth Edition (WJ-4:ACH)"}
];

export default class Testing extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      tests: {}
    };
  }

  onTestListChange(tests)
  {
    console.log(tests); // [{id, name}, ...]
    const keys = tests.map(t => t.id);
    this.setState({tests: _.zipObject(keys, tests)});
  }

  onTScoreChange(e)
  {
    console.log(e.target.value);
  }

  onPercentileRankChange(e)
  {
    console.log(e.target.value);
  }

  onDescriptiveRange(e)
  {
    console.log(e.target.value);
  }

  onConfidenceIntervalChange(e)
  {
    console.log(e.target.value);
  }

  render()
  {
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
                onChange={this.onTestListChange.bind(this)} />
            </div>
          </fieldset>
        </SingleElementContainer>
        {_.map(this.state.tests, t => <Test key={t.id} spec={t} />)}
      </div>
    );
  }
}

function Test(props)
{
  const spec = props.spec;

  return (
    <div style={{marginTop: "20px"}}>
      <SingleElementContainer>
        <h5><b><u>{spec.name}</u></b></h5>
        {test_info.spec[spec.id].map(fields_spec => {
          return <TestInfo key={fields_spec.label} fields_spec={fields_spec} />;
        })}
      </SingleElementContainer>
    </div>
  );
}

function TestInfo(props)
{
  const fspec = props.fields_spec;

  return (
    <div style={{marginTop: "2em"}}>
      <h5 style={{paddingLeft: "20px"}}>{fspec.label}</h5>
      <div style={{width: "95%", margin: "auto"}}>
        {fspec.t_score === true ? <SelectBox label="T-Score" options={["68%", "90%", "98%"]} /> : undefined}
        {fspec.percentile_rank === true ? <NumberField label="Percentile Rank" /> : undefined}
        {fspec.descriptive_range === true ? <SelectBox label="Descriptive Range" options={["Below Average", "Average", "Above Average"]} /> : undefined}
        {fspec.confidence_interval === true ? <NumberField label="Confidence Interval" /> : undefined}
      </div>
    </div>
  );
}