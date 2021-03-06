import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CardCatalog from './components/card';
import Steps from "./components/steps";
import Category from "./components/category";

const Catalog = (props) => (
  <Container className="dashboard">
    <Row>
      <Col md={12} className="p-0">
        <Steps
          isActivebar={1}
        />
      </Col>
    </Row>
    <Row>
      <Col md={12} className="p-0">
        <Category
          productArr={props.productArr.data}
          filterCategory={props.filterCategory}
          categoryName={props.categoryName}
        />
      </Col>
    </Row>
    <Row>
      {props.productArr.data && props.productArr.data.filter(product => product.productType === props.targetCategory).map(product => (
        <CardCatalog productArr={product} key={props.productArr.data._id} />
      ))}
    </Row>
  </Container>
);

export default Catalog;
