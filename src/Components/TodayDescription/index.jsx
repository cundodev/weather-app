
import { Info, InfoItem, Title, Stat } from './style'

export default function TodayDescription ({ infoToday }) {
  return (
    <Info>
      <InfoItem>
        <div>
          <Title>
            High
          </Title>
          <Stat>
            {Math.round(infoToday.max_temp)}°
          </Stat>
        </div>
        <div>
          <Title>
            Low
          </Title>
          <Stat>
            {Math.round(infoToday.min_temp)}°
          </Stat>
        </div>
      </InfoItem>
      <InfoItem>
        <div>
          <Title>
            Wind
          </Title>
          <Stat>
            {Math.round(infoToday.wind_speed)}<span>mph</span>
          </Stat>
        </div>
        <div>
          <Title>
            Humidity
          </Title>
          <Stat>
            {Math.round(infoToday.humidity)} %
          </Stat>
        </div>
      </InfoItem>
      <InfoItem>
        <div>
          <Title>
            Visibility
          </Title>
          <Stat>
            {Math.round(infoToday.visibility)}
          </Stat>
        </div>
        <div>
          <Title>
            Air Pressure
          </Title>
          <Stat>
            {Math.round(infoToday.air_pressure)}
          </Stat>
        </div>
      </InfoItem>
    </Info>
  )
};
