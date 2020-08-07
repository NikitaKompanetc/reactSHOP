import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import '../../../scss/component/catProducts.scss';


const data = [
  {name: 'T-shirts'},
  {name: 'Hoodies'},
  {name: 'Mugs'},
  {name: 'Socks'},
  {name: 'Face masks'},
  {name: 'Keyrings'},
  {name: 'Cards'},
  {name: 'Gift Wraps'},
  {name: 'Posters'}
]

const Category = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <ul className="nav nav-tabs">
          {data.map(function (item, i) {
            return <li className="nav-item" key={i}>
              <a className="nav-link category-link" href="#">{item.name}</a>
            </li>
          })}
        </ul>
      </CardBody>
    </Card>
  </Col>
);

export default Category;