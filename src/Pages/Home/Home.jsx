import { useContext } from 'react'
import LocationContext from '../../Context/locationContext'
import useForecast from '../../Hooks/useForecast'
import NavBar from '../../Components/NavBar'
import Today from '../../Components/Today'
import Location from '../../Components/Location'
import { } from './style.js'

export default function Home () {
  const { locationID } = useContext(LocationContext)

  const { location } = useForecast({ locationID })

  return (
    <main>
      <NavBar />
      {
        location && (
          <>
            <Location location={location} />
            <Today today={location.consolidated_weather[0]} />
          </>
        )
      }
    </main>
  )
};
