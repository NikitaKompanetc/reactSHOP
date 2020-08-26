import React from 'react';
import { Link } from 'react-router-dom';

const ShopifyProduct = () => (
  <>
    <div className='item-containers'>
      <div>
        <img src={"http://placehold.it/70"} />
      </div>
      <div className="item-info">
        <div>Title product</div>
        <div>
          <div>Price 5.55</div>
          <Link><div className="item-edit">Edit product</div></Link>
        </div>
      </div>
    </div>
  </>
);

export default ShopifyProduct;