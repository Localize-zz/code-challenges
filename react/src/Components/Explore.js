import React from 'react';
import Product from './Product';

const Explore = props => (
  <div className="Explore">
    {Object.values(props.products).map(product => <Product key={product.id} data={product} handleLikes={props.handleLikes} /> )}
  </div>
);

export default Explore;
