import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'

export default (props) => {
  return (
    <div>

      <Sparklines height={60} width={120} data={props.data} >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>

      <div>{(props.data.reduce((acc, current) => {
        return acc = acc + current
      } ,0) / props.data.length).toFixed(0)} {props.units}</div>

    </div>
  )
}