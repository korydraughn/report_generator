import _ from "lodash";
import React from "react";
import {Form, NestedForm, Text, Select} from "react-form";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default props => {
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
  const showAllInputs = id => _.includes(["gca", "vc", "nvrc", "sac"], id);

  return (
    <NestedForm field={subtest.id}>
      <Form>
        {formApi => (
          <tr className="text-center">
            <td>{subtest.name}</td>
            <td><Text field="tScore" className="form-control" /></td>
            <td>{showAllInputs(subtest.id) ? <Text field="pRank" className="form-control" /> : null}</td>
            <td>{showAllInputs(subtest.id) ? <Select field="dRange" options={options} className="form-control" /> : null}</td>
            <td>{showAllInputs(subtest.id) ? <Text field="cInterval" className="form-control" /> : null}</td>
          </tr>
        )}
      </Form>
    </NestedForm>
  );
}