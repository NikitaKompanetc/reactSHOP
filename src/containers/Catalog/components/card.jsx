import React, { useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import '../../../scss/component/catalogItem.scss'
import CatalogBtn from "./catalogBtn";
import { Link } from 'react-router-dom';
import Tshirt from '../../../img/t-shirt.jpg';
function CardCatalog(props) {

  function takeId() {
    localStorage.clear()
    localStorage.setItem('idProduct', props.productArr._id)
  }

  return (
    <Col md={4}>
      <Card>
        <div className='catalog-wrapper'>
          <CardBody>
            <div className='catalog-item--container'>
              <div className='availability'>
                {!props.productArr.availability === "Not available" ? <div className='avail'>In stock</div> : <div className='not-avail'>Out of stock</div>}
              </div>
              <div className='image-item' onClick={takeId}>
                <Link to={{
                  pathname: "/catalog/product/step/2",
                }} >
                  <img src={Tshirt} />
                </Link>
              </div>
              <div className='info-item'>
                <div className='params-info-item'>
                  <div className='name-item'>{props.productArr.name}</div>
                  <div className='description-item'>Choose Up To 20 different colors to sell</div>
                  <div className='description2-item'>Design your own T-shirt</div>
                </div>
                <div className='value-info-item'>
                  <div className='price-item'>£{props.productArr.price}</div>
                  <div className='including-item'>
                    <div className='include-avail'>Including VAT</div>
                    <div className='include-note'>NOTE: incl. VAT only if EU\UK Customer</div>
                  </div>
                </div>
              </div>
              <div onClick={takeId} >
                <Link to={{
                  pathname: "/catalog/product/step/2",
                }}><CatalogBtn nameButton={'Choose Product'} ></CatalogBtn>
                </Link>
              </div>
            </div>
          </CardBody>
        </div>
      </Card>
    </Col>
  );
}
export default CardCatalog;