import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import RepoSearch from '../RepoSearch/RepoSearch';
import RepoContainer from '../RepoContainer/RepoContainer'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h2>Landing Page</h2>
     <RepoSearch />
      <RepoContainer />
    </div>
  )
}

export default LandingPage
