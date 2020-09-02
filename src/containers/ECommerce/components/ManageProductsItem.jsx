import React from "react";
import { Col, Container, Row, CardBody, Card } from "reactstrap";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ManageProductsItem = (props) => (
  <Container>
    <CardBody className="dashboard-manage-products">
      <Row>
        <Col md={12}>
          <div className="products__title">{props.titleProduct}</div>
          <Link to={props.link}>
            <div className="products__image">
              <img className="products__image-link" src={props.imageProduct} />
            </div>
            <div className="products__btn">
              <button>{props.nameProductButton}</button>
            </div>
          </Link>
        </Col>
      </Row>
    </CardBody>
  </Container>
)
export default ManageProductsItem;