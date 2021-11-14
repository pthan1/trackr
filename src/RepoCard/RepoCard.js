import React from 'react'
import './RepoCard.css'

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
        {/* <button className="add-repo-to-list" onClick={() => {handleClick()}}>Add to List</button> */}
      </div>
    </div>
  )
}

export default RepoCard
