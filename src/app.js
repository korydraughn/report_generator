import _ from 'lodash';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReportForm from './report_form';
import Report from './report';

export default class App extends Component
{
  constructor(props)
  {
    super(props);

    const now = new Date();
    const date = {
      y: now.getFullYear(),
      m: now.getMonth(),
      d: now.getDate()
    };

    this.state = {
      student: {
        name: "",
        gender: "",
        date_of_birth: date,
        school: "",
        age: "",
        grade: ""
      },
      notes: {
        bg_info: "",    // Background Info.
        sbg_info: "",   // Significant Background Info.
        bodt_info: ""   // Behaviors Observed During Testing
      },
      tests: {
        start_date: date,
        end_date: date,
        data: {}
      }
    };
  }

  onStudentNameChange(e)
  {
    this.setState({student: {...this.state.student, name: e.target.value}});
    setTimeout(() => console.log(this.state), 250);
  }

  onStudentGenderChange(e)
  {
    this.setState({student: {...this.state.student, gender: e.target.value}});
    setTimeout(() => console.log(this.state), 250);
  }

  onStudentDateOfBirthChange(date)
  {
    const new_date = {
      y: date.getFullYear(),
      m: date.getMonth(),
      d: date.getDate()
    };

    this.setState({student: {...this.state.student, date_of_birth: new_date}});
    setTimeout(() => console.log(this.state), 250);
  }

  onStudentSchoolChange(e)
  {
    this.setState({student: {...this.state.student, school: e.target.value}});
    setTimeout(() => console.log(this.state), 250);
  }

  onStudentTestDateStartChange(date)
  {
    const new_date = {
      y: date.getFullYear(),
      m: date.getMonth(),
      d: date.getDate()
    };

    this.setState({tests: {...this.state.tests, start_date: new_date}});
    setTimeout(() => console.log(this.state), 250);
  }

  onStudentTestDateEndChange(date)
  {
    const new_date = {
      y: date.getFullYear(),
      m: date.getMonth(),
      d: date.getDate()
    };

    this.setState({tests: {...this.state.tests, end_date: new_date}});
    setTimeout(() => console.log(this.state), 250);
  }

  onStudentAgeChange(e)
  {
    this.setState({student: {...this.state.student, age: e.target.value}});
    setTimeout(() => console.log(this.state), 250);
  }

  onStudentGradeChange(e)
  {
    this.setState({student: {...this.state.student, grade: e.target.value}});
    setTimeout(() => console.log(this.state), 250);
  }

  onBackgroundInfoChange(e)
  {
    this.setState({notes: {...this.state.notes, bg_info: e.target.value}});
    setTimeout(() => console.log(this.state), 250);
  }

  onSignificantBackgroundInfoChange(e)
  {
    this.setState({notes: {...this.state.notes, sbg_info: e.target.value}});
    setTimeout(() => console.log(this.state), 250);
  }

  onBehaviorsObservedDuringTestingChange(e)
  {
    this.setState({notes: {...this.state.notes, bodt_info: e.target.value}});
    setTimeout(() => console.log(this.state), 250);
  }

  onTestListChange(tests)
  {
    //this.setState((old_state, props) => {
      //const length = _.size(old_state.tests);
      //const state = {...old_state};
      const length = _.size(this.state.tests.data);
      const data = {...this.state.tests.data};

      if (length === 0)
      {
        data[tests[0].id] = tests[0];
      }
      else if (tests.length > length)
      {
        // Add a new test.
        const diff = _.differenceBy(tests, _.map(data, t => ({id: t.id, name: t.name})), "id")[0];
        data[diff.id] = diff;
      }
      else if (tests.length < length)
      {
        // Remove an existing test.
        const diff = _.differenceBy(_.map(data, t => ({id: t.id, name: t.name})), tests, "id")[0];
        delete data[diff.id];
      }

      this.setState({tests: {data}});
      //return state;
    //});

    // Look at _.pick(...) and _.omit(...)
    // const keys = tests.map(t => t.id);
    // this.setState({tests: _.zipObject(keys, tests)});
    setTimeout(() => console.log(this.state.tests), 250);
  }

  onTScoreChange(test_id, subtest_id, e)
  {
    const old_state = {...this.state.tests.data};
    const new_state = {[test_id]: {[subtest_id]: {t_score: e.target.value}}};
    //const new_state = {data: {[test_id]: {[subtest_id]: {t_score: e.target.value}}}};
    this.setState({tests: {data: _.merge({}, old_state, new_state)}});
    setTimeout(() => console.log(this.state.tests), 250);
  }

  onPercentileRankChange(test_id, subtest_id, e)
  {
    const old_state = {...this.state.tests.data};
    const new_state = {[test_id]: {[subtest_id]: {percentile_rank: e.target.value}}};
    this.setState({tests: {data: _.merge({}, old_state, new_state)}});
    setTimeout(() => console.log(this.state.tests), 250);
  }

  onDescriptiveRange(test_id, subtest_id, e)
  {
    const old_state = {...this.state.tests.data};
    const new_state = {[test_id]: {[subtest_id]: {descriptive_range: e.target.value}}};
    this.setState({tests: {data: _.merge({}, old_state, new_state)}});
    setTimeout(() => console.log(this.state.tests), 250);
  }

  onConfidenceIntervalChange(test_id, subtest_id, e)
  {
    const old_state = {...this.state.tests.data};
    const new_state = {[test_id]: {[subtest_id]: {confidence_interval: e.target.value}}};
    this.setState({tests: {data: _.merge({}, old_state, new_state)}});
    setTimeout(() => console.log(this.state.tests), 250);
  }

  render()
  {
    const handlers = {
      student: {
        onNameChange: this.onStudentNameChange.bind(this),
        onGenderChange: this.onStudentGenderChange.bind(this),
        onDateOfBirthChange: this.onStudentDateOfBirthChange.bind(this),
        onSchoolChange: this.onStudentSchoolChange.bind(this),
        onTestDateStartChange: this.onStudentTestDateStartChange.bind(this),
        onTestDateEndChange: this.onStudentTestDateEndChange.bind(this),
        onAgeChange: this.onStudentAgeChange.bind(this),
        onGradeChange: this.onStudentGradeChange.bind(this)
      },
      notes: {
        onBackgroundInfoChange: this.onBackgroundInfoChange.bind(this),
        onSignificantBackgroundInfoChange: this.onSignificantBackgroundInfoChange.bind(this),
        onBehaviorsObservedDuringTestingChange: this.onBehaviorsObservedDuringTestingChange.bind(this)
      },
      tests: {
        onTestListChange: this.onTestListChange.bind(this),
        onTScoreChange: this.onTScoreChange.bind(this),
        onPercentileRankChange: this.onPercentileRankChange.bind(this),
        onDescriptiveRange: this.onDescriptiveRange.bind(this),
        onConfidenceIntervalChange: this.onConfidenceIntervalChange.bind(this)
      }
    };

    return (
      <Router>
        <Switch>
          <Route exact path="/"><ReportForm data={this.state} handlers={handlers} /></Route>
          <Route path="/report"><Report data={this.state} /></Route>
        </Switch>
      </Router>
    );
  }
}