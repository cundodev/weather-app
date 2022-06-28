import { useState, useEffect } from 'react'

export default function usePosition () {
  const [position, setPosition] = useState(null)

  useEffect(() => {
    const geo = navigator.geolocation
    if (!geo) return
    geo.getCurrentPosition((ubication) => {
      setPosition(`${ubication.coords.latitude}, ${ubication.coords.longitude}`)
    })

    navigator.permissions.query({ name: 'geolocation' })
      .then((status) => {
        status.onchange = () => {
          geo.getCurrentPosition((ubication) => {
            setPosition(`${ubication.coords.latitude}, '${ubication.coords.longitude}`)
          })
        }
      })
  }, [])
  return { position }
};
