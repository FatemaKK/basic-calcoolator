import React from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Result from './components/Result';

class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      currentNumber: '',
      operation: '',
    }
  }

  handleNumber = (event) => {
    let number = this.state.currentNumber; 
        number += event.target.name;
        this.setState({currentNumber: number})
  }

  allClear = () => {
    this.setState({currentNumber: ''})
  }

  handleInteger = () => {
    let number = this.state.currentNumber;
    this.setState({currentNumber: Number(number * -1)})
  }

  render() {
    return (
      <div className="App">
        <div className="calculator">
            <Result currentNumber={this.state.currentNumber || '0'} />
            <Buttons 
              handleNumber={this.handleNumber}
              allClear={this.allClear} 
              handleInteger={this.handleInteger}
              />
        </div>
      </div>
    );
  }
}
       
export default App;

