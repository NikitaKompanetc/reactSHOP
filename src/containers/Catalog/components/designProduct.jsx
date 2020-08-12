import React , { PureComponent} from 'react';
import { Card, Container, Col, Row, CardBody } from 'reactstrap';
import '../../../scss/component/catalogItem.scss';
import Steps from './steps';
import CanvasPreview from './canvas';

class DesignProduct extends PureComponent {
  render() {
    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <Steps isActivebar={2} />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <CardBody>
              <Card>
                <div className="title-design">Upload or Choose</div>
                <div className="descr-design">Upload an image, or something from our database</div>
                <div className="canvas-container container-step2">
                  <CanvasPreview />
                </div>
              </Card>
            </CardBody>
          </Col>
          <Col md={6}>
            <CardBody>
              <Card>
                <div className="title-design">DESIGN IT YOURSELF</div>
                <div className="descr-design">Or choose from the "get inspired" tab</div>
                <div className="help-design--container">
                  <div className="help-design">Help</div>
                </div>
              </Card>
            </CardBody>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DesignProduct;