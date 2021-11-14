import React from 'react'

const RepoCard = ({ repoName, repoOwner, techLanguage, openIssues}) => {
  return (
    <div className="repo-card">
      <div className="left-container">
        <h3>{repoName}</h3>
        <p>{repoOwner}</p>
        </div>
      <div className="right-container">
        <p>{techLanguage}</p>
        <p>{openIssues}</p>
      </div>
    </div>
  )
}

export default RepoCard
