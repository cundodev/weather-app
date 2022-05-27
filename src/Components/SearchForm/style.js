import styled from 'styled-components'

const FormSearch = styled.form`
  width: 100%;
  padding-inline: .75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid #666;
  background: rgba( 255, 255, 255, 0.25 );
  backdrop-filter: blur( 3px );
  -webkit-backdrop-filter: blur( 3px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  &:focus-within{
    outline: #fff;
    border-color: #fff;
  }
`

const Imput = styled.input`
  width: 100%;
  height: 100%;
  padding: .75rem;
  background: transparent;
  border: none;
  outline: none;
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
  Icon
}
