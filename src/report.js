import _ from 'lodash';
import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import {ContainerFluid, Row, Col} from './utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import { DAS_II } from './test_spec';

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
            <div style={{float: "right"}}>
            <LabelValue label="Grade: " value={student.grade} />
            <LabelValue label="Dates of Administration: " value={test_period} />
            <LabelValue label="Examiner: " value={"Jeremy Draughn"} />
            </div>
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
              <p>
                <span><u><b>Differential Ability Scales, Second Edition (DAS-II)</b></u></span><br />
                {student.name}'s cognitive and intellectual functioning was assessed per administration of the
                School-Aged Battery of the DAS-2. Administration of the DAS-2 yields a General Conceptual Ability (GCA)
                score that can be broken down into three cluster scores or domains of cognitive ability: Verbal Ability,
                Nonverbal Reasoning Ability, and Spatial Ability. The GCA cluster scores are calculated in terms of
                standard scores with a mean of 100 and a standard deviation of 10 (average scores range from 90 to 109).
                Each of these scores is comprised of subtests that are reported in terms of T-scores with a mean of 50 and
                a standard deviation of 10 (average scores range from 40 to 60). {student.name}'s performance is listed on the
                following chart:
              </p>
              <div><DAS2 /></div>
              <p>
                <span><u><b>General Conceptual Ability (GCA)</b></u></span><br />
                The General Cognitive Ability score is the most reliable score on the DAS-2 and is usually considered 
                to be the score that is most representative of general intellectual functioning. {student.name} earned a score of 
                98 which is within the average range and as good as or better than 42 percent of her same aged peers. All
                tests have some measurement error, however, there is a 90 percent chance that if tested again her GCA would
                fall somewhere between the scores listed in the above table (90% confidence interval).
              </p>
              <p>
                <span><u><b>Other Clusters</b></u></span><br />
                On the Verbal Cluster, which measures acquired verbal concepts and knowledge, {student.name} obtained a standard
                score of 99. Her score of 104 falls within the average range and is as good as or better than 61 percent of her
                same aged peers. 
                <br />
                {student.name} nonverbal mental processing was assessed through the Nonverbal Reasoning Cluster. She obtained a
                score of 91 in this area. Her score of 96 falls within the average range and is as good as or better than 27
                percent of her same aged peers.
                <br />
                On the Spatial Ability Cluster, which measures complex visual-spatial processing, she obtained a score of 95
                which is within the average range and as good as or better than 42 percent of her same aged peers
              </p>
            </fieldset>
          </Col>
        </Row>

        <Row>
          <Col>
            <fieldset>
              <legend className="text-center"><u>Educational Assessment</u></legend>
              <p>
                <span><u><b>Woodcock Johnson Tests of Achievement - Fourth Edition (WJ-4:ACH)</b></u></span><br />
                The WJ-4:ACH is an individually administered test measuring achievement in reading, mathematics, and writing.
                Because this is a norm-referenced test of school achievement, {student.name}'s performance is compared to a
                national sample of other children at her age level. Her performance on this test should be related to, but may
                not be identical to, her performance in this school's particular curriculum. {student.name} obtained the following
                scores, based on comparison to other {student.age}-year-old students from across the United States.
              </p>
              <div><WJ4_ACH /></div>
              <p>
                <span><u><b>Reading</b></u></span><br />
                {student.name} was assessed in three areas to determine her reading ability, Basic Reading Skills, Reading Comprehension, 
                and Reading Fluency. The Basic Reading Skills cluster is composed of subtests that include identifying and reading letters 
                in addition to real and nonsense words. In this area, {student.name} earned a score of 78 which is within the low range and 
                is as good as or better than 7 percent of her same aged peers.
                <br /><br />
                The Reading Comprehension cluster is composed of the Passage Comprehension and Reading Recall subtests. These subtests require 
                students to read passages and identify missing words in addition to reading a passage and recalling as much information as they 
                can remember. In this area, {student.name} earned a score of 89 which is within the low average range and as good as or better 
                than 24 percent of her same aged peers.
                <br /><br />
                The Reading Fluency cluster is used in order to assess how quickly and automatically students can read and process information. 
                This cluster is composed of the Oral Reading and Sentence Reading Fluency subtests. Students are required to read short passages 
                outloud as well as read sentences and decide if the sentence is true or false. In this area, {student.name} earned a score of 78 
                which is within the low range and as good as or better than 8 percent of her same aged peers. 
              </p>
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

