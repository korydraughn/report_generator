import _ from "lodash";
import React from "react";

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
        {subtests.map(t => <TableRow key={t.id} subtest={t} data={data[t.id]} />)}
      </tbody>
    </table>
  );
};

function TableRow(props)
{
  const {subtest, data} = props;
  const {tScore, pRank, dRange, cInterval} = data;

  // Theses subtests are the only subtests which expect a value for
  // every column. The rest only expect T-Score to be filled.
  const showAllInputs = id => _.includes(["gca", "vc", "nvrc", "sac"], id);

  return (
    <tr className="text-center">
      <td>{subtest.name}</td>
      <td>{tScore}</td>
      <td>{showAllInputs(subtest.id) ? pRank : null}</td>
      <td>{showAllInputs(subtest.id) ? dRange : null}</td>
      <td>{showAllInputs(subtest.id) ? cInterval : null}</td>
    </tr>
  );
}