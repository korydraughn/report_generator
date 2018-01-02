import _ from 'lodash';
import React from 'react';
import {ContainerFluid, Row, Col, TextField,
        NumberField, DateField, SelectBox} from './utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default props => {
  const {
    name, 
    gender, 
    dob, 
    school, 
    start_date, 
    end_date, 
    age, 
    grade
  } = props.data;

  return (
    <ContainerFluid>
      <fieldset>
        <legend>Student Demographics</legend>
        <Row>
          <Col>
            <TextField label="Student Name" onChange={props.onNameChange} value={name} />
            <SelectBox label="Student Gender" options={["Male", "Female"]} onChange={props.onGenderChange} value={gender} />
            <DateField label="Student Date of Birth" onChange={props.onDateOfBirthChange} value={dob} />
            <TextField label="Student School" onChange={props.onSchoolChange} value={school} />
          </Col>
          <Col>
            <Row>
              <Col><DateField label="Date Administered - Start" onChange={props.onTestDateStartChange} value={start_date} /></Col>
              <Col><DateField label="Date Administered - End" onChange={props.onTestDateEndChange} value={end_date} /></Col>
            </Row>
            <NumberField label="Age at Testing" onChange={props.onAgeChange} value={age} />
            <SelectBox label="Grade" options={["Pre-K", ..._.range(1, 13)]} onChange={props.onGradeChange} value={grade} />
          </Col>
        </Row>
      </fieldset>
    </ContainerFluid>
  );
}