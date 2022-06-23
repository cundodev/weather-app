import { useContext } from 'react'
import LocationContext from '../../Context/locationContext'
import { LocationList, LocationListItem } from './style'
export default function Locations ({ locations }) {
  const { setLocationURL } = useContext(LocationContext)

  const handleOnClick = (url) => {
    setLocationURL(url)
  }

  return (
    <LocationList>
      {
        locations.map(({ name, id, url }) => {
          return (
            <LocationListItem key={id} onClick={() => handleOnClick(url)}>
              <a>{name}</a>
            </LocationListItem>
          )
        })
      }
    </LocationList>
  )
};
