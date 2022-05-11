import { useContext } from 'react'
import LocationContext from '../../Context/locationContext'
import useForecast from '../../Hooks/useForecast'
import NavBar from '../../Components/NavBar'
import Location from '../../Components/Location'
import Today from '../../Components/Today'
import NextDays from '../../Components/NextDays'
import { } from './style.js'

export default function Home () {
  const { locationID } = useContext(LocationContext)

  const { location } = useForecast({ locationID })

  if (location) {
    const max = location.consolidated_weather.length
    const nextDays = location.consolidated_weather.slice(1, max)
  }

  return (
    <main>
      <NavBar />
      {
        location && (
          <>
            <Location location={location} />
            <Today today={location.consolidated_weather[0]} />

            <NextDays nextDays={location.consolidated_weather.slice(1, location.consolidated_weather.length)} />
          </>
        )
      }
    </main>
  )
};
