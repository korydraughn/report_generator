import _ from "lodash";
import React from "react";
import {Form, NestedForm, Text, Select} from "react-form";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default props => {
  const subtests = [
    {name: <b>BASIC READING SKILLS</b>, id: "brs"},
    {name: "Letter-Word ID", id: "lwid"},
    {name: "Word Attack", id: "wa"},
    {name: <b>READING COMPREHENSION</b>, id: "rc"},
    {name: "Passage Comprehension", id: "pc"},
    {name: "Reading Recall", id: "rr"},
    {name: <b>READING FLUENCY</b>, id: "rf"},
    {name: "Oral Reading", id: "or"},
    {name: "Sentence Reading Fluency", id: "srf"}
  ];

  return (
    <fieldset>
      <legend>Woodcock Johnson Rests of Achievement - Fourth Edition (WJ-4:ACH)</legend>
      <NestedForm field="wj4">
        <Form>
          {formApi => (
            <table className="table table-bordered table-condensed">
              <thead>
                <tr className="text-center">
                  <th>Clusters/Subtest</th>
                  <th>Standard Score</th>
                  <th>Percentile Rank</th>
                  <th>Standard Score Classification</th>
                  <th>90% Confidence Interval</th>
                </tr>
              </thead>
              <tbody>
                {subtests.map(t => <TableRow key={t.id} subtest={t} />)}
              </tbody>
            </table>
          )}
        </Form>
      </NestedForm>
    </fieldset>
  );
};

function TableRow(props)
{
  const {subtest} = props;

  const options = ["Above Average", "Average", "Below Average"].map(o => ({
    label: o,
    value: o
  }));

  // Theses subtests are the only subtests which expect a value for
  // every column. The rest only expect T-Score to be filled.
  const showAllInputs = id => _.includes(["brs", "rc", "rf"], id);

  return (
    <NestedForm field={subtest.id}>
      <Form>
        {formApi => (
          <tr className="text-center">
            <td>{subtest.name}</td>
            <td><Text field="sScore" className="form-control" /></td>
            <td>{showAllInputs(subtest.id) ? <Text field="pRank" className="form-control" /> : null}</td>
            <td>{showAllInputs(subtest.id) ? <Select field="classification" options={options} className="form-control" /> : null}</td>
            <td>{showAllInputs(subtest.id) ? <Text field="cInterval" className="form-control" /> : null}</td>
          </tr>
        )}
      </Form>
    </NestedForm>
  );
}