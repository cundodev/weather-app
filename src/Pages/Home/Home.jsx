import { useContext } from 'react'
import LocationContext from '../../Context/locationContext'
import useForecast from '../../Hooks/useForecast'
import NavBar from '../../Components/NavBar'
import Today from '../../Components/Today'
import Location from '../../Components/Location'
import { } from './style.js'
import NextDays from '../../Components/NextDays'

export default function Home () {
  const { keyword } = useContext(LocationContext)
  const { forecast } = useForecast({ keyword })
  // const { location } = useForecast({ locationID })
  /*
  if (location) {
    const max = location.consolidated_weather.length
    const nextDays = location.consolidated_weather.slice(1, max)
  }
*/
  console.log(forecast)
  console.log(forecast?.nextDays)
  return (
    <main>
      <NavBar />
      <>
        {
       forecast && (
         <>
           <Location location={forecast.location} />
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
