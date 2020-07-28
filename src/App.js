import React from 'react';

import './App.css';
import Home from './containers/home/index'
import Header from './components/header/index'
import Hero from './components/hero/index'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Aboutus from './containers/AboutUs/index';
import Posts from './containers/Posts'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Switch>
      <Route  path="/" component={Home} />
      <Route path="/about" component={Aboutus} />
    </Switch>
       
       
       

        
      </div>
    </Router>
    
  );
}

export default App;
