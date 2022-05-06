import styled from 'styled-components'

const FormSearch = styled.form`
  width: 100%;
`

const Imput = styled.input`
  margin: 0;
  width: 100%;
  padding: .75rem;
  border: 1px solid #666;
  background: rgba( 255, 255, 255, 0.25 );
  backdrop-filter: blur( 3px );
  -webkit-backdrop-filter: blur( 3px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  &:focus{
    outline: inherit;
    border-color: #fff;
  }
`

export {
  Imput,
  FormSearch
}
