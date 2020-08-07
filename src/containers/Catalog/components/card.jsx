import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import '../../../scss/component/catalogItem.scss'
import CatalogBtn from "./catalogBtn";
import { Link } from 'react-router-dom';

const CardCatalog = (props) => (
  <Col md={4}>
    <Card>
    {console.log(9, props)}
      <div className='catalog-wrapper'>
      <CardBody>
        <div className='catalog-item--container'>
          <div className='availability'>
            {!props.productArr.availability === "Not available" ? <div className='avail'>In stock</div> : <div className='not-avail'>Out of stock</div>}
          </div>
          <div className='image-item'>
          <Link to="/catalog/product/step/2">
            <img src="https://images-na.ssl-images-amazon.com/images/I/61VcnoQTbTL._SL1188_.jpg" />
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
          <Link to="/catalog/product/step/2"><CatalogBtn nameButton={'Choose Product'}></CatalogBtn></Link>
        </div>
      </CardBody>
      </div>
    </Card>
  </Col>
);

export default CardCatalog;