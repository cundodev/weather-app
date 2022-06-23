import { useState } from 'react'
import Locations from '../Locations'

import useLocations from '../../Hooks/useLocations'
import { Imput, FormSearch, Button, Icon, Results } from './style'

export default function SearchForm () {
  const [value, setValue] = useState(null)

  const { locations } = useLocations({ keyword: value })
  const handleChange = (e) => {
    setValue(e.target.value)
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
      {locations && <Locations locations={locations} />}
    </Results>
  )
};
