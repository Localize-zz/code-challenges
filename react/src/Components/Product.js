import React from 'react';


const Product = props => (
  <div className="Product-item">
    {props.data.name} - ${props.data.price}
    <i className="material-icons like">star_border</i>
  </div>
);

export default Product;