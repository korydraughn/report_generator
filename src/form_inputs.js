import React, {Component} from 'react';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import {DateTimePicker} from 'react-widgets';
import {Form, Text, Select, FormField} from 'react-form';
import {ContainerFluid, Row, Col} from './utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

Moment.locale("en");
momentLocalizer();

export function TextField(props)
{
  const {name, label} = props;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label><br />
      <Text field={name} id={name} className="form-control" />
    </div>
  );
}

export function SelectBox(props)
{
  const {name, label, options} = props;
  
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label><br />
      <Select field={name} id={name} options={options} className="form-control" />
    </div>
  );
}

const Message = ({color, message}) => {
  return (
    <div style={{color}}>
      <small>{JSON.stringify(message)}</small>
    </div>
  );
};

const DateFieldImpl = FormField(props => {
  const {
    fieldApi, 
    onInput, 
    name, 
    label, 
    ...rest
  } = props;

  const {
    getValue,
    getError,
    getWarning,
    getSuccess,
    setValue,
    setError,
    setTouched
  } = fieldApi;

  const error = getError();
  const warning = getWarning();
  const success = getSuccess();
  const d = getValue();

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label><br />
      <DateTimePicker
        name={name}
        time={false}
        format="YYYY-MM-DD"
        onChange={date => {
          if (!date)
          {
            setError("Invalid Date");
            return;
          }

          setValue({
            y: date.getFullYear(),
            m: date.getMonth(),
            d: date.getDate()
          });
        }}
        _defaultValue={d ? new Date(d.y, d.m, d.d) : null}
        onBlur={() => setTouched()}
        {...rest} />
      {error ? <Message color="red" message={error} /> : null}
      {!error && warning ? <Message color="orange" message={warning} /> : null}
      {!error && !warning && success ? <Message color="green" message={success} /> : null}
    </div>
  );
});

export function DateField(props)
{
  const {name, label} = props;
  
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label><br />
      <DateFieldImpl field={name} />
    </div>
  );
}