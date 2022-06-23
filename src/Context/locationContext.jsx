import { useState, createContext } from 'react'

const Context = createContext({})

export function LocationContextProvider ({ children }) {
  const [locationURL, setLocationURL] = useState(null)
  const [keyword, setKeyword] = useState('')

  return (
    <Context.Provider value={{ keyword, setKeyword, locationURL, setLocationURL }}>
      {children}
    </Context.Provider>
  )
};

export default Context
