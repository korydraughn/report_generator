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

export default props => {
  const handlers = {
    onTScoreChange: props.onTScoreChange,
    onPercentileRankChange: props.onPercentileRankChange,
    onDescriptiveRange: props.onDescriptiveRange,
    onConfidenceIntervalChange: props.onConfidenceIntervalChange
  };

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
              onChange={props.onTestListChange} />
          </div>
        </fieldset>
      </SingleElementContainer>
      {_.map(props.data, t => <Test key={t.id} spec={t} handlers={handlers} />)}
    </div>
  );
}

function Test(props)
{
  const spec = props.spec;

  return (
    <div style={{marginTop: "20px"}}>
      <SingleElementContainer>
        <h5><b><u>{spec.name}</u></b></h5>
        {test_info.spec[spec.id].map((fields_spec, i) => {
          return <TestInfo key={i} test_id={spec.id} fields_spec={fields_spec} {...props.handlers} />;
        })}
      </SingleElementContainer>
    </div>
  );
}

function TestInfo(props)
{
  const test_id = props.test_id;
  const fspec = props.fields_spec;
  const subtest_id = fspec.label;
  const ts = fspec.t_score;
  const pr = fspec.percentile_rank;
  const dr = fspec.descriptive_range;
  const ci = fspec.confidence_interval;

  const t_scores = ["", "68%", "90%", "98%"];
  const ranges = ["", "Below Average", "Average", "Above Average"];

  const jsx_ts = <SelectBox label="T-Score" options={t_scores} onChange={e => props.onTScoreChange(test_id, subtest_id, e)} />;
  const jsx_pr = <NumberField label="Percentile Rank" onChange={e => props.onPercentileRankChange(test_id, subtest_id, e)} />; 
  const jsx_dr = <SelectBox label="Descriptive Range" options={ranges} onChange={e => props.onDescriptiveRange(test_id, subtest_id, e)} />; 
  const jsx_ci = <NumberField label="Confidence Interval" onChange={e => props.onConfidenceIntervalChange(test_id, subtest_id, e)} />; 

  return (
    <div style={{marginTop: "2em"}}>
      <h5 style={{paddingLeft: "20px"}}>{fspec.label}</h5>
      <div style={{width: "95%", margin: "auto"}}>
        {ts === true ? jsx_ts : undefined}
        {pr === true ? jsx_pr : undefined}
        {dr === true ? jsx_dr : undefined}
        {ci === true ? jsx_ci : undefined}
      </div>
    </div>
  );
}