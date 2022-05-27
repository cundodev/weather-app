import styled from 'styled-components'

const Info = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid rgba(255,255,255,0.5);
  @media (min-width: 768px) {
    border-top: none;
    border-left:1px solid rgba(255,255,255,0.5);
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
  text-align: center;
  display: flex;
  flex-direction: column;
  gap:1rem;
`
export {
  Info,
  InfoItem,
  Title,
  Stat
}
