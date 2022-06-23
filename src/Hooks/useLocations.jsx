import { useState, useEffect } from 'react'
import getLocations from '../Services/getLocations'

export default function useLocations ({ keyword }) {
  const [locations, setLocations] = useState(null)

  useEffect(() => {
    if (!keyword) return
    const timeout = setTimeout(async () => {
      console.log(keyword)
      const { data } = await getLocations({ keyword })
      setLocations(data)
    }, 777)

    return () => clearTimeout(timeout)
  }, [keyword])
  return { locations }
}
