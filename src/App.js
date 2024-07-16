import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Home from './components/Home';
import Question from './components/Question';
import Result from './components/Result';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Question" element={<Question />} />
      <Route path="/Result" element={<Result />} />
    </Routes>
  );
}

export default App;
