import { IMG_128X128, findIcon } from '../Constants'
import dayjs from 'dayjs'
const getNextDayForecast = ({ data }) => {
  const { forecast, location } = data
  const { forecastday } = forecast
  const nextDay = [{ localtime: location.localtime_epoch }]
  forecastday.forEach(days => {
    const { day, date, hour } = days
    const { maxtemp_c, mintemp_c, condition } = day
    const { code, text } = condition
    const { icon } = findIcon(code)
    const img = `${IMG_128X128}${icon}.png`
    nextDay.push({
      date: dayjs(date).format('DD/MM'),
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
