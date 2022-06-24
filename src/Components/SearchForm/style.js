import styled from 'styled-components'

const Results = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`
const FormSearch = styled.div`
  width: 100%;
  padding-inline: .75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:5px;
  background: rgba( 255, 255, 255, 0.25 );
  backdrop-filter: blur( 3px );
  -webkit-backdrop-filter: blur( 3px );
  border-radius: 10px;
  border: 2px solid transparent;
  &:focus-within{
    border: 2px solid rgb(98,184,246);
  }
`

const Imput = styled.input`
  color: #fff;
  width: 100%;
  padding: .75rem;
  background: transparent;
  border: none;
  outline: none;
  ::placeholder{
    color: #fff;
    opacity: .7;
  }
`

const Button = styled.div`
  background: transparent;
  border: none;
  width: 24px;
  height: 24px;
`
const Icon = styled.img`
  cursor: pointer;
  opacity: .7;
`

export {
  Imput,
  FormSearch,
  Button,
  Icon,
  Results
}
