import React, { Component } from 'react';
import { withData } from './DataProvider';
import "./App.css"

class App extends Component {
  constructor(){
    super()
    this.state={
      toggle: false
    }
  }
  componentDidMount() {
    this.props.getURL()
  }
  handleToggle = () => {

  }
  handleClick = (e) =>{
    e.preventDefault()
    this.props.getURL()
    this.setState({
      toggle: true
    })
  }
  render() {

    return (
      <div>
          <h1 style={{textAlign:"center", fontSize: 50, margin: 0, marginBottom: 20}}><span style={{color:"red"}}>Worst</span> Insults</h1>
          {this.state.toggle === false ? 
            <button style={{display:"block", margin:"auto", zoom: 2, backgroundColor:"red", border:"red solid", borderRadius:5, color: "white"}} onClick={this.handleClick}>DO NOT PRESS</button>
            :
            <>
            <button style={{display:"block", margin:"auto", zoom: 2, backgroundColor:"red", border:"red solid", borderRadius:5, color: "white"}} onClick={this.handleClick}>DO NOT PRESS</button>
            <h1 style={{textAlign:"center", padding: "0px 10px"}}>{this.props.url}</h1>
            </>
          }
      </div>
    );
  }
}

export default withData(App);