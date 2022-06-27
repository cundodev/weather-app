
import { Info, InfoItem, Title, Stat, Icon } from './style'

export default function TodayDescription ({ infoToday }) {
  const { windSpeed, visibility, changeOfRain, humidity, max, min } = infoToday

  return (
    <Info>
      <InfoItem>
        <Stat title='Min Temperature' color='#9bbcff'>
          <span>{Math.round(min)}°</span>
        </Stat>
        <Stat title='Max Temperature' color='#ff3300'>
          <span>{Math.round(max)}°</span>
        </Stat>
      </InfoItem>
      <InfoItem>
        <Stat title='Visibility'>
          <Icon src='../img/visibility.svg' />
          <Title>
            {Math.round(visibility)} km
          </Title>
        </Stat>
        <Stat title='Change of Rain'>
          <Icon src='../img/rain.svg' />
          <Title>
            {Math.round(changeOfRain)} %
          </Title>
        </Stat>
      </InfoItem>
      <InfoItem>
        <Stat title='Wind'>
          <Icon src='../img/air.svg' />
          <Title>
            {Math.round(windSpeed)}km/h
          </Title>
        </Stat>
        <Stat title='Humidity'>
          <Icon src='../img/humidity.svg' />
          <Title> {Math.round(humidity)} %</Title>
        </Stat>
      </InfoItem>
    </Info>
  )
};
