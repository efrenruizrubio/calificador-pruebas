import React, { useState } from 'react'

const Context = React.createContext({})

export const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState([])
  return (
    <Context.Provider value={{ results, setResults }}>
      {children}
    </Context.Provider>
  )
}

export default Context
