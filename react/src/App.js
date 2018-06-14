import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Explore from './Components/Explore';
import products from './sampleData/sampleData'; 
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products };
  }

  apiCall = (increment, id, resolve) => {
    let likesUpdate = Object.assign({}, this.state.products);
    if (increment) {
      likesUpdate[id].likes++;
      this.setState({ products: likesUpdate }, console.log('Likes updated', this.state.products))
      return resolve('incremented');
    } else {
      likesUpdate[id].likes--;
      this.setState({ products: likesUpdate }, console.log('Likes updated', this.state.products))
      return resolve('decremented');
    }
  }

  handleLikes = (increment, id) => new Promise ((resolve) => {
    setTimeout(() => {this.apiCall(increment, id, resolve)}, 1000);
  });

  render() {
    return (
      <div className="App">
        <Navbar />
        <Explore products={this.state.products} handleLikes={this.handleLikes}/>
      </div>
    );
  }
}

export default App;
