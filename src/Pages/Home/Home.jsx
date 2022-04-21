import { useContext } from 'react'
import SearchCard from '../../Components/SearchCard'
import TodayHighlight from '../../Components/Highlight'
import useForecast from '../../Hooks/useForecast'
import LocationContext from '../../Context/locationContext'
import { } from './style.js'
import Today from '../../Components/Today'

export default function Home () {
  const { locationID } = useContext(LocationContext)

  const { location } = useForecast({ locationID })

  return (
    <div className='App-content'>
      {
        !location
          ? <SearchCard />
          : (
            <>
              <Today today={location.consolidated_weather[0]} />
              <TodayHighlight infoToday={location.consolidated_weather[0]} />
            </>
            )
      }

    </div>
  )
};
