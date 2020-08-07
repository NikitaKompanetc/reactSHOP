import React from 'react';
import { Card, Container, Col, Row, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../../scss/component/catalogItem.scss';
import Steps from './steps';
import CatalogBtn from "./catalogBtn";
import CanvasPreview from './canvas';
import CanvasTool from './canvasTool';

import Upload  from '../../../img/cloud-backup-up-arrow.svg';
import Text  from '../../../img/text.svg';
import Shapes  from '../../../img/shapes.svg';
import ClipArts  from '../../../img/art.svg';
import Emojis  from '../../../img/emojis.svg';
import Draw  from '../../../img/draw.svg';

import CircleRight  from '../../../img/circleRight.svg';
import CircleLeft  from '../../../img/circleLeft.svg';
import ZoomIn  from '../../../img/zoom-in.svg';
import ZoomOut  from '../../../img/zoom-out.svg';
import CloudDownload  from '../../../img/cloud-computing.svg';
import Print  from '../../../img/print.svg';
import SaveIcon  from '../../../img/save.svg';



const DesignProduct = (props) => (
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
            <div className="canvas-container">
              <CanvasPreview />
              <div className="tools-canvas-container">
                <CanvasTool source={Upload} name={'UPLOAD'} height={24} />
                <CanvasTool source={Text} name={'TEXT'} height={24} />
                <CanvasTool source={Shapes} name={'SHAPES'} height={24} />
                <CanvasTool source={ClipArts} name={'CLIPARTS'} height={24} />
                <CanvasTool source={Emojis} name={'EMOJIS'} height={24} />
                <CanvasTool source={Draw} name={'DRAW'} height={24} />
              </div>
              <div className='option-tools'>
                <CanvasTool source={CircleRight} name={''} height={14} />
                <CanvasTool source={CircleLeft} name={''} height={14} />
                <CanvasTool source={ZoomIn} name={''} height={14} />
                <CanvasTool source={ZoomOut} name={''} height={14} />
                <CanvasTool source={CloudDownload} name={''} height={14} />
                <CanvasTool source={Print} name={''} height={14} />
                <CanvasTool source={SaveIcon} name={''} height={14} />
              </div>
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
      <div className="btn--container">
        <Link to='/catalog/product/step/3'>
          <CatalogBtn nameButton={'Next'} />
        </Link>
      </div>
    </Row>
  </Container>
);

export default DesignProduct;