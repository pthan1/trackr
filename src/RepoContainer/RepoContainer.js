import React, {useContext} from 'react';
import { SearchContext } from '../context/SearchContext';
import RepoCard from '../RepoCard/RepoCard'


const RepoContainer = () => {
  const { repos } = useContext(SearchContext)

  const repoCards = repos.map((result) => { 
    return <RepoCard
          repoName={result.name}
          RepoOwner={result.owner.login} 
          techLanguage={result.language}
          openIssues={result.open_issues} />
  })

  return (
    <div className="repo-container">
      {repoCards}
    </div>
  )
}

export default RepoContainer
