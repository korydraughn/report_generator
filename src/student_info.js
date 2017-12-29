import React, {Component} from 'react';
import {ContainerFluid, Row, Col} from './utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

function TextField(props)
{
  return (
    <div className="form-group">
      <label>{props.label}</label><br />
      <input type="text" className="form-control" />
    </div>
  );
}

function NumberField(props)
{
  return (
    <div className="form-group">
      <label>{props.label}</label><br />
      <input type="number" className="form-control" />
    </div>
  );
}

function SelectBox(props)
{
  return (
    <div className="form-group">
      <label>{props.label}</label><br />
      <select className="form-control">
        {props.options.map((v, i) => <option key={i} value={v}>{v}</option>)}
      </select>
    </div>
  );
}

function DateField(props)
{
  return (
    <div className="form-group">
      <label>{props.label}</label><br />
      <input type="date" className="form-control" />
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
      <ContainerFluid>
        <fieldset>
          <legend>Student Demographics</legend>
          <Row>
            <Col>
              <TextField label="Student Name" />
              <SelectBox label="Student Gender" options={["Male", "Female"]} />
              <DateField label="Student Date of Birth" />
              <TextField label="Student School" />
            </Col>
            <Col>
              <Row>
                <Col><DateField label="Date Administered - Start" /></Col>
                <Col><DateField label="Date Administered - End" /></Col>
              </Row>
              <NumberField label="Age at Testing" />
              <SelectBox label="Grade" options={[1, 2]} />
            </Col>

            <div hidden>
              <Col>{labels_lhs.map((l, i) => <TextField label={l} key={i} />)}</Col>
              <Col>{labels_rhs.map((l, i) => <TextField label={l} key={i} />)}</Col>
            </div>
          </Row>
        </fieldset>
      </ContainerFluid>
    );
  }
}