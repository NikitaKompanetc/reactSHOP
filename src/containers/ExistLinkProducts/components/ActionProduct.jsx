import React from 'react';
import TreeSelectContainer from './TreeSelectContainer';


const ActionProduct = (props) => (
  <>
    {props.isRedactProduct ? <TreeSelectContainer /> : <button className="action-btn" onClick={() => props.editProduct()}>Edit</button>}
  </>
);

export default ActionProduct;