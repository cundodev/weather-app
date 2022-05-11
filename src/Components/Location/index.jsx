import moment from 'moment'
import { Wrapper, Title, Date } from './styles'

export default function Location ({ location }) {
  const today = location.consolidated_weather[0]
  const date = moment(today.applicable_date).format('dddd D MMMM')
  return (
    <Wrapper>
      <Title>{location.title}, {location.parent.title}</Title>
      <Date>{date}</Date>
    </Wrapper>
  )
};
