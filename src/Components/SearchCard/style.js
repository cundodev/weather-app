import styled from 'styled-components'

const Card = styled.div`
  background-color: #1d2039;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  transform: translateX(-100%);
  &.show{
    transform: translateX(0%);
  }
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: sticky;
`
const Button = styled.button`
  padding: 0;
  color: #fff;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`

export {
  Card,
  Button,
  ButtonContainer
}
