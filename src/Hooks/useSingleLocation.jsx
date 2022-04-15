import { useState, useEffect } from 'react'
import getSingleLocation from '../Services/getSingleLocation'

export default function useSingleLocation ({ locationID }) {
  const [location, setLocation] = useState([])

  useEffect(() => {
    if (!locationID) return
    getSingleLocation({ id: locationID })
      .then(location => {
        setLocation(location)
      })
  }, [locationID])

  return { location }
};
