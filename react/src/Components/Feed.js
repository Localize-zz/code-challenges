import React from 'react';
import Product from './Product';

const Feed = props => (
  <div className="Feed">
    <div className="header"><h1>Product Feed</h1></div>
    {Object.values(props.products).map(product => <Product key={product.id} data={product} handleLikes={props.handleLikes} /> )}
  </div>
);

export default Feed;
