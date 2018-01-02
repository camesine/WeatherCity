import React, { Component } from 'react';
import { fetchWeather, clear_error } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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
    this.props.clear_error()
    this.setState({ term: '' })
  }

  render() {

    let error = null

    if (this.props.weather.error) {
      error = <p className="text-danger">{this.props.weather.error}</p>
    }
    
    return (
      <div>
        <form onSubmit={this.onFormSubmit} >
          <div className="input-group">
            <input onChange={this.onInputChange} value={this.state.term} type="text" className="form-control" placeholder="Search for city, place or country" />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-primary"><span className="glyphicon glyphicon-search"></span></button>
              </span>
          </div>
        </form>
        {error}
      </div>
    );
  }
}

function mapDistatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather, clear_error }, dispatch)
}

function mapPropsToState({ weather }) {
  return { weather }
}

export default connect(mapPropsToState, mapDistatchToProps)(SearchBar)
