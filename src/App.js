import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuestionScreen from './components/QuestionScreen';
import ScoreScreen from './components/ScoreScreen';
import './App.css';

function App() {
  return (
    <center style = {{marginTop:"20%"}}>
      
    <Router>
      <Routes>
        <Route path="/" element={<QuestionScreen />} />
        <Route path="/score" element={<ScoreScreen />} />
      </Routes>
    </Router>
    </center>
  );
}

export default App;
