import React, { createContext, useState } from 'react'

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [repos, setRepos] = useState([]);

  return (
    <SearchContext.Provider value={{
      repos, 
      setRepos
      }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider