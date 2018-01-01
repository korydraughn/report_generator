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
    //this.setState((old_state, props) => {
      //const length = _.size(old_state.tests);
      //const state = {...old_state};
      const length = _.size(this.state.tests);
      const state = {...this.state};

      if (length === 0)
      {
        state.tests[tests[0].id] = tests[0];
      }
      else if (tests.length > length)
      {
        // Add a new test.
        const diff = _.differenceBy(tests, _.map(state.tests, t => ({id: t.id, name: t.name})), "id")[0];
        state.tests[diff.id] = diff;
      }
      else if (tests.length < length)
      {
        // Remove an existing test.
        const diff = _.differenceBy(_.map(state.tests, t => ({id: t.id, name: t.name})), tests, "id")[0];
        delete state.tests[diff.id];
      }

      this.setState(state);
      //return state;
    //});

    // Look at _.pick(...) and _.omit(...)
    // const keys = tests.map(t => t.id);
    // this.setState({tests: _.zipObject(keys, tests)});
  }

  onTScoreChange(test_id, subtest_id, e)
  {
    const old_state = {...this.state};
    const new_state = {tests: {[test_id]: {[subtest_id]: {t_score: e.target.value}}}};
    this.setState(_.merge({}, old_state, new_state));
    setTimeout(() => console.log(this.state), 250);
  }

  onPercentileRankChange(test_id, subtest_id, e)
  {
    const old_state = {...this.state};
    const new_state = {tests: {[test_id]: {[subtest_id]: {percentile_rank: e.target.value}}}};
    this.setState(_.merge({}, old_state, new_state));
    setTimeout(() => console.log(this.state), 250);
  }

  onDescriptiveRange(test_id, subtest_id, e)
  {
    const old_state = {...this.state};
    const new_state = {tests: {[test_id]: {[subtest_id]: {descriptive_range: e.target.value}}}};
    this.setState(_.merge({}, old_state, new_state));
    setTimeout(() => console.log(this.state), 250);
  }

  onConfidenceIntervalChange(test_id, subtest_id, e)
  {
    const old_state = {...this.state};
    const new_state = {tests: {[test_id]: {[subtest_id]: {confidence_interval: e.target.value}}}};
    this.setState(_.merge({}, old_state, new_state));
    setTimeout(() => console.log(this.state), 250);
  }

  render()
  {
    const handlers = {
      onTScoreChange: this.onTScoreChange.bind(this),
      onPercentileRankChange: this.onPercentileRankChange.bind(this),
      onDescriptiveRange: this.onDescriptiveRange.bind(this),
      onConfidenceIntervalChange: this.onConfidenceIntervalChange.bind(this)
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
                onChange={this.onTestListChange.bind(this)} />
            </div>
          </fieldset>
        </SingleElementContainer>
        {_.map(this.state.tests, t => <Test key={t.id} spec={t} handlers={handlers} />)}
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