import React from 'react'
import './SavedRepos.css'
import SavedRepoCard from '../SavedRepoCard'

const SavedRepos = () => {
  const { favoriteRepos } = useContext(SearchContext)

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
