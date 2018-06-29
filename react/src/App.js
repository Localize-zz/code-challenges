import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import SocketService from './services/socketService';
import Navbar from './Components/Navbar';
import Feed from './Components/Feed';
import Explore from './Components/Explore';
import Favorites from './Components/Favorites';
import products from './sampleData/sampleData'; 
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products };
  }
  
  componentDidMount() {
    SocketService.setUser('5b3462ee297023145796de30')
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
        <Switch>
            <Route exact path='/' component={Explore}/>
            {/* both /roster and /roster/:number begin with /roster */}
            <Route path='/feed' render={()=><Feed products={this.state.products} handleLikes={this.handleLikes}/>}/>
            <Route path='/explore' component={Explore}/>
            <Route path='/favorites' component={Favorites}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
