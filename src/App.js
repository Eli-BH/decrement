import React, {Component} from 'react';
import logo from './logo.svg';
import Decrement from "./Decrement";
import './App.css';

class App extends Component{
  render(){
    return(
      <>
        <Decrement start = {10}/>
      </>
    )
  }
}

export default App;
