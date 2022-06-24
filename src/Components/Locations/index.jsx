import { LocationList, LocationListItem, Text } from './style'

export default function Locations ({ locations, handleOnClick }) {
  return (
    <LocationList>
      {
        locations.map(({ name, region, country, id, url }) => {
          return (
            <LocationListItem key={id} onClick={() => handleOnClick(url)}>
              <a>
                <Text className='name'>
                  {name}
                </Text>
                <Text className='region'>
                  {region && ', '}{region}
                </Text>
                <Text className='country'>
                  , {country}
                </Text>

              </a>
            </LocationListItem>
          )
        })
      }
    </LocationList>
  )
};
