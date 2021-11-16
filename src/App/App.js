import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import SearchContextProvider from '../context/SearchContext';
import SavedRepos from '../SavedRepos/SavedRepos';

function App() {
  return (
    <div className="App">
    <SearchContextProvider>
    <Header />
    <div className="navbar-main-body">
    <Sidebar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/repos" element={<SavedRepos />} />
      </Routes>
    </div>
      </SearchContextProvider>
    </div>
  );
}

export default App;
