import React from 'react';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import {DateTimePicker} from 'react-widgets';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

Moment.locale("en");
momentLocalizer();

export function ContainerFluid(props)
{
  return <div className="container-fluid">{props.children}</div>;
}

export function Row(props)
{
  return <div className="row">{props.children}</div>;
}

export function Col(props)
{
  return <div className="col">{props.children}</div>;
}

export function SingleElementContainer(props)
{
  return (
    <ContainerFluid>
      <Row>
        <Col>
          {props.children}
        </Col>
      </Row>
    </ContainerFluid>
  );
}

export function TextField(props)
{
  return (
    <div className="form-group">
      <label>{props.label}</label><br />
      <input
        type="text"
        className="form-control"
        onChange={props.onChange}
        value={props.value} />
    </div>
  );
}

export function NumberField(props)
{
  return (
    <div className="form-group">
      <label>{props.label}</label><br />
      <input
        type="number"
        className="form-control"
        onChange={props.onChange}
        value={props.value} />
    </div>
  );
}

export function SelectBox(props)
{
  return (
    <div className="form-group">
      <label>{props.label}</label><br />
      <select
        className="form-control"
        onChange={props.onChange}
        defaultValue={props.value}>
        {props.options.map((v, i) => <option key={i} value={v}>{v}</option>)}
      </select>
    </div>
  );
}

export function DateField(props)
{
  const d = props.value;

  return (
    <div className="form-group">
      <label>{props.label}</label><br />
      {/*<DateTimePicker {...config} />*/}
      <DateTimePicker
        time={false}
        format="YYYY-MM-DD"
        onChange={props.onChange}
        defaultValue={d ? new Date(d.y, d.m, d.d) : null} />
    </div>
  );
}