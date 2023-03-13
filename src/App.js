import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Particle from './components/Particles/Particles';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import Clarifai from 'clarifai';

//process.nextTick = setImmediate;

const app = new Clarifai.App({
  apiKey: 'b4f74c7cfa714ef1bc048820c65660ee'
 });


  

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:'',
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box})
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
        .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))

          // console.log('hi');
          // console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        .catch(err =>console.log(err))
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
