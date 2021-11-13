import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import RepoSearch from '../RepoSearch';
// import RepoSearchByOwner from '../RepoSearchByOwner';

function LandingPage() {
  return (
    <div className="landing-page">
    <RepoSearch />
    {/* <RepoSearchByOwner /> */}
    <RepoContainer />
    </div>
  )
}

export default LandingPage
