import { EventAvailableTwoTone } from '@material-ui/icons'
import React, { useContext } from 'react'
import './RepoCard.css'
import { addRepo, removeRepo } from '../apiCalls'
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
    .then(data => setFavoriteRepos(data)); 
}

const displayButton = () => {
  if (favoriteRepos.some(repo => repo.id === id)) {
    return <p>Added to Favorites List</p>
  } else {
    return <button type="button" onClick={(e) => {handleClick(e)}}>Add Repo to List</button>
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
