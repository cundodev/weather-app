
import { Highlight, Info, InfoItem, Title, Stat } from './style'

export default function TodayHighlight ({ infoToday }) {
  return (
    <Highlight>
      <h4>Today's Highlight</h4>
      <Info>
        <InfoItem>
          <Title>
            Wind
          </Title>
          <Stat>
            {Math.round(infoToday.wind_speed)}<span>mph</span>
          </Stat>
        </InfoItem>
        <InfoItem>
          <Title>
            Humidity
          </Title>
          <Stat>
            {Math.round(infoToday.humidity)}<span>mph</span>
          </Stat>
        </InfoItem>
        <InfoItem>
          <Title>
            Visibility
          </Title>
          <Stat>
            {Math.round(infoToday.visibility)}<span>mph</span>
          </Stat>
        </InfoItem>
        <InfoItem>
          <Title>
            Air Pressure
          </Title>
          <Stat>
            {Math.round(infoToday.air_pressure)}<span>mph</span>
          </Stat>
        </InfoItem>
      </Info>
    </Highlight>
  )
};
