import React, { createContext, useReducer, useEffect } from 'react'
import SearchContextReducer from "../reducers/SearchContextReducer"

export const SearchContext = createContext();

const SearchContext = (props) => {
  const [repos, setRepos] = useState([]);

  

  return (
    <SearchContext.Provider value={{repos, setRepoes}}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default RepoContext