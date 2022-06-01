import styled from 'styled-components'

const Info = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid rgba(255,255,255,0.5);
  @media (min-width: 768px) {
    border-top: none;
    border-left:1px solid rgba(255,255,255,0.5);
    flex-direction: row;
    justify-content: space-around;
  }
`
const Title = styled.span`
  display: block;
  opacity: .7;
  font-size: .7em;
`
const Stat = styled.div`
  font-size: 1em;
  font-weight: 600;
`
const InfoItem = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`
export {
  Info,
  InfoItem,
  Title,
  Stat
}
