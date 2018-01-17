import _ from "lodash";
import React from "react";

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
        {subtests.map(t => <TableRow key={t.id} subtest={t} data={data[t.id]} />)}
      </tbody>
    </table>
  );
};

function TableRow(props)
{
  const {subtest, data} = props;
  const {sScore, pRank, classification, cInterval} = data;

  // Theses subtests are the only subtests which expect a value for
  // every column. The rest only expect T-Score to be filled.
  const showAllInputs = id => _.includes(["brs", "rc", "rf"], id);

  return (
    <tr className="text-center">
      <td>{subtest.name}</td>
      <td>{sScore}</td>
      <td>{showAllInputs(subtest.id) ? pRank : null}</td>
      <td>{showAllInputs(subtest.id) ? classification : null}</td>
      <td>{showAllInputs(subtest.id) ? cInterval : null}</td>
    </tr>
  );
}