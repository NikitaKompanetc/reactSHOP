import React from 'react';
import MugImage from '../../../../../img/mug.png';
import { Input } from 'antd';

function ChosenProduct(props) {
  return (
    <>
      <div className='d-flex size-custom'>
        <div className="item-image">
          <img src={MugImage} />
        </div>
        <div>
          <div className="item-title">White Mug</div>
          <div className="item-price">£3.90</div>
        </div>
      </div>
      <div className="price d-flex justify-content-between size-custom-1">
        <div className="label-cost">Set price</div>
        <Input placeholder="£10.99" className="set-price" />
      </div>
    </>
  );
}

export default ChosenProduct;