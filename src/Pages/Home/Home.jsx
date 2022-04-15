import { useState } from 'react'
import SearchForm from '../../Components/SearchForm'
import ListOfLocations from '../../Components/ListoOfLocations'
import { SearchCard, Button, ButtonContainer } from './style.js'
import useLocations from '../../Hooks/useLocations'
import useSingleLocation from '../../Hooks/useSingleLocation'

export default function Home () {
  const [keyword, setKeyword] = useState(false)
  const [locationID, setLocationID] = useState(false)

  const { locations } = useLocations({ keyword })
  const { location } = useSingleLocation({ locationID })
  console.log(location)
  return (
    <SearchCard>
      <ButtonContainer>
        <Button>
          X
        </Button>
      </ButtonContainer>
      <SearchForm setKeyword={setKeyword} />
      <ListOfLocations locations={locations} setLocationID={setLocationID} />
    </SearchCard>
  )
};
