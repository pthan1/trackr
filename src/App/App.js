import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Issues from '../Issues/Issues';
import UserIssues from '../UserIssues/UserIssues';

function App() {
  return (
    <div className="App">
    <Header />
    <Sidebar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/assigned" element={<UserIssues />} />
      </Routes>
    </div>
  );
}

export default App;
