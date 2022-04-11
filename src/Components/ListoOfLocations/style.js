import styled from 'styled-components'

const LocationList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 3rem;
  overflow-y: scroll;

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
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border: 1px solid transparent;
  margin-right: 1rem;
  padding-inline: 1rem;

  &:hover {
    border: 1px solid #666;
  }
  
`

export {
  LocationList,
  LocationListItem
}
