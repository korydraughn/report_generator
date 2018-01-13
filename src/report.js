import _ from 'lodash';
import React from 'react';
import {ContainerFluid, Row, Col} from './utils';
import {DAS_II, WJ4_ACH} from './test_spec';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './report.css';

export default props => {
  const {student, notes, tests} = props.data;

  let his_her;
  let his_her_lower;
  let he_she;
  let he_she_lower;

  if (student.gender === "Male")
  {
    his_her = "His";
    he_she = "He";
    his_her_lower = his_her.toLowerCase();
    he_she_lower = he_she.toLowerCase();
  }
  else
  {
    his_her = "Her";
    he_she = "She";
    his_her_lower = his_her.toLowerCase();
    he_she_lower = he_she.toLowerCase();
  }

  const test_period = to_date_string(tests.start_date) + " to " + to_date_string(tests.end_date);

  return (
    <div className="report" style={{fontSize: "1rem"}}>
      <ContainerFluid>
        <Row>
          <Col>
            <div className="text-center">
              <h4>PITT COUNTY SCHOOLS</h4>
              <h4>CONFIDENTIAL</h4>
              <h4>PYSCHOEDUCATIONAL EVALUATION REPORT</h4>
            </div>
          </Col>
        </Row>

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
            <LabelValue label="Examiner: " value={student.admin} />
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
              <p style={{whiteSpace: "pre-line"}}>{notes.rfr}</p>
            </fieldset>
          </Col>
        </Row>

        <Row>
          <Col>
            <fieldset>
              <legend className="text-center"><u>Significant Background Information</u></legend>
              <p style={{whiteSpace: "pre-line"}}>{notes.sbg}</p>
            </fieldset>
          </Col>
        </Row>

        <Row>
          <Col>
            <fieldset>
              <legend className="text-center"><u>Behaviors Observed During Testing</u></legend>
              <p style={{whiteSpace: "pre-line"}}>{notes.bodt}</p>
            </fieldset>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="page-break">
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
              <div><DAS2_Table data={tests.data[DAS_II]} /></div>
              <p>
                <span><u><b>General Conceptual Ability (GCA)</b></u></span><br />
                The General Cognitive Ability score is the most reliable score on the DAS-2 and is usually considered 
                to be the score that is most representative of general intellectual functioning. {student.name} earned a
                score of {tests.data[DAS_II]["General Conceptual Ability"].t_score} which is within the
                {tests.data[DAS_II]["General Conceptual Ability"].descriptive_range.toLowerCase()} range and as good
                as or better than {tests.data[DAS_II]["General Conceptual Ability"].percentile_rank} percent of {his_her_lower}
                same aged peers. All tests have some measurement error, however, there is a 90 percent chance that if tested again
                {his_her_lower} GCA would fall somewhere between the scores listed in the above table (90% confidence interval).
              </p>
              <p>
                <span><u><b>Other Clusters</b></u></span><br />
                On the <u>Verbal Cluster</u>, which measures acquired verbal concepts and knowledge, {student.name} obtained a standard
                score of {tests.data[DAS_II]["Verbal Cluster"].t_score}. {his_her} score of 104 falls within the
                {tests.data[DAS_II]["Verbal Cluster"].descriptive_range.toLowerCase()} range and is as good as or better than
                {tests.data[DAS_II]["Verbal Cluster"].percentile_rank} percent of {his_her_lower} same aged peers. 
                <br /><br />
                {student.name} nonverbal mental processing was assessed through the <u>Nonverbal Reasoning Cluster</u>. {he_she}
                obtained a score of 91 in this area. {his_her} score of {tests.data[DAS_II]["Non-Verbal Reasoning Cluster"].t_score}
                falls within the {tests.data[DAS_II]["Non-Verbal Reasoning Cluster"].descriptive_range.toLowerCase()} range and is
                as good as or better than {tests.data[DAS_II]["Non-Verbal Reasoning Cluster"].percentile_rank} percent of {his_her_lower}
                same aged peers.
                <br /><br />
                On the <u>Spatial Ability Cluster</u>, which measures complex visual-spatial processing, {he_she_lower}
                obtained a score of {tests.data[DAS_II]["Spatial Ability Cluster"].t_score} which is within the
                {tests.data[DAS_II]["Spatial Ability Cluster"].descriptive_range.toLowerCase()} range and as good as or better than
                {tests.data[DAS_II]["Spatial Ability Cluster"].percentile_rank} percent of {his_her_lower} same aged peers.
              </p>
            </fieldset>
            </div>
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
                national sample of other children at {his_her_lower} age level. {his_her} performance on this test should be related to, but may
                not be identical to, {his_her_lower} performance in this school's particular curriculum. {student.name} obtained the following
                scores, based on comparison to other {student.age}-year-old students from across the United States.
              </p>
              <div><WJ4_ACH_Table data={tests.data[WJ4_ACH]} /></div>
              <p>
                <span><u><b>Reading</b></u></span><br />
                {student.name} was assessed in three areas to determine {his_her_lower} reading ability, Basic Reading Skills, Reading Comprehension, 
                and Reading Fluency. The Basic Reading Skills cluster is composed of subtests that include identifying and reading letters 
                in addition to real and nonsense words. In this area, {student.name} earned a score of 78 which is within the low range and 
                is as good as or better than 7 percent of {his_her_lower} same aged peers.
                <br /><br />
                The Reading Comprehension cluster is composed of the Passage Comprehension and Reading Recall subtests. These subtests require 
                students to read passages and identify missing words in addition to reading a passage and recalling as much information as they 
                can remember. In this area, {student.name} earned a score of 89 which is within the low average range and as good as or better 
                than 24 percent of {his_her_lower} same aged peers.
                <br /><br />
                The Reading Fluency cluster is used in order to assess how quickly and automatically students can read and process information. 
                This cluster is composed of the Oral Reading and Sentence Reading Fluency subtests. Students are required to read short passages 
                outloud as well as read sentences and decide if the sentence is true or false. In this area, {student.name} earned a score of 78 
                which is within the low range and as good as or better than 8 percent of {his_her_lower} same aged peers. 
              </p>
            </fieldset>
          </Col>
        </Row>

        <Row>
          <Col>
            <fieldset>
              <legend className="text-center"><u>Summary &amp; Conclusions</u></legend>
              <p style={{whiteSpace: "pre-line"}}>{notes.sac}</p>
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

function DAS2_Table(props)
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
      <DAS2_TableBody data={props.data || {}} />
    </table>
  );
}

