import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import { products } from './data';
import ProductList from "./components/ProductList";

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  render() {
    return (
   // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
   // </div>

      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
          <h3> &nbsp; Shopping Cart <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></h3>
        </nav>

        <ProductList />

      </div>


    );
  }
}

export default App;
