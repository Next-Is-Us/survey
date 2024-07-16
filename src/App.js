import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Home from './components/Home';
import Question from './components/Question';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Question" element={<Question />} />
    </Routes>
  );
}

export default App;
