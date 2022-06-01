
import { Wrapper, Title, Date } from './styles'

export default function Location ({ location }) {
  const { locationName, region, date } = location
  return (
    <Wrapper>
      <Title>{locationName}, {region}</Title>
      <Date>{date}</Date>
    </Wrapper>
  )
};
