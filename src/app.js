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
        gender: "Male",
        date_of_birth: date,
        school: "",
        age: "",
        grade: "Pre-K",
        admin: ""
      },
      notes: {
        rfr: "",   // Background Info.
        sbg: "",   // Significant Background Info.
        bodt: "",  // Behaviors Observed During Testing
        sac: ""    // Summary & Conclusion
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

  onAdminChange(e)
  {
    this.setState({student: {...this.state.student, admin: e.target.value}});
    setTimeout(() => console.log(this.state), 250);
  }

  onReasonForReferralChange(e)
  {
    this.setState({notes: {...this.state.notes, rfr: e.target.value}});
    setTimeout(() => console.log(this.state), 250);
  }

  onSignificantBackgroundInfoChange(e)
  {
    this.setState({notes: {...this.state.notes, sbg: e.target.value}});
    setTimeout(() => console.log(this.state), 250);
  }

  onBehaviorsObservedDuringTestingChange(e)
  {
    this.setState({notes: {...this.state.notes, bodt: e.target.value}});
    setTimeout(() => console.log(this.state), 250);
  }

  onSummaryAndConclusionsChange(e)
  {
    this.setState({notes: {...this.state.notes, sac: e.target.value}});
    setTimeout(() => console.log(this.state), 250);
  }

  onTestListChange(tests)
  {
    const state = {...this.state.tests};
    const length = _.size(this.state.tests.data);
    const data = state.data;

    if (length === 0)
    {
      data[tests[0].id] = tests[0];
    }
    else if (tests.length > length)
    {
      // Add a new test.
      const state_tests = _.map(data, t => ({id: t.id, name: t.name}));
      const diff = _.differenceBy(tests, state_tests, "id")[0];
      data[diff.id] = diff;
    }
    else if (tests.length < length)
    {
      // Remove an existing test.
      const state_tests = _.map(data, t => ({id: t.id, name: t.name}));
      const diff = _.differenceBy(state_tests, tests, "id")[0];
      delete data[diff.id];
    }

    this.setState({tests: state});
    setTimeout(() => console.log(this.state.tests), 250);
  }

  onTScoreChange(test_id, subtest_id, e)
  {
    const old_state = {...this.state.tests.data};
    const new_state = {[test_id]: {[subtest_id]: {t_score: e.target.value}}};
    const {start_date, end_date} = this.state.tests;
    this.setState({tests: {start_date, end_date, data: _.merge({}, old_state, new_state)}});
    setTimeout(() => console.log(this.state.tests), 250);
  }

  onPercentileRankChange(test_id, subtest_id, e)
  {
    const old_state = {...this.state.tests.data};
    const new_state = {[test_id]: {[subtest_id]: {percentile_rank: e.target.value}}};
    const {start_date, end_date} = this.state.tests;
    this.setState({tests: {start_date, end_date, data: _.merge({}, old_state, new_state)}});
    setTimeout(() => console.log(this.state.tests), 250);
  }

  onDescriptiveRange(test_id, subtest_id, e)
  {
    const old_state = {...this.state.tests.data};
    const new_state = {[test_id]: {[subtest_id]: {descriptive_range: e.target.value}}};
    const {start_date, end_date} = this.state.tests;
    this.setState({tests: {start_date, end_date, data: _.merge({}, old_state, new_state)}});
    setTimeout(() => console.log(this.state.tests), 250);
  }

  onConfidenceIntervalChange(test_id, subtest_id, e)
  {
    const old_state = {...this.state.tests.data};
    const new_state = {[test_id]: {[subtest_id]: {confidence_interval: e.target.value}}};
    const {start_date, end_date} = this.state.tests;
    this.setState({tests: {start_date, end_date, data: _.merge({}, old_state, new_state)}});
    setTimeout(() => console.log(this.state.tests), 250);
  }

  setStudentInfoState(student_info)
  {
    this.setState({student: student_info});
    setTimeout(() => console.log(this.state), 250);
  }

  render()
  {
    const handlers = {
      student: {
        setState: this.setStudentInfoState.bind(this),
        onNameChange: this.onStudentNameChange.bind(this),
        onGenderChange: this.onStudentGenderChange.bind(this),
        onDateOfBirthChange: this.onStudentDateOfBirthChange.bind(this),
        onSchoolChange: this.onStudentSchoolChange.bind(this),
        onTestDateStartChange: this.onStudentTestDateStartChange.bind(this),
        onTestDateEndChange: this.onStudentTestDateEndChange.bind(this),
        onAgeChange: this.onStudentAgeChange.bind(this),
        onGradeChange: this.onStudentGradeChange.bind(this),
        onAdminChange: this.onAdminChange.bind(this)
      },
      notes: {
        onReasonForReferralChange: this.onReasonForReferralChange.bind(this),
        onSignificantBackgroundInfoChange: this.onSignificantBackgroundInfoChange.bind(this),
        onBehaviorsObservedDuringTestingChange: this.onBehaviorsObservedDuringTestingChange.bind(this),
        onSummaryAndConclusionsChange: this.onSummaryAndConclusionsChange.bind(this)
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