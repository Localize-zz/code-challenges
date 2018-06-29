import React from 'react';
import SocketService from '../services/socketService';
import Store from './Store';

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: [-122.026423, 36.974538], stores: [], teleport: true };
  }

  componentDidMount() {
    SocketService.getStores('5b3462ee297023145796de30', this.state.location)
      .then(stores => this.setState(stores))
      .catch(err => console.log(err));
  }

  teleport = () => {
    if (this.state.teleport) {
      this.setState({ location: [-77.036574, 38.897663], teleport: false }, this.updateLocation);
    } else {
      console.log('else')
      this.setState({ location: [-122.026423, 36.974538], teleport: true }, this.updateLocation);
    }
  }

  updateLocation = () => {
    SocketService.getStores('5b3462ee297023145796de30', this.state.location)
      .then(stores => this.setState(stores))
      .catch(err => console.log(err));
  }

  setFavorite = (storeId) => {
    console.log('Setting favorite store', storeId);
    SocketService.setFavorite('5b3462ee297023145796de30', storeId)
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.location, this.state.locationToggle)
    return (
      <div className="Explore">
        <div className="header">
          <h1>Explore</h1>
          <button className="teleport" onClick={this.teleport}>Teleport to {this.state.teleport ? 'Washington DC' : 'Santa Cruz'}</button>
        </div>
        {this.state.stores.map((store) => <Store key={store.name} data={store} setFavorite={this.setFavorite}/>)}
      </div>
    );
  }
}

export default Explore;
