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
  background: #555;
  border: 2px solid rgb(98,184,246);
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
    color: rgb(98,184,246);
  }
`
const Text = styled.span`
  &.name{
    font-weight: 600;
  }
  &.region{
    opacity: .8;
  }
  &.country{
    opacity: .6;
  }
`

export {
  LocationList,
  LocationListItem,
  Text
}
