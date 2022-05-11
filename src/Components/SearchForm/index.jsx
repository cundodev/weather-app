import { useContext } from 'react'
import LocationContext from '../../Context/locationContext'
import { Imput, FormSearch } from './style'
export default function SearchForm () {
  const { keyword, setKeyword } = useContext(LocationContext)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <FormSearch onSubmit={handleSubmit}>
      <Imput
        type='text'
        className='Search'
        onChange={handleChange}
        value={keyword || ''}
        placeholder='Search location'
      />
    </FormSearch>
  )
};
