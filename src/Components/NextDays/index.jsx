import { useState } from 'react'
import { Next5Days, Title, Days, Row, Day, Icon, Img, Text, Item } from './styles'
export default function NextDays ({ nextDays }) {
  const [show, setShow] = useState(false)

  const handleClick = (e) => {
    setShow(!show)
    e.currentTarget.setAttribute('show', show)
  }
  return (
    <Next5Days>
      <Title>Next Days</Title>
      <Days>
        {
        nextDays.map(day => {
          return (
            <Row key={day.date} onClick={handleClick}>
              <Day>
                {day.date}
              </Day>
              <Icon>
                <Img src={day.img} />
              </Icon>
              <Item>
                <Text color='#9bbcff'>{Math.round(day.min)}°</Text>
              </Item>
              <Item>
                <Text color='#ff3300'>{Math.round(day.max)}°</Text>
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
