import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Users from './Users'
  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        name: "sanjay"
      }
    }
    componentDidMount() {
      console.warn("componentDidMount")
    }
    render() {
      console.warn("render")
    return(
      <div className="App" >
      <h1>component {this.state.name}</h1>
      <button onClick={()=>this.setState({name:"kushwaha"})}>update</button>
      
      </div>
    );
    }
  }











  // const [name,setName]=React.useState("a")

  //   return (

  //     <div className='App'>
  //       <h1>rander in props</h1>
  //       <Users name={name}/>
  //       <button onClick={()=>setName('sanjay')}>update</button>
  //     </div>
  //   );

  


export default App;
