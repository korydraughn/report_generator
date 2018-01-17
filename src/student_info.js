import _ from 'lodash';
import React from 'react';
import {Form, NestedForm} from 'react-form';
import {ContainerFluid, Row, Col} from './utils';
import {TextField, SelectBox, DateField} from './form_inputs';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default props => {
  const gender_options = [
    {label: "Male", value: "M"},
    {label: "Female", value: "F"}
  ];

  const grade_options = ["Pre-K", ..._.range(1, 13)].map(g => ({label: g, value: g}));

  return (
    <ContainerFluid>
      <fieldset>
        <legend>Student Demographics</legend>
        <NestedForm field="student">
          <Form
            dontValidateOnMount={true}
            validateOnSubmit={true}
            defaultValues={props.data}
            validateError={errorValidator}>
            {formApi => (
              <div id="student-info-form">
                <Row>
                  <Col>
                    <TextField name="name" label="Student Name" error={formApi.errors.name} />
                    <SelectBox name="gender" label="Student Gender" options={gender_options} error={formApi.errors.gender} />
                    <TextField name="school" label="Student School" error={formApi.errors.school} />
                    <DateField name="dob" label="Student Date of Birth" error={formApi.errors.dob} />
                  </Col>
                  <Col>
                    <Row>
                      <Col><DateField name="start_date" label="Date Administered - Start" error={formApi.errors.start_date} /></Col>
                      <Col><DateField name="end_date" label="Date Administered - End" error={formApi.errors.end_date} /></Col>
                    </Row>
                    <TextField name="age" label="Age at Testing" error={formApi.errors.age} />
                    <SelectBox name="grade" label="Grade" options={grade_options} error={formApi.errors.grade} />
                    <TextField name="examiner" label="Examiner" error={formApi.errors.examiner} />
                  </Col>
                </Row>
              </div>
            )}
          </Form>
        </NestedForm>
      </fieldset>
    </ContainerFluid>
  );
}

export function errorValidator(values)
{
  const {
    name,
    gender,
    school,
    dob,
    start_date,
    end_date,
    age,
    grade,
    examiner
  } = values;

  const errors = {
    name: null,
    gender: null,
    school: null,
    dob: null,
    start_date: null,
    end_date: null,
    age: null,
    grade: null,
    examiner: null
  };

  if (!name)
    errors.name = "Student Name is a required input.";

  if (!gender)
    errors.gender = "Student Gender is a required input.";

  if (!school)
    errors.school = "School is a required input.";

  if (!dob)
    errors.dob = "Date of Birth is a required input.";

  if (!start_date)
    errors.start_date = "Testing Start Date is a required input.";

  if (!end_date)
    errors.end_date = "Testing End Date is a required input.";

  if (!age || !/\d+/.test(age))
    errors.age = "Age is a required input.";

  if (!grade)
    errors.grade = "Grade is a required input.";

  if (!examiner)
    errors.examiner = "Examiner is a required input.";

  return errors;
}