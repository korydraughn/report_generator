import _ from "lodash";
import React from "react";
import {Form, NestedForm} from "react-form";
import {TextField, SelectField} from "./component_utils";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default props => {
  const {data} = props;

  const subtests = [
    {name: <b>General Conceptual Ability</b>, id: "gca"},
    {name: <b>Verbal Cluster</b>, id: "vc"},
    {name: "Word Definitions", id: "wd"},
    {name: "Verbal Similarities", id: "vs"},
    {name: <b>Nonverbal Reasoning Cluster</b>, id: "nvrc"},
    {name: "Matricies", id: "m"},
    {name: "Sequential/Quantitative Reasoning", id: "sqr"},
    {name: <b>Spatial Ability Cluster</b>, id: "sac"},
    {name: "Recall of Designs", id: "rod"},
    {name: "Pattern Construction", id: "pc"}
  ];

  return (
    <fieldset>
      <legend>Differential Ability Scales - Second Edition (DAS-II)</legend>
      <NestedForm field="das2">
        <Form>
          {formApi => (
            <table className="table table-bordered table-condensed">
              <thead>
                <tr className="text-center">
                  <th>Index or Subtest</th>
                  <th>Standard or T-Score</th>
                  <th>Percentile Rank</th>
                  <th>Descriptive Range</th>
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
  const showAllInputs = id => _.includes(["gca", "vc", "nvrc", "sac"], id);

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
            <td><TextField field="tScore" error={formApi.errors.tScore} /></td>
            <td>{showAllInputs(subtest.id) ? <TextField field="pRank" error={formApi.errors.pRank} /> : null}</td>
            <td>{showAllInputs(subtest.id) ? <SelectField field="dRange" options={options} error={formApi.errors.dRange} /> : null}</td>
            <td>{showAllInputs(subtest.id) ? <TextField field="cInterval" error={formApi.errors.cInterval} /> : null}</td>
          </tr>
        )}
      </Form>
    </NestedForm>
  );
}

function errorValidator(values, handleAllInputs)
{
  const {tScore, pRank, dRange, cInterval} = values;

  const errors = {
    tScore: null,
    pRank: null,
    dRange: null,
    cInterval: null
  };

  if (!tScore)
    errors.tScore = "T-Score is a required input.";

  if (!handleAllInputs)
    return errors;

  if (!pRank)
    errors.pRank = "Percentile Rank is a required input.";

  if (!dRange)
    errors.dRange = "Descriptive Range is a required input.";

  if (!cInterval)
    errors.cInterval = "Confidence Interval is a required input.";

  return errors;
}