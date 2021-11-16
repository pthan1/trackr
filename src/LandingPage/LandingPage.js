import React from 'react';
import RepoSearch from '../RepoSearch/RepoSearch';
import RepoContainer from '../RepoContainer/RepoContainer'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h2>Welcome to trackr!</h2>
      <p>Search for a repo and add it to your list to track!</p>
     <RepoSearch />
      <RepoContainer />
    </div>
  )
}

export default LandingPage
