import { useState } from 'react'
import SearchForm from '../../Components/SearchForm'
import Locations from '../../Components/Locations'
import { Card, Button, ButtonContainer } from './style.js'
import useLocations from '../../Hooks/useLocations'

export default function SearchCard () {
  const [keyword, setKeyword] = useState('')
  const [show, setShow] = useState(true)
  const { locations } = useLocations({ keyword })
  const handleClick = () => {
    setShow(!show)
  }
  return (
    <Card className={show && 'show'}>
      <ButtonContainer>
        <Button onClick={handleClick}>
          X
        </Button>
      </ButtonContainer>
      <SearchForm setKeyword={setKeyword} />
      <Locations locations={locations} />
    </Card>
  )
};
