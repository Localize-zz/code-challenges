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

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">Wribbn Code Challenge</h1>
        </header> */}
        <Navbar />
        <Explore products={this.state.products}/>
      </div>
    );
  }
}

export default App;
