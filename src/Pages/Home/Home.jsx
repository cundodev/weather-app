import { useContext } from 'react'
import LocationContext from '../../Context/locationContext'
import useForecast from '../../Hooks/useForecast'
import usePosition from '../../Hooks/usePosition'
import NavBar from '../../Components/NavBar'
import Today from '../../Components/Today'
import Location from '../../Components/Location'
import NextDays from '../../Components/NextDays'
import ForHour from '../../Components/ForHour'
import { } from './style.js'

export default function Home () {
  const { position } = usePosition()
  const { locationURL } = useContext(LocationContext)
  const { forecast } = useForecast({ location: locationURL || position })
  return (
    <main>
      <NavBar />
      <>
        {
          forecast && (
            <>
              <Location location={forecast?.locationInfo} />
              <Today today={forecast?.today} />
              <ForHour forHour={forecast?.nextDays} />
              <NextDays nextDays={forecast?.nextDays.slice(1)} />
            </>
          )
        }
      </>
    </main>
  )
};
