import styled from 'styled-components'

const LocationList = styled.ul`
  display: inline-block;
  position: absolute;
  width: 100%;
  z-index: 1;
  padding: 1rem;
  max-height: 500px;
  line-height: 2rem;
  overflow-y: scroll;
  background: rgba(44,121,193,0.25);
  backdrop-filter: blur( 3px );
  -webkit-backdrop-filter: blur( 3px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

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
  padding-left: 1rem;
  &:hover {
    color: #000;
    font-weight: 600;
  }
  
`

export {
  LocationList,
  LocationListItem
}
