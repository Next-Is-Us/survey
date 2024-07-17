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
import Devlopers from './components/Developers';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Question" element={<Question />} />
      <Route path="/Result" element={<Result />} />
      <Route path="/Developers" element={<Devlopers />} />
    </Routes>
  );
}

export default App;
