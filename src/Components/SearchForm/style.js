import styled from 'styled-components'

const FormSearch = styled.div`
  padding-block: 1.5rem;
  width: 100%;
`

const Imput = styled.input`
  background-color: inherit;
  color: #fff;
  width: 100%;
  padding: .75rem;
  border-radius: 10px;
  border: 1px solid #666;

  &:focus{
    outline: inherit;
  }
`

export {
  Imput,
  FormSearch
}
