import styled from 'styled-components'

const TodayInfo = styled.section`
  background-color: rgba(255,255,255,0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }

`
const Img = styled.img`
  object-fit: cover;
`
const Icon = styled.div`
  width: 128px;
  height: 128px;
`
const Content = styled.div`
  text-align: center;
`
const Temperature = styled.span`
  display: block;
  font-size: 3em;
  font-weight: 300;
`
const State = styled.span`
  font-size: 1em;
  opacity: .75;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`

export {
  TodayInfo,
  Img,
  Icon,
  Content,
  Temperature,
  State,
  Wrapper
}
