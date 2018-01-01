import React, { Component } from 'react';
import { fetchWeather } from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './style.css'

class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} >
        <div className="input-group">
          <input onChange={this.onInputChange} type="text" className="form-control" placeholder="Search for city, place or country" />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary"><span className="glyphicon glyphicon-search"></span></button>
            </span>
        </div>
      </form>
    );
  }
}

function mapDistatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDistatchToProps)(SearchBar)
