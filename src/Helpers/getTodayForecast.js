import { IMG_128X128, findIcon } from '../Constants'
const getTodayForecast = ({ data }) => {
  const { location, current, forecast } = data
  const { name, region, country } = location
  const { condition, temp_c, wind_kph, vis_km, humidity } = current
  const { text, code } = condition
  const { forecastday } = forecast
  const { maxtemp_c, mintemp_c, daily_chance_of_rain } = forecastday[0].day
  const { icon } = findIcon(code)
  const img = `${IMG_128X128}${icon}.png`

  return {
    locationName: name,
    region,
    country,
    temperature: temp_c,
    windSpeed: wind_kph,
    visibility: vis_km,
    humidity,
    conditionText: text,
    img,
    forecast: forecastday,
    max: maxtemp_c,
    min: mintemp_c,
    changeOfRain: daily_chance_of_rain
  }
}
export default getTodayForecast
