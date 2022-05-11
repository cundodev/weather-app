import styled from 'styled-components'

const Next5Days = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`
const Title = styled.span`
  font-size: 1.2em;
  margin-bottom: .75em;
`
const Days = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255,255,255,0.1);
  border-radius: 10px;
  padding: 1em;
`
const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 4em;
`
const Date = styled.span`
  opacity: 0.7;
`
const Icon = styled.div`
  width: 64px;
  height: 64px;
`
const Img = styled.img`
  width: 100%;
  object-fit: cover;
`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Name = styled.span`
`

export {
  Next5Days,
  Title,
  Days,
  Row,
  Day,
  Date,
  Icon,
  Img,
  Item,
  Name
}
