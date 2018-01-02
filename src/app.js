import _ from 'lodash';
import React, {Component} from 'react';
import ReportForm from './report_form';

export default class App extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      student: {
        name: "",
        gender: "",
        date_of_birth: "",
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
        start_date: "",
        end_date: "",
        data: {}
      }
    };
  }

  onStudentNameChange(e)
  {
    console.log(e.target.value);
    this.setState({ student: { name: e.target.value } });
  }

  onStudentGenderChange(e)
  {
    console.log(e.target.value);
    this.setState({ student: { gender: e.target.value } });
  }

  onStudentDateOfBirthChange(date_of_birth)
  {
    console.log(date_of_birth);
    this.setState({student: {date_of_birth}});
  }

  onStudentSchoolChange(e)
  {
    console.log(e.target.value);
    this.setState({ student: { school: e.target.value } });
  }

  onStudentTestDateStartChange(start_date)
  {
    console.log(start_date);
    this.setState({tests: {start_date}});
  }

  onStudentTestDateEndChange(end_date)
  {
    console.log(end_date);
    this.setState({tests: {end_date}});
  }

  onStudentAgeChange(e)
  {
    console.log(e.target.value);
    this.setState({ student: { age: e.target.value } });
  }

  onStudentGradeChange(e)
  {
    console.log(e.target.value);
    this.setState({ student: { grade: e.target.value } });
  }

  onBackgroundInfoChange(e)
  {
    console.log(e.target.value);
    this.setState({notes: {bg_info: e.target.value}});
  }

  onSignificantBackgroundInfoChange(e)
  {
    console.log(e.target.value);
    this.setState({notes: {sbg_info: e.target.value}});
  }

  onBehaviorsObservedDuringTestingChange(e)
  {
    console.log(e.target.value);
    this.setState({notes: {bodt_info: e.target.value}});
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
      <div>
        <ReportForm data={this.state} handlers={handlers} />
      </div>
    );
  }
}