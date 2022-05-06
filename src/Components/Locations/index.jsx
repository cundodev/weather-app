import { useContext } from 'react'
import LocationContext from '../../Context/locationContext'
import { LocationList, LocationListItem } from './style'
export default function Locations ({ locations }) {
  const { setLocationID } = useContext(LocationContext)
  const handleOnClick = (woeid) => {
    setLocationID(woeid)
  }

  return (

    <LocationList>
      {
          locations.map(({ title, woeid }) => {
            return (
              <LocationListItem key={woeid} onClick={() => handleOnClick(woeid)}>
                <a>{title}</a>
              </LocationListItem>
            )
          })
        }
    </LocationList>

  )
};
