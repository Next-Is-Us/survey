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
import { useEffect } from 'react';
import PmProfileImg from './image/pmProfilep.png';
import designerProfileImg from './image/designerProfile.jpeg';
import backProfileK from './image/backProfileK.jpeg';
import backProfileL from './image/backProfileL.jpeg';
import frontProfileL from './image/frontProfileL.png';
import frontProfileP from './image/frontProfileP.png';
import Frame from './image/mainIcon.svg';

function preloadImages() {
  const images = [
    PmProfileImg,
    designerProfileImg,
    backProfileK,
    backProfileL,
    frontProfileL,
    frontProfileP,
    Frame,
  ];
  images.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
}

function App() {
  useEffect(() => {
    preloadImages();
  }, []);

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
