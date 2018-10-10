import React, { Component } from 'react';
import ImageUpload from './components/ImageUpload';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <br/>
        <ImageUpload />
      </div>

    );
  }
}

export default App;
