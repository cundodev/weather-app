import { LocationList, LocationListItem } from './style'
export default function ListOfLocations ({ locations }) {
  return (
    <LocationList>
      {
        locations.map(({ title, woeid }) => {
          return (
            <LocationListItem key={woeid}>
              <span>{title}</span>
            </LocationListItem>
          )
        })
      }
    </LocationList>
  )
};
