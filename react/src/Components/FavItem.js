import React from 'react';

const FavItem = props => (
  <div className="FavItem">
    <div>{props.data.name} - ${props.data.price}</div>
    <div>Available at {props.data.store[0].name}</div>
  </div>
);

export default FavItem;
