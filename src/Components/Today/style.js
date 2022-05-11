import styled from 'styled-components'

const TodayInfo = styled.section`
  width: 100%;
  height: 10em;
  background-color: rgba(255,255,255,0.1);
  border-radius: 10px;
  display: flex;
  padding: 1em;
  
`
const Img = styled.img`
  width: 5em;
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding-inline: 1em;
`

const Temperature = styled.span`
  font-size: 3em;
  font-weight: 300;
`
const State = styled.span`
  font-size: .75em;
  opacity: .7;
`

export {
  TodayInfo,
  Img,
  Icon,
  Content,
  Temperature,
  State
}
