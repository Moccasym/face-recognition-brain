import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Particle from './components/Particles/Particles';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import Clarifai from 'clarifai';

process.nextTick = setImmediate;

const app = new Clarifai.App({
  apiKey: 'b4f74c7cfa714ef1bc048820c65660ee'
 });


  

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:'',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
      .then(
      function(response) {
        console.log('hi');
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
      }
    );

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
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}
export default App;
