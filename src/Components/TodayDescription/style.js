import styled from 'styled-components'

const Info = styled.div`
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 1rem;
  border-top: 1px solid rgb(98,184,246);;
  @media (min-width: 768px) {
    border-top: none;
    border-left: 1px solid rgb(98,184,246);
    grid-template-columns: repeat(4,1fr);
  }
`
const Title = styled.span`
  opacity: .7;
  font-size: 1rem;
  white-space: nowrap;
`
const Stat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  & span {
    font-weight: 600;
    color: ${(props) => props.color};
  }
    
`
const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  @media (min-width: 768px) {
    justify-content: space-around;
  }
`
const Icon = styled.img`
  width: 24px;
  height: 24px;
`

export {
  Info,
  InfoItem,
  Title,
  Stat,
  Icon
}
