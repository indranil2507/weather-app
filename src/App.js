import React from 'react';

import './App.css';
import Home from './containers/home/index'
import Header from './components/header/index'
import Hero from './components/hero/index'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      
    </div>
  );
}

export default App;
