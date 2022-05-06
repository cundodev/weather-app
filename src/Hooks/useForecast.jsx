import { useState, useEffect, useContext } from 'react'
import LocationContext from '../Context/locationContext'
import getSingleLocation from '../Services/getSingleLocation'

export default function useForecast ({ locationID }) {
  const [location, setLocation] = useState(null)
  const { setKeyword } = useContext(LocationContext)
  useEffect(() => {
    if (!locationID) return
    getSingleLocation({ id: locationID })
      .then(location => {
        setLocation(location)
        setKeyword('')
      })
  }, [locationID])

  return { location }
};
