import React from 'react';
import { Col, Container, Row, Card, CardBody, Table } from "reactstrap";
import { Button, TreeSelect } from 'antd';
import 'antd/dist/antd.css';
import ProductSelector from './ProductSelector';

function ProductManagement(props) {
  return (
    <CardBody>
      <h3>Product management</h3>
      <h5>Restrict products</h5>
      <Row className="product-management">
        <Col md={6} className="pt-2">
          <h5>Choose product</h5>
          <ProductSelector />
          <div className="d-flex justify-content-center">
            <Button className="product-btn">Add</Button>
          </div>
        </Col>
        <Col md={6} className="pt-2">
          <h5>Product ready to be restricted</h5>
          <div className="chosen-product-area"></div>
          <div className="d-flex justify-content-center">
            <Button className="product-btn">Remove selected</Button>
          </div>
        </Col>
        <Col md={12}>
          <div className="d-flex justify-content-center">
            <Button className="save-btn">Save</Button>
          </div>
        </Col>
      </Row>
    </CardBody>
  );
}

export default ProductManagement;