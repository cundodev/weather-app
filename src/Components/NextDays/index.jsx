import moment from 'moment'
import { Next5Days, Title, Days, Row, Day, Date, Icon, Img, Item, Name } from './styles'
export default function NextDays ({ nextDays }) {
  return (
    <Next5Days>
      <Title>Next Days</Title>
      <Days>
        {
        nextDays.map(day => {
          return (
            <Row key={day.id}>
              <Day>
                {moment(day.applicable_date).format('dddd')}
                <Date>{moment(day.applicable_date).format('DD/MM')}</Date>
              </Day>
              <Icon>
                <Img src='#' />
              </Icon>
              <Item>
                {Math.round(day.min_temp)}°
                <Name>Low</Name>
              </Item>
              <Item>
                {Math.round(day.max_temp)}°
                <Name>High</Name>
              </Item>
              <Item>
                {Math.round(day.humidity)} %
                <Name>Humidity</Name>
              </Item>
              <Item>
                <div>{Math.round(day.wind_speed)} <span>mph</span></div>
                <Name>Wind</Name>
              </Item>
            </Row>
          )
        })
      }

      </Days>
    </Next5Days>
  )
};
