import styled from 'styled-components'

const LocationList = styled.ul`
  position: absolute;
  display: block;
  margin: 3rem 0 0 0;
  width: 100%;
  padding: 1rem;
  max-height: 500px;
  line-height: 2rem;
  overflow-y: scroll;
  background: rgba(98,184,246,.5);
  backdrop-filter: blur( 10px );
  -webkit-backdrop-filter: blur( 10px );
  border-radius: 10px;
  z-index: 999;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
      width:4px;
  }

  &::-webkit-scrollbar-button:increment,&::-webkit-scrollbar-button {
      display: none;
  } 

  &::-webkit-scrollbar:horizontal {
      height: 10px;
  }

  &::-webkit-scrollbar-thumb {
      background-color: #333;
      border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
      border-radius: 10px;  
  }
`
const LocationListItem = styled.li`
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border: 1px solid transparent;
  &:hover {
    color: #000;
    font-weight: 600;
  }
  
`

export {
  LocationList,
  LocationListItem
}
