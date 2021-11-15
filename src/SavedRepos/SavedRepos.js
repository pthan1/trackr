import React, { useContext, useEffect } from 'react'
import './SavedRepos.css'
import SavedRepoCard from '../SavedRepoCard/SavedRepoCard'
import { SearchContext } from '../context/SearchContext'
import { getFavoriteRepos } from '../apiCalls'

const SavedRepos = () => {
  const { favoriteRepos, setFavoriteRepos } = useContext(SearchContext)

  useEffect(() => {
    getFavoriteRepos()
    .then(data => setFavoriteRepos(data))
  }, [favoriteRepos])


  const repoCards = favoriteRepos.map((result) => { 
    return <SavedRepoCard
          id={result.id}
          name={result.name}
          owner={result.owner.login} 
          language={result.language}
          openIssues={result.open_issues} />
  })

  return (
<div className="repo-container">
      {repoCards}
    </div>
  )
}

export default SavedRepos