function DAS2(props)
{
  const headers = [
    "Index or Subtest",
    "Standard or T-Score",
    "Percentile Rank",
    "Descriptive Range",
    "90% Confidence Interval"
  ];

  return (
    <table style={{fontSize: ".7rem"}} className="table table-bordered table-condensed">
      <TableHeaders headers={headers} />
      <DAS2_TableBody />
    </table>
  );
}

function WJ4_ACH(props)
{
  const headers = [
    "Index or Subtest",
    "Standard or T-Score",
    "Percentile Rank",
    "Descriptive Range",
    "90% Confidence Interval"
  ];

  return (
    <table style={{fontSize: ".7rem"}} className="table table-bordered table-condensed">
      <TableHeaders headers={headers} />
      <WJ4_ACH_TableBody />
    </table>
  );
}

function Table(props)
{
  const headers = [
    "Index or Subtest",
    "Standard or T-Score",
    "Percentile Rank",
    "Descriptive Range",
    "90% Confidence Interval"
  ];

  const {content} = props;

  return (
    <table className="table table-bordered table-collapsed">
      <TableHeaders headers={headers} />
      <TableBody content={content} />
    </table>
  );
}

function TableHeaders(props)
{
  return (
    <thead>
      <tr>
        {props.headers.map(h => <th>{h}</th>)}
      </tr>
    </thead>
  );
}

function TableBody(props)
{
  return (
    <tbody>
    </tbody>
  )
}

function DAS2_TableBody(props)
{
  return (
    <tbody>
      <TableRow bold data={["General Conceptual Ability", "98", "42", "Average", ""]} />
      <TableRow bold data={["Verbal Cluster", "99", "61", "Average", ""]} />
      <TableRow data={["Word Definitions", "", "", "", ""]} />
      <TableRow data={["Verbal Similarities", "", "", "", ""]} />
      <TableRow bold data={["Nonverbal Reasoning Cluster", "96", "27", "Average", ""]} />
      <TableRow data={["Matricies", "", "", "", ""]} />
      <TableRow data={["Sequential/Quantitative Reasoning", "", "", "", ""]} />
      <TableRow bold data={["Spatial Ability Cluster", "95", "42", "Average", ""]} />
      <TableRow data={["Recall of Designs", "", "", "", ""]} />
      <TableRow data={["Pattern Construction", "", "", "", ""]} />
    </tbody>
  )
}

function WJ4_ACH_TableBody(props)
{
  return (
    <tbody>
      <TableRow bold data={["BASIC READING SKILLS", "78", "7", "Low", "74 - 83"]} />
      <TableRow data={["Letter-Word ID", "81", "", "", ""]} />
      <TableRow data={["Word Attack", "73", "", "", ""]} />
      <TableRow bold data={["READING COMPREHENSION", "89", "24", "Low Average", "85 - 94"]} />
      <TableRow data={["Passage Comprehension", "88", "", "", ""]} />
      <TableRow data={["Reading Recall", "92", "", "", ""]} />
      <TableRow bold data={["READING FLUENCY", "78", "8", "Low", "73 - 84"]} />
      <TableRow data={["Oral Reading", "82", "", "", ""]} />
      <TableRow data={["Sentence Reading Fluency", "80", "", "", ""]} />
    </tbody>
  )
}

function TableRow(props)
{
  const style = {
    fontWeight: props.bold ? "bold" : "initial"
  };
  return <tr>{props.data.map(d => <td style={style}>{d}</td>)}</tr>;
}