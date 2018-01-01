import React from 'react'
import Chart from './chart'
export default ({ weather }) => {
  return (
    <tr >
      <td>{weather.city.name}</td>
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