function WJ4_ACH_Table(props)
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
      <WJ4_ACH_TableBody data={props.data || {}} />
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
        {props.headers.map(h => <th key={h}>{h}</th>)}
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
  const gca = props.data["General Conceptual Ability"] || {};
  const vc = props.data["Verbal Cluster"] || {};
  const wd = props.data["Word Definitions"] || {};
  const vs = props.data["Verbal Similarities"] || {};
  const nvrc = props.data["Non-Verbal Reasoning Cluster"] || {};
  const m = props.data["Matricies"] || {};
  const sqr = props.data["Sequential/Quantitative Reasoning"] || {};
  const sac = props.data["Spatial Ability Cluster"] || {};
  const rod = props.data["Recall of Designs"] || {};
  const pc = props.data["Pattern Construction"] || {};

  return (
    <tbody>
      <TableRow bold data={["General Conceptual Ability", ...get_values(gca)]} />
      <TableRow bold data={["Verbal Cluster", ...get_values(vc)]} />
      <TableRow data={["Word Definitions", ...get_values(wd)]} />
      <TableRow data={["Verbal Similarities", ...get_values(vs)]} />
      <TableRow bold data={["Nonverbal Reasoning Cluster", ...get_values(nvrc)]} />
      <TableRow data={["Matricies", ...get_values(m)]} />
      <TableRow data={["Sequential/Quantitative Reasoning", ...get_values(sqr)]} />
      <TableRow bold data={["Spatial Ability Cluster", ...get_values(sac)]} />
      <TableRow data={["Recall of Designs", ...get_values(rod)]} />
      <TableRow data={["Pattern Construction", ...get_values(pc)]} />
    </tbody>
  )
}

function get_values(data)
{
  return [
    data.t_score || "",
    data.percentile_rank || "",
    data.descriptive_range || "",
    data.confidence_interval
  ];
}

function WJ4_ACH_TableBody(props)
{
  const brs = props.data["Basic Reading Skills"] || {};
  const lwi = props.data["Letter-Word ID"] || {};
  const wa = props.data["Word Attack"] || {};
  const rc = props.data["Reading Comprehension"] || {};
  const pc = props.data["Passage Comprehension"] || {};
  const rr = props.data["Reading Recall"] || {};
  const rf = props.data["Reading Fluency"] || {};
  const or = props.data["Oral Reading"] || {};
  const srf = props.data["Sentence Reading Fluency"] || {};

  return (
    <tbody>
      <TableRow bold data={["BASIC READING SKILLS", ...get_values(brs)]} />
      <TableRow data={["Letter-Word ID", ...get_values(lwi)]} />
      <TableRow data={["Word Attack", ...get_values(wa)]} />
      <TableRow bold data={["READING COMPREHENSION", ...get_values(rc)]} />
      <TableRow data={["Passage Comprehension", ...get_values(pc)]} />
      <TableRow data={["Reading Recall", ...get_values(rr)]} />
      <TableRow bold data={["READING FLUENCY", ...get_values(rf)]} />
      <TableRow data={["Oral Reading", ...get_values(or)]} />
      <TableRow data={["Sentence Reading Fluency", ...get_values(srf)]} />
    </tbody>
  )
}

function TableRow(props)
{
  const style = {
    fontWeight: props.bold ? "bold" : "initial"
  };

  return (
    <tr>
      {props.data.map((d, i) => <td key={i} style={style}>{d}</td>)}
    </tr>
  );
}