import styled from 'styled-components'

const Info = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-left: 1px solid rgba(255,255,255,0.5);
`
const Title = styled.span`
  font-size: .8em;
  opacity: .7;
`
const Stat = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.1em;
`
const InfoItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1em;
`
export {
  Info,
  InfoItem,
  Title,
  Stat
}
