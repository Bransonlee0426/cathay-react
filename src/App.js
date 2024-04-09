import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar';
import QuestionsPage from './components/QuestionsPage/QuestionsPage';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes>
    </div>
  );
}

export default App;
