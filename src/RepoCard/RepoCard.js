import React, { useContext } from 'react'
import './RepoCard.css'
import { addRepo } from '../apiCalls'
import { SearchContext } from '../context/SearchContext'

const RepoCard = ({ id, name, owner, language, openIssues }) => {

  const { favoriteRepos, setFavoriteRepos } = useContext(SearchContext);

  
  const handleClick = (e) => {
    e.preventDefault();

    const newRepo = {
      id: id,
      name: name,
      owner: owner,
      language: language,
      openIssues: openIssues
    }
    addRepo(newRepo)
      .then(data => {
        setFavoriteRepos(data)
      }); 
}

const displayButton = () => {
  if (favoriteRepos.some(repo => repo.id === id)) {
    return <p>Tracking this repo!</p>
  } else {
    return <button type="button" className="add-repo-btn" onClick={(e) => {handleClick(e)}}>Track this Repo</button>
  }
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
