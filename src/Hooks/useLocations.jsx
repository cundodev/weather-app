import { useState, useEffect } from 'react'
import getLocations from '../Services/getLocations'

export default function useLocations ({ keyword }) {
  const [locations, setLocations] = useState(null)

  useEffect(() => {
    if (!keyword) return
    const timeout = setTimeout(async () => {
      const { data } = await getLocations({ keyword })
      if (data.length === 0) return
      setLocations(data)
    }, 777)

    return () => clearTimeout(timeout)
  }, [keyword])
  return { locations, setLocations }
}
