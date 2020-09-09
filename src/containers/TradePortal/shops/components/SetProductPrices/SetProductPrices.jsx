import React from 'react';
import { Col, Container, Row, Card, CardBody, Table } from "reactstrap";
import { Button, TreeSelect } from 'antd';
import 'antd/dist/antd.css';
import ProductSelector from './ProductSelector';
import ChosenProduct from './ChosenProduct';

function SetProductPrices(props) {
  return (
    <CardBody>
      <h3>Set Product price</h3>
      <h5>Set product specific prices for each webshop</h5>
      <Row className="product-management">
        <Col md={6} className="pt-2">
          <h5>Choose product</h5>
          <ProductSelector />
        </Col>
        <Col md={6} className="pt-2">
          <h5>Product ready to be restricted</h5>
          <ChosenProduct />
        </Col>
        <Col md={12}>
          <div className="d-flex justify-content-center mt-4">
            <Button className="save-btn">Save</Button>
          </div>
        </Col>
      </Row>
    </CardBody>
  );
}

export default SetProductPrices;