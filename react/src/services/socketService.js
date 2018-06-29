import openSocket from 'socket.io-client';

// create socket connection
const socket = openSocket.connect('http://localhost:8080', {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: Infinity,
});

// Socket service methods
const SocketService = {
  setUser: userId => socket.emit('user', userId),

  getStores: (userId, location) => new Promise((resolve, reject) => {
    socket.emit('getStores', userId, location, (err, res) => {
      if (err) {
        console.log('Error retrieving stores', err);
        reject(err);
      }
      resolve({ stores: res });
    });
  }),

  getFavorites: userId => new Promise((resolve, reject) => {
    socket.emit('getFavorites', userId, (err, res) => {
      if (err) {
        console.log('Error retrieving favorites', err);
        reject(err);
      } else {
        resolve({ favorites: res });
      }
    });
  }),

  setFavorite: (userId, storeId) => new Promise((resolve, reject) => {
    socket.emit('setFavorite', userId, storeId, (err, res) => {
      if (err) {
        console.log('Error following store', err);
        reject(err);
      } else {
        resolve({ favorites: res });
      }
    });
  }),
};

// Socket service event listeners
socket.on('connect', () => {
  SocketService.setUser();
});

socket.on('disconnect', () => {
  socket.connect();
});

export default SocketService;
