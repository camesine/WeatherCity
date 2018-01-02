import axios from 'axios'

const API_KEY = '84e392f4257b726e865603e87b85958c'
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER'
export const CLEAR_ERROR = 'CLEAR_ERROR'
export const FETCH_WEATHER_ERROR = 'FETCH_ERROR'

function weather_success (weather) {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: weather
  }
}

export function clear_error() {
  return {
    type: CLEAR_ERROR
  }
}

function weather_error (error) {
  return {
    type: FETCH_WEATHER_ERROR,
    payload: error
  }
}

export async function fetchWeather(city) {
  return axios.get(`${ROOT_URL}&q=${city},us`).then(weather => {
    return weather_success(weather)
  }).catch(error => {
    return weather_error(error)
  })
}
