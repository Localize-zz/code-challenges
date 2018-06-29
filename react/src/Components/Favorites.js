import React from 'react';
import SocketService from '../services/socketService';
import FavItem from './FavItem';

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favorites: [] };
  }

  componentDidMount() {
    SocketService.getFavorites('5b3462ee297023145796de30')
      .then((following) => {
        this.setState(following);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Favorites">
        <div className="header">
          <h1>Available at stores you follow:</h1>
        </div>
        {this.state.favorites.map(product => <FavItem key={product._id} data={product}/>)}
      </div>
    );
  }
}

export default Explore;
