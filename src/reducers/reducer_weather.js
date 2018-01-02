import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR, CLEAR_ERROR } from '../actions'

const initialState = {
  data: [],
  error: null
}

export default function (state = initialState, action) {

  switch(action.type) {

    case FETCH_WEATHER_SUCCESS:

      return {
        ...state,
        error: null,
        data: [ action.payload.data, ...state.data ]
      }

    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        error: "Not Found"
      }

    case CLEAR_ERROR:
    return {
      ...state,
      error: null
    }

    default:
      return state

  }

}
