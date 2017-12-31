import React, { Component } from 'react';
import SearchBar from './search_bar/index'

class App extends Component {
  render() {
    return (
      <div>

        <div className="row">
          <div className="col-lg-12">
            <SearchBar />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
