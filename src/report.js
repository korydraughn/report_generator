import _ from 'lodash';
import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import {ContainerFluid, Row, Col} from './utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default props => {
  const {student, notes, tests} = props.data;

  const test_period = to_date_string(tests.start_date) + " to " + to_date_string(tests.end_date);

  return (
    <div style={{fontSize: "1rem"}}>
      <Link to="/">&lt;&lt; Go Back</Link>
      {
        //<div><pre>{JSON.stringify(props.data, null, 2)}</pre></div>
      }
      <ContainerFluid>
        <Row>
          <Col>
            <LabelValue label="Name: " value={student.name} />
            <LabelValue label="Chronological Age at Testing: " value={student.age} />
            <LabelValue label="Date of Birth: " value={to_date_string(student.date_of_birth)} />
            <LabelValue label="School: " value={student.school} />
          </Col>
          <Col>
            <LabelValue label="Grade: " value={student.grade} />
            <LabelValue label="Dates of Administration: " value={test_period} />
            <LabelValue label="Examiner: " value={"Jeremy Draughn"} />
          </Col>
        </Row>

        <Row>
          <Col>
            <fieldset>
              <legend>Tests Administered:</legend>
              <ul>{_.map(tests.data, t => <li>{t.name}</li>)}</ul>
            </fieldset>
          </Col>
        </Row>

        <Row>
          <Col>
            <fieldset>
              <legend className="text-center"><u>Reason For Referral</u></legend>
              <p>{notes.rfr}</p>
            </fieldset>
          </Col>
        </Row>

        <Row>
          <Col>
            <fieldset>
              <legend className="text-center"><u>Significant Background Information</u></legend>
              <p>{notes.sbg}</p>
            </fieldset>
          </Col>
        </Row>

        <Row>
          <Col>
            <fieldset>
              <legend className="text-center"><u>Behaviors Observed During Testing</u></legend>
              <p>{notes.bodt}</p>
            </fieldset>
          </Col>
        </Row>

        <Row>
          <Col>
            <fieldset>
              <legend className="text-center"><u>Cognitive Assessment</u></legend>
              <p></p>
            </fieldset>
          </Col>
        </Row>

        <Row>
          <Col>
            <fieldset>
              <legend className="text-center"><u>Summary &amp; Conclusions</u></legend>
              <p>{notes.sac}</p>
            </fieldset>
          </Col>
        </Row>
      </ContainerFluid>
    </div>
  );
}

function to_date_string(date_string)
{
  function fix(v) { return v < 10 ? "0" + v : v; }
  let {y, m, d} = date_string;
  return y + '-' + fix(++m) + '-' + fix(d);
}

function LabelValue(props)
{
  return (
    <div>
      <label style={{fontWeight: "bold"}}>{props.label}</label>&nbsp;
      <span>{props.value}</span>
    </div>
  );
}