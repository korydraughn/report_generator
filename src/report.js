import _ from 'lodash';
import React from 'react';
import {withRouter} from 'react-router-dom';
import {ContainerFluid, Row, Col} from './utils';
import DAS2 from "./tests/das_2_table";
import WJ4 from "./tests/wj4_ach_table";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './report.css';

export default withRouter(props => {
  const {student, notes, testing} = props.data;
  const {das2, wj4} = testing.data;

  let his_her;
  let his_her_lower;
  let he_she;
  let he_she_lower;

  if (student.gender === "M")
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

  const test_period = toDateString(student.start_date) + " to " + toDateString(student.end_date);

  return (
    <div className="report" style={{fontSize: "0.8rem"}}>
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
            <LabelValue label="Date of Birth: " value={toDateString(student.dob)} />
            <LabelValue label="School: " value={student.school} />
          </Col>
          <Col>
            <div style={{float: "right"}}>
            <LabelValue label="Grade: " value={student.grade} />
            <LabelValue label="Dates of Administration: " value={test_period} />
            <LabelValue label="Examiner: " value={student.examiner} />
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <fieldset>
              <legend>Tests Administered:</legend>
              <ul>{_.map(testing.tests_administered, t => <li key={t.id}>{t.name}</li>)}</ul>
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
              <p style={{whiteSpace: "pre-line"}}>{notes.sbgi}</p>
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
              <div><DAS2 data={das2} /></div>
              <p>
                <span><u><b>General Conceptual Ability (GCA)</b></u></span><br />
                The General Cognitive Ability score is the most reliable score on the DAS-2 and is usually considered 
                to be the score that is most representative of general intellectual functioning. {student.name} earned a
                score of {das2.gca.tScore} which is within the {das2.gca.dRange.toLowerCase()} range and as good as or better
                than {das2.gca.pRank} percent of {his_her_lower} same aged peers. All tests have some measurement error, however,
                there is a 90 percent chance that if tested again {his_her_lower} GCA would fall somewhere between the scores listed
                in the above table (90% confidence interval).
              </p>
              <p>
                <span><u><b>Other Clusters</b></u></span><br />
                On the <u>Verbal Cluster</u>, which measures acquired verbal concepts and knowledge, {student.name} obtained a standard
                score of {das2.vc.tScore}. {his_her} score of 104 falls within the {das2.vc.dRange.toLowerCase()} range and is as
                good as or better than {das2.vc.pRank} percent of {his_her_lower} same aged peers. 
                <br /><br />
                {student.name} nonverbal mental processing was assessed through the <u>Nonverbal Reasoning Cluster</u>. {he_she}
                obtained a score of 91 in this area. {his_her} score of {das2.nvrc.tScore} falls within the {das2.nvrc.dRange.toLowerCase()}
                range and is as good as or better than {das2.nvrc.pRank} percent of {his_her_lower} same aged peers.
                <br /><br />
                On the <u>Spatial Ability Cluster</u>, which measures complex visual-spatial processing, {he_she_lower} obtained a score
                of {das2.sac.tScore} which is within the {das2.sac.dRange.toLowerCase()} range and as good as or better than {das2.sac.pRank}
                percent of {his_her_lower} same aged peers.
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
              <div><WJ4 data={wj4} /></div>
              <p>
                <span><u><b>Reading</b></u></span><br />
                {student.name} was assessed in three areas to determine {his_her_lower} reading ability, <u>Basic Reading Skills</u>, 
                <u>Reading Comprehension</u>, and <u>Reading Fluency</u>. The <u>Basic Reading Skills</u> cluster is composed of subtests
                that include identifying and reading letters in addition to real and nonsense words. In this area, {student.name} earned a
                score of 78 which is within the low range and is as good as or better than 7 percent of {his_her_lower} same aged peers.
                <br /><br />
                The <u>Reading Comprehension</u> cluster is composed of the Passage Comprehension and Reading Recall subtests. These subtests require 
                students to read passages and identify missing words in addition to reading a passage and recalling as much information as they 
                can remember. In this area, {student.name} earned a score of 89 which is within the low average range and as good as or better 
                than 24 percent of {his_her_lower} same aged peers.
                <br /><br />
                The <u>Reading Fluency</u> cluster is used in order to assess how quickly and automatically students can read and process information. 
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

        <Row>
          <Col>
            <p style={{whiteSpace: "pre-line", marginTop: "3rem"}}>
              _________________________________<br />
              {student.examiner}<br />
              School Psychologist<br />
              {student.school}
            </p>
          </Col>
        </Row>
      </ContainerFluid>
    </div>
  );
});

function toDateString(date_string)
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