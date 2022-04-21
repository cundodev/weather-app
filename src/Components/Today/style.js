import styled from 'styled-components'

const TodayInfo = styled.div`
  width: 300px;
  height: 500px;
  background-color: #1d2039;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
`
const Img = styled.img`
  width: 150px;
  height: 150px;
`
const Temperature = styled.span`
  font-size: 5rem;
  display: flex;
  align-items: center;
  & span{
    font-size: 2rem;
    opacity: .7;
  }
`

const State = styled.span`
  font-size: 1rem;
  opacity: .7;
`

export {
  TodayInfo,
  Img,
  Temperature,
  State
}
