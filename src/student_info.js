import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

function InputField(props)
{
  return (
    <div className="form-group">
      <label>{props.label}</label><br />
      <input type="text" className="form-control" />
    </div>
  );
}

export default class StudentInfo extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {};
  }

  render()
  {
    const labels_lhs = [
      "Student Name",
      "Student Gender",
      "Student Date of Birth",
      "Student School"
    ];

    const labels_rhs = [
      "Dates Administered",
      "Age at Testing",
      "Grade"
    ];

    return (
      <div className="container-fluid">
        <fieldset>
          <legend>Student Demographics</legend>
          <div className="row">
            <div className="col">
              {labels_lhs.map((l, i) => <InputField label={l} key={i} />)}
            </div>
            <div className="col">
              {labels_rhs.map((l, i) => <InputField label={l} key={i} />)}
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}