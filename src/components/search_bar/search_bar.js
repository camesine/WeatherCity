import React, { Component } from 'react';
import './style.css'

class SearchBar extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-10 centered">
          <div className="input-group">
          <input type="text" className="form-control" placeholder="Search" />
            <span className="input-group-btn">
              <div className="btn btn-primary"><span class="glyphicon glyphicon-search"></span></div>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar
