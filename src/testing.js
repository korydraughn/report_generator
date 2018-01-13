import _ from 'lodash';
import React from 'react';
import {Multiselect} from 'react-widgets';
import {SingleElementContainer} from './utils';
import {SelectBox, NumberField} from './utils';
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
              onChange={props.onTestListChange}
              defaultValue={_.map(props.data, t => ({id: t.id, name: t.name}))} />
          </div>
        </fieldset>
      </SingleElementContainer>
      {_.map(props.data, t => <Test key={t.id} data={t} handlers={handlers} />)}
    </div>
  );
}

function Test(props)
{
  const {data, handlers} = props;

  return (
    <div style={{marginTop: "20px"}}>
      <SingleElementContainer>
        <h5><b><u>{data.name}</u></b></h5>
        {test_info.spec[data.id].map((fields_spec, i) => {
          return <TestInfo key={i} data={data} fields_spec={fields_spec} {...handlers} />;
        })}
      </SingleElementContainer>
    </div>
  );
}

function TestInfo(props)
{
  const data = props.data;
  const fspec = props.fields_spec;
  const subtest_id = fspec.label;
  const ts = fspec.t_score;
  const pr = fspec.percentile_rank;
  const dr = fspec.descriptive_range;
  const ci = fspec.confidence_interval;

  const hdlrs = {
    ts: e => props.onTScoreChange(data.id, subtest_id, e),
    pr: e => props.onPercentileRankChange(data.id, subtest_id, e),
    dr: e => props.onDescriptiveRange(data.id, subtest_id, e),
    ci: e => props.onConfidenceIntervalChange(data.id, subtest_id, e)
  };

  const values = {
    ts: "",
    pr: "",
    dr: "",
    ci: ""
  };

  if (subtest_id in data)
  {
    const sti = data[subtest_id];

    values.ts = sti.t_score || values.ts;
    values.pr = sti.percentile_rank || values.pr;
    values.dr = sti.descriptive_range || values.dr;
    values.ci = sti.confidence_interval || values.ci;
  }

  const t_scores = ["", "68%", "90%", "98%"];
  const ranges = ["", "Below Average", "Average", "Above Average"];

  const jsx_ts = <SelectBox label="T-Score" options={t_scores} onChange={hdlrs.ts} value={values.ts} />;
  const jsx_pr = <NumberField label="Percentile Rank" onChange={hdlrs.pr} value={values.pr} />; 
  const jsx_dr = <SelectBox label="Descriptive Range" options={ranges} onChange={hdlrs.dr} value={values.dr} />; 
  const jsx_ci = <NumberField label="Confidence Interval" onChange={hdlrs.ci} value={values.ci} />; 

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