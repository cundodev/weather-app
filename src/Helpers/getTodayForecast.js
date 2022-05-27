const getTodayForecast = ({ data }) => {
  const { location, current, forecast } = data
  const { name, region, country } = location
  const { condition, temp_c, wind_kph, vis_km, precip_mm, humidity } = current
  const { text, code } = condition
  const { forecastday } = forecast
  const { maxtemp_c, mintemp_c } = forecastday[0].day

  return {
    locationName: name,
    region,
    country,
    temperature: temp_c,
    windSpeed: wind_kph,
    visibility: vis_km,
    humidity,
    precipitation: precip_mm,
    conditionText: text,
    codeIcon: code,
    forecast: forecastday,
    max: maxtemp_c,
    min: mintemp_c
  }
}
export default getTodayForecast
