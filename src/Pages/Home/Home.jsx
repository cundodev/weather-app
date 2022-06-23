import { useContext } from 'react'
import LocationContext from '../../Context/locationContext'
import useForecast from '../../Hooks/useForecast'
import NavBar from '../../Components/NavBar'
import Today from '../../Components/Today'
import Location from '../../Components/Location'
import { } from './style.js'
import NextDays from '../../Components/NextDays'

export default function Home () {
  const { locationURL } = useContext(LocationContext)
  console.log(locationURL)
  const { forecast } = useForecast({ location: locationURL })
  // const { location } = useForecast({ locationID })
  /*
  if (location) {
    const max = location.consolidated_weather.length
    const nextDays = location.consolidated_weather.slice(1, max)
  }
*/
  return (
    <main>
      <NavBar />
      <>
        {
       forecast && (
         <>
           <Location location={forecast.locationInfo} />
           <Today today={forecast.today} />
           {
              forecast.nextDays && (
                <NextDays nextDays={forecast?.nextDays} />
              )
            }
         </>
       )
      }

      </>
    </main>
  )
};
