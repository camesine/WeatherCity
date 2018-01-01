import React, { Component } from 'react';
import SearchBar from './search_bar'
import WeatherList from '../containers/weather_list'

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-10 centered">
            <SearchBar />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <WeatherList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
