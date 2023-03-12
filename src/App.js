import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Particle from './components/Particles/Particles';
import Clarifai from 'clarifai';

process.nextTick = setImmediate;

const app = new Clarifai.App({
  apiKey: 'b4f74c7cfa714ef1bc048820c65660ee'
 });

 ClarifaiApp.models.predict(Clarifai.GENERAL_MODEL, "https://samples.clarifai.com/metro-north.jpg").then(
      function(response) {
        // do something with response
        console.log(response);
      },
      function(err) {
        console.log(err);
        // there was an error
      }
    );
  

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:'',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');

  }

  render() {
    return (
      <div className="App">
        <Particle className='particle'/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        {/*<FaceRecognition /> */}
      </div>
    );
  }
}
export default App;
