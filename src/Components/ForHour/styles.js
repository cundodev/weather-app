import styled from 'styled-components'

const Conteiner = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  
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

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
`
const Hours = styled.ul`
  display: flex;
  gap: 1rem;
  padding: 0;
`
const Hour = styled.li`
  display: ${(props) => props.cHour ? 'none' : 'flex'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255,255,255,0.1);
  border-radius: 80px;
  padding-block: 1.5rem;
  margin-bottom: 1rem;
  border: 2px solid rgb(98,184,246); 

  &.nextDay{
    border: 2px solid transparent; 
    opacity: 0.5;
  }
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
  Conteiner,
  Hour,
  Time,
  Img,
  Temp,
  Icon,
  Hours,
  Wrapper
}
