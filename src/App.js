import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
//import Particle from './components/Particles/Particles';
import Particles from "react-tsparticles";




function App() {
  
  return (
    <div className="App">
      <Particles id="tsparticles" url="http://foo.bar/particles.json"  />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition /> */}
    </div>
  );
}

export default App;
