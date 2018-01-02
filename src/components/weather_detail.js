import React from 'react'
import Chart from './chart'
import GoogleMap from "../components/google_map"

export default ({ weather }) => {
  const { lon, lat } = weather.city.coord;
  return (
    <tr >
      <td><GoogleMap lon={lon} lat={lat} /></td>
      <td>
        <Chart color={"orange"} units={'K'} data={weather.list.map(weather => weather.main.temp)} />
      </td>
      <td>
        <Chart color={"blue"}  units="hPA" data={weather.list.map(weather => weather.main.pressure)} />
      </td>
      <td>
        <Chart color={"blue"} units={'%'} data={weather.list.map(weather => weather.main.humidity)} />
      </td>
    </tr>
  )
}
