import { useContext, useState } from 'react'
import LocationContext from '../../Context/locationContext'
import { Imput, FormSearch, Button, Icon } from './style'

export default function SearchForm () {
  const { setKeyword } = useContext(LocationContext)
  const [location, setLocation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setKeyword(location)
  }

  const handleChange = (e) => {
    setLocation(e.target.value)
  }

  return (
    <FormSearch onSubmit={handleSubmit}>
      <Imput
        type='text'
        className='Search'
        onChange={handleChange}
        value={location || ''}
        placeholder='Search location'
      />
      <Button>
        <Icon src='/src/assets/search-icon.svg' alt='buscar' />
      </Button>
    </FormSearch>
  )
};
