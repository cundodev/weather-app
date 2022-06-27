import styled from 'styled-components'

const Hours = styled.ul`
  width: 100%;
  overflow-x: auto;
  display: flex;
  gap: 1rem;
  padding: 0;
  
  ::-webkit-scrollbar{
    height: 7px;
    width: 5px;
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:horizontal {
    background: rgb(98,184,246);
    border-radius: 10px;
  }
`
const Hour = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255,255,255,0.1);
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
`

const Time = styled.span`
  opacity: .7;
`

const Icon = styled.div`
  width: 64px;
  height: 64px;
`
const Img = styled.img`
  width: 100%;
  object-fit: cover;
`
const Temp = styled.span`
`
export {
  Hour,
  Time,
  Img,
  Temp,
  Icon,
  Hours
}
