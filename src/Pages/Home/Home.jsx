import { useState, useEffect } from 'react'
import getLocations from '../../Services/getLocations'
import SearchForm from '../../Components/SearchForm'
import ListOfLocations from '../../Components/ListoOfLocations'
import { SearchCard, Button, ButtonContainer } from './style.js'

export default function Home () {
  const [locations, setLocations] = useState([])
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    if (keyword === '') return
    getLocations({ keyword: keyword })
      .then(locations => {
        setLocations(locations)
      })
  }, [keyword])

  return (
    <SearchCard>
      <ButtonContainer>
        <Button>
          X
        </Button>
      </ButtonContainer>
      <SearchForm setKeyword={setKeyword} />
      <ListOfLocations locations={locations} />
    </SearchCard>
  )
};
