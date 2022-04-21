import styled from 'styled-components'

const Highlight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 2rem;
`
const Title = styled.span`
  font-size: 1rem;
`
const Stat = styled.span`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 600;
  & span{
    font-size: 2rem;
    font-weight: 400;
  }
`
const InfoItem = styled.div`
  background-color: #1d2039;
  overflow: hidden;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`
export {
  Highlight,
  Info,
  InfoItem,
  Title,
  Stat
}
