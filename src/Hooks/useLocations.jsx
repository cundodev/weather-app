import { useState, useEffect } from 'react'
import getLocations from '../Services/getLocations'

export default function useLocations ({ keyword }) {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    if (!keyword) return
    getLocations({ keyword: keyword })
      .then(locations => {
        setLocations(locations)
      })
  }, [keyword, setLocations])

  return { locations }
};
