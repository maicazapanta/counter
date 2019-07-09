import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button/Button';

class App extends React.Component {
  constructor(props){
    super();
    this.state= {
      count:0
    }
  }
  
  incrementCounter= () => {
    this.setState({
      count:this.state.count+1
    })
  }
  
  decrementCounter= () => {
    this.setState({
      count:this.state.count-1
    })
  }
  
  render() {
    let { count } =this.state
    return (
      <div>
        <h2>Count: { count } </h2>
        <Button
          title = { "+" }
          task = { this.incrementCounter }
        />
        <Button
          title = { "-" }
          task = { this.decrementCounter }
        />
       </div>
    );
  }
  
  }

export default App;
