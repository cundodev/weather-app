import { useState, createContext } from 'react'

const Context = createContext({})

export function LocationContextProvider ({ children }) {
  const [locationID, setLocationID] = useState('')

  return (
    <Context.Provider value={{ locationID, setLocationID }}>
      {children}
    </Context.Provider>
  )
};

export default Context
