import React, {Component} from 'react';
import StudentInfo from './student_info';
import Textarea from './textarea';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default class ReportForm extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {};
  }

  render()
  {
    return (
      <div>
        <StudentInfo /><br />

        <Textarea label={"Background Information (Optional)"} rows={3} /><br />
        <Textarea label={"Significant Background Information (Optional)"} rows={10} /><br />
        <Textarea label={"Behaviors Observed During Testing (Optional)"} rows={3} /><br />

        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <button type="button" className="btn btn-primary float-right">
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}