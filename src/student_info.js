import React from 'react';
import {ContainerFluid, Row, Col} from './utils';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import {DateTimePicker} from 'react-widgets';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

Moment.locale("en");
momentLocalizer();

export default props => {
  return (
    <ContainerFluid>
      <fieldset>
        <legend>Student Demographics</legend>
        <Row>
          <Col>
            <TextField label="Student Name" onChange={props.onNameChange} />
            <SelectBox label="Student Gender" options={["Male", "Female"]} onChange={props.onGenderChange} />
            <DateField label="Student Date of Birth" onChange={props.onDateOfBirthChange} />
            <TextField label="Student School" onChange={props.onSchoolChange} />
          </Col>
          <Col>
            <Row>
              <Col><DateField label="Date Administered - Start" onChange={props.onTestDateStartChange} /></Col>
              <Col><DateField label="Date Administered - End" onChange={props.onTestDateEndChange} /></Col>
            </Row>
            <NumberField label="Age at Testing" onChange={props.onAgeChange} />
            <SelectBox label="Grade" options={[1, 2]} onChange={props.onGradeChange} />
          </Col>
        </Row>
      </fieldset>
    </ContainerFluid>
  );
};

function TextField(props)
{
  return (
    <div className="form-group">
      <label>{props.label}</label><br />
      <input type="text" className="form-control" onChange={props.onChange} />
    </div>
  );
}

function NumberField(props)
{
  return (
    <div className="form-group">
      <label>{props.label}</label><br />
      <input type="number" className="form-control" onChange={props.onChange} />
    </div>
  );
}

function SelectBox(props)
{
  return (
    <div className="form-group">
      <label>{props.label}</label><br />
      <select className="form-control" onChange={props.onChange}>
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
      <DateTimePicker time={false} format="YYYY-MM-DD" onChange={props.onChange} />
    </div>
  );
}