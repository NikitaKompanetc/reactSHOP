import React from 'react';
import '../../../scss/component/catalogBtn.scss'

const CatalogBtn = (props) => (
  <div className='catalog-button--container'>
    <button className='catalog-button'>{props.nameButton}</button>
  </div>
);

export default CatalogBtn;