import React from 'react';


const Product = props => (
  <div className="Product-item">
    {props.data.name} - ${props.data.price}
    <i className="material-icons like">stars</i>
  </div>
);

export default Product;