
import { Info, InfoItem, Title, Stat } from './style'

export default function TodayDescription ({ infoToday }) {
  const { windSpeed, visibility, precipitation, humidity, max, min, forecast } = infoToday

  return (
    <Info>
      <InfoItem>
        <Stat>
          {Math.round(min)}°
          <Title>Min</Title>
        </Stat>
        <Stat>
          {Math.round(max)}°
          <Title>Max</Title>
        </Stat>
      </InfoItem>
      <InfoItem>
        <Stat>
          {Math.round(visibility)}km
          <Title>Visibility</Title>
        </Stat>
        <Stat>
          {Math.round(precipitation)}mm
          <Title>Precipitation</Title>
        </Stat>
      </InfoItem>
      <InfoItem>
        <Stat>
          {Math.round(windSpeed)}<span>km/h</span>
          <Title>Wind</Title>
        </Stat>
        <Stat>
          {Math.round(humidity)} %
          <Title>Humidity</Title>
        </Stat>
      </InfoItem>
    </Info>
  )
};
