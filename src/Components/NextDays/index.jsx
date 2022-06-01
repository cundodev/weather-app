// import moment from 'moment'
import { Next5Days, Title, Days, Row, Day, Icon, Img, Text, Item } from './styles'
export default function NextDays ({ nextDays }) {
  return (
    <Next5Days>
      <Title>Next Days</Title>
      <Days>
        {
        nextDays.map(day => {
          return (
            <Row key={day.date}>
              <Day>
                {day.date}
              </Day>

              <Icon>
                <Img src={day.img} />
              </Icon>
              <Item>
                {Math.round(day.min)}°
                <Text>Min</Text>
              </Item>
              <Item>
                {Math.round(day.max)}°
                <Text>Max</Text>
              </Item>
            </Row>
          )
        })
      }
      </Days>
    </Next5Days>
  )
};

/**
 *
              <Item>
                {Math.round(day.humidity)} %
                <Name>Humidity</Name>
              </Item>
              <Item>
                <div>{Math.round(day.wind_speed)} <span>mph</span></div>
                <Name>Wind</Name>
              </Item>
 */
