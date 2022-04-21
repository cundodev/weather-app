import { useState, useEffect } from 'react'
import getSingleLocation from '../Services/getSingleLocation'

export default function useForecast ({ locationID }) {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    if (!locationID) return
    getSingleLocation({ id: locationID })
      .then(location => {
        setLocation(location)
      })
  }, [locationID])

  return { location }
};
