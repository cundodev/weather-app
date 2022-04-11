import styled from 'styled-components'

const SearchCard = styled.div`
  background-color: #1d2039;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  //transform: translateX(-100%);
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
const Button = styled.button`
  color: #fff;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  outline: none;
`

export {
  SearchCard,
  Button,
  ButtonContainer
}
