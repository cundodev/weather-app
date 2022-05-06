import { useState, createContext } from 'react'

const Context = createContext({})

export function LocationContextProvider ({ children }) {
  const [locationID, setLocationID] = useState('')
  const [keyword, setKeyword] = useState('')

  return (
    <Context.Provider value={{ keyword, setKeyword, locationID, setLocationID }}>
      {children}
    </Context.Provider>
  )
};

export default Context
