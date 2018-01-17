import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReportForm from './report_form';
import TestDetailsForm from './test_details_form';
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
        dob: date,
        school: "",
        age: "",
        grade: "",
        examiner: "",
        start_date: date,
        end_date: date
      },
      notes: {
        rfr: "",   // Background Info.
        sbgi: "",   // Significant Background Info.
        bodt: "",  // Behaviors Observed During Testing
        sac: ""    // Summary & Conclusion
      },
      testing: {
        tests_administered: [],
        data: {}
      }
    };
  }

  setAppState(state)
  {
    this.setState(state);
    setTimeout(() => console.debug(this.state), 250);
  }

  render()
  {
    const handlers = {
      setAppState: this.setAppState.bind(this)
    };

    return (
      <Router>
        <Switch>
          <Route exact path="/"><ReportForm data={this.state} handlers={handlers} /></Route>
          <Route path="/test-details"><TestDetailsForm data={this.state.testing} handlers={handlers} /></Route>
          <Route path="/report"><Report data={this.state} /></Route>
        </Switch>
      </Router>
    );
  }
}