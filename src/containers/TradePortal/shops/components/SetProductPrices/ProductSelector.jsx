import React, { useState, useEffect } from 'react';
import { Collapse } from 'antd';
import ProductCard from './ProductCard';

const { Panel } = Collapse;

function ProductSelector(props) {
  function callback(key) {
    console.log(key);
  }
  return (
    <>
      <Collapse onChange={callback}>
        <Panel header="Mugs" key="1">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Panel>
        <Panel header="Hoodies" key="2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Panel>
        <Panel header="Socks" key="3" >
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Panel>
        <Panel header="Face Masks" key="4" >
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Panel>
        <Panel header="Key Rings" key="5" >
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Panel>
        <Panel header="Cards" key="6" >
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Panel>
      </Collapse>
    </>
  );
}

export default ProductSelector;