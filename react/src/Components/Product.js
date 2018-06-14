import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, update: false };
  }

  handleClick = () => {
    this.setState({ update: true})
    // Dummy API call via App.js.
    this.props.handleLikes(!this.state.liked, this.props.data.id)
      .then((msg) => {
        this.setState({ liked: !this.state.liked })
        this.setState({ update: false })
      })
      .catch((error) => {
        console.log('No errors allowed', error);
        this.setState({ update: false })
      })
  } 

  render() {
    let price = Number(this.props.data.price.toFixed(2)).toLocaleString('en');
    return (
      <div className="Product-item" onClick={this.handleClick}>
        {this.state.update ? <div className="loader" /> : this.state.liked ? <i className="material-icons liked">stars</i> : <i className="material-icons not-liked">star_border</i>}
        <img src={process.env.PUBLIC_URL + '/product_img/' + this.props.data.image} alt={this.props.data.name} />
        <div className="product-name">
          {this.props.data.name}
        </div>
        <div className="product-price">
          ${price}
        </div>
      </div>



    )
  }
}

export default Product;