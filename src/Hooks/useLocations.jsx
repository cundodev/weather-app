import { useState, useEffect } from 'react'
import getLocations from '../Services/getLocations'

export default function useLocations ({ keyword } = { keyword: null }) {
  const [locations, setLocations] = useState(null)

  useEffect(() => {
    if (!keyword || keyword.length === 0) {
      setLocations(false)
      return
    }
    const timeout = setTimeout(async () => {
      const { data } = await getLocations({ keyword: keyword })
      setLocations(data)
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [keyword])

  return { locations }
};
