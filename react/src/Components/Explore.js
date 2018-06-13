import React from 'react';
import Product from './Product';

const Explore = props => (
  <div className="Explore">
    {props.products.map(product => <Product key="product.id" data={product} /> )}
  </div>
);

export default Explore;