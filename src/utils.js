import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

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