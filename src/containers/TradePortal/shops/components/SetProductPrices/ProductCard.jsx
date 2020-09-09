import React from 'react';
import MugImage from '../../../../../img/mug.png';

function ProductCard(props) {
  return (
    <div className='d-flex'>
      <div className="item-image">
        <img src={MugImage} />
      </div>
      <div className="item-title">
        White Mug
      </div>
    </div>
  );
}

export default ProductCard;