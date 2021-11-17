import React from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Result from './components/Result';

class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      currentNumber: '0',
      operation: '',
      previousNumber: '',
    }
  }
  
  handleNumber = (event) => {
    let number = this.state.currentNumber + event.target.name
    this.setState({currentNumber: Number(number)})
  }
  
  allClear = () => {
    this.setState({currentNumber: '0'})
  }
  
  handleInteger = () => {
    let number = this.state.currentNumber;
    this.setState({currentNumber: number * -1})
  }
  
  '+' = (a, b) => a + b;
  '-' = (a, b) => a - b;
  'x' = (a, b) => a * b;
  '÷' = (a, b) => a / b;

  applyMethod = (method) => {
    this.setState({
      currentNumber: '',
      operation: method,
      previousNumber: this.state.currentNumber,
    })
  }

  calculate = () => {
    let result = this[this.state.operation](this.state.currentNumber, this.state.previousNumber);
    this.setState({currentNumber: result})
  }

  render() {
    return (
      <div className="App">
        <div className="calculator">
            <Result currentNumber={this.state.currentNumber} 
            operation={this.state.operation}
            />
            <Buttons 
              handleNumber={this.handleNumber}
              allClear={this.allClear} 
              handleInteger={this.handleInteger}
              applyMethod={this.applyMethod}
              calculate={this.calculate}
              />
        </div>
      </div>
    );
  }
}
       
export default App;

