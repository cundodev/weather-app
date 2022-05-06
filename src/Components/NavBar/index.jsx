import { useContext } from 'react'
import LocationContext from '../../Context/locationContext'
import SearchForm from '../../Components/SearchForm'
import Locations from '../../Components/Locations'
import { Header, Results } from './style.js'
import useLocations from '../../Hooks/useLocations'

export default function NavBar () {
  const { keyword } = useContext(LocationContext)

  const { locations } = useLocations({ keyword })

  return (
    <Header>
      <div>
        <span>Weather App</span>
      </div>
      <Results>
        <SearchForm />
        {
          locations && (<Locations locations={locations} />)
        }
      </Results>
    </Header>
  )
};
