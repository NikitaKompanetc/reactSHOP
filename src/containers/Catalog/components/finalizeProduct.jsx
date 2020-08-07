import React, { useState, useReducer } from 'react';
import { Card, Container, Col, Row, CardBody } from 'reactstrap';

import Steps from './steps';
import '../../../scss/component/catalogItem.scss';
import '../../../scss/component/canvas.scss';
import CatalogBtn from "./catalogBtn";
import CanvasPreview from './canvas';
import { Link } from 'react-router-dom';



const FinalizeProduct = (props) => {
  const [color, setColor] = useState('#FF0000');
  console.log(15, color)
  console.log(16, setColor)

  const [numb, setNumb] = useState(1);
  
return(
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <Steps isActivebar={3} />
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <CardBody className='finalize--container'>
          <Col md={6}>
            <Card>
              <div className="title-design">Product options and variations</div>
              <div className="descr-design">Choose which variations and options you want to offer you customers</div>
              <div className="canvas-container">
                <CanvasPreview colorProduct={color} giveNumber={numb} />
              </div>
              <div className='canvas-instruments--container'>
                <div className='color-select'>
                  <div className="color-group">
                    <div className='color-block color1' onClick={() => setColor('#ABABAB')}>1</div>
                    <div className='color-block color2' onClick={() => setColor('#191919')}>2</div>
                    <div className='color-block color3' onClick={() => setNumb(numb + 1)}>3</div>
                    <div className='color-block color3'>4</div>
                    <div className='color-block color5'>5</div>
                    <div className='color-block color6'>6</div>
                    <div className='color-block color7'>7</div>
                    <div className='color-block color8'>8</div>
                  </div>
                  <div className="color-group">
                    <div className='color-block color9'>9</div>
                    <div className='color-block color10'>10</div>
                    <div className='color-block color11'>11</div>
                    <div className='color-block color12'>12</div>
                    <div className='color-block color13'>13</div>
                    <div className='color-block color14'>14</div>
                    <div className='color-block color15'>15</div>
                    <div className='color-block color16'>16</div>
                  </div>
                  <div className="color-group">
                    <div className='color-block color17'>17</div>
                    <div className='color-block color18'>18</div>
                    <div className='color-block color19'>19</div>
                    <div className='color-block color20'>20</div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <div className="title-design">Describe your product</div>
              <div className="descr-design">Describe your product and set a price on it, and you are ready to sell</div>
              <div className="help-design--container">
                <div className="title-option">Kids Polo</div>
                <div className="option-block">
                  <div className="first-block">Title</div>
                  <div>
                    <input type='text' placeholder="Kids Polo - Design by" />
                  </div>
                </div>
                <div className="option-block">
                  <div className="first-block">Description</div>
                  <div>
                    <textarea rows="10" cols="45" placeholder="100% Polyester">

                    </textarea>
                  </div>
                </div>
                <div className="option-block">
                  <div className="first-block">Brand</div>
                  <div>
                    <select>
                      <option value="Your brand" selected>Your brand</option>
                      <option value="2" >2</option>
                      <option value="3" >3</option>
                    </select>
                  </div>
                </div>
                <div className="label-block">Label</div>
                <div className="option-block">
                  <div className="first-block">Resale Price</div>
                  <div>
                    <input type='text' placeholder="£10.99" />
                  </div>
                </div>
                <div className="option-block">
                  <div className="first-block">Shipping Profile</div>
                  <div>
                    <select>
                      <option value="Choose profile" selected>Choose profile</option>
                      <option value="2" >2</option>
                      <option value="3" >3</option>
                    </select>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </CardBody>
      </Col>
      <div className="btn--container">
        <Link to='/'>
          <CatalogBtn nameButton={'Create'} />
        </Link>
      </div>
    </Row>
  </Container>
  );
};

export default FinalizeProduct;