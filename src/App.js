import React, { Component } from 'react'
import './App.css';

class App extends Component{

constructor(){
 super();

 this.setState ={
  firstName: 'Joseph'
 }
}
 componentWillMount = () =>{
  this.setState({
    firstName: 'alex'

  });
  console
 }
 
componentDidMount = () =>{
  console.log('Component Mount')
}

render(){
 return(
  <React.Fragment>
  
  </React.Fragment>
 )
}
}

export default App;
