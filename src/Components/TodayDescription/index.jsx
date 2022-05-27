
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
          {Math.round(visibility)}km
          <Title>Visibilidad</Title>
        </Stat>
        <Stat>
          {Math.round(precipitation)}mm
          <Title>Precipitacion</Title>
        </Stat>
      </InfoItem>
      <InfoItem>
        <Stat>
          {Math.round(max)}°
          <Title>Max</Title>
        </Stat>
        <Stat>
          {Math.round(windSpeed)}<span>km/h</span>
          <Title>Viento</Title>
        </Stat>
        <Stat>
          {Math.round(humidity)} %
          <Title>Humedad</Title>
        </Stat>
      </InfoItem>
    </Info>
  )
};
