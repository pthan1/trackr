import React from 'react'
import './SavedRepos.css'

const SavedRepos = () => {
  const { favoriteRepos } = useContext(SearchContext)

  const repoCards = favoriteRepos.map((result) => { 
    return <RepoCard
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
