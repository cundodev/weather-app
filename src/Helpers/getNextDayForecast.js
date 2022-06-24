import { IMG_128X128, findIcon } from '../Constants'
import moment from 'moment'
const getNextDayForecast = ({ data }) => {
  const nextDay = []
  const { forecast } = data
  const { forecastday } = forecast
  forecastday.forEach(days => {
    const { day, date, hour } = days
    const { maxtemp_c, mintemp_c, condition } = day
    const { code, text } = condition
    const { icon } = findIcon(code)
    const img = `${IMG_128X128}${icon}.png`
    nextDay.push({
      date: moment(date).format('DD/MM'),
      max: maxtemp_c,
      min: mintemp_c,
      img,
      conditionText: text,
      forecastForHuor: hour
    })
  })
  return nextDay
}
export default getNextDayForecast
