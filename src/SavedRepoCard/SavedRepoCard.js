import React, { useContext } from 'react'
import './SavedRepoCard.css'
import { removeRepo } from '../apiCalls'
import { SearchContext } from '../context/SearchContext'

const RepoCard = ({ id, name, owner, language, openIssues }) => {

  const { favoriteRepos, setFavoriteRepos } = useContext(SearchContext);

  
  const handleClick = (e) => {
    e.preventDefault();
    removeRepo(id)
    .then(data => {
      setFavoriteRepos(data)}
      ); 
}

const displayButton = () => {
  return <button type="button" className="untrack-repo-btn" onClick={(e) => {handleClick(e)}}>Untrack this Repo</button>
  }


  return (
    <div className="repo-card">
      <div className="left-container">
        <h3>Repo Name: {name}</h3>
        <p>Owner: {owner}</p>
        </div>
      <div className="right-container">
        <p>Languge: {language}</p>
        <p>Open Issues: {openIssues}</p>
        {displayButton()}
      </div>
    </div>
  )
}

export default RepoCard
