import { useContext } from 'react'
import LocationContext from '../../Context/locationContext'
import useForecast from '../../Hooks/useForecast'
import NavBar from '../../Components/NavBar'
import Today from '../../Components/Today'
import { } from './style.js'

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
  return (
    <main>
      <NavBar />
      {
       forecast && (
       //    <>
       //  <Location location={location} />
         <Today today={forecast.today} />
       //    </>
       )

        // <NextDays nextDays={location.consolidated_weather.slice(1, location.consolidated_weather.length)} />
      }
    </main>
  )
};
