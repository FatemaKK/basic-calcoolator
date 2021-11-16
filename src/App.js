import React from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Result from './components/Result';

class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      currentNumber: '',
      operation: ''
    }
  }

  handleNumber = (event) => {
    event.preventDefault()
    let number = this.state.currentNumber; 
        number += event.target.name;
        this.setState({currentNumber: number})
  }

  allClear = (event) => {
    this.setState({currentNumber: ''})
  }

  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div>
            <Result currentNumber={this.state.currentNumber || '0'} />
          </div>
          <div>
            <Buttons 
              handleNumber={this.handleNumber}
              allClear={this.allClear} />
          </div>
        </div>
      </div>
    );
  }
}




       
export default App;

