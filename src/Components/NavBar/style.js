import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  padding:1rem 0;
 // display: block;
 // 
  //position: relative;
  & span {
    font-size: 2rem;
    width: 100%;
  }
`
const Results = styled.div`
  position: relative;
  width: 25%;
`
export {
  Header,
  Results
}
