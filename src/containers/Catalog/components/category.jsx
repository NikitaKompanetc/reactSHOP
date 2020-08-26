import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import '../../../scss/component/catProducts.scss';

const Category = (props) => (
  <Col md={12}>
    <Card>
      <CardBody>
        <ul className="nav nav-tabs">
          {props.categoryName.map((item, i) => {
            return <li className="nav-item" key={i} onClick={(e) => props.filterCategory(item.name)}>
              <a className="nav-link category-link" href="#" >{item.name}</a>
            </li>
          })}
        </ul>
      </CardBody>
    </Card>
  </Col>
);

export default Category;