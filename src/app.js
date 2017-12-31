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
    console.log(tests);

    const init_cols = test_name => {
      return {
        t_score: ["68%", "90%", "98%"][_.random(2)],
        percentile_rank: _.random(100),
        descriptive_range: ["Below Average", "Average", "Above Average"][_.random(2)],
        confidence_interval: _.random(100)
      };
    };

    this.setState({
      tests: {
        data: _.zipObject(_.map(tests, test => test.id),
                          _.map(tests, test => ({
                              id: test.id,
                              name: test.name,
                              general_conceptual_ability: init_cols(),
                              verbal_cluster: init_cols(),
                              nonverbal_reasoning_cluster: init_cols(),
                              spatial_ability_cluster: init_cols()
                            })))
      }
    });
  }

  render()
  {
    const event_handlers = {
      student: {
        onNameChange: e => this.onStudentNameChange(e),
        onGenderChange: e => this.onStudentGenderChange(e),
        onDateOfBirthChange: v => this.onStudentDateOfBirthChange(v),
        onSchoolChange: e => this.onStudentSchoolChange(e),
        onTestDateStartChange: e => this.onStudentTestDateStartChange(e),
        onTestDateEndChange: e => this.onStudentTestDateEndChange(e),
        onAgeChange: e => this.onStudentAgeChange(e),
        onGradeChange: e => this.onStudentGradeChange(e)
      },
      notes: {
        onBackgroundInfoChange: e => this.onBackgroundInfoChange(e),
        onSignificantBackgroundInfoChange: e => this.onSignificantBackgroundInfoChange(e),
        onBehaviorsObservedDuringTestingChange: e => this.onBehaviorsObservedDuringTestingChange(e)
      },
      tests: {
        onListChange: e => this.onTestListChange(e)
      }
    };

    return (
      <div>
        <ReportForm data={this.state} event_handlers={event_handlers} />
      </div>
    );
  }
}