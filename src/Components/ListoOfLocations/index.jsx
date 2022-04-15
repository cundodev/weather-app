import { LocationList, LocationListItem } from './style'
export default function ListOfLocations ({ locations, setLocationID }) {
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
