import _ from 'lodash';
import React from 'react';
import {ContainerFluid, Row, Col, TextField,
        NumberField, DateField, SelectBox} from './utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

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
            <SelectBox label="Grade" options={["Pre-K", ..._.range(1, 13)]} onChange={props.onGradeChange} />
          </Col>
        </Row>
      </fieldset>
    </ContainerFluid>
  );
};