import _ from "lodash";
import React from "react";
import {Form, NestedForm} from "react-form";
import {TextField, SelectField} from "./component_utils";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default props => {
  const {data} = props;

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
                {subtests.map(t => <TableRow key={t.id} subtest={t} data={data ? data[t.id] : null} />)}
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
  const {subtest, data} = props;

  const options = ["Above Average", "Average", "Below Average"].map(o => ({
    label: o,
    value: o
  }));

  // Theses subtests are the only subtests which expect a value for
  // every column. The rest only expect T-Score to be filled.
  const showAllInputs = id => _.includes(["brs", "rc", "rf"], id);

  return (
    <NestedForm field={subtest.id}>
      <Form
        dontValidateOnMount={true}
        validateOnSubmit={true}
        defaultValues={data}
        validateError={values => errorValidator(values, showAllInputs(subtest.id))}>
        {formApi => (
          <tr className="text-center">
            <td>{subtest.name}</td>
            <td><TextField field="sScore" error={formApi.errors.sScore} /></td>
            <td>{showAllInputs(subtest.id) ? <TextField field="pRank" error={formApi.errors.pRank} /> : null}</td>
            <td>{showAllInputs(subtest.id) ? <SelectField field="classification" options={options} error={formApi.errors.classification} /> : null}</td>
            <td>{showAllInputs(subtest.id) ? <TextField field="cInterval" error={formApi.errors.cInterval} /> : null}</td>
          </tr>
        )}
      </Form>
    </NestedForm>
  );
}

function errorValidator(values, handleAllInputs)
{
  const {sScore, pRank, classification, cInterval} = values;

  const errors = {
    sScore: null,
    pRank: null,
    classification: null,
    cInterval: null
  };

  if (!sScore)
    errors.sScore = "Standard Score is a required input.";

  if (!handleAllInputs)
    return errors;

  if (!pRank)
    errors.pRank = "Percentile Rank is a required input.";

  if (!classification)
    errors.classification = "Standard Score Classification is a required input.";

  if (!cInterval)
    errors.cInterval = "Confidence Interval is a required input.";

  return errors;
}