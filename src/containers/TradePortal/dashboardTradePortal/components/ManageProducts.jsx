import React from "react";
import { Col, Container, Row } from "reactstrap";
import '../../../scss/component/manageProducts.scss';
import CreateProduct from '../../../img/creatProduct1.png';
import LinkProduct from '../../../img/linkProduct.png';
import EditProduct from '../../../img/editProduct.png';
import { connect } from 'react-redux';
import ManageProductsItem from "./ManageProductsItem";

const ManageProducts = () => (
  <Container>
    <Row>
      <Col md={4} className="product-manage-containers">
        <ManageProductsItem titleProduct={'Create Product'} link={'/catalog/product/step/1'} imageProduct={CreateProduct} nameProductButton={'Create Product'} />
      </Col>
      <Col md={4} className="product-manage-containers">
        <ManageProductsItem titleProduct={'Link Products'} link={'/link-existing-products'} imageProduct={LinkProduct} nameProductButton={'Link Products'} />
      </Col>
      <Col md={4} className="product-manage-containers">
        <ManageProductsItem titleProduct={'Edit Products'} link={'#'} imageProduct={EditProduct} nameProductButton={'Edit Products'} />
      </Col>
    </Row>
  </Container>
)
export default ManageProducts;