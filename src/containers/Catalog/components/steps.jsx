import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import '../../../scss/component/progressBarProduct.scss'


const Steps = (props) => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="container">
          <div className="row">
            <div className="col-md-12 progressbar">
              <form id="msform">
                  <ul id="progressbar">
                      <li className={props.isActivebar === 1 ? 'active' : ''}>Choose product</li>
                      <li className={props.isActivebar === 2 ? 'active' : ''}>Design</li>
                      <li className={props.isActivebar === 3 ? 'active' : ''}>Finalize</li>
                  </ul>
              </form>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default Steps;