import { useState, useEffect } from 'react'
import getTodayForecast from '../Helpers/getTodayForecast'
import getLocation from '../Helpers/getLocation'
import getForecast from '../Services/getForecast'
import getNextDayForecast from '../Helpers/getNextDayForecast'

export default function useForecast ({ location }) {
  const [forecast, setForecast] = useState(null)

  useEffect(async () => {
    const { data } = await getForecast({ location })
    const today = getTodayForecast({ data })
    const locationInfo = getLocation({ data })
    const nextDays = getNextDayForecast({ data })
    setForecast({ today, locationInfo, nextDays })
  }, [location])

  return { forecast }
};
