import { useState, useContext } from 'react'
import Locations from '../Locations'
import LocationContext from '../../Context/locationContext'
import useLocations from '../../Hooks/useLocations'
import { Imput, FormSearch, Button, Icon, Results } from './style'

export default function SearchForm () {
  const { setLocationURL } = useContext(LocationContext)
  const [value, setValue] = useState(null)

  const { locations, setLocations } = useLocations({ keyword: value })

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleOnClick = (url) => {
    setLocationURL(url)
    setLocations(null)
    setValue(null)
  }

  return (
    <Results>
      <FormSearch>
        <Imput
          type='text'
          className='Search'
          onChange={handleChange}
          value={value || ''}
          placeholder='Search location'
        />
        <Button>
          <Icon src='../img/search-icon.svg' alt='buscar' />
        </Button>
      </FormSearch>
      {locations && <Locations locations={locations} handleOnClick={handleOnClick} />}
    </Results>
  )
};
