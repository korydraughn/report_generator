import React, {Component} from 'react';
import StudentInfo from './student_info';
import Textarea from './textarea';
import {SingleElementContainer} from './utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default class ReportForm extends Component
{
  render()
  {
    return (
      <div>
        <StudentInfo /><br />

        <Textarea label="Background Information (Optional)" rows={3} /><br />
        <Textarea label="Significant Background Information (Optional)" rows={10} /><br />
        <Textarea label="Behaviors Observed During Testing (Optional)" rows={3} /><br />

        <SingleElementContainer>
            <button type="button" className="btn btn-primary float-right">
              Generate Report
            </button>
        </SingleElementContainer>
      </div>
    );
  }
}