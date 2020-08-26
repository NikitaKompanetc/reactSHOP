import React from 'react';

const TradePortalProduct = (props) => (
  <>
    <div className='item-containers'>
      <div>
        <img src={"http://placehold.it/70"} />
      </div>
      <div className="item-info">
        <div>Title product</div>
        <div>
          <div>Price 5.55</div>
        </div>
      </div>
    </div>
    {props.isNotLinked ? <div>Not linked to any products yet - Click on the "Edit" to the right to start linking af product.</div> : null}
  </>
);

export default TradePortalProduct;
