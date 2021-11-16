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
  }, [setFavoriteRepos])


  const repoCards = favoriteRepos.map((result, key) => { 
    return <SavedRepoCard
          key={key}
          id={result.id}
          name={result.name}
          owner={result.owner.login} 
          language={result.language}
          openIssues={result.open_issues} />
  })

  return (
    <div className="tracked-repos">
      <h2>Tracked Repos</h2>
      <div className="repo-container">
        {favoriteRepos.length < 1 ? <p>There are no tracked repos</p> : repoCards}
        </div>
    </div>
  )
}

export default SavedRepos
