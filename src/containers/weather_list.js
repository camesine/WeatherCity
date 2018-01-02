import React, { Component } from 'react'
import WeatherDetail from '../components/weather_detail'
import { connect } from 'react-redux'

class WeatherList extends Component {
  
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.data.map(weather => <WeatherDetail key={weather.city.id} weather={weather} /> )}
        </tbody>
      </table>  
    )
  }

}

function mapPropsToState({ weather }) {
  return { weather }
}

export default connect(mapPropsToState, null)(WeatherList)

