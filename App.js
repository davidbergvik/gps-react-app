import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Map from './components/Map/Map.js';
import Loading from './components/Loading/Loading.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {coords: undefined};
    this.getCoords();
  }
  renderMap(coords){
    return coords ? (<Map mapCoords={coords}/>) : <Loading/>;
  }
  fetchCoordsFromGPS() {
    return new Promise(resolve => {
      /*
      Replace setTimeout below with your gps fetch logic.
      Return response in resolve(your response)
      */
      setTimeout(() => {
        resolve({x:10, y:20});
      }, 2000);
    });
  }
  async getCoords(){
    console.log('fetching');
    const coords = await this.fetchCoordsFromGPS();
    console.log('coords found:',coords);
    this.setState(previousState => {
      return { coords: coords};
    });
  }
  render() {
    const coords = this.state.coords
    return (
      <div className="App">
        {this.renderMap(coords)}

      </div>
    );
  }
}

export default App;
