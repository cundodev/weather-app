import { useState, useEffect } from 'react'
import getTodayForecast from '../Helpers/getTodayForecast'
import getLocation from '../Helpers/getLocation'
import getForecast from '../Services/getForecast'
import getNextDayForecast from '../Helpers/getNextDayForecast'

export default function useForecast ({ keyword }) {
  const [forecast, setForecast] = useState(null)

  useEffect(async () => {
    const { data } = await getForecast({ keyword: keyword })
    const today = getTodayForecast({ data })
    const location = getLocation({ data })
    const nextDays = getNextDayForecast({ data })
    setForecast({ today, location, nextDays })
  }, [keyword])

  return { forecast }
};
