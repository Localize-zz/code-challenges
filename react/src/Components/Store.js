import React from 'react';

const Store = props => (
  <div className="Store">
    <div onClick={() => {props.setFavorite(props.data._id)}}>{props.data.name}
      <div className="distance"><i className="material-icons">gps_fixed</i> {props.data.dist.calculated} miles from you.</div>
      {/* {props.data.products.map((item) => {<StoreItem data={item}/>})} */}
    </div>
  </div>
);

export default Store;
