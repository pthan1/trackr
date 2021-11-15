import React, { createContext, useState } from 'react'

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [repos, setRepos] = useState([]);
  const [favoriteRepos, setFavoriteRepos] = useState([])

  return (
    <SearchContext.Provider value={{
      repos, 
      setRepos,
      favoriteRepos,
      setFavoriteRepos
      }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider