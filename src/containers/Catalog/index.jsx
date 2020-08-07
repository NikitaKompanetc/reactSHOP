import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CardCatalog from './components/card';
import Steps from "./components/steps";
import Category from "./components/category";


const Catalog = (props) => (
  <Container className="dashboard">
    {console.log(12, props.productArr )}
    <Row>
      <Col md={12}>
       <Steps isActivebar={1} />
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <Category />
      </Col>
    </Row>
    <Row>
      {props.productArr && props.productArr.map((product, ind) => (
       <CardCatalog productArr={product} key={props.productArr.id} />
      ))}
    </Row>
  </Container>
);

export default Catalog;
