import axios from 'axios'

const API_KEY = '84e392f4257b726e865603e87b85958c'
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {

  return {
    type: FETCH_WEATHER,
    payload: axios.get(`${ROOT_URL}&q=${city},us`)
   }

}
