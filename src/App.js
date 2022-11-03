import React from 'react';
import {BrowserRouter , Route , Switch}from 'react-router-dom';
import './App.css';
import Home from './Home';
import Search from './Search';
function App() {
  return (
    <div>
    
     <BrowserRouter>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/search/:imgname" exact component={Search}/>

     </Switch>
     </BrowserRouter> 
    </div>
  );
}

export default App;
