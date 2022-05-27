import { useState, useEffect } from 'react'
import getTodayForecast from '../Helpers/getTodayForecast'
import getForecast from '../Services/getForecast'

export default function useForecast ({ keyword }) {
  const [forecast, setForecast] = useState(null)

  useEffect(async () => {
    const { data } = await getForecast({ keyword: keyword })
    const today = getTodayForecast({ data })
    setForecast({ today })
  }, [keyword])

  return { forecast }
};
